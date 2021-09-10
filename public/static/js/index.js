console.log("index.js")
let slideWidth = window.innerWidth;
window.addEventListener("resize",()=>{
    slideWidth=window.innerWidth;
})
//section 1
const bannerSlider1 = document.querySelectorAll(".main-section1-wrap .banner-wrap > div");
const bannerSlider = document.querySelector(".main-section1-wrap .banner-wrap ");
const bannerLength = document.querySelectorAll(".main-section1-wrap .banner-wrap > div").length;
const leftButton = document.querySelector(".main-section1-wrap .left ");
const rightButton = document.querySelector(".main-section1-wrap .right ");
const loadingBar = document.querySelector(".main-section1-wrap .bar");
const leftNumber = document.querySelector(".main-section1-wrap .left-number");
const rightNumber = document.querySelector(".main-section1-wrap .right-number");
let count = 0;
let boxWid = 10;


setInterval(() => {
    boxWid += 2;
    loadingBar.style.width = `${boxWid}px`
    if (boxWid > 83) {
        boxWid = 0;
        count++;
        if (count >= bannerLength) count = 0;
        for (let i = 0; i < bannerLength; i++) {
            if (count == i)
                bannerSlider1[i].style.display = 'block';
            else bannerSlider1[i].style.display = 'none';
        }
        leftNumber.innerHTML = `0${count+1}`;
        if(count+1>=bannerLength){
            rightNumber.innerHTML = `01`;
        }
        else{
            rightNumber.innerHTML = `0${count+2}`;
        }
      
    }
}, 150);



rightButton.onclick = function () {
    count++;
    if (count >= bannerLength) count = 0;
    for (let i = 0; i < bannerLength; i++) {
        if (count == i)
            bannerSlider1[i].style.display = 'block';
        else bannerSlider1[i].style.display = 'none';
    }
    leftNumber.innerHTML = `0${count+1}`;
    if(count+1>=bannerLength){
        rightNumber.innerHTML = `01`;
    }
    else{
        rightNumber.innerHTML = `0${count+2}`;
    }
}
leftButton.onclick = function () {



    count--; 
    if (count <= -1) {
        count = 3;
    }

    for (let i = 0; i < bannerLength; i++) {
        if (count == i)
            bannerSlider1[i].style.display = 'block';
        else bannerSlider1[i].style.display = 'none';

    }
    leftNumber.innerHTML = `0${count+1}`;
    if(count+1>=bannerLength){
        rightNumber.innerHTML = `01`;
    }
    else{
        rightNumber.innerHTML = `0${count+2}`;
    }
}



//section 2
const desc = document.querySelector(".main-section2-wrap .desc");
const phoneImg = document.querySelector(".main-section2-wrap .phone-img");

document.addEventListener('scroll', () => {
 
    if(slideWidth/8<150){
        desc.style.transform = 'translate(0, 0)';
        phoneImg.style.transform = 'translate(0, 0)';
    }else{
        if (window.scrollY == 0) {
            desc.style.transform = 'translate(0, 500px)';
            phoneImg.style.transform = 'translate(0, 500px)';
    
        }
    }
  
    if (window.scrollY >= slideWidth/8) {
        desc.style.transform = 'translate(0, 0)';
        phoneImg.style.transform = 'translate(0, 0)';
    }
});

//section5
const sliderWrap = document.querySelector(".slider-wrap");
let pressed = false;
let startx;
let x;

 
sliderWrap.addEventListener("mousedown", e => {
    pressed = true
    startx = e.offsetX;
    console.log("mousedown");
    sliderWrap.style.cursor = "grabbing"
})

sliderWrap.addEventListener("mouseup", () => {
    console.log("mouseup");
    sliderWrap.style.cursor = "grab"
})
sliderWrap.addEventListener("mousemove", e => {
    console.log("mousemove");
    if (!pressed) return
    e.preventDefault()
    x = e.offsetX
  
    sliderWrap.style.left = `-${500}px`
})
