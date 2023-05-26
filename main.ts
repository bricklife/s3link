s3linkudk.onDisplayTextReceived(function (text) {
    basic.clearScreen()
    basic.showString(text)
})
input.onGesture(Gesture.Shake, function () {
    s3linkudk.raiseEvent(S3LinkEvent.GestureShaken)
})
s3linkudk.onDisconnected(function () {
    control.reset()
})
s3linkudk.onConnected(function () {
    connected = 1
    basic.showIcon(IconNames.Yes)
    basic.pause(1000)
    basic.clearScreen()
})
let connected = 0
connected = 0
s3linkudk.startService()
bladv.accumulateCompleteList16BitServiceID(61445)
music.playTone(440, music.beat(BeatFraction.Eighth))
music.rest(music.beat(BeatFraction.Eighth))
music.playTone(440, music.beat(BeatFraction.Eighth))
while (connected == 0) {
    basic.showString(control.deviceName())
}
basic.forever(function () {
    s3linkudk.setTilt(Rotation.Pitch, input.rotation(Rotation.Pitch) * 10)
    s3linkudk.setTilt(Rotation.Roll, input.rotation(Rotation.Roll) * 10)
    s3linkudk.setState(S3LinkEvent.ButtonA, input.buttonIsPressed(Button.A))
    s3linkudk.setState(S3LinkEvent.ButtonB, input.buttonIsPressed(Button.B))
    s3linkudk.setState(S3LinkEvent.TouchPinP0, input.pinIsPressed(TouchPin.P0))
    s3linkudk.setState(S3LinkEvent.TouchPinP1, input.pinIsPressed(TouchPin.P1))
    s3linkudk.setState(S3LinkEvent.TouchPinP2, input.pinIsPressed(TouchPin.P2))
})
