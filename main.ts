control.onEvent(EventBusSource.MICROBIT_ID_IO_P13, EventBusValue.MICROBIT_PIN_EVT_FALL, function () {
    radio.sendString("plus")
    POURCENTAGE = POURCENTAGE + 0.01
    basic.showNumber(POURCENTAGE)
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P15, EventBusValue.MICROBIT_PIN_EVT_FALL, function () {
    radio.sendString("moins")
    POURCENTAGE = POURCENTAGE - 0.01
    basic.showNumber(POURCENTAGE)
})
let VITESSE = 0
let direction = 0
let POURCENTAGE = 0
radio.setGroup(1)
POURCENTAGE = 0.9
basic.forever(function () {
    direction = Math.round((pins.analogReadPin(AnalogPin.P1) - 510) / 5)
    VITESSE = Math.round((pins.analogReadPin(AnalogPin.P2) - 510) / 5)
    if (direction > -10 && direction < 10) {
        radio.sendNumber(VITESSE)
    } else {
        radio.sendValue("direction", direction)
    }
})
