function setup(){
    createCanvas(500,500);
    initTable();
}
function draw(){
    background("#00F6F0");
    showBricks();
}

  
let bricks=[];
function initTable() {
    let bricky=50;
    const marginLeft = 20;
    const marginRigth = 20;
    const bricksDistance = 10;
    const brickWidth = 50;
   
    for (let i = 0; i < 6; i++) {
        let brick = []; 
        for (let j = 0; j < 6; j++) {
            if(bricks.length<5){
            brick.push({
                color:color(random(255), random(255),random(255)),
                x: marginLeft + j * bricksDistance + j * brickWidth,
                y: bricky,
                width: brickWidth,
                heigth: 50,
                margin: 10,
                
                
            });
        }
        }
        bricky = bricky + 60;
        
        bricks.push(brick);
    }
    

    
}


function showBricks() {
    for (let i = 0; i < bricks.length; i++) {
        for (let j = 0; j < bricks.length; j++) {
            fill(bricks[i][j].color);
            rect(bricks[i][j].x, bricks[i][j].y, bricks[i][j].width, bricks[i][j].heigth);
            fill("white")
            text(Math.floor(random(int(100))),bricks[i][j].x+20,bricks[i][j].y+20)
        }
    }
}
