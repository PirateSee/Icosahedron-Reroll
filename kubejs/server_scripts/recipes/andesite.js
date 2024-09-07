ServerEvents.recipes(e => {

    e.remove([{id:'create:crafting/materials/andesite_alloy'}, {id:'create:crafting/materials/andesite_alloy_from_zinc'}])

    e.recipes.create.milling('kubejs:crushed_andesite', 'minecraft:andesite').id('ico:crushed_andesite_milling')

    e.shapeless('kubejs:andesite_slush', ['2x kubejs:crushed_andesite', '2x #ico:andesite_alloyable', 'minecraft:water_bucket']).id('ico:andesite_slush_shapeless')
    e.shapeless('2x kubejs:andesite_slush', ['4x kubejs:crushed_andesite', '4x #ico:andesite_alloyable', 'minecraft:water_bucket']).id('ico:andesite_slush_shapeless_double')
    e.recipes.create.mixing('kubejs:andesite_slush', ['kubejs:crushed_andesite', '#ico:andesite_alloyable', Fluid.of('minecraft:water', 250)]).id('ico:andesite_slush_mixing')
    e.recipes.create.mixing('kubejs:andesite_alloy', ['kubejs:crushed_andesite', '#ico:andesite_alloyable', Fluid.of('minecraft:water', 250)]).id('ico:andesite_alloy_mixing').heated()

    e.smelting('create:andesite_alloy', 'kubejs:andesite_slush').id('ico:andesite_alloy_smelting')
    e.blasting('create:andesite_alloy', 'kubejs:andesite_slush').id('ico:andesite_alloy_blasting')
})