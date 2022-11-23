input.onButtonPressed(Button.A, function () {
    if (x == 0 && y == 0) {
        return;
    }
    led.toggle(x, y)
    x += -1
    if (x < 0) {
        x = 4
        y += -1
    }
    led.plot(x, y)
})
input.onButtonPressed(Button.B, function () {
    if (x == 4 && y == 4) {
        return;
    }
    led.toggle(x, y)
    x += 1
    if (x > 4) {
        x = 0
        y += 1
    }
    led.plot(x, y)
})
let y = 0
let x = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
x = 2
y = 2
basic.forever(function () {
	
})
