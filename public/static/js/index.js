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
            desc.style.transform = 'translate(0, 60%)';
            phoneImg.style.transform = 'translate(0, 60%)';
    
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

//section8
const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slides li");
console.log(slides);
let currentIdx = 0;
let slideCount = slide.length;
let section8slideWidth = slide[0].offsetWidth;
let slideMargin = +window.getComputedStyle(slide[0]).getPropertyValue("margin-right").split("px")[0];
makeClone();

setInterval(() => {
     moveSlider(currentIdx + 1);
}, 2500)
function makeClone() {
    for (let i = 0; i < slideCount; i++) {
        //a.cloneNode a 요소를 복사 a.cloneNode(true) a의 자식요소 모두복사
        let cloneSlider = slide[i].cloneNode(true);
        //클레스명 추가
        cloneSlider.classList.add('clone');
        //a.appendChild(b) a요소 뒤에 b추가
        slides.appendChild(cloneSlider);

    }
    for (let i = slideCount - 1; i >= 0; i--) {
        let cloneSlider = slide[i].cloneNode(true);
        //클레스명 추가
        cloneSlider.classList.add('clone');
        //a.prepend(b) a요소 앞에 b추가
        slides.prepend(cloneSlider);

    }
    updateWidth();

    setInitialPos();
    setTimeout(() => {
        slides.classList.add('animated');
    }, 100)


}

function updateWidth() {
    const currentSlider = document.querySelectorAll(".slides li");
    const newSlideCount = currentSlider.length;
    //총 slider 넓이

    const newWidth = (section8slideWidth + slideMargin) * newSlideCount - slideMargin + 3 + 'px';
    slides.style.width = newWidth;

}

function setInitialPos() {
    const initailTranslateValue = -(section8slideWidth + slideMargin) * slideCount + 3;

    slides.style.transform = `translateX(${initailTranslateValue}px)`

}

function moveSlider(num) {
    slides.style.left = -num * (section8slideWidth + slideMargin) + 'px';
    currentIdx = num;

    if (currentIdx == slideCount || currentIdx == -slideCount) {
        setTimeout(() => {
            slides.style.left = '0px';
            currentIdx = 0;
            slides.classList.remove('animated');
        }, 500);
        setTimeout(() => {
            slides.classList.add('animated');
        }, 600);
    }
}
