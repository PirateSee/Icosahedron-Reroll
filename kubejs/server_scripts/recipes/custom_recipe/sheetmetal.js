ServerEvents.recipes(e => {
    function sheetmetal(input, output) {
        e.remove({id: "immersiveengineering:crafting/sheetmetal_" + output})

        e.shaped('8x immersiveengineering:sheetmetal_' + output, [
            " I ",
            "I I",
            " I "
        ], {
            I: input
        }).id("ico:sheetmetal_" + output)
    }

    sheetmetal("#forge:plates/steel", "steel")
    sheetmetal("#forge:plates/copper", "copper")
    sheetmetal("#forge:plates/aluminum", "aluminum")
    sheetmetal("#forge:plates/silver", "silver")
    sheetmetal("#forge:plates/nickel", "nickel")
    sheetmetal("#forge:plates/uranium", "uranium")
    sheetmetal("#forge:plates/constantan", "constantan")
    sheetmetal("#forge:plates/electrum", "electrum")
    sheetmetal("#forge:plates/iron", "iron")
    sheetmetal("#forge:plates/gold", "gold")
    sheetmetal("#forge:plates/lead", "lead")
})