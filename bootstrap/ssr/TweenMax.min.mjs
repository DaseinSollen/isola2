/*!
 * VERSION: 2.1.2
 * DATE: 2019-03-01
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : globalThis || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
  _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(a, b, c) {
    var d = function(a2) {
      var b2, c2 = [], d2 = a2.length;
      for (b2 = 0; b2 !== d2; c2.push(a2[b2++]))
        ;
      return c2;
    }, e = function(a2, b2, c2) {
      var d2, e2, f2 = a2.cycle;
      for (d2 in f2)
        e2 = f2[d2], a2[d2] = "function" == typeof e2 ? e2(c2, b2[c2], b2) : e2[c2 % e2.length];
      delete a2.cycle;
    }, f = function(a2) {
      if ("function" == typeof a2)
        return a2;
      var b2 = "object" == typeof a2 ? a2 : { each: a2 }, c2 = b2.ease, d2 = b2.from || 0, e2 = b2.base || 0, f2 = {}, g2 = isNaN(d2), h2 = b2.axis, i2 = { center: 0.5, end: 1 }[d2] || 0;
      return function(a3, j2, k2) {
        var l2, m2, n2, o2, p2, q, r, s, t, u = (k2 || b2).length, v = f2[u];
        if (!v) {
          if (t = "auto" === b2.grid ? 0 : (b2.grid || [1 / 0])[0], !t) {
            for (r = -(1 / 0); r < (r = k2[t++].getBoundingClientRect().left) && u > t; )
              ;
            t--;
          }
          for (v = f2[u] = [], l2 = g2 ? Math.min(t, u) * i2 - 0.5 : d2 % t, m2 = g2 ? u * i2 / t - 0.5 : d2 / t | 0, r = 0, s = 1 / 0, q = 0; u > q; q++)
            n2 = q % t - l2, o2 = m2 - (q / t | 0), v[q] = p2 = h2 ? Math.abs("y" === h2 ? o2 : n2) : Math.sqrt(n2 * n2 + o2 * o2), p2 > r && (r = p2), s > p2 && (s = p2);
          v.max = r - s, v.min = s, v.v = u = b2.amount || b2.each * (t > u ? u : h2 ? "y" === h2 ? u / t : t : Math.max(t, u / t)) || 0, v.b = 0 > u ? e2 - u : e2;
        }
        return u = (v[a3] - v.min) / v.max, v.b + (c2 ? c2.getRatio(u) : u) * v.v;
      };
    }, g = function(a2, b2, d2) {
      c.call(this, a2, b2, d2), this._cycle = 0, this._yoyo = this.vars.yoyo === true || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(true), this.render = g.prototype.render;
    }, h = 1e-8, i = c._internals, j = i.isSelector, k = i.isArray, l = g.prototype = c.to({}, 0.1, {}), m = [];
    g.version = "2.1.2", l.constructor = g, l.kill()._gc = false, g.killTweensOf = g.killDelayedCallsTo = c.killTweensOf, g.getTweensOf = c.getTweensOf, g.lagSmoothing = c.lagSmoothing, g.ticker = c.ticker, g.render = c.render, g.distribute = f, l.invalidate = function() {
      return this._yoyo = this.vars.yoyo === true || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(true), c.prototype.invalidate.call(this);
    }, l.updateTo = function(a2, b2) {
      var d2, e2 = this, f2 = e2.ratio, g2 = e2.vars.immediateRender || a2.immediateRender;
      b2 && e2._startTime < e2._timeline._time && (e2._startTime = e2._timeline._time, e2._uncache(false), e2._gc ? e2._enabled(true, false) : e2._timeline.insert(e2, e2._startTime - e2._delay));
      for (d2 in a2)
        e2.vars[d2] = a2[d2];
      if (e2._initted || g2) {
        if (b2)
          e2._initted = false, g2 && e2.render(0, true, true);
        else if (e2._gc && e2._enabled(true, false), e2._notifyPluginsOfEnabled && e2._firstPT && c._onPluginEvent("_onDisable", e2), e2._time / e2._duration > 0.998) {
          var h2 = e2._totalTime;
          e2.render(0, true, false), e2._initted = false, e2.render(h2, true, false);
        } else if (e2._initted = false, e2._init(), e2._time > 0 || g2)
          for (var i2, j2 = 1 / (1 - f2), k2 = e2._firstPT; k2; )
            i2 = k2.s + k2.c, k2.c *= j2, k2.s = i2 - k2.c, k2 = k2._next;
      }
      return e2;
    }, l.render = function(a2, b2, d2) {
      this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
      var e2, f2, g2, j2, k2, l2, m2, n2, o2, p2 = this, q = p2._dirty ? p2.totalDuration() : p2._totalDuration, r = p2._time, s = p2._totalTime, t = p2._cycle, u = p2._duration, v = p2._rawPrevTime;
      if (a2 >= q - h && a2 >= 0 ? (p2._totalTime = q, p2._cycle = p2._repeat, p2._yoyo && 0 !== (1 & p2._cycle) ? (p2._time = 0, p2.ratio = p2._ease._calcEnd ? p2._ease.getRatio(0) : 0) : (p2._time = u, p2.ratio = p2._ease._calcEnd ? p2._ease.getRatio(1) : 1), p2._reversed || (e2 = true, f2 = "onComplete", d2 = d2 || p2._timeline.autoRemoveChildren), 0 === u && (p2._initted || !p2.vars.lazy || d2) && (p2._startTime === p2._timeline._duration && (a2 = 0), (0 > v || 0 >= a2 && a2 >= -h || v === h && "isPause" !== p2.data) && v !== a2 && (d2 = true, v > h && (f2 = "onReverseComplete")), p2._rawPrevTime = n2 = !b2 || a2 || v === a2 ? a2 : h)) : h > a2 ? (p2._totalTime = p2._time = p2._cycle = 0, p2.ratio = p2._ease._calcEnd ? p2._ease.getRatio(0) : 0, (0 !== s || 0 === u && v > 0) && (f2 = "onReverseComplete", e2 = p2._reversed), a2 > -h ? a2 = 0 : 0 > a2 && (p2._active = false, 0 === u && (p2._initted || !p2.vars.lazy || d2) && (v >= 0 && (d2 = true), p2._rawPrevTime = n2 = !b2 || a2 || v === a2 ? a2 : h)), p2._initted || (d2 = true)) : (p2._totalTime = p2._time = a2, 0 !== p2._repeat && (j2 = u + p2._repeatDelay, p2._cycle = p2._totalTime / j2 >> 0, 0 !== p2._cycle && p2._cycle === p2._totalTime / j2 && a2 >= s && p2._cycle--, p2._time = p2._totalTime - p2._cycle * j2, p2._yoyo && 0 !== (1 & p2._cycle) && (p2._time = u - p2._time, o2 = p2._yoyoEase || p2.vars.yoyoEase, o2 && (p2._yoyoEase || (o2 !== true || p2._initted ? p2._yoyoEase = o2 = o2 === true ? p2._ease : o2 instanceof Ease ? o2 : Ease.map[o2] : (o2 = p2.vars.ease, p2._yoyoEase = o2 = o2 ? o2 instanceof Ease ? o2 : "function" == typeof o2 ? new Ease(o2, p2.vars.easeParams) : Ease.map[o2] || c.defaultEase : c.defaultEase)), p2.ratio = o2 ? 1 - o2.getRatio((u - p2._time) / u) : 0)), p2._time > u ? p2._time = u : p2._time < 0 && (p2._time = 0)), p2._easeType && !o2 ? (k2 = p2._time / u, l2 = p2._easeType, m2 = p2._easePower, (1 === l2 || 3 === l2 && k2 >= 0.5) && (k2 = 1 - k2), 3 === l2 && (k2 *= 2), 1 === m2 ? k2 *= k2 : 2 === m2 ? k2 *= k2 * k2 : 3 === m2 ? k2 *= k2 * k2 * k2 : 4 === m2 && (k2 *= k2 * k2 * k2 * k2), p2.ratio = 1 === l2 ? 1 - k2 : 2 === l2 ? k2 : p2._time / u < 0.5 ? k2 / 2 : 1 - k2 / 2) : o2 || (p2.ratio = p2._ease.getRatio(p2._time / u))), r === p2._time && !d2 && t === p2._cycle)
        return void (s !== p2._totalTime && p2._onUpdate && (b2 || p2._callback("onUpdate")));
      if (!p2._initted) {
        if (p2._init(), !p2._initted || p2._gc)
          return;
        if (!d2 && p2._firstPT && (p2.vars.lazy !== false && p2._duration || p2.vars.lazy && !p2._duration))
          return p2._time = r, p2._totalTime = s, p2._rawPrevTime = v, p2._cycle = t, i.lazyTweens.push(p2), void (p2._lazy = [a2, b2]);
        !p2._time || e2 || o2 ? e2 && this._ease._calcEnd && !o2 && (p2.ratio = p2._ease.getRatio(0 === p2._time ? 0 : 1)) : p2.ratio = p2._ease.getRatio(p2._time / u);
      }
      for (p2._lazy !== false && (p2._lazy = false), p2._active || !p2._paused && p2._time !== r && a2 >= 0 && (p2._active = true), 0 === s && (2 === p2._initted && a2 > 0 && p2._init(), p2._startAt && (a2 >= 0 ? p2._startAt.render(a2, true, d2) : f2 || (f2 = "_dummyGS")), p2.vars.onStart && (0 !== p2._totalTime || 0 === u) && (b2 || p2._callback("onStart"))), g2 = p2._firstPT; g2; )
        g2.f ? g2.t[g2.p](g2.c * p2.ratio + g2.s) : g2.t[g2.p] = g2.c * p2.ratio + g2.s, g2 = g2._next;
      p2._onUpdate && (0 > a2 && p2._startAt && p2._startTime && p2._startAt.render(a2, true, d2), b2 || (p2._totalTime !== s || f2) && p2._callback("onUpdate")), p2._cycle !== t && (b2 || p2._gc || p2.vars.onRepeat && p2._callback("onRepeat")), f2 && (!p2._gc || d2) && (0 > a2 && p2._startAt && !p2._onUpdate && p2._startTime && p2._startAt.render(a2, true, d2), e2 && (p2._timeline.autoRemoveChildren && p2._enabled(false, false), p2._active = false), !b2 && p2.vars[f2] && p2._callback(f2), 0 === u && p2._rawPrevTime === h && n2 !== h && (p2._rawPrevTime = 0));
    }, g.to = function(a2, b2, c2) {
      return new g(a2, b2, c2);
    }, g.from = function(a2, b2, c2) {
      return c2.runBackwards = true, c2.immediateRender = 0 != c2.immediateRender, new g(a2, b2, c2);
    }, g.fromTo = function(a2, b2, c2, d2) {
      return d2.startAt = c2, d2.immediateRender = 0 != d2.immediateRender && 0 != c2.immediateRender, new g(a2, b2, d2);
    }, g.staggerTo = g.allTo = function(a2, b2, h2, i2, l2, n2, o2) {
      var p2, q, r, s, t = [], u = f(h2.stagger || i2), v = h2.cycle, w = (h2.startAt || m).cycle;
      for (k(a2) || ("string" == typeof a2 && (a2 = c.selector(a2) || a2), j(a2) && (a2 = d(a2))), a2 = a2 || [], p2 = a2.length - 1, r = 0; p2 >= r; r++) {
        q = {};
        for (s in h2)
          q[s] = h2[s];
        if (v && (e(q, a2, r), null != q.duration && (b2 = q.duration, delete q.duration)), w) {
          w = q.startAt = {};
          for (s in h2.startAt)
            w[s] = h2.startAt[s];
          e(q.startAt, a2, r);
        }
        q.delay = u(r, a2[r], a2) + (q.delay || 0), r === p2 && l2 && (q.onComplete = function() {
          h2.onComplete && h2.onComplete.apply(h2.onCompleteScope || this, arguments), l2.apply(o2 || h2.callbackScope || this, n2 || m);
        }), t[r] = new g(a2[r], b2, q);
      }
      return t;
    }, g.staggerFrom = g.allFrom = function(a2, b2, c2, d2, e2, f2, h2) {
      return c2.runBackwards = true, c2.immediateRender = 0 != c2.immediateRender, g.staggerTo(a2, b2, c2, d2, e2, f2, h2);
    }, g.staggerFromTo = g.allFromTo = function(a2, b2, c2, d2, e2, f2, h2, i2) {
      return d2.startAt = c2, d2.immediateRender = 0 != d2.immediateRender && 0 != c2.immediateRender, g.staggerTo(a2, b2, d2, e2, f2, h2, i2);
    }, g.delayedCall = function(a2, b2, c2, d2, e2) {
      return new g(b2, 0, { delay: a2, onComplete: b2, onCompleteParams: c2, callbackScope: d2, onReverseComplete: b2, onReverseCompleteParams: c2, immediateRender: false, useFrames: e2, overwrite: 0 });
    }, g.set = function(a2, b2) {
      return new g(a2, 0, b2);
    }, g.isTweening = function(a2) {
      return c.getTweensOf(a2, true).length > 0;
    };
    var n = function(a2, b2) {
      for (var d2 = [], e2 = 0, f2 = a2._first; f2; )
        f2 instanceof c ? d2[e2++] = f2 : (b2 && (d2[e2++] = f2), d2 = d2.concat(n(f2, b2)), e2 = d2.length), f2 = f2._next;
      return d2;
    }, o = g.getAllTweens = function(b2) {
      return n(a._rootTimeline, b2).concat(n(a._rootFramesTimeline, b2));
    };
    g.killAll = function(a2, c2, d2, e2) {
      null == c2 && (c2 = true), null == d2 && (d2 = true);
      var f2, g2, h2, i2 = o(0 != e2), j2 = i2.length, k2 = c2 && d2 && e2;
      for (h2 = 0; j2 > h2; h2++)
        g2 = i2[h2], (k2 || g2 instanceof b || (f2 = g2.target === g2.vars.onComplete) && d2 || c2 && !f2) && (a2 ? g2.totalTime(g2._reversed ? 0 : g2.totalDuration()) : g2._enabled(false, false));
    }, g.killChildTweensOf = function(a2, b2) {
      if (null != a2) {
        var e2, f2, h2, l2, m2, n2 = i.tweenLookup;
        if ("string" == typeof a2 && (a2 = c.selector(a2) || a2), j(a2) && (a2 = d(a2)), k(a2))
          for (l2 = a2.length; --l2 > -1; )
            g.killChildTweensOf(a2[l2], b2);
        else {
          e2 = [];
          for (h2 in n2)
            for (f2 = n2[h2].target.parentNode; f2; )
              f2 === a2 && (e2 = e2.concat(n2[h2].tweens)), f2 = f2.parentNode;
          for (m2 = e2.length, l2 = 0; m2 > l2; l2++)
            b2 && e2[l2].totalTime(e2[l2].totalDuration()), e2[l2]._enabled(false, false);
        }
      }
    };
    var p = function(a2, c2, d2, e2) {
      c2 = c2 !== false, d2 = d2 !== false, e2 = e2 !== false;
      for (var f2, g2, h2 = o(e2), i2 = c2 && d2 && e2, j2 = h2.length; --j2 > -1; )
        g2 = h2[j2], (i2 || g2 instanceof b || (f2 = g2.target === g2.vars.onComplete) && d2 || c2 && !f2) && g2.paused(a2);
    };
    return g.pauseAll = function(a2, b2, c2) {
      p(true, a2, b2, c2);
    }, g.resumeAll = function(a2, b2, c2) {
      p(false, a2, b2, c2);
    }, g.globalTimeScale = function(b2) {
      var d2 = a._rootTimeline, e2 = c.ticker.time;
      return arguments.length ? (b2 = b2 || h, d2._startTime = e2 - (e2 - d2._startTime) * d2._timeScale / b2, d2 = a._rootFramesTimeline, e2 = c.ticker.frame, d2._startTime = e2 - (e2 - d2._startTime) * d2._timeScale / b2, d2._timeScale = a._rootTimeline._timeScale = b2, b2) : d2._timeScale;
    }, l.progress = function(a2, b2) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a2 : a2) + this._cycle * (this._duration + this._repeatDelay), b2) : this._time / this.duration();
    }, l.totalProgress = function(a2, b2) {
      return arguments.length ? this.totalTime(this.totalDuration() * a2, b2) : this._totalTime / this.totalDuration();
    }, l.time = function(a2, b2) {
      if (!arguments.length)
        return this._time;
      this._dirty && this.totalDuration();
      var c2 = this._duration, d2 = this._cycle, e2 = d2 * (c2 + this._repeatDelay);
      return a2 > c2 && (a2 = c2), this.totalTime(this._yoyo && 1 & d2 ? c2 - a2 + e2 : this._repeat ? a2 + e2 : a2, b2);
    }, l.duration = function(b2) {
      return arguments.length ? a.prototype.duration.call(this, b2) : this._duration;
    }, l.totalDuration = function(a2) {
      return arguments.length ? -1 === this._repeat ? this : this.duration((a2 - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = false), this._totalDuration);
    }, l.repeat = function(a2) {
      return arguments.length ? (this._repeat = a2, this._uncache(true)) : this._repeat;
    }, l.repeatDelay = function(a2) {
      return arguments.length ? (this._repeatDelay = a2, this._uncache(true)) : this._repeatDelay;
    }, l.yoyo = function(a2) {
      return arguments.length ? (this._yoyo = a2, this) : this._yoyo;
    }, g;
  }, true), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(a, b, c) {
    var d = function(a2) {
      b.call(this, a2);
      var c2, d2, e2 = this, f2 = e2.vars;
      e2._labels = {}, e2.autoRemoveChildren = !!f2.autoRemoveChildren, e2.smoothChildTiming = !!f2.smoothChildTiming, e2._sortChildren = true, e2._onUpdate = f2.onUpdate;
      for (d2 in f2)
        c2 = f2[d2], i(c2) && -1 !== c2.join("").indexOf("{self}") && (f2[d2] = e2._swapSelfInParams(c2));
      i(f2.tweens) && e2.add(f2.tweens, 0, f2.align, f2.stagger);
    }, e = 1e-8, f = c._internals, g = d._internals = {}, h = f.isSelector, i = f.isArray, j = f.lazyTweens, k = f.lazyRender, l = _gsScope._gsDefine.globals, m = function(a2) {
      var b2, c2 = {};
      for (b2 in a2)
        c2[b2] = a2[b2];
      return c2;
    }, n = function(a2, b2, c2) {
      var d2, e2, f2 = a2.cycle;
      for (d2 in f2)
        e2 = f2[d2], a2[d2] = "function" == typeof e2 ? e2(c2, b2[c2], b2) : e2[c2 % e2.length];
      delete a2.cycle;
    }, o = g.pauseCallback = function() {
    }, p = function(a2) {
      var b2, c2 = [], d2 = a2.length;
      for (b2 = 0; b2 !== d2; c2.push(a2[b2++]))
        ;
      return c2;
    }, q = function(a2, b2, c2, d2) {
      var e2 = "immediateRender";
      return e2 in b2 || (b2[e2] = !(c2 && c2[e2] === false || d2)), b2;
    }, r = function(a2) {
      if ("function" == typeof a2)
        return a2;
      var b2 = "object" == typeof a2 ? a2 : { each: a2 }, c2 = b2.ease, d2 = b2.from || 0, e2 = b2.base || 0, f2 = {}, g2 = isNaN(d2), h2 = b2.axis, i2 = { center: 0.5, end: 1 }[d2] || 0;
      return function(a3, j2, k2) {
        var l2, m2, n2, o2, p2, q2, r2, s2, t, u = (k2 || b2).length, v = f2[u];
        if (!v) {
          if (t = "auto" === b2.grid ? 0 : (b2.grid || [1 / 0])[0], !t) {
            for (r2 = -(1 / 0); r2 < (r2 = k2[t++].getBoundingClientRect().left) && u > t; )
              ;
            t--;
          }
          for (v = f2[u] = [], l2 = g2 ? Math.min(t, u) * i2 - 0.5 : d2 % t, m2 = g2 ? u * i2 / t - 0.5 : d2 / t | 0, r2 = 0, s2 = 1 / 0, q2 = 0; u > q2; q2++)
            n2 = q2 % t - l2, o2 = m2 - (q2 / t | 0), v[q2] = p2 = h2 ? Math.abs("y" === h2 ? o2 : n2) : Math.sqrt(n2 * n2 + o2 * o2), p2 > r2 && (r2 = p2), s2 > p2 && (s2 = p2);
          v.max = r2 - s2, v.min = s2, v.v = u = b2.amount || b2.each * (t > u ? u : h2 ? "y" === h2 ? u / t : t : Math.max(t, u / t)) || 0, v.b = 0 > u ? e2 - u : e2;
        }
        return u = (v[a3] - v.min) / v.max, v.b + (c2 ? c2.getRatio(u) : u) * v.v;
      };
    }, s = d.prototype = new b();
    return d.version = "2.1.2", d.distribute = r, s.constructor = d, s.kill()._gc = s._forcingPlayhead = s._hasPause = false, s.to = function(a2, b2, d2, e2) {
      var f2 = d2.repeat && l.TweenMax || c;
      return b2 ? this.add(new f2(a2, b2, d2), e2) : this.set(a2, d2, e2);
    }, s.from = function(a2, b2, d2, e2) {
      return this.add((d2.repeat && l.TweenMax || c).from(a2, b2, q(this, d2)), e2);
    }, s.fromTo = function(a2, b2, d2, e2, f2) {
      var g2 = e2.repeat && l.TweenMax || c;
      return e2 = q(this, e2, d2), b2 ? this.add(g2.fromTo(a2, b2, d2, e2), f2) : this.set(a2, e2, f2);
    }, s.staggerTo = function(a2, b2, e2, f2, g2, i2, j2, k2) {
      var l2, o2, q2 = new d({ onComplete: i2, onCompleteParams: j2, callbackScope: k2, smoothChildTiming: this.smoothChildTiming }), s2 = r(e2.stagger || f2), t = e2.startAt, u = e2.cycle;
      for ("string" == typeof a2 && (a2 = c.selector(a2) || a2), a2 = a2 || [], h(a2) && (a2 = p(a2)), o2 = 0; o2 < a2.length; o2++)
        l2 = m(e2), t && (l2.startAt = m(t), t.cycle && n(l2.startAt, a2, o2)), u && (n(l2, a2, o2), null != l2.duration && (b2 = l2.duration, delete l2.duration)), q2.to(a2[o2], b2, l2, s2(o2, a2[o2], a2));
      return this.add(q2, g2);
    }, s.staggerFrom = function(a2, b2, c2, d2, e2, f2, g2, h2) {
      return c2.runBackwards = true, this.staggerTo(a2, b2, q(this, c2), d2, e2, f2, g2, h2);
    }, s.staggerFromTo = function(a2, b2, c2, d2, e2, f2, g2, h2, i2) {
      return d2.startAt = c2, this.staggerTo(a2, b2, q(this, d2, c2), e2, f2, g2, h2, i2);
    }, s.call = function(a2, b2, d2, e2) {
      return this.add(c.delayedCall(0, a2, b2, d2), e2);
    }, s.set = function(a2, b2, d2) {
      return this.add(new c(a2, 0, q(this, b2, null, true)), d2);
    }, d.exportRoot = function(a2, b2) {
      a2 = a2 || {}, null == a2.smoothChildTiming && (a2.smoothChildTiming = true);
      var e2, f2, g2, h2, i2 = new d(a2), j2 = i2._timeline;
      for (null == b2 && (b2 = true), j2._remove(i2, true), i2._startTime = 0, i2._rawPrevTime = i2._time = i2._totalTime = j2._time, g2 = j2._first; g2; )
        h2 = g2._next, b2 && g2 instanceof c && g2.target === g2.vars.onComplete || (f2 = g2._startTime - g2._delay, 0 > f2 && (e2 = 1), i2.add(g2, f2)), g2 = h2;
      return j2.add(i2, 0), e2 && i2.totalDuration(), i2;
    }, s.add = function(e2, f2, g2, h2) {
      var j2, k2, l2, m2, n2, o2, p2 = this;
      if ("number" != typeof f2 && (f2 = p2._parseTimeOrLabel(f2, 0, true, e2)), !(e2 instanceof a)) {
        if (e2 instanceof Array || e2 && e2.push && i(e2)) {
          for (g2 = g2 || "normal", h2 = h2 || 0, j2 = f2, k2 = e2.length, l2 = 0; k2 > l2; l2++)
            i(m2 = e2[l2]) && (m2 = new d({ tweens: m2 })), p2.add(m2, j2), "string" != typeof m2 && "function" != typeof m2 && ("sequence" === g2 ? j2 = m2._startTime + m2.totalDuration() / m2._timeScale : "start" === g2 && (m2._startTime -= m2.delay())), j2 += h2;
          return p2._uncache(true);
        }
        if ("string" == typeof e2)
          return p2.addLabel(e2, f2);
        if ("function" != typeof e2)
          throw "Cannot add " + e2 + " into the timeline; it is not a tween, timeline, function, or string.";
        e2 = c.delayedCall(0, e2);
      }
      if (b.prototype.add.call(p2, e2, f2), (e2._time || !e2._duration && e2._initted) && (j2 = (p2.rawTime() - e2._startTime) * e2._timeScale, (!e2._duration || Math.abs(Math.max(0, Math.min(e2.totalDuration(), j2))) - e2._totalTime > 1e-5) && e2.render(j2, false, false)), (p2._gc || p2._time === p2._duration) && !p2._paused && p2._duration < p2.duration())
        for (n2 = p2, o2 = n2.rawTime() > e2._startTime; n2._timeline; )
          o2 && n2._timeline.smoothChildTiming ? n2.totalTime(n2._totalTime, true) : n2._gc && n2._enabled(true, false), n2 = n2._timeline;
      return p2;
    }, s.remove = function(b2) {
      if (b2 instanceof a) {
        this._remove(b2, false);
        var c2 = b2._timeline = b2.vars.useFrames ? a._rootFramesTimeline : a._rootTimeline;
        return b2._startTime = (b2._paused ? b2._pauseTime : c2._time) - (b2._reversed ? b2.totalDuration() - b2._totalTime : b2._totalTime) / b2._timeScale, this;
      }
      if (b2 instanceof Array || b2 && b2.push && i(b2)) {
        for (var d2 = b2.length; --d2 > -1; )
          this.remove(b2[d2]);
        return this;
      }
      return "string" == typeof b2 ? this.removeLabel(b2) : this.kill(null, b2);
    }, s._remove = function(a2, c2) {
      b.prototype._remove.call(this, a2, c2);
      var d2 = this._last;
      return d2 ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this;
    }, s.append = function(a2, b2) {
      return this.add(a2, this._parseTimeOrLabel(null, b2, true, a2));
    }, s.insert = s.insertMultiple = function(a2, b2, c2, d2) {
      return this.add(a2, b2 || 0, c2, d2);
    }, s.appendMultiple = function(a2, b2, c2, d2) {
      return this.add(a2, this._parseTimeOrLabel(null, b2, true, a2), c2, d2);
    }, s.addLabel = function(a2, b2) {
      return this._labels[a2] = this._parseTimeOrLabel(b2), this;
    }, s.addPause = function(a2, b2, d2, e2) {
      var f2 = c.delayedCall(0, o, d2, e2 || this);
      return f2.vars.onComplete = f2.vars.onReverseComplete = b2, f2.data = "isPause", this._hasPause = true, this.add(f2, a2);
    }, s.removeLabel = function(a2) {
      return delete this._labels[a2], this;
    }, s.getLabelTime = function(a2) {
      return null != this._labels[a2] ? this._labels[a2] : -1;
    }, s._parseTimeOrLabel = function(b2, c2, d2, e2) {
      var f2, g2;
      if (e2 instanceof a && e2.timeline === this)
        this.remove(e2);
      else if (e2 && (e2 instanceof Array || e2.push && i(e2)))
        for (g2 = e2.length; --g2 > -1; )
          e2[g2] instanceof a && e2[g2].timeline === this && this.remove(e2[g2]);
      if (f2 = "number" != typeof b2 || c2 ? this.duration() > 99999999999 ? this.recent().endTime(false) : this._duration : 0, "string" == typeof c2)
        return this._parseTimeOrLabel(c2, d2 && "number" == typeof b2 && null == this._labels[c2] ? b2 - f2 : 0, d2);
      if (c2 = c2 || 0, "string" != typeof b2 || !isNaN(b2) && null == this._labels[b2])
        null == b2 && (b2 = f2);
      else {
        if (g2 = b2.indexOf("="), -1 === g2)
          return null == this._labels[b2] ? d2 ? this._labels[b2] = f2 + c2 : c2 : this._labels[b2] + c2;
        c2 = parseInt(b2.charAt(g2 - 1) + "1", 10) * Number(b2.substr(g2 + 1)), b2 = g2 > 1 ? this._parseTimeOrLabel(b2.substr(0, g2 - 1), 0, d2) : f2;
      }
      return Number(b2) + c2;
    }, s.seek = function(a2, b2) {
      return this.totalTime("number" == typeof a2 ? a2 : this._parseTimeOrLabel(a2), b2 !== false);
    }, s.stop = function() {
      return this.paused(true);
    }, s.gotoAndPlay = function(a2, b2) {
      return this.play(a2, b2);
    }, s.gotoAndStop = function(a2, b2) {
      return this.pause(a2, b2);
    }, s.render = function(a2, b2, c2) {
      this._gc && this._enabled(true, false);
      var d2, f2, g2, h2, i2, l2, m2, n2, o2 = this, p2 = o2._time, q2 = o2._dirty ? o2.totalDuration() : o2._totalDuration, r2 = o2._startTime, s2 = o2._timeScale, t = o2._paused;
      if (p2 !== o2._time && (a2 += o2._time - p2), a2 >= q2 - e && a2 >= 0)
        o2._totalTime = o2._time = q2, o2._reversed || o2._hasPausedChild() || (f2 = true, h2 = "onComplete", i2 = !!o2._timeline.autoRemoveChildren, 0 === o2._duration && (0 >= a2 && a2 >= -e || o2._rawPrevTime < 0 || o2._rawPrevTime === e) && o2._rawPrevTime !== a2 && o2._first && (i2 = true, o2._rawPrevTime > e && (h2 = "onReverseComplete"))), o2._rawPrevTime = o2._duration || !b2 || a2 || o2._rawPrevTime === a2 ? a2 : e, a2 = q2 + 1e-4;
      else if (e > a2)
        if (o2._totalTime = o2._time = 0, a2 > -e && (a2 = 0), (0 !== p2 || 0 === o2._duration && o2._rawPrevTime !== e && (o2._rawPrevTime > 0 || 0 > a2 && o2._rawPrevTime >= 0)) && (h2 = "onReverseComplete", f2 = o2._reversed), 0 > a2)
          o2._active = false, o2._timeline.autoRemoveChildren && o2._reversed ? (i2 = f2 = true, h2 = "onReverseComplete") : o2._rawPrevTime >= 0 && o2._first && (i2 = true), o2._rawPrevTime = a2;
        else {
          if (o2._rawPrevTime = o2._duration || !b2 || a2 || o2._rawPrevTime === a2 ? a2 : e, 0 === a2 && f2)
            for (d2 = o2._first; d2 && 0 === d2._startTime; )
              d2._duration || (f2 = false), d2 = d2._next;
          a2 = 0, o2._initted || (i2 = true);
        }
      else {
        if (o2._hasPause && !o2._forcingPlayhead && !b2) {
          if (a2 >= p2)
            for (d2 = o2._first; d2 && d2._startTime <= a2 && !l2; )
              d2._duration || "isPause" !== d2.data || d2.ratio || 0 === d2._startTime && 0 === o2._rawPrevTime || (l2 = d2), d2 = d2._next;
          else
            for (d2 = o2._last; d2 && d2._startTime >= a2 && !l2; )
              d2._duration || "isPause" === d2.data && d2._rawPrevTime > 0 && (l2 = d2), d2 = d2._prev;
          l2 && (o2._time = o2._totalTime = a2 = l2._startTime, n2 = o2._startTime + a2 / o2._timeScale);
        }
        o2._totalTime = o2._time = o2._rawPrevTime = a2;
      }
      if (o2._time !== p2 && o2._first || c2 || i2 || l2) {
        if (o2._initted || (o2._initted = true), o2._active || !o2._paused && o2._time !== p2 && a2 > 0 && (o2._active = true), 0 === p2 && o2.vars.onStart && (0 === o2._time && o2._duration || b2 || o2._callback("onStart")), m2 = o2._time, m2 >= p2)
          for (d2 = o2._first; d2 && (g2 = d2._next, m2 === o2._time && (!o2._paused || t)); )
            (d2._active || d2._startTime <= m2 && !d2._paused && !d2._gc) && (l2 === d2 && (o2.pause(), o2._pauseTime = n2), d2._reversed ? d2.render((d2._dirty ? d2.totalDuration() : d2._totalDuration) - (a2 - d2._startTime) * d2._timeScale, b2, c2) : d2.render((a2 - d2._startTime) * d2._timeScale, b2, c2)), d2 = g2;
        else
          for (d2 = o2._last; d2 && (g2 = d2._prev, m2 === o2._time && (!o2._paused || t)); ) {
            if (d2._active || d2._startTime <= p2 && !d2._paused && !d2._gc) {
              if (l2 === d2) {
                for (l2 = d2._prev; l2 && l2.endTime() > o2._time; )
                  l2.render(l2._reversed ? l2.totalDuration() - (a2 - l2._startTime) * l2._timeScale : (a2 - l2._startTime) * l2._timeScale, b2, c2), l2 = l2._prev;
                l2 = null, o2.pause(), o2._pauseTime = n2;
              }
              d2._reversed ? d2.render((d2._dirty ? d2.totalDuration() : d2._totalDuration) - (a2 - d2._startTime) * d2._timeScale, b2, c2) : d2.render((a2 - d2._startTime) * d2._timeScale, b2, c2);
            }
            d2 = g2;
          }
        o2._onUpdate && (b2 || (j.length && k(), o2._callback("onUpdate"))), h2 && (o2._gc || (r2 === o2._startTime || s2 !== o2._timeScale) && (0 === o2._time || q2 >= o2.totalDuration()) && (f2 && (j.length && k(), o2._timeline.autoRemoveChildren && o2._enabled(false, false), o2._active = false), !b2 && o2.vars[h2] && o2._callback(h2)));
      }
    }, s._hasPausedChild = function() {
      for (var a2 = this._first; a2; ) {
        if (a2._paused || a2 instanceof d && a2._hasPausedChild())
          return true;
        a2 = a2._next;
      }
      return false;
    }, s.getChildren = function(a2, b2, d2, e2) {
      e2 = e2 || -9999999999;
      for (var f2 = [], g2 = this._first, h2 = 0; g2; )
        g2._startTime < e2 || (g2 instanceof c ? b2 !== false && (f2[h2++] = g2) : (d2 !== false && (f2[h2++] = g2), a2 !== false && (f2 = f2.concat(g2.getChildren(true, b2, d2)), h2 = f2.length))), g2 = g2._next;
      return f2;
    }, s.getTweensOf = function(a2, b2) {
      var d2, e2, f2 = this._gc, g2 = [], h2 = 0;
      for (f2 && this._enabled(true, true), d2 = c.getTweensOf(a2), e2 = d2.length; --e2 > -1; )
        (d2[e2].timeline === this || b2 && this._contains(d2[e2])) && (g2[h2++] = d2[e2]);
      return f2 && this._enabled(false, true), g2;
    }, s.recent = function() {
      return this._recent;
    }, s._contains = function(a2) {
      for (var b2 = a2.timeline; b2; ) {
        if (b2 === this)
          return true;
        b2 = b2.timeline;
      }
      return false;
    }, s.shiftChildren = function(a2, b2, c2) {
      c2 = c2 || 0;
      for (var d2, e2 = this._first, f2 = this._labels; e2; )
        e2._startTime >= c2 && (e2._startTime += a2), e2 = e2._next;
      if (b2)
        for (d2 in f2)
          f2[d2] >= c2 && (f2[d2] += a2);
      return this._uncache(true);
    }, s._kill = function(a2, b2) {
      if (!a2 && !b2)
        return this._enabled(false, false);
      for (var c2 = b2 ? this.getTweensOf(b2) : this.getChildren(true, true, false), d2 = c2.length, e2 = false; --d2 > -1; )
        c2[d2]._kill(a2, b2) && (e2 = true);
      return e2;
    }, s.clear = function(a2) {
      var b2 = this.getChildren(false, true, true), c2 = b2.length;
      for (this._time = this._totalTime = 0; --c2 > -1; )
        b2[c2]._enabled(false, false);
      return a2 !== false && (this._labels = {}), this._uncache(true);
    }, s.invalidate = function() {
      for (var b2 = this._first; b2; )
        b2.invalidate(), b2 = b2._next;
      return a.prototype.invalidate.call(this);
    }, s._enabled = function(a2, c2) {
      if (a2 === this._gc)
        for (var d2 = this._first; d2; )
          d2._enabled(a2, true), d2 = d2._next;
      return b.prototype._enabled.call(this, a2, c2);
    }, s.totalTime = function(b2, c2, d2) {
      this._forcingPlayhead = true;
      var e2 = a.prototype.totalTime.apply(this, arguments);
      return this._forcingPlayhead = false, e2;
    }, s.duration = function(a2) {
      return arguments.length ? (0 !== this.duration() && 0 !== a2 && this.timeScale(this._duration / a2), this) : (this._dirty && this.totalDuration(), this._duration);
    }, s.totalDuration = function(a2) {
      if (!arguments.length) {
        if (this._dirty) {
          for (var b2, c2, d2 = 0, e2 = this, f2 = e2._last, g2 = 999999999999; f2; )
            b2 = f2._prev, f2._dirty && f2.totalDuration(), f2._startTime > g2 && e2._sortChildren && !f2._paused && !e2._calculatingDuration ? (e2._calculatingDuration = 1, e2.add(f2, f2._startTime - f2._delay), e2._calculatingDuration = 0) : g2 = f2._startTime, f2._startTime < 0 && !f2._paused && (d2 -= f2._startTime, e2._timeline.smoothChildTiming && (e2._startTime += f2._startTime / e2._timeScale, e2._time -= f2._startTime, e2._totalTime -= f2._startTime, e2._rawPrevTime -= f2._startTime), e2.shiftChildren(-f2._startTime, false, -9999999999), g2 = 0), c2 = f2._startTime + f2._totalDuration / f2._timeScale, c2 > d2 && (d2 = c2), f2 = b2;
          e2._duration = e2._totalDuration = d2, e2._dirty = false;
        }
        return this._totalDuration;
      }
      return a2 && this.totalDuration() ? this.timeScale(this._totalDuration / a2) : this;
    }, s.paused = function(b2) {
      if (b2 === false && this._paused)
        for (var c2 = this._first; c2; )
          c2._startTime === this._time && "isPause" === c2.data && (c2._rawPrevTime = 0), c2 = c2._next;
      return a.prototype.paused.apply(this, arguments);
    }, s.usesFrames = function() {
      for (var b2 = this._timeline; b2._timeline; )
        b2 = b2._timeline;
      return b2 === a._rootFramesTimeline;
    }, s.rawTime = function(a2) {
      return a2 && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(a2) - this._startTime) * this._timeScale;
    }, d;
  }, true), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(a, b, c) {
    var d = function(b2) {
      a.call(this, b2), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !!this.vars.yoyo, this._dirty = true;
    }, e = 1e-8, f = b._internals, g = f.lazyTweens, h = f.lazyRender, i = _gsScope._gsDefine.globals, j = new c(null, null, 1, 0), k = d.prototype = new a();
    return k.constructor = d, k.kill()._gc = false, d.version = "2.1.2", k.invalidate = function() {
      return this._yoyo = !!this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(true), a.prototype.invalidate.call(this);
    }, k.addCallback = function(a2, c2, d2, e2) {
      return this.add(b.delayedCall(0, a2, d2, e2), c2);
    }, k.removeCallback = function(a2, b2) {
      if (a2)
        if (null == b2)
          this._kill(null, a2);
        else
          for (var c2 = this.getTweensOf(a2, false), d2 = c2.length, e2 = this._parseTimeOrLabel(b2); --d2 > -1; )
            c2[d2]._startTime === e2 && c2[d2]._enabled(false, false);
      return this;
    }, k.removePause = function(b2) {
      return this.removeCallback(a._internals.pauseCallback, b2);
    }, k.tweenTo = function(a2, c2) {
      c2 = c2 || {};
      var d2, e2, f2, g2 = { ease: j, useFrames: this.usesFrames(), immediateRender: false, lazy: false }, h2 = c2.repeat && i.TweenMax || b;
      for (e2 in c2)
        g2[e2] = c2[e2];
      return g2.time = this._parseTimeOrLabel(a2), d2 = Math.abs(Number(g2.time) - this._time) / this._timeScale || 1e-3, f2 = new h2(this, d2, g2), g2.onStart = function() {
        f2.target.paused(true), f2.vars.time === f2.target.time() || d2 !== f2.duration() || f2.isFromTo || f2.duration(Math.abs(f2.vars.time - f2.target.time()) / f2.target._timeScale).render(f2.time(), true, true), c2.onStart && c2.onStart.apply(c2.onStartScope || c2.callbackScope || f2, c2.onStartParams || []);
      }, f2;
    }, k.tweenFromTo = function(a2, b2, c2) {
      c2 = c2 || {}, a2 = this._parseTimeOrLabel(a2), c2.startAt = { onComplete: this.seek, onCompleteParams: [a2], callbackScope: this }, c2.immediateRender = c2.immediateRender !== false;
      var d2 = this.tweenTo(b2, c2);
      return d2.isFromTo = 1, d2.duration(Math.abs(d2.vars.time - a2) / this._timeScale || 1e-3);
    }, k.render = function(a2, b2, c2) {
      this._gc && this._enabled(true, false);
      var d2, f2, i2, j2, k2, l, m, n, o, p = this, q = p._time, r = p._dirty ? p.totalDuration() : p._totalDuration, s = p._duration, t = p._totalTime, u = p._startTime, v = p._timeScale, w = p._rawPrevTime, x = p._paused, y = p._cycle;
      if (q !== p._time && (a2 += p._time - q), a2 >= r - e && a2 >= 0)
        p._locked || (p._totalTime = r, p._cycle = p._repeat), p._reversed || p._hasPausedChild() || (f2 = true, j2 = "onComplete", k2 = !!p._timeline.autoRemoveChildren, 0 === p._duration && (0 >= a2 && a2 >= -e || 0 > w || w === e) && w !== a2 && p._first && (k2 = true, w > e && (j2 = "onReverseComplete"))), p._rawPrevTime = p._duration || !b2 || a2 || p._rawPrevTime === a2 ? a2 : e, p._yoyo && 1 & p._cycle ? p._time = a2 = 0 : (p._time = s, a2 = s + 1e-4);
      else if (e > a2)
        if (p._locked || (p._totalTime = p._cycle = 0), p._time = 0, a2 > -e && (a2 = 0), (0 !== q || 0 === s && w !== e && (w > 0 || 0 > a2 && w >= 0) && !p._locked) && (j2 = "onReverseComplete", f2 = p._reversed), 0 > a2)
          p._active = false, p._timeline.autoRemoveChildren && p._reversed ? (k2 = f2 = true, j2 = "onReverseComplete") : w >= 0 && p._first && (k2 = true), p._rawPrevTime = a2;
        else {
          if (p._rawPrevTime = s || !b2 || a2 || p._rawPrevTime === a2 ? a2 : e, 0 === a2 && f2)
            for (d2 = p._first; d2 && 0 === d2._startTime; )
              d2._duration || (f2 = false), d2 = d2._next;
          a2 = 0, p._initted || (k2 = true);
        }
      else if (0 === s && 0 > w && (k2 = true), p._time = p._rawPrevTime = a2, p._locked || (p._totalTime = a2, 0 !== p._repeat && (l = s + p._repeatDelay, p._cycle = p._totalTime / l >> 0, p._cycle && p._cycle === p._totalTime / l && a2 >= t && p._cycle--, p._time = p._totalTime - p._cycle * l, p._yoyo && 1 & p._cycle && (p._time = s - p._time), p._time > s ? (p._time = s, a2 = s + 1e-4) : p._time < 0 ? p._time = a2 = 0 : a2 = p._time)), p._hasPause && !p._forcingPlayhead && !b2) {
        if (a2 = p._time, a2 >= q || p._repeat && y !== p._cycle)
          for (d2 = p._first; d2 && d2._startTime <= a2 && !m; )
            d2._duration || "isPause" !== d2.data || d2.ratio || 0 === d2._startTime && 0 === p._rawPrevTime || (m = d2), d2 = d2._next;
        else
          for (d2 = p._last; d2 && d2._startTime >= a2 && !m; )
            d2._duration || "isPause" === d2.data && d2._rawPrevTime > 0 && (m = d2), d2 = d2._prev;
        m && (o = p._startTime + m._startTime / p._timeScale, m._startTime < s && (p._time = p._rawPrevTime = a2 = m._startTime, p._totalTime = a2 + p._cycle * (p._totalDuration + p._repeatDelay)));
      }
      if (p._cycle !== y && !p._locked) {
        var z = p._yoyo && 0 !== (1 & y), A = z === (p._yoyo && 0 !== (1 & p._cycle)), B = p._totalTime, C = p._cycle, D = p._rawPrevTime, E = p._time;
        if (p._totalTime = y * s, p._cycle < y ? z = !z : p._totalTime += s, p._time = q, p._rawPrevTime = 0 === s ? w - 1e-4 : w, p._cycle = y, p._locked = true, q = z ? 0 : s, p.render(q, b2, 0 === s), b2 || p._gc || p.vars.onRepeat && (p._cycle = C, p._locked = false, p._callback("onRepeat")), q !== p._time)
          return;
        if (A && (p._cycle = y, p._locked = true, q = z ? s + 1e-4 : -1e-4, p.render(q, true, false)), p._locked = false, p._paused && !x)
          return;
        p._time = E, p._totalTime = B, p._cycle = C, p._rawPrevTime = D;
      }
      if (!(p._time !== q && p._first || c2 || k2 || m))
        return void (t !== p._totalTime && p._onUpdate && (b2 || p._callback("onUpdate")));
      if (p._initted || (p._initted = true), p._active || !p._paused && p._totalTime !== t && a2 > 0 && (p._active = true), 0 === t && p.vars.onStart && (0 === p._totalTime && p._totalDuration || b2 || p._callback("onStart")), n = p._time, n >= q)
        for (d2 = p._first; d2 && (i2 = d2._next, n === p._time && (!p._paused || x)); )
          (d2._active || d2._startTime <= p._time && !d2._paused && !d2._gc) && (m === d2 && (p.pause(), p._pauseTime = o), d2._reversed ? d2.render((d2._dirty ? d2.totalDuration() : d2._totalDuration) - (a2 - d2._startTime) * d2._timeScale, b2, c2) : d2.render((a2 - d2._startTime) * d2._timeScale, b2, c2)), d2 = i2;
      else
        for (d2 = p._last; d2 && (i2 = d2._prev, n === p._time && (!p._paused || x)); ) {
          if (d2._active || d2._startTime <= q && !d2._paused && !d2._gc) {
            if (m === d2) {
              for (m = d2._prev; m && m.endTime() > p._time; )
                m.render(m._reversed ? m.totalDuration() - (a2 - m._startTime) * m._timeScale : (a2 - m._startTime) * m._timeScale, b2, c2), m = m._prev;
              m = null, p.pause(), p._pauseTime = o;
            }
            d2._reversed ? d2.render((d2._dirty ? d2.totalDuration() : d2._totalDuration) - (a2 - d2._startTime) * d2._timeScale, b2, c2) : d2.render((a2 - d2._startTime) * d2._timeScale, b2, c2);
          }
          d2 = i2;
        }
      p._onUpdate && (b2 || (g.length && h(), p._callback("onUpdate"))), j2 && (p._locked || p._gc || (u === p._startTime || v !== p._timeScale) && (0 === p._time || r >= p.totalDuration()) && (f2 && (g.length && h(), p._timeline.autoRemoveChildren && p._enabled(false, false), p._active = false), !b2 && p.vars[j2] && p._callback(j2)));
    }, k.getActive = function(a2, b2, c2) {
      var d2, e2, f2 = [], g2 = this.getChildren(a2 || null == a2, b2 || null == a2, !!c2), h2 = 0, i2 = g2.length;
      for (d2 = 0; i2 > d2; d2++)
        e2 = g2[d2], e2.isActive() && (f2[h2++] = e2);
      return f2;
    }, k.getLabelAfter = function(a2) {
      a2 || 0 !== a2 && (a2 = this._time);
      var b2, c2 = this.getLabelsArray(), d2 = c2.length;
      for (b2 = 0; d2 > b2; b2++)
        if (c2[b2].time > a2)
          return c2[b2].name;
      return null;
    }, k.getLabelBefore = function(a2) {
      null == a2 && (a2 = this._time);
      for (var b2 = this.getLabelsArray(), c2 = b2.length; --c2 > -1; )
        if (b2[c2].time < a2)
          return b2[c2].name;
      return null;
    }, k.getLabelsArray = function() {
      var a2, b2 = [], c2 = 0;
      for (a2 in this._labels)
        b2[c2++] = { time: this._labels[a2], name: a2 };
      return b2.sort(function(a3, b3) {
        return a3.time - b3.time;
      }), b2;
    }, k.invalidate = function() {
      return this._locked = false, a.prototype.invalidate.call(this);
    }, k.progress = function(a2, b2) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a2 : a2) + this._cycle * (this._duration + this._repeatDelay), b2) : this._time / this.duration() || 0;
    }, k.totalProgress = function(a2, b2) {
      return arguments.length ? this.totalTime(this.totalDuration() * a2, b2) : this._totalTime / this.totalDuration() || 0;
    }, k.totalDuration = function(b2) {
      return arguments.length ? -1 !== this._repeat && b2 ? this.timeScale(this.totalDuration() / b2) : this : (this._dirty && (a.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration);
    }, k.time = function(a2, b2) {
      if (!arguments.length)
        return this._time;
      this._dirty && this.totalDuration();
      var c2 = this._duration, d2 = this._cycle, e2 = d2 * (c2 + this._repeatDelay);
      return a2 > c2 && (a2 = c2), this.totalTime(this._yoyo && 1 & d2 ? c2 - a2 + e2 : this._repeat ? a2 + e2 : a2, b2);
    }, k.repeat = function(a2) {
      return arguments.length ? (this._repeat = a2, this._uncache(true)) : this._repeat;
    }, k.repeatDelay = function(a2) {
      return arguments.length ? (this._repeatDelay = a2, this._uncache(true)) : this._repeatDelay;
    }, k.yoyo = function(a2) {
      return arguments.length ? (this._yoyo = a2, this) : this._yoyo;
    }, k.currentLabel = function(a2) {
      return arguments.length ? this.seek(a2, true) : this.getLabelBefore(this._time + e);
    }, d;
  }, true), function() {
    var a = 180 / Math.PI, b = [], c = [], d = [], e = {}, f = _gsScope._gsDefine.globals, g = function(a2, b2, c2, d2) {
      c2 === d2 && (c2 = d2 - (d2 - b2) / 1e6), a2 === b2 && (b2 = a2 + (c2 - a2) / 1e6), this.a = a2, this.b = b2, this.c = c2, this.d = d2, this.da = d2 - a2, this.ca = c2 - a2, this.ba = b2 - a2;
    }, h = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", i = function(a2, b2, c2, d2) {
      var e2 = { a: a2 }, f2 = {}, g2 = {}, h2 = { c: d2 }, i2 = (a2 + b2) / 2, j2 = (b2 + c2) / 2, k2 = (c2 + d2) / 2, l2 = (i2 + j2) / 2, m2 = (j2 + k2) / 2, n2 = (m2 - l2) / 8;
      return e2.b = i2 + (a2 - i2) / 4, f2.b = l2 + n2, e2.c = f2.a = (e2.b + f2.b) / 2, f2.c = g2.a = (l2 + m2) / 2, g2.b = m2 - n2, h2.b = k2 + (d2 - k2) / 4, g2.c = h2.a = (g2.b + h2.b) / 2, [e2, f2, g2, h2];
    }, j = function(a2, e2, f2, g2, h2) {
      var j2, k2, l2, m2, n2, o2, p2, q2, r, s, t, u, v, w = a2.length - 1, x = 0, y = a2[0].a;
      for (j2 = 0; w > j2; j2++)
        n2 = a2[x], k2 = n2.a, l2 = n2.d, m2 = a2[x + 1].d, h2 ? (t = b[j2], u = c[j2], v = (u + t) * e2 * 0.25 / (g2 ? 0.5 : d[j2] || 0.5), o2 = l2 - (l2 - k2) * (g2 ? 0.5 * e2 : 0 !== t ? v / t : 0), p2 = l2 + (m2 - l2) * (g2 ? 0.5 * e2 : 0 !== u ? v / u : 0), q2 = l2 - (o2 + ((p2 - o2) * (3 * t / (t + u) + 0.5) / 4 || 0))) : (o2 = l2 - (l2 - k2) * e2 * 0.5, p2 = l2 + (m2 - l2) * e2 * 0.5, q2 = l2 - (o2 + p2) / 2), o2 += q2, p2 += q2, n2.c = r = o2, 0 !== j2 ? n2.b = y : n2.b = y = n2.a + 0.6 * (n2.c - n2.a), n2.da = l2 - k2, n2.ca = r - k2, n2.ba = y - k2, f2 ? (s = i(k2, y, r, l2), a2.splice(x, 1, s[0], s[1], s[2], s[3]), x += 4) : x++, y = p2;
      n2 = a2[x], n2.b = y, n2.c = y + 0.4 * (n2.d - y), n2.da = n2.d - n2.a, n2.ca = n2.c - n2.a, n2.ba = y - n2.a, f2 && (s = i(n2.a, y, n2.c, n2.d), a2.splice(x, 1, s[0], s[1], s[2], s[3]));
    }, k = function(a2, d2, e2, f2) {
      var h2, i2, j2, k2, l2, m2, n2 = [];
      if (f2)
        for (a2 = [f2].concat(a2), i2 = a2.length; --i2 > -1; )
          "string" == typeof (m2 = a2[i2][d2]) && "=" === m2.charAt(1) && (a2[i2][d2] = f2[d2] + Number(m2.charAt(0) + m2.substr(2)));
      if (h2 = a2.length - 2, 0 > h2)
        return n2[0] = new g(a2[0][d2], 0, 0, a2[0][d2]), n2;
      for (i2 = 0; h2 > i2; i2++)
        j2 = a2[i2][d2], k2 = a2[i2 + 1][d2], n2[i2] = new g(j2, 0, 0, k2), e2 && (l2 = a2[i2 + 2][d2], b[i2] = (b[i2] || 0) + (k2 - j2) * (k2 - j2), c[i2] = (c[i2] || 0) + (l2 - k2) * (l2 - k2));
      return n2[i2] = new g(a2[i2][d2], 0, 0, a2[i2 + 1][d2]), n2;
    }, l = function(a2, f2, g2, i2, l2, m2) {
      var n2, o2, p2, q2, r, s, t, u, v = {}, w = [], x = m2 || a2[0];
      l2 = "string" == typeof l2 ? "," + l2 + "," : h, null == f2 && (f2 = 1);
      for (o2 in a2[0])
        w.push(o2);
      if (a2.length > 1) {
        for (u = a2[a2.length - 1], t = true, n2 = w.length; --n2 > -1; )
          if (o2 = w[n2], Math.abs(x[o2] - u[o2]) > 0.05) {
            t = false;
            break;
          }
        t && (a2 = a2.concat(), m2 && a2.unshift(m2), a2.push(a2[1]), m2 = a2[a2.length - 3]);
      }
      for (b.length = c.length = d.length = 0, n2 = w.length; --n2 > -1; )
        o2 = w[n2], e[o2] = -1 !== l2.indexOf("," + o2 + ","), v[o2] = k(a2, o2, e[o2], m2);
      for (n2 = b.length; --n2 > -1; )
        b[n2] = Math.sqrt(b[n2]), c[n2] = Math.sqrt(c[n2]);
      if (!i2) {
        for (n2 = w.length; --n2 > -1; )
          if (e[o2])
            for (p2 = v[w[n2]], s = p2.length - 1, q2 = 0; s > q2; q2++)
              r = p2[q2 + 1].da / c[q2] + p2[q2].da / b[q2] || 0, d[q2] = (d[q2] || 0) + r * r;
        for (n2 = d.length; --n2 > -1; )
          d[n2] = Math.sqrt(d[n2]);
      }
      for (n2 = w.length, q2 = g2 ? 4 : 1; --n2 > -1; )
        o2 = w[n2], p2 = v[o2], j(p2, f2, g2, i2, e[o2]), t && (p2.splice(0, q2), p2.splice(p2.length - q2, q2));
      return v;
    }, m = function(a2, b2, c2) {
      b2 = b2 || "soft";
      var d2, e2, f2, h2, i2, j2, k2, l2, m2, n2, o2, p2 = {}, q2 = "cubic" === b2 ? 3 : 2, r = "soft" === b2, s = [];
      if (r && c2 && (a2 = [c2].concat(a2)), null == a2 || a2.length < q2 + 1)
        throw "invalid Bezier data";
      for (m2 in a2[0])
        s.push(m2);
      for (j2 = s.length; --j2 > -1; ) {
        for (m2 = s[j2], p2[m2] = i2 = [], n2 = 0, l2 = a2.length, k2 = 0; l2 > k2; k2++)
          d2 = null == c2 ? a2[k2][m2] : "string" == typeof (o2 = a2[k2][m2]) && "=" === o2.charAt(1) ? c2[m2] + Number(o2.charAt(0) + o2.substr(2)) : Number(o2), r && k2 > 1 && l2 - 1 > k2 && (i2[n2++] = (d2 + i2[n2 - 2]) / 2), i2[n2++] = d2;
        for (l2 = n2 - q2 + 1, n2 = 0, k2 = 0; l2 > k2; k2 += q2)
          d2 = i2[k2], e2 = i2[k2 + 1], f2 = i2[k2 + 2], h2 = 2 === q2 ? 0 : i2[k2 + 3], i2[n2++] = o2 = 3 === q2 ? new g(d2, e2, f2, h2) : new g(d2, (2 * e2 + d2) / 3, (2 * e2 + f2) / 3, f2);
        i2.length = n2;
      }
      return p2;
    }, n = function(a2, b2, c2) {
      for (var d2, e2, f2, g2, h2, i2, j2, k2, l2, m2, n2, o2 = 1 / c2, p2 = a2.length; --p2 > -1; )
        for (m2 = a2[p2], f2 = m2.a, g2 = m2.d - f2, h2 = m2.c - f2, i2 = m2.b - f2, d2 = e2 = 0, k2 = 1; c2 >= k2; k2++)
          j2 = o2 * k2, l2 = 1 - j2, d2 = e2 - (e2 = (j2 * j2 * g2 + 3 * l2 * (j2 * h2 + l2 * i2)) * j2), n2 = p2 * c2 + k2 - 1, b2[n2] = (b2[n2] || 0) + d2 * d2;
    }, o = function(a2, b2) {
      b2 = b2 >> 0 || 6;
      var c2, d2, e2, f2, g2 = [], h2 = [], i2 = 0, j2 = 0, k2 = b2 - 1, l2 = [], m2 = [];
      for (c2 in a2)
        n(a2[c2], g2, b2);
      for (e2 = g2.length, d2 = 0; e2 > d2; d2++)
        i2 += Math.sqrt(g2[d2]), f2 = d2 % b2, m2[f2] = i2, f2 === k2 && (j2 += i2, f2 = d2 / b2 >> 0, l2[f2] = m2, h2[f2] = j2, i2 = 0, m2 = []);
      return { length: j2, lengths: h2, segments: l2 };
    }, p = _gsScope._gsDefine.plugin({ propName: "bezier", priority: -1, version: "1.3.8", API: 2, global: true, init: function(a2, b2, c2) {
      this._target = a2, b2 instanceof Array && (b2 = { values: b2 }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == b2.timeResolution ? 6 : parseInt(b2.timeResolution, 10);
      var d2, e2, f2, g2, h2, i2 = b2.values || [], j2 = {}, k2 = i2[0], n2 = b2.autoRotate || c2.vars.orientToBezier;
      this._autoRotate = n2 ? n2 instanceof Array ? n2 : [["x", "y", "rotation", n2 === true ? 0 : Number(n2) || 0]] : null;
      for (d2 in k2)
        this._props.push(d2);
      for (f2 = this._props.length; --f2 > -1; )
        d2 = this._props[f2], this._overwriteProps.push(d2), e2 = this._func[d2] = "function" == typeof a2[d2], j2[d2] = e2 ? a2[d2.indexOf("set") || "function" != typeof a2["get" + d2.substr(3)] ? d2 : "get" + d2.substr(3)]() : parseFloat(a2[d2]), h2 || j2[d2] !== i2[0][d2] && (h2 = j2);
      if (this._beziers = "cubic" !== b2.type && "quadratic" !== b2.type && "soft" !== b2.type ? l(i2, isNaN(b2.curviness) ? 1 : b2.curviness, false, "thruBasic" === b2.type, b2.correlate, h2) : m(i2, b2.type, j2), this._segCount = this._beziers[d2].length, this._timeRes) {
        var p2 = o(this._beziers, this._timeRes);
        this._length = p2.length, this._lengths = p2.lengths, this._segments = p2.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length;
      }
      if (n2 = this._autoRotate)
        for (this._initialRotations = [], n2[0] instanceof Array || (this._autoRotate = n2 = [n2]), f2 = n2.length; --f2 > -1; ) {
          for (g2 = 0; 3 > g2; g2++)
            d2 = n2[f2][g2], this._func[d2] = "function" == typeof a2[d2] ? a2[d2.indexOf("set") || "function" != typeof a2["get" + d2.substr(3)] ? d2 : "get" + d2.substr(3)] : false;
          d2 = n2[f2][2], this._initialRotations[f2] = (this._func[d2] ? this._func[d2].call(this._target) : this._target[d2]) || 0, this._overwriteProps.push(d2);
        }
      return this._startRatio = c2.vars.runBackwards ? 1 : 0, true;
    }, set: function(b2) {
      var c2, d2, e2, f2, g2, h2, i2, j2, k2, l2, m2 = this._segCount, n2 = this._func, o2 = this._target, p2 = b2 !== this._startRatio;
      if (this._timeRes) {
        if (k2 = this._lengths, l2 = this._curSeg, b2 *= this._length, e2 = this._li, b2 > this._l2 && m2 - 1 > e2) {
          for (j2 = m2 - 1; j2 > e2 && (this._l2 = k2[++e2]) <= b2; )
            ;
          this._l1 = k2[e2 - 1], this._li = e2, this._curSeg = l2 = this._segments[e2], this._s2 = l2[this._s1 = this._si = 0];
        } else if (b2 < this._l1 && e2 > 0) {
          for (; e2 > 0 && (this._l1 = k2[--e2]) >= b2; )
            ;
          0 === e2 && b2 < this._l1 ? this._l1 = 0 : e2++, this._l2 = k2[e2], this._li = e2, this._curSeg = l2 = this._segments[e2], this._s1 = l2[(this._si = l2.length - 1) - 1] || 0, this._s2 = l2[this._si];
        }
        if (c2 = e2, b2 -= this._l1, e2 = this._si, b2 > this._s2 && e2 < l2.length - 1) {
          for (j2 = l2.length - 1; j2 > e2 && (this._s2 = l2[++e2]) <= b2; )
            ;
          this._s1 = l2[e2 - 1], this._si = e2;
        } else if (b2 < this._s1 && e2 > 0) {
          for (; e2 > 0 && (this._s1 = l2[--e2]) >= b2; )
            ;
          0 === e2 && b2 < this._s1 ? this._s1 = 0 : e2++, this._s2 = l2[e2], this._si = e2;
        }
        h2 = (e2 + (b2 - this._s1) / (this._s2 - this._s1)) * this._prec || 0;
      } else
        c2 = 0 > b2 ? 0 : b2 >= 1 ? m2 - 1 : m2 * b2 >> 0, h2 = (b2 - c2 * (1 / m2)) * m2;
      for (d2 = 1 - h2, e2 = this._props.length; --e2 > -1; )
        f2 = this._props[e2], g2 = this._beziers[f2][c2], i2 = (h2 * h2 * g2.da + 3 * d2 * (h2 * g2.ca + d2 * g2.ba)) * h2 + g2.a, this._mod[f2] && (i2 = this._mod[f2](i2, o2)), n2[f2] ? o2[f2](i2) : o2[f2] = i2;
      if (this._autoRotate) {
        var q2, r, s, t, u, v, w, x = this._autoRotate;
        for (e2 = x.length; --e2 > -1; )
          f2 = x[e2][2], v = x[e2][3] || 0, w = x[e2][4] === true ? 1 : a, g2 = this._beziers[x[e2][0]], q2 = this._beziers[x[e2][1]], g2 && q2 && (g2 = g2[c2], q2 = q2[c2], r = g2.a + (g2.b - g2.a) * h2, t = g2.b + (g2.c - g2.b) * h2, r += (t - r) * h2, t += (g2.c + (g2.d - g2.c) * h2 - t) * h2, s = q2.a + (q2.b - q2.a) * h2, u = q2.b + (q2.c - q2.b) * h2, s += (u - s) * h2, u += (q2.c + (q2.d - q2.c) * h2 - u) * h2, i2 = p2 ? Math.atan2(u - s, t - r) * w + v : this._initialRotations[e2], this._mod[f2] && (i2 = this._mod[f2](i2, o2)), n2[f2] ? o2[f2](i2) : o2[f2] = i2);
      }
    } }), q = p.prototype;
    p.bezierThrough = l, p.cubicToQuadratic = i, p._autoCSS = true, p.quadraticToCubic = function(a2, b2, c2) {
      return new g(a2, (2 * b2 + a2) / 3, (2 * b2 + c2) / 3, c2);
    }, p._cssRegister = function() {
      var a2 = f.CSSPlugin;
      if (a2) {
        var b2 = a2._internals, c2 = b2._parseToProxy, d2 = b2._setPluginRatio, e2 = b2.CSSPropTween;
        b2._registerComplexSpecialProp("bezier", { parser: function(a3, b3, f2, g2, h2, i2) {
          b3 instanceof Array && (b3 = { values: b3 }), i2 = new p();
          var j2, k2, l2, m2 = b3.values, n2 = m2.length - 1, o2 = [], q2 = {};
          if (0 > n2)
            return h2;
          for (j2 = 0; n2 >= j2; j2++)
            l2 = c2(a3, m2[j2], g2, h2, i2, n2 !== j2), o2[j2] = l2.end;
          for (k2 in b3)
            q2[k2] = b3[k2];
          return q2.values = o2, h2 = new e2(a3, "bezier", 0, 0, l2.pt, 2), h2.data = l2, h2.plugin = i2, h2.setRatio = d2, 0 === q2.autoRotate && (q2.autoRotate = true), !q2.autoRotate || q2.autoRotate instanceof Array || (j2 = q2.autoRotate === true ? 0 : Number(q2.autoRotate), q2.autoRotate = null != l2.end.left ? [["left", "top", "rotation", j2, false]] : null != l2.end.x ? [["x", "y", "rotation", j2, false]] : false), q2.autoRotate && (g2._transform || g2._enableTransforms(false), l2.autoRotate = g2._target._gsTransform, l2.proxy.rotation = l2.autoRotate.rotation || 0, g2._overwriteProps.push("rotation")), i2._onInitTween(l2.proxy, q2, g2._tween), h2;
        } });
      }
    }, q._mod = function(a2) {
      for (var b2, c2 = this._overwriteProps, d2 = c2.length; --d2 > -1; )
        b2 = a2[c2[d2]], b2 && "function" == typeof b2 && (this._mod[c2[d2]] = b2);
    }, q._kill = function(a2) {
      var b2, c2, d2 = this._props;
      for (b2 in this._beziers)
        if (b2 in a2)
          for (delete this._beziers[b2], delete this._func[b2], c2 = d2.length; --c2 > -1; )
            d2[c2] === b2 && d2.splice(c2, 1);
      if (d2 = this._autoRotate)
        for (c2 = d2.length; --c2 > -1; )
          a2[d2[c2][2]] && d2.splice(c2, 1);
      return this._super._kill.call(this, a2);
    };
  }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(a, b) {
    var c, d, e, f, g = function() {
      a.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = g.prototype.setRatio;
    }, h = _gsScope._gsDefine.globals, i = {}, j = g.prototype = new a("css");
    j.constructor = g, g.version = "2.1.0", g.API = 2, g.defaultTransformPerspective = 0, g.defaultSkewType = "compensated", g.defaultSmoothOrigin = true, j = "px", g.suffixMap = { top: j, right: j, bottom: j, left: j, width: j, height: j, fontSize: j, padding: j, margin: j, perspective: j, lineHeight: "" };
    var k, l, m, n, o, p, q, r, s = /(?:\-|\.|\b)(\d|\.|e\-)+/g, t = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, u = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, v = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, w = /(?:\d|\-|\+|=|#|\.)*/g, x = /opacity *= *([^)]*)/i, y = /opacity:([^;]*)/i, z = /alpha\(opacity *=.+?\)/i, A = /^(rgb|hsl)/, B = /([A-Z])/g, C = /-([a-z])/gi, D = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, E = function(a2, b2) {
      return b2.toUpperCase();
    }, F = /(?:Left|Right|Width)/i, G = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, H = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, I = /,(?=[^\)]*(?:\(|$))/gi, J = /[\s,\(]/i, K = Math.PI / 180, L = 180 / Math.PI, M = {}, N = { style: {} }, O = _gsScope.document || { createElement: function() {
      return N;
    } }, P = function(a2, b2) {
      return b2 && O.createElementNS ? O.createElementNS(b2, a2) : O.createElement(a2);
    }, Q = P("div"), R = P("img"), S = g._internals = { _specialProps: i }, T = (_gsScope.navigator || {}).userAgent || "", U = function() {
      var a2 = T.indexOf("Android"), b2 = P("a");
      return m = -1 !== T.indexOf("Safari") && -1 === T.indexOf("Chrome") && (-1 === a2 || parseFloat(T.substr(a2 + 8, 2)) > 3), o = m && parseFloat(T.substr(T.indexOf("Version/") + 8, 2)) < 6, n = -1 !== T.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(T) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(T)) && (p = parseFloat(RegExp.$1)), b2 ? (b2.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(b2.style.opacity)) : false;
    }(), V = function(a2) {
      return x.test("string" == typeof a2 ? a2 : (a2.currentStyle ? a2.currentStyle.filter : a2.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1;
    }, W = function(a2) {
      _gsScope.console && console.log(a2);
    }, X = "", Y = "", Z = function(a2, b2) {
      b2 = b2 || Q;
      var c2, d2, e2 = b2.style;
      if (void 0 !== e2[a2])
        return a2;
      for (a2 = a2.charAt(0).toUpperCase() + a2.substr(1), c2 = ["O", "Moz", "ms", "Ms", "Webkit"], d2 = 5; --d2 > -1 && void 0 === e2[c2[d2] + a2]; )
        ;
      return d2 >= 0 ? (Y = 3 === d2 ? "ms" : c2[d2], X = "-" + Y.toLowerCase() + "-", Y + a2) : null;
    }, $ = "undefined" != typeof window ? window : O.defaultView || { getComputedStyle: function() {
    } }, _ = function(a2) {
      return $.getComputedStyle(a2);
    }, aa = g.getStyle = function(a2, b2, c2, d2, e2) {
      var f2;
      return U || "opacity" !== b2 ? (!d2 && a2.style[b2] ? f2 = a2.style[b2] : (c2 = c2 || _(a2)) ? f2 = c2[b2] || c2.getPropertyValue(b2) || c2.getPropertyValue(b2.replace(B, "-$1").toLowerCase()) : a2.currentStyle && (f2 = a2.currentStyle[b2]), null == e2 || f2 && "none" !== f2 && "auto" !== f2 && "auto auto" !== f2 ? f2 : e2) : V(a2);
    }, ba = S.convertToPixels = function(a2, c2, d2, e2, f2) {
      if ("px" === e2 || !e2 && "lineHeight" !== c2)
        return d2;
      if ("auto" === e2 || !d2)
        return 0;
      var h2, i2, j2, k2 = F.test(c2), l2 = a2, m2 = Q.style, n2 = 0 > d2, o2 = 1 === d2;
      if (n2 && (d2 = -d2), o2 && (d2 *= 100), "lineHeight" !== c2 || e2)
        if ("%" === e2 && -1 !== c2.indexOf("border"))
          h2 = d2 / 100 * (k2 ? a2.clientWidth : a2.clientHeight);
        else {
          if (m2.cssText = "border:0 solid red;position:" + aa(a2, "position") + ";line-height:0;", "%" !== e2 && l2.appendChild && "v" !== e2.charAt(0) && "rem" !== e2)
            m2[k2 ? "borderLeftWidth" : "borderTopWidth"] = d2 + e2;
          else {
            if (l2 = a2.parentNode || O.body, -1 !== aa(l2, "display").indexOf("flex") && (m2.position = "absolute"), i2 = l2._gsCache, j2 = b.ticker.frame, i2 && k2 && i2.time === j2)
              return i2.width * d2 / 100;
            m2[k2 ? "width" : "height"] = d2 + e2;
          }
          l2.appendChild(Q), h2 = parseFloat(Q[k2 ? "offsetWidth" : "offsetHeight"]), l2.removeChild(Q), k2 && "%" === e2 && g.cacheWidths !== false && (i2 = l2._gsCache = l2._gsCache || {}, i2.time = j2, i2.width = h2 / d2 * 100), 0 !== h2 || f2 || (h2 = ba(a2, c2, d2, e2, true));
        }
      else
        i2 = _(a2).lineHeight, a2.style.lineHeight = d2, h2 = parseFloat(_(a2).lineHeight), a2.style.lineHeight = i2;
      return o2 && (h2 /= 100), n2 ? -h2 : h2;
    }, ca = S.calculateOffset = function(a2, b2, c2) {
      if ("absolute" !== aa(a2, "position", c2))
        return 0;
      var d2 = "left" === b2 ? "Left" : "Top", e2 = aa(a2, "margin" + d2, c2);
      return a2["offset" + d2] - (ba(a2, b2, parseFloat(e2), e2.replace(w, "")) || 0);
    }, da = function(a2, b2) {
      var c2, d2, e2, f2 = {};
      if (b2 = b2 || _(a2))
        if (c2 = b2.length)
          for (; --c2 > -1; )
            e2 = b2[c2], (-1 === e2.indexOf("-transform") || Ea === e2) && (f2[e2.replace(C, E)] = b2.getPropertyValue(e2));
        else
          for (c2 in b2)
            (-1 === c2.indexOf("Transform") || Da === c2) && (f2[c2] = b2[c2]);
      else if (b2 = a2.currentStyle || a2.style)
        for (c2 in b2)
          "string" == typeof c2 && void 0 === f2[c2] && (f2[c2.replace(C, E)] = b2[c2]);
      return U || (f2.opacity = V(a2)), d2 = Sa(a2, b2, false), f2.rotation = d2.rotation, f2.skewX = d2.skewX, f2.scaleX = d2.scaleX, f2.scaleY = d2.scaleY, f2.x = d2.x, f2.y = d2.y, Ga && (f2.z = d2.z, f2.rotationX = d2.rotationX, f2.rotationY = d2.rotationY, f2.scaleZ = d2.scaleZ), f2.filters && delete f2.filters, f2;
    }, ea = function(a2, b2, c2, d2, e2) {
      var f2, g2, h2, i2 = {}, j2 = a2.style;
      for (g2 in c2)
        "cssText" !== g2 && "length" !== g2 && isNaN(g2) && (b2[g2] !== (f2 = c2[g2]) || e2 && e2[g2]) && -1 === g2.indexOf("Origin") && ("number" == typeof f2 || "string" == typeof f2) && (i2[g2] = "auto" !== f2 || "left" !== g2 && "top" !== g2 ? "" !== f2 && "auto" !== f2 && "none" !== f2 || "string" != typeof b2[g2] || "" === b2[g2].replace(v, "") ? f2 : 0 : ca(a2, g2), void 0 !== j2[g2] && (h2 = new ta(j2, g2, j2[g2], h2)));
      if (d2)
        for (g2 in d2)
          "className" !== g2 && (i2[g2] = d2[g2]);
      return { difs: i2, firstMPT: h2 };
    }, fa = { width: ["Left", "Right"], height: ["Top", "Bottom"] }, ga = ["marginLeft", "marginRight", "marginTop", "marginBottom"], ha = function(a2, b2, c2) {
      if ("svg" === (a2.nodeName + "").toLowerCase())
        return (c2 || _(a2))[b2] || 0;
      if (a2.getCTM && Pa(a2))
        return a2.getBBox()[b2] || 0;
      var d2 = parseFloat("width" === b2 ? a2.offsetWidth : a2.offsetHeight), e2 = fa[b2], f2 = e2.length;
      for (c2 = c2 || _(a2); --f2 > -1; )
        d2 -= parseFloat(aa(a2, "padding" + e2[f2], c2, true)) || 0, d2 -= parseFloat(aa(a2, "border" + e2[f2] + "Width", c2, true)) || 0;
      return d2;
    }, ia = function(a2, b2) {
      if ("contain" === a2 || "auto" === a2 || "auto auto" === a2)
        return a2 + " ";
      (null == a2 || "" === a2) && (a2 = "0 0");
      var c2, d2 = a2.split(" "), e2 = -1 !== a2.indexOf("left") ? "0%" : -1 !== a2.indexOf("right") ? "100%" : d2[0], f2 = -1 !== a2.indexOf("top") ? "0%" : -1 !== a2.indexOf("bottom") ? "100%" : d2[1];
      if (d2.length > 3 && !b2) {
        for (d2 = a2.split(", ").join(",").split(","), a2 = [], c2 = 0; c2 < d2.length; c2++)
          a2.push(ia(d2[c2]));
        return a2.join(",");
      }
      return null == f2 ? f2 = "center" === e2 ? "50%" : "0" : "center" === f2 && (f2 = "50%"), ("center" === e2 || isNaN(parseFloat(e2)) && -1 === (e2 + "").indexOf("=")) && (e2 = "50%"), a2 = e2 + " " + f2 + (d2.length > 2 ? " " + d2[2] : ""), b2 && (b2.oxp = -1 !== e2.indexOf("%"), b2.oyp = -1 !== f2.indexOf("%"), b2.oxr = "=" === e2.charAt(1), b2.oyr = "=" === f2.charAt(1), b2.ox = parseFloat(e2.replace(v, "")), b2.oy = parseFloat(f2.replace(v, "")), b2.v = a2), b2 || a2;
    }, ja = function(a2, b2) {
      return "function" == typeof a2 && (a2 = a2(r, q)), "string" == typeof a2 && "=" === a2.charAt(1) ? parseInt(a2.charAt(0) + "1", 10) * parseFloat(a2.substr(2)) : parseFloat(a2) - parseFloat(b2) || 0;
    }, ka = function(a2, b2) {
      "function" == typeof a2 && (a2 = a2(r, q));
      var c2 = "string" == typeof a2 && "=" === a2.charAt(1);
      return "string" == typeof a2 && "v" === a2.charAt(a2.length - 2) && (a2 = (c2 ? a2.substr(0, 2) : 0) + window["inner" + ("vh" === a2.substr(-2) ? "Height" : "Width")] * (parseFloat(c2 ? a2.substr(2) : a2) / 100)), null == a2 ? b2 : c2 ? parseInt(a2.charAt(0) + "1", 10) * parseFloat(a2.substr(2)) + b2 : parseFloat(a2) || 0;
    }, la = function(a2, b2, c2, d2) {
      var e2, f2, g2, h2, i2, j2 = 1e-6;
      return "function" == typeof a2 && (a2 = a2(r, q)), null == a2 ? h2 = b2 : "number" == typeof a2 ? h2 = a2 : (e2 = 360, f2 = a2.split("_"), i2 = "=" === a2.charAt(1), g2 = (i2 ? parseInt(a2.charAt(0) + "1", 10) * parseFloat(f2[0].substr(2)) : parseFloat(f2[0])) * (-1 === a2.indexOf("rad") ? 1 : L) - (i2 ? 0 : b2), f2.length && (d2 && (d2[c2] = b2 + g2), -1 !== a2.indexOf("short") && (g2 %= e2, g2 !== g2 % (e2 / 2) && (g2 = 0 > g2 ? g2 + e2 : g2 - e2)), -1 !== a2.indexOf("_cw") && 0 > g2 ? g2 = (g2 + 9999999999 * e2) % e2 - (g2 / e2 | 0) * e2 : -1 !== a2.indexOf("ccw") && g2 > 0 && (g2 = (g2 - 9999999999 * e2) % e2 - (g2 / e2 | 0) * e2)), h2 = b2 + g2), j2 > h2 && h2 > -j2 && (h2 = 0), h2;
    }, ma = { aqua: [0, 255, 255], lime: [0, 255, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, 255], navy: [0, 0, 128], white: [255, 255, 255], fuchsia: [255, 0, 255], olive: [128, 128, 0], yellow: [255, 255, 0], orange: [255, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [255, 0, 0], pink: [255, 192, 203], cyan: [0, 255, 255], transparent: [255, 255, 255, 0] }, na = function(a2, b2, c2) {
      return a2 = 0 > a2 ? a2 + 1 : a2 > 1 ? a2 - 1 : a2, 255 * (1 > 6 * a2 ? b2 + (c2 - b2) * a2 * 6 : 0.5 > a2 ? c2 : 2 > 3 * a2 ? b2 + (c2 - b2) * (2 / 3 - a2) * 6 : b2) + 0.5 | 0;
    }, oa = g.parseColor = function(a2, b2) {
      var c2, d2, e2, f2, g2, h2, i2, j2, k2, l2, m2;
      if (a2)
        if ("number" == typeof a2)
          c2 = [a2 >> 16, a2 >> 8 & 255, 255 & a2];
        else {
          if ("," === a2.charAt(a2.length - 1) && (a2 = a2.substr(0, a2.length - 1)), ma[a2])
            c2 = ma[a2];
          else if ("#" === a2.charAt(0))
            4 === a2.length && (d2 = a2.charAt(1), e2 = a2.charAt(2), f2 = a2.charAt(3), a2 = "#" + d2 + d2 + e2 + e2 + f2 + f2), a2 = parseInt(a2.substr(1), 16), c2 = [a2 >> 16, a2 >> 8 & 255, 255 & a2];
          else if ("hsl" === a2.substr(0, 3))
            if (c2 = m2 = a2.match(s), b2) {
              if (-1 !== a2.indexOf("="))
                return a2.match(t);
            } else
              g2 = Number(c2[0]) % 360 / 360, h2 = Number(c2[1]) / 100, i2 = Number(c2[2]) / 100, e2 = 0.5 >= i2 ? i2 * (h2 + 1) : i2 + h2 - i2 * h2, d2 = 2 * i2 - e2, c2.length > 3 && (c2[3] = Number(c2[3])), c2[0] = na(g2 + 1 / 3, d2, e2), c2[1] = na(g2, d2, e2), c2[2] = na(g2 - 1 / 3, d2, e2);
          else
            c2 = a2.match(s) || ma.transparent;
          c2[0] = Number(c2[0]), c2[1] = Number(c2[1]), c2[2] = Number(c2[2]), c2.length > 3 && (c2[3] = Number(c2[3]));
        }
      else
        c2 = ma.black;
      return b2 && !m2 && (d2 = c2[0] / 255, e2 = c2[1] / 255, f2 = c2[2] / 255, j2 = Math.max(d2, e2, f2), k2 = Math.min(d2, e2, f2), i2 = (j2 + k2) / 2, j2 === k2 ? g2 = h2 = 0 : (l2 = j2 - k2, h2 = i2 > 0.5 ? l2 / (2 - j2 - k2) : l2 / (j2 + k2), g2 = j2 === d2 ? (e2 - f2) / l2 + (f2 > e2 ? 6 : 0) : j2 === e2 ? (f2 - d2) / l2 + 2 : (d2 - e2) / l2 + 4, g2 *= 60), c2[0] = g2 + 0.5 | 0, c2[1] = 100 * h2 + 0.5 | 0, c2[2] = 100 * i2 + 0.5 | 0), c2;
    }, pa = function(a2, b2) {
      var c2, d2, e2, f2 = a2.match(qa) || [], g2 = 0, h2 = "";
      if (!f2.length)
        return a2;
      for (c2 = 0; c2 < f2.length; c2++)
        d2 = f2[c2], e2 = a2.substr(g2, a2.indexOf(d2, g2) - g2), g2 += e2.length + d2.length, d2 = oa(d2, b2), 3 === d2.length && d2.push(1), h2 += e2 + (b2 ? "hsla(" + d2[0] + "," + d2[1] + "%," + d2[2] + "%," + d2[3] : "rgba(" + d2.join(",")) + ")";
      return h2 + a2.substr(g2);
    }, qa = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
    for (j in ma)
      qa += "|" + j + "\\b";
    qa = new RegExp(qa + ")", "gi"), g.colorStringFilter = function(a2) {
      var b2, c2 = a2[0] + " " + a2[1];
      qa.test(c2) && (b2 = -1 !== c2.indexOf("hsl(") || -1 !== c2.indexOf("hsla("), a2[0] = pa(a2[0], b2), a2[1] = pa(a2[1], b2)), qa.lastIndex = 0;
    }, b.defaultStringFilter || (b.defaultStringFilter = g.colorStringFilter);
    var ra = function(a2, b2, c2, d2) {
      if (null == a2)
        return function(a3) {
          return a3;
        };
      var e2, f2 = b2 ? (a2.match(qa) || [""])[0] : "", g2 = a2.split(f2).join("").match(u) || [], h2 = a2.substr(0, a2.indexOf(g2[0])), i2 = ")" === a2.charAt(a2.length - 1) ? ")" : "", j2 = -1 !== a2.indexOf(" ") ? " " : ",", k2 = g2.length, l2 = k2 > 0 ? g2[0].replace(s, "") : "";
      return k2 ? e2 = b2 ? function(a3) {
        var b3, m2, n2, o2;
        if ("number" == typeof a3)
          a3 += l2;
        else if (d2 && I.test(a3)) {
          for (o2 = a3.replace(I, "|").split("|"), n2 = 0; n2 < o2.length; n2++)
            o2[n2] = e2(o2[n2]);
          return o2.join(",");
        }
        if (b3 = (a3.match(qa) || [f2])[0], m2 = a3.split(b3).join("").match(u) || [], n2 = m2.length, k2 > n2--)
          for (; ++n2 < k2; )
            m2[n2] = c2 ? m2[(n2 - 1) / 2 | 0] : g2[n2];
        return h2 + m2.join(j2) + j2 + b3 + i2 + (-1 !== a3.indexOf("inset") ? " inset" : "");
      } : function(a3) {
        var b3, f3, m2;
        if ("number" == typeof a3)
          a3 += l2;
        else if (d2 && I.test(a3)) {
          for (f3 = a3.replace(I, "|").split("|"), m2 = 0; m2 < f3.length; m2++)
            f3[m2] = e2(f3[m2]);
          return f3.join(",");
        }
        if (b3 = a3.match(u) || [], m2 = b3.length, k2 > m2--)
          for (; ++m2 < k2; )
            b3[m2] = c2 ? b3[(m2 - 1) / 2 | 0] : g2[m2];
        return h2 + b3.join(j2) + i2;
      } : function(a3) {
        return a3;
      };
    }, sa = function(a2) {
      return a2 = a2.split(","), function(b2, c2, d2, e2, f2, g2, h2) {
        var i2, j2 = (c2 + "").split(" ");
        for (h2 = {}, i2 = 0; 4 > i2; i2++)
          h2[a2[i2]] = j2[i2] = j2[i2] || j2[(i2 - 1) / 2 >> 0];
        return e2.parse(b2, h2, f2, g2);
      };
    }, ta = (S._setPluginRatio = function(a2) {
      this.plugin.setRatio(a2);
      for (var b2, c2, d2, e2, f2, g2 = this.data, h2 = g2.proxy, i2 = g2.firstMPT, j2 = 1e-6; i2; )
        b2 = h2[i2.v], i2.r ? b2 = i2.r(b2) : j2 > b2 && b2 > -j2 && (b2 = 0), i2.t[i2.p] = b2, i2 = i2._next;
      if (g2.autoRotate && (g2.autoRotate.rotation = g2.mod ? g2.mod.call(this._tween, h2.rotation, this.t, this._tween) : h2.rotation), 1 === a2 || 0 === a2)
        for (i2 = g2.firstMPT, f2 = 1 === a2 ? "e" : "b"; i2; ) {
          if (c2 = i2.t, c2.type) {
            if (1 === c2.type) {
              for (e2 = c2.xs0 + c2.s + c2.xs1, d2 = 1; d2 < c2.l; d2++)
                e2 += c2["xn" + d2] + c2["xs" + (d2 + 1)];
              c2[f2] = e2;
            }
          } else
            c2[f2] = c2.s + c2.xs0;
          i2 = i2._next;
        }
    }, function(a2, b2, c2, d2, e2) {
      this.t = a2, this.p = b2, this.v = c2, this.r = e2, d2 && (d2._prev = this, this._next = d2);
    }), ua = (S._parseToProxy = function(a2, b2, c2, d2, e2, f2) {
      var g2, h2, i2, j2, k2, l2 = d2, m2 = {}, n2 = {}, o2 = c2._transform, p2 = M;
      for (c2._transform = null, M = b2, d2 = k2 = c2.parse(a2, b2, d2, e2), M = p2, f2 && (c2._transform = o2, l2 && (l2._prev = null, l2._prev && (l2._prev._next = null))); d2 && d2 !== l2; ) {
        if (d2.type <= 1 && (h2 = d2.p, n2[h2] = d2.s + d2.c, m2[h2] = d2.s, f2 || (j2 = new ta(d2, "s", h2, j2, d2.r), d2.c = 0), 1 === d2.type))
          for (g2 = d2.l; --g2 > 0; )
            i2 = "xn" + g2, h2 = d2.p + "_" + i2, n2[h2] = d2.data[i2], m2[h2] = d2[i2], f2 || (j2 = new ta(d2, i2, h2, j2, d2.rxp[i2]));
        d2 = d2._next;
      }
      return { proxy: m2, end: n2, firstMPT: j2, pt: k2 };
    }, S.CSSPropTween = function(a2, b2, d2, e2, g2, h2, i2, j2, k2, l2, m2) {
      this.t = a2, this.p = b2, this.s = d2, this.c = e2, this.n = i2 || b2, a2 instanceof ua || f.push(this.n), this.r = j2 ? "function" == typeof j2 ? j2 : Math.round : j2, this.type = h2 || 0, k2 && (this.pr = k2, c = true), this.b = void 0 === l2 ? d2 : l2, this.e = void 0 === m2 ? d2 + e2 : m2, g2 && (this._next = g2, g2._prev = this);
    }), va = function(a2, b2, c2, d2, e2, f2) {
      var g2 = new ua(a2, b2, c2, d2 - c2, e2, -1, f2);
      return g2.b = c2, g2.e = g2.xs0 = d2, g2;
    }, wa = g.parseComplex = function(a2, b2, c2, d2, e2, f2, h2, i2, j2, l2) {
      c2 = c2 || f2 || "", "function" == typeof d2 && (d2 = d2(r, q)), h2 = new ua(a2, b2, 0, 0, h2, l2 ? 2 : 1, null, false, i2, c2, d2), d2 += "", e2 && qa.test(d2 + c2) && (d2 = [c2, d2], g.colorStringFilter(d2), c2 = d2[0], d2 = d2[1]);
      var m2, n2, o2, p2, u2, v2, w2, x2, y2, z2, A2, B2, C2, D2 = c2.split(", ").join(",").split(" "), E2 = d2.split(", ").join(",").split(" "), F2 = D2.length, G2 = k !== false;
      for ((-1 !== d2.indexOf(",") || -1 !== c2.indexOf(",")) && (-1 !== (d2 + c2).indexOf("rgb") || -1 !== (d2 + c2).indexOf("hsl") ? (D2 = D2.join(" ").replace(I, ", ").split(" "), E2 = E2.join(" ").replace(I, ", ").split(" ")) : (D2 = D2.join(" ").split(",").join(", ").split(" "), E2 = E2.join(" ").split(",").join(", ").split(" ")), F2 = D2.length), F2 !== E2.length && (D2 = (f2 || "").split(" "), F2 = D2.length), h2.plugin = j2, h2.setRatio = l2, qa.lastIndex = 0, m2 = 0; F2 > m2; m2++)
        if (p2 = D2[m2], u2 = E2[m2] + "", x2 = parseFloat(p2), x2 || 0 === x2)
          h2.appendXtra("", x2, ja(u2, x2), u2.replace(t, ""), G2 && -1 !== u2.indexOf("px") ? Math.round : false, true);
        else if (e2 && qa.test(p2))
          B2 = u2.indexOf(")") + 1, B2 = ")" + (B2 ? u2.substr(B2) : ""), C2 = -1 !== u2.indexOf("hsl") && U, z2 = u2, p2 = oa(p2, C2), u2 = oa(u2, C2), y2 = p2.length + u2.length > 6, y2 && !U && 0 === u2[3] ? (h2["xs" + h2.l] += h2.l ? " transparent" : "transparent", h2.e = h2.e.split(E2[m2]).join("transparent")) : (U || (y2 = false), C2 ? h2.appendXtra(z2.substr(0, z2.indexOf("hsl")) + (y2 ? "hsla(" : "hsl("), p2[0], ja(u2[0], p2[0]), ",", false, true).appendXtra("", p2[1], ja(u2[1], p2[1]), "%,", false).appendXtra("", p2[2], ja(u2[2], p2[2]), y2 ? "%," : "%" + B2, false) : h2.appendXtra(z2.substr(0, z2.indexOf("rgb")) + (y2 ? "rgba(" : "rgb("), p2[0], u2[0] - p2[0], ",", Math.round, true).appendXtra("", p2[1], u2[1] - p2[1], ",", Math.round).appendXtra("", p2[2], u2[2] - p2[2], y2 ? "," : B2, Math.round), y2 && (p2 = p2.length < 4 ? 1 : p2[3], h2.appendXtra("", p2, (u2.length < 4 ? 1 : u2[3]) - p2, B2, false))), qa.lastIndex = 0;
        else if (v2 = p2.match(s)) {
          if (w2 = u2.match(t), !w2 || w2.length !== v2.length)
            return h2;
          for (o2 = 0, n2 = 0; n2 < v2.length; n2++)
            A2 = v2[n2], z2 = p2.indexOf(A2, o2), h2.appendXtra(p2.substr(o2, z2 - o2), Number(A2), ja(w2[n2], A2), "", G2 && "px" === p2.substr(z2 + A2.length, 2) ? Math.round : false, 0 === n2), o2 = z2 + A2.length;
          h2["xs" + h2.l] += p2.substr(o2);
        } else
          h2["xs" + h2.l] += h2.l || h2["xs" + h2.l] ? " " + u2 : u2;
      if (-1 !== d2.indexOf("=") && h2.data) {
        for (B2 = h2.xs0 + h2.data.s, m2 = 1; m2 < h2.l; m2++)
          B2 += h2["xs" + m2] + h2.data["xn" + m2];
        h2.e = B2 + h2["xs" + m2];
      }
      return h2.l || (h2.type = -1, h2.xs0 = h2.e), h2.xfirst || h2;
    }, xa = 9;
    for (j = ua.prototype, j.l = j.pr = 0; --xa > 0; )
      j["xn" + xa] = 0, j["xs" + xa] = "";
    j.xs0 = "", j._next = j._prev = j.xfirst = j.data = j.plugin = j.setRatio = j.rxp = null, j.appendXtra = function(a2, b2, c2, d2, e2, f2) {
      var g2 = this, h2 = g2.l;
      return g2["xs" + h2] += f2 && (h2 || g2["xs" + h2]) ? " " + a2 : a2 || "", c2 || 0 === h2 || g2.plugin ? (g2.l++, g2.type = g2.setRatio ? 2 : 1, g2["xs" + g2.l] = d2 || "", h2 > 0 ? (g2.data["xn" + h2] = b2 + c2, g2.rxp["xn" + h2] = e2, g2["xn" + h2] = b2, g2.plugin || (g2.xfirst = new ua(g2, "xn" + h2, b2, c2, g2.xfirst || g2, 0, g2.n, e2, g2.pr), g2.xfirst.xs0 = 0), g2) : (g2.data = { s: b2 + c2 }, g2.rxp = {}, g2.s = b2, g2.c = c2, g2.r = e2, g2)) : (g2["xs" + h2] += b2 + (d2 || ""), g2);
    };
    var ya = function(a2, b2) {
      b2 = b2 || {}, this.p = b2.prefix ? Z(a2) || a2 : a2, i[a2] = i[this.p] = this, this.format = b2.formatter || ra(b2.defaultValue, b2.color, b2.collapsible, b2.multi), b2.parser && (this.parse = b2.parser), this.clrs = b2.color, this.multi = b2.multi, this.keyword = b2.keyword, this.dflt = b2.defaultValue, this.allowFunc = b2.allowFunc, this.pr = b2.priority || 0;
    }, za = S._registerComplexSpecialProp = function(a2, b2, c2) {
      "object" != typeof b2 && (b2 = { parser: c2 });
      var d2, f2 = a2.split(","), g2 = b2.defaultValue;
      for (c2 = c2 || [g2], d2 = 0; d2 < f2.length; d2++)
        b2.prefix = 0 === d2 && b2.prefix, b2.defaultValue = c2[d2] || g2, new ya(f2[d2], b2);
    }, Aa = S._registerPluginProp = function(a2) {
      if (!i[a2]) {
        var b2 = a2.charAt(0).toUpperCase() + a2.substr(1) + "Plugin";
        za(a2, { parser: function(a3, c2, d2, e2, f2, g2, j2) {
          var k2 = h.com.greensock.plugins[b2];
          return k2 ? (k2._cssRegister(), i[d2].parse(a3, c2, d2, e2, f2, g2, j2)) : (W("Error: " + b2 + " js file not loaded."), f2);
        } });
      }
    };
    j = ya.prototype, j.parseComplex = function(a2, b2, c2, d2, e2, f2) {
      var g2, h2, i2, j2, k2, l2, m2 = this.keyword;
      if (this.multi && (I.test(c2) || I.test(b2) ? (h2 = b2.replace(I, "|").split("|"), i2 = c2.replace(I, "|").split("|")) : m2 && (h2 = [b2], i2 = [c2])), i2) {
        for (j2 = i2.length > h2.length ? i2.length : h2.length, g2 = 0; j2 > g2; g2++)
          b2 = h2[g2] = h2[g2] || this.dflt, c2 = i2[g2] = i2[g2] || this.dflt, m2 && (k2 = b2.indexOf(m2), l2 = c2.indexOf(m2), k2 !== l2 && (-1 === l2 ? h2[g2] = h2[g2].split(m2).join("") : -1 === k2 && (h2[g2] += " " + m2)));
        b2 = h2.join(", "), c2 = i2.join(", ");
      }
      return wa(a2, this.p, b2, c2, this.clrs, this.dflt, d2, this.pr, e2, f2);
    }, j.parse = function(a2, b2, c2, d2, f2, g2, h2) {
      return this.parseComplex(a2.style, this.format(aa(a2, this.p, e, false, this.dflt)), this.format(b2), f2, g2);
    }, g.registerSpecialProp = function(a2, b2, c2) {
      za(a2, { parser: function(a3, d2, e2, f2, g2, h2, i2) {
        var j2 = new ua(a3, e2, 0, 0, g2, 2, e2, false, c2);
        return j2.plugin = h2, j2.setRatio = b2(a3, d2, f2._tween, e2), j2;
      }, priority: c2 });
    }, g.useSVGTransformAttr = true;
    var Ba, Ca = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","), Da = Z("transform"), Ea = X + "transform", Fa = Z("transformOrigin"), Ga = null !== Z("perspective"), Ha = S.Transform = function() {
      this.perspective = parseFloat(g.defaultTransformPerspective) || 0, this.force3D = g.defaultForce3D !== false && Ga ? g.defaultForce3D || "auto" : false;
    }, Ia = _gsScope.SVGElement, Ja = function(a2, b2, c2) {
      var d2, e2 = O.createElementNS("http://www.w3.org/2000/svg", a2), f2 = /([a-z])([A-Z])/g;
      for (d2 in c2)
        e2.setAttributeNS(null, d2.replace(f2, "$1-$2").toLowerCase(), c2[d2]);
      return b2.appendChild(e2), e2;
    }, Ka = O.documentElement || {}, La = function() {
      var a2, b2, c2, d2 = p || /Android/i.test(T) && !_gsScope.chrome;
      return O.createElementNS && !d2 && (a2 = Ja("svg", Ka), b2 = Ja("rect", a2, { width: 100, height: 50, x: 100 }), c2 = b2.getBoundingClientRect().width, b2.style[Fa] = "50% 50%", b2.style[Da] = "scaleX(0.5)", d2 = c2 === b2.getBoundingClientRect().width && !(n && Ga), Ka.removeChild(a2)), d2;
    }(), Ma = function(a2, b2, c2, d2, e2, f2) {
      var h2, i2, j2, k2, l2, m2, n2, o2, p2, q2, r2, s2, t2, u2, v2 = a2._gsTransform, w2 = Ra(a2, true);
      v2 && (t2 = v2.xOrigin, u2 = v2.yOrigin), (!d2 || (h2 = d2.split(" ")).length < 2) && (n2 = a2.getBBox(), 0 === n2.x && 0 === n2.y && n2.width + n2.height === 0 && (n2 = { x: parseFloat(a2.hasAttribute("x") ? a2.getAttribute("x") : a2.hasAttribute("cx") ? a2.getAttribute("cx") : 0) || 0, y: parseFloat(a2.hasAttribute("y") ? a2.getAttribute("y") : a2.hasAttribute("cy") ? a2.getAttribute("cy") : 0) || 0, width: 0, height: 0 }), b2 = ia(b2).split(" "), h2 = [(-1 !== b2[0].indexOf("%") ? parseFloat(b2[0]) / 100 * n2.width : parseFloat(b2[0])) + n2.x, (-1 !== b2[1].indexOf("%") ? parseFloat(b2[1]) / 100 * n2.height : parseFloat(b2[1])) + n2.y]), c2.xOrigin = k2 = parseFloat(h2[0]), c2.yOrigin = l2 = parseFloat(h2[1]), d2 && w2 !== Qa && (m2 = w2[0], n2 = w2[1], o2 = w2[2], p2 = w2[3], q2 = w2[4], r2 = w2[5], s2 = m2 * p2 - n2 * o2, s2 && (i2 = k2 * (p2 / s2) + l2 * (-o2 / s2) + (o2 * r2 - p2 * q2) / s2, j2 = k2 * (-n2 / s2) + l2 * (m2 / s2) - (m2 * r2 - n2 * q2) / s2, k2 = c2.xOrigin = h2[0] = i2, l2 = c2.yOrigin = h2[1] = j2)), v2 && (f2 && (c2.xOffset = v2.xOffset, c2.yOffset = v2.yOffset, v2 = c2), e2 || e2 !== false && g.defaultSmoothOrigin !== false ? (i2 = k2 - t2, j2 = l2 - u2, v2.xOffset += i2 * w2[0] + j2 * w2[2] - i2, v2.yOffset += i2 * w2[1] + j2 * w2[3] - j2) : v2.xOffset = v2.yOffset = 0), f2 || a2.setAttribute("data-svg-origin", h2.join(" "));
    }, Na = function(a2) {
      var b2, c2 = P("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), d2 = this.parentNode, e2 = this.nextSibling, f2 = this.style.cssText;
      if (Ka.appendChild(c2), c2.appendChild(this), this.style.display = "block", a2)
        try {
          b2 = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Na;
        } catch (g2) {
        }
      else
        this._originalGetBBox && (b2 = this._originalGetBBox());
      return e2 ? d2.insertBefore(this, e2) : d2.appendChild(this), Ka.removeChild(c2), this.style.cssText = f2, b2;
    }, Oa = function(a2) {
      try {
        return a2.getBBox();
      } catch (b2) {
        return Na.call(a2, true);
      }
    }, Pa = function(a2) {
      return !(!Ia || !a2.getCTM || a2.parentNode && !a2.ownerSVGElement || !Oa(a2));
    }, Qa = [1, 0, 0, 1, 0, 0], Ra = function(a2, b2) {
      var c2, d2, e2, f2, g2, h2, i2, j2 = a2._gsTransform || new Ha(), k2 = 1e5, l2 = a2.style;
      if (Da ? d2 = aa(a2, Ea, null, true) : a2.currentStyle && (d2 = a2.currentStyle.filter.match(G), d2 = d2 && 4 === d2.length ? [d2[0].substr(4), Number(d2[2].substr(4)), Number(d2[1].substr(4)), d2[3].substr(4), j2.x || 0, j2.y || 0].join(",") : ""), c2 = !d2 || "none" === d2 || "matrix(1, 0, 0, 1, 0, 0)" === d2, Da && c2 && !a2.offsetParent && (f2 = l2.display, l2.display = "block", i2 = a2.parentNode, i2 && a2.offsetParent || (g2 = 1, h2 = a2.nextSibling, Ka.appendChild(a2)), d2 = aa(a2, Ea, null, true), c2 = !d2 || "none" === d2 || "matrix(1, 0, 0, 1, 0, 0)" === d2, f2 ? l2.display = f2 : Wa(l2, "display"), g2 && (h2 ? i2.insertBefore(a2, h2) : i2 ? i2.appendChild(a2) : Ka.removeChild(a2))), (j2.svg || a2.getCTM && Pa(a2)) && (c2 && -1 !== (l2[Da] + "").indexOf("matrix") && (d2 = l2[Da], c2 = 0), e2 = a2.getAttribute("transform"), c2 && e2 && (e2 = a2.transform.baseVal.consolidate().matrix, d2 = "matrix(" + e2.a + "," + e2.b + "," + e2.c + "," + e2.d + "," + e2.e + "," + e2.f + ")", c2 = 0)), c2)
        return Qa;
      for (e2 = (d2 || "").match(s) || [], xa = e2.length; --xa > -1; )
        f2 = Number(e2[xa]), e2[xa] = (g2 = f2 - (f2 |= 0)) ? (g2 * k2 + (0 > g2 ? -0.5 : 0.5) | 0) / k2 + f2 : f2;
      return b2 && e2.length > 6 ? [e2[0], e2[1], e2[4], e2[5], e2[12], e2[13]] : e2;
    }, Sa = S.getTransform = function(a2, c2, d2, e2) {
      if (a2._gsTransform && d2 && !e2)
        return a2._gsTransform;
      var f2, h2, i2, j2, k2, l2, m2 = d2 ? a2._gsTransform || new Ha() : new Ha(), n2 = m2.scaleX < 0, o2 = 2e-5, p2 = 1e5, q2 = Ga ? parseFloat(aa(a2, Fa, c2, false, "0 0 0").split(" ")[2]) || m2.zOrigin || 0 : 0, r2 = parseFloat(g.defaultTransformPerspective) || 0;
      if (m2.svg = !(!a2.getCTM || !Pa(a2)), m2.svg && (Ma(a2, aa(a2, Fa, c2, false, "50% 50%") + "", m2, a2.getAttribute("data-svg-origin")), Ba = g.useSVGTransformAttr || La), f2 = Ra(a2), f2 !== Qa) {
        if (16 === f2.length) {
          var s2, t2, u2, v2, w2, x2 = f2[0], y2 = f2[1], z2 = f2[2], A2 = f2[3], B2 = f2[4], C2 = f2[5], D2 = f2[6], E2 = f2[7], F2 = f2[8], G2 = f2[9], H2 = f2[10], I2 = f2[12], J2 = f2[13], K2 = f2[14], M2 = f2[11], N2 = Math.atan2(D2, H2);
          m2.zOrigin && (K2 = -m2.zOrigin, I2 = F2 * K2 - f2[12], J2 = G2 * K2 - f2[13], K2 = H2 * K2 + m2.zOrigin - f2[14]), m2.rotationX = N2 * L, N2 && (v2 = Math.cos(-N2), w2 = Math.sin(-N2), s2 = B2 * v2 + F2 * w2, t2 = C2 * v2 + G2 * w2, u2 = D2 * v2 + H2 * w2, F2 = B2 * -w2 + F2 * v2, G2 = C2 * -w2 + G2 * v2, H2 = D2 * -w2 + H2 * v2, M2 = E2 * -w2 + M2 * v2, B2 = s2, C2 = t2, D2 = u2), N2 = Math.atan2(-z2, H2), m2.rotationY = N2 * L, N2 && (v2 = Math.cos(-N2), w2 = Math.sin(-N2), s2 = x2 * v2 - F2 * w2, t2 = y2 * v2 - G2 * w2, u2 = z2 * v2 - H2 * w2, G2 = y2 * w2 + G2 * v2, H2 = z2 * w2 + H2 * v2, M2 = A2 * w2 + M2 * v2, x2 = s2, y2 = t2, z2 = u2), N2 = Math.atan2(y2, x2), m2.rotation = N2 * L, N2 && (v2 = Math.cos(N2), w2 = Math.sin(N2), s2 = x2 * v2 + y2 * w2, t2 = B2 * v2 + C2 * w2, u2 = F2 * v2 + G2 * w2, y2 = y2 * v2 - x2 * w2, C2 = C2 * v2 - B2 * w2, G2 = G2 * v2 - F2 * w2, x2 = s2, B2 = t2, F2 = u2), m2.rotationX && Math.abs(m2.rotationX) + Math.abs(m2.rotation) > 359.9 && (m2.rotationX = m2.rotation = 0, m2.rotationY = 180 - m2.rotationY), N2 = Math.atan2(B2, C2), m2.scaleX = (Math.sqrt(x2 * x2 + y2 * y2 + z2 * z2) * p2 + 0.5 | 0) / p2, m2.scaleY = (Math.sqrt(C2 * C2 + D2 * D2) * p2 + 0.5 | 0) / p2, m2.scaleZ = (Math.sqrt(F2 * F2 + G2 * G2 + H2 * H2) * p2 + 0.5 | 0) / p2, x2 /= m2.scaleX, B2 /= m2.scaleY, y2 /= m2.scaleX, C2 /= m2.scaleY, Math.abs(N2) > o2 ? (m2.skewX = N2 * L, B2 = 0, "simple" !== m2.skewType && (m2.scaleY *= 1 / Math.cos(N2))) : m2.skewX = 0, m2.perspective = M2 ? 1 / (0 > M2 ? -M2 : M2) : 0, m2.x = I2, m2.y = J2, m2.z = K2, m2.svg && (m2.x -= m2.xOrigin - (m2.xOrigin * x2 - m2.yOrigin * B2), m2.y -= m2.yOrigin - (m2.yOrigin * y2 - m2.xOrigin * C2));
        } else if (!Ga || e2 || !f2.length || m2.x !== f2[4] || m2.y !== f2[5] || !m2.rotationX && !m2.rotationY) {
          var O2 = f2.length >= 6, P2 = O2 ? f2[0] : 1, Q2 = f2[1] || 0, R2 = f2[2] || 0, S2 = O2 ? f2[3] : 1;
          m2.x = f2[4] || 0, m2.y = f2[5] || 0, i2 = Math.sqrt(P2 * P2 + Q2 * Q2), j2 = Math.sqrt(S2 * S2 + R2 * R2), k2 = P2 || Q2 ? Math.atan2(Q2, P2) * L : m2.rotation || 0, l2 = R2 || S2 ? Math.atan2(R2, S2) * L + k2 : m2.skewX || 0, m2.scaleX = i2, m2.scaleY = j2, m2.rotation = k2, m2.skewX = l2, Ga && (m2.rotationX = m2.rotationY = m2.z = 0, m2.perspective = r2, m2.scaleZ = 1), m2.svg && (m2.x -= m2.xOrigin - (m2.xOrigin * P2 + m2.yOrigin * R2), m2.y -= m2.yOrigin - (m2.xOrigin * Q2 + m2.yOrigin * S2));
        }
        Math.abs(m2.skewX) > 90 && Math.abs(m2.skewX) < 270 && (n2 ? (m2.scaleX *= -1, m2.skewX += m2.rotation <= 0 ? 180 : -180, m2.rotation += m2.rotation <= 0 ? 180 : -180) : (m2.scaleY *= -1, m2.skewX += m2.skewX <= 0 ? 180 : -180)), m2.zOrigin = q2;
        for (h2 in m2)
          m2[h2] < o2 && m2[h2] > -o2 && (m2[h2] = 0);
      }
      return d2 && (a2._gsTransform = m2, m2.svg && (Ba && a2.style[Da] ? b.delayedCall(1e-3, function() {
        Wa(a2.style, Da);
      }) : !Ba && a2.getAttribute("transform") && b.delayedCall(1e-3, function() {
        a2.removeAttribute("transform");
      }))), m2;
    }, Ta = function(a2) {
      var b2, c2, d2 = this.data, e2 = -d2.rotation * K, f2 = e2 + d2.skewX * K, g2 = 1e5, h2 = (Math.cos(e2) * d2.scaleX * g2 | 0) / g2, i2 = (Math.sin(e2) * d2.scaleX * g2 | 0) / g2, j2 = (Math.sin(f2) * -d2.scaleY * g2 | 0) / g2, k2 = (Math.cos(f2) * d2.scaleY * g2 | 0) / g2, l2 = this.t.style, m2 = this.t.currentStyle;
      if (m2) {
        c2 = i2, i2 = -j2, j2 = -c2, b2 = m2.filter, l2.filter = "";
        var n2, o2, q2 = this.t.offsetWidth, r2 = this.t.offsetHeight, s2 = "absolute" !== m2.position, t2 = "progid:DXImageTransform.Microsoft.Matrix(M11=" + h2 + ", M12=" + i2 + ", M21=" + j2 + ", M22=" + k2, u2 = d2.x + q2 * d2.xPercent / 100, v2 = d2.y + r2 * d2.yPercent / 100;
        if (null != d2.ox && (n2 = (d2.oxp ? q2 * d2.ox * 0.01 : d2.ox) - q2 / 2, o2 = (d2.oyp ? r2 * d2.oy * 0.01 : d2.oy) - r2 / 2, u2 += n2 - (n2 * h2 + o2 * i2), v2 += o2 - (n2 * j2 + o2 * k2)), s2 ? (n2 = q2 / 2, o2 = r2 / 2, t2 += ", Dx=" + (n2 - (n2 * h2 + o2 * i2) + u2) + ", Dy=" + (o2 - (n2 * j2 + o2 * k2) + v2) + ")") : t2 += ", sizingMethod='auto expand')", -1 !== b2.indexOf("DXImageTransform.Microsoft.Matrix(") ? l2.filter = b2.replace(H, t2) : l2.filter = t2 + " " + b2, (0 === a2 || 1 === a2) && 1 === h2 && 0 === i2 && 0 === j2 && 1 === k2 && (s2 && -1 === t2.indexOf("Dx=0, Dy=0") || x.test(b2) && 100 !== parseFloat(RegExp.$1) || -1 === b2.indexOf(b2.indexOf("Alpha")) && l2.removeAttribute("filter")), !s2) {
          var y2, z2, A2, B2 = 8 > p ? 1 : -1;
          for (n2 = d2.ieOffsetX || 0, o2 = d2.ieOffsetY || 0, d2.ieOffsetX = Math.round((q2 - ((0 > h2 ? -h2 : h2) * q2 + (0 > i2 ? -i2 : i2) * r2)) / 2 + u2), d2.ieOffsetY = Math.round((r2 - ((0 > k2 ? -k2 : k2) * r2 + (0 > j2 ? -j2 : j2) * q2)) / 2 + v2), xa = 0; 4 > xa; xa++)
            z2 = ga[xa], y2 = m2[z2], c2 = -1 !== y2.indexOf("px") ? parseFloat(y2) : ba(this.t, z2, parseFloat(y2), y2.replace(w, "")) || 0, A2 = c2 !== d2[z2] ? 2 > xa ? -d2.ieOffsetX : -d2.ieOffsetY : 2 > xa ? n2 - d2.ieOffsetX : o2 - d2.ieOffsetY, l2[z2] = (d2[z2] = Math.round(c2 - A2 * (0 === xa || 2 === xa ? 1 : B2))) + "px";
        }
      }
    }, Ua = S.set3DTransformRatio = S.setTransformRatio = function(a2) {
      var b2, c2, d2, e2, f2, g2, h2, i2, j2, k2, l2, m2, o2, p2, q2, r2, s2, t2, u2, v2, w2, x2, y2, z2 = this.data, A2 = this.t.style, B2 = z2.rotation, C2 = z2.rotationX, D2 = z2.rotationY, E2 = z2.scaleX, F2 = z2.scaleY, G2 = z2.scaleZ, H2 = z2.x, I2 = z2.y, J2 = z2.z, L2 = z2.svg, M2 = z2.perspective, N2 = z2.force3D, O2 = z2.skewY, P2 = z2.skewX;
      if (O2 && (P2 += O2, B2 += O2), ((1 === a2 || 0 === a2) && "auto" === N2 && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !N2) && !J2 && !M2 && !D2 && !C2 && 1 === G2 || Ba && L2 || !Ga)
        return void (B2 || P2 || L2 ? (B2 *= K, x2 = P2 * K, y2 = 1e5, c2 = Math.cos(B2) * E2, f2 = Math.sin(B2) * E2, d2 = Math.sin(B2 - x2) * -F2, g2 = Math.cos(B2 - x2) * F2, x2 && "simple" === z2.skewType && (b2 = Math.tan(x2 - O2 * K), b2 = Math.sqrt(1 + b2 * b2), d2 *= b2, g2 *= b2, O2 && (b2 = Math.tan(O2 * K), b2 = Math.sqrt(1 + b2 * b2), c2 *= b2, f2 *= b2)), L2 && (H2 += z2.xOrigin - (z2.xOrigin * c2 + z2.yOrigin * d2) + z2.xOffset, I2 += z2.yOrigin - (z2.xOrigin * f2 + z2.yOrigin * g2) + z2.yOffset, Ba && (z2.xPercent || z2.yPercent) && (q2 = this.t.getBBox(), H2 += 0.01 * z2.xPercent * q2.width, I2 += 0.01 * z2.yPercent * q2.height), q2 = 1e-6, q2 > H2 && H2 > -q2 && (H2 = 0), q2 > I2 && I2 > -q2 && (I2 = 0)), u2 = (c2 * y2 | 0) / y2 + "," + (f2 * y2 | 0) / y2 + "," + (d2 * y2 | 0) / y2 + "," + (g2 * y2 | 0) / y2 + "," + H2 + "," + I2 + ")", L2 && Ba ? this.t.setAttribute("transform", "matrix(" + u2) : A2[Da] = (z2.xPercent || z2.yPercent ? "translate(" + z2.xPercent + "%," + z2.yPercent + "%) matrix(" : "matrix(") + u2) : A2[Da] = (z2.xPercent || z2.yPercent ? "translate(" + z2.xPercent + "%," + z2.yPercent + "%) matrix(" : "matrix(") + E2 + ",0,0," + F2 + "," + H2 + "," + I2 + ")");
      if (n && (q2 = 1e-4, q2 > E2 && E2 > -q2 && (E2 = G2 = 2e-5), q2 > F2 && F2 > -q2 && (F2 = G2 = 2e-5), !M2 || z2.z || z2.rotationX || z2.rotationY || (M2 = 0)), B2 || P2)
        B2 *= K, r2 = c2 = Math.cos(B2), s2 = f2 = Math.sin(B2), P2 && (B2 -= P2 * K, r2 = Math.cos(B2), s2 = Math.sin(B2), "simple" === z2.skewType && (b2 = Math.tan((P2 - O2) * K), b2 = Math.sqrt(1 + b2 * b2), r2 *= b2, s2 *= b2, z2.skewY && (b2 = Math.tan(O2 * K), b2 = Math.sqrt(1 + b2 * b2), c2 *= b2, f2 *= b2))), d2 = -s2, g2 = r2;
      else {
        if (!(D2 || C2 || 1 !== G2 || M2 || L2))
          return void (A2[Da] = (z2.xPercent || z2.yPercent ? "translate(" + z2.xPercent + "%," + z2.yPercent + "%) translate3d(" : "translate3d(") + H2 + "px," + I2 + "px," + J2 + "px)" + (1 !== E2 || 1 !== F2 ? " scale(" + E2 + "," + F2 + ")" : ""));
        c2 = g2 = 1, d2 = f2 = 0;
      }
      k2 = 1, e2 = h2 = i2 = j2 = l2 = m2 = 0, o2 = M2 ? -1 / M2 : 0, p2 = z2.zOrigin, q2 = 1e-6, v2 = ",", w2 = "0", B2 = D2 * K, B2 && (r2 = Math.cos(B2), s2 = Math.sin(B2), i2 = -s2, l2 = o2 * -s2, e2 = c2 * s2, h2 = f2 * s2, k2 = r2, o2 *= r2, c2 *= r2, f2 *= r2), B2 = C2 * K, B2 && (r2 = Math.cos(B2), s2 = Math.sin(B2), b2 = d2 * r2 + e2 * s2, t2 = g2 * r2 + h2 * s2, j2 = k2 * s2, m2 = o2 * s2, e2 = d2 * -s2 + e2 * r2, h2 = g2 * -s2 + h2 * r2, k2 *= r2, o2 *= r2, d2 = b2, g2 = t2), 1 !== G2 && (e2 *= G2, h2 *= G2, k2 *= G2, o2 *= G2), 1 !== F2 && (d2 *= F2, g2 *= F2, j2 *= F2, m2 *= F2), 1 !== E2 && (c2 *= E2, f2 *= E2, i2 *= E2, l2 *= E2), (p2 || L2) && (p2 && (H2 += e2 * -p2, I2 += h2 * -p2, J2 += k2 * -p2 + p2), L2 && (H2 += z2.xOrigin - (z2.xOrigin * c2 + z2.yOrigin * d2) + z2.xOffset, I2 += z2.yOrigin - (z2.xOrigin * f2 + z2.yOrigin * g2) + z2.yOffset), q2 > H2 && H2 > -q2 && (H2 = w2), q2 > I2 && I2 > -q2 && (I2 = w2), q2 > J2 && J2 > -q2 && (J2 = 0)), u2 = z2.xPercent || z2.yPercent ? "translate(" + z2.xPercent + "%," + z2.yPercent + "%) matrix3d(" : "matrix3d(", u2 += (q2 > c2 && c2 > -q2 ? w2 : c2) + v2 + (q2 > f2 && f2 > -q2 ? w2 : f2) + v2 + (q2 > i2 && i2 > -q2 ? w2 : i2), u2 += v2 + (q2 > l2 && l2 > -q2 ? w2 : l2) + v2 + (q2 > d2 && d2 > -q2 ? w2 : d2) + v2 + (q2 > g2 && g2 > -q2 ? w2 : g2), C2 || D2 || 1 !== G2 ? (u2 += v2 + (q2 > j2 && j2 > -q2 ? w2 : j2) + v2 + (q2 > m2 && m2 > -q2 ? w2 : m2) + v2 + (q2 > e2 && e2 > -q2 ? w2 : e2), u2 += v2 + (q2 > h2 && h2 > -q2 ? w2 : h2) + v2 + (q2 > k2 && k2 > -q2 ? w2 : k2) + v2 + (q2 > o2 && o2 > -q2 ? w2 : o2) + v2) : u2 += ",0,0,0,0,1,0,", u2 += H2 + v2 + I2 + v2 + J2 + v2 + (M2 ? 1 + -J2 / M2 : 1) + ")", A2[Da] = u2;
    };
    j = Ha.prototype, j.x = j.y = j.z = j.skewX = j.skewY = j.rotation = j.rotationX = j.rotationY = j.zOrigin = j.xPercent = j.yPercent = j.xOffset = j.yOffset = 0, j.scaleX = j.scaleY = j.scaleZ = 1, za("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", { parser: function(a2, b2, c2, d2, f2, h2, i2) {
      if (d2._lastParsedTransform === i2)
        return f2;
      d2._lastParsedTransform = i2;
      var j2 = i2.scale && "function" == typeof i2.scale ? i2.scale : 0;
      j2 && (i2.scale = j2(r, a2));
      var k2, l2, m2, n2, o2, p2, s2, t2, u2, v2 = a2._gsTransform, w2 = a2.style, x2 = 1e-6, y2 = Ca.length, z2 = i2, A2 = {}, B2 = "transformOrigin", C2 = Sa(a2, e, true, z2.parseTransform), D2 = z2.transform && ("function" == typeof z2.transform ? z2.transform(r, q) : z2.transform);
      if (C2.skewType = z2.skewType || C2.skewType || g.defaultSkewType, d2._transform = C2, "rotationZ" in z2 && (z2.rotation = z2.rotationZ), D2 && "string" == typeof D2 && Da)
        l2 = Q.style, l2[Da] = D2, l2.display = "block", l2.position = "absolute", -1 !== D2.indexOf("%") && (l2.width = aa(a2, "width"), l2.height = aa(a2, "height")), O.body.appendChild(Q), k2 = Sa(Q, null, false), "simple" === C2.skewType && (k2.scaleY *= Math.cos(k2.skewX * K)), C2.svg && (p2 = C2.xOrigin, s2 = C2.yOrigin, k2.x -= C2.xOffset, k2.y -= C2.yOffset, (z2.transformOrigin || z2.svgOrigin) && (D2 = {}, Ma(a2, ia(z2.transformOrigin), D2, z2.svgOrigin, z2.smoothOrigin, true), p2 = D2.xOrigin, s2 = D2.yOrigin, k2.x -= D2.xOffset - C2.xOffset, k2.y -= D2.yOffset - C2.yOffset), (p2 || s2) && (t2 = Ra(Q, true), k2.x -= p2 - (p2 * t2[0] + s2 * t2[2]), k2.y -= s2 - (p2 * t2[1] + s2 * t2[3]))), O.body.removeChild(Q), k2.perspective || (k2.perspective = C2.perspective), null != z2.xPercent && (k2.xPercent = ka(z2.xPercent, C2.xPercent)), null != z2.yPercent && (k2.yPercent = ka(z2.yPercent, C2.yPercent));
      else if ("object" == typeof z2) {
        if (k2 = { scaleX: ka(null != z2.scaleX ? z2.scaleX : z2.scale, C2.scaleX), scaleY: ka(null != z2.scaleY ? z2.scaleY : z2.scale, C2.scaleY), scaleZ: ka(z2.scaleZ, C2.scaleZ), x: ka(z2.x, C2.x), y: ka(z2.y, C2.y), z: ka(z2.z, C2.z), xPercent: ka(z2.xPercent, C2.xPercent), yPercent: ka(z2.yPercent, C2.yPercent), perspective: ka(z2.transformPerspective, C2.perspective) }, o2 = z2.directionalRotation, null != o2)
          if ("object" == typeof o2)
            for (l2 in o2)
              z2[l2] = o2[l2];
          else
            z2.rotation = o2;
        "string" == typeof z2.x && -1 !== z2.x.indexOf("%") && (k2.x = 0, k2.xPercent = ka(z2.x, C2.xPercent)), "string" == typeof z2.y && -1 !== z2.y.indexOf("%") && (k2.y = 0, k2.yPercent = ka(z2.y, C2.yPercent)), k2.rotation = la("rotation" in z2 ? z2.rotation : "shortRotation" in z2 ? z2.shortRotation + "_short" : C2.rotation, C2.rotation, "rotation", A2), Ga && (k2.rotationX = la("rotationX" in z2 ? z2.rotationX : "shortRotationX" in z2 ? z2.shortRotationX + "_short" : C2.rotationX || 0, C2.rotationX, "rotationX", A2), k2.rotationY = la("rotationY" in z2 ? z2.rotationY : "shortRotationY" in z2 ? z2.shortRotationY + "_short" : C2.rotationY || 0, C2.rotationY, "rotationY", A2)), k2.skewX = la(z2.skewX, C2.skewX), k2.skewY = la(z2.skewY, C2.skewY);
      }
      for (Ga && null != z2.force3D && (C2.force3D = z2.force3D, n2 = true), m2 = C2.force3D || C2.z || C2.rotationX || C2.rotationY || k2.z || k2.rotationX || k2.rotationY || k2.perspective, m2 || null == z2.scale || (k2.scaleZ = 1); --y2 > -1; )
        u2 = Ca[y2], D2 = k2[u2] - C2[u2], (D2 > x2 || -x2 > D2 || null != z2[u2] || null != M[u2]) && (n2 = true, f2 = new ua(C2, u2, C2[u2], D2, f2), u2 in A2 && (f2.e = A2[u2]), f2.xs0 = 0, f2.plugin = h2, d2._overwriteProps.push(f2.n));
      return D2 = "function" == typeof z2.transformOrigin ? z2.transformOrigin(r, q) : z2.transformOrigin, C2.svg && (D2 || z2.svgOrigin) && (p2 = C2.xOffset, s2 = C2.yOffset, Ma(a2, ia(D2), k2, z2.svgOrigin, z2.smoothOrigin), f2 = va(C2, "xOrigin", (v2 ? C2 : k2).xOrigin, k2.xOrigin, f2, B2), f2 = va(C2, "yOrigin", (v2 ? C2 : k2).yOrigin, k2.yOrigin, f2, B2), (p2 !== C2.xOffset || s2 !== C2.yOffset) && (f2 = va(C2, "xOffset", v2 ? p2 : C2.xOffset, C2.xOffset, f2, B2), f2 = va(C2, "yOffset", v2 ? s2 : C2.yOffset, C2.yOffset, f2, B2)), D2 = "0px 0px"), (D2 || Ga && m2 && C2.zOrigin) && (Da ? (n2 = true, u2 = Fa, D2 || (D2 = (aa(a2, u2, e, false, "50% 50%") + "").split(" "), D2 = D2[0] + " " + D2[1] + " " + C2.zOrigin + "px"), D2 += "", f2 = new ua(w2, u2, 0, 0, f2, -1, B2), f2.b = w2[u2], f2.plugin = h2, Ga ? (l2 = C2.zOrigin, D2 = D2.split(" "), C2.zOrigin = (D2.length > 2 ? parseFloat(D2[2]) : l2) || 0, f2.xs0 = f2.e = D2[0] + " " + (D2[1] || "50%") + " 0px", f2 = new ua(C2, "zOrigin", 0, 0, f2, -1, f2.n), f2.b = l2, f2.xs0 = f2.e = C2.zOrigin) : f2.xs0 = f2.e = D2) : ia(D2 + "", C2)), n2 && (d2._transformType = C2.svg && Ba || !m2 && 3 !== this._transformType ? 2 : 3), j2 && (i2.scale = j2), f2;
    }, allowFunc: true, prefix: true }), za("boxShadow", { defaultValue: "0px 0px 0px 0px #999", prefix: true, color: true, multi: true, keyword: "inset" }), za("clipPath", { defaultValue: "inset(0px)", prefix: true, multi: true, formatter: ra("inset(0px 0px 0px 0px)", false, true) }), za("borderRadius", { defaultValue: "0px", parser: function(a2, b2, c2, f2, g2, h2) {
      b2 = this.format(b2);
      var i2, j2, k2, l2, m2, n2, o2, p2, q2, r2, s2, t2, u2, v2, w2, x2, y2 = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], z2 = a2.style;
      for (q2 = parseFloat(a2.offsetWidth), r2 = parseFloat(a2.offsetHeight), i2 = b2.split(" "), j2 = 0; j2 < y2.length; j2++)
        this.p.indexOf("border") && (y2[j2] = Z(y2[j2])), m2 = l2 = aa(a2, y2[j2], e, false, "0px"), -1 !== m2.indexOf(" ") && (l2 = m2.split(" "), m2 = l2[0], l2 = l2[1]), n2 = k2 = i2[j2], o2 = parseFloat(m2), t2 = m2.substr((o2 + "").length), u2 = "=" === n2.charAt(1), u2 ? (p2 = parseInt(n2.charAt(0) + "1", 10), n2 = n2.substr(2), p2 *= parseFloat(n2), s2 = n2.substr((p2 + "").length - (0 > p2 ? 1 : 0)) || "") : (p2 = parseFloat(n2), s2 = n2.substr((p2 + "").length)), "" === s2 && (s2 = d[c2] || t2), s2 !== t2 && (v2 = ba(a2, "borderLeft", o2, t2), w2 = ba(a2, "borderTop", o2, t2), "%" === s2 ? (m2 = v2 / q2 * 100 + "%", l2 = w2 / r2 * 100 + "%") : "em" === s2 ? (x2 = ba(a2, "borderLeft", 1, "em"), m2 = v2 / x2 + "em", l2 = w2 / x2 + "em") : (m2 = v2 + "px", l2 = w2 + "px"), u2 && (n2 = parseFloat(m2) + p2 + s2, k2 = parseFloat(l2) + p2 + s2)), g2 = wa(z2, y2[j2], m2 + " " + l2, n2 + " " + k2, false, "0px", g2);
      return g2;
    }, prefix: true, formatter: ra("0px 0px 0px 0px", false, true) }), za("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", { defaultValue: "0px", parser: function(a2, b2, c2, d2, f2, g2) {
      return wa(a2.style, c2, this.format(aa(a2, c2, e, false, "0px 0px")), this.format(b2), false, "0px", f2);
    }, prefix: true, formatter: ra("0px 0px", false, true) }), za("backgroundPosition", { defaultValue: "0 0", parser: function(a2, b2, c2, d2, f2, g2) {
      var h2, i2, j2, k2, l2, m2, n2 = "background-position", o2 = e || _(a2), q2 = this.format((o2 ? p ? o2.getPropertyValue(n2 + "-x") + " " + o2.getPropertyValue(n2 + "-y") : o2.getPropertyValue(n2) : a2.currentStyle.backgroundPositionX + " " + a2.currentStyle.backgroundPositionY) || "0 0"), r2 = this.format(b2);
      if (-1 !== q2.indexOf("%") != (-1 !== r2.indexOf("%")) && r2.split(",").length < 2 && (m2 = aa(a2, "backgroundImage").replace(D, ""), m2 && "none" !== m2)) {
        for (h2 = q2.split(" "), i2 = r2.split(" "), R.setAttribute("src", m2), j2 = 2; --j2 > -1; )
          q2 = h2[j2], k2 = -1 !== q2.indexOf("%"), k2 !== (-1 !== i2[j2].indexOf("%")) && (l2 = 0 === j2 ? a2.offsetWidth - R.width : a2.offsetHeight - R.height, h2[j2] = k2 ? parseFloat(q2) / 100 * l2 + "px" : parseFloat(q2) / l2 * 100 + "%");
        q2 = h2.join(" ");
      }
      return this.parseComplex(a2.style, q2, r2, f2, g2);
    }, formatter: ia }), za("backgroundSize", { defaultValue: "0 0", formatter: function(a2) {
      return a2 += "", "co" === a2.substr(0, 2) ? a2 : ia(-1 === a2.indexOf(" ") ? a2 + " " + a2 : a2);
    } }), za("perspective", { defaultValue: "0px", prefix: true }), za("perspectiveOrigin", { defaultValue: "50% 50%", prefix: true }), za("transformStyle", { prefix: true }), za("backfaceVisibility", { prefix: true }), za("userSelect", { prefix: true }), za("margin", { parser: sa("marginTop,marginRight,marginBottom,marginLeft") }), za("padding", { parser: sa("paddingTop,paddingRight,paddingBottom,paddingLeft") }), za("clip", { defaultValue: "rect(0px,0px,0px,0px)", parser: function(a2, b2, c2, d2, f2, g2) {
      var h2, i2, j2;
      return 9 > p ? (i2 = a2.currentStyle, j2 = 8 > p ? " " : ",", h2 = "rect(" + i2.clipTop + j2 + i2.clipRight + j2 + i2.clipBottom + j2 + i2.clipLeft + ")", b2 = this.format(b2).split(",").join(j2)) : (h2 = this.format(aa(a2, this.p, e, false, this.dflt)), b2 = this.format(b2)), this.parseComplex(a2.style, h2, b2, f2, g2);
    } }), za("textShadow", { defaultValue: "0px 0px 0px #999", color: true, multi: true }), za("autoRound,strictUnits", { parser: function(a2, b2, c2, d2, e2) {
      return e2;
    } }), za("border", { defaultValue: "0px solid #000", parser: function(a2, b2, c2, d2, f2, g2) {
      var h2 = aa(a2, "borderTopWidth", e, false, "0px"), i2 = this.format(b2).split(" "), j2 = i2[0].replace(w, "");
      return "px" !== j2 && (h2 = parseFloat(h2) / ba(a2, "borderTopWidth", 1, j2) + j2), this.parseComplex(a2.style, this.format(h2 + " " + aa(a2, "borderTopStyle", e, false, "solid") + " " + aa(a2, "borderTopColor", e, false, "#000")), i2.join(" "), f2, g2);
    }, color: true, formatter: function(a2) {
      var b2 = a2.split(" ");
      return b2[0] + " " + (b2[1] || "solid") + " " + (a2.match(qa) || ["#000"])[0];
    } }), za("borderWidth", { parser: sa("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth") }), za("float,cssFloat,styleFloat", { parser: function(a2, b2, c2, d2, e2, f2) {
      var g2 = a2.style, h2 = "cssFloat" in g2 ? "cssFloat" : "styleFloat";
      return new ua(g2, h2, 0, 0, e2, -1, c2, false, 0, g2[h2], b2);
    } });
    var Va = function(a2) {
      var b2, c2 = this.t, d2 = c2.filter || aa(this.data, "filter") || "", e2 = this.s + this.c * a2 | 0;
      100 === e2 && (-1 === d2.indexOf("atrix(") && -1 === d2.indexOf("radient(") && -1 === d2.indexOf("oader(") ? (c2.removeAttribute("filter"), b2 = !aa(this.data, "filter")) : (c2.filter = d2.replace(z, ""), b2 = true)), b2 || (this.xn1 && (c2.filter = d2 = d2 || "alpha(opacity=" + e2 + ")"), -1 === d2.indexOf("pacity") ? 0 === e2 && this.xn1 || (c2.filter = d2 + " alpha(opacity=" + e2 + ")") : c2.filter = d2.replace(x, "opacity=" + e2));
    };
    za("opacity,alpha,autoAlpha", { defaultValue: "1", parser: function(a2, b2, c2, d2, f2, g2) {
      var h2 = parseFloat(aa(a2, "opacity", e, false, "1")), i2 = a2.style, j2 = "autoAlpha" === c2;
      return "string" == typeof b2 && "=" === b2.charAt(1) && (b2 = ("-" === b2.charAt(0) ? -1 : 1) * parseFloat(b2.substr(2)) + h2), j2 && 1 === h2 && "hidden" === aa(a2, "visibility", e) && 0 !== b2 && (h2 = 0), U ? f2 = new ua(i2, "opacity", h2, b2 - h2, f2) : (f2 = new ua(i2, "opacity", 100 * h2, 100 * (b2 - h2), f2), f2.xn1 = j2 ? 1 : 0, i2.zoom = 1, f2.type = 2, f2.b = "alpha(opacity=" + f2.s + ")", f2.e = "alpha(opacity=" + (f2.s + f2.c) + ")", f2.data = a2, f2.plugin = g2, f2.setRatio = Va), j2 && (f2 = new ua(i2, "visibility", 0, 0, f2, -1, null, false, 0, 0 !== h2 ? "inherit" : "hidden", 0 === b2 ? "hidden" : "inherit"), f2.xs0 = "inherit", d2._overwriteProps.push(f2.n), d2._overwriteProps.push(c2)), f2;
    } });
    var Wa = function(a2, b2) {
      b2 && (a2.removeProperty ? (("ms" === b2.substr(0, 2) || "webkit" === b2.substr(0, 6)) && (b2 = "-" + b2), a2.removeProperty(b2.replace(B, "-$1").toLowerCase())) : a2.removeAttribute(b2));
    }, Xa = function(a2) {
      if (this.t._gsClassPT = this, 1 === a2 || 0 === a2) {
        this.t.setAttribute("class", 0 === a2 ? this.b : this.e);
        for (var b2 = this.data, c2 = this.t.style; b2; )
          b2.v ? c2[b2.p] = b2.v : Wa(c2, b2.p), b2 = b2._next;
        1 === a2 && this.t._gsClassPT === this && (this.t._gsClassPT = null);
      } else
        this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e);
    };
    za("className", { parser: function(a2, b2, d2, f2, g2, h2, i2) {
      var j2, k2, l2, m2, n2, o2 = a2.getAttribute("class") || "", p2 = a2.style.cssText;
      if (g2 = f2._classNamePT = new ua(a2, d2, 0, 0, g2, 2), g2.setRatio = Xa, g2.pr = -11, c = true, g2.b = o2, k2 = da(a2, e), l2 = a2._gsClassPT) {
        for (m2 = {}, n2 = l2.data; n2; )
          m2[n2.p] = 1, n2 = n2._next;
        l2.setRatio(1);
      }
      return a2._gsClassPT = g2, g2.e = "=" !== b2.charAt(1) ? b2 : o2.replace(new RegExp("(?:\\s|^)" + b2.substr(2) + "(?![\\w-])"), "") + ("+" === b2.charAt(0) ? " " + b2.substr(2) : ""), a2.setAttribute("class", g2.e), j2 = ea(a2, k2, da(a2), i2, m2), a2.setAttribute("class", o2), g2.data = j2.firstMPT, a2.style.cssText = p2, g2 = g2.xfirst = f2.parse(a2, j2.difs, g2, h2);
    } });
    var Ya = function(a2) {
      if ((1 === a2 || 0 === a2) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
        var b2, c2, d2, e2, f2, g2 = this.t.style, h2 = i.transform.parse;
        if ("all" === this.e)
          g2.cssText = "", e2 = true;
        else
          for (b2 = this.e.split(" ").join("").split(","), d2 = b2.length; --d2 > -1; )
            c2 = b2[d2], i[c2] && (i[c2].parse === h2 ? e2 = true : c2 = "transformOrigin" === c2 ? Fa : i[c2].p), Wa(g2, c2);
        e2 && (Wa(g2, Da), f2 = this.t._gsTransform, f2 && (f2.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform));
      }
    };
    for (za("clearProps", { parser: function(a2, b2, d2, e2, f2) {
      return f2 = new ua(a2, d2, 0, 0, f2, 2), f2.setRatio = Ya, f2.e = b2, f2.pr = -10, f2.data = e2._tween, c = true, f2;
    } }), j = "bezier,throwProps,physicsProps,physics2D".split(","), xa = j.length; xa--; )
      Aa(j[xa]);
    j = g.prototype, j._firstPT = j._lastParsedTransform = j._transform = null, j._onInitTween = function(a2, b2, h2, j2) {
      if (!a2.nodeType)
        return false;
      this._target = q = a2, this._tween = h2, this._vars = b2, r = j2, k = b2.autoRound, c = false, d = b2.suffixMap || g.suffixMap, e = _(a2), f = this._overwriteProps;
      var n2, p2, s2, t2, u2, v2, w2, x2, z2, A2 = a2.style;
      if (l && "" === A2.zIndex && (n2 = aa(a2, "zIndex", e), ("auto" === n2 || "" === n2) && this._addLazySet(A2, "zIndex", 0)), "string" == typeof b2 && (t2 = A2.cssText, n2 = da(a2, e), A2.cssText = t2 + ";" + b2, n2 = ea(a2, n2, da(a2)).difs, !U && y.test(b2) && (n2.opacity = parseFloat(RegExp.$1)), b2 = n2, A2.cssText = t2), b2.className ? this._firstPT = p2 = i.className.parse(a2, b2.className, "className", this, null, null, b2) : this._firstPT = p2 = this.parse(a2, b2, null), this._transformType) {
        for (z2 = 3 === this._transformType, Da ? m && (l = true, "" === A2.zIndex && (w2 = aa(a2, "zIndex", e), ("auto" === w2 || "" === w2) && this._addLazySet(A2, "zIndex", 0)), o && this._addLazySet(A2, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (z2 ? "visible" : "hidden"))) : A2.zoom = 1, s2 = p2; s2 && s2._next; )
          s2 = s2._next;
        x2 = new ua(a2, "transform", 0, 0, null, 2), this._linkCSSP(x2, null, s2), x2.setRatio = Da ? Ua : Ta, x2.data = this._transform || Sa(a2, e, true), x2.tween = h2, x2.pr = -1, f.pop();
      }
      if (c) {
        for (; p2; ) {
          for (v2 = p2._next, s2 = t2; s2 && s2.pr > p2.pr; )
            s2 = s2._next;
          (p2._prev = s2 ? s2._prev : u2) ? p2._prev._next = p2 : t2 = p2, (p2._next = s2) ? s2._prev = p2 : u2 = p2, p2 = v2;
        }
        this._firstPT = t2;
      }
      return true;
    }, j.parse = function(a2, b2, c2, f2) {
      var g2, h2, j2, l2, m2, n2, o2, p2, s2, t2, u2 = a2.style;
      for (g2 in b2) {
        if (n2 = b2[g2], h2 = i[g2], "function" != typeof n2 || h2 && h2.allowFunc || (n2 = n2(r, q)), h2)
          c2 = h2.parse(a2, n2, g2, this, c2, f2, b2);
        else {
          if ("--" === g2.substr(0, 2)) {
            this._tween._propLookup[g2] = this._addTween.call(this._tween, a2.style, "setProperty", _(a2).getPropertyValue(g2) + "", n2 + "", g2, false, g2);
            continue;
          }
          m2 = aa(a2, g2, e) + "", s2 = "string" == typeof n2, "color" === g2 || "fill" === g2 || "stroke" === g2 || -1 !== g2.indexOf("Color") || s2 && A.test(n2) ? (s2 || (n2 = oa(n2), n2 = (n2.length > 3 ? "rgba(" : "rgb(") + n2.join(",") + ")"), c2 = wa(u2, g2, m2, n2, true, "transparent", c2, 0, f2)) : s2 && J.test(n2) ? c2 = wa(u2, g2, m2, n2, true, null, c2, 0, f2) : (j2 = parseFloat(m2), o2 = j2 || 0 === j2 ? m2.substr((j2 + "").length) : "", ("" === m2 || "auto" === m2) && ("width" === g2 || "height" === g2 ? (j2 = ha(a2, g2, e), o2 = "px") : "left" === g2 || "top" === g2 ? (j2 = ca(a2, g2, e), o2 = "px") : (j2 = "opacity" !== g2 ? 0 : 1, o2 = "")), t2 = s2 && "=" === n2.charAt(1), t2 ? (l2 = parseInt(n2.charAt(0) + "1", 10), n2 = n2.substr(2), l2 *= parseFloat(n2), p2 = n2.replace(w, "")) : (l2 = parseFloat(n2), p2 = s2 ? n2.replace(w, "") : ""), "" === p2 && (p2 = g2 in d ? d[g2] : o2), n2 = l2 || 0 === l2 ? (t2 ? l2 + j2 : l2) + p2 : b2[g2], o2 !== p2 && ("" !== p2 || "lineHeight" === g2) && (l2 || 0 === l2) && j2 && (j2 = ba(a2, g2, j2, o2), "%" === p2 ? (j2 /= ba(a2, g2, 100, "%") / 100, b2.strictUnits !== true && (m2 = j2 + "%")) : "em" === p2 || "rem" === p2 || "vw" === p2 || "vh" === p2 ? j2 /= ba(a2, g2, 1, p2) : "px" !== p2 && (l2 = ba(a2, g2, l2, p2), p2 = "px"), t2 && (l2 || 0 === l2) && (n2 = l2 + j2 + p2)), t2 && (l2 += j2), !j2 && 0 !== j2 || !l2 && 0 !== l2 ? void 0 !== u2[g2] && (n2 || n2 + "" != "NaN" && null != n2) ? (c2 = new ua(u2, g2, l2 || j2 || 0, 0, c2, -1, g2, false, 0, m2, n2), c2.xs0 = "none" !== n2 || "display" !== g2 && -1 === g2.indexOf("Style") ? n2 : m2) : W("invalid " + g2 + " tween value: " + b2[g2]) : (c2 = new ua(u2, g2, j2, l2 - j2, c2, 0, g2, k !== false && ("px" === p2 || "zIndex" === g2), 0, m2, n2), c2.xs0 = p2));
        }
        f2 && c2 && !c2.plugin && (c2.plugin = f2);
      }
      return c2;
    }, j.setRatio = function(a2) {
      var b2, c2, d2, e2 = this._firstPT, f2 = 1e-6;
      if (1 !== a2 || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
        if (a2 || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
          for (; e2; ) {
            if (b2 = e2.c * a2 + e2.s, e2.r ? b2 = e2.r(b2) : f2 > b2 && b2 > -f2 && (b2 = 0), e2.type)
              if (1 === e2.type)
                if (d2 = e2.l, 2 === d2)
                  e2.t[e2.p] = e2.xs0 + b2 + e2.xs1 + e2.xn1 + e2.xs2;
                else if (3 === d2)
                  e2.t[e2.p] = e2.xs0 + b2 + e2.xs1 + e2.xn1 + e2.xs2 + e2.xn2 + e2.xs3;
                else if (4 === d2)
                  e2.t[e2.p] = e2.xs0 + b2 + e2.xs1 + e2.xn1 + e2.xs2 + e2.xn2 + e2.xs3 + e2.xn3 + e2.xs4;
                else if (5 === d2)
                  e2.t[e2.p] = e2.xs0 + b2 + e2.xs1 + e2.xn1 + e2.xs2 + e2.xn2 + e2.xs3 + e2.xn3 + e2.xs4 + e2.xn4 + e2.xs5;
                else {
                  for (c2 = e2.xs0 + b2 + e2.xs1, d2 = 1; d2 < e2.l; d2++)
                    c2 += e2["xn" + d2] + e2["xs" + (d2 + 1)];
                  e2.t[e2.p] = c2;
                }
              else
                -1 === e2.type ? e2.t[e2.p] = e2.xs0 : e2.setRatio && e2.setRatio(a2);
            else
              e2.t[e2.p] = b2 + e2.xs0;
            e2 = e2._next;
          }
        else
          for (; e2; )
            2 !== e2.type ? e2.t[e2.p] = e2.b : e2.setRatio(a2), e2 = e2._next;
      else
        for (; e2; ) {
          if (2 !== e2.type)
            if (e2.r && -1 !== e2.type)
              if (b2 = e2.r(e2.s + e2.c), e2.type) {
                if (1 === e2.type) {
                  for (d2 = e2.l, c2 = e2.xs0 + b2 + e2.xs1, d2 = 1; d2 < e2.l; d2++)
                    c2 += e2["xn" + d2] + e2["xs" + (d2 + 1)];
                  e2.t[e2.p] = c2;
                }
              } else
                e2.t[e2.p] = b2 + e2.xs0;
            else
              e2.t[e2.p] = e2.e;
          else
            e2.setRatio(a2);
          e2 = e2._next;
        }
    }, j._enableTransforms = function(a2) {
      this._transform = this._transform || Sa(this._target, e, true), this._transformType = this._transform.svg && Ba || !a2 && 3 !== this._transformType ? 2 : 3;
    };
    var Za = function(a2) {
      this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, true);
    };
    j._addLazySet = function(a2, b2, c2) {
      var d2 = this._firstPT = new ua(a2, b2, 0, 0, this._firstPT, 2);
      d2.e = c2, d2.setRatio = Za, d2.data = this;
    }, j._linkCSSP = function(a2, b2, c2, d2) {
      return a2 && (b2 && (b2._prev = a2), a2._next && (a2._next._prev = a2._prev), a2._prev ? a2._prev._next = a2._next : this._firstPT === a2 && (this._firstPT = a2._next, d2 = true), c2 ? c2._next = a2 : d2 || null !== this._firstPT || (this._firstPT = a2), a2._next = b2, a2._prev = c2), a2;
    }, j._mod = function(a2) {
      for (var b2 = this._firstPT; b2; )
        "function" == typeof a2[b2.p] && (b2.r = a2[b2.p]), b2 = b2._next;
    }, j._kill = function(b2) {
      var c2, d2, e2, f2 = b2;
      if (b2.autoAlpha || b2.alpha) {
        f2 = {};
        for (d2 in b2)
          f2[d2] = b2[d2];
        f2.opacity = 1, f2.autoAlpha && (f2.visibility = 1);
      }
      for (b2.className && (c2 = this._classNamePT) && (e2 = c2.xfirst, e2 && e2._prev ? this._linkCSSP(e2._prev, c2._next, e2._prev._prev) : e2 === this._firstPT && (this._firstPT = c2._next), c2._next && this._linkCSSP(c2._next, c2._next._next, e2._prev), this._classNamePT = null), c2 = this._firstPT; c2; )
        c2.plugin && c2.plugin !== d2 && c2.plugin._kill && (c2.plugin._kill(b2), d2 = c2.plugin), c2 = c2._next;
      return a.prototype._kill.call(this, f2);
    };
    var $a = function(a2, b2, c2) {
      var d2, e2, f2, g2;
      if (a2.slice)
        for (e2 = a2.length; --e2 > -1; )
          $a(a2[e2], b2, c2);
      else
        for (d2 = a2.childNodes, e2 = d2.length; --e2 > -1; )
          f2 = d2[e2], g2 = f2.type, f2.style && (b2.push(da(f2)), c2 && c2.push(f2)), 1 !== g2 && 9 !== g2 && 11 !== g2 || !f2.childNodes.length || $a(f2, b2, c2);
    };
    return g.cascadeTo = function(a2, c2, d2) {
      var e2, f2, g2, h2, i2 = b.to(a2, c2, d2), j2 = [i2], k2 = [], l2 = [], m2 = [], n2 = b._internals.reservedProps;
      for (a2 = i2._targets || i2.target, $a(a2, k2, m2), i2.render(c2, true, true), $a(a2, l2), i2.render(0, true, true), i2._enabled(true), e2 = m2.length; --e2 > -1; )
        if (f2 = ea(m2[e2], k2[e2], l2[e2]), f2.firstMPT) {
          f2 = f2.difs;
          for (g2 in d2)
            n2[g2] && (f2[g2] = d2[g2]);
          h2 = {};
          for (g2 in f2)
            h2[g2] = k2[e2][g2];
          j2.push(b.fromTo(m2[e2], c2, h2, f2));
        }
      return j2;
    }, a.activate([g]), g;
  }, true), function() {
    var a = _gsScope._gsDefine.plugin({ propName: "roundProps", version: "1.7.0", priority: -1, API: 2, init: function(a2, b2, c2) {
      return this._tween = c2, true;
    } }), b = function(a2) {
      var b2 = 1 > a2 ? Math.pow(10, (a2 + "").length - 2) : 1;
      return function(c2) {
        return (Math.round(c2 / a2) * a2 * b2 | 0) / b2;
      };
    }, c = function(a2, b2) {
      for (; a2; )
        a2.f || a2.blob || (a2.m = b2 || Math.round), a2 = a2._next;
    }, d = a.prototype;
    d._onInitAllProps = function() {
      var a2, d2, e, f, g = this._tween, h = g.vars.roundProps, i = {}, j = g._propLookup.roundProps;
      if ("object" != typeof h || h.push)
        for ("string" == typeof h && (h = h.split(",")), e = h.length; --e > -1; )
          i[h[e]] = Math.round;
      else
        for (f in h)
          i[f] = b(h[f]);
      for (f in i)
        for (a2 = g._firstPT; a2; )
          d2 = a2._next, a2.pg ? a2.t._mod(i) : a2.n === f && (2 === a2.f && a2.t ? c(a2.t._firstPT, i[f]) : (this._add(a2.t, f, a2.s, a2.c, i[f]), d2 && (d2._prev = a2._prev), a2._prev ? a2._prev._next = d2 : g._firstPT === a2 && (g._firstPT = d2), a2._next = a2._prev = null, g._propLookup[f] = j)), a2 = d2;
      return false;
    }, d._add = function(a2, b2, c2, d2, e) {
      this._addTween(a2, b2, c2, c2 + d2, b2, e || Math.round), this._overwriteProps.push(b2);
    };
  }(), function() {
    _gsScope._gsDefine.plugin({ propName: "attr", API: 2, version: "0.6.1", init: function(a, b, c, d) {
      var e, f;
      if ("function" != typeof a.setAttribute)
        return false;
      for (e in b)
        f = b[e], "function" == typeof f && (f = f(d, a)), this._addTween(a, "setAttribute", a.getAttribute(e) + "", f + "", e, false, e), this._overwriteProps.push(e);
      return true;
    } });
  }(), _gsScope._gsDefine.plugin({ propName: "directionalRotation", version: "0.3.1", API: 2, init: function(a, b, c, d) {
    "object" != typeof b && (b = { rotation: b }), this.finals = {};
    var e, f, g, h, i, j, k = b.useRadians === true ? 2 * Math.PI : 360, l = 1e-6;
    for (e in b)
      "useRadians" !== e && (h = b[e], "function" == typeof h && (h = h(d, a)), j = (h + "").split("_"), f = j[0], g = parseFloat("function" != typeof a[e] ? a[e] : a[e.indexOf("set") || "function" != typeof a["get" + e.substr(3)] ? e : "get" + e.substr(3)]()), h = this.finals[e] = "string" == typeof f && "=" === f.charAt(1) ? g + parseInt(f.charAt(0) + "1", 10) * Number(f.substr(2)) : Number(f) || 0, i = h - g, j.length && (f = j.join("_"), -1 !== f.indexOf("short") && (i %= k, i !== i % (k / 2) && (i = 0 > i ? i + k : i - k)), -1 !== f.indexOf("_cw") && 0 > i ? i = (i + 9999999999 * k) % k - (i / k | 0) * k : -1 !== f.indexOf("ccw") && i > 0 && (i = (i - 9999999999 * k) % k - (i / k | 0) * k)), (i > l || -l > i) && (this._addTween(a, e, g, g + i, e), this._overwriteProps.push(e)));
    return true;
  }, set: function(a) {
    var b;
    if (1 !== a)
      this._super.setRatio.call(this, a);
    else
      for (b = this._firstPT; b; )
        b.f ? b.t[b.p](this.finals[b.p]) : b.t[b.p] = this.finals[b.p], b = b._next;
  } })._autoCSS = true, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(a) {
    var b, c, d, e, f = _gsScope.GreenSockGlobals || _gsScope, g = f.com.greensock, h = 2 * Math.PI, i = Math.PI / 2, j = g._class, k = function(b2, c2) {
      var d2 = j("easing." + b2, function() {
      }, true), e2 = d2.prototype = new a();
      return e2.constructor = d2, e2.getRatio = c2, d2;
    }, l = a.register || function() {
    }, m = function(a2, b2, c2, d2, e2) {
      var f2 = j("easing." + a2, { easeOut: new b2(), easeIn: new c2(), easeInOut: new d2() }, true);
      return l(f2, a2), f2;
    }, n = function(a2, b2, c2) {
      this.t = a2, this.v = b2, c2 && (this.next = c2, c2.prev = this, this.c = c2.v - b2, this.gap = c2.t - a2);
    }, o = function(b2, c2) {
      var d2 = j("easing." + b2, function(a2) {
        this._p1 = a2 || 0 === a2 ? a2 : 1.70158, this._p2 = 1.525 * this._p1;
      }, true), e2 = d2.prototype = new a();
      return e2.constructor = d2, e2.getRatio = c2, e2.config = function(a2) {
        return new d2(a2);
      }, d2;
    }, p = m("Back", o("BackOut", function(a2) {
      return (a2 -= 1) * a2 * ((this._p1 + 1) * a2 + this._p1) + 1;
    }), o("BackIn", function(a2) {
      return a2 * a2 * ((this._p1 + 1) * a2 - this._p1);
    }), o("BackInOut", function(a2) {
      return (a2 *= 2) < 1 ? 0.5 * a2 * a2 * ((this._p2 + 1) * a2 - this._p2) : 0.5 * ((a2 -= 2) * a2 * ((this._p2 + 1) * a2 + this._p2) + 2);
    })), q = j("easing.SlowMo", function(a2, b2, c2) {
      b2 = b2 || 0 === b2 ? b2 : 0.7, null == a2 ? a2 = 0.7 : a2 > 1 && (a2 = 1), this._p = 1 !== a2 ? b2 : 0, this._p1 = (1 - a2) / 2, this._p2 = a2, this._p3 = this._p1 + this._p2, this._calcEnd = c2 === true;
    }, true), r = q.prototype = new a();
    return r.constructor = q, r.getRatio = function(a2) {
      var b2 = a2 + (0.5 - a2) * this._p;
      return a2 < this._p1 ? this._calcEnd ? 1 - (a2 = 1 - a2 / this._p1) * a2 : b2 - (a2 = 1 - a2 / this._p1) * a2 * a2 * a2 * b2 : a2 > this._p3 ? this._calcEnd ? 1 === a2 ? 0 : 1 - (a2 = (a2 - this._p3) / this._p1) * a2 : b2 + (a2 - b2) * (a2 = (a2 - this._p3) / this._p1) * a2 * a2 * a2 : this._calcEnd ? 1 : b2;
    }, q.ease = new q(0.7, 0.7), r.config = q.config = function(a2, b2, c2) {
      return new q(a2, b2, c2);
    }, b = j("easing.SteppedEase", function(a2, b2) {
      a2 = a2 || 1, this._p1 = 1 / a2, this._p2 = a2 + (b2 ? 0 : 1), this._p3 = b2 ? 1 : 0;
    }, true), r = b.prototype = new a(), r.constructor = b, r.getRatio = function(a2) {
      return 0 > a2 ? a2 = 0 : a2 >= 1 && (a2 = 0.999999999), ((this._p2 * a2 | 0) + this._p3) * this._p1;
    }, r.config = b.config = function(a2, c2) {
      return new b(a2, c2);
    }, c = j("easing.ExpoScaleEase", function(a2, b2, c2) {
      this._p1 = Math.log(b2 / a2), this._p2 = b2 - a2, this._p3 = a2, this._ease = c2;
    }, true), r = c.prototype = new a(), r.constructor = c, r.getRatio = function(a2) {
      return this._ease && (a2 = this._ease.getRatio(a2)), (this._p3 * Math.exp(this._p1 * a2) - this._p3) / this._p2;
    }, r.config = c.config = function(a2, b2, d2) {
      return new c(a2, b2, d2);
    }, d = j("easing.RoughEase", function(b2) {
      b2 = b2 || {};
      for (var c2, d2, e2, f2, g2, h2, i2 = b2.taper || "none", j2 = [], k2 = 0, l2 = 0 | (b2.points || 20), m2 = l2, o2 = b2.randomize !== false, p2 = b2.clamp === true, q2 = b2.template instanceof a ? b2.template : null, r2 = "number" == typeof b2.strength ? 0.4 * b2.strength : 0.4; --m2 > -1; )
        c2 = o2 ? Math.random() : 1 / l2 * m2, d2 = q2 ? q2.getRatio(c2) : c2, "none" === i2 ? e2 = r2 : "out" === i2 ? (f2 = 1 - c2, e2 = f2 * f2 * r2) : "in" === i2 ? e2 = c2 * c2 * r2 : 0.5 > c2 ? (f2 = 2 * c2, e2 = f2 * f2 * 0.5 * r2) : (f2 = 2 * (1 - c2), e2 = f2 * f2 * 0.5 * r2), o2 ? d2 += Math.random() * e2 - 0.5 * e2 : m2 % 2 ? d2 += 0.5 * e2 : d2 -= 0.5 * e2, p2 && (d2 > 1 ? d2 = 1 : 0 > d2 && (d2 = 0)), j2[k2++] = { x: c2, y: d2 };
      for (j2.sort(function(a2, b3) {
        return a2.x - b3.x;
      }), h2 = new n(1, 1, null), m2 = l2; --m2 > -1; )
        g2 = j2[m2], h2 = new n(g2.x, g2.y, h2);
      this._prev = new n(0, 0, 0 !== h2.t ? h2 : h2.next);
    }, true), r = d.prototype = new a(), r.constructor = d, r.getRatio = function(a2) {
      var b2 = this._prev;
      if (a2 > b2.t) {
        for (; b2.next && a2 >= b2.t; )
          b2 = b2.next;
        b2 = b2.prev;
      } else
        for (; b2.prev && a2 <= b2.t; )
          b2 = b2.prev;
      return this._prev = b2, b2.v + (a2 - b2.t) / b2.gap * b2.c;
    }, r.config = function(a2) {
      return new d(a2);
    }, d.ease = new d(), m("Bounce", k("BounceOut", function(a2) {
      return 1 / 2.75 > a2 ? 7.5625 * a2 * a2 : 2 / 2.75 > a2 ? 7.5625 * (a2 -= 1.5 / 2.75) * a2 + 0.75 : 2.5 / 2.75 > a2 ? 7.5625 * (a2 -= 2.25 / 2.75) * a2 + 0.9375 : 7.5625 * (a2 -= 2.625 / 2.75) * a2 + 0.984375;
    }), k("BounceIn", function(a2) {
      return (a2 = 1 - a2) < 1 / 2.75 ? 1 - 7.5625 * a2 * a2 : 2 / 2.75 > a2 ? 1 - (7.5625 * (a2 -= 1.5 / 2.75) * a2 + 0.75) : 2.5 / 2.75 > a2 ? 1 - (7.5625 * (a2 -= 2.25 / 2.75) * a2 + 0.9375) : 1 - (7.5625 * (a2 -= 2.625 / 2.75) * a2 + 0.984375);
    }), k("BounceInOut", function(a2) {
      var b2 = 0.5 > a2;
      return a2 = b2 ? 1 - 2 * a2 : 2 * a2 - 1, a2 = 1 / 2.75 > a2 ? 7.5625 * a2 * a2 : 2 / 2.75 > a2 ? 7.5625 * (a2 -= 1.5 / 2.75) * a2 + 0.75 : 2.5 / 2.75 > a2 ? 7.5625 * (a2 -= 2.25 / 2.75) * a2 + 0.9375 : 7.5625 * (a2 -= 2.625 / 2.75) * a2 + 0.984375, b2 ? 0.5 * (1 - a2) : 0.5 * a2 + 0.5;
    })), m("Circ", k("CircOut", function(a2) {
      return Math.sqrt(1 - (a2 -= 1) * a2);
    }), k("CircIn", function(a2) {
      return -(Math.sqrt(1 - a2 * a2) - 1);
    }), k("CircInOut", function(a2) {
      return (a2 *= 2) < 1 ? -0.5 * (Math.sqrt(1 - a2 * a2) - 1) : 0.5 * (Math.sqrt(1 - (a2 -= 2) * a2) + 1);
    })), e = function(b2, c2, d2) {
      var e2 = j("easing." + b2, function(a2, b3) {
        this._p1 = a2 >= 1 ? a2 : 1, this._p2 = (b3 || d2) / (1 > a2 ? a2 : 1), this._p3 = this._p2 / h * (Math.asin(1 / this._p1) || 0), this._p2 = h / this._p2;
      }, true), f2 = e2.prototype = new a();
      return f2.constructor = e2, f2.getRatio = c2, f2.config = function(a2, b3) {
        return new e2(a2, b3);
      }, e2;
    }, m("Elastic", e("ElasticOut", function(a2) {
      return this._p1 * Math.pow(2, -10 * a2) * Math.sin((a2 - this._p3) * this._p2) + 1;
    }, 0.3), e("ElasticIn", function(a2) {
      return -(this._p1 * Math.pow(2, 10 * (a2 -= 1)) * Math.sin((a2 - this._p3) * this._p2));
    }, 0.3), e("ElasticInOut", function(a2) {
      return (a2 *= 2) < 1 ? -0.5 * (this._p1 * Math.pow(2, 10 * (a2 -= 1)) * Math.sin((a2 - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (a2 -= 1)) * Math.sin((a2 - this._p3) * this._p2) * 0.5 + 1;
    }, 0.45)), m("Expo", k("ExpoOut", function(a2) {
      return 1 - Math.pow(2, -10 * a2);
    }), k("ExpoIn", function(a2) {
      return Math.pow(2, 10 * (a2 - 1)) - 1e-3;
    }), k("ExpoInOut", function(a2) {
      return (a2 *= 2) < 1 ? 0.5 * Math.pow(2, 10 * (a2 - 1)) : 0.5 * (2 - Math.pow(2, -10 * (a2 - 1)));
    })), m("Sine", k("SineOut", function(a2) {
      return Math.sin(a2 * i);
    }), k("SineIn", function(a2) {
      return -Math.cos(a2 * i) + 1;
    }), k("SineInOut", function(a2) {
      return -0.5 * (Math.cos(Math.PI * a2) - 1);
    })), j("easing.EaseLookup", { find: function(b2) {
      return a.map[b2];
    } }, true), l(f.SlowMo, "SlowMo", "ease,"), l(d, "RoughEase", "ease,"), l(b, "SteppedEase", "ease,"), p;
  }, true);
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function(a, b) {
  var c = {}, d = a.document, e = a.GreenSockGlobals = a.GreenSockGlobals || a, f = e[b];
  if (f)
    return "undefined" != typeof module && module.exports && (module.exports = f), f;
  var g, h, i, j, k, l = function(a2) {
    var b2, c2 = a2.split("."), d2 = e;
    for (b2 = 0; b2 < c2.length; b2++)
      d2[c2[b2]] = d2 = d2[c2[b2]] || {};
    return d2;
  }, m = l("com.greensock"), n = 1e-8, o = function(a2) {
    var b2, c2 = [], d2 = a2.length;
    for (b2 = 0; b2 !== d2; c2.push(a2[b2++]))
      ;
    return c2;
  }, p = function() {
  }, q = function() {
    var a2 = Object.prototype.toString, b2 = a2.call([]);
    return function(c2) {
      return null != c2 && (c2 instanceof Array || "object" == typeof c2 && !!c2.push && a2.call(c2) === b2);
    };
  }(), r = {}, s = function(d2, f2, g2, h2) {
    this.sc = r[d2] ? r[d2].sc : [], r[d2] = this, this.gsClass = null, this.func = g2;
    var i2 = [];
    this.check = function(j2) {
      for (var k2, m2, n2, o2, p2 = f2.length, q2 = p2; --p2 > -1; )
        (k2 = r[f2[p2]] || new s(f2[p2], [])).gsClass ? (i2[p2] = k2.gsClass, q2--) : j2 && k2.sc.push(this);
      if (0 === q2 && g2) {
        if (m2 = ("com.greensock." + d2).split("."), n2 = m2.pop(), o2 = l(m2.join("."))[n2] = this.gsClass = g2.apply(g2, i2), h2)
          if (e[n2] = c[n2] = o2, "undefined" != typeof module && module.exports)
            if (d2 === b) {
              module.exports = c[b] = o2;
              for (p2 in c)
                o2[p2] = c[p2];
            } else
              c[b] && (c[b][n2] = o2);
          else
            "function" == typeof define && define.amd && define((a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") + d2.split(".").pop(), [], function() {
              return o2;
            });
        for (p2 = 0; p2 < this.sc.length; p2++)
          this.sc[p2].check();
      }
    }, this.check(true);
  }, t = a._gsDefine = function(a2, b2, c2, d2) {
    return new s(a2, b2, c2, d2);
  }, u = m._class = function(a2, b2, c2) {
    return b2 = b2 || function() {
    }, t(a2, [], function() {
      return b2;
    }, c2), b2;
  };
  t.globals = e;
  var v = [0, 0, 1, 1], w = u("easing.Ease", function(a2, b2, c2, d2) {
    this._func = a2, this._type = c2 || 0, this._power = d2 || 0, this._params = b2 ? v.concat(b2) : v;
  }, true), x = w.map = {}, y = w.register = function(a2, b2, c2, d2) {
    for (var e2, f2, g2, h2, i2 = b2.split(","), j2 = i2.length, k2 = (c2 || "easeIn,easeOut,easeInOut").split(","); --j2 > -1; )
      for (f2 = i2[j2], e2 = d2 ? u("easing." + f2, null, true) : m.easing[f2] || {}, g2 = k2.length; --g2 > -1; )
        h2 = k2[g2], x[f2 + "." + h2] = x[h2 + f2] = e2[h2] = a2.getRatio ? a2 : a2[h2] || new a2();
  };
  for (i = w.prototype, i._calcEnd = false, i.getRatio = function(a2) {
    if (this._func)
      return this._params[0] = a2, this._func.apply(null, this._params);
    var b2 = this._type, c2 = this._power, d2 = 1 === b2 ? 1 - a2 : 2 === b2 ? a2 : 0.5 > a2 ? 2 * a2 : 2 * (1 - a2);
    return 1 === c2 ? d2 *= d2 : 2 === c2 ? d2 *= d2 * d2 : 3 === c2 ? d2 *= d2 * d2 * d2 : 4 === c2 && (d2 *= d2 * d2 * d2 * d2), 1 === b2 ? 1 - d2 : 2 === b2 ? d2 : 0.5 > a2 ? d2 / 2 : 1 - d2 / 2;
  }, g = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], h = g.length; --h > -1; )
    i = g[h] + ",Power" + h, y(new w(null, null, 1, h), i, "easeOut", true), y(new w(null, null, 2, h), i, "easeIn" + (0 === h ? ",easeNone" : "")), y(new w(null, null, 3, h), i, "easeInOut");
  x.linear = m.easing.Linear.easeIn, x.swing = m.easing.Quad.easeInOut;
  var z = u("events.EventDispatcher", function(a2) {
    this._listeners = {}, this._eventTarget = a2 || this;
  });
  i = z.prototype, i.addEventListener = function(a2, b2, c2, d2, e2) {
    e2 = e2 || 0;
    var f2, g2, h2 = this._listeners[a2], i2 = 0;
    for (this !== j || k || j.wake(), null == h2 && (this._listeners[a2] = h2 = []), g2 = h2.length; --g2 > -1; )
      f2 = h2[g2], f2.c === b2 && f2.s === c2 ? h2.splice(g2, 1) : 0 === i2 && f2.pr < e2 && (i2 = g2 + 1);
    h2.splice(i2, 0, { c: b2, s: c2, up: d2, pr: e2 });
  }, i.removeEventListener = function(a2, b2) {
    var c2, d2 = this._listeners[a2];
    if (d2) {
      for (c2 = d2.length; --c2 > -1; )
        if (d2[c2].c === b2)
          return void d2.splice(c2, 1);
    }
  }, i.dispatchEvent = function(a2) {
    var b2, c2, d2, e2 = this._listeners[a2];
    if (e2)
      for (b2 = e2.length, b2 > 1 && (e2 = e2.slice(0)), c2 = this._eventTarget; --b2 > -1; )
        d2 = e2[b2], d2 && (d2.up ? d2.c.call(d2.s || c2, { type: a2, target: c2 }) : d2.c.call(d2.s || c2));
  };
  var A = a.requestAnimationFrame, B = a.cancelAnimationFrame, C = Date.now || function() {
    return (/* @__PURE__ */ new Date()).getTime();
  }, D = C();
  for (g = ["ms", "moz", "webkit", "o"], h = g.length; --h > -1 && !A; )
    A = a[g[h] + "RequestAnimationFrame"], B = a[g[h] + "CancelAnimationFrame"] || a[g[h] + "CancelRequestAnimationFrame"];
  u("Ticker", function(a2, b2) {
    var c2, e2, f2, g2, h2, i2 = this, l2 = C(), m2 = b2 !== false && A ? "auto" : false, o2 = 500, q2 = 33, r2 = "tick", s2 = function(a3) {
      var b3, d2, j2 = C() - D;
      j2 > o2 && (l2 += j2 - q2), D += j2, i2.time = (D - l2) / 1e3, b3 = i2.time - h2, (!c2 || b3 > 0 || a3 === true) && (i2.frame++, h2 += b3 + (b3 >= g2 ? 4e-3 : g2 - b3), d2 = true), a3 !== true && (f2 = e2(s2)), d2 && i2.dispatchEvent(r2);
    };
    z.call(i2), i2.time = i2.frame = 0, i2.tick = function() {
      s2(true);
    }, i2.lagSmoothing = function(a3, b3) {
      return arguments.length ? (o2 = a3 || 1 / n, void (q2 = Math.min(b3, o2, 0))) : 1 / n > o2;
    }, i2.sleep = function() {
      null != f2 && (m2 && B ? B(f2) : clearTimeout(f2), e2 = p, f2 = null, i2 === j && (k = false));
    }, i2.wake = function(a3) {
      null !== f2 ? i2.sleep() : a3 ? l2 += -D + (D = C()) : i2.frame > 10 && (D = C() - o2 + 5), e2 = 0 === c2 ? p : m2 && A ? A : function(a4) {
        return setTimeout(a4, 1e3 * (h2 - i2.time) + 1 | 0);
      }, i2 === j && (k = true), s2(2);
    }, i2.fps = function(a3) {
      return arguments.length ? (c2 = a3, g2 = 1 / (c2 || 60), h2 = this.time + g2, void i2.wake()) : c2;
    }, i2.useRAF = function(a3) {
      return arguments.length ? (i2.sleep(), m2 = a3, void i2.fps(c2)) : m2;
    }, i2.fps(a2), setTimeout(function() {
      "auto" === m2 && i2.frame < 5 && "hidden" !== (d || {}).visibilityState && i2.useRAF(false);
    }, 1500);
  }), i = m.Ticker.prototype = new m.events.EventDispatcher(), i.constructor = m.Ticker;
  var E = u("core.Animation", function(a2, b2) {
    if (this.vars = b2 = b2 || {}, this._duration = this._totalDuration = a2 || 0, this._delay = Number(b2.delay) || 0, this._timeScale = 1, this._active = !!b2.immediateRender, this.data = b2.data, this._reversed = !!b2.reversed, Z) {
      k || j.wake();
      var c2 = this.vars.useFrames ? Y : Z;
      c2.add(this, c2._time), this.vars.paused && this.paused(true);
    }
  });
  j = E.ticker = new m.Ticker(), i = E.prototype, i._dirty = i._gc = i._initted = i._paused = false, i._totalTime = i._time = 0, i._rawPrevTime = -1, i._next = i._last = i._onUpdate = i._timeline = i.timeline = null, i._paused = false;
  var F = function() {
    k && C() - D > 2e3 && ("hidden" !== (d || {}).visibilityState || !j.lagSmoothing()) && j.wake();
    var a2 = setTimeout(F, 2e3);
    a2.unref && a2.unref();
  };
  F(), i.play = function(a2, b2) {
    return null != a2 && this.seek(a2, b2), this.reversed(false).paused(false);
  }, i.pause = function(a2, b2) {
    return null != a2 && this.seek(a2, b2), this.paused(true);
  }, i.resume = function(a2, b2) {
    return null != a2 && this.seek(a2, b2), this.paused(false);
  }, i.seek = function(a2, b2) {
    return this.totalTime(Number(a2), b2 !== false);
  }, i.restart = function(a2, b2) {
    return this.reversed(false).paused(false).totalTime(a2 ? -this._delay : 0, b2 !== false, true);
  }, i.reverse = function(a2, b2) {
    return null != a2 && this.seek(a2 || this.totalDuration(), b2), this.reversed(true).paused(false);
  }, i.render = function(a2, b2, c2) {
  }, i.invalidate = function() {
    return this._time = this._totalTime = 0, this._initted = this._gc = false, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(true), this;
  }, i.isActive = function() {
    var a2, b2 = this._timeline, c2 = this._startTime;
    return !b2 || !this._gc && !this._paused && b2.isActive() && (a2 = b2.rawTime(true)) >= c2 && a2 < c2 + this.totalDuration() / this._timeScale - n;
  }, i._enabled = function(a2, b2) {
    return k || j.wake(), this._gc = !a2, this._active = this.isActive(), b2 !== true && (a2 && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a2 && this.timeline && this._timeline._remove(this, true)), false;
  }, i._kill = function(a2, b2) {
    return this._enabled(false, false);
  }, i.kill = function(a2, b2) {
    return this._kill(a2, b2), this;
  }, i._uncache = function(a2) {
    for (var b2 = a2 ? this : this.timeline; b2; )
      b2._dirty = true, b2 = b2.timeline;
    return this;
  }, i._swapSelfInParams = function(a2) {
    for (var b2 = a2.length, c2 = a2.concat(); --b2 > -1; )
      "{self}" === a2[b2] && (c2[b2] = this);
    return c2;
  }, i._callback = function(a2) {
    var b2 = this.vars, c2 = b2[a2], d2 = b2[a2 + "Params"], e2 = b2[a2 + "Scope"] || b2.callbackScope || this, f2 = d2 ? d2.length : 0;
    switch (f2) {
      case 0:
        c2.call(e2);
        break;
      case 1:
        c2.call(e2, d2[0]);
        break;
      case 2:
        c2.call(e2, d2[0], d2[1]);
        break;
      default:
        c2.apply(e2, d2);
    }
  }, i.eventCallback = function(a2, b2, c2, d2) {
    if ("on" === (a2 || "").substr(0, 2)) {
      var e2 = this.vars;
      if (1 === arguments.length)
        return e2[a2];
      null == b2 ? delete e2[a2] : (e2[a2] = b2, e2[a2 + "Params"] = q(c2) && -1 !== c2.join("").indexOf("{self}") ? this._swapSelfInParams(c2) : c2, e2[a2 + "Scope"] = d2), "onUpdate" === a2 && (this._onUpdate = b2);
    }
    return this;
  }, i.delay = function(a2) {
    return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a2 - this._delay), this._delay = a2, this) : this._delay;
  }, i.duration = function(a2) {
    return arguments.length ? (this._duration = this._totalDuration = a2, this._uncache(true), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a2 && this.totalTime(this._totalTime * (a2 / this._duration), true), this) : (this._dirty = false, this._duration);
  }, i.totalDuration = function(a2) {
    return this._dirty = false, arguments.length ? this.duration(a2) : this._totalDuration;
  }, i.time = function(a2, b2) {
    return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a2 > this._duration ? this._duration : a2, b2)) : this._time;
  }, i.totalTime = function(a2, b2, c2) {
    if (k || j.wake(), !arguments.length)
      return this._totalTime;
    if (this._timeline) {
      if (0 > a2 && !c2 && (a2 += this.totalDuration()), this._timeline.smoothChildTiming) {
        this._dirty && this.totalDuration();
        var d2 = this._totalDuration, e2 = this._timeline;
        if (a2 > d2 && !c2 && (a2 = d2), this._startTime = (this._paused ? this._pauseTime : e2._time) - (this._reversed ? d2 - a2 : a2) / this._timeScale, e2._dirty || this._uncache(false), e2._timeline)
          for (; e2._timeline; )
            e2._timeline._time !== (e2._startTime + e2._totalTime) / e2._timeScale && e2.totalTime(e2._totalTime, true), e2 = e2._timeline;
      }
      this._gc && this._enabled(true, false), (this._totalTime !== a2 || 0 === this._duration) && (K.length && _(), this.render(a2, b2, false), K.length && _());
    }
    return this;
  }, i.progress = i.totalProgress = function(a2, b2) {
    var c2 = this.duration();
    return arguments.length ? this.totalTime(c2 * a2, b2) : c2 ? this._time / c2 : this.ratio;
  }, i.startTime = function(a2) {
    return arguments.length ? (a2 !== this._startTime && (this._startTime = a2, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a2 - this._delay)), this) : this._startTime;
  }, i.endTime = function(a2) {
    return this._startTime + (0 != a2 ? this.totalDuration() : this.duration()) / this._timeScale;
  }, i.timeScale = function(a2) {
    if (!arguments.length)
      return this._timeScale;
    var b2, c2;
    for (a2 = a2 || n, this._timeline && this._timeline.smoothChildTiming && (b2 = this._pauseTime, c2 = b2 || 0 === b2 ? b2 : this._timeline.totalTime(), this._startTime = c2 - (c2 - this._startTime) * this._timeScale / a2), this._timeScale = a2, c2 = this.timeline; c2 && c2.timeline; )
      c2._dirty = true, c2.totalDuration(), c2 = c2.timeline;
    return this;
  }, i.reversed = function(a2) {
    return arguments.length ? (a2 != this._reversed && (this._reversed = a2, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, true)), this) : this._reversed;
  }, i.paused = function(a2) {
    if (!arguments.length)
      return this._paused;
    var b2, c2, d2 = this._timeline;
    return a2 != this._paused && d2 && (k || a2 || j.wake(), b2 = d2.rawTime(), c2 = b2 - this._pauseTime, !a2 && d2.smoothChildTiming && (this._startTime += c2, this._uncache(false)), this._pauseTime = a2 ? b2 : null, this._paused = a2, this._active = this.isActive(), !a2 && 0 !== c2 && this._initted && this.duration() && (b2 = d2.smoothChildTiming ? this._totalTime : (b2 - this._startTime) / this._timeScale, this.render(b2, b2 === this._totalTime, true))), this._gc && !a2 && this._enabled(true, false), this;
  };
  var G = u("core.SimpleTimeline", function(a2) {
    E.call(this, 0, a2), this.autoRemoveChildren = this.smoothChildTiming = true;
  });
  i = G.prototype = new E(), i.constructor = G, i.kill()._gc = false, i._first = i._last = i._recent = null, i._sortChildren = false, i.add = i.insert = function(a2, b2, c2, d2) {
    var e2, f2;
    if (a2._startTime = Number(b2 || 0) + a2._delay, a2._paused && this !== a2._timeline && (a2._pauseTime = this.rawTime() - (a2._timeline.rawTime() - a2._pauseTime)), a2.timeline && a2.timeline._remove(a2, true), a2.timeline = a2._timeline = this, a2._gc && a2._enabled(true, true), e2 = this._last, this._sortChildren)
      for (f2 = a2._startTime; e2 && e2._startTime > f2; )
        e2 = e2._prev;
    return e2 ? (a2._next = e2._next, e2._next = a2) : (a2._next = this._first, this._first = a2), a2._next ? a2._next._prev = a2 : this._last = a2, a2._prev = e2, this._recent = a2, this._timeline && this._uncache(true), this;
  }, i._remove = function(a2, b2) {
    return a2.timeline === this && (b2 || a2._enabled(false, true), a2._prev ? a2._prev._next = a2._next : this._first === a2 && (this._first = a2._next), a2._next ? a2._next._prev = a2._prev : this._last === a2 && (this._last = a2._prev), a2._next = a2._prev = a2.timeline = null, a2 === this._recent && (this._recent = this._last), this._timeline && this._uncache(true)), this;
  }, i.render = function(a2, b2, c2) {
    var d2, e2 = this._first;
    for (this._totalTime = this._time = this._rawPrevTime = a2; e2; )
      d2 = e2._next, (e2._active || a2 >= e2._startTime && !e2._paused && !e2._gc) && (e2._reversed ? e2.render((e2._dirty ? e2.totalDuration() : e2._totalDuration) - (a2 - e2._startTime) * e2._timeScale, b2, c2) : e2.render((a2 - e2._startTime) * e2._timeScale, b2, c2)), e2 = d2;
  }, i.rawTime = function() {
    return k || j.wake(), this._totalTime;
  };
  var H = u("TweenLite", function(b2, c2, d2) {
    if (E.call(this, c2, d2), this.render = H.prototype.render, null == b2)
      throw "Cannot tween a null target.";
    this.target = b2 = "string" != typeof b2 ? b2 : H.selector(b2) || b2;
    var e2, f2, g2, h2 = b2.jquery || b2.length && b2 !== a && b2[0] && (b2[0] === a || b2[0].nodeType && b2[0].style && !b2.nodeType), i2 = this.vars.overwrite;
    if (this._overwrite = i2 = null == i2 ? X[H.defaultOverwrite] : "number" == typeof i2 ? i2 >> 0 : X[i2], (h2 || b2 instanceof Array || b2.push && q(b2)) && "number" != typeof b2[0])
      for (this._targets = g2 = o(b2), this._propLookup = [], this._siblings = [], e2 = 0; e2 < g2.length; e2++)
        f2 = g2[e2], f2 ? "string" != typeof f2 ? f2.length && f2 !== a && f2[0] && (f2[0] === a || f2[0].nodeType && f2[0].style && !f2.nodeType) ? (g2.splice(e2--, 1), this._targets = g2 = g2.concat(o(f2))) : (this._siblings[e2] = aa(f2, this, false), 1 === i2 && this._siblings[e2].length > 1 && ca(f2, this, null, 1, this._siblings[e2])) : (f2 = g2[e2--] = H.selector(f2), "string" == typeof f2 && g2.splice(e2 + 1, 1)) : g2.splice(e2--, 1);
    else
      this._propLookup = {}, this._siblings = aa(b2, this, false), 1 === i2 && this._siblings.length > 1 && ca(b2, this, null, 1, this._siblings);
    (this.vars.immediateRender || 0 === c2 && 0 === this._delay && this.vars.immediateRender !== false) && (this._time = -n, this.render(Math.min(0, -this._delay)));
  }, true), I = function(b2) {
    return b2 && b2.length && b2 !== a && b2[0] && (b2[0] === a || b2[0].nodeType && b2[0].style && !b2.nodeType);
  }, J = function(a2, b2) {
    var c2, d2 = {};
    for (c2 in a2)
      W[c2] || c2 in b2 && "transform" !== c2 && "x" !== c2 && "y" !== c2 && "width" !== c2 && "height" !== c2 && "className" !== c2 && "border" !== c2 || !(!T[c2] || T[c2] && T[c2]._autoCSS) || (d2[c2] = a2[c2], delete a2[c2]);
    a2.css = d2;
  };
  i = H.prototype = new E(), i.constructor = H, i.kill()._gc = false, i.ratio = 0, i._firstPT = i._targets = i._overwrittenProps = i._startAt = null, i._notifyPluginsOfEnabled = i._lazy = false, H.version = "2.1.2", H.defaultEase = i._ease = new w(null, null, 1, 1), H.defaultOverwrite = "auto", H.ticker = j, H.autoSleep = 120, H.lagSmoothing = function(a2, b2) {
    j.lagSmoothing(a2, b2);
  }, H.selector = a.$ || a.jQuery || function(b2) {
    var c2 = a.$ || a.jQuery;
    return c2 ? (H.selector = c2, c2(b2)) : (d || (d = a.document), d ? d.querySelectorAll ? d.querySelectorAll(b2) : d.getElementById("#" === b2.charAt(0) ? b2.substr(1) : b2) : b2);
  };
  var K = [], L = {}, M = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi, N = /[\+-]=-?[\.\d]/, O = function(a2) {
    for (var b2, c2 = this._firstPT, d2 = 1e-6; c2; )
      b2 = c2.blob ? 1 === a2 && null != this.end ? this.end : a2 ? this.join("") : this.start : c2.c * a2 + c2.s, c2.m ? b2 = c2.m.call(this._tween, b2, this._target || c2.t, this._tween) : d2 > b2 && b2 > -d2 && !c2.blob && (b2 = 0), c2.f ? c2.fp ? c2.t[c2.p](c2.fp, b2) : c2.t[c2.p](b2) : c2.t[c2.p] = b2, c2 = c2._next;
  }, P = function(a2) {
    return (1e3 * a2 | 0) / 1e3 + "";
  }, Q = function(a2, b2, c2, d2) {
    var e2, f2, g2, h2, i2, j2, k2, l2 = [], m2 = 0, n2 = "", o2 = 0;
    for (l2.start = a2, l2.end = b2, a2 = l2[0] = a2 + "", b2 = l2[1] = b2 + "", c2 && (c2(l2), a2 = l2[0], b2 = l2[1]), l2.length = 0, e2 = a2.match(M) || [], f2 = b2.match(M) || [], d2 && (d2._next = null, d2.blob = 1, l2._firstPT = l2._applyPT = d2), i2 = f2.length, h2 = 0; i2 > h2; h2++)
      k2 = f2[h2], j2 = b2.substr(m2, b2.indexOf(k2, m2) - m2), n2 += j2 || !h2 ? j2 : ",", m2 += j2.length, o2 ? o2 = (o2 + 1) % 5 : "rgba(" === j2.substr(-5) && (o2 = 1), k2 === e2[h2] || e2.length <= h2 ? n2 += k2 : (n2 && (l2.push(n2), n2 = ""), g2 = parseFloat(e2[h2]), l2.push(g2), l2._firstPT = { _next: l2._firstPT, t: l2, p: l2.length - 1, s: g2, c: ("=" === k2.charAt(1) ? parseInt(k2.charAt(0) + "1", 10) * parseFloat(k2.substr(2)) : parseFloat(k2) - g2) || 0, f: 0, m: o2 && 4 > o2 ? Math.round : P }), m2 += k2.length;
    return n2 += b2.substr(m2), n2 && l2.push(n2), l2.setRatio = O, N.test(b2) && (l2.end = null), l2;
  }, R = function(a2, b2, c2, d2, e2, f2, g2, h2, i2) {
    "function" == typeof d2 && (d2 = d2(i2 || 0, a2));
    var j2, k2 = typeof a2[b2], l2 = "function" !== k2 ? "" : b2.indexOf("set") || "function" != typeof a2["get" + b2.substr(3)] ? b2 : "get" + b2.substr(3), m2 = "get" !== c2 ? c2 : l2 ? g2 ? a2[l2](g2) : a2[l2]() : a2[b2], n2 = "string" == typeof d2 && "=" === d2.charAt(1), o2 = { t: a2, p: b2, s: m2, f: "function" === k2, pg: 0, n: e2 || b2, m: f2 ? "function" == typeof f2 ? f2 : Math.round : 0, pr: 0, c: n2 ? parseInt(d2.charAt(0) + "1", 10) * parseFloat(d2.substr(2)) : parseFloat(d2) - m2 || 0 };
    return ("number" != typeof m2 || "number" != typeof d2 && !n2) && (g2 || isNaN(m2) || !n2 && isNaN(d2) || "boolean" == typeof m2 || "boolean" == typeof d2 ? (o2.fp = g2, j2 = Q(m2, n2 ? parseFloat(o2.s) + o2.c + (o2.s + "").replace(/[0-9\-\.]/g, "") : d2, h2 || H.defaultStringFilter, o2), o2 = { t: j2, p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: e2 || b2, pr: 0, m: 0 }) : (o2.s = parseFloat(m2), n2 || (o2.c = parseFloat(d2) - o2.s || 0))), o2.c ? ((o2._next = this._firstPT) && (o2._next._prev = o2), this._firstPT = o2, o2) : void 0;
  }, S = H._internals = { isArray: q, isSelector: I, lazyTweens: K, blobDif: Q }, T = H._plugins = {}, U = S.tweenLookup = {}, V = 0, W = S.reservedProps = { ease: 1, delay: 1, overwrite: 1, onComplete: 1, onCompleteParams: 1, onCompleteScope: 1, useFrames: 1, runBackwards: 1, startAt: 1, onUpdate: 1, onUpdateParams: 1, onUpdateScope: 1, onStart: 1, onStartParams: 1, onStartScope: 1, onReverseComplete: 1, onReverseCompleteParams: 1, onReverseCompleteScope: 1, onRepeat: 1, onRepeatParams: 1, onRepeatScope: 1, easeParams: 1, yoyo: 1, immediateRender: 1, repeat: 1, repeatDelay: 1, data: 1, paused: 1, reversed: 1, autoCSS: 1, lazy: 1, onOverwrite: 1, callbackScope: 1, stringFilter: 1, id: 1, yoyoEase: 1, stagger: 1 }, X = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, "true": 1, "false": 0 }, Y = E._rootFramesTimeline = new G(), Z = E._rootTimeline = new G(), $ = 30, _ = S.lazyRender = function() {
    var a2, b2, c2 = K.length;
    for (L = {}, a2 = 0; c2 > a2; a2++)
      b2 = K[a2], b2 && b2._lazy !== false && (b2.render(b2._lazy[0], b2._lazy[1], true), b2._lazy = false);
    K.length = 0;
  };
  Z._startTime = j.time, Y._startTime = j.frame, Z._active = Y._active = true, setTimeout(_, 1), E._updateRoot = H.render = function() {
    var a2, b2, c2;
    if (K.length && _(), Z.render((j.time - Z._startTime) * Z._timeScale, false, false), Y.render((j.frame - Y._startTime) * Y._timeScale, false, false), K.length && _(), j.frame >= $) {
      $ = j.frame + (parseInt(H.autoSleep, 10) || 120);
      for (c2 in U) {
        for (b2 = U[c2].tweens, a2 = b2.length; --a2 > -1; )
          b2[a2]._gc && b2.splice(a2, 1);
        0 === b2.length && delete U[c2];
      }
      if (c2 = Z._first, (!c2 || c2._paused) && H.autoSleep && !Y._first && 1 === j._listeners.tick.length) {
        for (; c2 && c2._paused; )
          c2 = c2._next;
        c2 || j.sleep();
      }
    }
  }, j.addEventListener("tick", E._updateRoot);
  var aa = function(a2, b2, c2) {
    var d2, e2, f2 = a2._gsTweenID;
    if (U[f2 || (a2._gsTweenID = f2 = "t" + V++)] || (U[f2] = { target: a2, tweens: [] }), b2 && (d2 = U[f2].tweens, d2[e2 = d2.length] = b2, c2))
      for (; --e2 > -1; )
        d2[e2] === b2 && d2.splice(e2, 1);
    return U[f2].tweens;
  }, ba = function(a2, b2, c2, d2) {
    var e2, f2, g2 = a2.vars.onOverwrite;
    return g2 && (e2 = g2(a2, b2, c2, d2)), g2 = H.onOverwrite, g2 && (f2 = g2(a2, b2, c2, d2)), e2 !== false && f2 !== false;
  }, ca = function(a2, b2, c2, d2, e2) {
    var f2, g2, h2, i2;
    if (1 === d2 || d2 >= 4) {
      for (i2 = e2.length, f2 = 0; i2 > f2; f2++)
        if ((h2 = e2[f2]) !== b2)
          h2._gc || h2._kill(null, a2, b2) && (g2 = true);
        else if (5 === d2)
          break;
      return g2;
    }
    var j2, k2 = b2._startTime + n, l2 = [], m2 = 0, o2 = 0 === b2._duration;
    for (f2 = e2.length; --f2 > -1; )
      (h2 = e2[f2]) === b2 || h2._gc || h2._paused || (h2._timeline !== b2._timeline ? (j2 = j2 || da(b2, 0, o2), 0 === da(h2, j2, o2) && (l2[m2++] = h2)) : h2._startTime <= k2 && h2._startTime + h2.totalDuration() / h2._timeScale > k2 && ((o2 || !h2._initted) && k2 - h2._startTime <= 2 * n || (l2[m2++] = h2)));
    for (f2 = m2; --f2 > -1; )
      if (h2 = l2[f2], i2 = h2._firstPT, 2 === d2 && h2._kill(c2, a2, b2) && (g2 = true), 2 !== d2 || !h2._firstPT && h2._initted && i2) {
        if (2 !== d2 && !ba(h2, b2))
          continue;
        h2._enabled(false, false) && (g2 = true);
      }
    return g2;
  }, da = function(a2, b2, c2) {
    for (var d2 = a2._timeline, e2 = d2._timeScale, f2 = a2._startTime; d2._timeline; ) {
      if (f2 += d2._startTime, e2 *= d2._timeScale, d2._paused)
        return -100;
      d2 = d2._timeline;
    }
    return f2 /= e2, f2 > b2 ? f2 - b2 : c2 && f2 === b2 || !a2._initted && 2 * n > f2 - b2 ? n : (f2 += a2.totalDuration() / a2._timeScale / e2) > b2 + n ? 0 : f2 - b2 - n;
  };
  i._init = function() {
    var a2, b2, c2, d2, e2, f2, g2 = this.vars, h2 = this._overwrittenProps, i2 = this._duration, j2 = !!g2.immediateRender, k2 = g2.ease, l2 = this._startAt;
    if (g2.startAt) {
      l2 && (l2.render(-1, true), l2.kill()), e2 = {};
      for (d2 in g2.startAt)
        e2[d2] = g2.startAt[d2];
      if (e2.data = "isStart", e2.overwrite = false, e2.immediateRender = true, e2.lazy = j2 && g2.lazy !== false, e2.startAt = e2.delay = null, e2.onUpdate = g2.onUpdate, e2.onUpdateParams = g2.onUpdateParams, e2.onUpdateScope = g2.onUpdateScope || g2.callbackScope || this, this._startAt = H.to(this.target || {}, 0, e2), j2) {
        if (this._time > 0)
          this._startAt = null;
        else if (0 !== i2)
          return;
      }
    } else if (g2.runBackwards && 0 !== i2)
      if (l2)
        l2.render(-1, true), l2.kill(), this._startAt = null;
      else {
        0 !== this._time && (j2 = false), c2 = {};
        for (d2 in g2)
          W[d2] && "autoCSS" !== d2 || (c2[d2] = g2[d2]);
        if (c2.overwrite = 0, c2.data = "isFromStart", c2.lazy = j2 && g2.lazy !== false, c2.immediateRender = j2, this._startAt = H.to(this.target, 0, c2), j2) {
          if (0 === this._time)
            return;
        } else
          this._startAt._init(), this._startAt._enabled(false), this.vars.immediateRender && (this._startAt = null);
      }
    if (this._ease = k2 = k2 ? k2 instanceof w ? k2 : "function" == typeof k2 ? new w(k2, g2.easeParams) : x[k2] || H.defaultEase : H.defaultEase, g2.easeParams instanceof Array && k2.config && (this._ease = k2.config.apply(k2, g2.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
      for (f2 = this._targets.length, a2 = 0; f2 > a2; a2++)
        this._initProps(this._targets[a2], this._propLookup[a2] = {}, this._siblings[a2], h2 ? h2[a2] : null, a2) && (b2 = true);
    else
      b2 = this._initProps(this.target, this._propLookup, this._siblings, h2, 0);
    if (b2 && H._onPluginEvent("_onInitAllProps", this), h2 && (this._firstPT || "function" != typeof this.target && this._enabled(false, false)), g2.runBackwards)
      for (c2 = this._firstPT; c2; )
        c2.s += c2.c, c2.c = -c2.c, c2 = c2._next;
    this._onUpdate = g2.onUpdate, this._initted = true;
  }, i._initProps = function(b2, c2, d2, e2, f2) {
    var g2, h2, i2, j2, k2, l2;
    if (null == b2)
      return false;
    L[b2._gsTweenID] && _(), this.vars.css || b2.style && b2 !== a && b2.nodeType && T.css && this.vars.autoCSS !== false && J(this.vars, b2);
    for (g2 in this.vars)
      if (l2 = this.vars[g2], W[g2])
        l2 && (l2 instanceof Array || l2.push && q(l2)) && -1 !== l2.join("").indexOf("{self}") && (this.vars[g2] = l2 = this._swapSelfInParams(l2, this));
      else if (T[g2] && (j2 = new T[g2]())._onInitTween(b2, this.vars[g2], this, f2)) {
        for (this._firstPT = k2 = { _next: this._firstPT, t: j2, p: "setRatio", s: 0, c: 1, f: 1, n: g2, pg: 1, pr: j2._priority, m: 0 }, h2 = j2._overwriteProps.length; --h2 > -1; )
          c2[j2._overwriteProps[h2]] = this._firstPT;
        (j2._priority || j2._onInitAllProps) && (i2 = true), (j2._onDisable || j2._onEnable) && (this._notifyPluginsOfEnabled = true), k2._next && (k2._next._prev = k2);
      } else
        c2[g2] = R.call(this, b2, g2, "get", l2, g2, 0, null, this.vars.stringFilter, f2);
    return e2 && this._kill(e2, b2) ? this._initProps(b2, c2, d2, e2, f2) : this._overwrite > 1 && this._firstPT && d2.length > 1 && ca(b2, this, c2, this._overwrite, d2) ? (this._kill(c2, b2), this._initProps(b2, c2, d2, e2, f2)) : (this._firstPT && (this.vars.lazy !== false && this._duration || this.vars.lazy && !this._duration) && (L[b2._gsTweenID] = true), i2);
  }, i.render = function(a2, b2, c2) {
    var d2, e2, f2, g2, h2 = this, i2 = h2._time, j2 = h2._duration, k2 = h2._rawPrevTime;
    if (a2 >= j2 - n && a2 >= 0)
      h2._totalTime = h2._time = j2, h2.ratio = h2._ease._calcEnd ? h2._ease.getRatio(1) : 1, h2._reversed || (d2 = true, e2 = "onComplete", c2 = c2 || h2._timeline.autoRemoveChildren), 0 === j2 && (h2._initted || !h2.vars.lazy || c2) && (h2._startTime === h2._timeline._duration && (a2 = 0), (0 > k2 || 0 >= a2 && a2 >= -n || k2 === n && "isPause" !== h2.data) && k2 !== a2 && (c2 = true, k2 > n && (e2 = "onReverseComplete")), h2._rawPrevTime = g2 = !b2 || a2 || k2 === a2 ? a2 : n);
    else if (n > a2)
      h2._totalTime = h2._time = 0, h2.ratio = h2._ease._calcEnd ? h2._ease.getRatio(0) : 0, (0 !== i2 || 0 === j2 && k2 > 0) && (e2 = "onReverseComplete", d2 = h2._reversed), a2 > -n ? a2 = 0 : 0 > a2 && (h2._active = false, 0 === j2 && (h2._initted || !h2.vars.lazy || c2) && (k2 >= 0 && (k2 !== n || "isPause" !== h2.data) && (c2 = true), h2._rawPrevTime = g2 = !b2 || a2 || k2 === a2 ? a2 : n)), (!h2._initted || h2._startAt && h2._startAt.progress()) && (c2 = true);
    else if (h2._totalTime = h2._time = a2, h2._easeType) {
      var l2 = a2 / j2, m2 = h2._easeType, o2 = h2._easePower;
      (1 === m2 || 3 === m2 && l2 >= 0.5) && (l2 = 1 - l2), 3 === m2 && (l2 *= 2), 1 === o2 ? l2 *= l2 : 2 === o2 ? l2 *= l2 * l2 : 3 === o2 ? l2 *= l2 * l2 * l2 : 4 === o2 && (l2 *= l2 * l2 * l2 * l2), h2.ratio = 1 === m2 ? 1 - l2 : 2 === m2 ? l2 : 0.5 > a2 / j2 ? l2 / 2 : 1 - l2 / 2;
    } else
      h2.ratio = h2._ease.getRatio(a2 / j2);
    if (h2._time !== i2 || c2) {
      if (!h2._initted) {
        if (h2._init(), !h2._initted || h2._gc)
          return;
        if (!c2 && h2._firstPT && (h2.vars.lazy !== false && h2._duration || h2.vars.lazy && !h2._duration))
          return h2._time = h2._totalTime = i2, h2._rawPrevTime = k2, K.push(h2), void (h2._lazy = [a2, b2]);
        h2._time && !d2 ? h2.ratio = h2._ease.getRatio(h2._time / j2) : d2 && h2._ease._calcEnd && (h2.ratio = h2._ease.getRatio(0 === h2._time ? 0 : 1));
      }
      for (h2._lazy !== false && (h2._lazy = false), h2._active || !h2._paused && h2._time !== i2 && a2 >= 0 && (h2._active = true), 0 === i2 && (h2._startAt && (a2 >= 0 ? h2._startAt.render(a2, true, c2) : e2 || (e2 = "_dummyGS")), h2.vars.onStart && (0 !== h2._time || 0 === j2) && (b2 || h2._callback("onStart"))), f2 = h2._firstPT; f2; )
        f2.f ? f2.t[f2.p](f2.c * h2.ratio + f2.s) : f2.t[f2.p] = f2.c * h2.ratio + f2.s, f2 = f2._next;
      h2._onUpdate && (0 > a2 && h2._startAt && a2 !== -1e-4 && h2._startAt.render(a2, true, c2), b2 || (h2._time !== i2 || d2 || c2) && h2._callback("onUpdate")), e2 && (!h2._gc || c2) && (0 > a2 && h2._startAt && !h2._onUpdate && a2 !== -1e-4 && h2._startAt.render(a2, true, c2), d2 && (h2._timeline.autoRemoveChildren && h2._enabled(false, false), h2._active = false), !b2 && h2.vars[e2] && h2._callback(e2), 0 === j2 && h2._rawPrevTime === n && g2 !== n && (h2._rawPrevTime = 0));
    }
  }, i._kill = function(a2, b2, c2) {
    if ("all" === a2 && (a2 = null), null == a2 && (null == b2 || b2 === this.target))
      return this._lazy = false, this._enabled(false, false);
    b2 = "string" != typeof b2 ? b2 || this._targets || this.target : H.selector(b2) || b2;
    var d2, e2, f2, g2, h2, i2, j2, k2, l2, m2 = c2 && this._time && c2._startTime === this._startTime && this._timeline === c2._timeline, n2 = this._firstPT;
    if ((q(b2) || I(b2)) && "number" != typeof b2[0])
      for (d2 = b2.length; --d2 > -1; )
        this._kill(a2, b2[d2], c2) && (i2 = true);
    else {
      if (this._targets) {
        for (d2 = this._targets.length; --d2 > -1; )
          if (b2 === this._targets[d2]) {
            h2 = this._propLookup[d2] || {}, this._overwrittenProps = this._overwrittenProps || [], e2 = this._overwrittenProps[d2] = a2 ? this._overwrittenProps[d2] || {} : "all";
            break;
          }
      } else {
        if (b2 !== this.target)
          return false;
        h2 = this._propLookup, e2 = this._overwrittenProps = a2 ? this._overwrittenProps || {} : "all";
      }
      if (h2) {
        if (j2 = a2 || h2, k2 = a2 !== e2 && "all" !== e2 && a2 !== h2 && ("object" != typeof a2 || !a2._tempKill), c2 && (H.onOverwrite || this.vars.onOverwrite)) {
          for (f2 in j2)
            h2[f2] && (l2 || (l2 = []), l2.push(f2));
          if ((l2 || !a2) && !ba(this, c2, b2, l2))
            return false;
        }
        for (f2 in j2)
          (g2 = h2[f2]) && (m2 && (g2.f ? g2.t[g2.p](g2.s) : g2.t[g2.p] = g2.s, i2 = true), g2.pg && g2.t._kill(j2) && (i2 = true), g2.pg && 0 !== g2.t._overwriteProps.length || (g2._prev ? g2._prev._next = g2._next : g2 === this._firstPT && (this._firstPT = g2._next), g2._next && (g2._next._prev = g2._prev), g2._next = g2._prev = null), delete h2[f2]), k2 && (e2[f2] = 1);
        !this._firstPT && this._initted && n2 && this._enabled(false, false);
      }
    }
    return i2;
  }, i.invalidate = function() {
    this._notifyPluginsOfEnabled && H._onPluginEvent("_onDisable", this);
    var a2 = this._time;
    return this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = false, this._propLookup = this._targets ? {} : [], E.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -n, this.render(a2, false, this.vars.lazy !== false)), this;
  }, i._enabled = function(a2, b2) {
    if (k || j.wake(), a2 && this._gc) {
      var c2, d2 = this._targets;
      if (d2)
        for (c2 = d2.length; --c2 > -1; )
          this._siblings[c2] = aa(d2[c2], this, true);
      else
        this._siblings = aa(this.target, this, true);
    }
    return E.prototype._enabled.call(this, a2, b2), this._notifyPluginsOfEnabled && this._firstPT ? H._onPluginEvent(a2 ? "_onEnable" : "_onDisable", this) : false;
  }, H.to = function(a2, b2, c2) {
    return new H(a2, b2, c2);
  }, H.from = function(a2, b2, c2) {
    return c2.runBackwards = true, c2.immediateRender = 0 != c2.immediateRender, new H(a2, b2, c2);
  }, H.fromTo = function(a2, b2, c2, d2) {
    return d2.startAt = c2, d2.immediateRender = 0 != d2.immediateRender && 0 != c2.immediateRender, new H(a2, b2, d2);
  }, H.delayedCall = function(a2, b2, c2, d2, e2) {
    return new H(b2, 0, { delay: a2, onComplete: b2, onCompleteParams: c2, callbackScope: d2, onReverseComplete: b2, onReverseCompleteParams: c2, immediateRender: false, lazy: false, useFrames: e2, overwrite: 0 });
  }, H.set = function(a2, b2) {
    return new H(a2, 0, b2);
  }, H.getTweensOf = function(a2, b2) {
    if (null == a2)
      return [];
    a2 = "string" != typeof a2 ? a2 : H.selector(a2) || a2;
    var c2, d2, e2, f2;
    if ((q(a2) || I(a2)) && "number" != typeof a2[0]) {
      for (c2 = a2.length, d2 = []; --c2 > -1; )
        d2 = d2.concat(H.getTweensOf(a2[c2], b2));
      for (c2 = d2.length; --c2 > -1; )
        for (f2 = d2[c2], e2 = c2; --e2 > -1; )
          f2 === d2[e2] && d2.splice(c2, 1);
    } else if (a2._gsTweenID)
      for (d2 = aa(a2).concat(), c2 = d2.length; --c2 > -1; )
        (d2[c2]._gc || b2 && !d2[c2].isActive()) && d2.splice(c2, 1);
    return d2 || [];
  }, H.killTweensOf = H.killDelayedCallsTo = function(a2, b2, c2) {
    "object" == typeof b2 && (c2 = b2, b2 = false);
    for (var d2 = H.getTweensOf(a2, b2), e2 = d2.length; --e2 > -1; )
      d2[e2]._kill(c2, a2);
  };
  var ea = u("plugins.TweenPlugin", function(a2, b2) {
    this._overwriteProps = (a2 || "").split(","), this._propName = this._overwriteProps[0], this._priority = b2 || 0, this._super = ea.prototype;
  }, true);
  if (i = ea.prototype, ea.version = "1.19.0", ea.API = 2, i._firstPT = null, i._addTween = R, i.setRatio = O, i._kill = function(a2) {
    var b2, c2 = this._overwriteProps, d2 = this._firstPT;
    if (null != a2[this._propName])
      this._overwriteProps = [];
    else
      for (b2 = c2.length; --b2 > -1; )
        null != a2[c2[b2]] && c2.splice(b2, 1);
    for (; d2; )
      null != a2[d2.n] && (d2._next && (d2._next._prev = d2._prev), d2._prev ? (d2._prev._next = d2._next, d2._prev = null) : this._firstPT === d2 && (this._firstPT = d2._next)), d2 = d2._next;
    return false;
  }, i._mod = i._roundProps = function(a2) {
    for (var b2, c2 = this._firstPT; c2; )
      b2 = a2[this._propName] || null != c2.n && a2[c2.n.split(this._propName + "_").join("")], b2 && "function" == typeof b2 && (2 === c2.f ? c2.t._applyPT.m = b2 : c2.m = b2), c2 = c2._next;
  }, H._onPluginEvent = function(a2, b2) {
    var c2, d2, e2, f2, g2, h2 = b2._firstPT;
    if ("_onInitAllProps" === a2) {
      for (; h2; ) {
        for (g2 = h2._next, d2 = e2; d2 && d2.pr > h2.pr; )
          d2 = d2._next;
        (h2._prev = d2 ? d2._prev : f2) ? h2._prev._next = h2 : e2 = h2, (h2._next = d2) ? d2._prev = h2 : f2 = h2, h2 = g2;
      }
      h2 = b2._firstPT = e2;
    }
    for (; h2; )
      h2.pg && "function" == typeof h2.t[a2] && h2.t[a2]() && (c2 = true), h2 = h2._next;
    return c2;
  }, ea.activate = function(a2) {
    for (var b2 = a2.length; --b2 > -1; )
      a2[b2].API === ea.API && (T[new a2[b2]()._propName] = a2[b2]);
    return true;
  }, t.plugin = function(a2) {
    if (!(a2 && a2.propName && a2.init && a2.API))
      throw "illegal plugin definition.";
    var b2, c2 = a2.propName, d2 = a2.priority || 0, e2 = a2.overwriteProps, f2 = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_mod", mod: "_mod", initAll: "_onInitAllProps" }, g2 = u("plugins." + c2.charAt(0).toUpperCase() + c2.substr(1) + "Plugin", function() {
      ea.call(this, c2, d2), this._overwriteProps = e2 || [];
    }, a2.global === true), h2 = g2.prototype = new ea(c2);
    h2.constructor = g2, g2.API = a2.API;
    for (b2 in f2)
      "function" == typeof a2[b2] && (h2[f2[b2]] = a2[b2]);
    return g2.version = a2.version, ea.activate([g2]), g2;
  }, g = a._gsQueue) {
    for (h = 0; h < g.length; h++)
      g[h]();
    for (i in r)
      r[i].func || a.console.log("GSAP encountered missing dependency: " + i);
  }
  k = false;
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : globalThis || window, "TweenMax");
