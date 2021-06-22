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
    markerCard.innerHTML = `<div class="markerCardImg" style="background-image: url('../assets/map/${imageSrc}');"></div><h3>${title}</h3><p>${text}</p>`
    marker.appendChild(markerCard)

    map.appendChild(marker)
}

addLoadEvent(function () {
    addMapMarker(
        18.7,
        21.5,
        'Fahrradständer am CFG',
        'Obwohl sich am CFG bereits einige Fahrradständer befinden, scheinen diese oft, besonders an warmen Tagen, nicht auszureichen. ' +
        'Außerdem befinden sie sich nur auf dem Osthof und nicht auf dem Westhof.',
        'cfg-fahrradständer.jpg'
    )
    addMapMarker(
        25.3,
        25,
        'Hahnerberg Kreuzung',
        'Baustelle: Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum iusto reprehenderit consequatur quae aperiam optio voluptatum delectus aut ea ad.',
        'hahnerberg.webp'
    )
})
