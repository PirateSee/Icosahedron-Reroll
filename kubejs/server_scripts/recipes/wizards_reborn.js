// contains wizards reborn related recipes

ServerEvents.recipes(e => {
    e.custom({
        "type": "wizards_reborn:arcanum_dust_transmutation",
        "from": {
            "item": "kubejs:holystone_gold_ore"
        },
        "to": {
            "item": "kubejs:holystone_arcane_gold_ore"
        }
    }).id('ico:holystone_arcane_gold_ore')

    e.remove({id: 'wizards_reborn:arcane_workbench/wisestone'})

    e.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
            "###",
            "#A#",
            "###",
            "____"
        ],
        "key": {
            "#": {
                "item": "deep_aether:aseterite"
            },
            "A": {
                "item": "wizards_reborn:arcanum"
            }
        },
        "output": {
            "item": "wizards_reborn:wisestone",
            "count": 8
        },
        "wissen": 100
    }).id('ico:wisestone')

    e.remove({id: 'wizards_reborn:arcane_workbench/orbital_fluid_retainer'})

    e.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
          "WAW",
          "_#_",
          "___",
          "G___"
        ],
        "key": {
            "#": {
                "item": "wizards_reborn:wisestone_pedestal"
            },
            "W": {
                "item": "wizards_reborn:polished_wisestone"
            },
            "G": {
                "tag": "wizards_reborn:arcane_gold_ingot"
            },
            "A": {
                "tag": "forge:gems/arcanum"
            }
        },
        "output": {
            "item": "wizards_reborn:orbital_fluid_retainer"
        },
        "wissen": 500
    }).id('ico:orbital_fluid_retainer')

    e.remove({id: 'wizards_reborn:alchemy_machine/arcacite'})

    e.custom({
        "type": "wizards_reborn:alchemy_machine",
        "outputItem": {
            "item": 'wizards_reborn:arcacite',
            "count": 1
        },
        "wissen": 200,
        "steam": 200,
        "ingredients": [
            {
                "item": "wizards_reborn:arcanum"
            },
            {
                "item": "wizards_reborn:arcanum"
            },
            {
                "tag": "c:gems/quartz"
            },
            {
                "tag": "c:gems/quartz"
            },
            {
                "item": "wizards_reborn:scorched_calx"
            }
        ],
        "fluidIngredients": [
            {
                "name": "wizards_reborn:alchemy_oil",
                "amount" : 250
            }
        ]
    }).id('ico:arcacite')
})