var colorView = document.getElementById('colorView');
var colors = document.getElementsByClassName('colorBox');

colorView.addEventListener('click', function(event) {
    event.target.style.backgroundColor = '#eee';
});

for (var iii = 0; iii < colors.length; iii++) {
    colors[iii].addEventListener('click', changeColor);
}

function getStyle(element, styleProperty) {
    if (element.currentStyle) {
        return element.currentStyle[styleProperty];
    }

    return document.defaultView.getComputedStyle(element, null)[styleProperty];
}

function changeColor(event) {
    var color = getStyle(event.target, 'backgroundColor');
    colorView.style.backgroundColor = color;
}
