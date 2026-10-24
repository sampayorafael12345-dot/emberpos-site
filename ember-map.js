(function() {
  "use strict";
  var LIB = "https://cdnjs.cloudflare.com/ajax/libs/maplibre-gl/4.7.1/maplibre-gl.min.js";
  var CSS = "https://cdnjs.cloudflare.com/ajax/libs/maplibre-gl/4.7.1/maplibre-gl.min.css";
  var loading = null;
  function canDraw() {
    try {
      var c = document.createElement("canvas");
      return !!(c.getContext("webgl2") || c.getContext("webgl"));
    } catch (e) {
      return false;
    }
  }
  function load() {
    if (window.maplibregl) return Promise.resolve(window.maplibregl);
    if (loading) return loading;
    loading = new Promise(function(ok, no) {
      var l = document.createElement("link");
      l.rel = "stylesheet";
      l.href = CSS;
      document.head.appendChild(l);
      var s = document.createElement("script");
      s.src = LIB;
      s.async = true;
      s.onload = function() {
        window.maplibregl ? ok(window.maplibregl) : no(new Error("map"));
      };
      s.onerror = function() {
        loading = null;
        no(new Error("map"));
      };
      document.head.appendChild(s);
    });
    return loading;
  }
  function dark() {
    try {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    } catch (e) {
      return false;
    }
  }
  var still = function() {
    try {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch (e) {
      return false;
    }
  }();
  var ICONS = {
    rider: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="17" r="3"/><circle cx="19" cy="17" r="3"/><path d="M8 17h8"/><path d="m5 17 4-8h5l2 4"/><path d="M13 9h4l2 5"/></svg>',
    shop: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l1.5-5h15L21 9"/><path d="M4 9v11h16V9"/><path d="M9 20v-6h6v6"/></svg>',
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/></svg>',
    me: ""
  };
  var styled = false;
  function addStyle() {
    if (styled) return;
    styled = true;
    var st = document.createElement("style");
    st.textContent = ".em-pin{width:34px;height:34px;border-radius:50%;display:grid;place-items:center;border:2px solid #fff;" + "box-shadow:0 2px 6px rgba(0,0,0,.35);color:#fff}" + ".em-pin svg{width:18px;height:18px}" + ".em-pin.em-rider{background:#ff5c00;color:#1a0e05}" + ".em-pin.em-shop{background:#fff;color:#0b0c0d;border-color:#0b0c0d}" + ".em-pin.em-home{background:#047857}" + ".em-pin.em-me{width:18px;height:18px;background:#2563eb}" + ".em-pin.em-stale{opacity:.55}" + "@media (prefers-reduced-motion: no-preference){.em-pin.em-rider.em-fresh{animation:em-beat .9s ease-out 1}" + "@keyframes em-beat{0%{transform:scale(.85)}60%{transform:scale(1.08)}100%{transform:scale(1)}}}" + ".maplibregl-ctrl-attrib{font-size:10px}";
    document.head.appendChild(st);
  }
  function create(el, opts) {
    if (!el || !canDraw()) return Promise.resolve(null);
    opts = opts || {};
    return load().then(function(gl) {
      addStyle();
      var c = opts.center || {
        lat: 12.88,
        lng: 121.77
      };
      var map;
      try {
        map = new gl.Map({
          container: el,
          style: "https://tiles.openfreemap.org/styles/" + (dark() ? "dark" : "positron"),
          center: [ c.lng, c.lat ],
          zoom: opts.zoom || 13,
          attributionControl: {
            compact: true
          },
          dragRotate: false,
          pitchWithRotate: false,
          touchPitch: false
        });
      } catch (e) {
        return null;
      }
      map.touchZoomRotate.disableRotation();
      map.once("load", function() {
        var at = el.querySelector(".maplibregl-ctrl-attrib");
        if (at) at.classList.remove("maplibregl-compact-show");
      });
      var pins = {};
      var moving = {};
      function place(kind, p) {
        if (!p || p.lat == null || p.lng == null) {
          if (pins[kind]) {
            pins[kind].remove();
            delete pins[kind];
          }
          return;
        }
        if (!pins[kind]) {
          var d = document.createElement("div");
          d.className = "em-pin em-" + kind;
          d.innerHTML = ICONS[kind] || "";
          pins[kind] = new gl.Marker({
            element: d
          }).setLngLat([ p.lng, p.lat ]).addTo(map);
          return;
        }
        var from = pins[kind].getLngLat();
        if (still || kind !== "rider") {
          pins[kind].setLngLat([ p.lng, p.lat ]);
          return;
        }
        var t0 = performance.now();
        if (moving[kind]) cancelAnimationFrame(moving[kind]);
        var el2 = pins[kind].getElement();
        el2.classList.remove("em-fresh");
        void el2.offsetWidth;
        el2.classList.add("em-fresh");
        (function step(now) {
          var k = Math.min(1, (now - t0) / 1e3), e = 1 - Math.pow(1 - k, 3);
          pins[kind].setLngLat([ from.lng + (p.lng - from.lng) * e, from.lat + (p.lat - from.lat) * e ]);
          if (k < 1) moving[kind] = requestAnimationFrame(step);
        })(t0);
      }
      function fit() {
        var ks = Object.keys(pins);
        if (!ks.length) return;
        if (ks.length === 1) {
          map.easeTo({
            center: pins[ks[0]].getLngLat(),
            zoom: 15,
            duration: still ? 0 : 600
          });
          return;
        }
        var b = new gl.LngLatBounds;
        ks.forEach(function(k) {
          b.extend(pins[k].getLngLat());
        });
        map.fitBounds(b, {
          padding: 46,
          maxZoom: 16,
          duration: still ? 0 : 600
        });
      }
      return {
        map: map,
        set: place,
        fit: fit,
        stale: function(on) {
          if (pins.rider) pins.rider.getElement().classList.toggle("em-stale", !!on);
        },
        movable: function(kind, onMove) {
          if (!pins[kind]) return;
          pins[kind].setDraggable(true);
          pins[kind].on("dragend", function() {
            var p = pins[kind].getLngLat();
            onMove({
              lat: p.lat,
              lng: p.lng
            });
          });
          map.on("click", function(e) {
            if (!pins[kind]) return;
            pins[kind].setLngLat(e.lngLat);
            onMove({
              lat: e.lngLat.lat,
              lng: e.lngLat.lng
            });
          });
        },
        resize: function() {
          try {
            map.resize();
          } catch (e) {}
        },
        remove: function() {
          try {
            map.remove();
          } catch (e) {}
        }
      };
    }).catch(function() {
      return null;
    });
  }
  function km(a, b) {
    if (!a || !b) return null;
    var R = 6371, r = function(d) {
      return d * Math.PI / 180;
    };
    var x = Math.sin(r(b.lat - a.lat) / 2) * Math.sin(r(b.lat - a.lat) / 2) + Math.cos(r(a.lat)) * Math.cos(r(b.lat)) * Math.sin(r(b.lng - a.lng) / 2) * Math.sin(r(b.lng - a.lng) / 2);
    return 2 * R * Math.asin(Math.min(1, Math.sqrt(x)));
  }
  window.EmberMap = {
    create: create,
    canDraw: canDraw,
    km: km
  };
})();