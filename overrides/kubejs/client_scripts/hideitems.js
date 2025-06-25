
JEIEvents.hideItems(event => {

  event.hide(Item.of('sophisticatedstorage:netherite_barrel').ignoreNBT())
  event.hide(Item.of('sophisticatedstorage:limited_netherite_barrel_1').ignoreNBT())
  event.hide(Item.of('sophisticatedstorage:limited_netherite_barrel_2').ignoreNBT())
  event.hide(Item.of('sophisticatedstorage:limited_netherite_barrel_3').ignoreNBT())
  event.hide(Item.of('sophisticatedstorage:limited_netherite_barrel_4').ignoreNBT())
  event.hide('kubejs:the_game')


  event.hide('sophisticatedstorage:basic_to_netherite_tier_upgrade' )
  event.hide('sophisticatedstorage:copper_to_netherite_tier_upgrade')
  event.hide('sophisticatedstorage:iron_to_netherite_tier_upgrade')
  event.hide('sophisticatedstorage:gold_to_netherite_tier_upgrade') 
  event.hide('sophisticatedstorage:diamond_to_netherite_tier_upgrade')
  event.hide('sophisticatedstorage:netherite_shulker_box')
  event.hide('sophisticatedstorage:netherite_chest')

  event.hide(  'rats:rat_upgrade_enchanter' )
  event.hide(  'rats:rat_upgrade_disenchanter' )
  event.hide(  'rats:rat_upgrade_breeder' )
  event.hide(  'rats:rat_upgrade_fisherman' )
  event.hide(  'rats:rat_upgrade_lumberjack' )
  event.hide(  'rats:rat_upgrade_farmer' )
  event.hide(  'rats:rat_upgrade_quarry' )
  event.hide(  'rats:rat_upgrade_shears' )
  event.hide(  'rats:rat_upgrade_crafting' )
  
  event.hide({ mod : 'ftbquests'})


event.hide(	'compressium:stone_1'	)
event.hide(	'compressium:gravel_1'	)
event.hide(	'compressium:netherrack_1'	)
event.hide(	'compressium:snow_1'	)
event.hide(	'compressium:soulsand_1'	)
event.hide(	'compressium:iron_1'	)
event.hide(	'compressium:gold_1'	)
event.hide(	'compressium:emerald_1'	)
event.hide(	'compressium:clay_1'	)
event.hide(	'compressium:netherite_1'	)
event.hide(	'compressium:coal_1'	)
event.hide(	'compressium:copper_1'	)
event.hide(	'compressium:redsand_1'	)
event.hide(	'compressium:endstone_1'	)
event.hide(	'compressium:obsidian_1'	)
event.hide(	'compressium:lapis_1'	)
event.hide(	'compressium:quartz_1'	)
event.hide(	'compressium:redstone_1'	)
event.hide(	'compressium:andesite_1'	)
event.hide(	'compressium:diorite_1'	)
event.hide(	'compressium:granite_1'	)
event.hide(	'compressium:diamond_1'	)

 
event.hide('apotheosis:ender_lead')
  
  
Ingredient.of('@untamedwilds').stacks.forEach(item => {
  if (item == 'untamedwilds:trap_cage'){
  }
  else{event.hide(item)}
}) 




Ingredient.of('@ftbquests').stacks.forEach(item => {
  event.hide(item)}
)




})

