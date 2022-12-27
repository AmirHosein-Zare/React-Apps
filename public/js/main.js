let s1 = document.getElementById('about-box')
let s2 = document.getElementById('about-top-box')

console.log(s1);

document.addEventListener('scroll',()=>{
    if(document.documentElement.scrollTop >= 70 && document.documentElement.scrollTop < 75){
        console.log(document.documentElement.scrollTop);
        s1.classList.add('about-box')
        s2.classList.add('about-top-box')
    }
})