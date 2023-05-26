input.onButtonPressed(Button.A, function () {
    s3linkudk.raiseEvent(S3LinkEvent.ButtonA)
})
s3linkudk.onDisplayTextReceived(function (text) {
    basic.showString(text)
})
input.onButtonPressed(Button.B, function () {
    s3linkudk.raiseEvent(S3LinkEvent.ButtonB)
})
s3linkudk.startService()
bladv.accumulateCompleteList16BitServiceID(61445)
basic.showString(control.deviceName())
basic.forever(function () {
    s3linkudk.setTilt(Rotation.Pitch, input.rotation(Rotation.Pitch))
    s3linkudk.setTilt(Rotation.Roll, input.rotation(Rotation.Roll))
})
