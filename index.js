_F_installCss(
  ".DpgmK,.Enb9pe,.FAoEle,.LwDUdc,.MTIaKb,.RlTCPd,.RoOVmf,.V3Ezn,.Vnob4b,.YKUhfb,.aVsZpf,.bbxTBb,.caNvfd,.dIfvQd,.iQMtqe,.kJSB8,.mYuoaf,.tUr4Kc,.uNnvb,.wPNfjb{--Yi4Nb:var(--mXZkqc);--pEa0Bc:var(--bbQxAb);--kloG3:var(--mXZkqc);--YaIeMb:var(--XKMDxc);--Pa8Wlb:var(--Nsm0ce);--izGsqb:var(--Nsm0ce);--todMNcl:var(--EpFNW);--p9J9c:var(--Nsm0ce)}:root{--KIZPne:#a3c9ff;--xPpiM:#001d35;--Ehh4mf:var(--Nsm0ce)}:root{--pEa0Bc:#474747;--Pa8Wlb:#0b57d0;--YaIeMb:#f7f8f9;--Yi4Nb:#d2d2d2;--ngPXTb:var(--rrJJUc);--hwEqod:var(--jINu6c);--kloG3:#d2d2d2;--lv6yU:#0b57d0;--Wmwad:#0b57d0;--vWq1if:var(--jINu6c);--Ijc2tf:#ebf1ff;--VeLyLc:#001d35;--fuvksc:#0b57d0;--gJjJk:#0b57d0;--LMFHUd:var(--jINu6c);--Zia6nf:var(--BRLwE);--y01ou:#001d35;--p9J9c:#0b57d0;--MoaHse:#0b57d0;--CRMNZd:var(--jINu6c);--izGsqb:#0b57d0;--todMNc:#fff;--NoaQW:#001d35;--qdHZF:rgba(0,0,0,.6);--V9ysqf:var(--EoKObe);--PBxOKe:#1f1f1f;--MV2sG:#f1f3f4;--bcxd3b:var(--YLNNHc);--D9aNi:rgba(31,31,31,0.08)}.EpPYLd{display:block;position:relative}.YpcDnf{padding:0 16px;vertical-align:middle}.WtV5nd .YpcDnf{padding-left:28px}.EpPYLd:hover{cursor:pointer}.CB8nDe:hover,.EpPYLd{cursor:default}.EpPYLd[disabled],.LGiluc{pointer-events:none;cursor:default}@media (forced-colors:active){.EpPYLd[disabled]{color:GrayText}}.LGiluc{border-top:1px solid;height:0;margin:5px 0}.wb5ZZc{display:none}.y6unsf{background-color:rgba(60,64,67,.1)}sentinel{}",
);
loaded_h_0(function (_) {
  var window = this;
  _.JOb = class {
    constructor(a) {
      this.Xm = a;
    }
  };
  _.v("aLUfP");
  var LOb;
  _.KOb = false;
  LOb = function () {
    return _.ra() && _.Ka.LD() && !navigator.userAgent.includes("GSA");
  };
  _.ig(
    _.d1a,
    class extends _.Go {
      static Ta() {
        return {
          service: {
            window: _.Do,
          },
        };
      }
      constructor(a) {
        super();
        this.window = a.service.window.get();
        this.Ba = this.Xm();
        this.Aa = window.orientation;
        this.oa = () => {
          var b = this.Xm(),
            c =
              this.d1b() &&
              Math.abs(window.orientation) === 90 &&
              this.Aa === -1 * window.orientation;
          this.Aa = window.orientation;
          if (b !== this.Ba || c) {
            this.Ba = b;
            for (let d of this.Cf) {
              c = new _.JOb(b);
              try {
                d(c);
              } catch (e) {
                _.ea(e);
              }
            }
          }
        };
        this.Cf = new Set();
        this.window.addEventListener("resize", this.oa);
        this.d1b() &&
          this.window.addEventListener("orientationchange", this.oa);
      }
      addListener(a) {
        this.Cf.add(a);
      }
      removeListener(a) {
        this.Cf.delete(a);
      }
      Xm() {
        if (LOb()) {
          var a = _.ei(this.window);
          a = new _.Xd(
            a.width,
            Math.round(
              (a.width * this.window.innerHeight) / this.window.innerWidth,
            ),
          );
        } else
          a =
            this.Oc() || (_.ra() ? LOb() : this.window.visualViewport)
              ? _.ei(this.window)
              : new _.Xd(this.window.innerWidth, this.window.innerHeight);
        return a.height < a.width;
      }
      destroy() {
        this.window.removeEventListener("resize", this.oa);
        this.window.removeEventListener("orientationchange", this.oa);
      }
      Oc() {
        return _.KOb;
      }
      d1b() {
        return "orientation" in window;
      }
    },
  );
  _.KOb = true;
  _.x();
  _.v("wQlYve");
  _.nv = new _.$f(_.qr);
  _.x();
  var ePE;
  ePE = function (a) {
    a.WB.src = "./img/" + a.path;
    _.ze(a.WB, "load", () => {
      a.loaded = true;
    });
  };
  _.fPE = class {
    constructor(a, b, c) {
      this.path = a;
      this.oa = b;
      this.context = c;
      this.loaded = false;
      this.WB = new Image();
      this.WB.crossOrigin = "Anyonymous";
      ePE(this);
    }
    render(a, b, c, d, e) {
      this.loaded &&
        (this.context.translate(b.x, b.y),
        this.context.rotate(d),
        this.context.drawImage(
          this.WB,
          0,
          this.getHeight() * a,
          this.getWidth(),
          this.getHeight(),
          c.x * e,
          c.y * e,
          this.getWidth() * e,
          this.getHeight() * e,
        ),
        this.context.rotate(-d),
        this.context.translate(-b.x, -b.y));
    }
    getLength() {
      return this.oa;
    }
    getWidth() {
      return this.WB.width;
    }
    getHeight() {
      return this.WB.height / this.oa;
    }
  };
  _.GWi = function (a) {
    return Array.prototype.map
      .call(a, function (b) {
        b = b.toString(16);
        return b.length > 1 ? b : "0" + b;
      })
      .join("");
  };
  _.HWi = function () {
    this.blockSize = -1;
  };
  var Ulj;
  Ulj = function (a, b) {
    this.blockSize = -1;
    this.blockSize = 64;
    this.Ba = _.da.Uint8Array
      ? new Uint8Array(this.blockSize)
      : Array(this.blockSize);
    this.Ca = this.Aa = 0;
    this.oa = [];
    this.Ea = a;
    this.Da = b;
    this.Ha = _.da.Int32Array ? new Int32Array(64) : Array(64);
    Slj === void 0 &&
      (_.da.Int32Array ? (Slj = new Int32Array(Tlj)) : (Slj = Tlj));
    this.reset();
  };
  _.Wlj = function () {
    Ulj.call(this, 8, Vlj);
  };
  _.Ri(Ulj, _.HWi);
  var Xlj = [].concat(128, _.uba(0, 63));
  Ulj.prototype.reset = function () {
    this.Ca = this.Aa = 0;
    this.oa = _.da.Int32Array ? new Int32Array(this.Da) : _.Ba(this.Da);
  };
  var Ylj = function (a) {
    for (var b = a.Ba, c = a.Ha, d = 0, e = 0; e < b.length; )
      ((c[d++] = (b[e] << 24) | (b[e + 1] << 16) | (b[e + 2] << 8) | b[e + 3]),
        (e = d * 4));
    for (b = 16; b < 64; b++)
      ((d = c[b - 15] | 0),
        (e = c[b - 2] | 0),
        (c[b] =
          ((((c[b - 16] | 0) +
            (((d >>> 7) | (d << 25)) ^ ((d >>> 18) | (d << 14)) ^ (d >>> 3))) |
            0) +
            (((c[b - 7] | 0) +
              (((e >>> 17) | (e << 15)) ^
                ((e >>> 19) | (e << 13)) ^
                (e >>> 10))) |
              0)) |
          0));
    b = a.oa[0] | 0;
    d = a.oa[1] | 0;
    e = a.oa[2] | 0;
    var f = a.oa[3] | 0,
      g = a.oa[4] | 0,
      h = a.oa[5] | 0,
      k = a.oa[6] | 0,
      l = a.oa[7] | 0;
    for (let n = 0; n < 64; n++) {
      let q =
          ((((b >>> 2) | (b << 30)) ^
            ((b >>> 13) | (b << 19)) ^
            ((b >>> 22) | (b << 10))) +
            ((b & d) ^ (b & e) ^ (d & e))) |
          0,
        r =
          (((l +
            (((g >>> 6) | (g << 26)) ^
              ((g >>> 11) | (g << 21)) ^
              ((g >>> 25) | (g << 7)))) |
            0) +
            ((((((g & h) ^ (~g & k)) + (Slj[n] | 0)) | 0) + (c[n] | 0)) | 0)) |
          0;
      l = k;
      k = h;
      h = g;
      g = (f + r) | 0;
      f = e;
      e = d;
      d = b;
      b = (r + q) | 0;
    }
    a.oa[0] = (a.oa[0] + b) | 0;
    a.oa[1] = (a.oa[1] + d) | 0;
    a.oa[2] = (a.oa[2] + e) | 0;
    a.oa[3] = (a.oa[3] + f) | 0;
    a.oa[4] = (a.oa[4] + g) | 0;
    a.oa[5] = (a.oa[5] + h) | 0;
    a.oa[6] = (a.oa[6] + k) | 0;
    a.oa[7] = (a.oa[7] + l) | 0;
  };
  Ulj.prototype.update = function (a, b) {
    b === void 0 && (b = a.length);
    var c = 0,
      d = this.Aa;
    if (typeof a === "string")
      for (; c < b; )
        ((this.Ba[d++] = a.charCodeAt(c++)),
          d == this.blockSize && (Ylj(this), (d = 0)));
    else if (_.Ca(a))
      for (; c < b; ) {
        let e = a[c++];
        if (!("number" == typeof e && 0 <= e && 255 >= e && e == (e | 0)))
          throw Error("Vq");
        this.Ba[d++] = e;
        d == this.blockSize && (Ylj(this), (d = 0));
      }
    else throw Error("Wq");
    this.Aa = d;
    this.Ca += b;
  };
  Ulj.prototype.digest = function () {
    var a = [],
      b = this.Ca * 8;
    this.Aa < 56
      ? this.update(Xlj, 56 - this.Aa)
      : this.update(Xlj, this.blockSize - (this.Aa - 56));
    for (var c = 63; c >= 56; c--) ((this.Ba[c] = b & 255), (b /= 256));
    Ylj(this);
    b = 0;
    for (c = 0; c < this.Ea; c++)
      for (let d = 24; d >= 0; d -= 8) a[b++] = (this.oa[c] >> d) & 255;
    return a;
  };
  var Tlj = [
      1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
      2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
      1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
      264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
      2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
      113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
      1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
      3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
      430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
      1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
      2428436474, 2756734187, 3204031479, 3329325298,
    ],
    Slj;
  _.Ri(_.Wlj, Ulj);
  var Vlj = [
    1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924,
    528734635, 1541459225,
  ];
  var kIE, mIE;
  kIE = function () {
    var a = new Date();
    a.setUTCHours(a.getUTCHours() + -5);
    return a;
  };
  _.lIE = function (a = 0) {
    var b = kIE();
    a > 0 && b.setUTCDate(b.getUTCDate() - a);
    return b.toISOString().split("T")[0];
  };
  mIE = function (a, b, c, d) {
    return () => {
      a |= 0;
      b |= 0;
      c |= 0;
      d |= 0;
      var e = (((a + b) | 0) + d) | 0;
      d = (d + 1) | 0;
      a = b ^ (b >>> 9);
      b = (c + (c << 3)) | 0;
      c = (c << 21) | (c >>> 11);
      c = (c + e) | 0;
      return (e >>> 0) / 4294967296;
    };
  };
  _.nIE = function (a) {
    var b = new _.Wlj();
    b.update(a, a.length);
    a = new Uint8Array(b.digest()).buffer;
    var c = new DataView(a);
    a = c.getUint32(0);
    b = c.getUint32(4);
    var d = c.getUint32(8);
    c = c.getUint32(12);
    return mIE(a, b, d, c);
  };
  _.oIE = function () {
    var a, b;
    return Math.min(
      2,
      (b = (a = window) == null ? void 0 : a.devicePixelRatio) != null ? b : 1,
    );
  };
  _.pIE = function () {
    var a = kIE(),
      b = (60 - a.getUTCSeconds()) % 60,
      c = (60 - a.getUTCMinutes() - (b > 0 ? 1 : 0)) % 60;
    a = `${(24 - a.getUTCHours() - (c > 0 ? 1 : 0)).toString().padStart(2, "0")}:${c.toString().padStart(2, "0")}:${b.toString().padStart(2, "0")}`;
    return new _.tz("Time remaining: {TIMEREMAINING}").format({
      TIMEREMAINING: a,
    });
  };
  _.qIE = function () {
    for (var a = window; a.postMessage("lightbox-exit", "*"), a !== a.parent; )
      a = a.parent;
  };
  _.rIE = function (a, b) {
    var c = [];
    a.forEach((d) => {
      c.push(
        new Promise((e) => {
          d.complete
            ? e()
            : _.Sn(d, "load", () => {
                e();
              });
        }),
      );
    });
    Promise.all(c).then(() => {
      b();
    });
  };
  var XHE = function (a) {
      if (!a.oa) {
        a.oa = true;
        for (let b of a.Ca) b();
      }
    },
    YHE = class {
      constructor(a) {
        this.src = a;
        this.oa = false;
        this.Ca = [];
      }
      isLoaded() {
        return this.oa;
      }
    };
  var ZHE, $HE, bIE, aIE, eIE, gIE, iIE, hIE;
  ZHE = _.na();
  $HE = ZHE.includes("iPad") || ZHE.includes("iPhone") || ZHE.includes("iPod");
  bIE = function (a) {
    a.oa && !a.Ca && ((a.Ba !== null && a.Ca) || aIE(a));
  };
  aIE = function (a) {
    a.Ca ||
      ((a.Ba = a.oa.createBufferSource()),
      (a.Ba.buffer = a.oa.createBuffer(1, 1, 22050)),
      a.Ba.connect(a.oa.destination),
      _.Sn(a.Ba, "ended", () => {
        a.Ca = true;
      }),
      a.Ba.start(0));
  };
  _.cIE = function (a) {
    a.Aa && (a.Aa.gain.value = 0);
  };
  _.dIE = function (a) {
    a.Aa && (a.Aa.gain.value = 1);
  };
  _.fIE = class {
    constructor(a, b) {
      this.Da = a;
      this.W6b = b;
      this.Ba = this.Aa = this.oa = null;
      this.Ca = false;
    }
    init(a) {
      if (!eIE) return false;
      if (this.oa) return true;
      this.oa = new (_.da.AudioContext || _.da.webkitAudioContext)();
      this.Aa = this.oa.createGain();
      this.Aa.connect(this.oa.destination);
      for (let b of Object.values(this.Da)) b.init(this.oa);
      for (let b of Object.values(this.W6b)) b.init(this.oa, this.Aa);
      $HE &&
        (bIE(this),
        _.Sn(a, "touchend", () => {
          bIE(this);
        }));
      return true;
    }
    isInitialized() {
      return !!this.oa;
    }
    getContext() {
      return this.oa;
    }
    destroy() {
      this.oa.close();
      this.oa = null;
    }
    reset() {
      for (let a of Object.values(this.Da)) a.Ca = [];
      for (let a of Object.values(this.W6b)) a.stop();
    }
  };
  eIE = !(!_.da.AudioContext && !_.da.webkitAudioContext) && !!_.da.GainNode;
  gIE = function (a) {
    if (a.Aa) {
      var b = a.Aa.currentTime * 1e3;
      for (let c of Object.keys(a.Ba)) {
        let d = a.Ba[c];
        !d.OQc && d.playTime + a.duration < b && delete a.Ba[c];
      }
    }
  };
  _.l6 = class {
    constructor(a, b, c) {
      this.oa = a;
      this.name = b;
      this.duration = c;
      this.Ba = {};
      this.Ca = this.Aa = this.Da = null;
      this.Ea = 0;
    }
    init(a, b) {
      this.Aa = a;
      this.Ca = b;
      this.Aa.createGain && (this.Da = this.Aa.createGain());
    }
    play(a = 0, b = false) {
      if (!this.Aa || !this.Ca) return -1;
      gIE(this);
      a = this.Aa.currentTime + a / 1e3;
      var c = this.Aa.createBufferSource();
      this.Da
        ? (c.connect(this.Da), this.Da.connect(this.Ca))
        : c.connect(this.Ca);
      c.loop = b;
      try {
        c.buffer = this.oa.qS(this.name);
      } catch (e) {
        return -1;
      }
      c.playbackRate.value = 1;
      c.start(a, 0);
      var d = this.Ea++;
      this.Ba[String(d)] = {
        node: c,
        playTime: a * 1e3,
        OQc: b,
      };
      return d;
    }
    stop(a) {
      gIE(this);
      if (a !== void 0) {
        if (this.Ba[a]) {
          try {
            this.Ba[a].node.stop(0);
          } catch (b) {}
          delete this.Ba[a];
        }
      } else for (let b of Object.keys(this.Ba)) this.stop(b);
    }
  };
  iIE = function (a, b) {
    b = b.getResponse();
    var c = hIE(a, new Uint8Array(b)),
      d = Object.keys(c);
    a.status = 2;
    var e = (f, g) => {
      g && f && (a.Da[f] = g);
      d.length === 0
        ? ((a.status = 3), XHE(a))
        : ((f = d.shift()),
          a.Aa.decodeAudioData(c[f], (h) => {
            e(f, h);
          }));
    };
    e(null, null);
  };
  hIE = function (a, b) {
    var c = {},
      d = {},
      e = {},
      f = 0,
      g = false;
    b[0] === 0 && (g = true);
    Object.entries(a.index).forEach(([l, n]) => {
      d[l] = [];
      e[l] = [];
      var q = b[n];
      g && (q |= b[++n] << 8);
      f += q;
      for (var r = 0; r < q; r++)
        g
          ? (d[l].push(b[n + 1] | (b[n + 2] << 8)), (n += 2))
          : d[l].push(b[++n]);
      for (r = 0; r < q; r++)
        g
          ? (e[l].push(b[n + 1] | (b[n + 2] << 8)), (n += 2))
          : e[l].push(b[++n]);
    });
    var h = f * 2 + Object.keys(a.index).length;
    g && ((h *= 2), (h += 2));
    var k = b[h];
    ++h;
    g && ((k |= b[h] << 8), ++h);
    Object.entries(a.index).forEach(([l]) => {
      var n = 0;
      _.Ia(
        d[l],
        (t) => {
          n += a.Ba - (b[h + t * 32 + 2] & 2 ? 0 : 1);
        },
        a,
      );
      c[l] = new ArrayBuffer(n);
      var q = new Uint8Array(c[l]),
        r = 0;
      for (let t = 0; t < d[l].length; t++) {
        let A = h + d[l][t] * 32,
          E = a.Ba - (b[A + 2] & 2 ? 0 : 1),
          H = h + k * 32 + e[l][t] * (a.Ba - 32);
        q.set(b.subarray(A, A + 32), r);
        r += 32;
        q.set(b.subarray(H, H + E - 32), r);
        r += E - 32;
      }
    });
    return c;
  };
  _.jIE = class extends YHE {
    constructor(a, b, c, d = 314) {
      super("https://www.google.com" + a + b + ".bin");
      this.index = c;
      this.Ba = d;
      this.Aa = null;
      this.Da = {};
      this.status = 0;
    }
    getStatus() {
      return this.status;
    }
    init(a) {
      this.Aa = a;
    }
    preload(a = false) {
      if ((this.status === 0 || a) && this.Aa) {
        var b = new _.Tr();
        b.setResponseType("arraybuffer");
        b.listen("complete", () => {
          iIE(this, b);
        });
        b.send(this.src);
        this.status = 1;
      }
    }
    qS(a) {
      return this.Da[a];
    }
  };
  _.u8q = _.y("c20dae", [_.qr]);
  var Z4d;
  _.Y4d = function (a, b, c) {
    _.Ad.call(this);
    this.wp = null;
    this.Ba = false;
    this.KX = a;
    this.Ca = c;
    this.oa = b || window;
    this.Aa = (0, _.Ae)(this.b8c, this);
  };
  Z4d = function (a) {
    var b = b || 0;
    return function () {
      return a.apply(this, Array.prototype.slice.call(arguments, 0, b));
    };
  };
  _.Ri(_.Y4d, _.Ad);
  _.aa = _.Y4d.prototype;
  _.aa.start = function () {
    this.stop();
    this.Ba = false;
    var a = $4d(this),
      b = a5d(this);
    a && !b && this.oa.mozRequestAnimationFrame
      ? ((this.wp = _.ze(this.oa, "MozBeforePaint", this.Aa)),
        this.oa.mozRequestAnimationFrame(null),
        (this.Ba = true))
      : (this.wp =
          a && b
            ? a.call(this.oa, this.Aa)
            : this.oa.setTimeout(Z4d(this.Aa), 20));
  };
  _.aa.stop = function () {
    if (this.isActive()) {
      let a = $4d(this),
        b = a5d(this);
      a && !b && this.oa.mozRequestAnimationFrame
        ? _.Un(this.wp)
        : a && b
          ? b.call(this.oa, this.wp)
          : this.oa.clearTimeout(this.wp);
    }
    this.wp = null;
  };
  _.aa.fire = function () {
    this.stop();
    this.b8c();
  };
  _.aa.isActive = function () {
    return this.wp != null;
  };
  _.aa.b8c = function () {
    this.Ba && this.wp && _.Un(this.wp);
    this.wp = null;
    this.KX.call(this.Ca, _.Ee());
  };
  _.aa.Vc = function () {
    this.stop();
    _.Y4d.Jf.Vc.call(this);
  };
  var $4d = function (a) {
      a = a.oa;
      return (
        a.requestAnimationFrame ||
        a.webkitRequestAnimationFrame ||
        a.mozRequestAnimationFrame ||
        a.oRequestAnimationFrame ||
        a.msRequestAnimationFrame ||
        null
      );
    },
    a5d = function (a) {
      a = a.oa;
      return (
        a.cancelAnimationFrame ||
        a.cancelRequestAnimationFrame ||
        a.webkitCancelRequestAnimationFrame ||
        a.mozCancelRequestAnimationFrame ||
        a.oCancelRequestAnimationFrame ||
        a.msCancelRequestAnimationFrame ||
        null
      );
    };
  _.gs = function (a, b, c) {
    _.Ad.call(this);
    this.KX = a;
    this.Ca = b || 0;
    this.Aa = c;
    this.Ba = (0, _.Ae)(this.oa, this);
  };
  _.Ri(_.gs, _.Ad);
  _.gs.prototype.wp = 0;
  _.gs.prototype.Vc = function () {
    _.gs.Jf.Vc.call(this);
    this.stop();
    delete this.KX;
    delete this.Aa;
  };
  _.gs.prototype.start = function (a) {
    this.stop();
    this.wp = _.$n(this.Ba, a !== void 0 ? a : this.Ca);
  };
  _.Aob = function (a) {
    a.isActive() || a.start(void 0);
  };
  _.gs.prototype.stop = function () {
    this.isActive() && _.ao(this.wp);
    this.wp = 0;
  };
  _.gs.prototype.fire = function () {
    this.stop();
    this.oa();
  };
  _.gs.prototype.isActive = function () {
    return this.wp != 0;
  };
  _.gs.prototype.oa = function () {
    this.wp = 0;
    this.KX && this.KX.call(this.Aa);
  };
  var dTf, eTf, fTf, gTf;
  _.bTf = function (a) {
    return Math.sqrt(a.x * a.x + a.y * a.y);
  };
  _.cTf = function (a, b) {
    return new _.Td(a.x + b.x, a.y + b.y);
  };
  dTf = {};
  eTf = null;
  _.ZO = function (a) {
    var b = _.vf(a);
    b in dTf || (dTf[b] = a);
    fTf();
  };
  _.$O = function (a) {
    a = _.vf(a);
    delete dTf[a];
    _.Gc(dTf) && eTf && eTf.stop();
  };
  fTf = function () {
    eTf ||
      (eTf = new _.gs(function () {
        gTf();
      }, 20));
    var a = eTf;
    a.isActive() || a.start();
  };
  gTf = function () {
    var a = _.Ee();
    _.Cc(dTf, function (b) {
      b.Gw(a);
    });
    _.Gc(dTf) || fTf();
  };
  var XEd, hFd;
  _.YEd = function (a) {
    var b = XEd(a);
    if (!b) throw Error("ui`" + a);
    return b;
  };
  XEd = function (a) {
    var b = {};
    a = String(a);
    var c = _.ZEd(a);
    if (_.$Ed.test(c)) return ((b.eba = _.aFd(c)), (b.type = "hex"), b);
    c = _.bFd(a);
    return c.length
      ? ((b.eba = _.kG(c)), (b.type = "rgb"), b)
      : _.cFd && (a = _.cFd[a.toLowerCase()])
        ? ((b.eba = a), (b.type = "named"), b)
        : null;
  };
  _.dFd = function (a) {
    var b = _.bFd(a);
    if (!b.length) throw Error("vi`" + a);
    return b;
  };
  _.aFd = function (a) {
    if (!_.$Ed.test(a)) throw Error("wi`" + a);
    a.length == 4 && (a = a.replace(eFd, "#$1$1$2$2$3$3"));
    return a.toLowerCase();
  };
  _.lG = function (a) {
    a = _.aFd(a);
    a = parseInt(a.slice(1), 16);
    return [a >> 16, (a >> 8) & 255, a & 255];
  };
  _.fFd = function (a, b, c) {
    a = Number(a);
    b = Number(b);
    c = Number(c);
    if (a != (a & 255) || b != (b & 255) || c != (c & 255))
      throw Error("xi`" + a + "`" + b + "`" + c);
    b = (a << 16) | (b << 8) | c;
    return a < 16
      ? "#" + (16777216 | b).toString(16).slice(1)
      : "#" + b.toString(16);
  };
  _.kG = function (a) {
    return _.fFd(a[0], a[1], a[2]);
  };
  _.gFd = function (a, b, c) {
    a /= 255;
    b /= 255;
    c /= 255;
    var d = Math.max(a, b, c),
      e = Math.min(a, b, c),
      f = 0,
      g = 0,
      h = 0.5 * (d + e);
    d != e &&
      (d == a
        ? (f = (60 * (b - c)) / (d - e))
        : d == b
          ? (f = (60 * (c - a)) / (d - e) + 120)
          : d == c && (f = (60 * (a - b)) / (d - e) + 240),
      (g = 0 < h && h <= 0.5 ? (d - e) / (2 * h) : (d - e) / (2 - 2 * h)));
    return [Math.round(f + 360) % 360, g, h];
  };
  hFd = function (a, b, c) {
    c < 0 ? (c += 1) : c > 1 && --c;
    return 6 * c < 1
      ? a + (b - a) * 6 * c
      : 2 * c < 1
        ? b
        : 3 * c < 2
          ? a + (b - a) * (2 / 3 - c) * 6
          : a;
  };
  _.iFd = function (a, b, c) {
    a /= 360;
    if (b == 0) c = b = a = c * 255;
    else {
      let d, e;
      e = c < 0.5 ? c * (1 + b) : c + b - b * c;
      d = 2 * c - e;
      c = 255 * hFd(d, e, a + 1 / 3);
      b = 255 * hFd(d, e, a);
      a = 255 * hFd(d, e, a - 1 / 3);
    }
    return [Math.round(c), Math.round(b), Math.round(a)];
  };
  _.bFd = function (a) {
    var b = a.match(jFd);
    if (b) {
      a = Number(b[1]);
      let c = Number(b[2]);
      b = Number(b[3]);
      if (a >= 0 && a <= 255 && c >= 0 && c <= 255 && b >= 0 && b <= 255)
        return [a, c, b];
    }
    return [];
  };
  _.ZEd = function (a) {
    return a.charAt(0) == "#" ? a : "#" + a;
  };
  _.kFd = function (a) {
    a = _.lG(a);
    return _.gFd(a[0], a[1], a[2]);
  };
  _.mG = function (a, b, c) {
    c = _.Gd(c, 0, 1);
    return [
      Math.round(b[0] + c * (a[0] - b[0])),
      Math.round(b[1] + c * (a[1] - b[1])),
      Math.round(b[2] + c * (a[2] - b[2])),
    ];
  };
  _.lFd = function (a, b) {
    return _.mG([0, 0, 0], a, b);
  };
  _.mFd = function (a, b) {
    return _.mG([255, 255, 255], a, b);
  };
  _.cFd = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32",
  };
  var eFd, jFd;
  eFd = /#(.)(.)(.)/;
  _.$Ed = /^#(?:[0-9a-f]{3}){1,2}$/i;
  jFd =
    /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
  _.v("c20dae");
  var E6 = {
      Sm: new _.jIE(
        "/logos/fnbx/minesweeper/",
        "game_audio",
        {
          BIG_DIG: 2,
          DIG_REVEAL_1: 116,
          DIG_REVEAL_2: 170,
          DIG_REVEAL_3: 224,
          DIG_REVEAL_4: 282,
          DIG_REVEAL_5: 352,
          DIG_REVEAL_6: 422,
          DIG_REVEAL_7: 496,
          DIG_REVEAL_8: 574,
          MINE_1: 656,
          MINE_2: 802,
          MINE_3: 940,
          MINE_4: 1074,
          MINE_5: 1200,
          PLANT_FLAG: 1370,
          UNPLANT_FLAG: 1444,
        },
        385,
      ),
    },
    F6 = {
      fSd: new _.l6(E6.Sm, "BIG_DIG", 672),
      ATd: new _.l6(E6.Sm, "DIG_REVEAL_1", 312),
      BTd: new _.l6(E6.Sm, "DIG_REVEAL_2", 312),
      CTd: new _.l6(E6.Sm, "DIG_REVEAL_3", 336),
      DTd: new _.l6(E6.Sm, "DIG_REVEAL_4", 408),
      ETd: new _.l6(E6.Sm, "DIG_REVEAL_5", 408),
      FTd: new _.l6(E6.Sm, "DIG_REVEAL_6", 432),
      GTd: new _.l6(E6.Sm, "DIG_REVEAL_7", 456),
      HTd: new _.l6(E6.Sm, "DIG_REVEAL_8", 480),
      buc: new _.l6(E6.Sm, "MINE_1", 864),
      cuc: new _.l6(E6.Sm, "MINE_2", 816),
      duc: new _.l6(E6.Sm, "MINE_3", 792),
      euc: new _.l6(E6.Sm, "MINE_4", 744),
      fuc: new _.l6(E6.Sm, "MINE_5", 1008),
      eIb: new _.l6(E6.Sm, "PLANT_FLAG", 432),
      UNPLANT_FLAG: new _.l6(E6.Sm, "UNPLANT_FLAG", 432),
    },
    extraSounds = {
      DIG_REVEAL_ZERO: new Audio("audio/zero.wav"),
      DIG_REVEAL_NINE: new Audio("audio/nine.wav"),
      DIG_REVEAL_TEN: new Audio("audio/ten.wav"),
      DIG_REVEAL_ELEVEN: new Audio("audio/eleven.wav"),
      RESET_TEN: new Audio("audio/reset.ogg"),
      TEN_GROW: new Audio("audio/ten-grow.mp3"),
    };
    extraSounds.TEN_GROW.loop = true;

  var gPE = class extends _.fIE {
    constructor() {
      super(E6, F6);
    }
  };
  var hPE = {
      huc: new _.jIE(
        "/logos/fnbx/minesweeper/",
        "music_audio",
        {
          LOSE_MUSIC: 2,
          WIN_WATER_HARP: 1456,
          WINNER_MUSIC: 2826,
        },
        385,
      ),
    },
    game_music = {
      lose_music: new _.l6(hPE.huc, "LOSE_MUSIC", 8712),
      win_water_harp: new _.l6(hPE.huc, "WIN_WATER_HARP", 8208),
      winner_music: new _.l6(hPE.huc, "WINNER_MUSIC", 7800),
    },
    jPE = class extends _.fIE {
      constructor() {
        super(hPE, game_music);
      }
    };
  var fillZeroCells = function (a, b) {
      if (
        !a.oa[b[0]][b[1]].cellDug &&
        ((a.oa[b[0]][b[1]].cellDug = true),
        !a.oa[b[0]][b[1]].isMine && a.oa[b[0]][b[1]].mineCount === 0)
      ) {
        b = getCellNeighbors(a, b);
        for (let c of b) a.oa[c[0]][c[1]].cellDug || fillZeroCells(a, c);
      }
    },
    nPE = function (a, b, c, d) {
      if (!a.Da) {
        a.oa = Array(c.length);
        for (var e = 0; e < c.length; e++) {
          a.oa[e] = Array(c[e].length);
          for (var f = 0; f < c[e].length; f++)
            a.oa[e][f] = Object.assign({}, c[e][f]);
        }
        a.Ea = d;
        a.Ca = 0;
        a.Ba = new _.Xd(a.oa.length, a.oa[0].length);
      }
      a.Aa = new Map();
      for (c = 0; c < a.Ba.width; c++)
        for (d = 0; d < a.Ba.height; d++)
          a.oa[c][d].mineCount !== 0 &&
            !a.oa[c][d].isMine &&
            a.Aa.set([c, d], getCellNeighbors(a, [c, d]));
      for (fillZeroCells(a, [b.x, b.y]); ; ) {
        // `b` is state
        // c is ?????
        b = a;
        c = false;
        for (let [r, t] of b.Aa.entries())
          if (((d = r), (e = t), b.oa[d[0]][d[1]].cellDug)) {
            var g = 0;
            f = 0;
            for (let A of e)
              b.oa[A[0]][A[1]].flagCount
                ? g++
                : b.oa[A[0]][A[1]].cellDug || f++;
            g = b.oa[d[0]][d[1]].mineCount - g;
            for (let A of e)
              b.oa[A[0]][A[1]].cellDug ||
                b.oa[A[0]][A[1]].flagCount ||
                (g === 0
                  ? (fillZeroCells(b, A), (c = true))
                  : g === f && (countFlag(b, A), (c = true)));
            g === 0 && b.Aa.delete(d);
          }

        b = c;
        if (!b) {
          a: {
            b = a;
            if (b.Aa.size === 0) {
              b = false;
              break a;
            }
            e = [];
            for (let r of b.Aa.keys()) b.oa[r[0]][r[1]].cellDug && e.push(r);
            // `b` and `c` is state
            c = b;
            f = e;
            d = [];
            for (let r of f) {
              f = c.Aa.get(r);
              for (let t of f)
                if (!c.oa[t[0]][t[1]].cellDug && !c.oa[t[0]][t[1]].flagCount) {
                  f = false;
                  for (let A of d) A[0] === t[0] && A[1] === t[1] && (f = true);
                  f || d.push(t);
                }
            }
            c = d;
            // `d` is state
            d = b;
            f = c;
            g = Array(e.length);
            for (var h = 0; h < e.length; h++) {
              var k = e[h],
                l = Array(f.length + 1);
              for (var n = 0; n < f.length; n++) {
                var q = f[n];
                l[n] =
                  Math.abs(k[0] - q[0]) <= 1 && Math.abs(k[1] - q[1]) <= 1
                    ? 1
                    : 0;
              }
              n = d.Da ? getCellNeighbors(d, k) : d.Aa.get(k);
              q = 0;
              for (let r of n) d.oa[r[0]][r[1]].flagCount && q++;
              l[f.length] = d.oa[k[0]][k[1]].mineCount - q;
              g[h] = l;
            }
            e = d = g;
            f = e.length;
            g = f > 0 ? e[0].length : 0;
            for (k = h = 0; h < f && k < g; ) {
              l = h;
              n = Math.abs(e[l][k]);
              for (q = h + 1; q < f; q++)
                Math.abs(e[q][k]) > n && ((l = q), (n = Math.abs(e[q][k])));
              if (e[l][k] !== 0) {
                n = e[h];
                e[h] = e[l];
                e[l] = n;
                for (l = h + 1; l < f; l++)
                  for (
                    n = e[l][k] / e[h][k], e[l][k] = 0, q = k + 1;
                    q < g;
                    q++
                  )
                    e[l][q] -= e[h][q] * n;
                h += 1;
              }
              k += 1;
            }
            e = false;
            for (let r of d) {
              d = b;
              f = r;
              g = c;
              h = false;
              l = k = 0;
              for (n = 0; n < f.length - 1; n++)
                f[n] > 0 ? (k += f[n]) : f[n] < 0 && (l += f[n]);
              n = f[f.length - 1];
              if (n === k)
                for (k = 0; k < f.length - 1; k++)
                  ((l = g[k]),
                    f[k] > 0
                      ? (countFlag(d, l), (h = true))
                      : f[k] < 0 && (fillZeroCells(d, l), (h = true)));
              else if (n === l)
                for (k = 0; k < f.length - 1; k++)
                  ((l = g[k]),
                    f[k] > 0
                      ? (fillZeroCells(d, l), (h = true))
                      : f[k] < 0 && (countFlag(d, l), (h = true)));
              h && (e = true);
            }
            b = e;
          }
          if (!b) break;
        }
      }
      return a.Ca === a.Ea;
    },
    getCellNeighbors = function (a, b) {
      var c = [],
        d = b[0];
      b = b[1];
      oPE(a, c, d - 1, b);
      oPE(a, c, d - 1, b - 1);
      oPE(a, c, d - 1, b + 1);
      oPE(a, c, d + 1, b);
      oPE(a, c, d + 1, b - 1);
      oPE(a, c, d + 1, b + 1);
      oPE(a, c, d, b - 1);
      oPE(a, c, d, b + 1);
      return c;
    },
    countFlag = function (a, arr) {
      a.oa[arr[0]][arr[1]].flagCount ||
        ((a.oa[arr[0]][arr[1]].flagCount = 1), a.Ca++);
    },
    oPE = function (a, b, c, d) {
      c >= 0 &&
        c < a.Ba.width &&
        d >= 0 &&
        d < a.Ba.height &&
        a.oa[c][d].enabled &&
        b.push([c, d]);
    },
    pPE = class {
      constructor() {
        this.oa = [];
        this.Ca = this.Ea = 0;
        this.Da = false;
        this.Ba = new _.Xd(0, 0);
        this.Aa = new Map();
      }
      Sua() {
        this.Da = false;
      }
    };
  var qPE = class extends _.m {
    constructor(a) {
      super(a);
    }
  };
  qPE.prototype.kb = "foSC6e";
  var sPE,
    tPE,
    createGrid,
    setHtmlDisplays,
    APE,
    showFinishPopup,
    rPE,
    placeFlag,
    getTimerValue,
    OPE,
    getCellFromPixelPosition,
    HPE,
    isNumberCellOpen,
    chordCells,
    userDigCells,
    isCellInGrid,
    countOpenCells,
    endGame,
    NPE,
    VPE,
    getRealCellNeighbors,
    calculateMineCount,
    placeMines,
    openCell,
    playNumberSound,
    removeFlags,
    chipAwayCell,
    YPE,
    ZPE,
    $PE,
    playMineSound,
    bQE,
    throwAwayFlag,
    setPopupBackground,
    UPE,
    darkenColor,
    drawCell,
    drawCellPart,
    eQE,
    fQE,
    adventureMaps;

  adventureMaps = [
    [
      {
          "name": "Flower Pot",
          "mineCount": 4,
          "width": 7,
          "height": 7,
          "powerups": 0,
          "theme": 0,
      },
      {
          "name": "Greenhouse",
          "mineCount": 6,
          "width": 8,
          "height": 8,
          "powerups": 1,
          "theme": 0,
      },
      {
          "name": "First Customer",
          "mineCount": 10,
          "width": 10,
          "height": 8,
          "powerups": 1,
          "theme": 1,
      },
      {
          "name": "Backyard's Revenge",
          "mineCount": 15,
          "width": 9,
          "height": 13,
          "theme": 1,
      },
      {
          "name": "Half The Acre",
          "mineCount": 50,
          "width": 20,
          "height": 16,
          "theme": 2,
      },
      {
          "name": "Novice Patio",
          "mineCount": 40,
          "width": 18,
          "height": 14,
          "powerups": 3,
          "theme": 2,
      },
      {
          "name": "Sun's Set",
          "mineCount": 88,
          "width": 20,
          "height": 16,
          "powerups": 3,
          "theme": 3,
      },
      {
          "name": "Midnight Gardening",
          "mineCount": 88,
          "width": 20,
          "height": 16,
          "powerups": 3,
          "theme": 3,
      },
      {
          "name": "????SWEEPER",
          "mineCount": 35,
          "width": 20,
          "height": 16,
          "powerups": 0,
          "theme": 0,
      }
    ]
  ];
  sPE = function (a) {
    return a.Coa().then(() => {
      a.jd = true;
      a.Ba !== null && rPE(a);
    });
  };
  tPE = function (a) {
    a.La = null;
    a.Ma = null;
    a.Ha = null;
    a.Ba = null;
  };
  const cutGrid = function (a, cutout) {
    if (!cutout) {
      return;
    }
    var canvas = document.createElement("canvas"),
      ctx;

    canvas.width = a.Aa.width;
    canvas.height = a.Aa.height;
    ctx = canvas.getContext("2d", { willReadFrequently: true });
    ctx.drawImage(cutout, 0, 0);
    for (let b = 0; b < a.Aa.width; b++) {
      for (let c = 0; c < a.Aa.height; c++) {
        if (ctx.getImageData(b, c, 1, 1).data[2] == 255) {
          a.oa[b][c].enabled = false;
        }
      }
    }
  };
  createGrid = function (a, noReset) {
    if (!noReset) {
      a.oa = Array(a.Aa.width);
    }
    for (let b = 0; b < a.Aa.width; b++) {
      if (!noReset) {
        a.oa[b] = Array(a.Aa.height);
      }
      for (let c = 0; c < a.Aa.height; c++) {
        a.oa[b][c] = {
          enabled: true,
          isBossTile: false,
          isMine: false,
          mineValue: 0,
          FLb: false,
          mgd: 0,
          flagCount: 0,
          uNb: -1,
          cellDug: false,
          mineCount: 0,
          value: 0,
          color: uPE[Math.floor(Math.random() * uPE.length)],
          powerup: null,
        };
      }
    }
    try {
      cutGrid(a, a.cutout);
    } catch (e) {
      console.error(e);
    }
  };
  setHtmlDisplays = function (a) {
    if (!a.isDisposed()) {
      var b = a.totalMineCount - a.flagCount,
        time = getTimerValue(a.maxTime ? a.maxTime - a.Mb : a.Mb);
      a.Ya("coins").el().style.display = a.adventure ? "" : "hidden"
      _.ln(document.getElementById("livesCounter"), a.lives.toString())
      document.getElementById("timerDiv").style.background = a.maxTime
        ? "red"
        : "";
      _.ln(a.Ya("MUaQvf").el(), b.toString());
      _.ln(a.Ya("ajb2Y").el(), time);
      _.ln(a.Ya("coins").el(), a.coins);
      a.Ja("Yfvsbd").hb().style.visibility === "hidden" &&
        ((b = a.didWin ? time : "\u2013\u2013\u2013"),
        (time = a.highScores[a.Da]),
        (time = time > 0 ? getTimerValue(time) : "\u2013\u2013\u2013"),
        _.ln(a.Ya("LOtDEe").el(), b),
        _.ln(a.Ya("Vp6PHf").el(), time));
    }
  };
  const isCellDug = function (a, b, c) {
    const isTen = (a.ten && !a.bossIntro && b.x === a.tenPosition.x && b.y === a.tenPosition.y);
    if (c) {
      return (
        a.oa[b.x][b.y].enabled &&
        (a.oa[b.x][b.y].cellDug || isTen || isTileNine(a, b) || isTileAdjacentNine(a, b))
      );
    }
    return (
      !a.oa[b.x][b.y].enabled ||
      a.oa[b.x][b.y].cellDug ||
      isTileNine(a, b) ||
      isTen ||
      isTileAdjacentNine(a, b)
    );
  };
  APE = function (a) {
    if (!a.isDisposed()) {
      if (true) {
        //!!!!!

        if (a.bossIntro) {
          let now = Date.now(),
            centerCell = a.oa[a.ninePosition.x][a.ninePosition.y];
          if (
            !centerCell.cellDug &&
            (now - centerCell.mgd > 1000 || centerCell.mgd === 0)
          ) {
            centerCell.mgd = now;
          }
        }
        for (var b = 0; b < a.Aa.width; b++)
          for (var c = 0; c < a.Aa.height; c++)
            isCellDug(a, new _.Td(b, c)) &&
              !(
                (a.oa[b][c].isMine && !isTileNine(a, new _.Td(b, c))) ||
                isTileAdjacentNine(a, new _.Td(b, c))
              ) &&
              drawCell(a, new _.Td(b, c));
        a.context.fillStyle = currentTheme[7];
        b = Math.round(a.cellSize * 0.08);

        for (c = 0; c < a.Aa.width; c++)
          for (var d = 0; d < a.Aa.height; d++) {
            var e = new _.Td(c, d);
            (!isCellDug(a, e, true) ||
              (a.oa[e.x][e.y].FLb && !isTileNine(a, e)) ||
              isTileAdjacentNine(a, e)) &&
              ((e.x > 0 && isCellDug(a, new _.Td(e.x - 1, e.y), true)) ||
                (e.y > 0 && isCellDug(a, new _.Td(e.x, e.y - 1), true)) ||
                (e.x < a.Aa.width - 1 &&
                  isCellDug(a, new _.Td(e.x + 1, e.y), true)) ||
                (e.y < a.Aa.height - 1 &&
                  isCellDug(a, new _.Td(e.x, e.y + 1), true))) &&
              a.context.fillRect(
                e.x * a.cellSize - b,
                e.y * a.cellSize - b,
                a.cellSize + 2 * b,
                a.cellSize + 2 * b,
              );
          }
      }
      for (b = 0; b < a.Aa.width; b++)
        for (c = 0; c < a.Aa.height; c++)
          (isCellDug(a, new _.Td(b, c), true) &&
            !(a.oa[b][c].FLb || isTileAdjacentNine(a, new _.Td(b, c)))) ||
            drawCell(a, new _.Td(b, c));

      if (a.nine && a.maxTime) {
        let flowerSize = a.cellSize * 2.6
        a.context.save();
        a.context.translate((a.ninePosition.x + 0.5) * a.cellSize, (a.ninePosition.y + 0.5) * a.cellSize);
        a.context.rotate((a.nineRotation * Math.PI) / 180);
        a.context.drawImage(
          a.NINE_FLOWER,
          flowerSize / -2,
          flowerSize / -2,
          flowerSize,
          flowerSize,
        );
        a.context.restore();
        a.context.font = `bold ${a.cellSize * 0.62}pt Roboto, sans-serif`;
        a.context.textAlign = "center";
        a.context.fillStyle = gQE[8];
        a.context.fillText(
          "9",
          a.ninePosition.x * a.cellSize + a.cellSize / 2,
          a.ninePosition.y * a.cellSize + a.cellSize * 0.62 + (a.cellSize - a.cellSize * 0.62) / 2.1,
        );
        a.nineRotation += 4;
      }
      if (a.ten && !a.bossIntro) {
        a.context.fillStyle = colorToColor(gQE[9], gQE[2], a.tenTimer / 10000);
        a.context.beginPath();
        a.context.arc(
          a.tenPosition.x * a.cellSize + a.cellSize / 2,
          a.tenPosition.y * a.cellSize + a.cellSize / 2,
          getTenRadius(a),
          0,
          Math.PI * 2
        );
        a.context.closePath();
        a.context.fill();
        drawCell(
          a,
          a.tenPosition,
          true
        );
      }
      a.context.setTransform(1, 0, 0, 1, 0, 0);
      a.context.fillStyle = currentTheme[6];
      a.context.fillRect(0, 0, a.Ca.width, a.canvas.height);
      a.context.fillRect(
        a.canvas.width - a.Ca.width,
        0,
        a.Ca.width,
        a.canvas.height,
      );
      a.context.fillRect(0, 0, a.canvas.width, a.Ca.height);
      a.context.fillRect(
        0,
        a.canvas.height - a.Ca.height,
        a.canvas.width,
        a.Ca.height,
      );
      a.context.setTransform(1, 0, 0, 1, a.Ca.width, a.Ca.height);
      a.Ba && drawCell(a, a.Ba);
      for (b = 0; b < a.Ua.length; b++) {
        c = a.Ua[b];
        if (c.size <= 0) continue;
        e = Math.round(c.pos.x);
        var f = Math.round(c.pos.y);
        let g = (c.angle * Math.PI) / 180;
        g += (c.J8d ? 1 : -1) * c.size;
        d = c.radius * c.size;
        a.context.save();
        a.context.translate(e, f);
        a.context.rotate(g);
        switch (c.type) {
          case 0:
            a.context.fillStyle = c.color;
            a.context.beginPath();
            a.context.arc(0, 0, d, 0, 2 * Math.PI, false);
            a.context.fill();
            a.context.fillStyle = darkenColor(c.color, 0.2);
            a.context.beginPath();
            a.context.arc(0, 0, d * 0.3, 0, 2 * Math.PI, false);
            a.context.fill();
            break;
          case 1:
            e = d * 2;
            f = e / 3;
            a.context.fillStyle = c.color;
            a.context.fillRect(-(e / 2), -(f / 2), e, f);
            a.context.rotate(Math.PI / 3);
            a.context.fillRect(-(e / 2), -(f / 2), e, f);
            a.context.rotate(-Math.PI / 3);
            a.context.rotate((2 * Math.PI) / 3);
            a.context.fillRect(-(e / 2), -(f / 2), e, f);
            a.context.rotate((-2 * Math.PI) / 3);
            a.context.fillStyle = darkenColor(c.color, 0.2);
            a.context.beginPath();
            a.context.arc(0, 0, d * 0.4, 0, 2 * Math.PI, false);
            a.context.fill();
            break;
          case 2:
            d *= 2 / 3;
            a.context.fillStyle = c.color;
            a.context.scale(2, 1);
            a.context.beginPath();
            a.context.arc(0, 0, d, 0, 2 * Math.PI, false);
            a.context.fill();
            a.context.scale(0.5, 2);
            a.context.beginPath();
            a.context.arc(0, 0, d, 0, 2 * Math.PI, false);
            a.context.fill();
            a.context.scale(1, 0.5);
            a.context.fillStyle = darkenColor(c.color, 0.2);
            a.context.beginPath();
            a.context.arc(0, 0, d * 0.5, 0, 2 * Math.PI, false);
            a.context.fill();
            break;
          case 3:
            ((e = d * 2),
              (a.context.fillStyle = c.color),
              a.context.fillRect(-(e / 2), -(e / 2), e, e),
              a.context.rotate(Math.PI / 4),
              a.context.fillRect(-(e / 2), -(e / 2), e, e),
              a.context.rotate(-Math.PI / 4),
              (a.context.fillStyle = darkenColor(c.color, 0.2)),
              a.context.beginPath(),
              a.context.arc(0, 0, d * 0.5, 0, 2 * Math.PI, false),
              a.context.fill());
        }
        a.context.restore();
      }
      if (!a.isDisposed()) {
        for (b = 0; b < a.Za.length; b++)
          ((c = a.Za[b]),
            (d = Math.round(c.pos.x + a.cellSize / 6)),
            (e = Math.round(c.pos.y + a.cellSize / 9)),
            (f = c.Fe.x * 0.025),
            a.context.save(),
            a.context.translate(d, e),
            a.context.rotate(f),
            (d = Math.min(1, c.size)),
            (a.context.fillStyle = c.color),
            a.context.fillRect(
              -(a.cellSize / 6) * d,
              -(a.cellSize / 9) * d,
              (a.cellSize / 3) * d,
              (a.cellSize / 4.5) * d,
            ),
            a.context.restore());
        for (b = 0; b < a.wb.length; b++)
          ((c = a.wb[b]),
            (d = Math.round(c.pos.x + a.cellSize / 2)),
            (e = Math.round(c.pos.y + a.cellSize / 2)),
            (f = (c.angle * Math.PI) / 180),
            a.context.save(),
            a.context.translate(d, e),
            a.context.rotate(f),
            (d = Math.min(1, c.size)),
            (a.context.fillStyle = c.color),
            a.context.fillRect(
              -(a.cellSize / 2) * d,
              -(a.cellSize / 2) * d,
              a.cellSize * d,
              a.cellSize * d,
            ),
            a.context.restore());
        for (b = 0; b < a.ob.length; b++) {
          c = a.ob[b];
          let texture = c.texture;
          d = Math.round(c.pos.x + a.cellSize / 2);
          e = Math.round(c.pos.y + a.cellSize / 2);
          f = (c.angle * Math.PI) / 180;
          a.context.save();
          a.context.translate(d, e);
          a.context.rotate(f);
          c = Math.min(1, c.size);
          a.context.drawImage(
            texture,
            -(a.cellSize / 2) * c,
            -(a.cellSize / 2) * c,
            a.cellSize * c,
            a.cellSize * c,
          );
          a.context.restore();
        }
      };
      
      a.Bb > 0 &&
        (a.context.setTransform(1, 0, 0, 1, 0, 0),
        (c = (a.Bb / 1e3) * 8),
        (b = Math.random() * c - c / 2),
        (c = Math.random() * c - c / 2),
        a.context.canvas.height > 0 &&
          a.context.canvas.width > 0 &&
          (a.context.drawImage(a.context.canvas, b, c),
          a.context.setTransform(1, 0, 0, 1, a.Ca.width, a.Ca.height)));
      
    }
  };
  const getTenRadius = function (a) {
    if (!a.ten || !a.startedGame || a.bossIntro) {
      return 0;
    }
    let ratio = a.tenTimer / 10000;
    return ratio * a.cellSize * Math.min(a.Aa.width, a.Aa.height) * 0.5;
  };
  const isClickingTen = function (a, b) {
    if ((!a.ten || !a.startedGame) || a.bossIntro) {
      return false;
    }
    let r = Math.max(getTenRadius(a), a.cellSize / 2);
    cx = (a.tenPosition.x + 0.5) * a.cellSize;
    cy = (a.tenPosition.y + 0.5) * a.cellSize;
    return (b.x * a.cellSize - cx)**2 + (b.y * a.cellSize - cy)**2 <= r*r
  }
  showFinishPopup = function (a, willShow) {
    if (!a.isDisposed()) {
      var c = a.Ja("Yfvsbd").hb();
      willShow && !a.showingFinishPopup
        ? ((c.style.visibility = "visible"),
          (c.style.opacity = "1"),
          _.ew([new _.ro(c, "show")], {
            data: {
              fun: `time=${a.Mb},winner=${a.didWin},difficulty=${a.Da}`,
            },
          }),
          a.didWin
            ? game_music.winner_music.play(0, true)
            : game_music.lose_music.play(0, true))
        : !willShow &&
          c.style.opacity !== "0" &&
          a.showingFinishPopup &&
          (_.ew([new _.ro(c, "hide")]),
          (c.style.opacity = "0"),
          (0, _.xo)(() => {
            c.style.visibility = "hidden";
          }, 300),
          game_music.winner_music.stop(),
          game_music.lose_music.stop());
      a.showingFinishPopup = willShow;
      if (willShow && a.didWin && a.adventure) {
        a.adventure.coins = a.coins;
        a.adventure.powerups = a.powerups;
        a.adventure.level++;
      };
    }
  };
  rPE = function (a) {
    var b = a.Ba,
      c = new _.Td(
        b.x * a.cellSize + a.cellSize / 2,
        b.y * a.cellSize + a.cellSize / 2,
      ),
      d = a.buttonRadius + Math.max(25, a.cellSize * 0.75),
      e = Math.sqrt(2 * Math.pow(d, 2)),
      f = b.x === 0,
      g = b.y === 0,
      h = a.oa[b.x][b.y].cellDug,
      k = a.oa[b.x][b.y].flagCount,
      l = getRealCellNeighbors(a, b),
      n = 0,
      q = 8 - l.length;
    for (let r = 0; r < l.length; r++) {
      let t = l[r];
      a.oa[t.x][t.y].flagCount && n++;
      a.oa[t.x][t.y].cellDug && q++;
    }
    b = n === a.oa[a.Ba.x][b.y].mineCount && n + q !== 8;
    (!h && !k) || (h && b)
      ? ((k = g ? Math.PI / 2 : (3 * Math.PI) / 2),
        (a.La = new _.Td(
          a.Ca.width + c.x + Math.cos(k) * d,
          a.Ca.height + c.y + Math.sin(k) * d,
        )))
      : (a.La = null);
    !h && a.startedGame
      ? ((h = f ? 0 : Math.PI),
        (a.Ma = new _.Td(
          a.Ca.width + c.x + Math.cos(h) * d,
          a.Ca.height + c.y + Math.sin(h) * d,
        )))
      : (a.Ma = null);
    a.La !== null || a.Ma !== null
      ? ((d = (5 * Math.PI) / 4),
        f && g
          ? (d = Math.PI / 4)
          : f
            ? (d = (7 * Math.PI) / 4)
            : g && (d = (3 * Math.PI) / 4),
        (a.Ha = new _.Td(
          a.Ca.width + c.x + Math.cos(d) * e,
          a.Ca.height + c.y + Math.sin(d) * e,
        )))
      : (a.Ha = null);
  };
  const nextFlagCount = function (a, count) {
    if (count === 1) {
      return a.doubleMines ? 2 : a.antiMines ? -1 : 0;
    }
    if (count === 2) {
      return a.antiMines ? -1 : 0;
    }
    if (count === -1) {
      return a.doubleMines ? -2 : 0;
    }
    if (count === -2) {
      return 0;
    }
    return 1;
  };
  placeFlag = function (a, b) {
    let pastFlagCount = a.oa[b.x][b.y].flagCount;
    isCellInGrid(a, b) &&
      !isCellDug(a, b) &&
      ((a.oa[b.x][b.y].flagCount = nextFlagCount(a, a.oa[b.x][b.y].flagCount)),
      a.oa[b.x][b.y].flagCount
        ? ((a.oa[b.x][b.y].uNb = 0),
          a.oa[b.x][b.y].flagCount === 1
            ? a.flagCount++
            : (throwAwayFlag(a, b, pastFlagCount), F6.UNPLANT_FLAG.play()),
          F6.eIb.play())
        : ((a.oa[b.x][b.y].uNb = -1),
          a.flagCount--,
          throwAwayFlag(a, b, pastFlagCount),
          F6.UNPLANT_FLAG.play()));
  };
  getTimerValue = function (a) {
    a = Math.floor(a / 1e3);
    var b = (a < 100 ? "0" : "") + (a < 10 ? "0" : "") + a;
    a > 999 && (b = "999");
    return b;
  };
  OPE = function (a, b, c) {
    var digging = a.leftClicking && !a.Sa,
      flagging = a.rightClicking || (a.leftClicking && a.Sa),
      chording = a.readyToChord;
    if (a.Ij)
      a.Va === 0 && (digging || a.isMobile())
        ? showFinishPopup(a, true)
        : a.Va > 0 && (a.Va = Math.max(0, a.Va - 1e3));
    else {
      var g = getCellFromPixelPosition(a, b, c),
      clickingTen = isClickingTen(a, getFloatCellFromPixelPosition(a, b, c));
      if (g !== null) {
        a.isMobile()
          ? ((digging = false),
            a.Ba &&
              (HPE(a, b, c, a.La)
                ? (isNumberCellOpen(a, a.Ba)
                    ? chordCells(a, a.Ba)
                    : userDigCells(a, a.Ba),
                  (digging = true))
                : HPE(a, b, c, a.Ma)
                  ? (placeFlag(a, a.Ba), (digging = true))
                  : HPE(a, b, c, a.Ha) && (digging = true)),
            digging
              ? tPE(a)
              : !a.startedGame && isCellInGrid(a, g)
                ? userDigCells(a, g)
                : !isCellInGrid(a, g) ||
                    (isCellDug(a, g) && a.oa[g.x][g.y].mineCount === 0)
                  ? tPE(a)
                  : a.Ba !== null && a.Ba.x === g.x && a.Ba.y === g.y
                    ? (a.Qc < 350 &&
                        (isNumberCellOpen(a, a.Ba)
                          ? chordCells(a, a.Ba)
                          : userDigCells(a, a.Ba)),
                      tPE(a))
                    : ((a.Ba = clickingTen ? null : g),
                      rPE(a),
                      a.La === null &&
                        a.Ma === null &&
                        a.Ha === null &&
                        tPE(a)))
          : (chording || (digging && flagging)) && !a.powerup
            ? chordCells(a, g)
            : flagging
              ? placeFlag(a, g)
              : digging &&
                (a.bossIntro
                  ? g.x === a.ninePosition.x && g.y === a.ninePosition.y
                  : true) &&
                (clickingTen ? (a.tenTimer = 0, moveTen(a, g)) : userDigCells(a, g));
        if (countOpenCells(a) <= a.totalMineCount + (a.nine ? 8 : 0) && !a.Ij) {
          a.lastTenClicked = a.Mb;
          a.tenTimer = 0;
          a.didWin = true;
          endGame(a);
          b = a.Mb;
          if (a.highScores[a.Da] < 0 || b < a.highScores[a.Da])
            a.highScores[a.Da] = b;
          a.Ea.push(
            (0, _.xo)(() => {
              NPE(a);
            }, 800),
          );
        }
        a.Qc = 0;
        a.Lc = true;
      }
    }
  };
  getCellFromPixelPosition = function (a, x, y) {
    var d = _.oIE(), // device to pixel ratio
      e = new _.Td(); // coordinate
    e.x = Math.floor((x * d - a.Ca.width) / a.cellSize);
    e.y = Math.floor((y * d - a.Ca.height) / a.cellSize);
    return e;
  };
  const getFloatCellFromPixelPosition = function (a, x, y) {
    var d = _.oIE(), // device to pixel ratio
      e = new _.Td(); // coordinate
    e.x = (x * d - a.Ca.width) / a.cellSize;
    e.y = (y * d - a.Ca.height) / a.cellSize;
    return e;
  };
  HPE = function (a, b, c, d) {
    var e = a.buttonRadius;
    d === a.Ha && (e = a.buttonRadius * 0.75);
    a = _.oIE();
    return (
      d !== null && Math.abs(d.x - b * a) <= e && Math.abs(d.y - c * a) <= e
    );
  };
  isNumberCellOpen = function (a, b) {
    return isCellDug(a, b) && a.oa[b.x][b.y].mineCount !== 0;
  };
  const isTileMine = function (a, b) {
    return (
      (a.oa[b.x][b.y].isMine || isTileAdjacentNine(a, b)) && !isTileNine(a, b)
    );
  };
  chordCells = function (a, b) {
    if (
      isCellInGrid(a, b) &&
      a.oa[b.x][b.y].cellDug &&
      !isTileAdjacentNine(a, b) &&
      !isTileNine(a, b)
    ) {
      var c = getRealCellNeighbors(a, b),
        d = 0;
      for (var e = 0; e < c.length; e++) {
        var f = c[e],
          isAdjacentNine = isTileAdjacentNine(a, f)
          isOpenMine = isCellDug(a, f) && isTileMine(a, f);
        (!isCellDug(a, f) || isOpenMine) &&
          (d += isOpenMine
            ? isAdjacentNine ? 1 : a.oa[f.x][f.y].mineValue
            : a.oa[f.x][f.y].flagCount);
      }
      e = false;
      f = {
        cellsDug: 0,
        mineCount: 0,
        totalValue: 0,
      };
      if (d === a.oa[b.x][b.y].value)
        for (b = 0; b < c.length; b++) {
          d = c[b];
          let g = openCell(a, d);
          f.cellsDug += g.cellsDug;
          f.mineCount = Math.max(f.mineCount, g.mineCount);
          f.totalValue = Math.max(f.totalValue, g.totalValue);
          if (a.lives <= 0) {
            a.oa[d.x][d.y].isMine && !a.oa[d.x][d.y].flagCount && (e = true);
          }
        }
      e ? endGame(a) : playNumberSound(f);
    }
  };
  var playBossIntro = function (a, number) {
    let centerX = Math.floor(a.Aa.width / 2),
      centerY = Math.floor(a.Aa.height / 2),
      cellCoordinate = new _.Td(centerX, centerY);

    if (number == 9) {
      let neighbors = getRealCellNeighbors(a, cellCoordinate);
      a.ninePosition = new _.Td(centerX, centerY);
      neighbors.forEach((c) => {
        a.oa[c.x][c.y].isMine = true;
        a.oa[c.x][c.y].mineValue = 1;
        a.oa[c.x][c.y].isBossTile = true;
        setTimeout(() => openCell(a, c), Math.random() * 3000 + 1000);
        setTimeout(() => {
          a.bossIntro = false;
          a.maxTime = 199000;
        }, 4000);
      });
    } else if (number == 10) {
      a.tenPosition = new _.Td(
        Math.floor(a.Aa.width / 2),
        Math.floor(a.Aa.height / 2),
      );
      a.bossIntro = false;
    }
  };
  const collectPowerup = function (a, b) {
    let powerup = a.oa[b.x][b.y].powerup;
    a.oa[b.x][b.y].powerup = null;
    if (powerup !== "coin" && powerup !== "coins") {
      a.powerups.push(powerup)
    } else {
      a.coins += powerup === "coin" ? 10 : 40
    }
    F6.UNPLANT_FLAG.play();
    b = {
      pos: VPE(a, b),
      Fe: new _.Td(Math.random() * 2 * 10 - 10, Math.random() * -30),
      angle: 0,
      V_: Math.random() * 2 * 20 - 20,
      color: "",
      size: a.Ij && !a.didWin ? 3 : 1.5 + Math.random() * 0.5,
      midpoint: 0,
      texture:
        a.itemTextures[powerup],
    };
    b.Fe.y > -15 && (b.Fe.y = -15);
    Math.abs(b.Fe.x) < 5 && (b.Fe.x = 5 * (b.Fe.x > 0 ? 1 : -1));
    a.ob.push(b);


  };
  userDigCells = function (a, b) {
    if (isCellInGrid(a, b) && !a.oa[b.x][b.y].flagCount)
      if (a.bossIntro) {
        a.oa[b.x][b.y].mineCount = a.nine ? 9 : 10;
        a.oa[b.x][b.y].value = a.nine ? 9 : 10;
        if (!a.oa[b.x][b.y].cellDug) {
          var c = openCell(a, b);
          a.oa[b.x][b.y].isBossTile = true;
          a.oa[b.x][b.y].isMine || playNumberSound(c);

          playBossIntro(a, a.nine ? 9 : 10);
        }
      } else if (a.startedGame) {
        if (!a.oa[b.x][b.y].cellDug) {
          var uncoveringMineWithBrush = a.oa[b.x][b.y].isMine && a.powerup === "brush";
          var c = uncoveringMineWithBrush ? placeFlag(a, b) : openCell(a, b);
          a.oa[b.x][b.y].isMine || playNumberSound(c);
          a.powerup = null;
          a.lives <= 0 && !uncoveringMineWithBrush &&
            !a.oa[b.x][b.y].flagCount &&
            a.oa[b.x][b.y].isMine &&
            endGame(a);
        } else if (a.oa[b.x][b.y].powerup) {
          collectPowerup(a, b);
        }
      } else {
        if (isCellDug(a, b)) {
          return;
        }
        var c = false;
        let d = new Date(),
          e;
        removeFlags(a);
        do
          (placeMines(a, b),
            (c = nPE(a.Vt, b, a.oa, a.totalMineCount)),
            (e = new Date()));
        while (!c && e.valueOf() - d.valueOf() < 150);
        if (a.ten) {
          extraSounds.TEN_GROW.play();
        }
        a.Ea.push(
          (0, _.xo)(() => {
            playNumberSound(openCell(a, b));
            a.Bb = 1e3;
          }, 0),
        );
        a.nine && startNineMovement(a);
      }
  };
  const startNineMovement = function (a) {
    a.Ea.push(
      (0, _.xo)(
        () => {
          if (!a.startedGame || a.Ij) {
            return;
          }
          let direction = Math.random() > 0.5 ? 1 : -1;
          let dx = Math.random() > 0.5 ? 1 : -1,
            dy = Math.random() > 0.5 ? 1 : -1;
          if (a.ninePosition.x == 1) {
            dx = 1;
          }
          if (a.ninePosition.y == 1) {
            dy = 1;
          }
          if (a.ninePosition.x == a.Aa.width - 2) {
            dx = -1;
          }
          if (a.ninePosition.y == a.Aa.height - 2) {
            dy = -1;
          }
          a.ninePosition.x += direction > 0 ? dx : 0;
          a.ninePosition.y += direction < 0 ? dy : 0;
          for (let b = 0; b < a.Aa.width; b++)
            for (let c = 0; c < a.Aa.height; c++) {
              if (!a.oa[b][c].isBossTile) {
                a.oa[b][c].mineCount = calculateMineCount(
                  a,
                  new _.Td(b, c),
                  false,
                );

                a.oa[b][c].value = calculateMineCount(
                  a,
                  new _.Td(b, c),
                  false,
                  true,
                );
              }
            }
          if (dx != 0) {
            chipAwayCell(
              a,
              new _.Td(a.ninePosition.x + dx, a.ninePosition.y - 1),
              false,
              true,
            );
            chipAwayCell(
              a,
              new _.Td(a.ninePosition.x + dx, a.ninePosition.y),
              false,
              true,
            );
            chipAwayCell(
              a,
              new _.Td(a.ninePosition.x + dx, a.ninePosition.y + 1),
              false,
              true,
            );
          } else {
            chipAwayCell(
              a,
              new _.Td(a.ninePosition.x + 1, a.ninePosition.y + dy),
              false,
              true,
            );
            chipAwayCell(
              a,
              new _.Td(a.ninePosition.x, a.ninePosition.y + dy),
              false,
              true,
            );
            chipAwayCell(
              a,
              new _.Td(a.ninePosition.x - 1, a.ninePosition.y + dy),
              false,
              true,
            );
          }
          extraSounds.DIG_REVEAL_ZERO.play();
          startNineMovement(a);
        },
        Math.random() * 2000 + 300,
      ),
    );
  };
  isCellInGrid = function (a, b) {
    return (
      b.x >= 0 &&
      b.x < a.Aa.width &&
      b.y >= 0 &&
      b.y < a.Aa.height &&
      a.oa[b.x][b.y].enabled
    );
  };
  countOpenCells = function (a) {
    var b = 0;
    for (let c = 0; c < a.Aa.width; c++)
      for (let d = 0; d < a.Aa.height; d++) {
        let isPartOfNine = isTileNine(a, new _.Td(c, d)) || isTileAdjacentNine(a, new _.Td(c, d)),
        isMine = a.oa[c][d].isMine,
        cellDug = a.oa[c][d].cellDug;
        if (isPartOfNine ? (isMine) : (!cellDug || isMine)) {
          b++;
        }
      };
    return b;
  };
  endGame = function (a) {
    a.didWin
      ? a.Ea.push(
          (0, _.xo)(() => {
            game_music.win_water_harp.play();
            a.Yb = 800;
          }, 10),
        )
      : (a.Bb = 1e3);
    a.Ij = true;
    a.Va = 2e3;
    extraSounds.TEN_GROW.pause();
    setPopupBackground(a);
  };
  NPE = function (a) {
    a.Wb = 0;
    UPE(a);
    a.Ea.push(
      (0, _.xo)(() => {
        for (let c = 0; c < a.Aa.width; c++)
          for (let d = 0; d < a.Aa.height; d++)
            if (
              isTileMine(a, new _.Td(c, d)) &&
              !isCellDug(a, new _.Td(c, d))
            ) {
              let e = 2 + Math.floor(Math.random() * 3),
                f = [],
                g = 0,
                h = VPE(a, new _.Td(c, d));
              for (; f.length < e && g < 15; ) {
                g++;
                let k = a.cellSize / 8;
                var b = a.cellSize / 8;
                b = new _.Td(
                  h.x + b + Math.random() * (a.cellSize - 2 * b),
                  h.y + b + Math.random() * (a.cellSize - 2 * b),
                );
                let l = true;
                for (let n = 0; n < f.length; n++) {
                  let q = f[n];
                  Math.sqrt(
                    Math.pow(b.x - q.pos.x, 2) + Math.pow(b.y - q.pos.y, 2),
                  ) <
                    k * 3.5 && (l = false);
                }
                l &&
                  f.push({
                    pos: b,
                    angle: (Math.random() * Math.PI) / 2,
                    J8d: Math.random() < 0.5,
                    type: Math.floor(Math.random() * 4),
                    color: darkenColor(
                      uPE[Math.floor(Math.random() * uPE.length)],
                      Math.random() * 0.1,
                    ),
                    size: Math.random() * -3,
                    radius: (1 + Math.random() * 0.75) * k,
                  });
              }
              a.Ua.push.apply(a.Ua, f);
            }
      }, 1200),
    );
    a.Ea.push(
      (0, _.xo)(() => {
        showFinishPopup(a, true);
      }, 5500),
    );
  };
  VPE = function (a, b) {
    var c = new _.Td();
    c.x = b.x * a.cellSize;
    c.y = b.y * a.cellSize;
    return c;
  };
  getRealCellNeighbors = function (a, b) {
    var c = [];
    for (let d = b.x - 1; d <= b.x + 1; d++)
      for (let e = b.y - 1; e <= b.y + 1; e++) {
        let f = new _.Td(d, e);
        !f.equals(b) && isCellInGrid(a, f) && c.push(f);
      }
    return c;
  };
  calculateMineCount = function (a, b, c, j) {
    var d = 0;
    b = getRealCellNeighbors(a, b);
    for (let e = 0; e < b.length; e++) {
      let f = b[e];
      d += j
        ? isTileAdjacentNine(a, f)
          ? 1
          : +a.oa[f.x][f.y].mineValue
        : a.oa[f.x][f.y].isMine || isTileAdjacentNine(a, f)
          ? 1
          : 0;
    }
    c && (d += 8 - b.length);
    return d;
  };
  placeMines = function (a, safeSpot) {
    let b = 0;
    createGrid(a, a.bossBattle);
    for (var c = 0; c < a.totalMineCount; ) {
      let d = new _.Td(
        Math.floor(Math.random() * a.Aa.width),
        Math.floor(Math.random() * a.Aa.height),
      );
      a.oa[d.x][d.y].isMine || !a.oa[d.x][d.y].enabled;
      Math.abs(d.x - safeSpot.x) + Math.abs(d.y - safeSpot.y) <= 2 ||
        calculateMineCount(a, d, true) === 8 ||
        a.isBossTile ||
        (function () {
          a.oa[d.x][d.y].isMine = true;
          a.oa[d.x][d.y].mineValue = Math.random() < a.doubleMines ? 2 : 1;
          if (Math.random() < a.antiMines) {
            a.oa[d.x][d.y].mineValue *= -1;
          }
          c++;
          if (a.oa[d.x][d.y].mineValue < 0) {
            a.oa[d.x][d.y].color = invertColor(a.oa[d.x][d.y].color);
          }
        })();
    }
    for (b = 0; b < a.Aa.width; b++)
      for (c = 0; c < a.Aa.height; c++) {
        a.oa[b][c].mineCount = calculateMineCount(a, new _.Td(b, c), false);
        a.oa[b][c].value = calculateMineCount(a, new _.Td(b, c), false, true);
      }
    for (let i = 0; i < a.totalPowerupCount; i++) {
      let randomX = Math.floor(Math.random() * a.Aa.width),
        randomY = Math.floor(Math.random() * a.Aa.height),
        tile = a.oa[randomX][randomY];
      if (tile.isMine || tile.powerup) {
        continue;
      }
      tile.powerup =
        Math.random() > 0.3 ? pickRandom(["coins", "coin"]) : "brush";
    }
    a.startedGame = !a.bossIntro;
  };
  const pickRandom = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  },
  moveTen = function (a, exclude) {
    let pos = new _.Td(
      Math.floor(Math.random() * a.Aa.width),
      Math.floor(Math.random() * a.Aa.height),
    );
    while ((pos.x === exclude.x && pos.y === exclude.y) && isTileMine(a, pos)) {
      pos = new _.Td(
        Math.floor(Math.random() * a.Aa.width),
        Math.floor(Math.random() * a.Aa.height),
      );
    };
    a.tenPosition = pos;
    extraSounds.RESET_TEN.play();
  };
  openCell = function (a, b, force) {
    if (!isCellInGrid(a, b) || (isClickingTen(a, b) && a.lives > 0) || isCellDug(a, b) || (a.oa[b.x][b.y].flagCount && !force))
      return {
        cellsDug: 0,
        mineCount: 0,
        totalValue: 0,
      };
    a.oa[b.x][b.y].flagCount = 0;
    a.oa[b.x][b.y].cellDug = true;
    var c = {
      cellsDug: 1,
      mineCount: a.oa[b.x][b.y].mineCount,
      totalValue: a.oa[b.x][b.y].value,
    };
    chipAwayCell(a, b, a.oa[b.x][b.y].isMine);
    if (a.oa[b.x][b.y].isMine) {
      if (!a.bossIntro) {
        a.lives--;
        a.flagCount++;
      }
      a.oa[b.x][b.y].FLb = true;
      a.oa[b.x][b.y].mgd = Date.now();
      let e = YPE(a, b);
      if (a.lives > 0 || a.bossIntro) {
        a.showingFinishPopup || playMineSound(a);
        $PE(a, b);
        return c;
      }
      if (e != null) {
        if (
          (a.Ea.push(
            (0, _.xo)(() => openCell(a, e), 150 + Math.random() * 550),
          ),
          Math.random() < 0.5)
        ) {
          let f = YPE(a, e);
          f != null &&
            a.Ea.push(
              (0, _.xo)(() => openCell(a, f), 150 + Math.random() * 550),
            );
        }
      } else
        a.Ea.push(
          (0, _.xo)(() => {
            var f = ZPE(a) ? 3250 : 2250;
            a.Ea.push(
              (0, _.xo)(() => {
                showFinishPopup(a, true);
              }, f),
            );
          }, 750),
        );
      $PE(a, b);
      a.showingFinishPopup || playMineSound(a);
    }
    if (!a.oa[b.x][b.y].isMine && a.oa[b.x][b.y].mineCount === 0) {
      b = getRealCellNeighbors(a, b);
      for (let e = 0; e < b.length; e++) {
        var d = b[e];
        a.oa[d.x][d.y].cellDug ||
          ((d = openCell(a, d)),
          (c.cellsDug += d.cellsDug),
          (c.mineCount = Math.max(c.mineCount, d.mineCount)),
          (c.totalValue = Math.max(c.totalValue, d.totalValue)));
      }
    }
    return c;
  };
  playNumberSound = function (a) {
    if (!a.cellsDug) {
      return;
    }
    if (a.cellsDug >= 9) {
      F6.fSd.play();
      return;
    } else {
      switch (a.mineCount) {
        case 9:
          extraSounds.DIG_REVEAL_NINE.play();
          return;
        case 10:
          extraSounds.DIG_REVEAL_TEN.play();
          return;
      };
      if (a.totalValue === 0) {
        extraSounds.DIG_REVEAL_ZERO.play();
      }
      switch (((a.totalValue - 1) % 8) + 1) {
        case 1:
          F6.ATd.play();
          break;
        case 2:
          F6.BTd.play();
          break;
        case 3:
          F6.CTd.play();
          break;
        case 4:
          F6.DTd.play();
          break;
        case 5:
          F6.ETd.play();
          break;
        case 6:
          F6.FTd.play();
          break;
        case 7:
          F6.GTd.play();
          break;
        case 8:
          F6.HTd.play();
          break;
      }
    }
  };
  removeFlags = function (a) {
    for (let b = 0; b < a.Aa.width; b++)
      for (let c = 0; c < a.Aa.height; c++)
        a.oa[b][c].flagCount &&
          throwAwayFlag(a, new _.Td(b, c), a.oa[b][c].flagCount);
    a.flagCount = 0;
  };
  chipAwayCell = function (a, coordinate, isMine, dig) {
    let cellDug = false;
    if (dig) {
      cellDug = a.oa[coordinate.x][coordinate.y].cellDug;
    }
    a.wb.push({
      pos: VPE(a, coordinate),
      Fe: isMine
        ? new _.Td(0, -30)
        : new _.Td(Math.random() * 2 * 10 - 10, Math.random() * -20),
      angle: 0,
      V_: Math.random() * 2 * 10 - 10,
      color:
        (coordinate.x + coordinate.y) % 2 === 0
          ? currentTheme[cellDug ? 2 : 0]
          : currentTheme[cellDug ? 3 : 1],
      size: 1 + Math.random() * 0.2,
      midpoint: 0,
    });
  };
  YPE = function (a, b) {
    for (var c = 1; c < 15; c++) {
      let d,
        e,
        f = b.y - c;
      for (e = b.x - c; e <= b.x + c; e++)
        if (((d = new _.Td(e, f)), bQE(a, d))) return d;
      f = b.y + c;
      for (e = b.x - c; e <= b.x + c; e++)
        if (((d = new _.Td(e, f)), bQE(a, d))) return d;
      e = b.x - c;
      for (f = b.y - c + 1; f < b.y + c; f++)
        if (((d = new _.Td(e, f)), bQE(a, d))) return d;
      e = b.x + c;
      for (f = b.y - c + 1; f <= b.y + c; f++)
        if (((d = new _.Td(e, f)), bQE(a, d))) return d;
    }
    for (b = 0; b < a.Aa.width; b++)
      for (c = 0; c < a.Aa.height; c++)
        if (bQE(a, new _.Td(b, c))) return new _.Td(b, c);
    return null;
  };
  ZPE = function (a) {
    var b = false;
    for (let c = 0; c < a.Aa.width; c++)
      for (let d = 0; d < a.Aa.height; d++) {
        let e = a.oa[c][d];
        e.flagCount &&
          !e.isMine &&
          (throwAwayFlag(a, new _.Td(c, d), e.flagCount), (b = true));
      }
    b && F6.UNPLANT_FLAG.play();
    a.Tk = true;
    return b;
  };
  $PE = function (a, b) {
    for (let d = 0; d < 10; d++) {
      var c = VPE(a, b);
      c = new _.Td(
        c.x + Math.random() * a.cellSize,
        c.y + Math.random() * a.cellSize,
      );
      let e = _.kG(_.lFd(_.lG(a.oa[b.x][b.y].color), Math.random() * 0.2));
      c = {
        pos: c,
        Fe: new _.Td(Math.random() * 2 * 10 - 10, Math.random() * -35),
        angle: 0,
        V_: 0,
        color: e,
        size: 2 + Math.random() * 2,
        midpoint: 0,
      };
      c.Fe.y > -15 && (c.Fe.y = -15);
      Math.abs(c.Fe.x) < 5 && (c.Fe.x = 5 * (c.Fe.x > 0 ? 1 : -1));
      c.midpoint = c.pos.x + c.Fe.x * 2;
      a.Za.push(c);
    }
  };
  playMineSound = function (a) {
    switch (cQE[a.Zc]) {
      case 0:
        F6.buc.play();
        break;
      case 1:
        F6.cuc.play();
        break;
      case 2:
        F6.duc.play();
        break;
      case 3:
        F6.euc.play();
        break;
      case 4:
        F6.fuc.play();
    }
    a.Zc++;
    a.Zc >= cQE.length && (a.Zc = 0);
  };
  bQE = function (a, b) {
    return (
      isCellInGrid(a, b) &&
      a.oa[b.x][b.y].isMine &&
      !a.oa[b.x][b.y].FLb &&
      !a.oa[b.x][b.y].flagCount
    );
  };
  throwAwayFlag = function (a, b, pastCount) {
    b = {
      pos: VPE(a, b),
      Fe: new _.Td(Math.random() * 2 * 10 - 10, Math.random() * -30),
      angle: 0,
      V_: Math.random() * 2 * 20 - 20,
      color: "",
      size: a.Ij && !a.didWin ? 3 : 1.5 + Math.random() * 0.5,
      midpoint: 0,
      texture:
        pastCount === 2
          ? a.DOUBLE_FLAG_ICON
          : pastCount === -1
            ? a.ANTI_FLAG_ICON
            : pastCount === -2
              ? a.ANTI_DOUBLE_FLAG_ICON
              : a.Zd,
    };
    b.Fe.y > -15 && (b.Fe.y = -15);
    Math.abs(b.Fe.x) < 5 && (b.Fe.x = 5 * (b.Fe.x > 0 ? 1 : -1));
    a.ob.push(b);
  };
  setPopupBackground = function (a) {
    a.isDisposed() ||
      (a.didWin
        ? (_.tn(
            a.Ya("Rs1rF").el(),
            "background-image",
            "url(" + a.Ll.src + ")",
          ),
          _.ln(a.Ya("AWieJ").el(), "Play again"))
        : (_.tn(
            a.Ya("Rs1rF").el(),
            "background-image",
            "url(" + a.Ah.src + ")",
          ),
          _.ln(a.Ya("AWieJ").el(), "Try again")));
  };
  UPE = function (a) {
    for (let b = 0; b < a.Aa.width; b++)
      for (let c = 0; c < a.Aa.height; c++)
        a.oa[b][c].flagCount &&
          a.Ea.push(
            (0, _.xo)(
              () => {
                throwAwayFlag(a, new _.Td(b, c), a.oa[b][c].flagCount);
                a.oa[b][c].flagCount = 0;
              },
              (c + 0.5) * 165,
            ),
          );
  };
  let themes = [
      // default
      [
        "#AAD751",
        "#A2D149",
        "#E5C29F",
        "#D7B899",
        "#90CAF9",
        "#83C4F7",
        "#578A34",
        "#87af3a",
        "#AAD751",
        "#A2D149",
      ],
      // bright green
      [
        "#2eb845",
        "#2caf44",
        "#ebd098",
        "#dec691",
        "#90CAF9",
        "#83C4F7",
        "#3b8a34",
        "#a3af3a",
        "#2eb845",
        "#2caf44",
      ],
      // snowy
      [
        "#deeced",
        "#d1e4e6",
        "#f0e9c7",
        "#e5dfbd",
        "#90CAF9",
        "#83C4F7",
        "#75898a",
        "#87af3a",
        "#AAD751",
        "#A2D149",
      ],
      // night
      [
        "#494351",
        '#443e4c',
        '#432c68',
        '#3d285d',
        "#90CAF9",
        "#83C4F7",
        "#262428",
        '#7850c5',
        "#494351",
        '#443e4c',
      ],

      // rocks (unfinished)
      [
        "#6d7374",
        "#666c6d",
        "#3f3e42",
        "#27292b",
        "#90CAF9",
        "#83C4F7",
        "#4b4b4b",
        "#c8c8c8",
        "#6d7374",
        "#666c6d",
      ],

      // nostalga
      [
        "#c0c0c0",
        "#b7b7b7",
        "#b0b0b0",
        "#acacac",
        "#a7c0d4",
        "#8fadc5",
        "#a0a0a0",
        "#808080",
        "#90CAF9",
        "#83C4F7",
      ],
      // beach
      [
        "#f2d78c",
        "#eccd79",
        "#b0b0b0",
        "#acacac",
        "#90CAF9",
        "#83C4F7",
        "#725e1d",
        "#af843a",
        "#E5C29F",
        "#D7B899",
      ],
      // 11
      [
        "#071d07",
        "#051505",
        "#180f07",
        "#070503",
        "#90CAF9",
        "#83C4F7",
        "#1d2e12",
        "#87af3a",
        "#AAD751",
        "#A2D149",
      ],
    ],
    currentTheme = themes[localStorage.getItem("savedTheme") || 0];
  document.querySelector(".NWJp1d").style.backgroundColor = currentTheme[6];
  darkenColor = function (color, amount) {
    // to array of [R, G, B]
    color = _.lG(color);
    return _.kG(
      amount < 0 ? _.mFd(color, Math.abs(amount)) : _.lFd(color, amount),
    );
  };
  const invertColor = function (color) {
    // to array of [R, G, B]
    color = _.lG(color);
    return _.kG(color.map((component) => 255 - component));
  };
  const colorToColor = function (base, target, amount) {
    base = _.lG(base);
    target = _.lG(target);
    return _.kG(_.mG(target, base, amount));
  }
  const isTileNine = function (a, b) {
    return (
      a.nine &&
      !a.bossIntro &&
      b.x == a.ninePosition.x &&
      b.y === a.ninePosition.y
    )
  },
  isTileAdjacentNine = function (a, b) {
    return (
      a.nine &&
      !a.bossIntro &&
      !isTileNine(a, b) &&
      Math.abs(b.x - a.ninePosition.x) < 2 &&
      Math.abs(b.y - a.ninePosition.y) < 2
    );
  };
  drawCell = function (a, b, force) {
    var c = a.oa[b.x][b.y];
    const isNine = isTileNine(a, b),
      isAdjacentNine = isTileAdjacentNine(a, b),
      isTen = a.ten && !a.bossIntro && b.x === a.tenPosition.x && b.y === a.tenPosition.y;
    if (isTen && !force) {
      return;
    }
    drawCellPart(
      a,
      b,
      !c.enabled
        ? "DISABLED"
        : isNine || isTen
          ? "ADJACENT"
          : (c.isMine && c.cellDug && !c.flagCount) || isAdjacentNine
            ? "DETONATED_MINE"
            : c.flagCount
              ? !c.isMine && a.Tk
                ? "BAD_FLAG"
                : "FLAG"
              : c.cellDug
                ? c.mineCount !== 0
                  ? "ADJACENT"
                  : "DUG"
                : "GRASS",
      c,
    );
  };
  drawCellPart = function (a, b, c, tile) {
    const isNine = isTileNine(a, b),
      isAdjacentNine = isTileAdjacentNine(a, b),
      isTen = a.ten && !a.bossIntro && b.x === a.tenPosition.x && b.y === a.tenPosition.y;
    switch (c) {
      case "DISABLED":
        a.context.fillStyle = currentTheme[6];
        eQE(a, b, tile);
        break;
      case "GRASS":
        a.context.fillStyle =
          (b.x + b.y) % 2 === 0
            ? fQE(a, currentTheme[0], currentTheme[8], b)
            : fQE(a, currentTheme[1], currentTheme[9], b);
        eQE(a, b, tile);
        if (a.powerup && b.equals(a.Ab)) {
          a.context.drawImage(
            a.itemTextures[a.powerup],
            b.x * a.cellSize,
            b.y * a.cellSize,
            a.cellSize,
            a.cellSize,
          );
        }
        break;
      case "DUG":
        a.context.fillStyle =
          (b.x + b.y) % 2 === 0
            ? fQE(a, currentTheme[2], currentTheme[4], b)
            : fQE(a, currentTheme[3], currentTheme[5], b);
        eQE(a, b, tile);
        a.context.strokeStyle = currentTheme[7];
        let k = Math.round(a.cellSize * 0.08) / 2;
        if (isTen) {
          a.context.strokeRect(
            b.x * a.cellSize + k,
            b.y * a.cellSize + k,
            a.cellSize - 2 * k,
            a.cellSize - 2 * k,
          );
        }
        if (tile.powerup && tile.mineCount === 0) {
          a.context.drawImage(
            a.itemTextures[tile.powerup],
            b.x * a.cellSize,
            b.y * a.cellSize,
            a.cellSize,
            a.cellSize,
          );
        }
        if (a.powerup && b.equals(a.Ab) && tile.mineCount === 0) {
          a.context.drawImage(
            a.itemTextures[a.powerup],
            b.x * a.cellSize,
            b.y * a.cellSize,
            a.cellSize,
            a.cellSize,
          );
        }
        break;
      case "ADJACENT":
        drawCellPart(a, b, "DUG", tile);
        let d = isTen ? Math.max(10 - Math.floor(a.tenTimer / 1000), 0) : isNine ? 9 : tile.value;
        let color = gQE[Math.abs(isTen ? 10 : d) - 1] || "#FFF";
        c = a.cellSize * 0.62 * (d.toString().length > 1 ? 0.8 : 1);
        a.context.strokeStyle = "white";
        a.context.lineWidth = Math.round(a.cellSize * 0.08);
        a.context.font = `bold ${c}pt Roboto, sans-serif`;
        a.context.textAlign = "center";
        a.context.fillStyle = fQE(
          a,
          tile.value < 0 ? invertColor(color) : color,
          (b.x + b.y) % 2 === 0 ? currentTheme[4] : currentTheme[5],
          b,
        );
        /*a.context.strokeText(
          d.toString(),
          b.x * a.cellSize + a.cellSize / 2,
          b.y * a.cellSize + c + (a.cellSize - c) / 2.1,
        );*/
        a.context.fillText(
          d.toString(),
          b.x * a.cellSize + a.cellSize / 2,
          b.y * a.cellSize + c + (a.cellSize - c) / 2.1,
        );
        if (tile.powerup && !isNine) {
          a.context.drawImage(
            a.itemTextures[tile.powerup],
            b.x * a.cellSize,
            b.y * a.cellSize,
            a.cellSize,
            a.cellSize,
          );
        }
        if (a.powerup && b.equals(a.Ab)) {
          a.context.drawImage(
            a.itemTextures[a.powerup],
            b.x * a.cellSize,
            b.y * a.cellSize,
            a.cellSize,
            a.cellSize,
          );
        }
        break;
      case "FLAG":
        let texture =
          tile.flagCount < 0
            ? tile.flagCount === -2
              ? a.ANTI_DOUBLE_FLAG_PLANT
              : a.ANTI_FLAG_PLANT
            : tile.flagCount > 1
              ? a.DOUBLE_FLAG_PLANT
              : a.zg;
        drawCellPart(a, b, "GRASS", tile);
        texture.render(
          Math.min(Math.floor(tile.uNb), 9),
          new _.Td(b.x * a.cellSize, b.y * a.cellSize),
          new _.Td(0, 0),
          0,
          a.cellSize / texture.getWidth(),
        );
        break;
      case "BAD_FLAG":
        drawCellPart(a, b, "GRASS", tile);
        a.context.drawImage(
          a.Hi,
          b.x * a.cellSize,
          b.y * a.cellSize,
          a.cellSize,
          a.cellSize,
        );
        break;
      case "DETONATED_MINE":
        a.context.fillStyle = tile.color;
        eQE(a, b, tile);
        drawCellPart(a, b, "MINE", tile);
        break;
      case "MINE":
        ((a.context.fillStyle = darkenColor(tile.color, 0.35)),
          tile.mineValue < 0 &&
            (a.context.fillStyle = darkenColor(tile.color, -0.35)),
          a.context.beginPath(),
          a.context.arc(
            b.x * a.cellSize + a.cellSize / 2,
            b.y * a.cellSize + a.cellSize / 2,
            a.cellSize / 4,
            0,
            2 * Math.PI,
            false,
          ),
          a.context.fill());
    }
    a.Ba &&
      a.Ba.equals(b) &&
      ((a.context.strokeStyle = currentTheme[6]),
      (a.context.lineWidth = a.cellSize / 10),
      a.context.beginPath(),
      a.context.rect(
        b.x * a.cellSize,
        b.y * a.cellSize,
        a.cellSize,
        a.cellSize,
      ),
      a.context.stroke(),
      a.context.setTransform(1, 0, 0, 1, 0, 0),
      a.La !== null &&
        ((a.context.fillStyle = currentTheme[6]),
        a.context.beginPath(),
        a.context.arc(a.La.x, a.La.y, a.buttonRadius, 0, 2 * Math.PI, false),
        a.context.fill(),
        (b = a.buttonRadius * 2.4),
        a.context.drawImage(a.Pi, a.La.x - b / 2, a.La.y - b / 2, b, b)),
      a.Ma !== null &&
        ((a.context.fillStyle = currentTheme[6]),
        a.context.beginPath(),
        a.context.arc(a.Ma.x, a.Ma.y, a.buttonRadius, 0, 2 * Math.PI, false),
        a.context.fill(),
        (b = a.buttonRadius * 2.25),
        a.context.drawImage(a.Zd, a.Ma.x - b / 2.25, a.Ma.y - b / 2, b, b)),
      a.Ha !== null &&
        ((b = a.buttonRadius * 0.75),
        (a.context.fillStyle = currentTheme[6]),
        a.context.beginPath(),
        a.context.arc(a.Ha.x, a.Ha.y, b, 0, 2 * Math.PI, false),
        a.context.fill(),
        (b *= 1.5),
        a.context.drawImage(a.Sf, a.Ha.x - b / 2, a.Ha.y - b / 2, b, b)),
      a.context.setTransform(1, 0, 0, 1, a.Ca.width, a.Ca.height));
  };
  eQE = function (a, b, tile) {
    const isNine = isTileNine(a, b),
      isAdjacentNine = isTileAdjacentNine(a, b),
      cellDug = isCellDug(a, b);
    var c =
        b.equals(a.Ab) && (!cellDug || tile.mineCount !== 0) && tile.enabled,
      d =
        a.Ab === null ||
        !(
          a.readyToChord ||
          (a.leftClicking &&
            !a.Sa &&
            (a.rightClicking || (a.leftClicking && a.Sa)))
        ) ||
        cellDug ||
        tile.flagCount
          ? a.Ba === null ||
            !isCellDug(a, new _.Td(a.Ba.x, a.Ba.y), true) ||
            cellDug ||
            tile.flagCount
            ? false
            : Math.abs(b.x - a.Ba.x) <= 1 && Math.abs(b.y - a.Ba.y) <= 1
          : Math.abs(b.x - a.Ab.x) <= 1 && Math.abs(b.y - a.Ab.y) <= 1;
    a.Ij || (!c && !d)
      ? a.Yb > 0 && !cellDug
        ? (a.context.fillStyle = darkenColor(
            a.context.fillStyle,
            -(a.Yb / 800) / 2,
          ))
        : (a.Ij && tile.FLb) ||
          (a.bossIntro &&
            ((c = (1 - (Date.now() - tile.mgd) / 600) * 0.85),
            c > 0 &&
              (a.context.fillStyle = darkenColor(
                a.context.fillStyle,
                Math.min(0, -c),
              ))))
      : (a.context.fillStyle = darkenColor(a.context.fillStyle, -0.25));
    a.context.fillRect(
      b.x * a.cellSize,
      b.y * a.cellSize,
      a.cellSize,
      a.cellSize,
    );
  };
  fQE = function (a, b, c, d) {
    var e = d.y;
    d = a.Wb - e * 0.05;
    if (d < 0) return b;
    if (d > 1)
      return (
        (d = Math.max(1, a.Wb - e * 0.2)),
        (d = 2 * Math.PI * (((d - 1) % 8) / 8)),
        (d = (Math.sin(d + (3 * Math.PI) / 2) + 1) / 2),
        (a =
          c === currentTheme[5]
            ? currentTheme[4]
            : c === currentTheme[4]
              ? currentTheme[5]
              : c),
        (c = _.lG(c)),
        (a = _.lG(a)),
        _.kG(_.mG(a, c, d))
      );
    a = _.lG(b);
    c = _.lG(c);
    return _.kG(_.mG(c, a, d));
  };
  _.G6 = class extends _.Js {
    static Ta() {
      return {
        jsdata: {
          bCe: qPE,
        },
        service: {
          Lf: _.nv,
        },
      };
    }
    constructor(a) {
      super(a.Na);
      this.cutout = null;
      this.qc = null;
      this.Ud = {};
      this.trueCellSize = 0;
      this.cellSize = 0;
      this.Bd = {};
      this.od = {};
      this.Qe = {};
      this.oa = [];
      this.Qc = 0;
      this.Tk = this.Ij = this.Lc = false;
      this.Va = 0;
      this.didWin = false;
      this.Mb = 0;
      this.highScores = {};
      this.flagCount = this.Ao = this.startTime = 0;
      this.startedGame = this.muted = this.Sa = false;
      this.maxTime = 0;
      this.Ba = null;
      this.showingFinishPopup = false;
      this.Yl = true;
      this.wb = [];
      this.Za = [];
      this.ob = [];
      this.Ua = [];
      this.Ea = [];
      this.Dc = this.jd = false;
      this.Ce = 0;
      this.closed = true;
      this.Wb = -1;
      this.Zc = this.Yb = this.Bb = 0;
      this.Lf = a.service.Lf;
      this.yf = _.Oh(gPE);
      this.Th = _.Oh(jPE);
      this.Dw = !!_.B(a.jsdata.bCe, 1);
      this.canvas = this.Ja("UzWXSb").el();
      this.context = this.canvas.getContext("2d");
      this.topBar = this.Ja("P0FCKc").el();
      _.ZO(this);
      this.powerup = null;
      this.Da = "MEDIUM";
      // cellSize
      this.Ud.EASY = 45;
      this.Ud.MEDIUM = 30;
      this.Ud.HARD = 25;
      this.cellSize = this.Ud[this.Da];
      this.trueCellSize = this.Ud[this.Da];
      // mine count values
      this.Bd.EASY = 10;
      this.Bd.MEDIUM = this.isMobile() ? 35 : 40;
      this.Bd.HARD = this.isMobile() ? 75 : 99;
      // usable mine count
      this.totalMineCount = this.Bd[this.Da];
      this.doubleMines = 0;
      this.antiMines = 0;
      // board sizes
      this.od.EASY = new _.Xd(10, 8);
      this.od.MEDIUM = new _.Xd(18, 14);
      this.od.HARD = new _.Xd(24, 20);
      // board size (used)
      this.Aa = this.od[this.Da];
      this.lives = 3;
      this.powerups = [];
      this.coins = 0;
      // ?????
      this.Qe.EASY = 80;
      this.Qe.MEDIUM = 200;
      this.Qe.HARD = 360;
      this.isMobile()
        ? (_.ze(this.canvas, "touchstart", (b) => this.roa(b)),
          _.ze(this.canvas, "touchmove", (b) => {
            this.closed ||
              (b.preventDefault(),
              (b = new _.Td(b.clientX, b.clientY - 60)),
              (b = getCellFromPixelPosition(this, b.x, b.y)),
              b === null ||
                this.Ba === null ||
                (this.Ba.x === b.x && this.Ba.y === b.y) ||
                (this.Lc = false));
          }),
          _.ze(this.canvas, "touchend", (b) => {
            this.closed ||
              b.target !== this.canvas ||
              (b.preventDefault(), (this.Lc = false));
          }),
          this.Lf.addListener(() => {
            sPE(this);
          }),
          window.ResizeObserver &&
            new window.ResizeObserver(() => {
              sPE(this);
            }).observe(this.getRoot().el()))
        : (_.ze(this.canvas, "mousedown", (b) => this.Tc(b)),
          _.ze(this.canvas, "mouseup", (b) => {
            this.closed ||
              (b.preventDefault(),
              b.button === 0
                ? (this.leftClicking = false)
                : b.button === 2
                  ? (this.rightClicking = false)
                  : b.button === 1 && (this.readyToChord = false));
          }),
          _.ze(this.canvas, "mousemove", (b) => {
            this.Ab = getCellFromPixelPosition(this, b.offsetX, b.offsetY);
          }),
          _.ze(this.canvas, "mouseout", () => {
            this.Ab = null;
            this.readyToChord = this.rightClicking = this.leftClicking = false;
          }),
          _.ze(document, "keydown", (b) => this.Nda(b)),
          _.ze(document, "keyup", (b) => {
            if (!this.closed) {
              switch (b.keyCode) {
                case 17:
                  this.Sa = false;
              }
              b.preventDefault();
            }
          }),
          this.canvas.addEventListener("contextmenu", (b) =>
            b.preventDefault(),
          ));
      // high scores
      this.highScores.EASY = -1;
      this.highScores.MEDIUM = -1;
      this.highScores.HARD = -1;
      this.readyToChord = this.rightClicking = this.leftClicking = false;
      this.Xx =
        "//www.gstatic.com/images/icons/material/system/2x/volume_up_white_24dp.png";
      this.tq =
        "//www.gstatic.com/images/icons/material/system/2x/volume_off_white_24dp.png";
      this.Ab = null;
      this.Ca = new _.Xd(0, 0);
      this.Vt = new pPE();
      this.Ll = new Image();
      this.Ll.src = "./img/win_screen.png";
      this.Ah = new Image();
      this.Ah.src = "./img/lose_screen.png";
      this.Pi = new Image();
      this.Pi.src = "./img/shovel_icon.png";
      this.Zd = new Image();
      this.Zd.src = "./img/flag_icon.png";
      this.ANTI_FLAG_ICON = new Image();
      this.ANTI_FLAG_ICON.src = "./img/anti_flag_icon.png";
      this.DOUBLE_FLAG_ICON = new Image();
      this.DOUBLE_FLAG_ICON.src = "./img/double_flag_icon.png";
      this.ANTI_DOUBLE_FLAG_ICON = new Image();
      this.ANTI_DOUBLE_FLAG_ICON.src = "./img/anti_double_flag_icon.png";
      this.Sf = new Image();
      this.Sf.src =
        "//www.gstatic.com/images/icons/material/system/2x/close_white_24dp.png";
      this.DOUBLE_FLAG_PLANT = new _.fPE(
        "double_flag_plant.png",
        10,
        this.context,
      );
      this.ANTI_FLAG_PLANT = new _.fPE("anti_flag_plant.png", 10, this.context);
      this.ANTI_DOUBLE_FLAG_PLANT = new _.fPE(
        "anti_double_flag_plant.png",
        10,
        this.context,
      );
      this.zg = new _.fPE("flag_plant.png", 10, this.context);
      this.Hi = new Image();
      this.Hi.src = "./img/incorrect_flag.png";
      this.itemTextures = {};
      this.itemTextures.coin = new Image();
      this.itemTextures.coin.src = "./img/coin.png";
      this.itemTextures.coins = new Image();
      this.itemTextures.coins.src = "./img/coins.png";
      this.itemTextures.brush = new Image();
      this.itemTextures.brush.src = "./img/brush.png";
      this.NINE_FLOWER = new Image();
      this.NINE_FLOWER.src = "./img/nine_flower.png";
      this.TEN_VINES = new Image();
      this.TEN_VINES.src = "./img/ten_vines.png";
      _.rIE(
        [
          this.Ll,
          this.Ah,
          this.Pi,
          this.Zd,
          this.ANTI_FLAG_ICON,
          this.DOUBLE_FLAG_ICON,
          this.ANTI_DOUBLE_FLAG_ICON,
          this.Sf,
          this.Hi,
          this.zg.WB,
          this.ANTI_FLAG_PLANT.WB,
          this.DOUBLE_FLAG_PLANT.WB,
          this.ANTI_DOUBLE_FLAG_PLANT.WB,
          this.NINE_FLOWER,
          this.TEN_VINES,
          ...Object.values(this.itemTextures),
        ],
        () => {
          _.tn(this.Ja("y7GBZ").el(), "visibility", "hidden");
          this.Gw(Date.now());
        },
      );
      this.tenPosition = new _.Td(
        Math.floor(this.Aa.width / 2),
        Math.floor(this.Aa.height / 2),
      );
      this.ninePosition = new _.Td(
        Math.floor(this.Aa.width / 2),
        Math.floor(this.Aa.height / 2),
      );
      this.lastTenClicked = 0;
      this.tenTimer = 0;
      this.nineRotation = 0;

      this.adventure = true ? null : {
        episode: 0,
        level: 0,
        powerups: [],
        coins: 0
      }

      this.bossBattle = this.nine || this.ten;
      this.bossIntro = this.bossBattle;
      this.setAdventureLevel();
      this.Dw && (this.Yf(), this.Ne());

      const myself = this;
      document.getElementById("goButton").onclick = () => {
        this.Aa = new _.Xd(
          +document.getElementById("width").value,
          +document.getElementById("height").value,
        );

        this.totalMineCount = +document.getElementById("mines").value;
        this.nine = document.getElementById("nine").checked;
        this.ten = document.getElementById("ten").checked;
        this.doubleMines = +document.getElementById("doublemines").value / 100;
        this.antiMines = +document.getElementById("antimines").value / 100;
        this.B5a();
        this.reset();
        document.querySelector('div[jsname="V68bde"]').style.display = "none";
      };
      document.getElementById("theme").onchange = () => {
        currentTheme = themes[+document.getElementById("theme").value];
        document.querySelector(".NWJp1d").style.backgroundColor =
          currentTheme[6];
        localStorage.setItem(
          "savedTheme",
          +document.getElementById("theme").value,
        );
      };
      document.getElementById("difficulty").onchange = () => {
        this.Da = document.getElementById("difficulty").value;
        this.Aa = this.od[this.Da];
        this.cellSize = this.Ud[this.Da];
        this.trueCellSize = this.Ud[this.Da];
        this.totalMineCount = this.Bd[this.Da];
        this.B5a();
        this.reset();
        document.getElementById("width").value = this.Aa.width;
        document.getElementById("height").value = this.Aa.height;
        document.getElementById("mines").value = this.totalMineCount;
        document.querySelector('div[jsname="V68bde"]').style.display = "none";
      };
      document.getElementById("powerupsButton").addEventListener('click', () => {
        document.getElementById("powerupsMenuDiv").style.display = "initial";
        let menu = document.getElementById("powerupsMenu");
        menu.innerHTML = "";
        this.powerups.forEach((name, index) => {
          let elem = document.createElement("div")
          elem.className = "YpcDnf OSrXXb hoverable";
          elem.innerText = name;
          elem.onclick = () => {
            this.usePowerup(index);
          }
          menu.appendChild(elem);
        })
      });
      document.addEventListener('click', function(event) {
        console.warn(event.target, event.target.id, !(["powerupsButtonLabel", "powerupsButton", "powerupsButtonDiv"]).includes(event.target.id))
          if (!(["powerupsButtonLabel", "powerupsButton", "powerupsButtonDiv"]).includes(event.target.id)) {
            document.getElementById("powerupsMenuDiv").style.display = "none";
          }
      });
    }
    usePowerup(i) {
      let item = this.powerups[i];
      this.powerups = this.powerups.filter((e, t) => t !== i);
      this.powerup = item
    }
    rT() {
      return this.Ao;
    }
    Ew() {
      return this.Ca;
    }
    eL() {
      return this.Ab;
    }
    iO() {
      return this.Dc;
    }
    uQ() {
      return this.Ce;
    }
    aK() {
      return this.Mb;
    }
    Er() {
      return this.canvas;
    }
    Kz() {
      return this.cellSize;
    }
    OC() {
      return this.Za;
    }
    nM() {
      return this.wb;
    }
    Fw() {
      return this.Ha;
    }
    vE() {
      return this.Ma;
    }
    uE() {
      return this.La;
    }
    OW() {
      return this.Ba;
    }
    In() {
      return this.totalMineCount;
    }
    jO() {
      return this.flagCount;
    }
    QW() {
      return this.didWin;
    }
    Yp() {
      return this.oa;
    }
    yG() {
      return this.Ij;
    }
    Rm() {
      return this.Aa;
    }
    xG() {
      return this.Ua;
    }
    wE() {
      return this.ob;
    }
    Sb() {
      _.$O(this);
      super.Sb();
    }
    isMobile() {
      return !_.kx();
    }
    Ne() {
      return this.Coa().then(() => {
        this.Dc
          ? ((this.Dc = false), (this.startTime = Date.now()))
          : this.resetState();
        this.jd = true;
        this.closed = false;
      });
    }
    f1() {
      this.Dc = false;
      this.startTime = Date.now();
    }
    Coa() {
      this.jd = false;
      var a = _.Ef();
      _.Be(() => {
        if (!this.isDisposed()) {
          var b = _.oIE();
          if (true) {
            //this.isMobile()) {
            var c = this.Qe[this.Da];
            this.qc = _.Etb(this.canvas);
            if (this.qc.width === 0) {
              a.resolve();
              return;
            }
            var d = this.qc.width - 40;
            let e = this.qc.height - 40;
            c = (d * e) / c;
            this.cellSize = Math.min(
              Math.floor(d / this.Aa.width),
              Math.floor(e / this.Aa.height),
            );
            this.canvas.width = this.qc.width * b;
            this.canvas.height = this.qc.height * b;
            this.cellSize *= b;
            this.Ca = new _.Xd(
              Math.ceil(
                (this.canvas.width - this.Aa.width * this.cellSize) / 2,
              ),
              Math.ceil(
                (this.canvas.height - this.Aa.height * this.cellSize) / 2,
              ),
            );
            this.buttonRadius = Math.max(25, this.cellSize / 2);
          } else {
            /*(this.Aa = this.od[this.Da]),
              (this.cellSize = this.Ud[this.Da]),*/
            ((this.cellSize = this.trueCellSize),
              (d = new _.Xd(
                this.Aa.width * this.cellSize,
                this.Aa.height * this.cellSize,
              )),
              //_.Hn(this.canvas, d),
              //_.Hn(this.topBar, new _.Xd(d.width, 60)),
              //_.Hn(this.getRoot().el(), new _.Xd(d.width, d.height + 60)),
              (this.canvas.width = d.width * b),
              (this.canvas.height = d.height * b),
              (this.cellSize *= b));
          }
        }
        if (false) {
          this.cutout = new Image();
          this.cutout.onload = () => {
            a.resolve();
          };
          this.cutout.src = "bitmap/2_7_3.png";
        } else {
          a.resolve();
        }
      });
      return a.promise;
    }
    Xg() {
      this.Ij && _.fw(this.Ja("NSjDf").el());
      return this.reset();
    }
    reset() {
      this.cellSize = 0;
      this.totalPowerupCount = Math.ceil((this.Aa.width * this.Aa.height) / 50);
      this.setAdventureLevel();
      
      return this.Coa().then(() => {
        this.resetState();
        this.jd = true;
      });
    }
    setAdventureLevel() {
      if (this.adventure) {
        let adventureLevel = adventureMaps[this.adventure.episode][this.adventure.level];
        currentTheme = themes[adventureLevel.theme];
        console.log(adventureLevel.name);
        this.Aa = new _.Xd(
          adventureLevel.width,
          adventureLevel.height,
        );
        this.totalMineCount = adventureLevel.mineCount;
        this.totalPowerupCount = adventureLevel.powerups ?? Math.ceil((this.Aa.width * this.Aa.height) / 50);
        this.B5a();
      }
    }
    Sua() {
      return this.reset();
    }
    resetState() {
      extraSounds.TEN_GROW.pause();
      this.powerups = this.adventure ? this.adventure.powerups : [];
      this.coins = this.adventure ? this.adventure.coins : 0;
      this.maxTime = 0;
      this.ninePosition = new _.Td(
        Math.floor(this.Aa.width / 2),
        Math.floor(this.Aa.height / 2),
      );
      this.tenPosition = new _.Td(
        Math.floor(this.Aa.width / 2),
        Math.floor(this.Aa.height / 2),
      );
      this.lastTenClicked = 0;
      this.tenTimer = 0;
      this.nineRotation = 0;
      this.bossBattle = this.nine || this.ten;
      this.bossIntro = this.bossBattle;
      tPE(this);
      for (let a = 0; a < this.Ea.length; a++) (0, _.yo)(this.Ea[a]);
      this.Ea = [];
      createGrid(this);
      setHtmlDisplays(this);
      APE(this);
      //this.totalMineCount = this.Bd[this.Da];
      this.lives = 3;
      this.Tk = this.didWin = this.Ij = this.startedGame = false;
      this.flagCount = this.Ao = this.Mb = this.Va = 0;
      this.Sa =
        this.readyToChord =
        this.rightClicking =
        this.leftClicking =
          false;
      this.Ab = null;
      this.Qc = 0;
      this.Lc = false;
      this.Wb = -1;
      this.Zc = this.Yb = this.Bb = 0;
      this.wb = [];
      this.Za = [];
      this.ob = [];
      this.Ua = [];
      this.Dc = false;
      this.Ce = 0;
      showFinishPopup(this, false);
    }
    M6() {
      return sPE(this);
    }
    xp(a) {
      a = _.Mg(a).trigger.Ri().getAttribute("data-difficulty");
      this.Da !== a && (this.B5a(), (this.Da = a), this.reset());
    }
    Gw(a) {
      if (this.jd && !this.closed) {
        var b = a - this.Ao;
        let centerCell = this.oa[this.ninePosition.x][this.ninePosition.y];
        this.Ao = a;
        this.Qc += b;
        this.startedGame
          ? this.Ij || ((this.Mb = this.Ce + (a - this.startTime)))
          : (this.startTime = a);
        if ((this.startedGame || this.bossIntro) && this.ten && !this.Ij) {
          this.tenTimer += ((this.Aa.width * this.Aa.height) / (countOpenCells(this))) * 10;
        }
        if (this.ten && this.tenTimer > 10000 && !this.Ij && this.startedGame) {
          this.lives = 0;
          let x = this.oa.findIndex((col) => col.some((cell) => cell.isMine)),
          y = this.oa[x].findIndex((cell) => cell.isMine);
          console.log(x, y)
          openCell(this, new _.Td(x, y), true);
          endGame(this);
        }
        extraSounds.TEN_GROW.volume = Math.min(Math.max((this.tenTimer - 5000) / 5000, 0), 1);
        if (this.nine && this.Mb > this.maxTime && !centerCell.isMine) {
          centerCell.isMine = true;
          centerCell.mineValue = 1;
          centerCell.cellDug = false;
          this.lives = 0;
          openCell(this, new this.ninePosition());
        }
        a = b * 0.01;
        for (var c = 0; c < this.Za.length; c++) {
          var d = this.Za[c];
          d.Fe.y < 0
            ? (d.Fe.y += 4 * a)
            : ((d.Fe.x += 1.2 * a * (d.pos.x < d.midpoint ? 1 : -1)),
              (d.Fe.y = Math.abs(d.Fe.x) * 0.5));
          d.pos.x += d.Fe.x * a;
          d.pos.y += d.Fe.y * a;
          d.size = Math.max(0, d.size - a * 0.1);
          d.size <= 0 && (this.Za.splice(c, 1), c--);
        }
        for (c = 0; c < this.wb.length; c++)
          ((d = this.wb[c]),
            (d.Fe.y += 4 * a),
            (d.pos.x += d.Fe.x * a),
            (d.pos.y += d.Fe.y * a),
            (d.angle += d.V_ * a),
            (d.color = _.kG(_.lFd(_.lG(d.color), a * 0.01))),
            (d.size = Math.max(0, d.size - a * 0.125)),
            d.size <= 0 && (this.wb.splice(c, 1), c--));
        for (c = 0; c < this.ob.length; c++)
          if (
            ((d = this.ob[c]),
            (d.Fe.y += 4 * a),
            (d.pos.x += d.Fe.x * a),
            (d.pos.y += d.Fe.y * a),
            (d.angle += d.V_ * a),
            (d.size = Math.max(0, d.size - a * 0.125)),
            d.size <= 0 || d.pos.y > this.canvas.height * 1.1)
          )
            (this.ob.splice(c, 1), c--);
        a = b * 0.075;
        for (c = 0; c < this.Aa.width; c++)
          for (d = 0; d < this.Aa.height; d++)
            this.oa[c][d].flagCount && (this.oa[c][d].uNb += a);
        a = b * 0.001;
        this.didWin && this.Wb >= 0 && (this.Wb += a);
        for (c = 0; c < this.Ua.length; c++)
          this.Ua[c].size = Math.min(1, this.Ua[c].size + a);
        this.Va > 0 && (this.Va = Math.max(0, this.Va - b));
        this.Bb > 0 && (this.Bb = Math.max(0, this.Bb - b));
        this.Yb > 0 && (this.Yb = Math.max(0, this.Yb - b));
        this.isMobile() &&
          this.Lc &&
          this.Ba &&
          this.Qc > 700 &&
          ((this.Lc = false), placeFlag(this, this.Ba), tPE(this));
        APE(this);
        setHtmlDisplays(this);
      }
    }
    Nda(a) {
      if (!this.closed) {
        switch (a.keyCode) {
          case 77:
            this.ll();
            break;
          case 32:
          case 13:
            this.Ij && this.Xg();
            break;
          case 82:
            this.Xg();
            break;
          case 17:
            this.Sa = true;
            break;
          default:
            return;
        }
        a.preventDefault();
      }
    }
    roa(a) {
      this.closed ||
        (this.B5a(),
        a.target === this.canvas && a.preventDefault(),
        (a = new _.Td(a.clientX, a.clientY - 60)),
        OPE(this, a.x, a.y));
    }
    Tc(a) {
      this.closed ||
        (this.B5a(),
        a.preventDefault(),
        a.button === 0
          ? (this.leftClicking = true)
          : a.button === 2
            ? (this.rightClicking = true)
            : a.button === 1 && (this.readyToChord = true),
        OPE(this, a.offsetX, a.offsetY));
    }
    SW() {
      return this.leftClicking && !this.Sa;
    }
    N6() {
      return this.rightClicking || (this.leftClicking && this.Sa);
    }
    UW() {
      return this.readyToChord;
    }
    Yf() {
      this.yf.init(this.getRoot().el());
      this.Th.init(this.getRoot().el());
      F6.eIb.oa.preload();
      game_music.win_water_harp.oa.preload();
    }
    Xy() {
      _.ew([new _.ro(this.getRoot().el(), "hide")]);
      this.trigger(_.gw.get("minesweeper_closed"));
      this.getData("isGoogleArcadeStandalone").Ob() && _.qIE();
    }
    Sj() {
      if (this.Ij) return ((this.Ij = false), this.reset());
      this.Dc = true;
      this.Ce = this.Mb;
      this.closed = true;
    }
    ll() {
      if (!this.isDisposed()) {
        this.muted = !this.muted;
        var a = this.Ja("XBehdc").hb();
        this.muted
          ? (_.cIE(this.yf),
            _.cIE(this.Th),
            (this.Ja("N7ntOd").Bf().src = this.tq),
            a.setAttribute("aria-label", "Unmute audio"),
            a.setAttribute("title", "Unmute audio"))
          : (_.dIE(this.yf),
            _.dIE(this.Th),
            (this.Ja("N7ntOd").Bf().src = this.Xx),
            a.setAttribute("aria-label", "Mute audio"),
            a.setAttribute("title", "Mute audio"));
      }
    }
    B5a() {
      if (this.Yl && !this.isDisposed()) {
        this.Yl = false;
        var a = this.Ya("IoE5Ec").el();
        _.Ln(a, 0);
        (0, _.xo)(() => {
          _.tn(a, "visibility", "hidden");
          a.style.height = "0px";
        }, 200);
      }
    }
  };
  _.G6.prototype.$wa$DGXxE = function () {
    return this.ll;
  };
  _.G6.prototype.$wa$DtamMe = function () {
    return this.Sj;
  };
  _.G6.prototype.$wa$pRhyN = function () {
    return this.Xy;
  };
  _.G6.prototype.$wa$qJhGM = function () {
    return this.Yf;
  };
  _.G6.prototype.$wa$IHGCHf = function () {
    return this.UW;
  };
  _.G6.prototype.$wa$Dz57Ib = function () {
    return this.N6;
  };
  _.G6.prototype.$wa$dtb5fd = function () {
    return this.SW;
  };
  _.G6.prototype.$wa$HcXHkc = function () {
    return this.xp;
  };
  _.G6.prototype.$wa$Q9K5of = function () {
    return this.M6;
  };
  _.G6.prototype.$wa$lcDP8b = function () {
    return this.Sua;
  };
  _.G6.prototype.$wa$JrrOHc = function () {
    return this.Xg;
  };
  _.G6.prototype.$wa$Wt8qFe = function () {
    return this.f1;
  };
  _.G6.prototype.$wa$SQ1Mjf = function () {
    return this.Ne;
  };
  _.G6.prototype.$wa$k4Iseb = function () {
    return this.Sb;
  };
  _.G6.prototype.$wa$t2VMgd = function () {
    return this.wE;
  };
  _.G6.prototype.$wa$nHdHic = function () {
    return this.xG;
  };
  _.G6.prototype.$wa$bMR6Vd = function () {
    return this.Rm;
  };
  _.G6.prototype.$wa$Spqm0d = function () {
    return this.yG;
  };
  _.G6.prototype.$wa$wgs7gc = function () {
    return this.Yp;
  };
  _.G6.prototype.$wa$cITK7b = function () {
    return this.QW;
  };
  _.G6.prototype.$wa$Ysnync = function () {
    return this.jO;
  };
  _.G6.prototype.$wa$HlAWnb = function () {
    return this.In;
  };
  _.G6.prototype.$wa$cILaEd = function () {
    return this.OW;
  };
  _.G6.prototype.$wa$efevAe = function () {
    return this.uE;
  };
  _.G6.prototype.$wa$wZvcUd = function () {
    return this.vE;
  };
  _.G6.prototype.$wa$bLVe6d = function () {
    return this.Fw;
  };
  _.G6.prototype.$wa$OvpXZd = function () {
    return this.nM;
  };
  _.G6.prototype.$wa$pnEYfc = function () {
    return this.OC;
  };
  _.G6.prototype.$wa$kkudHc = function () {
    return this.Kz;
  };
  _.G6.prototype.$wa$TrTq0c = function () {
    return this.Er;
  };
  _.G6.prototype.$wa$MzdLpc = function () {
    return this.aK;
  };
  _.G6.prototype.$wa$yZTCV = function () {
    return this.uQ;
  };
  _.G6.prototype.$wa$xH4nNb = function () {
    return this.iO;
  };
  _.G6.prototype.$wa$MzfOmb = function () {
    return this.eL;
  };
  _.G6.prototype.$wa$cqVCd = function () {
    return this.Ew;
  };
  _.G6.prototype.$wa$lGBSX = function () {
    return this.rT;
  };
  _.Ls(_.u8q, _.G6);
  var gQE =
      "#1976D2 #388E3C #D32F2F #7B1FA2 #FF8F00 #0097A7 #424242 #9E9E9E #c93999 #497000".split(
        " ",
      ),
    uPE =
      "#F4C20D #DB3236 #4885ED #ED44B5 #B648F2 #48E6F1 #F4840D #008744".split(
        " ",
      ),
    cQE = [0, 1, 2, 3, 4, 2];
  _.x();
  _.tDg = _.y("EbPKJf", []);
  _.v("EbPKJf");
  _.uDg = class extends _.Js {
    constructor(a) {
      super(a.Na);
      this.oa = _.um(this.getData("ddph")) || _.on(this.Ya("vs0Yb").el());
      _.vw(this.getRoot().el(), "kNOP9c");
    }
    uFd() {
      var a = this.oa;
      _.ln(this.Ya("vs0Yb").el(), a);
    }
  };
  _.uDg.prototype.$wa$zdphRe = function () {
    return this.uFd;
  };
  _.Ls(_.tDg, _.uDg);
  _.x();
  _.YBd = function (a, b) {
    return _.$h(a, 3, b);
  };
  _.ZBd = class extends _.m {
    constructor(a) {
      super(a);
    }
    getValue() {
      return _.u(this, 1);
    }
    setValue(a) {
      return _.fh(this, 1, a);
    }
    clearValue() {
      return _.$e(this, 1);
    }
    hh() {
      return _.Bj(this, 1);
    }
    getType() {
      return _.Ej(this, 2, 1);
    }
    setType(a) {
      return _.Zh(this, 2, a);
    }
    ef() {
      return _.Ok(this, 2);
    }
    Ve() {
      return _.di(this, 2);
    }
  };
  _.ZBd.prototype.kb = "zPXzie";
  _.WSb = function (a, b, c) {
    return a.Ba(b, c).m2();
  };
  _.XBd = _.y("CnSW2d", []);
  _.v("CnSW2d");
  _.aCd = class extends _.Js {
    static Ta() {
      return {
        jsdata: {
          ije: _.ZBd,
        },
      };
    }
    constructor(a) {
      super(a.Na);
      this.data = a.jsdata.ije;
      this.root = this.getRoot().el();
      this.root.getAttribute("disabled") && this.setEnabled(false);
    }
    Da() {
      return this.root;
    }
    Ri() {
      return this.root;
    }
    getType() {
      return this.data.getType();
    }
    Ba() {
      var a = this.data.getType();
      return $Bd.includes(a);
    }
    isEnabled() {
      return !this.root.getAttribute("disabled");
    }
    Ca() {
      return _.B(this.data, 3);
    }
    aTb() {
      return this.data.getType() === 4;
    }
    oa() {
      return (
        this.data.getType() !== 4 &&
        this.data.getType() !== 6 &&
        this.data.getType() !== 10
      );
    }
    setEnabled(a) {
      a
        ? this.root.removeAttribute("disabled")
        : this.root.setAttribute("disabled", "true");
      _.je(this.root, "disabled", !a);
    }
    isSelected() {
      return _.Em(this.root, "CB8nDe");
    }
    Dl(a) {
      if (this.Ba()) {
        var b = this.Ca() ? "selected" : "checked";
        a
          ? this.isEnabled() &&
            (_.je(this.root, b, "true"), _.Fm(this.root, "CB8nDe"))
          : (_.je(this.root, b, "false"), _.Hm(this.root, "CB8nDe"));
      }
    }
    Aa(a) {
      a
        ? this.isEnabled() && _.Fm(this.root, "CjiZvb")
        : _.Hm(this.root, "CjiZvb");
    }
    getContent() {
      return _.on(this.Ya("ibnC6b").el());
    }
    MPb() {
      return _.og(this.root, "shortLabel");
    }
    getValue() {
      return this.data.getValue();
    }
  };
  _.aCd.prototype.$wa$HvnK2b = function () {
    return this.getValue;
  };
  _.aCd.prototype.$wa$TINwZb = function () {
    return this.MPb;
  };
  _.aCd.prototype.$wa$aDGs4d = function () {
    return this.getContent;
  };
  _.aCd.prototype.$wa$KKjvXb = function () {
    return this.isSelected;
  };
  _.aCd.prototype.$wa$ezx81e = function () {
    return this.oa;
  };
  _.aCd.prototype.$wa$BnKdQ = function () {
    return this.aTb;
  };
  _.aCd.prototype.$wa$I9FNke = function () {
    return this.Ca;
  };
  _.aCd.prototype.$wa$yXgmRe = function () {
    return this.isEnabled;
  };
  _.aCd.prototype.$wa$pxaUTb = function () {
    return this.Ba;
  };
  _.aCd.prototype.$wa$SbhtCf = function () {
    return this.getType;
  };
  _.aCd.prototype.$wa$t4aLLd = function () {
    return this.Ri;
  };
  _.aCd.prototype.$wa$xdy80 = function () {
    return this.Da;
  };
  _.Ls(_.XBd, _.aCd);
  var $Bd = [2, 3];
  _.x();
  _.Fx = function (a, b, c, d, e, f, g, h, k) {
    var l = _.Qbc(c),
      n = _.Jn(a),
      q = _.QKa(a);
    q && n.intersection(_.BKa(q));
    q = _.Ge(a);
    var r = _.Ge(c);
    if (q.getDocument() != r.getDocument()) {
      q = q.getDocument().body;
      {
        var t = q;
        r = r.getWindow();
        let H = new _.Td(0, 0),
          M = _.fi(_.ne(t));
        b: {
          try {
            _.Wi(M.parent);
            var A = true;
            break b;
          } catch (P) {}
          A = false;
        }
        if (A) {
          A = t;
          do ((t = M == r ? _.zn(A) : _.WKa(A)), (H.x += t.x), (H.y += t.y));
          while (
            M &&
            M != r &&
            M != M.parent &&
            (A = M.frameElement) &&
            (M = M.parent)
          );
        }
        A = H;
      }
      q = _.KJa(A, _.zn(q));
      n.left += q.x;
      n.top += q.y;
    }
    a = _.Rbc(a, b);
    b = n.left;
    a & 4 ? (b += n.width) : a & 2 && (b += n.width / 2);
    n = new _.Td(b, n.top + (a & 1 ? n.height : 0));
    n = _.KJa(n, l);
    e && ((n.x += (a & 4 ? -1 : 1) * e.x), (n.y += (a & 1 ? -1 : 1) * e.y));
    if (g)
      if (k) var E = k;
      else if ((E = _.QKa(c)))
        ((E.top -= l.y), (E.right -= l.x), (E.bottom -= l.y), (E.left -= l.x));
    return _.Sbc(n, c, d, f, E, g, h);
  };
  _.Qbc = function (a) {
    if ((a = a.offsetParent)) {
      let c = a.tagName == "HTML" || a.tagName == "BODY";
      if (!c || _.vma(a) != "static") {
        var b = _.zn(a);
        c || (b = _.KJa(b, new _.Td(_.ve(a), a.scrollTop)));
      }
    }
    return b || new _.Td();
  };
  _.Sbc = function (a, b, c, d, e, f, g) {
    a = a.clone();
    var h = _.Rbc(b, c);
    c = _.In(b);
    g = g ? g.clone() : c.clone();
    a = _.Tbc(a, g, h, d, e, f);
    if (a.status & 496) return a.status;
    _.xn(b, a.rect.pF());
    g = a.rect.getSize();
    _.LJa(c, g) ||
      ((d = g),
      (b = b.style),
      _.$d
        ? (b.MozBoxSizing = "border-box")
        : _.Zd
          ? (b.WebkitBoxSizing = "border-box")
          : (b.boxSizing = "border-box"),
      (b.width = Math.max(d.width, 0) + "px"),
      (b.height = Math.max(d.height, 0) + "px"));
    return a.status;
  };
  _.Tbc = function (a, b, c, d, e, f) {
    a = a.clone();
    b = b.clone();
    var g = 0;
    if (d || c != 0)
      (c & 4
        ? (a.x -= b.width + (d ? d.right : 0))
        : c & 2
          ? (a.x -= b.width / 2)
          : d && (a.x += d.left),
        c & 1 ? (a.y -= b.height + (d ? d.bottom : 0)) : d && (a.y += d.top));
    if (f) {
      if (e) {
        g = a;
        c = b;
        d = 0;
        (f & 65) == 65 && (g.x < e.left || g.x >= e.right) && (f &= -2);
        (f & 132) == 132 && (g.y < e.top || g.y >= e.bottom) && (f &= -5);
        g.x < e.left && f & 1 && ((g.x = e.left), (d |= 1));
        if (f & 16) {
          var h = g.x;
          g.x < e.left && ((g.x = e.left), (d |= 4));
          g.x + c.width > e.right &&
            ((c.width = Math.min(e.right - g.x, h + c.width - e.left)),
            (c.width = Math.max(c.width, 0)),
            (d |= 4));
        }
        g.x + c.width > e.right &&
          f & 1 &&
          ((g.x = Math.max(e.right - c.width, e.left)), (d |= 1));
        f & 2 &&
          (d |= (g.x < e.left ? 16 : 0) | (g.x + c.width > e.right ? 32 : 0));
        g.y < e.top && f & 4 && ((g.y = e.top), (d |= 2));
        f & 32 &&
          ((h = g.y),
          g.y < e.top && ((g.y = e.top), (d |= 8)),
          g.y + c.height > e.bottom &&
            ((c.height = Math.min(e.bottom - g.y, h + c.height - e.top)),
            (c.height = Math.max(c.height, 0)),
            (d |= 8)));
        g.y + c.height > e.bottom &&
          f & 4 &&
          ((g.y = Math.max(e.bottom - c.height, e.top)), (d |= 2));
        f & 8 &&
          (d |= (g.y < e.top ? 64 : 0) | (g.y + c.height > e.bottom ? 128 : 0));
        e = d;
      } else e = 256;
      g = e;
    }
    e = new _.de(0, 0, 0, 0);
    e.left = a.x;
    e.top = a.y;
    e.width = b.width;
    e.height = b.height;
    return {
      rect: e,
      status: g,
    };
  };
  _.Rbc = function (a, b) {
    return (b & 8 && _.ue(a) ? b ^ 4 : b) & -9;
  };
  _.Cbc = function (a) {
    var b = new _.Bbc();
    return _.Zh(b, 1, a);
  };
  _.Dbc = function (a, b) {
    return _.Zh(a, 2, b);
  };
  _.Ebc = function (a, b) {
    return _.$h(a, 5, b);
  };
  _.Fbc = function (a, b) {
    return _.$h(a, 6, b);
  };
  _.Gbc = function (a, b) {
    return _.$h(a, 7, b);
  };
  _.Hbc = function (a, b) {
    return _.$h(a, 8, b);
  };
  _.Ibc = function (a, b) {
    return _.$h(a, 9, b);
  };
  _.Jbc = function (a, b) {
    return _.$h(a, 10, b);
  };
  _.Kbc = function (a, b) {
    return _.$h(a, 11, b);
  };
  _.Lbc = function (a, b) {
    return _.$h(a, 12, b);
  };
  _.Mbc = function (a, b) {
    return _.$h(a, 13, b);
  };
  _.Nbc = function (a, b) {
    return _.$h(a, 14, b);
  };
  _.Obc = function (a, b) {
    return _.$h(a, 15, b);
  };
  _.Pbc = function (a, b) {
    return _.$h(a, 16, b);
  };
  _.Bbc = class extends _.m {
    constructor(a) {
      super(a);
    }
  };
  _.Bbc.prototype.kb = "mVjAjf";
  _.Ex = _.y("DPreE", [_.vr, _.zr]);
  _.v("DPreE");
  var Ubc;
  Ubc = function (a) {
    var b = 8;
    switch (a) {
      case 2:
        b = 2;
        break;
      case 1:
        b = 8;
        break;
      case 3:
        b = 12;
        break;
      case 5:
        b = 3;
        break;
      case 4:
        b = 9;
        break;
      case 6:
        b = 13;
    }
    return b;
  };
  _.Gx = class extends _.Js {
    static Ta() {
      return {
        jsdata: {
          jje: _.Bbc,
        },
        service: {
          dismiss: _.Gv,
          Bq: _.zbc,
        },
      };
    }
    constructor(a) {
      super(a.Na);
      this.Oc = _.wd("LVIXXb").Eh(_.sp, 1) === 1;
      this.Aa = 1;
      this.offsetY = this.offsetX = 0;
      this.didWin = this.Pa = this.La = false;
      this.data = a.jsdata.jje;
      this.Ba = a.service.dismiss;
      this.Bq = a.service.Bq;
      this.root = this.getRoot().el();
      this.popup = this.Ja("V68bde").hb();
      _.gp(this, this.popup);
      this.Ma = () => {
        this.reposition();
      };
      _.ze(window, "resize", this.Ma);
      this.Sa = this.oa().hasAttribute("role");
      this.Pa = _.B(this.data, 13);
      this.didWin = _.B(this.data, 14);
      this.Ha();
    }
    Sb() {
      this.Ea() && this.isVisible()
        ? this.Ba.dismiss(this.popup)
        : this.Ba.unlisten(this.popup);
      _.Tn(window, "resize", this.Ma);
      _.ah(this.root, this.popup) || this.root.appendChild(this.popup);
      super.Sb();
    }
    onDismiss(a, b, c = null) {
      if (
        (c && _.vg(c) && c.nodeType > 0 && _.ah(this.oa(), c)) ||
        a.some((d) => _.ah(d, c))
      )
        return false;
      if (_.B(this.data, 12))
        return (
          this.trigger("al5F3e", {
            type: b,
            Lw: c,
          }),
          true
        );
      this.setVisible(false);
      _.Zg(document, "al5F3e");
      if (b === 2 || _.B(this.data, 16))
        ((a = this.oa()),
          a.hasAttribute("tabindex") || (a = a.firstElementChild),
          a.focus());
      this.Aa = 1;
      return true;
    }
    zk(a) {
      var b = a.event;
      if (!b) return false;
      b = b.which || b.keyCode;
      (b !== 40 && b !== 38) ||
        !this.getPopup().querySelector("g-menu") ||
        (this.Bq.disable(),
        this.Da(a),
        (0, _.xo)(() => {
          this.Bq.enable();
        }, 0));
      return this.Oa;
    }
    Va(a) {
      var b = this.Db("XPtOyb").toArray();
      a = a.event;
      if (!a) return false;
      var c = a.key;
      if (c === "ArrowRight" || c === "ArrowDown") {
        a.preventDefault();
        var d = b.find(
          (f) => Number(f.getAttribute("data-chip-index")) === this.Aa + 1,
        );
        this.Aa < b.length && this.Aa++;
        let e;
        d == null || (e = d.children[0]) == null || e.focus();
        return false;
      }
      if (c === "ArrowLeft" || c === "ArrowUp")
        return (
          a.preventDefault(),
          (b = b.find(
            (e) => Number(e.getAttribute("data-chip-index")) === this.Aa - 1,
          )),
          this.Aa > 1 && this.Aa--,
          b == null || (d = b.children[0]) == null || d.focus(),
          false
        );
      c === "Tab" && a.preventDefault();
      return false;
    }
    Da(a) {
      var b = a.event || void 0,
        c = a.ub.el();
      c.focus();
      _.Te(c) && _.fw(c);
      a = (a.data && a.data.nonDismissingElements) || [];
      this.setVisible(!this.isVisible(), b, this.oa().firstElementChild, a);
      b && (b = _.Isa(b)) && b.preventDefault();
    }
    reposition() {
      if (this.isVisible()) {
        var a = this.getPopup(),
          b = this.oa(),
          c = new _.Td(this.offsetX, this.offsetY),
          d = _.fk(this.data, 1),
          e = _.fk(this.data, 2);
        d = Ubc(d);
        e = Ubc(e);
        if (b.offsetParent === null && b.style.position !== "fixed")
          this.dismiss();
        else {
          if (_.B(this.data, 7)) {
            var f = _.In(b).width;
            if (_.B(this.data, 9)) {
              _.Dn(a, "");
              var g = _.In(a).width;
              g > f && (f = g);
            }
            _.Dn(a, f);
          }
          f = (_.B(this.data, 5) ? 1 : 0) | (_.B(this.data, 6) ? 4 : 0);
          {
            let h = window.visualViewport;
            h && h.scale !== 1
              ? ((g = _.Qbc(this.getPopup())),
                (g = new _.ce(
                  h.pageTop - g.y,
                  h.pageLeft + h.width - g.x,
                  h.pageTop + h.height - g.y,
                  h.pageLeft - g.x,
                )))
              : (g = void 0);
          }
          _.Fx(b, d, a, e, c, void 0, f, void 0, g);
        }
      }
    }
    isVisible() {
      return _.On(this.getPopup());
    }
    dismiss() {
      this.isVisible() && this.Ba.dismiss(this.popup);
    }
    setVisible(a, b, c, d = []) {
      var e = this.getPopup(),
        f = a !== this.isVisible(),
        g = a ? "KyPa0e" : "wjOG7e";
      _.Nn(e, a);
      a && _.ah(this.root, e)
        ? _.B(this.data, 8) || _.Dx().appendChild(e)
        : a || _.ah(this.root, e) || this.root.appendChild(e);
      a &&
        (_.B(this.data, 15) &&
          _.eg(this, {
            service: {
              focus: _.Wr,
            },
          }).then((h) => {
            h.service.focus.oK(new _.No(e));
          }),
        this.trigger("YraOve", {
          popup: this,
        }),
        this.reposition());
      f &&
        (this.Sa &&
          this.oa().setAttribute("aria-expanded", a ? "true" : "false"),
        a
          ? (this.Pa && _.ew([new _.ro(this.popup, "show")]),
            this.La || ((this.La = true), _.Zg(e, "BUYwVb"), _.Zg(e, g)),
            this.Ea()
              ? this.Ba.listen(
                  this.popup,
                  (h, k) => this.onDismiss(d, h, k),
                  [...Vbc, 4],
                  this.Oc,
                  true,
                  false,
                  () => {
                    this.setVisible(a, b, c, d);
                  },
                  this.getData("bbena").string() ||
                    this.root.getAttribute("jsname"),
                )
              : ((f = _.B(this.data, 10)
                  ? Wbc
                  : _.B(this.data, 11)
                    ? Xbc
                    : Vbc),
                this.Ba.listen(
                  this.popup,
                  (h, k) => this.onDismiss(d, h, k),
                  f,
                  this.Oc,
                  true,
                )))
          : this.Ba.unlisten(this.popup),
        this.trigger(g, {
          triggerElement: c || null,
          hvb: (b ? b.which || b.keyCode : null) === 38 ? true : false,
          Cu: b,
        }));
    }
    oa() {
      return this.Ja("oYxtQd").el();
    }
    getPopup() {
      return this.popup;
    }
    Ua() {
      return this.Aa;
    }
    Ca(a, b) {
      this.offsetX = a;
      this.offsetY = b;
    }
    Ea() {
      var a = this.getData("bbena"),
        b = a.string("") || this.root.getAttribute("jsname");
      return !(!a.Ob() || !b);
    }
    Ha() {
      this.Ea() &&
        this.Ba.ob(
          () => {
            this.setVisible(true);
          },
          this.getData("bbena").string() || this.root.getAttribute("jsname"),
        );
    }
  };
  _.Gx.prototype.$wa$NjCoec = function () {
    return this.Ha;
  };
  _.Gx.prototype.$wa$OOY56c = function () {
    return this.Ea;
  };
  _.Gx.prototype.$wa$ruNCD = function () {
    return this.Ua;
  };
  _.Gx.prototype.$wa$pcAkKe = function () {
    return this.getPopup;
  };
  _.Gx.prototype.$wa$vBAC5 = function () {
    return this.oa;
  };
  _.Gx.prototype.$wa$IYtByb = function () {
    return this.dismiss;
  };
  _.Gx.prototype.$wa$eO2Zfd = function () {
    return this.isVisible;
  };
  _.Gx.prototype.$wa$xKqF2c = function () {
    return this.reposition;
  };
  _.Gx.prototype.$wa$WFrRFb = function () {
    return this.Da;
  };
  _.Gx.prototype.$wa$WJWEae = function () {
    return this.Va;
  };
  _.Gx.prototype.$wa$uYT2Vb = function () {
    return this.zk;
  };
  _.Gx.prototype.$wa$k4Iseb = function () {
    return this.Sb;
  };
  _.Ls(_.Ex, _.Gx);
  var Vbc = [1, 2, 3],
    Wbc = [1, 3],
    Xbc = [1, 2];
  _.x();
  _.PDg = function (a, b) {
    return _.$h(a, 2, b);
  };
  _.QDg = function (a, b) {
    return _.$h(a, 3, b);
  };
  _.RDg = function (a, b) {
    return _.$h(a, 4, b);
  };
  _.SDg = function (a, b) {
    return _.$h(a, 5, b);
  };
  _.TDg = function (a, b) {
    return _.$h(a, 6, b);
  };
  _.UDg = function (a, b) {
    return _.Bi(a, 7, b);
  };
  _.VDg = function (a, b) {
    return _.Bi(a, 8, b);
  };
  _.WDg = function (a, b) {
    return _.$h(a, 9, b);
  };
  _.XDg = function (a, b) {
    return _.$h(a, 10, b);
  };
  _.YDg = class extends _.m {
    constructor(a) {
      super(a);
    }
    getType() {
      return _.Ej(this, 1, 1);
    }
    setType(a) {
      return _.Zh(this, 1, a);
    }
    ef() {
      return _.Ok(this, 1);
    }
    Ve() {
      return _.di(this, 1);
    }
  };
  _.YDg.prototype.kb = "xJGXK";
  _.ODg = _.y("pFsdhd", [_.Ex, _.Fr]);
  _.DDg = _.y("WlNQGd", []);
  _.v("pFsdhd");
  var ZDg = function (a) {
      return {
        duration: 150,
        easing: "cubic-bezier(0,0,.2,1)",
        delay: a * 33,
      };
    },
    $Dg = class extends _.Rw {
      constructor(a, b, c, d, e) {
        super();
        this.menu = a;
        this.Da = b;
        this.Pa = c;
        this.triggerEvent = d;
        this.type = e;
        this.Ba = null;
        this.WJb = this.Ma = 0;
        this.Ea = [];
        this.Ha = [];
        this.La = null;
        this.Ca = _.Ng(a);
        this.overlay = _.bn("DIV");
        this.Aa = e === 1 ? b : c;
      }
      measure() {
        var a = Array.from(_.Sm("g-menu-item", null, this.menu)).slice(0);
        if (this.Da) var b = a.indexOf(this.Da);
        else ((this.Da = a[0]), (b = 0));
        var c = this.menu.getBoundingClientRect();
        for (let d = b - 1; d >= 0; d--)
          if (a[d].getBoundingClientRect().bottom > c.top) this.Ea.push(a[d]);
          else break;
        for (b += 1; b < a.length; b++)
          if (a[b].getBoundingClientRect().top < c.bottom) this.Ha.push(a[b]);
          else break;
        a = this.Ca.getBoundingClientRect();
        this.Aa
          ? ((c = this.Aa.getBoundingClientRect()),
            (this.WJb = c.top + c.height / 2 - (a.top + a.height / 2)),
            (this.Ma = c.height / a.height),
            _.tn(this.overlay, {
              position: "fixed",
              top: c.top + "px",
              left: c.left + "px",
              width: c.width + "px",
              height: c.height + "px",
              "background-color": "white",
              "z-index": 100,
            }),
            (this.Ba = this.Aa.cloneNode(false)),
            _.tn(this.Ba, {
              width: c.width + "px",
              height: c.height + "px",
            }))
          : (this.WJb = -a.height / 2);
      }
      Gc() {
        if (this.Aa) {
          _.gn(this.Ba, this.Aa);
          this.overlay.appendChild(this.Aa);
          _.gn(this.overlay, this.Ca);
          let c = _.Sm("g-ripple", null, this.Aa)[0];
          var a = this.triggerEvent;
          if (this.Pa && this.triggerEvent) {
            var b;
            a = (b = _.Isa(this.triggerEvent)) != null ? b : null;
          }
          if (c && a) {
            a = _.Bn(a);
            b = _.Bn(c);
            let d = new _.Td(a.x - b.x, a.y - b.y);
            _.lg(document)
              .getController(c)
              .then((e) => {
                e.Ba(d);
              });
          }
        }
        this.La = _.un(this.menu, "overflow-y");
        _.tn(this.menu, {
          "overflow-y": "hidden",
        });
        _.tn(this.Ca, {
          transform:
            "translate3d(0px, " +
            this.WJb +
            "px, 0px) scale3d(1, " +
            this.Ma +
            ", 1)",
        });
      }
      oa() {
        var a = _.Sw(),
          b = 150;
        if (this.type === 1)
          (_.Ia(
            this.Ea,
            (c, d) => {
              a.add(
                new _.Kw(c, ZDg(d))
                  .translate(0, 20, 0, 0, 0, 0)
                  .opacity(0.001, 1),
              );
            },
            this,
          ),
            _.Ia(
              this.Ha,
              (c, d) => {
                a.add(
                  new _.Kw(c, ZDg(d))
                    .translate(0, -20, 0, 0, 0, 0)
                    .opacity(0.001, 1),
                );
              },
              this,
            ));
        else {
          let c = _.jba(this.Ea, [this.Da], this.Ha);
          _.Ia(
            c,
            (d, e) => {
              a.add(
                new _.Kw(d, ZDg(e))
                  .translate(0, -20, 0, 0, 0, 0)
                  .opacity(0.001, 1),
              );
            },
            this,
          );
          b = Math.max(b, (c.length - 1) * 33);
        }
        a.add(
          new _.Kw(this.Ca, {
            duration: b,
            easing: "cubic-bezier(.4,0,.2,1)",
          })
            .zq(1, 1, 1)
            .Rj(0, 0, 0),
        );
        return a.build();
      }
      Pk() {
        return 500;
      }
      cleanup() {
        var a = _.jba(this.Ea, [this.Da], this.Ha);
        _.Ia(a, (b) => {
          _.tn(b, {
            opacity: "",
            transform: "",
          });
        });
        this.La != null &&
          _.tn(this.menu, {
            "overflow-y": this.La,
          });
        _.tn(this.Ca, {
          transform: "",
        });
        this.Aa && (_.gn(this.Aa, this.Ba), _.jn(this.Ba), _.jn(this.overlay));
      }
    };
  var cEg, aEg, bEg, dEg, eEg, fEg;
  cEg = function (a) {
    a.Da ||
      (aEg(a).then((b) => {
        (b = b.Jr()) &&
          a.ud(_.aCd, b, _.bp).then((c) => {
            bEg(a, c);
          });
      }),
      (a.Da = true));
  };
  aEg = function (a) {
    return a.ud(_.DDg, a.wN, _.bp);
  };
  bEg = function (a, b) {
    b &&
      b.getType() === 2 &&
      _.Ia(a.Isb, (c) => {
        c.then((d) => {
          var e = b.MPb() || b.getContent();
          _.ln(d.Ya("vs0Yb").el(), e);
        });
      });
  };
  dEg = function (a) {
    a.Ca || (a.Ca = a.Ek.oa().firstElementChild);
    return a.Ca;
  };
  eEg = function (a, b, c) {
    if (_.B(a.data, 2) && _.Te(a.wN) && (!c || _.Te(c))) {
      if (b || (!a.Ha && a.Oa)) {
        let d = _.hq(a.Ub.oa(), a.wN, b ? 1 : 2);
        c && _.eq(d, new _.Uh(_.Te(c), 3));
        let e;
        c = (e = _.B(a.data, 9)) != null ? e : false;
        d.log(c ? true : void 0);
        a.Oa = b;
      }
      a.Ha = false;
    }
  };
  fEg = function (a, b) {
    a.getRoot().parent().getData("eia").Ob() &&
      (a.getRoot().toggleClass("x1SoId", b),
      a.getRoot().toggleClass("wYGjQ", !b));
  };
  _.VQ = class extends _.Js {
    static Ta() {
      return {
        jsdata: {
          cje: _.YDg,
        },
        controller: {
          popup: {
            jsname: "zpo2ue",
            ctor: _.Gx,
          },
        },
        service: {
          Ub: _.iv,
        },
      };
    }
    constructor(a) {
      super(a.Na);
      this.Isb = [];
      this.Oa = this.Ha = this.Ma = this.Da = false;
      this.La = true;
      this.Ca = null;
      this.Pa = this.Sa = "";
      this.data = a.jsdata.cje;
      this.Ek = a.controller.popup;
      this.wN = this.Ek.getPopup().querySelector("g-menu");
      this.Ba = this.Ek.Db("tJHJj").el();
      this.Ub = a.service.Ub;
      cEg(this);
    }
    Ua() {
      return this.data;
    }
    Bb() {
      return this.Ba;
    }
    Ab() {
      return this.wN;
    }
    oa() {
      cEg(this);
      return aEg(this);
    }
    isOpen() {
      return this.Ek.isVisible();
    }
    iH(a) {
      cEg(this);
      a ? this.Ek.setVisible(a) : this.Ea();
    }
    Ea() {
      this.Ek.dismiss();
    }
    Gb(a) {
      this.Isb.push(this.ud(_.uDg, a.event.target, _.bp));
      this.Da = false;
      cEg(this);
    }
    Za(a) {
      cEg(this);
      var b = _.Mg(a);
      bEg(this, b.trigger);
      if (_.B(this.data, 3) && !b.MHa && b.trigger.getType() === 2)
        return false;
      if (
        b.trigger.getType() === 7 ||
        b.trigger.getType() === 10 ||
        (b.trigger.getType() === 3 && _.B(this.data, 10))
      )
        return true;
      this.Ha = true;
      this.Ea(a);
      this.Ek.oa().focus();
      return true;
    }
    Aa() {
      cEg(this);
      aEg(this).then((a) => {
        a.Jr() &&
          _.Jh(this.Isb).then((b) => {
            b.forEach((c) => c.uFd());
          });
        a.Ma();
      });
    }
    ob(a) {
      if (this.Ba) {
        let c = this.getRoot().el();
        this.Sa = _.un(c, "width");
        this.Pa = _.un(c, "height");
        _.Hn(c, _.In(c));
        _.hn(this.Ba, dEg(this), 0);
      }
      var b = _.Mg(a);
      aEg(this).then((c) => {
        var d = c.Tb(!(b == null || !b.hvb));
        d && (c.Ea(d), this.G3a(d));
        eEg(this, true, b == null ? void 0 : b.triggerElement);
        if (!this.Ma && !_.B(this.data, 5)) {
          c = this.wN;
          let e = c.offsetWidth - c.clientWidth;
          e > 0 && _.Dn(c, e + _.In(c).width);
          this.Ma = true;
        }
        _.B(this.data, 6) &&
          new $Dg(this.wN, d, this.Ba, _.Isa(a.event), this.data.getType())
            .play()
            .then(() => {
              d && this.G3a(d);
            });
      });
      fEg(this, true);
      _.Yg(this.getRoot().el().parentElement, "k2B5Ae", b);
      return true;
    }
    Va(a) {
      a = _.Mg(a);
      if (!a) return true;
      this.Ba &&
        (_.tn(this.getRoot().el(), {
          width: this.Sa,
          height: this.Pa,
        }),
        _.eKa(this.Ek.oa(), dEg(this)));
      aEg(this).then((b) => {
        b.Ea(null);
      });
      eEg(this, false, a.triggerElement);
      this.La && this.Ek.oa().focus();
      fEg(this, false);
      _.Yg(this.getRoot().el().parentElement, "ayHzMd", a);
      return true;
    }
    wb(a) {
      cEg(this);
      var b = _.Mg(a).popup;
      aEg(this).then((c) => {
        var d = c.Jr();
        if (d) {
          if (
            (c.Ea(d),
            c.Va(d, true),
            d &&
              this.data.getType() === 1 &&
              b.isVisible() &&
              !_.B(this.data, 4))
          ) {
            c = b.oa().getBoundingClientRect();
            d = d.getBoundingClientRect();
            var e = this.wN.getBoundingClientRect();
            c = (c.height - d.height) / 2 + e.top - d.top;
            b.Ca(_.Se(this.data, 7), _.Se(this.data, 8) + c);
            b.reposition();
          }
        } else (b.Ca(_.Se(this.data, 7), _.Se(this.data, 8)), b.reposition());
      });
      return true;
    }
    ggb() {
      return this.wN;
    }
    Mb() {
      this.La = false;
    }
    G3a(a) {
      _.ra() && a.blur();
      a.focus();
    }
  };
  _.VQ.prototype.$wa$KTK7Ob = function () {
    return this.ggb;
  };
  _.VQ.prototype.$wa$cCpuJc = function () {
    return this.wb;
  };
  _.VQ.prototype.$wa$rWoVB = function () {
    return this.Va;
  };
  _.VQ.prototype.$wa$G8Ofmd = function () {
    return this.ob;
  };
  _.VQ.prototype.$wa$oyYkKb = function () {
    return this.Aa;
  };
  _.VQ.prototype.$wa$GKlhgf = function () {
    return this.Za;
  };
  _.VQ.prototype.$wa$bzkPEc = function () {
    return this.Gb;
  };
  _.VQ.prototype.$wa$L76sMb = function () {
    return this.Ea;
  };
  _.VQ.prototype.$wa$iWO5td = function () {
    return this.isOpen;
  };
  _.VQ.prototype.$wa$ftGMre = function () {
    return this.oa;
  };
  _.VQ.prototype.$wa$jE2ltd = function () {
    return this.Ab;
  };
  _.VQ.prototype.$wa$OUHlk = function () {
    return this.Bb;
  };
  _.VQ.prototype.$wa$wULsBe = function () {
    return this.Ua;
  };
  _.Ls(_.ODg, _.VQ);

  _.x();
  _.Hf(_.Or);
  _.qVf = function ({ title: a, YI: b, pageUrl: c, imageUrl: d }) {
    if (a || b || c || d) return false;
    a = new _.sf(
      "invalid_content",
      "contains empty strings or unsupported keys",
    );
    _.pVf(a);
    return a;
  };
  _.pVf = function (a) {
    _.Ei(
      {
        serviceName: "sh",
        Ed: "sss",
        Bs: 1,
      },
      a,
    );
  };
  _.rVf = function (a) {
    _.gCa(
      {
        serviceName: "sh",
        Ed: "sss",
        Bs: 1,
      },
      _.vOa(a),
    );
  };
  _.sVf = function () {
    _.Fi("sh", "bctnsb");
  };
  _.tVf = function () {
    _.Fi("sh", "rbtnsb");
  };
  _.v("Qj0suc");
  _.ig(
    _.O6a,
    class extends _.Go {
      isAvailable() {
        return false;
      }
      Koa() {
        return false;
      }
      GFa() {
        return false;
      }
      A_() {
        var a = _.iCa();
        _.pVf(a);
        return Promise.reject(a);
      }
      Uka() {
        return false;
      }
      oza() {
        return false;
      }
      Xma() {
        _.sVf();
        Promise.resolve(false);
      }
      LAa() {
        _.tVf();
        Promise.resolve(false);
      }
      v_a() {
        return Promise.reject(_.iCa());
      }
    },
  );
  _.x();
  _.v("JXS8fb");
  _.IVf = new _.$f(_.Or);
  _.x();
  _.IUf = _.y("QKZgZd", []);
  _.v("QKZgZd");
  _.JUf = function (a, b, c, d) {
    a.oa.push({
      sG: b,
      callbacks: d,
      DPc: c,
    });
  };
  _.KUf = function (a, b, c) {
    if (b && c !== 0) {
      for (let d of a.oa)
        if (d.sG === c) {
          d.DPc = b;
          d.callbacks.forEach((e) => {
            e(b);
          });
          return;
        }
      _.JUf(a, c, b, []);
    }
  };
  _.LUf = class extends _.Go {
    constructor() {
      super();
      this.oa = [];
    }
  };
  _.ig(_.IUf, _.LUf);
  _.x();
  _.v("DKYIHe");

  _.x();
  _.vVf = class extends _.m {
    constructor(a) {
      super(a);
    }
    getData() {
      return _.gh(this, 1);
    }
    setData(a) {
      return _.fh(this, 1, a);
    }
    hasData() {
      return _.th(this, 1);
    }
    sZ() {
      return _.gh(this, 2);
    }
    getFileName() {
      return _.gh(this, 3);
    }
    getImageUrl() {
      return _.gh(this, 4);
    }
    Do() {
      return _.th(this, 4);
    }
    Aa() {
      return _.Bj(this, 4);
    }
  };
  _.wVf = class extends _.m {
    constructor(a) {
      super(a);
    }
    getImageData() {
      return _.p(this, _.vVf, 1);
    }
    getTitle() {
      return _.gh(this, 2);
    }
    setTitle(a) {
      return _.fh(this, 2, a);
    }
    vd() {
      return _.th(this, 2);
    }
    getDescription() {
      return _.gh(this, 3);
    }
    Gi() {
      return _.Bj(this, 3);
    }
  };
  _.dYf = function (a) {
    var b = new _.vVf();
    return _.fh(b, 4, a);
  };
  _.eYf = function (a, b) {
    return _.fh(a, 3, b);
  };
  var vZd;
  _.wZd = class extends _.m {
    constructor(a) {
      super(a);
    }
    Rc() {
      return _.Wj(this, 1, vZd);
    }
    getQuery() {
      return _.u(this, 3);
    }
    setQuery(a) {
      return _.fh(this, 3, a);
    }
    Fh() {
      return _.th(this, 3);
    }
    Dm() {
      return _.Ej(this, 6);
    }
    Vm() {
      return _.u(this, 8);
    }
  };
  vZd = [1, 7];
  _.xZd = [0, vZd, _.Nl, 1, _.F, -1, _.I, -1, _.Nl, _.F];
  _.cYf = function (a, b) {
    (a = _.tOa(
      a,
      new _.po({
        path: "/fp_204",
        Ax: true,
      }),
    )) &&
      a
        .Cc("client", "share")
        .Cc("shfp", b.serialize())
        .Cc("authuser", String(_.xd(_.wd("QrtxK"), 0)))
        .log();
  };
  _.io[525001720] = _.xZd;
  _.YXf = class extends _.m {
    constructor(a) {
      super(a);
    }
    gEa() {
      return _.u(this, 1);
    }
    Aa() {
      return _.u(this, 2);
    }
  };
  _.fM = function (a, b) {
    return _.Zh(a, 6, b);
  };
  _.gM = function (a, b) {
    return _.Zh(a, 8, b);
  };
  _.hM = class extends _.m {
    constructor(a) {
      super(a);
    }
    yv(a) {
      return _.Rj(this, 2, a);
    }
    Kv() {
      return _.Mj(this, 5, _.sh());
    }
    Dm() {
      return _.Ej(this, 6);
    }
    vK() {
      return _.Se(this, 7);
    }
    xv() {
      return _.Ej(this, 8);
    }
  };
  _.hM.prototype.kb = "c5air";
  _.L5e = [0, _.C, _.$l, _.F, _.I, _.Jl, _.I, _.C, _.I, _.C];
  _.mP = class extends _.m {
    constructor(a) {
      super(a);
    }
    Ca() {
      return _.u(this, 1);
    }
    Ma() {
      return _.gh(this, 1);
    }
    Ba(a) {
      return _.fh(this, 1, a);
    }
    Da() {
      return _.u(this, 2);
    }
    f4b(a) {
      return _.fh(this, 2, a);
    }
    getImageUrl() {
      return _.u(this, 3);
    }
    Ha(a) {
      _.fh(this, 3, a);
    }
    Do() {
      return _.th(this, 3);
    }
    Aa() {
      return _.Bj(this, 3);
    }
    getTitle() {
      return _.u(this, 4);
    }
    setTitle(a) {
      return _.fh(this, 4, a);
    }
    vd() {
      return _.th(this, 4);
    }
    o3() {
      return _.u(this, 5);
    }
    Oa() {
      return _.u(this, 6);
    }
    Pa() {
      return _.th(this, 6);
    }
    o9() {
      return _.p(this, _.hM, 7);
    }
    ju() {
      return _.u(this, 8);
    }
    gEa() {
      return _.p(this, _.YXf, 12);
    }
  };
  _.mP.prototype.kb = "MCsHVd";
  _.qP = function (a, b) {
    return _.fh(a, 5, b);
  };
  _.cVf = function (a) {
    return _.B(a, 7);
  };
  _.dVf = function (a) {
    return _.B(a, 8);
  };
  _.eP = class extends _.m {
    constructor(a) {
      super(a);
    }
    o9() {
      return _.p(this, _.hM, 13);
    }
    Aa() {
      return _.B(this, 14);
    }
    Ba() {
      return _.B(this, 16);
    }
  };
  _.tZd = class extends _.m {
    constructor(a) {
      super(a);
    }
    getImageUrl() {
      return _.u(this, 1);
    }
    Do() {
      return _.th(this, 1);
    }
    Aa() {
      return _.Bj(this, 1);
    }
    getTitle() {
      return _.u(this, 2);
    }
    setTitle(a) {
      return _.fh(this, 2, a);
    }
    vd() {
      return _.th(this, 2);
    }
    getDescription() {
      return _.u(this, 3);
    }
    Gi() {
      return _.Bj(this, 3);
    }
  };
  _.tZd.prototype.kb = "p9zuA";
  _.uZd = [0, _.F, -2];
  _.ZXf = [6, 10, 15];
  _.$Xf = [0, _.F, -5, _.L5e, _.F, _.I, _.xZd, _.C, [0, _.F, -1]];
  _.aYf = [
    -6,
    {},
    _.$Xf,
    [
      0,
      _.ZXf,
      _.F,
      4,
      _.Il,
      _.D,
      -1,
      1,
      _.Il,
      2,
      _.L5e,
      _.D,
      _.Il,
      _.D,
      1,
      _.D,
    ],
    _.I,
    1,
    _.uZd,
  ];
  _.iH = class extends _.m {
    constructor(a) {
      super(a, 18);
    }
    Qr() {
      return _.u(this, 1);
    }
    Ha() {
      return _.gh(this, 7);
    }
    Ma() {
      return _.gh(this, 8);
    }
    Da() {
      return _.gh(this, 9);
    }
    Vm() {
      return _.u(this, 2);
    }
    Ba() {
      return _.u(this, 6);
    }
    Ca() {
      return _.B(this, 10);
    }
    Aa() {
      return _.Ej(this, 15, 1);
    }
    Kv() {
      return _.Mj(this, 12, _.sh());
    }
    Dm() {
      return _.Ej(this, 13);
    }
    xv() {
      return _.Ej(this, 14);
    }
    gka() {
      return _.p(this, _.tZd, 17);
    }
  };
  _.yZd = {};
  _.iH.prototype.kb = "u4pEpd";
  _.nP = function (a, b) {
    return _.Eb(a, _.mP, 1, b);
  };
  _.oP = function (a, b) {
    return _.Eb(a, _.eP, 2, b);
  };
  _.pP = class extends _.m {
    constructor(a) {
      super(a, 6);
    }
    FD() {
      return _.p(this, _.mP, 1);
    }
    Dm() {
      return _.Ej(this, 3);
    }
    gka() {
      return _.p(this, _.tZd, 5);
    }
  };
  _.pP.prototype.kb = "B34zmc";
  _.bYf = _.Fb(1e3, _.iH, _.pP);
  _.yZd[1e3] = _.aYf;
  _.XXf = _.y("Wct42", [_.Or, _.IUf]);
  var tXf, xXf, wXf, vXf;
  tXf = function (a = null) {
    return _.W3b(new _.X3b(), _.Vla(a));
  };
  _.yXf = function (a = {}) {
    var b = _.uXf();
    _.Y3b(b, tXf(a.targetElement));
    if (a.FZ) {
      var c = a.FZ;
      var d = _.Te(a.targetElement);
      if (!d) throw Error("Bm");
      let e = new _.zf();
      _.noa(e, c, d);
      d = _.Af(e);
      c = new vXf();
      c = _.fh(c, 1, d);
      _.Eb(b, vXf, 12, c);
    }
    a.triggerElement &&
      ((d = _.Wla(a.triggerElement))
        ? ((c = new wXf()), (c = _.fh(c, 1, d)))
        : (c = null),
      c && _.Eb(b, wXf, 10, c),
      (c = _.Te(a.triggerElement))
        ? ((a = new xXf()), (a = _.fh(a, 1, c)))
        : (a = null),
      a && _.Eb(b, xXf, 11, a));
    return b;
  };
  xXf = class extends _.m {
    constructor(a) {
      super(a);
    }
  };
  wXf = class extends _.m {
    constructor(a) {
      super(a);
    }
  };
  vXf = class extends _.m {
    constructor(a) {
      super(a);
    }
  };
  _.uXf = function () {
    return new _.eu();
  };
  var zXf = _.Jia(_.eu),
    AXf;
  _.uXf = function () {
    return (AXf || (AXf = zXf('[null,[[48,"1"]]]'))).Uv();
  };
  _.YVf = [0, _.Cp];
  _.XVf = [-4, {}, _.I, -2];
  _.WVf = [0, _.F, -1, _.I, _.F];
  _.tu = class extends _.m {
    constructor(a) {
      super(a);
    }
  };
  _.xt = class extends _.m {
    constructor(a) {
      super(a);
    }
    Uh() {
      return _.u(this, 1);
    }
    oF() {
      return _.p(this, _.ih, 2);
    }
  };
  _.xt.prototype.kb = "TyFfQb";
  _.sXf = class extends _.m {
    constructor(a) {
      super(a);
    }
  };
  _.sXf.prototype.kb = "VqGgMe";
  new _.yi(_.sXf);
  _.gXf = function (a, b) {
    return _.Gb(a, 1, b);
  };
  _.iXf = function (a, b) {
    return _.uj(a, 1, _.hXf, b);
  };
  _.jXf = function (a, b) {
    return _.Zh(a, 2, b);
  };
  _.kXf = class extends _.m {
    constructor(a) {
      super(a);
    }
    Dm() {
      return _.Ej(this, 7);
    }
  };
  _.hXf = [1, 6];
  var lXf;
  _.mXf = function (a) {
    var b = new lXf();
    return _.Eb(b, _.kXf, 1, a);
  };
  lXf = class extends _.m {
    constructor(a) {
      super(a);
    }
    getContext() {
      return _.p(this, _.eu, 2);
    }
    setContext(a) {
      return _.Eb(this, _.eu, 2, a);
    }
  };
  var oXf;
  _.nXf = function (a) {
    return _.p(a, _.xt, 1);
  };
  oXf = class extends _.m {
    constructor(a) {
      super(a);
    }
  };
  var qXf;
  _.pXf = function (a) {
    return _.p(a, oXf, 1);
  };
  qXf = class extends _.m {
    constructor(a) {
      super(a);
    }
  };
  qXf.prototype.kb = "xt0Ntc";
  new _.yi(qXf);
  _.rXf = new _.uu("uYKSof", qXf, lXf, [
    _.ji,
    true,
    _.ii,
    "/SearchApiService.GetShortenedKpSharingUrl",
  ]);
  var cXf = class extends _.m {
    constructor(a) {
      super(a);
    }
    getUrl() {
      return _.u(this, 1);
    }
    Yc() {
      return _.th(this, 1);
    }
    getWidth() {
      return _.Se(this, 2);
    }
    jj() {
      return _.Qe(this, 2);
    }
    getHeight() {
      return _.Se(this, 3);
    }
    setHeight(a) {
      return _.Bi(this, 3, a);
    }
    Bh() {
      return _.Qe(this, 3);
    }
    getType() {
      return _.u(this, 4);
    }
    setType(a) {
      return _.fh(this, 4, a);
    }
    ef() {
      return _.th(this, 4);
    }
    Ve() {
      return _.Bj(this, 4);
    }
  };
  var dXf = class extends _.m {
    constructor(a) {
      super(a, 10);
    }
    getTitle() {
      return _.u(this, 1);
    }
    setTitle(a) {
      return _.fh(this, 1, a);
    }
    vd() {
      return _.th(this, 1);
    }
    getDescription() {
      return _.u(this, 2);
    }
    Gi() {
      return _.Bj(this, 2);
    }
    nL() {
      return _.u(this, 3);
    }
    pL() {
      return _.u(this, 4);
    }
    ska() {
      return _.th(this, 4);
    }
    getImage() {
      return _.p(this, cXf, 6);
    }
    qk() {
      return _.aj(this, cXf, 6);
    }
  };
  var eXf = class extends _.m {
    constructor(a) {
      super(a);
    }
    Nvb() {
      return _.u(this, 1);
    }
    gka() {
      return _.p(this, dXf, 3);
    }
  };
  _.fXf = class extends _.m {
    constructor(a) {
      super(a);
    }
    getResponse() {
      return _.p(this, eXf, 1);
    }
  };
  _.fXf.prototype.kb = "GxkwUc";
  new _.yi(_.fXf);
  _.WWf = class extends _.m {
    constructor(a) {
      super(a);
    }
    getLabel() {
      return _.u(this, 1);
    }
    setLabel(a) {
      return _.fh(this, 1, a);
    }
    Ak() {
      return _.th(this, 1);
    }
    Lk() {
      return _.Bj(this, 1);
    }
    getValue() {
      return _.u(this, 2);
    }
    setValue(a) {
      return _.fh(this, 2, a);
    }
    clearValue() {
      return _.$e(this, 2);
    }
    hh() {
      return _.Bj(this, 2);
    }
  };
  _.XWf = class extends _.m {
    constructor(a) {
      super(a);
    }
    setOptions(a, b) {
      return _.hj(this, 1, _.WWf, a, b);
    }
    Zi() {
      return _.Se(this, 2, -1);
    }
    yO() {
      return _.u(this, 4);
    }
    OEa() {
      return _.th(this, 4);
    }
    Wy() {
      return _.u(this, 6);
    }
    PJ(a) {
      return _.fh(this, 6, a);
    }
    vMa() {
      return _.th(this, 6);
    }
    jf() {
      return _.B(this, 7);
    }
    Vg(a) {
      return _.$h(this, 7, a);
    }
  };
  _.TWf = class extends _.m {
    constructor(a) {
      super(a);
    }
  };
  _.kP = class extends _.m {
    constructor(a) {
      super(a);
    }
    setCallback(a) {
      return _.fh(this, 5, a);
    }
  };
  _.UWf = [0, _.F];
  _.VWf = [0, 4, _.F, _.UWf, _.F];
  _.lP = [2, 5, 6, 7, 8, 9, 10, 11, 18];
  _.rQf = [0, [0, _.C, -4, _.Xk], -1];
  var UTe = class extends _.m {
    constructor(a) {
      super(a);
    }
  };
  var VTe = class extends _.m {
    constructor(a) {
      super(a);
    }
    getLocation() {
      return _.p(this, UTe, 1);
    }
    zC(a) {
      return _.Eb(this, UTe, 1, a);
    }
    DI() {
      return _.aj(this, UTe, 1);
    }
  };
  _.WTe = function (a) {
    return _.Se(a, 4);
  };
  _.bL = class extends _.m {
    constructor(a) {
      super(a);
    }
    getCenter() {
      return _.p(this, _.kt, 3);
    }
    setCenter(a) {
      return _.Eb(this, _.kt, 3, a);
    }
    Aa() {
      return _.p(this, _.kt, 1);
    }
    Ba() {
      return _.p(this, _.kt, 2);
    }
    getCamera() {
      return _.p(this, VTe, 5);
    }
    OHa(a) {
      _.Eb(this, VTe, 5, a);
    }
  };
  _.XTe = [
    0,
    _.lt,
    -2,
    _.C,
    [0, [0, _.Xk, -2], [0, _.al, -2], [0, _.C, -1], _.al, -1],
  ];
  _.kif = [1, 4];
  _.lif = class extends _.m {
    constructor(a) {
      super(a);
    }
  };
  _.mif = class extends _.m {
    constructor(a) {
      super(a);
    }
    getType() {
      return _.Ej(this, 1);
    }
    setType(a) {
      return _.Zh(this, 1, a);
    }
    ef() {
      return _.Ok(this, 1);
    }
    Ve() {
      return _.di(this, 1);
    }
    getPosition() {
      return _.p(this, _.lif, 2);
    }
    setPosition(a) {
      return _.Eb(this, _.lif, 2, a);
    }
    lB() {
      return _.aj(this, _.lif, 2);
    }
  };
  _.nif = [4, 5, 6];
  _.IN = class extends _.m {
    constructor(a) {
      super(a, 12);
    }
    getViewport() {
      return _.p(this, _.bL, 1);
    }
    OQ() {
      return _.u(this, 2);
    }
    Aa(a) {
      return _.fh(this, 2, a);
    }
    Ba() {
      return _.th(this, 2);
    }
    getWidth() {
      return _.Se(this, 3);
    }
    jj() {
      return _.Qe(this, 3);
    }
    getHeight() {
      return _.Se(this, 4);
    }
    setHeight(a) {
      return _.Bi(this, 4, a);
    }
    Bh() {
      return _.Qe(this, 4);
    }
  };
  _.IN.prototype.kb = "kMGuHf";
  var oif = [0, _.kif, _.Nl, _.F, _.D, _.cm, _.D, -1];
  _.pif = [
    0,
    _.nif,
    _.I,
    [0, _.lt, _.Xk],
    1,
    _.Ql,
    oif,
    _.Ql,
    [0, oif, _.F],
    _.Ql,
    [0, _.F, -1, _.D],
    _.D,
  ];
  _.qif = [0, _.Xk, -2];
  _.rif = [0, _.Zl];
  _.sif = [
    -12,
    {},
    _.XTe,
    _.F,
    _.C,
    -1,
    _.wl,
    _.rif,
    _.D,
    _.qif,
    _.XTe,
    _.I,
    _.G,
    _.pif,
  ];
  _.tif = [1, 4, 6];
  _.uif = class extends _.m {
    constructor(a) {
      super(a);
    }
    getQuery() {
      return _.Wj(this, 4, _.tif);
    }
    setQuery(a) {
      return _.qk(this, 4, _.tif, a);
    }
    Fh() {
      return _.Mk(this, 4, _.tif);
    }
    getPosition() {
      return _.Ej(this, 3);
    }
    setPosition(a) {
      return _.Zh(this, 3, a);
    }
    lB() {
      return _.Ok(this, 3);
    }
  };
  _.vif = class extends _.m {
    constructor(a) {
      super(a);
    }
  };
  _.wif = class extends _.m {
    constructor(a) {
      super(a);
    }
  };
  _.yif = function () {
    var a = new _.xif();
    return _.$h(a, 1, true);
  };
  _.zif = function (a, b) {
    return _.$h(a, 2, b);
  };
  _.xif = class extends _.m {
    constructor(a) {
      super(a);
    }
  };
  _.Aif = function (a) {
    return _.p(a, _.IN, 1);
  };
  _.JN = class extends _.m {
    constructor(a) {
      super(a);
    }
    zj(a) {
      return _.Zh(this, 45, a);
    }
    Ch() {
      return _.u(this, 53);
    }
    Go(a) {
      return _.fh(this, 53, a);
    }
    lw() {
      return _.th(this, 53);
    }
  };
  _.JN.prototype.kb = "ns7upf";
  var sQf, uQf;
  sQf = [
    0,
    _.sif,
    1,
    _.F,
    1,
    _.D,
    -1,
    1,
    _.I,
    2,
    _.D,
    [
      0,
      _.D,
      -2,
      2,
      _.D,
      -1,
      10,
      _.D,
      -2,
      3,
      _.Jl,
      _.D,
      3,
      _.I,
      _.D,
      [0, _.D],
      [0, _.D, 3, [0, _.D, -3], _.I, -1, _.F, -1],
      _.D,
      _.I,
      -1,
      _.D,
      -1,
      13,
      _.D,
      -1,
    ],
    4,
    _.D,
    1,
    _.C,
    _.Zl,
    3,
    _.D,
    1,
    _.F,
    1,
    _.D,
    [0, _.tif, _.Nl, _.D, _.I, _.Nl, _.F, _.Il],
    1,
    _.D,
    2,
    _.F,
    [0, _.I, [0, _.D, -1, _.C, _.D, 3, _.I, _.D, 1, _.D], 1, _.F, _.D],
    _.I,
    _.D,
    -1,
    _.C,
    _.D,
    -4,
    _.I,
    1,
    _.D,
    [0, _.D],
    _.D,
    -3,
    _.F,
  ];
  _.tQf = [1, 2, 3];
  uQf = class extends _.m {
    constructor(a) {
      super(a);
    }
  };
  _.vQf = class extends _.m {
    constructor(a) {
      super(a);
    }
    Aa() {
      return _.p(this, _.JN, 2);
    }
    zj(a) {
      return _.Zh(this, 3, a);
    }
    getDimensions() {
      return _.p(this, uQf, 4);
    }
    rEb(a) {
      _.Eb(this, uQf, 4, a);
    }
  };
  _.vQf.prototype.kb = "J1TlZd";
  _.wQf = [
    0,
    [0, _.F, -2, _.G, [0, _.pif, [0, _.Xk, -2]]],
    sQf,
    _.I,
    [0, _.tQf, _.Cl, _.Ql, [0, _.C], _.Ql, [0, _.C], _.C],
    _.rQf,
  ];
  _.YWf = class extends _.m {
    constructor(a) {
      super(a);
    }
  };
  _.ZWf = class extends _.m {
    constructor(a) {
      super(a);
    }
    getVersion() {
      return _.Se(this, 17);
    }
    getContext() {
      return _.p(this, _.YWf, 6);
    }
    setContext(a) {
      return _.Eb(this, _.YWf, 6, a);
    }
  };
  _.ZWf.prototype.kb = "B5D67b";
  _.$Wf = class extends _.m {
    constructor(a) {
      super(a);
    }
    zj(a) {
      return _.Zh(this, 9, a);
    }
    Xac() {
      return _.p(this, _.ZWf, 1);
    }
  };
  _.$Wf.prototype.kb = "lZeHnf";
  _.aXf = class extends _.m {
    constructor(a) {
      super(a);
    }
    getQuery() {
      return _.p(this, _.$Wf, 1);
    }
    setQuery(a) {
      return _.Eb(this, _.$Wf, 1, a);
    }
    Fh() {
      return _.aj(this, _.$Wf, 1);
    }
    getContext() {
      return _.p(this, _.eu, 2);
    }
    setContext(a) {
      return _.Eb(this, _.eu, 2, a);
    }
  };
  _.aXf.prototype.kb = "E8m02c";
  new _.yi(_.aXf);
  _.wp.E8m02c = _.up;
  _.nr(_.aXf, _.$Wf, function (a) {
    a = a.getQuery();
    return a != null ? [a] : [];
  });
  _.bXf = class extends _.m {
    constructor(a) {
      super(a);
    }
  };
  _.bXf.prototype.kb = "bvqcbe";
  new _.yi(_.bXf);
  _.TAb = function (a, b) {
    return _.fh(a, 1, b);
  };
  _.UAb = function (a) {
    return _.u(a, 2);
  };
  _.Et = function (a) {
    return _.u(a, 4);
  };
  _.VAb = function (a, b) {
    return _.fh(a, 4, b);
  };
  _.Ft = function (a) {
    return _.u(a, 5);
  };
  _.WAb = function (a) {
    return _.u(a, 6);
  };
  _.Gt = class extends _.m {
    constructor(a) {
      super(a);
    }
    kd() {
      return _.u(this, 1);
    }
  };
  _.Gt.prototype.kb = "dhHkVc";
  _.Ht = [0, _.F, -1, _.Rl, _.F, -4];
  _.bt = [0, 14, [0, [0, _.I, _.F], _.D]];
  var uvb;
  uvb = class extends _.m {
    constructor(a) {
      super(a);
    }
  };
  _.vvb = function (a) {
    return _.Ye(a, 1);
  };
  _.wvb = function (a, b) {
    return _.kk(a, 1, b);
  };
  _.xvb = function (a) {
    return _.Ye(a, 2);
  };
  _.yvb = function (a, b) {
    return _.kk(a, 2, b);
  };
  _.et = class extends _.m {
    constructor(a) {
      super(a, 500);
    }
    getMetadata() {
      return _.p(this, uvb, 500);
    }
    Vk() {
      return _.Ue(this, uvb, 500);
    }
  };
  _.et.prototype.kb = "We9Kzc";
  _.zvb = _.wb(
    _.oia,
    function (a, b, c) {
      b = _.ub(_.eda, b, true);
      if (b != null && b.length)
        for (_.yb(a, c, 2), _.Ab(a.oa, b.length), c = 0; c < b.length; c++)
          a.oa.oa.push(b[c] ? 1 : 0);
    },
    _.REa,
  );
  _.ft = [-500, _.Gl, -1, 12, _.hr, 484, _.bt];
  _.SWf = class extends _.m {
    constructor(a) {
      super(a);
    }
  };
  _.SWf.prototype.kb = "B08AL";
  new _.yi(_.SWf);
  _.Tub = function (a, b) {
    return _.Th(a, b, void 0);
  };
  _.Uub = [0, _.fl];
  _.Vub = _.vb(
    function (a, b, c) {
      return _.Xha(a, b, c);
    },
    _.Zga,
    _.ZEa,
  );
  _.Wub = class extends _.m {
    constructor(a) {
      super(a);
    }
    getValue() {
      return _.Dj(this, 1);
    }
    setValue(a) {
      return _.pk(this, 1, a);
    }
    clearValue() {
      return _.$e(this, 1);
    }
  };
  _.Xub = function (a) {
    return _.p(a, _.Wub, 4);
  };
  _.Ts = class extends _.m {
    constructor(a) {
      super(a);
    }
    clearAlpha() {
      return _.$e(this, 4);
    }
  };
  _.Us = [0, _.fl, -2, _.Uub];
  _.jDb = class extends _.m {
    constructor(a) {
      super(a);
    }
    getSize() {
      return _.Se(this, 1);
    }
    setSize(a) {
      return _.Bi(this, 1, a);
    }
    UO() {
      return _.Qe(this, 1);
    }
    k6() {
      return _.Ej(this, 2);
    }
  };
  _.kDb = class extends _.m {
    constructor(a) {
      super(a);
    }
    getValue() {
      return _.Ej(this, 1);
    }
    setValue(a) {
      return _.Zh(this, 1, a);
    }
    clearValue() {
      return _.$e(this, 1);
    }
    hh() {
      return _.di(this, 1);
    }
  };
  _.lDb = class extends _.m {
    constructor(a) {
      super(a);
    }
    getValue() {
      return _.Ej(this, 1);
    }
    setValue(a) {
      return _.Zh(this, 1, a);
    }
    clearValue() {
      return _.$e(this, 1);
    }
    hh() {
      return _.di(this, 1);
    }
  };
  _.mDb = class extends _.m {
    constructor(a) {
      super(a, 12);
    }
    getColor() {
      return _.p(this, _.Ts, 2);
    }
    setColor(a) {
      return _.Eb(this, _.Ts, 2, a);
    }
    clearColor() {
      return _.$e(this, 2);
    }
    sJ() {
      return _.rj(this, _.Ts, 2);
    }
    Y5() {
      return _.p(this, _.jDb, 5);
    }
    toa() {
      return _.aj(this, _.jDb, 5);
    }
    W5() {
      return _.B(this, 7);
    }
    Kda() {
      return _.B(this, 8);
    }
    Dj() {
      return _.u(this, 11);
    }
    vA() {
      return _.th(this, 11);
    }
    xz() {
      return _.Bj(this, 11);
    }
  };
  _.nDb = {};
  _.oDb = class extends _.m {
    constructor(a) {
      super(a);
    }
    Lv() {
      return _.Se(this, 1);
    }
    Aa() {
      return _.Se(this, 2);
    }
    getStyle() {
      return _.p(this, _.mDb, 3);
    }
    setStyle(a) {
      return _.Eb(this, _.mDb, 3, a);
    }
    By() {
      return _.aj(this, _.mDb, 3);
    }
  };
  _.pDb = [
    -12,
    _.nDb,
    [0, _.I],
    _.Us,
    _.I,
    -1,
    [0, _.C, _.I],
    [0, _.I],
    _.D,
    -2,
    1,
    _.F,
  ];
  _.qDb = [0, _.Bl, -1, _.pDb];
  _.fu = function (a) {
    return _.qh(a, _.oDb, 2, _.sh());
  };
  _.gu = class extends _.m {
    constructor(a) {
      super(a);
    }
    jk() {
      return _.u(this, 1);
    }
  };
  _.hu = [0, _.Kl, _.G, _.qDb];
  _.RWf = class extends _.m {
    constructor(a) {
      super(a);
    }
  };
  _.RWf.prototype.kb = "EJ8QEb";
  new _.yi(_.RWf);
  _.QWf = [0, [0, _.al, _.go], -4];
  _.TTe = [0, _.Wl, -1, _.I];
  _.RTe = [3, 4];
  _.STe = [0, _.RTe, _.Ws, -1, _.cm, _.Cl, [0, _.I], _.C, 1, _.C, _.Ws];
  _.QTe = [0, _.Bl, _.Kl, -6, _.Jl, -1, _.Kl];
  _.hTe = [0, _.D, _.C, -5];
  _.iTe = [0, _.D, -4];
  _.jTe = [0, _.Zl];
  _.eQe = [0, _.C, -3];
  _.dQe = [0, _.C, _.G, [0, _.C], 1, _.I];
  var MAb;
  MAb = class extends _.m {
    constructor(a) {
      super(a);
    }
  };
  _.NAb = class extends _.m {
    constructor(a) {
      super(a);
    }
    getData() {
      return _.p(this, MAb, 1);
    }
    setData(a) {
      return _.Eb(this, MAb, 1, a);
    }
    hasData() {
      return _.aj(this, MAb, 1);
    }
    getUrl() {
      return _.p(this, _.xt, 2);
    }
    Yc() {
      return _.aj(this, _.xt, 2);
    }
    getWidth() {
      return _.Se(this, 3);
    }
    getHeight() {
      return _.Se(this, 4);
    }
    setHeight(a) {
      return _.ik(this, 4, a);
    }
    Dj() {
      return _.p(this, _.Ts, 5);
    }
    vA() {
      return _.aj(this, _.Ts, 5);
    }
    xz() {
      return _.rj(this, _.Ts, 5);
    }
  };
  _.At = [0, _.Kl, _.Uo];
  _.OAb = [0, [0, _.Ul, _.bm], _.At, _.Bl, -1, _.Us, _.Kl];
  var YTe, ZTe;
  YTe = [0, _.Ws, -1];
  ZTe = [0, _.rGa, -1];
  _.$Te = [1, 2];
  _.aUe = [1, 2, 4];
  _.bUe = [1, 2];
  _.cUe = [3, 4];
  _.dUe = [1, 5];
  _.eUe = [1, 2];
  _.fUe = [1, 2];
  _.gUe = [1, 2];
  _.cL = [
    1, 2, 3, 4, 5, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
    24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42,
    43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61,
    62, 63, 64, 65, 66, 67, 68, 69, 70, 71,
  ];
  _.hUe = [
    0,
    _.cL,
    _.Ql,
    [0, _.eUe, _.cm, _.Yl],
    _.Ql,
    [0, _.gUe, _.cm, -1],
    _.Ql,
    [0, _.dUe, _.cm, 3, _.Ql, [0, _.bUe, _.cUe, _.Ql, _.Ws, _.cm, -1, _.Yl]],
    _.Ql,
    [0, _.$Te, _.Yl, _.cm],
    _.Ql,
    [0, _.F],
    1,
    _.Ql,
    [0, _.aUe, _.Ql, _.TTe, _.Yl, _.F, _.cm, _.G, [0, _.I, _.G, [0, _.C]]],
    _.Ql,
    [0, [3, 4], _.Wl, _.I, _.cm, _.Ql, ZTe],
    _.Ql,
    [0, _.D],
    1,
    _.Ql,
    [0, _.I],
    _.Ql,
    [0, _.F],
    _.Ql,
    [0, _.D],
    _.Ql,
    [0, 2, _.I, 1, _.STe],
    _.Ql,
    [0, _.F],
    _.Ql,
    [0, _.I, YTe],
    _.Ql,
    [0, _.I, ZTe, _.F],
    _.Ql,
    [0, _.Wl, _.I, _.G, [0, _.Wl], 1, _.eQe, _.dQe],
    _.Ql,
    [0, _.I],
    _.Ql,
    [0, _.Ws, _.Xs, _.Wl, 1, _.is, -1, _.Wl],
    _.Ql,
    [0, _.I],
    _.Ql,
    [0, _.fUe, _.Ql, _.XTe, _.Ql, [0, _.G, _.Ht], _.I],
    _.Ql,
    [0, _.I, [0, _.QTe, _.lt]],
    _.Ql,
    [0, [2, 4], 1, _.cm, 1, _.Ql, YTe],
    _.Ql,
    [0, _.I],
    _.Ql,
    [0, _.I, _.C],
    _.Ql,
    [0, _.F],
    _.Ql,
    [0, 1, _.C],
    _.Ql,
    [0, _.I],
    _.Ql,
    [0, _.I],
    _.Ql,
    [0, _.D],
    _.Ql,
    [0, _.Wl, 1, _.Wl, _.hu, -1],
    _.Ql,
    [0, _.D],
    _.Ql,
    [0, _.I],
    _.Ql,
    [0, _.I],
    _.Ql,
    [0, _.hu, _.F, -1],
    _.Ql,
    [0, _.I],
    _.Ql,
    [0, _.I],
    _.Ql,
    [0, _.Zl],
    _.Ql,
    [0, _.I, _.Jl],
    _.Ql,
    [0, _.I],
    _.Ql,
    [0, _.D],
    _.Ql,
    [0, _.I],
    _.Ql,
    [0, _.Jl, -1],
    _.Ql,
    [0, _.F, _.I, _.D],
    _.Ql,
    [0, _.I, _.F, -3, _.Zl, _.I],
    _.Ql,
    [0, _.I, _.al],
    _.Ql,
    [0, _.F],
    _.Ql,
    [0, _.I, _.F],
    _.Ql,
    [0, _.I],
    _.Ql,
    [0, _.I, -1],
    _.Ql,
    [0, _.D],
    _.Ql,
    [0, _.I, -1],
    _.Ql,
    [0, _.I, -1],
    _.Ql,
    [0, _.I],
    _.Ql,
    [0, _.F],
    _.Ql,
    [0, _.D],
    _.Ql,
    [0, [1, 2], _.Nl, _.Il],
    _.Ql,
    _.jTe,
    _.Ql,
    [0, _.D],
    _.Ql,
    [0, _.D],
    _.Ql,
    _.iTe,
    _.Ql,
    _.hTe,
    _.Ql,
    [0, 1, [0, _.C, -1, _.F]],
    _.Ql,
    [0, _.F, -1],
    _.Ql,
    [0, _.D],
    _.Ql,
    [0, _.D],
    _.Ql,
    [0, _.$l],
    _.Ql,
    [0, _.C],
    _.Ql,
    [0, _.is],
    _.Ql,
    [0, _.F],
  ];
  _.iUe = [0, 1, _.G, _.hUe];
  _.iP = class extends _.m {
    constructor(a) {
      super(a);
    }
  };
  _.OWf = function (a, b) {
    return _.yh(a, 2, _.iP, b);
  };
  _.jP = class extends _.m {
    constructor(a) {
      super(a);
    }
    qF() {
      return _.qh(this, _.iP, 2, _.sh());
    }
  };
  _.PWf = class extends _.m {
    constructor(a) {
      super(a);
    }
  };
  _.PWf.prototype.kb = "lNg0gf";
  _.G5e = {};
  _.AWf = [true, _.F, _.C];
  _.BWf = [0, _.C, -2, _.F];
  _.vWf = [0, _.C, _.Rl, _.I];
  var wWf = [0, _.el, _.wl];
  _.xWf = [0, [0, _.ql, _.I, _.D]];
  var yWf = [0, [1, 2, 3, 4], _.Nl, _.cm, _.Ql, [0, _.F, _.I], _.cm];
  _.zWf = [
    -11,
    {},
    [
      0,
      _.G,
      [0, _.I, 1, _.I],
      _.Zl,
      _.cDb,
      _.Jl,
      _.G,
      [0, _.F, _.I, _.al, _.I],
      1,
      _.I,
      -1,
      _.D,
    ],
    [0, _.F, -3, _.al, [0, _.C, _.F], _.Zl, -1],
    [0, [1, 4], _.gl, [0, _.I], [0, 2, _.I], _.cm, [0, _.D, -1], _.al, _.I, -2],
    [0, 1, _.al, _.G, [0, _.F, -1], _.Zl, _.xWf, _.C],
    [0, _.Jl, 1, _.I, -1, _.F],
    [-1, _.G5e],
    [
      0,
      [1, 3],
      _.Ql,
      [0, [3, 4], _.G, yWf, -1, _.Cl, _.Il, _.G, yWf],
      _.F,
      _.Nl,
    ],
    [0, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], _.cm, -10],
    [
      0,
      [1, 2],
      [6],
      [3, 4, 5],
      _.Ql,
      _.vWf,
      _.Ql,
      wWf,
      _.Ql,
      _.vWf,
      _.Ql,
      wWf,
      _.Ql,
      [0, _.el],
      _.Ql,
      [0, _.C, -1, _.D, _.al, -1, _.C],
    ],
    [0, [1], _.Ql, wWf, _.G, [0, _.el, _.wl, _.F], _.vWf],
  ];
  var GWf = [0, _.I, -5];
  var HWf = [0, _.F, -1, _.D, _.F, _.Jl, GWf];
  var IWf = [0, _.D, _.F, -3, _.C, _.F, _.D, _.F, _.Jl, GWf];
  var JWf = [0, _.F, -2, _.C, _.F, _.D, _.F, _.D, _.Jl, GWf];
  var KWf = [0, _.I];
  var LWf = [0, _.al, -1];
  var MWf;
  _.NWf = [
    -15,
    {},
    _.G,
    [
      -45,
      {},
      [
        1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 21, 25, 32,
        36, 37, 41,
      ],
      _.Nl,
      _.F,
      _.Ql,
      HWf,
      _.Ql,
      [0, _.F, -1, _.D, _.F, _.Jl, GWf, _.D],
      _.Ql,
      IWf,
      _.Ql,
      JWf,
      _.Ql,
      [0, _.C, -2, _.D, _.F, _.C, _.F, _.C, _.F, _.D, _.F, _.Jl, GWf, _.D],
      _.Ql,
      [0, IWf, JWf, HWf, _.F, _.C, _.F, _.D, _.F, _.Jl, GWf],
      _.Ql,
      [0, _.F, -3, _.C, _.F, _.D, _.F, -1, _.D, _.F, _.Jl, GWf, _.F, -2],
      _.Ql,
      [0, [0, _.F, -5, _.D, _.Jl, GWf], _.F, -7, _.D, _.F, _.Jl, GWf],
      _.Ql,
      [0, _.F, _.Jl, _.F, _.C, _.F, _.D, _.F, _.Jl, GWf],
      _.Ql,
      [0, IWf, _.kl, _.F, _.C, _.F, _.D, _.F, _.Jl, GWf, _.F],
      _.Ql,
      [0, _.F, -3, _.C, _.F, -3, _.D, _.F, _.Jl, GWf],
      _.Ql,
      [0, _.G, [0, _.F, -1], _.F, _.D, _.F],
      _.Nl,
      -1,
      _.G,
      [0, _.F, -2, _.D],
      _.Nl,
      -1,
      [
        0,
        _.G,
        [0, _.al, -2],
        _.al,
        -1,
        _.C,
        _.G,
        [
          0,
          _.C,
          _.I,
          _.C,
          _.I,
          _.Wl,
          _.I,
          -1,
          _.G,
          LWf,
          [0, _.al, -1],
          [0, _.G, LWf, _.al, _.I],
          [0, _.G, LWf, _.I],
        ],
        _.al,
      ],
      _.gl,
      [
        0,
        _.D,
        -1,
        _.I,
        [0, _.I, -1],
        _.D,
        -1,
        _.al,
        _.D,
        _.Jl,
        [0, _.C, -1, _.I, _.C],
        _.I,
        -1,
      ],
      _.cDb,
      _.D,
      _.Ql,
      [0, _.F, -1],
      _.G,
      [0, _.F, -1],
      [0, _.Jl, _.D],
      GWf,
      _.I,
      KWf,
      _.D,
      _.Ql,
      [0, _.F, _.C, _.D],
      _.F,
      _.Jl,
      _.F,
      _.Ql,
      [0, _.F, -2, GWf],
      _.Ql,
      [0, _.F, -2, GWf, _.F],
      _.F,
      -1,
      _.D,
      _.Ql,
      [0, _.F, _.C, _.I, _.F],
      _.D,
      _.BWf,
      _.F,
    ],
    _.G,
    [
      0,
      _.F,
      _.G,
      [0, _.F, -1, _.I],
      _.G,
      [0, _.F, -1],
      _.F,
      _.I,
      [0, _.I, -3],
      _.Jl,
      _.D,
      _.F,
    ],
    4,
    KWf,
    _.al,
    _.D,
    () => MWf,
    _.F,
    _.xWf,
    _.D,
    [0, _.D, -1],
  ];
  MWf = [0, _.G, () => _.NWf, -1];
  _.CWf = {};
  var DWf = [0, _.F, -2];
  var EWf = [0, [3, 4], _.F, -1, _.ol, _.$k, _.C, -1, _.F, -1];
  _.FWf = [
    -4,
    {},
    _.G,
    [
      0,
      [2, 3, 4],
      _.C,
      _.Ql,
      [
        -5,
        {},
        _.G,
        [
          0,
          [
            100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112,
            113, 114, 115, 116, 117, 118, 119, 120,
          ],
          _.C,
          _.F,
          -1,
          _.zWf,
          _.G,
          [0, [4, 5], _.C, _.F, -1, _.cm, _.Nl, _.F, _.zWf, _.I],
          _.F,
          -1,
          _.BWf,
          _.D,
          90,
          _.Nl,
          _.Ql,
          [0, _.F, _.I, [0, _.I, _.al, _.I]],
          _.Ql,
          [0, _.F],
          _.Ql,
          [0, _.F, _.C],
          _.Ql,
          [0, _.F, _.I],
          _.Ql,
          [0, _.F, -1],
          _.Ql,
          [0, _.F, _.I],
          _.Ql,
          EWf,
          _.Ql,
          [0, 1, _.F],
          _.Ql,
          DWf,
          _.Ql,
          [0, _.Jl, _.I],
          _.Ql,
          [0, [5, 6, 7], _.C, -2, _.F, _.cm, -1, _.Cl],
          _.Ql,
          [0, [5, 6], _.C, -3, _.cm, _.Cl],
          _.Ql,
          [0, [1, 2], [4, 5, 6], _.Ql, EWf, _.Ql, DWf, _.F, _.cm, -1, _.Cl],
          _.Ql,
          [
            0,
            [3, 4],
            [8, 9, 10],
            _.C,
            -1,
            _.Cl,
            _.Nl,
            _.C,
            _.I,
            _.F,
            _.cm,
            -1,
            _.Cl,
          ],
          _.Ql,
          [0, _.F, _.Jl, _.F],
          _.Ql,
          [0, [4, 5, 6], EWf, _.F, 1, _.cm, -1, _.Cl],
          _.Ql,
          [0, _.F, -3, _.C, _.F, -2],
          _.Ql,
          [0, _.F, _.I],
          _.Ql,
          [0, _.G, [0, _.F, -1], _.F, _.D],
          _.Ql,
          [0, _.F, -1],
        ],
        _.zWf,
        _.G,
        [0, _.C, -1, _.zWf],
        _.D,
      ],
      _.Ql,
      [-3, {}, _.F, _.zWf],
      _.Ql,
      [0, [1, 2], _.Ql, _.vWf, _.Ql, [0, _.F]],
    ],
    _.zWf,
    [0, _.Vk, _.AGa, _.Vk, _.AWf, _.Vk, _.dm],
  ];
  _.uWf = [0, _.Kl];
  _.tWf = [0, _.Yk];
  _.sWf = [
    0,
    [
      0,
      _.G,
      [
        0,
        _.I,
        [
          0,
          _.Vk,
          _.Wk(_.C, [0, _.C, 1, _.F, -3, [0, _.C, _.F], _.C]),
          _.D,
          _.C,
          -2,
        ],
      ],
      _.I,
    ],
    1,
    [0, 1, _.I, _.C],
  ];
  _.zt = class extends _.m {
    constructor(a) {
      super(a);
    }
    getId() {
      return _.u(this, 2);
    }
    Sc(a) {
      return _.fh(this, 2, a);
    }
    yh() {
      return _.th(this, 2);
    }
    If() {
      return _.Bj(this, 2);
    }
  };
  _.zt.prototype.kb = "DzddFf";
  _.LAb = [0, _.I, _.F];
  _.zt.prototype.Aa = _.Pb(_.LAb);
  var PAb;
  PAb = class extends _.m {
    constructor(a) {
      super(a);
    }
    Cl() {
      return _.p(this, _.zt, 2);
    }
  };
  _.QAb = class extends _.m {
    constructor(a) {
      super(a, 13);
    }
    getId() {
      return _.p(this, PAb, 1);
    }
    Sc(a) {
      return _.Eb(this, PAb, 1, a);
    }
    yh() {
      return _.aj(this, PAb, 1);
    }
    If() {
      return _.rj(this, PAb, 1);
    }
    CE() {
      return _.u(this, 11);
    }
    o6() {
      return _.th(this, 11);
    }
    Qo() {
      return _.Dj(this, 12);
    }
    eG() {
      return _.Kk(this, 12);
    }
  };
  _.Bt = [
    -13,
    {},
    [0, _.Kl, _.LAb],
    [0, _.G, _.OAb, [0, _.Kl, _.At]],
    _.At,
    _.F,
    _.D,
    [0, _.At],
    _.I,
    _.D,
    1,
    [0, _.F, -1, 1, _.G, [0, _.F, -1]],
    _.F,
    _.al,
  ];
  _.rWf = [0, _.I, _.F, _.Bt];
  _.qWf = [0, _.Bl];
  _.XEb = {};
  _.YEb = class extends _.m {
    constructor(a) {
      super(a, 4);
    }
    getUrl() {
      return _.p(this, _.xt, 2);
    }
    Yc() {
      return _.aj(this, _.xt, 2);
    }
    bya() {
      return _.p(this, _.QAb, 3);
    }
  };
  _.ZEb = [-4, _.XEb, _.F, _.At, _.Bt];
  _.wqb = [0, _.Hl];
  _.nWf = [0, _.bm];
  _.oWf = [0, _.G, _.ZEb, 1, _.wqb];
  _.pWf = [0, _.G, [0, _.hu], _.oWf, [0, _.nWf], _.bm];
  _.Cbf = class extends _.m {
    constructor(a) {
      super(a);
    }
    getValue() {
      return _.Xe(this, 1);
    }
    setValue(a) {
      return _.IFa(this, 1, a);
    }
    clearValue() {
      return _.$e(this, 1);
    }
  };
  _.Dbf = [0, _.nl];
  _.Ebf = [0, _.Yk, -2, _.Dbf, [0, 1, [0, [3], 2, _.Ql, [0, _.hu]]], _.bm];
  _.mWf = [0, _.ZEb, _.Ebf, [0, _.hu, [0, _.Kl]], _.Kl];
  _.kWf = [0, _.Yk, -2];
  _.lWf = [0, _.G, _.hu];
  _.iWf = [1, 3];
  _.jWf = [1, 2, 3];
  _.hWf = [0, _.I, _.D];
  _.GZc = function (a) {
    return _.Ue(a, _.xt, 1);
  };
  _.HZc = class extends _.m {
    constructor(a) {
      super(a, 6);
    }
  };
  _.IZc = function (a) {
    return _.Ue(a, _.HZc, 1);
  };
  _.JZc = class extends _.m {
    constructor(a) {
      super(a);
    }
  };
  _.KZc = [0, _.Bt, _.F, 1, _.F, _.C];
  _.LZc = [0, _.F];
  _.MZc = [0, [-6, {}, _.At, -1, _.I, _.LZc, _.At], _.KZc];
  _.r6e = function (a) {
    return _.Ue(a, _.ih, 2);
  };
  _.s6e = function (a) {
    return _.p(a, _.xt, 1);
  };
  _.t6e = function (a) {
    return _.p(a, _.HZc, 1);
  };
  _.u6e = function (a) {
    return _.p(a, _.xt, 1);
  };
  _.v6e = function (a) {
    return _.Ue(a, _.xt, 1);
  };
  _.w6e = function (a) {
    return _.p(a, _.JZc, 2);
  };
  _.lM = class extends _.m {
    constructor(a) {
      super(a);
    }
  };
  _.x6e = [0, _.At, _.MZc];
  _.gWf = [0, 1, _.x6e, _.C, -2, _.F, _.G, [0, _.OAb, [0, _.I, _.C]], _.XTe];
  _.JKb = [0, _.C, -1, _.D, _.C, _.I, _.D, _.C, -2, _.$l, _.I];
  _.RAb = class extends _.m {
    constructor(a) {
      super(a);
    }
    getAttributeType() {
      return _.Ej(this, 1);
    }
  };
  _.RAb.prototype.kb = "Nfp6Fe";
  _.SAb = [0, _.I, _.D, -1];
  _.AAb = class extends _.m {
    constructor(a) {
      super(a);
    }
    getId() {
      return _.u(this, 2);
    }
    Sc(a) {
      return _.fh(this, 2, a);
    }
    yh() {
      return _.th(this, 2);
    }
    If() {
      return _.Bj(this, 2);
    }
  };
  _.wt = [0, _.I, _.F];
  _.Tcf = class extends _.m {
    constructor(a) {
      super(a);
    }
    Jv() {
      return _.u(this, 1);
    }
    kU() {
      return _.th(this, 1);
    }
    yl() {
      return _.u(this, 2);
    }
  };
  var aWf, cWf;
  aWf = [0, _.F, -1, _.D];
  _.bWf = [0, _.At, _.MZc, _.I, aWf, _.F];
  cWf = [0, _.F, -1];
  _.dWf = [0, _.F, -1];
  _.eWf = [0, _.nl, _.bm, _.wqb];
  _.fWf = [
    0,
    _.G,
    [
      0,
      1,
      _.G,
      [
        0,
        cWf,
        [
          0,
          _.G,
          [
            0,
            cWf,
            _.dWf,
            _.G,
            [0, cWf, _.dWf],
            1,
            _.G,
            [0, _.F, _.wt],
            [0, _.F],
            _.bWf,
            _.F,
            -2,
            _.G,
            _.SAb,
          ],
        ],
      ],
      _.eWf,
      cWf,
      _.I,
      aWf,
    ],
    _.JKb,
  ];
  _.ZVf = [0, _.F, _.D];
  _.$Vf = [0, [2], _.I, _.cm];
  _.Ycf = [0, _.F, -1];
  _.Xcf = [0, _.F, -1, _.D];
  _.Ucf = [0, _.G, [0, _.F, -1]];
  _.Vcf = [0, _.G, [0, _.F, -1]];
  _.Wcf = [0, _.F, -1];
  _.H6e = [0, _.kl, _.F, -1];
  _.h6e = [1, 2];
  _.i6e = [0, _.h6e, _.Nl, _.Ql, _.Yo];
  _.N5e = [0, _.I, _.F, -1, _.Vk, _.dm, [0, _.F, _.D]];
  _.LWe = [0, _.I, _.F, _.hu, _.D, [0, _.hu, _.OAb], _.I];
  _.MWe = [0, _.LWe, [0, _.hu], _.F];
  var NWe;
  NWe = class extends _.m {
    constructor(a) {
      super(a);
    }
    AP() {
      return _.p(this, _.gu, 1);
    }
    CLa() {
      return _.rj(this, _.gu, 1);
    }
    getIcon() {
      return _.p(this, _.NAb, 2);
    }
    setIcon(a) {
      return _.Eb(this, _.NAb, 2, a);
    }
    uj() {
      return _.aj(this, _.NAb, 2);
    }
  };
  _.OWe = class extends _.m {
    constructor(a) {
      super(a);
    }
    getType() {
      return _.Ej(this, 1);
    }
    setType(a) {
      return _.Zh(this, 1, a);
    }
    ef() {
      return _.Ok(this, 1);
    }
    Ve() {
      return _.di(this, 1);
    }
    Lm() {
      return _.u(this, 2);
    }
    getTitle() {
      return _.p(this, _.gu, 3);
    }
    setTitle(a) {
      return _.Eb(this, _.gu, 3, a);
    }
    vd() {
      return _.aj(this, _.gu, 3);
    }
    oA() {
      return _.p(this, NWe, 5);
    }
    getContentType() {
      return _.Ej(this, 6);
    }
  };
  _.PWe = class extends _.m {
    constructor(a) {
      super(a);
    }
    Z8() {
      return _.u(this, 3);
    }
  };
  _.PWe.prototype.kb = "kqh5Fb";
  _.dL = function (a) {
    return _.qh(a, _.PWe, 2, _.sh());
  };
  _.QWe = class extends _.m {
    constructor(a) {
      super(a);
    }
  };
  _.QWe.prototype.kb = "Jo6Nob";
  _.RWe = [0, 1, _.G, _.MWe];
  _.DBb = [0, _.Gl, -1];
  _.Ct = class extends _.m {
    constructor(a) {
      super(a);
    }
    getUrl() {
      return _.u(this, 1);
    }
    Yc() {
      return _.th(this, 1);
    }
  };
  _.Dt = [0, _.F, 2, _.F, 1, _.F, _.I, [0, _.F, -1], _.C, 1, _.F, _.$l];
  _.EBb = class extends _.m {
    constructor(a) {
      super(a);
    }
    Ba() {
      return _.Ye(this, 1);
    }
    Da() {
      return _.Fk(this, 1);
    }
    Aa() {
      return _.Ye(this, 2);
    }
    Ca() {
      return _.Fk(this, 2);
    }
  };
  _.FBb = class extends _.m {
    constructor(a) {
      super(a);
    }
  };
  _.GBb = class extends _.m {
    constructor(a) {
      super(a);
    }
    getValue() {
      return _.Ej(this, 1);
    }
    setValue(a) {
      return _.Zh(this, 1, a);
    }
    clearValue() {
      return _.$e(this, 1);
    }
    hh() {
      return _.di(this, 1);
    }
  };
  _.HBb = class extends _.m {
    constructor(a) {
      super(a);
    }
    Kda() {
      return _.B(this, 3);
    }
    Y5() {
      return _.p(this, _.FBb, 4);
    }
    toa() {
      return _.aj(this, _.FBb, 4);
    }
  };
  var IBb = class extends _.m {
    constructor(a) {
      super(a);
    }
    Lv() {
      return _.Se(this, 1);
    }
    Aa() {
      return _.Se(this, 2);
    }
    getStyle() {
      return _.p(this, _.HBb, 3);
    }
    setStyle(a) {
      return _.Eb(this, _.HBb, 3, a);
    }
    By() {
      return _.aj(this, _.HBb, 3);
    }
    Jl() {
      return _.p(this, _.Ct, 4);
    }
    Af() {
      return _.Ue(this, _.Ct, 4);
    }
    Ru() {
      return _.aj(this, _.Ct, 4);
    }
  };
  _.Nt = function (a, b) {
    return _.qh(a, IBb, 2, _.sh(b));
  };
  _.Ot = class extends _.m {
    constructor(a) {
      super(a);
    }
    jk() {
      return _.u(this, 1);
    }
  };
  _.Pt = [
    0,
    _.F,
    _.G,
    [0, _.C, -1, [0, [0, _.I], _.DBb, _.D, [0, _.al], _.D], _.Dt],
  ];
  _.PTe = [0, _.G, [0, _.F, [0, _.F, -2], _.F, _.I, _.D, _.F, _.Pt, _.F]];
  _.NSe = class extends _.m {
    constructor(a) {
      super(a);
    }
  };
  _.OSe = [0, _.F, -1];
  var PSe, USe, WSe, XSe;
  PSe = [1, 2, 3];
  _.QSe = class extends _.m {
    constructor(a) {
      super(a);
    }
    Zr() {
      return _.Wj(this, 2, PSe);
    }
  };
  _.RSe = class extends _.m {
    constructor(a) {
      super(a);
    }
    getValue() {
      return _.B(this, 1);
    }
    setValue(a) {
      return _.$h(this, 1, a);
    }
    clearValue() {
      return _.$e(this, 1);
    }
    hh() {
      return _.ci(this, 1);
    }
  };
  _.SSe = [1, 2];
  _.TSe = [3, 4, 5];
  USe = class extends _.m {
    constructor(a) {
      super(a);
    }
    clearValue() {
      return _.kj(this, _.TSe);
    }
  };
  _.VSe = [0, PSe, _.cm, _.Nl, _.Ql, _.OSe];
  WSe = [0, _.C, -1];
  XSe = [0, _.F, _.Xk, _.F, -1, WSe];
  _.YSe = [
    0,
    _.TSe,
    _.I,
    _.G,
    [0, [1], _.Il, _.F],
    _.Ql,
    [0, _.D, _.F, -2, WSe],
    _.Ql,
    XSe,
    _.Ql,
    [0, _.SSe, _.Ql, [0, 2, _.F], _.Ql, [0, [0, _.G, XSe, _.I, _.VSe], -1]],
  ];
  _.ZSe = class extends _.m {
    constructor(a) {
      super(a);
    }
    Nsa() {
      return _.di(this, 8);
    }
    getId() {
      return _.u(this, 1);
    }
    Sc(a) {
      return _.fh(this, 1, a);
    }
    yh() {
      return _.th(this, 1);
    }
    If() {
      return _.Bj(this, 1);
    }
    getValue() {
      return _.p(this, USe, 3);
    }
    setValue(a) {
      return _.Eb(this, USe, 3, a);
    }
    clearValue() {
      return _.$e(this, 3);
    }
    hh() {
      return _.rj(this, USe, 3);
    }
    Qvb() {
      return _.di(this, 4);
    }
    getIcon() {
      return _.p(this, _.QSe, 5);
    }
    setIcon(a) {
      return _.Eb(this, _.QSe, 5, a);
    }
    uj() {
      return _.aj(this, _.QSe, 5);
    }
    cOb() {
      return _.u(this, 7);
    }
    DQb() {
      return _.th(this, 7);
    }
  };
  _.$Se = [
    0,
    _.F,
    -1,
    _.YSe,
    _.I,
    _.VSe,
    _.D,
    _.F,
    _.I,
    _.G,
    [0, [0, [0, _.C, -1], [0, _.Pt]]],
  ];
  _.aTe = [0, _.F, -1, _.G, _.$Se, _.VSe, _.F];
  _.GTe = [0, _.G, _.$Se, _.G, _.aTe, _.G, _.$Se, -1, _.I, _.G, _.aTe];
  _.kTe = [
    0,
    [6, 7],
    _.D,
    _.I,
    _.Xl,
    -1,
    _.I,
    _.Ql,
    [0, _.Zl],
    _.Ql,
    [0, _.Zl],
    _.Jl,
    _.Xl,
    _.D,
    _.I,
    _.$l,
    _.D,
    _.G,
    _.hTe,
    _.jTe,
    _.D,
    -1,
    _.iTe,
    _.D,
    -1,
    _.G,
    [0, _.D, _.C, -5],
    [0, _.$l],
    [0, _.D, -4],
  ];
  _.bTe = [0, _.I, _.F];
  _.aSe = class extends _.m {
    constructor(a) {
      super(a);
    }
  };
  _.bSe = [0, _.Dl, -1];
  _.VZd = [-5, {}, [-1, {}], 1, _.C, [0, _.C, _.I]];
  _.pu = class extends _.m {
    constructor(a) {
      super(a);
    }
    Ba() {
      return _.Se(this, 1);
    }
    Aa() {
      return _.u(this, 2);
    }
    getVersion() {
      return _.Ej(this, 4);
    }
    getViewerType() {
      return _.Se(this, 5);
    }
    Bx(a) {
      return _.Bi(this, 5, a);
    }
  };
  _.pu.prototype.kb = "Whplyf";
  _.qu = [0, _.C, _.F, 1, _.I, _.C];
  _.$Eb = {};
  _.aFb = {};
  _.MCb = class extends _.m {
    constructor(a) {
      super(a);
    }
  };
  _.NCb = class extends _.m {
    constructor(a) {
      super(a);
    }
    Kh() {
      return _.Dj(this, 1);
    }
    Wr(a) {
      return _.zh(this, 1, a);
    }
    c9() {
      return _.Se(this, 3);
    }
    MOb() {
      return _.p(this, _.MCb, 2);
    }
    JQb() {
      return _.aj(this, _.MCb, 2);
    }
  };
  _.OCb = [0, _.C, -4];
  _.PCb = [0, _.al, _.OCb, _.C];
  _.KCb = class extends _.m {
    constructor(a) {
      super(a);
    }
    Xb() {
      return _.p(this, _.Ot, 1);
    }
    Zb(a) {
      return _.Eb(this, _.Ot, 1, a);
    }
    Xe() {
      return _.aj(this, _.Ot, 1);
    }
    Eg() {
      return _.Ej(this, 2);
    }
    qo() {
      return _.di(this, 2);
    }
  };
  _.LCb = [0, _.Pt, _.I, -1, _.Uo];
  _.JCb = class extends _.m {
    constructor(a) {
      super(a);
    }
  };
  _.$t = [0, _.F, _.G, [0, _.F, _.I], _.F, -2, _.Dt];
  _.wCb = [0, _.F, -1, _.I];
  _.xCb = class extends _.m {
    constructor(a) {
      super(a);
    }
    getLabel() {
      return _.u(this, 2);
    }
    setLabel(a) {
      return _.fh(this, 2, a);
    }
    Ak() {
      return _.th(this, 2);
    }
    Lk() {
      return _.Bj(this, 2);
    }
  };
  _.yCb = function (a) {
    return _.aj(a, _.xCb, 7);
  };
  _.zCb = class extends _.m {
    constructor(a) {
      super(a);
    }
    getDay() {
      return _.Ej(this, 2);
    }
    getDate() {
      return _.p(this, _.Vs, 3);
    }
    setDate(a) {
      return _.Eb(this, _.Vs, 3, a);
    }
  };
  _.ACb = function (a) {
    return _.Ue(a, _.zCb, 1);
  };
  _.BCb = function (a) {
    return _.p(a, _.Ot, 5);
  };
  _.CCb = class extends _.m {
    constructor(a) {
      super(a);
    }
  };
  _.DCb = [0, _.F, _.I, _.Ws, _.G, [0, _.F, [0, _.Xs, -1]], _.D, _.I, _.wCb];
  var ECb = [0, _.DCb, _.C, _.I, -1, _.Pt, -1, 1, _.Xs, _.Pt];
  _.FCb = function (a) {
    return _.p(a, _.CCb, 2);
  };
  _.GCb = function (a) {
    return _.Ue(a, _.CCb, 2);
  };
  _.HCb = class extends _.m {
    constructor(a) {
      super(a);
    }
    U5() {
      return _.p(this, _.Ot, 6);
    }
  };
  _.HCb.prototype.kb = "GkHlod";
  _.ICb = [0, _.G, _.DCb, ECb, _.I, 1, _.F, _.Pt, _.I];
  _.rCb = class extends _.m {
    constructor(a) {
      super(a);
    }
    getType() {
      return _.Ej(this, 1);
    }
    setType(a) {
      return _.Zh(this, 1, a);
    }
    ef() {
      return _.Ok(this, 1);
    }
    Ve() {
      return _.di(this, 1);
    }
    aOb() {
      return _.qh(this, _.Ot, 2, _.sh());
    }
  };
  _.sCb = [0, _.I, _.G, _.Pt];
  _.tCb = function (a) {
    return _.qh(a, _.rCb, 1, _.sh());
  };
  _.uCb = class extends _.m {
    constructor(a) {
      super(a);
    }
  };
  _.vCb = [0, _.G, _.sCb, [0, _.F, -6, [0, _.F]], [0, _.F, _.Pt, -1, _.I]];
  _.nCb = class extends _.m {
    constructor(a) {
      super(a, 1);
    }
  };
  _.Yt = {};
  _.kBb = [0, _.I, _.G, [0, _.I, _.C]];
  var eBb = class extends _.m {
    constructor(a) {
      super(a);
    }
  };
  var fBb = class extends _.m {
    constructor(a) {
      super(a);
    }
    Xb() {
      return _.u(this, 1);
    }
    Zb(a) {
      return _.fh(this, 1, a);
    }
    Xe() {
      return _.th(this, 1);
    }
    getMetadata() {
      return _.p(this, eBb, 6);
    }
    Vk() {
      return _.Ue(this, eBb, 6);
    }
  };
  _.gBb = function (a) {
    return _.u(a, 2);
  };
  _.hBb = class extends _.m {
    constructor(a) {
      super(a);
    }
    aka() {
      return _.Bj(this, 4);
    }
    yO() {
      return _.p(this, fBb, 11);
    }
    OEa() {
      return _.aj(this, fBb, 11);
    }
  };
  _.iBb = [0, _.F, [0, [1, 2, 3], _.Nl, -1, _.jGa], _.F, 2, [0, _.C, _.F]];
  _.jBb = [
    0,
    _.F,
    -1,
    _.Dt,
    _.F,
    1,
    _.C,
    -1,
    1,
    [0, _.D, _.C, _.D],
    _.C,
    _.iBb,
  ];
  _.dBb = [0, _.al, -2];
  _.bBb = class extends _.m {
    constructor(a) {
      super(a);
    }
  };
  _.cBb = [0, _.Xk, -1];
  _.$Ab = [2, 3];
  _.aBb = [0, _.$Ab, _.I, _.Nl, _.Cl];
  _.XAb = class extends _.m {
    constructor(a) {
      super(a);
    }
    getHeight() {
      return _.Se(this, 1);
    }
    setHeight(a) {
      return _.Bi(this, 1, a);
    }
    Bh() {
      return _.Qe(this, 1);
    }
    getWidth() {
      return _.Se(this, 2);
    }
    jj() {
      return _.Qe(this, 2);
    }
  };
  _.It = function (a) {
    return _.u(a, 7);
  };
  _.Jt = class extends _.m {
    constructor(a) {
      super(a);
    }
    getUrl() {
      return _.u(this, 1);
    }
    Yc() {
      return _.th(this, 1);
    }
    Zna() {
      return _.u(this, 6);
    }
    Cl() {
      return _.p(this, _.zt, 2);
    }
    xq() {
      return _.Ej(this, 4);
    }
    Aa() {
      return _.p(this, _.XAb, 5);
    }
    getTitle() {
      return _.u(this, 11);
    }
    setTitle(a) {
      return _.fh(this, 11, a);
    }
    vd() {
      return _.th(this, 11);
    }
  };
  _.Jt.prototype.kb = "hZJcjf";
  _.YAb = [0, _.C, -1];
  _.ZAb = [0, _.F];
  _.Kt = [
    0,
    _.F,
    _.LAb,
    _.ZAb,
    _.I,
    _.YAb,
    _.F,
    -2,
    [0, _.kl, _.G, [0, _.C, -2, _.F, _.I]],
    _.I,
    _.F,
    _.D,
    _.I,
  ];
  var mBb;
  _.lBb = class extends _.m {
    constructor(a) {
      super(a);
    }
  };
  mBb = [0, _.jBb, _.F, 7, [0, 3, _.Zl, 1, _.C]];
  _.nBb = [0, _.F, _.Dt, _.C, _.kBb];
  _.oBb = [0, [0, _.I, _.F, -2], [0, _.kl, _.F], _.I, _.F];
  _.pBb = [0, _.D, -1];
  _.qBb = [0, _.G, [0, _.I, _.F]];
  var rBb = class extends _.m {
    constructor(a) {
      super(a);
    }
    kd() {
      return _.u(this, 2);
    }
    vJ() {
      return _.p(this, _.lBb, 4);
    }
    setOrientation(a) {
      return _.Eb(this, _.lBb, 4, a);
    }
    YUa() {
      return _.rj(this, _.lBb, 4);
    }
  };
  _.sBb = class extends _.m {
    constructor(a) {
      super(a);
    }
    getName() {
      return _.u(this, 1);
    }
    Je(a) {
      return _.fh(this, 1, a);
    }
    jh() {
      return _.th(this, 1);
    }
    Rc() {
      return _.u(this, 2);
    }
    Eg() {
      return _.Ej(this, 3);
    }
    qo() {
      return _.di(this, 3);
    }
  };
  _.tBb = class extends _.m {
    constructor(a) {
      super(a);
    }
    yO() {
      return _.u(this, 1);
    }
    OEa() {
      return _.th(this, 1);
    }
  };
  _.uBb = class extends _.m {
    constructor(a) {
      super(a);
    }
    getDescription() {
      return _.p(this, _.tBb, 1);
    }
    Gi() {
      return _.rj(this, _.tBb, 1);
    }
    setLabel(a, b) {
      return _.hj(this, 7, _.sBb, a, b);
    }
    BLa() {
      return _.Ej(this, 8);
    }
    getLocation() {
      return _.p(this, rBb, 17);
    }
    zC(a) {
      return _.Eb(this, rBb, 17, a);
    }
    DI() {
      return _.aj(this, rBb, 17);
    }
  };
  _.uBb.prototype.kb = "DWh76e";
  _.vBb = [0, _.F, _.kl, _.aBb];
  _.wBb = [
    0,
    [0, _.F, -1],
    mBb,
    [0, _.vBb, _.F, _.kl, _.vBb, _.G, [0, _.I, _.G, [0, _.Gl]]],
    _.nBb,
    [0, _.G, [0, _.F], _.al, [0, _.al, -4]],
    _.oBb,
    _.G,
    [0, _.F, -1, _.I, _.F],
    _.I,
    1,
    _.G,
    [0, _.I, _.F, _.G, [0, _.F]],
    1,
    _.F,
    _.kBb,
    _.qBb,
    _.G,
    [0, _.I],
    _.$l,
    [0, _.cBb, _.F, -1, _.dBb, -1],
    _.ZAb,
    [0, 1, _.F],
    _.pBb,
  ];
  _.xBb = class extends _.m {
    constructor(a) {
      super(a);
    }
    p0() {
      return _.Xe(this, 1);
    }
    Usa() {
      return _.Ze(this, 1);
    }
  };
  _.Lt = function (a) {
    return _.u(a, 1);
  };
  _.yBb = function (a) {
    return _.th(a, 1);
  };
  _.zBb = class extends _.m {
    constructor(a) {
      super(a);
    }
    cEa() {
      return _.u(this, 2);
    }
    Qod() {
      return _.th(this, 2);
    }
  };
  _.ABb = class extends _.m {
    constructor(a) {
      super(a);
    }
  };
  _.BBb = class extends _.m {
    constructor(a) {
      super(a);
    }
  };
  _.Mt = class extends _.m {
    constructor(a) {
      super(a);
    }
    Tp() {
      return _.Ue(this, _.Jt, 1);
    }
    getMetadata() {
      return _.p(this, _.uBb, 2);
    }
    Vk() {
      return _.Ue(this, _.uBb, 2);
    }
    LL() {
      return _.u(this, 3);
    }
  };
  _.Mt.prototype.kb = "m9lKaf";
  _.CBb = [0, _.Kt, _.wBb, _.F, -2];
  var KBb;
  _.JBb = [0, _.F, _.C, _.Ht];
  KBb = [0, _.F, -1, _.C, _.F, _.I, _.G, () => KBb, _.al];
  _.LBb = [0, [0, _.al, _.C], [0, _.al, -1, _.C, _.D, -1], _.G, KBb, _.D, _.Xk];
  _.MBb = [0, _.I];
  _.NBb = [
    0,
    _.F,
    _.G,
    _.SAb,
    -1,
    _.G,
    [0, _.F, [0, _.F, -2], _.F, -1, _.C, _.F, _.G, [0, _.F]],
  ];
  _.OBb = [0, _.I];
  _.PBb = [3, 4, 5];
  _.QBb = [
    0,
    _.PBb,
    _.I,
    _.F,
    _.Ql,
    [0, _.F, _.Dt],
    _.Ql,
    [0, _.F],
    _.Ql,
    [0, _.F],
    _.F,
    [0, [0, _.F, -1], _.I],
  ];
  _.RBb = [0, _.F, -1, _.D, _.G, [0, _.F, -1], _.F, -2];
  var SBb = [0, _.ql, -1, 1, [0, _.F, -1]];
  _.TBb = [
    0,
    [4, 5],
    _.I,
    _.F,
    [0, _.F, -2],
    _.Ql,
    SBb,
    _.Ql,
    [0, SBb, _.C],
    _.C,
    _.F,
    -1,
    _.D,
    _.F,
    [0, _.kl, -1],
    1,
    _.F,
    _.QBb,
    _.RBb,
    _.MBb,
    _.I,
    _.G,
    _.LBb,
    _.C,
    _.Pt,
    -1,
    _.D,
    _.F,
    -1,
    _.G,
    _.CBb,
    _.D,
    _.JBb,
    _.Pt,
    _.F,
  ];
  var VBb = [0, _.Bt, [0, _.At, _.Bt, _.is, _.Hl, _.Kl, -1]];
  _.WBb = class extends _.m {
    constructor(a) {
      super(a);
    }
    dg() {
      return _.p(this, _.Tt, 6);
    }
    Nm() {
      return _.aj(this, _.Tt, 6);
    }
    getName() {
      return _.u(this, 9);
    }
    Je(a) {
      return _.fh(this, 9, a);
    }
    jh() {
      return _.th(this, 9);
    }
    getDescription() {
      return _.u(this, 13);
    }
    Gi() {
      return _.Bj(this, 13);
    }
  };
  _.XBb = [12, 15];
  _.WBb.prototype.kb = "QdCaGb";
  var YBb = [
    0,
    _.XBb,
    _.F,
    _.C,
    -2,
    _.G,
    VBb,
    _.Ut,
    _.C,
    -1,
    _.F,
    _.Ht,
    _.QBb,
    _.Ql,
    _.TBb,
    _.F,
    _.G,
    _.OBb,
    _.Ql,
    _.NBb,
    _.Ut,
    -1,
  ];
  _.ZBb = [0, _.C];
  var $Bb = [0, _.C, _.D, -1, _.ZBb];
  _.aCb = class extends _.m {
    constructor(a) {
      super(a);
    }
    getType() {
      return _.Ej(this, 1);
    }
    setType(a) {
      return _.Zh(this, 1, a);
    }
    ef() {
      return _.Ok(this, 1);
    }
    Ve() {
      return _.di(this, 1);
    }
    uEa() {
      return _.qh(this, _.WBb, 2, _.sh());
    }
  };
  _.aCb.prototype.kb = "w8AXh";
  _.bCb = [0, _.I, _.G, YBb, $Bb];
  _.gAb = class extends _.m {
    constructor(a) {
      super(a);
    }
    Xb() {
      return _.u(this, 1);
    }
    Zb(a) {
      return _.fh(this, 1, a);
    }
    Xe() {
      return _.th(this, 1);
    }
  };
  _.vt = [0, _.F, -1];
  _.mt = [0, _.C, _.F, _.C];
  _.Ewb = [0, _.G, [0, _.F, _.I, _.kl, _.F, _.D, _.F, _.al, _.F], _.I];
  _.Bwb = [0, _.F];
  _.Cwb = [
    0,
    _.G,
    [0, 1, _.I],
    _.al,
    [0, _.G, [0, _.F, _.al, _.F], [0, _.Zl, _.al, _.Bwb]],
  ];
  _.jvb = function (a, b) {
    return _.ok(a, 1, b);
  };
  _.kvb = function (a, b) {
    return _.ok(a, 2, b);
  };
  _.ct = class extends _.m {
    constructor(a) {
      super(a);
    }
    Ba() {
      return _.Cj(this, 1);
    }
    Ca() {
      return _.Ik(this, 2);
    }
    Aa() {
      return _.$i(this, 2, void 0, void 0, _.bb);
    }
  };
  _.ct.prototype.kb = "jCvsMd";
  _.dt = [0, _.Dl, -1, _.hr];
  var Zub, Yub;
  Zub = function (a) {
    return Yub[a] || (Yub[a] = new _.eo(a, a < 0 ? -1 : 0));
  };
  _.$ub = function (a, b) {
    b &= 63;
    if (b == 0) return a;
    var c = a.Ox;
    return b < 32
      ? _.fo((a.xw >>> b) | (c << (32 - b)), c >>> b)
      : b == 32
        ? _.fo(c, 0)
        : _.fo(c >>> (b - 32), 0);
  };
  Yub = {};
  _.avb = function (a) {
    if (a.Ox >= 0) return a.toString(void 0);
    var b = Zub(10);
    var c = _.$ub(a, 1).div(b).shiftLeft(1),
      d = a.subtract(c.multiply(b));
    d.oQb(b) && ((c = c.add(_.oNa)), (d = a.subtract(c.multiply(b))));
    return c.toString(10) + d.toString(10);
  };
  _.bvb = function (a, b) {
    if (a.charAt(0) == "-") return _.bvb(a.substring(1), b).negate();
    var c = parseInt(a, b || 10);
    if (c <= 9007199254740991)
      return new _.eo((c % 4294967296) | 0, (c / 4294967296) | 0);
    if (a.length == 0) throw Error("Ca");
    if (a.indexOf("-") >= 0) throw Error("Ha`" + a);
    b = b || 10;
    if (b < 2 || 36 < b) throw Error("Da`" + b);
    c = _.nNa(Math.pow(b, 8));
    var d = _.mNa;
    for (let f = 0; f < a.length; f += 8) {
      var e = Math.min(8, a.length - f);
      let g = parseInt(a.substring(f, f + e), b);
      e < 8
        ? ((e = _.nNa(Math.pow(b, e))), (d = d.multiply(e).add(_.nNa(g))))
        : ((d = d.multiply(c)), (d = d.add(_.nNa(g))));
    }
    return d;
  };
  _.dvb = function (a) {
    var b = new _.cvb();
    return _.yk(b, 1, a);
  };
  _.cvb = class extends _.m {
    constructor(a) {
      super(a);
    }
  };
  _.xqb = [0, _.qGa];
  var DXf;
  _.CXf = async function (a, b = 1, c) {
    var d = (0, _.Wf)(),
      e = d();
    d = d(1);
    try {
      let h = _.gXf(new _.xt(), a);
      var f = _.jXf(_.iXf(new _.kXf(), h), b);
      var g = _.Zh(f, 7, c);
      let k = _.mXf(g).setContext(_.yXf()),
        l = d(await e(BXf())),
        n = d(await e(l.fetch(_.rXf.getInstance(k)))),
        q,
        r,
        t =
          n == null
            ? void 0
            : (q = _.pXf(n)) == null
              ? void 0
              : (r = _.nXf(q)) == null
                ? void 0
                : r.Uh();
      if (!t) {
        let A = Error("Cm"),
          E = {
            res: n.serialize(),
          };
        _.pf(A, {
          Ye: E,
        });
        A.details = E;
        throw A;
      }
      return t;
    } finally {
      e();
    }
  };
  DXf = class extends _.m {
    constructor(a) {
      super(a);
    }
    getLabel() {
      return _.u(this, 4);
    }
    setLabel(a) {
      return _.fh(this, 4, a);
    }
    Ak() {
      return _.th(this, 4);
    }
    Lk() {
      return _.Bj(this, 4);
    }
    Nsa() {
      return _.di(this, 5);
    }
  };
  DXf.prototype.kb = "Z3R2Md";
  var EXf = class extends _.m {
    constructor(a) {
      super(a);
    }
  };
  EXf.prototype.kb = "RM7vuf";
  var FXf = class extends _.m {
      constructor(a) {
        super(a);
      }
      getId() {
        return _.u(this, 1);
      }
      Sc(a) {
        return _.Gb(this, 1, a);
      }
    },
    GXf = class extends _.m {
      constructor(a) {
        super(a);
      }
    };
  GXf.prototype.kb = "qx9Nce";
  var HXf = class extends _.m {
      constructor(a) {
        super(a);
      }
    },
    IXf = class extends _.m {
      constructor(a) {
        super(a);
      }
    },
    JXf = class extends _.m {
      constructor(a) {
        super(a);
      }
    },
    KXf = class extends _.m {
      constructor(a) {
        super(a);
      }
      getTitle() {
        return _.p(this, JXf, 2);
      }
      setTitle(a) {
        return _.Eb(this, JXf, 2, a);
      }
      vd() {
        return _.aj(this, JXf, 2);
      }
    },
    LXf = class extends _.m {
      constructor(a) {
        super(a);
      }
      Jx() {
        return _.p(this, FXf, 1);
      }
      getImage() {
        return _.p(this, _.QAb, 4);
      }
      qk() {
        return _.aj(this, _.QAb, 4);
      }
      getDescription() {
        return _.p(this, GXf, 5);
      }
      Gi() {
        return _.rj(this, GXf, 5);
      }
      getHeader() {
        return _.p(this, KXf, 7);
      }
      Aj(a) {
        return _.Eb(this, KXf, 7, a);
      }
      Bk() {
        return _.aj(this, KXf, 7);
      }
      oZ() {
        return _.p(this, IXf, 9);
      }
      rMa() {
        return _.aj(this, IXf, 9);
      }
      zOb() {
        return _.p(this, HXf, 12);
      }
    };
  LXf.prototype.kb = "NtH1S";
  new _.yi(_.IN);
  _.wp.kMGuHf = _.up;
  new _.yi(EXf);
  _.wp.RM7vuf = _.up;
  _.nr(EXf, _.IN, function (a) {
    return _.qh(a, _.IN, 3, _.sh());
  });
  var NXf = class extends _.m {
      constructor(a) {
        super(a);
      }
      getViewport() {
        return _.Sh(this, _.bL, 2, MXf);
      }
    },
    MXf = [2, 5];
  NXf.prototype.kb = "kn1H5";
  new _.yi(NXf);
  _.wp.kn1H5 = _.up;
  var OXf = class extends _.m {
    constructor(a) {
      super(a);
    }
    j9() {
      return _.p(this, _.PWf, 2);
    }
  };
  OXf.prototype.kb = "SlsuMb";
  var PXf = class extends _.m {
    constructor(a) {
      super(a);
    }
    NGc() {
      return _.qh(this, LXf, 1, _.sh());
    }
  };
  PXf.prototype.kb = "mHgjXc";
  new _.yi(DXf);
  _.wp.Z3R2Md = function (a) {
    return _.xp(_.yp(a.Lk()));
  };
  new _.yi(_.PWf);
  _.wp.lNg0gf = _.up;
  _.nr(_.PWf, DXf, function (a) {
    return _.qh(a, DXf, 2, _.sh());
  });
  new _.yi(OXf);
  _.wp.SlsuMb = _.up;
  _.nr(OXf, _.PWf, function (a) {
    a = a.j9();
    return a != null ? [a] : [];
  });
  new _.yi(PXf);
  _.wp.mHgjXc = _.up;
  _.nr(PXf, EXf, function (a) {
    a = _.p(a, EXf, 2);
    return a != null ? [a] : [];
  });
  _.nr(PXf, NXf, function (a) {
    a = _.p(a, NXf, 10);
    return a != null ? [a] : [];
  });
  _.nr(PXf, OXf, function (a) {
    a = _.p(a, OXf, 8);
    return a != null ? [a] : [];
  });
  var QXf = class extends _.m {
    constructor(a) {
      super(a);
    }
    getContext() {
      return _.p(this, _.eu, 2);
    }
    setContext(a) {
      return _.Eb(this, _.eu, 2, a);
    }
  };
  QXf.prototype.kb = "aLWrO";
  new _.yi(QXf);
  var RXf = class extends _.m {
    constructor(a) {
      super(a);
    }
    rI() {
      return _.p(this, LXf, 1);
    }
  };
  RXf.prototype.kb = "xStNlf";
  new _.yi(RXf);
  var SXf = class extends _.m {
    constructor(a) {
      super(a);
    }
    getContext() {
      return _.p(this, _.eu, 2);
    }
    setContext(a) {
      return _.Eb(this, _.eu, 2, a);
    }
  };
  SXf.prototype.kb = "GeKAi";
  new _.yi(SXf);
  var TXf = class extends _.m {
    constructor(a) {
      super(a);
    }
  };
  TXf.prototype.kb = "Ru9w1";
  new _.yi(TXf);
  _.wp.Ru9w1 = _.up;
  _.nr(TXf, PXf, function (a) {
    a = _.p(a, PXf, 1);
    return a != null ? [a] : [];
  });
  var UXf = class extends _.m {
    constructor(a) {
      super(a);
    }
    getContext() {
      return _.p(this, _.eu, 2);
    }
    setContext(a) {
      return _.Eb(this, _.eu, 2, a);
    }
  };
  var VXf = class extends _.m {
    constructor(a) {
      super(a);
    }
    rI() {
      return _.p(this, LXf, 1);
    }
  };
  VXf.prototype.kb = "e7Uj8c";
  new _.yi(VXf);
  new _.uu("IoX9Ib", RXf, QXf, [
    _.ji,
    true,
    _.ii,
    "/SearchApiService.GetGeoEntity",
  ]);
  new _.uu("Jn4fke", TXf, SXf, [
    _.ji,
    true,
    _.ii,
    "/SearchApiService.GetGeoResult",
  ]);
  new _.uu("LLrS9e", VXf, UXf, [
    _.ji,
    true,
    _.ii,
    "/SearchApiService.GetPartialGeoEntity",
  ]);
  var WXf,
    BXf = async function () {
      var a = (0, _.Wf)(),
        b = a();
      a = a(1);
      try {
        if (!WXf) {
          let c = _.Wb().oa;
          WXf = a(await b(_.gg(_.lp, c)));
        }
        return WXf;
      } finally {
        b();
      }
    };
  _.QVf = function (a) {
    var b = false,
      c = false;
    a.then(
      () => (b = true),
      () => (c = true),
    );
    return new Promise((d, e) => {
      var f = [];
      for (let g = 50; g < 950; g += 50)
        f.push(
          setTimeout(() => {
            f.shift();
            b ? d() : (c || f.length === 0) && e(c ? 1 : 2);
            if (b || c || f.length === 0) for (let h of f) clearTimeout(h);
          }, g),
        );
    });
  };
  var Pkf, Nkf, Okf, Ykf, Xkf, Rkf, Qkf, Mkf;
  Pkf = function (a) {
    return Mkf ? Nkf(a) : Okf(a).then((b) => b.response);
  };
  Nkf = function (a) {
    a.headers || (a.headers = new Map());
    a.headers.set("x-sg-e", "1");
    return Okf(a).then((b) => {
      var c = b.yNe,
        d = 2;
      c === "s" ? (d = 0) : c === "a" && (d = 1);
      return _.b4b(
        b.response,
        d,
        a,
        (e) => Promise.resolve(Okf(e).then((f) => f.response)),
        b.eventId,
      );
    });
  };
  Okf = function ({ method: a, url: b, OVc: c, Kj: d, fA: e, headers: f }) {
    var g = _.Ef(),
      h = Qkf ? Qkf() : new _.Tr();
    h.listen("complete", (l) => {
      l = l.target;
      var n = false;
      l.getResponseHeader("X-Sorry-Redirect") && (n = true);
      if (l.isSuccess()) {
        _.hp(d, "st");
        let r = l.FB();
        d.eA("bs", r.length);
        r ||
          g.reject(
            new _.HYb("Async response error", e, {
              s: l.getStatus(),
              r,
              isr: n,
              rurl: Rkf(l),
            }),
          );
        var q;
        (n = l.getResponseHeader("x-google-gfe-backend-request-info")) &&
          (n = /eid=([^,]+)/.exec(n)) &&
          (q = n[1]);
        g.resolve({
          response: r,
          yNe: l.getResponseHeader("x-sg-cs") || "u",
          eventId: q,
        });
      } else
        (_.hp(d, "ft"),
          d.log(),
          (q = l.getStatus())
            ? ((q = {
                s: q,
                isr: n,
                rurl: Rkf(l),
              }),
              l.Q6 === 7 && (q.ab = 1),
              g.reject(new _.HYb("Async request error", e, q)))
            : g.reject(new _.HYb("Async network error", e)));
    });
    var k = g.promise.HC((l) => {
      if (l instanceof _.qf) h.abort();
      else throw l;
    });
    _.hp(d, "fr");
    h.setWithCredentials(_.vZb);
    f = f ? Object.fromEntries(f) : void 0;
    h.send(b, a, c, f);
    return k;
  };
  _.Skf = function (a) {
    return !a || a instanceof Map
      ? new Map(a || [])
      : new Map(Object.entries(a));
  };
  _.$N = function (
    a,
    b,
    c,
    d,
    e,
    f,
    g = {},
    h,
    k = "insert",
    l = false,
    n = false,
  ) {
    var q = _.Tkf(a);
    q.start();
    b = _.Skf(b);
    g = _.Skf(g);
    return _.Ukf(a, b, g, q, "", e, c, h, d, f, k, l, n);
  };
  _.Ukf = function (a, b, c, d, e, f, g, h, k, l, n, q = false, r = false) {
    b.set("_fmt", q ? "json" : "jspb");
    f != null && c.set("q", f);
    c = _.FZb(a, b, c, "GET", e, g, h, k, l, n);
    e = "";
    g ? (e = g) : h && (e = h);
    return _.Vkf(
      {
        method: "GET",
        url: c,
        Kj: d,
        fA: a,
        headers: _.CZb(),
        Nq: b,
      },
      r,
      e,
    );
  };
  _.Vkf = function (a, b = false, c = "") {
    var d,
      e = (d = a.Nq) == null ? void 0 : d.get("_fmt");
    if (e !== "json" && e !== "jspb") throw Error("Fl");
    a.Kj || (a.Kj = _.Tkf(a.fA));
    return Pkf(a)
      .then((f) => {
        if (b) {
          let h;
          (h = a.Kj) == null || h.log();
        }
        f.startsWith(")]}'\n") && (f = f.substr(5));
        try {
          var g = JSON.parse(f);
        } catch (h) {
          return _.Ih(h);
        }
        return _.vg(g) && ((g = _.qka(g)), (f = g.__err__), f !== void 0)
          ? _.Ih(f)
          : e !== "jspb" || g instanceof Array
            ? _.Ig(g)
            : _.Ih();
      })
      .catch((f) => (f instanceof _.HYb && Wkf ? Xkf(f, b, a, c) : _.Ih(f)));
  };
  Ykf = function (a, b) {
    var c = b.urlParams ? new Map(b.urlParams) : new Map();
    try {
      let d = new _.af(b.url);
      _.jo(d, "google_abuse", a);
      c.set("google_abuse", a);
      b.url = d.toString();
      b.urlParams = c;
    } catch (d) {}
    return b;
  };
  Xkf = function (a, b, c, d) {
    if (_.kZb(a)) return ((a = _.lZb(a)), (c = Ykf(a, c)), _.Vkf(c, b, d));
    var e = _.mZb(a);
    if (e) {
      _.oZb(e, d);
      if (!_.hZb)
        return _.xg(
          (0, _.rZb)(e).then((f) => {
            _.pZb(e, d);
            c = Ykf(f, c);
            return _.Vkf(c, b, d);
          }),
          _.jZb,
        );
      if (_.sZb) return _.hZb.promise.then(() => _.Vkf(c, b, d));
    }
    return _.Ih(a);
  };
  _.Tkf = function (a) {
    var b = new _.kp("async");
    b.Cc("astyp", a);
    return b;
  };
  Rkf = function (a) {
    try {
      return a.Vo ? a.Vo.responseURL : "";
    } catch (b) {
      return "";
    }
  };
  Qkf = null;
  Mkf = _.E4b;
  var Wkf = _.D4b;
  _.MEb = class extends _.m {
    constructor(a) {
      super(a);
    }
  };
  _.Zkf = function (a, b) {
    return b
      .filter(
        (c) =>
          _.Pj(c, 2, _.sh()).includes(a) || _.Pj(c, 2, _.sh()).includes(62),
      )
      .map((c) => _.u(c, 1))
      .sort();
  };
  _.$kf = function (a, b) {
    return _.Zkf(
      a,
      b.map((c) => {
        var d = new _.MEb();
        var e = c.Aa();
        d = _.fh(d, 1, e);
        c = c.Ba();
        return _.QFa(d, 2, c);
      }),
    );
  };
  _.blf = function (a, b, c, d, e, f, g, h = _.alf) {
    if (
      !a ||
      !a.rv().match("^(?:.*\\.)?google(rs)?.(?:[a-z]{2,3}(?:\\.[a-z]{2,3})?)$")
    )
      return a;
    var k,
      l = new Map();
    l.set(0, new aO([null, null, null, "uk"]));
    l.set(29, new aO([null, null, null, "gs"]));
    l.set(
      42,
      new aO([
        null,
        null,
        null,
        "test_source_suffix",
        null,
        ["test_bshm_mark1", "test_bshm_mark2", "test_bshm_mark3"],
        null,
        null,
        "prev_test_source_suffix",
      ]),
    );
    l.set(62, new aO([null, null, null, "horizontal_source_suffix"]));
    l.set(108, new aO([null, null, null, "aim"]));
    l.set(116, new aO([null, null, null, "aim/canvas"]));
    l.set(114, new aO([null, null, null, "aio"]));
    l.set(96, new aO([null, null, null, "biz"]));
    l.set(104, new aO([null, null, null, "ctch"]));
    l.set(90, new aO([null, null, null, "cref"]));
    l.set(
      2,
      new aO([
        null,
        null,
        null,
        "cr/sos",
        null,
        null,
        null,
        null,
        "crisisresponse/sos",
      ]),
    );
    l.set(107, new aO([null, null, null, "crcy/ob"]));
    l.set(40, new aO([null, null, null, "ccy/ob"]));
    l.set(87, new aO([null, null, null, "dlt/luda"]));
    l.set(77, new aO([null, null, null, "dlt/nslu"]));
    l.set(76, new aO([null, null, null, "dlt/scv"]));
    l.set(78, new aO([null, null, null, "discover"]));
    l.set(50, new aO([null, null, null, "do"]));
    l.set(
      66,
      new aO([
        null,
        null,
        null,
        "edu/dq/end",
        null,
        null,
        null,
        null,
        "dq/end",
      ]),
    );
    l.set(
      68,
      new aO([
        null,
        null,
        null,
        "edu/pq/end",
        null,
        null,
        null,
        null,
        "pq/end",
      ]),
    );
    l.set(
      72,
      new aO([
        null,
        null,
        null,
        "edu/pq/hd",
        null,
        null,
        null,
        null,
        "pq/header",
      ]),
    );
    l.set(
      67,
      new aO([
        null,
        null,
        null,
        "edu/pq/st",
        null,
        null,
        null,
        null,
        "pq/start",
      ]),
    );
    l.set(123, new aO([null, null, null, "edu/math"]));
    l.set(120, new aO([null, null, null, "elec/rslt"]));
    l.set(101, new aO([null, null, null, "evid"]));
    l.set(125, new aO([null, null, null, "emt/ben"]));
    l.set(121, new aO([null, null, null, "emt"]));
    l.set(124, new aO([null, null, null, "emt/evt"]));
    l.set(88, new aO([null, null, null, "loc/expv"]));
    l.set(
      32,
      new aO([
        null,
        null,
        null,
        "fl/stat",
        null,
        null,
        null,
        null,
        "flight_status",
      ]),
    );
    l.set(24, new aO([null, null, null, "fbx"]));
    l.set(119, new aO([null, null, null, "gls/cpn"]));
    l.set(
      79,
      new aO([
        null,
        null,
        null,
        "edu/ggls",
        null,
        null,
        null,
        null,
        "googlies",
      ]),
    );
    l.set(86, new aO([null, null, null, "ob/solar"]));
    l.set(
      12,
      new aO([
        null,
        null,
        null,
        "hz/txtl",
        null,
        null,
        null,
        null,
        "im/textlists/detail",
      ]),
    );
    l.set(43, new aO([null, null, null, "im"]));
    l.set(105, new aO([null, null, null, "imbr"]));
    l.set(44, new aO([null, null, null, "im/amp"]));
    l.set(53, new aO([null, null, null, "im/lite"]));
    l.set(
      52,
      new aO([
        null,
        null,
        null,
        "intr/vis",
        null,
        null,
        null,
        null,
        "interactive_visuals",
      ]),
    );
    l.set(102, new aO([null, null, null, "ipl"]));
    l.set(58, new aO([null, null, null, "job/uv"]));
    l.set(74, new aO([null, null, null, "job/li"]));
    l.set(27, new aO([null, null, null, "ka", null, null, 2]));
    l.set(
      7,
      new aO([
        null,
        null,
        null,
        "lr/artg",
        null,
        null,
        null,
        null,
        "lr/artgame",
      ]),
    );
    l.set(21, new aO([null, null, null, "kp/ee"]));
    l.set(
      54,
      new aO([
        null,
        null,
        null,
        "lr/vocb",
        null,
        null,
        null,
        null,
        "lr/vocabulary",
      ]),
    );
    l.set(13, new aO([null, null, null, "kp"]));
    l.set(45, new aO([null, null, null, "loc/act"]));
    l.set(112, new aO([null, null, null, "loc/ec"]));
    l.set(111, new aO([null, null, null, "loc/rlh"]));
    l.set(55, new aO([null, null, null, "loc/geo"]));
    l.set(75, new aO([null, null, null, "loc/mrchnt"]));
    l.set(70, new aO([null, null, null, "loc/osrp"]));
    l.set(46, new aO([null, null, null, "loc/hdr"]));
    l.set(
      49,
      new aO([
        null,
        null,
        null,
        "loc/post",
        null,
        null,
        null,
        null,
        "localposts",
      ]),
    );
    l.set(64, new aO([null, null, null, "loc/srv"]));
    l.set(113, new aO([null, null, null, "lsaf"]));
    l.set(47, new aO([null, null, null, "loc/tile"]));
    l.set(83, new aO([null, null, null, "loc/uni"]));
    l.set(122, new aO([null, null, null, "loc/ueo"]));
    l.set(117, new aO([null, null, null, "ntgn"]));
    l.set(118, new aO([null, null, null, "ntgn/wdgt"]));
    l.set(15, new aO([null, null, null, "kp/osrp"]));
    l.set(
      16,
      new aO([
        null,
        null,
        null,
        "osrp/spmt",
        null,
        null,
        null,
        null,
        "kp/osrp/sports_match",
      ]),
    );
    l.set(92, new aO([null, null, null, "pcee"]));
    l.set(85, new aO([null, null, null, "prdct/act"]));
    l.set(84, new aO([null, null, null, "prdct/hdr"]));
    l.set(63, new aO([null, null, null, "rcp/uv"]));
    l.set(73, new aO([null, null, null, "saves/uv"]));
    l.set(97, new aO([null, null, null, "shop/toy"]));
    l.set(
      28,
      new aO([
        null,
        null,
        null,
        "spo/mmo",
        null,
        null,
        null,
        null,
        "sports/mmo",
      ]),
    );
    l.set(30, new aO([null, null, null, "srp/img"]));
    l.set(110, new aO([null, null, null, "page/hdr"]));
    l.set(37, new aO([null, null, null, "srp/vid"]));
    l.set(100, new aO([null, null, null, "loc/msg"]));
    l.set(
      34,
      new aO([
        null,
        null,
        null,
        "trn/stat",
        null,
        null,
        null,
        null,
        "train_status",
      ]),
    );
    l.set(106, new aO([null, null, null, "trsl"]));
    l.set(115, new aO([null, null, null, "tac"]));
    l.set(103, new aO([null, null, null, "ugcv"]));
    l.set(60, new aO([null, null, null, "prdct/uv"]));
    l.set(93, new aO([null, null, null, "vid"]));
    l.set(
      33,
      new aO([
        null,
        null,
        null,
        "osrp/wthr",
        null,
        null,
        2,
        null,
        "osrp/weather",
      ]),
    );
    l.set(26, new aO([null, null, null, "wa"]));
    l.set(35, new aO([null, null, null, "srp/wr"]));
    l.set(126, new aO([null, null, null, "w2w"]));
    l.set(38, new aO([null, null, null, "wtr"]));
    l.set(1, new aO([null, null, null, "ob/air_quality"]));
    l.set(48, new aO([null, null, null, "dc"]));
    l.set(95, new aO([null, null, null, "dpv"]));
    l.set(65, new aO([null, null, null, "dq/header"]));
    l.set(8, new aO([null, null, null, "kp/ephemeral"]));
    l.set(69, new aO([null, null, null, "fps/uv"]));
    l.set(9, new aO([null, null, null, "kp/health_search/checklists"]));
    l.set(10, new aO([null, null, null, "kp/health_search"]));
    l.set(11, new aO([null, null, null, "kp/health_search/symptom_search"]));
    l.set(51, new aO([null, null, null, "hs"]));
    l.set(91, new aO([null, null, null, "kumh"]));
    l.set(14, new aO([null, null, null, "kp/local"]));
    l.set(39, new aO([null, null, null, "kp/local_categorical"]));
    l.set(81, new aO([null, null, null, "loc/lpt"]));
    l.set(109, new aO([null, null, null, "loc/ptp"]));
    l.set(71, new aO([null, null, null, "loc/recall"]));
    l.set(61, new aO([null, null, null, "loc/uv"]));
    l.set(57, new aO([null, null, null, "gnai"]));
    l.set(17, new aO([null, null, null, "osrp/cluster"]));
    l.set(82, new aO([null, null, null, "ob/pin"]));
    l.set(18, new aO([null, null, null, "pp/rl"]));
    l.set(94, new aO([null, null, null, "rcp/card"]));
    l.set(31, new aO([null, null, null, "screenshot/srp"]));
    l.set(22, new aO([null, null, null, "sgc"]));
    l.set(98, new aO([null, null, null, "sh/lnd"]));
    l.set(59, new aO([null, null, null, "shop/drm"]));
    l.set(19, new aO([null, null, null, "shopping"]));
    l.set(89, new aO([null, null, null, "shopping/holiday100"]));
    l.set(23, new aO([null, null, null, "lr/sports_match"]));
    l.set(36, new aO([null, null, null, "srp/rcp"]));
    l.set(25, new aO([null, null, null, "kp/3d"]));
    l.set(56, new aO([null, null, null, "ucp"]));
    l.set(20, new aO([null, null, null, "vtmt"]));
    l.set(99, new aO([null, null, null, "xcx/es"]));
    b = (k = l.get(b)) == null ? void 0 : _.u(k, 4);
    _.jo(_.jo(a, "source", `sh/x/${b}/m${c}/${d}`), "kgs", h());
    f && _.jo(a, "shndl", f);
    e.length > 0 && _.jo(a, "shem", Array.from(new Set(e)).sort().join(","));
    g &&
      g.gEa() &&
      g.Aa() &&
      (_.jo(a, "shmd", g.gEa()), _.jo(a, "shmds", g.Aa()));
    return a;
  };
  _.alf = function () {
    return _.Fyc(16, 16).toLowerCase();
  };
  _.clf = {
    VOf: 0,
    cof: 29,
    UOf: 42,
    TOf: 62,
    v3e: 108,
    z3e: 116,
    O3e: 114,
    A7e: 96,
    j9e: 104,
    Tcf: 90,
    cdf: 2,
    gdf: 107,
    sdf: 40,
    lef: 87,
    mef: 77,
    oef: 76,
    ygf: 78,
    Ygf: 50,
    Phf: 66,
    Rhf: 68,
    Shf: 72,
    Thf: 67,
    Uhf: 123,
    Whf: 120,
    eif: 101,
    okf: 125,
    pkf: 121,
    qkf: 124,
    Okf: 88,
    anf: 32,
    NUd: 24,
    oof: 119,
    Apf: 79,
    drf: 86,
    erf: 12,
    IMAGE: 43,
    Esf: 105,
    Msf: 44,
    Qsf: 53,
    Etf: 52,
    juf: 102,
    Vuf: 58,
    Wuf: 74,
    Dvf: 27,
    Evf: 7,
    Fvf: 21,
    Gvf: 54,
    Ivf: 13,
    qxf: 45,
    txf: 112,
    uxf: 111,
    Axf: 55,
    Bxf: 75,
    Exf: 70,
    Kxf: 46,
    Nxf: 49,
    x8c: 64,
    Vxf: 113,
    Wxf: 47,
    Xxf: 83,
    Yxf: 122,
    MCf: 117,
    NCf: 118,
    sFf: 15,
    uFf: 16,
    RHf: 92,
    BIf: 85,
    DIf: 84,
    wJf: 63,
    SKf: 73,
    GQf: 97,
    cSf: 28,
    mSf: 30,
    qSf: 110,
    wSf: 37,
    HVf: 100,
    GWf: 34,
    U_d: 106,
    LWf: 115,
    qXf: 103,
    rYf: 60,
    DYf: 93,
    X_f: 33,
    d0f: 26,
    r0f: 35,
    f1d: 126,
    R0f: 38,
    R3e: 1,
    zTd: 48,
    Ggf: 95,
    Qhf: 65,
    nkf: 8,
    fnf: 69,
    lqf: 9,
    mqf: 10,
    nqf: 11,
    Gqf: 51,
    Kvf: 91,
    Ptc: 14,
    wxf: 39,
    Lxf: 81,
    Mxf: 109,
    Uxf: 71,
    Zxf: 61,
    gzf: 57,
    tFf: 17,
    PGf: 82,
    bIf: 18,
    uJf: 94,
    bLf: 31,
    IOf: 22,
    WOf: 98,
    XPf: 59,
    YPf: 19,
    aQf: 89,
    bSf: 23,
    rSf: 36,
    JVf: 25,
    oXf: 56,
    E_f: 20,
    e1f: 99,
  };
  var aO = class extends _.m {
    constructor(a) {
      super(a);
    }
  };
  _.Jkf = {
    ePf: 0,
    YOf: 1,
    fPf: 2,
    dPf: 3,
    XOf: 4,
    aPf: 5,
    ZOf: 6,
    bPf: 7,
    cPf: 8,
  };
  _.ukf = !!((_.Li[82] >> 24) & 1);
  _.vkf = !!((_.Li[82] >> 25) & 1);
  _.wkf = !!((_.Li[82] >> 26) & 1);
  _.xkf = !!((_.Li[82] >> 27) & 1);
  _.ykf = !!((_.Li[82] >> 28) & 1);
  _.zkf = !!((_.Li[82] >> 29) & 1);
  _.Akf = !!(_.Li[83] & 1);
  _.Bkf = !!(_.Li[83] & 2);
  _.Ckf = !!(_.Li[83] & 4);
  _.Dkf = !!(_.Li[83] & 8);
  _.Ekf = !!(_.Li[83] & 16);
  _.Fkf = !!(_.Li[83] & 32);
  _.Gkf = !!(_.Li[83] & 64);
  _.Hkf = !!(_.Li[83] & 128);
  _.Ikf = !!(_.Li[83] & 256);
  _.Yjf = !!((_.Li[65] >> 22) & 1);
  _.Zjf = !!((_.Li[65] >> 23) & 1);
  _.$jf = !!((_.Li[65] >> 24) & 1);
  _.akf = !!((_.Li[65] >> 25) & 1);
  _.bkf = !!((_.Li[65] >> 26) & 1);
  _.ckf = !!((_.Li[65] >> 27) & 1);
  _.NDe = !!((_.Li[34] >> 27) & 1);
  _.ODe = !!((_.Li[82] >> 23) & 1);
  _.PDe = !!(_.Li[106] & 128);
  _.QDe = !!(_.Li[106] & 256);
  _.RDe = !!(_.Li[106] & 512);
  _.SDe = !!(_.Li[106] & 1024);
  _.TDe = !!(_.Li[106] & 2048);
  _.UDe = !!(_.Li[106] & 4096);
  _.VDe = !!(_.Li[106] & 8192);
  _.WDe = !!((_.Li[106] >> 14) & 1);
  _.XDe = !!((_.Li[106] >> 15) & 1);
  _.YDe = !!((_.Li[106] >> 16) & 1);
  _.ZDe = !!((_.Li[106] >> 18) & 1);
  _.$De = !!((_.Li[106] >> 21) & 1);
  _.aEe = !!((_.Li[106] >> 23) & 1);
  _.bEe = !!((_.Li[106] >> 24) & 1);
  _.cEe = !!((_.Li[106] >> 25) & 1);
  _.dEe = !!((_.Li[106] >> 26) & 1);
  _.eEe = !!((_.Li[106] >> 27) & 1);
  _.fEe = !!((_.Li[106] >> 28) & 1);
  _.gEe = !!((_.Li[106] >> 29) & 1);
  _.hEe = !!(_.Li[107] & 1);
  _.iEe = !!(_.Li[107] & 2);
  _.jEe = !!(_.Li[107] & 4);
  _.kEe = !!(_.Li[107] & 8);
  _.v("Wct42");
  var fYf, gYf, hYf, jYf;
  fYf = function (a, b, c) {
    if (c !== 0) {
      for (let d of a.oa)
        if (d.sG === c) {
          d.callbacks.push(b);
          d.DPc && b(d.DPc);
          return;
        }
      _.JUf(a, c, null, [b]);
    }
  };
  gYf = _.Eia(_.$Xf);
  hYf = _.Nb(_.$Xf);
  _.iYf = _.Ckf
    ? 7
    : _.ykf
      ? 6
      : _.Akf
        ? 5
        : _.wkf
          ? 4
          : _.Bkf
            ? 3
            : _.xkf
              ? 2
              : _.zkf
                ? 1
                : 8;
  jYf = _.ckf && _.bEe ? "47,93" : _.bEe ? "93" : _.ckf ? "47" : "";
  var kYf,
    lYf,
    mYf,
    nYf,
    oYf,
    qYf,
    wYf,
    yYf,
    BYf,
    pYf,
    rYf,
    tYf,
    zYf,
    xYf,
    AYf,
    CYf,
    DYf,
    uYf,
    vYf,
    GYf,
    HYf,
    IYf,
    FYf,
    sYf,
    EYf,
    JYf;
  kYf = Error("Dm");
  lYf = function (a) {
    a.sG !== 0 &&
      fYf(
        a.r$,
        (b) => {
          a.oa(b);
        },
        a.sG,
      );
  };
  mYf = function (a, b) {
    a = a.Ya(b);
    return a.size() === 1 ? _.Ro(a) : null;
  };
  nYf = function (a) {
    a.Bb || (a.Bb = mYf(a, "qMPrxc"));
    return a.Bb;
  };
  oYf = function (a) {
    if (!a.getData("ved").Ob()) {
      var b = _.vm(a.getData("csrsve"), "");
      b && a.setData("ved", "1t:" + b);
    }
  };
  qYf = async function (a) {
    var b = (0, _.Wf)(),
      c = b();
    b = b(1);
    try {
      a.Ca.Koa() &&
        a.Ba === null &&
        (a.Ba = b(
          await c(
            a.Ca.v_a((d) => {
              d && d.Aa() && pYf(a, d.getState());
            }),
          ),
        ));
    } finally {
      c();
    }
  };
  wYf = async function (a, b, c) {
    var d = (0, _.Wf)(),
      e = d();
    d = d(1);
    try {
      let g = _.Bj(a.xm, 1);
      if (!g) throw Error("Fm");
      if (!a.Sa) {
        var f =
          _.xd(a.getRoot().getData("ld"), 0) === 1
            ? a.Ja("Sx9Kwc").el()
            : _.Qm("shdg");
        a.Sa = a.Jc(f, _.bp);
      }
      let h = d(await e(a.Sa));
      rYf(a)
        ? d(
            await e(
              h.Pa(
                b.clone(),
                sYf(a),
                tYf(g, _.Ej(a.xm, 9, 1), a.sG),
                a.Aa.clone(),
                a.getRoot().hb(),
                a.Ha ? "y6unsf" : "",
                c,
              ),
            ),
          )
        : d(
            await e(
              h.show(
                b.clone(),
                sYf(a),
                a.Aa.clone(),
                a.getRoot().hb(),
                a.Ha ? "y6unsf" : "",
                c,
              ),
            ),
          );
      uYf(a);
      vYf(a, {
        EFa: false,
      });
    } finally {
      e();
    }
  };
  yYf = function (a) {
    var {
        Jrd: b = false,
        zec: c = true,
        yec: d = false,
        RMa: e = true,
        Krd: f = false,
      } = xYf(a),
      g = a.getTitle(),
      h = a.xm.getImageUrl(),
      k = a.xm.Da();
    k = k ? k : _.Bj(a.xm, 1) || null;
    var l = a.Qr(g, a.xm.ju(), k, !d);
    return {
      title: (e && g) || void 0,
      imageUrl: (b && h) || void 0,
      YI: (c && l) || void 0,
      pageUrl: (d && k) || void 0,
      OR: (f && a.Yg()) || void 0,
    };
  };
  BYf = async function (a, b) {
    var c = (0, _.Wf)(),
      d = c();
    c = c(1);
    try {
      if (!zYf(a)) return b;
      let k = a.Da,
        l = new _.wVf();
      k.vd() && l.setTitle(k.getTitle());
      let n = b.YI;
      if (_.th(k, 3)) {
        _.eYf(l, k.getDescription());
        let q = a.xm.Da(),
          r = q ? q : _.Bj(a.xm, 1) || null,
          { yec: t } = xYf(a);
        b.YI = a.Qr(b.title || a.getTitle(), l.Gi() || "", r, !t);
      }
      if (a.Gb && zYf(a)) {
        {
          let q,
            r = (q = a.xm) == null ? void 0 : q.Ca();
          if (r) {
            _.fh(l, 4, r);
            var e,
              f = (e = a.Da) == null ? void 0 : e.getImageUrl();
            if (f) {
              a = l;
              var g = _.dYf(f);
              _.Eb(a, _.vVf, 1, g);
            }
            var h = true;
          } else h = false;
        }
      } else h = c(await d(AYf(a, l)));
      h ? (b.D_b = l) : (b.YI = n);
      return b;
    } finally {
      d();
    }
  };
  pYf = function (a, b) {
    switch (b) {
      case 1:
        CYf(a, true);
        DYf(a);
        break;
      case 0:
        uYf(a);
        vYf(a, {
          EFa: true,
        });
        break;
      case 2:
        CYf(a, false);
        DYf(a);
        break;
      case 3:
        ({ EFa: b } = {
          EFa: true,
        });
        a.wb || (a.wb = mYf(a, "Igko6d"));
        var c = a.wb;
        a.Ab || (a.Ab = mYf(a, "XfdVte"));
        EYf(b, c, a.Ab);
        DYf(a);
    }
  };
  rYf = function (a) {
    return !FYf(a) && !_.B(a.Aa, 18) && !_.th(a.xm, 2);
  };
  tYf = async function (a, b, c) {
    var d = (0, _.Wf)(),
      e = d();
    d = d(1);
    try {
      let f = d(await e(_.CXf(a, b, c)));
      if (!f) throw Error("Hm");
      return {
        gBa: f,
      };
    } finally {
      e();
    }
  };
  zYf = function (a) {
    var b;
    return a.wc && a.Bd.has(a.sG) && !((b = a.Da) == null || !b.getImageUrl());
  };
  xYf = function (a) {
    if (a.Yb)
      return {
        yec: false,
        zec: false,
        RMa: false,
        Krd: false,
      };
    if (FYf(a))
      return {
        Jrd: true,
        zec: true,
        RMa: true,
      };
    if (_.Sj(a.Aa, 15, _.ZXf))
      return {
        Jrd: true,
        yec: true,
        zec: true,
        RMa: true,
      };
    var b = !!_.Sj(a.Aa, 10, _.ZXf),
      c = a.Aa.Aa();
    return {
      yec: b || !c,
      zec: !b,
      RMa: true,
      Krd: !b && a.Ca.Uka(),
    };
  };
  AYf = async function (a, b) {
    var c = (0, _.Wf)(),
      d = c();
    c = c(1);
    try {
      let e = c(await d(a.Tb));
      if (!e) return false;
      _.Eb(b, _.vVf, 1, e);
      return true;
    } finally {
      d();
    }
  };
  CYf = function (a, b) {
    uYf(a);
    a.Ba !== null ||
      vYf(a, {
        EFa: true,
      });
    b
      ? GYf(a, {
          EFa: true,
        })
      : (HYf(a, {
          EFa: true,
        }),
        (b = _.hP(new _.fP(), _.gP(155748))),
        _.Zg(document, "ZUAQIc", {
          qw: b,
        }));
    IYf(a);
    a.Ba && (a.Ba(), (a.Ba = null));
  };
  DYf = function (a) {
    a.Ea && (a.Ea.focus(), (a.Ea = null));
  };
  uYf = function (a) {
    if ((a = nYf(a))) (oYf(a), _.ew([new _.ro(a.el(), "show")]));
  };
  vYf = function (a, { EFa: b }) {
    a.Ma || (a.Ma = mYf(a, "LVWe7b"));
    var c = a.Ma;
    a.ob || (a.ob = mYf(a, "YvFDOe"));
    EYf(b, c, a.ob);
  };
  GYf = function (a, { EFa: b }) {
    if (!a.La) {
      a.Ua || (a.Ua = mYf(a, "vOr6ad"));
      var c = a.Ua;
      a.Va || (a.Va = mYf(a, "xc0WGd"));
      EYf(b, c, a.Va);
      a.La = true;
    }
  };
  HYf = function (a, { EFa: b }) {
    if (!a.La) {
      a.Oa || (a.Oa = mYf(a, "WZfLqc"));
      var c = a.Oa;
      a.Pa || (a.Pa = mYf(a, "TNQ5if"));
      EYf(b, c, a.Pa);
    }
  };
  IYf = function (a) {
    a.La = false;
    if ((a = nYf(a))) (oYf(a), _.ew([new _.ro(a.el(), "hide")]));
  };
  FYf = function (a) {
    var b;
    return !!_.Sj(a.Aa, 6, _.ZXf) && !((b = a.xm) == null || !b.Do());
  };
  sYf = function (a) {
    a.Za ||
      (a.Za = {
        Bxb: a.Ja("PHQQPc").el(),
        Led: _.vm(a.Ja("k3Pg4").getData("ved"), ""),
        hId: _.vm(a.Ja("IyZ18e").getData("ved"), ""),
        iId: _.vm(a.Db("NlZIeb").getData("ved"), ""),
        lId: _.vm(a.Db("Qoiwbb").getData("ved"), ""),
        nId: _.vm(a.Db("Cr3q7c").getData("ved"), ""),
      });
    return a.Za;
  };
  EYf = function (a, b, c) {
    if ((b = a ? b : c))
      (oYf(b),
        b.getData("ved").Ob() &&
          ((a = {
            shdeb: a ? "n" : "w",
          }),
          _.fw(b.el(), {
            data: a,
          })));
  };
  JYf = async function (a) {
    var b = (0, _.Wf)(),
      c = b();
    b = b(1);
    try {
      try {
        let f = b(await c(fetch(a)));
        if (!f.ok) throw Error("Im`" + f.status + "`" + a);
        let g = f.headers.get("Content-TYPE") || "",
          h = b(await c(f.blob())),
          k = b(await c(h.arrayBuffer())),
          l = _.La(new Uint8Array(k)),
          n = new URL(a).pathname,
          q = n.substring(n.lastIndexOf("/") + 1) || "image";
        var d = new _.vVf().setData(l);
        var e = _.fh(d, 2, g);
        return _.fh(e, 3, q);
      } catch (f) {
        return (b(), null);
      }
    } finally {
      c();
    }
  };
  _.RYf = class extends _.Js {
    static Ta() {
      return {
        jsdata: {
          sPe: _.pP,
        },
        service: {
          share: _.IVf,
          r$: _.LUf,
        },
      };
    }
    constructor(a) {
      super(a.Na);
      this.Bb =
        this.Ab =
        this.wb =
        this.Pa =
        this.Oa =
        this.ob =
        this.Ma =
        this.Va =
        this.Ua =
        this.Za =
          null;
      this.Lc = false;
      this.Da = this.Ea = this.logger = null;
      this.Pb = [];
      this.Tb = null;
      this.Dc = this.Vb = this.Yb = this.La = false;
      this.zc = "";
      this.Ha = this.Gb = this.wc = false;
      this.Sa = null;
      this.Mb = false;
      this.Ba = null;
      this.qc = 0;
      this.Ca = a.service.share;
      this.r$ = a.service.r$;
      a = a.jsdata.sPe;
      this.sG = this.getData("sf").Eh(_.clf, 0);
      var b;
      this.Aa = (b = _.p(a, _.eP, 2)) != null ? b : new _.eP();
      this.xm = a == null ? void 0 : a.FD();
      this.R4 = this.getData("sm").Eh(_.Jkf, 0);
      this.XPa = KYf;
      this.Pb = (b = _.vm(this.getData("sem"), "")) ? b.split(" ") : [];
      this.Vb = LYf;
      this.Dc = MYf;
      this.Ha = _.ki(this.getData("ho"), false);
      this.zc = _.tm(this.getData("dt")) || "";
      this.Lc = this.getData("pdoc").Ob();
      this.wc = NYf;
      this.Gb = OYf;
      this.Bd = new Set(PYf);
      this.Da = a.gka() || null;
      !zYf(this) ||
        (this.Gb && zYf(this)) ||
        (this.Tb = JYf(this.Da.getImageUrl()));
      this.Yb = QYf;
      lYf(this);
    }
    oa(a) {
      if (this.xm && _.aj(this.xm, _.YXf, 12)) {
        let b = a.Ca();
        if (b) {
          let c = _.Ph(this.xm.Ca()),
            d = _.Ph(b);
          ["q", "query", "stick", "si", "kgmid"].some(
            (e) => _.lo(c, e) !== _.lo(d, e),
          ) &&
            _.pf(Error("Em"), {
              level: 2,
            });
        }
      }
      this.xm = this.xm ? gYf(this.xm, new _.vEa(hYf(a))) : a;
      _.th(a, 1) && !_.th(a, 2) && _.$e(this.xm, 2);
    }
    FD() {
      var a;
      return ((a = this.xm) == null ? void 0 : a.clone()) || null;
    }
    jd(a) {
      a = _.Mg(a);
      a.xm && this.oa(a.xm);
    }
    async onClick(a) {
      var b = (0, _.Wf)(),
        c = b();
      b = b(1);
      try {
        if (this.Mb) this.Mb = false;
        else {
          var d,
            e =
              (d = this.getRoot().hb()) == null
                ? void 0
                : d.getBoundingClientRect(),
            f,
            g = (f = this.xm) == null ? void 0 : f.Ca();
          if (g) {
            var h = this.xm,
              k = h.Ba;
            let A, E;
            var l = _.blf(
              _.Ph(g),
              this.sG,
              this.R4,
              this.XPa,
              this.Pb,
              (A = this.xm) == null ? void 0 : _.Se(A, 11),
              (E = this.xm) == null ? void 0 : E.gEa(),
              _.alf,
            ).toString();
            k.call(h, l);
          }
          if (this.Lc) {
            let A;
            a == null || (A = a.event) == null || A.stopPropagation();
            let E;
            a == null || (E = a.event) == null || E.preventDefault();
          }
          var n = this.getRoot().el();
          _.Xg(n, "gtOXRb");
          oYf(this.getRoot());
          var q = this.getRoot().el();
          let r, t;
          (r = this.xm) != null &&
            _.aj(r, _.wZd, 10) &&
            !_.Tk(
              (t = this.xm) == null ? void 0 : _.p(t, _.wZd, 10),
              new _.wZd(),
            ) &&
            _.cYf(q, _.p(this.xm, _.wZd, 10));
          this.getRoot().getData("ved").Ob() && _.fw(this.getRoot().el());
          _.Zg(window.document.body, "wjOG7e");
          this.trigger("ZvRO4b");
          if (!this.xm) throw Error("Fm");
          if (this.Wb()) {
            b(await c(qYf(this)));
            try {
              return b(await c(this.Qc()));
            } catch (A) {
              if ((b(), A === kYf)) return;
            }
          }
          b(await c(wYf(this, this.xm, e)));
        }
      } finally {
        c();
      }
    }
    Wb() {
      return this.Ca.isAvailable();
    }
    async Qc() {
      var a = (0, _.Wf)(),
        b = a();
      a = a(1);
      try {
        if (Date.now() - this.qc < 2e3) return Promise.reject(kYf);
        this.qc = Date.now();
        this.Ea = document.activeElement;
        let c = yYf(this);
        c = a(await b(BYf(this, c)));
        let d = async (g) => {
          var h = (0, _.Wf)(),
            k = h();
          h = h(1);
          try {
            let l = h(await k(this.Ca.A_(g)));
            pYf(this, l);
            return l;
          } finally {
            k();
          }
        };
        if (!rYf(this)) return d(c);
        let e,
          f = tYf(
            (e = this.xm) == null ? void 0 : e.Ca(),
            _.Ej(this.xm, 9, 1),
            this.sG,
          ).then((g) => {
            g.gBa &&
              (this.xm.f4b(g.gBa),
              (g = yYf(this)),
              (c.pageUrl = g.pageUrl),
              (c.YI = g.YI));
          });
        try {
          return (a(await b(_.QVf(f))), d(c));
        } catch (g) {
          a();
          if (g === 2) {
            let h = yYf(this);
            c.pageUrl = h.pageUrl;
            c.YI = h.YI;
            return d(c);
          }
          throw Error("Gm");
        }
      } finally {
        b();
      }
    }
    getTitle() {
      return this.xm.getTitle();
    }
    Qr(a, b, c, d = true) {
      var e = b || (this.Aa.Ba() ? "" : a);
      return d && c
        ? e
          ? this.Aa.Aa()
            ? a && b
              ? a + "\n" + c + "\n\n" + b
              : "\u200e" + c + "\n\n" + e
            : e + " " + c
          : c
        : e;
    }
    Yg() {
      var a = _.tm(this.getData("sst")),
        b;
      !(b = !a) &&
        (b = this.Vb && this.Dc) &&
        ((b = _.Ph(a)), (b = !(b.rv().toString() && b.oa === "https")));
      return b ? this.zc : a;
    }
    Zc() {
      GYf(this, {
        EFa: false,
      });
    }
    od(a) {
      HYf(this, {
        EFa: false,
      });
      IYf(this);
      this.Ha &&
        ((a = a == null ? void 0 : a.data),
        (this.Mb =
          !(a == null || !a.target) && this.getRoot().el().contains(a.target)));
    }
  };
  _.RYf.prototype.$wa$ImCKxc = function () {
    return this.od;
  };
  _.RYf.prototype.$wa$HR5wBe = function () {
    return this.Zc;
  };
  _.RYf.prototype.$wa$RHBhJe = function () {
    return this.Qc;
  };
  _.RYf.prototype.$wa$RrBfkf = function () {
    return this.Wb;
  };
  _.RYf.prototype.$wa$KjsqPd = function () {
    return this.onClick;
  };
  _.RYf.prototype.$wa$CLN7sd = function () {
    return this.jd;
  };
  _.RYf.prototype.$wa$akLNbe = function () {
    return this.FD;
  };
  var MYf = _.Gkf,
    LYf = _.vkf,
    QYf = _.Dkf,
    KYf = _.iYf,
    NYf = _.Ekf,
    OYf = _.Fkf,
    PYf = (jYf || "")
      .split(",")
      .filter((a) => a)
      .map((a) => Number(a));
  _.Ls(_.XXf, _.RYf);
  _.x();
  _.Q7q = _.y("oQfbDd", []);
  var dGe, eGe, fGe, kGe, hGe, iGe, jGe;
  dGe = function () {
    var a = new _.uf();
    a.callback(null);
    return a;
  };
  fGe = [];
  _.gGe = function (a) {
    if (!a.length) return dGe();
    var b = fGe.length;
    _.Da(fGe, a);
    if (b) return eGe;
    a = fGe;
    var c = function () {
      var d = a.shift();
      d = _.pK(d);
      a.length && _.Of(d, c, c);
      return d;
    };
    return (eGe = c());
  };
  _.pK = function (a, b) {
    var c = b || {};
    b = c.document || document;
    var d = _.ec(a).toString(),
      e = new _.RJa(b).createElement("SCRIPT"),
      f = {
        AGd: e,
        mca: void 0,
      },
      g = new _.uf(hGe, f),
      h = null,
      k = c.timeout != null ? c.timeout : 5e3;
    k > 0 &&
      ((h = window.setTimeout(function () {
        iGe(e, true);
        g.oa(new jGe(1, "Timeout reached for loading script " + d));
      }, k)),
      (f.mca = h));
    e.onload = e.onreadystatechange = function () {
      (e.readyState &&
        e.readyState != "loaded" &&
        e.readyState != "complete") ||
        (iGe(e, c.Edd || false, h), g.callback(null));
    };
    e.onerror = function () {
      iGe(e, true, h);
      g.oa(new jGe(0, "Error while loading script " + d));
    };
    f = c.attributes || {};
    _.Jc(f, {
      type: "text/javascript",
      charset: "UTF-8",
    });
    _.Wm(e, f);
    _.Pc(e, a);
    kGe(b).appendChild(e);
    return g;
  };
  kGe = function (a) {
    var b = _.Rm("HEAD", a);
    return b && b.length !== 0 ? b[0] : a.documentElement;
  };
  hGe = function () {
    if (this && this.AGd) {
      let a = this.AGd;
      a && a.tagName == "SCRIPT" && iGe(a, true, this.mca);
    }
  };
  iGe = function (a, b, c) {
    c != null && _.da.clearTimeout(c);
    a.onload = () => {};
    a.onerror = () => {};
    a.onreadystatechange = () => {};
    b &&
      window.setTimeout(function () {
        _.jn(a);
      }, 0);
  };
  jGe = function (a, b) {
    var c = "Jsloader error (code #" + a + ")";
    b && (c += ": " + b);
    _.ca.call(this, c);
    this.code = a;
  };
  _.Ri(jGe, _.ca);
  _.v("oQfbDd");
  var OWu = function (a) {
      google.log("srpbgd", String(a));
    },
    PWu = function () {
      OWu(11);
    },
    QWu = function () {
      OWu(3);
    },
    SWu = function (a) {
      RWu && (a ? (a.length > 1875 ? OWu(10) : OWu(a)) : OWu(9));
    },
    TWu = function (a) {
      try {
        a.invoke(SWu);
      } catch (b) {
        OWu(8);
      }
    },
    VWu = function (a, b, c) {
      var d = a.getAttribute(b);
      if (!d || !d.includes("aclk?")) return false;
      c = c.invoke();
      c = typeof c !== "string" || c.length > (UWu ? 1500 : 500) ? void 0 : c;
      if (!c) return true;
      d = _.kc(d + `&bg=${c}`);
      a.setAttribute(b, _.hc(d));
      return true;
    },
    WWu = function (a, b) {
      if ((b = _.pn(b.target, "A"))) {
        var c = false;
        if (b.hasAttribute("data-al")) c = true;
        else {
          let d = b;
          for (; d; ) {
            if (d.id === "tads" || d.id === "tadsb") {
              c = true;
              break;
            }
            d = _.Ng(d);
          }
        }
        c && (VWu(b, "href", a) || VWu(b, "data-rw", a));
      }
    },
    aXu = function () {
      var a = null;
      try {
        a = new window.botguard.bg(XWu);
      } catch (b) {
        OWu(6);
        return;
      }
      a.invoke
        ? YWu &&
          (ZWu && _.ze(window, "click", _.Qi(WWu, a), true),
          $Wu && _.ze(window, "unload", () => TWu(a)),
          ZWu || $Wu || TWu(a))
        : OWu(7);
    },
    dXu = function () {
      bXu &&
        (window.botguard
          ? window.botguard.bg
            ? cXu
              ? (0, _.xo)(aXu, cXu)
              : aXu()
            : OWu(5)
          : OWu(4));
    },
    fXu = function () {
      _.Of(
        _.pK(_.bva(eXu), {
          Edd: true,
        }),
        dXu,
        QWu,
      );
    },
    lXu = function () {
      gXu
        ? window.document.readyState === hXu
          ? fXu()
          : iXu
            ? _.Sn(window, "load", fXu)
            : _.Sn(window.document, jXu, fXu)
        : kXu
          ? (0, _.xo)(fXu, kXu)
          : fXu();
    },
    pXu = function (a) {
      var b = new mXu(a);
      a
        ? _.u(b, 1)
          ? _.u(b, 2)
            ? ((a = _.u(b, 1)),
              (b = _.u(b, 2)),
              (nXu = true),
              (eXu = a),
              (XWu = b),
              oXu && lXu())
            : OWu(14)
          : OWu(13)
        : OWu(12);
    },
    mXu = class extends _.m {
      constructor(a) {
        super(a);
      }
    },
    nXu = false,
    XWu = "",
    eXu = "",
    oXu = false,
    kXu = 0,
    gXu = false,
    bXu = false,
    cXu = 0,
    YWu = false,
    $Wu = false,
    ZWu = false,
    RWu = false,
    iXu = false,
    hXu = "complete",
    jXu = "load",
    UWu = false;
  _.Ls(
    _.Q7q,
    class extends _.Js {
      constructor(a) {
        super(a.Na);
        var b = _.da.google.pmc.bgd;
        b &&
          !nXu &&
          (b
            ? ("et" in b && (cXu = b.et),
              "ed" in b && (kXu = b.ed),
              b.ea && (gXu = true),
              b.ei && (YWu = true),
              b.lr && (UWu = true),
              b.eu && ($Wu = true),
              b.ac && (ZWu = true),
              b.ep && (RWu = true),
              b.er && (bXu = true),
              b.el && (oXu = true),
              b.as
                ? _.$N("bgasy", {}).then(pXu, PWu)
                : b.i
                  ? b.p
                    ? (b.wl && (iXu = true),
                      b.li &&
                        ((hXu = "interactive"), (jXu = "DOMContentLoaded")),
                      (a = String(b.i)),
                      (b = String(b.p)),
                      (nXu = true),
                      (eXu = a),
                      (XWu = b),
                      oXu && lXu())
                    : OWu(2)
                  : OWu(1))
            : OWu(0));
      }
    },
  );
  _.x();
  _.v("abd");
  var EVu = function (a) {
    var b = "",
      c = 21;
    for (let d = 0; d < a.length; d++)
      d % 4 != 3 && ((b += String.fromCharCode(a[d] ^ c)), c++);
    return b;
  };
  _.FVu = EVu([97, 119, 115, 111, 107]);
  _.GVu = EVu([97, 119, 115, 111, 107, 123]);
  _.HVu = EVu([118, 115, 121, 107, 108, 124, 104, 119, 68, 127, 114, 105, 114]);
  _.IVu = EVu([101, 126, 118, 102, 118, 125, 118, 109, 126]);
  _.JVu = EVu([116, 116, 115, 108]);
  _.KVu = EVu([113, 115, 99, 107]);
  _.LVu = EVu([113, 115, 117, 107]);
  _.MVu = EVu([
    58, 127, 122, 103, 121, 126, 127, 98, 104, 51, 109, 124, 118, 123, 15, 76,
    81, 90, 13, 95, 67, 76, 64, 118,
  ]);
  _.x();
  _.K7q = _.y("TDFkye", []);
  _.v("TDFkye");
  var NVu = function (a) {
      typeof a === "string" && (a = _.Pm(a));
      if (a)
        return (
          _.vn(a, "display") !== "none" &&
          _.vn(a, "visibility") !== "hidden" &&
          a.offsetHeight > 0
        );
    },
    OVu = function (a) {
      var b = 0;
      for (let c in a)
        if (a[c].e)
          if (a[c].b) b++;
          else return false;
      return b > 0;
    },
    PVu = function (a = {}) {
      var b = {};
      b[_.KVu] = {
        e: !!a[_.KVu],
        b: !NVu(_.FVu),
      };
      b[_.LVu] = {
        e: !!a[_.LVu],
        b: !NVu(_.GVu),
      };
      return b;
    },
    QVu = function (a) {
      var b = [];
      for (let c in a) a[c].e && b.push(`${c}:` + (a[c].b ? "1" : "0"));
      return b.join(",");
    },
    RVu = function (a, b) {
      a = String(a);
      b && (a += `,${b}`);
      google.log(_.IVu, a);
    },
    SVu = function (a, b, c = 2) {
      if (c < 1) RVu(7, b);
      else {
        var d = new Image();
        d.onerror = () => {
          SVu(a, b, c - 1);
        };
        d.src = a;
      }
    },
    TVu = function (a = {}) {
      if (a[_.JVu] && NVu(_.HVu)) {
        a = PVu(a);
        var b = QVu(a);
        OVu(a) ? RVu(1, "0," + b) : RVu(0, b);
        (0, _.Ff)(() => {
          SVu(_.MVu, "aa");
        });
      }
    };
  _.Ls(
    _.K7q,
    class extends _.Js {
      constructor(a) {
        super(a.Na);
        TVu(google.pmc.abd);
      }
    },
  );
  _.x();
  _.rcr = _.y("akFige", []);
  /*


 Copyright (c) 2015-2018 Google, Inc., Netflix, Inc., Microsoft Corp. and contributors
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
     http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
  var Ozi, Qzi, Uzi, Vzi;
  Ozi = function (a, b) {
    a && ((b = a.indexOf(b)), 0 <= b && a.splice(b, 1));
  };
  _.aU = function (a) {
    return typeof a === "function";
  };
  Qzi = function (a) {
    return (
      a instanceof _.Pzi ||
      (a &&
        "closed" in a &&
        _.aU(a.remove) &&
        _.aU(a.add) &&
        _.aU(a.unsubscribe))
    );
  };
  _.Rzi = function () {};
  _.Szi = function (a) {
    setTimeout(() => {
      throw a;
    });
  };
  _.Tzi = function (a) {
    return a;
  };
  Uzi = function (a) {
    return a.length === 0
      ? _.Tzi
      : a.length === 1
        ? a[0]
        : function (b) {
            return a.reduce((c, d) => d(c), b);
          };
  };
  Vzi = function (a) {
    var b;
    return (b = a != null ? a : void 0) != null ? b : Promise;
  };
  _.Yzi = function (a) {
    return new Promise((b, c) => {
      var d = new _.Wzi({
        next: (e) => {
          b(e);
          d.unsubscribe();
        },
        error: c,
        complete: () => {
          c(new _.Xzi());
        },
      });
      a.subscribe(d);
    });
  };
  var Zzi = class extends Error {
    constructor(a) {
      super(
        a
          ? `${a.length} errors occurred during unsubscription:
${a.map((b, c) => `${c + 1}) ${b.toString()}`).join("\n  ")}`
          : "",
      );
      this.errors = a;
      Object.setPrototypeOf(this, new.target.prototype);
      this.name = "UnsubscriptionError";
    }
  };
  var $zi, aAi;
  _.Pzi = class {
    constructor(a) {
      this.Ea = a;
      this.closed = false;
      this.Ba = this.Aa = null;
    }
    unsubscribe() {
      if (!this.closed) {
        this.closed = true;
        let c = this.Aa;
        if (Array.isArray(c)) for (var a of c) a.remove(this);
        else c == null || c.remove(this);
        a = this.Ea;
        if (_.aU(a))
          try {
            a();
          } catch (e) {
            var b = e instanceof Zzi ? e.errors : [e];
          }
        let d = this.Ba;
        if (d) {
          this.Ba = null;
          for (let e of d)
            try {
              _.aU(e) ? e() : e.unsubscribe();
            } catch (f) {
              let g;
              b = (g = b) != null ? g : [];
              f instanceof Zzi ? (b = [...b, ...f.errors]) : b.push(f);
            }
        }
        if (b) throw new Zzi(b);
      }
    }
    add(a) {
      if (a && a !== this)
        if (this.closed) _.aU(a) ? a() : a.unsubscribe();
        else {
          if (a instanceof _.Pzi) {
            if (a.closed || a.Ma(this)) return;
            a.Ha(this);
          }
          let b;
          (this.Ba = (b = this.Ba) != null ? b : []).push(a);
        }
    }
    Ma(a) {
      var b = this.Aa;
      return b === a || (Array.isArray(b) && b.includes(a));
    }
    Ha(a) {
      var b = this.Aa;
      this.Aa = Array.isArray(b) ? (b.push(a), b) : b ? [b, a] : a;
    }
    Oa(a) {
      var b = this.Aa;
      b === a ? (this.Aa = null) : Array.isArray(b) && Ozi(b, a);
    }
    remove(a) {
      var b = this.Ba;
      b && Ozi(b, a);
      a instanceof _.Pzi && a.Oa(this);
    }
  };
  $zi = _.Pzi;
  aAi = new _.Pzi();
  aAi.closed = true;
  $zi.oa = aAi;
  var cAi;
  _.bAi = class extends _.Pzi {
    static create(a, b, c) {
      return new _.Wzi(a, b, c);
    }
    constructor(a) {
      super();
      this.oa = false;
      this.destination =
        a instanceof _.bAi
          ? a
          : new cAi(
              !a || _.aU(a)
                ? {
                    next: a != null ? a : void 0,
                  }
                : a,
            );
      Qzi(a) && a.add(this);
    }
    next(a) {
      this.oa || this.Tqa(a);
    }
    error(a) {
      this.oa || ((this.oa = true), this.Da(a));
    }
    complete() {
      this.oa || ((this.oa = true), this.Ca());
    }
    unsubscribe() {
      this.closed || ((this.oa = true), super.unsubscribe());
    }
    Tqa(a) {
      this.destination.next(a);
    }
    Da(a) {
      this.destination.error(a);
      this.unsubscribe();
    }
    Ca() {
      this.destination.complete();
      this.unsubscribe();
    }
  };
  cAi = class {
    constructor(a) {
      this.oa = a;
    }
    next(a) {
      var b = this.oa;
      if (b.next)
        try {
          b.next(a);
        } catch (c) {
          _.Szi(c);
        }
    }
    error(a) {
      var b = this.oa;
      if (b.error)
        try {
          b.error(a);
        } catch (c) {
          _.Szi(c);
        }
      else _.Szi(a);
    }
    complete() {
      var a = this.oa;
      if (a.complete)
        try {
          a.complete();
        } catch (b) {
          _.Szi(b);
        }
    }
  };
  _.Wzi = class extends _.bAi {
    constructor(a, b, c) {
      super();
      var d;
      _.aU(a) || !a
        ? (d = {
            next: a != null ? a : void 0,
            error: b != null ? b : void 0,
            complete: c != null ? c : void 0,
          })
        : (d = a);
      this.destination = new cAi(d);
    }
  };
  _.dAi = (typeof Symbol === "function" && Symbol.observable) || "@@observable";
  _.bU = class {
    constructor(a) {
      a && (this.Aa = a);
    }
    lift(a) {
      var b = new _.bU();
      b.source = this;
      b.operator = a;
      return b;
    }
    subscribe(a, b, c) {
      a =
        (a && a instanceof _.bAi) ||
        (a && _.aU(a.next) && _.aU(a.error) && _.aU(a.complete) && Qzi(a))
          ? a
          : new _.Wzi(a, b, c);
      b = this.operator;
      c = this.source;
      a.add(b ? b.call(a, c) : c ? this.Aa(a) : this.La(a));
      return a;
    }
    La(a) {
      try {
        return this.Aa(a);
      } catch (b) {
        a.error(b);
      }
    }
    forEach(a, b) {
      b = Vzi(b);
      return new b((c, d) => {
        var e = this.subscribe(
          (f) => {
            try {
              a(f);
            } catch (g) {
              (d(g), e == null || e.unsubscribe());
            }
          },
          d,
          c,
        );
      });
    }
    Aa(a) {
      var b;
      return (b = this.source) == null ? void 0 : b.subscribe(a);
    }
    [_.dAi]() {
      return this;
    }
    pipe(...a) {
      return a.length ? Uzi(a)(this) : this;
    }
  };
  _.bU.create = (a) => new _.bU(a);
  var eAi = class extends Error {
    constructor() {
      super("object unsubscribed");
      Object.setPrototypeOf(this, new.target.prototype);
      this.name = "ObjectUnsubscribedError";
    }
  };
  _.fAi = function (a) {
    var b = new _.bU();
    b.source = a;
    return b;
  };
  _.cU = class extends _.bU {
    constructor() {
      super();
      this.Ca = [];
      this.ux = this.oa = this.closed = false;
      this.Da = null;
    }
    lift(a) {
      var b = new gAi(this, this);
      b.operator = a;
      return b;
    }
    Ba() {
      if (this.closed) throw new eAi();
    }
    next(a) {
      this.Ba();
      if (!this.oa) {
        let b = this.Ca.slice();
        for (let c of b) c.next(a);
      }
    }
    error(a) {
      this.Ba();
      if (!this.oa) {
        this.ux = this.oa = true;
        this.Da = a;
        let b = this.Ca;
        for (; b.length; ) b.shift().error(a);
      }
    }
    complete() {
      this.Ba();
      if (!this.oa) {
        this.oa = true;
        let a = this.Ca;
        for (; a.length; ) a.shift().complete();
      }
    }
    unsubscribe() {
      this.oa = this.closed = true;
      this.Ca = null;
    }
    La(a) {
      this.Ba();
      return super.La(a);
    }
    Aa(a) {
      this.Ba();
      this.Ha(a);
      return this.Ma(a);
    }
    Ma(a) {
      var b = this.oa,
        c = this.Ca;
      return this.ux || b
        ? _.Pzi.oa
        : (c.push(a), new _.Pzi(() => Ozi(this.Ca, a)));
    }
    Ha(a) {
      var b = this.Da,
        c = this.oa;
      this.ux ? a.error(b) : c && a.complete();
    }
  };
  _.cU.create = (a, b) => new gAi(a, b);
  var gAi = class extends _.cU {
    constructor(a, b) {
      super();
      this.destination = a;
      this.source = b;
    }
    next(a) {
      var b, c;
      (b = this.destination) == null || (c = b.next) == null || c.call(b, a);
    }
    error(a) {
      var b, c;
      (b = this.destination) == null || (c = b.error) == null || c.call(b, a);
    }
    complete() {
      var a, b;
      (a = this.destination) == null || (b = a.complete) == null || b.call(a);
    }
    Aa(a) {
      var b, c;
      return (c = (b = this.source) == null ? void 0 : b.subscribe(a)) != null
        ? c
        : _.Pzi.oa;
    }
  };
  _.hAi = class extends _.cU {
    constructor(a) {
      super();
      this.e1a = a;
    }
    get value() {
      return this.getValue();
    }
    Aa(a) {
      var b = super.Aa(a);
      !b.closed && a.next(this.e1a);
      return b;
    }
    getValue() {
      var a = this.Da,
        b = this.e1a;
      if (this.ux) throw a;
      this.Ba();
      return b;
    }
    next(a) {
      super.next((this.e1a = a));
    }
  };
  _.iAi = new _.bU((a) => a.complete());
  _.jAi =
    typeof Symbol === "function" && Symbol.iterator
      ? Symbol.iterator
      : "@@iterator";
  _.kAi = {
    now() {
      return (_.kAi.delegate || Date).now();
    },
    delegate: void 0,
  };
  var mAi = class {
      constructor(a, b = lAi) {
        this.oa = a;
        this.now = b;
      }
      OJ(a, b = 0, c) {
        return new this.oa(this, a).OJ(c, b);
      }
    },
    lAi = _.kAi.now;
  _.Xzi = class extends Error {
    constructor() {
      super("no elements in sequence");
      Object.setPrototypeOf(this, new.target.prototype);
      this.name = "EmptyError";
    }
  };
  _.nAi = Array.isArray;
  _.oAi = Array.isArray;
  _.pAi = Object.getPrototypeOf;
  _.qAi = Object.prototype;
  _.rAi = Object.keys;
  var sAi = class extends _.Pzi {
    constructor() {
      super();
    }
    OJ() {
      return this;
    }
  };
  var tAi = class extends sAi {
    constructor(a, b) {
      super();
      this.scheduler = a;
      this.Da = b;
      this.pending = false;
    }
    OJ(a, b = 0) {
      if (this.closed) return this;
      this.state = a;
      a = this.id;
      var c = this.scheduler;
      a != null && (this.id = this.oa(c, a, b));
      this.pending = true;
      this.delay = b;
      this.id = this.id || this.Ca(c, this.id, b);
      return this;
    }
    Ca(a, b, c = 0) {
      a = a.flush.bind(a, this);
      return setInterval(a, c);
    }
    oa(a, b, c = 0) {
      if (c != null && this.delay === c && this.pending === false) return b;
      clearInterval(b);
    }
    execute(a, b) {
      if (this.closed) return Error("gq");
      this.pending = false;
      if ((a = this.La(a, b))) return a;
      this.pending === false &&
        this.id != null &&
        (this.id = this.oa(this.scheduler, this.id, null));
    }
    La(a) {
      var b = false;
      try {
        this.Da(a);
      } catch (d) {
        b = true;
        var c = (!!d && d) || Error(d);
      }
      if (b) return (this.unsubscribe(), c);
    }
    unsubscribe() {
      if (!this.closed) {
        let a = this.id,
          b = this.scheduler,
          c = b.actions;
        this.Da = this.state = this.scheduler = null;
        this.pending = false;
        Ozi(c, this);
        a != null && (this.id = this.oa(b, a, null));
        this.delay = null;
        super.unsubscribe();
      }
    }
  };
  var uAi = class extends mAi {
    constructor(a, b = lAi) {
      super(a, b);
      this.actions = [];
      this.active = false;
      this.umc = void 0;
    }
    flush(a) {
      var b = this.actions;
      if (this.active) b.push(a);
      else {
        var c;
        this.active = true;
        do if ((c = a.execute(a.state, a.delay))) break;
        while ((a = b.shift()));
        this.active = false;
        if (c) {
          for (; (a = b.shift()); ) a.unsubscribe();
          throw c;
        }
      }
    }
  };
  _.vAi = new uAi(tAi);
  _.wAi = new _.bU(_.Rzi);
  _.xAi = new (class extends uAi {
    flush(a) {
      this.active = true;
      this.umc = void 0;
      var b = this.actions,
        c,
        d = -1;
      a = a || b.shift();
      var e = b.length;
      do if ((c = a.execute(a.state, a.delay))) break;
      while (++d < e && (a = b.shift()));
      this.active = false;
      if (c) {
        for (; ++d < e && (a = b.shift()); ) a.unsubscribe();
        throw c;
      }
    }
  })(
    class extends tAi {
      constructor(a, b) {
        super(a, b);
        this.scheduler = a;
        this.Da = b;
      }
      Ca(a, b, c = 0) {
        if (c !== null && c > 0) return super.Ca(a, b, c);
        a.actions.push(this);
        return a.umc || (a.umc = requestAnimationFrame(() => a.flush(void 0)));
      }
      oa(a, b, c = 0) {
        if ((c != null && c > 0) || (c == null && this.delay > 0))
          return super.oa(a, b, c);
        a.actions.length === 0 && (cancelAnimationFrame(b), (a.umc = void 0));
      }
    },
  );
  var WOp, XOp, YOp, ZOp, $Op, aPp, bPp, iPp, jPp, nPp, cPp, CPp, qPp, pPp, rPp;
  WOp = function (a, b) {
    return new _.bU((c) => {
      var d = 0;
      return b.OJ(function () {
        d === a.length ? c.complete() : (c.next(a[d++]), c.closed || this.OJ());
      });
    });
  };
  XOp = function (a) {
    return new _.bU((b) => {
      var c = a[_.dAi]();
      if (_.aU(c.subscribe)) return c.subscribe(b);
      throw new TypeError("dq");
    });
  };
  YOp = function (a) {
    return new _.bU((b) => {
      for (let c = 0; c < a.length && !b.closed; c++) b.next(a[c]);
      b.complete();
    });
  };
  ZOp = function (a) {
    return new _.bU((b) => {
      a.then(
        (c) => {
          b.closed || (b.next(c), b.complete());
        },
        (c) => b.error(c),
      ).then(null, _.Szi);
    });
  };
  $Op = function (a) {
    return new _.bU((b) => {
      for (var c = a[_.jAi](); !b.closed; ) {
        let { done: d, value: e } = c.next();
        d ? b.complete() : b.next(e);
      }
      return () => _.aU(c == null ? void 0 : c.return) && c.return();
    });
  };
  aPp = async function (a, b) {
    var c = (0, _.Wf)(),
      d = c();
    c = c(1);
    try {
      var e;
      try {
        for (var f = _.BCa(d(a)); ; ) {
          var g = await f.next();
          if (g.done) break;
          let k = g.value;
          c();
          try {
            b.next(k);
          } finally {
            d();
          }
        }
      } catch (k) {
        var h = {
          error: k,
        };
      } finally {
        try {
          g && !g.done && (e = f.return) && (await e.call(f));
        } finally {
          if (h) throw h.error;
        }
      }
      c();
      b.complete();
    } finally {
      d();
    }
  };
  bPp = function (a) {
    return new _.bU((b) => {
      aPp(a, b).catch((c) => b.error(c));
    });
  };
  _.dPp = function (a) {
    if (a instanceof _.bU) return a;
    if (a != null) {
      if (_.aU(a[_.dAi])) return XOp(a);
      if (cPp(a)) return YOp(a);
      if (_.aU(a == null ? void 0 : a.then)) return ZOp(a);
      if (
        Symbol.asyncIterator &&
        _.aU(a == null ? void 0 : a[Symbol.asyncIterator])
      )
        return bPp(a);
      if (_.aU(a == null ? void 0 : a[_.jAi])) return $Op(a);
    }
    throw new TypeError(
      "cq`" +
        (a !== null && typeof a === "object" ? "an invalid object" : `'${a}'`),
    );
  };
  _.ePp = function (a, b) {
    return b ? WOp(a, b) : YOp(a);
  };
  _.fPp = function (a) {
    var b = a[a.length - 1];
    return b && _.aU(b.OJ) ? a.pop() : void 0;
  };
  _.gPp = function (...a) {
    var b = _.fPp(a);
    return b ? WOp(a, b) : _.ePp(a);
  };
  _.b_ = function (a) {
    return (b) => {
      if (_.aU(b == null ? void 0 : b.lift))
        return b.lift(function (c) {
          try {
            return a(c, this);
          } catch (d) {
            this.error(d);
          }
        });
      throw new TypeError("eq");
    };
  };
  _.hPp = function (a) {
    return _.b_((b, c) => {
      var d = 0;
      b.subscribe(
        new _.c_(c, (e) => {
          c.next(a.call(void 0, e, d++));
        }),
      );
    });
  };
  iPp = function (a) {
    return _.hPp((b) => ((0, _.nAi)(b) ? a(...b) : a(b)));
  };
  jPp = function (a, b, c, d) {
    var e = [],
      f = 0,
      g = 0,
      h = false,
      k = (l) => {
        f++;
        _.dPp(c(l, g++)).subscribe(
          new _.c_(
            b,
            (n) => {
              b.next(n);
            },
            void 0,
            () => {
              for (f--; e.length && f < d; ) {
                let n = e.shift();
                k(n);
              }
              !h || e.length || f || b.complete();
            },
          ),
        );
      };
    a.subscribe(
      new _.c_(
        b,
        (l) => (f < d ? k(l) : e.push(l)),
        void 0,
        () => {
          h = true;
          !h || e.length || f || b.complete();
        },
      ),
    );
    return () => {
      e = null;
    };
  };
  _.kPp = function (a, b) {
    var c = Infinity;
    if (_.aU(b))
      return _.kPp((d, e) => _.hPp((f, g) => b(d, f, e, g))(_.dPp(a(d, e))), c);
    typeof b === "number" && (c = b);
    return _.b_((d, e) => jPp(d, e, a, c));
  };
  _.lPp = function (a = Infinity) {
    return _.kPp(_.Tzi, a);
  };
  _.mPp = function (a) {
    return new _.bU((b) => {
      _.dPp(a()).subscribe(b);
    });
  };
  nPp = function (a, b) {
    return (c) => (d) => a[c](b, d);
  };
  _.oPp = function (a, b, c) {
    if (_.aU(c)) {
      var d = c;
      c = void 0;
    }
    if (d) return _.oPp(a, b, c).pipe(iPp(d));
    var [e, f] =
      _.aU(a.addEventListener) && _.aU(a.removeEventListener)
        ? pPp.map((g) => (h) => a[g](b, h, c))
        : _.aU(a.addListener) && _.aU(a.removeListener)
          ? qPp.map(nPp(a, b))
          : _.aU(a.on) && _.aU(a.off)
            ? rPp.map(nPp(a, b))
            : [];
    return !e && cPp(a)
      ? _.kPp((g) => _.oPp(g, b, c))(_.ePp(a))
      : new _.bU((g) => {
          if (!e) throw new TypeError("fq");
          var h = (...k) => g.next(1 < k.length ? k : k[0]);
          e(h);
          return () => f(h);
        });
  };
  _.sPp = function (a = 0, b, c = _.vAi) {
    var d = -1;
    b != null && (b && _.aU(b.OJ) ? (c = b) : (d = b));
    return new _.bU((e) => {
      var f = a instanceof Date && !isNaN(a) ? +a - c.now() : a;
      f < 0 && (f = 0);
      var g = 0;
      return c.OJ(function () {
        e.closed || (e.next(g++), 0 <= d ? this.OJ(void 0, d) : e.complete());
      }, f);
    });
  };
  _.tPp = function (...a) {
    var b = _.fPp(a);
    var c = typeof a[a.length - 1] === "number" ? a.pop() : Infinity;
    return a.length
      ? a.length === 1
        ? _.dPp(a[0])
        : _.lPp(c)(_.ePp(a, b))
      : _.iAi;
  };
  _.uPp = function (a) {
    return _.b_((b, c) => {
      var d = 0;
      b.subscribe(new _.c_(c, (e) => a.call(void 0, e, d++) && c.next(e)));
    });
  };
  _.vPp = function (a) {
    return _.b_((b, c) => {
      var d = null,
        e = false,
        f;
      d = b.subscribe(
        new _.c_(c, void 0, (g) => {
          f = _.dPp(a(g, _.vPp(a)(b)));
          d ? (d.unsubscribe(), (d = null), f.subscribe(c)) : (e = true);
        }),
      );
      e && (d.unsubscribe(), (d = null), f.subscribe(c));
    });
  };
  _.wPp = function (a = null) {
    return _.b_((b, c) => {
      var d = false;
      b.subscribe(
        new _.c_(
          c,
          (e) => {
            d = true;
            c.next(e);
          },
          void 0,
          () => {
            d || c.next(a);
            c.complete();
          },
        ),
      );
    });
  };
  _.xPp = function () {
    return _.b_((a, b) => {
      var c = 0;
      a.subscribe(
        new _.c_(b, (d) => {
          ++c <= 1 && (b.next(d), 1 <= c && b.complete());
        }),
      );
    });
  };
  _.yPp = function (a) {
    return _.b_((b, c) => {
      b.subscribe(c);
      c.add(a);
    });
  };
  _.zPp = function (a) {
    return _.b_((b, c) => {
      var d = null,
        e = 0,
        f = false;
      b.subscribe(
        new _.c_(
          c,
          (g) => {
            var h;
            (h = d) == null || h.unsubscribe();
            h = e++;
            _.dPp(a(g, h)).subscribe(
              (d = new _.c_(
                c,
                (k) => c.next(k),
                void 0,
                () => {
                  d = null;
                  f && !d && c.complete();
                },
              )),
            );
          },
          void 0,
          () => {
            ((f = true), !d) && c.complete();
          },
        ),
      );
    });
  };
  _.APp = function (a) {
    return _.b_((b, c) => {
      _.dPp(a).subscribe(new _.c_(c, () => c.complete(), void 0, _.Rzi));
      !c.closed && b.subscribe(c);
    });
  };
  _.BPp = function (a) {
    var b = _.aU(a)
      ? {
          next: a,
          error: void 0,
          complete: void 0,
        }
      : a;
    return b
      ? _.b_((c, d) => {
          c.subscribe(
            new _.c_(
              d,
              (e) => {
                var f;
                (f = b.next) == null || f.call(b, e);
                d.next(e);
              },
              (e) => {
                var f;
                (f = b.error) == null || f.call(b, e);
                d.error(e);
              },
              () => {
                var e;
                (e = b.complete) == null || e.call(b);
                d.complete();
              },
            ),
          );
        })
      : _.Tzi;
  };
  cPp = (a) => a && typeof a.length === "number" && typeof a !== "function";
  CPp = function (a) {
    var b = a.bufferSize,
      c = a.Oa,
      d = a.buffer;
    a = a.Ea;
    var e = (a ? 1 : 2) * b;
    b < Infinity && e < d.length && d.splice(0, d.length - e);
    if (!a) {
      b = c.now();
      c = 0;
      for (a = 1; a < d.length && d[a] <= b; a += 2) c = a;
      c && d.splice(0, c + 1);
    }
  };
  _.DPp = class extends _.cU {
    constructor(a = Infinity) {
      var b = _.kAi;
      super();
      this.bufferSize = a;
      this.Pa = Infinity;
      this.Oa = b;
      this.buffer = [];
      this.Ea = true;
      this.bufferSize = Math.max(1, a);
      this.Pa = Infinity;
    }
    next(a) {
      var b = this.buffer,
        c = this.Ea,
        d = this.Oa,
        e = this.Pa;
      this.oa || (b.push(a), !c && b.push(d.now() + e));
      CPp(this);
      super.next(a);
    }
    Aa(a) {
      this.Ba();
      CPp(this);
      var b = this.Ma(a),
        c = this.Ea,
        d = this.buffer.slice();
      for (let e = 0; e < d.length && !a.closed; e += c ? 1 : 2) a.next(d[e]);
      this.Ha(a);
      return b;
    }
  };
  _.c_ = class extends _.bAi {
    constructor(a, b, c, d, e) {
      super(a);
      this.La = e;
      b &&
        (this.Tqa = function (f) {
          try {
            b(f);
          } catch (g) {
            this.destination.error(g);
          }
        });
      c &&
        (this.Da = function (f) {
          try {
            c(f);
          } catch (g) {
            this.destination.error(g);
          }
          this.unsubscribe();
        });
      d &&
        (this.Ca = function () {
          try {
            d();
          } catch (f) {
            this.destination.error(f);
          }
          this.unsubscribe();
        });
    }
    unsubscribe() {
      var a;
      this.closed || ((a = this.La) != null && a.call(this));
      super.unsubscribe();
    }
  };
  qPp = ["addListener", "removeListener"];
  pPp = ["addEventListener", "removeEventListener"];
  rPp = ["on", "off"];
  var sXu = function (a) {
    switch (a) {
      case "no-speech":
        return ["0", 8e3];
      case "aborted":
        return ["1", 3e3];
      case "audio-capture":
        return ["2", 8e3];
      case "network":
        return ["3", 3e3];
      case "not-allowed":
        return ["4", 8e3];
      case "service-not-allowed":
        return ["5", 8e3];
      case "bad-grammar":
        return ["6", 3e3];
      case "language-not-supported":
        return ["7", 3e3];
      default:
        return ["9", 3e3];
    }
  };
  _.tXu = class {
    constructor(a) {
      this.language = "";
      this.flags = {};
      this.listeningStartHandler = () => {};
      this.speechStartHandler = () => {};
      this.recognitionResultHandler = () => {};
      this.recognitionEndHandler = () => {};
      this.errorHandler = () => {};
      this.noMatchHandler = () => {};
      this.language = a.language || "en-US";
      this.flags = a.flags || {};
      this.listeningStartHandler =
        a.listeningStartHandler || this.listeningStartHandler;
      this.speechStartHandler = a.speechStartHandler || this.speechStartHandler;
      this.recognitionResultHandler =
        a.recognitionResultHandler || this.recognitionResultHandler;
      this.recognitionEndHandler =
        a.recognitionEndHandler || this.recognitionEndHandler;
      this.errorHandler = a.errorHandler || this.errorHandler;
      this.noMatchHandler = a.noMatchHandler || this.noMatchHandler;
    }
  };
  var uXu = class extends _.tXu {
    constructor() {
      super(...arguments);
      this.Ba = false;
      this.Aa = null;
    }
    initialize() {
      this.oa = new window.webkitSpeechRecognition();
      this.oa.continuous = false;
      this.oa.interimResults = true;
      this.oa.lang = this.language;
      this.oa.maxAlternatives = 4;
      this.oa.onerror = this.Ca.bind(this);
      this.oa.onnomatch = this.noMatchHandler;
      this.oa.onend = () => {
        this.Ba = false;
        if (this.Aa !== null) {
          let a = this.Aa;
          this.Aa = null;
          try {
            this.start(a);
          } catch (b) {
            this.recognitionEndHandler();
          }
        } else this.recognitionEndHandler();
      };
      this.oa.onresult = this.Da.bind(this);
      this.oa.onaudiostart = this.listeningStartHandler;
      this.oa.onspeechstart = this.speechStartHandler;
    }
    isInitialized() {
      return !!this.oa;
    }
    start(a = false) {
      this.oa.continuous = a;
      try {
        (this.oa.start(), (this.Ba = true));
      } catch (b) {
        throw ((this.Ba = false), b);
      }
    }
    stop() {
      this.Aa = null;
      this.oa.abort();
    }
    restart(a = false) {
      this.Ba ? ((this.Aa = a), this.oa.abort()) : this.start(a);
    }
    Da(a) {
      var b = a.results,
        c = b.length;
      if (c !== 0) {
        var d = "",
          e = "",
          f = a.resultIndex;
        a = b[f].isFinal;
        if (this.oa.continuous) {
          d = [];
          e = [];
          for (f = 0; f < c; f++) {
            var g = b[f][0].transcript.trim();
            g &&
              (d.push(g),
              (b[f].isFinal || b[f][0].confidence > 0.5) && e.push(g));
          }
          d = d.join(" ");
          e = e.join(" ");
        } else if (a) d = e = b[f][0].transcript;
        else
          for (f = 0; f < c; f++)
            ((g = b[f][0].transcript),
              (d += g),
              b[f][0].confidence > 0.5 && (e += g));
        this.recognitionResultHandler(d, e, a);
      }
    }
    Ca(a) {
      var [b, c] = sXu(a.error);
      this.errorHandler(b, a.error, c);
    }
  };
  _.vXu = new Map([
    [
      2,
      function (a) {
        if (window.webkitSpeechRecognition) return new uXu(a);
      },
    ],
  ]);
  var wXu = class {
    constructor(a, b) {
      this.oa = a;
      this.Qfa = b;
    }
    start() {
      this.clear();
      this.cA = (0, _.xo)(() => {
        this.cA = void 0;
        this.oa();
      }, this.Qfa);
    }
    clear() {
      this.cA !== void 0 && ((0, _.yo)(this.cA), (this.cA = void 0));
    }
    isActive() {
      return this.cA !== void 0;
    }
  };
  var zXu = function (a) {
      a.Aa.value !== "" ? xXu(a, 19) : yXu(a, "3");
    },
    yXu = function (a, b) {
      a.state !== "READY" && (AXu(b), BXu(a));
    },
    AXu = function (a) {
      var b = _.dh(
        new _.po({
          path: "/gen_204",
          Ax: true,
        }),
      );
      b.Cc("ct", "spch-recog").Cc("cad", "0");
      a !== void 0 && b.Cc("reason", a);
      b.log();
    },
    BXu = function (a) {
      a.timers.idle.clear();
      a.timers.permission.clear();
      a.timers.xCd.clear();
      a.timers.error.clear();
      var b;
      (b = a.Ca) == null || b.unsubscribe();
      a.Ca = void 0;
      a.oa.next(a.Da ? "READY" : "IDLE");
      var c;
      (c = a.Da) == null || c.stop();
    },
    xXu = function (a, b) {
      var c = a.Aa.value;
      c !== "" &&
        (a.oa.next("SEARCH_SUBMITTED"),
        (0, _.xo)(() => {
          BXu(a);
        }, 0),
        _.Zg(document.body, "ORUfAd", {
          query: c,
          J4: b,
        }));
    };
  _.ig(
    _.rcr,
    class extends _.Go {
      constructor() {
        super();
        this.oa = new _.hAi("IDLE");
        this.Aa = new _.hAi("");
        this.Ba = new _.cU();
        this.timers = {
          idle: new wXu(() => {
            zXu(this);
          }, 8e3),
          permission: new wXu(() => {
            this.timers.xCd.start();
            AXu("6");
          }, 1500),
          xCd: new wXu(() => {
            zXu(this);
          }, 15e3),
          error: new wXu(() => {
            yXu(this, "9");
          }, 8e3),
        };
        _.fAi(this.oa);
        _.fAi(this.Aa);
        _.oPp(window, "keydown")
          .pipe(_.APp(this.Ba))
          .subscribe((a) => {
            this.handleKeyDown(a);
          });
        this.Ea = _.Wg(document.body, "qRCSXc", () => {
          yXu(this, "7");
        });
      }
      get state() {
        return this.oa.value;
      }
      vFb() {
        if (this.state === "IDLE") AXu("5");
        else if (this.state === "READY") {
          this.Aa.value !== "" && this.Aa.next("");
          this.timers.permission.start();
          this.oa.next("STARTING");
          this.Ca = new _.Pzi();
          this.Ca.add(
            new _.bU((a) => {
              var b = _.ze(_.xf(), "visibilitychange", () => {
                a.next();
              });
              return () => _.Un(b);
            }).subscribe(() => {
              this.state !== "READY" && _.xf().isHidden() && yXu(this, "4");
            }),
          );
          try {
            let a;
            (a = this.Da) == null || a.start();
            this.oa.value === "STARTING" && this.oa.next("STARTED");
          } catch (a) {
            yXu(this, "1");
          }
        }
      }
      handleKeyDown(a) {
        if (this.state === "READY") {
          let b = a.ctrlKey || (_.IDa && a.metaKey);
          a.key === "." && a.shiftKey && b && (a.preventDefault(), this.vFb());
        } else if (a.key === "Escape")
          (a.stopPropagation(), a.preventDefault(), yXu(this, "0"));
        else if (a.key === "Enter" || a.key === " ")
          (a.stopPropagation(),
            a.preventDefault(),
            this.Aa.value !== "" && xXu(this, 3));
      }
      Sb() {
        BXu(this);
        this.Ba.next();
        this.Ba.complete();
        _.Ug(this.Ea);
        this.oa.complete();
        this.Aa.complete();
        super.Sb();
      }
    },
  );
  _.v("akFige");

  _.x();
  _.D1 = {
    vxc: "",
    kPc: "",
    lha: "",
    OSc: "",
    XSc: "",
    ZSc: "",
    mVc: "",
    ready: "",
    waiting: "",
  };
  _.UXu = !!(_.Li[30] & 256);
  _.VXu = !!(_.Li[30] & 2048);
  _.WXu = !!(_.Li[30] & 4096);
  _.XXu = !!(_.Li[30] & 8192);
  _.YXu = !!((_.Li[30] >> 14) & 1);
  _.UNt = !!((_.Li[105] >> 28) & 1);
  _.VNt = !!((_.Li[105] >> 29) & 1);
  _.WNt = !!(_.Li[106] & 1);
  _.XNt = !!(_.Li[106] & 2);
  _.YNt = !!(_.Li[106] & 4);
  _.ZNt = !!(_.Li[106] & 8);
  _.$Nt = !!(_.Li[106] & 16);
  _.jF = !!((_.Li[20] >> 28) & 1);
  _.kF = !!(_.Li[46] & 8192);
  var e0c;
  _.kC = function (a, b) {
    return b ? a.Sa(b.getKey()).dGd || "" : "";
  };
  _.lC = function (a, b) {
    return b ? a.Sa(b.getKey()).eGd || "" : "";
  };
  _.mC = function (a, b) {
    return b ? a.Sa(b.getKey()).fGd || "" : "";
  };
  e0c = function (a, b) {
    return _.Ti(a, function (c) {
      return b[c];
    });
  };
  _.nC = function (a, b) {
    if (!b) return "";
    var c = a.Sa(b.getKey()),
      d = c.YFd;
    if (!d) return "";
    b = e0c(c.args, b.oa);
    return b.length == 0 ? d(a) : d(a, ...b);
  };
  _.oC = function (a, b) {
    if (!b) return "";
    var c = a.Sa(b.getKey()),
      d = c.ZFd;
    if (!d) return "";
    b = e0c(c.args, b.oa);
    return b.length == 0 ? d(a) : d(a, ...b);
  };
  _.pC = function (a, b) {
    if (!b) return "";
    var c = a.Sa(b.getKey()),
      d = c.aGd;
    if (!d) return "";
    b = e0c(c.args, b.oa);
    return b.length == 0 ? d(a) : d(a, ...b);
  };
  _.qC = function (a, b) {
    if (!b) return true;
    var c = a.Sa(b.getKey()),
      d = c.bGd;
    if (!d) return true;
    b = e0c(c.args, b.oa);
    return b.length == 0 ? d(a) : d(a, ...b);
  };
  _.rC = function (a, b) {
    if (!b) return false;
    var c = a.Sa(b.getKey()),
      d = c.Oze;
    if (!d) return false;
    b = e0c(c.args, b.oa);
    return d(a, ...b);
  };
  _.sC = function (a, b) {
    if (!b) return "";
    var c = a.Sa(b.getKey()).pSb;
    return c ? c(a, b.oa) : "";
  };
  _.tC = function (a, b) {
    a = _.kC(a, b) + _.nC(a, b);
    for (let c of a.split(" "))
      if (c.startsWith('href="'))
        return c.substring(c.indexOf('"') + 1, c.lastIndexOf('"'));
    return "";
  };
  _.PA = function (a) {
    return _.u(a, 9);
  };
  _.QA = function (a) {
    return _.u(a, 50);
  };
  _.RA = function (a) {
    return _.u(a, 17);
  };
  _.SA = function (a) {
    return _.u(a, 20);
  };
  _.TA = function (a) {
    return _.u(a, 30);
  };
  _.UA = function (a) {
    return _.u(a, 1);
  };
  _.WA = function (a) {
    return _.u(a, 33);
  };
  _.XA = function (a) {
    return _.u(a, 34);
  };
  _.YA = function (a) {
    return _.u(a, 6);
  };
  _.ZA = function (a) {
    return _.u(a, 24);
  };
  _.$A = function (a) {
    return _.u(a, 23);
  };
  _.aB = function (a) {
    return _.u(a, 76);
  };
  _.fB = function (a) {
    return _.u(a, 61);
  };
  _.gB = function (a) {
    return _.u(a, 36);
  };
  _.hB = function (a) {
    return _.u(a, 2);
  };
  _.iB = function (a) {
    return _.u(a, 1);
  };
  _.jB = function (a) {
    return _.u(a, 3);
  };
  _.kB = function (a) {
    return _.u(a, 1);
  };
  _.lB = function (a) {
    return _.u(a, 2);
  };
  _.mB = function (a) {
    return _.u(a, 4);
  };
  _.nB = function (a) {
    return _.u(a, 8);
  };
  _.oB = function (a) {
    return _.u(a, 10);
  };
  _.pB = function (a) {
    return _.u(a, 45);
  };
  _.qB = function (a) {
    return _.u(a, 7);
  };
  _.rB = function (a) {
    return _.u(a, 38);
  };
  _.sB = function (a) {
    return _.u(a, 39);
  };
  _.tB = function (a) {
    return _.u(a, 40);
  };
  _.uB = function (a) {
    return _.u(a, 42);
  };
  _.vB = function (a) {
    return _.u(a, 85);
  };
  _.wB = function (a) {
    return _.u(a, 86);
  };
  _.xB = function (a) {
    return _.u(a, 14);
  };
  _.yB = function (a) {
    return _.u(a, 12);
  };
  _.zB = function (a) {
    return _.u(a, 11);
  };
  _.AB = function (a) {
    return _.u(a, 68);
  };
  _.BB = function (a) {
    return _.u(a, 82);
  };
  _.CB = function (a) {
    return _.u(a, 55);
  };
  _.DB = function (a) {
    return _.u(a, 60);
  };
  _.MA = function (a) {
    if (a != null) {
      var b = Number(a);
      return Number.isSafeInteger(b) ? b : String(a);
    }
  };
  _.NA = function (a) {
    return _.u(a, 38);
  };
  _.OA = function (a) {
    return _.u(a, 24);
  };
  _.JA = function () {
    return _.q_c() ? "rtl" : "ltr";
  };
  _.r_c = function () {};
  _.r_c.prototype.initialize = function (a) {
    this.oa = a || {};
  };
  _.KA = function (a, b, c) {
    a = a.oa[b];
    return a != null ? a : c;
  };
  var s_c = function (a) {
      this.initialize(a);
    },
    u_c;
  _.Ri(s_c, _.r_c);
  _.q_c = function () {
    var a = _.LA();
    return !!_.KA(a, "is_rtl");
  };
  u_c = function (a) {
    t_c.oa.css3_prefix = a;
  };
  var t_c;
  _.LA = function () {
    t_c ||
      ((t_c = new s_c()),
      _.xba()
        ? u_c("-webkit-")
        : _.Ka.g6a()
          ? u_c("-moz-")
          : _.Ka.jNa()
            ? u_c("-ms-")
            : _.Ka.Efc() && u_c("-o-"),
      (t_c.oa.is_rtl = false),
      (t_c.oa.language = "en"));
    return t_c;
  };
  t_c = null;
  _.FA = function (a) {
    return _.u(a, 2);
  };
  _.GA = function (a) {
    return _.u(a, 49);
  };
  _.HA = function (a) {
    return _.u(a, 48);
  };
  _.IA = function (a) {
    return _.u(a, 69);
  };
  _.p_c = function (a) {
    return _.u(a, 91);
  };
  _.j_c = RegExp(
    "^data:image/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon);base64,[-+/_a-z0-9]+(?:=|%3d)*$",
    "i",
  );
  _.k_c = RegExp("^(?:[0-9]+)([ ]*;[ ]*url=)?(.*)$");
  _.l_c = RegExp(
    "^(?:[*/]?(?:(?:[+\\-.,!#%_a-zA-Z0-9\t]| )|\\)|[a-zA-Z0-9]\\(|$))*$",
  );
  _.m_c = RegExp(
    "^(?:[*/]?(?:(?:\"(?:[^\\x00\"\\\\\\n\\r\\f\\u0085\\u000b\\u2028\\u2029]|\\\\(?:[\\x21-\\x2f\\x3a-\\x40\\x47-\\x60\\x67-\\x7e]|[0-9a-fA-F]{1,6}[ \t]?))*\"|'(?:[^\\x00'\\\\\\n\\r\\f\\u0085\\u000b\\u2028\\u2029]|\\\\(?:[\\x21-\\x2f\\x3a-\\x40\\x47-\\x60\\x67-\\x7e]|[0-9a-fA-F]{1,6}[ \t]?))*')|(?:[+\\-.,!#%_a-zA-Z0-9\t]| )|$))*$",
  );
  _.n_c = RegExp("^-(?:moz|ms|o|webkit|css3)-(.*)$");
  _.o_c = _.wka({
    for: "htmlFor",
    class: "className",
  });
  var D_c,
    E_c,
    G_c,
    N_c,
    C_c,
    P_c,
    R_c,
    S_c,
    w_c,
    z_c,
    x_c,
    y_c,
    A_c,
    B_c,
    U_c,
    F_c;
  _.v_c = function (a, b) {
    a[b] || (a[b] = []);
    return a[b];
  };
  _.EB = function (a, b) {
    if (w_c.test(b)) return b;
    b =
      b.indexOf("left") >= 0 ? b.replace(x_c, "right") : b.replace(y_c, "left");
    _.xa(z_c, a) &&
      ((a = b.split(A_c)),
      a.length >= 4 && (b = [a[0], a[3], a[2], a[1]].join(" ")));
    return b;
  };
  D_c = function (a, b) {
    var c = a + ";;" + B_c++;
    _.V_a.set(c, b);
    _.W_a.has(a) || (C_c(a, () => ""), _.W_a.add(a));
    return c;
  };
  _.FB = function (a) {
    a = _.kc(a).toString();
    return a === _.tja.toString() ? "about:invalid#zjslayoutz" : a;
  };
  _.GB = function (a) {
    if (_.j_c.test(a)) return a;
    a = _.kc(a).toString();
    return a === _.tja.toString() ? "about:invalid#zjslayoutz" : a;
  };
  E_c = function (a, b) {
    if (b < 0) return -1;
    for (let c = 0; c < a.length; c++) {
      let d = a.charAt(c);
      if (d == "(") b++;
      else if (d == ")")
        if (b > 0) b--;
        else return -1;
    }
    return b;
  };
  G_c = function (a, b) {
    var c = a.toLowerCase();
    a = _.n_c.exec(a);
    if (a !== null) {
      if (a[1] === void 0) return null;
      c = a[1];
    }
    return (b && c == "url") || c in F_c ? c : null;
  };
  _.HB = function (a) {
    if (a == null) return null;
    for (
      var b = RegExp("([-_a-zA-Z0-9]+)\\(", "g"),
        c = RegExp(
          "[ \t]*((?:\"(?:[^\\x00\"\\\\\\n\\r\\f\\u0085\\u000b\\u2028\\u2029]*)\"|'(?:[^\\x00'\\\\\\n\\r\\f\\u0085\\u000b\\u2028\\u2029]*)')|(?:[?&/:=]|[+\\-.,!#%_a-zA-Z0-9\t])*)[ \t]*",
          "g",
        ),
        d = true,
        e = 0,
        f = "";
      d;
    ) {
      b.lastIndex = 0;
      var g = b.exec(a);
      d = g !== null;
      var h = a;
      let l;
      if (d) {
        if (g[1] === void 0) return "zjslayoutzinvalid";
        l = G_c(g[1], true);
        if (l === null) return "zjslayoutzinvalid";
        h = a.substring(0, b.lastIndex);
        a = a.substring(b.lastIndex);
      }
      e = E_c(h, e);
      if (e < 0 || !_.l_c.test(h)) return "zjslayoutzinvalid";
      f += h;
      if (d && l == "url") {
        c.lastIndex = 0;
        g = c.exec(a);
        if (g === null || g.index != 0) return "zjslayoutzinvalid";
        var k = g[1];
        if (k === void 0) return "zjslayoutzinvalid";
        g = k.length == 0 ? 0 : c.lastIndex;
        if (a.charAt(g) != ")") return "zjslayoutzinvalid";
        h = "";
        k.length > 1 &&
          (_.fa(k, '"') && _.jaa(k, '"')
            ? ((k = k.substring(1, k.length - 1)), (h = '"'))
            : _.fa(k, "'") &&
              _.jaa(k, "'") &&
              ((k = k.substring(1, k.length - 1)), (h = "'")));
        k = _.GB(k);
        if (k == "about:invalid#zjslayoutz") return "zjslayoutzinvalid";
        f += h + k + h;
        a = a.substring(g);
      }
    }
    return e != 0 ? "zjslayoutzinvalid" : f;
  };
  _.IB = function (a) {
    if (a == null) return null;
    if (!_.l_c.test(a) || E_c(a, 0) != 0) return "zjslayoutzinvalid";
    for (
      var b = RegExp("([-_a-zA-Z0-9]+)\\(", "g"), c;
      (c = b.exec(a)) !== null;
    )
      if (G_c(c[1], false) === null) return "zjslayoutzinvalid";
    return a;
  };
  _.T = function (a) {
    if (a == null) return "";
    if (!H_c.test(a)) return a;
    a.indexOf("&") != -1 && (a = a.replace(I_c, "&amp;"));
    a.indexOf("<") != -1 && (a = a.replace(J_c, "&lt;"));
    a.indexOf(">") != -1 && (a = a.replace(K_c, "&gt;"));
    a.indexOf('"') != -1 && (a = a.replace(L_c, "&quot;"));
    return a;
  };
  _.JB = function (a) {
    if (a == null) return "";
    a.indexOf('"') != -1 && (a = a.replace(L_c, "&quot;"));
    return a;
  };
  _.KB = function (a) {
    return _.z(a);
  };
  _.M_c = function (a) {
    return (
      a != null &&
      typeof a == "object" &&
      typeof a.length == "number" &&
      typeof a.propertyIsEnumerable != "undefined" &&
      !a.propertyIsEnumerable("length")
    );
  };
  N_c = function (a) {
    return a != null && typeof a === "object" && a.constructor === Object;
  };
  _.MB = function (a) {
    return typeof a === "string"
      ? `'${String(a)}'`
      : typeof a !== "object" || a === null
        ? String(a)
        : Array.isArray(a)
          ? `[${a.map(_.MB).join(",")}]`
          : `{${Object.keys(a)
              .map((b) => {
                var c = _.MB(a[b]);
                return `${b}:${c}`;
              })
              .join(",")}}`;
  };
  C_c = function (a, b) {
    _.wp[a] = b;
  };
  _.O_c = function (a, b) {
    var c = {};
    _.v_c(a.oa, b).push(c);
    return c;
  };
  P_c = function (a) {
    this.initialize(a);
  };
  _.Ri(P_c, _.r_c);
  P_c.prototype.jh = function () {
    return this.oa.name != null;
  };
  P_c.prototype.getName = function () {
    return _.KA(this, "name", "");
  };
  P_c.prototype.Je = function (a) {
    this.oa.name = a;
  };
  _.Q_c = function (a, b) {
    return a.oa[b] ? a.oa[b].length : 0;
  };
  R_c = function (a) {
    var b = P_c,
      c = [];
    for (let g = 0; g < _.Q_c(a, "rule"); g++) {
      var d = c,
        e = d.push;
      var f = g;
      f = _.v_c(a.oa, "rule")[f];
      e.call(d, new b(f));
    }
    return c;
  };
  S_c = function (a) {
    this.initialize(a);
  };
  _.Ri(S_c, _.r_c);
  S_c.prototype.addRule = function () {
    return new P_c(_.O_c(this, "rule"));
  };
  w_c = /['"\(]/;
  z_c = ["border-color", "border-style", "border-width", "margin", "padding"];
  x_c = /left/g;
  y_c = /right/g;
  A_c = /\s+/;
  B_c = 1;
  _.T_c = function () {
    window.W_jd &&
      window.W_jd.tq7Pxb &&
      (_.lYb(new _.hYb(window.W_jd.tq7Pxb)), delete window.W_jd.tq7Pxb);
  };
  U_c = function (a) {
    _.T_c();
    return _.iYb[a] ? _.iYb[a] : new _.gYb();
  };
  _.NB = function (a) {
    a = U_c(a);
    return !!_.Sj(a, 2, _.cYb);
  };
  _.OB = function (a) {
    a = U_c(a);
    return _.Lk(a, 5, _.cYb)
      ? _.Uj(a, 5, _.cYb) || 0
      : _.RFa(a, 4, _.cYb)
        ? _.Le(_.wFa(a, 4, _.cYb)) || 0
        : 0;
  };
  _.PB = function (a) {
    a = U_c(a);
    return _.Wj(a, 3, _.cYb) || "";
  };
  F_c = {
    blur: true,
    brightness: true,
    calc: true,
    circle: true,
    clamp: true,
    "conic-gradient": true,
    contrast: true,
    counter: true,
    counters: true,
    "cubic-bezier": true,
    "drop-shadow": true,
    ellipse: true,
    grayscale: true,
    hsl: true,
    hsla: true,
    "hue-rotate": true,
    inset: true,
    invert: true,
    opacity: true,
    "linear-gradient": true,
    matrix: true,
    matrix3d: true,
    max: true,
    min: true,
    minmax: true,
    polygon: true,
    "radial-gradient": true,
    rgb: true,
    rgba: true,
    rect: true,
    repeat: true,
    rotate: true,
    rotate3d: true,
    rotatex: true,
    rotatey: true,
    rotatez: true,
    saturate: true,
    sepia: true,
    scale: true,
    scale3d: true,
    scalex: true,
    scaley: true,
    scalez: true,
    steps: true,
    skew: true,
    skewx: true,
    skewy: true,
    translate: true,
    translate3d: true,
    translatex: true,
    translatey: true,
    translatez: true,
    var: true,
  };
  _.V_c = class {
    constructor(a, b) {
      this.Aa = "";
      this.oa = b || {};
      if (typeof a === "string") this.Aa = a;
      else {
        b = a.oa;
        this.Aa = a.getKey();
        for (let c in b) this.oa[c] == null && (this.oa[c] = b[c]);
      }
    }
    getKey() {
      return this.Aa;
    }
  };
  var I_c, J_c, K_c, L_c, H_c;
  _.W_c = RegExp(
    "^</?(b|u|i|em|br|sub|sup|wbr|span)( dir=(rtl|ltr|'ltr'|'rtl'|\"ltr\"|\"rtl\"))?>",
  );
  _.X_c = RegExp("^&([a-zA-Z]+|#[0-9]+|#x[0-9a-fA-F]+);");
  I_c = /&/g;
  J_c = /</g;
  K_c = />/g;
  L_c = /"/g;
  H_c = /[&<>"]/;
  _.Y_c = function (a) {
    var b = (a[1] = _.Uc(a[0]));
    if (b[6]) {
      let c = b[6].split("&"),
        d = {};
      for (let e = 0, f = c.length; e < f; ++e) {
        let g = c[e].split("=");
        if (g.length == 2) {
          let h = g[1]
            .replace(/,/gi, "%2C")
            .replace(/[+]/g, "%20")
            .replace(/:/g, "%3A");
          try {
            d[decodeURIComponent(g[0])] = decodeURIComponent(h);
          } catch (k) {}
        }
      }
      b[6] = d;
    }
    a[0] = null;
  };
  _.Z_c = function (a) {
    if (a[6]) {
      var b = a[6];
      var c = [];
      for (let d in b) {
        let e = b[d];
        e != null &&
          c.push(
            encodeURIComponent(d) +
              "=" +
              encodeURIComponent(e)
                .replace(/%3A/gi, ":")
                .replace(/%20/g, "+")
                .replace(/%2C/gi, ",")
                .replace(/%7C/gi, "|"),
          );
      }
      b = c.join("&");
      a[6] = b;
    }
    a[1] == "http" && a[4] == "80" && (a[4] = null);
    a[1] == "https" && a[4] == "443" && (a[4] = null);
    b = a[3];
    /:[0-9]+$/.test(b) &&
      ((c = b.lastIndexOf(":")),
      (a[3] = b.substr(0, c)),
      (a[4] = b.substr(c + 1)));
    b = a[5];
    a[3] && b && !b.startsWith("/") && (a[5] = "/" + b);
    return _.bla(a[1], a[2], a[3], a[4], a[5], a[6], a[7]);
  };
  _.$_c = function (a, b) {
    var c = [];
    b && ((b = [b]), _.Y_c(b), (c = b[1]));
    a.scheme ? (c[1] = a.scheme) : a.scheme === null && (c[1] = void 0);
    a.domain && (c[3] = a.domain);
    a.port ? (c[4] = a.port) : a.port === null && (c[4] = void 0);
    a.path && (c[5] = a.path);
    a.fragment ? (c[7] = a.fragment) : a.fragment === null && (c[7] = void 0);
    if (a.Eua) {
      let d = c[6] || {};
      Object.entries(a.Eua).forEach(([e, f]) => {
        f !== void 0 ? (d[e] = f) : f === null && delete d[e];
      });
      c[6] = d;
    }
    return _.Z_c(c);
  };
  _.QB = function (a) {
    return a || "#";
  };
  _.SB = function (a) {
    return a || "/images/cleardot.gif";
  };
  var a0c;
  a0c = null;
  _.TB = function (a, b) {
    return _.EB(a, b);
  };
  _.U = function (a, b) {
    return a == null ? null : new _.V_c(a, b);
  };
  _.UB = function (a, b, c) {
    for (let f = 2; f < arguments.length; ++f) {
      if (a == null || arguments[f] == null) return b;
      var d = a,
        e = arguments[f];
      if (typeof e == "number" && e < 0) {
        let g = d.length;
        g == null
          ? (a = d[-e])
          : ((e = -e - 1),
            e < g && (e !== g - 1 || !N_c(d[g - 1]))
              ? (e = d[e])
              : ((d = d[d.length - 1]), (e = N_c(d) ? d[e + 1] || null : null)),
            (a = e));
      } else a = d[e];
    }
    return a == null ? b : a;
  };
  _.V = function (a, b, ...c) {
    for (let d of c) {
      if (!a) return b;
      a = d(a);
    }
    return a == null || a == void 0 ? b : a;
  };
  _.WB = function (a, ...b) {
    for (let c of b) {
      if (!a) return 0;
      a = c(a);
    }
    return a == null || a == void 0 ? 0 : _.M_c(a) ? a.length : -1;
  };
  _.b0c = function (a, b) {
    b = b || 0;
    b < 0 && (b = 0);
    return parseFloat(a).toFixed(b);
  };
  _.XB = function (a, ...b) {
    for (let c of b) {
      if (!a) return false;
      a = c(a);
    }
    return a;
  };
  _.YB = function (a) {
    a0c || (a0c = new _.Sy(1));
    return a0c.format(a);
  };
  _.ZB = function (a, b = ",") {
    return a ? a.join(b) : "";
  };
  _.$B = function (a, b) {
    if (a == null) return [];
    var c = a.length != null;
    if (c && b != 32 && b != 8) return a;
    var d = a._jslArrayCache;
    d || ((d = []), (a._jslArrayCache = d));
    var e = c ? a.length : a.size();
    d.length = e;
    var f = a.getAtIndex ? "getAtIndex" : "get";
    for (let g = 0; g < e; g++) {
      let h = c ? a[g] : a[f](g);
      b == 32 && h == null && (h = "");
      d[g] = h;
    }
    return d;
  };
  _.aC = function (a, b, c) {
    if (!a) return 0;
    for (let d = 0; d < c.length; ++d) if (c[d](a)) return b[d];
    return 0;
  };
  _.bC = function (a, b) {
    var c = _.LA();
    c = new S_c(c.oa.css3_prefix_rules);
    for (let d of R_c(c).slice().values())
      if (
        (d.getName() === a && _.KA(d, "role", 0) === 0) ||
        _.KA(d, "role", 0) === b
      )
        return _.KA(d, "prefixed_name", "");
    _.T_c();
    if ((c = _.jYb))
      for (let d of _.qh(c, _.eYb, 1, _.sh()))
        if ((_.gh(d, 1) === a && _.Ej(d, 3) === 0) || _.Ej(d, 3) === b)
          return _.u(d, 2);
    b = _.LA();
    return _.KA(b, "css3_prefix", "") + a;
  };
  _.dC = function (a, b, c) {
    c = ~~(c || 0);
    c == 0 && (c = 1);
    var d = [];
    if (c > 0) for (a = ~~a; a < b; a += c) d.push(a);
    else for (a = ~~a; a > b; a += c) d.push(a);
    return d;
  };
  _.c0c = function (a) {
    return typeof a === "number" ? a : a.Dia();
  };
  _.eC = function (a, b) {
    return D_c(a, b || []);
  };
  _.W = function (a) {
    var b = a.match(/\bhref="/g);
    if (!b || b.length <= 1) return a;
    var c = new _.af();
    a = a.replace(/\bhref="(.*?)"/g, function (d, e) {
      d = _.Ph(e);
      c.oa || _.bf(c, d.oa);
      c.Da || _.ef(c, d.rv());
      c.La || c.setPath(d.getPath());
      c.Aa || _.gf(c, d.Aa);
      for (let f of d.Qz().getKeys())
        _.NNa(c.Qz(), f) || _.ENa(c.Qz(), f, d.Qz().GJ(f));
      return "";
    });
    a = a.replace(/\s\s+/g, " ").replace(/\s+$/g, "");
    return `${a} href="${c.toString()}"`;
  };
  _.X = function (a) {
    return a === ""
      ? ""
      : ` class="${a.charAt(a.length - 1) === " " ? a.slice(0, -1) : a}"`;
  };
  _.Y = function (a) {
    return a !== "" ? ` style="${a}"` : "";
  };
  _.fC = function (a, b) {
    return b && typeof b === "object" && !Array.isArray(b) ? b : new a(b);
  };
  _.AA = function (a) {
    return _.u(a, 7);
  };
  _.BA = function (a) {
    return _.u(a, 84);
  };
  _.CA = function (a) {
    return _.u(a, 70);
  };
  _.DA = function (a) {
    return _.u(a, 71);
  };
  _.EA = !!((_.Li[20] >> 27) & 1);
  var mti, oti, pti, qti, tti, uti, vti;
  mti = function () {
    return "";
  };
  _.nti = function () {
    return (
      (_.jF ? "z1asCe " : "") +
      (_.jF ? "wuXmqc " : "") +
      (_.jF ? "" : "WqQeqc ") +
      (_.jF ? "" : "FAgkbc ")
    );
  };
  oti = function () {
    return "";
  };
  pti = function () {
    return true;
  };
  qti = function () {
    return false;
  };
  tti = function (a, b) {
    _.rti(a);
    return _.sti(a, b.Qb, b.Rb);
  };
  uti = function (a, b) {
    _.rti(a);
    var c = b.Qb,
      d = b.Rb;
    b = "<span" + _.X(_.nti(a, c, d) + "") + _.Y("") + _.W("") + ">";
    a = _.sti(a, c, d);
    return _.z(b + (a + "</span>"));
  };
  _.sti = function (a, b, c) {
    b = b == null ? null : b;
    c = c == null ? null : c;
    c =
      (b != null ? _.sC(a, b) : "") +
      (c != null ? _.sC(a, c) : "") +
      (_.jF
        ? (_.EA == 0
            ? "<svg" +
              _.X("") +
              _.Y("") +
              _.W(
                ' focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"',
              ) +
              "><path" +
              _.X("") +
              _.Y("") +
              _.W(
                ' d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"',
              ) +
              "></path></svg>"
            : "") +
          (_.EA == 1
            ? "<svg" +
              _.X("") +
              _.Y("") +
              _.W(' focusable="false" aria-hidden="true" viewBox="0 0 24 24"') +
              "><path" +
              _.X("") +
              _.Y("") +
              _.W(
                ' d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"',
              ) +
              "></path></svg>"
            : "")
        : "");
    _.jF ||
      (a.Ba(
        _.kF
          ? ".FAgkbc span{-webkit-mask-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAk0lEQVR4Ae2W1w3DQAzFHnBD3oCpO6a4D8CD8FzFb4lM3JWcmCQpuquKUofp0qZ/q9NXFeq/6vRuSdzVqQOJRb9M35l8WQIJPMkX43q+zPU8EdcjSVwPREAfSAB9JBHUg0RIDxIe/ZIw6L0B/yHyn2T/Zeq/0fijwv+w8z+u/S8c/yvT/9L3f7b4P7z8n45JkpyQHoZ1C+CAch8WAAAAAElFTkSuQmCC)}"
          : "",
      ),
      a.Ba(
        _.kF
          ? ""
          : ".FAgkbc span{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAk0lEQVR4Ae2W1w3DQAzFHnBD3oCpO6a4D8CD8FzFb4lM3JWcmCQpuquKUofp0qZ/q9NXFeq/6vRuSdzVqQOJRb9M35l8WQIJPMkX43q+zPU8EdcjSVwPREAfSAB9JBHUg0RIDxIe/ZIw6L0B/yHyn2T/Zeq/0fijwv+w8z+u/S8c/yvT/9L3f7b4P7z8n45JkpyQHoZ1C+CAch8WAAAAAElFTkSuQmCC)}",
      ),
      (c += "<span" + _.X("") + _.Y("") + _.W("") + "></span>"));
    return c;
  };
  _.rti = function (a) {
    a.oa(vti) ||
      a.Aa(
        vti,
        {
          Qb: 0,
          Rb: 1,
        },
        tti,
        uti,
        pti,
        qti,
        "",
        mti,
        "",
        _.nti,
        "",
        oti,
      );
  };
  vti = "t-djdyZmG6MyA";
  var wti, xti, yti, zti, Ati, Bti;
  wti = function () {
    return "";
  };
  _.RT = function (a, b, c, d) {
    return "" + _.nti(a, c == null ? null : c, d == null ? null : d);
  };
  _.ST = function (a, b) {
    var c = b != 24;
    return (
      (c
        ? "height:" +
          _.T(
            _.IB(
              a.isRtl() ? _.EB("height", String(b) + "px") : String(b) + "px",
            ),
          ) +
          ";"
        : "") +
      (c
        ? "line-height:" +
          _.T(
            _.IB(
              a.isRtl()
                ? _.EB("line-height", String(b) + "px")
                : String(b) + "px",
            ),
          ) +
          ";"
        : "") +
      (c
        ? "width:" +
          _.T(
            _.IB(
              a.isRtl() ? _.EB("width", String(b) + "px") : String(b) + "px",
            ),
          ) +
          ";"
        : "")
    );
  };
  xti = function () {
    return true;
  };
  yti = function () {
    return false;
  };
  zti = function (a, b) {
    _.TT(a);
    return _.UT(a, b.Qb, b.Rb);
  };
  Ati = function (a, b) {
    _.TT(a);
    var c = b.size,
      d = b.Qb,
      e = b.Rb;
    b = "";
    c =
      "<span" +
      _.X(_.RT(a, c, d, e) + "") +
      _.Y(_.ST(a, c, d, e) + "") +
      _.W("") +
      ">";
    a = _.UT(a, d, e);
    b += c + (a + "</span>");
    return _.z(b);
  };
  _.UT = function (a, b, c) {
    return _.sti(a, b == null ? null : b, c == null ? null : c);
  };
  _.TT = function (a) {
    a.oa(Bti) ||
      (a.Aa(
        Bti,
        {
          size: 0,
          Qb: 1,
          Rb: 2,
        },
        zti,
        Ati,
        xti,
        yti,
        "",
        wti,
        "",
        _.RT,
        "",
        _.ST,
      ),
      _.rti(a));
  };
  Bti = "t-PiqLEHKTC3M";
  _.Smd = function (a, b) {
    a = _.c3b(new _.y$a(a, b));
    b = _.bma();
    b != null && a.setProductID(b);
    return a;
  };
});
// Google Inc.
