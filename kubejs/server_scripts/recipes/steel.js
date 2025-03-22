// contains steel level immersive engineering related recipes

ServerEvents.recipes(e => {
    //steel
    e.remove({id: 'immersiveengineering:crafting/cokebrick'})

    e.recipes.shaped('3x immersiveengineering:cokebrick', [
        'NBN',
        'BLB',
        'NBN'
    ], {
        B: '#forge:ingots/brick',
        N: 'minecraft:nether_brick',
        L: 'minecraft:blackstone'
    }).id('ico:cokebrick')

    /*e.custom({
        "type": "immersiveengineering:coke_oven",
        "creosote": 50,
        "input": {
          "tag": "forge:storage_blocks/charcoal"
        },
        "result": {
          "item": 'thermal:coal_coke'
        },
        "time": 2000
    }).id('ico:coal_coke')*/

    e.custom({
        "type": "thermal:pyrolyzer",
        "ingredient": {
            "tag": "forge:storage_blocks/charcoal"
        },
        "result": [
            {
                "item": "thermal:coal_coke"
            },
            {
                "fluid": "thermal:creosote",
                "amount": 10
            }
        ],
        "experience": 0.05
    }).id('ico:coal_coke_from_charcoal')

    e.remove([{id: 'createmetallurgy:alloying/steel'}, {id: 'immersiveengineering:blastfurnace/steel'}, {id: 'immersiveengineering:blastfurnace/steel_block'}, {id: 'createmetallurgy:smelting/coke_from_coal'}, {id: 'createmetallurgy:blasting/coke_from_coal'}])

    e.shapeless('8x kubejs:coal_coke_piece', '#forge:coal_coke').id('ico:coal_coke_piece')
    e.shapeless('#forge:coal_coke', '8x kubejs:coal_coke_piece').id('ico:compact_coal_coke')

    //e.recipes.create.mixing(Fluid.of('kubejs:scorched_flux', 250), [Fluid.of('kubejs:metalworking_flux', 250), '2x create:cinder_flour', 'minecraft:nether_wart']).superheated().id('ico:scorched_flux')

    e.custom({
        "type": "immersiveengineering:blast_furnace",
        "input": {
            "tag": "forge:ingots/carbon_steel"
        },
        "result": {
            "item": "kubejs:steel_balls"
        },
        "slag": {
            "tag": "forge:slag"
        },
        "time": 1200
    })

    //components
    e.recipes.create.cutting('kubejs:screws', '#forge:nuggets/carbon_steel').id('ico:screws')

    //treated wood

    e.remove([{id: 'immersiveengineering:crafting/treated_wood_horizontal'}, {id: 'createaddition:filling/treated_wood_planks'}])

    e.recipes.create.filling('immersiveengineering:treated_wood_horizontal', ['kubejs:hardened_wood_planks', Fluid.of('immersiveengineering:creosote', 125)]).id('ico:treated_wood_planks')

    //electric

    e.remove([{id: 'create_new_age:shaped/generator_coil'}, {id: 'create_new_age:shaped/carbon_brushes'}])

    e.recipes.create.mechanical_crafting('create_new_age:generator_coil', [
        ' CCC ',
        'CCSCC',
        'CSASC',
        'CCSCC',
        ' CCC '
    ], {
        C: '#forge:ingots/copper',
        S: '#forge:ingots/steel',
        A: 'create:andesite_alloy_block'
    }).id('ico:generator_coil')

    e.shaped('create_new_age:carbon_brushes', [
        'S S',
        'GHG',
        'S S'
    ], {
        G: 'createmetallurgy:graphite',
        S: '#forge:rods/steel',
        H: 'create:shaft'
    })

    e.shaped('create_new_age:magnetite_block', [
        'MM'
    ], {
        M: 'spelunkery:raw_magnetite'
    })

    //wiring
    e.remove([{id: 'immersiveengineering:crafting/wirecoil_copper'}, {id: 'immersiveengineering:crafting/wirecoil_electrum'}, {id: 'immersiveengineering:crafting/wirecoil_steel'}])

    let inter = 'kubejs:incomplete_andesite_parts'
    e.recipes.create.sequenced_assembly([
	    'immersiveengineering:wirecoil_copper'
	], 'createaddition:spool', [
		e.recipes.createDeploying(inter, [inter, '#forge:wires/copper']),
        e.recipes.createDeploying(inter, [inter, '#forge:wires/copper']),
        e.recipes.createDeploying(inter, [inter, '#forge:wires/copper']),
        e.recipes.createDeploying(inter, [inter, '#forge:wires/copper'])
	]).transitionalItem(inter).loops(1).id('ico:wirecoil_copper')

    e.recipes.create.deploying('immersiveengineering:wirecoil_copper_ins', ['immersiveengineering:wirecoil_copper', 'immersiveengineering:hemp_fabric']).id('ico:wirecoil_copper_ins')

    inter = 'kubejs:incomplete_andesite_parts'
    e.recipes.create.sequenced_assembly([
	    'immersiveengineering:wirecoil_electrum'
	], 'createaddition:spool', [
		e.recipes.createDeploying(inter, [inter, '#forge:wires/electrum']),
        e.recipes.createDeploying(inter, [inter, '#forge:wires/electrum']),
        e.recipes.createDeploying(inter, [inter, '#forge:wires/electrum']),
        e.recipes.createDeploying(inter, [inter, '#forge:wires/electrum'])
	]).transitionalItem(inter).loops(1).id('ico:wirecoil_electrum')

    inter = 'kubejs:incomplete_andesite_parts'
    e.recipes.create.sequenced_assembly([
	    'immersiveengineering:wirecoil_steel'
	], 'createaddition:spool', [
		e.recipes.createDeploying(inter, [inter, '#forge:wires/aluminum']),
        e.recipes.createDeploying(inter, [inter, '#forge:wires/steel']),
        e.recipes.createDeploying(inter, [inter, '#forge:wires/aluminum']),
        e.recipes.createDeploying(inter, [inter, '#forge:wires/steel']),
	]).transitionalItem(inter).loops(1).id('ico:wirecoil_steel')

    e.recipes.create.deploying('immersiveengineering:wirecoil_electrum_ins', ['immersiveengineering:wirecoil_electrum', 'immersiveengineering:hemp_fabric']).id('ico:wirecoil_electrum_ins')

    //connectors
    e.remove([{id: 'immersiveengineering:crafting/connector_lv'}, {id: 'immersiveengineering:crafting/relay_lv'},{id: 'immersiveengineering:crafting/connector_mv'}, {id: 'immersiveengineering:crafting/relay_mv'},{id: 'immersiveengineering:crafting/connector_hv'}, {id: 'immersiveengineering:crafting/relay_hv'}])

    /*e.recipes.create.deploying('immersiveengineering:connector_lv', ['#immersiveengineering:connector_insulator', '#forge:ingots/copper']).id('ico:connector_lv')
    e.recipes.create.deploying('2x immersiveengineering:relay_lv', ['#immersiveengineering:connector_insulator', '#forge:rods/copper']).id('ico:relay_lv')

    e.recipes.create.deploying('immersiveengineering:connector_mv', ['#immersiveengineering:connector_insulator', '#forge:ingots/electrum']).id('ico:connector_mv')
    e.recipes.create.deploying('2x immersiveengineering:relay_mv', ['#immersiveengineering:connector_insulator', '#forge:rods/electrum']).id('ico:relay_mv')

    e.recipes.create.deploying('immersiveengineering:connector_mv', ['#ico:insulating_glass', '#forge:ingots/aluminum']).id('ico:connector_hv')
    e.recipes.create.deploying('2x immersiveengineering:relay_mv', ['#ico:insulating_glass', '#forge:rods/aluminum']).id('ico:relay_hv')*/

    e.custom({
        "type": "immersiveengineering:blueprint",
        "category": "components",
        "inputs": [
            {
                "base_ingredient": {
                    "tag": "forge:rods/copper"
                },
                "count": 1
            },
            {
                "base_ingredient": {
                    "tag": "immersiveengineering:connector_insulator"
                },
                "count": 2
            },
            {
                "base_ingredient": {
                    "item": "kubejs:screws"
                },
                "count": 1
            }
        ],
        "result": {
            "count": 1,
            "item": "immersiveengineering:connector_lv"
        }
    }).id('ico:connector_lv')

    e.custom({
        "type": "immersiveengineering:blueprint",
        "category": "components",
        "inputs": [
            {
                "base_ingredient": {
                    "tag": "forge:plates/copper"
                },
                "count": 1
            },
            {
                "base_ingredient": {
                    "tag": "immersiveengineering:connector_insulator"
                },
                "count": 2
            },
            {
                "base_ingredient": {
                    "item": "kubejs:screws"
                },
                "count": 2
            }
        ],
        "result": {
            "count": 2,
            "item": "immersiveengineering:connector_lv_relay"
        }
    }).id('ico:connector_lv_relay')

    e.custom({
        "type": "immersiveengineering:blueprint",
        "category": "components",
        "inputs": [
            {
                "base_ingredient": {
                    "tag": "forge:rods/electrum"
                },
                "count": 1
            },
            {
                "base_ingredient": {
                    "tag": "immersiveengineering:connector_insulator"
                },
                "count": 2
            },
            {
                "base_ingredient": {
                    "item": "kubejs:screws"
                },
                "count": 1
            }
        ],
        "result": {
            "count": 1,
            "item": "immersiveengineering:connector_mv"
        }
    }).id('ico:connector_mv')

    e.custom({
        "type": "immersiveengineering:blueprint",
        "category": "components",
        "inputs": [
            {
                "base_ingredient": {
                    "tag": "forge:plates/electrum"
                },
                "count": 1
            },
            {
                "base_ingredient": {
                    "tag": "immersiveengineering:connector_insulator"
                },
                "count": 2
            },
            {
                "base_ingredient": {
                    "item": "kubejs:screws"
                },
                "count": 2
            }
        ],
        "result": {
            "count": 2,
            "item": "immersiveengineering:connector_mv_relay"
        }
    }).id('ico:connector_mv_relay')

    e.custom({
        "type": "immersiveengineering:blueprint",
        "category": "components",
        "inputs": [
            {
                "base_ingredient": {
                    "tag": "forge:rods/aluminum"
                },
                "count": 1
            },
            {
                "base_ingredient": {
                    "tag": "forge:rods/steel"
                },
                "count": 1
            },
            {
                "base_ingredient": {
                    "tag": "ico:insulating_glass"
                },
                "count": 2
            },
            {
                "base_ingredient": {
                    "item": "kubejs:screws"
                },
                "count": 2
            }
        ],
        "result": {
            "count": 1,
            "item": "immersiveengineering:connector_hv"
        }
    }).id('ico:connector_hv')

    e.custom({
        "type": "immersiveengineering:blueprint",
        "category": "components",
        "inputs": [
            {
                "base_ingredient": {
                    "tag": "forge:plates/aluminum"
                },
                "count": 1
            },
            {
                "base_ingredient": {
                    "tag": "forge:plates/steel"
                },
                "count": 1
            },
            {
                "base_ingredient": {
                    "tag": "ico:insulating_glass"
                },
                "count": 2
            },
            {
                "base_ingredient": {
                    "item": "kubejs:screws"
                },
                "count": 8
            }
        ],
        "result": {
            "count": 4,
            "item": "immersiveengineering:connector_hv_relay"
        }
    }).id('ico:connector_hv_relay')

    //misc wires
    e.remove([{id: 'immersiveengineering:crafting/wirecoil_structure_rope'}, {id: 'immersiveengineering:crafting/wirecoil_structure_steel'}, {id: 'immersiveengineering:crafting/wirecoil_redstone'}])

    inter = 'kubejs:incomplete_andesite_parts'
    e.recipes.create.sequenced_assembly([
	    'immersiveengineering:wirecoil_structure_rope'
	], 'createaddition:spool', [
		e.recipes.createDeploying(inter, [inter, 'immersiveengineering:hemp_fiber']),
        e.recipes.createDeploying(inter, [inter, 'immersiveengineering:hemp_fiber'])
	]).transitionalItem(inter).loops(1).id('ico:wirecoil_structure_rope')

    inter = 'kubejs:incomplete_andesite_parts'
    e.recipes.create.sequenced_assembly([
	    'immersiveengineering:wirecoil_structure_steel'
	], 'createaddition:spool', [
		e.recipes.createDeploying(inter, [inter, '#forge:wires/steel'])
	]).transitionalItem(inter).loops(1).id('ico:wirecoil_structure_steel')

    inter = 'kubejs:incomplete_andesite_parts'
    e.recipes.create.sequenced_assembly([
	    'immersiveengineering:wirecoil_redstone'
	], 'createaddition:spool', [
        e.recipes.createDeploying(inter, [inter, 'minecraft:redstone']),
		e.recipes.createDeploying(inter, [inter, '#forge:wires/gold'])
	]).transitionalItem(inter).loops(1).id('ico:wirecoil_redstone')

    //components
    e.remove([{id: 'immersiveengineering:crafting/blueprint_component'}, {id: 'immersiveengineering:crafting/component_iron'}, {id: 'immersiveengineering:blueprint/component_iron'}, {id: 'immersiveengineering:crafting/component_steel'}, {id: 'immersiveengineering:blueprint/component_steel'}])

    e.shaped(Item.of('immersiveengineering:blueprint', '{blueprint:"components"}'), [
        'BI',
        'P '
    ], {
        B: '#forge:dyes/blue',
        P: 'minecraft:paper',
        I: 'create:precision_mechanism'
    }).id('ico:blueprint_components')

    e.custom({
        "type": "immersiveengineering:blueprint",
        "category": "components",
        "inputs": [
            {
                "base_ingredient": {
                    "tag": "forge:plates/iron"
                },
                "count": 4
            },
            {
                "tag": "forge:ingots/nickel"
            },
            {
                "base_ingredient": {
                    "item": "kubejs:screws"
                },
                "count": 3
            }
        ],
        "result": {
            "item": "immersiveengineering:component_iron"
        }
    }).id('ico:component_iron')

    e.custom({
        "type": "immersiveengineering:blueprint",
        "category": "components",
        "inputs": [
            {
                "base_ingredient": {
                    "tag": "forge:plates/steel"
                },
                "count": 4
            },
            {
                "tag": "forge:ingots/invar"
            },
            {
                "base_ingredient": {
                    "item": "kubejs:screws"
                },
                "count": 3
            }
        ],
        "result": {
            "item": "immersiveengineering:component_steel"
        }
    }).id('ico:component_steel')

    //multiblocks
    e.remove([{id:'immersiveengineering:crafting/light_engineering'}, {id:'immersiveengineering:crafting/rs_engineering'}, {id:'immersiveengineering:crafting/heavy_engineering'}, {id:'immersiveengineering:crafting/steel_scaffolding_standard'}, {id:'immersiveengineering:crafting/alu_scaffolding_standard'}, {id:'immersiveengineering:crafting/blastfurnace_preheater'}])

    e.shaped('2x immersiveengineering:light_engineering', [
        'SCS',
        'CNC',
        'SCS'
    ], {
        S: 'immersiveengineering:sheetmetal_iron',
        C: 'immersiveengineering:component_iron',
        N: 'create:precision_mechanism'
    }).id('ico:light_engineering')

    e.shaped('2x immersiveengineering:rs_engineering', [
        'SCS',
        'CNC',
        'SCS'
    ], {
        S: 'immersiveengineering:sheetmetal_steel',
        C: 'minecraft:redstone',
        N: 'create:electron_tube'
    }).id('ico:rs_engineering')

    e.shaped('2x immersiveengineering:heavy_engineering', [
        'SCS',
        'CNC',
        'SCS'
    ], {
        S: 'immersiveengineering:sheetmetal_steel',
        C: 'immersiveengineering:component_steel',
        N: 'create:precision_mechanism'
    }).id('ico:heavy_engineering')

    e.shaped('3x immersiveengineering:steel_scaffolding_standard', [
        'SCS',
        'CSC',
        'SCS'
    ], {
        S: '#forge:rods/steel',
        C: 'kubejs:screws'
    }).id('ico:steel_scaffolding_standard')

    e.shaped('3x immersiveengineering:alu_scaffolding_standard', [
        'SCS',
        'CSC',
        'SCS'
    ], {
        S: '#forge:rods/aluminum',
        C: 'kubejs:screws'
    }).id('ico:alu_scaffolding_standard')

    e.shaped('immersiveengineering:blastfurnace_preheater', [
        'SS',
        'SS',
        'FH'
    ], {
        H: 'immersiveengineering:external_heater',
        F: 'create:encased_fan',
        S: 'immersiveengineering:sheetmetal_steel'
    }).id('ico:blastfurnace_preheater')

    //thermal machinery
    e.remove([{id: 'thermal:machine_frame'}, {id: 'thermal:rf_coil'}, {id: 'thermal:machine_refinery'}, {id: 'thermal:machine_crystallizer'}, {id: 'thermal:machine_chiller'}, {id: 'thermal:machine_smelter'}])

    /*e.recipes.shaped('thermal:machine_frame', [
        'SAS',
        'AGA',
        'SAS'
    ], {
        A: 'create:andesite_alloy',
        S: '#forge:plates/steel',
        G: '#forge:gears/invar'
    }).id('ico:machine_frame')*/

    e.recipes.create.deploying('thermal:rf_coil', ['#forge:rods/electrum', 'minecraft:redstone'])

    e.recipes.shaped('thermal:machine_refinery', [
        'LRL',
        'GFG',
        'LRL'
    ], {
        F: 'immersiveengineering:light_engineering',
        R: 'thermal:rf_coil',
        G: '#forge:gears/tin',
        L: '#forge:glass'
    }).id('ico:machine_refinery')

    e.recipes.shaped('thermal:machine_crystallizer', [
        'LRL',
        'GFG',
        'LRL'
    ], {
        F: 'immersiveengineering:light_engineering',
        R: 'thermal:rf_coil',
        G: '#forge:gears/rose_gold',
        L: '#thermal:glass/hardened'
    }).id('ico:machine_crystallizer')

    e.recipes.shaped('thermal:machine_chiller', [
        'LRL',
        'GFG',
        'LRL'
    ], {
        F: 'immersiveengineering:light_engineering',
        R: 'thermal:rf_coil',
        G: '#forge:gears/electrum',
        L: 'minecraft:packed_ice'
    }).id('ico:machine_chiller')

    e.recipes.shaped('thermal:machine_smelter', [
        'LRL',
        'GFG',
        'LRL'
    ], {
        F: 'immersiveengineering:light_engineering',
        R: 'thermal:rf_coil',
        G: '#forge:gears/invar',
        L: '#forge:ingots/steel'
    }).id('ico:machine_smelter')

    //induction smelter
    e.remove({id: /thermal:machines\/smelter\/.*alloy/}) //no alloying

    e.recipes.thermal.smelter('2x ae2:quartz_glass', ['2x thermal:obsidian_glass', 'ae2:certus_quartz_dust']).id('ico:quartz_glass')

    //bio resources
    e.remove([{id: 'createdieselgenerators:compacting/plant_oil'}, {id: 'createdieselgenerators:basin_fermenting/fermentable'}, {id: 'createdieselgenerators:basin_fermenting/fermented_spider_eye'}])

    e.custom({
        "type": "immersiveengineering:fermenter",
        "energy": 6400,
        "fluid": {
            "amount": 100,
            "fluid": "immersiveengineering:ethanol"
        },
        "input": {
            "item": "minecraft:spider_eye"
        },
        "result": {
            "item": "minecraft:fermented_spider_eye"
        }
    }).id('ico:industrial_fermented_spider_eye')

    //caustic soda

    e.custom({
        "type": "immersiveengineering:mixer",
        "energy": 3200,
        "fluid": {
            "amount": 500,
            "tag": "minecraft:water"
        },
        "inputs": [
            {
                "tag": "forge:salt"
            }
        ],
        "result": {
            "amount": 500,
            "fluid": "kubejs:brine"
        }
    }).id('ico:brine')

    e.recipes.create.mixing(Fluid.of('kubejs:caustic_soda', 50), Fluid.of('kubejs:brine', 100)).heated()

    //aluminum

    e.custom({
        "type": "immersiveengineering:crusher",
        "energy": 3200,
        "input": {
            "item": "kubejs:bauxite_ore"
        },
        "result": {
            "item": "kubejs:pulverized_bauxite",
            "count": 1
        },
        "secondaries": []
    }).id('ico:crush_bauxite')

    e.recipes.create.mixing(Fluid.of('kubejs:bauxite_slurry', 250), 'kubejs:pulverized_bauxite').heated().id('ico:mix_bauxite')
    e.custom({
        "type": "createmetallurgy:melting",
        "ingredients": [
            {
                "fluid": 'kubejs:bauxite_slurry',
                "amount": 250
            },
            {
                "fluid": 'kubejs:caustic_soda',
                "amount": 100
            }
        ],
        "processingTime": 100,
        "results": [
            {
                "fluid": 'kubejs:alumina_solution',
                "amount": 100
            },
            {
                "fluid": 'kubejs:red_mud',
                "amount": 100
            }
        ],
        "heatRequirement": 'superheated'
    }).id('ico:react_bauxite_slurry')

    e.custom({
        "type": "immersiveengineering:mixer",
        "energy": 3200,
        "fluid": {
            "amount": 100,
            "tag": "kubejs:alumina_solution"
        },
        "inputs": [
            {
                "tag": "forge:gems/fluorite"
            }
        ],
        "result": {
            "amount": 90,
            "fluid": "kubejs:molten_aluminum"
        }
    }).id('ico:crystalize_aluminum')

    e.shaped('kubejs:aluminum_contacts', [
        'SCS',
        'CNC',
        'SCS'
    ], {
        S: 'immersiveengineering:sheetmetal_aluminum',
        C: '#forge:plates/aluminum',
        N: 'create:electron_tube'
    }).id('ico:aluminum_contacts')

    //duroplast
    e.remove([{id:'immersiveengineering:refinery/resin'}, {id:'immersiveengineering:bottling/duroplast_plate'}, {id:'immersiveengineering:bottling/duroplast_block'}])
    e.custom({
        "type": "createdieselgenerators:distillation",
        "ingredients": [
            {
                "fluidTag": "forge:creosote",
                "amount": 100
            }
        ],
        "heatRequirement": "heated",
        "processingTime": 100,
        "results": [
            {
                "fluid": "kubejs:phenol",
                "amount": 50
            },
            {
                "fluid": "kubejs:cresol",
                "amount": 50
            }
        ]
    })

    e.custom({
        "type": "immersiveengineering:refinery",
        "energy": 240,
        "input0": {
            "amount": 12,
            "tag": "forge:acetaldehyde"
        },
        "input1": {
            "amount": 8,
            "tag": "forge:phenol"
        },
        "result": {
            "amount": 8,
            "fluid": "immersiveengineering:phenolic_resin"
        }
    }).id('ico:phenolic_resin')

    e.custom({
        "type": "immersiveengineering:bottling_machine",
        "fluid": {
            "amount": 250,
            "tag": "forge:phenolic_resin"
        },
        "inputs": [
            {
                "item": 'createmetallurgy:graphite_plate_mold'
            },
            {
                "item": 'minecraft:paper'
            }
        ],
        "results": [
            {
                "item": "immersiveengineering:plate_duroplast"
            },
            {
                "item": 'createmetallurgy:graphite_plate_mold'
            }
        ]
    }).id('ico:duroplast_sheet')

    e.custom({
        "type": "immersiveengineering:bottling_machine",
        "fluid": {
            "amount": 1000,
            "tag": "forge:phenolic_resin"
        },
        "inputs": [
            {
                "item": 'immersiveengineering:mold_packing_4'
            },
            {
                "base_ingredient": {
                    "item": 'minecraft:paper'
                },
                "count": 4
            },
        ],
        "results": [
            {
                "item": "immersiveengineering:duroplast"
            },
            {
                "item": 'immersiveengineering:mold_packing_4'
            }
        ]
    }).id('ico:duroplast')
})