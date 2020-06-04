let div1 = document.createElement('div')
div1.className = 'demo'
div1.style.top = 'auto'
document.body.appendChild(div1)



var draging = false
var lastX
var lastY

div1.onmousedown = function (x) {
    lastX = x.clientX
    lastY = x.clientY
    draging = true
}

document.onmousemove = function (x) {
    if (draging === true) {

        var deltaX = x.clientX - lastX
        var deltaY = x.clientY - lastY
        var top = parseInt(div1.style.top) || 0
        var left = parseInt(div1.style.left) || 0
        var resultY = top + deltaY
        var resultX = left + deltaX
        if (resultY < 0) {
            resultY = 0
        }
        if (resultX < 0) {
            resultX = 0
        }
        div1.style.top = resultY + 'px'
        div1.style.left = resultX + 'px'
        lastX = x.clientX
        lastY = x.clientY
    }

}
document.onmouseup = function () {
    draging = false
}
