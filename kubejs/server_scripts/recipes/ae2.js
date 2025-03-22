// contains ae2 related recipes

ServerEvents.recipes(e => {

    //resources
    e.remove([{id: 'ae2:decorative/quartz_glass'}])

    //processors
    /*e.remove([{id: 'ae2:inscriber/logic_processor_print'}, {id: 'ae2:inscriber/logic_processor'}, {id: 'ae2:inscriber/calculation_processor'}, {id: 'ae2:inscriber/engineering_processor'}])

    e.custom({
        "type": "ae2:inscriber",
        "ingredients": {
            "middle": {
                "item": "wizards_reborn:arcane_gold_ingot"
            },
            "top": {
                "item": "ae2:logic_processor_press"
            }
        },
        "mode": "inscribe",
        "result": {
            "count": 1,
            "item": "ae2:printed_logic_processor"
        }
    }).id('ico:printed_logic_processor')

    e.custom({
        "type": "ae2:inscriber",
        "ingredients": {
            "bottom": {
                "item": "ae2:printed_silicon"
            },
            "middle": {
                "item": "thermal:rf_coil"
            },
            "top": {
                "item": "ae2:printed_logic_processor"
            }
        },
        "mode": "press",
        "result": {
            "count": 1,
            "item": "ae2:logic_processor"
        }
    }).id('ico:logic_processor')

    e.custom({
        "type": "ae2:inscriber",
        "ingredients": {
            "bottom": {
                "item": "ae2:printed_silicon"
            },
            "middle": {
                "item": "thermal:rf_coil"
            },
            "top": {
                "item": "ae2:printed_calculation_processor"
            }
        },
        "mode": "press",
        "result": {
            "count": 1,
            "item": "ae2:calculation_processor"
        }
    }).id('ico:calculation_processor')

    e.custom({
        "type": "ae2:inscriber",
        "ingredients": {
            "bottom": {
                "item": "ae2:printed_silicon"
            },
            "middle": {
                "item": "thermal:rf_coil"
            },
            "top": {
                "item": "ae2:printed_engineering_processor"
            }
        },
        "mode": "press",
        "result": {
            "count": 1,
            "item": "ae2:engineering_processor"
        }
    }).id('ico:engineering_processor')    */

    //cells
    e.remove([{id: 'ae2:network/cells/item_cell_housing'}, {id: 'ae2:network/cells/fluid_cell_housing'}])

    e.recipes.shaped('ae2:item_cell_housing', [
        'GRG',
        'G G',
        'III'
    ], {
        R: 'thermal:rf_coil',
        G: 'ae2:quartz_glass',
        I: '#forge:ingots/invar'
    })

    e.recipes.shaped('ae2:fluid_cell_housing', [
        'GRG',
        'G G',
        'III'
    ], {
        R: 'thermal:rf_coil',
        G: 'ae2:quartz_glass',
        I: '#forge:ingots/bronze'
    })

    //network
    e.remove([{id: 'ae2:network/panels_semi_dark_monitor'}, {id: 'ae2:network/crystal_resonance_generator'}, {id: 'ae2:network/parts/quartz_fiber_part'}, {id: 'ae2:network/blocks/inscribers'}, {id: 'ae2:network/blocks/storage_drive'}, {id: 'ae2:network/blocks/energy_energy_acceptor'}, {id: 'ae2:network/blocks/controller'}])
    //e.recipes.create.deploying('ae2:quartz_fiber', ['ae2:certus_quartz_dust', '#thermal:glass/hardened']).id('ico:quartz_fiber')
    e.shaped('3x ae2:semi_dark_monitor', [
        "IG",
        'RG',
        'IG'
    ], {
        G: '#forge:glass',
        R: 'minecraft:redstone',
        I: 'forge:ingots/iron'
    }).id('ico:semi_dark_monitor')
    
    e.shaped('ae2:quartz_fiber', [
        "GQA"
    ], {
        G: '#thermal:glass/hardened',
        Q: 'ae2:certus_quartz_dust',
        A: 'ico:andesite_alloyable'
    }).id('ico:quartz_fiber')

    e.shaped('ae2:crystal_resonance_generator', [
        "BFB",
        "BUB",
        "III"
    ], {
        B: '#forge:ingots/bronze',
        F: 'ae2:fluix_block',
        I: '#forge:ingots/iron',
        U: '#forge:raw_materials/uranium'
    }).id('ico:crystal_resonance_generator')
    
    e.shaped('ae2:inscriber', [
        "III",
        "B B",
        "III"
    ], {
        B: '#forge:ingots/bronze',
        I: '#forge:ingots/iron'
    }).id('ico:inscriber')

    e.shaped('ae2:drive', [
        "IPI",
        "STS",
        "IPI"
    ], {
        I: '#forge:ingots/invar',
        T: '#forge:ingots/tellurium',
        S: "forge:plates/steel",
        P: 'ae2:engineering_processor'
    }).id('ico:drive')

    e.shaped('ae2:interface', [
        "ISI",
        "A F",
        "ISI"
    ], {
        I: '#forge:ingots/invar',
        A: 'ae2:annihilation_core',
        F: 'ae2:formation_core',
        S: 'forge:plates/steel'
    }).id('ico:interface')

    /*e.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
            "ITI",
            "IFI",
            "ISI",
            "_P_P"
        ],
        "key": {
            "S": {
                "tag": "forge:plates/steel"
            },
            "T": {
                "item": "kubejs:tellurium"
            },
            "I": {
                "tag": "forge:ingots/invar"
            },
            "F": {
                "item": "immersiveengineering:light_engineering"
            },
            "P": {
                "item": "ae2:engineering_processor"
            }
        },
        "output": {
            "item": "ae2:drive",
            "count": 1
        },
        "wissen": 250
    }).id('ico:drive')*/

    e.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
            "IGI",
            "GFG",
            "IGI",
            "EEEE"
        ],
        "key": {
            "E": {
                "tag": "forge:wires/electrum"
            },
            "I": {
                "tag": "forge:ingots/invar"
            },
            "F": {
                "item": "immersiveengineering:light_engineering"
            },
            "G": {
                "item": "ae2:quartz_glass"
            }
        },
        "output": {
            "item": "ae2:energy_acceptor",
            "count": 1
        },
        "wissen": 200
    }).id('ico:energy_acceptor')

    e.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
            "SIS",
            "IPI",
            "SIS",
            "LLLL"
        ],
        "key": {
            "S": {
                "tag": "forge:ingots/steel"
            },
            "I": {
                "tag": "forge:plates/aluminum"
            },
            "P": {
                "item": "ae2:engineering_processor"
            },
            "L": {
                "item": "ae2:fluix_crystal"
            }
        },
        "output": {
            "item": "ae2:controller",
            "count": 1
        },
        "wissen": 1000
    }).id('ico:controller')

    e.recipes.createDeploying('ae2:1k_crafting_storage', ['ae2:crafting_unit', 'ae2:cell_component_1k']).id('ico:deploy_1k_crafting_storage')
    e.recipes.createDeploying('ae2:4k_crafting_storage', ['ae2:crafting_unit', 'ae2:cell_component_4k']).id('ico:deploy_4k_crafting_storage')
    e.recipes.createDeploying('ae2:16k_crafting_storage', ['ae2:crafting_unit', 'ae2:cell_component_16k']).id('ico:deploy_16k_crafting_storage')
    e.recipes.createDeploying('ae2:64k_crafting_storage', ['ae2:crafting_unit', 'ae2:cell_component_64k']).id('ico:deploy_64k_crafting_storage')
    e.recipes.createDeploying('ae2:256k_crafting_storage', ['ae2:crafting_unit', 'ae2:cell_component_256k']).id('ico:deploy_256k_crafting_storage')

    e.recipes.createDeploying('ae2:item_storage_cell_1k', ['ae2:item_cell_housing', 'ae2:cell_component_1k']).id('ico:item_storage_cell_1k')
    e.recipes.createDeploying('ae2:item_storage_cell_4k', ['ae2:item_cell_housing', 'ae2:cell_component_4k']).id('ico:item_storage_cell_4k')
    e.recipes.createDeploying('ae2:item_storage_cell_16k', ['ae2:item_cell_housing', 'ae2:cell_component_16k']).id('ico:item_storage_cell_16k')
    e.recipes.createDeploying('ae2:item_storage_cell_64k', ['ae2:item_cell_housing', 'ae2:cell_component_64k']).id('ico:item_storage_cell_64k')
    e.recipes.createDeploying('ae2:item_storage_cell_256k', ['ae2:item_cell_housing', 'ae2:cell_component_256k']).id('ico:item_storage_cell_256k')

    e.recipes.createDeploying('ae2:fluid_storage_cell_1k', ['ae2:fluid_cell_housing', 'ae2:cell_component_1k'])
    e.recipes.createDeploying('ae2:fluid_storage_cell_4k', ['ae2:fluid_cell_housing', 'ae2:cell_component_4k'])
    e.recipes.createDeploying('ae2:fluid_storage_cell_16k', ['ae2:fluid_cell_housing', 'ae2:cell_component_16k'])
    e.recipes.createDeploying('ae2:fluid_storage_cell_64k', ['ae2:fluid_cell_housing', 'ae2:cell_component_64k'])
    e.recipes.createDeploying('ae2:fluid_storage_cell_256k', ['ae2:fluid_cell_housing', 'ae2:cell_component_256k'])

    e.recipes.createDeploying('appbot:mana_storage_cell_1k', ['appbot:mana_cell_housing', 'ae2:cell_component_1k'])
    e.recipes.createDeploying('appbot:mana_storage_cell_4k', ['appbot:mana_cell_housing', 'ae2:cell_component_4k'])
    e.recipes.createDeploying('appbot:mana_storage_cell_16k', ['appbot:mana_cell_housing', 'ae2:cell_component_16k'])
    e.recipes.createDeploying('appbot:mana_storage_cell_64k', ['appbot:mana_cell_housing', 'ae2:cell_component_64k'])
    e.recipes.createDeploying('appbot:mana_storage_cell_256k', ['appbot:mana_cell_housing', 'ae2:cell_component_256k'])

    e.recipes.createDeploying('appmek:chemical_storage_cell_1k', ['appmek:chemical_cell_housing', 'ae2:cell_component_1k'])
    e.recipes.createDeploying('appmek:chemical_storage_cell_4k', ['appmek:chemical_cell_housing', 'ae2:cell_component_4k'])
    e.recipes.createDeploying('appmek:chemical_storage_cell_16k', ['appmek:chemical_cell_housing', 'ae2:cell_component_16k'])
    e.recipes.createDeploying('appmek:chemical_storage_cell_64k', ['appmek:chemical_cell_housing', 'ae2:cell_component_64k'])
    e.recipes.createDeploying('appmek:chemical_storage_cell_256k', ['appmek:chemical_cell_housing', 'ae2:cell_component_256k'])

    //reprocessing
    //e.recipes.thermal.crystalizing('ae2:certus_quartz_crystal', ['ae2:certus_quartz_dust', Fluid.of('minecraft:water', 1000)]).id('ico:certus_quartz_crystal')
    e.custom({
        "type": "thermal:crystallizer",
        "ingredients": [
            {
                "fluid": "minecraft:water",
                "amount": 2000
            },
            {
                "item": "ae2:certus_quartz_dust"
            }
        ],
        "result": [
            {
                "item": "ae2:certus_quartz_crystal"
            }
        ]
    }).id('ico:crystallize_certus_quartz')

    //disks
    e.remove({id: /^ae2:network\/cells\/*?/})

    /*e.recipes.create.compacting('ae2:cell_component_1k', ["ae2:logic_processor", "3x ae2:quartz_glass", "4x #forge:gems/certus_quartz", Fluid.of('create_enchantment_industry:experience', 2)]).id('ico:compact_cell_component_1k')
    e.recipes.create.compacting('ae2:cell_component_4k', ["ae2:calculation_processor", "4x ae2:quartz_glass", "3x ae2:cell_component_1k", Fluid.of('create_enchantment_industry:experience', 4)]).id('ico:compact_cell_component_4k')
    e.recipes.create.compacting('ae2:cell_component_16k', ["ae2:calculation_processor", "4x ae2:quartz_glass", "3x ae2:cell_component_4k", Fluid.of('create_enchantment_industry:experience', 8)]).id('ico:compact_cell_component_16k')
    e.recipes.create.compacting('ae2:cell_component_64k', ["ae2:calculation_processor", "4x ae2:sky_dust", "3x ae2:cell_component_16k", Fluid.of('create_enchantment_industry:experience', 16)]).id('ico:compact_cell_component_64k')
    e.recipes.create.compacting('ae2:cell_component_256k', ["ae2:calculation_processor", "4x ae2:sky_dust", "3x ae2:cell_component_64k", Fluid.of('create_enchantment_industry:experience', 32)]).id('ico:compact_cell_component_256k')*/

    e.shaped('ae2:cell_component_1k', [
        'RLR',
        'BQB',
        'RGR'
    ], {
        Q: 'ae2:quartz_block',
        L: 'ae2:logic_processor',
        B: '#ico:exp_items',
        G: 'apotheosis:gem_dust',
        R: 'ae2:sky_dust'
    }).id('ico:cell_component_1k')

    e.shaped('ae2:cell_component_4k', [
        'BLR',
        'CGC',
        'RCB'
    ], {
        G: 'ae2:quartz_glass',
        L: 'ae2:calculation_processor',
        C: 'ae2:cell_component_1k',
        B: '#ico:exp_items',
        R: 'minecraft:redstone'
    }).id('ico:cell_component_4k')

    e.shaped('ae2:cell_component_16k', [
        'BLR',
        'CGC',
        'RCB'
    ], {
        G: 'ae2:quartz_glass',
        L: 'ae2:calculation_processor',
        C: 'ae2:cell_component_4k',
        B: '#ico:exp_items',
        R: 'minecraft:glowstone_dust'
    }).id('ico:cell_component_16k')

    e.shaped('ae2:cell_component_64k', [
        'BLR',
        'CGC',
        'RCB'
    ], {
        G: 'ae2:quartz_glass',
        L: 'ae2:calculation_processor',
        C: 'ae2:cell_component_64k',
        B: '#ico:exp_items',
        R: 'minecraft:glowstone_dust'
    }).id('ico:cell_component_64k')

    e.shaped('ae2:cell_component_256k', [
        'RLR',
        'CGC',
        'RCR'
    ], {
        G: 'ae2:quartz_glass',
        L: 'ae2:calculation_processor',
        C: 'ae2:cell_component_64k',
        R: 'ae2:fluix_dust'
    }).id('ico:cell_component_256k')

    /*e.custom({
        "type": "wizards_reborn:arcane_iterator",
        "output": {
            "item": "ae2:cell_component_1k",
            "count": 1
        },
        "wissen": 400,
        "experience": 0,
        "ingredients": [
            {
                "item": "ae2:logic_processor"
            },
            {
                "tag": "forge:gems/certus_quartz"
            },
            {
                "tag": "forge:gems/certus_quartz"
            },
            {
                "tag": "forge:gems/certus_quartz"
            },
            {
                "tag": "forge:gems/certus_quartz"
            },
            {
                "item": "ae2:quartz_glass"
            }
        ]
    }).id('ico:cell_component_1k')

    e.custom({
        "type": "wizards_reborn:arcane_iterator",
        "output": {
            "item": "ae2:cell_component_4k",
            "count": 1
        },
        "wissen": 500,
        "experience": 5,
        "ingredients": [
            {
                "item": "ae2:calculation_processor"
            },
            {
                "item": "ae2:cell_component_1k"
            },
            {
                "item": "ae2:cell_component_1k"
            },
            {
                "item": "ae2:cell_component_1k"
            },
            {
                "item": "ae2:quartz_glass"
            },
            {
                "item": "ae2:quartz_glass"
            },
            {
                "item": "ae2:quartz_glass"
            },
            {
                "item": "ae2:quartz_glass"
            }
        ]
    }).id('ico:cell_component_4k')

    e.custom({
        "type": "wizards_reborn:arcane_iterator",
        "output": {
            "item": "ae2:cell_component_16k",
            "count": 1
        },
        "wissen": 1000,
        "experience": 5,
        "ingredients": [
            {
                "item": "ae2:calculation_processor"
            },
            {
                "item": "ae2:cell_component_4k"
            },
            {
                "item": "ae2:cell_component_4k"
            },
            {
                "item": "ae2:cell_component_4k"
            },
            {
                "item": "ae2:quartz_glass"
            },
            {
                "item": "ae2:quartz_glass"
            },
            {
                "item": "ae2:quartz_glass"
            },
            {
                "item": "ae2:quartz_glass"
            }
        ]
    }).id('ico:16k_storage_part')

    e.custom({
        "type": "wizards_reborn:arcane_iterator",
        "output": {
            "item": "ae2:cell_component_64k",
            "count": 1
        },
        "wissen": 1000,
        "experience": 5,
        "ingredients": [
            {
                "item": "ae2:calculation_processor"
            },
            {
                "item": "ae2:cell_component_16k"
            },
            {
                "item": "ae2:cell_component_16k"
            },
            {
                "item": "ae2:cell_component_16k"
            },
            {
                "item": "ae2:quartz_glass"
            },
            {
                "item": "ae2:quartz_glass"
            },
            {
                "item": "ae2:quartz_glass"
            },
            {
                "item": "ae2:quartz_glass"
            }
        ]
    }).id('ico:cell_component_64k')

    e.custom({
        "type": "wizards_reborn:arcane_iterator",
        "output": {
            "item": "ae2:cell_component_256k",
            "count": 1
        },
        "wissen": 1500,
        "experience": 10,
        "ingredients": [
            {
                "item": "ae2:calculation_processor"
            },
            {
                "item": "ae2:cell_component_64k"
            },
            {
                "item": "ae2:cell_component_64k"
            },
            {
                "item": "ae2:cell_component_64k"
            },
            {
                "item": "ae2:sky_dust"
            },
            {
                "item": "ae2:sky_dust"
            },
            {
                "item": "ae2:sky_dust"
            },
            {
                "item": "ae2:sky_dust"
            }
        ]
    }).id('ico:cell_component_256k')*/
})