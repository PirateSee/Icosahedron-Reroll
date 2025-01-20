StartupEvents.registry('item', e => {

    //stuff
    e.create('meteoric_iron').texture('ico:item/ore/meteoric_iron')

    e.create('tellurium').texture('icosahedron:item/ore/tellurium')
    e.create('tellurium_fragment').texture('icosahedron:item/ore/tellurium_fragment')
    e.create('tellurium_dust').texture('icosahedron:item/ore/tellurium_dust')

    e.create('nutrient_bar').texture('icosahedron:item/food/nutrient_bar').food(food => {food.hunger(14).saturation(1)})
    e.create('mre').texture('icosahedron:item/food/mre').displayName('MRE').food(food => {food.hunger(10).saturation(1.4)})

    //andesite
    e.create('crushed_andesite').texture('ico:item/andesite/crushed_andesite')
    e.create('andesite_slush').texture('ico:item/andesite/andesite_slush')

    e.create('andesite_framing').texture('ico:item/andesite/andesite_framing')

    e.create('wooden_slide').texture('ico:item/andesite/wooden_slide')
    e.create('sawblade').texture('ico:item/andesite/sawblade')
	e.create('iron_drill').texture('ico:item/andesite/drill_bit')
    e.create('kelp_sheet').texture('ico:item/andesite/kelp_sheet')

    e.create('incomplete_andesite_parts', 'create:sequenced_assembly')
    e.create('incomplete_wooden_slide', 'create:sequenced_assembly').texture('ico:item/andesite/incomplete_wooden_slide')

    //crude ore processing
    e.create('impure_copper_grit').texture('ico:item/ore/crude/copper_powder').displayName('Impure Copper Powder')
    e.create('impure_gold_grit').texture('ico:item/ore/crude/gold_powder').displayName('Impure Gold Powder')

    e.create('limonite_dust').texture('ico:item/ore/crude/limonite_dust')
    e.create('cassiterite_dust').texture('ico:item/ore/crude/cassiterite_dust')
    e.create('sphalerite_dust').texture('ico:item/ore/crude/sphalerite_dust')
    e.create('tin_dust').texture('ico:item/ore/crude/tin_dust')

    e.create('tiny_iron_dust').texture('ico:item/ore/crude/tiny_iron_dust')
    e.create('tiny_zinc_dust').texture('ico:item/ore/crude/tiny_zinc_dust')
    e.create('tiny_tin_dust').texture('ico:item/ore/crude/tiny_tin_dust')

    e.create('raw_tin_nugget').texture('ico:item/ore/raw_tin_nugget')

    //wastes
    e.create('soft_slag_dust').texture('ico:item/ore/soft_slag_dust')
    e.create('congealed_flux_slag').texture('ico:item/ore/congealed_flux_slag')//.stackSize(16)
    e.create('waste_oxides').texture('ico:item/ore/waste_oxides')
    e.create('platinum_mud').texture('ico:item/ore/platinum_mud')

    //bronze
    e.create('bronze_framing').texture('ico:item/bronze/bronze_framing')

    e.create('bronze_tubing').texture('ico:item/bronze/bronze_tubing')
    e.create('bronze_hand').texture('ico:item/bronze/bronze_hand')

    e.create('incomplete_bronze_parts', 'create:sequenced_assembly')
    e.create('incomplete_bronze_tubing', 'create:sequenced_assembly').texture('ico:item/bronze/incomplete_bronze_tubing')

    e.create('sorting_algorithm').texture('ico:item/bronze/sorting_algorithm')
    e.create('incomplete_sorting_algorithm', 'create:sequenced_assembly').texture('ico:item/bronze/incomplete_sorting_algorithm')

    //wrought iron
    e.create('pig_iron_ingot').texture('ico:item/ore/alloy/pig_iron_ingot')
    e.create('pig_iron_nugget').texture('ico:item/ore/alloy/pig_iron_nugget')
	
    e.create('wrought_iron_balls').texture('ico:item/ore/alloy/wrought_iron_balls')

	e.create('wrought_iron_ingot').texture('ico:item/ore/alloy/wrought_iron_ingot')
    e.create('wrought_iron_nugget').texture('ico:item/ore/alloy/wrought_iron_nugget')
	e.create('wrought_iron_sheet').texture('ico:item/ore/alloy/wrought_iron_sheet')
	//e.create('wrought_iron_rod').texture('ico:item/ore/alloy/wrought_iron_rod')
	//e.create('wrought_iron_spring').texture('ico:item/ore/alloy/wrought_iron_spring')

    //brass
    e.create('brass_framing').texture('ico:item/bronze/brass_framing')

    e.create('mixer_upgrade_kit').texture('ico:item/brass/mixer_upgrade_kit')
    e.create('fan_upgrade_kit').texture('ico:item/brass/fan_upgrade_kit')
    e.create('press_upgrade_kit').texture('ico:item/brass/press_upgrade_kit')
    e.create('sifter_upgrade_kit').texture('ico:item/brass/sifter_upgrade_kit')

    e.create('incomplete_electron_tube', 'create:sequenced_assembly').texture('icosahedron:item/incomplete/incomplete_electron_tube')

    //steel
    e.create('coal_coke_piece').texture('ico:item/ore/coal_coke_piece')

    e.create('carbon_steel_ingot').texture('ico:item/ore/alloy/carbon_steel_ingot')
    e.create('carbon_steel_nugget').texture('ico:item/ore/alloy/carbon_steel_nugget')

    e.create('screws').texture('ico:item/ore/alloy/screws')

    e.create('steel_balls').texture('ico:item/ore/alloy/steel_balls')

    //gemstone polishing
    e.create('rough_zanite').texture('icosahedron:item/ore/gem/rough_zanite')

    e.create('rough_aquatrine').texture('icosahedron:item/ore/gem/rough_aquatrine')
    e.create('uncut_aquatrine').texture('icosahedron:item/ore/gem/uncut_aquatrine')
    e.create('unrefined_aquatrine', 'create:sequenced_assembly').texture('icosahedron:item/incomplete/unrefined_aquatrine')
    e.create('aquatrine').texture('icosahedron:item/ore/gem/aquatrine')

    e.create('uncut_diamond').texture('ico:item/ore/gem/uncut_diamond')
    e.create('unrefined_diamond', 'create:sequenced_assembly').texture('icosahedron:item/incomplete/unrefined_diamond')

    e.create('rough_skyjade').texture('icosahedron:item/ore/gem/rough_skyjade')
    e.create('uncut_skyjade').texture('icosahedron:item/ore/gem/uncut_skyjade')
    e.create('unrefined_skyjade', 'create:sequenced_assembly').texture('icosahedron:item/incomplete/unrefined_skyjade')

    e.create('rough_arcanum').texture('icosahedron:item/ore/gem/rough_arcanum')
    e.create('uncut_arcanum').texture('icosahedron:item/ore/gem/uncut_arcanum')
    e.create('unrefined_arcanum', 'create:sequenced_assembly').texture('icosahedron:item/incomplete/unrefined_arcanum')

    //advaned ore processing
    e.create('crushed_hematite').texture('ico:item/ore/advanced/crushed_hematite')
    e.create('dirty_hematite_dust').texture('ico:item/ore/advanced/dirty_hematite_dust')
    e.create('hematite_dust').texture('ico:item/ore/advanced/hematite_dust')

    e.create('crushed_malachite').texture('ico:item/ore/advanced/crushed_malachite')
    e.create('dirty_malachite_dust').texture('ico:item/ore/advanced/dirty_malachite_dust')
    e.create('malachite_dust').texture('ico:item/ore/advanced/malachite_dust')

    e.create('crushed_silver').texture('ico:item/ore/advanced/crushed_silver')
    e.create('dirty_silver_dust').texture('ico:item/ore/advanced/dirty_silver_dust')
    e.create('silver_dust').texture('ico:item/ore/advanced/silver_dust')

    //aluminum processing
    e.create('pulverized_bauxite').texture('ico:item/ore/advanced/crushed_bauxite')
})