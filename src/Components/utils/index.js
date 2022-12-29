export function SmoothHorizontalScrolling(e, time, amount, start) {
    var eAmt = amount / 100;
    var currTime = 0;
    var scrollCounter = 0;
    const y = window.scrollY;
    while (currTime <= time) {
        window.setTimeout(SHS_B, currTime, e, scrollCounter, eAmt, start, y)
        currTime += time / 100;
        scrollCounter++;

    }
    window.scrollTo(0, y)
}
function SHS_B(e, sc, eAmt, start, y) {
    e.scrollLeft = eAmt * sc + start;
}

// làm mượt scroll


export function randomRgbaColor(opacity){
    const R = Math.round(Math.random() *256)
    const G = Math.round(Math.random() *256)
    const B = Math.round(Math.random() *256)
    let color =`rgba(${R}, ${G}, ${B},${opacity})`;
    return color;
}