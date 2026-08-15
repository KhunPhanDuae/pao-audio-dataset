document.getElementById("playBtn").addEventListener("click", function() {
    const fileName = document.getElementById("audioFile").value;
    const style = document.getElementById("audioStyle").value;
    const player = document.getElementById("ttsPlayer");
    const source = document.getElementById("audioSource");

    // Dynamic Path Construction: audio/<style>/<filename>
    const audioPath = `audio/${style}/${fileName}`;

    // Update Source and Play Audio
    source.src = audioPath;
    player.load();
    player.play();

    console.log("Loaded Audio Path:", audioPath);
});
