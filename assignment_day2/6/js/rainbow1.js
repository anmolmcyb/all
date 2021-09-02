//colors of rainbow
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

var arcWidth = 10;//determines the size of the logo
var radius = 8 * arcWidth;

var rainbow = document.getElementById("rainbow1");
var context = rainbow.getContext("2d");
//drawing 7 arcs, each for different color
rainbow.width = (radius + (colors.length - 0.5) * arcWidth) * 2;
rainbow.height = (radius + (colors.length - 1) * arcWidth);

var drawArc = function (color) {
    context.beginPath();
    context.arc(
        rainbow.width / 2,
        rainbow.height + arcWidth / 2,
        radius,
        Math.PI,
        2 * Math.PI
    );
    context.lineWidth = arcWidth;
    context.strokeStyle = color;
    context.stroke();
    context.closePath();
    radius += arcWidth;//changing the radius each time so that the arcs don't overlap
};

colors.reverse().forEach(drawArc);