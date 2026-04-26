// --- FUNZIONE AREA ---
async function gestisciArea() {
    const b = document.getElementById('base').value;
    const h = document.getElementById('altezza').value;
    
    // Passiamo due parametri usando & per separarli
    const res = await fetch(`/calcola_area?base=${b}&altezza=${h}`);
    const json = await res.json();
    document.getElementById('risposta-area').innerText = json.messaggio;
}

// --- FUNZIONE ETÀ ---
async function gestisciEta() {
    const anno = document.getElementById('anno').value;
    const res = await fetch(`/verifica_eta?anno=${anno}`);
    const json = await res.json();
    document.getElementById('risposta-eta').innerText = json.messaggio;
}

// --- FUNZIONE VALUTA ---
async function gestisciValuta() {
    const euro = document.getElementById('euro').value;
    const res = await fetch(`/cambio_valuta?euro=${euro}`);
    const json = await res.json();
    document.getElementById('risposta-valuta').innerText = json.messaggio;
}

// Collegamento dei bottoni
document.getElementById('btn-area').addEventListener('click', gestisciArea);
document.getElementById('btn-eta').addEventListener('click', gestisciEta);
document.getElementById('btn-valuta').addEventListener('click', gestisciValuta);