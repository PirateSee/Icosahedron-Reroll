ServerEvents.tags('item', e => {
    e.add('ico:andesite_alloyable', ['#forge:nuggets/iron', '#forge:nuggets/zinc', '#forge:nuggets/tin'])
    e.add('ico:coal_fragments', ['malum:coal_fragment', 'malum:charcoal_fragment', 'create_dd:coal_piece', 'spelunkery:coal_lump', 'spelunkery:charcoal_lump'])

    e.add('forge:dusts/tin', 'kubejs:tin_dust')

    e.add('forge:ingots/wrought_iron', 'kubejs:wrought_iron_ingot')
    e.add('forge:ingots/pig_iron', 'kubejs:pig_iron_ingot')
    e.add('forge:ingots/carbon_steel', 'kubejs:carbon_steel_ingot')

    e.add('forge:nuggets/wrought_iron', 'kubejs:wrought_iron_nugget')
    e.add('forge:nuggets/pig_iron', 'kubejs:pig_iron_nugget')
    e.add('forge:nuggets/carbon_steel', 'kubejs:carbon_steel_nugget')

    e.add('forge:storage_blocks/wrought_iron', 'kubejs:wrought_iron_block')
    e.add('forge:storage_blocks/pig_iron', 'kubejs:pig_iron_block')
    e.add('forge:storage_blocks/carbon_steel', 'kubejs:carbon_steel_block')

    e.add('forge:plates/wrought_iron', 'kubejs:wrought_iron_sheet')
    //e.add('forge:plates/pig_iron', 'kubejs:pig_iron_sheet')
    //e.add('forge:plates/carbon_steel', 'kubejs:carbon_steel_sheet')
    
    e.add('forge:gems/cinnabar', 'spelunkery:cinnabar')

    e.add('ico:insulating_glass', ['immersiveengineering:insulating_glass', 'immersiveengineering:slag_glass'])

    //ores
    e.add('ico:crude_ores', ['kubejs:limonite', 'kubejs:cassiterite', 'kubejs:sphalerite'])
    e.add('ico:advanced_ores', ['kubejs:hematite', 'kubejs:malachite', 'kubejs:bauxite', 'kubejs:pentlandite'])

    e.add('ico:stone_silver_ores', ['thermal:silver_ore', 'immersiveengineering:silver_ore', 'galosphere:silver_ore', 'occultism:silver_ore'])
    e.add('ico:deepslate_silver_ores', ['thermal:deepslate_silver_ore', 'immersiveengineering:deepslate_silver_ore', 'galosphere:deepslate_silver_ore', 'occultism:deepslate_silver_ore'])

    //tag repair
    e.remove('forge:mushrooms', ['spelunkery:inkcap', 'spelunkery:white_inkcap'])
})