// musicplayer.js
const audio = document.getElementById('audio');
const audioButton = document.getElementById('audioButton');
const volumemuteButton = document.getElementById('volumemuteButton');
const audioseekbar = document.getElementById('audioseekbar')
const currentaudiotime = document.getElementById('currentaudiotime')
const maxaudiotime = document.getElementById('maxaudiotime')
const volumeslider = document.getElementById("volume");

audio.volume = 0.5

// Handle play/pause with proper Promise handling
audioButton.addEventListener('click', async () => {
    try {
        if (audio.paused) {
            await audio.play();
            audioButton.textContent = '⏸';
        } else {
            audio.pause();
            audioButton.textContent = '▶';
        }
    } catch (error) {
        console.error('Error playing audio:', error);
        alert('Unable to play audio. Please check your browser permissions.');
    }
});

// Handle muting the audio on demand
volumemuteButton.addEventListener('click', async () => {
    try {
        if (audio.muted) {
            audio.muted = false;
            volumemuteButton.textContent = '🕪';
        } else {
            audio.muted = true;
            volumemuteButton.textContent = '♫⃠';
        }
    } catch (error) {
        console.error('Error playing audio:', error);
    }
})

// Update seek bar position during playback
audio.addEventListener('timeupdate', () => {
    audioseekbar.value = (audio.currentTime / audio.duration);

    const minutesCurrent = Math.floor(audio.currentTime / 60);
    const secondsCurrent = Math.floor(audio.currentTime % 60);
    const minutesTotal = Math.floor(audio.duration / 60);
    const secondsTotal = Math.floor(audio.duration % 60);

    maxaudiotime.textContent = `${minutesTotal}:${secondsTotal.toString().padStart(2, '0')}`
    currentaudiotime.textContent = `${minutesCurrent}:${secondsCurrent.toString().padStart(2, '0')}`
});

// Handle volume changes
volumeslider.addEventListener('input', function(e) {
    // Convert percentage to decimal (0-1 range)
    const volumeLevel = e.target.value / 100;
    audio.volume = volumeLevel;
});