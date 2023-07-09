import { Attribute } from "@/model/world/attributes";

const Power: Attribute = {
    name: "Power",
    order: 1,
    physical: true,
    mental: false,
};

const Finesse: Attribute = {
    name: "Finesse",
    order: 2,
    physical: true,
    mental: false,
};

const Resilience: Attribute = {
    name: "Resilience",
    order: 3,
    physical: true,
    mental: false,
};


const Intellect: Attribute = {
    name: "Intellect",
    order: 4,
    physical: false,
    mental: true,
};

const Wits: Attribute = {
    name: "Wits",
    order: 5,
    physical: false,
    mental: true,
};

const Presence: Attribute = {
    name: "Presence",
    order: 6,
    physical: false,
    mental: true,
};

const AttributeList = [Power, Finesse, Resilience, Intellect, Wits, Presence];

module.exports = {Power, Finesse, Resilience, Intellect, Wits, Presence, AttributeList};