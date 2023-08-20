sensor = 0
number = True
height = 0

def on_forever():
    if sensor == 0:
        if sensor:
            pass
        else:
            basic.show_string("" + str(input.temperature()) + "°C")
    elif sensor == 1:
        pass
    elif sensor == 2:
        pass
    elif sensor == 3:
        pass
    elif sensor == 4:
        pass
basic.forever(on_forever)
