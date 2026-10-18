/* Pelajaran 4 — kosakata, pola kalimat, dan soal latihan */
registerBab(4, {
  vocab: [
    [
      "Kata kerja",
      [
        ["おきます", "okimasu", "bangun"],
        ["ねます", "nemasu", "tidur"],
        ["はたらきます", "hatarakimasu", "bekerja"],
        ["やすみます", "yasumimasu", "beristirahat, libur"],
        ["べんきょうします", "benkyou shimasu", "belajar"],
        ["おわります", "owarimasu", "selesai"],
      ],
    ],
    [
      "Tempat",
      [
        ["デパート", "depaato", "toserba"],
        ["ぎんこう", "ginkou", "bank"],
        ["ゆうびんきょく", "yuubinkyoku", "kantor pos"],
        ["としょかん", "toshokan", "perpustakaan"],
        ["びじゅつかん", "bijutsukan", "gedung kesenian"],
      ],
    ],
    [
      "Jam & menit",
      [
        ["いま", "ima", "sekarang"],
        ["~じ", "~ji", "jam ~, pukul ~"],
        ["~ふん (~ぷん)", "~fun (~pun)", "~ menit"],
        ["はん", "han", "setengah"],
        ["なんじ", "nanji", "jam berapa, pukul berapa"],
        ["なんぷん", "nanpun", "berapa menit"],
        ["ごぜん", "gozen", "a.m. (sebelum jam 12 siang)"],
        ["ごご", "gogo", "p.m. (setelah jam 12 siang)"],
      ],
    ],
    [
      "Waktu",
      [
        ["あさ", "asa", "pagi"],
        ["ひる", "hiru", "siang"],
        ["ばん (よる)", "ban (yoru)", "malam"],
        ["おととい", "ototoi", "dua hari yang lalu, kemarin lusa"],
        ["きのう", "kinou", "kemarin"],
        ["きょう", "kyou", "hari ini"],
        ["あした", "ashita", "besok"],
        ["あさって", "asatte", "lusa"],
        ["けさ", "kesa", "pagi ini, tadi pagi"],
        ["こんばん", "konban", "malam ini, nanti malam"],
        ["やすみ", "yasumi", "istirahat, cuti, libur"],
        ["ひるやすみ", "hiruyasumi", "istirahat siang"],
        ["まいあさ", "maiasa", "setiap pagi"],
        ["まいばん", "maiban", "setiap malam"],
        ["まいにち", "mainichi", "setiap hari"],
      ],
    ],
    [
      "Hari",
      [
        ["げつようび", "getsuyoubi", "hari Senin"],
        ["かようび", "kayoubi", "hari Selasa"],
        ["すいようび", "suiyoubi", "hari Rabu"],
        ["もくようび", "mokuyoubi", "hari Kamis"],
        ["きんようび", "kinyoubi", "hari Jumat"],
        ["どようび", "doyoubi", "hari Sabtu"],
        ["にちようび", "nichiyoubi", "hari Minggu"],
        ["なんようび", "nanyoubi", "hari apa"],
      ],
    ],
    [
      "Kegiatan",
      [
        ["しけん", "shiken", "ujian"],
        ["かいぎ", "kaigi", "rapat (~を します: mengadakan rapat)"],
        ["えいが", "eiga", "film"],
      ],
    ],
    [
      "Penghubung",
      [
        ["~から", "~kara", "dari ~"],
        ["~まで", "~made", "sampai ~"],
        ["~と ~", "~to ~", "~ dan ~ (menyambung kata benda)"],
      ],
    ],
    [
      "Ungkapan & percakapan",
      [
        [
          "たいへんですね",
          "taihen desu ne",
          "O, berat ya (menyatakan simpati atas kesusahan lawan bicara)",
        ],
        ["ばんごう", "bangou", "nomor"],
        ["なんばん", "nanban", "nomor berapa"],
        ["そちら", "sochira", "di situ"],
      ],
    ],
  ],
  pola: [
    {
      p: "いま ~じ ~ふん です",
      a: "Sekarang pukul ~ lewat ~ menit",
      n: "Jam: いちじ, にじ, さんじ, よじ, ごじ, ろくじ, しちじ, はちじ, くじ, じゅうじ. Menit: いっぷん, にふん, さんぷん, よんぷん, ごふん, ろっぷん, ななふん, はっぷん, きゅうふん, じゅっぷん.",
      ex: [
        ["いま なんじですか。", "ima nanji desu ka.", "Sekarang pukul berapa?"],
        [
          "にじ じゅっぷんです。",
          "niji juppun desu.",
          "Pukul dua lewat sepuluh menit.",
        ],
        [
          "ニューヨークは いま なんじですか。",
          "Nyuuyooku wa ima nanji desu ka.",
          "Sekarang di New York pukul berapa?",
        ],
        [
          "よる じゅうにじ じゅっぷんです。",
          "yoru juuniji juppun desu.",
          "Pukul dua belas malam lewat sepuluh menit.",
        ],
        [
          "いま よじ ごふんです。",
          "ima yoji gofun desu.",
          "Sekarang pukul empat lewat lima menit.",
        ],
      ],
    },
    {
      p: "N (waktu) に V ます",
      a: "Melakukan V pada pukul/hari ~",
      n: "Partikel に dipakai setelah waktu yang spesifik (jam, hari). Tidak dipakai setelah きのう, きょう, あした, まいあさ, dll.",
      ex: [
        [
          "まいあさ ろくじに おきます。",
          "maiasa rokuji ni okimasu.",
          "Saya bangun pukul enam setiap pagi.",
        ],
        [
          "まいばん なんじに ねますか。",
          "maiban nanji ni nemasu ka.",
          "Setiap malam tidur pukul berapa?",
        ],
        [
          "じゅういちじに ねます。",
          "juuichiji ni nemasu.",
          "Tidur pukul sebelas.",
        ],
      ],
    },
    {
      p: "V ます / ません / ました / ませんでした",
      a: "Sekarang-akan / tidak / lampau / lampau negatif",
      n: "ます = melakukan (kebiasaan/akan), ません = tidak melakukan, ました = telah melakukan, ませんでした = tidak melakukan (lampau).",
      ex: [
        [
          "わたしは きのう べんきょうしました。",
          "watashi wa kinou benkyou shimashita.",
          "Saya belajar kemarin.",
        ],
        [
          "どようびに はたらきますか。",
          "doyoubi ni hatarakimasu ka.",
          "Apakah hari Sabtu bekerja?",
        ],
        [
          "いいえ、はたらきません。",
          "iie, hatarakimasen.",
          "Tidak, tidak bekerja.",
        ],
        [
          "きのう べんきょうしましたか。",
          "kinou benkyou shimashita ka.",
          "Kemarin belajar?",
        ],
        [
          "いいえ、べんきょうしませんでした。",
          "iie, benkyou shimasen deshita.",
          "Tidak, tidak belajar.",
        ],
      ],
    },
    {
      p: "N1 から N2 まで",
      a: "Dari N1 sampai N2",
      n: "Bisa dipakai untuk waktu maupun tempat.",
      ex: [
        [
          "アップルぎんこうは なんじから なんじまでですか。",
          "Appuru ginkou wa nanji kara nanji made desu ka.",
          "Bank Apple dari pukul berapa sampai pukul berapa?",
        ],
        [
          "ごぜん くじから ごご さんじまでです。",
          "gozen kuji kara gogo sanji made desu.",
          "Dari pukul sembilan pagi sampai pukul tiga sore.",
        ],
        [
          "まいにち なんじから なんじまで べんきょうしますか。",
          "mainichi nanji kara nanji made benkyou shimasu ka.",
          "Setiap hari belajar dari pukul berapa sampai pukul berapa?",
        ],
      ],
    },
    {
      p: "N1 と N2",
      a: "N1 dan N2",
      n: "と hanya menyambung kata benda.",
      ex: [
        [
          "やすみは なんようびですか。",
          "yasumi wa nanyoubi desu ka.",
          "Liburnya hari apa?",
        ],
        [
          "どようびと にちようびです。",
          "doyoubi to nichiyoubi desu.",
          "Hari Sabtu dan hari Minggu.",
        ],
      ],
    },
    {
      p: "~ですね",
      a: "Ungkapan simpati / persetujuan",
      n: "ね di akhir kalimat meminta persetujuan atau menunjukkan simpati.",
      ex: [
        [
          "まいにち ごじまで はたらきます。",
          "mainichi goji made hatarakimasu.",
          "Setiap hari saya bekerja sampai pukul lima.",
        ],
        ["たいへんですね。", "taihen desu ne.", "O, berat ya."],
      ],
    },
  ],
  // [kalimat, terjemah, jawaban, pilihan]
  soal: [
    [
      "いま _ ですか。",
      "Sekarang jam berapa?",
      "なんじ",
      ["なんじ", "なんぷん", "なんようび", "なんばん"],
    ],
    [
      "まいあさ ろくじ_ おきます。",
      "Setiap pagi bangun pukul enam.",
      "に",
      ["に", "は", "と", "まで"],
    ],
    [
      "わたしは きのう べんきょう_。",
      "Saya belajar kemarin.",
      "しました",
      ["しました", "します", "しません", "しませんでした"],
    ],
    [
      "どようびに はたらき_。",
      "Hari Sabtu tidak bekerja.",
      "ません",
      ["ません", "ました", "ます", "ませんでした"],
    ],
    [
      "きのう べんきょうしましたか。― いいえ、べんきょう_。",
      "Kemarin belajar? — Tidak, tidak belajar.",
      "しませんでした",
      ["しませんでした", "しません", "しました", "します"],
    ],
    [
      "ぎんこうは くじ_ さんじまでです。",
      "Bank dari pukul sembilan sampai pukul tiga.",
      "から",
      ["から", "まで", "に", "と"],
    ],
    [
      "ぎんこうは くじから さんじ_ です。",
      "Bank dari pukul sembilan sampai pukul tiga.",
      "まで",
      ["まで", "から", "に", "と"],
    ],
    [
      "やすみは どようび_ にちようびです。",
      "Libur hari Sabtu dan hari Minggu.",
      "と",
      ["と", "に", "から", "まで"],
    ],
    [
      "いま _ です。(04.00)",
      "Sekarang pukul empat.",
      "よじ",
      ["よじ", "よんじ", "しじ", "よじゅう"],
    ],
    [
      "いま _ です。(09.00)",
      "Sekarang pukul sembilan.",
      "くじ",
      ["くじ", "きゅうじ", "ここのじ", "くうじ"],
    ],
    [
      "いま よじ _ です。(04.05)",
      "Sekarang pukul empat lewat lima menit.",
      "ごふん",
      ["ごふん", "ごぷん", "いつふん", "ごっぷん"],
    ],
    [
      "いま にじ _ です。(02.10)",
      "Sekarang pukul dua lewat sepuluh menit.",
      "じゅっぷん",
      ["じゅっぷん", "じゅうふん", "じっふん", "じゅうぷん"],
    ],
    [
      "まいばん じゅういちじに _。",
      "Setiap malam tidur pukul sebelas.",
      "ねます",
      ["ねます", "おきます", "はたらきます", "おわります"],
    ],
  ],
});
