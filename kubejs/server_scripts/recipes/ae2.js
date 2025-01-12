// contains ae2 related recipes

ServerEvents.recipes(e => {

    //resources
    e.remove([{id: 'ae2:transform/fluix_crystals'}, {id: 'ae2:smelting/silicon_from_certus_quartz_dust'}, {id: 'ae2:blasting/silicon_from_certus_quartz_dust'}])

    e.custom({
        "type": "wizards_reborn:alchemy_machine",
        "outputItem": {
            "item": "ae2:fluix_crystal",
            "count": 2
        },
        "wissen": 100,
        "steam": 200,
        "ingredients": [
            {
                "item": "wizards_reborn:alchemy_calx"
            },
            {
                "item": "ae2:charged_certus_quartz_crystal"
            },
            {
                "item": "ae2:charged_certus_quartz_crystal"
            }
        ],
        "fluidIngredients": [
            {
                "name": "wizards_reborn:alchemy_oil",
                "amount" : 100
            }
        ]
    }).id('ico:fluix_crystal')

    e.recipes.thermal.smelter('ae2:silicon', ['2x #forge:gems/quartz', 'ae2:certus_quartz_dust']).id('ico:silicon')

    //processors
    e.remove([{id: 'ae2:inscriber/logic_processor_print'}, {id: 'ae2:inscriber/logic_processor'}, {id: 'ae2:inscriber/calculation_processor'}, {id: 'ae2:inscriber/engineering_processor'}])

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
    }).id('ico:engineering_processor')

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
    e.remove([{id: 'ae2:network/parts/quartz_fiber'}, {id: 'ae2:network/blocks/inscribers'}, {id: 'ae2:network/blocks/storage_drive'}, {id: 'ae2:network/blocks/energy_energy_acceptor'}, {id: 'ae2:network/blocks/controller'}])
    e.recipes.create.deploying('ae2:quartz_fiber', ['ae2:certus_quartz_dust', '#thermal:glass/hardened']).id('ico:quartz_fiber')
    
    e.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
            "IPI",
            "IFI",
            "ISI",
            "____"
        ],
        "key": {
            "S": {
                "tag": "forge:plates/steel"
            },
            "I": {
                "tag": "forge:ingots/invar"
            },
            "F": {
                "item": "thermal:machine_frame"
            },
            "P": {
                "item": "create:mechanical_press"
            }
        },
        "output": {
            "item": "ae2:inscriber",
            "count": 1
        },
        "wissen": 200
    }).id('ico:inscriber')

    e.custom({
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
                "item": "thermal:machine_frame"
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
    }).id('ico:drive')

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
                "item": "thermal:machine_frame"
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

    e.recipes.createDeploying('ae2:1k_crafting_storage', ['ae2:crafting_unit', 'ae2:cell_component_1k'])
    e.recipes.createDeploying('ae2:4k_crafting_storage', ['ae2:crafting_unit', 'ae2:cell_component_4k'])
    e.recipes.createDeploying('ae2:16k_crafting_storage', ['ae2:crafting_unit', 'ae2:cell_component_16k'])
    e.recipes.createDeploying('ae2:64k_crafting_storage', ['ae2:crafting_unit', 'ae2:cell_component_64k'])
    e.recipes.createDeploying('ae2:256k_crafting_storage', ['ae2:crafting_unit', 'ae2:cell_component_256k'])

    e.recipes.createDeploying('ae2:item_storage_cell_1k', ['ae2:item_cell_housing', 'ae2:cell_component_1k'])
    e.recipes.createDeploying('ae2:item_storage_cell_4k', ['ae2:item_cell_housing', 'ae2:cell_component_4k'])
    e.recipes.createDeploying('ae2:item_storage_cell_16k', ['ae2:item_cell_housing', 'ae2:cell_component_16k'])
    e.recipes.createDeploying('ae2:item_storage_cell_64k', ['ae2:item_cell_housing', 'ae2:cell_component_64k'])
    e.recipes.createDeploying('ae2:item_storage_cell_256k', ['ae2:item_cell_housing', 'ae2:cell_component_256k'])

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

    e.custom({
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
    }).id('ico:cell_component_256k')
})