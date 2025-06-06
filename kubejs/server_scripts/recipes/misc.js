// various recipes not nessarily related to one stage of the pack
// lots of automation-related stuff

ServerEvents.recipes(e => {
    //apoth recycling

    e.custom({
        "type": "apotheosis:salvaging",
        "input": {
            "item": "apotheosis:common_material"
        },
        "outputs": [
            {
                "min_count": 1,
                "max_count": 2,
                "stack": {
                    "item": "minecraft:raw_iron"
                }
            },
            {
                "min_count": 2,
                "max_count": 5,
                "stack": {
                    "item": "minecraft:raw_copper"
                }
            },
            {
                "min_count": 1,
                "max_count": 3,
                "stack": {
                    "item": "thermal:raw_tin"
                }
            }
        ]
    }).id('ico:salvage_common')

    e.custom({
        "type": "apotheosis:salvaging",
        "input": {
            "item": "apotheosis:uncommon_material"
        },
        "outputs": [
            {
                "min_count": 2,
                "max_count": 3,
                "stack": {
                    "item": "minecraft:leather"
                }
            },
            {
                "min_count": 3,
                "max_count": 5,
                "stack": {
                    "item": "minecraft:rabbit_hide"
                }
            }
        ]
    }).id('ico:recycle_uncommon')

    e.custom({
        "type": "apotheosis:salvaging",
        "input": {
            "item": "apotheosis:uncommon_material"
        },
        "outputs": [
            {
                "min_count": 6,
                "max_count": 12,
                "stack": {
                    "item": "minecraft:amethyst_shard"
                }
            },
            {
                "min_count": 3,
                "max_count": 8,
                "stack": {
                    "item": "spelunkery:rough_emerald"
                }
            },
            {
                "min_count": 2,
                "max_count": 5,
                "stack": {
                    "item": "spelunkery:rough_diamond"
                }
            }
        ]
    }).id('ico:recycle_rare')

    //apoth other
    e.remove({id:'apotheosis:gem_fused_slate'})
    
    e.shaped('8x apotheosis:gem_fused_slate', [
        'SSS',
        'SGS',
        'SSS'
    ], {
        S: 'hexcasting:slate_block',
        G: 'apotheosis:gem_dust'
    }).id('ico:gem_fused_slate')

    //kill erroring recipes
    e.remove([{id: /^railways:sequenced_assembly\/track_create_dd_*?/}, {output: /^lost_aether_content:*?/}, {output: /^aether_treasure_reforging:*?/}, {output: /^ancient_aether:*?/}])

    //material repurposing
    e.recipes.create.milling([Item.of('kubejs:tellurium_dust').withChance(0.75), '2x minecraft:gold_nugget', Item.of('minecraft:gold_nugget').withChance(0.5)], 'malum:cthonic_gold_fragment').id('kubejs:crush_cthonic_gold')

    //extruding
    e.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:andesite'),[Fluid.of('minecraft:water'),Fluid.of('minecraft:lava')]).withCatalyst('minecraft:diorite').id('ico:extrude_andesite')
    e.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:diorite'),[Fluid.of('minecraft:water'),Fluid.of('minecraft:lava')]).withCatalyst('minecraft:quartz_block').id('ico:extrude_diorite')

    e.recipes.createMechanicalExtruderExtruding(Item.of('create:limestone'),[Fluid.of('minecraft:lava'),Fluid.of('create:honey')]).id('ico:extrude_limestone')
    e.recipes.createMechanicalExtruderExtruding(Item.of('create:scoria'),[Fluid.of('minecraft:lava'),Fluid.of('create:chocolate')]).id('ico:extrude_scoria')

    e.recipes.createMechanicalExtruderExtruding(Item.of('galosphere:pink_salt'),[Fluid.of('minecraft:water'),Fluid.of('minecraft:lava')]).withCatalyst('galosphere:pink_salt').id('ico:extrude_pink_salt')
    e.recipes.createMechanicalExtruderExtruding(Item.of('galosphere:rose_pink_salt'),[Fluid.of('minecraft:water'),Fluid.of('minecraft:lava')]).withCatalyst('galosphere:rose_pink_salt').id('ico:extrude_rose_pink_salt')
    e.recipes.createMechanicalExtruderExtruding(Item.of('galosphere:pastel_pink_salt'),[Fluid.of('minecraft:water'),Fluid.of('minecraft:lava')]).withCatalyst('galosphere:pastel_pink_salt').id('ico:extrude_pastel_pink_salt')

    e.blasting('create:scorchia', 'create:scoria').id('ico:scorchia')

    //automation chains
    e.remove({id: 'vintageimprovements:crushing/scoria'})

    e.recipes.create.crushing([Item.of('spelunkery:rough_lazurite_shard').withChance(0.8), Item.of('kubejs:raw_tin_nugget').withChance(0.6)], '#create:stone_types/limestone').id('ico:crush_limestone')

    e.recipes.create.crushing([Item.of('spelunkery:raw_zinc_nugget').withChance(0.3), Item.of('spelunkery:raw_zinc_nugget').withChance(0.1), Item.of('vintageimprovements:vanadium_nugget').withChance(0.1)], '#create:stone_types/scoria').id('ico:crush_scoria')
    e.recipes.create.crushing([Item.of('spelunkery:raw_copper_nugget').withChance(0.6), Item.of('vintageimprovements:sulfur_chunk').withChance(0.05)], '#create:stone_types/scorchia').id('ico:crush_scorchia')

    e.recipes.create.crushing([Item.of('vintageimprovements:vanadium_nugget').withChance(0.3), Item.of('vintageimprovements:vanadium_nugget').withChance(0.1)], '#create_dd:stone_types/basalt').id('ico:crush_basalt')

    e.remove({id:'create:splashing/gravel'})
    e.custom({
		"type": "createsifter:sifting",
		"ingredients": [
			{
			"item": "createsifter:andesite_mesh"
			},
			{
			"item": 'minecraft:gravel'
			}
		],
		"results": [
            {
			    "item": 'minecraft:flint',
                "chance": 0.2
			},
            {
			    "item": 'kubejs:raw_tin_nugget',
                "chance": 0.15  
			}
		],
		"processingTime": 250,
		"minimumSpeed": 64.0
	}).id('ico:sift_gravel')

    /*e.custom({
		"type": "createsifter:sifting",
		"ingredients": [
			{
			"item": "createsifter:brass_mesh"
			},
			{
			"item": 'minecraft:sand'
			}
		],
		"results": [
            {
			    "item": 'minecraft:clay',
                "chance": 0.2
			},
            {
			    "item": 'spelunkery:rough_cinnabar_shard',
                "chance": 0.1
			},
            {
			    "item": 'kubejs:rough_aquatrine',
                "chance": 0.03
			}
		],
		"processingTime": 300,
		"minimumSpeed": 64.0
	}).id('ico:sift_sand')*/

    e.shapeless('minecraft:andesite', ['minecraft:diorite', 'minecraft:cobblestone']).id('ico:andesite')

    e.recipes.create.splashing('minecraft:clay_ball', 'minecraft:sand').id('ico:splash_sand')

    //create ores
    e.remove({id: /create:crushing\/[asurine|crimsite|veridium]*?/})

    e.recipes.create.crushing([Item.of('kubejs:sphalerite_ore').withChance(0.5), Item.of('spelunkery:raw_zinc_nugget').withChance(0.3)], '#create:stone_types/asurine').id('ico:asurine_recycling')
    e.recipes.create.crushing([Item.of('kubejs:hematite_ore').withChance(0.6), Item.of('spelunkery:raw_iron_nugget').withChance(0.4)], '#create:stone_types/crimsite').id('ico:crimsite_recycling')
    e.recipes.create.crushing([Item.of('kubejs:malachite_ore').withChance(0.9), Item.of('spelunkery:raw_copper_nugget').withChance(0.8)], '#create:stone_types/veridium').id('ico:veridium_recycling')

    //other basic ore processing
    e.recipes.create.crushing(['create:crushed_raw_gold', Item.of('create:crushed_raw_gold').withChance(0.75), Item.of('2x create:experience_nugget').withChance(0.75), Item.of('aether:holystone').withChance(0.12)], 'kubejs:holystone_gold_ore')
    e.recipes.create.crushing(['wizards_reborn:crushed_raw_arcane_gold', Item.of('wizards_reborn:crushed_raw_arcane_gold').withChance(0.15), Item.of('2x create:experience_nugget').withChance(0.75), Item.of('aether:holystone').withChance(0.12)], 'kubejs:holystone_arcane_gold_ore')

    e.recipes.create.crushing(['aether:ambrosium_shard', Item.of('aether:ambrosium_shard').withChance(0.75), Item.of('create:experience_nugget').withChance(0.75), Item.of('aether:holystone').withChance(0.12)], 'aether:ambrosium_ore').id('ico:ambrosium_ore')

    /*e.custom({
        "type": "wizards_reborn:alchemy_machine",
        "outputItem": {
            "item": "wizards_reborn:arcane_gold_ingot",
            "count": 2
        },
        "wissen": 400,
        "steam": 250,
        "ingredients": [
            {
                "tag": "forge:ingots/gold"
            },
            {
                "tag": "forge:ingots/gold"
            },
            {
                "item": "wizards_reborn:arcanum"
            },
            {
                "item": "wizards_reborn:alchemy_calx"
            },
            {
                "item": "wizards_reborn:natural_calx"
            }
        ],
        "fluidIngredients": [
            {
                "name": "wizards_reborn:alchemy_oil",
                "amount" : 100
            },
            {
                "name": "wizards_reborn:wissen_tea",
                "amount" : 200
            }
        ]
    }).id('ico:arcane_gold_ingot_from_ingot')*/
})