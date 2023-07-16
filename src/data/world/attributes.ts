import { Attribute } from "@/model/world/attributes";

export const Power: Attribute = {
    name: "Power",
    order: 1,
    physical: true,
    mental: false,
};

export const Finesse: Attribute = {
    name: "Finesse",
    order: 2,
    physical: true,
    mental: false,
};

export const Resilience: Attribute = {
    name: "Resilience",
    order: 3,
    physical: true,
    mental: false,
};


export const Intellect: Attribute = {
    name: "Intellect",
    order: 4,
    physical: false,
    mental: true,
};

export const Wits: Attribute = {
    name: "Wits",
    order: 5,
    physical: false,
    mental: true,
};

export const Presence: Attribute = {
    name: "Presence",
    order: 6,
    physical: false,
    mental: true,
};

export const AttributeList = [Power, Finesse, Resilience, Intellect, Wits, Presence];