console.log("hellog")
//section 1
const bannerSlider1  = document.querySelectorAll(".main-section1-wrap .banner-wrap > div");
const bannerSlider  = document.querySelector(".main-section1-wrap .banner-wrap ");
const bannerLength= document.querySelectorAll(".main-section1-wrap .banner-wrap > div").length;
const leftButton = document.querySelector(".main-section1-wrap .left ");
const rightButton= document.querySelector(".main-section1-wrap .right ");
let slideWidth = window.innerWidth;
let count =0;

rightButton.onclick = function(){

    count ++;
    if(count>=bannerLength) count=0;
    for(let i=0; i<bannerLength; i++){
        if(count == i)
        bannerSlider1[i].style.display='block';
        else bannerSlider1[i].style.display='none';
    
    }
    console.log(count);
}
leftButton.onclick = function(){


 
    count --;
console.log(count);
    if (count <= -1) {
        count=3;
        console.log("count");
    }

    for(let i=0; i<bannerLength; i++){
        if(count == i)
        bannerSlider1[i].style.display='block';
        else bannerSlider1[i].style.display='none';
    
    }
   
}



//section 2
const desc = document.querySelector(".main-section2-wrap .desc");
const phoneImg = document.querySelector(".main-section2-wrap .phone-img");

document.addEventListener('scroll', () => {
  console.log(window.outerHeight );
   if(window.scrollY==0){
    desc.style.transform ='translate(0, 500px)';
    phoneImg.style.transform ='translate(0, 500px)';
     
   }
   if(window.scrollY>=500){
    desc.style.transform ='translate(0, 0)';
    phoneImg.style.transform ='translate(0, 0)';
   }
});