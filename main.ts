function parpadeo () {
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P4, 1)
        pins.digitalWritePin(DigitalPin.P6, 0)
        basic.pause(tiempo_amarillo * 1000)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P4, 0)
        pins.digitalWritePin(DigitalPin.P6, 0)
        basic.pause(tiempo_amarillo * 1000)
    }
}
let tiempo_amarillo = 0
let tiempo_verde = 5
tiempo_amarillo = 0.5
let tiempo_rojo = 3
led.enable(false)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P4, 0)
    pins.digitalWritePin(DigitalPin.P6, 1)
    basic.pause(tiempo_verde * 1000)
    parpadeo()
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P4, 0)
    pins.digitalWritePin(DigitalPin.P6, 0)
    basic.pause(tiempo_rojo * 1000)
})
