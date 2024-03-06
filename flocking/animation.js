//Config-----------------------------------------------------------------------------

var canvas = document.getElementById('canvas')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext("2d")

//----------------------------------------------------------------------------------------
//Mouse stuff------------------------------------------------------------------------------

mouseProps = {
    x: null,
    y: null
}

addEventListener('mousemove', (e) => {
    mouseProps.x = e.clientX
    mouseProps.y = e.clientY
})

//----------------------------------------------------------------------------------------
//Square generation----------------------------------------------------------------------

const dotSize = {
    x: 5,
    y: 5
}
const dotSpeed = 10
var squares = []

function squareGen(amount)
{
    for(var i = 0; i < amount; i++)
    {
        x = Math.random() * window.innerWidth;
        y = Math.random() * window.innerHeight;
        squares.push({
            x: x,
            y: y,
            originX: x,
            originY: y
        })
    }
}

function squareMover(targetX, targetY, shakeFactor, paraFactor)
{
    squares.forEach((s) => {

        let normalizedVector = {
            x: Math.abs(targetX - s.originX),
            y: Math.abs(targetY - s.originY)
        }

        /*These equations are totally just me messing around. In essenece, the coordinates are
        set as the origin PLUS the shake factor which is a random number multiplied by a random number from 0-1
        and PLUS a parallax factor which is the normalized vector length from the origin to the target
        divided by the parallax factor (the multiplied by 10 is more to control it as it seemingly falls apart
        for values under 10 and only starts looking cool for values >= 20)*/
        s.x = s.originX + (Math.random() * shakeFactor) + (normalizedVector.x / (paraFactor * 10))
        s.y = s.originY + (Math.random() * shakeFactor) + (normalizedVector.y / (paraFactor * 10))
    })
}

function squareDraw()
{
    squares.forEach((s) => {
        c.fillStyle = 'lightgray'
        c.fillRect(s.x,s.y,dotSize.x, dotSize.y)
        
        c.fillStyle = "rgb(151 158 225 / 30%)";
        c.fillRect(s.x + 4,s.y + 4,dotSize.x, dotSize.y)
    })
}

//----------------------------------------------------------------------------------------
//Main-------------------------------------------------------------------------------------

squareGen(60)

setInterval(() => {
    c.clearRect(0, 0, canvas.width, canvas.height);
    squareDraw()
    squareMover(mouseProps.x, mouseProps.y, 2, 8) //paraFactor only really looks cool when > 2
}, 50)

//---------------------------------------------------------------------------------------