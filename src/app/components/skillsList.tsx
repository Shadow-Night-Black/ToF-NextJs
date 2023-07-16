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
import { Update } from "../state/updateLens";

export const SkillsList: FC<{
  character: Player;
  setting: Setting;
  update: Update<Player>
}> = ({ character, setting, update }) => {
  const cols = ["Name", ...setting.attributes.map((a) => a.name), "Total"];

  return (
    <Grid.Container>
      <Table aria-label="Skills Table">
        <Table.Header>
          {cols.map((col) => (
            <Table.Column align="center" key={col}>
              {col}
            </Table.Column>
          ))}
        </Table.Header>
        <Table.Body>
          {character.skills.map((skill) => (
            <Table.Row key={skill.name}>
              {[
                <Table.Cell key={skill.name}>
                  <UpdateInput
                    text={skill.name}
                    update={(name) =>
                      update(updatePlayerSkill(character)({ ...skill, name }))
                    }
                  />
                </Table.Cell>,
                ...setting.attributes.map((attribute) => {
                  const attributeLens = getAttributeValueFromSkill(
                    attribute.name
                  );
                  return (
                    <Table.Cell key={attribute.name}>
                      <Input
                        min={0}
                        aria-label={`${skill.name} ${attribute.name}`}
                        css={{ textAlign: "center" }}
                        onChange={(e) => {
                          update(
                            updatePlayerSkill(character)(
                              attributeLens.set(parseInt(e.target.value))(skill)
                            )
                          );
                        }}
                        initialValue={attributeLens.get(skill)?.toString()}
                        contentRight
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
          ))}
        </Table.Body>
      </Table>
      <Grid.Container direction="row-reverse">
        <Grid>
          <Button
            onPress={() =>
              update(
                updatePlayerSkills(character)(
                  addSkill(character.skills)(createSkill())
                )
              )
            }
          >
            Add new Skill
          </Button>
        </Grid>
      </Grid.Container>
    </Grid.Container>
  );
};
