var kittens = [ "Milo", "Otis", "Garfield" ] 

function destructivelyAppendKitten (Milo) {
  return kittens.push (Milo)
}

function destructivelyPrependKitten (Garfield) {
  return kittens.unshift(Garfield)
}

function destructivelyRemoveLastKitten() {
   retun kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.pop(Milo)
}