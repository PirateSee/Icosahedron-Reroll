// contains soulstone level malum related recipes

ServerEvents.recipes(e => {
    //base materials
    e.remove([{output:'malum:processed_soulstone', not: {id: 'malum:soulstone_from_block'}}, {id: 'malum:spirit_infusion/soul_stained_steel_ingot'}])

    e.recipes.create.mixing('malum:processed_soulstone', ['malum:raw_soulstone', Fluid.of('create_enchantment_industry:experience', 2)]).lowheated().id('ico:processed_soulstone')
    e.recipes.create.mixing(['malum:processed_soulstone', Item.of('malum:hex_ash').withChance(0.25)], ['malum:raw_soulstone', Fluid.of('create_enchantment_industry:experience', 1)]).heated().id('ico:processed_soulstone_from_crushed')
  
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
})