/*document.getElementById("coverImg4").innerHTML = "New text!"  //testing*/

/**********Navigation Bar************/
function openNav() {
  document.getElementById("collapse").style.display = "none";
  document.getElementById("myUl").style.width = "100%";
  document.getElementById("close").style.display = "inline";
  document.getElementById("testH").innerHTML = "yeaaaah";
}

function closeNav(){
  document.getElementById("myUl").style.width = "0px";
  document.getElementById("collapse").style.display = "inline";
}
/*
window.addEventListener("resize", function(){
  if(window.innerWidth > 770){
    document.getElementById("close").style.display = "none";
    document.getElementById("collapse").style.display = "none";
  }else{
    document.getElementById("close").style.display = "inline";
    document.getElementById("collapse").style.display = "block";
  }
});*/

function changeClass() {
  document.getElementById('myUl').id = "active";
  document.getElementById("close").style.display = "inline";
}

function changeClassBack() {
  document.getElementById('active').id = "myUl";
  /*document.getElementById("close").style.display = "none";*/
}
/***********/

var coverimage = document.createElement("img");
coverimage.src = "images/pcover.jpg";
var coverimage2 = document.createElement("img");
coverimage2.src = "images/pcover02.jpg";
var coverimageG = document.createElement("img");
coverimageG.src = "images/cover04.jpg";
var coverimageV = document.createElement("img");
coverimageV.src = "images/cover02.jpg";

var cover1 = document.getElementById("coverImg1");
var cover2 = document.getElementById("coverImg2");
var cover3 = document.getElementById("coverImg3");
var cover4 = document.getElementById("coverImg4");
var cover5 = document.getElementById("coverImg5");
var cover6 = document.getElementById("coverImg6");
cover1.appendChild(coverimage.cloneNode(true));
cover2.appendChild(coverimageG.cloneNode(true));
cover3.appendChild(coverimageV.cloneNode(true));
cover4.appendChild(coverimage.cloneNode(true));
cover5.appendChild(coverimage.cloneNode(true));
cover6.appendChild(coverimage.cloneNode(true));

