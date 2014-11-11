

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
   


  //지구라인 
  noFill(); 
 
  ellipse(500,500,600,600) 
 
 
  //달타원라인1 
  noFill(); 
  stroke(255); 
  ellipse(500 + Math.cos(timing1*2*PI)*300, 
         500 + Math.sin(timing1*2*PI)*300, 
         100, 
         300); 
 
 
  //달타원라인2 
  noFill(); 
  stroke(255); 
 ellipse(500 + Math.cos(timing1*2*PI)*300, 
         500 + Math.sin(timing1*2*PI)*300, 
         300, 
         150); 
 
 
  //달라인 
  noFill(); 
  stroke(255); 
  ellipse(500 + Math.cos(timing1*2*PI)*300, 
         500 + Math.sin(timing1*2*PI)*300, 
         200, 
         200); 



  //태양 
  image(solar,250,250,500,500);



}