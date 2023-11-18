basic.forever(function () {
    if (input.lightLevel() > 200) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.UntilDone)
        basic.showString("ALEGRE")
    } else if (input.lightLevel() < 50) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Blues), music.PlaybackMode.UntilDone)
        basic.showString("TRANQUI")
    } else {
        music.stopAllSounds()
    }
})
