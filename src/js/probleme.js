function addMapMarker(x, y, title, text, imageSrc) {
    const map = document.getElementById('map')

    const marker = document.createElement('div')
    marker.className = 'marker'
    marker.style.left = `${x}%`
    marker.style.top = `${y}%`

    const markerIcon = document.createElement('i')
    markerIcon.classList = 'fas fa-map-marker-alt'
    marker.appendChild(markerIcon)

    const markerCard = document.createElement('div')
    markerCard.className = 'markerCard'
    markerCard.innerHTML = `<h3>${title}</h3><p>${text}</p>`
    marker.appendChild(markerCard)

    map.appendChild(marker)
}

addLoadEvent(function () {
    addMapMarker(18.7, 21.5, 'Carl-Fuhlrott Gymnasium', 'Unsere Schule', '')
})
