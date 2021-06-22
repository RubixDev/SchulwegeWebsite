function print(...data) {
    console.log(...data)
}

Number.prototype.zeroPadded = function (digits) {
    let out = this.toString()
    while (out.length < digits) out = `0${out}`
    return out
}
