ServerEvents.recipes(e => {

    //andesite alloy
    e.remove([{id:'create:crafting/materials/andesite_alloy'}, {id:'create:crafting/materials/andesite_alloy_from_zinc'}, {id:'create:mixing/andesite_alloy'}, {id:'create:mixing/andesite_alloy_from_zinc'}])

    e.recipes.create.milling('kubejs:crushed_andesite', 'minecraft:andesite').id('ico:crushed_andesite_milling')

    e.shapeless('kubejs:andesite_slush', ['2x kubejs:crushed_andesite', '2x #ico:andesite_alloyable', '2x minecraft:clay_ball', 'minecraft:water_bucket']).id('ico:andesite_slush_shapeless')
    //e.shapeless('2x kubejs:andesite_slush', ['4x kubejs:crushed_andesite', '4x #ico:andesite_alloyable', 'minecraft:water_bucket']).id('ico:andesite_slush_shapeless_double')
    e.recipes.create.mixing('kubejs:andesite_slush', ['kubejs:crushed_andesite', '#ico:andesite_alloyable', 'minecraft:clay_ball', Fluid.of('minecraft:water', 250)]).id('ico:andesite_slush_mixing')
    e.recipes.create.mixing('create:andesite_alloy', ['kubejs:crushed_andesite', '#ico:andesite_alloyable', 'minecraft:clay_ball', Fluid.of('minecraft:water', 250)]).id('ico:andesite_alloy_mixing').heated()

    e.smelting('create:andesite_alloy', 'kubejs:andesite_slush').id('ico:andesite_alloy_smelting')
    e.blasting('create:andesite_alloy', 'kubejs:andesite_slush').id('ico:andesite_alloy_blasting')

    e.shapeless('kubejs:scorched_slush', ['2x #ico:coal_fragments', 'kubejs:andesite_slush']).id('ico:scorched_slush_shapeless')

    e.recipes.create.mixing('kubejs:scorched_slush', ['kubejs:andesite_slush', '#ico:coal_fragments']).id('ico:scorched_slush_mixing')
    e.recipes.create.mixing('kubejs:scorched_alloy', ['kubejs:andesite_slush', '#ico:coal_fragments']).id('ico:scorched_alloy_mixing').heated()
    e.recipes.create.mixing('3x kubejs:scorched_slush', ['3x kubejs:andesite_slush', 'malum:arcane_charcoal_fragment']).id('ico:scorched_slush_mixing_from_arcane')
    e.recipes.create.mixing('3x kubejs:scorched_alloy', ['3x kubejs:andesite_slush', 'malum:arcane_charcoal_fragment']).id('ico:scorched_alloy_mixing_from_arcane').heated()

    e.smelting('kubejs:scorched_alloy', 'kubejs:scorched_slush').id('ico:scorched_alloy_smelting')
    e.blasting('kubejs:scorched_alloy', 'kubejs:scorched_slush').id('ico:scorched_alloy_blasting')

    e.shaped('create:basin', [
        'A A',
        'AAA'
    ], {
        A: 'kubejs:scorched_alloy'
    }).id('ico:basin')

    //cogwheels
    //e.remove([{id:'create:crafting/kinetics/cogwheel'}])
    e.smoking('supplementaries:ash', '#immersive_weathering:flammable_planks').id('ico:smoking_planks')
    e.smoking('supplementaries:ash', '#minecraft:logs_that_burn').id('ico:smoking_logs')
    e.shapeless('kubejs:hardened_wood_planks', ['#minecraft:planks', 'supplementaries:ash', 'spelunkery:stone_pebble']).id('ico:hardened_wood_planks')

    e.shapeless('petrolsparts:coaxial_gear', ['kubejs:hardened_wood_planks', '2x #minecraft:wooden_buttons']).id('ico:coaxial_gear')
    e.shapeless('petrolsparts:large_coaxial_gear', ['2x kubejs:hardened_wood_planks', '4x #minecraft:wooden_buttons']).id('ico:large_coaxial_gear')
    e.shapeless('petrolsparts:large_coaxial_gear', ['petrolsparts:coaxial_gear', '1x kubejs:hardened_wood_planks', '2x #minecraft:wooden_buttons']).id('ico:large_coaxial_gear_upgrade')

    e.custom({
		"type": "create:item_application",
		"ingredients": [
			{
				"item": "kubejs:hardened_wood_planks"
			},
			{
				"item": 'create:andesite_alloy'
			}
		],
		"results": [
			{
				"item": 'create:andesite_casing'
			}
		]
	})
})