// contains bronze level create machinery and alloying related recipes

ServerEvents.recipes(e => {
    //diamond
    e.remove({id: 'spelunkery:diamond_grindstone'})

    e.shaped('spelunkery:diamond_grindstone', [
        ' D ',
        'RSR',
        'IDI'
    ], {
        D: 'spelunkery:rough_diamond_shard',
        S: 'minecraft:polished_deepslate_slab',
        R: '#forge:rods/iron',
        I: '#forge:ingots/bronze'
    }).id('ico:diamond_grindstone')

    //bronze
    e.remove([{id: 'thermal:fire_charge/bronze_ingot_4'}, {id: 'thermal:bronze_dust_4'}, {id:'create:item_application/copper_casing_from_log'}, {id:'create:item_application/copper_casing_from_wood'}])

    e.recipes.create.mixing('4x thermal:bronze_dust', ['3x #forge:dusts/copper', '#forge:dusts/tin', 'minecraft:fire_charge', Fluid.of('minecraft:lava', 1000)]).id('ico:bronze_fire_charge').lowheated()
    e.recipes.create.mixing('4x thermal:rose_gold_dust', ['2x #forge:dusts/copper', '2x #forge:dusts/gold', 'minecraft:fire_charge', Fluid.of('minecraft:lava', 1000)]).id('ico:rose_gold_fire_charge').lowheated()

    e.shaped('kubejs:bronze_framing', [
        ' A ',
        'A A',
        ' A '
    ], {
        A: '#forge:plates/bronze'
    }).id('ico:bronze_framing')

    e.recipes.create.compacting('kubejs:bronze_framing', ['4x #forge:plates/bronze']).id('ico:bronze_framing_compacting')

    let inter = 'kubejs:incomplete_sorting_algorithm'
    e.recipes.create.sequenced_assembly([
	    'kubejs:sorting_algorithm'
	], '#forge:plates/gold', [
        e.recipes.createDeploying(inter, [inter, '#forge:gears/rose_gold']),
        e.recipes.createCutting(inter,inter),
		e.recipes.createDeploying(inter, [inter, 'create:polished_rose_quartz']),
        e.recipes.createPressing(inter,inter)
	]).transitionalItem(inter).loops(1).id('ico:sorting_algorithm')

    //machinery
    e.remove([{id: 'create:crafting/kinetics/spout'}, {id: 'create:crafting/kinetics/item_drain'}, {id: 'create:crafting/kinetics/steam_engine'}, {id: 'create:crafting/kinetics/empty_blaze_burner'}, {id: 'create:crafting/kinetics/fluid_pipe'}, {id: 'create:crafting/kinetics/fluid_pipe_vertical'}, {id: 'create:crafting/kinetics/mechanical_pump'}, {id: 'create:crafting/kinetics/fluid_valve'}, {id: 'create:crafting/kinetics/fluid_tank'}])

    e.shapeless('2x create:fluid_tank', ['#c:barrels', 'create:copper_casing']).id('ico:fluid_tank')

    inter = 'kubejs:incomplete_bronze_tubing'
    e.recipes.create.sequenced_assembly([
	    'kubejs:bronze_tubing'
	], '#forge:ingots/bronze', [
        e.recipes.createDeploying(inter, [inter, '#forge:plates/bronze']),
        e.recipes.createDeploying(inter, [inter, '#forge:plates/bronze']),
        e.recipes.createCutting(inter,inter)
	]).transitionalItem(inter).loops(1).id('ico:bronze_tubing')

    /*inter = 'kubejs:incomplete_bronze_parts'
    e.recipes.create.sequenced_assembly([
	    'kubejs:bronze_parts'
	], 'create:fluid_tank', [
		e.recipes.createDeploying(inter, [inter, '#forge:gears/gold']),
        e.recipes.createDeploying(inter, [inter, 'kubejs:bronze_tubing']),
        e.recipes.createCutting(inter,inter),
        e.recipes.createDeploying(inter, [inter, 'kubejs:bronze_tubing']),
        e.recipes.createPressing(inter,inter)
	]).transitionalItem(inter).loops(3).id('ico:incomplete_bronze_parts')*/

    e.recipes.create.deploying('create:fluid_pipe', ['#forge:plates/copper', '#forge:nuggets/copper'])

    e.shaped('create:spout', [
        'F',
        'K',
        'N'
    ], {
        F: 'create:fluid_tank',
        K: 'kubejs:kelp_sheet',
        N: '#ico:andesite_alloyable'
    }).id('ico:spout')

    e.shaped('create:item_drain', [
        'BBB',
        ' F '
    ], {
        F: 'create:fluid_tank',
        B: 'minecraft:iron_bars'
    }).id('ico:item_drain')

    e.shaped('create:empty_blaze_burner', [
        'NIN',
        'IFI',
        'NIN'
    ], {
        N: 'kubejs:wrought_iron_ingot',
        I: 'kubejs:wrought_iron_nugget',
        F: 'minecraft:fire_charge'
    }).id('ico:empty_blaze_burner')

    e.shaped('create:steam_engine', [
        'G',
        'A',
        'B'
    ], {
        G: '#forge:plates/gold',
        A: 'create:andesite_alloy',
        B: '#forge:storage_blocks/bronze'
    }).id('ico:steam_engine')

    //logistics

    e.remove([{id:'create:crafting/kinetics/smart_chute'}, {id:'create:crafting/logistics/brass_funnel'}, {id:'create:crafting/logistics/brass_tunnel'}, {id:'create:crafting/kinetics/smart_fluid_pipe'}])

    e.shaped('2x create:brass_funnel', [
        'S',
        'I',
        'K'
    ], {
        S: 'kubejs:sorting_algorithm',
        I: '#forge:ingots/rose_gold',
        K: 'kubejs:kelp_sheet'
    }).id('ico:brass_funnel')

    e.shaped('2x create:brass_tunnel', [
        'S ',
        'II',
        'KK'
    ], {
        S: 'kubejs:sorting_algorithm',
        I: '#forge:ingots/rose_gold',
        K: 'kubejs:kelp_sheet'
    }).id('ico:brass_tunnel')

    //foundry
    e.remove([{id: 'createmetallurgy:graphite'}, {id: 'createmetallurgy:foundry_basin'}, {id: 'createmetallurgy:foundry_lid'}, {id: 'createmetallurgy:glassed_foundry_lid'}, {id: 'createmetallurgy:casting_table'}, {id: 'createmetallurgy:casting_basin'}])

    e.recipes.create.mixing('2x createmetallurgy:graphite', ['3x #minecraft:coals', 'kubejs:andesite_slush']).id('ico:graphite')

    e.shaped('createmetallurgy:foundry_basin', [
        'G G',
        'ACA',
        'AAA'
    ], {
        C: 'minecraft:clay',
        A: 'create:andesite_alloy',
        G: 'createmetallurgy:graphite'
    }).id('ico:foundry_basin')

    e.shaped('createmetallurgy:foundry_lid', [
        'GGG',
        'AAA',
        'A A'
    ], {
        A: 'create:andesite_alloy',
        G: 'createmetallurgy:graphite'
    }).id('ico:foundry_lid')

    e.shaped('createmetallurgy:glassed_foundry_lid', [
        'GLG',
        'LFL'
    ], {
        L: '#forge:glass',
        G: 'createmetallurgy:graphite',
        F: 'createmetallurgy:foundry_lid'
    }).id('ico:glassed_foundry_lid')

    e.shaped('createmetallurgy:casting_table', [
        'AGA',
        'A A',
        'A A'
    ], {
        A: 'create:andesite_alloy',
        G: 'createmetallurgy:graphite'
    }).id('ico:casting_table')

    e.shaped('createmetallurgy:casting_basin', [
        'A A',
        'A A',
        'AGA'
    ], {
        A: 'create:andesite_alloy',
        G: 'createmetallurgy:graphite'
    }).id('ico:casting_basin')

    //wrought iron
    e.recipes.create.mixing(Fluid.of('kubejs:metalworking_flux', 500), ['2x minecraft:bone_meal', 'thermal:rosin', Fluid.of('water', 1000)]).id('ico:metalworking_flux')

    //e.recipes.create.mixing([Fluid.of('kubejs:molten_wrought_iron', 10), Item.of('kubejs:congealed_flux_slag').withChance(0.25)], [Fluid.of('kubejs:molten_pig_iron', 20), Fluid.of('kubejs:metalworking_flux', 5)]).lowheated().id('ico:molten_wrought_iron')

    //e.recipes.immersiveengineeringBlastFurnace('kubejs:wrought_iron_balls', 'kubejs:pig_iron_ingot', 1).time(300)

    e.custom({
        "type": "immersiveengineering:blast_furnace",
        "input": {
            "tag": "forge:ingots/pig_iron"
        },
        "result": {
            "item": "kubejs:wrought_iron_balls"
        },
        "slag": {
            "tag": "forge:slag"
        },
        "time": 300
    })

    e.recipes.create.pressing('kubejs:wrought_iron_sheet', '#forge:ingots/wrought_iron').id('ico:wrought_iron_sheet')
    e.shaped('kubejs:wrought_iron_block', [
        'WWW',
        'WWW',
        'WWW'
    ], {
        W: '#forge:ingots/wrought_iron'
    }).id('ico:wrought_iron_block')
    e.shapeless('9x kubejs:wrought_iron_ingot', '#forge:storage_blocks/wrought_iron').id('ico:split_wrought_iron_block')

    e.shaped('kubejs:wrought_iron_ingot', [
        'WWW',
        'WWW',
        'WWW'
    ], {
        W: '#forge:nuggets/wrought_iron'
    }).id('ico:wrought_iron_ingot')
    e.shapeless('9x kubejs:wrought_iron_nugget', '#forge:ingots/wrought_iron').id('ico:split_wrought_iron_ingot')

    e.recipes.create.pressing('kubejs:pig_iron_sheet', '#forge:ingots/pig_iron').id('ico:pig_iron_sheet')
    e.shaped('kubejs:pig_iron_block', [
        'WWW',
        'WWW',
        'WWW'
    ], {
        W: '#forge:ingots/pig_iron'
    }).id('ico:pig_iron_block')
    e.shapeless('9x kubejs:pig_iron_ingot', '#forge:storage_blocks/pig_iron').id('ico:split_pig_iron_block')

    e.shaped('kubejs:pig_iron_ingot', [
        'WWW',
        'WWW',
        'WWW'
    ], {
        W: '#forge:nuggets/pig_iron'
    }).id('ico:pig_iron_ingot')
    e.shapeless('9x kubejs:pig_iron_nugget', '#forge:ingots/pig_iron').id('ico:split_pig_iron_ingot')

    //other

    /*e.custom({
        "type": "thermal:tree_extractor",
        "trunk": {
          "Name": "minecraft:birch_log",
          "Properties": {
            "axis": "y"
          }
        },
        "leaves": {
          "Name": "minecraft:birch_leaves",
          "Properties": {
            "persistent": "false"
          }
        },
        "sapling": "minecraft:birch_sapling",
        "min_height": 5,
        "max_height": 13,
        "min_leaves": 16,
        "max_leaves": 24,
        "result": {
          "fluid": "thermal:sap",
          "amount": 10
        }
    }).id('ico:goofball')*/
    // for some reason these tree_extractor recipes only work in datapack
    // see kubejs/data/ico/recipes/thermal

    e.recipes.create.filling('malum:runic_sap', ['minecraft:glass_bottle', Fluid.of('kubejs:runic_sap', 250)])
    e.recipes.create.filling('malum:cursed_sap', ['minecraft:glass_bottle', Fluid.of('kubejs:cursed_sap', 250)])

    e.recipes.create.compacting('malum:runic_sapball', Fluid.of('kubejs:runic_sap', 500))
    e.recipes.create.compacting('malum:cursed_sapball', Fluid.of('kubejs:cursed_sap', 500))

    e.recipes.create.mixing(['thermal:rosin', Fluid.of('thermal:tree_oil', 100)], Fluid.of('thermal:resin', 200)).lowheated().id('ico:rosin')

    e.remove({id: 'thermal:device_tree_extractor'})

    e.shaped('thermal:device_tree_extractor', [
        'WGW',
        'HPH',
        'WBW'
    ], {
        P: 'create:fluid_tank',
        H: 'kubejs:hardened_wood_planks',
        B: '#forge:plates/bronze',
        W: 'kubejs:wrought_iron_ingot',
        G: '#forge:gears/iron'
    }).id('ico:tree_extractor')

    //experinence
    e.custom({
        "type": "create_enchantment_industry:disenchanting",
        "ingredients": [
            {
                "item": 'malum:chunk_of_brilliance'
            }
        ],
        "results": [
            {
                "fluid": "create_enchantment_industry:experience",
                "amount": 5
            }
        ]
    })
})