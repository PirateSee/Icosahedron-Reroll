ServerEvents.recipes(e => {
    function gemstone_polishing(rough, uncut, inter, output, id) {
        e.custom({
            "type": "createdieselgenerators:basin_fermenting",
            "ingredients": [
                {
                    "item": rough
                },
                {
                    "fluid": "vintageimprovements:sulfuric_acid",
                    "amount": 10
                }
            ],
            "processingTime": 100,
            "results": [
                {
                    "item": "kubejs:uncut_diamond"
                }
            ]
        }).id('ico:dissolve_' + id)
    
        //e.recipes.create.cutting(output, uncut).id('ico:cut_' + id)

        e.recipes.create.sequenced_assembly([
            output
        ], uncut, [
            e.recipes.createCutting(inter, inter),
            e.recipes.vintageimprovements.polishing(inter, inter).speedLimits(2),
            e.recipes.createFilling(inter, [inter, Fluid.of('water')])
        ]).transitionalItem(inter).loops(1).id('ico:refine_' + id)
    }

    gemstone_polishing('spelunkery:rough_diamond', 'kubejs:uncut_diamond', 'kubejs:unrefined_diamond', 'minecraft:diamond', 'diamond')
    gemstone_polishing('kubejs:rough_aquatrine', 'kubejs:uncut_aquatrine', 'kubejs:unrefined_aquatrine', 'kubejs:aquatrine', 'aquatrine')
})