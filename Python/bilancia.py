import random
import serial
import time
import signal
import sys
import json
import uuid
from datetime import datetime
import serial
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
    peso = round(random.uniform(50, 150), 2) # Genera un peso casuale compreso tra 50 e 150 kg con massimo 2 cifre decimali

    # Genera un nuovo UUID
    id = str(uuid.uuid4())

    # Ottiene la data corrente
    date = datetime.now().strftime("%H:%M:%S %d-%m-%Y")

    # Crea un dizionario contenente le informazioni di id, data e peso
    data_dict = {
        "id": id,
        "data": date,
        "peso": peso
    }

    # Scrive i dati sul file JSON
    with open("data.json", "a") as f:
        json.dump(data_dict, f)
        f.write("\n") # Aggiunge un carattere di nuova linea per separare i record

    # Converte i dati in una stringa e inviala alla porta seriale
    data_str = json.dumps(data_dict)
    ser.write(data_str.encode())

    # Aggiunge un ritardo di 1 secondo
    time.sleep(1)

    try:
        # Legge i dati ricevuti sulla porta seriale e stampali a schermo
        received_data = ser.readline().decode().strip()
        print("Dati simulati: ", data_str)
        print("Dati ricevuti: ", received_data)
    except SerialTimeoutException:
        # Gestisce l'eccezione SerialTimeoutException quando non ci sono dati disponibili sulla porta seriale
        print("Nessun dato disponibile sulla porta seriale")
        continue
