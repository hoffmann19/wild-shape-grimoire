const DEFAULT_BEASTS = [
  {
    id: "cat",
    name: "Cat",
    size: "Tiny",
    type: "Beast",
    cr: 0,
    ac: 12,
    hp: 2,
    speeds: { land: 40, climb: 30 },
    stats: { str: 3, dex: 15, con: 10, int: 3, wis: 12, cha: 7 },
    skills: { stealth: 4, perception: 3 },
    senses: "Passive Perception 13, Keen Smell",
    traits: [
      {
        name: "Keen Smell",
        description: "The cat has advantage on Wisdom (Perception) checks that rely on smell."
      }
    ],
    actions: [
      {
        name: "Claws",
        type: "Melee Weapon Attack",
        attackBonus: 0,
        damage: "1",
        damageType: "slashing",
        description: "Reach 5 ft., one target. Hit: 1 slashing damage."
      }
    ],
    isCustom: false
  },
  {
    id: "frog",
    name: "Frog",
    size: "Tiny",
    type: "Beast",
    cr: 0,
    ac: 11,
    hp: 1,
    speeds: { land: 20, swim: 20 },
    stats: { str: 1, dex: 13, con: 8, int: 1, wis: 8, cha: 3 },
    skills: { stealth: 3, perception: 1 },
    senses: "Darkvision 30 ft., Passive Perception 11",
    traits: [
      {
        name: "Amphibious",
        description: "The frog can breathe air and water."
      },
      {
        name: "Standing Leap",
        description: "The frog's long jump is up to 10 feet and its high jump is up to 5 feet, with or without a running start."
      }
    ],
    actions: [],
    isCustom: false
  },
  {
    id: "lizard",
    name: "Lizard",
    size: "Tiny",
    type: "Beast",
    cr: 0,
    ac: 10,
    hp: 2,
    speeds: { land: 20, climb: 20 },
    stats: { str: 2, dex: 11, con: 10, int: 1, wis: 8, cha: 3 },
    skills: { stealth: 4 },
    senses: "Darkvision 30 ft., Passive Perception 9",
    traits: [],
    actions: [
      {
        name: "Bite",
        type: "Melee Weapon Attack",
        attackBonus: 0,
        damage: "1",
        damageType: "piercing",
        description: "Reach 5 ft., one target. Hit: 1 piercing damage."
      }
    ],
    isCustom: false
  },
  {
    id: "poisonous_snake",
    name: "Poisonous Snake",
    size: "Tiny",
    type: "Beast",
    cr: 0.125,
    ac: 13,
    hp: 2,
    speeds: { land: 30, swim: 30 },
    stats: { str: 2, dex: 16, con: 11, int: 1, wis: 10, cha: 3 },
    skills: { acrobatics: 4 },
    senses: "Blindsight 10 ft., Passive Perception 10",
    traits: [],
    actions: [
      {
        name: "Bite",
        type: "Melee Weapon Attack",
        attackBonus: 5,
        damage: "1",
        damageType: "piercing",
        description: "Reach 5 ft., one target. Hit: 1 piercing damage, and the target must make a DC 10 Constitution saving throw, taking 5 (2d4) poison damage on a failed save, or half as much damage on a successful one."
      }
    ],
    isCustom: false
  },
  {
    id: "scorpion",
    name: "Scorpion",
    size: "Tiny",
    type: "Beast",
    cr: 0,
    ac: 11,
    hp: 1,
    speeds: { land: 10 },
    stats: { str: 2, dex: 11, con: 8, int: 1, wis: 8, cha: 2 },
    skills: { stealth: 2 },
    senses: "Blindsight 10 ft., Passive Perception 9",
    traits: [],
    actions: [
      {
        name: "Sting",
        type: "Melee Weapon Attack",
        attackBonus: 2,
        damage: "1",
        damageType: "piercing",
        description: "Reach 5 ft., one target. Hit: 1 piercing damage, and the target must make a DC 9 Constitution saving throw, taking 4 (1d4) poison damage on a failed save, or half as much damage on a successful one."
      }
    ],
    isCustom: false
  },
  {
    id: "spider",
    name: "Spider",
    size: "Tiny",
    type: "Beast",
    cr: 0,
    ac: 12,
    hp: 1,
    speeds: { land: 20, climb: 20 },
    stats: { str: 2, dex: 14, con: 8, int: 1, wis: 10, cha: 2 },
    skills: { stealth: 4, perception: 2 },
    senses: "Darkvision 30 ft., Passive Perception 10",
    traits: [
      {
        name: "Spider Climb",
        description: "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
      },
      {
        name: "Web Sense",
        description: "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web."
      },
      {
        name: "Web Walker",
        description: "The spider ignores movement restrictions caused by webbing."
      }
    ],
    actions: [
      {
        name: "Bite",
        type: "Melee Weapon Attack",
        attackBonus: 4,
        damage: "1",
        damageType: "piercing",
        description: "Reach 5 ft., one target. Hit: 1 piercing damage, and the target must make a DC 9 Constitution saving throw, taking 4 (1d4) poison damage on a failed save, or half as much damage on a successful one."
      }
    ],
    isCustom: false
  },
  {
    id: "camel",
    name: "Camel",
    size: "Large",
    type: "Beast",
    cr: 0.125,
    ac: 9,
    hp: 15,
    speeds: { land: 50 },
    stats: { str: 16, dex: 8, con: 14, int: 2, wis: 8, cha: 5 },
    skills: {},
    senses: "Passive Perception 9",
    traits: [],
    actions: [
      {
        name: "Bite",
        type: "Melee Weapon Attack",
        attackBonus: 5,
        damage: "1d6+3",
        damageType: "bludgeoning",
        description: "Reach 5 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage."
      },
      {
        name: "Spit",
        type: "Ranged Weapon Attack",
        attackBonus: 2,
        damage: "1d4",
        damageType: "bludgeoning",
        description: "Range 10/30 ft., one target. Hit: 2 (1d4) bludgeoning damage."
      }
    ],
    isCustom: false
  },
  {
    id: "hyena",
    name: "Hyena",
    size: "Medium",
    type: "Beast",
    cr: 0,
    ac: 11,
    hp: 5,
    speeds: { land: 50 },
    stats: { str: 11, dex: 13, con: 12, int: 2, wis: 12, cha: 5 },
    skills: { perception: 3 },
    senses: "Passive Perception 13",
    traits: [
      {
        name: "Pack Tactics",
        description: "The hyena has advantage on an attack roll against a creature if at least one of the hyena's allies is within 5 feet of the creature and the ally isn't incapacitated."
      }
    ],
    actions: [
      {
        name: "Bite",
        type: "Melee Weapon Attack",
        attackBonus: 2,
        damage: "1d4",
        damageType: "piercing",
        description: "Reach 5 ft., one target. Hit: 2 (1d4) piercing damage."
      }
    ],
    isCustom: false
  },
  {
    id: "jackal",
    name: "Jackal",
    size: "Small",
    type: "Beast",
    cr: 0,
    ac: 12,
    hp: 3,
    speeds: { land: 40 },
    stats: { str: 8, dex: 15, con: 11, int: 3, wis: 12, cha: 6 },
    skills: { perception: 3, stealth: 4 },
    senses: "Passive Perception 13",
    traits: [
      {
        name: "Keen Hearing and Smell",
        description: "The jackal has advantage on Wisdom (Perception) checks that rely on hearing or smell."
      },
      {
        name: "Pack Tactics",
        description: "The jackal has advantage on an attack roll against a creature if at least one of the jackal's allies is within 5 feet of the creature and the ally isn't incapacitated."
      }
    ],
    actions: [
      {
        name: "Bite",
        type: "Melee Weapon Attack",
        attackBonus: 1,
        damage: "1d4-1",
        damageType: "piercing",
        description: "Reach 5 ft., one target. Hit: 1 piercing damage."
      }
    ],
    isCustom: false
  },
  {
    id: "wolf",
    name: "Wolf",
    size: "Medium",
    type: "Beast",
    cr: 0.25,
    ac: 13,
    hp: 11,
    speeds: { land: 40 },
    stats: { str: 12, dex: 15, con: 12, int: 3, wis: 12, cha: 6 },
    skills: { stealth: 4, perception: 3 },
    senses: "Passive Perception 13, Keen Hearing and Smell",
    traits: [
      {
        name: "Keen Hearing and Smell",
        description: "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell."
      },
      {
        name: "Pack Tactics",
        description: "The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 feet of the creature and the ally isn't incapacitated."
      }
    ],
    actions: [
      {
        name: "Bite",
        type: "Melee Weapon Attack",
        attackBonus: 4,
        damage: "2d4+2",
        damageType: "piercing",
        description: "Reach 5 ft., one target. Hit: 7 (2d4 + 2) piercing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone."
      }
    ],
    isCustom: false
  },
  {
    id: "giant_badger",
    name: "Giant Badger",
    size: "Medium",
    type: "Beast",
    cr: 0.25,
    ac: 10,
    hp: 13,
    speeds: { land: 30, burrow: 10 },
    stats: { str: 13, dex: 10, con: 15, int: 2, wis: 12, cha: 5 },
    skills: { perception: 3 },
    senses: "Darkvision 30 ft., Passive Perception 11",
    traits: [
      {
        name: "Keen Smell",
        description: "The badger has advantage on Wisdom (Perception) checks that rely on smell."
      }
    ],
    actions: [
      {
        name: "Multiattack",
        type: "Special Action",
        attackBonus: null,
        damage: null,
        description: "The badger makes two attacks: one with its bite and one with its claws."
      },
      {
        name: "Bite",
        type: "Melee Weapon Attack",
        attackBonus: 3,
        damage: "1d6+1",
        damageType: "piercing",
        description: "Reach 5 ft., one target. Hit: 4 (1d6 + 1) piercing damage."
      },
      {
        name: "Claws",
        type: "Melee Weapon Attack",
        attackBonus: 3,
        damage: "2d4+1",
        damageType: "slashing",
        description: "Reach 5 ft., one target. Hit: 6 (2d4 + 1) slashing damage."
      }
    ],
    isCustom: false
  },
  {
    id: "giant_wolf_spider",
    name: "Giant Wolf Spider",
    size: "Medium",
    type: "Beast",
    cr: 0.25,
    ac: 13,
    hp: 11,
    speeds: { land: 40, climb: 40 },
    stats: { str: 12, dex: 16, con: 13, int: 3, wis: 12, cha: 4 },
    skills: { stealth: 7, perception: 3 },
    senses: "Blindsight 10 ft., Darkvision 60 ft., Passive Perception 13",
    traits: [
      {
        name: "Spider Climb",
        description: "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
      },
      {
        name: "Web Sense",
        description: "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web."
      },
      {
        name: "Web Walker",
        description: "The spider ignores movement restrictions caused by webbing."
      }
    ],
    actions: [
      {
        name: "Bite",
        type: "Melee Weapon Attack",
        attackBonus: 3,
        damage: "1d6+1",
        damageType: "piercing",
        description: "Reach 5 ft., one target. Hit: 4 (1d6 + 1) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 7 (2d4) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after recovering hit points, and is paralyzed while poisoned in this way."
      }
    ],
    isCustom: false
  },
  {
    id: "constrictor_snake",
    name: "Constrictor Snake",
    size: "Large",
    type: "Beast",
    cr: 0.25,
    ac: 12,
    hp: 13,
    speeds: { land: 30, swim: 30 },
    stats: { str: 15, dex: 14, con: 12, int: 1, wis: 10, cha: 3 },
    skills: { stealth: 4, perception: 2 },
    senses: "Blindsight 10 ft., Passive Perception 10",
    traits: [],
    actions: [
      {
        name: "Bite",
        type: "Melee Weapon Attack",
        attackBonus: 4,
        damage: "1d6+2",
        damageType: "piercing",
        description: "Reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage."
      },
      {
        name: "Constrict",
        type: "Melee Weapon Attack",
        attackBonus: 4,
        damage: "1d8+2",
        damageType: "bludgeoning",
        description: "Reach 5 ft., one creature. Hit: 6 (1d8 + 2) bludgeoning damage, and the target is grappled (escape DC 12). Until this grapple ends, the creature is restrained, and the snake can't constrict another target."
      }
    ],
    isCustom: false
  },
  {
    id: "giant_frog",
    name: "Giant Frog",
    size: "Medium",
    type: "Beast",
    cr: 0.25,
    ac: 11,
    hp: 18,
    speeds: { land: 30, swim: 30 },
    stats: { str: 12, dex: 13, con: 11, int: 2, wis: 10, cha: 3 },
    skills: { stealth: 3, perception: 2 },
    senses: "Darkvision 30 ft., Passive Perception 12",
    traits: [
      {
        name: "Amphibious",
        description: "The frog can breathe air and water."
      },
      {
        name: "Standing Leap",
        description: "The frog's long jump is up to 20 feet and its high jump is up to 10 feet, with or without a running start."
      }
    ],
    actions: [
      {
        name: "Bite",
        type: "Melee Weapon Attack",
        attackBonus: 3,
        damage: "1d6+1",
        damageType: "piercing",
        description: "Reach 5 ft., one target. Hit: 4 (1d6 + 1) piercing damage, and the target is grappled (escape DC 11). Until this grapple ends, the target is restrained, and the frog can't bite another target."
      },
      {
        name: "Swallow",
        type: "Special Action",
        attackBonus: null,
        damage: null,
        description: "The frog makes one bite attack against a Small or smaller target it is grappling. If the attack hits, the target is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the frog, and it takes 5 (2d4) acid damage at the start of each of the frog's turns. The frog can have only one target swallowed at a time. If the frog dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 5 feet of movement, exiting prone."
      }
    ],
    isCustom: false
  },
  {
    id: "ape",
    name: "Ape",
    size: "Medium",
    type: "Beast",
    cr: 0.5,
    ac: 12,
    hp: 19,
    speeds: { land: 30, climb: 30 },
    stats: { str: 16, dex: 14, con: 14, int: 6, wis: 12, cha: 7 },
    skills: { athletics: 5, perception: 3 },
    senses: "Passive Perception 13",
    traits: [],
    actions: [
      {
        name: "Multiattack",
        type: "Special Action",
        attackBonus: null,
        damage: null,
        description: "The ape makes two fist attacks."
      },
      {
        name: "Fist",
        type: "Melee Weapon Attack",
        attackBonus: 5,
        damage: "1d6+3",
        damageType: "bludgeoning",
        description: "Reach 5 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage."
      },
      {
        name: "Rock",
        type: "Ranged Weapon Attack",
        attackBonus: 5,
        damage: "1d6+3",
        damageType: "bludgeoning",
        description: "Range 25/50 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage."
      }
    ],
    isCustom: false
  },
  {
    id: "black_bear",
    name: "Black Bear",
    size: "Medium",
    type: "Beast",
    cr: 0.5,
    ac: 11,
    hp: 19,
    speeds: { land: 40, climb: 30 },
    stats: { str: 15, dex: 10, con: 14, int: 2, wis: 12, cha: 7 },
    skills: { perception: 3 },
    senses: "Passive Perception 13, Keen Smell",
    traits: [
      {
        name: "Keen Smell",
        description: "The bear has advantage on Wisdom (Perception) checks that rely on smell."
      }
    ],
    actions: [
      {
        name: "Multiattack",
        type: "Special Action",
        attackBonus: null,
        damage: null,
        description: "The bear makes two attacks: one with its bite and one with its claws."
      },
      {
        name: "Bite",
        type: "Melee Weapon Attack",
        attackBonus: 4,
        damage: "1d6+2",
        damageType: "piercing",
        description: "Reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage."
      },
      {
        name: "Claws",
        type: "Melee Weapon Attack",
        attackBonus: 4,
        damage: "2d4+2",
        damageType: "slashing",
        description: "Reach 5 ft., one target. Hit: 7 (2d4 + 2) slashing damage."
      }
    ],
    isCustom: false
  },
  {
    id: "crocodile",
    name: "Crocodile",
    size: "Large",
    type: "Beast",
    cr: 0.5,
    ac: 12,
    hp: 19,
    speeds: { land: 20, swim: 30 },
    stats: { str: 15, dex: 10, con: 13, int: 2, wis: 10, cha: 5 },
    skills: { stealth: 2 },
    senses: "Passive Perception 10",
    traits: [
      {
        name: "Hold Breath",
        description: "The crocodile can hold its breath for 15 minutes."
      }
    ],
    actions: [
      {
        name: "Bite",
        type: "Melee Weapon Attack",
        attackBonus: 4,
        damage: "1d10+2",
        damageType: "piercing",
        description: "Reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage, and the target is grappled (escape DC 12). Until this grapple ends, the target is restrained, and the crocodile can't bite another target."
      }
    ],
    isCustom: false
  },
  {
    id: "brown_bear",
    name: "Brown Bear",
    size: "Large",
    type: "Beast",
    cr: 1,
    ac: 11,
    hp: 34,
    speeds: { land: 40, climb: 30 },
    stats: { str: 19, dex: 10, con: 16, int: 2, wis: 13, cha: 7 },
    skills: { perception: 3 },
    senses: "Passive Perception 13, Keen Smell",
    traits: [
      {
        name: "Keen Smell",
        description: "The bear has advantage on Wisdom (Perception) checks that rely on smell."
      }
    ],
    actions: [
      {
        name: "Multiattack",
        type: "Special Action",
        attackBonus: null,
        damage: null,
        description: "The bear makes two attacks: one with its bite and one with its claws."
      },
      {
        name: "Bite",
        type: "Melee Weapon Attack",
        attackBonus: 6,
        damage: "1d8+4",
        damageType: "piercing",
        description: "Reach 5 ft., one target. Hit: 8 (1d8 + 4) piercing damage."
      },
      {
        name: "Claws",
        type: "Melee Weapon Attack",
        attackBonus: 6,
        damage: "2d6+4",
        damageType: "slashing",
        description: "Reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage."
      }
    ],
    isCustom: false
  },
  {
    id: "dire_wolf",
    name: "Dire Wolf",
    size: "Large",
    type: "Beast",
    cr: 1,
    ac: 14,
    hp: 37,
    speeds: { land: 50 },
    stats: { str: 17, dex: 15, con: 15, int: 3, wis: 12, cha: 7 },
    skills: { stealth: 4, perception: 3 },
    senses: "Passive Perception 13, Keen Hearing and Smell",
    traits: [
      {
        name: "Keen Hearing and Smell",
        description: "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell."
      },
      {
        name: "Pack Tactics",
        description: "The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 feet of the creature and the ally isn't incapacitated."
      }
    ],
    actions: [
      {
        name: "Bite",
        type: "Melee Weapon Attack",
        attackBonus: 5,
        damage: "2d6+3",
        damageType: "piercing",
        description: "Reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone."
      }
    ],
    isCustom: false
  },
  {
    id: "giant_spider",
    name: "Giant Spider",
    size: "Large",
    type: "Beast",
    cr: 1,
    ac: 14,
    hp: 26,
    speeds: { land: 30, climb: 30 },
    stats: { str: 14, dex: 16, con: 12, int: 2, wis: 11, cha: 4 },
    skills: { stealth: 7, perception: 3 },
    senses: "Blindsight 10 ft., Darkvision 60 ft., Passive Perception 13",
    traits: [
      {
        name: "Spider Climb",
        description: "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
      },
      {
        name: "Web Sense",
        description: "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web."
      },
      {
        name: "Web Walker",
        description: "The spider ignores movement restrictions caused by webbing."
      }
    ],
    actions: [
      {
        name: "Bite",
        type: "Melee Weapon Attack",
        attackBonus: 5,
        damage: "1d8+3",
        damageType: "piercing",
        description: "Reach 5 ft., one target. Hit: 7 (1d8 + 3) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 9 (2d8) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after recovering hit points, and is paralyzed while poisoned in this way."
      },
      {
        name: "Web",
        type: "Ranged Weapon Attack",
        attackBonus: 5,
        damage: null,
        description: "Ranged Weapon Attack: +5 to hit, range 30/60 ft., one creature. Hit: The target is restrained by webbing (escape DC 12). As an action, the restrained target can make a DC 12 Strength check, bursting the webbing on a success. The webbing can also be attacked and destroyed (AC 10; hp 5; vulnerability to fire damage; immunity to bludgeoning, poison, and psychic damage)."
      }
    ],
    isCustom: false
  },
  {
    id: "giant_toad",
    name: "Giant Toad",
    size: "Large",
    type: "Beast",
    cr: 1,
    ac: 11,
    hp: 39,
    speeds: { land: 20, swim: 40 },
    stats: { str: 15, dex: 13, con: 13, int: 2, wis: 10, cha: 3 },
    skills: { perception: 2 },
    senses: "Darkvision 30 ft., Passive Perception 12",
    traits: [
      {
        name: "Amphibious",
        description: "The toad can breathe air and water."
      },
      {
        name: "Standing Leap",
        description: "The toad's long jump is up to 20 feet and its high jump is up to 10 feet, with or without a running start."
      }
    ],
    actions: [
      {
        name: "Bite",
        type: "Melee Weapon Attack",
        attackBonus: 4,
        damage: "1d10+2",
        damageType: "piercing",
        description: "Reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage, plus 5 (1d10) poison damage, and the target is grappled (escape DC 13). Until this grapple ends, the target is restrained, and the toad can't bite another target."
      },
      {
        name: "Swallow",
        type: "Special Action",
        attackBonus: null,
        damage: null,
        description: "The toad makes one bite attack against a Medium or smaller target it is grappling. If the attack hits, the target is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the toad, and it takes 10 (3d6) acid damage at the start of each of the toad's turns. The toad can have only one target swallowed at a time. If the toad dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 5 feet of movement, exiting prone."
      }
    ],
    isCustom: false
  },
  {
    id: "giant_eagle",
    name: "Giant Eagle",
    size: "Large",
    type: "Beast",
    cr: 1,
    ac: 13,
    hp: 26,
    speeds: { land: 10, fly: 80 },
    stats: { str: 16, dex: 17, con: 13, int: 8, wis: 14, cha: 10 },
    skills: { perception: 4 },
    senses: "Passive Perception 14, Keen Sight",
    traits: [
      {
        name: "Keen Sight",
        description: "The eagle has advantage on Wisdom (Perception) checks that rely on sight."
      }
    ],
    actions: [
      {
        name: "Multiattack",
        type: "Special Action",
        attackBonus: null,
        damage: null,
        description: "The eagle makes two attacks: one with its beak and one with its talons."
      },
      {
        name: "Beak",
        type: "Melee Weapon Attack",
        attackBonus: 5,
        damage: "1d6+3",
        damageType: "piercing",
        description: "Reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage."
      },
      {
        name: "Talons",
        type: "Melee Weapon Attack",
        attackBonus: 5,
        damage: "2d6+3",
        damageType: "slashing",
        description: "Reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage."
      }
    ],
    isCustom: false
  },
  {
    id: "giant_elk",
    name: "Giant Elk",
    size: "Huge",
    type: "Beast",
    cr: 2,
    ac: 14,
    hp: 42,
    speeds: { land: 60 },
    stats: { str: 19, dex: 16, con: 14, int: 7, wis: 14, cha: 10 },
    skills: { perception: 4 },
    senses: "Passive Perception 14",
    traits: [
      {
        name: "Charge",
        description: "If the elk moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone."
      }
    ],
    actions: [
      {
        name: "Ram",
        type: "Melee Weapon Attack",
        attackBonus: 6,
        damage: "2d6+4",
        damageType: "bludgeoning",
        description: "Reach 10 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage."
      },
      {
        name: "Hooves",
        type: "Melee Weapon Attack",
        attackBonus: 6,
        damage: "4d8+4",
        damageType: "bludgeoning",
        description: "Reach 9 ft., one prone creature. Hit: 22 (4d8 + 4) bludgeoning damage."
      }
    ],
    isCustom: false
  },
  {
    id: "polar_bear",
    name: "Polar Bear",
    size: "Large",
    type: "Beast",
    cr: 2,
    ac: 12,
    hp: 42,
    speeds: { land: 40, swim: 30 },
    stats: { str: 20, dex: 10, con: 16, int: 2, wis: 13, cha: 7 },
    skills: { perception: 3 },
    senses: "Passive Perception 13, Keen Smell",
    traits: [
      {
        name: "Keen Smell",
        description: "The bear has advantage on Wisdom (Perception) checks that rely on smell."
      }
    ],
    actions: [
      {
        name: "Multiattack",
        type: "Special Action",
        attackBonus: null,
        damage: null,
        description: "The bear makes two attacks: one with its bite and one with its claws."
      },
      {
        name: "Bite",
        type: "Melee Weapon Attack",
        attackBonus: 7,
        damage: "1d8+5",
        damageType: "piercing",
        description: "Reach 5 ft., one target. Hit: 9 (1d8 + 5) piercing damage."
      },
      {
        name: "Claws",
        type: "Melee Weapon Attack",
        attackBonus: 7,
        damage: "2d6+5",
        damageType: "slashing",
        description: "Reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage."
      }
    ],
    isCustom: false
  },
  {
    id: "saber_toothed_tiger",
    name: "Saber-toothed Tiger",
    size: "Large",
    type: "Beast",
    cr: 2,
    ac: 12,
    hp: 52,
    speeds: { land: 40 },
    stats: { str: 18, dex: 14, con: 15, int: 3, wis: 12, cha: 8 },
    skills: { stealth: 6, perception: 3 },
    senses: "Passive Perception 13, Keen Smell",
    traits: [
      {
        name: "Keen Smell",
        description: "The tiger has advantage on Wisdom (Perception) checks that rely on smell."
      },
      {
        name: "Pounce",
        description: "If the tiger moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the tiger can make one bite attack against it as a bonus action."
      }
    ],
    actions: [
      {
        name: "Bite",
        type: "Melee Weapon Attack",
        attackBonus: 6,
        damage: "1d10+4",
        damageType: "piercing",
        description: "Reach 5 ft., one target. Hit: 9 (1d10 + 4) piercing damage."
      },
      {
        name: "Claws",
        type: "Melee Weapon Attack",
        attackBonus: 6,
        damage: "2d6+4",
        damageType: "slashing",
        description: "Reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage."
      }
    ],
    isCustom: false
  },
  {
    id: "giant_scorpion",
    name: "Giant Scorpion",
    size: "Large",
    type: "Beast",
    cr: 3,
    ac: 15,
    hp: 52,
    speeds: { land: 40 },
    stats: { str: 15, dex: 13, con: 15, int: 1, wis: 9, cha: 3 },
    skills: { stealth: 5 },
    senses: "Blindsight 60 ft., Passive Perception 9",
    traits: [],
    actions: [
      {
        name: "Multiattack",
        type: "Special Action",
        attackBonus: null,
        damage: null,
        description: "The scorpion makes three attacks: two with its claws and one with its sting."
      },
      {
        name: "Claw",
        type: "Melee Weapon Attack",
        attackBonus: 4,
        damage: "1d8+2",
        damageType: "bludgeoning",
        description: "Reach 5 ft., one target. Hit: 6 (1d8 + 2) bludgeoning damage, and the target is grappled (escape DC 12). The scorpion has two claws, each of which can grapple only one target."
      },
      {
        name: "Sting",
        type: "Melee Weapon Attack",
        attackBonus: 4,
        damage: "1d10+2",
        damageType: "piercing",
        description: "Reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage, and the target must make a DC 12 Constitution saving throw, taking 22 (4d10) poison damage on a failed save, or half as much damage on a successful one."
      }
    ],
    isCustom: false
  }
];
