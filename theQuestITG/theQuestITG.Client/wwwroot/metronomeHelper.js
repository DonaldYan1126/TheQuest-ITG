let intervalId;

/*function startMetronome(bpm) {
    stopMetronome(); // 确保不会有多个定时器同时运行

    //  使用Sinewave蜂鸣
    const interval = 60000 / bpm;
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(0, audioContext.currentTime); // 设置音调频率
    oscillator.start();

    intervalId = setInterval(() => {
        gainNode.gain.setValueAtTime(1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.1);
    }, interval);

    //    调用钢4音效
    const interval = 60000 / bpm;
    const audioElement = document.getElementById("metronome-sound");

    intervalId = setInterval(() => {
        audioElement.currentTime = 0;
        audioElement.play();
    }, interval);

    
}*/

function playSound() {
    const audioElement = document.getElementById("metronome-sound");
    audioElement.currentTime = 0;
    audioElement.play();
}

function stopMetronome() {
    if (intervalId) {
        clearInterval(intervalId);
    }
}
