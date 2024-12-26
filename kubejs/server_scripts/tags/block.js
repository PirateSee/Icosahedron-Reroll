ServerEvents.tags('block', e => {

    //portals
    e.add('aether:aether_portal_blocks', 'mekanism:block_refined_glowstone')

    e.add('quad:nether_portal/built', 'kubejs:nether_portal_block')
    e.add('quad:nether_portal/formed', 'kubejs:nether_portal_block')

    e.remove('quad:nether_portal/built', 'minecraft:obsidian')
    e.remove('quad:nether_portal/formed', 'minecraft:obsidian')
    e.remove('quad:nether_portal/built', 'minecraft:crying_obsidian')
    e.remove('quad:nether_portal/formed', 'minecraft:crying_obsidian')

    e.add('forge:ores/gold', 'kubejs:holystone_gold_ore')
    e.add('forge:ores/arcane_gold', 'kubejs:holystone_arcane_gold_ore')

    //tag repair
    e.remove('minecraft:mineable/pickaxe', 'ducky-periphs:focal_link_block')
})