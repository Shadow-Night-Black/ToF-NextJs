import { Table } from "@nextui-org/react/";
import { Player } from "@/model/character/player";
import { FC } from "react";
import { Setting } from "@/model/world/setting";

export const SkillsList: FC<{ character: Player; setting: Setting }> = ({
  character,
  setting,
}) => (
  <Table>
    <Table.Header>
      <Table.Column>Name</Table.Column>
      {setting.attributes.map((a) => (
        <Table.Column key={a.name}>{a.name}</Table.Column>
      ))}
    </Table.Header>
    <Table.Body>
      {character.skills.map((s) => (
        <Table.Row key={s.name}>
          <Table.Cell>{s.name}</Table.Cell>
          {setting.attributes.map((a) => (
            <Table.Cell key={a.name}>
              {s.attributeMap.find((map) => map[0] == a.name)?.[1]}
            </Table.Cell>
          ))}
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
);
