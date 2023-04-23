let ospan = document.querySelectorAll('.literature_left>span')
let oul = document.querySelectorAll('.literature_left>ul')
for(let i = 0;i<ospan.length;i++){
    ospan[i].setAttribute('flog',0)
    ospan[0].setAttribute('flog',1)
    ospan[i].onclick=function(){
        if(this.getAttribute('flog')==1){
            oul[i].style.display='none'
            this.setAttribute('flog',0)
        }else{
            for(let j=0;j<ospan.length;j++){
                oul[j].style.display='none'
                ospan[j].setAttribute('flog',0)
            }
            this.setAttribute('flog',1)
            oul[i].style.display='block'
        }

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