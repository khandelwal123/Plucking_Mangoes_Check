class Mango{
    constructor(x, y){
        var options = {
            isStatic:true,
            restitution:0,
            friction:0,
            density:1
        }
        this.image = loadImage("mango.png");
        this.body = Bodies.circle(x, y, 0, options);
        this.radius = 0
        World.add(world, this.body);
        
    }

    display(){
        push()
            imageMode(CENTER);
            image(this.image, this.body.position.x, this.body.position.y, 70, 70);
        pop()
    }
}