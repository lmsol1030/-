

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




   fill(196,158,0);
   ellipse(250 + Math.cos(timing*2*PI)*200,           
        250 + Math.sin(timing*2*PI)*200,       
        50,                                     
        50);                                  


   fill(196,158,0);
   ellipse(250 + Math.cos(timing2*2*PI)*100,           
        250 + Math.sin(timing2*2*PI)*200,       
        50,                                     
        50);    


26  //지구라인 
27  noFill(); 
28 
29  ellipse(500,500,600,600) 
30 
 
31  //달타원라인1 
32  noFill(); 
33  stroke(255); 
34  ellipse(500 + Math.cos(timing1*2*PI)*300, 
35         500 + Math.sin(timing1*2*PI)*300, 
36         100, 
37         300); 
38 
 
39  //달타원라인2 
40  noFill(); 
41  stroke(255); 
42  ellipse(500 + Math.cos(timing1*2*PI)*300, 
43         500 + Math.sin(timing1*2*PI)*300, 
44         300, 
45         150); 
46 
 
47  //달라인 
48  noFill(); 
49  stroke(255); 
50  ellipse(500 + Math.cos(timing1*2*PI)*300, 
51         500 + Math.sin(timing1*2*PI)*300, 
52         200, 
53         200); 
54 


  //태양 
  image(solar,250,250,500,500);
}