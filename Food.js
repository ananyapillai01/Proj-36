class Food {
    constructor(){
    this.foodStock=0;
    this.lastFed;
    this.image=loadImage('Images/Milk.png');
    // this.image = loadImage('Images/Bed Room.png');
    // this.image = loadImage('Images/Wash Room.png');
    // this.image = loadImage('Images/Garden.png')
    }

   updateFoodStock(foodStock){
    this.foodStock=foodStock;
   }

   getFedTime(lastFed){
     this.lastFed=lastFed;
   }

   deductFood(){
     if(this.foodStock>0){
      this.foodStock=this.foodStock-1;
     }
    }

    getFoodStock(){
      return this.foodStock;
    }

    bedroom(){
      this.image = loadImage('Images/Bed Room.png');
      background(BedRooom.png, 550, 500);
    }
    garden(){
      this.image = loadImage('Images/Garden.png');
      background(Garden.png, 550, 500);
    }
    washroom(){
      this.image = loadImage('Images/Wash Room.png');
      background(WashRoom.png, 550, 500);
    }

    display(){
      var x=80,y=100;
      
      imageMode(CENTER);
      image(this.image,720,220,70,70);
      
      if(this.foodStock!=0){
        for(var i=0;i<this.foodStock;i++){
          if(i%10==0){
            x=80;
            y=y+50;
          }
          image(this.image,x,y,50,50);
          x=x+30;
        }
      }
    }
}