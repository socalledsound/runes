const monasSize = 300 
const squaredCircleSize = 275
const chaosSize = 150
const icelandicRuneSize = 100
const basicStrokeCol = 160
let symbols = []
let snds = []
let count = 0
let loaded = false


function preload(){
    snds[0] = loadSound('sound/0.mp3')
    snds[1] = loadSound('sound/1.mp3')
    snds[2] = loadSound('sound/2.mp3')
    snds[3] = loadSound('sound/3.mp3')
}

function setup(){
    createCanvas(800, 800)
    angleMode(DEGREES)

    symbols[0] = new Monas(225, 300, monasSize * 0.75, monasSize, snds[0])
    symbols[1] = new SquaredCircle(550, 275, squaredCircleSize, squaredCircleSize, snds[1])
    symbols[2] = new Chaos(225, 600, chaosSize, snds[2])
    symbols[3] = new IcelandicRune(550, 600, icelandicRuneSize, snds[3])


    loadingScreen()
}

function draw(){
    
    if(loaded){
        background(0)
        symbols.forEach(symbol => {
            symbol.checkMouse(mouseX, mouseY)
            symbol.update(count)
            symbol.render()
        })
        count+=0.5
    }
   

}

const loadingScreen = () => {
    background(0)
    fill(220)
    textSize(40)
    text('seduction through witchcraft', 100, 200)
    textSize(20)
    text('dedicated to louise huebner', 100, 300)
    text('click anywhere to start', 100, 600)
}

function mousePressed(){
    if(!loaded){
        loaded  = true
    }
}