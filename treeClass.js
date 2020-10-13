class Tree{
    constructor(x, y){
        var options = {
            isStatic : true,
            density : 1.2
        }
    this.body = Bodies.rectangle(x, y, 0, 0, options);
    this.width = 0
    this.height = 0
    World.add(world, this.body);
    this.image = loadImage("tree.png");  
    }

    display(){
        push()
            imageMode(CENTER)
            image(this.image, this.body.position.x, this.body.position.y, this.width+530, this.height+595);
        pop()
    }
}