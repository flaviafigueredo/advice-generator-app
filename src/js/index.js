const button = document.querySelector("#btn")
const adviceId = document.querySelector('#advice-id')
const adviceText = document.querySelector("#advice-text")

async function getRandomAdvice() {
    const url = "https://api.adviceslip.com/advice"
    const response = await fetch(url)
    const advice = await response.json()
    const showId = `Advice #${advice.slip.id}`    
    const showAdvice = `"${advice.slip.advice}"`
    adviceId.innerHTML = showId
    adviceText.innerHTML = showAdvice
}

button.addEventListener('click', () => {
    getRandomAdvice()
})