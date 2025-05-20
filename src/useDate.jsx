// Custom hook che restituisce la data e ora correnti, aggiornandosi ogni secondo

import { useState, useEffect } from "react";

export default function useDate() {
    // Stato che contiene la data e ora attuali
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        // Imposta un intervallo che aggiorna lo stato ogni secondo
        const interval = setInterval(() => {
            setNow(new Date());
        }, 1000);
        // Pulisce l'intervallo quando il componente viene smontato
        return () => clearInterval(interval);
    }, []);

    // Restituisce la data e ora correnti
    return now;
}
