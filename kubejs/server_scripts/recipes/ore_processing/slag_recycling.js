ServerEvents.recipes(e => {
    e.custom({
        "type": "createmetallurgy:melting",
        "ingredients": [
            {
                "item": 'kubejs:congealed_flux_slag'
            }
        ],
        "processingTime": 100,
        "results": [
            {
                "fluid": 'kubejs:metalworking_flux',
                "amount": 3
            },
            {
                'item': 'kubejs:soft_slag_dust'
            }
        ],
        "heatRequirement": 'heated'
    }).id("ico:melt_congealed_flux_slag")

    e.recipes.create.compacting('#forge:slag', '4x kubejs:soft_slag_dust').id('ico:compact_soft_slag_dust')

    //platinum mud
    //melting recipe, see custom_recipe/melting

    e.recipes.create.mixing(Fluid.of('kubejs:acidic_platinum_mud', 100), [Fluid.of('kubejs:platinum_mud_solution', 50), Fluid.of('vintageimprovements:sulfuric_acid', 10)]).id('ico:dissolve_platinum_mud')

    e.recipes.vintageimprovements.centrifugation(['2x minecraft:gold_nugget', 'thermal:silver_nugget', Item.of('kubejs:tellurium_dust').withChance(0.75), '2x minecraft:clay'], Fluid.of('kubejs:acidic_platinum_mud', 1000), 150, 64).id('ico:recycle_platinum_mud')

    e.custom({
        "type": "thermal:crystallizer",
        "ingredients": [
            {
                "fluid": "minecraft:water",
                "amount": 2000
            },
            {
                "item": "kubejs:tellurium_dust"
            }
        ],
        "result": [
            {
                "item": "kubejs:tellurium_fragment"
            }
        ]
    }).id('ico:crystallize_tellurium')
    e.recipes.create.compacting('kubejs:tellurium', '4x kubejs:tellurium_fragment').id('ico:compact_tellurium')

    //waste oxides
    e.recipes.create.crushing(['minecraft:iron_nugget', 'thermal:tin_nugget', 'vintageimprovements:sulfur_chunk'], 'kubejs:waste_oxides').id('ico:recylce_waste_oxides')
})