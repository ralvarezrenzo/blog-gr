export default function menu(btn,navMenu,aMenu,flechaChange){
    const d = document;
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
            console.log(subMenu)
            console.log(e.target.classList)
        })
    })
}