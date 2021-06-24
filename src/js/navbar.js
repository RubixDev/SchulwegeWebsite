function _addNavbarListItem(list, href, html) {
    const listItem = document.createElement('li')
    const link = document.createElement('a')
    link.setAttribute('href', href)
    link.innerHTML = html
    listItem.appendChild(link)
    list.appendChild(listItem)
}

function addNavbarListItem(list, href, icon, text) {
    if (window.location.href.includes('src') || window.location.href.includes('github.io')) href = `/${window.location.pathname.split('/')[1]}${href}`
    _addNavbarListItem(list, href, `<i class="${icon}"></i><span style="vertical-align: middle;">${text}</span>`)
}

addLoadEvent(function () {
    let navbar = document.getElementsByTagName('nav')
    if (!navbar) {
        return
    }
    navbar = navbar[0]

    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.setAttribute('id', 'nav-checkbox')
    navbar.appendChild(checkbox)

    const navbarList = document.createElement('div')
    navbarList.setAttribute('id', 'navbar-list')
    const list = document.createElement('ul')

    addNavbarListItem(
        list,
        '/',
        'fas fa-home',
        'Start'
    )
    addNavbarListItem(
        list,
        '/probleme',
        'fas fa-exclamation-triangle',
        'Probleme'
    )
    addNavbarListItem(
        list,
        '/ideen',
        'fas fa-lightbulb',
        'Ideen'
    )
    addNavbarListItem(
        list,
        '/interviews',
        'fas fa-microphone-alt',
        'Interviews'
    )
    addNavbarListItem(
        list,
        '/about',
        'fas fa-info',
        'Über das Projekt'
    )

    navbarList.appendChild(list)
    navbar.appendChild(navbarList)

    const hamburgerLabel = document.createElement('label')
    hamburgerLabel.setAttribute('for', 'nav-checkbox')

    const hamburgerContent = document.createElement('div')
    hamburgerContent.setAttribute('id', 'hamburger-content')

    const hamburgerLine = document.createElement('div')
    hamburgerLine.setAttribute('id', 'hamburger-middle')

    hamburgerContent.appendChild(hamburgerLine)
    hamburgerLabel.appendChild(hamburgerContent)
    navbar.appendChild(hamburgerLabel)
})
