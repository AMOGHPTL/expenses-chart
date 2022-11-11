const bars = document.querySelectorAll(".bar")
const amounttags = document.querySelectorAll(".amount-tag")

for(let bar of bars){
    for(let amounttag of amounttags){
    bar.addEventListener('mouseover',function()
    {
       amounttag.classList.remove('hidden')
    })
}
}