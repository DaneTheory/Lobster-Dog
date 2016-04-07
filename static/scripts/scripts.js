! function(t, e) {
    "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? module.exports = e() : t.LazyLoadin = e()
}(this, function() {
    function t() {
        g || (h = {
            elements_selector: "img",
            container: window,
            threshold: 300,
            throttle: 50,
            data_src: "source",
            data_srcset: "sourceset",
            class_loading: "loading",
            class_loaded: "loaded",
            skip_invisible: true,
            show_while_loading: false,
            callback_load: function(){
              var currLoadedLength = document.querySelectorAll('img.loaded').length,
                  currLoadingLength = document.querySelectorAll('img.loading').length,
                  loadingItems = document.querySelectorAll('img.loading'),
                  isLoading = true;

              if(currLoadingLength < 1 && currLoadedLength === 4) {
                isLoading = false;
              }

              if(isLoading) {
                for(var i = 0; i < loadingItems.length; i++){
                  var loadingItem = loadingItems[i];
                  function fadeIn(loadingItem) {
                    loadingItem.style.opacity = 0;
                    var effectTicker = function() {
                      loadingItem.style.opacity = +loadingItem.style.opacity + 0.01;
                      if (+loadingItem.style.opacity < 1) {
                        (window.requestAnimationFrame && requestAnimationFrame(effectTicker)) || setTimeout(effectTicker, 16)
                      }
                    };
                    effectTicker();
                  }
                  fadeIn(loadingItem);
                }
              }
            },
            callback_set: null,
            callback_processed: null,
            placeholder: "data:image/gif;base64,R0lGODlhcwBzAPIAAB8fH3x8fPT09FNTU9XV1aqqqgAAAP///yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1MDE3ZTk0MS1kNzFhLTQxYTQtYjBhMS1hOGQ3M2RkMmRjZWMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUM2MjZBRkVFRUIxMTFFMzlBMUZBMDIwMzhBRkEzQ0EiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUM2MjZBRkRFRUIxMTFFMzlBMUZBMDIwMzhBRkEzQ0EiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDY3ZjI2NTctZDNlYS00MmYwLTkzZjUtNDQ5NjE5YWNjZmFiIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjUwMTdlOTQxLWQ3MWEtNDFhNC1iMGExLWE4ZDczZGQyZGNlYyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8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"
        }, _ = !!window.addEventListener, p = !!window.attachEvent, f = !!document.body.classList, g = !0)
    }

    function e(t, e, n) {
        return _ ? void t.addEventListener(e, n) : void(p && (t.attachEvent("on" + e, function(t) {
            return function() {
                n.call(t, window.event)
            }
        }(t)), t = null))
    }

    function n(t, e, n) {
        return _ ? void t.removeEventListener(e, n) : void(p && t.detachEvent("on" + e, n))
    }

    function o(t, e, n) {
        function o() {
            return window.innerWidth || u.documentElement.clientWidth || document.body.clientWidth
        }

        function i() {
            return window.innerHeight || u.documentElement.clientHeight || document.body.clientHeight
        }

        function s(t) {
            return t.getBoundingClientRect().top + h - u.documentElement.clientTop
        }

        function l(t) {
            return t.getBoundingClientRect().left + _ - u.documentElement.clientLeft
        }

        function r() {
            var o;
            return o = e === window ? i() + h : s(e) + e.offsetHeight, o <= s(t) - n
        }

        function a() {
            var i;
            return i = e === window ? o() + window.pageXOffset : l(e) + o(), i <= l(t) - n
        }

        function c() {
            var o;
            return o = e === window ? h : s(e), o >= s(t) + n + t.offsetHeight
        }

        function d() {
            var o;
            return o = e === window ? _ : l(e), o >= l(t) + n + t.offsetWidth
        }
        var u, h, _;
        return u = t.ownerDocument, h = window.pageYOffset || u.body.scrollTop, _ = window.pageXOffset || u.body.scrollLeft, !(r() || c() || a() || d())
    }

    function i() {
        var t = new Date;
        return t.getTime()
    }

    function s(t, e) {
        var n, o = {};
        for (n in t) t.hasOwnProperty(n) && (o[n] = t[n]);
        for (n in e) e.hasOwnProperty(n) && (o[n] = e[n]);
        return o
    }

    function l(t) {
        try {
            return Array.prototype.slice.call(t)
        } catch (e) {
            var n, o = [],
                i = t.length;
            for (n = 0; i > n; n++) o.push(t[n]);
            return o
        }
    }

    function r(t, e) {
        return f ? void t.classList.add(e) : void(t.className += (t.className ? " " : "") + e)
    }

    function a(t, e) {
        return f ? void t.classList.remove(e) : void(t.className = t.className.replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, ""))
    }

    function c(t, e, n, o) {
        var i = e.getAttribute("data-" + n),
            s = e.getAttribute("data-" + o);
        i && t.setAttribute("srcset", i), s && t.setAttribute("src", s)
    }

    function d(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }

    function u(n) {
        t(), this._settings = s(h, n), this._queryOriginNode = this._settings.container === window ? document : this._settings.container, this._previousLoopTime = 0, this._loopTimeout = null, this._handleScrollFn = d(this.handleScroll, this), e(window, "resize", this._handleScrollFn), this.update()
    }
    var h, _, p, f, g = !1;
    return u.prototype._showOnLoad = function(t) {
        function o() {
            null !== s && (s.callback_load && s.callback_load(t), c(t, t, s.data_srcset, s.data_src), s.callback_set && s.callback_set(t), a(t, s.class_loading), r(t, s.class_loaded), n(i, "load", o))
        }
        var i, s = this._settings;
        t.getAttribute("src") || t.setAttribute("src", s.placeholder), i = document.createElement("img"), e(i, "load", o), r(t, s.class_loading), c(i, t, s.data_srcset, s.data_src)
    }, u.prototype._showOnAppear = function(t) {
        function o() {
            null !== i && (i.callback_load && i.callback_load(t), a(t, i.class_loading), r(t, i.class_loaded), n(t, "load", o))
        }
        var i = this._settings;
        e(t, "load", o), r(t, i.class_loading), c(t, t, i.data_srcset, i.data_src), i.callback_set && i.callback_set(t)
    }, u.prototype._loopThroughElements = function() {
        var t, e, n = this._settings,
            i = this._elements,
            s = i ? i.length : 0,
            l = [];
        for (t = 0; s > t; t++) e = i[t], n.skip_invisible && null === e.offsetParent || o(e, n.container, n.threshold) && (n.show_while_loading ? this._showOnAppear(e) : this._showOnLoad(e), l.push(t), e.wasProcessed = !0);
        for (; l.length > 0;) i.splice(l.pop(), 1), n.callback_processed && n.callback_processed(i.length);
        0 === s && this._stopScrollHandler()
    }, u.prototype._purgeElements = function() {
        var t, e, n = this._elements,
            o = n.length,
            i = [];
        for (t = 0; o > t; t++) e = n[t], e.wasProcessed && i.push(t);
        for (; i.length > 0;) n.splice(i.pop(), 1)
    }, u.prototype._startScrollHandler = function() {
        this._isHandlingScroll || (this._isHandlingScroll = !0, e(this._settings.container, "scroll", this._handleScrollFn))
    }, u.prototype._stopScrollHandler = function() {
        this._isHandlingScroll && (this._isHandlingScroll = !1, n(this._settings.container, "scroll", this._handleScrollFn))
    }, u.prototype.handleScroll = function() {
        var t, e, n;
        this._settings && (e = i(), n = this._settings.throttle, 0 !== n ? (t = n - (e - this._previousLoopTime), 0 >= t || t > n ? (this._loopTimeout && (clearTimeout(this._loopTimeout), this._loopTimeout = null), this._previousLoopTime = e, this._loopThroughElements()) : this._loopTimeout || (this._loopTimeout = setTimeout(d(function() {
            this._previousLoopTime = i(), this._loopTimeout = null, this._loopThroughElements()
        }, this), t))) : this._loopThroughElements())
    }, u.prototype.update = function() {
        this._elements = l(this._queryOriginNode.querySelectorAll(this._settings.elements_selector)), this._purgeElements(), this._loopThroughElements(), this._startScrollHandler()
    }, u.prototype.destroy = function() {
        n(window, "resize", this._handleScrollFn), this._loopTimeout && (clearTimeout(this._loopTimeout), this._loopTimeout = null), this._stopScrollHandler(), this._elements = null, this._queryOriginNode = null, this._settings = null
    }, u
});
var lobsterDogLoader = new LazyLoadin;
