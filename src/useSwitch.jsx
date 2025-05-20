import { useState, useCallback } from "react";

export default function useSwitch() {
    // Stato booleano inizialmente false
    const [value, setValue] = useState(false);

    // Funzione per alternare il valore
    const toggle = useCallback(() => {
        setValue(v => !v);
    }, []);

    return [value, toggle];
}