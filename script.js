let metadata = [];

// ၁။ စာမျက်နှာ စတက်သည်နှင့် metadata.csv ကို ဖတ်ယူထားခြင်း
fetch('metadata.csv')
    .then(response => response.text())
    .then(data => {
        const rows = data.split('\n');
        for (let i = 1; i < rows.length; i++) {
            const cols = rows[i].split(',');
            if (cols.length >= 2) {
                metadata.push({
                    filename: cols[0].trim(),
                    transcript: cols[1].trim()
                });
            }
        }
    })
    .catch(err => console.error("CSV ဖတ်မရပါ:", err));

// ၂။ စာသားရိုက်ပြီး Button နှိပ်သည့်အခါ အသံဖိုင် လိုက်ရှာခြင်း
document.getElementById("searchPlayBtn").addEventListener("click", function() {
    const inputText = document.getElementById("textInput").value.trim();
    const selectedStyle = document.getElementById("audioStyle").value;
    const statusDiv = document.getElementById("status");
    const player = document.getElementById("ttsPlayer");
    const source = document.getElementById("audioSource");

    statusDiv.innerText = "";

    if (!inputText) {
        statusDiv.innerText = "ကျေးဇူးပြု၍ စာသား ရိုက်ထည့်ပါ။";
        return;
    }

    // CSV ထဲရှိ transcript နှင့် ရိုက်ထည့်သော စာသား ကိုက်ညီမှု ရှာခြင်း
    const match = metadata.find(item => item.transcript === inputText);

    if (match) {
        // ကိုက်ညီသော ဖိုင်တွေ့ပါက ရွေးထားသော Style ထဲမှ လမ်းကြောင်း ဆက်ပေးခြင်း
        const audioPath = `audio/${selectedStyle}/${match.filename}`;
        source.src = audioPath;
        player.load();
        player.play();
        console.log("Playing:", audioPath);
    } else {
        statusDiv.innerText = "ကိုက်ညီသော အသံဖိုင် မတွေ့ပါ။";
        source.src = "";
        player.load();
    }
});
