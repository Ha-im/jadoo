const book_a_trip = document.querySelector(".book_a_trip");
const book_a_trip_OST = book_a_trip.offsetTop;
const book_a_trip_height = book_a_trip.offsetHeight;

const ongoing_percent = document.querySelector(".ongoing .percent")
const ongoing_bar = document.querySelector(".ongoing .bar")

const ongoing_percent = document.querySelector(".ongoing .percent");
const ongoing_bar = document.querySelector(".ongoing .bar");
console.log(ongoing_percent);
window.addEventListener("scroll",()=>{
    if(window.scrollY - 300 > book_a_trip_OST - book_a_trip_height){
      if(book_a_trip.classList.contains("active") == false){
        book_a_trip.classList.add("active")
        satartNumberAnimation();
    }else{
        book_a_trip.classList.remove("active")
        stopNumberAnimation();
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