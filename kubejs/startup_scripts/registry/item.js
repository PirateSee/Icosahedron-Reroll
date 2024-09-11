StartupEvents.registry('item', e => {

    //andesite
    e.create('crushed_andesite').texture('ico:item/andesite/crushed_andesite')
    e.create('andesite_slush').texture('ico:item/andesite/andesite_slush')

    e.create('andesite_framing').texture('ico:item/andesite/andesite_framing')

    e.create('wooden_slide').texture('ico:item/andesite/wooden_slide')
    e.create('sawblade').texture('ico:item/andesite/sawblade')
	e.create('iron_drill').texture('ico:item/andesite/drill_bit')
    e.create('kelp_sheet').texture('ico:item/andesite/kelp_sheet')

    e.create('incomplete_andesite_parts', 'create:sequenced_assembly')

    //crude ore processing
    e.create('impure_copper_grit').texture('ico:item/ore/crude/dirty_copper_grit')
    e.create('impure_gold_grit').texture('ico:item/ore/crude/dirty_gold_grit')

    e.create('limonite_dust').texture('ico:item/ore/crude/limonite_dust')
    e.create('cassiterite_dust').texture('ico:item/ore/crude/cassiterite_dust')
    e.create('sphalerite_dust').texture('ico:item/ore/crude/sphalerite_dust')
    e.create('tin_dust').texture('ico:item/ore/crude/tin_dust')

    e.create('tiny_iron_dust').texture('ico:item/ore/crude/tiny_iron_dust')
    e.create('tiny_zinc_dust').texture('ico:item/ore/crude/tiny_zinc_dust')
    e.create('tiny_tin_dust').texture('ico:item/ore/crude/tiny_tin_dust')

    e.create('soft_slag_dust').texture('ico:item/ore/soft_slag_dust')

    //bronze
    e.create('bronze_framing').texture('ico:item/bronze/bronze_framing')

    e.create('bronze_tubing').texture('ico:item/bronze/bronze_tubing')
    e.create('bronze_hand').texture('ico:item/bronze/bronze_hand')

    e.create('incomplete_bronze_parts', 'create:sequenced_assembly')
    e.create('incomplete_bronze_tubing', 'create:sequenced_assembly').texture('ico:item/bronze/incomplete_bronze_tubing')

    e.create('sorting_algorithm').texture('ico:item/bronze/sorting_algorithm')
    e.create('incomplete_sorting_algorithm', 'create:sequenced_assembly').texture('ico:item/bronze/incomplete_sorting_algorithm')
})