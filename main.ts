let sensor = 0
let number = false
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
    	
    } else if (sensor == 3) {
    	
    } else if (sensor == 4) {
    	
    }
})
