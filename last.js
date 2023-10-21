let array = ['sheep','goat','camel']

function myPets(){
    for(let i = 0;i<array.length;i++){
        
        console.log(`This is my ${array[i]}`)
    }
}myPets();

let radii = [4,6,8,9]

function calculateArea(){
    for(let i = 0;i<radii.length;i++){
        const area = Math.PI*radii[i]*radii[i];
        console.log(`This is my ${radii[i]} and this is my ${area}`)
    }
}calculateArea();

function calculate(radius,logic){
    if(logic ==='area'){
        return Math.PI*radius*radius
    }
    else{
        return radius*radius
    }
}console.log(calculate(6,'area'));