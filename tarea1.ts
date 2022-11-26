
/*
let addNumbers = function(x:number, y:number): number {
    return x+y;
}

addNumbers(1,2);
*/



/*
let addNumbers = function(array:number[]) {
    let suma:number = 0;

    for (let index=0 ; index < array.length; index++) {
        //const element = array[index];
       // console.log(element);
        suma +=array[index]; 
    
    }
    
    console.log(suma);

}

addNumbers([1,2,3]);


*/


//let addNumbers2 = (x:number, y: number ): number => x +y;


let addNumbers2 = (array:number[] ) => {
    let suma:number = 0;

    for (let i=0 ; i <array.length; i++) {
        //const element = array[index];
       // console.log(element);
        suma +=array[i]; 
    
    }

    console.log(suma)
}


addNumbers2([1,2,3]);

//las funciones => no tienen nombre

let displayAlert = function(message:string){
    alert ('the message is' + message);
}


let displayAlert2 = (message:string)  => {
    alert ('the message is' + message);
    
} 
