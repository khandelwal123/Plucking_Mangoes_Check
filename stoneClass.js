class Stone{
    constructor(x, y){
        var options = {
            isStatic:false,
            restitution:0,
            friction:0,
            density:1
        }
        this.image = loadImage("stone.png");
        this.body = Bodies.circle(x, y, 70, options);
        this.radius = 70
        World.add(world, this.body);
    }

    display(){
        push()
            imageMode(CENTER);
            image(this.image, this.body.position.x, this.body.position.y, this.radius, this.radius);

            translate(this.body.position.x, this.body.position.y);
        pop()
    }
}