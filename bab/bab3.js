/* Pelajaran 3 — kosakata, pola kalimat, dan soal latihan */
registerBab(3, {
  vocab: [
    [
      "Tempat",
      [
        ["ここ", "koko", "sini"],
        ["そこ", "soko", "situ"],
        ["あそこ", "asoko", "sana"],
        ["どこ", "doko", "(di) mana"],
        ["こちら", "kochira", "sini (bentuk sopan dari ここ)"],
        ["そちら", "sochira", "situ (bentuk sopan dari そこ)"],
        ["あちら", "achira", "sana (bentuk sopan dari あそこ)"],
        ["どちら", "dochira", "mana (bentuk sopan dari どこ)"],
      ],
    ],
    [
      "Ruangan & fasilitas",
      [
        ["きょうしつ", "kyoushitsu", "ruang kelas"],
        ["しょくどう", "shokudou", "ruang makan, rumah makan, kantin"],
        ["じむしょ", "jimusho", "kantor"],
        ["かいぎしつ", "kaigishitsu", "ruang rapat"],
        ["うけつけ", "uketsuke", "meja informasi"],
        ["ロビー", "robii", "ruang tunggu, lobi"],
        ["へや", "heya", "kamar"],
        ["トイレ (おてあらい)", "toire (otearai)", "kamar kecil, toilet, W.C."],
        ["かいだん", "kaidan", "tangga"],
        ["エレベーター", "erebeetaa", "lift"],
        ["エスカレーター", "esukareetaa", "tangga berjalan, eskalator"],
        ["じどうはんばいき", "jidouhanbaiki", "mesin jual otomatis"],
      ],
    ],
    [
      "Belanja",
      [
        ["くつ", "kutsu", "sepatu"],
        ["ネクタイ", "nekutai", "dasi"],
        ["ワイン", "wain", "anggur"],
        ["うりば", "uriba", "tempat penjualan"],
        ["ちか", "chika", "bawah tanah, basement"],
        ["~かい (~がい)", "~kai (~gai)", "lantai ~, tingkat ~"],
        ["なんがい", "nangai", "lantai berapa, tingkat berapa"],
      ],
    ],
    [
      "Harga & angka",
      [
        ["~えん", "~en", "~ yen"],
        ["いくら", "ikura", "berapa"],
        ["ひゃく", "hyaku", "ratus"],
        ["せん", "sen", "ribu"],
        ["まん", "man", "puluh ribu"],
      ],
    ],
    [
      "Lainnya",
      [
        ["でんわ", "denwa", "telepon"],
        ["[お]くに", "[o]kuni", "negara, negeri"],
        ["かいしゃ", "kaisha", "perusahaan"],
        ["うち", "uchi", "rumah"],
      ],
    ],
    [
      "Ungkapan & percakapan",
      [
        ["すみません", "sumimasen", "Maaf / Permisi"],
        ["どうも", "doumo", "Terima kasih"],
        [
          "いらっしゃいませ",
          "irasshaimase",
          "Selamat datang / Bisa saya bantu? (kepada tamu yang masuk toko)",
        ],
        [
          "[~を]みせてください",
          "[~o] misete kudasai",
          "Tolong perlihatkan [~]",
        ],
        ["じゃ", "ja", "Baiklah, kalau begitu,"],
        ["[~を]ください", "[~o] kudasai", "Minta [~] / Tolong berikan [~]"],
      ],
    ],
  ],
  pola: [
    {
      p: "ここ / そこ / あそこ は N です",
      a: "Sini / situ / sana adalah N",
      n: "ここ dekat pembicara, そこ dekat lawan bicara, あそこ jauh dari keduanya.",
      ex: [
        [
          "ここは きょうしつです。",
          "koko wa kyoushitsu desu.",
          "Di sini ruang kelas.",
        ],
        [
          "そこは じむしょですか。",
          "soko wa jimusho desu ka.",
          "Apakah di situ kantor?",
        ],
        [
          "あそこは しょくどうです。",
          "asoko wa shokudou desu.",
          "Di sana kantin.",
        ],
      ],
    },
    {
      p: "N は ここ / そこ / あそこ です",
      a: "N ada di sini / situ / sana",
      n: "Pola yang sama dipakai untuk menyatakan lokasi suatu benda atau orang.",
      ex: [
        [
          "トイレは あそこです。",
          "toire wa asoko desu.",
          "Toilet ada di sana.",
        ],
        [
          "かいだんは そこです。",
          "kaidan wa soko desu.",
          "Tangga ada di situ.",
        ],
      ],
    },
    {
      p: "N は どこ ですか",
      a: "N di mana?",
      n: "どこ menanyakan tempat. Jawab dengan ここ / そこ / あそこ atau nama tempat.",
      ex: [
        [
          "エレベーターは どこですか。",
          "erebeetaa wa doko desu ka.",
          "Lift di mana?",
        ],
        [
          "ミラさんは どこですか。",
          "Mira-san wa doko desu ka.",
          "Mira di mana?",
        ],
        ["じむしょです。", "jimusho desu.", "Di kantor."],
      ],
    },
    {
      p: "こちら / そちら / あちら / どちら",
      a: "Bentuk sopan dari tempat/arah",
      n: "Lebih sopan dari ここ・そこ・あそこ・どこ. どちら juga untuk menanyakan negara/perusahaan secara sopan.",
      ex: [
        [
          "うけつけは あちらです。",
          "uketsuke wa achira desu.",
          "Meja informasi ada di sebelah sana.",
        ],
        [
          "かいぎしつは どちらですか。",
          "kaigishitsu wa dochira desu ka.",
          "Ruang rapat di sebelah mana?",
        ],
        [
          "おくには どちらですか。",
          "okuni wa dochira desu ka.",
          "Anda dari negara mana?",
        ],
      ],
    },
    {
      p: "N1 の N2 (asal / pembuat)",
      a: "N2 buatan / berasal dari N1",
      n: "N1 bisa nama negara atau perusahaan.",
      ex: [
        [
          "これは イタリアの くつです。",
          "kore wa Itaria no kutsu desu.",
          "Ini sepatu buatan Italia.",
        ],
        [
          "あれは にほんの くるまです。",
          "are wa nihon no kuruma desu.",
          "Itu mobil buatan Jepang.",
        ],
      ],
    },
    {
      p: "N は いくら ですか / ~えん",
      a: "Berapa harga N? / ~ yen",
      n: "Perhatikan bunyi khusus: 300 さんびゃく, 600 ろっぴゃく, 800 はっぴゃく, 3.000 さんぜん, 8.000 はっせん, 10.000 いちまん.",
      ex: [
        [
          "この ネクタイは いくらですか。",
          "kono nekutai wa ikura desu ka.",
          "Berapa harga dasi ini?",
        ],
        ["せんごひゃくえんです。", "sen gohyaku en desu.", "1.500 yen."],
        [
          "その くつは さんぜんえんです。",
          "sono kutsu wa sanzen en desu.",
          "Sepatu itu 3.000 yen.",
        ],
      ],
    },
    {
      p: "~かい / なんがい ですか",
      a: "Lantai ke-~ / lantai berapa?",
      n: "Bunyi berubah: いっかい (1), さんがい (3), ろっかい (6), はっかい (8), なんがい (berapa).",
      ex: [
        [
          "じむしょは さんがいです。",
          "jimusho wa sangai desu.",
          "Kantor ada di lantai 3.",
        ],
        [
          "しょくどうは なんがいですか。",
          "shokudou wa nangai desu ka.",
          "Kantin di lantai berapa?",
        ],
        ["ごかいです。", "gokai desu.", "Lantai 5."],
      ],
    },
    {
      p: "[~を] ください / みせて ください",
      a: "Minta [~] / tolong perlihatkan [~]",
      n: "Dipakai saat berbelanja. いらっしゃいませ adalah sapaan dari penjual.",
      ex: [
        ["いらっしゃいませ。", "irasshaimase.", "Selamat datang."],
        [
          "この ネクタイを みせて ください。",
          "kono nekutai o misete kudasai.",
          "Tolong perlihatkan dasi ini.",
        ],
        [
          "じゃ、これを ください。",
          "ja, kore o kudasai.",
          "Baiklah, saya minta yang ini.",
        ],
      ],
    },
  ],
  // [kalimat, terjemah, jawaban, pilihan]
  soal: [
    [
      "トイレは ＿ ですか。",
      "Toilet di mana?",
      "どこ",
      ["どこ", "だれ", "いくら", "なん"],
    ],
    [
      "＿は きょうしつです。",
      "Di sini ruang kelas.",
      "ここ",
      ["ここ", "これ", "この", "そう"],
    ],
    [
      "この ネクタイは ＿ ですか。",
      "Berapa harga dasi ini?",
      "いくら",
      ["いくら", "なん", "どこ", "だれ"],
    ],
    [
      "これは イタリア＿ くつです。",
      "Ini sepatu buatan Italia.",
      "の",
      ["の", "は", "も", "か"],
    ],
    [
      "300えん ＝ ＿ えん",
      "300 yen",
      "さんびゃく",
      ["さんびゃく", "さんひゃく", "みっひゃく", "さんぜん"],
    ],
    [
      "3,000えん ＝ ＿ えん",
      "3.000 yen",
      "さんぜん",
      ["さんぜん", "さんせん", "さんひゃく", "さんまん"],
    ],
    [
      "10,000えん ＝ ＿ えん",
      "10.000 yen",
      "いちまん",
      ["いちまん", "いちせん", "じゅうせん", "いちひゃく"],
    ],
    [
      "じむしょは ＿ です。",
      "Kantor di lantai 3.",
      "さんがい",
      ["さんがい", "さんかい", "みっかい", "さんい"],
    ],
    [
      "＿ は うけつけです。",
      "Di sini (sopan) meja informasi.",
      "こちら",
      ["こちら", "そちら", "あちら", "どちら"],
    ],
    [
      "この くつを ＿。",
      "Tolong beri saya sepatu ini.",
      "ください",
      ["ください", "どうぞ", "すみません", "いくら"],
    ],
    [
      "しょくどうは ＿ ですか。",
      "Kantin di lantai berapa?",
      "なんがい",
      ["なんがい", "いくら", "どこ", "なんさい"],
    ],
  ],
});
