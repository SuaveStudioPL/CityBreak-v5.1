// ... existing code ...

let startMarker = null; // Zmienna do przechowywania referencji do markera startowego
let watchId = null; // ID dla watchPosition

// Załóżmy, że startIcon jest zdefiniowany gdzieś tutaj lub globalnie
// np. const startIcon = L.icon({ iconUrl: 'path/to/start.png', ... });

// Dodaj klasę CSS do opcji ikony PRZED utworzeniem markera
// Jeśli startIcon jest tworzony dynamicznie, zrób to w odpowiednim miejscu
if (startIcon && startIcon.options) {
    startIcon.options.className = (startIcon.options.className || '') + ' pulsing-marker';
} else {
    // Jeśli startIcon nie jest obiektem L.icon lub jest tworzony inaczej,
    // musisz dostosować dodawanie className w miejscu jego tworzenia.
    // Przykład, jeśli tworzysz ikonę ad-hoc:
    // startIcon = L.icon({ iconUrl: 'path/to/start.png', ..., className: 'pulsing-marker' });
    console.warn("Nie można automatycznie dodać klasy CSS do startIcon. Zrób to ręcznie.");
}


function initializeMapAndRoute(startCoords, endCoords) {
    // ... existing code to initialize map ...

    // Dodaj marker końcowy
    L.marker(endCoords, { icon: endIcon }).addTo(map);

    // Sprawdź, czy lokalizacja startowa pochodzi z geolokalizacji
    let isGeolocationStart = checkIfStartIsFromGeolocation();

    // Dodaj marker startowy - teraz użyje ikony z dodaną klasą CSS
    startMarker = L.marker(startCoords, { icon: startIcon }).addTo(map);
    startMarker.bindPopup("Punkt startowy").openPopup();

    // ... existing code to calculate and display route ...
    // displayRoute(startCoords, endCoords);

    // Jeśli start to geolokalizacja, rozpocznij śledzenie
    if (isGeolocationStart && navigator.geolocation) {
        if (watchId) {
            navigator.geolocation.clearWatch(watchId); // Wyczyść poprzednie śledzenie, jeśli istnieje
        }

        watchId = navigator.geolocation.watchPosition(
            (position) => {
                const newCoords = [position.coords.latitude, position.coords.longitude];
                if (startMarker) {
                    startMarker.setLatLng(newCoords); // Aktualizuj tylko pozycję markera
                    // NIE wywołuj ponownie displayRoute() ani funkcji obliczającej trasę
                }
            },
            (error) => {
                console.error("Błąd podczas śledzenia lokalizacji:", error);
                // Opcjonalnie: poinformuj użytkownika
            },
            {
                enableHighAccuracy: true, // Dla większej dokładności
                maximumAge: 0, // Nie używaj starych danych
                timeout: 10000 // Czas oczekiwania na pozycję
            }
        );
    } else if (watchId) {
        // Jeśli start nie jest z geolokalizacji (np. wybrany ręcznie), zatrzymaj śledzenie
        navigator.geolocation.clearWatch(watchId);
        watchId = null;
    }

    // ... existing code ...
}

// Funkcja pomocnicza do sprawdzenia, czy start jest z geolokalizacji
// Musisz dostosować tę logikę do swojej implementacji
function checkIfStartIsFromGeolocation() {
    // Przykład: sprawdź, czy koordynaty startowe pochodzą z ostatniego wyniku geolokalizacji
    // lub czy użytkownik wybrał opcję "Użyj mojej lokalizacji"
    // Zwróć true lub false
    // return (startCoords === lastGeolocationCoords); // Przykładowa, uproszczona logika
    return true; // Załóżmy na razie, że tak
}

// Pamiętaj, aby zatrzymać śledzenie, gdy mapa jest niszczona lub użytkownik opuszcza widok
function cleanupMap() {
    if (watchId) {
        navigator.geolocation.clearWatch(watchId);
        watchId = null;
    }
    // ... reszta kodu czyszczącego ...
}