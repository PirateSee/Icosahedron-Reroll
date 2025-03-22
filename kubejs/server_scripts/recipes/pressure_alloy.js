
ServerEvents.recipes(e => {
    //pressure alloy
    e.custom({
        "type": "immersiveengineering:arc_furnace",
        "additives": [
            {
                "tag": "ico:corundum"
            },
            {
                "tag": "forge:ingots/invar"
            }
        ],
        "energy": 51200,
        "input": {
            "base_ingredient": {
                "tag": "forge:ingots/aluminum"
            },
            "count": 2
        },
        "results": [
            {
                "item": "kubejs:pressure_alloy",
                "count": 2
            }
        ],
        "time": 150
    }).id('ico:pressure_alloy')

    //compressing
    e.remove([{id:'pneumaticcraft:explosion_crafting/compressed_iron_ingot'}, {id:'pneumaticcraft:pressure_chamber/compressed_iron_ingot'}])
    e.custom({
        "type": "pneumaticcraft:explosion_crafting",
        "input": {
            "item": 'kubejs:pressure_alloy'
        },
        "loss_rate": 10,
        "results": [
            {
            "item": "pneumaticcraft:ingot_iron_compressed"
            }
        ]
    }).id('ico:ingot_iron_compressed')

    e.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
            {
                "item": "kubejs:pressure_alloy"
            }
        ],
        "pressure": 1,
        "results": [
            {
                "item": "pneumaticcraft:ingot_iron_compressed"
            }
        ]
    })

    e.remove([{id: 'compressedcreativity:item_application/compressed_iron_casing_from_log'}, {id: 'compressedcreativity:item_application/compressed_iron_casing_from_wood'}, {id: 'pneumaticcraft:pressure_tube'}, {id: 'pneumaticcraft:heat_pipe'}, {id: 'pneumaticcraft:reinforced_stone'}])

    e.shaped('kubejs:compressed_framing', [
            ' A ',
            'A A',
            ' A '
        ], {
            A: '#forge:ingots/compressed_iron'
    }).id('ico:compressed_framing')

    e.recipes.create.deploying('3x pneumaticcraft:pressure_tube', ['#thermal:glass/hardened', '#forge:ingots/compressed_iron']).id('ico:pressure_tube')

    e.recipes.create.deploying('4x pneumaticcraft:heat_pipe', ['#forge:storage_blocks/compressed_iron', 'pneumaticcraft:thermal_lagging']).id('ico:heat_pipe')

    e.shaped('8x pneumaticcraft:reinforced_stone', [
            'AAA',
            'ACA',
            'AAA'
        ], {
            C: '#forge:ingots/compressed_iron',
            A: 'create:andesite_alloy'
    }).id('ico:reinforced_stone')

    //pressure chamber
    e.remove([{id: 'compressedcreativity:item_application/compressed_iron_casing_from_log'}, {id: 'compressedcreativity:item_application/compressed_iron_casing_from_wood'}, {id: 'pneumaticcraft:pressure_chamber_wall'}, {id: 'pneumaticcraft:pressure_chamber_glass'}, {id: 'pneumaticcraft:pressure_chamber_glass_x4'}])

    e.shaped('16x pneumaticcraft:pressure_chamber_wall', [ 
            'SSS', 
            'SIS',
            'SSS'
        ], {
            I: 'compressedcreativity:compressed_iron_casing',
            S: 'pneumaticcraft:reinforced_bricks'
    }).id('ico:pressure_chamber_wall')

    e.shapeless('pneumaticcraft:pressure_chamber_glass', ['#thermal:glass/hardened', 'pneumaticcraft:pressure_chamber_wall']).id('ico:pressure_chamber_glass')
    e.shapeless('4x pneumaticcraft:pressure_chamber_glass', ['#thermal:glass/hardened', 'pneumaticcraft:pressure_chamber_wall', 'pneumaticcraft:pressure_chamber_wall', 'pneumaticcraft:pressure_chamber_wall', 'pneumaticcraft:pressure_chamber_wall']).id('ico:pressure_chamber_glass_4')

    e.custom({
        "type": "pneumaticcraft:thermo_plant",
        "air_use_multiplier": 1.5,
        "exothermic": false,
        "fluid_input": {
            "type": "pneumaticcraft:fluid",
            "amount": 1000,
            "tag": "forge:lubricant"
        },
        "item_input": {
            "item": "kubejs:carbon_steel_ingot"
        },
        "item_output": {
            "item": "kubejs:lubricated_bearing"
        },
        "pressure": 3.0,
        "speed": 0.2,
        "temperature": {
            "min_temp": 473
        }
    }).id("ico:lubricated_bearing")

    //machinery
    e.remove([{id: 'pneumaticcraft:thermopneumatic_processing_plant'}, {id: 'pneumaticcraft:refinery'}, {id: 'pneumaticcraft:refinery_output'}])

    e.shaped('pneumaticcraft:thermopneumatic_processing_plant', [ 
            'PSP', 
            'GIG',
            'PSP'
        ], {
            I: 'compressedcreativity:compressed_iron_casing',
            S: 'pneumaticcraft:reinforced_bricks',
            G: '#thermal:glass/hardened',
            P: '#forge:ingots/compressed_iron'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:thermopneumatic_processing_plant')
  
    e.remove([{id:'createdieselgenerators:crafting/pumpjack_bearing'}, {id:'createdieselgenerators:crafting/pumpjack_head'}, {id:'createdieselgenerators:crafting/pumpjack_crank'}])

    e.shaped('createdieselgenerators:pumpjack_bearing', [ 
            'ANA', 
            'NBN',
            'ANA'
        ], {
            B: 'kubejs:lubricated_bearing',
            N: '#forge:ingots/invar',
            A: 'create:andesite_alloy'
    }).id('ico:pumpjack_bearing')
  
      e.shaped('createdieselgenerators:pumpjack_head', [ 
            'A A', 
            'NKN',
            'A A'
        ], {
            N: '#forge:ingots/compressed_iron',
            A: 'create:andesite_alloy',
            K: '#forge:ingots/carbon_steel'
    }).id('ico:pumpjack_head')
  
    e.recipes.create.mechanical_crafting('createdieselgenerators:pumpjack_crank', [
            'BSB',
            ' I ',
            'ASA',
            'NIN',
            'ANA'
        ], {
            A: 'create:andesite_alloy',
            I: 'pneumaticcraft:pressure_tube',
            S: 'kubejs:wrought_iron_sheet',
            N: '#forge:ingots/invar',
            B: 'kubejs:lubricated_bearing'
    }).id('ico:pumpjack_crank')
  
    e.shaped('pneumaticcraft:refinery', [ 
            'SBS', 
            'SGS',
            'SIS'
        ], {
            G: '#thermal:glass/hardened',
            I: 'compressedcreativity:compressed_iron_casing',
            B: 'kubejs:lubricated_bearing',
            S: 'pneumaticcraft:reinforced_bricks',
    }).id('ico:refinery')
  
    e.recipes.create.mechanical_crafting('pneumaticcraft:refinery_output', [
            'PEP',
            'SGS',
            'SGS',
            'PIP'
        ], {
            G: '#thermal:glass/reinforced',
            I: 'compressedcreativity:compressed_iron_casing',
            E: 'create:electron_tube',
            S: 'pneumaticcraft:reinforced_bricks',
            P: 'forge:ingots/compressed_iron'
    }).id('ico:refinery_output')

    // oil
    e.remove([{id:'pneumaticcraft:refinery/oil_2'}, {id:'pneumaticcraft:refinery/oil_3'}, {id:'pneumaticcraft:refinery/oil_4'}, {id:'pneumaticcraft:thermo_plant/plastic_from_lpg'}, {id:'pneumaticcraft:thermo_plant/plastic_from_biodiesel'}])

    e.custom({
        "type": "pneumaticcraft:refinery",
        "input": {
            "type": "pneumaticcraft:fluid",
            "amount": 10,
            "tag": "forge:crude_oil"
        },
        "results": [
          {
            "amount": 4,
            "fluid": "pneumaticcraft:diesel"
          },
          {
            "amount": 2,
            "fluid": "pneumaticcraft:lpg"
          }
        ],
        "temperature": {
          "min_temp": 423,
          "max_temp": 673
        }
    }).id("ico:oil_refine_2")
    
    e.custom({
        "type": "pneumaticcraft:refinery",
        "input": {
            "type": "pneumaticcraft:fluid",
            "amount": 10,
            "tag": "forge:crude_oil"
        },
        "results": [
            {
                "amount": 2,
                "fluid": "pneumaticcraft:diesel"
            },
            {
                "amount": 3,
                "fluid": "pneumaticcraft:kerosene"
            },
            {
                "amount": 2,
                "fluid": "pneumaticcraft:lpg"
            }
        ],
        "temperature": {
            "min_temp": 423,
            "max_temp": 673
        }
    }).id("ico:oil_refine_3")
    
    e.custom({
        "type": "pneumaticcraft:refinery",
        "input": {
          "type": "pneumaticcraft:fluid",
          "amount": 10,
          "tag": "forge:crude_oil"
        },
        "results": [
            {
                "amount": 2,
                "fluid": "pneumaticcraft:diesel"
            },
            {
                "amount": 3,
                "fluid": "pneumaticcraft:kerosene"
            },
            {
                "amount": 3,
                "fluid": "pneumaticcraft:gasoline"
            },
            {
                "amount": 2,
                "fluid": "pneumaticcraft:lpg"
            }
        ],
        "temperature": {
            "min_temp": 423,
            "max_temp": 673
        }
    }).id("ico:oil_refine_4")
    
    e.custom({
        "type": "pneumaticcraft:refinery",
        "input": {
            "type": "pneumaticcraft:fluid",
            "amount": 10,
            "fluid": "pneumaticcraft:lpg"
        },
        "results": [
            {
                "amount": 7,
                "fluid": "mekanism:ethene"
            },
            {
                "amount": 2,
                "fluid": "createdieselgenerators:crude_oil"
            }
        ],
        "temperature": {
            "min_temp": 473,
            "max_temp": 673
        }
    }).id("ico:ethylene")

    e.custom({
        "type": "pneumaticcraft:thermo_plant",
        "fluid_input": {
            "type": "pneumaticcraft:fluid",
            "amount": 500,
            "fluid": "vintageimprovements:sulfuric_acid"
        },
        "item_input": {
            "tag": "forge:ingots/nickel"
        },
        "item_output": {
            "item": "kubejs:plasticizer",
            "count": 8,
        },
        "pressure": 4.0,
        "speed": 0.1,
        "temperature": {
            "min_temp": 473
        }
    }).id("ico:plasticizer")

    e.custom({
        "type": "pneumaticcraft:thermo_plant",
        "air_use_multiplier": 1.2,
        "exothermic": false,
        "fluid_input": {
            "type": "pneumaticcraft:fluid",
            "amount": 250,
            "fluid": "mekanism:ethene"
        },
        "item_input": {
            "item": "kubejs:plasticizer"
        },
        "fluid_output": {
            "type": "pneumaticcraft:fluid",
            "amount": 500,
            "fluid": "kubejs:dirty_plastic"
        },
        "pressure": 4.0,
        "speed": 0.75,
        "temperature": {
            "min_temp": 473
        }
    }).id("ico:dirty_plastic")

    e.custom({
        "type": "estrogen:centrifuging",
        "ingredients": [
            {
                "amount": 1,
                "fluid": "kubejs:dirty_plastic"
            }
        ],
        "results": [
            {
                "amount": 1,
                "fluid": "pneumaticcraft:plastic"
            }
        ]
    }).id("ico:plastic")

    //pcb
    e.remove([{id:'pneumaticcraft:pressure_chamber/empty_pcb'}, {id:'pneumaticcraft:pressure_chamber/etching_acid'}, {id:'pneumaticcraft:etching_tank'}, {id:'pneumaticcraft:uv_light_box'}])

    e.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
            {
                "type": "pneumaticcraft:stacked_item",
                "count": 2,
                "item": "pneumaticcraft:plastic"
            },
            {
                    "item": "create:copper_sheet"
            },
            {
                "type": "pneumaticcraft:stacked_item",
                "item": "minecraft:redstone",
                "count": 2
            },
            {
                "item": "minecraft:quartz"
            },
        ],
        "pressure": 2,
        "results": [
            {
                "item": "pneumaticcraft:empty_pcb",
            }
        ]
	}).id("ico:empty_pcb")

    e.custom({
        "type": "pneumaticcraft:fluid_mixer",
        "fluid_output": {
            "amount": 100,
            "fluid": "pneumaticcraft:etching_acid"
        },
        "input1": {
            "type": "pneumaticcraft:fluid",
            "amount": 75,
            "fluid": "pneumaticcraft:plastic"
        },
        "input2": {
            "type": "pneumaticcraft:fluid",
            "amount": 25,
            "fluid": "vintageimprovements:sulfuric_acid"
        },
        "pressure": 2.0,
        "time": 200
    }).id("ico:etching_acid")

    e.recipes.create.mechanical_crafting('pneumaticcraft:etching_tank', [
            ' RRR ',
            'PGGGP',
            'COIOC'
        ], {
            G: 'kubejs:tempered_glass',
            I: 'compressedcreativity:compressed_iron_casing',
            O: 'create:sturdy_sheet',
            P: 'pneumaticcraft:plastic',
            C: 'kubejs:high_pressure_plate',
            R: 'kubejs:rubber',
    }).id('ico:etching_tank')

    e.recipes.create.mechanical_crafting('pneumaticcraft:uv_light_box', [
            'PPR ',
            'OGGG',
            'BIPP'
        ], {
            G: 'minecraft:tinted_glass',
            I: 'compressedcreativity:compressed_iron_casing',
            O: 'create:sturdy_sheet',
            P: 'pneumaticcraft:plastic',
            R: 'kubejs:laser_emitter',
            B: 'pneumaticcraft:pcb_blueprint',
    }).id('ico:uv_light_box')

    let inter = 'kubejs:incomplete_pcb'
    e.recipes.create.sequenced_assembly([
        Item.of('pneumaticcraft:printed_circuit_board').withChance(16.0)
    ], 'pneumaticcraft:unassembled_pcb', [
        e.recipes.createDeploying(inter, [inter, 'pneumaticcraft:capacitor']),
        e.recipes.createDeploying(inter, [inter, 'pneumaticcraft:transistor']),
        e.recipes.createDeploying(inter, [inter, 'create:electron_tube']),
    ]).transitionalItem(inter).loops(2)

    //plasticizer alt recipes
    e.recipes.create.mixing('32x minecraft:brick', ['kubejs:plasticizer', '4x minecraft:clay']).id("ico:plasticizer_brick")
    e.recipes.create.mixing('24x minecraft:white_concrete_powder', ['kubejs:plasticizer', '8x minecraft:sand', '8x minecraft:gravel', '#forge:dyes/white']).id("ico:plasticizer_white_concrete")
    e.recipes.create.mixing('24x minecraft:light_gray_concrete_powder', ['kubejs:plasticizer', '8x minecraft:sand', '8x minecraft:gravel', '#forge:dyes/light_gray']).id("ico:plasticizer_light_gray_concrete")
    e.recipes.create.mixing('24x minecraft:gray_concrete_powder', ['kubejs:plasticizer', '8x minecraft:sand', '8x minecraft:gravel', '#forge:dyes/gray']).id("ico:plasticizer_gray_concrete")
    e.recipes.create.mixing('24x minecraft:black_concrete_powder', ['kubejs:plasticizer', '8x minecraft:sand', '8x minecraft:gravel', '#forge:dyes/black']).id("ico:plasticizer_black_concrete")
    e.recipes.create.mixing('24x minecraft:brown_concrete_powder', ['kubejs:plasticizer', '8x minecraft:sand', '8x minecraft:gravel', '#forge:dyes/brown']).id("ico:plasticizer_brown_concrete")
    e.recipes.create.mixing('24x minecraft:red_concrete_powder', ['kubejs:plasticizer', '8x minecraft:sand', '8x minecraft:gravel', '#forge:dyes/red']).id("ico:plasticizer_red_concrete")
    e.recipes.create.mixing('24x minecraft:orange_concrete_powder', ['kubejs:plasticizer', '8x minecraft:sand', '8x minecraft:gravel', '#forge:dyes/orange']).id("ico:plasticizer_orange_concrete")
    e.recipes.create.mixing('24x minecraft:yellow_concrete_powder', ['kubejs:plasticizer', '8x minecraft:sand', '8x minecraft:gravel', '#forge:dyes/yellow']).id("ico:plasticizer_yellow_concrete")
    e.recipes.create.mixing('24x minecraft:lime_concrete_powder', ['kubejs:plasticizer', '8x minecraft:sand', '8x minecraft:gravel', '#forge:dyes/lime']).id("ico:plasticizer_lime_concrete")
    e.recipes.create.mixing('24x minecraft:green_concrete_powder', ['kubejs:plasticizer', '8x minecraft:sand', '8x minecraft:gravel', '#forge:dyes/green']).id("ico:plasticizer_green_concrete")
    e.recipes.create.mixing('24x minecraft:cyan_concrete_powder', ['kubejs:plasticizer', '8x minecraft:sand', '8x minecraft:gravel', '#forge:dyes/cyan']).id("ico:plasticizer_cyan_concrete")
    e.recipes.create.mixing('24x minecraft:light_blue_concrete_powder', ['kubejs:plasticizer', '8x minecraft:sand', '8x minecraft:gravel', '#forge:dyes/light_blue']).id("ico:plasticizer_light_blue_concrete")
    e.recipes.create.mixing('24x minecraft:blue_concrete_powder', ['kubejs:plasticizer', '8x minecraft:sand', '8x minecraft:gravel', '#forge:dyes/blue']).id("ico:plasticizer_blue_concrete")
    e.recipes.create.mixing('24x minecraft:purple_concrete_powder', ['kubejs:plasticizer', '8x minecraft:sand', '8x minecraft:gravel', '#forge:dyes/purple']).id("ico:plasticizer_purple_concrete")
    e.recipes.create.mixing('24x minecraft:magenta_concrete_powder', ['kubejs:plasticizer', '8x minecraft:sand', '8x minecraft:gravel', '#forge:dyes/magenta']).id("ico:plasticizer_magenta_concrete")
    e.recipes.create.mixing('24x minecraft:pink_concrete_powder', ['kubejs:plasticizer', '8x minecraft:sand', '8x minecraft:gravel', '#forge:dyes/pink']).id("ico:plasticizer_pink_concrete")

    e.recipes.create.mixing('minecraft:blue_ice', [Fluid.of('minecraft:water', 1000), Fluid.of('mekanism:ethene', 50)]).id("ico:ethylene_blue_ice")
    e.recipes.create.mixing('minecraft:packed_ice', [Fluid.of('minecraft:water', 1000), Fluid.of('mekanism:ethene', 10)]).id("ico:ethylene_packed_ice")
    e.recipes.create.mixing('minecraft:ice', [Fluid.of('minecraft:water', 1000), Fluid.of('mekanism:ethene', 1)]).id("ico:ethylene_ice")
})