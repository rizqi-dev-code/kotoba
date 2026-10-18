/* Pelajaran 2 — kosakata, pola kalimat, dan soal latihan */
registerBab(2, {
  vocab: [
    [
      "Penunjuk",
      [
        ["これ", "kore", "ini (benda yang ada di dekat pembicara)"],
        ["それ", "sore", "itu (benda yang ada di dekat lawan bicara)"],
        [
          "あれ",
          "are",
          "itu (benda yang ada jauh dari pembicara dan lawan bicara)",
        ],
        [
          "この~",
          "kono~",
          "~ ini (menerangkan benda/orang di dekat pembicara)",
        ],
        [
          "その~",
          "sono~",
          "~ itu (menerangkan benda/orang di dekat lawan bicara)",
        ],
        [
          "あの~",
          "ano~",
          "~ itu (menerangkan benda/orang yang jauh dari pembicara dan lawan bicara)",
        ],
      ],
    ],
    [
      "Alat tulis & dokumen",
      [
        ["ほん", "hon", "buku"],
        ["じしょ", "jisho", "kamus"],
        ["ざっし", "zasshi", "majalah"],
        ["しんぶん", "shinbun", "koran, surat kabar"],
        ["ノート", "nooto", "buku tulis, buku catatan"],
        ["てちょう", "techou", "buku agenda"],
        ["めいし", "meishi", "kartu nama"],
        ["カード", "kaado", "kartu"],
        ["えんぴつ", "enpitsu", "pensil"],
        ["ボールペン", "boorupen", "bolpoin"],
        [
          "シャープペンシル",
          "shaapupenshiru",
          "pensil mekanik, pensil isi ulang",
        ],
      ],
    ],
    [
      "Barang sehari-hari",
      [
        ["かぎ", "kagi", "kunci"],
        ["とけい", "tokei", "jam, arloji"],
        ["かさ", "kasa", "payung"],
        ["かばん", "kaban", "tas"],
        ["CD", "shiidii", "CD"],
        ["テレビ", "terebi", "televisi"],
        ["ラジオ", "rajio", "radio"],
        ["カメラ", "kamera", "kamera"],
        ["コンピューター", "konpyuutaa", "komputer, PC"],
        ["くるま", "kuruma", "mobil"],
        ["つくえ", "tsukue", "meja, meja tulis"],
        ["いす", "isu", "kursi"],
      ],
    ],
    [
      "Makanan, minuman & oleh-oleh",
      [
        ["チョコレート", "chokoreeto", "coklat"],
        ["コーヒー", "koohii", "kopi"],
        ["[お]みやげ", "[o]miyage", "oleh-oleh"],
      ],
    ],
    [
      "Bahasa",
      [
        ["えいご", "eigo", "bahasa Inggris"],
        ["にほんご", "nihongo", "bahasa Jepang"],
        ["~ご", "~go", "bahasa ~"],
      ],
    ],
    [
      "Lainnya",
      [
        ["なん", "nan", "apa"],
        ["そう", "sou", "begitu"],
      ],
    ],
    [
      "Ungkapan (練習C)",
      [
        [
          "あのう",
          "anou",
          "Eee... (ungkapan kepada lawan bicara dalam perasaan ragu-ragu)",
        ],
        ["えっ", "et", "Eh (ketika mendengar sesuatu di luar dugaan)"],
        ["どうぞ", "douzo", "Silakan (ketika menawarkan sesuatu)"],
        [
          "[どうも]ありがとう[ございます]",
          "[doumo] arigatou [gozaimasu]",
          "Terima kasih (banyak)",
        ],
        ["そうですか", "sou desu ka", "O, begitu / O, ya"],
        ["ちがいます", "chigaimasu", "Bukan / Tidak / Salah"],
        ["あ", "a", "O, Eh (dipakai ketika sadar)"],
      ],
    ],
    [
      "Percakapan (会話)",
      [
        [
          "これからおせわになります",
          "korekara osewa ni narimasu",
          "Mulai sekarang, saya akan meminta bantuannya",
        ],
        [
          "こちらこそ[どうぞ]よろしく[おねがいします]",
          "kochira koso [douzo] yoroshiku [onegaishimasu]",
          "Ya, sama-sama (jawaban terhadap どうぞよろしくおねがいします)",
        ],
      ],
    ],
  ],
  pola: [
    {
      p: "これ / それ / あれ は N です",
      a: "Ini / itu / itu (jauh) adalah N",
      n: "これ dekat pembicara, それ dekat lawan bicara, あれ jauh dari keduanya.",
      ex: [
        ["これは じしょです。", "kore wa jisho desu.", "Ini kamus."],
        ["それは なんですか。", "sore wa nan desu ka.", "Itu apa?"],
        ["あれは くるまです。", "are wa kuruma desu.", "Itu mobil."],
      ],
    },
    {
      p: "この / その / あの N は ~",
      a: "N ini / itu / itu (jauh)",
      n: "この・その・あの harus langsung diikuti kata benda, tidak bisa berdiri sendiri.",
      ex: [
        [
          "この かばんは ミラさんのです。",
          "kono kaban wa Mira-san no desu.",
          "Tas ini milik Mira.",
        ],
        [
          "その かさは わたしのです。",
          "sono kasa wa watashi no desu.",
          "Payung itu milik saya.",
        ],
      ],
    },
    {
      p: "N1 の N2 / N の",
      a: "N2 tentang/milik N1 ; “punya N”",
      n: "N の tanpa kata benda setelahnya berarti “milik N”.",
      ex: [
        [
          "これは にほんごの ほんです。",
          "kore wa nihongo no hon desu.",
          "Ini buku bahasa Jepang.",
        ],
        [
          "その カメラは タンさんのです。",
          "sono kamera wa Tan-san no desu.",
          "Kamera itu milik Tan.",
        ],
      ],
    },
    {
      p: "S1 か、S2 か",
      a: "Apakah S1 atau S2?",
      n: "Jawab dengan mengulang pilihan yang benar, tanpa はい/いいえ.",
      ex: [
        [
          "これは ほんですか、ざっしですか。",
          "kore wa hon desu ka, zasshi desu ka.",
          "Ini buku atau majalah?",
        ],
        ["ざっしです。", "zasshi desu.", "Majalah."],
      ],
    },
    {
      p: "そうです / ちがいます",
      a: "Benar / bukan",
      n: "Jawaban singkat untuk pertanyaan ya/tidak berpola N です か.",
      ex: [
        ["それは テレビですか。", "sore wa terebi desu ka.", "Itu televisi?"],
        ["はい、そうです。", "hai, sou desu.", "Ya, benar."],
        [
          "いいえ、ちがいます。ラジオです。",
          "iie, chigaimasu. rajio desu.",
          "Bukan. Itu radio.",
        ],
      ],
    },
    {
      p: "なんの N ですか",
      a: "N apa? / N tentang apa?",
      n: "なんの menanyakan jenis atau topik suatu benda.",
      ex: [
        [
          "それは なんの ざっしですか。",
          "sore wa nan no zasshi desu ka.",
          "Itu majalah apa?",
        ],
        [
          "くるまの ざっしです。",
          "kuruma no zasshi desu.",
          "Majalah tentang mobil.",
        ],
      ],
    },
    {
      p: "どうぞ / どうも ありがとう ございます",
      a: "Silakan / terima kasih banyak",
      n: "Dipakai saat menyerahkan sesuatu dan saat menerimanya.",
      ex: [
        [
          "これは おみやげです。どうぞ。",
          "kore wa omiyage desu. douzo.",
          "Ini oleh-oleh. Silakan.",
        ],
        [
          "どうも ありがとう ございます。",
          "doumo arigatou gozaimasu.",
          "Terima kasih banyak.",
        ],
      ],
    },
  ],
  // [kalimat, terjemah, jawaban, pilihan]
  soal: [
    [
      "＿ は じしょです。",
      "Ini kamus.",
      "これ",
      ["これ", "この", "そう", "なん"],
    ],
    [
      "＿ かばんは わたしのです。",
      "Tas ini milik saya.",
      "この",
      ["この", "これ", "ここ", "そう"],
    ],
    [
      "それは わたし＿ かさです。",
      "Itu payung saya.",
      "の",
      ["の", "も", "は", "か"],
    ],
    [
      "これは ほんですか。― いいえ、＿。",
      "Ini buku? — Bukan.",
      "ちがいます",
      ["ちがいます", "そうです", "どうぞ", "はい"],
    ],
    [
      "あれは ＿ ですか。",
      "Itu apa?",
      "なん",
      ["なん", "だれ", "どこ", "いくら"],
    ],
    [
      "これは おみやげです。＿。",
      "Ini oleh-oleh. Silakan.",
      "どうぞ",
      ["どうぞ", "あのう", "えっ", "ちがいます"],
    ],
    [
      "それは ＿ の ざっしですか。",
      "Itu majalah apa?",
      "なん",
      ["なん", "だれ", "どこ", "いくら"],
    ],
  ],
});