/****************contents*****************/
let project1 = `
<div class="modal-banner">
  <img src="images/pjbanner.jpg" alt="">
</div>
<br>
<p>A concept kiosk user interface design project. The goal is to
  create an user-friendly kiosk
  interface to display multimedia information for a exhibition event.
</p>
<p>Along with the multimedia information, I designed a print piece tri-fold
allowing users to review the info afterward.</p>
<br>
<div class="modal-banner">
  <img src="images/pjbanner.jpg" alt="">
</div>
<p>original demo vid goes here</p>
<br>
<p>The demostration is originally created in PowerPoint with the build-in anamation.
  The art assets are created and edited in Photoshop and Illustrator.</p>
<br>
<div class="modal-banner">
  <img src="images/pjbanner.jpg" alt="">
</div>
<p>tri-fold img goes here</p>
<br>
<p>The print out piece is created with Indesign and Photoshop.</p>
<p>The sharks icons are created with llustrator.</p>
`;
let project2 = `
<p>A collection of graphic related projects as a graphic designer at AFC
   Industries.</p>
<p>For the variety projects, I worked with marketing director, web developer,
   sales team or even engineers. To presenet the products in the artwork, I commun
   icated with 3D desingers to create specified scenes and angles to fullfill the
   goal. </p>
<br>
<!--<div class="mySlide">
  <div class="">
    <img id="mainImage"
        src="images/desk.jpg"/>
  </div>
  <br />

  <div id="divId" onmouseover="changeImageOnClick(event)">
      <img class="imgStyle" src="images/desk.jpg" />
      <img class="imgStyle" src="images/cc2.jpg" />
      <img class="imgStyle" src="images/it2.jpg" />
      <img class="imgStyle" src="images/tri.jpg" />
      <img class="imgStyle" src="images/tb-m.jpg" />
      <img class="imgStyle" src="images/ad.jpg" />
  </div>
</div>-->
<p style="font-size: 20px; font-weight: 600; padding-bottom: 8px;">Digital Projects</p>
<div>
  <img src="images/layout.jpg" alt="" style="width:100%; height:auto;">
  <p>▲ Websites and promotion pages layout design</p>
  <br>
  <img src="images/banner_v2.jpg" alt="" style="width:100%; height:auto;">
  <p>▲ Banners and promo ads</p>
  <br>
  <img src="images/em3.jpg" alt="" style="width:100%; height:auto;">
  <p>▲ Newsletter templates design</p>
  <br>
  <img src="images/icon_b2.jpg" alt="" style="width:100%; height:auto;">
  <img src="images/icon2_3C.jpg" alt="" style="width:100%; height:auto;">
  <p>▲ Flat art & iconographic design</p>
  <br>
<div>
<br>
<p style="font-size: 20px; font-weight: 600; padding-bottom: 8px;">Print Design</p>
<div>
  <img src="images/desk.jpg" alt="" style="width:100%; height:auto;">
  <img src="images/cc2.jpg" alt="" style="width:100%; height:auto;">
  <img src="images/it2.jpg" alt="" style="width:100%; height:auto;">
  <p>▲ Product catalogs & brochures design</p>
  <br>
  <img src="images/tri.jpg" alt="" style="width:100%; height:auto;">
  <p>▲ Tri-fold deign</p>
  <br>
  <img src="images/sellsheet.jpg" alt="" style="width:100%; height:auto;">
  <p>▲ Product sheets of each products using as marketing materials </p>
  <br>
  <img src="images/ad.jpg" alt="" style="width:100%; height:auto;">
  <p>▲ Magazine advertisments</p>
</div>
<br>
<p style="font-size: 20px; font-weight: 600; padding-bottom: 8px;">Others</p>
<div>
<img src="images/bg.jpg" alt="" style="width:100%; height:auto;">
<p>▲ Trade show booth back drop design</p>
<br>
<img src="images/window.jpg" alt="" style="width:100%; height:auto;">
<p>▲ Entrance door vinyl design</p>
<br>
<img src="images/truck.jpg" alt="" style="width:100%; height:auto;">
<p>▲ Vehicle wrap design</p>
</div>
`;
let project3 = `
<p>A collection of video editing and animation projects. </p>
<br>
<div class="pop-c">
   <div class="pop-c-img">
     <div class="iframe-c">
     <iframe class="iframe-s" src="https://www.youtube.com/embed/9gjVa1dXoeI?rel=0"
     title="YouTube video player" frameborder="0" allow="accelerometer;
     autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
     </div>
   </div>
   <div class="pop-c-text">
     <h4>AFC Industries - Product showcase</h4>
     <p>I was in charged of the product showcase videos that would be presented in
     the trade shows. After the product line was deceided, I worked closely with
     the 3D designers to prepare the product footages. I use After Effects for the
     2D animations, transitions, texts and the final editing.</p>
   </div>
 </div>
 <br>
 <hr>
 <br>
 <div class="pop-c">
   <div class="pop-c-img">
   <div class="iframe-c">
   <iframe class="iframe-s" src="https://www.youtube.com/embed/_uKFcyJ2uAc?rel=0"
   title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
   gyroscope; picture-in-picture" allowfullscreen></iframe>
   </div>
   </div>
   <div class="pop-c-text">
     <h4>After Hour - Bathroom</h4>
     <p>A short video inspried by _____ and producted by After Hour. I am one of
     members of After Hour, a video creative team. In this project, I was the art
     director, cinemagrapher, video editor and animator. This short video is
     filmed with nikon DSLR.</p>
   </div>
 </div>
 <br>
 <hr>
 <br>
 <div class="pop-c">
    <div class="pop-c-img">
      <div class="iframe-c">
      <iframe class="iframe-s" src="https://www.youtube-nocookie.com/embed/W8Qm3HPrtNE?rel=0"
      title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
      gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
    <div class="pop-c-text">
    <h4>Rooster Neon Light</h4>
    <p>Short 3D animation video. A chinese character design in Illustrator and
 modeled in 3D software. Editing in After Effects.</p>
    </div>
  </div>
  <br>
  <hr>
  <br>
  <div class="pop-c">
    <div class="pop-c-img">
      <div class="iframe-c">
      <iframe class="iframe-s" src="https://www.youtube.com/embed/4DzTqrU1fLA?rel=0"
      title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
      gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
    <div class="pop-c-text">
    <h4>Mag On</h4>
    <p>Product showcase video. Product model was modeled and animated in MAYA.
    Video edited in After Effects. </p>
    </div>
  </div>
`;
let project4 = `
 <p>Application interface layout design projects.</p>
 <br>
 <div class="pop-c">
    <div class="pop-c-img">
      <img src="images/shark.jpg" alt="" style="width:100%; height:auto;">
    </div>
    <div class="pop-c-text">
      <h4>Kiosk interface design</h4>
      <p>A concept exhibition kiosk user interface design project. The goal is to
        create an user-friendly interface to display multimedia information
        for a family friendly exhibition event.<p/>
      <br>
      <p>Layout was created in PowerPoint for demostration. Icons and art
      assets were created in Illustrator and photoshop.</p>
    </div>
  </div>
  <br>
  <hr>
  <br>
  <div class="pop-c">
     <div class="pop-c-img">
       <img src="images/park2.jpg" alt="" style="width:100%; height:auto;">
     </div>
     <div class="pop-c-text">
       <h4>Park App</h4>
       <p>The goal is to create an app for people looking for park that match
       their needs. The searching results can be filtered by disctance and
       falicities. The prototype is created in Figma.<p/>
     </div>
   </div>
   <br>
   <hr>
   <br>
   <div class="pop-c">
      <div class="pop-c-img">
        <img src="images/750x500.jpg" alt="" style="width:100%; height:auto;">
      </div>
      <div class="pop-c-text">
        <h4>Weather App</h4>
        <p>Redesign an previous school project. A minimalist style weather app.
        Prototype is designed in Figma.<p/>
      </div>
    </div>
`;
let project5 = `
 <div class="modal-banner">
   <img src="images/pjbanner.jpg" alt="">
 </div>
 <br>
 <p>test test project5</p>
`;
let project6 = `
 <div class="modal-banner">
   <img src="images/pjbanner.jpg" alt="">
 </div>
 <br>
 <p>test test project6</p>
`;



