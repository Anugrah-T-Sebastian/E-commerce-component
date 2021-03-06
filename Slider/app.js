const slides =  document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

console.log(slides);
console.log(nextBtn);
console.log(prevBtn);

slides.forEach(function(slide, index) {
    slide.style.left = `${index * 100}%`;
});

let counter = 0;
nextBtn.addEventListener('click', function() {
    console.log("next clicked")
    counter++;
    carousel();
})
prevBtn.addEventListener('click', function() {
    console.log("prev clicked");
    counter--;
    carousel();
})

function carousel(){
    
    //working with buttons
    if(counter < slides.length -1) {
        nextBtn.style.display = "block";
    }
    else {
        nextBtn.style.display = "none";
    }

    if(counter > 0) {
        prevBtn.style.display = "block";
    }
    else {
        prevBtn.style.display = "none";
    }

    slides.forEach(function(slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}

prevBtn.style.display = "none";     //Hide prevBtn by default