const enterContainer = document.getElementById("enter_container")

enterContainer.innerHTML += '<h1 id = "enter">click to enter</h1>'
var textOpacity = 0

const enter = document.getElementById("enter")

enter.addEventListener('click', () => {
    textOpacity = 0
    enterContainer.innerHTML = '<h1 id = "music">music</h1><h1 id = "writing">writing</h1><h1 id = "harpy">harpy</h1>'
    const music = document.getElementById("music")
    const writing = document.getElementById("writing")
    const harpy = document.getElementById("harpy")

    music.addEventListener('click', () => {
        textOpacity = 0
        enterContainer.innerHTML = '<h1>music placeholder</h1>'
    })

    writing.addEventListener('click', () => {
        textOpacity = 0
        enterContainer.innerHTML = '<h1>writing placeholder</h1>'
    })

    harpy.addEventListener('click', () => {
        textOpacity = 0
        enterContainer.innerHTML = '<h1>harpy placeholder</h1>'
    })
})

setInterval(() => {
    enterContainer.style.opacity = textOpacity
    textOpacity += 0.005
}, 10)