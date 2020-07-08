let width = 800;
let height = 290;

let background = [
    [197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 709, 730, 730, 730, 730, 730, 730, 730, 730, 730, 730, 730, 730],
    [197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 729, 730, 730, 730, 730, 730, 730, 730, 730, 730, 730, 730, 730],
    [197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 730, 730, 712, 730, 730, 730, 730, 730, 730, 730, 730, 730, 730],
    [197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197],
    [197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197],
    [197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197],
    [197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197],
    [197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197],
    [197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197],
    [197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197],
    [197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197],
    [197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197],
]

let layer0 = [
    [197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 709, 730, 730, 730, 730, 730, 730, 730, 730, 730, 730, 730, 730],
    [197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 729, 730, 730, 730, 730, 730, 730, 730, 730, 730, 730, 730, 730],
    [197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 730, 730, 712, 730, 730, 730, 730, 1352, 1055, 1055, 1055, 1055, 1055],
    [197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 1372, 1075, 1075, 1076, 1075, 1076],
    [197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 1392, 1095, 1095, 1096, 1095, 109],
    [197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197],
    [197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197],
    [197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197],
    [197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197],
    [197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197],
    [197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197],
    [197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197],
]

let layer1 = [
    [300, 301, 197, 243, 244, 245, 246, 247, 248, 249, 17, 18, 19, 1126, 991, 710, 1880, 1881, 1882, 1883, 1884, 730, 796, 797, 798, 730, 730],
    [320, 321, 322, 263, 264, 265, 266, 267, 268, 269, 37, 38, 39, 1146, 1031, 1032, 1900, 1901, 1902, 730, 732, 730, 816, 817, 818, 730, 730],
    [340, 341, 342, 283, 284, 285, 286, 287, 288, 289, 57, 58, 59, 1166, 1051, 1052, 1053, 1054, 1831, 1350, 1351, 212, 213, 214, 215, 1055, 1055],
    [360, 361, 97, 303, 304, 305, 306, 307, 308, 309, 77, 78, 79, 605, 1071, 1072, 1073, 1074, 1851, 1370, 1371, 232, 233, 234, 235, 212, 213],
    [611, 611, 612, 323, 324, 325, 326, 327, 328, 329, 331, 332, 197, 645, 646, 1092, 1093, 1094, 1871, 1390, 1391, 252, 253, 254, 255, 232, 233],
    [707, 725, 632, 343, 344, 345, 346, 347, 348, 349, 351, 352, 197, 197, 606, 197, 197, 197, 197, 197, 197, 272, 273, 274, 275, 252, 253],
    [727, 706, 632, 363, 364, 365, 366, 367, 368, 369, 371, 372, 197, 197, 197, 197, 197, 665, 666, 197, 197, 292, 293, 294, 295, 272, 273],
    [670, 671, 632, 158, 197, 844, 845, 846, 197, 4, 197, 197, 197, 197, 197, 197, 197, 685, 686, 197, 197, 197, 197, 314, 315, 292, 293],
    [690, 691, 632, 159, 197, 864, 865, 866, 197, 24, 197, 212, 213, 214, 215, 197, 197, 197, 197, 197, 212, 213, 214, 215, 197, 197, 197],
    [708, 707, 632, 157, 311, 197, 197, 197, 197, 197, 197, 232, 233, 234, 235, 197, 197, 197, 197, 197, 232, 233, 234, 235, 212, 213, 214],
    [707, 748, 632, 212, 213, 214, 215, 212, 213, 214, 215, 252, 253, 254, 255, 610, 611, 612, 256, 257, 252, 253, 254, 255, 232, 233, 234],
    [707, 707, 632, 232, 233, 234, 235, 232, 233, 234, 235, 272, 273, 274, 275, 630, 747, 632, 276, 277, 272, 273, 274, 275, 252, 253, 254]
]

let grid = [
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1],
]


let bSize = width / (grid[0].length);
let bSizeH = height / grid.length;

let sketch = function (p) {
    let img;

    let render = function (grid) {
        for(let i = 0; i < grid.length; i++) {
            for(let j = 0; j < grid[i].length; j++) {
                let val = grid[i][j];
                drawTile(val, i, j);
                p.stroke(50);
                // p.noFill();
                // p.rect(j * (bSize-1), i * (bSizeH-1), bSize, bSizeH);
            }
        }
    }

    let drawTile = function (val, i, j) {
        let size = 16;
        let col = img.width / size;
    
        p.image(
            img,
            (bSize - 1) * j,
            (bSizeH - 1) * i,
            bSize,
            bSizeH,
            size * (val % col),
            size * (Math.floor(val / col)) + 0.5,
            size,
            size
        );
    }
    
  
    p.setup = function() {
        p.createCanvas(width, height);
    }
    
    p.draw = function() {
        // p.background(55, 144, 47);
        let settings = {
            grid: grid,
            obstacles: [1],
            callbacks: {
                nodeConstructions: function(node) {
                    if (node.obstacle) {
                        p.fill(`rgba(255,0,0,0.5)`);
                    } else {
                        p.noFill();
                    }
                    p.stroke(50);
                    p.rect(node.col * (bSize - 1), node.row * (bSizeH - 1), bSize, bSizeH);
                }
            }
        }

        render(background);
        render(layer0);
        render(layer1);

        let b = new Byakugan(settings);
    }

    p.preload = function () {
        img = p.loadImage('./assets/tiles.png');
    }

    p.windowResized = function () {
        p.resizeCanvas(width, height);
    }

}

new p5(sketch, 'byakugan');

// function setup() {
//     const w = h = 500;
//     let width = 30;
//     let height = 30;
//     createCanvas(w,h);
//     let settings = {
//         grid: [
//             [1, 3, 0, 0],
//             [1, 0, 0, 0],
//             [0, 0, 0, 0],
//             [0, 1, 0, 0],
//             [0, 1, 1, 1],
//             [3, 0, 0, 1],
          
//         ],
//         obstacles: [1,3],
//         diagonal: false,
//         callbacks: {
//             nodeConstructions: function (node) {
//                 console.log(node);
//                 if (node.obstacle) {
//                     fill(0);
//                 } else if (node.start) {
//                     fill(0, 0, 255);
//                 } else if (node.goal) {
//                     fill(0, 255, 0);
//                 } else {
//                     noFill();
//                 }
        
//                 rect(node.col * width, node.row * height, width, height);
//             },
//         }
//     }
    
//     let b = new Byakugan(settings);
//     let res = b.search(0,1,3,3);
//     let res2 = b.search(0,1,5,2);
//     console.log(res);

//     res.forEach(node => {
//         const [row,col] = node;
//         fill(`rgba(0, 255, 0, 0.25)`);
//         rect(col * width, row * height, width, height)
//     })

//     res2.forEach(node => {
//         const [row,col] = node;
//         fill(`rgba(255, 0, 0, 0.25)`);
//         rect(col * width, row * height, width, height)
//     })

// }


