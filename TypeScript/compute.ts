//function statement
export function sum( a: number, b: number): number{
    return a + b;
}

//function expression
export const add = function(a: number, b: number): number{
    return a + b;
}
//Arrow function
const multiply = (a: number, b: number): number => {
    return a + b;
}

export const squareIt = (x: number)=>x * x;



// var a = 100;

// function foo(){

//     var a = 5;
//     console.log(a);

//     function bar(){
//         console.log(a);
//     }
// }



var theObj = {
    id: 100,
    print: function(){
        console.log("id", this.id);
        setTimeout(()=>{
            console.log("id after 2sec", this.id);
        }, 2000)
    }
}
theObj.print();

export default {
    sum, add, multiply, squareIt
}


