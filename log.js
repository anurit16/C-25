class Log extends Base{
    constructor(x,y,h,a){
        super(x,y,20,h);
     Matter.Body.setAngle(this.body,a);
     this.img=loadImage("sprites/wood2.png");

         }



}

