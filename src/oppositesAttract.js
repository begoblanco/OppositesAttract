export function isLove(petalsFlower1, petalsFlower2) {
  if (!Number.isInteger(petalsFlower1) || !Number.isInteger(petalsFlower2)) {
    return "The number of petals must be and integer";
  }
  if (
    (petalsFlower1 % 2 == 0 && petalsFlower2 % 2 !== 0) ||
    (petalsFlower1 % 2 !== 0 && petalsFlower2 % 2 == 0)
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(isLove(1, 4)); //true
console.log(isLove(2, 2)); //false
console.log(isLove(0, 1)); //true (0 is considered an even number)
console.log(isLove(0, 0)); //false
console.log(isLove(1.5, 4)); //The number of petals must be and integer
console.log(isLove("miau", 4)); //The number of petals must be and integer
