StartupEvents.registry('block', e => {
    e.create("hardened_wood_planks")
		.mapColor("wood").woodSoundType()
		.hardness(2.2).resistance(3.5)
		.tagBlock("mineable/axe")
		.textureAll('ico:block/hardened_wood_planks')

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
	ore_decor('pentlandite', 4, 3, 'diamond') //advanced nickel
	ore_decor('wolframite', 5, 3.5, 'netherite') //complex tungsten
    ore_decor('uraninite', 7, 5, 'netherite') //complex lead/uranium
})