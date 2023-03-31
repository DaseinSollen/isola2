import random
import serial
import time
import signal
import sys
import json
from serial import SerialTimeoutException

# Funzione per gestire il segnale di interruzione (Ctrl+C)
def signal_handler(sig, frame):
    print('Interruzione ricevuta')
    ser.close()
    sys.exit(0)

# Imposta il gestore di segnali per il segnale di interruzione (Ctrl+C)
signal.signal(signal.SIGINT, signal_handler)

# Impostare il nome della porta seriale e la velocità di trasmissione
ser = serial.Serial('COM6', 9600)

# Imposta un tempo massimo di attesa per la lettura dalla porta seriale
ser.timeout = 1

while True:
    # Simulare la lettura della bilancia
    peso = round(random.uniform(50, 150), 2) # Genera un peso casuale compreso tra 50 e 150 kg con massimo 2 cifre dopo la virgola
    data = {
        "id": random.randint(1, 100), # Genera un ID casuale compreso tra 1 e 100
        "data": time.strftime("%Y-%m-%d %H:%M:%S"), # Ottiene la data e l'ora attuali
        "peso": peso
    }

    # Scrivi i dati simulati nel file JSON
    with open("dati.json", "a") as file:
        json.dump(data, file)
        file.write("\n")

    # Codifica i dati simulati in formato stringa per inviarli sulla porta seriale
    data_str = json.dumps(data)

    # Invia i dati simulati alla porta seriale
    ser.write(data_str.encode())

    # Aggiungi un ritardo di 1 secondo
    time.sleep(1)

    try:
        # Leggi i dati ricevuti sulla porta seriale e stampali a schermo
        received_data = ser.readline().decode().strip()
        print("Dati simulati: ", data_str)
        print("Dati ricevuti: ", received_data)
    except SerialTimeoutException:
        # Gestisci l'eccezione SerialTimeoutException quando non ci sono dati disponibili sulla porta seriale
        print("Nessun dato disponibile sulla porta seriale")
        continue
