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
  ["4", "Bab 4"],
  ["all", "Semua"],
];
function esc(s) {
  return s.replace(/[&<>"]/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
  });
}
var D = {},
  P = {},
  PQ = [],
  LOADED = {},
  LOADING = {},
  ALL = ["1", "2", "3", "4"];
/* Setiap bab dimuat dari bab/babN.js hanya saat dibutuhkan */
function registerBab(n, o) {
  D[n] = o.vocab;
  P[n] = o.pola;
  o.soal.forEach(function (x) {
    PQ.push([String(n)].concat(x));
  });
  LOADED[n] = 1;
}
function loadBab(n, cb) {
  if (LOADED[n]) return cb();
  if (LOADING[n]) return LOADING[n].push(cb);
  LOADING[n] = [cb];
  var s = document.createElement("script");
  s.src = "bab/bab" + n + ".js";
  s.onload = function () {
    var q = LOADING[n];
    delete LOADING[n];
    q.forEach(function (f) {
      f();
    });
  };
  s.onerror = function () {
    delete LOADING[n];
    $("list").innerHTML =
      '<p class="empty">Gagal memuat Bab ' +
      n +
      ". Periksa koneksi lalu coba lagi.</p>";
  };
  document.head.appendChild(s);
}
function ensure(list, cb) {
  var left = list.length;
  if (!left) return cb();
  list.forEach(function (n) {
    loadBab(n, function () {
      if (--left === 0) cb();
    });
  });
}
function needFor() {
  if (cur === "pola") return [pb];
  if (cur === "kuis") return [];
  if (cur === "all") return ALL;
  return [cur];
}
var pb = "1",
  K = {
    mode: "menu",
    bab: "1",
    type: "jp-id",
    qs: [],
    i: 0,
    score: 0,
    wrong: [],
    sel: -1,
  };
