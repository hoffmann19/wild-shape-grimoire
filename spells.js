const DEFAULT_SPELLS = [
  // CANTRIPS
  {
    name: "Druidcraft",
    level: 0,
    school: "Transmutation",
    time: "1 Action",
    range: "30 feet",
    duration: "Instantaneous",
    components: "V, S",
    description: "Whispering to the spirits of nature, you create one of the following effects within range:\n• You create a tiny, harmless sensory effect that predicts what the weather will be at your location for the next 24 hours.\n• You instantly make a flower blossom, a seed pod open, or a leaf bud bloom.\n• You create an instantaneous, harmless sensory effect, such as falling leaves, a puff of wind, the sound of a small animal, or the faint odor of skunk.\n• You instantly light or snuff out a candle, a torch, or a small campfire."
  },
  {
    name: "Guidance",
    level: 0,
    school: "Divination",
    time: "1 Action",
    range: "Touch",
    duration: "Concentration, up to 1 minute",
    components: "V, S",
    description: "You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one ability check of its choice. It can roll the d4 before or after making the ability check. The spell then ends."
  },
  {
    name: "Produce Flame",
    level: 0,
    school: "Conjuration",
    time: "1 Action",
    range: "Self",
    duration: "10 minutes",
    components: "V, S",
    description: "A flickering flame appears in your hand. The flame remains there for the duration and harms neither you nor your equipment. It sheds bright light in a 10-foot radius and dim light for an additional 10 feet. The spell ends if you dismiss it as an action or if you cast it again.\n\nYou can also attack with the flame, although doing so ends the spell. When you cast this spell, or as an action on a later turn, you can hurl the flame at a creature within 30 feet of you. Make a ranged spell attack. On a hit, the target takes 1d8 fire damage. Damage scales to 2d8 at 5th level, 3d8 at 11th level, and 4d8 at 17th level."
  },
  {
    name: "Shillelagh",
    level: 0,
    school: "Transmutation",
    time: "1 Bonus Action",
    range: "Touch",
    duration: "1 minute",
    components: "V, S, M (mistletoe, a shamrock leaf, and a club or quarterstaff)",
    description: "The wood of a club or quarterstaff you are holding is imbued with nature's power. For the duration, you can use your spellcasting ability instead of Strength for the attack and damage rolls of melee attacks using that weapon, and the weapon's damage die becomes a d8. The weapon also becomes magical, if it isn't already. The spell ends if you cast it again or if you let go of the weapon."
  },
  {
    name: "Thorn Whip",
    level: 0,
    school: "Transmutation",
    time: "1 Action",
    range: "30 feet",
    duration: "Instantaneous",
    components: "V, S, M (a stem of a thorny plant)",
    description: "You create a long, vine-like whip covered in thorns that lashes out at your command toward a creature in range. Make a melee spell attack against the target. If the attack hits, the creature takes 1d6 piercing damage, and if the creature is Large or smaller, you pull the creature up to 10 feet closer to you. Damage scales to 2d6 at 5th level, 3d6 at 11th level, and 4d6 at 17th level."
  },

  // 1ST LEVEL
  {
    name: "Animal Friendship",
    level: 1,
    school: "Enchantment",
    time: "1 Action",
    range: "30 feet",
    duration: "24 hours",
    components: "V, S, M (a morsel of food)",
    description: "This spell lets you convince a beast that you mean it no harm. Choose a beast that you can see within range. It must see and hear you. If the beast's Intelligence is 4 or higher, the spell fails. Otherwise, the beast must succeed on a Wisdom saving throw or be charmed by you for the spell's duration. If you or one of your companions harms the target, the spell ends."
  },
  {
    name: "Cure Wounds",
    level: 1,
    school: "Evocation",
    time: "1 Action",
    range: "Touch",
    duration: "Instantaneous",
    components: "V, S",
    description: "A creature you touch regains a number of hit points equal to 1d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs. (2024 PHB: restores 2d8 + mod, scaling by 2d8 per level upcasted)."
  },
  {
    name: "Detect Magic",
    level: 1,
    school: "Divination",
    time: "1 Action",
    range: "Self",
    duration: "Concentration, up to 10 minutes",
    components: "V, S",
    description: "For the duration, you sense the presence of magic within 30 feet of you. If you sense magic in this way, you can use your action to see a faint aura around any visible creature or object in the area that bears magic, and you learn its school of magic, if any. The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt."
  },
  {
    name: "Entangle",
    level: 1,
    school: "Conjuration",
    time: "1 Action",
    range: "90 feet",
    duration: "Concentration, up to 1 minute",
    components: "V, S",
    description: "Grasping weeds and vines sprout from the ground in a 20-foot square starting from a point within range. For the duration, these plants turn the ground in the area into difficult terrain.\n\nA creature in the area when you cast the spell must succeed on a Strength saving throw or be restrained by the entangling plants until the spell ends. A creature restrained by the plants can use its action to make a Strength check against your spell save DC. On a success, it frees itself."
  },
  {
    name: "Faerie Fire",
    level: 1,
    school: "Evocation",
    time: "1 Action",
    range: "60 feet",
    duration: "Concentration, up to 1 minute",
    components: "V",
    description: "Each object in a 20-foot cube within range is outlined in blue, green, or violet light (your choice). Any creature in the area when the spell is cast is also outlined if it fails a Dexterity saving throw. For the duration, outlined objects and creatures shed dim light in a 10-foot radius.\n\nAny attack roll against an affected creature or object has advantage if the attacker can see it, and the affected creature or object can't benefit from being invisible."
  },
  {
    name: "Goodberry",
    level: 1,
    school: "Transmutation",
    time: "1 Action",
    range: "Touch",
    duration: "Instantaneous",
    components: "V, S, M (a sprig of mistletoe)",
    description: "Up to ten berries appear in your hand and are infused with magic for the duration. A creature can use its action to eat one berry. Eating a berry restores 1 hit point, and the berry provides enough nourishment to sustain a creature for a day. The berries lose their potency if they have not been consumed within 24 hours of the casting of this spell."
  },
  {
    name: "Healing Word",
    level: 1,
    school: "Evocation",
    time: "1 Bonus Action",
    range: "60 feet",
    duration: "Instantaneous",
    components: "V",
    description: "A creature of your choice that you can see within range regains hit points equal to 1d4 + your spellcasting ability modifier. This spell has no effect on undead or constructs. (2024 PHB: restores 2d4 + mod, scaling by 2d4 per level upcasted)."
  },
  {
    name: "Speak with Animals",
    level: 1,
    school: "Divination",
    time: "1 Action",
    range: "Self",
    duration: "10 minutes",
    components: "V, S",
    description: "You gain the ability to comprehend and verbally communicate with beasts for the duration. The knowledge and awareness of many beasts is limited by their intelligence, but at minimum, beasts can give you information about nearby locations and monsters, including whatever they can perceive or have perceived within the past day. You might be able to persuade a beast to perform a small favor for you, at the DM's discretion."
  },
  {
    name: "Thunderwave",
    level: 1,
    school: "Evocation",
    time: "1 Action",
    range: "Self (15-foot cube)",
    duration: "Instantaneous",
    components: "V, S",
    description: "A wave of thunderous force sweeps outward from you. Each creature in a 15-foot cube originating from you must make a Constitution saving throw. On a failed save, a creature takes 2d8 thunder damage and is pushed 10 feet away from you. On a successful save, the creature takes half as much damage and isn't pushed. In addition, unsecured objects that are completely within the area of effect are automatically pushed 10 feet away from you by the spell's effect, and the spell emits a thunderous boom audible out to 300 feet."
  },

  // 2ND LEVEL
  {
    name: "Barkskin",
    level: 2,
    school: "Transmutation",
    time: "1 Action",
    range: "Touch",
    duration: "Concentration, up to 1 hour",
    components: "V, S, M (a handful of oak bark)",
    description: "You touch a willing creature. Until the spell ends, the target's skin has a rough, bark-like appearance, and the target's AC can't be less than 16, regardless of what kind of armor it is wearing.\n\n(2024 PHB Redesign: Target gains Temporary Hit Points equal to 1d6 + your spellcasting modifier at the start of each of its turns while concentrating)."
  },
  {
    name: "Heat Metal",
    level: 2,
    school: "Transmutation",
    time: "1 Action",
    range: "60 feet",
    duration: "Concentration, up to 1 minute",
    components: "V, S, M (a flame and a piece of iron)",
    description: "Choose a manufactured metal object, such as a metal weapon or a suit of heavy or medium metal armor, that you can see within range. You cause the object to glow red-hot. Any creature in physical contact with the object takes 2d8 fire damage when you cast the spell. Until the spell ends, you can use a bonus action on each of your subsequent turns to cause this damage again.\n\nIf a creature is holding or wearing the object and takes the damage from it, the creature must succeed on a Constitution saving throw or drop the object if it can. If it doesn't drop the object, it has disadvantage on attack rolls and ability checks until the start of your next turn."
  },
  {
    name: "Hold Person",
    level: 2,
    school: "Enchantment",
    time: "1 Action",
    range: "60 feet",
    duration: "Concentration, up to 1 minute",
    components: "V, S, M (a small, straight piece of iron)",
    description: "Choose a humanoid that you can see within range. The target must succeed on a Wisdom saving throw or be paralyzed for the duration. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target."
  },
  {
    name: "Lesser Restoration",
    level: 2,
    school: "Abjuration",
    time: "1 Action",
    range: "Touch",
    duration: "Instantaneous",
    components: "V, S",
    description: "You touch a creature and can end either one disease or one condition afflicting it. The condition can be blinded, deafened, paralyzed, or poisoned."
  },
  {
    name: "Moonbeam",
    level: 2,
    school: "Evocation",
    time: "1 Action",
    range: "120 feet",
    duration: "Concentration, up to 1 minute",
    components: "V, S, M (several seeds of moonflower and a piece of opalescent feldspar)",
    description: "A silvery beam of pale light shines down in a 5-foot-radius, 40-foot-high cylinder centered on a point within range. Until the spell ends, dim light fills the cylinder.\n\nWhen a creature enters the spell's area for the first time on a turn or starts its turn there, it is engulfed in ghostly flames that cause searing pain, and it must make a Constitution saving throw. It takes 2d10 radiant damage on a failed save, or half as much damage on a successful one.\n\nA shapechanger makes its saving throw with disadvantage. If it fails, it also instantly reverts to its original form and can't assume a different form until it leaves the spell's light.\n\nOn each of your turns after you cast this spell, you can use an action to move the beam up to 60 feet in any direction."
  },
  {
    name: "Pass without Trace",
    level: 2,
    school: "Abjuration",
    time: "1 Action",
    range: "Self",
    duration: "Concentration, up to 1 hour",
    components: "V, S, M (ashes from a burned leaf of mistletoe and a sprig of spruce)",
    description: "A veil of shadows and silence radiates from you, masking you and your companions from detection. For the duration, each creature you choose within 30 feet of you (including you) has a +10 bonus to Dexterity (Stealth) checks and can't be tracked except by magical means. A creature that receives this bonus leaves no tracks or other traces of its passage."
  },
  {
    name: "Spike Growth",
    level: 2,
    school: "Transmutation",
    time: "1 Action",
    range: "150 feet",
    duration: "Concentration, up to 10 minutes",
    components: "V, S, M (seven sharp thorns or seven small twigs, each sharpened to a point)",
    description: "The ground in a 20-foot radius centered on a point within range twists and sprouts hard thorns and briars. The area becomes difficult terrain for the duration. When a creature moves into or within the area, it takes 2d4 piercing damage for every 5 feet it travels.\n\nThe transformation of the ground is camouflaged to look natural. Any creature that can't see the area at the time the spell is cast must make a Wisdom (Perception) check against your spell save DC to recognize the terrain as hazardous before entering it."
  },

  // 3RD LEVEL
  {
    name: "Call Lightning",
    level: 3,
    school: "Conjuration",
    time: "1 Action",
    range: "120 feet",
    duration: "Concentration, up to 10 minutes",
    components: "V, S",
    description: "A storm cloud appears in the shape of a cylinder that is 10 feet tall with a 60-foot radius, centered on a point you can see 100 feet directly above you. The cloud fails to appear if you can't see it or if there is not enough room for it.\n\nWhen you cast the spell, choose a point you can see under the cloud. A bolt of lightning flashes from the cloud to that point. Each creature within 5 feet of that point must make a Dexterity saving throw. A creature takes 3d10 lightning damage on a failed save, or half as much damage on a successful one. On each of your turns for the duration, you can use your action to call down lightning in this way again, targeting a new point.\n\nIf you are outdoors in stormy conditions when you cast this spell, the damage increases by 1d10."
  },
  {
    name: "Conjure Animals",
    level: 3,
    school: "Conjuration",
    time: "1 Action",
    range: "60 feet",
    duration: "Concentration, up to 1 hour",
    components: "V, S",
    description: "You summon fey spirits that take the form of beasts and appear in unoccupied spaces that you can see within range. Choose one of the following options for what appears:\n• One beast of challenge rating 2 or lower\n• Two beasts of challenge rating 1 or lower\n• Four beasts of challenge rating 1/2 or lower\n• Eight beasts of challenge rating 1/4 or lower\n\nEach beast is also considered fey, and it disappears when it drops to 0 hit points or when the spell ends. The summoned creatures are friendly to you and your companions. Roll initiative for the summoned creatures as a group, which has its own turns. They obey any verbal commands that you issue to them.\n\n(2024 PHB Redesign: Summons a pack of spectral beasts that hover around you in a 10-foot radius. When a creature enters this area, or ends its turn there, you can deal 3d10 slashing damage to it on a failed Dexterity save)."
  },
  {
    name: "Dispel Magic",
    level: 3,
    school: "Abjuration",
    time: "1 Action",
    range: "120 feet",
    duration: "Instantaneous",
    components: "V, S",
    description: "Choose one creature, object, or magical effect within range. Any spell of 3rd level or lower on the target ends. For each spell of 4th level or higher on the target, make an ability check using your spellcasting ability. The DC equals 10 + the spell's level. On a successful check, the spell ends."
  },
  {
    name: "Plant Growth",
    level: 3,
    school: "Transmutation",
    time: "1 Action or 8 Hours",
    range: "150 feet",
    duration: "Instantaneous",
    components: "V, S",
    description: "This spell channels vitality into plants within a specific area. There are two possible uses:\n\n• **1 Action:** Choose a point within range. All normal plants in a 100-foot radius centered on that point become thick and overgrown. A creature moving through the area must spend 4 feet of movement for every 1 foot it moves.\n• **8 Hours:** You cast this spell over the course of 8 hours, enriching the land. All plants in a 1-mile radius centered on a point become highly productive for 1 year, yielding twice the normal amount of food."
  },
  {
    name: "Sleet Storm",
    level: 3,
    school: "Conjuration",
    time: "1 Action",
    range: "150 feet",
    duration: "Concentration, up to 1 minute",
    components: "V, S, M (a pinch of dust and a few drops of water)",
    description: "Freezing rain and sleet fall in a 20-foot-tall cylinder with a 40-foot radius centered on a point you choose within range. The area is heavily obscured, and exposed flames in the area are extinguished.\n\nThe ground in the area is covered with slick ice, making it difficult terrain. When a creature enters the spell's area for the first time on a turn or starts its turn there, it must make a Dexterity saving throw or fall prone.\n\nIf a creature is concentrating in the area, the creature must make a Constitution saving throw against your spell save DC or lose concentration."
  },

  // 4TH LEVEL
  {
    name: "Blight",
    level: 4,
    school: "Necromancy",
    time: "1 Action",
    range: "30 feet",
    duration: "Instantaneous",
    components: "V, S",
    description: "Necromantic energy washes over a creature of your choice that you can see within range, draining moisture and vitality from it. The target must make a Constitution saving throw. The target takes 8d8 necrotic damage on a failed save, or half as much damage on a successful one. This spell has no effect on undead or constructs.\n\nIf you target a plant creature or a magical plant, it makes the saving throw with disadvantage, and the spell deals maximum damage to it. If you target a nonmagical plant that isn't a creature, such as a tree or shrub, it doesn't make a saving throw; it simply withers and dies."
  },
  {
    name: "Confusion",
    level: 4,
    school: "Enchantment",
    time: "1 Action",
    range: "90 feet",
    duration: "Concentration, up to 1 minute",
    components: "V, S, M (three nut shells)",
    description: "This spell assaults and twists creatures' minds, spawning delusions and provoking uncontrolled action. Each creature in a 10-foot-radius sphere centered on a point you choose within range must succeed on a Wisdom saving throw when you cast this spell or be affected by it.\n\nAn affected target can't take reactions and must roll a d10 at the start of each of its turns to determine its behavior for that turn:\n• **1:** The creature moves in a random direction. It doesn't take an action.\n• **2-6:** The creature doesn't move or take actions.\n• **7-8:** The creature uses its action to make a melee attack against a randomly determined creature in reach.\n• **9-10:** The creature can act and move normally."
  },
  {
    name: "Polymorph",
    level: 4,
    school: "Transmutation",
    time: "1 Action",
    range: "60 feet",
    duration: "Concentration, up to 1 hour",
    components: "V, S, M (a caterpillar cocoon)",
    description: "This spell transforms a creature that you can see within range into a new form. An unwilling creature must make a Wisdom saving throw to avoid the effect. A shapechanger automatically succeeds on this saving throw.\n\nThe transformation lasts for the duration, or until the target drops to 0 hit points or dies. The new form can be any beast whose challenge rating is equal to or less than the target's (or the target's level, if it doesn't have a challenge rating). The target's game statistics, including mental ability scores, are replaced by the statistics of the chosen beast. It retains its alignment and personality."
  },
  {
    name: "Stoneskin",
    level: 4,
    school: "Abjuration",
    time: "1 Action",
    range: "Touch",
    duration: "Concentration, up to 1 hour",
    components: "V, S, M (diamond dust worth 100gp, consumed)",
    description: "This spell turns the flesh of a willing creature you touch as hard as stone. Until the spell ends, the target has resistance to nonmagical bludgeoning, piercing, and slashing damage."
  },

  // 5TH LEVEL
  {
    name: "Antilife Shell",
    level: 5,
    school: "Abjuration",
    time: "1 Action",
    range: "Self (10-foot radius)",
    duration: "Concentration, up to 1 hour",
    components: "V, S",
    description: "A shimmering barrier extends from you in a 10-foot radius and moves with you, remaining centered on you. The barrier lasts for the duration. The barrier prevents living creatures from passing through it. An affected creature can cast spells or make attacks with ranged or reach weapons through the barrier, but the barrier blocks physical movement.\n\nIf you move in such a way that an affected creature would be forced through the barrier, the spell ends."
  },
  {
    name: "Awaken",
    level: 5,
    school: "Transmutation",
    time: "8 Hours",
    range: "Touch",
    duration: "Instantaneous",
    components: "V, S, M (an agate worth at least 1,000 gp, which the spell consumes)",
    description: "After spending the casting time tracing magical pathways within a precious gemstone, you touch a Huge or smaller beast or plant. The target must have either no Intelligence score or an Intelligence of 3 or less.\n\nThe target gains an Intelligence of 10. It also gains the ability to speak one language you know. If the target is a plant, it gains the ability to move its limbs, roots, vines, creepers, and so forth, and it gains senses similar to a human's. The awakened beast or plant is charmed by you for 30 days or until you or your companions do anything harmful to it."
  },
  {
    name: "Commune with Nature",
    level: 5,
    school: "Divination",
    time: "1 Minute (Ritual)",
    range: "Self",
    duration: "Instantaneous",
    components: "V, S",
    description: "You instantly gain knowledge of the surrounding territory. Outdoors, the spell gives you knowledge of the land within 3 miles. In caves or natural underground settings, the radius is limited to 300 feet. You instantly learn up to three facts of your choice about any of the following subjects relating to the area:\n• Terrain and bodies of water\n• Prevalent plants, beasts, minerals, or humans\n• Powerful celestials, fiends, undead, fey, or elementals\n• Influence of other planes of existence\n• Legendary ruins or structures"
  },
  {
    name: "Conjure Elemental",
    level: 5,
    school: "Conjuration",
    time: "1 Minute",
    range: "90 feet",
    duration: "Concentration, up to 1 hour",
    components: "V, S, M (a burning incense, clay, water, or sand)",
    description: "You call up an elemental spirit of air, earth, fire, or water. Choose an area of air, earth, fire, or water that fills a 10-foot cube within range. An elemental of challenge rating 5 or lower appropriate to the area you chose appears in an unoccupied space within 10 feet of it. The elemental disappears when it drops to 0 hit points or when the spell ends.\n\nThe elemental is friendly to you and your companions for the duration. It obeys any verbal commands that you issue to it. If your concentration is broken, the elemental doesn't disappear. Instead, you lose control of it, it becomes hostile to you and your companions, and it might attack."
  },
  {
    name: "Greater Restoration",
    level: 5,
    school: "Abjuration",
    time: "1 Action",
    range: "Touch",
    duration: "Instantaneous",
    components: "V, S, M (diamond dust worth 100gp, consumed)",
    description: "You imbue a creature you touch with positive energy to undo a debilitating effect. You can reduce the target's exhaustion level by one, or end one of the following effects on the target:\n• One effect that charmed or petrified the target\n• One curse, including the target's attunement to a cursed magic item\n• Any reduction to one of the target's ability scores\n• One effect reducing the target's hit point maximum"
  },
  {
    name: "Insect Plague",
    level: 5,
    school: "Conjuration",
    time: "1 Action",
    range: "300 feet",
    duration: "Concentration, up to 10 minutes",
    components: "V, S, M (a pinch of sugar, some grain, and a pinch of fat)",
    description: "A biting swarm of locusts fills a 20-foot-radius sphere centered on a point you choose within range. The sphere remains for the duration, and its area is lightly obscured and difficult terrain.\n\nWhen the area appears, each creature in it must make a Constitution saving throw. A creature takes 4d10 piercing damage on a failed save, or half as much damage on a successful one. A creature must also make this saving throw when it enters the spell's area for the first time on a turn or ends its turn there."
  },
  {
    name: "Reincarnate",
    level: 5,
    school: "Transmutation",
    time: "1 Hour",
    range: "Touch",
    duration: "Instantaneous",
    components: "V, S, M (rare oils and poisons worth 1,000gp, consumed)",
    description: "You touch a dead humanoid or a piece of a dead humanoid. Provided that the creature has been dead for no longer than 10 days, the spell forms a new adult body for it and then calls the soul to enter that body. If the target's soul isn't free or willing, the spell fails.\n\nThe magic creates a new body, which likely causes the creature's race to change. The DM rolls on a race table (such as Dwarf, Elf, Halfling, Human, Tiefling, etc.) to determine the new body's physical characteristics."
  },

  // 6TH LEVEL
  {
    name: "Heal",
    level: 6,
    school: "Evocation",
    time: "1 Action",
    range: "60 feet",
    duration: "Instantaneous",
    components: "V, S",
    description: "You channel virile energy into a creature you can see within range. The target regains 70 hit points. This spell also ends blindness, deafness, and any diseases affecting the target. This spell has no effect on undead or constructs. (2024 PHB: heals 80 HP, scaling by 10 HP per level upcasted)."
  },
  {
    name: "Heroes' Feast",
    level: 6,
    school: "Conjuration",
    time: "10 Minutes",
    range: "30 feet",
    duration: "Instantaneous",
    components: "V, S, M (a gem-encrusted chalice worth at least 1,000 gp, which the spell consumes)",
    description: "You bring forth a great feast, including magnificent food and drink. The feast takes 1 hour to consume and disappears at the end of that time, and the beneficial effects do not set in until this hour is over. Up to twelve creatures can partake of the feast.\n\nA creature that partakes gains several benefits for the next 24 hours: immunity to poison and being frightened, cures all diseases and neutralizes poison, makes all Wisdom saving throws with advantage, and has its hit point maximum increased by 2d10 points."
  },
  {
    name: "Sunbeam",
    level: 6,
    school: "Evocation",
    time: "1 Action",
    range: "Self (60-foot line)",
    duration: "Concentration, up to 1 minute",
    components: "V, S, M (a magnifying glass)",
    description: "A beam of brilliant light flashes from your hand in a 5-foot-wide, 60-foot-long line. Each creature in the line must make a Constitution saving throw. On a failed save, a creature takes 6d8 radiant damage and is blinded for 1 turn. On a successful save, it takes half as much damage and isn't blinded by this spell.\n\nUndead and oozes have disadvantage on this saving throw.\n\nYou can create a new line of radiance as an action on any turn until the spell ends."
  },
  {
    name: "Transport via Plants",
    level: 6,
    school: "Conjuration",
    time: "1 Action",
    range: "10 feet",
    duration: "1 round",
    components: "V, S",
    description: "This spell creates a magical link between a Large or larger inanimate plant within range and another plant, at any distance on the same plane of existence. You must have seen or touched the destination plant at least once before. For the duration, any creature can step into the target plant and exit from the destination plant by using 5 feet of movement."
  },

  // 7TH LEVEL
  {
    name: "Fire Storm",
    level: 7,
    school: "Evocation",
    time: "1 Action",
    range: "150 feet",
    duration: "Instantaneous",
    components: "V, S",
    description: "A storm of sheeted flame appears. Choose up to ten 10-foot cubes you can see within range, arranged in any order you choose, but each cube must be adjacent to at least one other cube. Each creature in the area must make a Dexterity saving throw. It takes 7d10 fire damage on a failed save, or half as much damage on a successful one. The fire damages objects in the area and ignites flammable objects."
  },
  {
    name: "Regenerate",
    level: 7,
    school: "Transmutation",
    time: "1 minute",
    range: "Touch",
    duration: "1 hour",
    components: "V, S, M (a prayer wheel and holy water)",
    description: "You touch a creature and stimulate its natural healing ability. The target regains 4d8 + 15 hit points. For the duration of the spell, the target regains 1 hit point at the start of each of its turns. Members severed, if any, are restored after 2 minutes."
  },
  {
    name: "Reverse Gravity",
    level: 7,
    school: "Transmutation",
    time: "1 Action",
    range: "100 feet",
    duration: "Concentration, up to 1 minute",
    components: "V, S, M (a lodestone and iron filings)",
    description: "This spell reverses gravity in a 50-foot-radius, 100-foot-high cylinder centered on a point within range. All creatures and objects in the area fall upward to the top of the cylinder. A creature can make a Dexterity saving throw to grab onto a fixed object and avoid the fall. If some solid object (like a ceiling) is encountered during this ascent, falling objects and creatures strike it, taking damage as if falling from that height."
  },

  // 8TH LEVEL
  {
    name: "Animal Shapes",
    level: 8,
    school: "Transmutation",
    time: "1 Action",
    range: "30 feet",
    duration: "Concentration, up to 24 hours",
    components: "V, S, M (a branch of ash wood)",
    description: "Your magic turns up to twenty willing creatures you can see in range into Large or smaller beasts of your choice. On each of your turns for the duration, you can use an action to transform affected creatures into different beast forms.\n\nThe transformation lasts for the duration, or until the target drops to 0 hit points. The target's statistics are replaced by the beast's, though they retain their alignment and personality, and their Intelligence, Wisdom, and Charisma scores."
  },
  {
    name: "Control Weather",
    level: 8,
    school: "Transmutation",
    time: "10 Minutes",
    range: "Self (5-mile radius)",
    duration: "Concentration, up to 8 hours",
    components: "V, S, M (a burning incense, charcoal, and water)",
    description: "You take control of the weather within 5 miles of you for the duration. You must be outdoors to cast this spell. When you cast this spell, you can change the precipitation, temperature, and wind. It takes 1d4 x 10 minutes for the new conditions to set in. You can change these conditions again on subsequent turns while concentrating."
  },

  // 9TH LEVEL
  {
    name: "Foresight",
    level: 9,
    school: "Divination",
    time: "1 Minute",
    range: "Touch",
    duration: "8 hours",
    components: "V, S, M (a hummingbird feather)",
    description: "You touch a willing creature and bestow a limited ability to see into the immediate future. For the duration, the target can't be surprised and has advantage on attack rolls, ability checks, and saving throws. Additionally, other creatures have disadvantage on attack rolls against the target."
  },
  {
    name: "Shapechange",
    level: 9,
    school: "Transmutation",
    time: "1 Action",
    range: "Self",
    duration: "Concentration, up to 1 hour",
    components: "V, S, M (a jade circlet worth 1,500gp, which you must wear)",
    description: "You assume the form of a different creature for the duration. The new form can be of any creature type (not just beast) with a CR equal to or less than your level. You cannot choose a construct or undead, and you must have seen the creature before. You replace your physical statistics with the new form's, but you retain your alignment, personality, and Intelligence, Wisdom, and Charisma scores, as well as your own skill proficiencies."
  }
];
