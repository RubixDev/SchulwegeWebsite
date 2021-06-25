addLoadEvent(function () {
    const shareUrl = window.location.href.replace('/about', '')
    const shareQr = document.getElementById('share-qr')
    const shareLink = document.getElementById('share-link')

    new QRCode(shareQr, shareUrl)
    shareLink.innerText = shareUrl
    shareLink.addEventListener('click', function () {
        copyText(shareUrl)
    })
})
