function changeColor(){
    let input=document.getElementById('color')
    let text=document.getElementById('display')

    text.style.color=input.value
}

function anyone(){
    let password=document.getElementById('password')
    let eye=document.getElementById('eye')
    if(password.type=='text'){
        password.type='password'
        eye.innerHTML='show'
    }
    else{
        (eye.innerHTML='hide')
    }
}

let numberOfTimes = document.getElementById('numberOfTimes')
let textarea = document.getElementById('textarea')

function input(){
    numberOfTimes.innerHTML=textarea.value.length
    if(textarea.value.length==50){
        textarea.value=''
    }
}



// let yourTextArea=document.getElementById("usertext").value;
       
//     if (yourTextArea.length < 10 || yourTextArea.length > 50) {
//         alert("The field must have no less than 10 and no more than 400 characters.");
//         return false;
//     }

    // In case you want to limit the number of characters in no less than, say, 10
// or no more than 400. 