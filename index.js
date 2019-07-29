var kittens = [ "Milo", "Otis", "Garfield" ] 

function destructivelyAppendKitten (Milo) {
  return kittens.push (Milo)
}

function destructivelyPrependKitten (Garfield) {
  return kittens.unshift(Garfield)
}

function destructivelyRemoveLastKitten(Garfield) {
  return kittens.shift(Garfield)
}

function destructivelyRemoveFirstKitten() {
  return kittens.