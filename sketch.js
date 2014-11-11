

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


   var duration = 3000;
   var timing = (new Date()%duration)/duration;
   var duration2 = 5800;
   var timing2 = (new Date()%duration2)/duration2;


   fill(0);
    ellipse(250,250,250,250);


   fill(196,158,0);
   ellipse(250 + Math.cos(timing*2*PI)*200,           // x좌표
        250 + Math.sin(timing*2*PI)*200,       // y좌표
        50,                                     // width
        50);                                    // height


   fill(196,158,0);
   ellipse(250 + Math.cos(timing2*2*PI)*100,           // x좌표
        250 + Math.sin(timing2*2*PI)*200,       // y좌표
        50,                                     // width
        50);    


  //태양 
  image(solar,250,250,500,500);
}