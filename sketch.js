 var s = 1
 var level=1;
var shapelevel;
var shape
var score=0
var next
var game= 0
var wrong
 var correct
 var sscore=1
 var lastba
 var l
 var t
 var display
 function preload() {
      //triangle

      //square
       
     //circle
//c1=addImage("clock.png")
s=loadSound("scor.wav")
l=loadSound("las.wav")
lastba=loadImage("l.jpg")
c1=loadImage("clock1.png")
c4=loadImage("globe.png")
c3=loadImage("Ccake.png")
c2=loadImage("yoyo.png")
s1=loadImage("dice1.png")
s2=loadImage("gift.png")
s3=loadImage("Sqcake.png")
t1=loadImage("hat.png")
t2=loadImage("tree.png")
t3=loadImage("pizza.png")
 }

 function setup()

 {
   createCanvas(displayWidth, displayHeight);
  //shape=createSprite(550,100)

  // shape.addImage(tri)
  //shape.scale=0.5;
    a=createSprite((displayWidth/5.5),displayHeight/2)
   a1=createSprite((displayWidth/2),displayHeight/2)
   a2=createSprite((displayWidth/1.3),(displayHeight/2))
    
   a3=createSprite(displayWidth/5.5,displayHeight/2+300)
   a4=createSprite(displayWidth/2,displayHeight/2+300)
   a5=createSprite(displayWidth/1.3,displayHeight/2+300)
    
   r=new triangle()
   c=new square()
   d=new circle();
   next=createSprite(width/1.1,height/1.1,200,70)
   next.shapeColor="green";next.visible=false
   wrong=createGroup()
   correct=createGroup()
   t=createSprite(width/2,height/2,width,height)
   t.visible=false
   //t.addImage()
 }

 function draw() {
   background(0);
   textSize(25)
   fill(255)
   text("Select the image that looks like ", displayWidth/2-300,displayHeight/4)
   text("Score: "+score,width/20,height/20)
   text("Level "+level,width/2,height/20)
   let display=touches.length+'touches'
   //console.log(mouseX+"Y"+  mouseY)
if(m(a2))
{}
  if( m(a1))
   {
     
     
   }
  
   drawSprites()
 if(score===9){
   background(lastba)
  
 } 
   if(game===1&&sscore%4===0&&score<8){
          next.visible=true
     fill(255)
   textSize(40)
     text("next",width/1.1,height/1.1)
    
   }
   if(m(next)&&game===1&&level<3)
     {
       game=0
       shapelevel=Math.round(random(1,3))
       next.visible=false
       game=0
       sscore=1
       level+=1
       a.x=(displayWidth/5.5)
       a.y=displayHeight/2 
       a1.y=displayHeight/2
       a1.x=displayWidth/2
       a2.x=(displayWidth/1.3)
       a2.y=(displayHeight/2)
       a3.x=(displayWidth/5.5)
       a3.y=displayHeight/2+300
       a4.x=displayWidth/2
       a4.y=displayHeight/2+300
       a5.x=displayWidth/1.3
       a5.y=displayHeight/2+300
     }
   
     for (var i = 0; i < wrong.length; i++) {
      if (mousePressedOver(wrong.get(i)) ) {
        textSize(20)
        fill("red")
        text("sorry! try again",250,150)
        s.stop()
      }} 
      for (var i = 0; i < correct.length; i++) {
        if (mousePressedOver(correct.get(i)) ) {
          game=1
          score+=1
          sscore+=1
         correct.get(i).x=width*2
         s.play()
        }} 
   games()
  if(score<9)
 {  r.start() 
   c.start()
   d.start()}
 }



function m(sh)
{
  if(mousePressedOver(sh)){
    return true
  }
  else{
    return false
  }
}
function games(){
 var levelw=level
  switch(level)
 {
   case 1: correct.add(a1)
           correct.add(a3)
           correct.add(a4)
           a1.addImage(t1)
           a3.addImage(t2)
           a4.addImage(t3)
           a1.scale=0.3
           a3.scale=0.3
           a4.scale=0.3
           break;
  case 2: correct.remove(a1)
          correct.add(a2)
          correct.add(a5)
          correct.remove(a3)
          a4.addImage(s3)
          a4.scale=0.5
      break
 case 3:correct.add(a)
        correct.remove(a2)
        a5.addImage(c2)
        a5.scale=0.5
        a4.addImage(c3)
   break
 }
 switch(levelw){
 case 1:wrong.add(a)
        wrong.add(a2);
        a2.addImage(s1)
         a5.addImage(s2)
          a2.scale=0.3
          a5.scale=0.3
        wrong.add(a5)
        a.addImage(c1)
        a.scale=0.3
        
        break
 case 2: wrong.add(a1)
         wrong.remove(a2)
         wrong.remove(a5)
         wrong.add(a3)

         break
case 3:wrong.remove(a)
      wrong.add(a2)
    
  break
 }
}
if(score===9)
{
  l.play(); 
}

 /*
   a.x=100
   a.y=280  
   a1.y=450
   a1.x=100
   a2.x=300
    a2.y=280
   a3.x=300
   a3.y=450
   a4.x=500
   a4.y=280
   a5.x=500
   a5.y=450
   */