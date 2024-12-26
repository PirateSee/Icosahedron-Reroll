ServerEvents.recipes(e => {
    /*e.remove({id: 'minecraft:iron_pickaxe'})
    e.shaped(Item.of('tetra:modular_double', '{"double/basic_handle_material":"basic_handle/stick","double/basic_pickaxe_left_material":"basic_pickaxe/iron","double/basic_pickaxe_right_material":"basic_pickaxe/iron","double/handle":"double/basic_handle","double/head_left":"double/basic_pickaxe_left","double/head_right":"double/basic_pickaxe_right",id:"8c24714a-065d-426d-a7b1-18810159bd24"}'), [
        'III',
        ' S ',
        ' S '
    ], {
        I: '#forge:ingots/iron',
        S: '#forge:rods/wooden'
    }).id('ico:iron_pickaxe')

    e.remove({id: 'minecraft:wooden_pickaxe'})
    e.shaped(Item.of('tetra:modular_double', '{"double/basic_handle_material":"basic_handle/stick","double/basic_pickaxe_left_material":"basic_pickaxe/oak","double/basic_pickaxe_right_material":"basic_pickaxe/oak","double/handle":"double/basic_handle","double/head_left":"double/basic_pickaxe_left","double/head_right":"double/basic_pickaxe_right",id:"8c24714a-065d-426d-a7b1-18810159bd24"}'), [
        'III',
        ' S ',
        ' S '
    ], {
        I: '#forge:wooden_planks',
        S: '#forge:rods/wooden'
    }).id('ico:wooden_pickaxe')

    e.remove({id: 'minecraft:stone_pickaxe'})
    e.shaped(Item.of('tetra:modular_double', '{"double/basic_handle_material":"basic_handle/stick","double/basic_pickaxe_left_material":"basic_pickaxe/stone","double/basic_pickaxe_right_material":"basic_pickaxe/stone","double/handle":"double/basic_handle","double/head_left":"double/basic_pickaxe_left","double/head_right":"double/basic_pickaxe_right",id:"8c24714a-065d-426d-a7b1-18810159bd24"}'), [
        'III',
        ' S ',
        ' S '
    ], {
        I: '#forge:cobblestone',
        S: '#forge:rods/wooden'
    }).id('ico:wooden_pistone_pickaxeckaxe')*/

    function remove_tools(material) {
        e.remove({id: material + '_pickaxe'})
        e.remove({id: material + '_shovel'})
        e.remove({id: material + '_axe'})
        e.remove({id: material + '_hoe'})
        e.remove({id: material + '_sword'})
    }

    function tool_set(material, material_tetra, item) {
        e.shaped(Item.of('tetra:modular_double', '{"double/basic_handle_material":"basic_handle/stick","double/basic_pickaxe_left_material":"basic_pickaxe/' + material_tetra + '","double/basic_pickaxe_right_material":"basic_pickaxe/' + material_tetra + '","double/handle":"double/basic_handle","double/head_left":"double/basic_pickaxe_left","double/head_right":"double/basic_pickaxe_right",id:"8c24714a-065d-426d-a7b1-128a01b9bd24"}'), [
            'III',
            ' S ',
            ' S '
        ], {
            I: item,
            S: '#forge:rods/wooden'
        }).id('ico:' + material + '_pickaxe')

        e.shaped(Item.of('tetra:modular_double', '{"double/basic_handle_material":"basic_handle/stick","double/hoe_left_material":"hoe/' + material_tetra + '","double/butt_right_material":"butt/' + material_tetra + '","double/handle":"double/basic_handle","double/head_left":"double/hoe_left","double/head_right":"double/butt_right",id:"8c24714a-06bd-48fd-a7b1-18810159bd24"}'), [
            'II',
            ' S',
            ' S'
        ], {
            I: item,
            S: '#forge:rods/wooden'
        }).id('ico:' + material + '_hoe')

        e.shaped(Item.of('tetra:modular_double', '{"double/basic_handle_material":"basic_handle/stick","double/basic_axe_left_material":"basic_axe/' + material_tetra + '","double/butt_right_material":"butt/' + material_tetra + '","double/handle":"double/basic_handle","double/head_left":"double/basic_axe_left","double/head_right":"double/butt_right",id:"8c24714a-065d-42fd-a7b1-18c1a153bd24"}'), [
            'II',
            'IS',
            ' S'
        ], {
            I: item,
            S: '#forge:rods/wooden'
        }).id('ico:' + material + '_axe')

        e.shaped(Item.of('tetra:modular_single', '{id:"8f65cdff-23b2-4045-bf14-cff9ca53af08","single/basic_handle_material":"basic_handle/stick","single/basic_shovel_material":"basic_shovel/' + material_tetra + '","single/handle":"single/basic_handle","single/head":"single/basic_shovel"}'), [
            'I',
            'S',
            'S'
        ], {
            I: item,
            S: '#forge:rods/wooden'
        }).id('ico:' + material + '_shovel')

        e.shaped(Item.of('tetra:modular_sword', '{id:"ed009234-9599-40f6-a48f-b43800ae486e","sword/basic_blade_material":"basic_blade/iron","sword/basic_hilt_material":"basic_hilt/stick","sword/blade":"sword/basic_blade","sword/decorative_pommel_material":"decorative_pommel/iron","sword/guard":"sword/makeshift_guard","sword/hilt":"sword/basic_hilt","sword/makeshift_guard_material":"makeshift_guard/iron","sword/pommel":"sword/decorative_pommel"}'), [
            'I',
            'I',
            'S'
        ], {
            I: item,
            S: '#forge:rods/wooden'
        }).id('ico:' + material + '_sword')
    }

    remove_tools('minecraft:wooden')
    remove_tools('minecraft:stone')
    remove_tools('minecraft:iron')

    tool_set('iron', 'iron', '#forge:ingots/iron')
    tool_set('stone', 'stone', '#forge:cobblestone')
    tool_set('oak', 'oak', '#forge:wooden_planks')
    tool_set('spruce', 'spruce', 'minecraft:spruce_planks')
    tool_set('jungle', 'jungle', 'minecraft:jungle_planks')
    tool_set('dark_oak', 'dark_oak', 'minecraft:dark_oak_planks')
})