(function () {
  var st = document.createElement("style");
  st.textContent =
    "#tabs{display:block;overflow:visible}" +
    ".nav1{display:flex;gap:4px;padding:4px;border-radius:14px;background:rgba(128,128,128,.15)}" +
    "#tabs .n1{flex:1;width:auto;min-width:0;font:inherit;font-weight:600;color:inherit;background:transparent;border:0;border-radius:10px;padding:10px 6px;min-height:42px;box-shadow:none}" +
    "#tabs .n1[aria-current=true]{background:rgba(120,120,255,.9);color:#fff}" +
    ".nav2{display:flex;gap:8px;margin-top:10px;overflow-x:auto;-webkit-overflow-scrolling:touch;padding-bottom:2px}" +
    "#tabs .n2{flex:0 0 auto;width:auto;font:inherit;font-size:.9rem;color:inherit;background:transparent;border:1px solid rgba(128,128,128,.4);border-radius:999px;padding:6px 14px;min-height:36px;box-shadow:none}" +
    "#tabs .n2[aria-current=true]{background:rgba(120,120,255,.2);border-color:rgba(120,120,255,.7);font-weight:600}" +
    ".chips{display:flex;flex-wrap:wrap;gap:8px;margin:8px 0 16px}" +
    ".chip{font:inherit;color:inherit;background:transparent;border:1px solid rgba(128,128,128,.4);border-radius:999px;padding:8px 14px;min-height:40px}" +
    ".chip.on{background:rgba(120,120,255,.2);border-color:rgba(120,120,255,.7);font-weight:600}" +
    ".pc,.kbox{border:1px solid rgba(128,128,128,.3);border-radius:14px;padding:14px;margin:0 0 14px}" +
    ".pp{font-size:1.2rem;font-weight:700}.pa{opacity:.8;margin:2px 0 6px}.pn{font-size:.9rem;opacity:.75;margin:6px 0 10px}" +
    ".ex{padding:8px 0;border-top:1px dashed rgba(128,128,128,.3)}.ex .e1{display:block;font-size:1.1rem}.ex .e2{display:block;font-size:.85rem;opacity:.65}.ex .e3{display:block}" +
    ".kp{font-size:.85rem;opacity:.7;margin-bottom:10px}.kask{font-size:1.5rem;font-weight:700;margin-bottom:4px}.ksub{opacity:.7;margin-bottom:12px}" +
    ".opt{display:block;width:100%;text-align:left;font:inherit;color:inherit;background:transparent;border:1px solid rgba(128,128,128,.4);border-radius:12px;padding:12px 14px;margin:8px 0;min-height:48px}" +
    ".opt.ok{background:rgba(46,160,67,.25);border-color:rgba(46,160,67,.8)}.opt.bad{background:rgba(220,60,60,.25);border-color:rgba(220,60,60,.8)}" +
    ".go{display:block;width:100%;font:inherit;font-weight:700;color:inherit;border:1px solid rgba(120,120,255,.7);background:rgba(120,120,255,.25);border-radius:12px;padding:14px;margin-top:12px}" +
    ".kfb{margin:12px 0;font-weight:600}.kscore{font-size:2.2rem;font-weight:800}" +
    ".wl{list-style:none;padding:0;margin:10px 0}.wl li{display:flex;justify-content:space-between;gap:12px;padding:8px 0;border-top:1px dashed rgba(128,128,128,.3)}";
  document.head.appendChild(st);
})();
function shuffle(a) {
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1)),
      t = a[i];
    a[i] = a[j];
    a[j] = t;
  }
  return a;
}
function pool(bab) {
  var babs = bab === "all" ? ["1", "2", "3", "4"] : [bab],
    out = [],
    seen = {};
  babs.forEach(function (b) {
    D[b].forEach(function (g) {
      g[1].forEach(function (r) {
        if (r[2].length <= 38 && !seen[r[2]] && !seen[r[0]]) {
          seen[r[2]] = seen[r[0]] = 1;
          out.push(r);
        }
      });
    });
  });
  return out;
}
function startQuiz() {
  var qs;
  if (K.type === "pola") {
    qs = shuffle(
      PQ.filter(function (x) {
        return K.bab === "all" || x[0] === K.bab;
      }),
    )
      .slice(0, 10)
      .map(function (x) {
        return {
          ask: x[1],
          sub: x[2],
          ans: x[3],
          opts: shuffle(x[4].slice()),
          ro: "",
        };
      });
  } else {
    var p = pool(K.bab),
      fwd = K.type === "jp-id";
    qs = shuffle(p.slice())
      .slice(0, 10)
      .map(function (r) {
        var ans = fwd ? r[2] : r[0],
          d = shuffle(p.slice())
            .filter(function (z) {
              return z !== r && (fwd ? z[2] : z[0]) !== ans;
            })
            .slice(0, 3)
            .map(function (z) {
              return fwd ? z[2] : z[0];
            });
        return {
          ask: fwd ? r[0] : r[2],
          sub: fwd ? r[1] : "",
          ans: ans,
          opts: shuffle([ans].concat(d)),
          ro: fwd ? "" : r[1],
        };
      });
  }
  K.qs = qs;
  K.i = 0;
  K.score = 0;
  K.wrong = [];
  K.sel = -1;
  K.mode = "play";
}
function chips(items, cur2, act) {
  return (
    '<div class="chips">' +
    items
      .map(function (t) {
        return (
          '<button class="chip' +
          (t[0] === cur2 ? " on" : "") +
          '" data-act="' +
          act +
          '" data-v="' +
          t[0] +
          '">' +
          t[1] +
          "</button>"
        );
      })
      .join("") +
    "</div>"
  );
}
function renderPola() {
  var h = chips(
    [
      ["1", "Bab 1"],
      ["2", "Bab 2"],
      ["3", "Bab 3"],
      ["4", "Bab 4"],
    ],
    pb,
    "pb",
  );
  P[pb].forEach(function (x) {
    h +=
      '<div class="pc"><div class="pp" lang="ja">' +
      esc(x.p) +
      '</div><div class="pa">' +
      esc(x.a) +
      '</div><p class="pn">' +
      esc(x.n) +
      "</p>" +
      x.ex
        .map(function (e) {
          return (
            '<div class="ex"><span class="e1" lang="ja">' +
            esc(e[0]) +
            '</span><span class="e2">' +
            esc(e[1]) +
            '</span><span class="e3">' +
            esc(e[2]) +
            "</span></div>"
          );
        })
        .join("") +
      "</div>";
  });
  $("list").innerHTML = h;
  $("sub").textContent = P[pb].length + " pola kalimat · Bab " + pb;
}
function renderKuis() {
  var h = "",
    q = K.qs[K.i];
  if (K.mode === "menu") {
    h =
      '<div class="kbox"><h2>Pilih bab</h2>' +
      chips(
        [
          ["1", "Bab 1"],
          ["2", "Bab 2"],
          ["3", "Bab 3"],
          ["4", "Bab 4"],
          ["all", "Semua"],
        ],
        K.bab,
        "kb",
      ) +
      "<h2>Jenis kuis</h2>" +
      chips(
        [
          ["jp-id", "Jepang → Indonesia"],
          ["id-jp", "Indonesia → Jepang"],
          ["pola", "Isi partikel & pola"],
        ],
        K.type,
        "kt",
      ) +
      '<button class="go" data-act="start">Mulai (10 soal)</button></div>';
    $("sub").textContent = "Latihan pilihan ganda";
  } else if (K.mode === "play") {
    h =
      '<div class="kbox"><div class="kp">Soal ' +
      (K.i + 1) +
      " / " +
      K.qs.length +
      " · skor " +
      K.score +
      '</div><div class="kask" lang="ja">' +
      esc(q.ask) +
      "</div>" +
      (q.sub ? '<div class="ksub">' + esc(q.sub) + "</div>" : "") +
      q.opts
        .map(function (o, idx) {
          var c = "opt";
          if (K.sel > -1) {
            if (o === q.ans) c += " ok";
            else if (idx === K.sel) c += " bad";
          }
          return (
            '<button class="' +
            c +
            '" data-act="pick" data-i="' +
            idx +
            '"' +
            (K.sel > -1 ? " disabled" : "") +
            ">" +
            esc(o) +
            "</button>"
          );
        })
        .join("");
    if (K.sel > -1) {
      h +=
        '<div class="kfb">' +
        (q.opts[K.sel] === q.ans ? "Benar!" : "Jawaban: " + esc(q.ans)) +
        (q.ro ? " (" + esc(q.ro) + ")" : "") +
        '</div><button class="go" data-act="next">' +
        (K.i + 1 >= K.qs.length ? "Lihat hasil" : "Lanjut") +
        "</button>";
    }
    h += "</div>";
    $("sub").textContent = "Soal " + (K.i + 1) + " dari " + K.qs.length;
  } else {
    var pct = Math.round((K.score / K.qs.length) * 100);
    h =
      '<div class="kbox"><div class="kscore">' +
      K.score +
      " / " +
      K.qs.length +
      "</div><p>" +
      (pct === 100
        ? "Sempurna!"
        : pct >= 70
          ? "Bagus, terus latihan."
          : "Ulangi lagi, pasti makin hafal.") +
      "</p>" +
      (K.wrong.length
        ? '<h2>Yang perlu diulang</h2><ul class="wl">' +
          K.wrong
            .map(function (w) {
              return (
                "<li><span>" +
                esc(w.ask) +
                "</span><b>" +
                esc(w.ans) +
                "</b></li>"
              );
            })
            .join("") +
          "</ul>"
        : "") +
      '<button class="go" data-act="again">Main lagi</button><button class="go" data-act="menu">Ganti pengaturan</button></div>';
    $("sub").textContent = "Hasil kuis";
  }
  $("list").innerHTML = h;
}
function showSearch(on) {
  $("q").style.display = on ? "" : "none";
  $("mode").style.display = on ? "" : "none";
}
var lastBab = "1";
function renderTabs() {
  var v = ["1", "2", "3", "4", "all"].indexOf(cur) > -1,
    act = v ? "kosa" : cur;
  function b(cls, t, label, on) {
    return (
      '<button class="' +
      cls +
      '" data-t="' +
      t +
      '"' +
      (on ? ' aria-current="true"' : "") +
      ">" +
      label +
      "</button>"
    );
  }
  $("tabs").innerHTML =
    '<div class="nav1">' +
    [
      ["kosa", "Kosakata"],
      ["pola", "Pola"],
      ["kuis", "Kuis"],
    ]
      .map(function (t) {
        return b("n1", t[0], t[1], t[0] === act);
      })
      .join("") +
    "</div>" +
    (v
      ? '<div class="nav2">' +
        tabs
          .map(function (t) {
            return b("n2", t[0], t[1], t[0] === cur);
          })
          .join("") +
        "</div>"
      : "");
  fitNav();
}
function fitNav() {
  var el = $("tabs");
  while (el && el !== document.body) {
    if (getComputedStyle(el).position === "fixed") break;
    el = el.parentElement;
  }
  if (!el || el === document.body) return;
  var r = el.getBoundingClientRect();
  document.body.style.paddingBottom =
    r.top > window.innerHeight / 2 ? Math.ceil(r.height) + 16 + "px" : "";
}
window.addEventListener("resize", fitNav);
function renderSpecial() {
  showSearch(false);
  $("list").className = "";
  renderTabs();
  if (cur === "pola") renderPola();
  else renderKuis();
}
function render() {
  var miss = needFor().filter(function (n) {
    return !LOADED[n];
  });
  if (miss.length) {
    renderTabs();
    showSearch(cur !== "pola" && cur !== "kuis");
    $("sub").textContent = "Memuat…";
    $("list").innerHTML = '<p class="empty">Memuat…</p>';
    return ensure(miss, render);
  }
  if (cur === "pola" || cur === "kuis") return renderSpecial();
  showSearch(true);
  var q = $("q").value.trim().toLowerCase(),
    out = "",
    n = 0,
    babs = cur === "all" ? ["1", "2", "3", "4"] : [cur];
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
  renderTabs();
}
$("tabs").onclick = function (e) {
  var el = e.target.closest("[data-t]"),
    t = el && el.dataset.t;
  if (t) {
    if (t === "kosa") t = lastBab;
    else if (["1", "2", "3", "4", "all"].indexOf(t) > -1) lastBab = t;
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
  var el = e.target.closest("[data-act]");
  if (el) {
    var a = el.dataset.act,
      v = el.dataset.v;
    if (a === "pb") {
      pb = v;
      render();
    } else if (a === "kb") {
      K.bab = v;
      renderKuis();
    } else if (a === "kt") {
      K.type = v;
      renderKuis();
    } else if (a === "start" || a === "again") {
      ensure(K.bab === "all" ? ALL : [K.bab], function () {
        startQuiz();
        renderKuis();
      });
    } else if (a === "menu") {
      K.mode = "menu";
      renderKuis();
    } else if (a === "pick") {
      if (K.sel < 0) {
        K.sel = +el.dataset.i;
        var q = K.qs[K.i];
        if (q.opts[K.sel] === q.ans) K.score++;
        else K.wrong.push(q);
      }
      renderKuis();
    } else if (a === "next") {
      K.i++;
      K.sel = -1;
      if (K.i >= K.qs.length) K.mode = "result";
      renderKuis();
    }
    return;
  }
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
