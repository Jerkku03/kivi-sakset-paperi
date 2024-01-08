
// käyttäjän valitsema arvo

// tietokeneen arpoma arvo
function tietokone() {
    const vaihtoehdot = ['kivi', 'sakset', 'paperi'];
    const random = Math.floor(Math.random() * vaihtoehdot.length);
    return (random, vaihtoehdot[random]);
}



// käyttäjän ja tietokoneen arvon vertaaminen

function vertailu(pelaaja, tietokone) {
    if (pelaaja === 'kivi' && tietokone === 'sakset' || pelaaja === 'paperi' && tietokone === 'kivi' || pelaaja === 'sakset' && tietokone === 'paperi') {
        return result = 'Voitit!'
    } else if ( pelaaja === tietokone) {
        return 'tasapeli'
    }   else {
        return 'hävisit'
    }
}   

// pelin rakenne

function peli() {
    alert('elämiä 5')
    elämät = 0;
    while (elämät < 5) {
        pelaaja = prompt('kirjoita kivi, sakset tai paperi');
        alert(vertailu(pelaaja, tietokone()));
        elämät + 1;
    }
    alert('elämät loppu')
}

peli();

