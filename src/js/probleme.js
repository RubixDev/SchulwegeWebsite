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

    marker.addEventListener('mouseover', function () {
        for (const otherMarker of document.getElementsByClassName('marker')) {
            otherMarker.style.zIndex = ''
        }
        marker.style.zIndex = 15
    })

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
        'Viele der Schülerinnen und Schüler müssen die große Hahnerberg-Kreuzung umfahren. Im Moment stellt dies einige Probleme dar. ' + 
        'Auf der Kreuzung stehen vielen Baustellenschilder, sodass man schnell  den Überblick verlieren kann. ' + 
        'Um die Kreuzung mit dem Fahrrad zu überqueren, ist es sicherer, die vorhandenen Ampeln zu nutzen. ' + 
        'Mit dem Fahrrad auf der Straße zu bleiben könnte man fast schon als Selbstmord bezeichnen. ' + 
        'Bereits beim Einordnen in die richtige Abbiegerspur treten Probleme auf. ' + 
        'Da dort sowohl Busse und Autos, als auch größere Laster herfahren, werden Fahrradfahrer schnell übersehen. ' + 
        'Wenn man sich doch dafür entscheidet die Ampeln zu nutzen, treten  weitere Komplikationen auf. ' + 
        'Größtenteils sind die Bürgersteige mit Schlaglöchern oder Baumwurzeln übersehen, sodass Fahrradfahrer ausweichen müssen. ' +
        'Zudem sind die Bürgersteige viel zu schmal. Es ist Fußgängern und Fahrradfahrern nicht möglich  einen Weg zu benutzen.',
        'hahnerberg.webp'
    )
})
