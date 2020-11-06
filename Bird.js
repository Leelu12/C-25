//extends creates a child class(bird is the child classof base class)
class Bird extends BaseClass{
  constructor(x,y){
    //super transfers every thing from parent to the child class
    super(x,y,50,50);
    //special property of the child class
    this.image = loadImage("sprites/bird.png");
  }
  display(){
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    //over riding function = having same name function for both parent and child class
    super.display();
  }
}