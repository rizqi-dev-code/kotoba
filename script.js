var D = {
  1: [
    [
      "Kata ganti & orang",
      [
        ["わたし", "watashi", "saya"],
        ["あなた", "anata", "Anda"],
        ["あのひと / あのかた", "ano hito / ano kata", "orang itu / beliau"],
        ["~さん", "~san", "Tuan/Nyonya/Saudara"],
        ["だれ / どなた", "dare / donata", "siapa / siapa (sopan)"],
      ],
    ],
    [
      "Profesi",
      [
        ["せんせい", "sensei", "guru (untuk orang lain)"],
        ["きょうし", "kyoushi", "guru (untuk diri sendiri)"],
        ["がくせい", "gakusei", "pelajar/mahasiswa"],
        ["かいしゃいん", "kaishain", "karyawan perusahaan"],
        ["ぎんこういん", "ginkouin", "pegawai bank"],
        ["いしゃ", "isha", "dokter"],
        ["エンジニア", "enjinia", "insinyur"],
      ],
    ],
    [
      "Lainnya",
      [
        ["だいがく", "daigaku", "universitas"],
        ["びょういん", "byouin", "rumah sakit"],
        ["~さい", "~sai", "~ tahun (umur)"],
        ["~じん", "~jin", "orang (negara), mis. インドネシアじん"],
        ["はい / いいえ", "hai / iie", "ya / bukan"],
        ["はじめまして", "hajimemashite", "salam kenal"],
        [
          "どうぞよろしくおねがいします",
          "douzo yoroshiku onegaishimasu",
          "mohon bantuannya",
        ],
      ],
    ],
  ],
  2: [
    [
      "Penunjuk",
      [
        ["これ / それ / あれ", "kore / sore / are", "ini / itu / itu (jauh)"],
        [
          "この~ / その~ / あの~",
          "kono~ / sono~ / ano~",
          "~ ini / ~ itu / ~ itu (jauh)",
        ],
      ],
    ],
    [
      "Benda",
      [
        ["ほん", "hon", "buku"],
        ["じしょ", "jisho", "kamus"],
        ["ざっし", "zasshi", "majalah"],
        ["しんぶん", "shinbun", "koran"],
        ["ノート", "nooto", "buku catatan"],
        ["てちょう", "techou", "agenda"],
        ["めいし", "meishi", "kartu nama"],
        ["かぎ", "kagi", "kunci"],
        ["かばん", "kaban", "tas"],
        ["くるま", "kuruma", "mobil"],
        ["つくえ", "tsukue", "meja"],
        ["いす", "isu", "kursi"],
        ["テレビ", "terebi", "televisi"],
        ["カメラ", "kamera", "kamera"],
        ["コンピューター", "konpyuutaa", "komputer"],
      ],
    ],
    [
      "Lainnya",
      [
        ["なん", "nan", "apa"],
        [
          "そうです / そうですか",
          "sou desu / sou desu ka",
          "benar / oh begitu",
        ],
        ["ちがいます", "chigaimasu", "bukan / salah"],
        ["どうぞ", "douzo", "silakan"],
        [
          "どうもありがとうございます",
          "doumo arigatou gozaimasu",
          "terima kasih banyak",
        ],
        ["にほんご / えいご", "nihongo / eigo", "bahasa Jepang / Inggris"],
      ],
    ],
  ],
  3: [
    [
      "Tempat",
      [
        ["ここ / そこ / あそこ", "koko / soko / asoko", "sini / situ / sana"],
        ["どこ", "doko", "di mana"],
        [
          "こちら / そちら / あちら / どちら",
          "kochira / sochira / achira / dochira",
          "arah/tempat versi sopan",
        ],
        ["きょうしつ", "kyoushitsu", "ruang kelas"],
        ["しょくどう", "shokudou", "kantin"],
        ["じむしょ", "jimusho", "kantor"],
        ["かいぎしつ", "kaigishitsu", "ruang rapat"],
        ["うけつけ", "uketsuke", "resepsionis"],
        ["へや", "heya", "kamar/ruangan"],
        ["トイレ", "toire", "toilet"],
        ["かいだん", "kaidan", "tangga"],
        [
          "エレベーター / エスカレーター",
          "erebeetaa / esukareetaa",
          "lift / eskalator",
        ],
      ],
    ],
    [
      "Harga & angka",
      [
        ["いくら", "ikura", "berapa harga"],
        ["~えん", "~en", "~ yen"],
        ["ひゃく / せん / まん", "hyaku / sen / man", "100 / 1.000 / 10.000"],
        ["~かい / なんがい", "~kai / nangai", "lantai ke-~ / lantai berapa"],
      ],
    ],
    [
      "Lainnya",
      [
        ["くに", "kuni", "negara"],
        ["うち", "uchi", "rumah"],
        ["でんわ", "denwa", "telepon"],
      ],
    ],
  ],
};
var $ = function (i) {
    return document.getElementById(i);
  },
  cur = "1",
  hide = false,
  KEY = "kotoba-mode";
