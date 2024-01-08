
// käyttäjän valitsema arvo
document.addEventListener("DOMContentLoaded", () => {
// tietokeneen arpoma arvo
function tietokone() {
    const vaihtoehdot = ['kivi', 'sakset', 'paperi'];
    const random = Math.floor(Math.random() * vaihtoehdot.length);
    return (random, vaihtoehdot[random]);
};


const endResult = document.querySelector('.endResult');

// käyttäjän ja tietokoneen arvon vertaaminen

function vertailu(pelaaja, tietokone) {
    if (pelaaja === 'kivi' && tietokone === 'sakset' || pelaaja === 'paperi' && tietokone === 'kivi' || pelaaja === 'sakset' && tietokone === 'paperi') {
        const p = document.createElement('p');
        p.innerText = 'Voitit!'
        endResult.appendChild(p);
    } else if ( pelaaja === tietokone) {
        const p = document.createElement('p');
        p.innerText = 'tasapeli'
        endResult.appendChild(p);
    }   else {
        const p = document.createElement('p');
        p.innerText = 'hävisit'
        endResult.appendChild(p);
    }
};

// pelin rakenne

// käyttäjän valinta 

    const kivi = document.querySelector('.kivi');
    const sakset = document.querySelector('.sakset');
    const paperi = document.querySelector('.paperi');
    const nappulat = document.querySelector('.nappulat');
//pelaaminen




    kivi.addEventListener('click', () => {
        const tietokoneValinta = tietokone();
        const käyttäjä = 'kivi';
        vertailu(käyttäjä, tietokoneValinta);
}); 
    sakset.addEventListener('click', () => {
            const tietokoneValinta = tietokone();
            const käyttäjä = 'sakset';
            vertailu(käyttäjä, tietokoneValinta);
});

paperi.addEventListener('click', () => {
            const tietokoneValinta = tietokone();
            const käyttäjä = 'paperi';
            vertailu(käyttäjä, tietokoneValinta);
    });
});


