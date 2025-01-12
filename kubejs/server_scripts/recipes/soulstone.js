// contains soulstone level malum related recipes

ServerEvents.recipes(e => {
    //base materials
    e.remove([{output:'malum:processed_soulstone', not: {id: 'malum:soulstone_from_block'}}, {id: 'malum:spirit_infusion/soul_stained_steel_ingot'}])

    e.recipes.create.mixing('malum:processed_soulstone', ['malum:raw_soulstone', Fluid.of('create_enchantment_industry:experience', 2)]).lowheated().id('ico:processed_soulstone')
    e.recipes.create.mixing(['malum:processed_soulstone', Item.of('malum:hex_ash').withChance(0.25)], ['malum:crushed_soulstone', Fluid.of('create_enchantment_industry:experience', 1)]).heated().id('ico:processed_soulstone_from_crushed')
  
    e.custom({
        "type": "malum:spirit_infusion",
        "extra_items": [
            {
                "count": 4,
                "item": "malum:processed_soulstone"
            }
        ],
            "input": {
            "count": 1,
            "item": "kubejs:wrought_iron_ingot"
        },
            "output": {
            "item": "malum:soul_stained_steel_ingot"
        },
        "spirits": [
            {
                "type": "wicked",
                "count": 3
            },
            {
                "type": "earthen"
            },
            {
                "type": "arcane"
            }
        ]
    }).id('ico:soul_stained_steel_ingot')

    e.custom({
        "type": "malum:spirit_infusion",
        "extra_items": [
            {
                "count": 1,
                "item": "malum:soul_stained_steel_plating"
            },
            {
                "count": 2,
                "item": "malum:blazing_quartz"
            },
            {
                "count": 2,
                "item": "malum:hex_ash"
            }
        ],
        "input": {
            "count": 2,
            "item": "malum:runewood_log"
        },
        "output": {
            "count": 2,
            "item": "malum:runewood_totem_base"
        },
        "spirits": [
            {
                "type": "aerial",
                "count": 2
            },
            {
                "type": "aqueous",
                "count": 2
            },
            {
                "type": "earthen",
                "count": 2
            },
            {
                "type": "infernal",
                "count": 2
            },
            {
                "type": "eldritch"
            }
        ]
    }).id('ico:runewood_totem_base')
})