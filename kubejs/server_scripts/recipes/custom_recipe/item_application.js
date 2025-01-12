ServerEvents.recipes(e => {
    function item_application(block, item, result, ID) {
        e.custom({
            "type": "create:item_application",
            "ingredients": [
                {
                    "item": block
                },
                {
                    "item": item
                }
            ],
            "results": [
                {
                    "item": result
                }
            ]
        }).id(ID)
    }

    function item_application_craft(block, item, result, ID) {
        item_application(block, item, result, ID + "_application")
        e.shapeless(result, [block, item]).id(ID + "_shapeless")
    }

    //andesite
    item_application('kubejs:hardened_wood', 'kubejs:andesite_framing', 'create:andesite_casing', 'ico:andesite_casing')

    let cog_upgrade_resource = '#forge:ingots/tin'

    //item_application_craft('create:shaft', cog_upgrade_resource, 'create:cogwheel', 'ico:upgrade_shaft_cogwheel')

    item_application_craft('create:cogwheel', cog_upgrade_resource, 'create:large_cogwheel', 'ico:upgrade_cogwheel_large_cogwheel')
    //item_application_craft('extendedgears:shaftless_cogwheel', cog_upgrade_resource, 'extendedgears:large_shaftless_cogwheel', 'ico:upgrade_shaftless_cogwheel_large_shaftless_cogwheel')
    //item_application_craft('extendedgears:half_shaft_cogwheel', cog_upgrade_resource, 'extendedgears:large_half_shaft_cogwheel', 'ico:upgrade_half_shaft_cogwheel_large_half_shaft_cogwheel')
    item_application_craft('petrolsparts:coaxial_gear', cog_upgrade_resource, 'petrolsparts:large_coaxial_gear', 'ico:upgrade_coxial_cogwheel_large_coxial_cogwheel')

    item_application_craft('create:gearbox', 'kubejs:sawblade', 'create:mechanical_saw', 'ico:mechanical_saw')
    item_application_craft('create:gearbox', 'kubejs:iron_drill', 'create:mechanical_drill', 'ico:mechanical_drill')

    //bronze
    item_application('create:andesite_casing', 'kubejs:bronze_framing', 'create:copper_casing', 'ico:copper_casing')

    item_application_craft('create:fluid_pipe', 'create:cogwheel', 'create:mechanical_pump', 'ico:mechanical_pump')
    item_application_craft('create:fluid_pipe', '#forge:gears/iron', 'create:fluid_valve', 'ico:fluid_valve')

    item_application_craft('create:fluid_pipe', 'kubejs:sorting_algorithm', 'create:smart_fluid_pipe', 'ico:smart_fluid_pipe')
    item_application_craft('create:chute', 'kubejs:sorting_algorithm', 'create:smart_chute', 'ico:smart_chute')

    //brass
    item_application('create:copper_casing', 'kubejs:brass_framing', 'create:brass_casing', 'ico:brass_casing')

    //item_application_craft('create:brass_casing', 'create:propeller', 'create:encased_fan', 'ico:encased_fan')

    item_application_craft('create:mechanical_mixer', 'kubejs:mixer_upgrade_kit', 'createmetallurgy:foundry_mixer', 'ico:foundry_mixer')
    item_application_craft('createsifter:sifter', 'kubejs:sifter_upgrade_kit', 'createsifter:brass_sifter', 'ico:brass_sifter')
    item_application_craft('create:encased_fan', 'kubejs:fan_upgrade_kit', 'create_dd:industrial_fan', 'ico:industrial_fan')
})