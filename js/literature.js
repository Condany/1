let ospan = document.querySelectorAll('.literature_left>span')
let oul = document.querySelectorAll('.literature_left>ul')
for(let i = 0;i<ospan.length;i++){
    ospan[i].onclick=function(){
        for(let j=0;j<ospan.length;j++){
            oul[j].style.display='none'
        }
        oul[i].style.display='block'
    }

}
let Oli = document.querySelectorAll('.literature_left>ul>li')
for(let i = 0;i<Oli.length;i++){
    Oli[i].onclick=function(){
        for(let j=0;j<Oli.length;j++){
            Oli[j].className=''
        }
        this.className='active'
    }
}