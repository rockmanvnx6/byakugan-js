
function setup() {
    const w = h = 500;
    let width = 30;
    let height = 30;
    createCanvas(w,h);
    let settings = {
        grid: [
            [1, 3, 0, 0],
            [1, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 1, 1],
            [3, 0, 0, 1],
          
        ],
        obstacles: [1,3],
        diagonal: false,
        callbacks: {
            nodeConstructions: function (node) {
                console.log(node);
                if (node.obstacle) {
                    fill(0);
                } else if (node.start) {
                    fill(0, 0, 255);
                } else if (node.goal) {
                    fill(0, 255, 0);
                } else {
                    noFill();
                }
        
                rect(node.col * width, node.row * height, width, height);
            },
        }
    }
    
    let b = new Byakugan(settings);
    let res = b.search(0,1,3,3);
    let res2 = b.search(0,1,5,2);
    console.log(res);

    res.forEach(node => {
        const [row,col] = node;
        fill(`rgba(0, 255, 0, 0.25)`);
        rect(col * width, row * height, width, height)
    })

    res2.forEach(node => {
        const [row,col] = node;
        fill(`rgba(255, 0, 0, 0.25)`);
        rect(col * width, row * height, width, height)
    })

}


