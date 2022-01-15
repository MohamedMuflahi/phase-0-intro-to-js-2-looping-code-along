// Code your solutions in this file

function writeCards(array,event){
    let x = [];
    for (let i = 0; i < array.length; i++) {
        x.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
        
    }
    return x;
}
function countDown(x){
    while (x > 0) {
        console.log(x);
        x ++;
    }
}