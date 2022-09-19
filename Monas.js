class Monas {
    constructor(x, y, w, h, idx){
        this.idx = idx
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.innerEyeSize = 0
        this.maxInnerEyeSize = w/5
        this.rate = 1
        this.active = false
        this.activeCol = [220,0,220,200, 110]
        this.activeCol = [220,0,120, 110]
        this.dormantCol = [22, 220, 220, 120]
        this.dormantEyeCol = [0,0,0]
        this.dormantCol = [120, 80, 170, 120]
        this.basicStrokeCol = [160, 160, 160]
        this.activeStrokeCol = [200, 200, 200]
        // this.snd = snd
    }

    checkMouse(mx, my){
        if(mx > this.x - this.w/2 &&
            mx < this.x + this.w/2 &&
            my > this.y - this.h/2 && 
            my < this.y + this.h/2){
                this.active = true
            if(!soundBank[this.idx].isPlaying())
                this.playSound()
            }else{
                this.active = false
                this.pauseSound()
            }
    }
    pauseSound(){
        soundBank[this.idx].pause()
    }
    
    playSound(){
        soundBank[this.idx].play()
    }

    horns = (x, y, r) => {
        this.active ? stroke(this.activeCol) : stroke(this.dormantCol)
        arc(x, y, r, r, 0, 180, OPEN)
    }

    head = (x, y, r) => {
      
        ellipse(x, y, r)
        noStroke()
        this.active ? fill(this.activeStrokeCol) : fill(this.basicStrokeCol)
        ellipse(x, y, r/2.5)
      }
    
    eye = (x, y, r) => {
        this.active ? fill(this.activeCol) : fill(this.dormantEyeCol)
        ellipse(x, y, r)
      }
    
    body = (x, y, w, h) => {
        let sw = 6
        this.active ? stroke(this.activeStrokeCol) : stroke(this.basicStrokeCol)
        strokeWeight(sw)
        line(x, y + sw * 0.5, x, y + h * 1.5 - sw)
        line(x - w/6, y + h/2, x + w/6, y + h/2)
      }  
    
      feet = (x, y, w, h) => {
        // x y w h start stop
          noFill()
          push()
          translate(x, y)
          rotate(-180)
          translate(-x, -y)
          this.active ? stroke(this.activeCol) : stroke(this.dormantCol)
          arc(x - w/2, y - w/2, w, w, 0, 180, OPEN)
          arc(x + w/2, y - w/2, w, w, 0, 180, OPEN)
          pop()
         
    }

    update(inc){
        if(this.active){
            this.innerEyeSize = (inc/this.rate) % this.maxInnerEyeSize
        }
    }

    
    render(){
        noFill()
        stroke(basicStrokeCol)
        strokeWeight(6)
        this.horns(this.x, this.y - this.h/1.9, this.w/2.5)
        this.head(this.x, this.y - this.h/4, this.w/2, this.h/8)
        this.eye(this.x, this.y - this.h/4, this.innerEyeSize, [0,0,0])
        this.eye(this.x, this.y - this.h/4, this.innerEyeSize/3, this.dormantCol)
        this.body(this.x, this.y - this.h/16, this.w, this.h/4 )
        this.feet(this.x, this.y + this.h/6, this.w/3, this.h/8)
    }
}


// https://en.wikipedia.org/wiki/Monas_Hieroglyphica
// https://en.wikipedia.org/wiki/Monas_Hieroglyphica#/media/File:Dee_glyph_(fixed_width).svg



// let innerEyeSize = 0
// function setup() {
//   createCanvas(400, 400);
//   angleMode(DEGREES)
  
  
// }

// function draw() {
//   background(0);
  
//   monas(width/2, height/1.75, width * 0.75, height, innerEyeSize % 50)

//   innerEyeSize+=0.5
// }


// const monas = (x, y, w, h, innerEyeSize) => {
//   noFill()
//   stroke(200)
//   strokeWeight(6)
//   horns(x, y - h/1.9, w/2.5)
//   head(x, y - h/4, w/2, h/8)
//   eye(x, y - h/4, innerEyeSize)
//   eye2(x, y - h/4, innerEyeSize/3)
//   body(x, y - h/16, w, h/4 )
//   feet(x, y + h/6, w/3, h/8)
// }

// const horns = (x, y, r) => {
//     arc(x, y, r, r, 0, 180, OPEN)
// }

// const head = (x, y, r) => {
      
//   ellipse(x, y, r)
//   noStroke()
//   fill(200)
//   ellipse(x, y, r/2.5)
// }

// const eye = (x, y, r) => {
//   fill(0)
//   ellipse(x, y, r)
// }

// const eye2 = (x, y, r) => {
//     fill(220, 0, 220,200)
//   ellipse(x, y, r)
// }

// const body = (x, y, w, h) => {
//   let sw = 6
//   stroke(220)
//   strokeWeight(sw)
//   line(x, y + sw * 0.5, x, y + h * 1.5)
//   line(x - w/6, y + h/2, x + w/6, y + h/2)
// }

// const feet = (x, y, w, h) => {
//   // x y w h start stop
//     noFill()
//     push()
//     translate(x, y)
//     rotate(-180)
//     translate(-x, -y)
//     arc(x - w/2, y - w/2, w, w, 0, 180, OPEN)
//     arc(x + w/2, y - w/2, w, w, 0, 180, OPEN)
//     pop()
   
// }


