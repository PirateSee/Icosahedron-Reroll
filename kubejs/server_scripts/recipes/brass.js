// contains brass level create machinery related recipes

ServerEvents.recipes(e => {
    //alloying

    e.remove([{id: 'createmetallurgy:alloying/alloying_brass'}, {id: 'create:item_application/brass_casing_from_log'}, {id: 'create:item_application/brass_casing_from_wood'}])

    e.shaped('kubejs:brass_framing', [
        ' A ',
        'A A',
        ' A '
    ], {
        A: '#forge:plates/brass'
    }).id('ico:brass_framing')

    e.recipes.create.compacting('kubejs:brass_framing', ['4x #forge:plates/brass']).id('ico:brass_framing_compacting')

    //upgrades
    e.remove([{id: 'createmetallurgy:foundry_mixer'}, {id: 'createsifter:brass_sifter'}])

    e.shaped('kubejs:mixer_upgrade_kit', [
        ' C ',
        'OWO',
        'OOO'
    ], {
        C: 'create:copper_casing',
        W: 'kubejs:wrought_iron_block',
        O: 'minecraft:obsidian'
    }).id('ico:mixer_upgrade_kit')

    e.shaped('kubejs:sifter_upgrade_kit', [
        'BRB',
        'BCB'
    ], {
        C: 'create:brass_casing',
        B: 'create:brass_sheet',
        R: 'create:electron_tube'
    }).id('ico:sifter_upgrade_kit')

    e.shaped('2x kubejs:fan_upgrade_kit', [
        ' P ',
        'CBC'
    ], {
        C: 'create_dd:industrial_casing',
        B: 'create:cogwheel',
        P: 'create:propeller'
    }).id('ico:fan_upgrade_kit')

    e.shaped('2x kubejs:fan_upgrade_kit', [
        'CBC',
        ' P '
    ], {
        C: 'create_dd:industrial_casing',
        B: 'create:cogwheel',
        P: 'create:propeller'
    }).id('ico:fan_upgrade_kit_2')

    //machines
    e.remove([{id: 'vintageimprovements:craft/spring_coiling_machine'}, {id: 'vintageimprovements:craft/coling_wheel'}, {id: 'vintageimprovements:craft/vacuum_chamber'}, {id: 'create:crafting/kinetics/encased_fan'}])

    e.shaped('vintageimprovements:spring_coiling_machine', [
        'H  ',
        'WCS',
        'H  '
    ], {
        W: '#forge:storage_blocks/wrought_iron',
        H: '#forge:plates/wrought_iron',
        C: 'create:brass_casing',
        S: 'create:shaft'
    }).id('ico:spring_coiling_machine')

    e.shaped('vintageimprovements:vacuum_chamber', [
        'SCS',
        'HFH'
    ], {
        S: '#vintageimprovements:springs/iron',
        F: 'create:mechanical_pump',
        C: 'create:brass_casing',
        H: '#forge:plates/wrought_iron'
    }).id('ico:compressor')

    e.shaped('create:encased_fan', [
        'S',
        'B',
        'P'
    ], {
        B: 'create:brass_casing',
        P: 'create:propeller',
        S: 'create:shaft'
    }).id('ico:encased_fan')

    //sulfuric_acid
    e.remove([{id: 'vintageimprovements:pressurizing/sulfuric_acid'}, {id: 'vintageimprovements:pressurizing/sulfur_dioxide'}, {id: 'vintageimprovements:pressurizing/sulfur_trioxide'}])

    e.recipes.vintageimprovements.pressurizing([Fluid.of('vintageimprovements:sulfuric_acid', 500), Item.of('kubejs:waste_oxides').withChance(0.5)], ['#forge:gems/sulfur', '#forge:nuggets/iron', Fluid.of('minecraft:water', 1000)]).heated().secondaryFluidInput(0).id('ico:sulfuric_acid')

    //gemstone
    e.remove([{id: 'create:crafting/materials/electron_tube'}])

    /*e.remove([{id: 'create:crafting/materials/rose_quartz'}, {id: 'spelunkery:rose_quartz'}])
    e.recipes.create.mixing(['malum:blazing_quartz', '2x malum:blazing_quartz_fragment'], ['malum:blazing_quartz', "#forge:gems/quartz", Fluid.of('minecraft:lava', 500)]).id('ico:blazing_quartz_reaction')
    e.recipes.vintageimprovements.pressurizing('create:rose_quartz', ['malum:blazing_quartz', 'minecraft:redstone_block', Fluid.of('minecraft:lava', 1000)]).heated().secondaryFluidInput(0).id('ico:rose_quartz')*/

    /*let inter = 'kubejs:incomplete_electron_tube'
	e.recipes.create.sequenced_assembly([
		Item.of('create:electron_tube').withChance(16.0)
	], 'create:iron_sheet', [
		e.recipes.createDeploying(inter, [inter, '#forge:wires/all_metal']),
        e.recipes.createDeploying(inter, [inter, 'kubejs:aquatrine']),
        e.recipes.createPressing(inter, inter),
		e.recipes.createDeploying(inter, [inter, 'create:polished_rose_quartz']),
	]).transitionalItem(inter).loops(1).id('ico:electron_tube')*/

    e.shaped('create:electron_tube', [
        'Q',
        'W',
        'I'
    ], {
        W: '#forge:wires/copper',
        I: '#forge:plates/iron',
        Q: 'kubejs:aquatrine'
    }).id('ico:electron_tube')

    e.remove({id: 'spelunkery:crushing/polished_cinnabar'})

    e.recipes.create.crushing(['thermal:cinnabar_dust', 'minecraft:redstone', Item.of('minecraft:redstone_dust').withChance(0.5)], '#forge:gems/cinnabar').id('ico:crush_cinnabar')
    e.recipes.create.mixing(Item.of('minecraft:redstone_dust',3), ['thermal:cinnabar_dust', Fluid.of('immersiveengineering:redstone_acid', 250)]).id('ico:cinnabar_disolve')

    //advanced
    e.remove({id: 'create:sequenced_assembly/precision_mechanism'})

    let inter = 'create:incomplete_precision_mechanism'
    e.recipes.create.sequenced_assembly([
        Item.of('create:precision_mechanism').withChance(130.0),
		Item.of('create:brass_sheet').withChance(8.0),
		Item.of('create:andesite_alloy').withChance(8.0),
		Item.of('create:cogwheel').withChance(5.0),
		Item.of('create:shaft').withChance(2.0),
		Item.of('create:crushed_gold_ore').withChance(2.0),
		Item.of('2x create:brass_nugget').withChance(2.0),
		'thermal:tin_ingot',
		'clock'
    ], '#forge:plates/brass', [
		e.recipes.createDeploying(inter, [inter, 'create:cogwheel']),
		e.recipes.createDeploying(inter, [inter, 'create:large_cogwheel']),
		e.recipes.createDeploying(inter, [inter, '#forge:nuggets/nickel'])
	]).transitionalItem(inter).loops(5).id('ico:precision_mechanism')

    e.remove([{id: 'create:compacting/blaze_cake'}, {id: 'create:filling/blaze_cake'}, {id: 'create:crushing/netherrack'}])
    e.recipes.create.mixing('1x minecraft:netherrack', ['minecraft:cobblestone', 'malum:blazing_quartz_fragment']).id('ico:netherrack_from_blazing_quartz')
    e.recipes.create.crushing('create:cinder_flour', 'minecraft:nether_brick').id('ico:cinder_flour')

    e.recipes.create.compacting(['create:blaze_cake_base', 'thermal:nickel_ingot'], ['#forge:eggs', 'sugar', '4x create:cinder_flour', '#forge:ingots/nickel']).id('ico:blaze_cake_base')
    e.recipes.create.mixing([Fluid.of('kubejs:blazing_icing', 250), 'malum:blazing_quartz'], [Fluid.of('lava', 500), Fluid.of('thermal:sap', 250), '#forge:nuggets/copper', 'malum:blazing_quartz']).id('ico:blazing_icing')
    e.recipes.create.filling('create:blaze_cake', ['create:blaze_cake_base', Fluid.of('kubejs:blazing_icing', 250)]).id('ico:blaze_cake')
})