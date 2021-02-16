var gui = new dat.GUI();
var params = {
    Alpha: 17,
    N: 1000,
    Random_Seed: 0,
    Download_Image: function () { return save(); },
};
gui.add(params, "Alpha", 0, 255, 1);
gui.add(params, "N", 0, 3000, 1);
gui.add(params, "Random_Seed", 0, 100, 1);
gui.add(params, "Download_Image");
function draw() {
    randomSeed(params.Random_Seed);
    rectMode(CENTER);
    noStroke();
    background(254, 255, 250);
    for (var i = 0; i < params.N; i++) {
        fill(random([
            color(252, 52, 38, params.Alpha),
            color(96, 207, 17, params.Alpha),
            color(89, 142, 255, params.Alpha)
        ]));
        push();
        translate(random(width), random(height));
        if (random() < 0.7)
            rotate(TAU / 4);
        rect(0, 0, random(80, 100), random(25, 40), 30);
        pop();
    }
}
function setup() {
    p6_CreateCanvas();
}
function windowResized() {
    p6_ResizeCanvas();
}
var __ASPECT_RATIO = 1;
var __MARGIN_SIZE = 25;
function __desiredCanvasWidth() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return windowWidth - __MARGIN_SIZE * 2;
    }
    else {
        return __desiredCanvasHeight() * __ASPECT_RATIO;
    }
}
function __desiredCanvasHeight() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return __desiredCanvasWidth() / __ASPECT_RATIO;
    }
    else {
        return windowHeight - __MARGIN_SIZE * 2;
    }
}
var __canvas;
function __centerCanvas() {
    __canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
}
function p6_CreateCanvas() {
    __canvas = createCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
function p6_ResizeCanvas() {
    resizeCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
var p6_SaveImageSequence = function (durationInFrames, fileExtension) {
    if (frameCount <= durationInFrames) {
        noLoop();
        var filename_1 = nf(frameCount - 1, ceil(log(durationInFrames) / log(10)));
        var mimeType = (function () {
            switch (fileExtension) {
                case 'png':
                    return 'image/png';
                case 'jpeg':
                case 'jpg':
                    return 'image/jpeg';
            }
        })();
        __canvas.elt.toBlob(function (blob) {
            p5.prototype.downloadFile(blob, filename_1, fileExtension);
            setTimeout(function () { return loop(); }, 100);
        }, mimeType);
    }
};
//# sourceMappingURL=../src/src/build.js.map