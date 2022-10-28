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

//For toggling the sections
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
// For loading all the photos from the folder 'img' intro the HTML automatically
//By now its not automatically introduced by this JQuery lines because the server gave 404 error while reaching the photos. In local server works properyl,
//so the problem appears when its deployed.
//my guess is that the JQuery petition comes from the nodemodules folder, and the path is not reaching the img folder properly
//another swiper should be created for The Village section in order to insert them automatically

//For the Photos section
var folder = "/img/";

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

//For the Homestay section
/*
var folder = "/img/homestay/";
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
*/
