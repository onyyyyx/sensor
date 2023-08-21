let height = 0
let sensor = 0
let number = true
basic.forever(function () {
    if (sensor == 0) {
        if (number) {
            height = input.temperature() * 5 / 50
        } else {
            basic.showString("" + input.temperature() + "C")
        }
    } else if (sensor == 1) {
        if (number) {
            height = input.lightLevel() * 5 / 255
        } else {
            basic.showString("" + input.lightLevel())
        }
    } else if (sensor == 2) {
        if (number) {
            height = input.soundLevel() * 5 / 255
        } else {
            basic.showString("" + input.soundLevel())
        }
    } else if (sensor == 3) {
        if (number) {
            height = Math.abs(input.compassHeading()) * 5 / 180
        } else {
            basic.showString("" + input.compassHeading())
        }
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        if (number) {
            number = false
        } else {
            number = true
        }
    }
    if (input.buttonIsPressed(Button.A)) {
        sensor += 1
        sensor = sensor % 4
        number = true
    }
    while (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
    	
    }
})
basic.forever(function () {
    if (number) {
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
    }
})
