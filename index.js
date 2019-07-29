var kittens = [ "Milo", "Otis", "Garfield" ] 

function destructivelyAppendKitten (Milo) {
  return kittens.push (Milo)
}

function destructivelyPrependKitten (Garfield) {
  return kittens.unshift(Garfield)
}

function destructivelyRemoveLastKitten() {
   return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

function appendKitten(Otis) {
  return [...kittens, Otis]
}

function prependKitten(Garfield) {
  return [Garfield,...kittens]
}

