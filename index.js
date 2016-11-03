const app = "I don't do much."

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(){
    kittens.pop()
    return kittens

}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

function appendKitten(name){
  var cats = [...kittens, name]
  return cats
}

function prependKitten(name){
  var cats = [name, ...kittens]
  return cats
}

function removeLastKitten(){
  var blerb = kittens.slice(0, kittens.length - 1)
    return blerb
}

function removeFirstKitten(){
  var blerb = kittens.slice(1, kittens.length)
    return blerb
}
