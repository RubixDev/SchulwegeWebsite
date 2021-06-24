function addMapMarker(x, y, direction, title, text, imageSrc) {
    // Desktop
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

    const markerCardImg = document.createElement('div')
    markerCardImg.className = 'markerCardImg'
    markerCardImg.style.backgroundImage = `url('../assets/map/${imageSrc}')`
    switch (direction) {
        case 1:
            markerCard.style.transformOrigin = 'bottom left'
            markerCard.style.bottom = '100%'
            break
        case 2:
            markerCard.style.transformOrigin = 'top left'
            break
        case 3:
            markerCard.style.transformOrigin = 'top right'
            markerCard.style.right = 'calc(100% - 2rem)'
            break
        case 4:
            markerCard.style.transformOrigin = 'bottom right'
            markerCard.style.bottom = '100%'
            markerCard.style.right = 'calc(100% - 2rem)'
            break
    }
    markerCard.appendChild(markerCardImg)

    markerCard.innerHTML += `<h3>${title}</h3><p>${text}</p>`
    marker.appendChild(markerCard)

    marker.addEventListener('mouseover', function () {
        for (const otherMarker of document.getElementsByClassName('marker')) {
            otherMarker.style.zIndex = ''
        }
        marker.style.zIndex = 15
    })

    map.appendChild(marker)

    // Mobile
    const mobileMap = document.getElementById('mobileMap')

    const mobileCard = document.createElement('div')
    mobileCard.classList = 'mobileCard'

    const mobileCardImg = document.createElement('div')
    mobileCardImg.className = 'mobileCardImg'
    mobileCardImg.style.backgroundImage = `url('../assets/map/${imageSrc}')`
    mobileCard.appendChild(mobileCardImg)
    mobileCard.innerHTML += `<h3>${title}</h3><p>${text}</p>`

    mobileMap.appendChild(mobileCard)
}

