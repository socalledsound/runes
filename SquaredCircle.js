class SquaredCircle{
    constructor(x, y, w, h, snd){
        this.padding = w/10
        this.x = x
        this.y = y
        this.w = w/4
        this.h = h/4
        this.r = w/2
        this.theta1 = 0
        this.theta2 = 0
        this.active = false
        this.activeTriangleCol = [255, 0,0, 180]
        this.activeTriangleCol = [220,0,220,200, 180]
        this.activeSquareCol = [120,0,180,200]
        this.activeTriangleCol = [210,0,220,200]
        this.activeTriangleCol= [220,0,120, 110]
        this.dormantCol = [22, 220, 220, 120]
        this.dormantCol = [120, 80, 170, 120]
        this.snd = snd
    }
    checkMouse(mx, my){
      if(mx > this.x - this.r &&
          mx < this.x + this.r &&
          my > this.y - this.r && 
          my < this.y + this.r){
            this.active = true
            if(!this.snd.isPlaying())
            this.snd.play()
        }else{
            this.active = false
            this.snd.stop()
        }
  }

    outerCircle = (x, y, r) => {
        noFill()
        stroke(200)
        ellipse(x, y, r * 2)
    }

    pointOnCircle = (centerX, centerY, r, theta) => {
        return ({
            x: centerX + cos(theta) * r, 
            y: centerY + sin(theta) * r,
        })
    }

    trianglePoints = (x, y, r, offset) => {
        return Array.from({length: 3}, (el, idx) => {
          return this.pointOnCircle(x, y, r, 120 * idx + offset)
        })
      }
      squarePoints = (x, y, r, offset) => {
        return Array.from({length: 4}, (el, idx) => {
          return this.pointOnCircle(x, y, r, 90 * idx + offset)
        })
      }

      innerTriangle = (x, y, r, offset) => {
        const points = this.trianglePoints(x, y, r, offset) 
        this.active ? fill(this.activeTriangleCol) : fill(this.dormantCol)
        strokeWeight(1)
        push()
        translate(x, y)
        rotate(this.theta1)
        translate((x) * -1, (y) * -1)
        
        triangle(points[0].x, points[0].y, points[1].x, points[1].y, points[2].x, points[2].y)
        pop()
        // points.forEach( pt => {
      //   fill(220, 0, 220)
      //   ellipse(pt.x, pt.y, 15)
      // })
      
    }
    innerSquare = (x, y, r) => {
        const points = this.squarePoints(x, y, r/2, 45)
        //console.log(points[1])
        this.active ? fill(this.activeSquareCol) : fill(this.dormantCol)
      push()
        translate(x,y)
        rotate(this.theta2 * -1)
        translate(-x, -y)
        beginShape()
        points.forEach( pt => {
          vertex(pt.x, pt.y)
        })
        endShape(CLOSE)
      pop()
  }
    
    innerCircle = (x, y, r) => {
            stroke(200)
            strokeWeight(2)
            ellipse(x, y, r)
        }
    update(){
      if(this.active){
        this.theta1 += 0.1
        this.theta2 += 0.2
      }

    }

    render(){


        strokeWeight(3)
        this.outerCircle(this.x, this.y, this.r)
        this.innerTriangle(this.x, this.y, this.r, -90)
        this.innerCircle(this.x, this.y, this.r * 0.98)
        this.innerSquare(this.x, this.y, this.r * 0.98)

        
    }
}

// https://en.wikipedia.org/wiki/List_of_occult_symbols#/media/File:Squaredcircle.svg
// https://en.wikipedia.org/wiki/Squaring_the_circle

// const padding = 50
// let theta = 0
// let theta2 = 0
// function setup() {
//   createCanvas(400, 400);
//   angleMode(DEGREES)
// }

// function draw() {
//   background(0);
//   translate(width/2, height/2)
//   rotate(theta)
//   translate(-width/2, -height/2)
//   SquaredCircle(width/2, height/2, width/2 - padding, height/2 - padding)

//   theta+=0.1
//   theta2+=0.2
// }


// //https://en.wikipedia.org/wiki/List_of_occult_symbols#/media/File:Squaredcircle.svg
// // squared circle / philosopher's stone

// const SquaredCircle = (x, y, w, h) => {
//     const r = w
//     strokeWeight(3)
//     outerCircle(x, y, r)
//     innerTriangle(x, y, r, -90)
//     innerCircle(x, y, r * 0.98)
//     innerSquare(x, y, r * 0.98)
   

// }

// const outerCircle = (x, y, r) => {
//     noFill()
//     stroke(200)
//     ellipse(x, y, r * 2)
// }

// const pointOnCircle = (centerX, centerY, r, theta) => {
//     return ({
//         x: centerX + cos(theta) * r, 
//         y: centerY + sin(theta) * r,
//     })
// }

// const trianglePoints = (x, y, r, offset) => {
//   return Array.from({length: 3}, (el, idx) => {
//     return pointOnCircle(x, y, r, 120 * idx + offset)
//   })
// }

// const squarePoints = (x, y, r, offset) => {
//   return Array.from({length: 4}, (el, idx) => {
//     return pointOnCircle(x, y, r, 90 * idx + offset)
//   })
// }


// const innerTriangle = (x, y, r, offset) => {
//     const points = trianglePoints(x, y, r, offset) 
//     fill('red')
//     strokeWeight(1)
//     triangle(points[0].x, points[0].y, points[1].x, points[1].y, points[2].x, points[2].y)
//   // points.forEach( pt => {
//   //   fill(220, 0, 220)
//   //   ellipse(pt.x, pt.y, 15)
//   // })
  
// }

// const innerSquare = (x, y, r) => {
//     const points = squarePoints(x, y, r/2, 45)
//     //console.log(points[1])
//     fill(120,0,0,200)
//     //push()
//     translate(x,y)
//     rotate(theta2 * -1)
//     translate(-x, -y)
//     beginShape()
//     points.forEach( pt => {
//       vertex(pt.x, pt.y)
//     })
//     endShape(CLOSE)
//     }
//     //pop()

// const innerCircle = (x, y, r) => {
//     stroke(200)
//     strokeWeight(2)
//     ellipse(x, y, r)
// }

// // a is the distance between points of triangle
// // function square(a)
// // {
 
// //     // the side cannot be negative
// //     if (a < 0)
// //         return -1;
 
// //     // side of the square
// //     var x = 0.464 * a;
// //     return x;
// // }
