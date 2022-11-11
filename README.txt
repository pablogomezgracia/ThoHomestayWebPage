Hello volunteer!!! This is a READ ME for the next volunteer that may want to help with the webpage development. 
Here we can post what needs to be fixed, what can be improved and what we could add for future ideas. 
If you are not familiar with web developing we can post also instructions for things that can be added even with no knowledge about web development.

------> NEEDS TO BE FIXED:
	- Responsivnes needs to be fixed. The text size is not good for phones, neither the menu or general structure.
	- When you click on the navigation menu, the scroll doest really end where it should. There is some script in the js about that but not good for responsive.
	- The images are loaded one by one in the html. In the .js there is somo code about uploading directly from a folder automatically, it works on local but not in the server.

------> CAN BE IMPROVED:
	- Style can be imporoved. The UX, theme colors, size of boxes...the sections style are provisional and not finished, it needs to be improved.
	- Actually anything regarding UX.
	- Maybe the web page needs to be more focalized in the village and not the homestay. Discuss that with Trung.
	- The background of the sections (before clicking the arrow) could have some opacity. 
	- More and better pictures.

------> FUTURE IDEAS:
	- Adding a map.
	- Maybe a workaway link.
	- Video section.
	- More information about the village and Thai culture.

FOR HELPERS WITHOUT WEB DEVELOPMENT KNOWLEDGE:

If you want to add images to the photo section, or maybe change the information included in the web:
	- ADD IMAGES:
	First you need to add the images to the folder. If you want to add the pictures to the Photo section, paste them in the img
	folder (you will se some images numered in order, just add them there and rename them with the number it follows)
	If you want to add them in other section, go to the images section and paste them there. (You will see that the images have the
	section name they belong and a number, rename your pictures as follows)
	
	Then go to the index.html file (try to open with NotePad or other code editor), and find the section where you want to add the images
	(the Photo section, Village section, Homestay section... appears like <section class="Photo"> or <section class="theVillage">
	You will find some lines like this:
		 <div class='swiper-slide'><img class='galleryPhotos' src='/img/images/village_1.jpg'></div>
		 <div class='swiper-slide'><img class='galleryPhotos' src='/img/...
		 <div class='swiper-slide'><img class='galleryPhotos' src='/img/...
	Just copy one line and paste under one of those and put the path of the image. The path is in the src='', so
	If you are adding in the Photo section:
		- src='/img/XX.jpg'   XX is the number of the picture you want to add (the name you gave it)
	If you are adding to other section:
		- src='/img/images/homphoto_XX.jpg' , again just the name of the picture

If you want to add or change the info in the web, just look for the text in the index.html and change it.

