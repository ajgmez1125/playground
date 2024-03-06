phrases = [
    'harpy',
    ':3',
    'look here!',
    'welcome!',
    'best website ever',
    '<3',
    'i love my friends'
]

setInterval(() => {
    if(Math.random() * 100 < 70)
    {
        document.title = phrases[0]
    }
    else
    {
        document.title = phrases[Math.floor(Math.random() * (phrases.length - 1) + 1)]
    }
}, 100)