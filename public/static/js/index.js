let slideWidth = window.innerWidth;
window.addEventListener("resize", () => {
    slideWidth = window.innerWidth;
})
//section 1
const bannerSliderlist = document.querySelectorAll(".main-section1-wrap .banner-wrap  li");
const bannerSlider = document.querySelector(".main-section1-wrap .banner-wrap ");
const leftButton = document.querySelector(".main-section1-wrap .left ");
const rightButton = document.querySelector(".main-section1-wrap .right ");
const loadingWarp = document.querySelector(".main-section1-wrap .bar-wrap");
const loadingBar = document.querySelector(".main-section1-wrap .bar");
const leftNumber = document.querySelector(".main-section1-wrap .left-number");
const rightNumber = document.querySelector(".main-section1-wrap .right-number");
const popupWrap = document.querySelector(".popup-wrap");
const play = document.querySelector(".main-section1-wrap .play");
const body = document.querySelector("body");
let count = 0;
let boxWid = 10;
let playBtn = true;

const togetherBtn = document.querySelector(".clickbtn1");
const popup = document.querySelector(".popup-wrap");

togetherBtn.addEventListener("click", () => {
    popup.style.visibility = `visible`;
    popupWrap.style.backgroundColor = `rgba(0, 0, 0, 0.6)`;
    body.style.overflow = `hidden`;

})
play.addEventListener("click", () => {
    console.log("clock");
    if (playBtn) {
        play.src = "img/main-section1/stop.png";
        clearTimeout(barEffect);

    } else {
        play.src = "img/main-section1/play.png";
        count--;
        showslider(false);

    }
    playBtn = !playBtn
})
window.addEventListener('load', () => {
    showslider(true);

});



var barEffect;

function showslider(stop) {

    if (count < 0) count = 3
    if (count >= bannerSliderlist.length) {
        count = 0;
        bannerSliderlist[bannerSliderlist.length - 1].querySelector("img").style.transform = 'none';
        bannerSliderlist[bannerSliderlist.length - 1].querySelector("img").style.transition = 'none';
    }

    bannerSliderlist[count].querySelector("img").style.transform = 'scale(1.1)';
    bannerSliderlist[count].querySelector("img").style.transition = '4.5s';

    bannerSlider.style.marginLeft = `-${count*100}%`;
    if (count == 3) {
        for (let i = 0; i < 3; i++) {
            bannerSliderlist[i].querySelector("img").style.transform = 'none';
            bannerSliderlist[i].querySelector("img").style.transition = 'none';
        }
    }
    leftNumber.innerHTML = `0${count+1}`;
    if (count + 1 >= bannerSliderlist.length) {
        rightNumber.innerHTML = `01`;
    } else {
        rightNumber.innerHTML = `0${count+2}`;
    }

    count++;



    if (stop)
        boxWid = 10;
    barEffect = setInterval(() => {
        sliderLoadingBar()
    }, 100);


}

function sliderLoadingBar() {
    boxWid += loadingWarp.clientWidth / 43;
    loadingBar.style.width = `${boxWid}px`
    if (boxWid > loadingWarp.clientWidth) {
        clearTimeout(barEffect);
        showslider(true);
    }
}

rightButton.onclick = function () {
    if (playBtn) {
        clearTimeout(barEffect);
        showslider(true)
    }


}
leftButton.onclick = function () {
    if (playBtn) {
        count = count - 2;
        clearTimeout(barEffect);
        showslider(true);
    }

}


// //section2
const desc2 = document.querySelector(".main-section2-wrap .desc");
const phoneImg2 = document.querySelector(".main-section2-wrap .phone-img");
const desc6 = document.querySelector(".main-section6-wrap .desc");
const phoneImg6 = document.querySelector(".main-section6-wrap .phone-img");

document.addEventListener('scroll', () => {


    if (slideWidth / 8 < 150) {
        desc2.style.transform = 'translate(0, 0)';
        phoneImg2.style.transform = 'translate(0, 0)';
    } else {
        if (window.scrollY < 30) {
            desc2.style.transform = 'translate(0, 150%)';
            phoneImg2.style.transform = 'translate(0, 50%)';
            desc6.style.transform = 'translate(0, 150%)';
            phoneImg6.style.transform = 'translate(0, 150%)';

        }
    }

    if (window.scrollY >= slideWidth / 7) {
        desc2.style.transform = 'translate(0, 0)';
        phoneImg2.style.transform = 'translate(0, 0)';
    }
    if (window.scrollY >= slideWidth * 1.8) {
        desc6.style.transform = 'translate(0, 0)';
        phoneImg6.style.transform = 'translate(0, 0)';
    }

});





// //section8
const slides = document.querySelector(".main-section8-wrap .slides");
const slide = document.querySelectorAll(".main-section8-wrap .slides li");
console.log(slides);
let currentIdx = 0;
let slideCount = slide.length;
let section8slideWidth = slide[0].offsetWidth;
let slideMargin = +window.getComputedStyle(slide[0]).getPropertyValue("margin-right").split("px")[0];
window.addEventListener("resize", () => {
    section8slideWidth = slide[0].offsetWidth;
    slideMargin = +window.getComputedStyle(slide[0]).getPropertyValue("margin-right").split("px")[0];
})
makeClone();

setInterval(() => {
    moveSlider(currentIdx + 0.2);
}, 200)

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
    slides.style.left = (-num * (section8slideWidth + slideMargin)) / 5 + 'px';
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