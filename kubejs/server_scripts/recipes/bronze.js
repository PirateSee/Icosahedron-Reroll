ServerEvents.recipes(e => {
    //bronze
    e.remove([{id: 'thermal:fire_charge/bronze_ingot_4'}, {id: 'thermal:bronze_dust_4'}, {id:'create:item_application/copper_casing_from_log'}, {id:'create:item_application/copper_casing_from_wood'}])

    e.recipes.create.mixing('4x thermal:bronze_dust', ['3x #forge:dusts/copper', '#forge:dusts/tin', 'minecraft:fire_charge']).id('ico:bronze_fire_charge')
    e.recipes.create.mixing('4x thermal:rose_gold_dust', ['2x #forge:dusts/copper', '2x #forge:dusts/gold', 'minecraft:fire_charge']).id('ico:rose_gold_fire_charge')

    e.shaped('kubejs:bronze_framing', [
        'TA',
        'AT'
    ], {
        A: '#forge:plates/bronze',
        T: '#forge:nuggets/iron'
    }).id('ico:bronze_framing')

    e.custom({
		"type": "create:item_application",
		"ingredients": [
			{
				"item": "create:andesite_casing"
			},
			{
				"item": 'kubejs:bronze_framing'
			}
		],
		"results": [
			{
				"item": 'create:copper_casing'
			}
		]
	}).id('ico:copper_casing')

    let inter = 'kubejs:incomplete_sorting_algorithm'
    e.recipes.create.sequenced_assembly([
	    'kubejs:sorting_algorithm'
	], '#forge:gears/rose_gold', [
        e.recipes.createDeploying(inter, [inter, '#forge:plates/rose_gold']),
        e.recipes.createCutting(inter,inter),
		e.recipes.createDeploying(inter, [inter, 'create:polished_rose_quartz']),
        e.recipes.createPressing(inter,inter)
	]).transitionalItem(inter).loops(1).id('ico:sorting_algorithm')

    //machinery
    e.remove([{id: 'create:crafting/kinetics/spout'}, {id: 'create:crafting/kinetics/fluid_pipe'}, {id: 'create:crafting/kinetics/fluid_pipe_vertical'}, {id: 'create:crafting/kinetics/mechanical_pump'}, {id: 'create:crafting/kinetics/fluid_valve'}, {id: 'create:crafting/kinetics/fluid_tank'}])

    e.custom({
		"type": "create:item_application",
		"ingredients": [
			{
				"tag": "c:barrels"
			},
			{
				"item": 'kubejs:bronze_framing'
			}
		],
		"results": [
			{
				"item": 'create:fluid_tank'
			}
		]
	}).id('ico:fluid_tank')

    inter = 'kubejs:incomplete_bronze_tubing'
    e.recipes.create.sequenced_assembly([
	    'kubejs:bronze_tubing'
	], '#forge:ingots/bronze', [
        e.recipes.createDeploying(inter, [inter, '#forge:plates/bronze']),
		e.recipes.createDeploying(inter, [inter, '#forge:nuggets/copper']),
        e.recipes.createCutting(inter,inter)
	]).transitionalItem(inter).loops(2).id('ico:bronze_tubing')

    inter = 'kubejs:incomplete_bronze_parts'
    e.recipes.create.sequenced_assembly([
	    'kubejs:bronze_parts'
	], 'create:fluid_tank', [
		e.recipes.createDeploying(inter, [inter, '#forge:gears/gold']),
        e.recipes.createDeploying(inter, [inter, 'kubejs:bronze_tubing']),
        e.recipes.createCutting(inter,inter),
        e.recipes.createDeploying(inter, [inter, 'kubejs:bronze_tubing']),
        e.recipes.createPressing(inter,inter)
	]).transitionalItem(inter).loops(3).id('ico:incomplete_bronze_parts')

    e.recipes.create.deploying('4x create:fluid_pipe', ['kubejs:bronze_tubing', '#forge:ingots/copper'])

    e.custom({
		"type": "create:item_application",
		"ingredients": [
			{
				"item": "create:fluid_pipe"
			},
			{
				"item": 'create:cogwheel'
			}
		],
		"results": [
			{
				"item": 'create:mechanical_pump'
			}
		]
	}).id('ico:mechanical_pump')

    e.custom({
		"type": "create:item_application",
		"ingredients": [
			{
				"item": "create:fluid_pipe"
			},
			{
				"item": '#forge:gears/iron'
			}
		],
		"results": [
			{
				"item": 'create:fluid_valve'
			}
		]
	}).id('ico:fluid_valve')

    e.custom({
		"type": "create:item_application",
		"ingredients": [
			{
				"item": "kubejs:bronze_parts"
			},
			{
				"item": 'minecraft:dried_kelp_block'
			}
		],
		"results": [
			{
				"item": 'create:spout'
			}
		]
	}).id('ico:spout')

    //logistics

    e.remove([{id:'create:crafting/kinetics/smart_chute'}, {id:'create:crafting/logistics/brass_funnel'}, {id:'create:crafting/logistics/brass_tunnel'}, {id:'create:crafting/kinetics/smart_fluid_pipe'}])

    e.custom({
		"type": "create:item_application",
		"ingredients": [
			{
				"item": "create:fluid_pipe"
			},
			{
				"item": 'kubejs:sorting_algorithm'
			}
		],
		"results": [
			{
				"item": 'create:smart_fluid_pipe'
			}
		]
	}).id('ico:smart_fluid_pipe')

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

    e.custom({
		"type": "create:item_application",
		"ingredients": [
			{
				"item": "create:chute"
			},
			{
				"item": 'kubejs:sorting_algorithm'
			}
		],
		"results": [
			{
				"item": 'create:smart_chute'
			}
		]
	}).id('ico:smart_chute')
})