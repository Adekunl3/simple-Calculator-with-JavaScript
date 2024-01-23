

let bg_input = document.getElementById('bg_input')
let sm_input = document.getElementById('sm_input')
let shouldClear = false
let first_value,operator=''


function btn(number) {
    //    let bg_input= document.getElementById('bg_input')
    if (shouldClear == true) {
        bg_input.innerHTML = ''
        shouldClear = false
    }
    bg_input.innerHTML += number;
    adjustFontSize()
}

function copyto(opr) {
    // let sm_input= document.getElementById('sm_input')
    
    if (operator) {
    equals()
    
   }
    sm_input.innerHTML = bg_input.innerHTML + opr;
    shouldClear = true
    operator=opr
    first_value=bg_input.innerHTML
  
}

function equals(){
    sm_input.innerHTML= first_value+operator+bg_input.innerHTML 
    
       
    if (operator=='-') {

       bg_input.innerHTML= Number(first_value)-Number(bg_input.innerHTML) 
       
       
    }
    if (operator=='+') {
        bg_input.innerHTML=Number(first_value)+Number(bg_input.innerHTML )
   
    }
    if (operator=='x') {
        bg_input.innerHTML=Number(first_value)*Number(bg_input.innerHTML )
    }
    if (operator=='/') {
        bg_input.innerHTML=Number(first_value)/Number(bg_input.innerHTML )
        
    }
    adjustFontSize()
}

function powerr(){
 
    bg_input.innerHTML=Number(bg_input.innerHTML)**2
    adjustFontSize()
}

function clearit() {
    bg_input.innerHTML = '';
    sm_input.innerHTML = '';
    operator='';
}
function ce() {
    bg_input.innerHTML = '';
    operator='';
}


function deletee(){
  bg_input.innerHTML= bg_input.innerHTML.slice(0, -1)

}
function calculateReciprocal() {
    // // Get the current value on the display
    // let currentValue = parseFloat(display.value);

    // Calculate the reciprocal (1/x)
    bg_input.innerHTML = 1 / Number(bg_input.innerHTML );

    // // Update the display with the result
    // display.value = result;
}
function sqrt2x() {
    bg_input.innerHTML = 2 * Math.sqrt(Number(bg_input.innerHTML));
    adjustFontSize();
}

function percentage() {
    bg_input.innerHTML = Number(bg_input.innerHTML) / 100;
    adjustFontSize();
}

function toggleSign() {
    bg_input.innerHTML = -1 * Number(bg_input.innerHTML);
    adjustFontSize();
}

function adjustFontSize() {
    // Set a maximum font size to prevent overflow
    const maxFontSize = 20; // Adjust this value as needed
    const maxLength = 10; // Adjust this value as needed

    // Get the current font size
    let currentFontSize = parseInt(window.getComputedStyle(bg_input).fontSize); /*window.getComputedStyle(...): This method returns an object containing the values of all CSS properties of an element, after applying active stylesheets and resolving any basic computation those values may contain. */

    /*parseInt(...): This function in JavaScript is used to parse a string and convert it into an integer. In this case, it is used to convert the font size (which is often specified in pixels as a string, like "16px") into an integer.

 */

    // Adjust the font size based on the length of the displayed number
    if (bg_input.innerHTML.length > maxLength && currentFontSize > maxFontSize) {
        bg_input.style.fontSize = maxFontSize + 'px';
    } else if (currentFontSize < maxFontSize) {
        bg_input.style.fontSize = '';
    }
}

// Class work 22nd jan 2024

// Manipulate our dOM

// function changeColor(){
//     let input=document.getElementById('color')
//     let text=document.getElementById('display')

//     text.style.color=input.value
// }

// function anyname(){
//     let password=document.getElementById('password')
//     let eye=document.getElementById('eye')
//     if(password.type=='text'){
//         password.type='password'
//         eye.innerHTML='show'
//     }
//     else{
//         (eye.innerHTML='hide')
//     }
// }