/**********open popup*********/
let element = document.getElementById("pContent");
let newContent;
let mtitle = document.getElementById("modalTitle");
let mdes = document.getElementById("modalDes");

function popupOpen(x){
  /*document.getElementById("testH").innerHTML = "click";*/
  document.getElementById("myModal").style.display = "block";
  document.getElementById("pContent").scrollTop = 0;
  switch (x) {
    case 1 : console.log("1");
             mtitle.innerHTML = "Kiosk UI & Tri-fold Brochure";
             mdes.innerHTML = "Photoshop / Illustrator / InDesign";
             newContent = project1;
             break;

    case 2 : console.log("2");
             mtitle.innerHTML = "Graphic Design Projects";
             mdes.innerHTML = "Photoshop / Illustrator / InDesign";
             newContent = project2;
             break;

    case 3 : console.log("3");
             mtitle.innerHTML = "Video/Animation Projects";
             mdes.innerHTML = "After Effects / Premiere";
             newContent = project3;
             break;

    case 4 : console.log("4");
             mtitle.innerHTML = "App Interface Design";
             mdes.innerHTML = "Illustrator / Figma";
             newContent = project4;
             break;

    case 5 : console.log("5");
             mtitle.innerHTML = "Park App";
             mdes.innerHTML = "dessss";
             newContent = project5;
             break;

    case 6 : console.log("6");
             mtitle.innerHTML = "3D Rendering Projects";
             mdes.innerHTML = "dessss";
             newContent = project6;
             break;

    default:

  }
  element.innerHTML = newContent;
}

function popupClose(){
  document.getElementById("myModal").style.display = "none";
}


/***********contact form***********/

var n = false;
var e = false;
var m = false;


function checkS(){
  var bt = document.getElementById('submit');
  if( n == true && e == true && m == true){
    bt.disabled = false;
  }else {
    bt.disabled = true;
  }
}
/*
function manage(txt) {
  var bt = document.getElementById('submit');
  if (txt.value != '') {
    bt.disabled = false;
  }else {
    bt.disabled = true;
  }
}*/

function nameText(txt){
  if(txt.value != ''){
    n = true;
  }else{
    n = false;
  }
  checkS();
}

function emailText(txt){
  if(txt.value != ''){
    e = true;
  }else{
    e = false;
  }
  checkS();
}

function messText(txt){
  if(txt.value != ''){
    m = true;
  }else {
    m = false;
  }
  checkS();
}

/**********contact form end********************/


/*******************slideshow****************************/
function changeImageOnClick(event) {
  // debugger;
  var targetElement = event.srcElement;
  // debugger;
  if (targetElement.tagName === "IMG") {
    mainImage.src = targetElement.getAttribute("src");
    /*targetElement.style.border = "1px black solid";*/
  }

  ;
}
