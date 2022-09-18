class IcelandicRune {
    constructor(x, y, size, snd){
        this.x = x
        this.y = y
        // size = 150
        this.innerCircleSize = size/2
        this.largestCircleSize = size
        this.arcRadius = size * 1.1
        this.numLines = 8
        this.numLinesAcross = 3
        this.innerLineAcross = size/2.5
        this.lineSpacing = size/10
        this.lineAcrossLength = size/12
        this.theta = 0
        this.active = false
        this.activeCol = [220,0,210,220]
        this.activeCol = [220,0,120, 110]
        this.dormantCol = [150, 80, 170, 150]
        this.snd = snd

    }

    checkMouse(mx, my){
      if(mx > this.x - this.arcRadius &&
          mx < this.x + this.arcRadius &&
          my > this.y - this.arcRadius && 
          my < this.y + this.arcRadius){
            this.active = true
            if(!this.snd.isPlaying())
            this.snd.play()
        }else{
            this.active = false
            this.snd.stop()
        }
  }

    drawCenter(){
        this.active ? stroke(this.activeCol) : stroke(this.dormantCol)
        ellipse(this.x, this.y, this.innerCircleSize)
    }

    drawLineOut = (circleSize, angle) => {
        const pt = this.pointOnCircle(circleSize, angle)
        //console.log(pt)
        stroke(basicStrokeCol)
        line(this.x, this.y, pt.x, pt.y)
    }

    drawArc = (angle) => {
        const pt = this.pointOnCircle(this.arcRadius, angle)
        push()
        translate(pt.x, pt.y)
        rotate(angle + 90)
        translate(-pt.x, -pt.y)
        this.active ? stroke(this.activeCol) : stroke(this.dormantCol)
        arc(pt.x, pt.y, 50, 50, 0, 180)
        pop()
    }

    drawSpokes = () => {
        for(let i = 0; i < this.numLines; i ++){
        const angle = 360/this.numLines * i
        this.drawLineOut(this.largestCircleSize, angle)
        for(let i = 0; i < this.numLinesAcross; i++){
          const pt = this.pointOnCircle(this.innerLineAcross + i * this.lineSpacing, angle)
          push()
            translate(pt.x, pt.y)
            rotate(angle + 90)
            translate(pt.x * -1, pt.y * -1)
            stroke(basicStrokeCol)
            line(pt.x - this.lineAcrossLength, pt.y, pt.x, pt.y)
            line(pt.x, pt.y, pt.x + this.lineAcrossLength, pt.y)
          pop()
        }
        this.drawArc(angle)
      }
    }

    pointOnCircle = (r, angle) => {
        //console.log(r, angle)
        return ({
          x: this.x + cos(angle) * r,
          y: this.y + sin(angle) * r
        })
      }

    update(){
      if(this.active){
        this.theta += 0.1
      }
        
    }

    render(){
        noFill()
        stroke(220)
        strokeWeight(3)
        this.drawCenter()
        translate(this.x, this.y)
        rotate(this.theta)
        translate(-this.x, -this.y)
        this.drawSpokes()
    }
}

// // https://en.wikipedia.org/wiki/List_of_occult_symbols#/media/File:Aegishjalmr.svg

// let centerX, centerY
// const innerCircleSize = 50
// const largestCircleSize = 150
// const numLines = 8
// const numLinesAcross = 3
// const innerLineAcross = 80
// const lineSpacing = 15
// const lineAcrossLength = 20
// const arcRadius = 160
// let theta = 0
// function setup() {
//   createCanvas(400, 400);
//   angleMode(DEGREES)
//   centerX = width/2
//   centerY = height/2
// }

// function draw() {
//   background(0);
//   noFill()
//   stroke(220)
//   strokeWeight(3)
//   ellipse(centerX, centerY, innerCircleSize)
  
//   translate(centerX, centerY)
//   rotate(theta)
//   translate(-centerX, -centerY)
//   drawSpokes()
  
//   theta += 0.1
// }



// const drawSpokes = () => {
//     for(let i = 0; i < numLines; i ++){
//     const angle = 360/numLines * i
//     drawLineOut(largestCircleSize, angle)
//     for(let i = 0; i < numLinesAcross; i++){
//       const pt = pointOnCircle(innerLineAcross + i * lineSpacing, angle)
//       push()
//         translate(pt.x, pt.y)
//         rotate(angle + 90)
//         translate(pt.x * -1, pt.y * -1)
//         line(pt.x - lineAcrossLength, pt.y, pt.x, pt.y)
//         line(pt.x, pt.y, pt.x + lineAcrossLength, pt.y)
//       pop()
//     }
//     drawArc(angle)
//   }
// }

// const drawArc = (angle) => {
//     const pt = pointOnCircle(arcRadius, angle)
//     push()
//     translate(pt.x, pt.y)
//     rotate(angle + 90)
//     translate(-pt.x, -pt.y)
//     arc(pt.x, pt.y, 50, 50, 0, 180)
//     pop()
// }

// const pointOnCircle = (r, angle) => {
//   //console.log(r, angle)
//   return ({
//     x: centerX + cos(angle) * r,
//     y: centerY + sin(angle) * r
//   })
// }

// const drawLineOut = (largestCircleSize, angle) => {
//     const pt = pointOnCircle(largestCircleSize, angle)
//     //console.log(pt)
//     line(centerX, centerY, pt.x, pt.y)
// }