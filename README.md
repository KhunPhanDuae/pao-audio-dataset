# pao-audio-dataset
ပအိုဝ်ႏဘာႏသာႏငေါဝ်းငွါ အဆင်ႏအဗာႏခြွဉ်းဗူႏခင်ႏလမ်း အရွီးအခိုႏ အွဉ်ႏတိဉ်ႏလꩻနွောင်ꩻဒါႏ ထောင်ထွားနွောင်ꩻအီတာႏ အဆင်ႏခြွဉ်းဗူႏသွူဩ။

🌐 **Web Demo:** [Pa'O TTS AI Generated Voice](https://khunphanduae.github.io/pao-audio-dataset/)

---

## 📌 Project Overview

ဒီ Repository သည် ပအိုဝ်းဘာသာစကားအတွက် Text-to-Speech (TTS)၊ Speech Recognition (ASR) နှင့် ဘာသာစကားဆိုင်ရာ နမူနာသုတေသနများတွင် မည်သူမဆို လွတ်လပ်စွာ ရယူအသုံးပြုနိုင်သည့် Open-Source Audio Dataset နှင့် Web Selector Interface ဖြစ်ပါသည်။

---

## 📁 Repository Structure

```text
pao-audio-dataset/
├── index.html              # Web Interface
├── script.js               # Audio Path & Player Control Logic
├── metadata.csv            # Audio Transcripts & Speaker Information
├── README.md
├── LICENSE                 # CC0 1.0 Universal License
├── corpus/                 # Plain Text Sentences (Text Corpus)
│   ├── pao_sentences_650.txt
│   ├── pao_sentences_662.txt
│   └── pao_sentences_700.txt
└── audio/                  # Audio Clips
    ├── conversational/     # ပုံမှန် စကားပြောသံ (Conversational Audio)
    ├── news/               # သတင်းဖတ်သံ (News Reading Audio)
    └── storytelling/       # ပုံပြင်ပြောသံ (Storytelling Audio)
