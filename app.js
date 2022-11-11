const bars = document.querySelectorAll(".bar-graph")
const amounttags = document.querySelectorAll(".amount-tag")

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