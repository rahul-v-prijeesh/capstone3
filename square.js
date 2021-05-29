class square{
  constructor(){
    this.a=loadImage("sq.png")
   this.p=Math.round(random(1,6))
   
  }
   start() {
      
     if(level===2)
       {
         image(this.a,width/2+50,height/10,200,200)
         
       }
     
    }
}