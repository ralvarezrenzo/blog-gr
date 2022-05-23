export default function menu(btn,navMenu,aMenu,flechaChange){
    const d = document;
    const w = window;
    d.addEventListener('click',e=>{
        if(e.target.matches(btn) || e.target.matches(`${btn} *`)){
            d.querySelector(navMenu).classList.toggle("menu-open")
            console.log(d.querySelector(navMenu).classList)
        }
    })

    // submenus
    let aMenuBtn = d.querySelectorAll(aMenu);
    aMenuBtn.forEach(aMenuClick=>{
        aMenuClick.addEventListener('click',e=>{
            e.preventDefault();
            let height = 0;
            let subMenu = aMenuClick.nextElementSibling;
            if(subMenu.clientHeight == "0"){
                height = subMenu.scrollHeight;
            }
            subMenu.style.height = `${height}px`
            let arrow = aMenuClick.children[0];
            arrow.classList.toggle("arrow-change")
        })
    })

    let flecha = d.querySelectorAll(flechaChange);
        let flechaA = Array.from(flecha)
        if(innerWidth >  991){
        console.log(flechaA)
        flechaA.forEach(flechas=>{
            flechas.setAttribute('stroke','#fff')
        })
        }else{
            flechaA.forEach(flechas=>{
                flechas.setAttribute('stroke','#FF7B86')
            })
        }
    w.addEventListener('resize',(e)=>{
        console.log(innerWidth)
        let flecha = d.querySelectorAll(flechaChange);
        let flechaA = Array.from(flecha)
        if(innerWidth >  991){
        console.log(flechaA)
        flechaA.forEach(flechas=>{
            flechas.setAttribute('stroke','#fff')
        })
        }else{
            flechaA.forEach(flechas=>{
                flechas.setAttribute('stroke','#FF7B86')
            })
        }
    })
}