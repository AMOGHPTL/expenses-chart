const bars = document.querySelectorAll(".bar-graph")
const amounttags = document.querySelectorAll(".amount-tag")
const logo = document.querySelector(".logo")
const topbar = document.querySelector(".top-bar")
const amount = document.querySelector(".amount")
const type = document.querySelectorAll(".type")
const logotype = document.querySelector(".logo-type")
const statsheading = document.querySelector(".stats-heading")
const days = document.querySelectorAll('.day')
const typeblack = document.querySelector(".type--black")
const endbar = document.querySelector(".end-bar")
const moneybig = document.querySelector(".money-big")
const from = document.querySelector(".from")
const main = document.querySelector(".main")

for(let bar of bars){
    for(let amounttag of amounttags){
        if(bar.contains(amounttag)==true){
            bar.addEventListener('mouseenter',function(){
                amounttag.classList.remove('hidden')
            })
            bar.addEventListener('mouseleave',function(){
                amounttag.classList.add('hidden')
            })
        }
    }
   
}

logo.addEventListener('click',function(){
    amount.classList.toggle('dark-letter')
    for(let types of type){
        types.classList.toggle('dark-letter')
    }
    logotype.classList.toggle('dark-letter')
    if(logotype.classList.contains('dark-letter')==true){
        logotype.innerText='Dark'
    }
    if(logotype.classList.contains('dark-letter')==false){
        logotype.innerText='Light'
    }
    statsheading.classList.toggle('light-letter')
    for(let day of days){
        day.classList.toggle('light-letter')
    }
    typeblack.classList.toggle('light-letter')
    endbar.classList.toggle('light-letter')
    moneybig.classList.toggle('light-letter')
    from.classList.toggle('light-letter')
    for(let amounttag of amounttags){
        amounttag.classList.toggle('dark-letter')
        amounttag.classList.toggle('light')
    }
    main.classList.toggle('dark')
    endbar.classList.toggle('dark')
})
