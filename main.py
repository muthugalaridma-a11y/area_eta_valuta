from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/")
def home():
    return FileResponse('static/index.html')

# ESERCIZIO 1: AREA RETTANGOLO
@app.get("/calcola_area")
def area(base: float, altezza: float):
    risultato = base * altezza
    return {"messaggio": f"L'area del rettangolo è: {risultato} mq"}

# ESERCIZIO 2: VERIFICA ETÀ
@app.get("/verifica_eta")
def verifica(anno: int):
    eta = 2026 - anno
    stato = "Maggiorenne" if eta >= 18 else "Minorenne"
    return {"messaggio": f"Hai {eta} anni, sei {stato}."}

# ESERCIZIO 3: CAMBIO VALUTA
@app.get("/cambio_valuta")
def cambio(euro: float):
    dollari = round(euro * 1.10, 2)
    return {"messaggio": f"{euro}€ equivalgono a {dollari}$"}