var rect=require('./rectangle');

function solveRect(l,b){
    console.log("Solving for rectangle with l="+l+"and b="+b);
    if(l<=0 || b<=0){
        console.log("positive value");
    }
    else{
        console.log("the area of the rectangle is"+rect.area(l,b));
        console.log("the perimeter of the rectangle is"+rect.perimeter(l,b));
    }
}
solveRect(2,4);
solveRect(0,4);
solveRect(-2,4);