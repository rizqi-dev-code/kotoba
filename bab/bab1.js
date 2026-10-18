/* Pelajaran 1 — kosakata, pola kalimat, dan soal latihan */
registerBab(1, {
  vocab: [
    [
      "Kata ganti & sapaan",
      [
        ["わたし", "watashi", "saya"],
        ["あなた", "anata", "Anda"],
        [
          "あの ひと (あの かた)",
          "ano hito (ano kata)",
          "orang itu, beliau (あの かた = bentuk sopan dari あの ひと)",
        ],
        [
          "~さん",
          "~san",
          "Sdr. ~, Bapak ~, Ibu ~ (akhiran sopan di belakang nama orang)",
        ],
        [
          "~ちゃん",
          "~chan",
          "akhiran pengganti ~さん untuk nama anak laki-laki/perempuan",
        ],
        [
          "~じん",
          "~jin",
          "orang ~ (akhiran warga negara), mis. アメリカじん = orang Amerika Serikat",
        ],
        [
          "だれ (どなた)",
          "dare (donata)",
          "siapa (どなた = bentuk sopan dari だれ)",
        ],
      ],
    ],
    [
      "Profesi",
      [
        [
          "せんせい",
          "sensei",
          "guru, dosen (tidak dipakai untuk menyebut pekerjaan sendiri)",
        ],
        ["きょうし", "kyoushi", "guru, dosen"],
        ["がくせい", "gakusei", "mahasiswa"],
        ["かいしゃいん", "kaishain", "karyawan perusahaan"],
        [
          "しゃいん",
          "shain",
          "karyawan perusahaan (dipakai dengan nama perusahaan), mis. IMCの しゃいん",
        ],
        ["ぎんこういん", "ginkouin", "pegawai bank"],
        ["いしゃ", "isha", "dokter"],
        ["けんきゅうしゃ", "kenkyuusha", "peneliti"],
      ],
    ],
    [
      "Tempat & umur",
      [
        ["だいがく", "daigaku", "universitas"],
        ["びょういん", "byouin", "rumah sakit"],
        ["~さい", "~sai", "~ tahun (umur)"],
        [
          "なんさい (おいくつ)",
          "nansai (oikutsu)",
          "umur berapa (おいくつ = bentuk sopan)",
        ],
      ],
    ],
    [
      "Ya & tidak",
      [
        ["はい", "hai", "ya"],
        ["いいえ", "iie", "tidak, bukan"],
      ],
    ],
    [
      "Ungkapan (練習C)",
      [
        [
          "はじめまして",
          "hajimemashite",
          "Perkenalkan (salam saat pertama kali berkenalan)",
        ],
        ["~から きました", "~kara kimashita", "datang dari ~, berasal dari ~"],
        [
          "[どうぞ] よろしく [おねがいします]",
          "[douzo] yoroshiku [onegaishimasu]",
          "Salam kenal (ucapan terakhir saat perkenalan diri)",
        ],
        [
          "しつれいですが",
          "shitsurei desu ga",
          "permisi, maaf (saat bertanya hal pribadi seperti nama, alamat)",
        ],
        ["おなまえは?", "onamae wa?", "Siapa namanya?"],
        [
          "こちらは ~さんです",
          "kochira wa ~san desu",
          "Ini Bapak ~ / Ini Ibu, Sdr. ~",
        ],
      ],
    ],
  ],
  pola: [
    {
      p: "N1 は N2 です",
      a: "N1 adalah N2",
      n: "は dibaca “wa” (partikel topik). です menutup kalimat dengan sopan.",
      ex: [
        [
          "わたしは がくせいです。",
          "watashi wa gakusei desu.",
          "Saya adalah pelajar.",
        ],
        [
          "タンさんは エンジニアです。",
          "Tan-san wa enjinia desu.",
          "Tan adalah insinyur.",
        ],
      ],
    },
    {
      p: "N1 は N2 じゃ ありません",
      a: "N1 bukan N2",
      n: "Bentuk tertulis/formal: ではありません.",
      ex: [
        [
          "わたしは せんせいじゃ ありません。",
          "watashi wa sensei ja arimasen.",
          "Saya bukan guru.",
        ],
        [
          "あの ひとは いしゃじゃ ありません。",
          "ano hito wa isha ja arimasen.",
          "Orang itu bukan dokter.",
        ],
      ],
    },
    {
      p: "S か",
      a: "Kalimat tanya (ya/tidak)",
      n: "Tambahkan か di akhir kalimat. Jawab dengan はい / いいえ.",
      ex: [
        [
          "あなたは かいしゃいんですか。",
          "anata wa kaishain desu ka.",
          "Apakah Anda karyawan perusahaan?",
        ],
        [
          "はい、かいしゃいんです。",
          "hai, kaishain desu.",
          "Ya, saya karyawan perusahaan.",
        ],
        [
          "いいえ、かいしゃいんじゃ ありません。",
          "iie, kaishain ja arimasen.",
          "Bukan, saya bukan karyawan perusahaan.",
        ],
      ],
    },
    {
      p: "N も",
      a: "N juga",
      n: "も menggantikan は ketika informasinya sama dengan kalimat sebelumnya.",
      ex: [
        [
          "ミラさんは がくせいです。タンさんも がくせいです。",
          "Mira-san wa gakusei desu. Tan-san mo gakusei desu.",
          "Mira pelajar. Tan juga pelajar.",
        ],
      ],
    },
    {
      p: "N1 の N2",
      a: "N2 milik/bagian dari N1",
      n: "の menghubungkan dua kata benda (afiliasi: universitas, perusahaan, dll).",
      ex: [
        [
          "わたしは ジャカルタだいがくの がくせいです。",
          "watashi wa Jakaruta daigaku no gakusei desu.",
          "Saya mahasiswa Universitas Jakarta.",
        ],
        [
          "タンさんは さくらびょういんの いしゃです。",
          "Tan-san wa Sakura byouin no isha desu.",
          "Tan adalah dokter di Rumah Sakit Sakura.",
        ],
      ],
    },
    {
      p: "だれ / なんさい ですか",
      a: "Siapa? / Berapa umur?",
      n: "Kata tanya menggantikan bagian yang ditanyakan, tanpa か tambahan di tengah kalimat.",
      ex: [
        [
          "あの ひとは だれですか。",
          "ano hito wa dare desu ka.",
          "Siapa orang itu?",
        ],
        [
          "ミラさんは なんさいですか。",
          "Mira-san wa nan-sai desu ka.",
          "Mira umur berapa?",
        ],
        ["にじゅっさいです。", "nijussai desu.", "Dua puluh tahun."],
      ],
    },
    {
      p: "N じん / ~さん",
      a: "orang dari negara N / sapaan hormat",
      n: "Jangan pakai さん untuk diri sendiri.",
      ex: [
        [
          "わたしは インドネシアじんです。",
          "watashi wa Indoneshiajin desu.",
          "Saya orang Indonesia.",
        ],
      ],
    },
  ],
  // [kalimat, terjemah, jawaban, pilihan]
  soal: [
    [
      "わたし ＿ がくせいです。",
      "Saya (adalah) pelajar.",
      "は",
      ["は", "の", "も", "か"],
    ],
    [
      "ミラさんは いしゃです。タンさん＿ いしゃです。",
      "Tan juga dokter.",
      "も",
      ["も", "は", "の", "か"],
    ],
    [
      "あなたは かいしゃいんです＿。",
      "Apakah Anda karyawan perusahaan?",
      "か",
      ["か", "は", "も", "の"],
    ],
    [
      "わたしは ジャカルタだいがく＿ がくせいです。",
      "Saya mahasiswa Universitas Jakarta.",
      "の",
      ["の", "も", "は", "か"],
    ],
    [
      "わたしは せんせい＿ ありません。",
      "Saya bukan guru.",
      "じゃ",
      ["じゃ", "は", "も", "か"],
    ],
    [
      "あの ひとは ＿ ですか。",
      "Siapa orang itu?",
      "だれ",
      ["だれ", "なん", "どこ", "いくら"],
    ],
    [
      "わたしは インドネシア＿ です。",
      "Saya orang Indonesia.",
      "じん",
      ["じん", "さん", "さい", "ご"],
    ],
    [
      "タン＿ は エンジニアです。",
      "Tuan Tan adalah insinyur.",
      "さん",
      ["さん", "じん", "さい", "ご"],
    ],
  ],
});
