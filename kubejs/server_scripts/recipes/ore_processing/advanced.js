ServerEvents.recipes(e => {
    function advanced_ore_processing(material, output1, output1count, output2, output2count, byproduct) {
        let ore = "kubejs:" + material + "_ore"
        let crushed = "kubejs:crushed_" + material
        let dirty_dust = "kubejs:dirty_" + material + "_dust"
        let dust = "kubejs:" + material + "_dust"

        let slurry = "kubejs:" + material + "_slurry"

        e.recipes.create.crushing([crushed, Item.of('create:experience_nugget').withChance(0.5)], ore).id("ico:crush_" + material)
        e.recipes.create.milling(dirty_dust, crushed).id("ico:mill_crushed_" + material)
        e.recipes.create.splashing([dust, Item.of(byproduct).withChance(0.5)], dirty_dust).id("ico:wash_dirty_" + material)

        e.custom({
            "type": "createmetallurgy:melting",
            "ingredients": [
                {
                    "item": crushed
                }
            ],
            "processingTime": 150,
            "results": [
                {
                    "fluid": slurry,
                    "amount": 200
                },
                {
                    "item": 'kubejs:platinum_mud',
                    "chance": 0.2
                }
            ],
            "heatRequirement": "heated"
        }).id("ico:melt_crushed_" + material)

        e.custom({
            "type": "createmetallurgy:melting",
            "ingredients": [
                {
                    "item": dirty_dust
                }
            ],
            "processingTime": 100,
            "results": [
                {
                    "fluid": slurry,
                    "amount": 200
                }
            ],
            "heatRequirement": "heated"
        }).id("ico:melt_dirty_" + material + "_dust")

        e.custom({
            "type": "createmetallurgy:melting",
            "ingredients": [
                {
                    "item": dust
                }
            ],
            "processingTime": 90,
            "results": [
                {
                    "fluid": slurry,
                    "amount": 200
                }
            ],
            "heatRequirement": "heated"
        }).id("ico:melt_" + material + "_dust")

        e.custom({
            "type": "createmetallurgy:alloying",
            "heatRequirement": "heated",
            "ingredients": [
                {
                    "fluid": slurry,
                    "amount": 200
                },
                {
                    "fluid": 'kubejs:metalworking_flux',
                    "amount": 20
                }
            ],
            "processingTime": 100,
            "results": [
                {
                    "fluid": output1,
                    "amount": output1count
                },
                {
                    "fluid": output2,
                    "amount": output2count
                },
                {
                    "item": 'kubejs:congealed_flux_slag'
                },
                {
                    "item": 'kubejs:congealed_flux_slag',
                    "chance": 0.75
                }
            ]
        }).id("ico:purify_" + material + "_slurry")
    }

    function advanced_ore_processing_single(material, output1, output1count, byproduct) {
        let ore = "kubejs:" + material + "_ore"
        let crushed = "kubejs:crushed_" + material
        let dirty_dust = "kubejs:dirty_" + material + "_dust"
        let dust = "kubejs:" + material + "_dust"

        let slurry = "kubejs:" + material + "_slurry"

        e.recipes.create.crushing([crushed, Item.of('create:experience_nugget').withChance(0.5)], ore).id("ico:crush_" + material)
        e.recipes.create.milling(dirty_dust, crushed).id("ico:mill_crushed_" + material)
        e.recipes.create.splashing([dust, Item.of(byproduct).withChance(0.5)], dirty_dust).id("ico:wash_dirty_" + material)

        e.custom({
            "type": "createmetallurgy:melting",
            "ingredients": [
                {
                    "item": crushed
                }
            ],
            "processingTime": 150,
            "results": [
                {
                    "fluid": slurry,
                    "amount": 200
                },
                {
                    "item": 'kubejs:platinum_mud',
                    "chance": 0.35
                }
            ],
            "heatRequirement": "heated"
        }).id("ico:melt_crushed_" + material)

        e.custom({
            "type": "createmetallurgy:melting",
            "ingredients": [
                {
                    "item": dirty_dust
                }
            ],
            "processingTime": 100,
            "results": [
                {
                    "fluid": slurry,
                    "amount": 200
                }
            ],
            "heatRequirement": "heated"
        }).id("ico:melt_dirty_" + material + "_dust")

        e.custom({
            "type": "createmetallurgy:melting",
            "ingredients": [
                {
                    "item": dust
                }
            ],
            "processingTime": 90,
            "results": [
                {
                    "fluid": slurry,
                    "amount": 200
                }
            ],
            "heatRequirement": "heated"
        }).id("ico:melt_" + material + "_dust")

        e.custom({
            "type": "createmetallurgy:alloying",
            "heatRequirement": "heated",
            "ingredients": [
                {
                    "fluid": slurry,
                    "amount": 200
                },
                {
                    "fluid": 'kubejs:metalworking_flux',
                    "amount": 10
                }
            ],
            "processingTime": 100,
            "results": [
                {
                    "fluid": output1,
                    "amount": output1count
                },
                {
                    "item": 'kubejs:congealed_flux_slag'
                },
                {
                    "item": 'kubejs:congealed_flux_slag',
                    "chance": 0.5
                }
            ]
        }).id("ico:purify_" + material + "_slurry")
    }

    advanced_ore_processing('hematite', 'createmetallurgy:molten_iron', 80, 'createmetallurgy:molten_tin', 20, 'minecraft:glowstone_dust')
    advanced_ore_processing('malachite', 'createmetallurgy:molten_copper', 100, 'createmetallurgy:molten_gold', 20, 'spelunkery:rough_lazurite_chunk')

    //silver
    e.remove({output: '#forge:ingots/silver', type: 'smelting'})
    e.remove({output: '#forge:ingots/silver', type: 'blasting'})
    e.remove([{id: 'create:splashing/thermal/crushed_raw_silver'}, {id: 'create:splashing/immersiveengineering/crushed_raw_silver'}])

    e.recipes.create.crushing(['create:crushed_raw_silver', Item.of('create:experience_nugget').withChance(0.5)], '#forge:raw_materials/silver').id("ico:crush_silver")

    e.recipes.create.crushing(['create:crushed_raw_silver', Item.of('create:crushed_raw_silver').withChance(0.25), Item.of('create:experience_nugget').withChance(0.75), Item.of('minecraft:cobblestone').withChance(0.12)], '#ico:stone_silver_ores').id("ico:crush_silver_stone_ore")
    e.recipes.create.crushing(['create:crushed_raw_silver', Item.of('create:crushed_raw_silver').withChance(0.5), Item.of('create:experience_nugget').withChance(0.75), Item.of('minecraft:cobbled_deepslate').withChance(0.12)], '#ico:deepslate_silver_ores').id("ico:crush_silver_deepslate_ore")

    e.recipes.create.crushing(['create:crushed_raw_silver', Item.of('create:crushed_raw_silver').withChance(0.25), Item.of('create:experience_nugget').withChance(0.75), Item.of('minecraft:granite').withChance(0.12)], 'spelunkery:granite_silver_ore').id("ico:crush_granite_silver_ore")
    e.recipes.create.crushing(['create:crushed_raw_silver', Item.of('create:crushed_raw_silver').withChance(0.25), Item.of('create:experience_nugget').withChance(0.75), Item.of('minecraft:diorite').withChance(0.12)], 'spelunkery:diorite_silver_ore').id("ico:crush_diorite_silver_ore")
    e.recipes.create.crushing(['create:crushed_raw_silver', Item.of('create:crushed_raw_silver').withChance(0.25), Item.of('create:experience_nugget').withChance(0.75), Item.of('minecraft:andesite').withChance(0.12)], 'spelunkery:andesite_silver_ore').id("ico:crush_andesite_silver_ore")
    e.recipes.create.crushing(['create:crushed_raw_silver', Item.of('create:crushed_raw_silver').withChance(0.5), Item.of('create:experience_nugget').withChance(0.75), Item.of('minecraft:tuff').withChance(0.12)], 'spelunkery:tuff_silver_ore').id("ico:crush_tuff_silver_ore")

    e.recipes.create.milling('kubejs:dirty_silver_dust', 'create:crushed_raw_silver').id("ico:mill_crushed_silver")
    e.recipes.create.splashing(['kubejs:silver_dust', Item.of('#forge:nuggets/silver').withChance(0.5)], 'kubejs:dirty_silver_dust').id("ico:wash_dirty_silver")

    e.custom({
        "type": "createmetallurgy:melting",
        "ingredients": [
            {
                "item": 'create:crushed_raw_silver'
            }
        ],
        "processingTime": 150,
        "results": [
            {
                "fluid": 'kubejs:silver_slurry',
                "amount": 200
            },
            {
                "item": 'kubejs:platinum_mud',
                "chance": 0.35
            }
        ],
        "heatRequirement": "heated"
    }).id("ico:melt_crushed_silver")

    e.custom({
        "type": "createmetallurgy:melting",
        "ingredients": [
            {
                "item": 'kubejs:dirty_silver_dust'
            }
        ],
        "processingTime": 100,
        "results": [
            {
                "fluid": 'kubejs:silver_slurry',
                "amount": 200
            }
        ],
        "heatRequirement": "heated"
    }).id("ico:melt_dirty_silver" + "_dust")

    e.custom({
        "type": "createmetallurgy:melting",
        "ingredients": [
            {
                "tag": 'forge:dusts/silver'
            }
        ],
        "processingTime": 90,
        "results": [
            {
                "fluid": 'kubejs:silver_slurry',
                "amount": 200
            }
        ],
        "heatRequirement": "heated"
    }).id("ico:melt_silver" + "_dust")

    e.custom({
        "type": "createmetallurgy:alloying",
        "heatRequirement": "heated",
        "ingredients": [
            {
                "fluid": 'kubejs:silver_slurry',
                "amount": 200
            },
            {
                "fluid": 'kubejs:metalworking_flux',
                "amount": 10
            }
        ],
        "processingTime": 100,
        "results": [
            {
                "fluid": 'createmetallurgy:molten_silver',
                "amount": 90
            },
            {
                "item": 'kubejs:congealed_flux_slag'
            },
            {
                "item": 'kubejs:congealed_flux_slag',
                "chance": 0.5
            }
        ]
    }).id("ico:purify_silver" + "_slurry")
})