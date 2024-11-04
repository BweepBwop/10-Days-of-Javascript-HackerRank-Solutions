class Polygon {
    constructor(sides) {
        this.sides = sides;
        this.my_perimeter = null; 
    }

    perimeter() {
        if (this.my_perimeter === null) {
            this.my_perimeter = this.sides.reduce((total, side) => total + side, 0);
        }
        return this.my_perimeter;
    }
}
