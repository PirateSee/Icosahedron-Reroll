ServerEvents.recipes(e => {

    //andesite alloy
    e.remove([{id:'create:crafting/materials/andesite_alloy'}, {id:'create:crafting/materials/andesite_alloy_from_zinc'}, {id:'create:mixing/andesite_alloy'}, {id:'create:mixing/andesite_alloy_from_zinc'}])

    e.recipes.create.milling('kubejs:crushed_andesite', 'minecraft:andesite').id('ico:crushed_andesite_milling')

    e.shapeless('kubejs:andesite_slush', ['4x kubejs:crushed_andesite', '2x #ico:andesite_alloyable', 'minecraft:water_bucket']).id('ico:andesite_slush_shapeless')
    //e.shapeless('2x kubejs:andesite_slush', ['4x kubejs:crushed_andesite', '4x #ico:andesite_alloyable', 'minecraft:water_bucket']).id('ico:andesite_slush_shapeless_double')
    e.recipes.create.mixing('kubejs:andesite_slush', ['2x kubejs:crushed_andesite', '#ico:andesite_alloyable', Fluid.of('minecraft:water', 1000)]).id('ico:andesite_slush_mixing')
    //e.recipes.create.mixing('create:andesite_alloy', ['kubejs:crushed_andesite', '#ico:andesite_alloyable', 'minecraft:clay_ball', Fluid.of('minecraft:water', 1000)]).id('ico:andesite_alloy_mixing').heated()

    e.smelting('create:andesite_alloy', 'kubejs:andesite_slush').id('ico:andesite_alloy_smelting')
    e.blasting('create:andesite_alloy', 'kubejs:andesite_slush').id('ico:andesite_alloy_blasting')

    e.remove([{id: 'createlowheated:basic_burner'}])

    e.shaped('createlowheated:basic_burner', [
        'TA',
        'AT',
        'TA'
    ], {
        A: 'createdeco:andesite_sheet',
        T: '#forge:plates/tin'
    }).id('ico:basic_burner')

    //cogwheels
    e.remove([{id:'create:crafting/kinetics/cogwheel'}, {id:'create:crafting/kinetics/large_cogwheel'}, {id:'create:crafting/kinetics/large_cogwheel_from_little'}, {id:'create:deploying/large_cogwheel'}, {id:'create:deploying/cogwheel'}, {id:'create_dd:item_application/large_cogwheel'}, {id:'create_dd:item_application/cogwheel'}, {id:'petrolsparts:cutting/coaxial_gear_from_wood'}])
    e.remove([{id:'extendedgears:crafting/half_shaft_cogwheel'}, {id:'extendedgears:crafting/large_half_shaft_cogwheel'}, {id:'extendedgears:deploying/half_shaft_cogwheel'}, {id:'extendedgears:deploying/large_half_shaft_cogwheel'}, {id:'extendedgears:crafting/shaftless_cogwheel'}, {id:'extendedgears:crafting/large_shaftless_cogwheel'}, {id:'extendedgears:deploying/shaftless_cogwheel'}, {id:'extendedgears:deploying/large_shaftless_cogwheel'}, {id:'extendedgears:deploying/small_large_shaftless_cogwheel_to_large/large_shaftless_cogwheel'}])

    //e.remove([{id:'create:crafting/kinetics/cogwheel'}])
    e.smoking('supplementaries:ash', '#immersive_weathering:flammable_planks').id('ico:smoking_planks')
    e.smoking('supplementaries:ash', '#minecraft:logs_that_burn').id('ico:smoking_logs')

    e.shapeless('kubejs:hardened_wood_planks', ['2x #minecraft:planks', 'supplementaries:ash', 'kubejs:andesite_slush']).id('ico:hardened_wood_planks')
    e.shaped('kubejs:compacted_hardened_wood', [
        'WW',
        'WW'
    ], {
        W: 'kubejs:hardened_wood_planks'
    }).id('ico:compacted_hardened_wood')

    //e.shapeless('extendedgears:shaftless_cogwheel', ['kubejs:hardened_wood_planks']).id('ico:coaxial_gear')
    //e.shapeless('extendedgears:large_shaftless_cogwheel', ['2x kubejs:hardened_wood_planks']).id('ico:large_coaxial_gear')
    //e.shapeless('extendedgears:large_shaftless_cogwheel', ['extendedgears:shaftless_cogwheel', '1x kubejs:hardened_wood_planks']).id('ico:large_coaxial_gear_upgrade')

    //e.shapeless('create:large_cogwheel', ['create:cogwheel', 'kubejs:hardened_wood_planks']).id('ico:large_cogwheel_upgrade')

    e.shaped('petrolsparts:coaxial_gear', [
        'TTT',
        'T T',
        'TTT'
    ], {
        T: '#forge:nuggets/tin'
    }).id('ico:coaxial_gear')

    e.shaped('create:cogwheel', [
        'TTT',
        'TST',
        'TTT'
    ], {
        T: '#forge:nuggets/tin',
        S: 'create:shaft'
    }).id('ico:cogwheel')

    e.shaped('petrolsparts:large_coaxial_gear', [
        'TTT',
        'TIT',
        'TTT'   
    ], {
        T: '#forge:nuggets/tin',
        I: '#forge:ingots/tin'
    }).id('ico:large_coaxial_gear')

    let inter = 'kubejs:incomplete_wooden_slide'
    e.recipes.create.sequenced_assembly([
	    'petrolsparts:coaxial_gear'
	], '#forge:nuggets/tin', [
		e.recipes.createDeploying(inter, [inter, '#forge:nuggets/tin'])
	]).transitionalItem(inter).loops(7).id('ico:coaxial_gear_assembly')

    e.remove([{id:'create:item_application/andesite_casing_from_log'}, {id:'create:item_application/andesite_casing_from_wood'}])

    e.shaped('kubejs:andesite_framing', [
        ' A ',
        'A A',
        ' A '
    ], {
        A: 'create:andesite_alloy'
    }).id('ico:andesite_framing_shaped')
    e.recipes.create.compacting('kubejs:andesite_framing', ['4x create:andesite_alloy']).id('ico:andesite_framing_compacting')

    //machinery
    e.remove([{id:'create:crafting/kinetics/mechanical_press'}, {id:'create:crafting/kinetics/whisk'}, {id:'create:crafting/kinetics/mechanical_mixer'}, {id:'create:crafting/kinetics/mechanical_saw'}, {id:'create:crafting/kinetics/mechanical_drill'}, {id:'create:crafting/kinetics/deployer'}, {id:'create_mechanical_extruder:mechanical_extruder'}])

    e.shaped('kubejs:wooden_slide', [
        'L',
        'S',
        'L'
    ], {
        L: '#forge:stripped_logs',
        S: 'create:shaft'
    }).id('ico:wooden_slide')

    inter = 'kubejs:incomplete_wooden_slide'
    e.recipes.create.sequenced_assembly([
	    'kubejs:wooden_slide'
	], 'create:shaft', [
		e.recipes.createDeploying(inter, [inter, '#forge:stripped_logs']),
        e.recipes.createDeploying(inter, [inter, '#forge:stripped_logs']),
        e.recipes.createCutting(inter,inter)
	]).transitionalItem(inter).loops(1).id('ico:wooden_slide_assembly')

    e.shaped('kubejs:andesite_parts', [
        'WTW',
        'LCL'
    ], {
        C: 'create:gearbox',
        T: '#forge:storage_blocks/tin',
        W: 'kubejs:wooden_slide',
        L: 'create:large_cogwheel'
    }).id('ico:andesite_parts')

    inter = 'kubejs:incomplete_andesite_parts'
    e.recipes.create.sequenced_assembly([
	    'kubejs:andesite_parts'
	], 'create:gearbox', [
		e.recipes.createDeploying(inter, [inter, 'create:large_cogwheel']),
        e.recipes.createDeploying(inter, [inter, 'kubejs:wooden_slide']),
        e.recipes.createCutting(inter,inter),
		e.recipes.createDeploying(inter, [inter, '#forge:plates/tin']),
        e.recipes.createPressing(inter,inter)
	]).transitionalItem(inter).loops(2).id('ico:andesite_parts_assembly')

    inter = 'kubejs:incomplete_wooden_slide'
    e.recipes.create.sequenced_assembly([
	    'create:gearbox'
	], 'create:andesite_casing', [
		e.recipes.createDeploying(inter, [inter, 'create:cogwheel'])
	]).transitionalItem(inter).loops(4).id('ico:gearbox_assembly')

    e.shaped('create:mechanical_press', [
        ' W ',
        ' C ',
        ' T '
    ], {
        W: 'kubejs:wooden_slide',
        C: 'create:andesite_casing',
        T: '#forge:storage_blocks/tin'
    }).id('ico:mechanical_press')

    e.shaped('create:whisk', [
        ' A ',
        'TAT',
        'TTT'
    ], {
        A: 'create:andesite_alloy',
        T: '#forge:plates/tin'
    }).id('ico:whisk')

    e.shaped('create:mechanical_mixer', [
        ' W ',
        'SC ',
        ' T '
    ], {
        W: 'kubejs:wooden_slide',
        S: 'create:cogwheel',
        C: 'create:gearbox',
        T: 'create:whisk'
    }).id('ico:mechanical_mixer')

    e.shaped('kubejs:sawblade', [
        ' S ',
        'SAS',
        ' S '
    ], {
        S: '#forge:plates/tin',
        A: 'create:shaft'
    }).id('ico:sawblade')

    e.shaped('kubejs:iron_drill', [
        ' SI',
        'IIS',
        'AI '
    ], {
        S: '#forge:plates/iron',
        I: '#forge:ingots/iron',
        A: 'create:shaft'
    }).id('ico:iron_drill')

    e.shaped('kubejs:bronze_hand', [
        ' A ',
        'BDB',
        ' B '
    ], {
        A: 'create:andesite_alloy',
        B: '#forge:plates/bronze',
        D: 'minecraft:diamond',
    }).id('ico:bronze_hand')

    e.shaped('create:deployer', [
        ' W ',
        ' C ',
        ' T '
    ], {
        W: 'kubejs:wooden_slide',
        C: 'create:gearbox',
        T: 'kubejs:bronze_hand'
    }).id('ico:deployer')

    //see custom_recipe/item_application.js for the rest

    //contraption anchors
    e.remove([{id: 'create:crafting/kinetics/mechanical_bearing'}])
    e.remove([{id: 'create:crafting/kinetics/piston_extension_pole'}, {id: 'create:crafting/kinetics/mechanical_piston'}])

    e.shaped('8x create:piston_extension_pole', [
        'W',
        'A'
    ], {
        W: 'kubejs:wooden_slide',
        A: 'create:andesite_alloy'
    }).id('ico:piston_extension_pole')

    //blast furnace
    e.remove({id: 'immersiveengineering:crafting/blastbrick'})

    e.recipes.shaped('3x immersiveengineering:blastbrick', [
        'TBT',
        'BAB',
        'TBT'
    ], {
        B: '#forge:ingots/brick',
        T: '#minecraft:terracotta',
        A: 'create:andesite_alloy'
    })

    //logistics

    e.remove([{id:'create:crafting/kinetics/belt_connector'}, {id:'create:crafting/kinetics/chute'}, {id:'create:crafting/kinetics/andesite_funnel'}, {id:'create:crafting/kinetics/andesite_tunnel'}, {id:'create:crafting/kinetics/item_vault'}, {id:'create_connected:crafting/kinetics/item_silo'}])

    e.recipes.create.compacting('kubejs:kelp_sheet', '6x minecraft:dried_kelp').id('ico:kelp_sheet')

    e.recipes.create.cutting('create:belt_connector', 'kubejs:kelp_sheet').id('ico:belt_connector')

    e.shaped('4x create:chute', [
        'P',
        'I',
        'P'
    ], {
        P: '#forge:plates/tin',
        I: '#forge:ingots/tin'
    }).id('ico:chute')

    e.shaped('2x create:andesite_funnel', [
        'A',
        'K'
    ], {
        A: 'create:andesite_alloy',
        K: 'kubejs:kelp_sheet'
    }).id('ico:andesite_funnel')

    e.shaped('2x create:andesite_tunnel', [
        'AA',
        'KK'
    ], {
        A: 'create:andesite_alloy',
        K: 'kubejs:kelp_sheet'
    }).id('ico:andesite_tunnel')

    e.shaped('2x create:item_vault', [
        'P',
        'B',
        'P'
    ], {
        P: '#forge:plates/tin',
        B: '#c:barrels'
    }).id('ico:item_vault')

    e.shaped('2x create_connected:item_silo', [
        'PBP',
    ], {
        P: '#forge:plates/tin',
        B: '#c:barrels'
    }).id('ico:item_silo')

    //sifter
    e.remove([{id: 'create:milling/andesite'}, {id: 'minecraft:andesite'}, {id: 'createsifter:sifting/gravel_andesite_mesh'}, {id: 'createsifter:sifting/gravel_zinc_mesh'}, {id: 'createsifter:sifting/gravel_brass_mesh'}, {id: 'createsifter:sifting/gravel_advanced_brass_mesh'}, {id: 'createsifter:sifting/sand_andesite_mesh'}, {id: 'createsifter:sifting/sand_zinc_mesh'}, {id: 'createsifter:sifting/sand_brass_mesh'}, {id: 'createsifter:sifting/soul_sand_brass_mesh'}, {id: 'createsifter:sifting/soul_sand_advanced_brass_mesh'}, {id: 'create:splashing/sand'}])

    //other
    e.remove({id: 'born_in_chaos_v1:fire_light_dust_k'})

    e.shapeless('3x minecraft:fire_charge', ['minecraft:gunpowder', 'born_in_chaos_v1:fire_dust', '#minecraft:coals'])

    //raw tin
    e.smelting('thermal:tin_nugget', 'kubejs:raw_tin_nugget').id('ico:smelting_raw_tin_nugget').cookingTime(23)
    e.blasting('thermal:tin_nugget', 'kubejs:raw_tin_nugget').id('ico:blasting_raw_tin_nugget').cookingTime(12)
    e.shapeless('thermal:raw_tin', '9x kubejs:raw_tin_nugget').id('ico:raw_tin')
})