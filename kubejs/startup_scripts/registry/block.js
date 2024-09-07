StartupEvents.registry('block', e => {
    e.create("hardened_wood_planks")
		.mapColor("wood").woodSoundType()
		.hardness(2.2).resistance(3.5)
		.tagBlock("mineable/axe")
		.textureAll('ico:block/hardened_wood_planks')
})