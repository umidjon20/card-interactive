/////////////  form value ////////
let nameInp = document.querySelector('#name'),
cardNum = document.querySelector('#card_num'),
month = document.querySelector('#months'),
year = document.querySelector('#years'),
cvc = document.querySelector('#cvc'),
btn = document.querySelector('.btn')


///////////////////   card /////////////
let cardNumber = document.querySelector('.card__number'),
userName = document.querySelector('.name'),
date = document.querySelector('.month'),
cardYear = document.querySelector('.year'),
number = document.querySelector('.number')

/////////////////////  errors /////////////////////

let error1 = document.querySelector('.num_error'),
myError = document.querySelector('.my_error'),
cvcError = document.querySelector('.cvc_error')

nameInp.addEventListener('input', (event)=>{
    userName.innerText = event.target.value
})
cardNum.addEventListener('input',(event)=>{
    if(isNaN(cardNum.value)){
        cardNum.style.borderColor = 'red'
        error1.style = 'display:flex;'
    } 
    else{
        cardNum.style.borderColor = '#DFDEE0'
        error1.style = 'display:none;'
        cardNumber.innerText = event.target.value
    }
    
})

////////////////////// month ////////////////////

month.addEventListener('input',(event)=>{
   
    if(year.length === 0 && cvc.length === 0){
        console.log(month.value);
        year.style.borderColor = 'red'
        myError.style = 'display:flex;'
    }
    date.innerHTML = `${event.target.value}`
})

////////////////////////  year   //////////////////////////
year.addEventListener('input',(event)=>{
    if(month.length === 0){
        year.style.borderColor = 'red'
        myError.style = 'display:flex;'
    }
    cardYear.innerHTML = `${event.target.value}`
})

///////////////////////////   cvc    ///////////////////////////////////

cvc.addEventListener('input',(event)=>{
    if(year === ''){
        year.style.borderColor = 'red'
        myError.style = 'display:flex;'
    }
    number.innerHTML = `${event.target.value}`
})




let  done = document.querySelector('.succesfully'),
cardForm  = document.querySelector('.card__form')





btn.addEventListener('click',(e)=>{
    e.preventDefault()
    if(year.length === 0){
        year.style.borderColor = 'red'
        // myError.style = 'display:flex;'
    }
    cardForm.style = 'display:none;'
    done.style = 'display :flex;'
    


})