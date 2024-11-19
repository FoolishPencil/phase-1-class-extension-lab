// Base class: Polygon
class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    // Getter for count of sides
    get countSides() {
        return this.sides.length;
    }

    // Getter for perimeter
    get perimeter() {
        return this.sides.reduce((total, side) => total + side, 0);
    }
}

// Derived class: Triangle
class Triangle extends Polygon {
    // Getter to check if the triangle is valid
    get isValid() {
        if (this.countSides !== 3) return false;
        const [a, b, c] = this.sides;
        return a + b > c && a + c > b && b + c > a;
    }
}

// Derived class: Square
class Square extends Polygon {
    // Getter to check if the square is valid
    get isValid() {
        if (this.countSides !== 4) return false;
        return this.sides.every(side => side === this.sides[0]);
    }

    // Getter for area of the square
    get area() {
        if (!this.isValid) return undefined; // Ensures the square is valid
        return this.sides[0] ** 2;
    }
}

// Testing the implementation

// Create a Triangle instance
const triangle = new Triangle([3, 4, 5]);
console.log(triangle.countSides); // 3
console.log(triangle.perimeter); // 12
console.log(triangle.isValid); // true

// Create an invalid Triangle instance
const invalidTriangle = new Triangle([1, 2, 3]);
console.log(invalidTriangle.isValid); // false

// Create a Square instance
const square = new Square([4, 4, 4, 4]);
console.log(square.countSides); // 4
console.log(square.perimeter); // 16
console.log(square.isValid); // true
console.log(square.area); // 16

// Create an invalid Square instance
const invalidSquare = new Square([2, 3, 4, 5]);
console.log(invalidSquare.isValid); // false
console.log(invalidSquare.area); // undefined
