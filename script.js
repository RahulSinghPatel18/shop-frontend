var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  // swiper clikking 2

  var swiper = new Swiper(".mySwiper2", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


//   navbar scrolling

document.addEventListener("wheel", function(dets){
  if(dets.offsetY > 400){
  if(dets.deltaY > 0){
      gsap.to(".nav",{
          top:"-165px",
        backgroundColor:"white",
        borderBottom : "1px solid dimgray",
          duration:0.4
           
      })
  }
}
  if(dets.deltaY < 0){
      gsap.to(".nav",{
          top:"0px",
          duration:0.4,
          backgroundColor:"transparent",
          borderBottom : "1px solid transparent",
          delay:0.6
      })
  }
})





// serachbar

const searchBar = document.getElementById('searchBar');

searchBar.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        performSearch(searchBar.value);
    }
});

function performSearch(query) {
    // Replace this alert with your actual search functionality
    alert('Searching for: ' + query);
}