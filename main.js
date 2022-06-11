let rates = document.getElementsByClassName('rating')
let rate=0;


function modifyColor(event){

    event.target.style.backgroundColor = '#FC7614'
    event.target.style.color = "#FFFFFF"
}

function revertColor(event){
    event.target.style.backgroundColor='#262E38'
    event.target.style.color = "#7C8798"
    
    
}

 for(let i=0; i<rates.length;i++){

     rates[i].addEventListener('mousedown',modifyColor)
     

    
    
}

if(document. getElementById('rating'). clicked == true)
console.log("The Selected rating is "+ getElementById.innerHTML)

// for(let i=0; i<rates.length;i++){

//      rates[i].addEventListener('mouse',revertColor)
    
    
// }
