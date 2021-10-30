basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        pins.analogWritePin(AnalogPin.P1, 500)
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.analogWritePin(AnalogPin.P2, 500)
        pins.digitalWritePin(DigitalPin.P15, 1)
        pins.digitalWritePin(DigitalPin.P16, 0)
    } else if (input.buttonIsPressed(Button.B)) {
        pins.analogWritePin(AnalogPin.P2, 500)
        pins.digitalWritePin(DigitalPin.P15, 1)
        pins.digitalWritePin(DigitalPin.P16, 0)
    } else if (input.buttonIsPressed(Button.A)) {
        pins.analogWritePin(AnalogPin.P1, 500)
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P12, 0)
    } else {
        pins.analogWritePin(AnalogPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.analogWritePin(AnalogPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P16, 0)
    }
})
