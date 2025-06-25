ServerEvents.tags('item', event => {

event.add('forge:ingot_t1', 'minecraft:iron_ingot')
event.add('forge:ingot_t1', 'minecraft:gold_ingot')
event.add('forge:ingot_t1', 'minecraft:copper_ingot')
event.add('forge:ingot_t1', 'create:zinc_ingot')

event.add('forge:loot_t2', 'minecraft:blaze_rod')
event.add('forge:loot_t2', 'minecraft:ender_pearl')
event.add('forge:loot_t2', 'minecraft:ink_sac')
event.add('forge:loot_t2', 'minecraft:gunpowder')
event.add('forge:loot_t2', 'minecraft:phantom_membrane')


event.add('forge:vegetables', 'farmersdelight:cabbage')


event.add('forge:boss_t5', 'irons_spellbooks:dragonskin' )
event.add('forge:boss_t5', 'alexsmobs:hemolymph_sac' )
event.add('forge:boss_t5', 'cataclysm:void_core' )
event.add('forge:boss_t5', 'cataclysm:remnant_skull' )
event.add('forge:boss_t5', 'cataclysm:cursium_ingot' )
event.add('forge:boss_t5', 'cataclysm:witherite_ingot' )
event.add('forge:boss_t5', 'cataclysm:ignitium_ingot' )
event.add('forge:boss_t5', 'cataclysm:sandstorm_in_a_bottle' )
event.add('forge:boss_t5', 'cataclysm:amethyst_crab_shell' )
event.add('forge:boss_t5', 'cataclysm:lava_power_cell' )
event.add('forge:boss_t5', 'cataclysm:monstrous_horn' )
event.add('forge:boss_t5', 'rats:ancient_sawblade' )
event.add('forge:boss_t5', 'rats:psionic_rat_brain' )
event.add('forge:boss_t5', 'rats:dutchrat_wheel' )
event.add('forge:boss_t5', 'rats:biplane_wing' )
event.add('forge:boss_t5', 'rats:black_death_mask' )
event.add('forge:boss_t5', 'rats:plague_scythe' )
event.add('forge:boss_t5', 'rats:tangled_rat_tails' )
event.add('forge:boss_t5', 'rats:arcane_technology' )
event.add('forge:boss_t5', 'irons_spellbooks:blood_staff' )
event.add('forge:boss_t5', 'apotheosis:warden_tendril' )
event.add('forge:boss_t5', 'alexsmobs:void_worm_mandible' )
event.add('forge:boss_t5', 'alexsmobs:void_worm_eye' )
event.add('forge:boss_t5', 'alexsmobs:warped_muscle' )
event.add('forge:boss_t5', 'alexscaves:tectonic_shard' )
event.add('forge:boss_t5', 'alexscaves:radiant_essence' )
event.add('forge:boss_t5', 'alexscaves:immortal_embryo' )
event.add('forge:boss_t5', 'alexscaves:sugar_staff' )
event.add('forge:boss_t5', 'alexscaves:sweet_tooth' )
event.add('forge:boss_t5', 'alexscaves:occult_gem' )
event.add('forge:boss_t5', 'alexscaves:depth_charge' )
event.add('forge:boss_t5', 'alexscaves:pure_darkness' )


event.add('forge:crystal_t4', 'scalinghealth:heart_crystal_shard' )
event.add('forge:crystal_t4', 'scalinghealth:power_crystal_shard' )


const creative = [/.*ingot.*/,]
const blacklist = ['brick', 'nether_brick','andesite_alloy','kubejs:creative_ingot']

  creative.forEach(item => {
    if (!blacklist.includes(item)) event.add('forge:00', item)
  })

event.add('forge:00', "minecraft:iron_ingot")





})