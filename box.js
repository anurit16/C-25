//Blueprint
class Box extends Base{

    //constructor function will be automatically when any object is created using this class.
    //set all the class properties - here create physics body in constructor.
    // this refers to the object that is being created.
    constructor(x,y,w,h){
        super(x,y,w,h);
        this.img=loadImage("sprites/wood1.png");
    }

    

}