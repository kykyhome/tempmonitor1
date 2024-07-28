basic.showIcon(IconNames.Happy)
basic.pause(1000)
basic.forever(function () {
    basic.showString("" + (input.temperature()))
    if (30 == input.temperature()) {
        music.play(music.createSoundExpression(WaveShape.Sine, 1600, 5000, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    } else {
        music.stopAllSounds()
    }
    basic.showString("" + (input.temperature()))
    if (31 == input.temperature()) {
        music.play(music.createSoundExpression(
        WaveShape.Square,
        1600,
        1,
        255,
        0,
        200,
        SoundExpressionEffect.None,
        InterpolationCurve.Curve
        ), music.PlaybackMode.UntilDone)
        music.play(music.createSoundExpression(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    } else {
        music.stopAllSounds()
    }
    basic.showString("" + (input.temperature()))
    if (32 == input.temperature()) {
        music.play(music.createSoundExpression(WaveShape.Sine, 1600, 5000, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        music.play(music.createSoundExpression(WaveShape.Sine, 1600, 5000, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        music.play(music.createSoundExpression(WaveShape.Sine, 1600, 5000, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    } else {
        music.stopAllSounds()
    }
    basic.showString("" + (input.temperature()))
    if (33 == input.temperature()) {
        music.play(music.createSoundExpression(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
    } else {
        music.stopAllSounds()
    }
    basic.showString("" + (input.temperature()))
    if (34 == input.temperature()) {
        music.play(music.createSoundExpression(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
    } else {
        music.stopAllSounds()
    }
    basic.showString("" + (input.temperature()))
    if (35 == input.temperature()) {
        music.play(music.createSoundExpression(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
    } else {
        music.stopAllSounds()
    }
    basic.showString("" + (input.temperature()))
    if (36 == input.temperature()) {
        music.play(music.createSoundExpression(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
    } else {
        music.stopAllSounds()
    }
})
