window.addEventListener("DOMContentLoaded", () => {
    const slidesWrap = document.querySelector(".main-section5-wrap .slide_wrapper");
    const slides = document.querySelector(".main-section5-wrap .slides");
    const slide = document.querySelectorAll(".main-section5-wrap .slides li");
    const prevBtn = document.querySelector(".main-section5-wrap .prev");
    const nextBtn = document.querySelector(".main-section5-wrap .next");
    let currentSlider;

    let currentIdx = 0;
    let slideCount = slide.length;
    let slideWidth = slide[0].offsetWidth;

    // let slideMargin = +window.getComputedStyle(slide[0]).getPropertyValue("margin-right").split("px")[0];
    //  console.log(+window.getComputedStyle(slide[0]).getPropertyValue("margin-right").split("px")[0]);
    let slideMargin = +window.getComputedStyle(slide[0]).getPropertyValue("margin-right").split("px")[0];
    window.addEventListener("resize",()=>{
        slideMargin = +window.getComputedStyle(slide[0]).getPropertyValue("margin-right").split("px")[0]
        slideWidth = slide[0].offsetWidth;
    })
    
    makeClone();

    slide[2].querySelector("img").style.width = `17.3vw`;
    slide[2].querySelector("img").style.height = `34.8vw`;
    // setInterval(() => {
    //     moveSlider(currentIdx + 1);
    // }, 2500)
    nextBtn.addEventListener("click", () => {
        
        moveSlider(currentIdx + 1);
    });
    prevBtn.addEventListener("click", () => {
        moveSlider(currentIdx - 1);
    });


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
        currentSlider = document.querySelectorAll(".main-section5-wrap .slides li img");

        const newSlideCount = currentSlider.length;
        //총 slider 넓이

        const newWidth = (slideWidth + slideMargin) * newSlideCount - slideMargin + 3 + 'px';
        slides.style.width = newWidth;

    }

    function setInitialPos() {
        const initailTranslateValue = -(slideWidth + slideMargin) * slideCount + 3;

        slides.style.transform = `translateX(${initailTranslateValue}px)`

    }

    function moveSlider(num) {
        slides.style.left = -num * (slideWidth + slideMargin) + 'px';
        currentIdx = num;
      
 

        for (let i = 0; i < currentSlider.length; i++) {
            if (slideCount + currentIdx + 2 == i) {
                currentSlider[i].style.width = `17.3vw`;
                currentSlider[i].style.height = `34.8vw`;

            } else {
                currentSlider[i].style.width = `13.6vw`;
                currentSlider[i].style.height = `27.4vw`;
            }
        }
        console.log(currentIdx+","+slideCount);
       
        if (currentIdx >= slideCount || currentIdx <= -slideCount) {
            setTimeout(() => {
          
                currentSlider[slideCount + 2].style.width = `17.3vw`;
                currentSlider[slideCount + 2].style.height = `34.8vw`;
                slides.style.left = '0px';
                currentIdx = 0;
                slides.classList.remove('animated');


            }, 500);
            setTimeout(() => {

                slides.classList.add('animated');
            }, 600);
        }
    }

    let sum = 0;
    let pressed = false;
    let startx;
    let x;
    slidesWrap.addEventListener("mousedown", e => {
        pressed = true
        startx = e.offsetX;

        slidesWrap.style.cursor = "grabbing"
    })


    slidesWrap.addEventListener("mouseup", () => {
        console.log(currentIdx);
       
        
        slides.classList.add('animated');
        if( currentIdx ==0){
            slides.classList.remove('animated');
        }
        pressed = false
        
        if ((x - startx) < -10) {
            let count = Math.round((-(x - startx)) / (slideWidth + slideMargin))

            moveSlider(currentIdx + count);
        }
        if ((x - startx) > 10) {
            let count = Math.round(((x - startx)) / (slideWidth + slideMargin))

            moveSlider(currentIdx - count);
        }
      
      
        sum = -currentIdx * (slideWidth + slideMargin);
    })
    slidesWrap.addEventListener("mousemove", e => {
        if (!pressed) {
            return
            e.preventDefault()
        }
        x = e.offsetX

       
       slides.style.left = sum + (x - startx) + `px`;
       slides.classList.remove('animated');
       
       

     
      


    })
})