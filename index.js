var rect = {
    perimeter: (x, y) => (2 * (x + y)),
    area: (x,y)=>(x*y)
}
function solveRect(l, b) {
    console.log('Solving for rectangle for l=' + l +  'b=' + b)
    if (l <= 0 || b <= 0) {
        console.log()
    }
    else {
        console.log("The area of the rectangle is " + rect.area(l, b))
        console.log("The perimeter of the rectangle"+ rect.perimeter(l,b))
    }
}
solveRect(2,4)

