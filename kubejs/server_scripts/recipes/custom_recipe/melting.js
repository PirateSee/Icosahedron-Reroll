ServerEvents.recipes(e => {
    //material
    function melting(input, output, amount, ID, processingTime, heatRequirement) {
        if (heatRequirement == null) {
            heatRequirement = "heated"
        }

        if (processingTime == null) {
            processingTime = 100
        }

        e.custom({
            "type": "createmetallurgy:melting",
            "ingredients": [
                {
                    "item": input
                }
            ],
            "processingTime": processingTime,
            "results": [
                {
                    "fluid": output,
                    "amount": amount
                }
            ],
            "heatRequirement": heatRequirement
        }).id(ID)
    }

    function melting_tag(input, output, amount, ID, processingTime, heatRequirement) {
        if (heatRequirement == null) {
            heatRequirement = "heated"
        }

        if (processingTime == null) {
            processingTime = 100
        }

        e.custom({
            "type": "createmetallurgy:melting",
            "ingredients": [
                {
                    "tag": input
                }
            ],
            "processingTime": processingTime,
            "results": [
                {
                    "fluid": output,
                    "amount": amount
                }
            ],
            "heatRequirement": heatRequirement
        }).id(ID)
    }

    function casting_table(mold, input, amount, output, ID, processingTime, consume) {
        if (consume == null) {
            consume = false
        }

        if (processingTime == null) {
            processingTime = 100
        }

        e.custom({
            "type": "createmetallurgy:casting_in_table",
            "ingredients": [
                {
                    "item": mold
                },
                {
                    "fluid": input,
                    "amount": amount
                }
            ],
            "processingTime": processingTime,
            "mold_consumed": consume,
            "result": {
                "item": output
            }
        }).id(ID)
    }

    function casting_basin(input, amount, output, ID, processingTime, consume) {
        if (consume == null) {
            consume = false
        }

        if (processingTime == null) {
            processingTime = 100
        }

        e.custom({
            "type": "createmetallurgy:casting_in_basin",
            "ingredients": [
                {
                    "fluid": input,
                    "amount": amount
                }
            ],
            "processingTime": processingTime,
            "result": {
                "item": output
            }
        }).id(ID)
    }

    //ID should be the name of the material
    //it gets concat with namespace and other text to make each recipe's unique ID
    function molten_handling(nugget, ingot, block, molten, ID) {    
        melting_tag('forge:ingots/' + ID, molten, 90, "ico:melt_" + ID + "_ingot")
        melting_tag('forge:nuggets/' + ID, molten, 10, "ico:melt_" + ID + "_nugget", 11)

        melting_tag('forge:plates/' + ID, molten, 90, "ico:melt_" + ID + "_plate", 110)
        if(ID != 'silver') {melting_tag('forge:dusts/' + ID, molten, 90, "ico:melt_" + ID + "_dust", 80)}
        melting_tag('forge:gears/' + ID, molten, 90, "ico:melt_" + ID + "_gear")
        melting_tag('forge:coins/' + ID, molten, 30, "ico:melt_" + ID + "_coin", 33)

        casting_table("createmetallurgy:graphite_ingot_mold", molten, 90, ingot, "ico:cast_" + ID + "_ingot", 90)
        casting_table("createmetallurgy:graphite_nugget_mold", molten, 10, nugget, "ico:cast_" + ID + "_nugget", 90)
        casting_basin(molten, 320, block, "ico:cast_" + ID + "_block", 320)
    }

    function molten_ids(material, namespace, fluid_namespace) {
        if (namespace == null) {
            namespace = "kubejs"
        }

        if (fluid_namespace == null) {
            fluid_namespace = namespace
        }
        
        if (namespace == "immersiveengineering") {
        molten_handling(namespace + ":nugget_" + material,
            namespace + ":ingot_" + material,
            namespace + ":storage_" + material,
            fluid_namespace + ":molten_" + material,
            material)
        } else {
        molten_handling(namespace + ":" + material + "_nugget",
            namespace + ":" + material + "_ingot",
            namespace + ":" + material + "_block",
            fluid_namespace + ":molten_" + material,
            material)
        }
    }

    //molten_ids('iron', 'minecraft', 'createmetallurgy')
    //molten_ids('copper', 'minecraft', 'createmetallurgy')
    //molten_ids('gold', 'minecraft', 'createmetallurgy')
    //molten_ids('zinc', 'create', 'createmetallurgy')
    //molten_ids('brass', 'create', 'createmetallurgy')

    molten_ids('wrought_iron')
    molten_ids('pig_iron')
    //molten_ids('bronze', 'thermal', 'kubejs')
    //molten_ids('rose_gold', 'thermal', 'kubejs')

    //molten_ids('silver', 'thermal', 'kubejs')
    //molten_ids('nickel', 'thermal', 'kubejs')
    //molten_ids('electrum', 'thermal', 'kubejs')
    //molten_ids('invar', 'thermal', 'kubejs')

    //molten_ids('aluminum', 'immersiveengineering', 'kubejs')

    molten_ids('carbon_steel')

    //wrought iron
    melting('minecraft:raw_iron', 'kubejs:molten_pig_iron', 90, "ico:pig_iron_from_raw", 120, "lowheated")
    melting('kubejs:limonite_ore', 'kubejs:molten_pig_iron', 90, "ico:pig_iron_from_limonite", 90, "lowheated")

    melting('kubejs:wrought_iron_balls', 'kubejs:molten_wrought_iron', 45, "ico:wrought_iron_from_balls", 60, "lowheated")
    melting('kubejs:steel_balls', 'createmetallurgy:molten_steel', 45, "ico:steel_from_balls", 60, "superheated")

    //reprocessing
    melting('kubejs:platinum_mud', 'kubejs:platinum_mud_solution', 500, "ico:platinum_mud", 150, "superheated")
})