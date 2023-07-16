import { Table, Input, Grid, Button } from "@nextui-org/react/";
import {
  Player,
  addSkill,
  updatePlayerSkill,
  updatePlayerSkills,
} from "@/model/character/player";
import { FC } from "react";
import { Setting } from "@/model/world/setting";
import {
  createSkill,
  getAttributeValueFromSkill,
  getTotalAttributeValueFromSkill,
} from "@/model/character/skill";
import { UpdateInput } from "./input/UpdateInput";
import { Update, lensToUpdate } from "../state/updateLens";

export const SkillsList: FC<{
  character: Player;
  setting: Setting;
  update: Update<Player>;
}> = ({ character, setting, update }) => {
  const cols = ["Name", ...setting.attributes.map((a) => a.name), "Total"];

  return (
    <>
      <Table aria-label="Skills Table" bordered={false} lined>
        <Table.Header>
          {cols.map((col) => (
            <Table.Column
              align="center"
              key={col}
              width="1fr"
              css={{ minWidth: "fit-content" }}
            >
              {col}
            </Table.Column>
          ))}
        </Table.Header>
        <Table.Body>
          {character.skills.map((skill) => {
            const updateSkill = lensToUpdate(
              updatePlayerSkill(skill),
              update
            );
            return (
              <Table.Row key={skill.id}>
                {[
                  <Table.Cell key={skill.id}>
                    <UpdateInput
                      text={skill.name}
                      update={(name) => updateSkill({ ...skill, name })}
                    />
                  </Table.Cell>,
                  ...setting.attributes.map((attribute) => {
                    const attributeLens = getAttributeValueFromSkill(
                      attribute.name
                    );
                    const updateAttribute = lensToUpdate(
                      attributeLens,
                      updateSkill
                    );
                    return (
                      <Table.Cell key={attribute.name}>
                        <Input
                          min={0}
                          aria-label={`${skill.name} ${attribute.name}`}
                          css={{ textAlign: "center" }}
                          onChange={(e) => {
                            updateAttribute(parseInt(e.target.value));
                          }}
                          initialValue={attributeLens.get(skill)?.toString()}
                          type="number"
                        ></Input>
                      </Table.Cell>
                    );
                  }),
                  <Table.Cell key="total">
                    {getTotalAttributeValueFromSkill.get(skill)}
                  </Table.Cell>,
                ]}
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
      <Grid.Container direction="row-reverse">
        <Grid>
          <Button
            onPress={() =>
              update(
                updatePlayerSkills.set(
                  addSkill(character.skills)(createSkill())
                )
              )
            }
          >
            Add new Skill
          </Button>
        </Grid>
      </Grid.Container>
    </>
  );
};
