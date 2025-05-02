const book_a_trip = document.querySelector(".book_a_trip");
const book_a_trip_OST = book_a_trip.offsetTop;
const book_a_trip_height = book_a_trip.offsetHeight;

const ongoing_percent = document.querySelector(".ongoing .percent");
const ongoing_bar = document.querySelector(".ongoing .bar");


const testimonialList = document.querySelectorAll(".testimonials ul li");
const testimonial_pager = document.querySelectorAll(".testimonials .pager a");
const testimonial_upBtn = document.querySelector(".testimonials .up");
const testimonial_downBtn = document.querySelector(".testimonials .down");
let testimonialIdx = 0;

console.log(ongoing_percent);
window.addEventListener("scroll",()=>{
    if(window.scrollY - 300 > book_a_trip_OST - book_a_trip_height){
      if(book_a_trip.classList.contains("active") == false){
        book_a_trip.classList.add("active")
        satartNumberAnimation();
      }
    }
});
function satartNumberAnimation(){
    let start = 0;
    let end = Number(ongoing_bar.getAttribute("data-rate"));
    setInterval(() => {
        if(start < end){
            start++;
            ongoing_percent.innerText = start + "%";
            ongoing_bar.style.width = start + "%";
        }else{
            clearInterval(this);
        }
    }, 100);
}
    testimonial_pager.forEach((pager, index) => {
        pager.addEventListener("click", (e) => {
            e.preventDefault();
            changeTestimonial(index);
    });
    });

testimonial_downBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (testimonialIdx < testimonialList.length - 1) {
        testimonialIdx++;
    } else {
        testimonialIdx = 0;
    }
    changeTestimonial(testimonialIdx);
})

testimonial_upBtn.addEventListener("click",()=>{
    if(testimonialIdx > 0){
        testimonialIdx--;
    }else{
        testimonialIdx = testimonialList.length -1
    }
    changeTestimonial(testimonialIdx);
})

function changeTestimonial(idx){
    //모든페이저에서 acrive 클래스 제거
    testimonial_pager.forEach((item) => {
        item.classList.remove("active");
    });
    //클릭한 페이저에 active 클래스 추가
    testimonial_pager[idx].classList.add("active");

    testimonialList.forEach((item) => {
        item.classList.remove("active");
    });
    testimonialList[idx].classList.add("active");
    testimonialIdx = idx;
}

// 파트너 슬라이드
//const partnersTotalWidth = document.querySelector("body").offsetWidth;
const partnersTotalWidth = document.body.offsetWidth;
const partners = document.querySelector(".partners ul");
const partnerSlides=partners.querySelectorAll('li');
const partnerSlidesWidth = 190;
//파티너 각 슬라이드 너비 지정
for(let Slide of partnerSlides){
    Slide.style.width = partnersTotalWidth +'px';
}
//복사본 생성
/*
a.innerHTML = B // a요소에 b를 태그로 생성, 기존 내용을 제거 b내용 교체
let a = b.innerHTML // b안에 내용을 HTML 태그로 변수명 a에 할당

//문자열 특정 문자 교체
let x = a.replace(b,c) // a에서 b를 c로 교체 x에 할당
//   /<li/g 정규표현식 이라고함
*/
let slideHTML = partners.innerHTML;
console.log(slideHTML);
let clonedSlide = slideHTML.replace(/<li/g,'<li class="clone"');
console.log(clonedSlide);
partners.innerHTML = clonedSlide + slideHTML;

//리스트 전체가 배치되도록 부모너비 변경
let newpartenerList = partners.querySelectorAll('li');
partners.style.width = newpartenerList.length * partnerSlidesWidth + 'px';
//파트너 슬라이드 이동
let partnerLeft = 0;
let animation;
function movePartners(){
    // partnerLeft = partnerLeft -2;
    partnerLeft -= 2
    if(partnerLeft < -partnerSlidesWidth * newpartenerList.length/2){
        // -1921 < -1920
        partnerLeft = 0
    }
    partners.style.left = partnerLeft + 'px';
    //requestAnimationFrame(함수) 함수를 반복 실행 //
    //requestAnimationFrame(movePartners); // 함수 반복실행
    animation = requestAnimationFrame(movePartners); // movepartners 함수내에서 재실행
}
requestAnimationFrame(movePartners); // movePartners 함수의 내용을 애니메이션으로 변경 (부드럽게 이동시켜주는역활)

//requestAnimationFrame 멈추는 함수 
//cancleAnimationFrame(대상)
partners.addEventListener('mouseenter',()=>{
    cancelAnimationFrame(animation);
});

partners.addEventListener('mouseleave',()=>{
    requestAnimationFrame(movePartners);
});