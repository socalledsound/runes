class Glyph {
    constructor(idx, ref, x, y, w, h, symbol){
        this.idx = idx
        this.ref = ref
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.symbol = symbol
    }


    update(updateVal){
        this.symbol.update(updateVal)
    }

    render(){
        image(this.g, this.x, this.y, this.w, this.h)
    }
}