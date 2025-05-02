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


