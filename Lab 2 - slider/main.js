// notatnik z zajęć

const main = document.querySelector('main')

// zmiana styli css elementu
main.style.transform = "translateX(-10px)"

// zmiana klasy css elementu
main.classList.add() // .remove(), .toggle()

// jednorazowe wykonanie kodu po określonym czasie
const timeoutRef = setTimeout(
    () => {
        main.innerHTML = 'Msg from setTimeout'
    },
    2000
)

// wykonywanie kodu co określony czas
let licznik = 0
const intervalRef = setInterval(
    () => {
        main.innerHTML = `Msg from setInterval: ${licznik++}`
    },
    4000
)

// kasujemy setInterval
// clearInterval(intervalRef)

// kasujemy setTimeout
// clearTimeout(intervalRef)


// window.requestAnimationFrame