var img = document.querySelector('#wallpaper')

img.addEventListener('mouseover', mouseOver)
img.addEventListener('mouseleave', mouseLeave)


 

function mouseOver(){
    img.style.width = '33vw'
    img.style.height = '43vh'
}

function mouseLeave(){
    img.style.width = '30vw'
    img.style.height = '40vh'
}
