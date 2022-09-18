class Chaos {
    constructor(x, y, size, snd){
        this.x = x
        this.y = y
        this.circleSize = size
        this.maxArrowDistance = size
        this.numArrows = 10
        this.inc = 0
        this.triangleSize = this.circleSize/4
        this.active = false
        this.activeCol = [220, 0, 220, 120]
        this.dormantCol = [22, 220, 220, 120]
        this.activeCol = [220,0,120, 110]
        this.dormantCol = [110, 80, 110, 120]
        this.snd = snd
    }

    checkMouse(mx, my){
        if(mx > this.x - this.circleSize/2 &&
            mx < this.x + this.circleSize/2 &&
            my > this.y - this.circleSize/2 && 
            my < this.y + this.circleSize/2){
                this.active = true
                if(!this.snd.isPlaying())
                this.snd.play()
            }else{
                this.active = false
                this.snd.pause()
            }
    }

    pointOnCircle = (r, angle) => {
        //console.log(r, angle)
        return ({
          x: this.x + cos(angle) * r,
          y: this.y + sin(angle) * r
        })
    }

    drawTriangle = ({x, y}, angle) => {
        push()
            translate(x, y)
            rotate(angle)
            translate(-x, -y)
            this.active ? fill(this.activeCol) : fill(this.dormantCol)
            triangle(x - this.triangleSize, y, x + this.triangleSize, y, x, y - this.triangleSize)
        pop()
    }

    drawArrow = (idx) => {
        
        const biggerCircleSize = (this.circleSize + this.inc) % this.maxArrowDistance
        const arrowEnd = this.pointOnCircle(biggerCircleSize, idx * 360/this.numArrows)
        stroke(220)
        strokeWeight(6)
        //console.log(arrowEnd)
        line(this.x, this.y, arrowEnd.x, arrowEnd.y)
        strokeWeight(1)
        this.drawTriangle(arrowEnd, idx * 360/this.numArrows + 90)
        
      }

    update(){
        if(this.active){
            this.inc+= 0.5
        }
        
    }

    render(){
        fill(220)
        this.active ? stroke(this.activeCol) : stroke(this.dormantCol)
        strokeWeight(12)
        ellipse(this.x, this.y, this.circleSize)
        for(let i = 0; i < this.numArrows; i ++){

          this.drawArrow(i)
        }
    }
}


// let numArrows = 10
// let centerX, centerY, circleWidth
// let inc = 0
// let maxArrowDistance
// function setup() {
//   createCanvas(400, 400);
//   centerX = width/2
//   centerY = height/2
//   circleSize = width/3
//   maxArrowDistance = width/3
//   angleMode(DEGREES)
// }

// function draw() {
//   background(0);
//   fill(220)
//   stroke(220, 0, 220, 120)
//   strokeWeight(12)
//   ellipse(centerX, centerY, circleSize)
//   for(let i = 0; i < numArrows; i ++){
//     drawArrow(i)
//   }
//   inc+=0.5
// }

// const pointOnCircle = (r, angle) => {
//   return ({
//     x: centerX + cos(angle) * r,
//     y: centerY + sin(angle) * r
//   })
// }

// const drawTriangle = ({x, y}, angle) => {
//   const triangleSize = width/12
//   push()
//   translate(x, y)
//   rotate(angle)
//   translate(-x, -y)
//   fill(220, 0 , 220)
//   triangle(x - triangleSize, y, x + triangleSize, y, x, y - triangleSize)
//   pop()
// }


// const drawArrow = (idx) => {
//   const biggerCircleSize = (circleSize + inc) % maxArrowDistance
//   const arrowEnd = pointOnCircle(biggerCircleSize, idx * 360/numArrows)
//   stroke(220)
//   strokeWeight(6)
//   line(centerX, centerY, arrowEnd.x, arrowEnd.y)
//   strokeWeight(1)
//   drawTriangle(arrowEnd, idx * 360/numArrows + 90)
  
// }