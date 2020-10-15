$(document).ready(function (){
    'use strict';
    // console.log('main.js loaded')
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));
    paper.view.draw();

    // for (var x = 25; x < 400; x+= 50){
    //     for (var y = 25; y < 400; y+=50){
    //         var c = Shape.Circle(x, y, 20);
    //         c.fillColor = 'green';
    //     }
    // }
    let c = Shape.Circle(200, 200, 80);
    c.fillColor = 'black';
    let text = new PointText(200, 200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = 'hello world';
    let tool = new Tool();
    tool.onMouseDown = function (event) {
        let c = Shape.Circle(event.point.x, event.point.y, 20);
        c.fillColor = 'green';
    }
})
