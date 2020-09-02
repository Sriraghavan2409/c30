class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    //visibility is between 0 to 255
    //0=1 fully off byte(8 bits)=0000 0000=invisible
    //1=1 fully onn byte(8 bits)=1111 1111=Fully visible
    this.Visibility = 255;
  }
  display(){
        console.log(this.body.speed);
        //Make the pig visible if its speed is less than 3 or make it graddualy dissappear
        if(this.body.speed<3){
        super.display();
        }
       else{
      World.remove(world,this.body);
      push()
      //decrease the visibility by 5
      this.Visibility = this.Visibility-5;
      //Creates vanishing effect by adding a transperant layer to the image
      tint(255,this.Visibility);
      image(this.image,this.body.position.x,this.body.position.y,50,50);
      pop()
       }
  }

};