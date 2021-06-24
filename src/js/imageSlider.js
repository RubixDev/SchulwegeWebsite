let imageIndex = 0

function nextImage() {
    const images = document.getElementById('imageSlider').children;
    for (const image of images) {
        image.style.opacity = 0
    }
    imageIndex++
    if (imageIndex >= images.length) imageIndex = 0
    images[imageIndex].style.opacity = 100
    setTimeout(nextImage, 5000)
}

addLoadEvent(function () {
    const imageSlider = document.getElementById('imageSlider')
    for (let imageIndex = 1; imageIndex <= 14; imageIndex++) {
        const image = document.createElement('img')
        image.src = `assets/slideshow/${imageIndex.zeroPadded(2)}.webp`
        imageSlider.appendChild(image)
    }
})

addLoadEvent(nextImage)
