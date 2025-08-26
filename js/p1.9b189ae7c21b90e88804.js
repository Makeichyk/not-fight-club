(() => {
  "use strict";
  function e() {
    const e = document.querySelector(".registration-btn"),
      t = document.querySelector(".registration-input"),
      n = document.querySelector(".registration-content-box"),
      c = document.querySelector(".header"),
      [a, o, l] = document.querySelectorAll(".nav-el"),
      s = document.querySelector(".home-section"),
      i = document.querySelector(".start-fight"),
      d = document.querySelector(".setting-section"),
      r = document.querySelector(".edit-name"),
      m = document.querySelector(".setting-name"),
      u = document.querySelector(".setting-modal-box"),
      g = document.querySelector(".edit-modal-cancel"),
      h = document.querySelector(".edit-modal-edit"),
      S = document.querySelector(".setting-input"),
      f = document.querySelector(".profile-section"),
      y = document.querySelector(".profile-name"),
      L = document.querySelector(".fight-section-box"),
      v = document.querySelector(".attack"),
      p = document.querySelectorAll(".checkbox-item"),
      k = document.querySelectorAll(".checkbox-item-atk"),
      q = document.querySelectorAll(".checkbox-item-def"),
      I = document.querySelector(".fight-log"),
      E = document.querySelector(".fight-player-name"),
      x = document.querySelector(".fight-enemy-name"),
      T = document.querySelector(".win"),
      b = document.querySelector(".lose");
    let _ = localStorage.getItem("wins") ? +localStorage.getItem("wins") : 0,
      A = localStorage.getItem("loses") ? +localStorage.getItem("loses") : 0;
    (T.innerText = _), (b.innerText = A);
    const w = document.querySelector(".change-profile-btn"),
      N = document.querySelector(".profile-img"),
      $ = document.querySelector(".fight-avatar");
    let M = localStorage.getItem("enemyId") ? +localStorage.getItem("enemyId") : 0;
    const O = [
        { name: "ENEMY_PLACEHOLDER_NAME_1", img: "path", atk: 2, def: 2, hp: 100 },
        { name: "ENEMY_PLACEHOLDER_NAME_2", img: "path", atk: 5, def: 3, hp: 100 },
        { name: "ENEMY_PLACEHOLDER_NAME_3", img: "path", atk: 1, def: 4, hp: 100 },
      ],
      D = [
        "./assets/imgs/profile_img_1.jpeg",
        "./assets/imgs/profile_img_2.jpeg",
        "./assets/imgs/profile_img_3.jpg",
      ];
    let J = localStorage.getItem("img") ? +localStorage.getItem("img") : 0;
    const j = ["head", "neck", "body", "leg", "foot"];
    let C = "";
    function H() {
      c.classList.remove("hidden"),
        n.classList.add("hidden"),
        s.classList.remove("hidden"),
        d.classList.add("hidden"),
        f.classList.add("hidden"),
        L.classList.add("hidden"),
        a.classList.add("active"),
        o.classList.remove("active"),
        l.classList.remove("active");
    }
    function P(e, t) {
      let n = 0;
      return e.forEach((e) => (e.checked ? n++ : (n += 0))), n == t;
    }
    function R() {
      P(k, 2) && P(q, 3) ? (v.disabled = !1) : (v.disabled = !0);
    }
    function Y(e, t, n) {
      let c = 0;
      for (let c = 0; c < e.length; c++) {
        let a = j[e[c]];
        C +=
          0 == c
            ? t.includes(e[c])
              ? `\n ${n} attacked ${a} but it was defended \n`
              : `\n ${n} successfully attacked ${a} \n`
            : t.includes(e[c])
            ? `${n} attacked ${a} but it was defended \n`
            : `${n} successfully attacked ${a} \n`;
      }
      return (c = 10 * e.filter((e) => !t.includes(e)).length), c;
    }
    function F(e, t) {
      const n = document.querySelector(".player-hp-box-cover"),
        c = document.querySelector(".player-hp"),
        a = document.querySelector(".enemy-hp-box-cover"),
        o = document.querySelector(".enemy-hp");
      (n.style.width = `${e}%`), (c.innerText = e), (a.style.width = `${t}%`), (o.innerText = t);
    }
    function z(e) {
      const t = [0, 1, 2, 3, 4],
        n = [];
      for (let c = 0; c < e; c++) {
        const e = Math.floor(Math.random() * t.length);
        n.push(t[e]), t.splice(e, 1);
      }
      return n;
    }
    localStorage.getItem("username")
      ? H()
      : (c.classList.add("hidden"),
        n.classList.remove("hidden"),
        L.classList.add("hidden"),
        s.classList.add("hidden"),
        d.classList.add("hidden"),
        f.classList.add("hidden")),
      p.forEach((e) => e.addEventListener("click", R)),
      v.addEventListener("click", () => {
        !(function () {
          const e = JSON.parse(localStorage.enemies);
          let t = +e[M].hp,
            n = +localStorage.getItem("hp");
          const c = (function () {
              const e = O[M].atk,
                t = O[M].def;
              return { enemyAtk: z(e), enemyDef: z(t) };
            })(),
            a = { atk: [], def: [] };
          let o = 0,
            l = 0;
          var s;
          k.forEach((e, t) => (e.checked ? a.atk.push(t) : 0)),
            q.forEach((e, t) => (e.checked ? a.def.push(t) : 0)),
            (l = Y(a.atk, c.enemyDef, "player")),
            (o = Y(c.enemyAtk, a.def, "enemy")),
            (t = t - l <= 0 ? 0 : t - l),
            (e[M].hp = t),
            (n = n - o <= 0 ? 0 : n - o),
            (localStorage.hp = n),
            (localStorage.enemies = JSON.stringify(e)),
            (I.innerText = C),
            F(n, t),
            (n <= 0 || t <= 0) &&
              ((s = n),
              (v.innerText = s > 0 ? "victory" : "lose"),
              (localStorage.hp = 100),
              localStorage.setItem("enemies", JSON.stringify(O)),
              (v.disabled = !0),
              setTimeout(() => {
                (v.disabled = !1), (v.innerText = "Fight"), F(100, 100), H();
              }, 1500),
              (function (e) {
                e > 0 ? _++ : A++,
                  (localStorage.wins = _),
                  (localStorage.loses = A),
                  (T.innerText = _),
                  (b.innerText = A);
              })(n),
              (C = ""),
              (I.innerText = C));
        })();
      }),
      i.addEventListener("click", () => {
        !(function (e = 0) {
          console.log(localStorage.getItem("username")),
            (E.innerText = localStorage.getItem("username")),
            (x.innerText = O[e].name);
          let t = +JSON.parse(localStorage.enemies)[e].hp,
            n = +localStorage.getItem("hp");
          s.classList.add("hidden"), L.classList.remove("hidden"), F(n, t);
        })(M);
      }),
      w.addEventListener("click", function () {
        J < 2 ? J++ : (J = 0), (localStorage.img = +J), (N.src = D[J]), ($.src = D[J]);
      }),
      h.addEventListener("click", function () {
        !S.value || S.value.length < 3 || S.value.length > 15
          ? (S.value = "please enter new nickname.")
          : (localStorage.setItem("username", S.value),
            localStorage.length < 1 ||
              ((m.innerText = localStorage.getItem("username")), (y.innerText = localStorage.getItem("username"))),
            u.classList.add("hidden"));
      }),
      g.addEventListener("click", function () {
        u.classList.add("hidden");
      }),
      r.addEventListener("click", function () {
        u.classList.remove("hidden");
      }),
      a.addEventListener("click", H),
      o.addEventListener("click", function () {
        (m.innerText = localStorage.getItem("username")),
          n.classList.add("hidden"),
          s.classList.add("hidden"),
          d.classList.remove("hidden"),
          f.classList.add("hidden"),
          L.classList.add("hidden"),
          a.classList.remove("active"),
          o.classList.add("active"),
          l.classList.remove("active");
      }),
      l.addEventListener("click", function () {
        (y.innerText = localStorage.getItem("username")),
          n.classList.add("hidden"),
          s.classList.add("hidden"),
          d.classList.add("hidden"),
          f.classList.remove("hidden"),
          L.classList.add("hidden"),
          a.classList.remove("active"),
          o.classList.remove("active"),
          l.classList.add("active");
      }),
      e.addEventListener("click", function () {
        let e = t.value;
        const n = "That field should not be empty";
        e && e !== n
          ? (localStorage.setItem("username", e),
            localStorage.setItem("wins", 0),
            localStorage.setItem("loses", 0),
            localStorage.setItem("img", 0),
            localStorage.setItem("hp", 100),
            localStorage.setItem("enemies", JSON.stringify(O)),
            localStorage.setItem("wins", 0),
            localStorage.setItem("loses", 0),
            localStorage.setItem("enemyId", 0),
            (t.value = "Succsecfully registered"),
            setTimeout(() => {
              t.value = "";
            }, 2e3),
            H())
          : (t.value = n);
      });
  }
  !(async function () {
    e();
  })();
})();
