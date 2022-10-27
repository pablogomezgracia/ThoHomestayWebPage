//Hello!!

//Function for navigating through the web with the navigation menu
//It would be great to adjust the scrolling so it goes to the actually start of the section

function scrollFunction(section){
    let e = document.getElementById(section);
    /*const y = e.getBoundingClientRect().top + window.pageYOffset - 75;   
    window.scrollTo({top: y, behavior: 'smooth'});
    */
    e.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'start'
      });
}
//For toggling the section
function toggleSections(section , sectionID) {
    var x = document.getElementById(section);
    var arrow = document.getElementById(sectionID.concat('Arrow'))
    arrow.classList.toggle("up")
    if (x.style.display === "none") {
      x.style.display = "flex";
      scrollFunction(section);
    } else {
      x.style.display = "none";      
    }
  }
// For loading all the photos from the folder 'photogallery' intro the HTML
var folder = "/photogallery/";

$.ajax({
    url : folder,  
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif)$/) ) { 
              $(".swiper-container-1 .swiper-wrapper").append("<div class='swiper-slide'><img class='galleryPhotos' src='"+ val +"'></div>" );
            } 
        });
    }
});
var folder = "/photogallery/homestay";
$.ajax({
    url : folder,  
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif)$/) ) { 
              $(".swiper-container-2 .swiper-wrapper").append("<div class='swiper-slide'><img class='galleryPhotos' src='"+ val +"'></div>" );
            } 
        });
    }
});

