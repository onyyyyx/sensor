sensor = 0
number = True
height = 0

def on_forever():
    global height
    if sensor == 0:
        if number:
            height = input.temperature() * 5 / 50
        else:
            basic.show_string("" + str(input.temperature()) + "C")
    elif sensor == 1:
        if number:
            height = input.light_level() * 5 / 255
        else:
            basic.show_string("" + str((input.light_level())))
    elif sensor == 2:
        if number:
            height = input.sound_level() * 5 / 255
        else:
            basic.show_string("" + str((input.sound_level())))
    elif sensor == 3:
        if number:
            height = abs(input.compass_heading()) * 5 / 180
        else:
            basic.show_string("" + str((input.compass_heading())))
    elif sensor == 4:
        if number:
            height = input.acceleration(Dimension.X) * 5 / 19.62
        else:
            basic.show_string("" + str((input.acceleration(Dimension.X))))
basic.forever(on_forever)

def on_forever2():
    global number, sensor
    if input.button_is_pressed(Button.B):
        if number:
            number = False
        else:
            number = True
    if input.button_is_pressed(Button.A):
        sensor += 1
        sensor = sensor % 5
        number = True
    while input.button_is_pressed(Button.A) or input.button_is_pressed(Button.B):
        pass
basic.forever(on_forever2)

def on_forever3():
    if number:
        if height <= 0:
            basic.show_leds("""
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                """)
        elif height == 1:
            basic.show_leds("""
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                # # # # #
                """)
        elif height == 2:
            basic.show_leds("""
                . . . . .
                . . . . .
                . . . . .
                # # # # #
                # # # # #
                """)
        elif height == 3:
            basic.show_leds("""
                . . . . .
                . . . . .
                # # # # #
                # # # # #
                # # # # #
                """)
        elif height == 4:
            basic.show_leds("""
                . . . . .
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                """)
        elif height >= 5:
            basic.show_leds("""
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                """)
basic.forever(on_forever3)
