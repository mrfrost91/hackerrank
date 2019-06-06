function timeConversion(s) {
    let hours = s.substr(0, 2);
    if (s.endsWith('PM') && !s.startsWith('12')) {
        hours = +hours + 12 % 24;
        s = hours + s.slice(2, 10);
    } else if (s.endsWith('AM') && s.startsWith('12')) {
        s = s.replace(/12/, '00');
    }
    s = s.slice(0, s.length - 2);
    return s;
}