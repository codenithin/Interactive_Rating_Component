let rates = document.getElementsByClassName('rating')
let submitbutton= document.getElementsByClassName('submit-btn')[0]
let rating = 0


function selectrating(event){
    event.target.style.backgroundColor = '#FC7614';
    
    


}
function modifyBtnColor(event){

    event.target.style.backgroundColor = '#FFFFFF'
    event.target.style.color = '#FC7614'
}

function revertBtnColor(event){
    event.target.style.backgroundColor = '#FC7614'
    event.target.style.color = '#FFFFFF'

}

function modifyColor(event){
    event.target.style.backgroundColor='#7C8798'
    event.target.style.color = '#FFFFFF'

}
function revertColor(event){
    event.target.style.backgroundColor='#262E38'
    event.target.style.color = '#7C8798'
    
}

for(let i=0;i<rates.length;i++){
    rates[i].addEventListener('mouseover',modifyColor)
    
    
}

for( i=0;i<rates.length;i++){
    rates[i].addEventListener('mouseout',revertColor)

}

function submission(event){
    event.target


}

submitbutton.addEventListener('mouseover',modifyBtnColor);
submitbutton.addEventListener('mouseout',revertBtnColor)
console.log(rating)