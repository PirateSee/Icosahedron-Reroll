ItemEvents.tooltip(event => {
    // ores
	event.add("minecraft:raw_copper", Text.gray('Requires Crude Ore Procesing'))
    event.add("minecraft:raw_gold", Text.gray('Requires Crude Ore Procesing'))
    event.add("kubejs:sphalerite_ore", Text.gray('Requires Crude Ore Procesing'))
    event.add("kubejs:limonite_ore", Text.gray('Requires Crude Ore Procesing'))
    event.add("scguns:raw_anthralite", Text.gray('Requires Crude Ore Procesing'))

    event.add("kubejs:pentlandite_ore", Text.gray('Requires Advanced Ore Procesing'))
    event.add("kubejs:bauxite_ore", Text.gray('Requires Advanced Ore Procesing'))
    event.add("kubejs:hematite_ore", Text.gray('Requires Advanced Ore Procesing'))
    event.add("kubejs:malachite_ore", Text.gray('Requires Advanced Ore Procesing'))

    event.add("kubejs:wolframite_ore", Text.gray('Requires Complex Ore Procesing'))
    event.add("kubejs:uraninite_ore", Text.gray('Requires Complex Ore Procesing'))

    /*event.add("minecraft:raw_copper", Text.darkGray('(See Quests)'))
    event.add("minecraft:raw_gold", Text.darkGray('(See Quests)'))
    event.add("kubejs:sphalerite_ore", Text.darkGray('(See Quests)'))
    event.add("kubejs:limonite_ore", Text.darkGray('(See Quests)'))
    event.add("scguns:raw_anthralite", Text.darkGray('(See Quests)'))

    event.add("kubejs:pentlandite_ore", Text.darkGray('(See Quests)'))
    event.add("kubejs:bauxite_ore", Text.darkGray('(See Quests)'))
    event.add("kubejs:hematite_ore", Text.darkGray('(See Quests)'))
    event.add("kubejs:malachite_ore", Text.darkGray('(See Quests)'))

    event.add("kubejs:wolframite_ore", Text.darkGray('(See Quests)'))
    event.add("kubejs:uraninite_ore", Text.darkGray('(See Quests)'))*/

    // other
    event.add("ae2:crystal_resonance_generator", Text.gray('§oBasically a Radioisotope Thermoelectric Generator§r'))
    event.add("kubejs:nitra", Text.gray('§oAnyone need some ammo?§r'))

    event.add("kubejs:crushed_andesite", Text.gray('Obtain by crushing Andesite with a hammer at a Workbench'))
})