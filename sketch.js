const monasSize = 300 
const squaredCircleSize = 275
const chaosSize = 150
const icelandicRuneSize = 100
const basicStrokeCol = 160
let symbols = []

let snds1 = []
let snds2 = []
let count = 0
let loaded = false

let button1, button2

let snds, soundBank
let currentSoundBank = 0



function preload(){
    snds1[0] = loadSound('sound/2.mp3')
    snds1[1] = loadSound('sound/3.mp3')
    snds1[2] = loadSound('sound/0.mp3')
    snds1[3] = loadSound('sound/1.mp3')

    snds2[0] = loadSound('sound/pauline.mp3')
    snds2[1] = loadSound('sound/watts.mp3')
    snds2[2] = loadSound('sound/huebner.mp3')
    snds2[3] = loadSound('sound/damien-new.mp3')

    snds = [snds1, snds2]
    soundBank = snds[currentSoundBank]
}

function setup(){
    createCanvas(800, 800)
    angleMode(DEGREES)

    symbols[0] = new Monas(225, 300, monasSize * 0.75, monasSize, 0)
    symbols[1] = new SquaredCircle(550, 275, squaredCircleSize, squaredCircleSize, 1)
    symbols[2] = new Chaos(225, 600, chaosSize, 2)
    symbols[3] = new IcelandicRune(550, 600, icelandicRuneSize, 3)


    loadingScreen()
}

function draw(){
    
    if(loaded){
        background(0)
        drawButtons()
        soundBank = snds[currentSoundBank]
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
    text('midnight gospel', 100, 200)
    textSize(20)
    // text('dedicated to louise huebner', 100, 300)
    text('click anywhere to begin', 100, 500)
   
}

function mousePressed(idx){
    
    //button1.hide(); 
    //button2.hide()
    if(!loaded){
        currentSoundBank = 1 
        loaded  = true
    }
}

function drawButtons(){
    button1 = createButton('1')
    button1.position(300, 25)
    button1.class('magicButton')
    button1.mousePressed(() => {currentSoundBank = 0 })
    button2 = createButton('2')
    button2.position(350, 25)
    button2.class('magicButton')
    button2.mousePressed(() => {currentSoundBank = 1 })
}