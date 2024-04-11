// apde "id=counter" vali value ne countValue ne api
// countVakue a 'div' valo element che j ni "id=counter"
// const countValue = document.querySelector('#counter');
// "getElementById" method ma "#" ni jarur nathi hoti
// ahiya const apde countValue ne banaviyu che j aek object che 
const countValue = document.getElementById('counter');

// const increment = () => {}; pan apde use kari shakiye chiye 
function increment(){
    // get the vlue from UI (UI pase thi value lidhi)
    // "countValue.innerText" thi apanane 'string' value male che 
    // "string" value ne "interger" value ma convert karva mate apde "parseInt" no use karelo che
    let value = parseInt(countValue.innerText);
    //Update the value
    value = value + 1;
    //set the value onto UI (UI ne value pachi api)
    countValue.innerText = value;
};

// const decrement = () => {};
function decrement(){
        // get the vlue from UI
        let value = parseInt(countValue.innerText);
        //Update the value
        value = value - 1;
        //set the value onto UI
        countValue.innerText = value;
};