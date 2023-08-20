def on_button_pressed_a():
    global number
    if number:
        number = False
    else:
        number = True
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global sensor, number
    sensor += 1
    sensor = sensor % 5
    number = False
input.on_button_pressed(Button.B, on_button_pressed_b)

number = False
sensor = 0
sensor = 0
number = True
height = 0

def on_forever():
    global height
    if sensor == 0:
        if number:
            height = input.temperature() * 5 / 50
        else:
            basic.show_string("" + str(input.temperature()) + "°C")
    elif sensor == 1:
        if number:
            height = input.light_level() * 5 / 255
        else:
            basic.show_string("" + str((input.light_level())))
    elif sensor == input.sound_level():
        pass
    elif sensor == input.compass_heading():
        pass
    elif sensor == input.acceleration(Dimension.X):
        pass
    if height <= 0:
        pass
    elif height == 1:
        pass
    elif height == 2:
        pass
    elif height == 3:
        pass
    elif height == 4:
        pass
    elif height == 5:
        pass
basic.forever(on_forever)
