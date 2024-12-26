ServerEvents.recipes(e => {
    function crude_ore_processing(ore, impuredust, material, ingot, compact) {
        e.remove({output: ingot, type: 'smelting', not: {mod: 'immersive_weathering'}, not: {input: '#create:crushed_raw_materials'}})
        e.remove({output: ingot, type: 'blasting', not: {mod: 'immersive_weathering'}, not: {input: '#create:crushed_raw_materials'}})

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
    /*crude_ore_processing('minecraft:raw_gold', 'kubejs:impure_gold_grit', 'gold', 'minecraft:gold_ingot')
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
	}).id('ico:sift_for_copper')*/
})