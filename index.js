// Code your solutions in this file
function writeCards(col, event) {
    let thanks = [];
    for (let i = 0; i < col.length; i++) {
    thanks.push(`Thank you, ${col[i]}, for the wonderful ${event} gift!`);
    }
    return thanks;
}

function countDown(count) {
while(count > -1){
    console.log(count--);
    }
}