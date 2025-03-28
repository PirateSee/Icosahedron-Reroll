StartupEvents.registry('fluid', e => {
    //intermediary
    e.create('metalworking_flux')
        .stillTexture('ico:fluid/metalworking_flux/still')
        .flowingTexture('ico:fluid/metalworking_flux/flowing')

    e.create('scorched_flux')
        .stillTexture('ico:fluid/scorching_flux/still')
        .flowingTexture('ico:fluid/scorching_flux/flowing')
    
    e.create('impure_bronze')
        .stillTexture('ico:fluid/impure_bronze/still')
        .flowingTexture('ico:fluid/impure_bronze/flowing')
    e.create('impure_rose_gold')
        .stillTexture('ico:fluid/impure_rose_gold/still')
        .flowingTexture('ico:fluid/impure_rose_gold/flowing')
    e.create('impure_brass')
        .stillTexture('ico:fluid/impure_brass')
        .flowingTexture('ico:fluid/impure_brass/flowing')
    e.create('impure_steel')
        .stillTexture('ico:fluid/impure_steel')
        .flowingTexture('ico:fluid/impure_steel/flowing')
    e.create('impure_electrum')
        .stillTexture('ico:fluid/impure_electrum')
        .flowingTexture('ico:fluid/impure_electrum/flowing')
    e.create('impure_invar')
        .stillTexture('ico:fluid/impure_invar')
        .flowingTexture('ico:fluid/impure_invar/flowing')
    e.create('impure_constantan')
        .stillTexture('ico:fluid/impure_constantan')
        .flowingTexture('ico:fluid/impure_constantan/flowing')

    e.create('hematite_slurry')
        .stillTexture('ico:fluid/hematite_slurry')
        .flowingTexture('ico:fluid/hematite_slurry/flowing')
    e.create('malachite_slurry')
        .stillTexture('ico:fluid/malachite_slurry')
        .flowingTexture('ico:fluid/malachite_slurry/flowing')
    e.create('silver_slurry')
        .stillTexture('ico:fluid/silver_slurry')
        .flowingTexture('ico:fluid/silver_slurry/flowing')

    e.create('platinum_mud_solution')
        .stillTexture('ico:fluid/platinum_mud_solution')
        .flowingTexture('ico:fluid/platinum_mud_solution/flowing')
    e.create('acidic_platinum_mud')
        .stillTexture('ico:fluid/acidic_platinum_mud')
        .flowingTexture('ico:fluid/acidic_platinum_mud/flowing')

    e.create('blazing_icing')
        .stillTexture('ico:fluid/blazing_icing')
        .flowingTexture('ico:fluid/blazing_icing/flowing')

    e.create('brine')
        .stillTexture('ico:fluid/brine')
        .flowingTexture('ico:fluid/brine/flowing')
    e.create('caustic_soda')
        .stillTexture('ico:fluid/caustic_soda')
        .flowingTexture('ico:fluid/caustic_soda/flowing')

    e.create('bauxite_slurry')
        .stillTexture('ico:fluid/bauxite_slurry')
        .flowingTexture('ico:fluid/bauxite_slurry/flowing')
    e.create('alumina_solution')
        .stillTexture('ico:fluid/alumina_solution')
        .flowingTexture('ico:fluid/alumina_solution/flowing')
    e.create('red_mud')
        .stillTexture('ico:fluid/red_mud')
        .flowingTexture('ico:fluid/red_mud/flowing')

    e.create('cresol')
        .stillTexture('ico:fluid/cresol')
        .flowingTexture('ico:fluid/cresol/flowing')
    e.create('phenol')
        .stillTexture('ico:fluid/phenol')
        .flowingTexture('ico:fluid/phenol/flowing')

    e.create('dirty_plastic')
        .stillTexture('ico:fluid/dirty_plastic')
        .flowingTexture('ico:fluid/dirty_plastic/flowing')

    //natural
    e.create('runic_sap')
        .stillTexture('ico:fluid/runic_sap/still')
        .flowingTexture('ico:fluid/runic_sap/flowing')

    e.create('cursed_sap')
        .stillTexture('ico:fluid/cursed_sap/still')
        .flowingTexture('ico:fluid/cursed_sap/flowing')

    //molten
    //base
    /*e.create('molten_tin')
        .stillTexture('ico:fluid/molten_tin/still')
        .flowingTexture('ico:fluid/molten_tin/flowing')
    e.create('molten_silver')
        .stillTexture('ico:fluid/molten_silver/still')
        .flowingTexture('ico:fluid/molten_silver/flowing')
    e.create('molten_nickel')
        .stillTexture('ico:fluid/molten_nickel/still')
        .flowingTexture('ico:fluid/molten_nickel/flowing')*/
    e.create('molten_aluminum')
        .stillTexture('ico:fluid/molten_aluminum/still')
        .flowingTexture('ico:fluid/molten_aluminum/flowing')
        
    //alloy
    /*e.create('molten_bronze')
        .stillTexture('ico:fluid/molten_bronze/still')
        .flowingTexture('ico:fluid/molten_bronze/flowing')*/
    e.create('molten_rose_gold')
        .stillTexture('ico:fluid/molten_rose_gold/still')
        .flowingTexture('ico:fluid/flowing/molten_rose_gold')

    e.create('molten_pig_iron')
		.stillTexture('ico:fluid/molten_pig_iron/still')
		.flowingTexture('ico:fluid/molten_pig_iron/flowing')
	e.create('molten_wrought_iron')
		.stillTexture('ico:fluid/molten_wrought_iron/still')
		.flowingTexture('ico:fluid/molten_wrought_iron/flowing')
        
    e.create('molten_carbon_steel')
		.stillTexture('ico:fluid/molten_carbon_steel/still')
		.flowingTexture('ico:fluid/molten_carbon_steel/flowing')

    /*e.create('molten_electrum')
        .stillTexture('ico:fluid/molten_electrum/still')
        .flowingTexture('ico:fluid/flowing/molten_electrum')
    e.create('molten_invar')
        .stillTexture('ico:fluid/molten_invar/still')
        .flowingTexture('ico:fluid/flowing/molten_invar')*/

    //other
    e.create('blaze_petrol')
        .stillTexture('ico:fluid/blaze_petrol/still')
        .flowingTexture('ico:fluid/blaze_petrol/flowing')
})