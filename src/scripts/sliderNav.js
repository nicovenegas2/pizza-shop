export default function sliderNav() {

    const menu = document.getElementById("menu-nav-sections");
    const indicator = document.getElementById("menu-nav-indicator");
    const sections = document.querySelectorAll(".menu-sections > div");
    
    let indicatorsize = menu.querySelector("a").offsetWidth;
    indicator.style.width = indicatorsize + "px";
    
    const  observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                indicator.style.left = menu.querySelector("a[href='#"+entry.target.id+"']").offsetLeft + "px";
                indicator.style.width = menu.querySelector("a[href='#"+entry.target.id+"']").offsetWidth + "px";
            }
        });
    },{
        rootMargin: "-30px 0px 0px 0px",
        threshold: 0.3
    });
    sections.forEach((section) => {observer.observe(section);});
}