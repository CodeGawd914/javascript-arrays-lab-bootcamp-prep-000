function destructivelyAppendKitten(name){
  kittens.push('Ralph')
  return kittens
}
function destructivelyPrependKitten(name){
  kittens.unshift('Bob')
  return kittens
}
function destructivelyRemoveLastKitten(){
 return kittens.pop()
}
function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}
function appendKitten(name){
  [...kittens, "Broom"]
  return kittens 
}