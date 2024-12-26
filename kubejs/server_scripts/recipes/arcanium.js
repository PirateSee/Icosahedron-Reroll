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
                "tag": "wizards_reborn:arcanum"
            }
        },
        "output": {
            "item": "wizards_reborn:orbital_fluid_retainer"
        },
        "wissen": 500
    }).id('ico:orbital_fluid_retainer')
})