
// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')

ServerEvents.recipes(event => {




event.remove({ output: 'rats:rat_upgrade_enchanter' })
event.remove({ output: 'rats:rat_upgrade_disenchanter' })
event.remove({ output: 'rats:rat_upgrade_breeder' })
event.remove({ output: 'rats:rat_upgrade_fisherman' })
event.remove({ output: 'rats:rat_upgrade_lumberjack' })
event.remove({ output: 'rats:rat_upgrade_farmer' })
event.remove({ output: 'rats:rat_upgrade_quarry' })
event.remove({ output: 'rats:rat_upgrade_shears' })
event.remove({ output: 'rats:rat_upgrade_crafting' })


event.remove({ output: 'rats:rat_upgrade_chef' })
event.recipes.create.mechanical_crafting('rats:rat_upgrade_chef', [
    ' CUC ',
    'CRTRC',
    'USRKU',
    'CRPRC',
    ' CUC ',
    ], {
    C: 'rats:block_of_cheese',
    U: 'sophisticatedbackpacks:feeding_upgrade',
    R: 'rats:rat_upgrade_basic',
    T: 'rats:chef_toque',
    K: 'farmersdelight:iron_knife',
    P: 'farmersdelight:cooking_pot',
    S: 'farmersdelight:skillet'
    })


event.remove({ output: 'rats:rat_upgrade_basic' })
event.recipes.create.mechanical_crafting('rats:rat_upgrade_basic', [
    'CCC',
    'CDC',
    'CCC'
    ], {
    C: 'rats:block_of_cheese',
    D: 'minecraft:diamond',
    })


event.remove({ output: 'alexscaves:uranium_rod' })
event.recipes.create.mechanical_crafting('alexscaves:uranium_rod', [
    'CCC',
    'TUT',
    'TUT',
    'CCC'
    ], {
    C: 'createdeco:industrial_iron_sheet',
    T: 'alexscaves:depth_glass',
    U: 'alexscaves:block_of_uranium'
    })

 event.remove({ output: 'alexscaves:fissile_core' })
event.recipes.create.mechanical_crafting('alexscaves:fissile_core', [
    '  C  ',
    ' CTC ',
    'CTUTC',
    ' CTC ',
    '  C  '
    ], {
    C: 'createdeco:industrial_iron_ingot',
    T: 'minecraft:glass',
    U: 'alexscaves:block_of_uranium',
    })


event.remove({id: 'create:industrial_iron_block_from_ingots_iron_stonecutting'})

event.remove({ output: 'alexscaves:nuclear_bomb' })
event.recipes.create.mechanical_crafting('alexscaves:nuclear_bomb', [
    ' BCB ',
    'BCFCB',
    'CDZTC',
    'BCFCB',
    ' BCB '
    ], {
    C: 'createdeco:industrial_iron_ingot',
    T: 'create:precision_mechanism',
    D: 'alexscaves:remote_detonator',
    Z:'createdeco:zinc_sheet',
    F:'alexscaves:fissile_core',
    B:'create:industrial_iron_block'
    })



event.remove({ output: 'alexscaves:remote_detonator' })
event.shaped('alexscaves:remote_detonator', [
    ' A ',
    'ARA',
    ' A '
], {
    R: 'create:redstone_link',
    A: 'createdeco:industrial_iron_sheet'
})




event.remove({ output: 'alexscaves:charred_remnant' })
event.recipes.create.mechanical_crafting('alexscaves:charred_remnant', [
    ' T ',
    'TUT',
    'TTT'
    ], {
    T: 'createdeco:industrial_iron_ingot',
    U: 'alexscaves:uranium_rod'
    })



event.remove({ output:'apotheosis:ender_lead'})


event.remove({ output: 'minecraft:ender_eye' })
event.recipes.create.mixing('minecraft:ender_eye', ['minecraft:ender_pearl','2x blaze_powder', Fluid.of('create_enchantment_industry:experience',5)]).heated()



event.recipes.create.mixing('apotheotic_additions:apotheotic_coin', ['6x create:brass_nugget', Fluid.of('create_enchantment_industry:experience',8)]).heated()


event.custom({
type: "sophisticatedbackpacks:backpack_upgrade",
category: "misc",
pattern: [
    "III",
    "IBI",
    "III"
],
key: {
    I: {
    item: "minecraft:diamond"
    },
    B: {
    item: "sophisticatedbackpacks:gold_backpack"
    }
},
result: {
    item: "sophisticatedbackpacks:diamond_backpack",
    count: 1
},
conditions: [
    {
    type: "sophisticatedcore:item_enabled",
    itemRegistryName: "sophisticatedbackpacks:diamond_backpack"
    }
]
})

event.custom({
type: "sophisticatedbackpacks:backpack_upgrade",
category: "misc",
pattern: [
    "III",
    "IBI",
    "III"
],
key: {
    I: {
    item: "minecraft:iron_ingot"
    },
    B: {
    item: "sophisticatedbackpacks:copper_backpack"
    }
},
result: {
    item: "sophisticatedbackpacks:iron_backpack",
    count: 1
},
conditions: [
    {
    type: "sophisticatedcore:item_enabled",
    itemRegistryName: "sophisticatedbackpacks:iron_backpack"
    }
]
})

event.remove({ output: 'sophisticatedbackpacks:iron_backpack' })


event.remove({ output: 'sophisticatedbackpacks:diamond_backpack' })


/*
event.remove({ output: 'sophisticatedstorage:netherite_barrel' })
event.remove({ output: 'sophisticatedstorage:limited_netherite_barrel_1' })
event.remove({ output: 'sophisticatedstorage:limited_netherite_barrel_2' })
event.remove({ output: 'sophisticatedstorage:limited_netherite_barrel_3' })
event.remove({ output: 'sophisticatedstorage:limited_netherite_barrel_4' })

event.remove({ output: 'sophisticatedstorage:basic_to_netherite_tier_upgrade' })
event.remove({ output: 'sophisticatedstorage:copper_to_netherite_tier_upgrade' })
event.remove({ output: 'sophisticatedstorage:iron_to_netherite_tier_upgrade' })
event.remove({ output: 'sophisticatedstorage:gold_to_netherite_tier_upgrade' })
event.remove({ output: 'sophisticatedstorage:diamond_to_netherite_tier_upgrade' })


event.remove({ output: 'sophisticatedstorage:netherite_chest' })
event.remove({ output: 'sophisticatedstorage:netherite_shulker_box' })
*/

/*event.remove({ output: 'createarmory:barrel_part' })
event.shaped('createarmory:barrel_part', [
    'S ',
    'S ',
    '  '
], {
   S:'createdeco:industrial_iron_sheet'
})

event.shaped('createarmory:impact_nade', [
    'GS ',
    'IG ',
    '   '
], {
   I:'createdeco:industrial_iron_sheet',
   S:'minecraft:string',
   G:'minecraft:gunpowder'
})

event.shaped('createarmory:smoke_nade', [
    'AS ',
    'IG ',
    '   '
], {
   I:'createdeco:industrial_iron_sheet',
   S:'minecraft:string',
   G:'minecraft:gunpowder',
   A:'supplementaries:ash'
})
   */


event.remove({id:'create:crushing/prismarine_crystals'})
event.recipes.create.crushing(['kubejs:prismarine_powder', Item.of('kubejs:prismarine_powder').withChance(0.25)], 'minecraft:prismarine_crystals')
event.recipes.create.mixing('alexscaves:sea_glass_shards', 'kubejs:prismarine_powder').superheated()

event.recipes.create.mechanical_crafting('alexscaves:enigmatic_engine', [
    ' BIB ',
    'BCTGB',
    'IVEVI',
    'BGPCB',
    ' BIB '
    ], {
    E: 'create_sa:heat_engine',
    C: 'create:cogwheel',
    G: 'create:large_cogwheel',
    V:'create:copper_valve_handle',
    I:'create:copper_sheet',
    B:'minecraft:copper_block',
    T:'create:electron_tube',
    P:'create:propeller'
    })


event.remove({output: 'create_sa:copper_magnet'})
event.shaped('create_sa:copper_magnet', [
    ' I ',
    'IMI',
    ' I '
], {
    I:'minecraft:copper_ingot',
    M: 'alexscaves_torpedoes:pocket_magnet'
})

event.remove({output: 'alexscaves_torpedoes:torpedo'})
event.shaped('2x alexscaves_torpedoes:torpedo', [
    ' I ',
    'FMF',
    'FPF'
], {
    I:'create:copper_sheet',
    M: 'minecraft:tnt',
    F:'createdeco:industrial_iron_ingot',
    P:'create_sa:fan_component'
})


event.remove({output:'alexscaves_torpedoes:torpedo_nuclear'})
event.shaped('2x alexscaves_torpedoes:torpedo_nuclear', [
    'SSS',
    'FMF',
    'FPF'
], {
    M: 'alexscaves:nuclear_bomb',
    F:'createdeco:industrial_iron_ingot',
    P:'create_sa:fan_component',
    S:'createdeco:industrial_iron_sheet'
})

event.remove({output : 'compressium:stone_1'})
event.remove({output : 'compressium:gravel_1'})
event.remove({output : 'compressium:netherrack_1'})
event.remove({output : 'compressium:snow_1'})
event.remove({output : 'compressium:soulsand_1'})
event.remove({output : 'compressium:iron_1'})
event.remove({output : 'compressium:gold_1'})
event.remove({output : 'compressium:emerald_1'})
event.remove({output : 'compressium:clay_1'})
event.remove({output : 'compressium:netherite_1'})
event.remove({output : 'compressium:coal_1'})
event.remove({output : 'compressium:copper_1'})
event.remove({output : 'compressium:redsand_1'})
event.remove({output : 'compressium:endstone_1'})
event.remove({output : 'compressium:obsidian_1'})
event.remove({output : 'compressium:lapis_1'})
event.remove({output : 'compressium:quartz_1'})
event.remove({output : 'compressium:redstone_1'})
event.remove({output : 'compressium:andesite_1'})
event.remove({output : 'compressium:diorite_1'})
event.remove({output : 'compressium:granite_1'})
event.remove({output : 'compressium:diamond_1'})

event.remove({input : 'compressium:stone_1'})
event.remove({input : 'compressium:gravel_1'})
event.remove({input : 'compressium:netherrack_1'})
event.remove({input : 'compressium:snow_1'})
event.remove({input : 'compressium:soulsand_1'})
event.remove({input : 'compressium:iron_1'})
event.remove({input : 'compressium:gold_1'})
event.remove({input : 'compressium:emerald_1'})
event.remove({input : 'compressium:clay_1'})
event.remove({input : 'compressium:netherite_1'})
event.remove({input : 'compressium:coal_1'})
event.remove({input : 'compressium:copper_1'})
event.remove({input : 'compressium:redsand_1'})
event.remove({input : 'compressium:endstone_1'})
event.remove({input : 'compressium:obsidian_1'})
event.remove({input : 'compressium:lapis_1'})
event.remove({input : 'compressium:quartz_1'})
event.remove({input : 'compressium:redstone_1'})
event.remove({input : 'compressium:andesite_1'})
event.remove({input : 'compressium:diorite_1'})
event.remove({input : 'compressium:granite_1'})
event.remove({input : 'compressium:diamond_1'})


event.remove({mod : 'untamedwilds', not:{output:'untamedwilds:trap_cage'}})




event.remove({output:'tiab:time_in_a_bottle'})
event.recipes.create.mechanical_crafting('tiab:time_in_a_bottle', [
    ' D ',
    'DGD',
    'GCG',
    'LEL'
    ], {
        D:'minecraft:diamond',
        G:'minecraft:gold_block',
        C:'minecraft:clock',
        E:'minecraft:experience_bottle',
        L:'minecraft:lapis_block'
    })



event.recipes.create.compacting('b3_worldborder:expandercrystal_t1', ['2x compressium:cobblestone_2', '2x #forge:ingot_t1']).heated()

event.recipes.create.mixing('b3_worldborder:expandercrystal_t2', ['3x #forge:loot_t2', '2x create:brass_ingot', '2x b3_worldborder:expandercrystal_t1']).heated()

event.recipes.create.filling('b3_worldborder:expandercrystal_t3', [Fluid.of('create:potion', 250, {Potion: 'irons_spellbooks:instant_mana_two'}), '2x b3_worldborder:expandercrystal_t2']),


event.recipes.create.sequenced_assembly('b3_worldborder:expandercrystal_t4', 
'#forge:crystal_t4', [
    event.recipes.createDeploying('b3_worldborder:unstable_t3', ['b3_worldborder:unstable_t3', 'b3_worldborder:expandercrystal_t3']),
    event.recipes.createDeploying('b3_worldborder:unstable_t3', ['create:incomplete_precision_mechanism', 'apotheosis:rare_material']),
    event.recipes.create.filling('b3_worldborder:unstable_t3', ['b3_worldborder:unstable_t3', Fluid.of('create_enchantment_industry:experience',250)])


        ]).transitionalItem('b3_worldborder:unstable_t3').loops(2)


event.recipes.create.sequenced_assembly('b3_worldborder:expandercrystal_t4', 
'#forge:crystal_t4', [
    event.recipes.createDeploying('b3_worldborder:unstable_t3', ['b3_worldborder:unstable_t3', 'b3_worldborder:expandercrystal_t3']),
    event.recipes.createDeploying('b3_worldborder:unstable_t3', ['create:incomplete_precision_mechanism', 'apotheosis:rare_material']),
    event.recipes.create.filling('b3_worldborder:unstable_t3', ['b3_worldborder:unstable_t3', Fluid.of('create_enchantment_industry:hyper_experience',8)])


        ]).transitionalItem('b3_worldborder:unstable_t3').loops(2)

event.recipes.create.sequenced_assembly('b3_worldborder:expandercrystal_t4', 
'#forge:crystal_t4', [
    event.recipes.createDeploying('b3_worldborder:unstable_t3', ['b3_worldborder:unstable_t3', 'b3_worldborder:expandercrystal_t3']),
    event.recipes.createDeploying('b3_worldborder:unstable_t3', ['create:incomplete_precision_mechanism', 'apotheosis:rare_material']),
    event.recipes.create.filling('b3_worldborder:unstable_t3', ['b3_worldborder:unstable_t3', Fluid.of('sliceanddice:fertilizer',200)])


        ]).transitionalItem('b3_worldborder:unstable_t3').loops(2)

event.recipes.create.sequenced_assembly('b3_worldborder:expandercrystal_t4', 
'#forge:crystal_t4', [
    event.recipes.createDeploying('b3_worldborder:unstable_t3', ['b3_worldborder:unstable_t3', 'b3_worldborder:expandercrystal_t3']),
    event.recipes.createDeploying('b3_worldborder:unstable_t3', ['create:incomplete_precision_mechanism', 'apotheosis:rare_material']),
    event.recipes.create.filling('b3_worldborder:unstable_t3', ['b3_worldborder:unstable_t3', Fluid.of('sliceanddice:fertilizer',200)])


        ]).transitionalItem('b3_worldborder:unstable_t3').loops(2)

event.recipes.create.sequenced_assembly('b3_worldborder:expandercrystal_t4', 
'#forge:crystal_t4', [
    event.recipes.createDeploying('b3_worldborder:unstable_t3', ['b3_worldborder:unstable_t3', 'b3_worldborder:expandercrystal_t3']),
    event.recipes.createDeploying('b3_worldborder:unstable_t3', ['create:incomplete_precision_mechanism', 'apotheosis:rare_material']),
    event.recipes.create.filling('b3_worldborder:unstable_t3', ['b3_worldborder:unstable_t3', Fluid.of('create_central_kitchen:dragon_breath',800)])


        ]).transitionalItem('b3_worldborder:unstable_t3').loops(2)

event.recipes.create.mechanical_crafting('b3_worldborder:expandercrystal_t5', [
    '  D  ',
    ' LBL ',
    'DCBCD',
    ' LBL ',
    '  D  '
    ], {
    D:'minecraft:diamond',
    L:'#forge:vegetables',
    B:'#forge:boss_t5',
    C:'b3_worldborder:expandercrystal_t4'
    })



event.replaceInput({output: 'apotheotic_additions:gemboundsigil'},
    '#apotheotic_additions:slate_reagents',
    '#forge:boss_t5'
)

event.shapeless(
  '4x rats:rat_upgrade_basic',
  'rats:rat_upgrade_block'
)




const crea = ['iron_ingot','copper_ingot','gold_ingot','netherite_ingot','create:brass_ingot','cataclysm:witherite_ingot',
    'cataclysm:ancient_metal_ingot','cataclysm:black_steel_ingot','cataclysm:ignitium_ingot','cataclysm:cursium_ingot',
    'alexscaves:scarlet_neodymium_ingot','alexscaves:azure_neodymium_ingot','create:zinc_ingot','createdeco:industrial_iron_ingot',
    'rats:oratchalcum_ingot','irons_spellbooks:arcane_ingot']



event.recipes.create.mixing('kubejs:creative_ingot', crea).superheated()


/*
event.smithing(
  'create:handheld_worldshaper',                     // arg 1: output
  '#forge:template', // arg 2: the smithing template
  'create:potato_cannon',                          // arg 3: the item to be upgraded
  'kubejs:creative_ingot'                            // arg 4: the upgrade item
)

*/

event.smithing(
  'create:creative_motor',                     // arg 1: output
  '#forge:template', // arg 2: the smithing template
  'create:steam_engine',                          // arg 3: the item to be upgraded
  'kubejs:creative_ingot'                            // arg 4: the upgrade item
)

event.smithing(
  'rats:creative_cheese',                     // arg 1: output
  '#forge:template', // arg 2: the smithing template
  'rats:cheese',                          // arg 3: the item to be upgraded
  'kubejs:creative_ingot'                            // arg 4: the upgrade item
)

event.smithing(
  'create:creative_blaze_cake',                     // arg 1: output
  '#forge:template', // arg 2: the smithing template
  'create:blaze_cake',                          // arg 3: the item to be upgraded
  'kubejs:creative_ingot'                            // arg 4: the upgrade item
)

event.smithing(
  'create_sa:creative_filling_tank',                     // arg 1: output
  '#forge:template', // arg 2: the smithing template
  'create_sa:creative_filling_tank',                          // arg 3: the item to be upgraded
  'kubejs:creative_ingot'                            // arg 4: the upgrade item
)

event.smithing(
  'storagedrawers:creative_storage_upgrade',                     // arg 1: output
  '#forge:template', // arg 2: the smithing template
  'storagedrawers:upgrade_template',                          // arg 3: the item to be upgraded
  'kubejs:creative_ingot'                            // arg 4: the upgrade item
)


event.remove({output:'irons_spellbooks:evoker_spell_book'})
event.remove({output:'irons_spellbooks:necronomicon_spell_book'})




})


