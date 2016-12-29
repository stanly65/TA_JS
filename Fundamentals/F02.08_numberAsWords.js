function toWords(s) {
    let th = ['', 'thousand', 'million', 'billion', 'trillion'];
    let dg = ['zero', 'one', 'two', 'three', 'four','five', 'six', 'seven', 'eight', 'nine'];
    let tn = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tw = ['twenty', 'thirty', 'forty', 'fifty','sixty', 'seventy', 'eighty', 'ninety'];
    s = s.toString();
    s = s.replace(/[\, ]/g, '');
    if (s != parseFloat(s)) return 'not a number';
    let x =  s.indexOf('.');
    if (x == -1) x = s.length;
    if (x > 15) return 'too big';
    let n = s.split('');
    let str = '';
    let sk = 0;
    for (let i = 0; i < x; i++) {
        if
        ((x - i) % 3 == 2) {
            if (n[i] == '1') {
                str += tn[Number(n[i + 1])] + ' ';
                i++;
                sk = 1;
            }
            else if (n[i] != 0) {
                str += tw[n[i] - 2] + ' ';
                sk = 1;
            }
        } else if (n[i] != 0) {
            str += dg[n[i]] + ' ';
            if ((x - i) % 3 == 0) str += 'hundred and ';
            sk = 1;
        }
        if ((x - i) % 3 == 1) {
            if (sk)
                str += th[(x - i - 1) / 3] + ' ';
            sk = 0;
        }
    }
    if (x != s.length) {
        let y = s.length;
        str += 'point ';
        for (let i = x + 1; i < y; i++) str += dg[n[i]] + ' ';
    }
    //return str.replace(/\s+/g, ' ');
    let cor = str.replace(/\s+/g, ' ');
    if (cor== '') cor = 'zero';
    return cor.charAt(0).toUpperCase() + cor.slice(1);
}

console.log(toWords(0));