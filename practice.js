    // window.print();
    // const numbers = [45, 4, 9, 16, 25];
     
    // for(i=0;i<numbers.length;i++){
    //     numbers[i]*=2;
    // };
    // console.log(numbers);

    const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);
document.getElementById("demo").innerHTML = txt;

function myFunction(value, index, array) {
  txt += value + "<br>"; 
}
    
    
    
    

// let x = 100 / "Apple";
// let y=!isNaN(x)? true: false;
// console.log(y);
















