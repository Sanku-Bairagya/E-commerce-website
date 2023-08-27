




// responsive navbar
const bar = document.getElementById('bar');
const close = document.getElementById('close')
const nav = document.getElementById('navbar');

if(bar)
{
    bar.addEventListener('click',()=>{
        nav.classList.add('active')
    })
}

if(close)
{
    close.addEventListener('click',()=>{
        nav.classList.remove('active')
    })
}


//for scrolling

const layer1 = document.getElementById("hero");
const layer2 = document.getElementById("feature");
const layer3 = document.getElementById("product1");
const layer4 = document.getElementById("banner");


window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    hero.style.transform = `translateY(-${scrollY * 0.9}px)`;
    feature.style.transform = `translateY(-${scrollY * 0.3}px)`;
   
   
});

const a = document.getElementById('lastImage');
const b = document.getElementById('MainImg');




function changeImage(imageUrl)
{
    b.src=imageUrl;
}

