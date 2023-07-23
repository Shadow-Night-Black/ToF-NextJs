import { Lens, Getter } from "monocle-ts";
import * as z from "zod";

export type SkillAttributeMapping = Record<string, number>;

export const Skill = z.object({
  name: z.string(),
  attributeMap: z.record(z.number()),
  id: z.string().uuid(),
});

export type Skill = z.infer<typeof Skill>;

export const createSkill = (skill = { name: "New Skill" }): Skill => ({
  name: skill.name,
  attributeMap: {},
  id: crypto.randomUUID(),
});

export const getSkillAttributesFromSkill =
  Lens.fromProp<Skill>()("attributeMap");
export const getNameFromSkill = Lens.fromProp<Skill>()("name");

const getValueFromRecord = (name: string) =>
  new Lens<Record<string, number>, number>(
    (a) => a[name],
    (value) => (mapping) => {
      const { [name]: oldValue, ...rest } = mapping;
      if (!value) return { ...rest };
      return {
        ...rest,
        [name]: value,
      };
    }
  );

export const getTotalAttributeValueFromSkill = new Getter<Skill, number>(
  (skill) =>
    Object.values(skill.attributeMap).reduce((total, value) => total + value, 0)
);

export const getAttributeValueFromSkill = (name: string) =>
  getSkillAttributesFromSkill.compose(getValueFromRecord(name));