try {
  hide = localStorage.getItem(KEY) === "1";
} catch (e) {}
var tabs = [
  ["1", "Bab 1"],
  ["2", "Bab 2"],
  ["3", "Bab 3"],
  ["all", "Semua"],
];
function esc(s) {
  return s.replace(/[&<>"]/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
  });
}
function render() {
  var q = $("q").value.trim().toLowerCase(),
    out = "",
    n = 0,
    babs = cur === "all" ? ["1", "2", "3"] : [cur];
  $("list").className = hide ? "hide" : "";
  babs.forEach(function (b) {
    D[b].forEach(function (g) {
      var rows = g[1].filter(function (r) {
        return !q || r.join(" ").toLowerCase().indexOf(q) > -1;
      });
      if (!rows.length) return;
      out +=
        "<h2>" +
        (cur === "all" ? "Bab " + b + " · " : "") +
        esc(g[0]) +
        "</h2><ul>" +
        rows
          .map(function (r) {
            n++;
            return (
              '<li><span><span class="jp" lang="ja">' +
              esc(r[0]) +
              '</span><span class="ro">' +
              esc(r[1]) +
              '</span></span><button class="id">' +
              esc(r[2]) +
              "</button></li>"
            );
          })
          .join("") +
        "</ul>";
    });
  });
  $("list").innerHTML =
    out ||
    '<p class="empty">Tidak ada kata yang cocok. Coba kata kunci lain.</p>';
  $("sub").textContent =
    n + " kata" + (hide ? " · ketuk arti untuk membuka" : "");
  $("mode").setAttribute("aria-pressed", hide);
  $("mode").textContent = hide ? "Tampilkan arti" : "Mode hafalan";
  $("tabs").innerHTML = tabs
    .map(function (t) {
      return (
        '<button data-t="' +
        t[0] +
        '"' +
        (t[0] === cur ? ' aria-current="true"' : "") +
        ">" +
        t[1] +
        "</button>"
      );
    })
    .join("");
}
$("tabs").onclick = function (e) {
  var t = e.target.dataset.t;
  if (t) {
    cur = t;
    render();
    window.scrollTo(0, 0);
  }
};
$("q").oninput = render;
$("mode").onclick = function () {
  hide = !hide;
  try {
    localStorage.setItem(KEY, hide ? "1" : "0");
  } catch (e) {}
  render();
};
$("list").onclick = function (e) {
  if (e.target.classList.contains("id")) e.target.classList.toggle("show");
};
render();
(function () {
  var sp = $("splash"),
    t0 = Date.now(),
    done = false,
    min = window.matchMedia("(prefers-reduced-motion:reduce)").matches
      ? 300
      : 1800;
  function hideSplash() {
    if (done) return;
    done = true;
    setTimeout(
      function () {
        sp.classList.add("done");
        document.body.classList.remove("loading");
        setTimeout(function () {
          sp.remove();
        }, 700);
      },
      Math.max(0, min - (Date.now() - t0)),
    );
  }
  var fonts =
    document.fonts && document.fonts.ready
      ? document.fonts.ready
      : Promise.resolve();
  fonts.then(hideSplash);
  setTimeout(hideSplash, 3500);
})();
if ("serviceWorker" in navigator)
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("sw.js").catch(function () {});
  });
