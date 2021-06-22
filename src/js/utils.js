function print(...data) {
    console.log(...data)
}

Number.prototype.zeroPadded = function (digits) {
    let out = this.toString()
    while (out.length < digits) out = `0${out}`
    return out
}

function copyText(text) {
    const temp = document.createElement('textarea');
    temp.innerHTML = text;
    document.body.appendChild(temp);
    temp.select();
    temp.setSelectionRange(0, 99999);
    document.execCommand('copy');
    document.body.removeChild(temp)
}
