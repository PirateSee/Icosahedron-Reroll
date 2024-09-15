ServerEvents.recipes(e => {

    //andesite alloy
    e.remove([{id:'create:crafting/materials/andesite_alloy'}, {id:'create:crafting/materials/andesite_alloy_from_zinc'}, {id:'create:mixing/andesite_alloy'}, {id:'create:mixing/andesite_alloy_from_zinc'}])

    e.recipes.create.milling('kubejs:crushed_andesite', 'minecraft:andesite').id('ico:crushed_andesite_milling')

    e.shapeless('kubejs:andesite_slush', ['2x kubejs:crushed_andesite', '2x #ico:andesite_alloyable', 'minecraft:water_bucket']).id('ico:andesite_slush_shapeless')
    //e.shapeless('2x kubejs:andesite_slush', ['4x kubejs:crushed_andesite', '4x #ico:andesite_alloyable', 'minecraft:water_bucket']).id('ico:andesite_slush_shapeless_double')
    e.recipes.create.mixing('kubejs:andesite_slush', ['kubejs:crushed_andesite', '#ico:andesite_alloyable', Fluid.of('minecraft:water', 1000)]).id('ico:andesite_slush_mixing')
    //e.recipes.create.mixing('create:andesite_alloy', ['kubejs:crushed_andesite', '#ico:andesite_alloyable', 'minecraft:clay_ball', Fluid.of('minecraft:water', 1000)]).id('ico:andesite_alloy_mixing').heated()

    e.smelting('create:andesite_alloy', 'kubejs:andesite_slush').id('ico:andesite_alloy_smelting')
    e.blasting('create:andesite_alloy', 'kubejs:andesite_slush').id('ico:andesite_alloy_blasting')

    e.remove([{id: 'createlowheated:basic_burner'}])

    e.shaped('createlowheated:basic_burner', [
        'TA',
        'AT',
        'TA'
    ], {
        A: 'createdeco:andesite_sheet',
        T: '#forge:plates/tin'
    }).id('ico:basic_burner')

    //cogwheels
    e.remove([{id:'create:crafting/kinetics/cogwheel'}, {id:'create:crafting/kinetics/large_cogwheel'}, {id:'create:crafting/kinetics/large_cogwheel_from_little'}, {id:'create:deploying/large_cogwheel'}, {id:'create:deploying/cogwheel'}, {id:'create_dd:item_application/large_cogwheel'}, {id:'create_dd:item_application/cogwheel'}])

    //e.remove([{id:'create:crafting/kinetics/cogwheel'}])
    e.smoking('supplementaries:ash', '#immersive_weathering:flammable_planks').id('ico:smoking_planks')
    e.smoking('supplementaries:ash', '#minecraft:logs_that_burn').id('ico:smoking_logs')
    e.shapeless('kubejs:hardened_wood_planks', ['2x #minecraft:planks', 'supplementaries:ash', 'kubejs:andesite_slush']).id('ico:hardened_wood_planks')

    e.shapeless('petrolsparts:coaxial_gear', ['kubejs:hardened_wood_planks']).id('ico:coaxial_gear')
    e.shapeless('petrolsparts:large_coaxial_gear', ['2x kubejs:hardened_wood_planks']).id('ico:large_coaxial_gear')
    e.shapeless('petrolsparts:large_coaxial_gear', ['petrolsparts:coaxial_gear', '1x kubejs:hardened_wood_planks']).id('ico:large_coaxial_gear_upgrade')

    e.shapeless('create:large_cogwheel', ['create:cogwheel', 'kubejs:hardened_wood_planks']).id('ico:large_cogwheel_upgrade')

    e.remove([{id:'create:item_application/andesite_casing_from_log'}, {id:'create:item_application/andesite_casing_from_wood'}])

    e.custom({
		"type": "create:item_application",
		"ingredients": [
			{
				"item": "create:shaft"
			},
			{
				"item": 'kubejs:hardened_wood_planks'
			}
		],
		"results": [
			{
				"item": 'create:cogwheel'
			}
		]
	}).id('ico:upgrade_shaft_cogwheel')

    e.custom({
		"type": "create:item_application",
		"ingredients": [
			{
				"item": "create:cogwheel"
			},
			{
				"item": 'kubejs:hardened_wood_planks'
			}
		],
		"results": [
			{
				"item": 'create:large_cogwheel'
			}
		]
	}).id('ico:upgrade_cogwheel_large_cogwheel')

    e.shaped('kubejs:andesite_framing', [
        'TAT',
        'A A',
        'TAT'
    ], {
        A: 'createdeco:andesite_sheet',
        T: '#forge:nuggets/tin'
    }).id('ico:andesite_framing_shapeless')
    e.recipes.create.compacting('kubejs:andesite_framing', ['4x createdeco:andesite_sheet', '4x #forge:nuggets/tin']).id('ico:andesite_framing_compacting')

    e.custom({
		"type": "create:item_application",
		"ingredients": [
			{
				"item": "kubejs:hardened_wood_planks"
			},
			{
				"item": 'kubejs:andesite_framing'
			}
		],
		"results": [
			{
				"item": 'create:andesite_casing'
			}
		]
	})

    //machinery
    e.remove([{id:'create:crafting/kinetics/mechanical_press'}, {id:'create:crafting/kinetics/whisk'}, {id:'create:crafting/kinetics/mechanical_mixer'}, {id:'create:crafting/kinetics/mechanical_saw'}, {id:'create:crafting/kinetics/mechanical_drill'}, {id:'create:crafting/kinetics/deployer'}])

    e.shaped('kubejs:wooden_slide', [
        'L',
        'S',
        'L'
    ], {
        L: '#forge:stripped_logs',
        S: 'create:shaft'
    }).id('ico:wooden_slide')

    e.shaped('kubejs:andesite_parts', [
        'WTW',
        'LCL'
    ], {
        C: 'create:gearbox',
        T: '#forge:storage_blocks/tin',
        W: 'kubejs:wooden_slide',
        L: 'create:large_cogwheel'
    }).id('ico:andesite_parts')

    let inter = 'kubejs:incomplete_andesite_parts'
    e.recipes.create.sequenced_assembly([
	    'kubejs:andesite_parts'
	], 'create:gearbox', [
		e.recipes.createDeploying(inter, [inter, 'create:large_cogwheel']),
        e.recipes.createDeploying(inter, [inter, 'kubejs:wooden_slide']),
        e.recipes.createCutting(inter,inter),
		e.recipes.createDeploying(inter, [inter, '#forge:plates/tin']),
        e.recipes.createPressing(inter,inter)
	]).transitionalItem(inter).loops(2).id('ico:andesite_parts_assembly')

    /*e.shaped('create:mechanical_press', [
        ' W ',
        'SC ',
        ' T '
    ], {
        W: 'kubejs:wooden_slide',
        S: 'create:shaft',
        C: 'create:gearbox',
        T: '#forge:storage_blocks/tin'
    }).id('ico:mechanical_press')*/

    e.custom({
		"type": "create:item_application",
		"ingredients": [
			{
				"item": "kubejs:andesite_parts"
			},
			{
				"item": '#forge:storage_blocks/tin'
			}
		],
		"results": [
			{
				"item": 'create:mechanical_press'
			}
		]
	}).id('ico:mechanical_press')

    e.shaped('create:whisk', [
        ' A ',
        'TAT',
        'TTT'
    ], {
        A: 'create:andesite_alloy',
        T: '#forge:plates/tin'
    }).id('ico:whisk')

    e.custom({
		"type": "create:item_application",
		"ingredients": [
			{
				"item": "kubejs:andesite_parts"
			},
			{
				"item": 'create:whisk'
			}
		],
		"results": [
			{
				"item": 'create:mechanical_mixer'
			}
		]
	}).id('ico:mechanical_mixer')

    /*e.shaped('create:mechanical_mixer', [
        ' W ',
        'SC ',
        ' T '
    ], {
        W: 'kubejs:wooden_slide',
        S: 'create:cogwheel',
        C: 'create:andesite_casing',
        T: 'create:whisk'
    }).id('ico:mechanical_mixer')*/

    e.shaped('kubejs:sawblade', [
        ' S ',
        'SAS',
        ' S '
    ], {
        S: '#forge:plates/tin',
        A: 'create:shaft'
    }).id('ico:sawblade')

    e.shaped('kubejs:iron_drill', [
        ' SI',
        'IIS',
        'AI '
    ], {
        S: '#forge:plates/iron',
        I: '#forge:ingots/iron',
        A: 'create:shaft'
    }).id('ico:iron_drill')

    e.custom({
		"type": "create:item_application",
		"ingredients": [
			{
				"item": "kubejs:andesite_parts"
			},
			{
				"item": 'kubejs:sawblade'
			}
		],
		"results": [
			{
				"item": 'create:mechanical_saw'
			}
		]
	}).id('ico:mechanical_saw')

    e.custom({
		"type": "create:item_application",
		"ingredients": [
			{
				"item": "kubejs:andesite_parts"
			},
			{
				"item": 'kubejs:iron_drill'
			}
		],
		"results": [
			{
				"item": 'create:mechanical_drill'
			}
		]
	}).id('ico:mechanical_drill')

    e.shaped('kubejs:bronze_hand', [
        ' A ',
        'BDB',
        ' B '
    ], {
        A: 'create:andesite_alloy',
        B: '#forge:plates/bronze',
        D: 'minecraft:diamond',
    }).id('ico:bronze_hand')

    e.custom({
		"type": "create:item_application",
		"ingredients": [
			{
				"item": "kubejs:andesite_parts"
			},
			{
				"item": 'kubejs:bronze_hand'
			}
		],
		"results": [
			{
				"item": 'create:deployer'
			}
		]
	}).id('ico:deployer')

    //contraption anchors
    e.remove([{id: 'create:crafting/kinetics/mechanical_bearing'}, {id: 'create:crafting/kinetics/piston_extension_pole'}, {id: 'create:crafting/kinetics/mechanical_piston'}])

    e.custom({
		"type": "create:item_application",
		"ingredients": [
			{
				"item": "kubejs:andesite_parts"
			},
			{
				"tag": 'minecraft:wooden_slabs'
			}
		],
		"results": [
			{
				"item": 'create:mechanical_bearing'
			}
		]
	}).id('ico:mechanical_bearing')

    e.shaped('8x create:piston_extension_pole', [
        'W',
        'A'
    ], {
        W: 'kubejs:wooden_slide',
        A: 'create:andesite_alloy'
    }).id('ico:piston_extension_pole')

    e.custom({
		"type": "create:item_application",
		"ingredients": [
			{
				"item": "kubejs:andesite_parts"
			},
			{
				"item": 'create:piston_extension_pole'
			}
		],
		"results": [
			{
				"item": 'create:mechanical_piston'
			}
		]
	}).id('ico:mechanical_piston')

    //logistics

    e.remove([{id:'create:crafting/kinetics/belt_connector'}, {id:'create:crafting/kinetics/chute'}, {id:'create:crafting/kinetics/andesite_funnel'}, {id:'create:crafting/kinetics/andesite_tunnel'}])

    e.recipes.create.compacting('kubejs:kelp_sheet', '6x minecraft:dried_kelp').id('ico:kelp_sheet')

    e.recipes.create.cutting('create:belt_connector', 'kubejs:kelp_sheet')

    e.shaped('4x create:chute', [
        'P',
        'I',
        'P'
    ], {
        P: '#forge:plates/tin',
        I: '#forge:ingots/tin'
    }).id('ico:chute')

    e.shaped('2x create:andesite_funnel', [
        'A',
        'K'
    ], {
        A: 'create:andesite_alloy',
        K: 'kubejs:kelp_sheet'
    }).id('ico:andesite_funnel')

    e.shaped('2x create:andesite_tunnel', [
        'AA',
        'KK'
    ], {
        A: 'create:andesite_alloy',
        K: 'kubejs:kelp_sheet'
    }).id('ico:andesite_tunnel')

    //crude ore processing
    
    function crude_ore_processing(ore, impuredust, material, ingot, compact) {
        e.remove({output: ingot, type: 'smelting', not: {mod: 'immersive_weathering'}})
        e.remove({output: ingot, type: 'blasting', not: {mod: 'immersive_weathering'}})

        e.recipes.create.milling(impuredust, ore).id('ico:mill_for_' + material)
        
        if(compact) {
            e.recipes.create.compacting('createmetallurgy:' + material + '_dust', '4x kubejs:tiny_' + material + '_dust').id('ico:compacting_' + material + '_dust')
        }
        else if(material == "tin") {
            e.recipes.create.compacting('kubejs:' + material + '_dust', '4x kubejs:tiny_' + material + '_dust').id('ico:compacting_' + material + '_dust')
        }

        e.smelting(ingot, '#forge:dusts/' + material).id('ico:smelt_for_' + material)
    }

    crude_ore_processing('kubejs:limonite_ore', 'kubejs:limonite_dust', 'iron', 'minecraft:iron_ingot', true)
    e.custom({
		"type": "createsifter:sifting",
		"ingredients": [
			{
			"item": "createsifter:andesite_mesh"
			},
			{
			"item": 'kubejs:limonite_dust'
			}
		],
		"results": [
			{
			    "item": 'kubejs:tiny_iron_dust',
                "count": 2
			},
            {
			    "item": 'kubejs:tiny_iron_dust',
                "chance": 0.5
			},
			{
                "item": "kubejs:soft_slag_dust",
                "chance": 0.15
			},
			{
				"item": 'create:experience_nugget',
				"chance": 0.1
			}
		],
		"processingTime": 300,
		"minimumSpeed": 64.0
	}).id('ico:sift_for_iron')
    crude_ore_processing('kubejs:cassiterite_ore', 'kubejs:cassiterite_dust', 'tin', 'thermal:tin_ingot')
    e.custom({
		"type": "createsifter:sifting",
		"ingredients": [
			{
			"item": "createsifter:andesite_mesh"
			},
			{
			"item": 'kubejs:cassiterite_dust'
			}
		],
		"results": [
			{
			    "item": 'kubejs:tiny_tin_dust',
                "count": 3
			},
            {
			    "item": 'kubejs:tiny_tin_dust',
                "chance": 0.5
			},
            {
			    "item": 'kubejs:tiny_zinc_dust',
                "chance": 0.5
			},
			{
                "item": "kubejs:soft_slag_dust",
                "chance": 0.2
			},
			{
				"item": 'create:experience_nugget',
				"chance": 0.1
			}
		],
		"processingTime": 300,
		"minimumSpeed": 64.0
	}).id('ico:sift_for_tin')
    crude_ore_processing('kubejs:sphalerite_ore', 'kubejs:sphalerite_dust', 'zinc', 'create:zinc_ingot', true)
    e.custom({
		"type": "createsifter:sifting",
		"ingredients": [
			{
			"item": "createsifter:andesite_mesh"
			},
			{
			"item": 'kubejs:sphalerite_dust'
			}
		],
		"results": [
			{
			    "item": 'kubejs:tiny_zinc_dust',
                "count": 3
			},
            {
			    "item": 'kubejs:tiny_zinc_dust',
                "chance": 0.5
			},
            {
			    "item": 'kubejs:tiny_iron_dust',
                "chance": 0.5
			},
			{
                "item": "kubejs:soft_slag_dust",
                "chance": 0.2
			},
			{
				"item": 'create:experience_nugget',
				"chance": 0.2
			}
		],
		"processingTime": 300,
		"minimumSpeed": 64.0
	}).id('ico:sift_for_zinc')
    crude_ore_processing('minecraft:raw_gold', 'kubejs:impure_gold_grit', 'gold', 'minecraft:gold_ingot')
    e.custom({
		"type": "createsifter:sifting",
		"ingredients": [
			{
			"item": "createsifter:andesite_mesh"
			},
			{
			"item": 'kubejs:impure_gold_grit'
			}
		],
		"results": [
			{
			    "item": '#forge:dusts/gold'
			},
			{
                "item": "kubejs:soft_slag_dust",
                "chance": 0.05
			},
			{
				"item": 'create:experience_nugget',
				"chance": 0.1
			}
		],
		"processingTime": 300,
		"minimumSpeed": 64.0
	}).id('ico:sift_for_gold')
    crude_ore_processing('minecraft:raw_copper', 'kubejs:impure_copper_grit', 'copper', 'minecraft:copper_ingot')
    e.custom({
		"type": "createsifter:sifting",
		"ingredients": [
			{
			"item": "createsifter:andesite_mesh"
			},
			{
			"item": 'kubejs:impure_copper_grit'
			}
		],
		"results": [
			{
			    "item": '#forge:dusts/copper'
			},
			{
                "item": "kubejs:soft_slag_dust",
                "chance": 0.05
			},
			{
				"item": 'create:experience_nugget',
				"chance": 0.1
			}
		],
		"processingTime": 300,
		"minimumSpeed": 64.0
	}).id('ico:sift_for_copper')

    //automation
    e.remove([{id: 'create:milling/andesite'}, {id: 'minecraft:andesite'}])

    e.custom({
		"type": "createsifter:sifting",
		"ingredients": [
			{
			"item": "createsifter:andesite_mesh"
			},
			{
			"item": 'minecraft:clay_ball'
			}
		],
		"results": [
            {
			    "item": 'minecraft:flint',
                "chance": 0.3
			},
            {
			    "item": 'thermal:tin_nugget',
                "chance": 0.2
			}
		],
		"processingTime": 300,
		"minimumSpeed": 64.0
	}).id('ico:sift_clay')

    e.shapeless('minecraft:andesite', ['minecraft:diorite', 'minecraft:cobblestone']).id('ico:andesite')

    //other
    e.remove({id: 'born_in_chaos_v1:fire_light_dust_k'})

    e.shapeless('3x minecraft:fire_charge', ['minecraft:gunpowder', 'born_in_chaos_v1:fire_dust', '#minecraft:coals'])
})