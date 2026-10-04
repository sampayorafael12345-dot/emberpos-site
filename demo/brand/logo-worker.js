/*
 * The logo drawing, OFF the page's main thread (4 Oct 2026, the owner: "the
 * logo is lagging on the demo").
 *
 * The startup screen shows while the app is at its busiest - downloading,
 * starting its database, unpacking the sample shop - and a drawing on that
 * same thread waits for every one of those jobs, so it stuttered. Here it
 * draws into an OffscreenCanvas in its own thread, which the browser shows
 * on its own, however busy the page is. logo-loader.js falls back to the
 * page thread where this is not possible (older tills, the desktop app's
 * local files).
 */
var stopped = false;
self.onmessage = function (ev) {
  var m = ev.data;
  if (m === 'stop') { stopped = true; return; }
  // Unpack the drawing here, not on the page: the page is busy.
  try {
    var bin = atob(m.data.slice(m.data.indexOf(',') + 1)), u8 = new Uint8Array(bin.length);
    for (var j = 0; j < bin.length; j++) u8[j] = bin.charCodeAt(j);
    createImageBitmap(new Blob([u8], { type: 'image/png' }), { colorSpaceConversion: 'none', premultiplyAlpha: 'none' }).then(function (bmp) {
      var oc = new OffscreenCanvas(bmp.width, bmp.height), og = oc.getContext('2d');
      og.drawImage(bmp, 0, 0);
      run(m, og.getImageData(0, 0, bmp.width, bmp.height).data, bmp.width, bmp.height / 2);
    }).catch(function () { self.postMessage({ fail: true }); });
  } catch (e) { self.postMessage({ fail: true }); }
};

function run(m, px, w, h) {
  var n = 0, i, k = 0, o = w * h * 4;
  for (i = 0; i < w * h; i++) if (px[i * 4 + 2] > 0) n++;
  var at = new Int32Array(n), tb = new Float32Array(n), ta = new Float32Array(n), cov = new Float32Array(n), bf = new Float32Array(n);
  for (i = 0; i < w * h; i++) {
    var q = i * 4;
    if (px[q + 2] === 0) continue;
    at[k] = q; tb[k] = (px[q] * 256 + px[q + 1]) / 65535; cov[k] = px[q + 2] / 255;
    ta[k] = (px[o + q] * 256 + px[o + q + 1]) / 65535; bf[k] = px[o + q + 2] / 255;
    k++;
  }
  var cv = m.canvas, g = cv.getContext('2d');
  if (!g) { self.postMessage({ fail: true }); return; }
  var E = m.E, FILL = m.FILL, DRAIN = m.DRAIN;
  var im = g.createImageData(w, h), d = im.data;
  for (i = 0; i < n; i++) { var p = at[i]; d[p] = m.rgb[0]; d[p + 1] = m.rgb[1]; d[p + 2] = m.rgb[2]; }
  function reveal(t, head, tail) {
    var a = (head * (1 + 2 * E) - E - t) / E + 0.5;
    a = a < 0 ? 0 : a > 1 ? 1 : a;
    if (tail > -1 && a > 0) {
      var b = (t - (tail * (1 + 2 * E) - E)) / E + 0.5;
      a *= b < 0 ? 0 : b > 1 ? 1 : b;
    }
    return a;
  }
  function paint(head, tail) {
    for (var k = 0; k < n; k++) {
      var f = bf[k];
      var a = f >= 1 ? reveal(tb[k], head, tail) : f * reveal(tb[k], head, tail) + (1 - f) * reveal(ta[k], head, tail);
      d[at[k] + 3] = cov[k] * a * 255 + 0.5;
    }
    g.putImageData(im, 0, 0);
  }
  if (m.reduced) { paint(1, -1); return; }
  var clock = function () { return self.performance && performance.now ? performance.now() : Date.now(); };
  var t0 = clock();
  var next = self.requestAnimationFrame ? function (f) { self.requestAnimationFrame(f); } : function (f) { setTimeout(f, 16); };
  function tick() {
    if (stopped) return;
    var t = (clock() - t0) % (FILL + DRAIN);
    if (t < FILL) paint(t / FILL, -1); else paint(1, (t - FILL) / DRAIN);
    next(tick);
  }
  tick();
}
