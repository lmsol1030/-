

 var solar, bg, earth, moon; 
 function setup() { 
     createCanvas(1000, 1000); 
   solar = loadImage("sun.png"); 
   bg = loadImage("bg.png"); 
   earth = loadImage("earth.png"); 
   moon = loadImage("planet.png"); 
 } 


  function draw() {


  background(bg); 


   var duration = 5000;
   var timing = (new Date()%duration)/duration;
   var duration2 = 6000;
   var timing2 = (new Date()%duration2)/duration2;
   var duration3 = 4000; 
   var timing3 = (new Date()%duration3)/duration3; 
   var duration4 = 3000; 
   var timing4 = (new Date()%duration4)/duration4; 
   

 


  //태양 
 image(solar,250,250,500,500);


 


}