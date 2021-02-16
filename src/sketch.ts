// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    Alpha: 17,
    N: 1000,
    Random_Seed: 0,
    Download_Image: () => save(),
}
gui.add(params, "Alpha", 0, 255, 1)
gui.add(params, "N", 0, 3000, 1)
gui.add(params, "Random_Seed", 0, 100, 1)
gui.add(params, "Download_Image")

// -------------------
//       Drawing
// -------------------

function draw() {
    randomSeed(params.Random_Seed)
    rectMode(CENTER)
    noStroke()
    background(254, 255, 250)
    for (let i = 0; i < params.N; i++) {
        fill(random([
            color(252, 52, 38,  params.Alpha), 
            color(96, 207, 17,  params.Alpha),
            color(89, 142, 255, params.Alpha)
        ]))
        push()
            translate(random(width), random(height))
            if (random() < 0.7)
                rotate(TAU/4)
            rect(0, 0, random(80, 100), random(25, 40), 30)
        pop()
    }
}

// -------------------
//    Initialization
// -------------------

function setup() {
    p6_CreateCanvas()
}

function windowResized() {
    p6_ResizeCanvas()
}