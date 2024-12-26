StartupEvents.registry('block', e => {
    e.create("hardened_wood_planks")
		.mapColor("wood").woodSoundType()
		.hardness(2.2).resistance(3.5)
		.tagBlock("mineable/axe")
		.textureAll('ico:block/hardened_wood_planks')

    e.create("compacted_hardened_wood")
		.mapColor("wood").woodSoundType()
		.hardness(4).resistance(5)
		.tagBlock("mineable/axe")
		.textureAll('ico:block/compacted_hardened_wood')

    e.create("andesite_parts")
		.mapColor("wood").stoneSoundType()
		.hardness(3).resistance(4)
		.tagBlock("mineable/axe").tagBlock("mineable/pickaxe")
		.textureAll('ico:block/andesite_parts')

    e.create("bronze_parts")
		.mapColor("wood").stoneSoundType()
		.hardness(3).resistance(4)
		.tagBlock("mineable/axe").tagBlock("mineable/pickaxe")
		.textureAll('ico:block/bronze_parts')

    e.create("heavier_engineering_block")
		.mapColor("iron").soundType(SoundType.METAL)
		.hardness(3).resistance(4)
		.tagBlock("mineable/pickaxe")
		.textureAll('ico:block/heavier_engineering')

    //storage
    e.create("pig_iron_block")
		.mapColor("metal").soundType(SoundType.METAL)
		.hardness(4).resistance(6).requiresTool(true)
		.tagBlock("mineable/pickaxe").tagBlock("needs_stone_tool")
		.textureAll('ico:block/storage/pig_iron_block')

    e.create("wrought_iron_block")
		.mapColor("metal").soundType(SoundType.METAL)
		.hardness(5).resistance(6).requiresTool(true)
		.tagBlock("mineable/pickaxe").tagBlock("needs_stone_tool")
		.textureAll('ico:block/storage/wrought_iron_block')

    e.create("carbon_steel_block")
		.mapColor("metal").soundType(SoundType.METAL)
		.hardness(5.5).resistance(7).requiresTool(true)
		.tagBlock("mineable/pickaxe").tagBlock("needs_stone_tool")
		.textureAll('ico:block/storage/carbon_steel_block')

    //ore

    function ore_decor(id, hard, resist, harvest_level) {
		function capitalName(string) {
			return string.charAt(0).toUpperCase() + string.slice(1);
		}

		e.create(id + "_ore")
			.displayName(capitalName(id))
			.mapColor("stone").stoneSoundType()
			.hardness(hard).resistance(resist).requiresTool(true)
			.tagBlock("mineable/pickaxe").tagBlock("needs_" + harvest_level + "_tool")
			.tagItem("ico:" + id + "_blocks")
			.textureAll('ico:block/ore/' + id)

		e.create("polished_" + id)
			.mapColor("stone").stoneSoundType()
			.hardness(hard).resistance(resist).requiresTool(true)
			.tagBlock("mineable/pickaxe").tagBlock("needs_" + harvest_level + "_tool")
			.tagItem("ico:" + id + "_blocks")
			.textureAll('ico:block/ore/polished_' + id)

		e.create("polished_" + id + "_slab", "slab")
			.mapColor("stone").stoneSoundType()
			.hardness(hard).resistance(resist).requiresTool(true)
			.tagBlock("mineable/pickaxe").tagBlock("needs_" + harvest_level + "_tool")
			//.tagItem("ico:" + id + "_blocks")
			.textureAll('ico:block/ore/polished_' + id)

		e.create("polished_" + id + "_stairs", "stairs")
			.mapColor("stone").stoneSoundType()
			.hardness(hard).resistance(resist).requiresTool(true)
			.tagBlock("mineable/pickaxe").tagBlock("needs_" + harvest_level + "_tool")
			.tagItem("ico:" + id + "_blocks")
			.textureAll('ico:block/ore/polished_' + id)

		e.create("polished_" + id + "_bricks")
			.mapColor("stone").stoneSoundType()
			.hardness(hard).resistance(resist).requiresTool(true)
			.tagBlock("mineable/pickaxe").tagBlock("needs_" + harvest_level + "_tool")
			.tagItem("ico:" + id + "_blocks")
			.textureAll('ico:block/ore/polished_' + id + '_bricks')

		e.create("polished_" + id + "_brick_slab", "slab")
			.mapColor("stone").stoneSoundType()
			.hardness(hard).resistance(resist).requiresTool(true)
			.tagBlock("mineable/pickaxe").tagBlock("needs_" + harvest_level + "_tool")
			//.tagItem("ico:" + id + "_blocks")
			.textureAll('ico:block/ore/polished_' + id + '_bricks')

		e.create("polished_" + id + "_brick_stairs", "stairs")
			.mapColor("stone").stoneSoundType()
			.hardness(hard).resistance(resist).requiresTool(true)
			.tagBlock("mineable/pickaxe").tagBlock("needs_" + harvest_level + "_tool")
			.tagItem("ico:" + id + "_blocks")
			.textureAll('ico:block/ore/polished_' + id + '_bricks')
	}

	ore_decor('limonite', 3.5, 3, 'stone') //crude iron
    ore_decor('cassiterite', 3.5, 3, 'stone') //crude tin
	ore_decor('sphalerite', 3.5, 3, 'iron') //crude zinc

	ore_decor('hematite', 4, 3, 'iron') //advanced nether iron
	ore_decor('malachite', 4, 3, 'iron') //advanced nether copper
	ore_decor('bauxite', 4, 3, 'diamond') //advanced nether aluminum

    ore_decor('galena', 3.5, 3, 'iron') //??? lead
    ore_decor('altaite', 3.5, 3, 'iron') //??? lead telluride
    ore_decor('vulcanite', 3.5, 3, 'iron') //arcane aetheric copper telluride

	ore_decor('pentlandite', 4, 3, 'diamond') //advanced nickel
	ore_decor('wolframite', 5, 3.5, 'netherite') //complex tungsten
    ore_decor('uraninite', 7, 5, 'netherite') //complex lead/uranium

    e.create("holystone_gold_ore")
        .mapColor("wool").stoneSoundType()
        .hardness(3).resistance(3).requiresTool(true)
        .tagBlock("mineable/pickaxe").tagBlock("needs_iron_tool")
        .textureAll('ico:block/holystone_gold_ore')

    e.create("holystone_arcane_gold_ore")
        .mapColor("wool").stoneSoundType()
        .hardness(3).resistance(3).requiresTool(true)
        .tagBlock("mineable/pickaxe").tagBlock("needs_iron_tool")
        .textureAll('ico:block/holystone_arcane_gold_ore')

    e.create("meteoric_iron_block")
        .mapColor("terracotta_black").stoneSoundType()
        .hardness(3).resistance(4.5).requiresTool(true)
        .tagBlock("mineable/pickaxe").tagBlock("needs_stone_tool")
        .tagItem("ico:meteoric_iron_blocks")
        .textureAll('ico:block/meteoric_iron')

    e.create("cobbled_meteoric_iron")
        .mapColor("terracotta_black").stoneSoundType()
        .hardness(3.2).resistance(5).requiresTool(true)
        .tagBlock("mineable/pickaxe").tagBlock("needs_stone_tool")
        .tagItem("ico:meteoric_iron_blocks")
        .textureAll('ico:block/cobbled_meteoric_iron')

    e.create("polished_meteoric_iron")
        .mapColor("terracotta_black").stoneSoundType()
        .hardness(3).resistance(4.5).requiresTool(true)
        .tagBlock("mineable/pickaxe").tagBlock("needs_stone_tool")
        .tagItem("ico:meteoric_iron_blocks")
        .textureAll('ico:block/polished_meteoric_iron')

    e.create("tiled_meteoric_iron")
        .mapColor("terracotta_black").stoneSoundType()
        .hardness(3).resistance(4.5).requiresTool(true)
        .tagBlock("mineable/pickaxe").tagBlock("needs_stone_tool")
        .tagItem("ico:meteoric_iron_blocks")
        .textureAll('ico:block/tiled_meteoric_iron')

    e.create("meteoric_iron_bricks")
        .mapColor("terracotta_black").stoneSoundType()
        .hardness(3).resistance(4.5).requiresTool(true)
        .tagBlock("mineable/pickaxe").tagBlock("needs_stone_tool")
        .tagItem("ico:meteoric_iron_blocks")
        .textureAll('ico:block/meteoric_iron_bricks')

    e.create("nether_portal_block")
        .mapColor("terracotta_black").stoneSoundType()
        .hardness(-1).resistance(1000).requiresTool(true)
        .textureAll('ico:block/meteoric_iron_bricks')
})