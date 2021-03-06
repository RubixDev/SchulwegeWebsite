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
        'Fahrradst??nder am CFG',
        'Obwohl sich am CFG bereits einige Fahrradst??nder befinden, scheinen diese oft, besonders an warmen Tagen, nicht auszureichen. ' +
        'Dies ist besonders ??rgerlich f??r die Sch??lerinnen und Sch??ler, die erst zu der ersten statt der nullten Stunde kommen, da zu dieser Uhrzeit bereits alle Fahrradst??nder vergeben sind. ' +
        'Wenn das Fahrrad dann irgendwo in das Geb??sch gestellt werden muss, ??berlegen die Sch??lerinnen und Sch??ler sich gleich, ob sich das Fahrradfahren lohnt. ' +
        'Da das Fahrrad ein sehr wichtiges und nachhaltiges Transportmittel ist, sollte die Stadt oder die Schule definitiv dar??ber nachdenken, die Kapazit??ten zu erweitern.',
        'cfg-fahrradst??nder.webp'
    )
    addMapMarker(
        29,
        81,
        1,
        'Hahnerberg-Kreuzung',
        'Viele der Sch??lerinnen und Sch??ler m??ssen die gro??e Hahnerberg-Kreuzung umfahren. Im Moment stellt dies einige Probleme dar. ' +
        'Auf der Kreuzung stehen viele Baustellenschilder, sodass man schnell den ??berblick verlieren kann. ' +
        'Um die Kreuzung mit dem Fahrrad zu ??berqueren, ist es sicherer, die vorhandenen Ampeln zu nutzen. ' +
        'Mit dem Fahrrad auf der Stra??e zu bleiben, k??nnte man fast schon als Selbstmord bezeichnen. ' +
        'Bereits beim Einordnen in die richtige Abbiegerspur treten Probleme auf. ' +
        'Da dort sowohl Busse und Autos als auch gr????ere Laster herfahren, werden Fahrradfahrer schnell ??bersehen. ' +
        'Wenn man sich doch daf??r entscheidet, die Ampeln zu nutzen, treten weitere Komplikationen auf. ',
        'hahnerberg.webp'
    )
    addMapMarker(
        31.3,
        99,
        1,
        'Wurzeln in Fu??wegen',
        'Auf gro??en Haupstra??en wie der Hahnerberger Stra??e Fahrrad zu fahren, trauen sich nur wenige, weshalb die Meisten auf die nicht ganz regelkonforme Alternative, den Fu??weg, ausweichen. ' +
        'Diese sind allerdings gr????tenteils mit Schlagl??chern oder Baumwurzeln ??bers??t, sodass Fahrradfahrer ausweichen m??ssen. ' +
        'Zudem sind die B??rgersteige viel zu schmal. Es ist Fu??g??ngern und Fahrradfahrern nicht m??glich, den gleichen Weg zu benutzen. ' +
        'Fahrradfahrer werden zudem nicht von allen Fu??g??ngern ber??cksichtigt, was nat??rlich berechtigt, aber ??rgerlich ist, da der Fu??weg der einzige sichere Weg ist.',
        'wurzel.webp'
    )
    addMapMarker(
        35.3,
        50,
        1,
        'Fahrradweg am Friedenshain',
        'Am Friedenshain wurde die Fahrradsituation scheinbar bereits gel??st, indem das Stra??enverkehrsamt einen Fahrradweg etabliert hat. ' +
        'Was dabei allerdings nicht ber??cksichtigt wurde, ist der Fahrstil der Autofahrer. ' +
        'Die meisten sind ziemlich unvorsichtig, sodass Autos manchmal erst im letzten Moment zum Stehen kommen. ' +
        'Obwohl die Fahrradfahrer grunds??tzlich Vorfahrt haben, geben Autofahrer, bevor das Fahrrad die Stra??e ??berqueren will, h??ufig noch einmal Gas. ' +
        'Auch an dieser Stelle befindet sich aktuell eine Baustelle mitten im Weg. Folglich m??ssen Fahrradfahrer vorsichtig den hohen Bordsteig passieren. ' +
        'Dabei werden sie allerdings oft von Autos unter Druck gesetzt.',
        'friedenshain-radweg.webp'
    )
    addMapMarker(
        42,
        40.8,
        2,
        '??bergang vom Fahrradweg zur Stra??e',
        'Wenn man aus der Region Lichtscheid kommt, muss man zwischen Am Freudenberg und Friedenshain den Fahrradweg neben der Schnellstra??e nutzen. ' +
        'Der Fahrradweg endet an der Ecke Freudenberger Stra??e - Hermannsh??he. ' +
        'Viele Fahrr??der m??ssen am Ende fast zum Stehen kommen, um einigerma??en in die Hermannsh??he einsehen zu k??nnen und somit einen Unfall zu vermeiden, ' +
        'ehe sie auf der Freudenberger Stra??e weiter fahren.',
        'friedenshain-stra??e.webp'
    )
    addMapMarker(
        24.2,
        68.6,
        1,
        'Jung-Stilling-Weg',
        'Die meisten Fahrradfahrer, die zum Schulzentrum S??d wollen, fahren wohl ??ber den Jung-Stilling-Weg. ' +
        'Viele Sch??lerinnen und Sch??ler kommen auch zu Fu?? von der Bushaltestelle Jung-Stilling-Weg. ' +
        'Allerdings ist das manchmal problematisch, da viele Autofahrer viel zu schnell von der Cronenberger Stra??e in den ' +
        'Jung-Stilling-Weg abbiegen und damit die Fahrradfahrer gef??hrden. ' +
        'Au??erdem ist der B??rgersteig nur von einer wei??en Linie gekennzeichnet und kann somit leicht von Autofahrern ??bersehen werden. ' +
        'Zus??tzlich ist die Stra??e eng und oft weichen Autofahrer teils auf den Fu??g??ngerweg aus, um Platz f??r entgegenkommende Autos zu machen.',
        'jung-stilling.png'
    )
    addMapMarker(
        93.6,
        13,
        3,
        'Unterf??hrung in Lichtscheid',
        'Wenn man von der Schule kommt und entweder bei Lichtscheid wohnt oder dort umsteigen muss, sind die Meisten gezwungen, eine Unterf??hrung zu nutzen. ' +
        'Diese ist lang und ungepflegt: Es gibt Altglas- und Papiercontainer, die meist ??berf??llt sind und was nicht mehr reinpasst, ' +
        'wird auf den B??rgersteig drumherum geworfen. Die Sch??ler, die morgens auch durch die Unterf??hrung m??ssen, lassen sich im Winter oft fahren, ' +
        'da die Unterf??hrung in den dunklen Morgenstunden zu schlecht beleuchtet ist. Au??erdem gibt es auf der Treppe keinen Winterdienst, ' +
        'was sie vor allem bei Schnee sehr rutschig macht. Das schreckt manche Sch??lerinnen und Sch??ler vom Busfahren ab, ' +
        'sodass sie ihre Eltern darum bitten, sie zur Schule zu fahren. Auch die Tatsache, ' +
        'dass die Busse im Winter oft Stunden zu sp??t oder gar nicht kommen, ' +
        'weil sie mit ihren Sommerreifen im Winter den Berg in Ronsdorf nicht hoch fahren k??nnen, h??lt viele vom Busfahren ab. ' +
        'Bei den Bussen gibt es noch ein Problem: Es kommen viele verschiedene Busse aus Ronsdorf, welche zum Schulzentrum S??d fahren. ' +
        'Viele von ihnen haben teilweise gleiche Strecken, was zu vielen halb vollen Bussen, statt wenigen vollen Bussen f??hrt.',
        'lichtscheid.webp'
    )
})
