
// const fixedMenu = document.querySelector('.menu-fixed')
const menuFixedNav = document.querySelector(".menu-fixed-nav-2")
import sal from 'sal.js'

const indicator = document.querySelector('.indicator')
const totalHeight = (document.body.scrollHeight - window.innerHeight )
const langsList= document.querySelector('.langs')
const langsList2= document.querySelector('.langs2')

const scrolling = (page) =>{
    sal({
        once : false
    });
    
    let scroll_position  = window.pageYOffset
    indicator.style.width = `${scroll_position / totalHeight * 100}%` 
    
    let ticking = false 
    window.addEventListener("scroll",(e)=>{
        scroll_position = window.pageYOffset
        let scroll_units =  Math.round(scroll_position / totalHeight * 100) 
        
        if(!ticking){
            window.requestAnimationFrame(()=>{
                scrolled(scroll_position , scroll_units ,page)
            })
        }
        
    })

}


function scrolled(scroll_position , units , page){
    langsList.classList.remove('show-langs')
    langsList2.classList.remove('show-langs')
    if(scroll_position>200){
        fixedMenu.classList.add('show-menu-fixed-nav')
    }
    if(scroll_position<200){
        fixedMenu.classList.remove('show-menu-fixed-nav')
    }
    indicator.style.width = `${scroll_position / totalHeight * 100}%` 
    


}
export { scrolling }