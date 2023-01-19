function calculateArea(radius) {
  const pi = 3.14;
  let area = pi * (radius * radius);
  return area;
}

let radius = prompt("Please enter the radius of the circle: ");

console.log(`The area of the circle is ${calculateArea(radius).toFixed(3)}.`);