input.onButtonPressed(Button.A, function () {
    if (number) {
        number = false
    } else {
        number = true
    }
})
input.onButtonPressed(Button.B, function () {
    sensor += 1
    sensor = sensor % 5
    number = false
})
let number = false
let sensor = 0
sensor = 0
number = true
let height = 0
basic.forever(function () {
    if (sensor == 0) {
        if (number) {
            height = input.temperature() * 5 / 50
        } else {
            basic.showString("" + input.temperature() + "°C")
        }
    } else if (sensor == 1) {
        if (number) {
            height = input.lightLevel() * 5 / 255
        } else {
            basic.showString("" + (input.lightLevel()))
        }
    } else if (sensor == 2) {
        if (number) {
            height = input.soundLevel() * 5 / 255
        } else {
            basic.showString("" + (input.soundLevel()))
        }
    } else if (sensor == 3) {
        if (number) {
            height = Math.abs(input.compassHeading()) * 5 / 180
        } else {
            basic.showString("" + (input.compassHeading()))
        }
    } else if (sensor == 4) {
        if (number) {
            height = input.acceleration(Dimension.X) * 5 / 19.62
        } else {
            basic.showString("" + (input.acceleration(Dimension.X)))
        }
    }
    if (height <= 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (height == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
    } else if (height == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            `)
    } else if (height == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (height == 4) {
        basic.showLeds(`
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (height >= 5) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
