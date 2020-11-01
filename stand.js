class Stand {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.stand = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.stand);
    }
    display(){
      var pos =this.stand.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