addLoadEvent(function () {
    addMapMarker(
        17,
        70,
        1,
        'Fahrradständer am CFG',
        'Obwohl sich am CFG bereits einige Fahrradständer befinden, scheinen diese oft, besonders an warmen Tagen, nicht auszureichen. ' +
        'Dies ist besonders ärgerlich für die Schülerinnen und Schüler, die erst zu der ersten statt der nullten Stunde kommen, da zu dieser Uhrzeit bereits alle Fahrradständer vergeben sind. ' +
        'Wenn das Fahrrad dann irgendwo in das Gebüsch gestellt werden muss, überlegen die Schülerinnen und Schüler sich gleich, ob sich das Fahrradfahren lohnt. ' +
        'Da das Fahrrad ein sehr wichtiges und nachhaltiges Transportmittel ist, sollte die Stadt oder die Schule definitiv darüber nachdenken, die Kapazitäten zu erweitern.',
        'cfg-fahrradständer.webp'
    )
    addMapMarker(
        29,
        81,
        1,
        'Hahnerberg-Kreuzung',
        'Viele der Schülerinnen und Schüler müssen die große Hahnerberg-Kreuzung umfahren. Im Moment stellt dies einige Probleme dar. ' +
        'Auf der Kreuzung stehen viele Baustellenschilder, sodass man schnell den Überblick verlieren kann. ' +
        'Um die Kreuzung mit dem Fahrrad zu überqueren, ist es sicherer, die vorhandenen Ampeln zu nutzen. ' +
        'Mit dem Fahrrad auf der Straße zu bleiben, könnte man fast schon als Selbstmord bezeichnen. ' +
        'Bereits beim Einordnen in die richtige Abbiegerspur treten Probleme auf. ' +
        'Da dort sowohl Busse und Autos als auch größere Laster herfahren, werden Fahrradfahrer schnell übersehen. ' +
        'Wenn man sich doch dafür entscheidet, die Ampeln zu nutzen, treten weitere Komplikationen auf. ',
        'hahnerberg.webp'
    )
    addMapMarker(
        31.3,
        99,
        1,
        'Wurzeln in Fußwegen',
        'Auf großen Haupstraßen wie der Hahnerberger Straße Fahrrad zu fahren, trauen sich nur wenige, weshalb die Meisten auf die nicht ganz regelkonforme Alternative, den Fußweg, ausweichen. ' +
        'Diese sind allerdings größtenteils mit Schlaglöchern oder Baumwurzeln übersät, sodass Fahrradfahrer ausweichen müssen. ' +
        'Zudem sind die Bürgersteige viel zu schmal. Es ist Fußgängern und Fahrradfahrern nicht möglich, den gleichen Weg zu benutzen. ' +
        'Fahrradfahrer werden zudem nicht von allen Fußgängern berücksichtigt, was natürlich berechtigt, aber ärgerlich ist, da der Fußweg der einzige sichere Weg ist.',
        'wurzel.webp'
    )
    addMapMarker(
        35.3,
        50,
        1,
        'Fahrradweg am Friedenshain',
        'Am Friedenshain wurde die Fahrradsituation scheinbar bereits gelöst, indem das Straßenverkehrsamt einen Fahrradweg etabliert hat. ' +
        'Was dabei allerdings nicht berücksichtigt wurde, ist der Fahrstil der Autofahrer. ' +
        'Die meisten sind ziemlich unvorsichtig, sodass Autos manchmal erst im letzten Moment zum Stehen kommen. ' +
        'Obwohl die Fahrradfahrer grundsätzlich Vorfahrt haben, geben Autofahrer, bevor das Fahrrad die Straße überqueren will, häufig noch einmal Gas. ' +
        'Auch an dieser Stelle befindet sich aktuell eine Baustelle mitten im Weg. Folglich müssen Fahrradfahrer vorsichtig den hohen Bordsteig passieren. ' +
        'Dabei werden sie allerdings oft von Autos unter Druck gesetzt.',
        'friedenshain-radweg.webp'
    )
    addMapMarker(
        42,
        40.8,
        2,
        'Übergang vom Fahrradweg zur Straße',
        'Wenn man aus der Region Lichtscheid kommt, muss man zwischen Am Freudenberg und Friedenshain den Fahrradweg neben der Schnellstraße nutzen. ' +
        'Der Fahrradweg endet an der Ecke Freudenberger Straße - Hermannshöhe. ' +
        'Viele Fahrräder müssen am Ende fast zum Stehen kommen, um einigermaßen in die Hermannshöhe einsehen zu können und somit einen Unfall zu vermeiden, ' +
        'ehe sie auf der Freudenberger Straße weiter fahren.',
        'friedenshain-straße.webp'
    )
    addMapMarker(
        24.2,
        68.6,
        1,
        'Jung-Stilling-Weg',
        'Die meisten Fahrradfahrer, die zum Schulzentrum Süd wollen, fahren wohl über den Jung-Stilling-Weg. ' +
        'Viele Schülerinnen und Schüler kommen auch zu Fuß von der Bushaltestelle Jung-Stilling-Weg. ' +
        'Allerdings ist das manchmal problematisch, da viele Autofahrer viel zu schnell von der Cronenberger Straße in den ' +
        'Jung-Stilling-Weg abbiegen und damit die Fahrradfahrer gefährden. ' +
        'Außerdem ist der Bürgersteig nur von einer weißen Linie gekennzeichnet und kann somit leicht von Autofahrern übersehen werden. ' +
        'Zusätzlich ist die Straße eng und oft weichen Autofahrer teils auf den Fußgängerweg aus, um Platz für entgegenkommende Autos zu machen.',
        'jung-stilling.png'
    )
    addMapMarker(
        93.6,
        13,
        3,
        'Unterführung in Lichtscheid',
        'Wenn man von der Schule kommt und entweder bei Lichtscheid wohnt oder dort umsteigen muss, sind die Meisten gezwungen, eine Unterführung zu nutzen. ' +
        'Diese ist lang und ungepflegt: Es gibt Altglas- und Papiercontainer, die meist überfüllt sind und was nicht mehr reinpasst, ' +
        'wird auf den Bürgersteig drumherum geworfen. Die Schüler, die morgens auch durch die Unterführung müssen, lassen sich im Winter oft fahren, ' +
        'da die Unterführung in den dunklen Morgenstunden zu schlecht beleuchtet ist. Außerdem gibt es auf der Treppe keinen Winterdienst, ' +
        'was sie vor allem bei Schnee sehr rutschig macht. Das schreckt manche Schülerinnen und Schüler vom Busfahren ab, ' +
        'sodass sie ihre Eltern darum bitten, sie zur Schule zu fahren. Auch die Tatsache, ' +
        'dass die Busse im Winter oft Stunden zu spät oder gar nicht kommen, ' +
        'weil sie mit ihren Sommerreifen im Winter den Berg in Ronsdorf nicht hoch fahren können, hält viele vom Busfahren ab. ' +
        'Bei den Bussen gibt es noch ein Problem: Es kommen viele verschiedene Busse aus Ronsdorf, welche zum Schulzentrum Süd fahren. ' +
        'Viele von ihnen haben teilweise gleiche Strecken, was zu vielen halb vollen Bussen, statt wenigen vollen Bussen führt.',
        'lichtscheid.webp'
    )
})
