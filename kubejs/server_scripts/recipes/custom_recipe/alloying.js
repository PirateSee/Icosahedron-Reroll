ServerEvents.recipes(e => {
    function alloying(input1, amount1, input2, amount2, output, amountOut, processingTime, ID, superheated) {
        let heat
        if(superheated === true) {
            heat = "superheated"
        } else {
            heat = "heated"
        }

        e.custom({
            "type": "createmetallurgy:alloying",
            "heatRequirement": heat,
            "ingredients": [
                {
                    "amount": amount1,
                    "fluid": input1
                },
                {
                    "amount": amount2,
                    "fluid": input2
                }
            ],
            "processingTime": processingTime,
            "results": [
                {
                    "amount": amountOut,
                    "fluid": output
                }
            ]
        }).id(ID)
    }

    function alloy_ratios(fluid1, fluid2, output, pure, ratio, total, time, id) {
        alloying(fluid1, Math.round(-(ratio-1)*total), fluid2, Math.round(ratio*total), output, total, time, 'ico:alloy_' + id)
        //purify with flux
        e.recipes.create.mixing([Fluid.of(pure, total), Item.of('kubejs:congealed_flux_slag').withChance(0.3)], [Fluid.of(output, total), Fluid.of('kubejs:metalworking_flux', 5)]).heated().id('ico:purify_' + id)
    }

    alloy_ratios('createmetallurgy:molten_copper', 'createmetallurgy:molten_zinc', 'kubejs:impure_brass', 'createmetallurgy:molten_brass', 0.5, 20, 60, 'brass')
    alloy_ratios('createmetallurgy:molten_copper', 'createmetallurgy:molten_tin', 'kubejs:impure_bronze', 'createmetallurgy:molten_bronze', 0.75, 40, 80, 'bronze')
    alloy_ratios('createmetallurgy:molten_copper', 'createmetallurgy:molten_gold', 'kubejs:impure_rose_gold', 'kubejs:molten_rose_gold', 0.5, 20, 40, 'rose_gold')

    alloy_ratios('createmetallurgy:molten_gold', 'createmetallurgy:molten_silver', 'kubejs:impure_electrum', 'createmetallurgy:molten_electrum', 0.5, 20, 40, 'electrum', true)
    alloy_ratios('createmetallurgy:molten_iron', 'createmetallurgy:molten_nickel', 'kubejs:impure_invar', 'createmetallurgy:molten_invar', 1/3, 30, 40, 'invar', true)

    e.custom({
        "type": "createmetallurgy:alloying",
        "heatRequirement": "superheated",
        "ingredients": [
            {
                "amount": 40,
                "fluid": "kubejs:molten_pig_iron"
            },
            {
                "item": "kubejs:coal_coke_piece"
            }
        ],
        "processingTime": 60,
        "results": [
            {
                "amount": 20,
                "fluid": "kubejs:molten_carbon_steel"
            }
        ]
    }).id("kubejs:carbon_steel")

    // remove base alloying
    e.remove([{id: 'createmetallurgy:alloying/invar'}, {id: 'createmetallurgy:alloying/bronze'}, {id: 'createmetallurgy:alloying/brass'}, {id: 'createmetallurgy:alloying/electrum'}, {id: 'createmetallurgy:alloying/constantan'}])
})