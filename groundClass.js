class Ground{
    constructor(x,y){
        var options = {
            isStatic : true
        }

        this.body = Bodies.rectangle(x, y, 1200, 20, options);
        this.width = 1200
        this.height = 20
        World.add(world, this.body);
    }

    display(){
        push()
            fill("rgb(143, 48, 0)");
            rect(this.body.position.x, this.body.position.y-50, 1200, 20);
        pop();
    }
}