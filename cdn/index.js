/*! For license information please see index.js.LICENSE.txt */
(() => {
  var e = {
      173: () => {
        (() => {
          var e, t, i;
          const r = Symbol(),
            o = Symbol(),
            a = Symbol(),
            n = Symbol(),
            d = Symbol(),
            s = Symbol(),
            c = Symbol(),
            l = Symbol(),
            p = Symbol(),
            m = Symbol(),
            h = Symbol(),
            u = Symbol(),
            f = Symbol();
          class g {
            constructor() {
              (this[e] = []), (this[t] = []), (this[i] = new Set());
            }
            destructor() {
              this[p](this[a]);
              var e = this;
              (e[r] = null), (e[a] = null), (e[o] = null);
            }
            get top() {
              var e = this[r];
              return e[e.length - 1] || null;
            }
            push(e) {
              e &&
                e !== this.top &&
                (this.remove(e), this[s](e), this[r].push(e));
            }
            remove(e) {
              return (
                -1 !== (e = this[r].indexOf(e)) &&
                (this[r].splice(e, 1),
                e === this[r].length && this[s](this.top),
                !0)
              );
            }
            pop() {
              var e = this.top;
              return e && this.remove(e), e;
            }
            has(e) {
              return -1 !== this[r].indexOf(e);
            }
            [((e = r), (t = a), (i = o), s)](e) {
              const t = this[o],
                i = this[a];
              if (!e) return this[p](i), t.clear(), void (this[a] = []);
              const r = this[m](e);
              if (r[r.length - 1].parentNode !== document.body)
                throw Error(
                  'Non-connected element cannot be a blocking element'
                );
              if (((this[a] = r), (e = this[h](e)), i.length)) {
                let t = i.length - 1,
                  o = r.length - 1;
                for (; 0 < t && 0 < o && i[t] === r[o]; ) t--, o--;
                i[t] !== r[o] && this[c](i[t], r[o]),
                  0 < t && this[p](i.slice(0, t)),
                  0 < o && this[l](r.slice(0, o), e, null);
              } else this[l](r, e, t);
            }
            [c](e, t) {
              const i = e[n];
              this[u](e) && !e.inert && ((e.inert = !0), i.add(e)),
                i.has(t) && ((t.inert = !1), i.delete(t)),
                (t[d] = e[d]),
                (t[n] = i),
                (e[d] = void 0),
                (e[n] = void 0);
            }
            [p](e) {
              for (const t of e) {
                t[d].disconnect(), (t[d] = void 0);
                for (const e of t[n]) e.inert = !1;
                t[n] = void 0;
              }
            }
            [l](e, t, i) {
              for (const a of e) {
                var r = a.parentNode,
                  o = r.children;
                const e = new Set();
                for (let r = 0; r < o.length; r++) {
                  const n = o[r];
                  n === a ||
                    !this[u](n) ||
                    (t && t.has(n)) ||
                    (i && n.inert ? i.add(n) : ((n.inert = !0), e.add(n)));
                }
                a[n] = e;
                const s = new MutationObserver(this[f].bind(this));
                a[d] = s;
                let c = r;
                (r = c),
                  r.__shady && r.host && (c = r.host),
                  s.observe(c, { childList: !0 });
              }
            }
            [f](e) {
              const t = this[a],
                i = this[o];
              for (const o of e) {
                var r = o.target.host || o.target,
                  d =
                    ((r = r === document.body ? t.length : t.indexOf(r)),
                    t[r - 1]);
                const e = d[n];
                for (let t = 0; t < o.removedNodes.length; t++) {
                  const i = o.removedNodes[t];
                  if (i === d)
                    return (
                      console.info(
                        'Detected removal of the top Blocking Element.'
                      ),
                      void this.pop()
                    );
                  e.has(i) && ((i.inert = !1), e.delete(i));
                }
                for (let t = 0; t < o.addedNodes.length; t++) {
                  const r = o.addedNodes[t];
                  this[u](r) &&
                    (i && r.inert ? i.add(r) : ((r.inert = !0), e.add(r)));
                }
              }
            }
            [u](e) {
              return !1 === /^(style|template|script)$/.test(e.localName);
            }
            [m](e) {
              const t = [];
              let i = e;
              for (; i && i !== document.body; )
                if (
                  (i.nodeType === Node.ELEMENT_NODE && t.push(i),
                  i.assignedSlot)
                ) {
                  for (; (i = i.assignedSlot); ) t.push(i);
                  i = t.pop();
                } else i = i.parentNode || i.host;
              return t;
            }
            [h](e) {
              const t = e.shadowRoot;
              if (!t) return null;
              const i = new Set();
              let r, o;
              var a;
              const n = t.querySelectorAll('slot');
              if (n.length && n[0].assignedNodes)
                for (r = 0; r < n.length; r++)
                  for (
                    a = n[r].assignedNodes({ flatten: !0 }), o = 0;
                    o < a.length;
                    o++
                  )
                    a[o].nodeType === Node.ELEMENT_NODE && i.add(a[o]);
              return i;
            }
          }
          document.$blockingElements = new g();
        })();
      },
      102: () => {
        var e,
          t,
          i,
          r,
          o,
          a,
          n = function (e, t, i) {
            return t && d(e.prototype, t), i && d(e, i), e;
          };
        function d(e, t) {
          for (var i = 0; i < t.length; i++) {
            var r = t[i];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function s(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }
        function c(e, t) {
          s(this, c),
            (this._inertManager = t),
            (this._rootElement = e),
            (this._managedNodes = new Set()),
            this._rootElement.hasAttribute('aria-hidden')
              ? (this._savedAriaHidden =
                  this._rootElement.getAttribute('aria-hidden'))
              : (this._savedAriaHidden = null),
            this._rootElement.setAttribute('aria-hidden', 'true'),
            this._makeSubtreeUnfocusable(this._rootElement),
            (this._observer = new MutationObserver(
              this._onMutation.bind(this)
            )),
            this._observer.observe(this._rootElement, {
              attributes: !0,
              childList: !0,
              subtree: !0,
            });
        }
        function l(e, t) {
          s(this, l),
            (this._node = e),
            (this._overrodeFocusMethod = !1),
            (this._inertRoots = new Set([t])),
            (this._savedTabIndex = null),
            (this._destroyed = !1),
            this.ensureUntabbable();
        }
        function p(e) {
          if ((s(this, p), !e))
            throw new Error(
              'Missing required argument; InertManager needs to wrap a document.'
            );
          (this._document = e),
            (this._managedNodes = new Map()),
            (this._inertRoots = new Map()),
            (this._observer = new MutationObserver(
              this._watchForInert.bind(this)
            )),
            h(e.head || e.body || e.documentElement),
            'loading' === e.readyState
              ? e.addEventListener(
                  'DOMContentLoaded',
                  this._onDocumentLoaded.bind(this)
                )
              : this._onDocumentLoaded();
        }
        function m(e, t, i) {
          if (e.nodeType == Node.ELEMENT_NODE) {
            var r = e;
            if ((t && t(r), (o = r.shadowRoot))) return void m(o, t, o);
            if ('content' == r.localName) {
              for (
                var o,
                  a = (o = r).getDistributedNodes
                    ? o.getDistributedNodes()
                    : [],
                  n = 0;
                n < a.length;
                n++
              )
                m(a[n], t, i);
              return;
            }
            if ('slot' == r.localName) {
              for (
                var d = (r = r).assignedNodes
                    ? r.assignedNodes({ flatten: !0 })
                    : [],
                  s = 0;
                s < d.length;
                s++
              )
                m(d[s], t, i);
              return;
            }
          }
          for (var c = e.firstChild; null != c; )
            m(c, t, i), (c = c.nextSibling);
        }
        function h(e) {
          var t;
          e.querySelector('style#inert-style, link#inert-style') ||
            ((t = document.createElement('style')).setAttribute(
              'id',
              'inert-style'
            ),
            (t.textContent =
              '\n[inert] {\n  pointer-events: none;\n  cursor: default;\n}\n\n[inert], [inert] * {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n'),
            e.appendChild(t));
        }
        'undefined' != typeof window &&
          ((e = Array.prototype.slice),
          (t =
            Element.prototype.matches || Element.prototype.msMatchesSelector),
          (i = [
            'a[href]',
            'area[href]',
            'input:not([disabled])',
            'select:not([disabled])',
            'textarea:not([disabled])',
            'button:not([disabled])',
            'details',
            'summary',
            'iframe',
            'object',
            'embed',
            '[contenteditable]',
          ].join(',')),
          n(c, [
            {
              key: 'destructor',
              value: function () {
                this._observer.disconnect(),
                  this._rootElement &&
                    (null !== this._savedAriaHidden
                      ? this._rootElement.setAttribute(
                          'aria-hidden',
                          this._savedAriaHidden
                        )
                      : this._rootElement.removeAttribute('aria-hidden')),
                  this._managedNodes.forEach(function (e) {
                    this._unmanageNode(e.node);
                  }, this),
                  (this._observer = null),
                  (this._rootElement = null),
                  (this._managedNodes = null),
                  (this._inertManager = null);
              },
            },
            {
              key: '_makeSubtreeUnfocusable',
              value: function (e) {
                var t = this;
                m(e, function (e) {
                  return t._visitNode(e);
                });
                var i = document.activeElement;
                if (!document.body.contains(e)) {
                  for (var r = e, o = void 0; r; ) {
                    if (r.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                      o = r;
                      break;
                    }
                    r = r.parentNode;
                  }
                  o && (i = o.activeElement);
                }
                e.contains(i) &&
                  (i.blur(),
                  i === document.activeElement && document.body.focus());
              },
            },
            {
              key: '_visitNode',
              value: function (e) {
                e.nodeType === Node.ELEMENT_NODE &&
                  ((e = e) !== this._rootElement &&
                    e.hasAttribute('inert') &&
                    this._adoptInertRoot(e),
                  (t.call(e, i) || e.hasAttribute('tabindex')) &&
                    this._manageNode(e));
              },
            },
            {
              key: '_manageNode',
              value: function (e) {
                (e = this._inertManager.register(e, this)),
                  this._managedNodes.add(e);
              },
            },
            {
              key: '_unmanageNode',
              value: function (e) {
                (e = this._inertManager.deregister(e, this)) &&
                  this._managedNodes.delete(e);
              },
            },
            {
              key: '_unmanageSubtree',
              value: function (e) {
                var t = this;
                m(e, function (e) {
                  return t._unmanageNode(e);
                });
              },
            },
            {
              key: '_adoptInertRoot',
              value: function (e) {
                var t = this._inertManager.getInertRoot(e);
                t ||
                  (this._inertManager.setInert(e, !0),
                  (t = this._inertManager.getInertRoot(e))),
                  t.managedNodes.forEach(function (e) {
                    this._manageNode(e.node);
                  }, this);
              },
            },
            {
              key: '_onMutation',
              value: function (t, i) {
                t.forEach(function (t) {
                  var i,
                    r = t.target;
                  'childList' === t.type
                    ? (e.call(t.addedNodes).forEach(function (e) {
                        this._makeSubtreeUnfocusable(e);
                      }, this),
                      e.call(t.removedNodes).forEach(function (e) {
                        this._unmanageSubtree(e);
                      }, this))
                    : 'attributes' === t.type &&
                      ('tabindex' === t.attributeName
                        ? this._manageNode(r)
                        : r !== this._rootElement &&
                          'inert' === t.attributeName &&
                          r.hasAttribute('inert') &&
                          (this._adoptInertRoot(r),
                          (i = this._inertManager.getInertRoot(r)),
                          this._managedNodes.forEach(function (e) {
                            r.contains(e.node) && i._manageNode(e.node);
                          })));
                }, this);
              },
            },
            {
              key: 'managedNodes',
              get: function () {
                return new Set(this._managedNodes);
              },
            },
            {
              key: 'hasSavedAriaHidden',
              get: function () {
                return null !== this._savedAriaHidden;
              },
            },
            {
              key: 'savedAriaHidden',
              set: function (e) {
                this._savedAriaHidden = e;
              },
              get: function () {
                return this._savedAriaHidden;
              },
            },
          ]),
          (r = c),
          n(l, [
            {
              key: 'destructor',
              value: function () {
                var e;
                this._throwIfDestroyed(),
                  this._node &&
                    this._node.nodeType === Node.ELEMENT_NODE &&
                    ((e = this._node),
                    null !== this._savedTabIndex
                      ? e.setAttribute('tabindex', this._savedTabIndex)
                      : e.removeAttribute('tabindex'),
                    this._overrodeFocusMethod && delete e.focus),
                  (this._node = null),
                  (this._inertRoots = null),
                  (this._destroyed = !0);
              },
            },
            {
              key: '_throwIfDestroyed',
              value: function () {
                if (this.destroyed)
                  throw new Error('Trying to access destroyed InertNode');
              },
            },
            {
              key: 'ensureUntabbable',
              value: function () {
                var e;
                this.node.nodeType === Node.ELEMENT_NODE &&
                  ((e = this.node),
                  t.call(e, i)
                    ? (-1 === e.tabIndex && this.hasSavedTabIndex) ||
                      (e.hasAttribute('tabindex') &&
                        (this._savedTabIndex = e.tabIndex),
                      e.setAttribute('tabindex', '-1'),
                      e.nodeType === Node.ELEMENT_NODE &&
                        ((e.focus = function () {}),
                        (this._overrodeFocusMethod = !0)))
                    : e.hasAttribute('tabindex') &&
                      ((this._savedTabIndex = e.tabIndex),
                      e.removeAttribute('tabindex')));
              },
            },
            {
              key: 'addInertRoot',
              value: function (e) {
                this._throwIfDestroyed(), this._inertRoots.add(e);
              },
            },
            {
              key: 'removeInertRoot',
              value: function (e) {
                this._throwIfDestroyed(),
                  this._inertRoots.delete(e),
                  0 === this._inertRoots.size && this.destructor();
              },
            },
            {
              key: 'destroyed',
              get: function () {
                return this._destroyed;
              },
            },
            {
              key: 'hasSavedTabIndex',
              get: function () {
                return null !== this._savedTabIndex;
              },
            },
            {
              key: 'node',
              get: function () {
                return this._throwIfDestroyed(), this._node;
              },
            },
            {
              key: 'savedTabIndex',
              set: function (e) {
                this._throwIfDestroyed(), (this._savedTabIndex = e);
              },
              get: function () {
                return this._throwIfDestroyed(), this._savedTabIndex;
              },
            },
          ]),
          (o = l),
          n(p, [
            {
              key: 'setInert',
              value: function (e, t) {
                if (t) {
                  if (
                    !this._inertRoots.has(e) &&
                    ((t = new r(e, this)),
                    e.setAttribute('inert', ''),
                    this._inertRoots.set(e, t),
                    !this._document.body.contains(e))
                  )
                    for (var i = e.parentNode; i; )
                      11 === i.nodeType && h(i), (i = i.parentNode);
                } else
                  this._inertRoots.has(e) &&
                    (this._inertRoots.get(e).destructor(),
                    this._inertRoots.delete(e),
                    e.removeAttribute('inert'));
              },
            },
            {
              key: 'getInertRoot',
              value: function (e) {
                return this._inertRoots.get(e);
              },
            },
            {
              key: 'register',
              value: function (e, t) {
                var i = this._managedNodes.get(e);
                return (
                  void 0 !== i ? i.addInertRoot(t) : (i = new o(e, t)),
                  this._managedNodes.set(e, i),
                  i
                );
              },
            },
            {
              key: 'deregister',
              value: function (e, t) {
                var i = this._managedNodes.get(e);
                return i
                  ? (i.removeInertRoot(t),
                    i.destroyed && this._managedNodes.delete(e),
                    i)
                  : null;
              },
            },
            {
              key: '_onDocumentLoaded',
              value: function () {
                e
                  .call(this._document.querySelectorAll('[inert]'))
                  .forEach(function (e) {
                    this.setInert(e, !0);
                  }, this),
                  this._observer.observe(
                    this._document.body || this._document.documentElement,
                    { attributes: !0, subtree: !0, childList: !0 }
                  );
              },
            },
            {
              key: '_watchForInert',
              value: function (i, r) {
                var o = this;
                i.forEach(function (i) {
                  switch (i.type) {
                    case 'childList':
                      e.call(i.addedNodes).forEach(function (i) {
                        var r;
                        i.nodeType === Node.ELEMENT_NODE &&
                          ((r = e.call(i.querySelectorAll('[inert]'))),
                          t.call(i, '[inert]') && r.unshift(i),
                          r.forEach(function (e) {
                            this.setInert(e, !0);
                          }, o));
                      }, o);
                      break;
                    case 'attributes':
                      if ('inert' !== i.attributeName) return;
                      var r = i.target,
                        a = r.hasAttribute('inert');
                      o.setInert(r, a);
                  }
                }, this);
              },
            },
          ]),
          (n = p),
          Element.prototype.hasOwnProperty('inert') ||
            ((a = new n(document)),
            Object.defineProperty(Element.prototype, 'inert', {
              enumerable: !0,
              get: function () {
                return this.hasAttribute('inert');
              },
              set: function (e) {
                a.setInert(this, e);
              },
            })));
      },
    },
    t = {};
  function i(r) {
    var o = t[r];
    return (
      void 0 !== o || ((o = t[r] = { exports: {} }), e[r](o, o.exports, i)),
      o.exports
    );
  }
  (() => {
    'use strict';
    var e = function (t, i) {
      return (e =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, t) {
            e.__proto__ = t;
          }) ||
        function (e, t) {
          for (var i in t)
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        })(t, i);
    };
    function t(t, i) {
      if ('function' != typeof i && null !== i)
        throw new TypeError(
          'Class extends value ' + String(i) + ' is not a constructor or null'
        );
      function r() {
        this.constructor = t;
      }
      e(t, i),
        (t.prototype =
          null === i
            ? Object.create(i)
            : ((r.prototype = i.prototype), new r()));
    }
    var r = function () {
      return (r =
        Object.assign ||
        function (e) {
          for (var t, i = 1, r = arguments.length; i < r; i++)
            for (var o in (t = arguments[i]))
              Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e;
        }).apply(this, arguments);
    };
    function o(e, t, i, r) {
      var o,
        a = arguments.length,
        n =
          a < 3
            ? t
            : null === r
            ? (r = Object.getOwnPropertyDescriptor(t, i))
            : r;
      if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
        n = Reflect.decorate(e, t, i, r);
      else
        for (var d = e.length - 1; 0 <= d; d--)
          (o = e[d]) &&
            (n = (a < 3 ? o(n) : 3 < a ? o(t, i, n) : o(t, i)) || n);
      return 3 < a && n && Object.defineProperty(t, i, n), n;
    }
    function a(e, t) {
      if ('object' == typeof Reflect && 'function' == typeof Reflect.metadata)
        return Reflect.metadata(e, t);
    }
    function n(e) {
      var t = 'function' == typeof Symbol && Symbol.iterator,
        i = t && e[t],
        r = 0;
      if (i) return i.call(e);
      if (e && 'number' == typeof e.length)
        return {
          next: function () {
            return {
              value: (e = e && r >= e.length ? void 0 : e) && e[r++],
              done: !e,
            };
          },
        };
      throw new TypeError(
        t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
      );
    }
    Object.create, Object.create;
    const d =
        window.ShadowRoot &&
        (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) &&
        'adoptedStyleSheets' in Document.prototype &&
        'replace' in CSSStyleSheet.prototype,
      s = Symbol(),
      c = new Map();
    class l {
      constructor(e, t) {
        if (((this._$cssResult$ = !0), t !== s))
          throw Error(
            'CSSResult is not constructable. Use `unsafeCSS` or `css` instead.'
          );
        this.cssText = e;
      }
      get styleSheet() {
        let e = c.get(this.cssText);
        return (
          d &&
            void 0 === e &&
            (c.set(this.cssText, (e = new CSSStyleSheet())),
            e.replaceSync(this.cssText)),
          e
        );
      }
      toString() {
        return this.cssText;
      }
    }
    const p = (e, ...t) => (
        (t =
          1 === e.length
            ? e[0]
            : t.reduce(
                (t, i, r) =>
                  t +
                  (() => {
                    if (!0 === i._$cssResult$) return i.cssText;
                    if ('number' == typeof i) return i;
                    throw Error(
                      "Value passed to 'css' function must be a 'css' function result: " +
                        i +
                        ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security."
                    );
                  })() +
                  e[r + 1],
                e[0]
              )),
        new l(t, s)
      ),
      m = d
        ? e => e
        : e =>
            e instanceof CSSStyleSheet
              ? (() => {
                  let t = '';
                  for (const i of e.cssRules) t += i.cssText;
                  return new l('string' == typeof (i = t) ? i : i + '', s);
                  var i;
                })()
              : e,
      h = {
        toAttribute(e, t) {
          switch (t) {
            case Boolean:
              e = e ? '' : null;
              break;
            case Object:
            case Array:
              e = null == e ? e : JSON.stringify(e);
          }
          return e;
        },
        fromAttribute(e, t) {
          let i = e;
          switch (t) {
            case Boolean:
              i = null !== e;
              break;
            case Number:
              i = null === e ? null : Number(e);
              break;
            case Object:
            case Array:
              try {
                i = JSON.parse(e);
              } catch (e) {
                i = null;
              }
          }
          return i;
        },
      },
      u = (e, t) => t !== e && (t == t || e == e),
      f = {
        attribute: !0,
        type: String,
        converter: h,
        reflect: !1,
        hasChanged: u,
      };
    class g extends HTMLElement {
      constructor() {
        super(),
          (this._$Et = new Map()),
          (this.isUpdatePending = !1),
          (this.hasUpdated = !1),
          (this._$Ei = null),
          this.o();
      }
      static addInitializer(e) {
        var t;
        (null !== (t = this.l) && void 0 !== t) || (this.l = []),
          this.l.push(e);
      }
      static get observedAttributes() {
        this.finalize();
        const e = [];
        return (
          this.elementProperties.forEach((t, i) => {
            void 0 !== (t = this._$Eh(i, t)) &&
              (this._$Eu.set(t, i), e.push(t));
          }),
          e
        );
      }
      static createProperty(e, t = f) {
        var i;
        t.state && (t.attribute = !1),
          this.finalize(),
          this.elementProperties.set(e, t),
          t.noAccessor ||
            this.prototype.hasOwnProperty(e) ||
            ((i = 'symbol' == typeof e ? Symbol() : '__' + e),
            void 0 !== (t = this.getPropertyDescriptor(e, i, t)) &&
              Object.defineProperty(this.prototype, e, t));
      }
      static getPropertyDescriptor(e, t, i) {
        return {
          get() {
            return this[t];
          },
          set(r) {
            var o = this[e];
            (this[t] = r), this.requestUpdate(e, o, i);
          },
          configurable: !0,
          enumerable: !0,
        };
      }
      static getPropertyOptions(e) {
        return this.elementProperties.get(e) || f;
      }
      static finalize() {
        if (this.hasOwnProperty('finalized')) return !1;
        this.finalized = !0;
        const e = Object.getPrototypeOf(this);
        if (
          (e.finalize(),
          (this.elementProperties = new Map(e.elementProperties)),
          (this._$Eu = new Map()),
          this.hasOwnProperty('properties'))
        ) {
          const e = this.properties,
            t = [
              ...Object.getOwnPropertyNames(e),
              ...Object.getOwnPropertySymbols(e),
            ];
          for (const i of t) this.createProperty(i, e[i]);
        }
        return (this.elementStyles = this.finalizeStyles(this.styles)), !0;
      }
      static finalizeStyles(e) {
        const t = [];
        if (Array.isArray(e)) {
          var i = new Set(e.flat(1 / 0).reverse());
          for (const e of i) t.unshift(m(e));
        } else void 0 !== e && t.push(m(e));
        return t;
      }
      static _$Eh(e, t) {
        return !1 === (t = t.attribute)
          ? void 0
          : 'string' == typeof t
          ? t
          : 'string' == typeof e
          ? e.toLowerCase()
          : void 0;
      }
      o() {
        var e;
        (this._$Ev = new Promise(e => (this.enableUpdating = e))),
          (this._$AL = new Map()),
          this._$Ep(),
          this.requestUpdate(),
          null === (e = this.constructor.l) ||
            void 0 === e ||
            e.forEach(e => e(this));
      }
      addController(e) {
        var t;
        (null !== (t = this._$Em) && void 0 !== t ? t : (this._$Em = [])).push(
          e
        ),
          void 0 !== this.renderRoot &&
            this.isConnected &&
            (null === (t = e.hostConnected) || void 0 === t || t.call(e));
      }
      removeController(e) {
        var t;
        null === (t = this._$Em) ||
          void 0 === t ||
          t.splice(this._$Em.indexOf(e) >>> 0, 1);
      }
      _$Ep() {
        this.constructor.elementProperties.forEach((e, t) => {
          this.hasOwnProperty(t) && (this._$Et.set(t, this[t]), delete this[t]);
        });
      }
      createRenderRoot() {
        var e,
          t,
          i =
            null !== (t = this.shadowRoot) && void 0 !== t
              ? t
              : this.attachShadow(this.constructor.shadowRootOptions);
        return (
          (e = i),
          (t = this.constructor.elementStyles),
          d
            ? (e.adoptedStyleSheets = t.map(e =>
                e instanceof CSSStyleSheet ? e : e.styleSheet
              ))
            : t.forEach(t => {
                const i = document.createElement('style');
                (i.textContent = t.cssText), e.appendChild(i);
              }),
          i
        );
      }
      connectedCallback() {
        var e;
        void 0 === this.renderRoot &&
          (this.renderRoot = this.createRenderRoot()),
          this.enableUpdating(!0),
          null === (e = this._$Em) ||
            void 0 === e ||
            e.forEach(e => {
              var t;
              return null === (t = e.hostConnected) || void 0 === t
                ? void 0
                : t.call(e);
            });
      }
      enableUpdating(e) {}
      disconnectedCallback() {
        var e;
        null === (e = this._$Em) ||
          void 0 === e ||
          e.forEach(e => {
            var t;
            return null === (t = e.hostDisconnected) || void 0 === t
              ? void 0
              : t.call(e);
          });
      }
      attributeChangedCallback(e, t, i) {
        this._$AK(e, i);
      }
      _$Eg(e, t, i = f) {
        var r,
          o = this.constructor._$Eh(e, i);
        void 0 !== o &&
          !0 === i.reflect &&
          ((i = (
            null !==
              (r =
                null === (r = i.converter) || void 0 === r
                  ? void 0
                  : r.toAttribute) && void 0 !== r
              ? r
              : h.toAttribute
          )(t, i.type)),
          (this._$Ei = e),
          null == i ? this.removeAttribute(o) : this.setAttribute(o, i),
          (this._$Ei = null));
      }
      _$AK(e, t) {
        const i = this.constructor,
          r = i._$Eu.get(e);
        if (void 0 !== r && this._$Ei !== r) {
          const o = i.getPropertyOptions(r),
            a = o.converter,
            n =
              null !==
                (e =
                  null !== (e = null == a ? void 0 : a.fromAttribute) &&
                  void 0 !== e
                    ? e
                    : 'function' == typeof a
                    ? a
                    : null) && void 0 !== e
                ? e
                : h.fromAttribute;
          (this._$Ei = r), (this[r] = n(t, o.type)), (this._$Ei = null);
        }
      }
      requestUpdate(e, t, i) {
        let r = !0;
        void 0 !== e &&
          (((i = i || this.constructor.getPropertyOptions(e)).hasChanged || u)(
            this[e],
            t
          )
            ? (this._$AL.has(e) || this._$AL.set(e, t),
              !0 === i.reflect &&
                this._$Ei !== e &&
                (void 0 === this._$ES && (this._$ES = new Map()),
                this._$ES.set(e, i)))
            : (r = !1)),
          !this.isUpdatePending && r && (this._$Ev = this._$EC());
      }
      async _$EC() {
        this.isUpdatePending = !0;
        try {
          await this._$Ev;
        } catch (e) {
          Promise.reject(e);
        }
        var e = this.performUpdate();
        return null != e && (await e), !this.isUpdatePending;
      }
      performUpdate() {
        var e;
        if (this.isUpdatePending) {
          this.hasUpdated,
            this._$Et &&
              (this._$Et.forEach((e, t) => (this[t] = e)),
              (this._$Et = void 0));
          let i = !1;
          var t = this._$AL;
          try {
            (i = this.shouldUpdate(t)),
              i
                ? (this.willUpdate(t),
                  null === (e = this._$Em) ||
                    void 0 === e ||
                    e.forEach(e => {
                      var t;
                      return null === (t = e.hostUpdate) || void 0 === t
                        ? void 0
                        : t.call(e);
                    }),
                  this.update(t))
                : this._$E_();
          } catch (e) {
            throw ((i = !1), this._$E_(), e);
          }
          i && this._$AE(t);
        }
      }
      willUpdate(e) {}
      _$AE(e) {
        var t;
        null === (t = this._$Em) ||
          void 0 === t ||
          t.forEach(e => {
            var t;
            return null === (t = e.hostUpdated) || void 0 === t
              ? void 0
              : t.call(e);
          }),
          this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(e)),
          this.updated(e);
      }
      _$E_() {
        (this._$AL = new Map()), (this.isUpdatePending = !1);
      }
      get updateComplete() {
        return this.getUpdateComplete();
      }
      getUpdateComplete() {
        return this._$Ev;
      }
      shouldUpdate(e) {
        return !0;
      }
      update(e) {
        void 0 !== this._$ES &&
          (this._$ES.forEach((e, t) => this._$Eg(t, this[t], e)),
          (this._$ES = void 0)),
          this._$E_();
      }
      updated(e) {}
      firstUpdated(e) {}
    }
    (g.finalized = !0),
      (g.elementProperties = new Map()),
      (g.elementStyles = []),
      (g.shadowRootOptions = { mode: 'open' }),
      null === (Ii = (Li = globalThis).reactiveElementPlatformSupport) ||
        void 0 === Ii ||
        Ii.call(Li, { ReactiveElement: g }),
      (null !== (Di = (sr = globalThis).reactiveElementVersions) &&
      void 0 !== Di
        ? Di
        : (sr.reactiveElementVersions = [])
      ).push('1.0.0-rc.3');
    const b = globalThis.trustedTypes,
      _ = b ? b.createPolicy('lit-html', { createHTML: e => e }) : void 0,
      x = `lit$${(Math.random() + '').slice(9)}$`,
      v = '?' + x,
      y = `<${v}>`,
      w = document,
      k = (e = '') => w.createComment(e),
      E = e => null === e || ('object' != typeof e && 'function' != typeof e),
      C = Array.isArray,
      A = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
      S = /-->/g,
      I = />/g,
      T =
        />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,
      R = /'/g,
      O = /"/g,
      L = /^(?:script|style|textarea)$/i,
      F =
        e =>
        (t, ...i) => ({ _$litType$: e, strings: t, values: i }),
      N = F(1),
      D = (F(2), Symbol.for('lit-noChange')),
      $ = Symbol.for('lit-nothing'),
      P = new WeakMap(),
      z = w.createTreeWalker(w, 129, null, !1);
    class M {
      constructor({ strings: e, _$litType$: t }, i) {
        let r;
        this.parts = [];
        let o = 0,
          a = 0;
        const n = e.length - 1,
          d = this.parts,
          [s, c] = ((e, t) => {
            const i = e.length - 1,
              r = [];
            let o,
              a = 2 === t ? '<svg>' : '',
              n = A;
            for (let t = 0; t < i; t++) {
              const i = e[t];
              let s,
                c,
                l = -1,
                p = 0;
              for (
                ;
                p < i.length &&
                ((n.lastIndex = p), (c = n.exec(i)), null !== c);

              )
                (p = n.lastIndex),
                  n === A
                    ? '!--' === c[1]
                      ? (n = S)
                      : void 0 !== c[1]
                      ? (n = I)
                      : void 0 !== c[2]
                      ? (L.test(c[2]) && (o = RegExp('</' + c[2], 'g')),
                        (n = T))
                      : void 0 !== c[3] && (n = T)
                    : n === T
                    ? '>' === c[0]
                      ? ((n = null != o ? o : A), (l = -1))
                      : void 0 === c[1]
                      ? (l = -2)
                      : ((l = n.lastIndex - c[2].length),
                        (s = c[1]),
                        (n = void 0 === c[3] ? T : '"' === c[3] ? O : R))
                    : n === O || n === R
                    ? (n = T)
                    : n === S || n === I
                    ? (n = A)
                    : ((n = T), (o = void 0));
              var d = n === T && e[t + 1].startsWith('/>') ? ' ' : '';
              a +=
                n === A
                  ? i + y
                  : 0 <= l
                  ? (r.push(s), i.slice(0, l) + '$lit$' + i.slice(l) + x + d)
                  : i + x + (-2 === l ? (r.push(void 0), t) : d);
            }
            return (
              (t = a + (e[i] || '<?>') + (2 === t ? '</svg>' : '')),
              [void 0 !== _ ? _.createHTML(t) : t, r]
            );
          })(e, t);
        if (
          ((this.el = M.createElement(s, i)),
          (z.currentNode = this.el.content),
          2 === t)
        ) {
          const e = this.el.content,
            t = e.firstChild;
          t.remove(), e.append(...t.childNodes);
        }
        for (; null !== (r = z.nextNode()) && d.length < n; ) {
          if (1 === r.nodeType) {
            if (r.hasAttributes()) {
              const e = [];
              for (const t of r.getAttributeNames())
                if (t.endsWith('$lit$') || t.startsWith(x)) {
                  const i = c[a++];
                  if ((e.push(t), void 0 !== i)) {
                    const e = r
                        .getAttribute(i.toLowerCase() + '$lit$')
                        .split(x),
                      t = /([.?@])?(.*)/.exec(i);
                    d.push({
                      type: 1,
                      index: o,
                      name: t[2],
                      strings: e,
                      ctor:
                        '.' === t[1]
                          ? j
                          : '?' === t[1]
                          ? G
                          : '@' === t[1]
                          ? X
                          : U,
                    });
                  } else d.push({ type: 6, index: o });
                }
              for (const t of e) r.removeAttribute(t);
            }
            if (L.test(r.tagName)) {
              const e = r.textContent.split(x),
                t = e.length - 1;
              if (0 < t) {
                r.textContent = b ? b.emptyScript : '';
                for (let i = 0; i < t; i++)
                  r.append(e[i], k()),
                    z.nextNode(),
                    d.push({ type: 2, index: ++o });
                r.append(e[t], k());
              }
            }
          } else if (8 === r.nodeType)
            if (r.data === v) d.push({ type: 2, index: o });
            else {
              let e = -1;
              for (; -1 !== (e = r.data.indexOf(x, e + 1)); )
                d.push({ type: 7, index: o }), (e += x.length - 1);
            }
          o++;
        }
      }
      static createElement(e, t) {
        const i = w.createElement('template');
        return (i.innerHTML = e), i;
      }
    }
    function H(e, t, i = e, r) {
      var o;
      if (t === D) return t;
      let a =
        void 0 !== r
          ? null === (o = i._$Cl) || void 0 === o
            ? void 0
            : o[r]
          : i._$Cu;
      const n = E(t) ? void 0 : t._$litDirective$;
      return (
        (null == a ? void 0 : a.constructor) !== n &&
          (null === (o = null == a ? void 0 : a._$AO) ||
            void 0 === o ||
            o.call(a, !1),
          void 0 === n ? (a = void 0) : ((a = new n(e)), a._$AT(e, i, r)),
          void 0 !== r
            ? ((null !== (o = i._$Cl) && void 0 !== o ? o : (i._$Cl = []))[r] =
                a)
            : (i._$Cu = a)),
        void 0 !== a ? H(e, a._$AS(e, t.values), a, r) : t
      );
    }
    class B {
      constructor(e, t) {
        (this.v = []), (this._$AN = void 0), (this._$AD = e), (this._$AM = t);
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      p(e) {
        var t,
          {
            el: { content: i },
            parts: r,
          } = this._$AD,
          i = (
            null !== (t = null == e ? void 0 : e.creationScope) && void 0 !== t
              ? t
              : w
          ).importNode(i, !0);
        z.currentNode = i;
        let o = z.nextNode(),
          a = 0,
          n = 0,
          d = r[0];
        for (; void 0 !== d; ) {
          if (a === d.index) {
            let t;
            2 === d.type
              ? (t = new V(o, o.nextSibling, this, e))
              : 1 === d.type
              ? (t = new d.ctor(o, d.name, d.strings, this, e))
              : 6 === d.type && (t = new K(o, this, e)),
              this.v.push(t),
              (d = r[++n]);
          }
          a !== (null == d ? void 0 : d.index) && ((o = z.nextNode()), a++);
        }
        return i;
      }
      m(e) {
        let t = 0;
        for (const i of this.v)
          void 0 !== i &&
            (void 0 !== i.strings
              ? (i._$AI(e, i, t), (t += i.strings.length - 2))
              : i._$AI(e[t])),
            t++;
      }
    }
    class V {
      constructor(e, t, i, r) {
        (this.type = 2),
          (this._$C_ = !0),
          (this._$AN = void 0),
          (this._$AA = e),
          (this._$AB = t),
          (this._$AM = i),
          (this.options = r);
      }
      get _$AU() {
        var e;
        return null !==
          (e = null === (e = this._$AM) || void 0 === e ? void 0 : e._$AU) &&
          void 0 !== e
          ? e
          : this._$C_;
      }
      get parentNode() {
        return this._$AA.parentNode;
      }
      get startNode() {
        return this._$AA;
      }
      get endNode() {
        return this._$AB;
      }
      _$AI(e, t = this) {
        (e = H(this, e, t)),
          E(e)
            ? e === $ || null == e || '' === e
              ? (this._$AH !== $ && this._$AR(), (this._$AH = $))
              : e !== this._$AH && e !== D && this.$(e)
            : void 0 !== e._$litType$
            ? this.T(e)
            : void 0 !== e.nodeType
            ? this.A(e)
            : (e =>
                C(e) ||
                'function' == typeof (null == e ? void 0 : e[Symbol.iterator]))(
                e
              )
            ? this.M(e)
            : this.$(e);
      }
      C(e, t = this._$AB) {
        return this._$AA.parentNode.insertBefore(e, t);
      }
      A(e) {
        this._$AH !== e && (this._$AR(), (this._$AH = this.C(e)));
      }
      $(e) {
        const t = this._$AA.nextSibling;
        null !== t &&
        3 === t.nodeType &&
        (null === this._$AB
          ? null === t.nextSibling
          : t === this._$AB.previousSibling)
          ? (t.data = e)
          : this.A(w.createTextNode(e)),
          (this._$AH = e);
      }
      T(e) {
        const { values: t, _$litType$: i } = e,
          r =
            'number' == typeof i
              ? this._$AC(e)
              : (void 0 === i.el && (i.el = M.createElement(i.h, this.options)),
                i);
        if ((null === (e = this._$AH) || void 0 === e ? void 0 : e._$AD) === r)
          this._$AH.m(t);
        else {
          const e = new B(r, this),
            i = e.p(this.options);
          e.m(t), this.A(i), (this._$AH = e);
        }
      }
      _$AC(e) {
        let t = P.get(e.strings);
        return void 0 === t && P.set(e.strings, (t = new M(e))), t;
      }
      M(e) {
        C(this._$AH) || ((this._$AH = []), this._$AR());
        const t = this._$AH;
        let i,
          r = 0;
        for (const o of e)
          r === t.length
            ? t.push((i = new V(this.C(k()), this.C(k()), this, this.options)))
            : (i = t[r]),
            i._$AI(o),
            r++;
        r < t.length && (this._$AR(i && i._$AB.nextSibling, r), (t.length = r));
      }
      _$AR(e = this._$AA.nextSibling, t) {
        var i;
        for (
          null === (i = this._$AP) || void 0 === i || i.call(this, !1, !0, t);
          e && e !== this._$AB;

        ) {
          const t = e.nextSibling;
          e.remove(), (e = t);
        }
      }
      setConnected(e) {
        var t;
        void 0 === this._$AM &&
          ((this._$C_ = e),
          null === (t = this._$AP) || void 0 === t || t.call(this, e));
      }
    }
    class U {
      constructor(e, t, i, r, o) {
        (this.type = 1),
          (this._$AH = $),
          (this._$AN = void 0),
          (this.element = e),
          (this.name = t),
          (this._$AM = r),
          (this.options = o),
          2 < i.length || '' !== i[0] || '' !== i[1]
            ? ((this._$AH = Array(i.length - 1).fill($)), (this.strings = i))
            : (this._$AH = $);
      }
      get tagName() {
        return this.element.tagName;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      _$AI(e, t = this, i, r) {
        var o = this.strings;
        let a = !1;
        if (void 0 === o)
          (e = H(this, e, t, 0)),
            (a = !E(e) || (e !== this._$AH && e !== D)),
            a && (this._$AH = e);
        else {
          const r = e;
          let n, d;
          for (e = o[0], n = 0; n < o.length - 1; n++)
            (d = H(this, r[i + n], t, n)),
              d === D && (d = this._$AH[n]),
              (a = a || !E(d) || d !== this._$AH[n]),
              d === $
                ? (e = $)
                : e !== $ && (e += (null != d ? d : '') + o[n + 1]),
              (this._$AH[n] = d);
        }
        a && !r && this.P(e);
      }
      P(e) {
        e === $
          ? this.element.removeAttribute(this.name)
          : this.element.setAttribute(this.name, null != e ? e : '');
      }
    }
    class j extends U {
      constructor() {
        super(...arguments), (this.type = 3);
      }
      P(e) {
        this.element[this.name] = e === $ ? void 0 : e;
      }
    }
    class G extends U {
      constructor() {
        super(...arguments), (this.type = 4);
      }
      P(e) {
        e && e !== $
          ? this.element.setAttribute(this.name, '')
          : this.element.removeAttribute(this.name);
      }
    }
    class X extends U {
      constructor() {
        super(...arguments), (this.type = 5);
      }
      _$AI(e, t = this) {
        var i, r;
        (e = null !== (r = H(this, e, t, 0)) && void 0 !== r ? r : $) !== D &&
          ((i = this._$AH),
          (t =
            (e === $ && i !== $) ||
            e.capture !== i.capture ||
            e.once !== i.once ||
            e.passive !== i.passive),
          (r = e !== $ && (i === $ || t)),
          t && this.element.removeEventListener(this.name, this, i),
          r && this.element.addEventListener(this.name, this, e),
          (this._$AH = e));
      }
      handleEvent(e) {
        var t;
        'function' == typeof this._$AH
          ? this._$AH.call(
              null !==
                (t =
                  null === (t = this.options) || void 0 === t
                    ? void 0
                    : t.host) && void 0 !== t
                ? t
                : this.element,
              e
            )
          : this._$AH.handleEvent(e);
      }
    }
    class K {
      constructor(e, t, i) {
        (this.element = e),
          (this.type = 6),
          (this._$AN = void 0),
          (this._$AM = t),
          (this.options = i);
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      _$AI(e) {
        H(this, e);
      }
    }
    null === (Ur = (Qr = globalThis).litHtmlPlatformSupport) ||
      void 0 === Ur ||
      Ur.call(Qr, M, V),
      (null !== (co = (mo = globalThis).litHtmlVersions) && void 0 !== co
        ? co
        : (mo.litHtmlVersions = [])
      ).push('2.0.0-rc.4');
    class W extends g {
      constructor() {
        super(...arguments),
          (this.renderOptions = { host: this }),
          (this._$Dt = void 0);
      }
      createRenderRoot() {
        var e,
          t,
          i = super.createRenderRoot();
        return (
          (null !== (e = (t = this.renderOptions).renderBefore) &&
            void 0 !== e) ||
            (t.renderBefore = i.firstChild),
          i
        );
      }
      update(e) {
        var t = this.render();
        super.update(e),
          (this._$Dt = ((e, t, i) => {
            var r;
            const o =
              null !== (r = null == i ? void 0 : i.renderBefore) && void 0 !== r
                ? r
                : t;
            let a = o._$litPart$;
            if (void 0 === a) {
              const e =
                null !== (r = null == i ? void 0 : i.renderBefore) &&
                void 0 !== r
                  ? r
                  : null;
              o._$litPart$ = a = new V(
                t.insertBefore(k(), e),
                e,
                void 0,
                null != i ? i : {}
              );
            }
            return a._$AI(e), a;
          })(t, this.renderRoot, this.renderOptions));
      }
      connectedCallback() {
        var e;
        super.connectedCallback(),
          null === (e = this._$Dt) || void 0 === e || e.setConnected(!0);
      }
      disconnectedCallback() {
        var e;
        super.disconnectedCallback(),
          null === (e = this._$Dt) || void 0 === e || e.setConnected(!1);
      }
      render() {
        return D;
      }
    }
    function q(e) {
      return (t, i) =>
        void 0 !== i
          ? void t.constructor.createProperty(i, e)
          : ((e, t) =>
              'method' !== t.kind || !t.descriptor || 'value' in t.descriptor
                ? {
                    kind: 'field',
                    key: Symbol(),
                    placement: 'own',
                    descriptor: {},
                    originalKey: t.key,
                    initializer() {
                      'function' == typeof t.initializer &&
                        (this[t.key] = t.initializer.call(this));
                    },
                    finisher(i) {
                      i.createProperty(t.key, e);
                    },
                  }
                : {
                    ...t,
                    finisher(i) {
                      i.createProperty(t.key, e);
                    },
                  })(e, t);
    }
    (W.finalized = !0),
      (W._$litElement$ = !0),
      null === (vo = (Ao = globalThis).litElementHydrateSupport) ||
        void 0 === vo ||
        vo.call(Ao, { LitElement: W }),
      null === (Fo = (zo = globalThis).litElementPlatformSupport) ||
        void 0 === Fo ||
        Fo.call(zo, { LitElement: W }),
      (null !== (Ho = (Uo = globalThis).litElementVersions) && void 0 !== Ho
        ? Ho
        : (Uo.litElementVersions = [])
      ).push('3.0.0-rc.3');
    const Y = Element.prototype;
    Y.msMatchesSelector || Y.webkitMatchesSelector;
    const Q = N`
  <svg
    width="244px"
    height="244px"
    viewBox="0 0 244 244"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
        <stop stop-color="#9B00FF" offset="0%"></stop>
        <stop stop-color="#0077FF" offset="100%"></stop>
      </linearGradient>
    </defs>
    <g
      id="Page-1"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <path
        d="M205.639259,176.936244 C207.430887,174.217233 209.093339,171.405629 210.617884,168.510161 M215.112174,158.724316 C216.385153,155.50304 217.495621,152.199852 218.433474,148.824851 M220.655293,138.874185 C221.231935,135.482212 221.637704,132.03207 221.863435,128.532919 M222,118.131039 C221.860539,114.466419 221.523806,110.85231 221.000113,107.299021 M218.885321,96.8583653 C218.001583,93.4468963 216.942225,90.1061026 215.717466,86.8461994 M211.549484,77.3039459 C209.957339,74.1238901 208.200597,71.0404957 206.290425,68.0649233 M200.180513,59.5598295 C181.848457,36.6639805 153.655709,22 122.036748,22 C66.7879774,22 22,66.771525 22,122 C22,177.228475 66.7879774,222 122.036748,222 C152.914668,222 180.52509,208.015313 198.875424,186.036326"
        id="Shape"
        stroke="url(#linearGradient-1)"
        stroke-width="42.0804674"
      ></path>
    </g>
  </svg>
`;
    class Z extends W {
      constructor() {
        super(...arguments), (this.title = 'My app');
      }
      render() {
        return N`
      <main>
        <div class="logo">${Q}</div>
        <h1>${this.title}</h1>

        <p>Edit <code>src/FirstechUi.ts</code> and save to reload.</p>
        <a
          class="app-link"
          href="https://open-wc.org/guides/developing-components/code-examples"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code examples
        </a>
      </main>

      <p class="app-footer">🚽 Made with love.</p>
    `;
      }
    }
    (Z.styles = p`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--ruhil-ui-background-color);
    }

    main {
      flex-grow: 1;
    }

    .logo > svg {
      margin-top: 36px;
      animation: app-logo-spin infinite 20s linear;
    }

    @keyframes app-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 5px;
    }
  `),
      o([q({ type: String })], Z.prototype, 'title', void 0);
    class J extends W {
      constructor() {
        super(...arguments), (this.title = 'Hey there'), (this.counter = 5);
      }
      __increment() {
        this.counter += 1;
      }
      render() {
        return N`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
      }
    }
    (J.styles = p`
    :host {
      display: block;
      padding: 25px;
      color: var(--test-a-text-color, #000);
    }
  `),
      o([q({ type: String })], J.prototype, 'title', void 0),
      o([q({ type: Number })], J.prototype, 'counter', void 0);
    const ee = (e, t) => new CustomEvent(e, { detail: t });
    var te,
      ie = p`
  .gpay-card-info-container {
    padding: 0;
    position: relative;
    min-width: 240px;
    height: 40px;
    min-height: 40px;
    border-radius: 4px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 1px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    cursor: pointer;
    border: 0px;
  }

  .gpay-card-info-container.black,
  .gpay-card-info-animation-container.black {
    background-color: #000;
    box-shadow: none;
  }

  .gpay-card-info-container.white,
  .gpay-card-info-animation-container.white {
    background-color: #fff;
  }

  .gpay-card-info-container.black.active {
    background-color: #5f6368;
  }

  .gpay-card-info-container.black.hover,
  .gpay-card-info-animation-container.black.hover {
    background-color: #3c4043;
  }

  .gpay-card-info-container.white.active {
    background-color: #fff;
  }

  .gpay-card-info-container.white.focus {
    box-shadow: #e8e8e8 0 1px 1px 0, #e8e8e8 0 1px 3px;
  }

  .gpay-card-info-container.white.hover,
  .gpay-card-info-animation-container.white.hover {
    background-color: #f8f8f8;
  }

  .gpay-card-info-iframe {
    border: 0;
    display: block;
    height: 40px;
    margin: auto;
    max-width: 100%;
    width: 240px;
  }

  .gpay-card-info-container-fill .gpay-card-info-iframe {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
  }

  .gpay-card-info-container-fill,
  .gpay-card-info-container-fill > .gpay-card-info-container {
    width: 100%;
    height: inherit;
  }

  .gpay-card-info-container-fill .gpay-card-info-placeholder-container {
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-top: 3px;
    box-sizing: border-box;
    overflow: hidden;
  }

  .gpay-card-info-container-fill .gpay-card-info-placeholder-svg-container {
    position: relative;
    width: 60%;
    height: inherit;
    max-height: 80%;
    margin-right: -20%;
  }

  .gpay-card-info-container-fill
    .gpay-card-info-placeholder-svg-container
    > svg {
    position: absolute;
    left: 0;
    height: 100%;
    max-width: 100%;
  }

  .gpay-card-info-animation-container {
    display: flex;
    width: 100%;
    position: absolute;
    z-index: 100;
    height: 40px;
    border-radius: 4px;
  }

  .gpay-card-info-placeholder-container {
    display: flex;
    width: 240px;
    height: 100%;
    margin: auto;
  }

  .gpay-card-info-animated-progress-bar-container {
    display: flex;
    box-sizing: border-box;
    position: absolute;
    width: 100%;
  }

  .gpay-card-info-animated-progress-bar {
    border-radius: 4px 4px 0px 0px;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    animation-name: gpayProgressFill;
    animation-timing-function: cubic-bezier(0.97, 0.33, 1, 1);
    background: #caccce;
    width: 100%;
    height: 3px;
    max-height: 3px;
  }

  .gpay-card-info-animated-progress-bar-indicator {
    border-radius: 4px 4px 0px 0px;
    max-width: 20px;
    min-width: 20px;
    height: 3px;
    max-height: 3px;
    background: linear-gradient(to right, #caccce 30%, #acaeaf 60%);
    animation-delay: 0.5s;
    animation-duration: 1.7s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: gpayPlaceHolderShimmer;
  }

  .gpay-card-info-iframe-fade-in {
    animation-fill-mode: forwards;
    animation-duration: 0.6s;
    animation-name: gpayIframeFadeIn;
  }

  .gpay-card-info-animation-container-fade-out {
    animation-fill-mode: forwards;
    animation-duration: 0.6s;
    animation-name: gpayPlaceHolderFadeOut;
  }

  .gpay-card-info-animation-gpay-logo {
    margin: 13px 7px 0px 39px;
    background-origin: content-box;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 17px;
    max-height: 17px;
    max-width: 41px;
    min-width: 41px;
  }

  .gpay-card-info-animation-gpay-logo.black {
    background-image: url('https://www.gstatic.com/instantbuy/svg/dark_gpay.svg');
  }

  .gpay-card-info-animation-gpay-logo.white {
    background-image: url('https://www.gstatic.com/instantbuy/svg/light_gpay.svg');
  }

  @keyframes gpayPlaceHolderShimmer {
    0% {
      margin-left: 0px;
    }
    100% {
      margin-left: calc(100% - 20px);
    }
  }

  @keyframes gpayIframeFadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes gpayPlaceHolderFadeOut {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }

  @keyframes gpayProgressFill {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  .gpay-card-info-container-fill .gpay-card-info-animation-container {
    top: 0;
    width: 100%;
    height: 100%;
  }

  .gpay-card-info-container-fill .gpay-card-info-animation-gpay-logo {
    background-position: right;
    margin: 0 0 0 0;
    max-width: none;
    width: 25%;
    height: inherit;
    max-height: 50%;
  }
`;
    class re extends W {
      constructor() {
        super(...arguments),
          (this.clientId = '#698bvghhjbhGYvbjVH*75%Uyhfvbj98'),
          (this.transactionData = null),
          (this.redirectUrl = ''),
          (this._error = { status: !1, msg: '' }),
          (this._paymentsClient = null),
          (this._baseRequest = { apiVersion: 2, apiVersionMinor: 0 }),
          (this._allowedCardNetworks = [
            'AMEX',
            'DISCOVER',
            'JCB',
            'MASTERCARD',
            'VISA',
          ]),
          (this._allowedCardAuthMethods = ['PAN_ONLY', 'CRYPTOGRAM_3DS']),
          (this._tokenizationSpecification = {
            type: 'DIRECT',
            parameters: { protocolVersion: 'ECv2', publicKey: '' },
          }),
          (this._baseCardPaymentMethod = {
            type: 'CARD',
            parameters: {
              allowedAuthMethods: this._allowedCardAuthMethods,
              allowedCardNetworks: this._allowedCardNetworks,
            },
          }),
          (this._cardPaymentMethod = {
            ...this._baseCardPaymentMethod,
            tokenizationSpecification: this._tokenizationSpecification,
          }),
          (this.firstUpdated = () => {
            this.clientId
              ? this._getClientInfo(this.clientId)
              : this._errorHandler({ status: !0, msg: 'missing clientId' });
          }),
          (this._checkAndLoadGooglePayButton = () => {
            if (
              window.google &&
              window.google.payments &&
              window.google.payments.api &&
              window.google.payments.api.PaymentsClient
            )
              this._onGooglePayLoaded();
            else {
              const e = document.createElement('script');
              (e.type = 'text/javascript'),
                (e.src = 'https://pay.google.com/gp/p/js/pay.js'),
                document.head.appendChild(e),
                (e.onload = this._onGooglePayLoaded);
            }
          }),
          (this._getClientInfo = e => {
            setTimeout(() => {
              this._setClientData({}), this._checkAndLoadGooglePayButton();
            }, 10);
          }),
          (this._setClientData = e => {
            this._tokenizationSpecification.parameters.publicKey =
              'BNpvYANJS6oqUtOVokdm5pzJDGnQred/k66TUdlQs+lsZriZLIFxZZAFuIvoSefLgSZCvxhgn/sOP5Q10jUfip8=';
          }),
          (this._onGooglePayLoaded = () => {
            this._getGooglePaymentsClient()
              .isReadyToPay(this._getGoogleIsReadyToPayRequest())
              .then(e => {
                e.result && this._addGooglePayButton();
              })
              .catch(e => {
                console.error(e);
              });
          }),
          (this._getGoogleIsReadyToPayRequest = () => ({
            ...this._baseRequest,
            allowedPaymentMethods: [this._baseCardPaymentMethod],
          })),
          (this._googleMerchantInfo = {
            merchantId: '01234567890123456789',
            merchantName: 'Firstech',
          }),
          (this._registredMerchantInfo = this._googleMerchantInfo),
          (this._getGooglePaymentsClient = () => (
            null === this._paymentsClient &&
              (this._paymentsClient =
                new window.google.payments.api.PaymentsClient({
                  environment: 'TEST',
                  merchantInfo: this._registredMerchantInfo,
                  paymentDataCallbacks: {
                    onPaymentAuthorized: this._onPaymentAuthorized,
                  },
                })),
            this._paymentsClient
          )),
          (this._addGooglePayButton = () => {
            var e,
              t = this._getGooglePaymentsClient().createButton({
                onClick: this._onGooglePaymentButtonClicked,
              });
            const i =
              null === (e = this.shadowRoot) || void 0 === e
                ? void 0
                : e.getElementById('google-pay');
            i && i.appendChild(t);
          }),
          (this._onGooglePaymentButtonClicked = () => {
            const e = this._getGooglePaymentDataRequest();
            (e.transactionInfo = this._getGoogleTransactionInfo()),
              this._getGooglePaymentsClient()
                .loadPaymentData(e)
                .then(e => {
                  console.log('--loadPaymentData called--');
                })
                .catch(e => {
                  this._errorHandler({
                    status: !0,
                    msg: 'refer detail error',
                    detailError: e,
                  });
                });
          }),
          (this._getGooglePaymentDataRequest = () => {
            const e = { ...this._baseRequest };
            return (
              (e.allowedPaymentMethods = [this._cardPaymentMethod]),
              (e.transactionInfo = this._getGoogleTransactionInfo()),
              (e.merchantInfo = this._googleMerchantInfo),
              (e.callbackIntents = ['PAYMENT_AUTHORIZATION']),
              e
            );
          }),
          (this._getGoogleTransactionInfo = () => this.transactionData),
          (this._onPaymentAuthorized = e =>
            new Promise(t => {
              this._processPayment(e)
                .then(e => {
                  this.dispatchEvent(
                    ee('payment-processed', {
                      paymentToken: e,
                      staus: 'payment done, response from service wrapper.',
                    })
                  ),
                    t({ transactionState: 'SUCCESS' });
                })
                .catch(e => {
                  t(
                    (e = {
                      transactionState: 'ERROR',
                      error: {
                        intent: 'PAYMENT_AUTHORIZATION',
                        message: 'Insufficient funds',
                        reason: 'PAYMENT_DATA_INVALID',
                      },
                      detail: e,
                    })
                  ),
                    this._errorHandler({
                      status: !0,
                      msg: 'refer detail error',
                      detailError: e,
                    });
                });
            })),
          (this._errorHandler = e => {
            (this._error = { ...e }), this.dispatchEvent(ee('error', e));
          }),
          (this._refreshButton = () => {
            var e;
            this._error = { status: !1, msg: '' };
            const t =
              null === (e = this.shadowRoot) || void 0 === e
                ? void 0
                : e.getElementById('google-pay');
            t &&
              ((t.innerHTML = ''),
              (this._paymentsClient = null),
              this._onGooglePayLoaded());
          }),
          (this.errorMsg = N`<span
    >Something went wrong. Try again.<span
      @click="${this._refreshButton}"
      @keyup="${this._refreshButton}"
      >Refresh</span
    ></span
  > `),
          (this.render = () => N`
    <div id="google-pay"></div>
    ${(this._error.status, null)}
  `);
      }
      _processPayment(e) {
        return new Promise((t, i) => {
          this._iframe.contentWindow.postMessage(
            {
              action: 'gpayload',
              payload: {
                paymentData: e,
                transactionData: this.transactionData,
              },
            },
            'http://localhost:8080/'
          ),
            (async (e, t, i) =>
              (async (e, t, i) => {
                const r = (e => {
                  let t = {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                  };
                  return (
                    e &&
                      (t = {
                        ...t,
                        ...e,
                        method: e.method || 'GET',
                        headers: { ...t.headers, ...e.headers },
                      }),
                    t
                  );
                })({ method: 'POST' });
                i && (r.body = JSON.stringify(i));
                const o = await fetch('http://localhost:5000/GPay', r);
                if (o.ok) return await o.json();
                {
                  const e = new Error(JSON.stringify(o));
                  throw (
                    ((e.name = o.status.toString()),
                    (e.message = o.statusText),
                    e)
                  );
                }
              })(0, 0, t))(0, {
              paymentData: e,
              transactionData: this.transactionData,
            })
              .then(e => {
                'FAIL' === e.status && i(e), t(e);
              })
              .catch(e => {
                i(e);
              });
        });
      }
    }
    (re.styles = ie),
      o([q({ type: String })], re.prototype, 'clientId', void 0),
      o([q({ type: Object })], re.prototype, 'transactionData', void 0),
      o([q({ type: String })], re.prototype, 'redirectUrl', void 0),
      o([q({ state: !0 })], re.prototype, '_error', void 0);
    const oe =
      ((te = class extends (
        class {
          constructor(e) {}
          get _$AU() {
            return this._$AM._$AU;
          }
          _$AT(e, t, i) {
            (this._$Ct = e), (this._$AM = t), (this._$Ci = i);
          }
          _$AS(e, t) {
            return this.update(e, t);
          }
          update(e, t) {
            return this.render(...t);
          }
        }
      ) {
        constructor(e) {
          if (
            (super(e),
            1 !== e.type ||
              'style' !== e.name ||
              2 <
                (null === (e = e.strings) || void 0 === e ? void 0 : e.length))
          )
            throw Error(
              'The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.'
            );
        }
        render(e) {
          return Object.keys(e).reduce((t, i) => {
            var r = e[i];
            return null == r
              ? t
              : t +
                  `${(i = i
                    .replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, '-$&')
                    .toLowerCase())}:${r};`;
          }, '');
        }
        update(e, [t]) {
          const i = e.element.style;
          if (void 0 === this.ct) {
            this.ct = new Set();
            for (const e in t) this.ct.add(e);
            return this.render(t);
          }
          this.ct.forEach(e => {
            null == t[e] &&
              (this.ct.delete(e),
              e.includes('-') ? i.removeProperty(e) : (i[e] = ''));
          });
          for (const e in t) {
            const r = t[e];
            null != r &&
              (this.ct.add(e),
              e.includes('-') ? i.setProperty(e, r) : (i[e] = r));
          }
          return D;
        }
      }),
      (...e) => ({ _$litDirective$: te, values: e }));
    class ae extends W {
      constructor() {
        super(...arguments),
          (this.count = '1'),
          (this.classes = []),
          (this.styleOverrides = {});
      }
      renderLoaderItems(e) {
        return e.map(
          () => N` <span
        class=${`cb-loader ${this.classes.join(' ')}`}
        style=${oe(this.styleOverrides)}
      ></span>`
        );
      }
      render() {
        var e = new Array(parseInt(this.count, 10)).fill('');
        return N` ${this.renderLoaderItems(e)} `;
      }
    }
    (ae.styles = p`
    .cb-loader {
      box-sizing: border-box;
      /**
      * overflow and position are required steps to make sure
      * the component respects the specified dimensions
      * given via theme object @Input attribute
      */
      overflow: hidden;
      position: relative;

      animation: progress 2s ease-in-out infinite;
      background: rgb(239, 241, 246) no-repeat;
      background-image: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.6),
        rgba(255, 255, 255, 0)
      );
      background-size: 200px 100%;
      border-radius: 5px;
      width: 100%;
      height: 10px;
      display: inline-block;
      margin-bottom: 10px;
    }
    .cb-loader:after,
    .cb-loader:before {
      box-sizing: border-box;
    }

    .cb-loader.square {
      width: 40px;
      height: 40px;
      margin: 10px;
    }

    .cb-loader.circle {
      width: 40px;
      height: 40px;
      margin: 10px;
      border-radius: 50%;
    }
    .cb-loader.circle.small {
      width: 25px;
      height: 25px;
    }
    .cb-loader.square.small {
      width: 25px;
      height: 25px;
    }

    @keyframes progress {
      0% {
        background-position: -200px 0;
      }

      100% {
        background-position: calc(200px + 100%) 0;
      }
    }
  `),
      o([q({ type: String })], ae.prototype, 'count', void 0),
      o([q({ type: Array })], ae.prototype, 'classes', void 0),
      o([q({ type: Object })], ae.prototype, 'styleOverrides', void 0);
    const ne =
        'undefined' != typeof window &&
        null != window.customElements &&
        void 0 !== window.customElements.polyfillWrapFlushCallback,
      de = (e, t, i = null) => {
        for (; t !== i; ) {
          var r = t.nextSibling;
          e.removeChild(t), (t = r);
        }
      },
      se = `{{lit-${String(Math.random()).slice(2)}}}`,
      ce = `\x3c!--${se}--\x3e`,
      le = new RegExp(`${se}|${ce}`),
      pe = '$lit$';
    class me {
      constructor(e, t) {
        (this.parts = []), (this.element = t);
        const i = [],
          r = [],
          o = document.createTreeWalker(t.content, 133, null, !1);
        let a = 0,
          n = -1,
          d = 0;
        const {
          strings: s,
          values: { length: c },
        } = e;
        for (; d < c; ) {
          const e = o.nextNode();
          if (null !== e) {
            if ((n++, 1 === e.nodeType)) {
              if (e.hasAttributes()) {
                var l = e.attributes;
                const t = l.length;
                let i = 0;
                for (let e = 0; e < t; e++) he(l[e].name, pe) && i++;
                for (; 0 < i--; ) {
                  var p = s[d];
                  const t = ge.exec(p)[2];
                  p = t.toLowerCase() + pe;
                  const i = e.getAttribute(p);
                  e.removeAttribute(p),
                    (p = i.split(le)),
                    this.parts.push({
                      type: 'attribute',
                      index: n,
                      name: t,
                      strings: p,
                    }),
                    (d += p.length - 1);
                }
              }
              'TEMPLATE' === e.tagName &&
                (r.push(e), (o.currentNode = e.content));
            } else if (3 === e.nodeType) {
              const t = e.data;
              if (0 <= t.indexOf(se)) {
                const r = e.parentNode,
                  o = t.split(le);
                var m = o.length - 1;
                for (let t = 0; t < m; t++) {
                  let i,
                    a = o[t];
                  if ('' === a) i = fe();
                  else {
                    const e = ge.exec(a);
                    null !== e &&
                      he(e[2], pe) &&
                      (a =
                        a.slice(0, e.index) +
                        e[1] +
                        e[2].slice(0, -pe.length) +
                        e[3]),
                      (i = document.createTextNode(a));
                  }
                  r.insertBefore(i, e),
                    this.parts.push({ type: 'node', index: ++n });
                }
                '' === o[m]
                  ? (r.insertBefore(fe(), e), i.push(e))
                  : (e.data = o[m]),
                  (d += m);
              }
            } else if (8 === e.nodeType)
              if (e.data === se) {
                const t = e.parentNode;
                (null !== e.previousSibling && n !== a) ||
                  (n++, t.insertBefore(fe(), e)),
                  (a = n),
                  this.parts.push({ type: 'node', index: n }),
                  null === e.nextSibling ? (e.data = '') : (i.push(e), n--),
                  d++;
              } else {
                let t = -1;
                for (; -1 !== (t = e.data.indexOf(se, t + 1)); )
                  this.parts.push({ type: 'node', index: -1 }), d++;
              }
          } else o.currentNode = r.pop();
        }
        for (const e of i) e.parentNode.removeChild(e);
      }
    }
    const he = (e, t) => {
        var i = e.length - t.length;
        return 0 <= i && e.slice(i) === t;
      },
      ue = e => -1 !== e.index,
      fe = () => document.createComment(''),
      ge =
        /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
    function be(e, t) {
      var {
        element: { content: e },
        parts: i,
      } = e;
      const r = document.createTreeWalker(e, 133, null, !1);
      let o = xe(i),
        a = i[o],
        n = -1,
        d = 0;
      const s = [];
      let c = null;
      for (; r.nextNode(); ) {
        n++;
        var l = r.currentNode;
        for (
          l.previousSibling === c && (c = null),
            t.has(l) && (s.push(l), null === c && (c = l)),
            null !== c && d++;
          void 0 !== a && a.index === n;

        )
          (a.index = null !== c ? -1 : a.index - d), (o = xe(i, o)), (a = i[o]);
      }
      s.forEach(e => e.parentNode.removeChild(e));
    }
    const _e = e => {
        let t = 11 === e.nodeType ? 0 : 1;
        const i = document.createTreeWalker(e, 133, null, !1);
        for (; i.nextNode(); ) t++;
        return t;
      },
      xe = (e, t = -1) => {
        for (let r = t + 1; r < e.length; r++) {
          var i = e[r];
          if (ue(i)) return r;
        }
        return -1;
      },
      ve = new WeakMap(),
      ye =
        e =>
        (...t) =>
          (t = e(...t)), ve.set(t, !0), t,
      we = e => 'function' == typeof e && ve.has(e),
      ke = {},
      Ee = {};
    class Ce {
      constructor(e, t, i) {
        (this.__parts = []),
          (this.template = e),
          (this.processor = t),
          (this.options = i);
      }
      update(e) {
        let t = 0;
        for (const i of this.__parts) void 0 !== i && i.setValue(e[t]), t++;
        for (const e of this.__parts) void 0 !== e && e.commit();
      }
      _clone() {
        var e = ne
          ? this.template.element.content.cloneNode(!0)
          : document.importNode(this.template.element.content, !0);
        const t = [];
        var i = this.template.parts;
        const r = document.createTreeWalker(e, 133, null, !1);
        let o,
          a = 0,
          n = 0,
          d = r.nextNode();
        for (; a < i.length; )
          if (((o = i[a]), ue(o))) {
            for (; n < o.index; )
              n++,
                'TEMPLATE' === d.nodeName &&
                  (t.push(d), (r.currentNode = d.content)),
                null === (d = r.nextNode()) &&
                  ((r.currentNode = t.pop()), (d = r.nextNode()));
            if ('node' === o.type) {
              const e = this.processor.handleTextExpression(this.options);
              e.insertAfterNode(d.previousSibling), this.__parts.push(e);
            } else
              this.__parts.push(
                ...this.processor.handleAttributeExpressions(
                  d,
                  o.name,
                  o.strings,
                  this.options
                )
              );
            a++;
          } else this.__parts.push(void 0), a++;
        return ne && (document.adoptNode(e), customElements.upgrade(e)), e;
      }
    }
    const Ae =
        window.trustedTypes &&
        trustedTypes.createPolicy('lit-html', { createHTML: e => e }),
      Se = ` ${se} `;
    class Ie {
      constructor(e, t, i, r) {
        (this.strings = e),
          (this.values = t),
          (this.type = i),
          (this.processor = r);
      }
      getHTML() {
        var e = this.strings.length - 1;
        let t = '',
          i = !1;
        for (let o = 0; o < e; o++) {
          const e = this.strings[o];
          var r = e.lastIndexOf('\x3c!--');
          (i = (-1 < r || i) && -1 === e.indexOf('--\x3e', r + 1)),
            (t +=
              null === (r = ge.exec(e))
                ? e + (i ? Se : ce)
                : e.substr(0, r.index) + r[1] + r[2] + pe + r[3] + se);
        }
        return (t += this.strings[e]), t;
      }
      getTemplateElement() {
        const e = document.createElement('template');
        let t = this.getHTML();
        return void 0 !== Ae && (t = Ae.createHTML(t)), (e.innerHTML = t), e;
      }
    }
    const Te = e =>
        null === e || !('object' == typeof e || 'function' == typeof e),
      Re = e => Array.isArray(e) || !(!e || !e[Symbol.iterator]);
    class Oe {
      constructor(e, t, i) {
        (this.dirty = !0),
          (this.element = e),
          (this.name = t),
          (this.strings = i),
          (this.parts = []);
        for (let e = 0; e < i.length - 1; e++)
          this.parts[e] = this._createPart();
      }
      _createPart() {
        return new Le(this);
      }
      _getValue() {
        var e = this.strings,
          t = e.length - 1,
          i = this.parts;
        if (1 == t && '' === e[0] && '' === e[1]) {
          var r = i[0].value;
          if ('symbol' == typeof r) return String(r);
          if ('string' == typeof r || !Re(r)) return r;
        }
        let o = '';
        for (let r = 0; r < t; r++) {
          o += e[r];
          var a = i[r];
          if (void 0 !== a)
            if (((a = a.value), Te(a) || !Re(a)))
              o += 'string' == typeof a ? a : String(a);
            else for (const e of a) o += 'string' == typeof e ? e : String(e);
        }
        return (o += e[t]), o;
      }
      commit() {
        this.dirty &&
          ((this.dirty = !1),
          this.element.setAttribute(this.name, this._getValue()));
      }
    }
    class Le {
      constructor(e) {
        (this.value = void 0), (this.committer = e);
      }
      setValue(e) {
        e === ke ||
          (Te(e) && e === this.value) ||
          ((this.value = e), we(e) || (this.committer.dirty = !0));
      }
      commit() {
        for (; we(this.value); ) {
          const e = this.value;
          (this.value = ke), e(this);
        }
        this.value !== ke && this.committer.commit();
      }
    }
    class Fe {
      constructor(e) {
        (this.value = void 0),
          (this.__pendingValue = void 0),
          (this.options = e);
      }
      appendInto(e) {
        (this.startNode = e.appendChild(fe())),
          (this.endNode = e.appendChild(fe()));
      }
      insertAfterNode(e) {
        (this.startNode = e), (this.endNode = e.nextSibling);
      }
      appendIntoPart(e) {
        e.__insert((this.startNode = fe())), e.__insert((this.endNode = fe()));
      }
      insertAfterPart(e) {
        e.__insert((this.startNode = fe())),
          (this.endNode = e.endNode),
          (e.endNode = this.startNode);
      }
      setValue(e) {
        this.__pendingValue = e;
      }
      commit() {
        if (null !== this.startNode.parentNode) {
          for (; we(this.__pendingValue); ) {
            const e = this.__pendingValue;
            (this.__pendingValue = ke), e(this);
          }
          var e = this.__pendingValue;
          e !== ke &&
            (Te(e)
              ? e !== this.value && this.__commitText(e)
              : e instanceof Ie
              ? this.__commitTemplateResult(e)
              : e instanceof Node
              ? this.__commitNode(e)
              : Re(e)
              ? this.__commitIterable(e)
              : e === Ee
              ? ((this.value = Ee), this.clear())
              : this.__commitText(e));
        }
      }
      __insert(e) {
        this.endNode.parentNode.insertBefore(e, this.endNode);
      }
      __commitNode(e) {
        this.value !== e && (this.clear(), this.__insert(e), (this.value = e));
      }
      __commitText(e) {
        const t = this.startNode.nextSibling;
        var i = 'string' == typeof (e = null == e ? '' : e) ? e : String(e);
        t === this.endNode.previousSibling && 3 === t.nodeType
          ? (t.data = i)
          : this.__commitNode(document.createTextNode(i)),
          (this.value = e);
      }
      __commitTemplateResult(e) {
        var t = this.options.templateFactory(e);
        if (this.value instanceof Ce && this.value.template === t)
          this.value.update(e.values);
        else {
          const i = new Ce(t, e.processor, this.options);
          (t = i._clone()),
            i.update(e.values),
            this.__commitNode(t),
            (this.value = i);
        }
      }
      __commitIterable(e) {
        Array.isArray(this.value) || ((this.value = []), this.clear());
        const t = this.value;
        let i,
          r = 0;
        for (const o of e)
          (i = t[r]),
            void 0 === i &&
              ((i = new Fe(this.options)),
              t.push(i),
              0 === r ? i.appendIntoPart(this) : i.insertAfterPart(t[r - 1])),
            i.setValue(o),
            i.commit(),
            r++;
        r < t.length && ((t.length = r), this.clear(i && i.endNode));
      }
      clear(e = this.startNode) {
        de(this.startNode.parentNode, e.nextSibling, this.endNode);
      }
    }
    class Ne {
      constructor(e, t, i) {
        if (
          ((this.value = void 0),
          (this.__pendingValue = void 0),
          2 !== i.length || '' !== i[0] || '' !== i[1])
        )
          throw new Error(
            'Boolean attributes can only contain a single expression'
          );
        (this.element = e), (this.name = t), (this.strings = i);
      }
      setValue(e) {
        this.__pendingValue = e;
      }
      commit() {
        for (; we(this.__pendingValue); ) {
          const e = this.__pendingValue;
          (this.__pendingValue = ke), e(this);
        }
        var e;
        this.__pendingValue !== ke &&
          ((e = !!this.__pendingValue),
          this.value !== e &&
            (e
              ? this.element.setAttribute(this.name, '')
              : this.element.removeAttribute(this.name),
            (this.value = e)),
          (this.__pendingValue = ke));
      }
    }
    class De extends Oe {
      constructor(e, t, i) {
        super(e, t, i),
          (this.single = 2 === i.length && '' === i[0] && '' === i[1]);
      }
      _createPart() {
        return new $e(this);
      }
      _getValue() {
        return this.single ? this.parts[0].value : super._getValue();
      }
      commit() {
        this.dirty &&
          ((this.dirty = !1), (this.element[this.name] = this._getValue()));
      }
    }
    class $e extends Le {}
    let Pe = !1;
    (() => {
      try {
        var e = {
          get capture() {
            return !(Pe = !0);
          },
        };
        window.addEventListener('test', e, e),
          window.removeEventListener('test', e, e);
      } catch (e) {}
    })();
    class ze {
      constructor(e, t, i) {
        (this.value = void 0),
          (this.__pendingValue = void 0),
          (this.element = e),
          (this.eventName = t),
          (this.eventContext = i),
          (this.__boundHandleEvent = e => this.handleEvent(e));
      }
      setValue(e) {
        this.__pendingValue = e;
      }
      commit() {
        for (; we(this.__pendingValue); ) {
          const e = this.__pendingValue;
          (this.__pendingValue = ke), e(this);
        }
        var e, t, i;
        this.__pendingValue !== ke &&
          ((e = this.__pendingValue),
          (i = this.value),
          (t =
            null == e ||
            (null != i &&
              (e.capture !== i.capture ||
                e.once !== i.once ||
                e.passive !== i.passive))),
          (i = null != e && (null == i || t)),
          t &&
            this.element.removeEventListener(
              this.eventName,
              this.__boundHandleEvent,
              this.__options
            ),
          i &&
            ((this.__options = Me(e)),
            this.element.addEventListener(
              this.eventName,
              this.__boundHandleEvent,
              this.__options
            )),
          (this.value = e),
          (this.__pendingValue = ke));
      }
      handleEvent(e) {
        'function' == typeof this.value
          ? this.value.call(this.eventContext || this.element, e)
          : this.value.handleEvent(e);
      }
    }
    const Me = e =>
      e &&
      (Pe
        ? { capture: e.capture, passive: e.passive, once: e.once }
        : e.capture);
    function He(e) {
      let t = Be.get(e.type);
      void 0 === t &&
        ((t = { stringsArray: new WeakMap(), keyString: new Map() }),
        Be.set(e.type, t));
      let i = t.stringsArray.get(e.strings);
      if (void 0 !== i) return i;
      var r = e.strings.join(se);
      return (
        (i = t.keyString.get(r)),
        void 0 === i &&
          ((i = new me(e, e.getTemplateElement())), t.keyString.set(r, i)),
        t.stringsArray.set(e.strings, i),
        i
      );
    }
    const Be = new Map(),
      Ve = new WeakMap(),
      Ue = (e, t, i) => {
        let r = Ve.get(t);
        void 0 === r &&
          (de(t, t.firstChild),
          Ve.set(t, (r = new Fe(Object.assign({ templateFactory: He }, i)))),
          r.appendInto(t)),
          r.setValue(e),
          r.commit();
      },
      je = new (class {
        handleAttributeExpressions(e, t, i, r) {
          var o = t[0];
          return '.' === o
            ? new De(e, t.slice(1), i).parts
            : '@' === o
            ? [new ze(e, t.slice(1), r.eventContext)]
            : '?' === o
            ? [new Ne(e, t.slice(1), i)]
            : new Oe(e, t, i).parts;
        }
        handleTextExpression(e) {
          return new Fe(e);
        }
      })();
    'undefined' != typeof window &&
      (window.litHtmlVersions || (window.litHtmlVersions = [])).push('1.4.1');
    const Ge = (e, ...t) => new Ie(e, t, 'html', je),
      Xe = (e, t) => `${e}--${t}`;
    let Ke = !0;
    void 0 === window.ShadyCSS
      ? (Ke = !1)
      : void 0 === window.ShadyCSS.prepareTemplateDom &&
        (console.warn(
          'Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1.'
        ),
        (Ke = !1));
    const We = ['html', 'svg'],
      qe = new Set();
    window.JSCompiler_renameProperty = (e, t) => e;
    const Ye = {
        toAttribute(e, t) {
          switch (t) {
            case Boolean:
              return e ? '' : null;
            case Object:
            case Array:
              return null == e ? e : JSON.stringify(e);
          }
          return e;
        },
        fromAttribute(e, t) {
          switch (t) {
            case Boolean:
              return null !== e;
            case Number:
              return null === e ? null : Number(e);
            case Object:
            case Array:
              return JSON.parse(e);
          }
          return e;
        },
      },
      Qe = (e, t) => t !== e && (t == t || e == e),
      Ze = {
        attribute: !0,
        type: String,
        converter: Ye,
        reflect: !1,
        hasChanged: Qe,
      },
      Je = 'finalized';
    class et extends HTMLElement {
      constructor() {
        super(), this.initialize();
      }
      static get observedAttributes() {
        this.finalize();
        const e = [];
        return (
          this._classProperties.forEach((t, i) => {
            void 0 !== (t = this._attributeNameForProperty(i, t)) &&
              (this._attributeToPropertyMap.set(t, i), e.push(t));
          }),
          e
        );
      }
      static _ensureClassProperties() {
        if (
          !this.hasOwnProperty(
            JSCompiler_renameProperty('_classProperties', this)
          )
        ) {
          this._classProperties = new Map();
          const e = Object.getPrototypeOf(this)._classProperties;
          void 0 !== e && e.forEach((e, t) => this._classProperties.set(t, e));
        }
      }
      static createProperty(e, t = Ze) {
        var i;
        this._ensureClassProperties(),
          this._classProperties.set(e, t),
          t.noAccessor ||
            this.prototype.hasOwnProperty(e) ||
            ((i = 'symbol' == typeof e ? Symbol() : `__${e}`),
            void 0 !== (t = this.getPropertyDescriptor(e, i, t)) &&
              Object.defineProperty(this.prototype, e, t));
      }
      static getPropertyDescriptor(e, t, i) {
        return {
          get() {
            return this[t];
          },
          set(r) {
            var o = this[e];
            (this[t] = r), this.requestUpdateInternal(e, o, i);
          },
          configurable: !0,
          enumerable: !0,
        };
      }
      static getPropertyOptions(e) {
        return (this._classProperties && this._classProperties.get(e)) || Ze;
      }
      static finalize() {
        const e = Object.getPrototypeOf(this);
        if (
          (e.hasOwnProperty(Je) || e.finalize(),
          (this[Je] = !0),
          this._ensureClassProperties(),
          (this._attributeToPropertyMap = new Map()),
          this.hasOwnProperty(JSCompiler_renameProperty('properties', this)))
        ) {
          var t = this.properties;
          for (const e of [
            ...Object.getOwnPropertyNames(t),
            ...('function' == typeof Object.getOwnPropertySymbols
              ? Object.getOwnPropertySymbols(t)
              : []),
          ])
            this.createProperty(e, t[e]);
        }
      }
      static _attributeNameForProperty(e, t) {
        return !1 === (t = t.attribute)
          ? void 0
          : 'string' == typeof t
          ? t
          : 'string' == typeof e
          ? e.toLowerCase()
          : void 0;
      }
      static _valueHasChanged(e, t, i = Qe) {
        return i(e, t);
      }
      static _propertyValueFromAttribute(e, t) {
        var i = t.type;
        const r =
          'function' == typeof (t = t.converter || Ye) ? t : t.fromAttribute;
        return r ? r(e, i) : e;
      }
      static _propertyValueToAttribute(e, t) {
        if (void 0 !== t.reflect) {
          var i = t.type;
          return (((t = t.converter) && t.toAttribute) || Ye.toAttribute)(e, i);
        }
      }
      initialize() {
        (this._updateState = 0),
          (this._updatePromise = new Promise(
            e => (this._enableUpdatingResolver = e)
          )),
          (this._changedProperties = new Map()),
          this._saveInstanceProperties(),
          this.requestUpdateInternal();
      }
      _saveInstanceProperties() {
        this.constructor._classProperties.forEach((e, t) => {
          var i;
          this.hasOwnProperty(t) &&
            ((i = this[t]),
            delete this[t],
            this._instanceProperties || (this._instanceProperties = new Map()),
            this._instanceProperties.set(t, i));
        });
      }
      _applyInstanceProperties() {
        this._instanceProperties.forEach((e, t) => (this[t] = e)),
          (this._instanceProperties = void 0);
      }
      connectedCallback() {
        this.enableUpdating();
      }
      enableUpdating() {
        void 0 !== this._enableUpdatingResolver &&
          (this._enableUpdatingResolver(),
          (this._enableUpdatingResolver = void 0));
      }
      disconnectedCallback() {}
      attributeChangedCallback(e, t, i) {
        t !== i && this._attributeToProperty(e, i);
      }
      _propertyToAttribute(e, t, i = Ze) {
        const r = this.constructor;
        void 0 === (e = r._attributeNameForProperty(e, i)) ||
          (void 0 !== (i = r._propertyValueToAttribute(t, i)) &&
            ((this._updateState = 8 | this._updateState),
            null == i ? this.removeAttribute(e) : this.setAttribute(e, i),
            (this._updateState = -9 & this._updateState)));
      }
      _attributeToProperty(e, t) {
        if (!(8 & this._updateState)) {
          const r = this.constructor;
          var i = r._attributeToPropertyMap.get(e);
          void 0 !== i &&
            ((e = r.getPropertyOptions(i)),
            (this._updateState = 16 | this._updateState),
            (this[i] = r._propertyValueFromAttribute(t, e)),
            (this._updateState = -17 & this._updateState));
        }
      }
      requestUpdateInternal(e, t, i) {
        let r = !0;
        if (void 0 !== e) {
          const o = this.constructor;
          (i = i || o.getPropertyOptions(e)),
            o._valueHasChanged(this[e], t, i.hasChanged)
              ? (this._changedProperties.has(e) ||
                  this._changedProperties.set(e, t),
                !0 !== i.reflect ||
                  16 & this._updateState ||
                  (void 0 === this._reflectingProperties &&
                    (this._reflectingProperties = new Map()),
                  this._reflectingProperties.set(e, i)))
              : (r = !1);
        }
        !this._hasRequestedUpdate &&
          r &&
          (this._updatePromise = this._enqueueUpdate());
      }
      requestUpdate(e, t) {
        return this.requestUpdateInternal(e, t), this.updateComplete;
      }
      async _enqueueUpdate() {
        this._updateState = 4 | this._updateState;
        try {
          await this._updatePromise;
        } catch (e) {}
        var e = this.performUpdate();
        return null != e && (await e), !this._hasRequestedUpdate;
      }
      get _hasRequestedUpdate() {
        return 4 & this._updateState;
      }
      get hasUpdated() {
        return 1 & this._updateState;
      }
      performUpdate() {
        if (this._hasRequestedUpdate) {
          this._instanceProperties && this._applyInstanceProperties();
          let t = !1;
          var e = this._changedProperties;
          try {
            (t = this.shouldUpdate(e)),
              t ? this.update(e) : this._markUpdated();
          } catch (e) {
            throw ((t = !1), this._markUpdated(), e);
          }
          t &&
            (1 & this._updateState ||
              ((this._updateState = 1 | this._updateState),
              this.firstUpdated(e)),
            this.updated(e));
        }
      }
      _markUpdated() {
        (this._changedProperties = new Map()),
          (this._updateState = -5 & this._updateState);
      }
      get updateComplete() {
        return this._getUpdateComplete();
      }
      _getUpdateComplete() {
        return this.getUpdateComplete();
      }
      getUpdateComplete() {
        return this._updatePromise;
      }
      shouldUpdate(e) {
        return !0;
      }
      update(e) {
        void 0 !== this._reflectingProperties &&
          0 < this._reflectingProperties.size &&
          (this._reflectingProperties.forEach((e, t) =>
            this._propertyToAttribute(t, this[t], e)
          ),
          (this._reflectingProperties = void 0)),
          this._markUpdated();
      }
      updated(e) {}
      firstUpdated(e) {}
    }
    et.finalized = !0;
    var tt = e => t =>
      ('function' == typeof t
        ? (e, t) => (window.customElements.define(e, t), t)
        : (e, t) => {
            var { kind: i, elements: t } = t;
            return {
              kind: i,
              elements: t,
              finisher(t) {
                window.customElements.define(e, t);
              },
            };
          })(e, t);
    const it = (e, t) =>
      'method' !== t.kind || !t.descriptor || 'value' in t.descriptor
        ? {
            kind: 'field',
            key: Symbol(),
            placement: 'own',
            descriptor: {},
            initializer() {
              'function' == typeof t.initializer &&
                (this[t.key] = t.initializer.call(this));
            },
            finisher(i) {
              i.createProperty(t.key, e);
            },
          }
        : Object.assign(Object.assign({}, t), {
            finisher(i) {
              i.createProperty(t.key, e);
            },
          });
    function rt(e) {
      return (t, i) =>
        void 0 !== i
          ? ((e, t, i) => {
              t.constructor.createProperty(i, e);
            })(e, t, i)
          : it(e, t);
    }
    var ot = e =>
      (function (e) {
        return rt({
          attribute: !1,
          hasChanged: null == e ? void 0 : e.hasChanged,
        });
      })(e);
    function at(e, t) {
      return (i, r) => {
        const o = {
          get() {
            return this.renderRoot.querySelector(e);
          },
          enumerable: !0,
          configurable: !0,
        };
        if (t) {
          var a = void 0 !== r ? r : i.key;
          const t = 'symbol' == typeof a ? Symbol() : `__${a}`;
          o.get = function () {
            return (
              void 0 === this[t] &&
                (this[t] = this.renderRoot.querySelector(e)),
              this[t]
            );
          };
        }
        return void 0 !== r ? dt(o, i, r) : st(o, i);
      };
    }
    function nt(e) {
      return (t, i) => {
        var r = {
          async get() {
            return await this.updateComplete, this.renderRoot.querySelector(e);
          },
          enumerable: !0,
          configurable: !0,
        };
        return void 0 !== i ? dt(r, t, i) : st(r, t);
      };
    }
    const dt = (e, t, i) => {
        Object.defineProperty(t, i, e);
      },
      st = (e, t) => ({
        kind: 'method',
        placement: 'prototype',
        key: t.key,
        descriptor: e,
      });
    function ct(e) {
      return (t, i) =>
        void 0 !== i
          ? ((e, t, i) => {
              Object.assign(t[i], e);
            })(e, t, i)
          : ((e, t) =>
              Object.assign(Object.assign({}, t), {
                finisher(i) {
                  Object.assign(i.prototype[t.key], e);
                },
              }))(e, t);
    }
    const lt =
      (jo = Element.prototype).msMatchesSelector || jo.webkitMatchesSelector;
    function pt(e = '', t = !1, i = '') {
      return (r, o) => {
        var a = {
          get() {
            const r = this.renderRoot.querySelector(
              'slot' + (e ? `[name=${e}]` : ':not([name])')
            );
            let o = r && r.assignedNodes({ flatten: t });
            return (
              o &&
                i &&
                (o = o.filter(
                  e =>
                    e.nodeType === Node.ELEMENT_NODE &&
                    (e.matches ? e.matches(i) : lt.call(e, i))
                )),
              o
            );
          },
          enumerable: !0,
          configurable: !0,
        };
        return void 0 !== o ? dt(a, r, o) : st(a, r);
      };
    }
    const mt =
        window.ShadowRoot &&
        (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) &&
        'adoptedStyleSheets' in Document.prototype &&
        'replace' in CSSStyleSheet.prototype,
      ht = Symbol();
    class ut {
      constructor(e, t) {
        if (t !== ht)
          throw new Error(
            'CSSResult is not constructable. Use `unsafeCSS` or `css` instead.'
          );
        this.cssText = e;
      }
      get styleSheet() {
        return (
          void 0 === this._styleSheet &&
            (mt
              ? ((this._styleSheet = new CSSStyleSheet()),
                this._styleSheet.replaceSync(this.cssText))
              : (this._styleSheet = null)),
          this._styleSheet
        );
      }
      toString() {
        return this.cssText;
      }
    }
    const ft = e => new ut(String(e), ht);
    var gt = (e, ...t) => (
      (t = t.reduce(
        (t, i, r) =>
          t +
          (e => {
            if (e instanceof ut) return e.cssText;
            if ('number' == typeof e) return e;
            throw new Error(
              `Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`
            );
          })(i) +
          e[r + 1],
        e[0]
      )),
      new ut(t, ht)
    );
    (window.litElementVersions || (window.litElementVersions = [])).push(
      '2.5.1'
    );
    const bt = {};
    class _t extends et {
      static getStyles() {
        return this.styles;
      }
      static _getUniqueStyles() {
        if (!this.hasOwnProperty(JSCompiler_renameProperty('_styles', this))) {
          var e = this.getStyles();
          if (Array.isArray(e)) {
            const t = (e, i) =>
                e.reduceRight(
                  (e, i) => (Array.isArray(i) ? t(i, e) : (e.add(i), e)),
                  i
                ),
              i = t(e, new Set()),
              r = [];
            i.forEach(e => r.unshift(e)), (this._styles = r);
          } else this._styles = void 0 === e ? [] : [e];
          this._styles = this._styles.map(e => {
            if (e instanceof CSSStyleSheet && !mt) {
              var t = Array.prototype.slice
                .call(e.cssRules)
                .reduce((e, t) => e + t.cssText, '');
              return ft(t);
            }
            return e;
          });
        }
      }
      initialize() {
        super.initialize(),
          this.constructor._getUniqueStyles(),
          (this.renderRoot = this.createRenderRoot()),
          window.ShadowRoot &&
            this.renderRoot instanceof window.ShadowRoot &&
            this.adoptStyles();
      }
      createRenderRoot() {
        return this.attachShadow(this.constructor.shadowRootOptions);
      }
      adoptStyles() {
        const e = this.constructor._styles;
        0 !== e.length &&
          (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow
            ? mt
              ? (this.renderRoot.adoptedStyleSheets = e.map(e =>
                  e instanceof CSSStyleSheet ? e : e.styleSheet
                ))
              : (this._needsShimAdoptedStyleSheets = !0)
            : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(
                e.map(e => e.cssText),
                this.localName
              ));
      }
      connectedCallback() {
        super.connectedCallback(),
          this.hasUpdated &&
            void 0 !== window.ShadyCSS &&
            window.ShadyCSS.styleElement(this);
      }
      update(e) {
        var t = this.render();
        super.update(e),
          t !== bt &&
            this.constructor.render(t, this.renderRoot, {
              scopeName: this.localName,
              eventContext: this,
            }),
          this._needsShimAdoptedStyleSheets &&
            ((this._needsShimAdoptedStyleSheets = !1),
            this.constructor._styles.forEach(e => {
              const t = document.createElement('style');
              (t.textContent = e.cssText), this.renderRoot.appendChild(t);
            }));
      }
      render() {
        return bt;
      }
    }
    (_t.finalized = !0),
      (_t.render = (e, t, i) => {
        if (!i || 'object' != typeof i || !i.scopeName)
          throw new Error('The `scopeName` option is required.');
        var r,
          o = i.scopeName,
          a = Ve.has(t),
          n = Ke && 11 === t.nodeType && !!t.host,
          d = n && !qe.has(o),
          s = d ? document.createDocumentFragment() : t;
        Ue(
          e,
          s,
          Object.assign(
            {
              templateFactory:
                ((r = o),
                e => {
                  var t = Xe(e.type, r);
                  let i = Be.get(t);
                  void 0 === i &&
                    ((i = {
                      stringsArray: new WeakMap(),
                      keyString: new Map(),
                    }),
                    Be.set(t, i));
                  let o = i.stringsArray.get(e.strings);
                  if (void 0 !== o) return o;
                  var a = e.strings.join(se);
                  return (
                    (o = i.keyString.get(a)),
                    void 0 === o &&
                      ((t = e.getTemplateElement()),
                      Ke && window.ShadyCSS.prepareTemplateDom(t, r),
                      (o = new me(e, t)),
                      i.keyString.set(a, o)),
                    i.stringsArray.set(e.strings, o),
                    o
                  );
                }),
            },
            i
          )
        ),
          d &&
            ((i = Ve.get(s)),
            Ve.delete(s),
            ((e, t, i) => {
              qe.add(e);
              var r = i ? i.element : document.createElement('template'),
                o = t.querySelectorAll('style'),
                a = o.length;
              if (0 !== a) {
                const n = document.createElement('style');
                for (let e = 0; e < a; e++) {
                  const t = o[e];
                  t.parentNode.removeChild(t), (n.textContent += t.textContent);
                }
                (e => {
                  We.forEach(t => {
                    const i = Be.get(Xe(t, e));
                    void 0 !== i &&
                      i.keyString.forEach(e => {
                        const {
                            element: { content: t },
                          } = e,
                          i = new Set();
                        Array.from(t.querySelectorAll('style')).forEach(e => {
                          i.add(e);
                        }),
                          be(e, i);
                      });
                  });
                })(e);
                const d = r.content;
                i
                  ? (function (e, t, i = null) {
                      const {
                        element: { content: r },
                        parts: o,
                      } = e;
                      if (null != i) {
                        const e = document.createTreeWalker(r, 133, null, !1);
                        let a = xe(o),
                          n = 0,
                          d = -1;
                        for (; e.nextNode(); )
                          for (
                            d++,
                              e.currentNode === i &&
                                ((n = _e(t)), i.parentNode.insertBefore(t, i));
                            -1 !== a && o[a].index === d;

                          ) {
                            if (0 < n) {
                              for (; -1 !== a; )
                                (o[a].index += n), (a = xe(o, a));
                              return;
                            }
                            a = xe(o, a);
                          }
                      } else r.appendChild(t);
                    })(i, n, d.firstChild)
                  : d.insertBefore(n, d.firstChild),
                  window.ShadyCSS.prepareTemplateStyles(r, e);
                const s = d.querySelector('style');
                if (window.ShadyCSS.nativeShadow && null !== s)
                  t.insertBefore(s.cloneNode(!0), t.firstChild);
                else if (i) {
                  d.insertBefore(n, d.firstChild);
                  const e = new Set();
                  e.add(n), be(i, e);
                }
              } else window.ShadyCSS.prepareTemplateStyles(r, e);
            })(o, s, (d = i.value instanceof Ce ? i.value.template : void 0)),
            de(t, t.firstChild),
            t.appendChild(s),
            Ve.set(t, i)),
          !a && n && window.ShadyCSS.styleElement(t.host);
      }),
      (_t.shadowRootOptions = { mode: 'open' }),
      i(173),
      i(102);
    var xt = {
        CLOSING: 'mdc-dialog--closing',
        OPEN: 'mdc-dialog--open',
        OPENING: 'mdc-dialog--opening',
        SCROLLABLE: 'mdc-dialog--scrollable',
        SCROLL_LOCK: 'mdc-dialog-scroll-lock',
        STACKED: 'mdc-dialog--stacked',
        FULLSCREEN: 'mdc-dialog--fullscreen',
        SCROLL_DIVIDER_HEADER: 'mdc-dialog-scroll-divider-header',
        SCROLL_DIVIDER_FOOTER: 'mdc-dialog-scroll-divider-footer',
        SURFACE_SCRIM_SHOWN: 'mdc-dialog__surface-scrim--shown',
        SURFACE_SCRIM_SHOWING: 'mdc-dialog__surface-scrim--showing',
        SURFACE_SCRIM_HIDING: 'mdc-dialog__surface-scrim--hiding',
        SCRIM_HIDDEN: 'mdc-dialog__scrim--hidden',
      },
      vt = {
        ACTION_ATTRIBUTE: 'data-mdc-dialog-action',
        BUTTON_DEFAULT_ATTRIBUTE: 'data-mdc-dialog-button-default',
        BUTTON_SELECTOR: '.mdc-dialog__button',
        CLOSED_EVENT: 'MDCDialog:closed',
        CLOSE_ACTION: 'close',
        CLOSING_EVENT: 'MDCDialog:closing',
        CONTAINER_SELECTOR: '.mdc-dialog__container',
        CONTENT_SELECTOR: '.mdc-dialog__content',
        DESTROY_ACTION: 'destroy',
        INITIAL_FOCUS_ATTRIBUTE: 'data-mdc-dialog-initial-focus',
        OPENED_EVENT: 'MDCDialog:opened',
        OPENING_EVENT: 'MDCDialog:opening',
        SCRIM_SELECTOR: '.mdc-dialog__scrim',
        SUPPRESS_DEFAULT_PRESS_SELECTOR: [
          'textarea',
          '.mdc-menu .mdc-list-item',
          '.mdc-menu .mdc-deprecated-list-item',
        ].join(', '),
        SURFACE_SELECTOR: '.mdc-dialog__surface',
      },
      yt = {
        DIALOG_ANIMATION_CLOSE_TIME_MS: 75,
        DIALOG_ANIMATION_OPEN_TIME_MS: 150,
      },
      wt =
        ((kt.prototype.request = function (e, t) {
          var i = this;
          this.cancel(e);
          var r = requestAnimationFrame(function (r) {
            i.rafIDs.delete(e), t(r);
          });
          this.rafIDs.set(e, r);
        }),
        (kt.prototype.cancel = function (e) {
          var t = this.rafIDs.get(e);
          t && (cancelAnimationFrame(t), this.rafIDs.delete(e));
        }),
        (kt.prototype.cancelAll = function () {
          var e = this;
          this.rafIDs.forEach(function (t, i) {
            e.cancel(i);
          });
        }),
        (kt.prototype.getQueue = function () {
          var e = [];
          return (
            this.rafIDs.forEach(function (t, i) {
              e.push(i);
            }),
            e
          );
        }),
        kt);
    function kt() {
      this.rafIDs = new Map();
    }
    var Et,
      Ct,
      At =
        (Object.defineProperty(St, 'cssClasses', {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(St, 'strings', {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(St, 'numbers', {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(St, 'defaultAdapter', {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        (St.prototype.init = function () {}),
        (St.prototype.destroy = function () {}),
        St);
    function St(e) {
      this.adapter = e = void 0 === e ? {} : e;
    }
    function It(e) {
      var t = Ct.call(this, r(r({}, It.defaultAdapter), e)) || this;
      return (
        (t.dialogOpen = !1),
        (t.isFullscreen = !1),
        (t.animationFrame = 0),
        (t.animationTimer = 0),
        (t.escapeKeyAction = vt.CLOSE_ACTION),
        (t.scrimClickAction = vt.CLOSE_ACTION),
        (t.autoStackButtons = !0),
        (t.areButtonsStacked = !1),
        (t.suppressDefaultPressSelector = vt.SUPPRESS_DEFAULT_PRESS_SELECTOR),
        (t.animFrame = new wt()),
        (t.contentScrollHandler = function () {
          t.handleScrollEvent();
        }),
        (t.windowResizeHandler = function () {
          t.layout();
        }),
        (t.windowOrientationChangeHandler = function () {
          t.layout();
        }),
        t
      );
    }
    ((Go = Et = Et || {}).POLL_SCROLL_POS = 'poll_scroll_position'),
      (Go.POLL_LAYOUT_CHANGE = 'poll_layout_change');
    const Tt =
      (t(It, (Ct = At)),
      Object.defineProperty(It, 'cssClasses', {
        get: function () {
          return xt;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(It, 'strings', {
        get: function () {
          return vt;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(It, 'numbers', {
        get: function () {
          return yt;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(It, 'defaultAdapter', {
        get: function () {
          return {
            addBodyClass: function () {},
            addClass: function () {},
            areButtonsStacked: function () {
              return !1;
            },
            clickDefaultButton: function () {},
            eventTargetMatches: function () {
              return !1;
            },
            getActionFromEvent: function () {
              return '';
            },
            getInitialFocusEl: function () {
              return null;
            },
            hasClass: function () {
              return !1;
            },
            isContentScrollable: function () {
              return !1;
            },
            notifyClosed: function () {},
            notifyClosing: function () {},
            notifyOpened: function () {},
            notifyOpening: function () {},
            releaseFocus: function () {},
            removeBodyClass: function () {},
            removeClass: function () {},
            reverseButtons: function () {},
            trapFocus: function () {},
            registerContentEventHandler: function () {},
            deregisterContentEventHandler: function () {},
            isScrollableContentAtTop: function () {
              return !1;
            },
            isScrollableContentAtBottom: function () {
              return !1;
            },
            registerWindowEventHandler: function () {},
            deregisterWindowEventHandler: function () {},
          };
        },
        enumerable: !1,
        configurable: !0,
      }),
      (It.prototype.init = function () {
        this.adapter.hasClass(xt.STACKED) && this.setAutoStackButtons(!1),
          (this.isFullscreen = this.adapter.hasClass(xt.FULLSCREEN));
      }),
      (It.prototype.destroy = function () {
        this.animationTimer &&
          (clearTimeout(this.animationTimer), this.handleAnimationTimerEnd()),
          this.isFullscreen &&
            this.adapter.deregisterContentEventHandler(
              'scroll',
              this.contentScrollHandler
            ),
          this.animFrame.cancelAll(),
          this.adapter.deregisterWindowEventHandler(
            'resize',
            this.windowResizeHandler
          ),
          this.adapter.deregisterWindowEventHandler(
            'orientationchange',
            this.windowOrientationChangeHandler
          );
      }),
      (It.prototype.open = function (e) {
        var t = this;
        (this.dialogOpen = !0),
          this.adapter.notifyOpening(),
          this.adapter.addClass(xt.OPENING),
          this.isFullscreen &&
            this.adapter.registerContentEventHandler(
              'scroll',
              this.contentScrollHandler
            ),
          e &&
            e.isAboveFullscreenDialog &&
            this.adapter.addClass(xt.SCRIM_HIDDEN),
          this.adapter.registerWindowEventHandler(
            'resize',
            this.windowResizeHandler
          ),
          this.adapter.registerWindowEventHandler(
            'orientationchange',
            this.windowOrientationChangeHandler
          ),
          this.runNextAnimationFrame(function () {
            t.adapter.addClass(xt.OPEN),
              t.adapter.addBodyClass(xt.SCROLL_LOCK),
              t.layout(),
              (t.animationTimer = setTimeout(function () {
                t.handleAnimationTimerEnd(),
                  t.adapter.trapFocus(t.adapter.getInitialFocusEl()),
                  t.adapter.notifyOpened();
              }, yt.DIALOG_ANIMATION_OPEN_TIME_MS));
          });
      }),
      (It.prototype.close = function (e) {
        var t = this;
        void 0 === e && (e = ''),
          this.dialogOpen &&
            ((this.dialogOpen = !1),
            this.adapter.notifyClosing(e),
            this.adapter.addClass(xt.CLOSING),
            this.adapter.removeClass(xt.OPEN),
            this.adapter.removeBodyClass(xt.SCROLL_LOCK),
            this.isFullscreen &&
              this.adapter.deregisterContentEventHandler(
                'scroll',
                this.contentScrollHandler
              ),
            this.adapter.deregisterWindowEventHandler(
              'resize',
              this.windowResizeHandler
            ),
            this.adapter.deregisterWindowEventHandler(
              'orientationchange',
              this.windowOrientationChangeHandler
            ),
            cancelAnimationFrame(this.animationFrame),
            (this.animationFrame = 0),
            clearTimeout(this.animationTimer),
            (this.animationTimer = setTimeout(function () {
              t.adapter.releaseFocus(),
                t.handleAnimationTimerEnd(),
                t.adapter.notifyClosed(e);
            }, yt.DIALOG_ANIMATION_CLOSE_TIME_MS)));
      }),
      (It.prototype.showSurfaceScrim = function () {
        var e = this;
        this.adapter.addClass(xt.SURFACE_SCRIM_SHOWING),
          this.runNextAnimationFrame(function () {
            e.adapter.addClass(xt.SURFACE_SCRIM_SHOWN);
          });
      }),
      (It.prototype.hideSurfaceScrim = function () {
        this.adapter.removeClass(xt.SURFACE_SCRIM_SHOWN),
          this.adapter.addClass(xt.SURFACE_SCRIM_HIDING);
      }),
      (It.prototype.handleSurfaceScrimTransitionEnd = function () {
        this.adapter.removeClass(xt.SURFACE_SCRIM_HIDING),
          this.adapter.removeClass(xt.SURFACE_SCRIM_SHOWING);
      }),
      (It.prototype.isOpen = function () {
        return this.dialogOpen;
      }),
      (It.prototype.getEscapeKeyAction = function () {
        return this.escapeKeyAction;
      }),
      (It.prototype.setEscapeKeyAction = function (e) {
        this.escapeKeyAction = e;
      }),
      (It.prototype.getScrimClickAction = function () {
        return this.scrimClickAction;
      }),
      (It.prototype.setScrimClickAction = function (e) {
        this.scrimClickAction = e;
      }),
      (It.prototype.getAutoStackButtons = function () {
        return this.autoStackButtons;
      }),
      (It.prototype.setAutoStackButtons = function (e) {
        this.autoStackButtons = e;
      }),
      (It.prototype.getSuppressDefaultPressSelector = function () {
        return this.suppressDefaultPressSelector;
      }),
      (It.prototype.setSuppressDefaultPressSelector = function (e) {
        this.suppressDefaultPressSelector = e;
      }),
      (It.prototype.layout = function () {
        var e = this;
        this.animFrame.request(Et.POLL_LAYOUT_CHANGE, function () {
          e.layoutInternal();
        });
      }),
      (It.prototype.handleClick = function (e) {
        this.adapter.eventTargetMatches(e.target, vt.SCRIM_SELECTOR) &&
        '' !== this.scrimClickAction
          ? this.close(this.scrimClickAction)
          : (e = this.adapter.getActionFromEvent(e)) && this.close(e);
      }),
      (It.prototype.handleKeydown = function (e) {
        var t = 'Enter' === e.key || 13 === e.keyCode;
        t &&
          (this.adapter.getActionFromEvent(e) ||
            ((e = e.composedPath ? e.composedPath()[0] : e.target),
            (e =
              !this.suppressDefaultPressSelector ||
              !this.adapter.eventTargetMatches(
                e,
                this.suppressDefaultPressSelector
              )),
            t && e && this.adapter.clickDefaultButton()));
      }),
      (It.prototype.handleDocumentKeydown = function (e) {
        ('Escape' !== e.key && 27 !== e.keyCode) ||
          '' === this.escapeKeyAction ||
          this.close(this.escapeKeyAction);
      }),
      (It.prototype.handleScrollEvent = function () {
        var e = this;
        this.animFrame.request(Et.POLL_SCROLL_POS, function () {
          e.toggleScrollDividerHeader(), e.toggleScrollDividerFooter();
        });
      }),
      (It.prototype.layoutInternal = function () {
        this.autoStackButtons && this.detectStackedButtons(),
          this.toggleScrollableClasses();
      }),
      (It.prototype.handleAnimationTimerEnd = function () {
        (this.animationTimer = 0),
          this.adapter.removeClass(xt.OPENING),
          this.adapter.removeClass(xt.CLOSING);
      }),
      (It.prototype.runNextAnimationFrame = function (e) {
        var t = this;
        cancelAnimationFrame(this.animationFrame),
          (this.animationFrame = requestAnimationFrame(function () {
            (t.animationFrame = 0),
              clearTimeout(t.animationTimer),
              (t.animationTimer = setTimeout(e, 0));
          }));
      }),
      (It.prototype.detectStackedButtons = function () {
        this.adapter.removeClass(xt.STACKED);
        var e = this.adapter.areButtonsStacked();
        e && this.adapter.addClass(xt.STACKED),
          e !== this.areButtonsStacked &&
            (this.adapter.reverseButtons(), (this.areButtonsStacked = e));
      }),
      (It.prototype.toggleScrollableClasses = function () {
        this.adapter.removeClass(xt.SCROLLABLE),
          this.adapter.isContentScrollable() &&
            (this.adapter.addClass(xt.SCROLLABLE),
            this.isFullscreen &&
              (this.toggleScrollDividerHeader(),
              this.toggleScrollDividerFooter()));
      }),
      (It.prototype.toggleScrollDividerHeader = function () {
        this.adapter.isScrollableContentAtTop()
          ? this.adapter.hasClass(xt.SCROLL_DIVIDER_HEADER) &&
            this.adapter.removeClass(xt.SCROLL_DIVIDER_HEADER)
          : this.adapter.addClass(xt.SCROLL_DIVIDER_HEADER);
      }),
      (It.prototype.toggleScrollDividerFooter = function () {
        this.adapter.isScrollableContentAtBottom()
          ? this.adapter.hasClass(xt.SCROLL_DIVIDER_FOOTER) &&
            this.adapter.removeClass(xt.SCROLL_DIVIDER_FOOTER)
          : this.adapter.addClass(xt.SCROLL_DIVIDER_FOOTER);
      }),
      It);
    function Rt(e) {
      return (
        !!(function (e) {
          void 0 === e && (e = window);
          var t = !1;
          try {
            var i = {
                get passive() {
                  return !(t = !0);
                },
              },
              r = function () {};
            e.document.addEventListener('test', r, i),
              e.document.removeEventListener('test', r, i);
          } catch (e) {
            t = !1;
          }
          return t;
        })((e = void 0 === e ? window : e)) && { passive: !0 }
      );
    }
    function Ot(e, t) {
      return (e.matches || e.webkitMatchesSelector || e.msMatchesSelector).call(
        e,
        t
      );
    }
    const Lt = e => e.nodeType === Node.ELEMENT_NODE;
    function Ft(e) {
      return {
        addClass: t => {
          e.classList.add(t);
        },
        removeClass: t => {
          e.classList.remove(t);
        },
        hasClass: t => e.classList.contains(t),
      };
    }
    let Nt = !1;
    var Dt = () => {},
      $t = {
        get passive() {
          return !(Nt = !0);
        },
      };
    document.addEventListener('x', Dt, $t),
      document.removeEventListener('x', Dt);
    var Pt = Nt;
    const zt = (e = window.document) => {
        let t = e.activeElement;
        const i = [];
        if (!t) return i;
        for (; t && (i.push(t), t.shadowRoot); ) t = t.shadowRoot.activeElement;
        return i;
      },
      Mt = e => {
        var t = zt();
        if (!t.length) return !1;
        const i = t[t.length - 1];
        var r = new Event('check-if-focused', { bubbles: !0, composed: !0 });
        let o = [];
        return (
          (t = e => {
            o = e.composedPath();
          }),
          document.body.addEventListener('check-if-focused', t),
          i.dispatchEvent(r),
          document.body.removeEventListener('check-if-focused', t),
          -1 !== o.indexOf(e)
        );
      };
    class Ht extends _t {
      click() {
        if (this.mdcRoot)
          return this.mdcRoot.focus(), void this.mdcRoot.click();
        super.click();
      }
      createFoundation() {
        void 0 !== this.mdcFoundation && this.mdcFoundation.destroy(),
          this.mdcFoundationClass &&
            ((this.mdcFoundation = new this.mdcFoundationClass(
              this.createAdapter()
            )),
            this.mdcFoundation.init());
      }
      firstUpdated() {
        this.createFoundation();
      }
    }
    var Bt = e => (t, i) => {
      if (t.constructor._observers) {
        if (!t.constructor.hasOwnProperty('_observers')) {
          const e = t.constructor._observers;
          (t.constructor._observers = new Map()),
            e.forEach((e, i) => t.constructor._observers.set(i, e));
        }
      } else {
        t.constructor._observers = new Map();
        const e = t.updated;
        t.updated = function (t) {
          e.call(this, t),
            t.forEach((e, t) => {
              const i = this.constructor._observers.get(t);
              void 0 !== i && i.call(this, this[t], e);
            });
        };
      }
      t.constructor._observers.set(i, e);
    };
    class Vt {
      constructor(e) {
        (this.classes = new Set()), (this.changed = !1);
        for (const t of ((this.element = e).getAttribute('class') || '').split(
          /\s+/
        ))
          this.classes.add(t);
      }
      add(e) {
        this.classes.add(e), (this.changed = !0);
      }
      remove(e) {
        this.classes.delete(e), (this.changed = !0);
      }
      commit() {
        if (this.changed) {
          let e = '';
          this.classes.forEach(t => (e += t + ' ')),
            this.element.setAttribute('class', e);
        }
      }
    }
    const Ut = new WeakMap(),
      jt = ye(e => t => {
        if (
          !(t instanceof Le) ||
          t instanceof $e ||
          'class' !== t.committer.name ||
          1 < t.committer.parts.length
        )
          throw new Error(
            'The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.'
          );
        const i = t.committer,
          r = i.element;
        let o = Ut.get(t);
        void 0 === o &&
          (r.setAttribute('class', i.strings.join(' ')),
          Ut.set(t, (o = new Set())));
        const a = r.classList || new Vt(r);
        o.forEach(t => {
          t in e || (a.remove(t), o.delete(t));
        });
        for (const t in e) {
          var n = e[t];
          n != o.has(t) &&
            (n ? (a.add(t), o.add(t)) : (a.remove(t), o.delete(t)));
        }
        'function' == typeof a.commit && a.commit();
      }),
      Gt = document.$blockingElements;
    class Xt extends Ht {
      constructor() {
        super(...arguments),
          (this.hideActions = !1),
          (this.stacked = !1),
          (this.heading = ''),
          (this.scrimClickAction = 'close'),
          (this.escapeKeyAction = 'close'),
          (this.open = !1),
          (this.defaultAction = 'close'),
          (this.actionAttribute = 'dialogAction'),
          (this.initialFocusAttribute = 'dialogInitialFocus'),
          (this.initialSupressDefaultPressSelector = ''),
          (this.mdcFoundationClass = Tt),
          (this.boundHandleClick = null),
          (this.boundHandleKeydown = null),
          (this.boundHandleDocumentKeydown = null);
      }
      set suppressDefaultPressSelector(e) {
        this.mdcFoundation
          ? this.mdcFoundation.setSuppressDefaultPressSelector(e)
          : (this.initialSupressDefaultPressSelector = e);
      }
      get suppressDefaultPressSelector() {
        return this.mdcFoundation
          ? this.mdcFoundation.getSuppressDefaultPressSelector()
          : this.initialSupressDefaultPressSelector;
      }
      get primaryButton() {
        let e = this.primarySlot.assignedNodes();
        return (e = e.filter(e => e instanceof HTMLElement)), e[0] || null;
      }
      emitNotification(e, t) {
        (t = new CustomEvent(e, { detail: t ? { action: t } : {} })),
          this.dispatchEvent(t);
      }
      getInitialFocusEl() {
        var e = `[${this.initialFocusAttribute}]`;
        return (e = this.querySelector(e))
          ? e
          : ((e = this.primarySlot.assignedNodes({ flatten: !0 })),
            (e = this.searchNodeTreesForAttribute(
              e,
              this.initialFocusAttribute
            ))
              ? e
              : ((e = this.secondarySlot.assignedNodes({ flatten: !0 })),
                (e = this.searchNodeTreesForAttribute(
                  e,
                  this.initialFocusAttribute
                ))
                  ? e
                  : ((e = this.contentSlot.assignedNodes({ flatten: !0 })),
                    this.searchNodeTreesForAttribute(
                      e,
                      this.initialFocusAttribute
                    ))));
      }
      searchNodeTreesForAttribute(e, t) {
        for (const r of e)
          if (r instanceof HTMLElement) {
            if (r.hasAttribute(t)) return r;
            var i = r.querySelector(`[${t}]`);
            if (i) return i;
          }
        return null;
      }
      createAdapter() {
        return Object.assign(Object.assign({}, Ft(this.mdcRoot)), {
          addBodyClass: () => (document.body.style.overflow = 'hidden'),
          removeBodyClass: () => (document.body.style.overflow = ''),
          areButtonsStacked: () => this.stacked,
          clickDefaultButton: () => {
            const e = this.primaryButton;
            e && e.click();
          },
          eventTargetMatches: (e, t) => !!e && Ot(e, t),
          getActionFromEvent: e => {
            if (!e.target) return '';
            const t = (function (e, t) {
              if (e.closest) return e.closest(t);
              for (var i = e; i; ) {
                if (Ot(i, t)) return i;
                i = i.parentElement;
              }
              return null;
            })(e.target, `[${this.actionAttribute}]`);
            return t && t.getAttribute(this.actionAttribute);
          },
          getInitialFocusEl: () => this.getInitialFocusEl(),
          isContentScrollable: () => {
            var e = this.contentElement;
            return !!e && e.scrollHeight > e.offsetHeight;
          },
          notifyClosed: e => this.emitNotification('closed', e),
          notifyClosing: e => {
            this.closingDueToDisconnect || (this.open = !1),
              this.emitNotification('closing', e);
          },
          notifyOpened: () => this.emitNotification('opened'),
          notifyOpening: () => {
            (this.open = !0), this.emitNotification('opening');
          },
          reverseButtons: () => {},
          releaseFocus: () => {
            Gt.remove(this);
          },
          trapFocus: e => {
            this.isConnected && (Gt.push(this), e && e.focus());
          },
          registerContentEventHandler: (e, t) => {
            this.contentElement.addEventListener(e, t);
          },
          deregisterContentEventHandler: (e, t) => {
            this.contentElement.removeEventListener(e, t);
          },
          isScrollableContentAtTop: () => {
            var e = this.contentElement;
            return !!e && 0 === e.scrollTop;
          },
          isScrollableContentAtBottom: () => {
            var e = this.contentElement;
            return (
              !!e && Math.ceil(e.scrollHeight - e.scrollTop) === e.clientHeight
            );
          },
          registerWindowEventHandler: (e, t) => {
            window.addEventListener(e, t, Rt());
          },
          deregisterWindowEventHandler: (e, t) => {
            window.removeEventListener(e, t, Rt());
          },
        });
      }
      render() {
        var e = { [xt.STACKED]: this.stacked };
        let t = Ge``;
        this.heading && (t = this.renderHeading());
        var i = { 'mdc-dialog__actions': !this.hideActions };
        return Ge`
    <div class="mdc-dialog ${jt(e)}"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="title"
        aria-describedby="content">
      <div class="mdc-dialog__container">
        <div class="mdc-dialog__surface">
          ${t}
          <div id="content" class="mdc-dialog__content">
            <slot id="contentSlot"></slot>
          </div>
          <footer
              id="actions"
              class="${jt(i)}">
            <span>
              <slot name="secondaryAction"></slot>
            </span>
            <span>
             <slot name="primaryAction"></slot>
            </span>
          </footer>
        </div>
      </div>
      <div class="mdc-dialog__scrim"></div>
    </div>`;
      }
      renderHeading() {
        return Ge`
      <h2 id="title" class="mdc-dialog__title">${this.heading}</h2>`;
      }
      firstUpdated() {
        super.firstUpdated(),
          this.mdcFoundation.setAutoStackButtons(!0),
          this.initialSupressDefaultPressSelector
            ? (this.suppressDefaultPressSelector =
                this.initialSupressDefaultPressSelector)
            : (this.suppressDefaultPressSelector = [
                this.suppressDefaultPressSelector,
                'mwc-textarea',
                'mwc-menu mwc-list-item',
                'mwc-select mwc-list-item',
              ].join(', ')),
          (this.boundHandleClick = this.mdcFoundation.handleClick.bind(
            this.mdcFoundation
          )),
          (this.boundHandleKeydown = this.mdcFoundation.handleKeydown.bind(
            this.mdcFoundation
          )),
          (this.boundHandleDocumentKeydown =
            this.mdcFoundation.handleDocumentKeydown.bind(this.mdcFoundation));
      }
      connectedCallback() {
        super.connectedCallback(),
          this.open &&
            this.mdcFoundation &&
            !this.mdcFoundation.isOpen() &&
            (this.setEventListeners(), this.mdcFoundation.open());
      }
      disconnectedCallback() {
        super.disconnectedCallback(),
          this.open &&
            this.mdcFoundation &&
            (this.removeEventListeners(),
            (this.closingDueToDisconnect = !0),
            this.mdcFoundation.close(this.currentAction || this.defaultAction),
            (this.closingDueToDisconnect = !1),
            (this.currentAction = void 0),
            Gt.remove(this));
      }
      forceLayout() {
        this.mdcFoundation.layout();
      }
      focus() {
        const e = this.getInitialFocusEl();
        e && e.focus();
      }
      blur() {
        if (this.shadowRoot) {
          const t = this.shadowRoot.activeElement;
          if (t) t instanceof HTMLElement && t.blur();
          else {
            var e = this.getRootNode();
            const t = e instanceof Document ? e.activeElement : null;
            t instanceof HTMLElement && t.blur();
          }
        }
      }
      setEventListeners() {
        this.boundHandleClick &&
          this.mdcRoot.addEventListener('click', this.boundHandleClick),
          this.boundHandleKeydown &&
            this.mdcRoot.addEventListener(
              'keydown',
              this.boundHandleKeydown,
              Rt()
            ),
          this.boundHandleDocumentKeydown &&
            document.addEventListener(
              'keydown',
              this.boundHandleDocumentKeydown,
              Rt()
            );
      }
      removeEventListeners() {
        this.boundHandleClick &&
          this.mdcRoot.removeEventListener('click', this.boundHandleClick),
          this.boundHandleKeydown &&
            this.mdcRoot.removeEventListener(
              'keydown',
              this.boundHandleKeydown
            ),
          this.boundHandleDocumentKeydown &&
            document.removeEventListener(
              'keydown',
              this.boundHandleDocumentKeydown
            );
      }
      close() {
        this.open = !1;
      }
      show() {
        this.open = !0;
      }
    }
    o([at('.mdc-dialog')], Xt.prototype, 'mdcRoot', void 0),
      o(
        [at('slot[name="primaryAction"]')],
        Xt.prototype,
        'primarySlot',
        void 0
      ),
      o(
        [at('slot[name="secondaryAction"]')],
        Xt.prototype,
        'secondarySlot',
        void 0
      ),
      o([at('#contentSlot')], Xt.prototype, 'contentSlot', void 0),
      o([at('.mdc-dialog__content')], Xt.prototype, 'contentElement', void 0),
      o([at('.mdc-container')], Xt.prototype, 'conatinerElement', void 0),
      o([rt({ type: Boolean })], Xt.prototype, 'hideActions', void 0),
      o(
        [
          rt({ type: Boolean }),
          Bt(function () {
            this.forceLayout();
          }),
        ],
        Xt.prototype,
        'stacked',
        void 0
      ),
      o([rt({ type: String })], Xt.prototype, 'heading', void 0),
      o(
        [
          rt({ type: String }),
          Bt(function (e) {
            this.mdcFoundation.setScrimClickAction(e);
          }),
        ],
        Xt.prototype,
        'scrimClickAction',
        void 0
      ),
      o(
        [
          rt({ type: String }),
          Bt(function (e) {
            this.mdcFoundation.setEscapeKeyAction(e);
          }),
        ],
        Xt.prototype,
        'escapeKeyAction',
        void 0
      ),
      o(
        [
          rt({ type: Boolean, reflect: !0 }),
          Bt(function (e) {
            this.mdcFoundation &&
              this.isConnected &&
              (e
                ? (this.setEventListeners(), this.mdcFoundation.open())
                : (this.removeEventListeners(),
                  this.mdcFoundation.close(
                    this.currentAction || this.defaultAction
                  ),
                  (this.currentAction = void 0)));
          }),
        ],
        Xt.prototype,
        'open',
        void 0
      ),
      o([rt()], Xt.prototype, 'defaultAction', void 0),
      o([rt()], Xt.prototype, 'actionAttribute', void 0),
      o([rt()], Xt.prototype, 'initialFocusAttribute', void 0);
    var Kt = gt`.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:7;z-index:var(--mdc-dialog-z-index, 7)}.mdc-dialog .mdc-dialog__surface{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0,0,0,.32)}.mdc-dialog .mdc-dialog__surface-scrim{background-color:rgba(0,0,0,.32)}.mdc-dialog .mdc-dialog__title{color:rgba(0,0,0,.87)}.mdc-dialog .mdc-dialog__content{color:rgba(0,0,0,.6)}.mdc-dialog .mdc-dialog__close{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-dialog .mdc-dialog__close .mdc-icon-button__ripple::before,.mdc-dialog .mdc-dialog__close .mdc-icon-button__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-dialog .mdc-dialog__close:hover .mdc-icon-button__ripple::before,.mdc-dialog .mdc-dialog__close.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-dialog .mdc-dialog__close.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-dialog .mdc-dialog__close.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions,.mdc-dialog.mdc-dialog--scrollable.mdc-dialog-scroll-divider-footer .mdc-dialog__actions{border-color:rgba(0,0,0,.12)}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:1px solid rgba(0,0,0,.12);margin-bottom:0}.mdc-dialog.mdc-dialog-scroll-divider-header.mdc-dialog--fullscreen .mdc-dialog__header{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12)}.mdc-dialog .mdc-dialog__content{padding:20px 24px 20px 24px}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media(max-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media(min-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}.mdc-dialog .mdc-dialog__surface{border-radius:4px;border-radius:var(--mdc-shape-medium, 4px)}@media(max-width: 960px)and (max-height: 1440px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px;max-width:560px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-height: 1023px)and (max-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:calc(100vw - 112px)}}@media(max-width: 720px)and (max-height: 1023px)and (min-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:560px}}@media(max-width: 720px)and (max-height: 1023px)and (max-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:calc(100vh - 160px)}}@media(max-width: 720px)and (max-height: 1023px)and (min-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px}}@media(max-width: 720px)and (max-height: 1023px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-height: 400px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100%;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media(max-width: 600px)and (max-height: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media(min-width: 960px)and (min-height: 1440px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:calc(100vw - 400px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}.mdc-dialog.mdc-dialog__scrim--hidden .mdc-dialog__scrim{opacity:0}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;transform:scale(0.8);opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;box-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0,0,0,.12);display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}[dir=rtl] .mdc-dialog__surface,.mdc-dialog__surface[dir=rtl]{text-align:right}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-dialog__surface{outline:2px solid windowText}}.mdc-dialog__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid transparent;border-radius:inherit;content:"";pointer-events:none}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.mdc-dialog__surface::before{content:none}}.mdc-dialog__title{display:block;margin-top:0;line-height:normal;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:0.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, 0.0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit);position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:0 24px 9px}.mdc-dialog__title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mdc-dialog__title,.mdc-dialog__title[dir=rtl]{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{margin-bottom:1px;padding-bottom:15px}.mdc-dialog--fullscreen .mdc-dialog__header{align-items:baseline;border-bottom:1px solid transparent;display:inline-flex;justify-content:space-between;padding:0 24px 9px;z-index:1}.mdc-dialog--fullscreen .mdc-dialog__header .mdc-dialog__close{right:-12px}.mdc-dialog--fullscreen .mdc-dialog__title{margin-bottom:0;padding:0;border-bottom:0}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:0;margin-bottom:0}.mdc-dialog--fullscreen .mdc-dialog__close{top:5px}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top:1px solid transparent}.mdc-dialog__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-body1-font-size, 1rem);line-height:1.5rem;line-height:var(--mdc-typography-body1-line-height, 1.5rem);font-weight:400;font-weight:var(--mdc-typography-body1-font-weight, 400);letter-spacing:0.03125em;letter-spacing:var(--mdc-typography-body1-letter-spacing, 0.03125em);text-decoration:inherit;text-decoration:var(--mdc-typography-body1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body1-text-transform, inherit);flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;-webkit-overflow-scrolling:touch}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content,.mdc-dialog__header+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__title+.mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid transparent}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog__button:first-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity 150ms linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear,transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:none}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{transform:none;opacity:1}.mdc-dialog--open.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim{opacity:1;z-index:1}.mdc-dialog--open.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{transition:opacity 75ms linear}.mdc-dialog--open.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim{transition:opacity 150ms linear}.mdc-dialog__surface-scrim{display:none;opacity:0;position:absolute;width:100%;height:100%}.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{display:block}.mdc-dialog-scroll-lock{overflow:hidden}#actions:not(.mdc-dialog__actions){display:none}.mdc-dialog__surface{box-shadow:var(--mdc-dialog-box-shadow, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12))}@media(min-width: 560px){.mdc-dialog .mdc-dialog__surface{max-width:560px;max-width:var(--mdc-dialog-max-width, 560px)}}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0, 0, 0, 0.32);background-color:var(--mdc-dialog-scrim-color, rgba(0, 0, 0, 0.32))}.mdc-dialog .mdc-dialog__title{color:rgba(0, 0, 0, 0.87);color:var(--mdc-dialog-heading-ink-color, rgba(0, 0, 0, 0.87))}.mdc-dialog .mdc-dialog__content{color:rgba(0, 0, 0, 0.6);color:var(--mdc-dialog-content-ink-color, rgba(0, 0, 0, 0.6))}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12))}.mdc-dialog .mdc-dialog__surface{min-width:280px;min-width:var(--mdc-dialog-min-width, 280px)}.mdc-dialog .mdc-dialog__surface{max-height:var(--mdc-dialog-max-height, calc(100% - 32px))}#actions ::slotted(*){margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] #actions ::slotted(*),#actions ::slotted(*[dir=rtl]){margin-left:0;margin-right:8px}[dir=rtl] #actions ::slotted(*),#actions ::slotted(*[dir=rtl]){text-align:left}.mdc-dialog--stacked #actions{flex-direction:column-reverse}.mdc-dialog--stacked #actions *:not(:last-child) ::slotted(*){flex-basis:.000000001px;margin-top:12px}`;
    let Wt = class extends Xt {};
    (Wt.styles = [Kt]), (Wt = o([tt('mwc-dialog')], Wt));
    class qt extends Wt {}
    qt.styles = [
      ...Wt.styles,
      gt`
      .mdc-dialog .mdc-dialog__surface {
        height: 100vh;
        max-height: 100vh;
      }
      .mdc-dialog,
      .mdc-dialog__scrim {
        justify-content: left;
      }
      .mdc-dialog__container {
        transform: translate(-100%);
      }

      .mdc-dialog__container {
        animation: pulse 1s ease;
      }

      @keyframes pulse {
        0% {
          transform: translate(-100%);
        }
        100% {
          transform: translate(0%);
        }
      }
    `,
    ];
    var Yt = gt`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;
    let Qt = class extends _t {
      render() {
        return Ge`<slot></slot>`;
      }
    };
    (Qt.styles = [Yt]), (Qt = o([tt('mwc-icon')], Qt));
    var Zt,
      Jt = {
        BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
        FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
        FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
        ROOT: 'mdc-ripple-upgraded',
        UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
      },
      ei = {
        VAR_FG_SCALE: '--mdc-ripple-fg-scale',
        VAR_FG_SIZE: '--mdc-ripple-fg-size',
        VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
        VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
        VAR_LEFT: '--mdc-ripple-left',
        VAR_TOP: '--mdc-ripple-top',
      },
      ti = {
        DEACTIVATION_TIMEOUT_MS: 225,
        FG_DEACTIVATION_MS: 150,
        INITIAL_ORIGIN_SCALE: 0.6,
        PADDING: 10,
        TAP_DELAY_MS: 300,
      },
      ii = ['touchstart', 'pointerdown', 'mousedown', 'keydown'],
      ri = ['touchend', 'pointerup', 'mouseup', 'contextmenu'],
      oi = [];
    function ai(e) {
      var t = Zt.call(this, r(r({}, ai.defaultAdapter), e)) || this;
      return (
        (t.activationAnimationHasEnded = !1),
        (t.activationTimer = 0),
        (t.fgDeactivationRemovalTimer = 0),
        (t.fgScale = '0'),
        (t.frame = { width: 0, height: 0 }),
        (t.initialSize = 0),
        (t.layoutFrame = 0),
        (t.maxRadius = 0),
        (t.unboundedCoords = { left: 0, top: 0 }),
        (t.activationState = t.defaultActivationState()),
        (t.activationTimerCallback = function () {
          (t.activationAnimationHasEnded = !0),
            t.runDeactivationUXLogicIfReady();
        }),
        (t.activateHandler = function (e) {
          t.activateImpl(e);
        }),
        (t.deactivateHandler = function () {
          t.deactivateImpl();
        }),
        (t.focusHandler = function () {
          t.handleFocus();
        }),
        (t.blurHandler = function () {
          t.handleBlur();
        }),
        (t.resizeHandler = function () {
          t.layout();
        }),
        t
      );
    }
    const ni =
        (t(ai, (Zt = At)),
        Object.defineProperty(ai, 'cssClasses', {
          get: function () {
            return Jt;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(ai, 'strings', {
          get: function () {
            return ei;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(ai, 'numbers', {
          get: function () {
            return ti;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(ai, 'defaultAdapter', {
          get: function () {
            return {
              addClass: function () {},
              browserSupportsCssVars: function () {
                return !0;
              },
              computeBoundingRect: function () {
                return {
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  width: 0,
                  height: 0,
                };
              },
              containsEventTarget: function () {
                return !0;
              },
              deregisterDocumentInteractionHandler: function () {},
              deregisterInteractionHandler: function () {},
              deregisterResizeHandler: function () {},
              getWindowPageOffset: function () {
                return { x: 0, y: 0 };
              },
              isSurfaceActive: function () {
                return !0;
              },
              isSurfaceDisabled: function () {
                return !0;
              },
              isUnbounded: function () {
                return !0;
              },
              registerDocumentInteractionHandler: function () {},
              registerInteractionHandler: function () {},
              registerResizeHandler: function () {},
              removeClass: function () {},
              updateCssVariable: function () {},
            };
          },
          enumerable: !1,
          configurable: !0,
        }),
        (ai.prototype.init = function () {
          var e,
            t,
            i = this,
            r = this.supportsPressRipple();
          this.registerRootHandlers(r),
            r &&
              ((e = (r = ai.cssClasses).ROOT),
              (t = r.UNBOUNDED),
              requestAnimationFrame(function () {
                i.adapter.addClass(e),
                  i.adapter.isUnbounded() &&
                    (i.adapter.addClass(t), i.layoutInternal());
              }));
        }),
        (ai.prototype.destroy = function () {
          var e,
            t,
            i,
            r = this;
          this.supportsPressRipple() &&
            (this.activationTimer &&
              (clearTimeout(this.activationTimer),
              (this.activationTimer = 0),
              this.adapter.removeClass(ai.cssClasses.FG_ACTIVATION)),
            this.fgDeactivationRemovalTimer &&
              (clearTimeout(this.fgDeactivationRemovalTimer),
              (this.fgDeactivationRemovalTimer = 0),
              this.adapter.removeClass(ai.cssClasses.FG_DEACTIVATION)),
            (t = (e = ai.cssClasses).ROOT),
            (i = e.UNBOUNDED),
            requestAnimationFrame(function () {
              r.adapter.removeClass(t),
                r.adapter.removeClass(i),
                r.removeCssVars();
            })),
            this.deregisterRootHandlers(),
            this.deregisterDeactivationHandlers();
        }),
        (ai.prototype.activate = function (e) {
          this.activateImpl(e);
        }),
        (ai.prototype.deactivate = function () {
          this.deactivateImpl();
        }),
        (ai.prototype.layout = function () {
          var e = this;
          this.layoutFrame && cancelAnimationFrame(this.layoutFrame),
            (this.layoutFrame = requestAnimationFrame(function () {
              e.layoutInternal(), (e.layoutFrame = 0);
            }));
        }),
        (ai.prototype.setUnbounded = function (e) {
          var t = ai.cssClasses.UNBOUNDED;
          e ? this.adapter.addClass(t) : this.adapter.removeClass(t);
        }),
        (ai.prototype.handleFocus = function () {
          var e = this;
          requestAnimationFrame(function () {
            return e.adapter.addClass(ai.cssClasses.BG_FOCUSED);
          });
        }),
        (ai.prototype.handleBlur = function () {
          var e = this;
          requestAnimationFrame(function () {
            return e.adapter.removeClass(ai.cssClasses.BG_FOCUSED);
          });
        }),
        (ai.prototype.supportsPressRipple = function () {
          return this.adapter.browserSupportsCssVars();
        }),
        (ai.prototype.defaultActivationState = function () {
          return {
            activationEvent: void 0,
            hasDeactivationUXRun: !1,
            isActivated: !1,
            isProgrammatic: !1,
            wasActivatedByPointer: !1,
            wasElementMadeActive: !1,
          };
        }),
        (ai.prototype.registerRootHandlers = function (e) {
          var t, i;
          if (e) {
            try {
              for (var r = n(ii), o = r.next(); !o.done; o = r.next()) {
                var a = o.value;
                this.adapter.registerInteractionHandler(
                  a,
                  this.activateHandler
                );
              }
            } catch (e) {
              t = { error: e };
            } finally {
              try {
                o && !o.done && (i = r.return) && i.call(r);
              } finally {
                if (t) throw t.error;
              }
            }
            this.adapter.isUnbounded() &&
              this.adapter.registerResizeHandler(this.resizeHandler);
          }
          this.adapter.registerInteractionHandler('focus', this.focusHandler),
            this.adapter.registerInteractionHandler('blur', this.blurHandler);
        }),
        (ai.prototype.registerDeactivationHandlers = function (e) {
          var t, i;
          if ('keydown' === e.type)
            this.adapter.registerInteractionHandler(
              'keyup',
              this.deactivateHandler
            );
          else
            try {
              for (var r = n(ri), o = r.next(); !o.done; o = r.next()) {
                var a = o.value;
                this.adapter.registerDocumentInteractionHandler(
                  a,
                  this.deactivateHandler
                );
              }
            } catch (e) {
              t = { error: e };
            } finally {
              try {
                o && !o.done && (i = r.return) && i.call(r);
              } finally {
                if (t) throw t.error;
              }
            }
        }),
        (ai.prototype.deregisterRootHandlers = function () {
          var e, t;
          try {
            for (var i = n(ii), r = i.next(); !r.done; r = i.next()) {
              var o = r.value;
              this.adapter.deregisterInteractionHandler(
                o,
                this.activateHandler
              );
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              r && !r.done && (t = i.return) && t.call(i);
            } finally {
              if (e) throw e.error;
            }
          }
          this.adapter.deregisterInteractionHandler('focus', this.focusHandler),
            this.adapter.deregisterInteractionHandler('blur', this.blurHandler),
            this.adapter.isUnbounded() &&
              this.adapter.deregisterResizeHandler(this.resizeHandler);
        }),
        (ai.prototype.deregisterDeactivationHandlers = function () {
          var e, t;
          this.adapter.deregisterInteractionHandler(
            'keyup',
            this.deactivateHandler
          );
          try {
            for (var i = n(ri), r = i.next(); !r.done; r = i.next()) {
              var o = r.value;
              this.adapter.deregisterDocumentInteractionHandler(
                o,
                this.deactivateHandler
              );
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              r && !r.done && (t = i.return) && t.call(i);
            } finally {
              if (e) throw e.error;
            }
          }
        }),
        (ai.prototype.removeCssVars = function () {
          var e = this,
            t = ai.strings;
          Object.keys(t).forEach(function (i) {
            0 === i.indexOf('VAR_') && e.adapter.updateCssVariable(t[i], null);
          });
        }),
        (ai.prototype.activateImpl = function (e) {
          var t,
            i,
            r = this;
          this.adapter.isSurfaceDisabled() ||
            (t = this.activationState).isActivated ||
            ((i = this.previousActivationEvent) &&
              void 0 !== e &&
              i.type !== e.type) ||
            ((t.isActivated = !0),
            (t.isProgrammatic = void 0 === e),
            (t.activationEvent = e),
            (t.wasActivatedByPointer =
              !t.isProgrammatic &&
              void 0 !== e &&
              ('mousedown' === e.type ||
                'touchstart' === e.type ||
                'pointerdown' === e.type)),
            void 0 !== e &&
            0 < oi.length &&
            oi.some(function (e) {
              return r.adapter.containsEventTarget(e);
            })
              ? this.resetActivationState()
              : (void 0 !== e &&
                  (oi.push(e.target), this.registerDeactivationHandlers(e)),
                (t.wasElementMadeActive = this.checkElementMadeActive(e)),
                t.wasElementMadeActive && this.animateActivation(),
                requestAnimationFrame(function () {
                  (oi = []),
                    t.wasElementMadeActive ||
                      void 0 === e ||
                      (' ' !== e.key && 32 !== e.keyCode) ||
                      ((t.wasElementMadeActive = r.checkElementMadeActive(e)),
                      t.wasElementMadeActive && r.animateActivation()),
                    t.wasElementMadeActive ||
                      (r.activationState = r.defaultActivationState());
                })));
        }),
        (ai.prototype.checkElementMadeActive = function (e) {
          return (
            void 0 === e ||
            'keydown' !== e.type ||
            this.adapter.isSurfaceActive()
          );
        }),
        (ai.prototype.animateActivation = function () {
          var e = this,
            t = ai.strings,
            i = t.VAR_FG_TRANSLATE_START,
            r = t.VAR_FG_TRANSLATE_END,
            o = ai.cssClasses,
            a = o.FG_DEACTIVATION,
            n = o.FG_ACTIVATION,
            d = ai.numbers.DEACTIVATION_TIMEOUT_MS;
          this.layoutInternal();
          var s = '',
            c = '';
          this.adapter.isUnbounded() ||
            ((o = (t = this.getFgTranslationCoordinates()).startPoint),
            (t = t.endPoint),
            (s = o.x + 'px, ' + o.y + 'px'),
            (c = t.x + 'px, ' + t.y + 'px')),
            this.adapter.updateCssVariable(i, s),
            this.adapter.updateCssVariable(r, c),
            clearTimeout(this.activationTimer),
            clearTimeout(this.fgDeactivationRemovalTimer),
            this.rmBoundedActivationClasses(),
            this.adapter.removeClass(a),
            this.adapter.computeBoundingRect(),
            this.adapter.addClass(n),
            (this.activationTimer = setTimeout(function () {
              e.activationTimerCallback();
            }, d));
        }),
        (ai.prototype.getFgTranslationCoordinates = function () {
          var e = this.activationState,
            t = e.activationEvent;
          return (
            (t = e.wasActivatedByPointer
              ? (function (e, t, i) {
                  if (!e) return { x: 0, y: 0 };
                  var r,
                    o = t.x;
                  return (
                    (t = t.y),
                    (o += i.left),
                    (i = t + i.top),
                    (i =
                      'touchstart' === e.type
                        ? ((r = e.changedTouches[0].pageX - o),
                          e.changedTouches[0].pageY - i)
                        : ((r = e.pageX - o), e.pageY - i)),
                    { x: r, y: i }
                  );
                })(
                  t,
                  this.adapter.getWindowPageOffset(),
                  this.adapter.computeBoundingRect()
                )
              : { x: this.frame.width / 2, y: this.frame.height / 2 }),
            {
              startPoint: (t = {
                x: t.x - this.initialSize / 2,
                y: t.y - this.initialSize / 2,
              }),
              endPoint: {
                x: this.frame.width / 2 - this.initialSize / 2,
                y: this.frame.height / 2 - this.initialSize / 2,
              },
            }
          );
        }),
        (ai.prototype.runDeactivationUXLogicIfReady = function () {
          var e = this,
            t = ai.cssClasses.FG_DEACTIVATION,
            i = (r = this.activationState).hasDeactivationUXRun,
            r = r.isActivated;
          (!i && r) ||
            !this.activationAnimationHasEnded ||
            (this.rmBoundedActivationClasses(),
            this.adapter.addClass(t),
            (this.fgDeactivationRemovalTimer = setTimeout(function () {
              e.adapter.removeClass(t);
            }, ti.FG_DEACTIVATION_MS)));
        }),
        (ai.prototype.rmBoundedActivationClasses = function () {
          var e = ai.cssClasses.FG_ACTIVATION;
          this.adapter.removeClass(e),
            (this.activationAnimationHasEnded = !1),
            this.adapter.computeBoundingRect();
        }),
        (ai.prototype.resetActivationState = function () {
          var e = this;
          (this.previousActivationEvent = this.activationState.activationEvent),
            (this.activationState = this.defaultActivationState()),
            setTimeout(function () {
              return (e.previousActivationEvent = void 0);
            }, ai.numbers.TAP_DELAY_MS);
        }),
        (ai.prototype.deactivateImpl = function () {
          var e,
            t = this,
            i = this.activationState;
          i.isActivated &&
            ((e = r({}, i)),
            i.isProgrammatic
              ? (requestAnimationFrame(function () {
                  t.animateDeactivation(e);
                }),
                this.resetActivationState())
              : (this.deregisterDeactivationHandlers(),
                requestAnimationFrame(function () {
                  (t.activationState.hasDeactivationUXRun = !0),
                    t.animateDeactivation(e),
                    t.resetActivationState();
                })));
        }),
        (ai.prototype.animateDeactivation = function (e) {
          var t = e.wasActivatedByPointer;
          (e = e.wasElementMadeActive),
            (t || e) && this.runDeactivationUXLogicIfReady();
        }),
        (ai.prototype.layoutInternal = function () {
          this.frame = this.adapter.computeBoundingRect();
          var e = Math.max(this.frame.height, this.frame.width);
          (this.maxRadius = this.adapter.isUnbounded()
            ? e
            : Math.sqrt(
                Math.pow(this.frame.width, 2) + Math.pow(this.frame.height, 2)
              ) + ai.numbers.PADDING),
            (e = Math.floor(e * ai.numbers.INITIAL_ORIGIN_SCALE)),
            this.adapter.isUnbounded() && e % 2 != 0
              ? (this.initialSize = e - 1)
              : (this.initialSize = e),
            (this.fgScale = '' + this.maxRadius / this.initialSize),
            this.updateLayoutCssVars();
        }),
        (ai.prototype.updateLayoutCssVars = function () {
          var e = (r = ai.strings).VAR_FG_SIZE,
            t = r.VAR_LEFT,
            i = r.VAR_TOP,
            r = r.VAR_FG_SCALE;
          this.adapter.updateCssVariable(e, this.initialSize + 'px'),
            this.adapter.updateCssVariable(r, this.fgScale),
            this.adapter.isUnbounded() &&
              ((this.unboundedCoords = {
                left: Math.round(this.frame.width / 2 - this.initialSize / 2),
                top: Math.round(this.frame.height / 2 - this.initialSize / 2),
              }),
              this.adapter.updateCssVariable(
                t,
                this.unboundedCoords.left + 'px'
              ),
              this.adapter.updateCssVariable(
                i,
                this.unboundedCoords.top + 'px'
              ));
        }),
        ai),
      di = new WeakMap(),
      si = ye(e => t => {
        if (
          !(t instanceof Le) ||
          t instanceof $e ||
          'style' !== t.committer.name ||
          1 < t.committer.parts.length
        )
          throw new Error(
            'The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.'
          );
        const i = t.committer,
          r = i.element.style;
        let o = di.get(t);
        void 0 === o &&
          ((r.cssText = i.strings.join(' ')), di.set(t, (o = new Set()))),
          o.forEach(t => {
            t in e ||
              (o.delete(t),
              -1 === t.indexOf('-') ? (r[t] = null) : r.removeProperty(t));
          });
        for (const t in e)
          o.add(t),
            -1 === t.indexOf('-') ? (r[t] = e[t]) : r.setProperty(t, e[t]);
      });
    class ci extends Ht {
      constructor() {
        super(...arguments),
          (this.primary = !1),
          (this.accent = !1),
          (this.unbounded = !1),
          (this.disabled = !1),
          (this.activated = !1),
          (this.selected = !1),
          (this.internalUseStateLayerCustomProperties = !1),
          (this.hovering = !1),
          (this.bgFocused = !1),
          (this.fgActivation = !1),
          (this.fgDeactivation = !1),
          (this.fgScale = ''),
          (this.fgSize = ''),
          (this.translateStart = ''),
          (this.translateEnd = ''),
          (this.leftPos = ''),
          (this.topPos = ''),
          (this.mdcFoundationClass = ni);
      }
      get isActive() {
        return Ot(this.parentElement || this, ':active');
      }
      createAdapter() {
        return {
          browserSupportsCssVars: () => !0,
          isUnbounded: () => this.unbounded,
          isSurfaceActive: () => this.isActive,
          isSurfaceDisabled: () => this.disabled,
          addClass: e => {
            switch (e) {
              case 'mdc-ripple-upgraded--background-focused':
                this.bgFocused = !0;
                break;
              case 'mdc-ripple-upgraded--foreground-activation':
                this.fgActivation = !0;
                break;
              case 'mdc-ripple-upgraded--foreground-deactivation':
                this.fgDeactivation = !0;
            }
          },
          removeClass: e => {
            switch (e) {
              case 'mdc-ripple-upgraded--background-focused':
                this.bgFocused = !1;
                break;
              case 'mdc-ripple-upgraded--foreground-activation':
                this.fgActivation = !1;
                break;
              case 'mdc-ripple-upgraded--foreground-deactivation':
                this.fgDeactivation = !1;
            }
          },
          containsEventTarget: () => !0,
          registerInteractionHandler: () => {},
          deregisterInteractionHandler: () => {},
          registerDocumentInteractionHandler: () => {},
          deregisterDocumentInteractionHandler: () => {},
          registerResizeHandler: () => {},
          deregisterResizeHandler: () => {},
          updateCssVariable: (e, t) => {
            switch (e) {
              case '--mdc-ripple-fg-scale':
                this.fgScale = t;
                break;
              case '--mdc-ripple-fg-size':
                this.fgSize = t;
                break;
              case '--mdc-ripple-fg-translate-end':
                this.translateEnd = t;
                break;
              case '--mdc-ripple-fg-translate-start':
                this.translateStart = t;
                break;
              case '--mdc-ripple-left':
                this.leftPos = t;
                break;
              case '--mdc-ripple-top':
                this.topPos = t;
            }
          },
          computeBoundingRect: () =>
            (this.parentElement || this).getBoundingClientRect(),
          getWindowPageOffset: () => ({
            x: window.pageXOffset,
            y: window.pageYOffset,
          }),
        };
      }
      startPress(e) {
        this.waitForFoundation(() => {
          this.mdcFoundation.activate(e);
        });
      }
      endPress() {
        this.waitForFoundation(() => {
          this.mdcFoundation.deactivate();
        });
      }
      startFocus() {
        this.waitForFoundation(() => {
          this.mdcFoundation.handleFocus();
        });
      }
      endFocus() {
        this.waitForFoundation(() => {
          this.mdcFoundation.handleBlur();
        });
      }
      startHover() {
        this.hovering = !0;
      }
      endHover() {
        this.hovering = !1;
      }
      waitForFoundation(e) {
        this.mdcFoundation ? e() : this.updateComplete.then(e);
      }
      update(e) {
        e.has('disabled') && this.disabled && this.endHover(), super.update(e);
      }
      render() {
        var e = this.activated && (this.primary || !this.accent),
          t = this.selected && (this.primary || !this.accent);
        return (
          (t = {
            'mdc-ripple-surface--accent': this.accent,
            'mdc-ripple-surface--primary--activated': e,
            'mdc-ripple-surface--accent--activated':
              this.accent && this.activated,
            'mdc-ripple-surface--primary--selected': t,
            'mdc-ripple-surface--accent--selected':
              this.accent && this.selected,
            'mdc-ripple-surface--disabled': this.disabled,
            'mdc-ripple-surface--hover': this.hovering,
            'mdc-ripple-surface--primary': this.primary,
            'mdc-ripple-surface--selected': this.selected,
            'mdc-ripple-upgraded--background-focused': this.bgFocused,
            'mdc-ripple-upgraded--foreground-activation': this.fgActivation,
            'mdc-ripple-upgraded--foreground-deactivation': this.fgDeactivation,
            'mdc-ripple-upgraded--unbounded': this.unbounded,
            'mdc-ripple-surface--internal-use-state-layer-custom-properties':
              this.internalUseStateLayerCustomProperties,
          }),
          Ge`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${jt(t)}"
          style="${si({
            '--mdc-ripple-fg-scale': this.fgScale,
            '--mdc-ripple-fg-size': this.fgSize,
            '--mdc-ripple-fg-translate-end': this.translateEnd,
            '--mdc-ripple-fg-translate-start': this.translateStart,
            '--mdc-ripple-left': this.leftPos,
            '--mdc-ripple-top': this.topPos,
          })}"></div>`
        );
      }
    }
    o([at('.mdc-ripple-surface')], ci.prototype, 'mdcRoot', void 0),
      o([rt({ type: Boolean })], ci.prototype, 'primary', void 0),
      o([rt({ type: Boolean })], ci.prototype, 'accent', void 0),
      o([rt({ type: Boolean })], ci.prototype, 'unbounded', void 0),
      o([rt({ type: Boolean })], ci.prototype, 'disabled', void 0),
      o([rt({ type: Boolean })], ci.prototype, 'activated', void 0),
      o([rt({ type: Boolean })], ci.prototype, 'selected', void 0),
      o(
        [rt({ type: Boolean })],
        ci.prototype,
        'internalUseStateLayerCustomProperties',
        void 0
      ),
      o([ot()], ci.prototype, 'hovering', void 0),
      o([ot()], ci.prototype, 'bgFocused', void 0),
      o([ot()], ci.prototype, 'fgActivation', void 0),
      o([ot()], ci.prototype, 'fgDeactivation', void 0),
      o([ot()], ci.prototype, 'fgScale', void 0),
      o([ot()], ci.prototype, 'fgSize', void 0),
      o([ot()], ci.prototype, 'translateStart', void 0),
      o([ot()], ci.prototype, 'translateEnd', void 0),
      o([ot()], ci.prototype, 'leftPos', void 0),
      o([ot()], ci.prototype, 'topPos', void 0);
    var li = gt`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
    let pi = class extends ci {};
    (pi.styles = [li]), (pi = o([tt('mwc-ripple')], pi));
    class mi {
      constructor(e) {
        (this.startPress = t => {
          e().then(e => {
            e && e.startPress(t);
          });
        }),
          (this.endPress = () => {
            e().then(e => {
              e && e.endPress();
            });
          }),
          (this.startFocus = () => {
            e().then(e => {
              e && e.startFocus();
            });
          }),
          (this.endFocus = () => {
            e().then(e => {
              e && e.endFocus();
            });
          }),
          (this.startHover = () => {
            e().then(e => {
              e && e.startHover();
            });
          }),
          (this.endHover = () => {
            e().then(e => {
              e && e.endHover();
            });
          });
      }
    }
    class hi extends _t {
      constructor() {
        super(...arguments),
          (this.raised = !1),
          (this.unelevated = !1),
          (this.outlined = !1),
          (this.dense = !1),
          (this.disabled = !1),
          (this.trailingIcon = !1),
          (this.fullwidth = !1),
          (this.icon = ''),
          (this.label = ''),
          (this.expandContent = !1),
          (this.shouldRenderRipple = !1),
          (this.rippleHandlers = new mi(
            () => ((this.shouldRenderRipple = !0), this.ripple)
          ));
      }
      renderOverlay() {
        return Ge``;
      }
      renderRipple() {
        var e = this.raised || this.unelevated;
        return this.shouldRenderRipple
          ? Ge`<mwc-ripple class="ripple" .primary="${!e}" .disabled="${
              this.disabled
            }"></mwc-ripple>`
          : '';
      }
      focus() {
        const e = this.buttonElement;
        e && (this.rippleHandlers.startFocus(), e.focus());
      }
      blur() {
        const e = this.buttonElement;
        e && (this.rippleHandlers.endFocus(), e.blur());
      }
      getRenderClasses() {
        return jt({
          'mdc-button--raised': this.raised,
          'mdc-button--unelevated': this.unelevated,
          'mdc-button--outlined': this.outlined,
          'mdc-button--dense': this.dense,
        });
      }
      render() {
        return Ge`
      <button
          id="button"
          class="mdc-button ${this.getRenderClasses()}"
          ?disabled="${this.disabled}"
          aria-label="${this.label || this.icon}"
          @focus="${this.handleRippleFocus}"
          @blur="${this.handleRippleBlur}"
          @mousedown="${this.handleRippleActivate}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleActivate}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}">
        ${this.renderOverlay()}
        ${this.renderRipple()}
        <span class="leading-icon">
          <slot name="icon">
            ${this.icon && !this.trailingIcon ? this.renderIcon() : ''}
          </slot>
        </span>
        <span class="mdc-button__label">${this.label}</span>
        <span class="slot-container ${jt({ flex: this.expandContent })}">
          <slot></slot>
        </span>
        <span class="trailing-icon">
          <slot name="trailingIcon">
            ${this.icon && this.trailingIcon ? this.renderIcon() : ''}
          </slot>
        </span>
      </button>`;
      }
      renderIcon() {
        return Ge`
    <mwc-icon class="mdc-button__icon">
      ${this.icon}
    </mwc-icon>`;
      }
      handleRippleActivate(e) {
        const t = () => {
          window.removeEventListener('mouseup', t),
            this.handleRippleDeactivate();
        };
        window.addEventListener('mouseup', t),
          this.rippleHandlers.startPress(e);
      }
      handleRippleDeactivate() {
        this.rippleHandlers.endPress();
      }
      handleRippleMouseEnter() {
        this.rippleHandlers.startHover();
      }
      handleRippleMouseLeave() {
        this.rippleHandlers.endHover();
      }
      handleRippleFocus() {
        this.rippleHandlers.startFocus();
      }
      handleRippleBlur() {
        this.rippleHandlers.endFocus();
      }
    }
    (hi.shadowRootOptions = { mode: 'open', delegatesFocus: !0 }),
      o([rt({ type: Boolean, reflect: !0 })], hi.prototype, 'raised', void 0),
      o(
        [rt({ type: Boolean, reflect: !0 })],
        hi.prototype,
        'unelevated',
        void 0
      ),
      o([rt({ type: Boolean, reflect: !0 })], hi.prototype, 'outlined', void 0),
      o([rt({ type: Boolean })], hi.prototype, 'dense', void 0),
      o([rt({ type: Boolean, reflect: !0 })], hi.prototype, 'disabled', void 0),
      o(
        [rt({ type: Boolean, attribute: 'trailingicon' })],
        hi.prototype,
        'trailingIcon',
        void 0
      ),
      o(
        [rt({ type: Boolean, reflect: !0 })],
        hi.prototype,
        'fullwidth',
        void 0
      ),
      o([rt({ type: String })], hi.prototype, 'icon', void 0),
      o([rt({ type: String })], hi.prototype, 'label', void 0),
      o([rt({ type: Boolean })], hi.prototype, 'expandContent', void 0),
      o([at('#button')], hi.prototype, 'buttonElement', void 0),
      o([nt('mwc-ripple')], hi.prototype, 'ripple', void 0),
      o([ot()], hi.prototype, 'shouldRenderRipple', void 0),
      o([ct({ passive: !0 })], hi.prototype, 'handleRippleActivate', null);
    var ui = gt`.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase);position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:transparent}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;font-size:1.125rem;height:1.125rem;vertical-align:top;width:1.125rem}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon,.mdc-button--outlined .mdc-button__icon{margin-left:-4px;margin-right:8px}[dir=rtl] .mdc-button--raised .mdc-button__icon,[dir=rtl] .mdc-button--unelevated .mdc-button__icon,[dir=rtl] .mdc-button--outlined .mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir=rtl],.mdc-button--unelevated .mdc-button__icon[dir=rtl],.mdc-button--outlined .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:-4px}.mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:-4px}[dir=rtl] .mdc-button--raised .mdc-button__label+.mdc-button__icon,[dir=rtl] .mdc-button--unelevated .mdc-button__label+.mdc-button__icon,[dir=rtl] .mdc-button--outlined .mdc-button__label+.mdc-button__icon,.mdc-button--raised .mdc-button__label+.mdc-button__icon[dir=rtl],.mdc-button--unelevated .mdc-button__label+.mdc-button__icon[dir=rtl],.mdc-button--outlined .mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:-4px;margin-right:8px}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12)}.mdc-button--outlined{border-style:solid}.mdc-button{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px);padding:0 8px 0 8px}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised,.mdc-button--unelevated{padding:0 16px 0 16px;height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0, 0, 0, 0.12)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--raised .mdc-button__ripple,.mdc-button--unelevated .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px);padding:0 15px 0 15px;border-width:1px}.mdc-button--outlined:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button--outlined:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--outlined .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined:disabled{border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined.mdc-button--icon-trailing{padding:0 11px 0 15px}.mdc-button--outlined.mdc-button--icon-leading{padding:0 15px 0 11px}.mdc-button--outlined .mdc-button__ripple{top:-1px;left:-1px;border:1px solid transparent}.mdc-button--outlined .mdc-button__touch{left:-1px;width:calc(100% + 2 * 1px)}:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:transparent;vertical-align:top}:host([fullwidth]){width:100%}:host([raised]),:host([unelevated]){--mdc-ripple-color:#fff;--mdc-ripple-focus-opacity:0.24;--mdc-ripple-hover-opacity:0.08;--mdc-ripple-press-opacity:0.24}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon,.leading-icon ::slotted(*),.leading-icon .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;font-size:1.125rem;height:1.125rem;vertical-align:top;width:1.125rem}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,[dir=rtl] .leading-icon ::slotted(*),[dir=rtl] .leading-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl],.leading-icon ::slotted(*[dir=rtl]),.leading-icon .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}.slot-container{display:inline-flex;align-items:center;justify-content:center}.slot-container.flex{flex:auto}.mdc-button{flex:auto;overflow:hidden;padding-left:8px;padding-left:var(--mdc-button-horizontal-padding, 8px);padding-right:8px;padding-right:var(--mdc-button-horizontal-padding, 8px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-focus, var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)))}.mdc-button--raised:hover{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-active, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-disabled, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised,.mdc-button--unelevated{padding-left:16px;padding-left:var(--mdc-button-horizontal-padding, 16px);padding-right:16px;padding-right:var(--mdc-button-horizontal-padding, 16px)}.mdc-button--outlined{border-width:1px;border-width:var(--mdc-button-outline-width, 1px);padding-left:calc(16px - 1px);padding-left:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px));padding-right:calc(16px - 1px);padding-right:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px))}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-outline-color, rgba(0, 0, 0, 0.12))}.mdc-button--outlined .ripple{top:calc(-1 * 1px);top:calc(-1 * var(--mdc-button-outline-width, 1px));left:calc(-1 * 1px);left:calc(-1 * var(--mdc-button-outline-width, 1px));right:initial;right:initial;border-width:1px;border-width:var(--mdc-button-outline-width, 1px);border-style:solid;border-color:transparent}[dir=rtl] .mdc-button--outlined .ripple,.mdc-button--outlined .ripple[dir=rtl]{left:initial;left:initial;right:calc(-1 * 1px);right:calc(-1 * var(--mdc-button-outline-width, 1px))}.mdc-button--dense{height:28px;margin-top:0;margin-bottom:0}.mdc-button--dense .mdc-button__touch{display:none}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-button{color:rgba(0, 0, 0, 0.38);color:var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-button--raised,:host([disabled]) .mdc-button--unelevated{background-color:rgba(0, 0, 0, 0.12);background-color:var(--mdc-button-disabled-fill-color, rgba(0, 0, 0, 0.12))}:host([disabled]) .mdc-button--outlined{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-disabled-outline-color, rgba(0, 0, 0, 0.12))}`;
    let fi = class extends hi {};
    (fi.styles = [ui]), (fi = o([tt('mwc-button')], fi));
    var gi,
      bi,
      _i = {
        FIXED_CLASS: 'mdc-top-app-bar--fixed',
        FIXED_SCROLLED_CLASS: 'mdc-top-app-bar--fixed-scrolled',
        SHORT_CLASS: 'mdc-top-app-bar--short',
        SHORT_COLLAPSED_CLASS: 'mdc-top-app-bar--short-collapsed',
        SHORT_HAS_ACTION_ITEM_CLASS: 'mdc-top-app-bar--short-has-action-item',
      },
      xi = {
        DEBOUNCE_THROTTLE_RESIZE_TIME_MS: 100,
        MAX_TOP_APP_BAR_HEIGHT: 128,
      },
      vi = {
        ACTION_ITEM_SELECTOR: '.mdc-top-app-bar__action-item',
        NAVIGATION_EVENT: 'MDCTopAppBar:nav',
        NAVIGATION_ICON_SELECTOR: '.mdc-top-app-bar__navigation-icon',
        ROOT_SELECTOR: '.mdc-top-app-bar',
        TITLE_SELECTOR: '.mdc-top-app-bar__title',
      },
      yi =
        (t(wi, (gi = At)),
        Object.defineProperty(wi, 'strings', {
          get: function () {
            return vi;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(wi, 'cssClasses', {
          get: function () {
            return _i;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(wi, 'numbers', {
          get: function () {
            return xi;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(wi, 'defaultAdapter', {
          get: function () {
            return {
              addClass: function () {},
              removeClass: function () {},
              hasClass: function () {
                return !1;
              },
              setStyle: function () {},
              getTopAppBarHeight: function () {
                return 0;
              },
              notifyNavigationIconClicked: function () {},
              getViewportScrollY: function () {
                return 0;
              },
              getTotalActionItems: function () {
                return 0;
              },
            };
          },
          enumerable: !1,
          configurable: !0,
        }),
        (wi.prototype.handleTargetScroll = function () {}),
        (wi.prototype.handleWindowResize = function () {}),
        (wi.prototype.handleNavigationClick = function () {
          this.adapter.notifyNavigationIconClicked();
        }),
        wi);
    function wi(e) {
      return gi.call(this, r(r({}, wi.defaultAdapter), e)) || this;
    }
    function ki(e) {
      return (
        ((e = bi.call(this, e) || this).wasDocked = !0),
        (e.isDockedShowing = !0),
        (e.currentAppBarOffsetTop = 0),
        (e.isCurrentlyBeingResized = !1),
        (e.resizeThrottleId = 0),
        (e.resizeDebounceId = 0),
        (e.lastScrollPosition = e.adapter.getViewportScrollY()),
        (e.topAppBarHeight = e.adapter.getTopAppBarHeight()),
        e
      );
    }
    const Ei =
        (t(ki, (bi = yi)),
        (ki.prototype.destroy = function () {
          bi.prototype.destroy.call(this), this.adapter.setStyle('top', '');
        }),
        (ki.prototype.handleTargetScroll = function () {
          var e = Math.max(this.adapter.getViewportScrollY(), 0),
            t = e - this.lastScrollPosition;
          (this.lastScrollPosition = e),
            this.isCurrentlyBeingResized ||
              ((this.currentAppBarOffsetTop -= t),
              0 < this.currentAppBarOffsetTop
                ? (this.currentAppBarOffsetTop = 0)
                : Math.abs(this.currentAppBarOffsetTop) >
                    this.topAppBarHeight &&
                  (this.currentAppBarOffsetTop = -this.topAppBarHeight),
              this.moveTopAppBar());
        }),
        (ki.prototype.handleWindowResize = function () {
          var e = this;
          this.resizeThrottleId ||
            (this.resizeThrottleId = setTimeout(function () {
              (e.resizeThrottleId = 0), e.throttledResizeHandler();
            }, xi.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),
            (this.isCurrentlyBeingResized = !0),
            this.resizeDebounceId && clearTimeout(this.resizeDebounceId),
            (this.resizeDebounceId = setTimeout(function () {
              e.handleTargetScroll(),
                (e.isCurrentlyBeingResized = !1),
                (e.resizeDebounceId = 0);
            }, xi.DEBOUNCE_THROTTLE_RESIZE_TIME_MS));
        }),
        (ki.prototype.checkForUpdate = function () {
          var e = -this.topAppBarHeight,
            t = this.currentAppBarOffsetTop < 0;
          if (((e = this.currentAppBarOffsetTop > e), (t = t && e)))
            this.wasDocked = !1;
          else {
            if (!this.wasDocked) return (this.wasDocked = !0);
            if (this.isDockedShowing !== e)
              return (this.isDockedShowing = e), !0;
          }
          return t;
        }),
        (ki.prototype.moveTopAppBar = function () {
          var e;
          this.checkForUpdate() &&
            ((e = this.currentAppBarOffsetTop),
            Math.abs(e) >= this.topAppBarHeight &&
              (e = -xi.MAX_TOP_APP_BAR_HEIGHT),
            this.adapter.setStyle('top', e + 'px'));
        }),
        (ki.prototype.throttledResizeHandler = function () {
          var e = this.adapter.getTopAppBarHeight();
          this.topAppBarHeight !== e &&
            ((this.wasDocked = !1),
            (this.currentAppBarOffsetTop -= this.topAppBarHeight - e),
            (this.topAppBarHeight = e)),
            this.handleTargetScroll();
        }),
        ki),
      Ci = Pt ? { passive: !0 } : void 0;
    class Ai extends Ht {
      constructor() {
        super(...arguments),
          (this.centerTitle = !1),
          (this.handleTargetScroll = () => {
            this.mdcFoundation.handleTargetScroll();
          }),
          (this.handleNavigationClick = () => {
            this.mdcFoundation.handleNavigationClick();
          });
      }
      get scrollTarget() {
        return this._scrollTarget || window;
      }
      set scrollTarget(e) {
        this.unregisterScrollListener();
        var t = this.scrollTarget;
        (this._scrollTarget = e),
          this.updateRootPosition(),
          this.requestUpdate('scrollTarget', t),
          this.registerScrollListener();
      }
      updateRootPosition() {
        var e;
        this.mdcRoot &&
          ((e = this.scrollTarget === window),
          (this.mdcRoot.style.position = e ? '' : 'absolute'));
      }
      render() {
        let e = Ge`<span class="mdc-top-app-bar__title"><slot name="title"></slot></span>`;
        return (
          this.centerTitle &&
            (e = Ge`<section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-center">${e}</section>`),
          Ge`
      <header class="mdc-top-app-bar ${jt(this.barClasses())}">
      <div class="mdc-top-app-bar__row">
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start" id="navigation">
          <slot name="navigationIcon"
            @click=${this.handleNavigationClick}></slot>
          ${this.centerTitle ? null : e}
        </section>
        ${this.centerTitle ? e : null}
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" id="actions" role="toolbar">
          <slot name="actionItems"></slot>
        </section>
      </div>
    </header>
    <div class="${jt(this.contentClasses())}">
      <slot></slot>
    </div>
    `
        );
      }
      createAdapter() {
        return Object.assign(Object.assign({}, Ft(this.mdcRoot)), {
          setStyle: (e, t) => this.mdcRoot.style.setProperty(e, t),
          getTopAppBarHeight: () => this.mdcRoot.clientHeight,
          notifyNavigationIconClicked: () => {
            this.dispatchEvent(
              new Event(vi.NAVIGATION_EVENT, { bubbles: !0, cancelable: !0 })
            );
          },
          getViewportScrollY: () =>
            this.scrollTarget instanceof Window
              ? this.scrollTarget.pageYOffset
              : this.scrollTarget.scrollTop,
          getTotalActionItems: () =>
            this._actionItemsSlot.assignedNodes({ flatten: !0 }).length,
        });
      }
      registerListeners() {
        this.registerScrollListener();
      }
      unregisterListeners() {
        this.unregisterScrollListener();
      }
      registerScrollListener() {
        this.scrollTarget.addEventListener(
          'scroll',
          this.handleTargetScroll,
          Ci
        );
      }
      unregisterScrollListener() {
        this.scrollTarget.removeEventListener(
          'scroll',
          this.handleTargetScroll
        );
      }
      firstUpdated() {
        super.firstUpdated(),
          this.updateRootPosition(),
          this.registerListeners();
      }
      disconnectedCallback() {
        super.disconnectedCallback(), this.unregisterListeners();
      }
    }
    o([at('.mdc-top-app-bar')], Ai.prototype, 'mdcRoot', void 0),
      o(
        [at('slot[name="actionItems"]')],
        Ai.prototype,
        '_actionItemsSlot',
        void 0
      ),
      o([rt({ type: Boolean })], Ai.prototype, 'centerTitle', void 0),
      o([rt({ type: Object })], Ai.prototype, 'scrollTarget', null);
    class Si extends Ai {
      constructor() {
        super(...arguments),
          (this.mdcFoundationClass = Ei),
          (this.prominent = !1),
          (this.dense = !1),
          (this.handleResize = () => {
            this.mdcFoundation.handleWindowResize();
          });
      }
      barClasses() {
        return {
          'mdc-top-app-bar--dense': this.dense,
          'mdc-top-app-bar--prominent': this.prominent,
          'center-title': this.centerTitle,
        };
      }
      contentClasses() {
        return {
          'mdc-top-app-bar--fixed-adjust': !this.dense && !this.prominent,
          'mdc-top-app-bar--dense-fixed-adjust': this.dense && !this.prominent,
          'mdc-top-app-bar--prominent-fixed-adjust':
            !this.dense && this.prominent,
          'mdc-top-app-bar--dense-prominent-fixed-adjust':
            this.dense && this.prominent,
        };
      }
      registerListeners() {
        super.registerListeners(),
          window.addEventListener('resize', this.handleResize, Ci);
      }
      unregisterListeners() {
        super.unregisterListeners(),
          window.removeEventListener('resize', this.handleResize);
      }
    }
    o([rt({ type: Boolean, reflect: !0 })], Si.prototype, 'prominent', void 0),
      o([rt({ type: Boolean, reflect: !0 })], Si.prototype, 'dense', void 0);
    var Ii = gt`.mdc-top-app-bar{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee);color:white;display:flex;position:fixed;flex-direction:column;justify-content:space-between;box-sizing:border-box;width:100%;z-index:4}.mdc-top-app-bar .mdc-top-app-bar__action-item,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon{color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-top-app-bar .mdc-top-app-bar__action-item::before,.mdc-top-app-bar .mdc-top-app-bar__action-item::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::after{background-color:#fff;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-primary, #fff))}.mdc-top-app-bar .mdc-top-app-bar__action-item:hover::before,.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-surface--hover::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:hover::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-surface--hover::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded--background-focused::before,.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):focus::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded--background-focused::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded)::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):active::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-top-app-bar__row{display:flex;position:relative;box-sizing:border-box;width:100%;height:64px}.mdc-top-app-bar__section{display:inline-flex;flex:1 1 auto;align-items:center;min-width:0;padding:8px 12px;z-index:1}.mdc-top-app-bar__section--align-start{justify-content:flex-start;order:-1}.mdc-top-app-bar__section--align-end{justify-content:flex-end;order:1}.mdc-top-app-bar__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:0.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, 0.0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit);padding-left:20px;padding-right:0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:1}[dir=rtl] .mdc-top-app-bar__title,.mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:20px}.mdc-top-app-bar--short-collapsed{border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:24px;border-bottom-left-radius:0}[dir=rtl] .mdc-top-app-bar--short-collapsed,.mdc-top-app-bar--short-collapsed[dir=rtl]{border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:24px}.mdc-top-app-bar--short{top:0;right:auto;left:0;width:100%;transition:width 250ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-top-app-bar--short,.mdc-top-app-bar--short[dir=rtl]{right:0;left:auto}.mdc-top-app-bar--short .mdc-top-app-bar__row{height:56px}.mdc-top-app-bar--short .mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short .mdc-top-app-bar__title{transition:opacity 200ms cubic-bezier(0.4, 0, 0.2, 1);opacity:1}.mdc-top-app-bar--short-collapsed{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12);width:56px;transition:width 300ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__title{display:none}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__action-item{transition:padding 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item{width:112px}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}[dir=rtl] .mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end,.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end[dir=rtl]{padding-left:12px;padding-right:0}.mdc-top-app-bar--dense .mdc-top-app-bar__row{height:48px}.mdc-top-app-bar--dense .mdc-top-app-bar__section{padding:0 4px}.mdc-top-app-bar--dense .mdc-top-app-bar__title{padding-left:12px;padding-right:0}[dir=rtl] .mdc-top-app-bar--dense .mdc-top-app-bar__title,.mdc-top-app-bar--dense .mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:12px}.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:128px}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{align-self:flex-end;padding-bottom:2px}.mdc-top-app-bar--prominent .mdc-top-app-bar__action-item,.mdc-top-app-bar--prominent .mdc-top-app-bar__navigation-icon{align-self:flex-start}.mdc-top-app-bar--fixed{transition:box-shadow 200ms linear}.mdc-top-app-bar--fixed-scrolled{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12);transition:box-shadow 200ms linear}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:96px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__section{padding:0 12px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-left:20px;padding-right:0;padding-bottom:9px}[dir=rtl] .mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title,.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:20px}.mdc-top-app-bar--fixed-adjust{padding-top:64px}.mdc-top-app-bar--dense-fixed-adjust{padding-top:48px}.mdc-top-app-bar--short-fixed-adjust{padding-top:56px}.mdc-top-app-bar--prominent-fixed-adjust{padding-top:128px}.mdc-top-app-bar--dense-prominent-fixed-adjust{padding-top:96px}@media(max-width: 599px){.mdc-top-app-bar__row{height:56px}.mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short{transition:width 200ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed{transition:width 250ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}[dir=rtl] .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end,.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end[dir=rtl]{padding-left:12px;padding-right:0}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-bottom:6px}.mdc-top-app-bar--fixed-adjust{padding-top:56px}}:host{display:block}.mdc-top-app-bar{color:#fff;color:var(--mdc-theme-on-primary, #fff);width:100%;width:var(--mdc-top-app-bar-width, 100%)}.mdc-top-app-bar--prominent #navigation ::slotted(*),.mdc-top-app-bar--prominent #actions ::slotted(*){align-self:flex-start}#navigation ::slotted(*),#actions ::slotted(*){--mdc-icon-button-ripple-opacity: 0.24}.mdc-top-app-bar--short-collapsed #actions ::slotted(*){transition:padding 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar__section--align-center{justify-content:center}.mdc-top-app-bar__section--align-center .mdc-top-app-bar__title{padding-left:0;padding-right:0}.center-title .mdc-top-app-bar__section--align-start,.center-title .mdc-top-app-bar__section--align-end{flex-basis:0}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__section--align-center .mdc-top-app-bar__title{padding-left:0;padding-right:0}.mdc-top-app-bar--fixed-scrolled{box-shadow:var(--mdc-top-app-bar-fixed-box-shadow, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}`;
    let Ti = class extends Si {};
    function Ri(e, t, i) {
      if (void 0 !== t)
        return (function (e, t, i) {
          const r = e.constructor;
          if (!i && !(i = r.getPropertyDescriptor(t, `__${t}`)))
            throw new Error(
              '@ariaProperty must be used after a @property decorator'
            );
          const o = i;
          let a = '';
          if (!o.set)
            throw new Error(`@ariaProperty requires a setter for ${t}`);
          const n = {
            configurable: !0,
            enumerable: !0,
            set(e) {
              var i;
              '' === a && ((i = r.getPropertyOptions(t)), (a = i.attribute)),
                this.hasAttribute(a) && this.removeAttribute(a),
                o.set.call(this, e);
            },
          };
          return (
            o.get &&
              (n.get = function () {
                return o.get.call(this);
              }),
            n
          );
        })(e, t, i);
      throw new Error('@ariaProperty only supports TypeScript Decorators');
    }
    (Ti.styles = [Ii]), (Ti = o([tt('mwc-top-app-bar')], Ti));
    class Oi extends _t {
      constructor() {
        super(...arguments),
          (this.disabled = !1),
          (this.icon = ''),
          (this.shouldRenderRipple = !1),
          (this.rippleHandlers = new mi(
            () => ((this.shouldRenderRipple = !0), this.ripple)
          ));
      }
      renderRipple() {
        return this.shouldRenderRipple
          ? Ge`
            <mwc-ripple
                .disabled="${this.disabled}"
                unbounded>
            </mwc-ripple>`
          : '';
      }
      focus() {
        const e = this.buttonElement;
        e && (this.rippleHandlers.startFocus(), e.focus());
      }
      blur() {
        const e = this.buttonElement;
        e && (this.rippleHandlers.endFocus(), e.blur());
      }
      render() {
        return Ge`<button
        class="mdc-icon-button"
        aria-label="${this.ariaLabel || this.icon}"
        ?disabled="${this.disabled}"
        @focus="${this.handleRippleFocus}"
        @blur="${this.handleRippleBlur}"
        @mousedown="${this.handleRippleMouseDown}"
        @mouseenter="${this.handleRippleMouseEnter}"
        @mouseleave="${this.handleRippleMouseLeave}"
        @touchstart="${this.handleRippleTouchStart}"
        @touchend="${this.handleRippleDeactivate}"
        @touchcancel="${this.handleRippleDeactivate}"
    >${this.renderRipple()}
    <i class="material-icons">${this.icon}</i>
    <span
      ><slot></slot
    ></span>
  </button>`;
      }
      handleRippleMouseDown(e) {
        const t = () => {
          window.removeEventListener('mouseup', t),
            this.handleRippleDeactivate();
        };
        window.addEventListener('mouseup', t),
          this.rippleHandlers.startPress(e);
      }
      handleRippleTouchStart(e) {
        this.rippleHandlers.startPress(e);
      }
      handleRippleDeactivate() {
        this.rippleHandlers.endPress();
      }
      handleRippleMouseEnter() {
        this.rippleHandlers.startHover();
      }
      handleRippleMouseLeave() {
        this.rippleHandlers.endHover();
      }
      handleRippleFocus() {
        this.rippleHandlers.startFocus();
      }
      handleRippleBlur() {
        this.rippleHandlers.endFocus();
      }
    }
    o([rt({ type: Boolean, reflect: !0 })], Oi.prototype, 'disabled', void 0),
      o([rt({ type: String })], Oi.prototype, 'icon', void 0),
      o(
        [Ri, rt({ type: String, attribute: 'aria-label' })],
        Oi.prototype,
        'ariaLabel',
        void 0
      ),
      o([at('button')], Oi.prototype, 'buttonElement', void 0),
      o([nt('mwc-ripple')], Oi.prototype, 'ripple', void 0),
      o([ot()], Oi.prototype, 'shouldRenderRipple', void 0),
      o([ct({ passive: !0 })], Oi.prototype, 'handleRippleMouseDown', null),
      o([ct({ passive: !0 })], Oi.prototype, 'handleRippleTouchStart', null);
    var Li = gt`.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;font-size:24px;text-decoration:none;cursor:pointer;user-select:none;width:48px;height:48px;padding:12px}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button:disabled{color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38))}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button--touch{margin-top:0px;margin-bottom:0px}:host{display:inline-block;outline:none;--mdc-ripple-color: currentcolor;-webkit-tap-highlight-color:transparent}:host([disabled]){pointer-events:none}:host,.mdc-icon-button{vertical-align:top}.mdc-icon-button{width:var(--mdc-icon-button-size, 48px);height:var(--mdc-icon-button-size, 48px);padding:calc( (var(--mdc-icon-button-size, 48px) - var(--mdc-icon-size, 24px)) / 2 )}.mdc-icon-button>i{position:absolute;top:0;padding-top:inherit}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block;width:var(--mdc-icon-size, 24px);height:var(--mdc-icon-size, 24px)}`;
    let Fi = class extends Oi {};
    (Fi.styles = [Li]), (Fi = o([tt('mwc-icon-button')], Fi));
    class Ni extends _t {
      constructor() {
        super(...arguments),
          (this.mini = !1),
          (this.exited = !1),
          (this.disabled = !1),
          (this.extended = !1),
          (this.showIconAtEnd = !1),
          (this.reducedTouchTarget = !1),
          (this.icon = ''),
          (this.label = ''),
          (this.shouldRenderRipple = !1),
          (this.useStateLayerCustomProperties = !1),
          (this.rippleHandlers = new mi(
            () => ((this.shouldRenderRipple = !0), this.ripple)
          ));
      }
      render() {
        var e = this.mini && !this.reducedTouchTarget,
          t = {
            'mdc-fab--mini': this.mini,
            'mdc-fab--touch': e,
            'mdc-fab--exited': this.exited,
            'mdc-fab--extended': this.extended,
            'icon-end': this.showIconAtEnd,
          };
        return (
          (e = this.label || this.icon),
          Ge`<button
          class="mdc-fab ${jt(t)}"
          ?disabled="${this.disabled}"
          aria-label="${e}"
          @mouseenter=${this.handleRippleMouseEnter}
          @mouseleave=${this.handleRippleMouseLeave}
          @focus=${this.handleRippleFocus}
          @blur=${this.handleRippleBlur}
          @mousedown=${this.handleRippleActivate}
          @touchstart=${this.handleRippleStartPress}
          @touchend=${this.handleRippleDeactivate}
          @touchcancel=${this.handleRippleDeactivate}><!--
        -->${this.renderBeforeRipple()}<!--
        -->${this.renderRipple()}<!--
        -->${this.showIconAtEnd ? this.renderLabel() : ''}<!--
        --><span class="material-icons mdc-fab__icon"><!--
          --><slot name="icon">${this.icon}</slot><!--
       --></span><!--
        -->${this.showIconAtEnd ? '' : this.renderLabel()}<!--
        -->${this.renderTouchTarget()}<!--
      --></button>`
        );
      }
      renderIcon() {
        return Ge``;
      }
      renderTouchTarget() {
        var e = this.mini && !this.reducedTouchTarget;
        return Ge`${e ? Ge`<div class="mdc-fab__touch"></div>` : ''}`;
      }
      renderLabel() {
        var e = '' !== this.label && this.extended;
        return Ge`${
          e ? Ge`<span class="mdc-fab__label">${this.label}</span>` : ''
        }`;
      }
      renderBeforeRipple() {
        return Ge``;
      }
      renderRipple() {
        return this.shouldRenderRipple
          ? Ge`<mwc-ripple class="ripple"
        .internalUseStateLayerCustomProperties="${this.useStateLayerCustomProperties}"
         ></mwc-ripple>`
          : '';
      }
      handleRippleActivate(e) {
        const t = () => {
          window.removeEventListener('mouseup', t),
            this.handleRippleDeactivate();
        };
        window.addEventListener('mouseup', t), this.handleRippleStartPress(e);
      }
      handleRippleStartPress(e) {
        this.rippleHandlers.startPress(e);
      }
      handleRippleDeactivate() {
        this.rippleHandlers.endPress();
      }
      handleRippleMouseEnter() {
        this.rippleHandlers.startHover();
      }
      handleRippleMouseLeave() {
        this.rippleHandlers.endHover();
      }
      handleRippleFocus() {
        this.rippleHandlers.startFocus();
      }
      handleRippleBlur() {
        this.rippleHandlers.endFocus();
      }
    }
    (Ni.shadowRootOptions = { mode: 'open', delegatesFocus: !0 }),
      o([nt('mwc-ripple')], Ni.prototype, 'ripple', void 0),
      o([rt({ type: Boolean })], Ni.prototype, 'mini', void 0),
      o([rt({ type: Boolean })], Ni.prototype, 'exited', void 0),
      o([rt({ type: Boolean })], Ni.prototype, 'disabled', void 0),
      o([rt({ type: Boolean })], Ni.prototype, 'extended', void 0),
      o([rt({ type: Boolean })], Ni.prototype, 'showIconAtEnd', void 0),
      o([rt({ type: Boolean })], Ni.prototype, 'reducedTouchTarget', void 0),
      o([rt()], Ni.prototype, 'icon', void 0),
      o([rt()], Ni.prototype, 'label', void 0),
      o([ot()], Ni.prototype, 'shouldRenderRipple', void 0),
      o([ot()], Ni.prototype, 'useStateLayerCustomProperties', void 0),
      o([ct({ passive: !0 })], Ni.prototype, 'handleRippleStartPress', null);
    var Di = gt`:host .mdc-fab .material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{outline:none;--mdc-ripple-color: currentcolor;user-select:none;-webkit-tap-highlight-color:transparent;display:inline-flex;-webkit-tap-highlight-color:transparent;display:inline-flex;outline:none;user-select:none}:host .mdc-touch-target-wrapper{display:inline}:host .mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}:host .mdc-fab{position:relative;display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;width:56px;height:56px;padding:0;border:none;fill:currentColor;text-decoration:none;cursor:pointer;user-select:none;-moz-appearance:none;-webkit-appearance:none;overflow:visible;transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),opacity 15ms linear 30ms,transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1)}:host .mdc-fab .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}:host .mdc-fab::-moz-focus-inner{padding:0;border:0}:host .mdc-fab:hover{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}:host .mdc-fab.mdc-ripple-upgraded--background-focused,:host .mdc-fab:not(.mdc-ripple-upgraded):focus{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}:host .mdc-fab:active,:host .mdc-fab:focus:active{box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0,0,0,.12)}:host .mdc-fab:active,:host .mdc-fab:focus{outline:none}:host .mdc-fab:hover{cursor:pointer}:host .mdc-fab>svg{width:100%}:host .mdc-fab--mini{width:40px;height:40px}:host .mdc-fab--extended{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase);border-radius:24px;padding-left:20px;padding-right:20px;width:auto;max-width:100%;height:48px;line-height:normal}:host .mdc-fab--extended .mdc-fab__ripple{border-radius:24px}:host .mdc-fab--extended .mdc-fab__icon{margin-left:calc(12px - 20px);margin-right:12px}[dir=rtl] :host .mdc-fab--extended .mdc-fab__icon,:host .mdc-fab--extended .mdc-fab__icon[dir=rtl]{margin-left:12px;margin-right:calc(12px - 20px)}:host .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon{margin-left:12px;margin-right:calc(12px - 20px)}[dir=rtl] :host .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon,:host .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon[dir=rtl]{margin-left:calc(12px - 20px);margin-right:12px}:host .mdc-fab--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}:host .mdc-fab--touch .mdc-fab__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}:host .mdc-fab::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:"";pointer-events:none}:host .mdc-fab__label{justify-content:flex-start;text-overflow:ellipsis;white-space:nowrap;overflow-x:hidden;overflow-y:visible}:host .mdc-fab__icon{transition:transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);fill:currentColor;will-change:transform}:host .mdc-fab .mdc-fab__icon{display:inline-flex;align-items:center;justify-content:center}:host .mdc-fab--exited{transform:scale(0);opacity:0;transition:opacity 15ms linear 150ms,transform 180ms 0ms cubic-bezier(0.4, 0, 1, 1)}:host .mdc-fab--exited .mdc-fab__icon{transform:scale(0);transition:transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1)}:host .mdc-fab{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12)}:host .mdc-fab .mdc-fab__icon{width:24px;height:24px;font-size:24px}:host .mdc-fab,:host .mdc-fab:not(:disabled) .mdc-fab__icon,:host .mdc-fab:not(:disabled) .mdc-fab__label,:host .mdc-fab:disabled .mdc-fab__icon,:host .mdc-fab:disabled .mdc-fab__label{color:#fff;color:var(--mdc-theme-on-secondary, #fff)}:host .mdc-fab:not(.mdc-fab--extended){border-radius:50%}:host .mdc-fab:not(.mdc-fab--extended) .mdc-fab__ripple{border-radius:50%}:host .mdc-fab{position:relative;display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;width:56px;height:56px;padding:0;border:none;fill:currentColor;text-decoration:none;cursor:pointer;user-select:none;-moz-appearance:none;-webkit-appearance:none;overflow:visible;transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),opacity 15ms linear 30ms,transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1)}:host .mdc-fab .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}:host .mdc-fab::-moz-focus-inner{padding:0;border:0}:host .mdc-fab:hover{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}:host .mdc-fab.mdc-ripple-upgraded--background-focused,:host .mdc-fab:not(.mdc-ripple-upgraded):focus{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}:host .mdc-fab:active,:host .mdc-fab:focus:active{box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0,0,0,.12)}:host .mdc-fab:active,:host .mdc-fab:focus{outline:none}:host .mdc-fab:hover{cursor:pointer}:host .mdc-fab>svg{width:100%}:host .mdc-fab--mini{width:40px;height:40px}:host .mdc-fab--extended{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase);border-radius:24px;padding-left:20px;padding-right:20px;width:auto;max-width:100%;height:48px;line-height:normal}:host .mdc-fab--extended .mdc-fab__ripple{border-radius:24px}:host .mdc-fab--extended .mdc-fab__icon{margin-left:calc(12px - 20px);margin-right:12px}[dir=rtl] :host .mdc-fab--extended .mdc-fab__icon,:host .mdc-fab--extended .mdc-fab__icon[dir=rtl]{margin-left:12px;margin-right:calc(12px - 20px)}:host .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon{margin-left:12px;margin-right:calc(12px - 20px)}[dir=rtl] :host .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon,:host .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon[dir=rtl]{margin-left:calc(12px - 20px);margin-right:12px}:host .mdc-fab--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}:host .mdc-fab--touch .mdc-fab__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}:host .mdc-fab::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:"";pointer-events:none}:host .mdc-fab__label{justify-content:flex-start;text-overflow:ellipsis;white-space:nowrap;overflow-x:hidden;overflow-y:visible}:host .mdc-fab__icon{transition:transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);fill:currentColor;will-change:transform}:host .mdc-fab .mdc-fab__icon{display:inline-flex;align-items:center;justify-content:center}:host .mdc-fab--exited{transform:scale(0);opacity:0;transition:opacity 15ms linear 150ms,transform 180ms 0ms cubic-bezier(0.4, 0, 1, 1)}:host .mdc-fab--exited .mdc-fab__icon{transform:scale(0);transition:transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1)}:host .mdc-fab .ripple{overflow:hidden}:host .mdc-fab:not(.mdc-fab--extended) .ripple{border-radius:50%}:host .mdc-fab .mdc-fab__label{z-index:0}:host .mdc-fab:not(.mdc-fab--extended) .ripple{border-radius:50%}:host .mdc-fab .mdc-fab__icon ::slotted(*){width:inherit;height:inherit;font-size:inherit}:host .mdc-fab--extended.mdc-fab--exited .mdc-fab__icon ::slotted(*){transform:scale(0);transition:transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1)}:host .mdc-fab{padding-top:0px;padding-top:max(0px, var(--mdc-fab-focus-outline-width, 0px));padding-right:0px;padding-right:max(0px, var(--mdc-fab-focus-outline-width, 0px));padding-bottom:0px;padding-bottom:max(0px, var(--mdc-fab-focus-outline-width, 0px));padding-left:0px;padding-left:max(0px, var(--mdc-fab-focus-outline-width, 0px));box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-fab-box-shadow, 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12))}:host .mdc-fab:not(:disabled).mdc-ripple-upgraded--background-focused,:host .mdc-fab:not(:disabled):not(.mdc-ripple-upgraded):focus{border-color:initial;border-color:var(--mdc-fab-focus-outline-color, initial)}:host .mdc-fab:not(:disabled).mdc-ripple-upgraded--background-focused,:host .mdc-fab:not(:disabled):not(.mdc-ripple-upgraded):focus{border-style:solid;border-width:var(--mdc-fab-focus-outline-width, 0px);padding-top:0px;padding-top:max(calc(0px - var(--mdc-fab-focus-outline-width, 0px)), calc(calc(0px - var(--mdc-fab-focus-outline-width, 0px)) * -1));padding-right:0px;padding-right:max(calc(0px - var(--mdc-fab-focus-outline-width, 0px)), calc(calc(0px - var(--mdc-fab-focus-outline-width, 0px)) * -1));padding-bottom:0px;padding-bottom:max(calc(0px - var(--mdc-fab-focus-outline-width, 0px)), calc(calc(0px - var(--mdc-fab-focus-outline-width, 0px)) * -1));padding-left:0px;padding-left:max(calc(0px - var(--mdc-fab-focus-outline-width, 0px)), calc(calc(0px - var(--mdc-fab-focus-outline-width, 0px)) * -1))}:host .mdc-fab:hover,:host .mdc-fab:focus{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-fab-box-shadow, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}:host .mdc-fab:active{box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-fab-box-shadow, 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12))}:host .mdc-fab .ripple{overflow:hidden}:host .mdc-fab .mdc-fab__label{z-index:0}:host .mdc-fab:not(.mdc-fab--extended) .ripple{border-radius:50%}:host .mdc-fab.mdc-fab--extended .ripple{border-radius:24px}:host .mdc-fab .mdc-fab__icon{width:24px;width:var(--mdc-icon-size, 24px);height:24px;height:var(--mdc-icon-size, 24px);font-size:24px;font-size:var(--mdc-icon-size, 24px);transition:transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);fill:currentColor;will-change:transform;display:inline-flex;align-items:center;justify-content:center}:host .mdc-fab.mdc-fab--extended{padding-top:0px;padding-top:max(0px, var(--mdc-fab-focus-outline-width, 0px));padding-right:20px;padding-right:max(var(--mdc-fab-extended-label-padding, 20px), var(--mdc-fab-focus-outline-width, 0px));padding-bottom:0px;padding-bottom:max(0px, var(--mdc-fab-focus-outline-width, 0px));padding-left:20px;padding-left:max(var(--mdc-fab-extended-label-padding, 20px), var(--mdc-fab-focus-outline-width, 0px))}:host .mdc-fab.mdc-fab--extended:not(:disabled).mdc-ripple-upgraded--background-focused,:host .mdc-fab.mdc-fab--extended:not(:disabled):not(.mdc-ripple-upgraded):focus{border-style:solid;border-width:var(--mdc-fab-focus-outline-width, 0px);padding-top:0px;padding-top:max(calc(0px - var(--mdc-fab-focus-outline-width, 0px)), calc(calc(0px - var(--mdc-fab-focus-outline-width, 0px)) * -1));padding-right:20px;padding-right:max(calc(var(--mdc-fab-extended-label-padding, 20px) - var(--mdc-fab-focus-outline-width, 0px)), calc(calc(var(--mdc-fab-extended-label-padding, 20px) - var(--mdc-fab-focus-outline-width, 0px)) * -1));padding-bottom:0px;padding-bottom:max(calc(0px - var(--mdc-fab-focus-outline-width, 0px)), calc(calc(0px - var(--mdc-fab-focus-outline-width, 0px)) * -1));padding-left:20px;padding-left:max(calc(var(--mdc-fab-extended-label-padding, 20px) - var(--mdc-fab-focus-outline-width, 0px)), calc(calc(var(--mdc-fab-extended-label-padding, 20px) - var(--mdc-fab-focus-outline-width, 0px)) * -1))}:host .mdc-fab.mdc-fab--extended.icon-end .mdc-fab__icon{margin-left:12px;margin-left:var(--mdc-fab-extended-icon-padding, 12px);margin-right:calc(12px - 20px);margin-right:calc(var(--mdc-fab-extended-icon-padding, 12px) - var(--mdc-fab-extended-label-padding, 20px))}[dir=rtl] :host .mdc-fab.mdc-fab--extended.icon-end .mdc-fab__icon,:host .mdc-fab.mdc-fab--extended.icon-end .mdc-fab__icon[dir=rtl]{margin-left:calc(12px - 20px);margin-left:calc(var(--mdc-fab-extended-icon-padding, 12px) - var(--mdc-fab-extended-label-padding, 20px));margin-right:12px;margin-right:var(--mdc-fab-extended-icon-padding, 12px)}`;
    let $i = class extends Ni {};
    ($i.styles = [Di]), ($i = o([tt('mwc-fab')], $i));
    var Pi,
      zi = {
        CLOSING: 'mdc-snackbar--closing',
        OPEN: 'mdc-snackbar--open',
        OPENING: 'mdc-snackbar--opening',
      },
      Mi = {
        ACTION_SELECTOR: '.mdc-snackbar__action',
        ARIA_LIVE_LABEL_TEXT_ATTR: 'data-mdc-snackbar-label-text',
        CLOSED_EVENT: 'MDCSnackbar:closed',
        CLOSING_EVENT: 'MDCSnackbar:closing',
        DISMISS_SELECTOR: '.mdc-snackbar__dismiss',
        LABEL_SELECTOR: '.mdc-snackbar__label',
        OPENED_EVENT: 'MDCSnackbar:opened',
        OPENING_EVENT: 'MDCSnackbar:opening',
        REASON_ACTION: 'action',
        REASON_DISMISS: 'dismiss',
        SURFACE_SELECTOR: '.mdc-snackbar__surface',
      },
      Hi = {
        DEFAULT_AUTO_DISMISS_TIMEOUT_MS: 5e3,
        INDETERMINATE: -1,
        MAX_AUTO_DISMISS_TIMEOUT_MS: 1e4,
        MIN_AUTO_DISMISS_TIMEOUT_MS: 4e3,
        SNACKBAR_ANIMATION_CLOSE_TIME_MS: 75,
        SNACKBAR_ANIMATION_OPEN_TIME_MS: 150,
        ARIA_LIVE_DELAY_MS: 1e3,
      },
      Bi = zi.OPENING,
      Vi = zi.OPEN,
      Ui = zi.CLOSING,
      ji = Mi.REASON_ACTION,
      Gi = Mi.REASON_DISMISS;
    function Xi(e) {
      return (
        ((e = Pi.call(this, r(r({}, Xi.defaultAdapter), e)) || this).opened =
          !1),
        (e.animationFrame = 0),
        (e.animationTimer = 0),
        (e.autoDismissTimer = 0),
        (e.autoDismissTimeoutMs = Hi.DEFAULT_AUTO_DISMISS_TIMEOUT_MS),
        (e.closeOnEscape = !0),
        e
      );
    }
    const Ki =
      (t(Xi, (Pi = At)),
      Object.defineProperty(Xi, 'cssClasses', {
        get: function () {
          return zi;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(Xi, 'strings', {
        get: function () {
          return Mi;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(Xi, 'numbers', {
        get: function () {
          return Hi;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(Xi, 'defaultAdapter', {
        get: function () {
          return {
            addClass: function () {},
            announce: function () {},
            notifyClosed: function () {},
            notifyClosing: function () {},
            notifyOpened: function () {},
            notifyOpening: function () {},
            removeClass: function () {},
          };
        },
        enumerable: !1,
        configurable: !0,
      }),
      (Xi.prototype.destroy = function () {
        this.clearAutoDismissTimer(),
          cancelAnimationFrame(this.animationFrame),
          (this.animationFrame = 0),
          clearTimeout(this.animationTimer),
          (this.animationTimer = 0),
          this.adapter.removeClass(Bi),
          this.adapter.removeClass(Vi),
          this.adapter.removeClass(Ui);
      }),
      (Xi.prototype.open = function () {
        var e = this;
        this.clearAutoDismissTimer(),
          (this.opened = !0),
          this.adapter.notifyOpening(),
          this.adapter.removeClass(Ui),
          this.adapter.addClass(Bi),
          this.adapter.announce(),
          this.runNextAnimationFrame(function () {
            e.adapter.addClass(Vi),
              (e.animationTimer = setTimeout(function () {
                var t = e.getTimeoutMs();
                e.handleAnimationTimerEnd(),
                  e.adapter.notifyOpened(),
                  t !== Hi.INDETERMINATE &&
                    (e.autoDismissTimer = setTimeout(function () {
                      e.close(Gi);
                    }, t));
              }, Hi.SNACKBAR_ANIMATION_OPEN_TIME_MS));
          });
      }),
      (Xi.prototype.close = function (e) {
        var t = this;
        void 0 === e && (e = ''),
          this.opened &&
            (cancelAnimationFrame(this.animationFrame),
            (this.animationFrame = 0),
            this.clearAutoDismissTimer(),
            (this.opened = !1),
            this.adapter.notifyClosing(e),
            this.adapter.addClass(zi.CLOSING),
            this.adapter.removeClass(zi.OPEN),
            this.adapter.removeClass(zi.OPENING),
            clearTimeout(this.animationTimer),
            (this.animationTimer = setTimeout(function () {
              t.handleAnimationTimerEnd(), t.adapter.notifyClosed(e);
            }, Hi.SNACKBAR_ANIMATION_CLOSE_TIME_MS)));
      }),
      (Xi.prototype.isOpen = function () {
        return this.opened;
      }),
      (Xi.prototype.getTimeoutMs = function () {
        return this.autoDismissTimeoutMs;
      }),
      (Xi.prototype.setTimeoutMs = function (e) {
        var t = Hi.MIN_AUTO_DISMISS_TIMEOUT_MS,
          i = Hi.MAX_AUTO_DISMISS_TIMEOUT_MS;
        if (!(e === Hi.INDETERMINATE || (e <= i && t <= e)))
          throw new Error(
            '\n        timeoutMs must be an integer in the range ' +
              t +
              '–' +
              i +
              '\n        (or ' +
              Hi.INDETERMINATE +
              " to disable), but got '" +
              e +
              "'"
          );
        this.autoDismissTimeoutMs = e;
      }),
      (Xi.prototype.getCloseOnEscape = function () {
        return this.closeOnEscape;
      }),
      (Xi.prototype.setCloseOnEscape = function (e) {
        this.closeOnEscape = e;
      }),
      (Xi.prototype.handleKeyDown = function (e) {
        ('Escape' !== e.key && 27 !== e.keyCode) ||
          !this.getCloseOnEscape() ||
          this.close(Gi);
      }),
      (Xi.prototype.handleActionButtonClick = function (e) {
        this.close(ji);
      }),
      (Xi.prototype.handleActionIconClick = function (e) {
        this.close(Gi);
      }),
      (Xi.prototype.clearAutoDismissTimer = function () {
        clearTimeout(this.autoDismissTimer), (this.autoDismissTimer = 0);
      }),
      (Xi.prototype.handleAnimationTimerEnd = function () {
        (this.animationTimer = 0),
          this.adapter.removeClass(zi.OPENING),
          this.adapter.removeClass(zi.CLOSING);
      }),
      (Xi.prototype.runNextAnimationFrame = function (e) {
        var t = this;
        cancelAnimationFrame(this.animationFrame),
          (this.animationFrame = requestAnimationFrame(function () {
            (t.animationFrame = 0),
              clearTimeout(t.animationTimer),
              (t.animationTimer = setTimeout(e, 0));
          }));
      }),
      Xi);
    class Wi {
      constructor(e) {
        (this.type = 2), (this.options = e.options), (this.legacyPart = e);
      }
      get parentNode() {
        return this.legacyPart.startNode.parentNode;
      }
      get startNode() {
        return this.legacyPart.startNode;
      }
      get endNode() {
        return this.legacyPart.endNode;
      }
    }
    class qi {
      constructor(e) {
        (this.legacyPart = e), (this.type = e instanceof $e ? 3 : 1);
      }
      get options() {}
      get name() {
        return this.legacyPart.committer.name;
      }
      get element() {
        return this.legacyPart.committer.element;
      }
      get strings() {
        return this.legacyPart.committer.strings;
      }
      get tagName() {
        return this.element.tagName;
      }
    }
    class Yi {
      constructor(e) {
        (this.type = 4), (this.legacyPart = e);
      }
      get options() {}
      get name() {
        return this.legacyPart.name;
      }
      get element() {
        return this.legacyPart.element;
      }
      get strings() {
        return this.legacyPart.strings;
      }
      get tagName() {
        return this.element.tagName;
      }
    }
    class Qi {
      constructor(e) {
        (this.type = 5), (this.legacyPart = e);
      }
      get options() {}
      get name() {
        return this.legacyPart.eventName;
      }
      get element() {
        return this.legacyPart.element;
      }
      get strings() {}
      get tagName() {
        return this.element.tagName;
      }
      handleEvent(e) {
        this.legacyPart.handleEvent(e);
      }
    }
    class Zi {
      constructor(e) {}
      update(e, t) {
        return this.render(...t);
      }
    }
    function Ji(e) {
      const t = new WeakMap();
      return ye((...i) => r => {
        var o = t.get(r);
        let a, n;
        void 0 === o
          ? ((a = (function (e) {
              if (e instanceof Fe) return new Wi(e);
              if (e instanceof ze) return new Qi(e);
              if (e instanceof Ne) return new Yi(e);
              if (e instanceof $e || e instanceof Le) return new qi(e);
              throw new Error('Unknown part type');
            })(r)),
            (n = new e(a)),
            t.set(r, [a, n]))
          : ((a = o[0]), (n = o[1])),
          r.setValue(n.update(a, i)),
          r.commit();
      });
    }
    class er extends Zi {
      constructor(e) {
        super(e), (this._renderedYet = !1), (this._legacyPart = e.legacyPart);
      }
      _legacyGetNode() {
        return this._legacyPart instanceof Fe
          ? this._legacyPart.startNode
          : this._legacyPart instanceof ze || this._legacyPart instanceof Ne
          ? this._legacyPart.element
          : this._legacyPart instanceof $e || this._legacyPart instanceof Le
          ? this._legacyPart.committer.element
          : void 0;
      }
      _shouldRender() {
        if (!this._renderedYet) return (this._renderedYet = !0);
        var e = this._legacyGetNode();
        return !(null == e || !e.isConnected);
      }
      setValue(e) {
        this._shouldRender() &&
          (this._legacyPart.setValue(e), this._legacyPart.commit());
      }
      disconnected() {}
      reconnected() {}
    }
    const tr = Ki.numbers.ARIA_LIVE_DELAY_MS,
      ir = Ji(
        class extends er {
          constructor(e) {
            if (
              (super(e),
              (this.labelEl = null),
              (this.timerId = null),
              (this.previousPart = null),
              2 !== e.type)
            )
              throw new Error(
                'AccessibleSnackbarLabel only supports child parts.'
              );
          }
          update(e, [t, i]) {
            if (i) {
              if (null === this.labelEl) {
                var r = document.createElement('div');
                (i = Ge`<div class="mdc-snackbar__label" role="status" aria-live="polite">${t}</div>`),
                  Ue(i, r);
                const o = r.firstElementChild;
                return (
                  null !== (r = e.endNode) &&
                    void 0 !== r &&
                    r.parentNode.insertBefore(o, e.endNode),
                  (this.labelEl = o)
                );
              }
              const o = this.labelEl;
              return (
                o.setAttribute('aria-live', 'off'),
                (o.textContent = ''),
                (e = Ge`<span style="display: inline-block; width: 0; height: 1px;">&nbsp;</span>`),
                Ue(e, o),
                o.setAttribute('data-mdc-snackbar-label-text', t),
                null !== this.timerId && clearTimeout(this.timerId),
                (this.timerId = window.setTimeout(() => {
                  (this.timerId = null),
                    o.setAttribute('aria-live', 'polite'),
                    o.removeAttribute('data-mdc-snackbar-label-text'),
                    (o.textContent = t),
                    this.setValue(this.labelEl);
                }, tr)),
                o
              );
            }
          }
          render(e, t) {
            return t
              ? Ge`
      <div class="mdc-snackbar__label" role="status" aria-live="polite">${e}</div>`
              : Ge``;
          }
        }
      ),
      {
        OPENING_EVENT: rr,
        OPENED_EVENT: or,
        CLOSING_EVENT: ar,
        CLOSED_EVENT: nr,
      } = Ki.strings;
    class dr extends Ht {
      constructor() {
        super(...arguments),
          (this.mdcFoundationClass = Ki),
          (this.open = !1),
          (this.timeoutMs = 5e3),
          (this.closeOnEscape = !1),
          (this.labelText = ''),
          (this.stacked = !1),
          (this.leading = !1),
          (this.reason = '');
      }
      render() {
        var e = {
          'mdc-snackbar--stacked': this.stacked,
          'mdc-snackbar--leading': this.leading,
        };
        return Ge`
      <div class="mdc-snackbar ${jt(e)}" @keydown="${this._handleKeydown}">
        <div class="mdc-snackbar__surface">
          ${ir(this.labelText, this.open)}
          <div class="mdc-snackbar__actions">
            <slot name="action" @click="${this._handleActionClick}"></slot>
            <slot name="dismiss" @click="${this._handleDismissClick}"></slot>
          </div>
        </div>
      </div>`;
      }
      createAdapter() {
        return Object.assign(Object.assign({}, Ft(this.mdcRoot)), {
          announce: () => {},
          notifyClosed: e => {
            this.dispatchEvent(
              new CustomEvent(nr, {
                bubbles: !0,
                cancelable: !0,
                detail: { reason: e },
              })
            );
          },
          notifyClosing: e => {
            (this.open = !1),
              this.dispatchEvent(
                new CustomEvent(ar, {
                  bubbles: !0,
                  cancelable: !0,
                  detail: { reason: e },
                })
              );
          },
          notifyOpened: () => {
            this.dispatchEvent(
              new CustomEvent(or, { bubbles: !0, cancelable: !0 })
            );
          },
          notifyOpening: () => {
            (this.open = !0),
              this.dispatchEvent(
                new CustomEvent(rr, { bubbles: !0, cancelable: !0 })
              );
          },
        });
      }
      show() {
        this.open = !0;
      }
      close(e = '') {
        (this.reason = e), (this.open = !1);
      }
      firstUpdated() {
        super.firstUpdated(), this.open && this.mdcFoundation.open();
      }
      _handleKeydown(e) {
        this.mdcFoundation.handleKeyDown(e);
      }
      _handleActionClick(e) {
        this.mdcFoundation.handleActionButtonClick(e);
      }
      _handleDismissClick(e) {
        this.mdcFoundation.handleActionIconClick(e);
      }
    }
    o([at('.mdc-snackbar')], dr.prototype, 'mdcRoot', void 0),
      o([at('.mdc-snackbar__label')], dr.prototype, 'labelElement', void 0),
      o(
        [
          rt({ type: Boolean, reflect: !0 }),
          Bt(function (e) {
            this.mdcFoundation &&
              (e
                ? this.mdcFoundation.open()
                : (this.mdcFoundation.close(this.reason), (this.reason = '')));
          }),
        ],
        dr.prototype,
        'open',
        void 0
      ),
      o(
        [
          Bt(function (e) {
            this.mdcFoundation.setTimeoutMs(e);
          }),
          rt({ type: Number }),
        ],
        dr.prototype,
        'timeoutMs',
        void 0
      ),
      o(
        [
          Bt(function (e) {
            this.mdcFoundation.setCloseOnEscape(e);
          }),
          rt({ type: Boolean }),
        ],
        dr.prototype,
        'closeOnEscape',
        void 0
      ),
      o([rt({ type: String })], dr.prototype, 'labelText', void 0),
      o([rt({ type: Boolean })], dr.prototype, 'stacked', void 0),
      o([rt({ type: Boolean })], dr.prototype, 'leading', void 0);
    var sr = gt`.mdc-snackbar{z-index:8;margin:8px;display:none;position:fixed;right:0;bottom:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-snackbar__surface{background-color:#333333}.mdc-snackbar__label{color:rgba(255, 255, 255, 0.87)}.mdc-snackbar__surface{min-width:344px}@media(max-width: 480px),(max-width: 344px){.mdc-snackbar__surface{min-width:100%}}.mdc-snackbar__surface{max-width:672px}.mdc-snackbar__surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12)}.mdc-snackbar__surface{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-snackbar--opening,.mdc-snackbar--open,.mdc-snackbar--closing{display:flex}.mdc-snackbar--open .mdc-snackbar__label,.mdc-snackbar--open .mdc-snackbar__actions{visibility:visible}.mdc-snackbar--leading{justify-content:flex-start}.mdc-snackbar--stacked .mdc-snackbar__label{padding-left:16px;padding-right:8px;padding-bottom:12px}[dir=rtl] .mdc-snackbar--stacked .mdc-snackbar__label,.mdc-snackbar--stacked .mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar--stacked .mdc-snackbar__surface{flex-direction:column;align-items:flex-start}.mdc-snackbar--stacked .mdc-snackbar__actions{align-self:flex-end;margin-bottom:8px}.mdc-snackbar__surface{padding-left:0;padding-right:8px;display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;transform:scale(0.8);opacity:0}.mdc-snackbar__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:"";pointer-events:none}[dir=rtl] .mdc-snackbar__surface,.mdc-snackbar__surface[dir=rtl]{padding-left:8px;padding-right:0}.mdc-snackbar--open .mdc-snackbar__surface{transform:scale(1);opacity:1;pointer-events:auto;transition:opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-snackbar--closing .mdc-snackbar__surface{transform:scale(1);transition:opacity 75ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-snackbar__label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);padding-left:16px;padding-right:8px;width:100%;flex-grow:1;box-sizing:border-box;margin:0;visibility:hidden;padding-top:14px;padding-bottom:14px}[dir=rtl] .mdc-snackbar__label,.mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar__label::before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box;visibility:hidden}.mdc-snackbar__action:not(:disabled){color:#bb86fc}.mdc-snackbar__action::before,.mdc-snackbar__action::after{background-color:#bb86fc;background-color:var(--mdc-ripple-color, #bb86fc)}.mdc-snackbar__action:hover::before,.mdc-snackbar__action.mdc-ripple-surface--hover::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}.mdc-snackbar__action.mdc-ripple-upgraded--background-focused::before,.mdc-snackbar__action:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-snackbar__action:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-snackbar__action:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__action.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__dismiss{color:rgba(255, 255, 255, 0.87)}.mdc-snackbar__dismiss .mdc-icon-button__ripple::before,.mdc-snackbar__dismiss .mdc-icon-button__ripple::after{background-color:rgba(255, 255, 255, 0.87);background-color:var(--mdc-ripple-color, rgba(255, 255, 255, 0.87))}.mdc-snackbar__dismiss:hover .mdc-icon-button__ripple::before,.mdc-snackbar__dismiss.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__dismiss.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__dismiss.mdc-snackbar__dismiss{width:36px;height:36px;padding:6px;font-size:18px}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:8px;margin-right:0}[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss,.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl]{margin-left:0;margin-right:8px}slot[name=action]::slotted(mwc-button){--mdc-theme-primary: var( --mdc-snackbar-action-color, #bb86fc )}slot[name=dismiss]::slotted(mwc-icon-button){--mdc-icon-size: 18px;--mdc-icon-button-size: 36px;color:rgba(255, 255, 255, 0.87);margin-left:8px;margin-right:0}[dir=rtl] slot[name=dismiss]::slotted(mwc-icon-button),::slotted(mwc-icon-buttonslot[name=dismiss][dir=rtl]){margin-left:0;margin-right:8px}`;
    let cr = class extends dr {};
    (cr.styles = [sr]), (cr = o([tt('mwc-snackbar')], cr));
    class lr extends Ht {
      click() {
        this.formElement &&
          (this.formElement.focus(), this.formElement.click());
      }
      setAriaLabel(e) {
        this.formElement && this.formElement.setAttribute('aria-label', e);
      }
      firstUpdated() {
        super.firstUpdated(),
          this.shadowRoot &&
            this.mdcRoot.addEventListener('change', e => {
              this.dispatchEvent(new Event('change', e));
            });
      }
    }
    lr.shadowRootOptions = { mode: 'open', delegatesFocus: !0 };
    var pr = function (e, t) {
        return (pr =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
          })(e, t);
      },
      mr = function () {
        return (mr =
          Object.assign ||
          function (e) {
            for (var t, i = 1, r = arguments.length; i < r; i++)
              for (var o in (t = arguments[i]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      },
      hr = {
        animation: { prefixed: '-webkit-animation', standard: 'animation' },
        transform: { prefixed: '-webkit-transform', standard: 'transform' },
        transition: { prefixed: '-webkit-transition', standard: 'transition' },
      },
      ur = {
        animationend: {
          cssProperty: 'animation',
          prefixed: 'webkitAnimationEnd',
          standard: 'animationend',
        },
        animationiteration: {
          cssProperty: 'animation',
          prefixed: 'webkitAnimationIteration',
          standard: 'animationiteration',
        },
        animationstart: {
          cssProperty: 'animation',
          prefixed: 'webkitAnimationStart',
          standard: 'animationstart',
        },
        transitionend: {
          cssProperty: 'transition',
          prefixed: 'webkitTransitionEnd',
          standard: 'transitionend',
        },
      };
    function fr(e) {
      return (
        Boolean(e.document) && 'function' == typeof e.document.createElement
      );
    }
    var gr =
      (Object.defineProperty(br, 'cssClasses', {
        get: function () {
          return {};
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(br, 'strings', {
        get: function () {
          return {};
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(br, 'numbers', {
        get: function () {
          return {};
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(br, 'defaultAdapter', {
        get: function () {
          return {};
        },
        enumerable: !0,
        configurable: !0,
      }),
      (br.prototype.init = function () {}),
      (br.prototype.destroy = function () {}),
      br);
    function br(e) {
      this.adapter = e = void 0 === e ? {} : e;
    }
    var _r,
      xr,
      vr,
      yr = {
        ACTIVE: 'mdc-slider--active',
        DISABLED: 'mdc-slider--disabled',
        DISCRETE: 'mdc-slider--discrete',
        FOCUS: 'mdc-slider--focus',
        HAS_TRACK_MARKER: 'mdc-slider--display-markers',
        IN_TRANSIT: 'mdc-slider--in-transit',
        IS_DISCRETE: 'mdc-slider--discrete',
        DISABLE_TOUCH_ACTION: 'mdc-slider--disable-touch-action',
      },
      wr = {
        ARIA_DISABLED: 'aria-disabled',
        ARIA_VALUEMAX: 'aria-valuemax',
        ARIA_VALUEMIN: 'aria-valuemin',
        ARIA_VALUENOW: 'aria-valuenow',
        CHANGE_EVENT: 'MDCSlider:change',
        INPUT_EVENT: 'MDCSlider:input',
        PIN_VALUE_MARKER_SELECTOR: '.mdc-slider__pin-value-marker',
        STEP_DATA_ATTR: 'data-step',
        THUMB_CONTAINER_SELECTOR: '.mdc-slider__thumb-container',
        TRACK_MARKER_CONTAINER_SELECTOR: '.mdc-slider__track-marker-container',
        TRACK_SELECTOR: '.mdc-slider__track',
      },
      kr = { PAGE_FACTOR: 4 },
      Er = 'undefined' != typeof window,
      Cr = Er && !!window.PointerEvent,
      Ar = Cr ? ['pointerdown'] : ['mousedown', 'touchstart'],
      Sr = Cr ? ['pointerup'] : ['mouseup', 'touchend'],
      Ir = {
        mousedown: 'mousemove',
        pointerdown: 'pointermove',
        touchstart: 'touchmove',
      },
      Tr = 'ArrowDown',
      Rr = 'ArrowLeft',
      Or = 'ArrowRight',
      Lr = 'ArrowUp',
      Fr = 'End',
      Nr = 'Home',
      Dr = 'PageDown',
      $r = 'PageUp';
    function Pr() {
      this.constructor = xr;
    }
    function zr(e) {
      var t = _r.call(this, mr(mr({}, zr.defaultAdapter), e)) || this;
      return (
        (t.savedTabIndex_ = NaN),
        (t.active_ = !1),
        (t.inTransit_ = !1),
        (t.isDiscrete_ = !1),
        (t.hasTrackMarker_ = !1),
        (t.handlingThumbTargetEvt_ = !1),
        (t.min_ = 0),
        (t.max_ = 100),
        (t.step_ = 0),
        (t.value_ = 0),
        (t.disabled_ = !1),
        (t.preventFocusState_ = !1),
        (t.thumbContainerPointerHandler_ = function () {
          return (t.handlingThumbTargetEvt_ = !0);
        }),
        (t.interactionStartHandler_ = function (e) {
          return t.handleDown_(e);
        }),
        (t.keydownHandler_ = function (e) {
          return t.handleKeydown_(e);
        }),
        (t.focusHandler_ = function () {
          return t.handleFocus_();
        }),
        (t.blurHandler_ = function () {
          return t.handleBlur_();
        }),
        (t.resizeHandler_ = function () {
          return t.layout();
        }),
        t
      );
    }
    const Mr =
        (pr((xr = zr), (vr = _r = gr)),
        (xr.prototype =
          null === vr
            ? Object.create(vr)
            : ((Pr.prototype = vr.prototype), new Pr())),
        Object.defineProperty(zr, 'cssClasses', {
          get: function () {
            return yr;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(zr, 'strings', {
          get: function () {
            return wr;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(zr, 'numbers', {
          get: function () {
            return kr;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(zr, 'defaultAdapter', {
          get: function () {
            return {
              hasClass: function () {
                return !1;
              },
              addClass: function () {},
              removeClass: function () {},
              getAttribute: function () {
                return null;
              },
              setAttribute: function () {},
              removeAttribute: function () {},
              computeBoundingRect: function () {
                return {
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  width: 0,
                  height: 0,
                };
              },
              getTabIndex: function () {
                return 0;
              },
              registerInteractionHandler: function () {},
              deregisterInteractionHandler: function () {},
              registerThumbContainerInteractionHandler: function () {},
              deregisterThumbContainerInteractionHandler: function () {},
              registerBodyInteractionHandler: function () {},
              deregisterBodyInteractionHandler: function () {},
              registerResizeHandler: function () {},
              deregisterResizeHandler: function () {},
              notifyInput: function () {},
              notifyChange: function () {},
              setThumbContainerStyleProperty: function () {},
              setTrackStyleProperty: function () {},
              setMarkerValue: function () {},
              setTrackMarkers: function () {},
              isRTL: function () {
                return !1;
              },
            };
          },
          enumerable: !0,
          configurable: !0,
        }),
        (zr.prototype.init = function () {
          var e = this;
          (this.isDiscrete_ = this.adapter.hasClass(yr.IS_DISCRETE)),
            (this.hasTrackMarker_ = this.adapter.hasClass(yr.HAS_TRACK_MARKER)),
            Ar.forEach(function (t) {
              e.adapter.registerInteractionHandler(
                t,
                e.interactionStartHandler_
              ),
                e.adapter.registerThumbContainerInteractionHandler(
                  t,
                  e.thumbContainerPointerHandler_
                );
            }),
            Cr && this.adapter.addClass(yr.DISABLE_TOUCH_ACTION),
            this.adapter.registerInteractionHandler(
              'keydown',
              this.keydownHandler_
            ),
            this.adapter.registerInteractionHandler(
              'focus',
              this.focusHandler_
            ),
            this.adapter.registerInteractionHandler('blur', this.blurHandler_),
            this.adapter.registerResizeHandler(this.resizeHandler_),
            this.layout(),
            this.isDiscrete_ && 0 === this.getStep() && (this.step_ = 1);
        }),
        (zr.prototype.destroy = function () {
          var e = this;
          Ar.forEach(function (t) {
            e.adapter.deregisterInteractionHandler(
              t,
              e.interactionStartHandler_
            ),
              e.adapter.deregisterThumbContainerInteractionHandler(
                t,
                e.thumbContainerPointerHandler_
              );
          }),
            this.adapter.deregisterInteractionHandler(
              'keydown',
              this.keydownHandler_
            ),
            this.adapter.deregisterInteractionHandler(
              'focus',
              this.focusHandler_
            ),
            this.adapter.deregisterInteractionHandler(
              'blur',
              this.blurHandler_
            ),
            this.adapter.deregisterResizeHandler(this.resizeHandler_);
        }),
        (zr.prototype.setupTrackMarker = function () {
          this.isDiscrete_ &&
            this.hasTrackMarker_ &&
            0 !== this.getStep() &&
            this.adapter.setTrackMarkers(
              this.getStep(),
              this.getMax(),
              this.getMin()
            );
        }),
        (zr.prototype.layout = function () {
          (this.rect_ = this.adapter.computeBoundingRect()),
            this.updateUIForCurrentValue_();
        }),
        (zr.prototype.getValue = function () {
          return this.value_;
        }),
        (zr.prototype.setValue = function (e) {
          this.setValue_(e, !1);
        }),
        (zr.prototype.getMax = function () {
          return this.max_;
        }),
        (zr.prototype.setMax = function (e) {
          if (e < this.min_)
            throw new Error(
              "Cannot set max to be less than the slider's minimum value"
            );
          (this.max_ = e),
            this.setValue_(this.value_, !1, !0),
            this.adapter.setAttribute(wr.ARIA_VALUEMAX, String(this.max_)),
            this.setupTrackMarker();
        }),
        (zr.prototype.getMin = function () {
          return this.min_;
        }),
        (zr.prototype.setMin = function (e) {
          if (e > this.max_)
            throw new Error(
              "Cannot set min to be greater than the slider's maximum value"
            );
          (this.min_ = e),
            this.setValue_(this.value_, !1, !0),
            this.adapter.setAttribute(wr.ARIA_VALUEMIN, String(this.min_)),
            this.setupTrackMarker();
        }),
        (zr.prototype.getStep = function () {
          return this.step_;
        }),
        (zr.prototype.setStep = function (e) {
          if (e < 0) throw new Error('Step cannot be set to a negative number');
          this.isDiscrete_ && ('number' != typeof e || e < 1) && (e = 1),
            (this.step_ = e),
            this.setValue_(this.value_, !1, !0),
            this.setupTrackMarker();
        }),
        (zr.prototype.isDisabled = function () {
          return this.disabled_;
        }),
        (zr.prototype.setDisabled = function (e) {
          (this.disabled_ = e),
            this.toggleClass_(yr.DISABLED, this.disabled_),
            this.disabled_
              ? ((this.savedTabIndex_ = this.adapter.getTabIndex()),
                this.adapter.setAttribute(wr.ARIA_DISABLED, 'true'),
                this.adapter.removeAttribute('tabindex'))
              : (this.adapter.removeAttribute(wr.ARIA_DISABLED),
                isNaN(this.savedTabIndex_) ||
                  this.adapter.setAttribute(
                    'tabindex',
                    String(this.savedTabIndex_)
                  ));
        }),
        (zr.prototype.handleDown_ = function (e) {
          var t,
            i,
            r,
            o = this;
          this.disabled_ ||
            ((this.preventFocusState_ = !0),
            this.setInTransit_(!this.handlingThumbTargetEvt_),
            (this.handlingThumbTargetEvt_ = !1),
            this.setActive_(!0),
            (i = Ir[e.type]),
            (r = function () {
              o.handleUp_(),
                o.adapter.deregisterBodyInteractionHandler(i, t),
                Sr.forEach(function (e) {
                  return o.adapter.deregisterBodyInteractionHandler(e, r);
                });
            }),
            this.adapter.registerBodyInteractionHandler(
              i,
              (t = function (e) {
                o.handleMove_(e);
              })
            ),
            Sr.forEach(function (e) {
              return o.adapter.registerBodyInteractionHandler(e, r);
            }),
            this.setValueFromEvt_(e));
        }),
        (zr.prototype.handleMove_ = function (e) {
          e.preventDefault(), this.setValueFromEvt_(e);
        }),
        (zr.prototype.handleUp_ = function () {
          this.setActive_(!1), this.adapter.notifyChange();
        }),
        (zr.prototype.getClientX_ = function (e) {
          return (
            e.targetTouches && 0 < e.targetTouches.length
              ? e.targetTouches[0]
              : e
          ).clientX;
        }),
        (zr.prototype.setValueFromEvt_ = function (e) {
          (e = this.getClientX_(e)),
            (e = this.computeValueFromClientX_(e)),
            this.setValue_(e, !0);
        }),
        (zr.prototype.computeValueFromClientX_ = function (e) {
          var t = this.max_,
            i = this.min_;
          return (
            (e = (e - this.rect_.left) / this.rect_.width),
            i + (e = this.adapter.isRTL() ? 1 - e : e) * (t - i)
          );
        }),
        (zr.prototype.handleKeydown_ = function (e) {
          var t = this.getKeyId_(e);
          (t = this.getValueForKeyId_(t)),
            isNaN(t) ||
              (e.preventDefault(),
              this.adapter.addClass(yr.FOCUS),
              this.setValue_(t, !0),
              this.adapter.notifyChange());
        }),
        (zr.prototype.getKeyId_ = function (e) {
          return e.key === Rr || 37 === e.keyCode
            ? Rr
            : e.key === Or || 39 === e.keyCode
            ? Or
            : e.key === Lr || 38 === e.keyCode
            ? Lr
            : e.key === Tr || 40 === e.keyCode
            ? Tr
            : e.key === Nr || 36 === e.keyCode
            ? Nr
            : e.key === Fr || 35 === e.keyCode
            ? Fr
            : e.key === $r || 33 === e.keyCode
            ? $r
            : e.key === Dr || 34 === e.keyCode
            ? Dr
            : '';
        }),
        (zr.prototype.getValueForKeyId_ = function (e) {
          var t = this.max_,
            i = this.min_,
            r = this.step_ || (t - i) / 100;
          switch (
            (this.adapter.isRTL() && (e === Rr || e === Or) && (r = -r), e)
          ) {
            case Rr:
            case Tr:
              return this.value_ - r;
            case Or:
            case Lr:
              return this.value_ + r;
            case Nr:
              return this.min_;
            case Fr:
              return this.max_;
            case $r:
              return this.value_ + r * kr.PAGE_FACTOR;
            case Dr:
              return this.value_ - r * kr.PAGE_FACTOR;
            default:
              return NaN;
          }
        }),
        (zr.prototype.handleFocus_ = function () {
          this.preventFocusState_ || this.adapter.addClass(yr.FOCUS);
        }),
        (zr.prototype.handleBlur_ = function () {
          (this.preventFocusState_ = !1), this.adapter.removeClass(yr.FOCUS);
        }),
        (zr.prototype.setValue_ = function (e, t, i) {
          var r;
          void 0 === i && (i = !1),
            (e === this.value_ && !i) ||
              ((r = this.min_),
              (i = this.max_),
              (e = this.step_ && e !== r && e !== i ? this.quantize_(e) : e) < r
                ? (e = r)
                : i < e && (e = i),
              (this.value_ = e = e || 0),
              this.adapter.setAttribute(wr.ARIA_VALUENOW, String(this.value_)),
              this.updateUIForCurrentValue_(),
              t &&
                (this.adapter.notifyInput(),
                this.isDiscrete_ && this.adapter.setMarkerValue(e)));
        }),
        (zr.prototype.quantize_ = function (e) {
          return Math.round(e / this.step_) * this.step_;
        }),
        (zr.prototype.updateUIForCurrentValue_ = function () {
          var e = this,
            t = this.max_,
            i = this.min_,
            r = (this.value_ - i) / (t - i),
            o = r * this.rect_.width;
          this.adapter.isRTL() && (o = this.rect_.width - o);
          var a,
            n = Er
              ? (function (e, t) {
                  if (fr(e) && t in hr) {
                    var i = e.document.createElement('div'),
                      r = ((e = (r = hr[t]).standard), r.prefixed);
                    return e in i.style ? e : r;
                  }
                  return t;
                })(window, 'transform')
              : 'transform',
            d = Er
              ? (function (e, t) {
                  if (fr(e) && t in ur) {
                    var i = e.document.createElement('div'),
                      r = ur[t],
                      o = r.standard;
                    return (e = r.prefixed), r.cssProperty in i.style ? o : e;
                  }
                  return t;
                })(window, 'transitionend')
              : 'transitionend';
          this.inTransit_ &&
            this.adapter.registerThumbContainerInteractionHandler(
              d,
              (a = function () {
                e.setInTransit_(!1),
                  e.adapter.deregisterThumbContainerInteractionHandler(d, a);
              })
            ),
            requestAnimationFrame(function () {
              e.adapter.setThumbContainerStyleProperty(
                n,
                'translateX(' + o + 'px) translateX(-50%)'
              ),
                e.adapter.setTrackStyleProperty(n, 'scaleX(' + r + ')');
            });
        }),
        (zr.prototype.setActive_ = function (e) {
          (this.active_ = e), this.toggleClass_(yr.ACTIVE, this.active_);
        }),
        (zr.prototype.setInTransit_ = function (e) {
          (this.inTransit_ = e),
            this.toggleClass_(yr.IN_TRANSIT, this.inTransit_);
        }),
        (zr.prototype.toggleClass_ = function (e, t) {
          t ? this.adapter.addClass(e) : this.adapter.removeClass(e);
        }),
        zr),
      Hr = new WeakMap(),
      Br = ye(e => t => {
        var i,
          r = Hr.get(t);
        void 0 === e && t instanceof Le
          ? (void 0 === r && Hr.has(t)) ||
            ((i = t.committer.name), t.committer.element.removeAttribute(i))
          : e !== r && t.setValue(e),
          Hr.set(t, e);
      });
    class Vr extends lr {
      constructor() {
        super(...arguments),
          (this.mdcFoundationClass = Mr),
          (this.min = 0),
          (this.max = 100),
          (this._value = 0),
          (this.step = 0),
          (this.disabled = !1),
          (this.pin = !1),
          (this.markers = !1),
          (this.pinMarkerText = ''),
          (this.trackMarkerContainerStyles = {}),
          (this.thumbContainerStyles = {}),
          (this.trackStyles = {}),
          (this.isFoundationDestroyed = !1);
      }
      set value(e) {
        this.mdcFoundation && this.mdcFoundation.setValue(e),
          (this._value = e),
          this.requestUpdate('value', e);
      }
      get value() {
        return this.mdcFoundation ? this.mdcFoundation.getValue() : this._value;
      }
      render() {
        var e = 0 !== this.step,
          t = {
            'mdc-slider--discrete': e,
            'mdc-slider--display-markers': this.markers && e,
          };
        let i = '';
        e &&
          this.markers &&
          (i = Ge`
        <div
            class="mdc-slider__track-marker-container"
            style="${si(this.trackMarkerContainerStyles)}">
        </div>`);
        let r = '';
        return (
          this.pin &&
            (r = Ge`
      <div class="mdc-slider__pin">
        <span class="mdc-slider__pin-value-marker">${this.pinMarkerText}</span>
      </div>`),
          Ge`
      <div class="mdc-slider ${jt(t)}"
           tabindex="0" role="slider"
           aria-label="${Br(this.ariaLabel)}"
           aria-labelledby="${Br(this.ariaLabelledBy)}"
           aria-valuemin="${this.min}" aria-valuemax="${this.max}"
           aria-valuenow="${this.value}"
           aria-disabled="${this.disabled.toString()}"
           data-step="${this.step}"
           @mousedown=${this.layout}
           @touchstart=${this.layout}>
        <div class="mdc-slider__track-container">
          <div
              class="mdc-slider__track"
              style="${si(this.trackStyles)}">
          </div>
          ${i}
        </div>
        <div
            class="mdc-slider__thumb-container"
            style="${si(this.thumbContainerStyles)}">
          <!-- TODO: use cache() directive -->
          ${r}
          <svg class="mdc-slider__thumb" width="21" height="21">
            <circle cx="10.5" cy="10.5" r="7.875"></circle>
          </svg>
        <div class="mdc-slider__focus-ring"></div>
      </div>
    </div>`
        );
      }
      connectedCallback() {
        super.connectedCallback(),
          this.mdcRoot &&
            this.isFoundationDestroyed &&
            ((this.isFoundationDestroyed = !1), this.mdcFoundation.init());
      }
      updated(e) {
        var t = e.has('min'),
          i = e.has('max');
        t && i
          ? this.max < this.mdcFoundation.getMin()
            ? (this.mdcFoundation.setMin(this.min),
              this.mdcFoundation.setMax(this.max))
            : (this.mdcFoundation.setMax(this.max),
              this.mdcFoundation.setMin(this.min))
          : t
          ? this.mdcFoundation.setMin(this.min)
          : i && this.mdcFoundation.setMax(this.max),
          super.updated(e);
      }
      disconnectedCallback() {
        super.disconnectedCallback(),
          (this.isFoundationDestroyed = !0),
          this.mdcFoundation.destroy();
      }
      createAdapter() {
        return Object.assign(Object.assign({}, Ft(this.mdcRoot)), {
          getAttribute: e => this.mdcRoot.getAttribute(e),
          setAttribute: (e, t) => this.mdcRoot.setAttribute(e, t),
          removeAttribute: e => this.mdcRoot.removeAttribute(e),
          computeBoundingRect: () => {
            var e = this.mdcRoot.getBoundingClientRect();
            return {
              bottom: e.bottom,
              height: e.height,
              left: e.left + window.pageXOffset,
              right: e.right,
              top: e.top,
              width: e.width,
            };
          },
          getTabIndex: () => this.mdcRoot.tabIndex,
          registerInteractionHandler: (e, t) => {
            var i = 'touchstart' === e ? Rt() : void 0;
            this.mdcRoot.addEventListener(e, t, i);
          },
          deregisterInteractionHandler: (e, t) =>
            this.mdcRoot.removeEventListener(e, t),
          registerThumbContainerInteractionHandler: (e, t) => {
            var i = 'touchstart' === e ? Rt() : void 0;
            this.thumbContainer.addEventListener(e, t, i);
          },
          deregisterThumbContainerInteractionHandler: (e, t) =>
            this.thumbContainer.removeEventListener(e, t),
          registerBodyInteractionHandler: (e, t) =>
            document.body.addEventListener(e, t),
          deregisterBodyInteractionHandler: (e, t) =>
            document.body.removeEventListener(e, t),
          registerResizeHandler: e =>
            window.addEventListener('resize', e, Rt()),
          deregisterResizeHandler: e => window.removeEventListener('resize', e),
          notifyInput: () => {
            var e = this.mdcFoundation.getValue();
            e !== this._value &&
              ((this.value = e),
              this.dispatchEvent(
                new CustomEvent('input', {
                  detail: this,
                  composed: !0,
                  bubbles: !0,
                  cancelable: !0,
                })
              ));
          },
          notifyChange: () => {
            this.dispatchEvent(
              new CustomEvent('change', {
                detail: this,
                composed: !0,
                bubbles: !0,
                cancelable: !0,
              })
            );
          },
          setThumbContainerStyleProperty: (e, t) => {
            (this.thumbContainerStyles[e] = t), this.requestUpdate();
          },
          setTrackStyleProperty: (e, t) => {
            (this.trackStyles[e] = t), this.requestUpdate();
          },
          setMarkerValue: e => (this.pinMarkerText = e.toLocaleString()),
          setTrackMarkers: (e, t, i) => {
            (e = e.toLocaleString()),
              (t = t.toLocaleString()),
              (i = i.toLocaleString()),
              (this.trackMarkerContainerStyles.background = `linear-gradient(to right, currentColor 2px, transparent 0) 0 center / calc((100% - 2px) / ((${t} - ${i}) / ${e})) 100% repeat-x`),
              this.requestUpdate();
          },
          isRTL: () => 'rtl' === getComputedStyle(this.mdcRoot).direction,
        });
      }
      resetFoundation() {
        this.mdcFoundation &&
          (this.mdcFoundation.destroy(), this.mdcFoundation.init());
      }
      async firstUpdated() {
        await super.firstUpdated(), this.mdcFoundation.setValue(this._value);
      }
      layout() {
        this.mdcFoundation.layout();
      }
    }
    o([at('.mdc-slider')], Vr.prototype, 'mdcRoot', void 0),
      o([at('.mdc-slider')], Vr.prototype, 'formElement', void 0),
      o(
        [at('.mdc-slider__thumb-container')],
        Vr.prototype,
        'thumbContainer',
        void 0
      ),
      o(
        [at('.mdc-slider__pin-value-marker')],
        Vr.prototype,
        'pinMarker',
        void 0
      ),
      o([rt({ type: Number })], Vr.prototype, 'min', void 0),
      o([rt({ type: Number })], Vr.prototype, 'max', void 0),
      o([rt({ type: Number })], Vr.prototype, 'value', null),
      o(
        [
          rt({ type: Number }),
          Bt(function (e, t) {
            (0 !== t) != (0 !== e) && this.resetFoundation(),
              this.mdcFoundation.setStep(e);
          }),
        ],
        Vr.prototype,
        'step',
        void 0
      ),
      o(
        [
          rt({ type: Boolean, reflect: !0 }),
          Bt(function (e) {
            this.mdcFoundation.setDisabled(e);
          }),
        ],
        Vr.prototype,
        'disabled',
        void 0
      ),
      o([rt({ type: Boolean, reflect: !0 })], Vr.prototype, 'pin', void 0),
      o(
        [
          rt({ type: Boolean, reflect: !0 }),
          Bt(function () {
            this.mdcFoundation.setupTrackMarker();
          }),
        ],
        Vr.prototype,
        'markers',
        void 0
      ),
      o([ot()], Vr.prototype, 'pinMarkerText', void 0),
      o([ot()], Vr.prototype, 'trackMarkerContainerStyles', void 0),
      o([ot()], Vr.prototype, 'thumbContainerStyles', void 0),
      o([ot()], Vr.prototype, 'trackStyles', void 0),
      o(
        [Ri, rt({ attribute: 'aria-label' })],
        Vr.prototype,
        'ariaLabel',
        void 0
      ),
      o(
        [Ri, rt({ attribute: 'aria-labelledby' })],
        Vr.prototype,
        'ariaLabelledBy',
        void 0
      ),
      o([ct({ capture: !0, passive: !0 })], Vr.prototype, 'layout', null);
    var Ur = gt`@keyframes mdc-slider-emphasize{0%{animation-timing-function:ease-out}50%{animation-timing-function:ease-in;transform:scale(0.85)}100%{transform:scale(0.571)}}.mdc-slider{position:relative;width:100%;height:48px;cursor:pointer;touch-action:pan-x;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-container::after{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);opacity:.26}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-marker-container{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__thumb{fill:#018786;fill:var(--mdc-theme-secondary, #018786);stroke:#018786;stroke:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__focus-ring{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin{color:#fff;color:var(--mdc-theme-text-primary-on-dark, white)}.mdc-slider--disable-touch-action{touch-action:none}.mdc-slider--disabled{cursor:auto}.mdc-slider--disabled .mdc-slider__track{background-color:#9a9a9a}.mdc-slider--disabled .mdc-slider__track-container::after{background-color:#9a9a9a;opacity:.26}.mdc-slider--disabled .mdc-slider__track-marker-container{background-color:#9a9a9a}.mdc-slider--disabled .mdc-slider__thumb{fill:#9a9a9a;stroke:#9a9a9a}.mdc-slider--disabled .mdc-slider__thumb{stroke:#fff;stroke:var(--mdc-slider-bg-color-behind-component, white)}.mdc-slider:focus{outline:none}.mdc-slider__track-container{position:absolute;top:50%;width:100%;height:2px;overflow:hidden}.mdc-slider__track-container::after{position:absolute;top:0;left:0;display:block;width:100%;height:100%;content:""}.mdc-slider__track{position:absolute;width:100%;height:100%;transform-origin:left top;will-change:transform}.mdc-slider[dir=rtl] .mdc-slider__track,[dir=rtl] .mdc-slider .mdc-slider__track{transform-origin:right top}.mdc-slider__track-marker-container{display:flex;margin-right:0;margin-left:-1px;visibility:hidden}.mdc-slider[dir=rtl] .mdc-slider__track-marker-container,[dir=rtl] .mdc-slider .mdc-slider__track-marker-container{margin-right:-1px;margin-left:0}.mdc-slider__track-marker-container::after{display:block;width:2px;height:2px;content:""}.mdc-slider__track-marker{flex:1}.mdc-slider__track-marker::after{display:block;width:2px;height:2px;content:""}.mdc-slider__track-marker:first-child::after{width:3px}.mdc-slider__thumb-container{position:absolute;top:15px;left:0;width:21px;height:100%;user-select:none;will-change:transform}.mdc-slider__thumb{position:absolute;top:0;left:0;transform:scale(0.571);stroke-width:3.5;transition:transform 100ms ease-out,fill 100ms ease-out,stroke 100ms ease-out}.mdc-slider__focus-ring{width:21px;height:21px;border-radius:50%;opacity:0;transition:transform 266.67ms ease-out,opacity 266.67ms ease-out,background-color 266.67ms ease-out}.mdc-slider__pin{display:flex;position:absolute;top:0;left:0;align-items:center;justify-content:center;width:26px;height:26px;margin-top:-2px;margin-left:-2px;transform:rotate(-45deg) scale(0) translate(0, 0);border-radius:50% 50% 50% 0%;z-index:1;transition:transform 100ms ease-out}.mdc-slider__pin-value-marker{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);transform:rotate(45deg)}.mdc-slider--active .mdc-slider__thumb{transform:scale3d(1, 1, 1)}.mdc-slider--focus .mdc-slider__thumb{animation:mdc-slider-emphasize 266.67ms linear}.mdc-slider--focus .mdc-slider__focus-ring{transform:scale3d(1.55, 1.55, 1.55);opacity:.25}.mdc-slider--in-transit .mdc-slider__thumb{transition-delay:140ms}.mdc-slider--in-transit .mdc-slider__thumb-container,.mdc-slider--in-transit .mdc-slider__track,.mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__thumb-container,.mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__track{transition:transform 80ms ease}.mdc-slider--discrete.mdc-slider--active .mdc-slider__thumb{transform:scale(calc(12 / 21))}.mdc-slider--discrete.mdc-slider--active .mdc-slider__pin{transform:rotate(-45deg) scale(1) translate(19px, -20px)}.mdc-slider--discrete.mdc-slider--focus .mdc-slider__thumb{animation:none}.mdc-slider--discrete.mdc-slider--display-markers .mdc-slider__track-marker-container{visibility:visible}:host{display:inline-block;min-width:120px;outline:none}`;
    let jr = class extends Vr {};
    (jr.styles = [Ur]), (jr = o([tt('mwc-slider')], jr));
    var Gr,
      Xr = { ROOT: 'mdc-form-field' },
      Kr = { LABEL_SELECTOR: '.mdc-form-field > label' };
    function Wr(e) {
      var t = Gr.call(this, r(r({}, Wr.defaultAdapter), e)) || this;
      return (
        (t.click = function () {
          t.handleClick();
        }),
        t
      );
    }
    const qr =
      (t(Wr, (Gr = At)),
      Object.defineProperty(Wr, 'cssClasses', {
        get: function () {
          return Xr;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(Wr, 'strings', {
        get: function () {
          return Kr;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(Wr, 'defaultAdapter', {
        get: function () {
          return {
            activateInputRipple: function () {},
            deactivateInputRipple: function () {},
            deregisterInteractionHandler: function () {},
            registerInteractionHandler: function () {},
          };
        },
        enumerable: !1,
        configurable: !0,
      }),
      (Wr.prototype.init = function () {
        this.adapter.registerInteractionHandler('click', this.click);
      }),
      (Wr.prototype.destroy = function () {
        this.adapter.deregisterInteractionHandler('click', this.click);
      }),
      (Wr.prototype.handleClick = function () {
        var e = this;
        this.adapter.activateInputRipple(),
          requestAnimationFrame(function () {
            e.adapter.deactivateInputRipple();
          });
      }),
      Wr);
    class Yr extends Ht {
      constructor() {
        super(...arguments),
          (this.alignEnd = !1),
          (this.spaceBetween = !1),
          (this.nowrap = !1),
          (this.label = ''),
          (this.mdcFoundationClass = qr);
      }
      createAdapter() {
        return {
          registerInteractionHandler: (e, t) => {
            this.labelEl.addEventListener(e, t);
          },
          deregisterInteractionHandler: (e, t) => {
            this.labelEl.removeEventListener(e, t);
          },
          activateInputRipple: async () => {
            var e = this.input;
            if (e instanceof lr) {
              const t = await e.ripple;
              t && t.startPress();
            }
          },
          deactivateInputRipple: async () => {
            var e = this.input;
            if (e instanceof lr) {
              const t = await e.ripple;
              t && t.endPress();
            }
          },
        };
      }
      get input() {
        var e;
        return null !==
          (e =
            null === (e = this.slottedInputs) || void 0 === e
              ? void 0
              : e[0]) && void 0 !== e
          ? e
          : null;
      }
      render() {
        var e = {
          'mdc-form-field--align-end': this.alignEnd,
          'mdc-form-field--space-between': this.spaceBetween,
          'mdc-form-field--nowrap': this.nowrap,
        };
        return Ge`
      <div class="mdc-form-field ${jt(e)}">
        <slot></slot>
        <label class="mdc-label"
               @click="${this._labelClick}">${this.label}</label>
      </div>`;
      }
      _labelClick() {
        const e = this.input;
        e && (e.focus(), e.click());
      }
    }
    o([rt({ type: Boolean })], Yr.prototype, 'alignEnd', void 0),
      o([rt({ type: Boolean })], Yr.prototype, 'spaceBetween', void 0),
      o([rt({ type: Boolean })], Yr.prototype, 'nowrap', void 0),
      o(
        [
          rt({ type: String }),
          Bt(async function (e) {
            const t = this.input;
            t &&
              ('input' === t.localName
                ? t.setAttribute('aria-label', e)
                : t instanceof lr &&
                  (await t.updateComplete, t.setAriaLabel(e)));
          }),
        ],
        Yr.prototype,
        'label',
        void 0
      ),
      o([at('.mdc-form-field')], Yr.prototype, 'mdcRoot', void 0),
      o([pt('', !0, '*')], Yr.prototype, 'slottedInputs', void 0),
      o([at('label')], Yr.prototype, 'labelEl', void 0);
    var Qr = gt`.mdc-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}[dir=rtl] .mdc-form-field--space-between>label,.mdc-form-field--space-between>label[dir=rtl]{margin:0}:host{display:inline-flex}.mdc-form-field{width:100%}::slotted(*){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}::slotted(mwc-switch){margin-right:10px}[dir=rtl] ::slotted(mwc-switch),::slotted(mwc-switch[dir=rtl]){margin-left:10px}`;
    let Zr = class extends Yr {};
    (Zr.styles = [Qr]), (Zr = o([tt('mwc-formfield')], Zr));
    const Jr = Symbol('selection controller');
    class eo {
      constructor() {
        (this.selected = null), (this.ordered = null), (this.set = new Set());
      }
    }
    class to {
      constructor(e) {
        (this.sets = {}),
          (this.focusedSet = null),
          (this.mouseIsDown = !1),
          (this.updating = !1),
          e.addEventListener('keydown', e => {
            this.keyDownHandler(e);
          }),
          e.addEventListener('mousedown', () => {
            this.mousedownHandler();
          }),
          e.addEventListener('mouseup', () => {
            this.mouseupHandler();
          });
      }
      static getController(e) {
        const t =
          !('global' in e) || ('global' in e && e.global)
            ? document
            : e.getRootNode();
        let i = t[Jr];
        return void 0 === i && ((i = new to(t)), (t[Jr] = i)), i;
      }
      keyDownHandler(e) {
        var t = e.target;
        'checked' in t &&
          this.has(t) &&
          ('ArrowRight' == e.key || 'ArrowDown' == e.key
            ? this.selectNext(t)
            : ('ArrowLeft' != e.key && 'ArrowUp' != e.key) ||
              this.selectPrevious(t));
      }
      mousedownHandler() {
        this.mouseIsDown = !0;
      }
      mouseupHandler() {
        this.mouseIsDown = !1;
      }
      has(e) {
        return this.getSet(e.name).set.has(e);
      }
      selectPrevious(e) {
        const t = this.getOrdered(e);
        return (
          (e = t.indexOf(e)),
          (e = t[e - 1] || t[t.length - 1]),
          this.select(e),
          e
        );
      }
      selectNext(e) {
        const t = this.getOrdered(e);
        return (e = t.indexOf(e)), (e = t[e + 1] || t[0]), this.select(e), e;
      }
      select(e) {
        e.click();
      }
      focus(e) {
        if (!this.mouseIsDown) {
          const i = this.getSet(e.name);
          var t = this.focusedSet;
          (this.focusedSet = i),
            t != i && i.selected && i.selected != e && i.selected.focus();
        }
      }
      isAnySelected(e) {
        for (const t of this.getSet(e.name).set) if (t.checked) return !0;
        return !1;
      }
      getOrdered(e) {
        const t = this.getSet(e.name);
        return (
          t.ordered ||
            ((t.ordered = Array.from(t.set)),
            t.ordered.sort((e, t) =>
              e.compareDocumentPosition(t) == Node.DOCUMENT_POSITION_PRECEDING
                ? 1
                : 0
            )),
          t.ordered
        );
      }
      getSet(e) {
        return this.sets[e] || (this.sets[e] = new eo()), this.sets[e];
      }
      register(e) {
        var t = e.name || e.getAttribute('name') || '';
        const i = this.getSet(t);
        i.set.add(e), (i.ordered = null);
      }
      unregister(e) {
        const t = this.getSet(e.name);
        t.set.delete(e),
          (t.ordered = null),
          t.selected == e && (t.selected = null);
      }
      update(e) {
        if (!this.updating) {
          this.updating = !0;
          const t = this.getSet(e.name);
          if (e.checked) {
            for (const i of t.set) i != e && (i.checked = !1);
            t.selected = e;
          }
          if (this.isAnySelected(e))
            for (const e of t.set) {
              if (void 0 === e.formElementTabIndex) break;
              e.formElementTabIndex = e.checked ? 0 : -1;
            }
          this.updating = !1;
        }
      }
    }
    var io,
      ro = { NATIVE_CONTROL_SELECTOR: '.mdc-radio__native-control' },
      oo = { DISABLED: 'mdc-radio--disabled', ROOT: 'mdc-radio' };
    function ao(e) {
      return io.call(this, r(r({}, ao.defaultAdapter), e)) || this;
    }
    const no =
      (t(ao, (io = At)),
      Object.defineProperty(ao, 'cssClasses', {
        get: function () {
          return oo;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(ao, 'strings', {
        get: function () {
          return ro;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(ao, 'defaultAdapter', {
        get: function () {
          return {
            addClass: function () {},
            removeClass: function () {},
            setNativeControlDisabled: function () {},
          };
        },
        enumerable: !1,
        configurable: !0,
      }),
      (ao.prototype.setDisabled = function (e) {
        var t = ao.cssClasses.DISABLED;
        this.adapter.setNativeControlDisabled(e),
          e ? this.adapter.addClass(t) : this.adapter.removeClass(t);
      }),
      ao);
    class so extends lr {
      constructor() {
        super(...arguments),
          (this._checked = !1),
          (this.useStateLayerCustomProperties = !1),
          (this.global = !1),
          (this.disabled = !1),
          (this.value = ''),
          (this.name = ''),
          (this.reducedTouchTarget = !1),
          (this.mdcFoundationClass = no),
          (this.formElementTabIndex = 0),
          (this.focused = !1),
          (this.shouldRenderRipple = !1),
          (this.rippleElement = null),
          (this.rippleHandlers = new mi(
            () => (
              (this.shouldRenderRipple = !0),
              this.ripple.then(e => {
                this.rippleElement = e;
              }),
              this.ripple
            )
          ));
      }
      get checked() {
        return this._checked;
      }
      set checked(e) {
        var t,
          i,
          r = this._checked;
        e !== r &&
          ((this._checked = e),
          this.formElement && (this.formElement.checked = e),
          null !== (t = this._selectionController) &&
            void 0 !== t &&
            t.update(this),
          !1 === e &&
            null !== (i = this.formElement) &&
            void 0 !== i &&
            i.blur(),
          this.requestUpdate('checked', r),
          this.dispatchEvent(
            new Event('checked', { bubbles: !0, composed: !0 })
          ));
      }
      _handleUpdatedValue(e) {
        this.formElement.value = e;
      }
      renderRipple() {
        return this.shouldRenderRipple
          ? Ge`<mwc-ripple unbounded accent
        .internalUseStateLayerCustomProperties="${this.useStateLayerCustomProperties}"
        .disabled="${this.disabled}"></mwc-ripple>`
          : '';
      }
      get isRippleActive() {
        var e;
        return (
          (null === (e = this.rippleElement) || void 0 === e
            ? void 0
            : e.isActive) || !1
        );
      }
      connectedCallback() {
        super.connectedCallback(),
          (this._selectionController = to.getController(this)),
          this._selectionController.register(this),
          this._selectionController.update(this);
      }
      disconnectedCallback() {
        this._selectionController.unregister(this),
          (this._selectionController = void 0);
      }
      focus() {
        this.formElement.focus();
      }
      createAdapter() {
        return Object.assign(Object.assign({}, Ft(this.mdcRoot)), {
          setNativeControlDisabled: e => {
            this.formElement.disabled = e;
          },
        });
      }
      handleFocus() {
        (this.focused = !0), this.handleRippleFocus();
      }
      handleClick() {
        this.formElement.focus();
      }
      handleBlur() {
        (this.focused = !1),
          this.formElement.blur(),
          this.rippleHandlers.endFocus();
      }
      render() {
        var e = {
          'mdc-radio--touch': !this.reducedTouchTarget,
          'mdc-ripple-upgraded--background-focused': this.focused,
          'mdc-radio--disabled': this.disabled,
        };
        return Ge`
      <div class="mdc-radio ${jt(e)}">
        <input
          tabindex="${this.formElementTabIndex}"
          class="mdc-radio__native-control"
          type="radio"
          name="${this.name}"
          aria-label="${Br(this.ariaLabel)}"
          aria-labelledby="${Br(this.ariaLabelledBy)}"
          .checked="${this.checked}"
          .value="${this.value}"
          ?disabled="${this.disabled}"
          @change="${this.changeHandler}"
          @focus="${this.handleFocus}"
          @click="${this.handleClick}"
          @blur="${this.handleBlur}"
          @mousedown="${this.handleRippleMouseDown}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleTouchStart}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}">
        <div class="mdc-radio__background">
          <div class="mdc-radio__outer-circle"></div>
          <div class="mdc-radio__inner-circle"></div>
        </div>
        ${this.renderRipple()}
      </div>`;
      }
      handleRippleMouseDown(e) {
        const t = () => {
          window.removeEventListener('mouseup', t),
            this.handleRippleDeactivate();
        };
        window.addEventListener('mouseup', t),
          this.rippleHandlers.startPress(e);
      }
      handleRippleTouchStart(e) {
        this.rippleHandlers.startPress(e);
      }
      handleRippleDeactivate() {
        this.rippleHandlers.endPress();
      }
      handleRippleMouseEnter() {
        this.rippleHandlers.startHover();
      }
      handleRippleMouseLeave() {
        this.rippleHandlers.endHover();
      }
      handleRippleFocus() {
        this.rippleHandlers.startFocus();
      }
      changeHandler() {
        this.checked = this.formElement.checked;
      }
    }
    o([at('.mdc-radio')], so.prototype, 'mdcRoot', void 0),
      o([at('input')], so.prototype, 'formElement', void 0),
      o([ot()], so.prototype, 'useStateLayerCustomProperties', void 0),
      o([rt({ type: Boolean })], so.prototype, 'global', void 0),
      o([rt({ type: Boolean, reflect: !0 })], so.prototype, 'checked', null),
      o(
        [
          rt({ type: Boolean }),
          Bt(function (e) {
            this.mdcFoundation.setDisabled(e);
          }),
        ],
        so.prototype,
        'disabled',
        void 0
      ),
      o(
        [
          rt({ type: String }),
          Bt(function (e) {
            this._handleUpdatedValue(e);
          }),
        ],
        so.prototype,
        'value',
        void 0
      ),
      o([rt({ type: String })], so.prototype, 'name', void 0),
      o([rt({ type: Boolean })], so.prototype, 'reducedTouchTarget', void 0),
      o([rt({ type: Number })], so.prototype, 'formElementTabIndex', void 0),
      o([ot()], so.prototype, 'focused', void 0),
      o([ot()], so.prototype, 'shouldRenderRipple', void 0),
      o([nt('mwc-ripple')], so.prototype, 'ripple', void 0),
      o(
        [Ri, rt({ attribute: 'aria-label' })],
        so.prototype,
        'ariaLabel',
        void 0
      ),
      o(
        [Ri, rt({ attribute: 'aria-labelledby' })],
        so.prototype,
        'ariaLabelledBy',
        void 0
      ),
      o([ct({ passive: !0 })], so.prototype, 'handleRippleTouchStart', null);
    var co = gt`.mdc-touch-target-wrapper{display:inline}.mdc-radio{padding:calc((40px - 20px) / 2)}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.54)}.mdc-radio .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio .mdc-radio__background::before{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__background::before{top:calc(-1 * (40px - 20px) / 2);left:calc(-1 * (40px - 20px) / 2);width:40px;height:40px}.mdc-radio .mdc-radio__native-control{top:calc((40px - 40px) / 2);right:calc((40px - 40px) / 2);left:calc((40px - 40px) / 2);width:40px;height:40px}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:GrayText}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:GrayText}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:GrayText}}.mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color}.mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1}.mdc-radio--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-radio--touch .mdc-radio__native-control{top:calc((40px - 48px) / 2);right:calc((40px - 48px) / 2);left:calc((40px - 48px) / 2);width:48px;height:48px}.mdc-radio__native-control:checked+.mdc-radio__background,.mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio--disabled{cursor:default;pointer-events:none}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.5);transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:disabled+.mdc-radio__background,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background{cursor:default}.mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}:host{display:inline-block;outline:none}.mdc-radio{vertical-align:bottom}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unchecked-color, rgba(0, 0, 0, 0.54))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}`;
    let lo = class extends so {};
    (lo.styles = [co]), (lo = o([tt('mwc-radio')], lo));
    class po extends lr {
      constructor() {
        super(...arguments),
          (this.checked = !1),
          (this.indeterminate = !1),
          (this.disabled = !1),
          (this.value = ''),
          (this.reducedTouchTarget = !1),
          (this.animationClass = ''),
          (this.shouldRenderRipple = !1),
          (this.focused = !1),
          (this.useStateLayerCustomProperties = !1),
          (this.mdcFoundationClass = void 0),
          (this.mdcFoundation = void 0),
          (this.rippleElement = null),
          (this.rippleHandlers = new mi(
            () => (
              (this.shouldRenderRipple = !0),
              this.ripple.then(e => (this.rippleElement = e)),
              this.ripple
            )
          ));
      }
      createAdapter() {
        return {};
      }
      update(e) {
        var t = e.get('indeterminate'),
          i = e.get('checked'),
          r = e.get('disabled');
        (void 0 === t && void 0 === i && void 0 === r) ||
          ((t = this.calculateAnimationStateName(!!i, !!t, !!r)),
          (r = this.calculateAnimationStateName(
            this.checked,
            this.indeterminate,
            this.disabled
          )),
          (this.animationClass = `${t}-${r}`)),
          super.update(e);
      }
      calculateAnimationStateName(e, t, i) {
        return i
          ? 'disabled'
          : t
          ? 'indeterminate'
          : e
          ? 'checked'
          : 'unchecked';
      }
      renderRipple() {
        return this.shouldRenderRipple
          ? Ge`<mwc-ripple
        .disabled="${this.disabled}"
        .internalUseStateLayerCustomProperties="${this.useStateLayerCustomProperties}"
        unbounded></mwc-ripple>`
          : '';
      }
      render() {
        var e = this.indeterminate || this.checked,
          t = {
            'mdc-checkbox--disabled': this.disabled,
            'mdc-checkbox--selected': e,
            'mdc-checkbox--touch': !this.reducedTouchTarget,
            'mdc-ripple-upgraded--background-focused': this.focused,
            'mdc-checkbox--anim-checked-indeterminate':
              'checked-indeterminate' == this.animationClass,
            'mdc-checkbox--anim-checked-unchecked':
              'checked-unchecked' == this.animationClass,
            'mdc-checkbox--anim-indeterminate-checked':
              'indeterminate-checked' == this.animationClass,
            'mdc-checkbox--anim-indeterminate-unchecked':
              'indeterminate-unchecked' == this.animationClass,
            'mdc-checkbox--anim-unchecked-checked':
              'unchecked-checked' == this.animationClass,
            'mdc-checkbox--anim-unchecked-indeterminate':
              'unchecked-indeterminate' == this.animationClass,
          };
        return (
          (e = this.indeterminate ? 'mixed' : void 0),
          Ge`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${jt(t)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${Br(this.name)}"
              aria-checked="${Br(e)}"
              aria-label="${Br(this.ariaLabel)}"
              aria-labelledby="${Br(this.ariaLabelledBy)}"
              aria-describedby="${Br(this.ariaDescribedBy)}"
              data-indeterminate="${this.indeterminate ? 'true' : 'false'}"
              ?disabled="${this.disabled}"
              .indeterminate="${this.indeterminate}"
              .checked="${this.checked}"
              .value="${this.value}"
              @change="${this.handleChange}"
              @focus="${this.handleFocus}"
              @blur="${this.handleBlur}"
              @mousedown="${this.handleRippleMouseDown}"
              @mouseenter="${this.handleRippleMouseEnter}"
              @mouseleave="${this.handleRippleMouseLeave}"
              @touchstart="${this.handleRippleTouchStart}"
              @touchend="${this.handleRippleDeactivate}"
              @touchcancel="${this.handleRippleDeactivate}">
        <div class="mdc-checkbox__background"
          @animationend="${this.resetAnimationClass}">
          <svg class="mdc-checkbox__checkmark"
              viewBox="0 0 24 24">
            <path class="mdc-checkbox__checkmark-path"
                  fill="none"
                  d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
          </svg>
          <div class="mdc-checkbox__mixedmark"></div>
        </div>
        ${this.renderRipple()}
      </div>`
        );
      }
      handleFocus() {
        (this.focused = !0), this.handleRippleFocus();
      }
      handleBlur() {
        (this.focused = !1), this.handleRippleBlur();
      }
      handleRippleMouseDown(e) {
        const t = () => {
          window.removeEventListener('mouseup', t),
            this.handleRippleDeactivate();
        };
        window.addEventListener('mouseup', t),
          this.rippleHandlers.startPress(e);
      }
      handleRippleTouchStart(e) {
        this.rippleHandlers.startPress(e);
      }
      handleRippleDeactivate() {
        this.rippleHandlers.endPress();
      }
      handleRippleMouseEnter() {
        this.rippleHandlers.startHover();
      }
      handleRippleMouseLeave() {
        this.rippleHandlers.endHover();
      }
      handleRippleFocus() {
        this.rippleHandlers.startFocus();
      }
      handleRippleBlur() {
        this.rippleHandlers.endFocus();
      }
      handleChange() {
        (this.checked = this.formElement.checked),
          (this.indeterminate = this.formElement.indeterminate);
      }
      resetAnimationClass() {
        this.animationClass = '';
      }
      get isRippleActive() {
        var e;
        return (
          (null === (e = this.rippleElement) || void 0 === e
            ? void 0
            : e.isActive) || !1
        );
      }
    }
    o([at('.mdc-checkbox')], po.prototype, 'mdcRoot', void 0),
      o([at('input')], po.prototype, 'formElement', void 0),
      o([rt({ type: Boolean, reflect: !0 })], po.prototype, 'checked', void 0),
      o([rt({ type: Boolean })], po.prototype, 'indeterminate', void 0),
      o([rt({ type: Boolean, reflect: !0 })], po.prototype, 'disabled', void 0),
      o([rt({ type: String, reflect: !0 })], po.prototype, 'name', void 0),
      o([rt({ type: String })], po.prototype, 'value', void 0),
      o(
        [Ri, rt({ type: String, attribute: 'aria-label' })],
        po.prototype,
        'ariaLabel',
        void 0
      ),
      o(
        [Ri, rt({ type: String, attribute: 'aria-labelledby' })],
        po.prototype,
        'ariaLabelledBy',
        void 0
      ),
      o(
        [Ri, rt({ type: String, attribute: 'aria-describedby' })],
        po.prototype,
        'ariaDescribedBy',
        void 0
      ),
      o([rt({ type: Boolean })], po.prototype, 'reducedTouchTarget', void 0),
      o([ot()], po.prototype, 'animationClass', void 0),
      o([ot()], po.prototype, 'shouldRenderRipple', void 0),
      o([ot()], po.prototype, 'focused', void 0),
      o([ot()], po.prototype, 'useStateLayerCustomProperties', void 0),
      o([nt('mwc-ripple')], po.prototype, 'ripple', void 0),
      o([ct({ passive: !0 })], po.prototype, 'handleRippleTouchStart', null);
    var mo = gt`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
    let ho = class extends po {};
    (ho.styles = [mo]), (ho = o([tt('mwc-checkbox')], ho));
    var uo,
      fo = { CHECKED: 'mdc-switch--checked', DISABLED: 'mdc-switch--disabled' },
      go = {
        ARIA_CHECKED_ATTR: 'aria-checked',
        NATIVE_CONTROL_SELECTOR: '.mdc-switch__native-control',
        RIPPLE_SURFACE_SELECTOR: '.mdc-switch__thumb-underlay',
      };
    function bo(e) {
      return uo.call(this, r(r({}, bo.defaultAdapter), e)) || this;
    }
    const _o =
      (t(bo, (uo = At)),
      Object.defineProperty(bo, 'strings', {
        get: function () {
          return go;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(bo, 'cssClasses', {
        get: function () {
          return fo;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(bo, 'defaultAdapter', {
        get: function () {
          return {
            addClass: function () {},
            removeClass: function () {},
            setNativeControlChecked: function () {},
            setNativeControlDisabled: function () {},
            setNativeControlAttr: function () {},
          };
        },
        enumerable: !1,
        configurable: !0,
      }),
      (bo.prototype.setChecked = function (e) {
        this.adapter.setNativeControlChecked(e),
          this.updateAriaChecked(e),
          this.updateCheckedStyling(e);
      }),
      (bo.prototype.setDisabled = function (e) {
        this.adapter.setNativeControlDisabled(e),
          e
            ? this.adapter.addClass(fo.DISABLED)
            : this.adapter.removeClass(fo.DISABLED);
      }),
      (bo.prototype.handleChange = function (e) {
        (e = e.target),
          this.updateAriaChecked(e.checked),
          this.updateCheckedStyling(e.checked);
      }),
      (bo.prototype.updateCheckedStyling = function (e) {
        e
          ? this.adapter.addClass(fo.CHECKED)
          : this.adapter.removeClass(fo.CHECKED);
      }),
      (bo.prototype.updateAriaChecked = function (e) {
        this.adapter.setNativeControlAttr(go.ARIA_CHECKED_ATTR, '' + !!e);
      }),
      bo);
    class xo extends lr {
      constructor() {
        super(...arguments),
          (this.checked = !1),
          (this.disabled = !1),
          (this.shouldRenderRipple = !1),
          (this.mdcFoundationClass = _o),
          (this.rippleHandlers = new mi(
            () => ((this.shouldRenderRipple = !0), this.ripple)
          ));
      }
      changeHandler(e) {
        this.mdcFoundation.handleChange(e),
          (this.checked = this.formElement.checked);
      }
      createAdapter() {
        return Object.assign(Object.assign({}, Ft(this.mdcRoot)), {
          setNativeControlChecked: e => {
            this.formElement.checked = e;
          },
          setNativeControlDisabled: e => {
            this.formElement.disabled = e;
          },
          setNativeControlAttr: (e, t) => {
            this.formElement.setAttribute(e, t);
          },
        });
      }
      renderRipple() {
        return this.shouldRenderRipple
          ? Ge`
        <mwc-ripple
          .accent="${this.checked}"
          .disabled="${this.disabled}"
          unbounded>
        </mwc-ripple>`
          : '';
      }
      focus() {
        const e = this.formElement;
        e && (this.rippleHandlers.startFocus(), e.focus());
      }
      blur() {
        const e = this.formElement;
        e && (this.rippleHandlers.endFocus(), e.blur());
      }
      render() {
        return Ge`
      <div class="mdc-switch">
        <div class="mdc-switch__track"></div>
        <div class="mdc-switch__thumb-underlay">
          ${this.renderRipple()}
          <div class="mdc-switch__thumb">
            <input
              type="checkbox"
              id="basic-switch"
              class="mdc-switch__native-control"
              role="switch"
              aria-label="${Br(this.ariaLabel)}"
              aria-labelledby="${Br(this.ariaLabelledBy)}"
              @change="${this.changeHandler}"
              @focus="${this.handleRippleFocus}"
              @blur="${this.handleRippleBlur}"
              @mousedown="${this.handleRippleMouseDown}"
              @mouseenter="${this.handleRippleMouseEnter}"
              @mouseleave="${this.handleRippleMouseLeave}"
              @touchstart="${this.handleRippleTouchStart}"
              @touchend="${this.handleRippleDeactivate}"
              @touchcancel="${this.handleRippleDeactivate}">
          </div>
        </div>
      </div>`;
      }
      handleRippleMouseDown(e) {
        const t = () => {
          window.removeEventListener('mouseup', t),
            this.handleRippleDeactivate();
        };
        window.addEventListener('mouseup', t),
          this.rippleHandlers.startPress(e);
      }
      handleRippleTouchStart(e) {
        this.rippleHandlers.startPress(e);
      }
      handleRippleDeactivate() {
        this.rippleHandlers.endPress();
      }
      handleRippleMouseEnter() {
        this.rippleHandlers.startHover();
      }
      handleRippleMouseLeave() {
        this.rippleHandlers.endHover();
      }
      handleRippleFocus() {
        this.rippleHandlers.startFocus();
      }
      handleRippleBlur() {
        this.rippleHandlers.endFocus();
      }
    }
    o(
      [
        rt({ type: Boolean }),
        Bt(function (e) {
          this.mdcFoundation.setChecked(e);
        }),
      ],
      xo.prototype,
      'checked',
      void 0
    ),
      o(
        [
          rt({ type: Boolean }),
          Bt(function (e) {
            this.mdcFoundation.setDisabled(e);
          }),
        ],
        xo.prototype,
        'disabled',
        void 0
      ),
      o(
        [Ri, rt({ attribute: 'aria-label' })],
        xo.prototype,
        'ariaLabel',
        void 0
      ),
      o(
        [Ri, rt({ attribute: 'aria-labelledby' })],
        xo.prototype,
        'ariaLabelledBy',
        void 0
      ),
      o([at('.mdc-switch')], xo.prototype, 'mdcRoot', void 0),
      o([at('input')], xo.prototype, 'formElement', void 0),
      o([nt('mwc-ripple')], xo.prototype, 'ripple', void 0),
      o([ot()], xo.prototype, 'shouldRenderRipple', void 0),
      o([ct({ passive: !0 })], xo.prototype, 'handleRippleMouseDown', null),
      o([ct({ passive: !0 })], xo.prototype, 'handleRippleTouchStart', null);
    var vo = gt`.mdc-switch__thumb-underlay{left:-14px;right:initial;top:-17px;width:48px;height:48px}[dir=rtl] .mdc-switch__thumb-underlay,.mdc-switch__thumb-underlay[dir=rtl]{left:initial;right:-14px}.mdc-switch__native-control{width:64px;height:48px}.mdc-switch{display:inline-block;position:relative;outline:none;user-select:none}.mdc-switch.mdc-switch--checked .mdc-switch__track{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-switch.mdc-switch--checked .mdc-switch__thumb{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__track{background-color:#000;background-color:var(--mdc-theme-on-surface, #000)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb{background-color:#fff;background-color:var(--mdc-theme-surface, #fff);border-color:#fff;border-color:var(--mdc-theme-surface, #fff)}.mdc-switch__native-control{left:0;right:initial;position:absolute;top:0;margin:0;opacity:0;cursor:pointer;pointer-events:auto;transition:transform 90ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-switch__native-control,.mdc-switch__native-control[dir=rtl]{left:initial;right:0}.mdc-switch__track{box-sizing:border-box;width:36px;height:14px;border:1px solid transparent;border-radius:7px;opacity:.38;transition:opacity 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),border-color 90ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-switch__thumb-underlay{display:flex;position:absolute;align-items:center;justify-content:center;transform:translateX(0);transition:transform 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),border-color 90ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-switch__thumb{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);box-sizing:border-box;width:20px;height:20px;border:10px solid;border-radius:50%;pointer-events:none;z-index:1}.mdc-switch--checked .mdc-switch__track{opacity:.54}.mdc-switch--checked .mdc-switch__thumb-underlay{transform:translateX(16px)}[dir=rtl] .mdc-switch--checked .mdc-switch__thumb-underlay,.mdc-switch--checked .mdc-switch__thumb-underlay[dir=rtl]{transform:translateX(-16px)}.mdc-switch--checked .mdc-switch__native-control{transform:translateX(-16px)}[dir=rtl] .mdc-switch--checked .mdc-switch__native-control,.mdc-switch--checked .mdc-switch__native-control[dir=rtl]{transform:translateX(16px)}.mdc-switch--disabled{opacity:.38;pointer-events:none}.mdc-switch--disabled .mdc-switch__thumb{border-width:1px}.mdc-switch--disabled .mdc-switch__native-control{cursor:default;pointer-events:none}:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:transparent}`;
    let yo = class extends xo {};
    (yo.styles = [vo]), (yo = o([tt('mwc-switch')], yo));
    var wo,
      ko,
      Eo = {
        ANIMATE: 'mdc-drawer--animate',
        CLOSING: 'mdc-drawer--closing',
        DISMISSIBLE: 'mdc-drawer--dismissible',
        MODAL: 'mdc-drawer--modal',
        OPEN: 'mdc-drawer--open',
        OPENING: 'mdc-drawer--opening',
        ROOT: 'mdc-drawer',
      },
      Co = {
        APP_CONTENT_SELECTOR: '.mdc-drawer-app-content',
        CLOSE_EVENT: 'MDCDrawer:closed',
        OPEN_EVENT: 'MDCDrawer:opened',
        SCRIM_SELECTOR: '.mdc-drawer-scrim',
        LIST_SELECTOR: '.mdc-list,.mdc-deprecated-list',
        LIST_ITEM_ACTIVATED_SELECTOR:
          '.mdc-list-item--activated,.mdc-deprecated-list-item--activated',
      },
      Ao =
        (t(So, (wo = At)),
        Object.defineProperty(So, 'strings', {
          get: function () {
            return Co;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(So, 'cssClasses', {
          get: function () {
            return Eo;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(So, 'defaultAdapter', {
          get: function () {
            return {
              addClass: function () {},
              removeClass: function () {},
              hasClass: function () {
                return !1;
              },
              elementHasClass: function () {
                return !1;
              },
              notifyClose: function () {},
              notifyOpen: function () {},
              saveFocus: function () {},
              restoreFocus: function () {},
              focusActiveNavigationItem: function () {},
              trapFocus: function () {},
              releaseFocus: function () {},
            };
          },
          enumerable: !1,
          configurable: !0,
        }),
        (So.prototype.destroy = function () {
          this.animationFrame && cancelAnimationFrame(this.animationFrame),
            this.animationTimer && clearTimeout(this.animationTimer);
        }),
        (So.prototype.open = function () {
          var e = this;
          this.isOpen() ||
            this.isOpening() ||
            this.isClosing() ||
            (this.adapter.addClass(Eo.OPEN),
            this.adapter.addClass(Eo.ANIMATE),
            this.runNextAnimationFrame(function () {
              e.adapter.addClass(Eo.OPENING);
            }),
            this.adapter.saveFocus());
        }),
        (So.prototype.close = function () {
          !this.isOpen() ||
            this.isOpening() ||
            this.isClosing() ||
            this.adapter.addClass(Eo.CLOSING);
        }),
        (So.prototype.isOpen = function () {
          return this.adapter.hasClass(Eo.OPEN);
        }),
        (So.prototype.isOpening = function () {
          return (
            this.adapter.hasClass(Eo.OPENING) ||
            this.adapter.hasClass(Eo.ANIMATE)
          );
        }),
        (So.prototype.isClosing = function () {
          return this.adapter.hasClass(Eo.CLOSING);
        }),
        (So.prototype.handleKeydown = function (e) {
          var t = e.keyCode;
          ('Escape' !== e.key && 27 !== t) || this.close();
        }),
        (So.prototype.handleTransitionEnd = function (e) {
          var t = Eo.OPENING,
            i = Eo.CLOSING,
            r = Eo.OPEN,
            o = Eo.ANIMATE,
            a = Eo.ROOT;
          this.isElement(e.target) &&
            this.adapter.elementHasClass(e.target, a) &&
            (this.isClosing()
              ? (this.adapter.removeClass(r),
                this.closed(),
                this.adapter.restoreFocus(),
                this.adapter.notifyClose())
              : (this.adapter.focusActiveNavigationItem(),
                this.opened(),
                this.adapter.notifyOpen()),
            this.adapter.removeClass(o),
            this.adapter.removeClass(t),
            this.adapter.removeClass(i));
        }),
        (So.prototype.opened = function () {}),
        (So.prototype.closed = function () {}),
        (So.prototype.runNextAnimationFrame = function (e) {
          var t = this;
          cancelAnimationFrame(this.animationFrame),
            (this.animationFrame = requestAnimationFrame(function () {
              (t.animationFrame = 0),
                clearTimeout(t.animationTimer),
                (t.animationTimer = setTimeout(e, 0));
            }));
        }),
        (So.prototype.isElement = function (e) {
          return Boolean(e.classList);
        }),
        So);
    function So(e) {
      return (
        ((e =
          wo.call(this, r(r({}, So.defaultAdapter), e)) ||
          this).animationFrame = 0),
        (e.animationTimer = 0),
        e
      );
    }
    const Io = Ao;
    function To() {
      return (null !== ko && ko.apply(this, arguments)) || this;
    }
    const Ro =
        (t(To, (ko = Ao)),
        (To.prototype.handleScrimClick = function () {
          this.close();
        }),
        (To.prototype.opened = function () {
          this.adapter.trapFocus();
        }),
        (To.prototype.closed = function () {
          this.adapter.releaseFocus();
        }),
        To),
      Oo = document.$blockingElements;
    class Lo extends Ht {
      constructor() {
        super(...arguments),
          (this._previousFocus = null),
          (this.open = !1),
          (this.hasHeader = !1),
          (this.type = '');
      }
      get mdcFoundationClass() {
        return 'modal' === this.type ? Ro : Io;
      }
      createAdapter() {
        return Object.assign(Object.assign({}, Ft(this.mdcRoot)), {
          elementHasClass: (e, t) => e.classList.contains(t),
          saveFocus: () => {
            this._previousFocus = this.getRootNode().activeElement;
          },
          restoreFocus: () => {
            this._previousFocus &&
              this._previousFocus.focus &&
              this._previousFocus.focus();
          },
          notifyClose: () => {
            (this.open = !1),
              this.dispatchEvent(
                new Event(Co.CLOSE_EVENT, { bubbles: !0, cancelable: !0 })
              );
          },
          notifyOpen: () => {
            (this.open = !0),
              this.dispatchEvent(
                new Event(Co.OPEN_EVENT, { bubbles: !0, cancelable: !0 })
              );
          },
          focusActiveNavigationItem: () => {},
          trapFocus: () => {
            Oo.push(this), (this.appContent.inert = !0);
          },
          releaseFocus: () => {
            Oo.remove(this), (this.appContent.inert = !1);
          },
        });
      }
      _handleScrimClick() {
        this.mdcFoundation instanceof Ro &&
          this.mdcFoundation.handleScrimClick();
      }
      render() {
        var e = 'dismissible' === this.type || 'modal' === this.type,
          t = 'modal' === this.type,
          i = this.hasHeader
            ? Ge`
      <div class="mdc-drawer__header">
        <h3 class="mdc-drawer__title"><slot name="title"></slot></h3>
        <h6 class="mdc-drawer__subtitle"><slot name="subtitle"></slot></h6>
        <slot name="header"></slot>
      </div>
      `
            : '';
        return Ge`
      <aside class="mdc-drawer ${jt(
        (e = { 'mdc-drawer--dismissible': e, 'mdc-drawer--modal': t })
      )}">
        ${i}
        <div class="mdc-drawer__content"><slot></slot></div>
      </aside>
      ${
        t
          ? Ge`<div class="mdc-drawer-scrim"
                          @click="${this._handleScrimClick}"></div>`
          : ''
      }
      <div class="mdc-drawer-app-content">
        <slot name="appContent"></slot>
      </div>
      `;
      }
      firstUpdated() {
        this.mdcRoot.addEventListener('keydown', e =>
          this.mdcFoundation.handleKeydown(e)
        ),
          this.mdcRoot.addEventListener('transitionend', e =>
            this.mdcFoundation.handleTransitionEnd(e)
          );
      }
      updated(e) {
        e.has('type') && this.createFoundation();
      }
    }
    o([at('.mdc-drawer')], Lo.prototype, 'mdcRoot', void 0),
      o([at('.mdc-drawer-app-content')], Lo.prototype, 'appContent', void 0),
      o(
        [
          Bt(function (e) {
            '' !== this.type &&
              (e ? this.mdcFoundation.open() : this.mdcFoundation.close());
          }),
          rt({ type: Boolean, reflect: !0 }),
        ],
        Lo.prototype,
        'open',
        void 0
      ),
      o([rt({ type: Boolean })], Lo.prototype, 'hasHeader', void 0),
      o([rt({ reflect: !0 })], Lo.prototype, 'type', void 0);
    var Fo = gt`.mdc-drawer{border-color:rgba(0, 0, 0, 0.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);border-top-left-radius:0;border-top-right-radius:0;border-top-right-radius:var(--mdc-shape-large, 0);border-bottom-right-radius:0;border-bottom-right-radius:var(--mdc-shape-large, 0);border-bottom-left-radius:0;z-index:6;width:256px;display:flex;flex-direction:column;flex-shrink:0;box-sizing:border-box;height:100%;border-right-width:1px;border-right-style:solid;overflow:hidden;transition-property:transform;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.mdc-drawer .mdc-drawer__title{color:rgba(0, 0, 0, 0.87)}.mdc-drawer .mdc-deprecated-list-group__subheader{color:rgba(0, 0, 0, 0.6)}.mdc-drawer .mdc-drawer__subtitle{color:rgba(0, 0, 0, 0.6)}.mdc-drawer .mdc-deprecated-list-item__graphic{color:rgba(0, 0, 0, 0.6)}.mdc-drawer .mdc-deprecated-list-item{color:rgba(0, 0, 0, 0.87)}.mdc-drawer .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic{color:#6200ee}.mdc-drawer .mdc-deprecated-list-item--activated{color:rgba(98, 0, 238, 0.87)}[dir=rtl] .mdc-drawer,.mdc-drawer[dir=rtl]{border-top-left-radius:0;border-top-left-radius:var(--mdc-shape-large, 0);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:0;border-bottom-left-radius:var(--mdc-shape-large, 0)}.mdc-drawer .mdc-deprecated-list-item{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content{margin-left:256px;margin-right:0}[dir=rtl] .mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content,.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content[dir=rtl]{margin-left:0;margin-right:256px}[dir=rtl] .mdc-drawer,.mdc-drawer[dir=rtl]{border-right-width:0;border-left-width:1px;border-right-style:none;border-left-style:solid}.mdc-drawer .mdc-deprecated-list-item{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-subtitle2-font-size, 0.875rem);line-height:1.375rem;line-height:var(--mdc-typography-subtitle2-line-height, 1.375rem);font-weight:500;font-weight:var(--mdc-typography-subtitle2-font-weight, 500);letter-spacing:0.0071428571em;letter-spacing:var(--mdc-typography-subtitle2-letter-spacing, 0.0071428571em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle2-text-transform, inherit);height:calc(48px - 2 * 4px);margin:8px 8px;padding:0 8px}.mdc-drawer .mdc-deprecated-list-item:nth-child(1){margin-top:2px}.mdc-drawer .mdc-deprecated-list-item:nth-last-child(1){margin-bottom:0}.mdc-drawer .mdc-deprecated-list-group__subheader{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin:0;padding:0 16px}.mdc-drawer .mdc-deprecated-list-group__subheader::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-drawer .mdc-deprecated-list-divider{margin:3px 0 4px}.mdc-drawer .mdc-deprecated-list-item__text,.mdc-drawer .mdc-deprecated-list-item__graphic{pointer-events:none}.mdc-drawer--animate{transform:translateX(-100%)}[dir=rtl] .mdc-drawer--animate,.mdc-drawer--animate[dir=rtl]{transform:translateX(100%)}.mdc-drawer--opening{transform:translateX(0);transition-duration:250ms}[dir=rtl] .mdc-drawer--opening,.mdc-drawer--opening[dir=rtl]{transform:translateX(0)}.mdc-drawer--closing{transform:translateX(-100%);transition-duration:200ms}[dir=rtl] .mdc-drawer--closing,.mdc-drawer--closing[dir=rtl]{transform:translateX(100%)}.mdc-drawer__header{flex-shrink:0;box-sizing:border-box;min-height:64px;padding:0 16px 4px}.mdc-drawer__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:0.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, 0.0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-drawer__title::before{display:inline-block;width:0;height:36px;content:"";vertical-align:0}.mdc-drawer__title::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-drawer__subtitle{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-bottom:0}.mdc-drawer__subtitle::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-drawer__content{height:100%;overflow-y:auto;-webkit-overflow-scrolling:touch}.mdc-drawer--dismissible{left:0;right:initial;display:none;position:absolute}[dir=rtl] .mdc-drawer--dismissible,.mdc-drawer--dismissible[dir=rtl]{left:initial;right:0}.mdc-drawer--dismissible.mdc-drawer--open{display:flex}.mdc-drawer-app-content{margin-left:0;margin-right:0;position:relative}[dir=rtl] .mdc-drawer-app-content,.mdc-drawer-app-content[dir=rtl]{margin-left:0;margin-right:0}.mdc-drawer--modal{box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14),0px 6px 30px 5px rgba(0,0,0,.12);left:0;right:initial;display:none;position:fixed}.mdc-drawer--modal+.mdc-drawer-scrim{background-color:rgba(0, 0, 0, 0.32)}[dir=rtl] .mdc-drawer--modal,.mdc-drawer--modal[dir=rtl]{left:initial;right:0}.mdc-drawer--modal.mdc-drawer--open{display:flex}.mdc-drawer-scrim{display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:5;transition-property:opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.mdc-drawer--open+.mdc-drawer-scrim{display:block}.mdc-drawer--animate+.mdc-drawer-scrim{opacity:0}.mdc-drawer--opening+.mdc-drawer-scrim{transition-duration:250ms;opacity:1}.mdc-drawer--closing+.mdc-drawer-scrim{transition-duration:200ms;opacity:0}.mdc-drawer-app-content{overflow:auto;flex:1}:host{display:flex;height:100%}.mdc-drawer{width:256px;width:var(--mdc-drawer-width, 256px)}.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content{margin-left:256px;margin-left:var(--mdc-drawer-width, 256px);margin-right:0}[dir=rtl] .mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content,.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content[dir=rtl]{margin-left:0;margin-right:256px;margin-right:var(--mdc-drawer-width, 256px)}`;
    let No = class extends Lo {};
    (No.styles = [Fo]), (No = o([tt('mwc-drawer')], No));
    class Do extends _t {
      constructor() {
        super(...arguments),
          (this.disabled = !1),
          (this.onIcon = ''),
          (this.offIcon = ''),
          (this.on = !1),
          (this.shouldRenderRipple = !1),
          (this.rippleHandlers = new mi(
            () => ((this.shouldRenderRipple = !0), this.ripple)
          ));
      }
      handleClick() {
        (this.on = !this.on),
          this.dispatchEvent(
            new CustomEvent('icon-button-toggle-change', {
              detail: { isOn: this.on },
              bubbles: !0,
            })
          );
      }
      click() {
        this.mdcRoot.focus(), this.mdcRoot.click();
      }
      focus() {
        this.rippleHandlers.startFocus(), this.mdcRoot.focus();
      }
      blur() {
        this.rippleHandlers.endFocus(), this.mdcRoot.blur();
      }
      renderRipple() {
        return this.shouldRenderRipple
          ? Ge`
            <mwc-ripple
                .disabled="${this.disabled}"
                unbounded>
            </mwc-ripple>`
          : '';
      }
      render() {
        var e = { 'mdc-icon-button--on': this.on },
          t = (i = void 0 !== this.ariaLabelOn && void 0 !== this.ariaLabelOff)
            ? void 0
            : this.on,
          i = i
            ? this.on
              ? this.ariaLabelOn
              : this.ariaLabelOff
            : this.ariaLabel;
        return Ge`<button
          class="mdc-icon-button ${jt(e)}"
          aria-pressed="${Br(t)}"
          aria-label="${Br(i)}"
          @click="${this.handleClick}"
          ?disabled="${this.disabled}"
          @focus="${this.handleRippleFocus}"
          @blur="${this.handleRippleBlur}"
          @mousedown="${this.handleRippleMouseDown}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleTouchStart}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}"
        >${this.renderRipple()}
        <span class="mdc-icon-button__icon"
          ><slot name="offIcon"
            ><i class="material-icons">${this.offIcon}</i
          ></slot
        ></span>
        <span class="mdc-icon-button__icon mdc-icon-button__icon--on"
          ><slot name="onIcon"
            ><i class="material-icons">${this.onIcon}</i
          ></slot
        ></span>
      </button>`;
      }
      handleRippleMouseDown(e) {
        const t = () => {
          window.removeEventListener('mouseup', t),
            this.handleRippleDeactivate();
        };
        window.addEventListener('mouseup', t),
          this.rippleHandlers.startPress(e);
      }
      handleRippleTouchStart(e) {
        this.rippleHandlers.startPress(e);
      }
      handleRippleDeactivate() {
        this.rippleHandlers.endPress();
      }
      handleRippleMouseEnter() {
        this.rippleHandlers.startHover();
      }
      handleRippleMouseLeave() {
        this.rippleHandlers.endHover();
      }
      handleRippleFocus() {
        this.rippleHandlers.startFocus();
      }
      handleRippleBlur() {
        this.rippleHandlers.endFocus();
      }
    }
    o([at('.mdc-icon-button')], Do.prototype, 'mdcRoot', void 0),
      o(
        [Ri, rt({ type: String, attribute: 'aria-label' })],
        Do.prototype,
        'ariaLabel',
        void 0
      ),
      o([rt({ type: Boolean, reflect: !0 })], Do.prototype, 'disabled', void 0),
      o([rt({ type: String })], Do.prototype, 'onIcon', void 0),
      o([rt({ type: String })], Do.prototype, 'offIcon', void 0),
      o([rt({ type: String })], Do.prototype, 'ariaLabelOn', void 0),
      o([rt({ type: String })], Do.prototype, 'ariaLabelOff', void 0),
      o([rt({ type: Boolean, reflect: !0 })], Do.prototype, 'on', void 0),
      o([nt('mwc-ripple')], Do.prototype, 'ripple', void 0),
      o([ot()], Do.prototype, 'shouldRenderRipple', void 0),
      o([ct({ passive: !0 })], Do.prototype, 'handleRippleMouseDown', null),
      o([ct({ passive: !0 })], Do.prototype, 'handleRippleTouchStart', null);
    let $o = class extends Do {};
    ($o.styles = [Li]), ($o = o([tt('mwc-icon-button-toggle')], $o));
    class Po extends _t {
      constructor() {
        super(...arguments),
          (this.value = ''),
          (this.group = null),
          (this.tabindex = -1),
          (this.disabled = !1),
          (this.twoline = !1),
          (this.activated = !1),
          (this.graphic = null),
          (this.multipleGraphics = !1),
          (this.hasMeta = !1),
          (this.noninteractive = !1),
          (this.selected = !1),
          (this.shouldRenderRipple = !1),
          (this._managingList = null),
          (this.boundOnClick = this.onClick.bind(this)),
          (this._firstChanged = !0),
          (this._skipPropRequest = !1),
          (this.rippleHandlers = new mi(
            () => ((this.shouldRenderRipple = !0), this.ripple)
          )),
          (this.listeners = [
            {
              target: this,
              eventNames: ['click'],
              cb: () => {
                this.onClick();
              },
            },
            {
              target: this,
              eventNames: ['mouseenter'],
              cb: this.rippleHandlers.startHover,
            },
            {
              target: this,
              eventNames: ['mouseleave'],
              cb: this.rippleHandlers.endHover,
            },
            {
              target: this,
              eventNames: ['focus'],
              cb: this.rippleHandlers.startFocus,
            },
            {
              target: this,
              eventNames: ['blur'],
              cb: this.rippleHandlers.endFocus,
            },
            {
              target: this,
              eventNames: ['mousedown', 'touchstart'],
              cb: e => {
                var t = e.type;
                this.onDown('mousedown' === t ? 'mouseup' : 'touchend', e);
              },
            },
          ]);
      }
      get text() {
        const e = this.textContent;
        return e ? e.trim() : '';
      }
      render() {
        var e = this.renderText(),
          t = this.graphic ? this.renderGraphic() : Ge``,
          i = this.hasMeta ? this.renderMeta() : Ge``;
        return Ge`
      ${this.renderRipple()}
      ${t}
      ${e}
      ${i}`;
      }
      renderRipple() {
        return this.shouldRenderRipple
          ? Ge`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>`
          : this.activated
          ? Ge`<div class="fake-activated-ripple"></div>`
          : '';
      }
      renderGraphic() {
        var e = { multi: this.multipleGraphics };
        return Ge`
      <span class="mdc-deprecated-list-item__graphic material-icons ${jt(e)}">
        <slot name="graphic"></slot>
      </span>`;
      }
      renderMeta() {
        return Ge`
      <span class="mdc-deprecated-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`;
      }
      renderText() {
        var e = this.twoline ? this.renderTwoline() : this.renderSingleLine();
        return Ge`
      <span class="mdc-deprecated-list-item__text">
        ${e}
      </span>`;
      }
      renderSingleLine() {
        return Ge`<slot></slot>`;
      }
      renderTwoline() {
        return Ge`
      <span class="mdc-deprecated-list-item__primary-text">
        <slot></slot>
      </span>
      <span class="mdc-deprecated-list-item__secondary-text">
        <slot name="secondary"></slot>
      </span>
    `;
      }
      onClick() {
        this.fireRequestSelected(!this.selected, 'interaction');
      }
      onDown(e, t) {
        const i = () => {
          window.removeEventListener(e, i), this.rippleHandlers.endPress();
        };
        window.addEventListener(e, i), this.rippleHandlers.startPress(t);
      }
      fireRequestSelected(e, t) {
        this.noninteractive ||
          ((e = new CustomEvent('request-selected', {
            bubbles: !0,
            composed: !0,
            detail: { source: t, selected: e },
          })),
          this.dispatchEvent(e));
      }
      connectedCallback() {
        super.connectedCallback(),
          this.noninteractive || this.setAttribute('mwc-list-item', '');
        for (const e of this.listeners)
          for (const t of e.eventNames)
            e.target.addEventListener(t, e.cb, { passive: !0 });
      }
      disconnectedCallback() {
        super.disconnectedCallback();
        for (const e of this.listeners)
          for (const t of e.eventNames) e.target.removeEventListener(t, e.cb);
        this._managingList &&
          (this._managingList.debouncedLayout
            ? this._managingList.debouncedLayout(!0)
            : this._managingList.layout(!0));
      }
      firstUpdated() {
        var e = new Event('list-item-rendered', { bubbles: !0, composed: !0 });
        this.dispatchEvent(e);
      }
    }
    o([at('slot')], Po.prototype, 'slotElement', void 0),
      o([nt('mwc-ripple')], Po.prototype, 'ripple', void 0),
      o([rt({ type: String })], Po.prototype, 'value', void 0),
      o([rt({ type: String, reflect: !0 })], Po.prototype, 'group', void 0),
      o([rt({ type: Number, reflect: !0 })], Po.prototype, 'tabindex', void 0),
      o(
        [
          rt({ type: Boolean, reflect: !0 }),
          Bt(function (e) {
            e
              ? this.setAttribute('aria-disabled', 'true')
              : this.setAttribute('aria-disabled', 'false');
          }),
        ],
        Po.prototype,
        'disabled',
        void 0
      ),
      o([rt({ type: Boolean, reflect: !0 })], Po.prototype, 'twoline', void 0),
      o(
        [rt({ type: Boolean, reflect: !0 })],
        Po.prototype,
        'activated',
        void 0
      ),
      o([rt({ type: String, reflect: !0 })], Po.prototype, 'graphic', void 0),
      o([rt({ type: Boolean })], Po.prototype, 'multipleGraphics', void 0),
      o([rt({ type: Boolean })], Po.prototype, 'hasMeta', void 0),
      o(
        [
          rt({ type: Boolean, reflect: !0 }),
          Bt(function (e) {
            e
              ? (this.removeAttribute('aria-checked'),
                this.removeAttribute('mwc-list-item'),
                (this.selected = !1),
                (this.activated = !1),
                (this.tabIndex = -1))
              : this.setAttribute('mwc-list-item', '');
          }),
        ],
        Po.prototype,
        'noninteractive',
        void 0
      ),
      o(
        [
          rt({ type: Boolean, reflect: !0 }),
          Bt(function (e) {
            var t;
            (t =
              'gridcell' === (t = this.getAttribute('role')) ||
              'option' === t ||
              'row' === t ||
              'tab' === t) && e
              ? this.setAttribute('aria-selected', 'true')
              : t && this.setAttribute('aria-selected', 'false'),
              this._firstChanged
                ? (this._firstChanged = !1)
                : this._skipPropRequest ||
                  this.fireRequestSelected(e, 'property');
          }),
        ],
        Po.prototype,
        'selected',
        void 0
      ),
      o([ot()], Po.prototype, 'shouldRenderRipple', void 0),
      o([ot()], Po.prototype, '_managingList', void 0);
    var zo = gt`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
    let Mo = class extends Po {};
    (Mo.styles = [zo]), (Mo = o([tt('mwc-list-item')], Mo));
    var Ho = 'Backspace',
      Bo = 'Enter',
      Vo = 'Spacebar',
      Uo = 'PageUp',
      jo = ((ie = 'PageDown'), 'End'),
      Go = 'Home',
      Xo = (($t = 'ArrowLeft'), 'ArrowUp'),
      Ko = ((Dt = 'ArrowRight'), 'ArrowDown'),
      Wo = ((Kt = 'Delete'), (Yt = 'Escape'), (li = 'Tab'), new Set());
    Wo.add(Ho),
      Wo.add(Bo),
      Wo.add(Vo),
      Wo.add(Uo),
      Wo.add(ie),
      Wo.add(jo),
      Wo.add(Go),
      Wo.add($t),
      Wo.add(Xo),
      Wo.add(Dt),
      Wo.add(Ko),
      Wo.add(Kt),
      Wo.add(Yt),
      Wo.add(li),
      (ui = 8),
      (yi = 13),
      (Pt = 32),
      (Ii = 33),
      (Di = 34),
      (sr = 35),
      (Ur = 36),
      (Qr = 37),
      (co = 38),
      (mo = 39),
      (vo = 40),
      (Ao = 46),
      (Fo = 27),
      (Li = 9);
    var qo = new Map();
    qo.set(ui, Ho),
      qo.set(yi, Bo),
      qo.set(Pt, Vo),
      qo.set(Ii, Uo),
      qo.set(Di, ie),
      qo.set(sr, jo),
      qo.set(Ur, Go),
      qo.set(Qr, $t),
      qo.set(co, Xo),
      qo.set(mo, Dt),
      qo.set(vo, Ko),
      qo.set(Ao, Kt),
      qo.set(Fo, Yt),
      qo.set(Li, li);
    var Yo = new Set();
    function Qo(e) {
      var t = e.key;
      return Wo.has(t) ? t : (e = qo.get(e.keyCode)) || 'Unknown';
    }
    Yo.add(Uo),
      Yo.add(ie),
      Yo.add(jo),
      Yo.add(Go),
      Yo.add($t),
      Yo.add(Xo),
      Yo.add(Dt),
      Yo.add(Ko);
    var Zo = 'mdc-list-item--disabled',
      Jo =
        ((ie = 'mdc-list-item--selected'),
        (jo = 'mdc-list-item__text'),
        (Go = 'mdc-list-item__primary-text'),
        ($t = 'mdc-list'),
        {
          ACTION_EVENT: 'MDCList:action',
          ARIA_CHECKED: 'aria-checked',
          ARIA_CHECKED_CHECKBOX_SELECTOR:
            '[role="checkbox"][aria-checked="true"]',
          ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
          ARIA_CURRENT: 'aria-current',
          ARIA_DISABLED: 'aria-disabled',
          ARIA_ORIENTATION: 'aria-orientation',
          ARIA_ORIENTATION_HORIZONTAL: 'horizontal',
          ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
          ARIA_SELECTED: 'aria-selected',
          ARIA_INTERACTIVE_ROLES_SELECTOR: '[role="listbox"], [role="menu"]',
          ARIA_MULTI_SELECTABLE_SELECTOR: '[aria-multiselectable="true"]',
          CHECKBOX_RADIO_SELECTOR:
            'input[type="checkbox"], input[type="radio"]',
          CHECKBOX_SELECTOR: 'input[type="checkbox"]',
          CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:
            '\n    .' +
            (Uo = 'mdc-list-item') +
            ' button:not(:disabled),\n    .' +
            Uo +
            ' a,\n    .' +
            (((Dt = {})[(li = 'mdc-list-item--activated')] =
              'mdc-list-item--activated'),
            (Dt['' + Uo] = 'mdc-list-item'),
            (Dt['' + Zo] = 'mdc-list-item--disabled'),
            (Dt['' + ie] = 'mdc-list-item--selected'),
            (Dt['' + Go] = 'mdc-list-item__primary-text'),
            (Dt['' + $t] = 'mdc-list'),
            ((Dt = {})['' + li] = 'mdc-deprecated-list-item--activated'),
            (Dt['' + Uo] = 'mdc-deprecated-list-item'),
            (Dt['' + Zo] = 'mdc-deprecated-list-item--disabled'),
            (Dt['' + ie] = 'mdc-deprecated-list-item--selected'),
            (Dt['' + jo] = 'mdc-deprecated-list-item__text'),
            (Dt['' + Go] = 'mdc-deprecated-list-item__primary-text'),
            (Dt['' + $t] = 'mdc-deprecated-list'),
            (Dt = Dt))[Uo] +
            ' button:not(:disabled),\n    .' +
            Dt[Uo] +
            ' a\n  ',
          DEPRECATED_SELECTOR: '.mdc-deprecated-list',
          FOCUSABLE_CHILD_ELEMENTS:
            '\n    .' +
            Uo +
            ' button:not(:disabled),\n    .' +
            Uo +
            ' a,\n    .' +
            Uo +
            ' input[type="radio"]:not(:disabled),\n    .' +
            Uo +
            ' input[type="checkbox"]:not(:disabled),\n    .' +
            Dt[Uo] +
            ' button:not(:disabled),\n    .' +
            Dt[Uo] +
            ' a,\n    .' +
            Dt[Uo] +
            ' input[type="radio"]:not(:disabled),\n    .' +
            Dt[Uo] +
            ' input[type="checkbox"]:not(:disabled)\n  ',
          RADIO_SELECTOR: 'input[type="radio"]',
          SELECTED_ITEM_SELECTOR:
            '[aria-selected="true"], [aria-current="true"]',
        }),
      ea = { UNSET_INDEX: -1, TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300 };
    const ta = (e, t) => e - t,
      ia = ['input', 'button', 'textarea', 'select'];
    function ra(e) {
      return e instanceof Set;
    }
    const oa = e =>
      ra((e = e === ea.UNSET_INDEX ? new Set() : e))
        ? new Set(e)
        : new Set([e]);
    class aa extends At {
      constructor(e) {
        super(Object.assign(Object.assign({}, aa.defaultAdapter), e)),
          (this.isMulti_ = !1),
          (this.wrapFocus_ = !1),
          (this.isVertical_ = !0),
          (this.selectedIndex_ = ea.UNSET_INDEX),
          (this.focusedItemIndex_ = ea.UNSET_INDEX),
          (this.useActivatedClass_ = !1),
          (this.ariaCurrentAttrValue_ = null);
      }
      static get strings() {
        return Jo;
      }
      static get numbers() {
        return ea;
      }
      static get defaultAdapter() {
        return {
          focusItemAtIndex: () => {},
          getFocusedElementIndex: () => 0,
          getListItemCount: () => 0,
          isFocusInsideList: () => !1,
          isRootFocused: () => !1,
          notifyAction: () => {},
          notifySelected: () => {},
          getSelectedStateForElementIndex: () => !1,
          setDisabledStateForElementIndex: () => {},
          getDisabledStateForElementIndex: () => !1,
          setSelectedStateForElementIndex: () => {},
          setActivatedStateForElementIndex: () => {},
          setTabIndexForElementIndex: () => {},
          setAttributeForElementIndex: () => {},
          getAttributeForElementIndex: () => null,
        };
      }
      setWrapFocus(e) {
        this.wrapFocus_ = e;
      }
      setMulti(e) {
        this.isMulti_ = e;
        var t = this.selectedIndex_;
        e
          ? ra(t) ||
            (this.selectedIndex_ =
              t === ea.UNSET_INDEX ? new Set() : new Set([t]))
          : ra(t) &&
            (t.size
              ? ((t = Array.from(t).sort(ta)), (this.selectedIndex_ = t[0]))
              : (this.selectedIndex_ = ea.UNSET_INDEX));
      }
      setVerticalOrientation(e) {
        this.isVertical_ = e;
      }
      setUseActivatedClass(e) {
        this.useActivatedClass_ = e;
      }
      getSelectedIndex() {
        return this.selectedIndex_;
      }
      setSelectedIndex(e) {
        this.isIndexValid_(e) &&
          (this.isMulti_
            ? this.setMultiSelectionAtIndex_(oa(e))
            : this.setSingleSelectionAtIndex_(e));
      }
      handleFocusIn(e, t) {
        0 <= t && this.adapter.setTabIndexForElementIndex(t, 0);
      }
      handleFocusOut(e, t) {
        0 <= t && this.adapter.setTabIndexForElementIndex(t, -1),
          setTimeout(() => {
            this.adapter.isFocusInsideList() ||
              this.setTabindexToFirstSelectedItem_();
          }, 0);
      }
      handleKeydown(e, t, i) {
        var r = 'ArrowLeft' === Qo(e),
          o = 'ArrowUp' === Qo(e),
          a = 'ArrowRight' === Qo(e),
          n = 'ArrowDown' === Qo(e),
          d = 'Home' === Qo(e),
          s = 'End' === Qo(e),
          c = 'Enter' === Qo(e),
          l = 'Spacebar' === Qo(e);
        if (this.adapter.isRootFocused())
          o || s
            ? (e.preventDefault(), this.focusLastElement())
            : (n || d) && (e.preventDefault(), this.focusFirstElement());
        else {
          let p = this.adapter.getFocusedElementIndex();
          if (!(-1 === p && ((p = i), p < 0))) {
            let i;
            if ((this.isVertical_ && n) || (!this.isVertical_ && a))
              this.preventDefaultEvent(e), (i = this.focusNextElement(p));
            else if ((this.isVertical_ && o) || (!this.isVertical_ && r))
              this.preventDefaultEvent(e), (i = this.focusPrevElement(p));
            else if (d)
              this.preventDefaultEvent(e), (i = this.focusFirstElement());
            else if (s)
              this.preventDefaultEvent(e), (i = this.focusLastElement());
            else if ((c || l) && t) {
              if ((t = e.target) && 'A' === t.tagName && c) return;
              this.preventDefaultEvent(e),
                this.setSelectedIndexOnAction_(p, !0);
            }
            (this.focusedItemIndex_ = p),
              void 0 !== i &&
                (this.setTabindexAtIndex_(i), (this.focusedItemIndex_ = i));
          }
        }
      }
      handleSingleSelection(e, t, i) {
        e !== ea.UNSET_INDEX &&
          (this.setSelectedIndexOnAction_(e, t, i),
          this.setTabindexAtIndex_(e),
          (this.focusedItemIndex_ = e));
      }
      focusNextElement(e) {
        let t = e + 1;
        if (t >= this.adapter.getListItemCount()) {
          if (!this.wrapFocus_) return e;
          t = 0;
        }
        return this.adapter.focusItemAtIndex(t), t;
      }
      focusPrevElement(e) {
        let t = e - 1;
        if (t < 0) {
          if (!this.wrapFocus_) return e;
          t = this.adapter.getListItemCount() - 1;
        }
        return this.adapter.focusItemAtIndex(t), t;
      }
      focusFirstElement() {
        return this.adapter.focusItemAtIndex(0), 0;
      }
      focusLastElement() {
        var e = this.adapter.getListItemCount() - 1;
        return this.adapter.focusItemAtIndex(e), e;
      }
      setEnabled(e, t) {
        this.isIndexValid_(e) &&
          this.adapter.setDisabledStateForElementIndex(e, !t);
      }
      preventDefaultEvent(e) {
        var t = `${e.target.tagName}`.toLowerCase();
        -1 === ia.indexOf(t) && e.preventDefault();
      }
      setSingleSelectionAtIndex_(e, t = !0) {
        this.selectedIndex_ !== e &&
          (this.selectedIndex_ !== ea.UNSET_INDEX &&
            (this.adapter.setSelectedStateForElementIndex(
              this.selectedIndex_,
              !1
            ),
            this.useActivatedClass_ &&
              this.adapter.setActivatedStateForElementIndex(
                this.selectedIndex_,
                !1
              )),
          t && this.adapter.setSelectedStateForElementIndex(e, !0),
          this.useActivatedClass_ &&
            this.adapter.setActivatedStateForElementIndex(e, !0),
          this.setAriaForSingleSelectionAtIndex_(e),
          (this.selectedIndex_ = e),
          this.adapter.notifySelected(e));
      }
      setMultiSelectionAtIndex_(e, t = !0) {
        var i = ((e, t) => {
          const i = Array.from(e),
            r = Array.from(t),
            o = { added: [], removed: [] };
          var a = i.sort(ta),
            n = r.sort(ta);
          let d = 0,
            s = 0;
          for (; d < a.length || s < n.length; ) {
            var c = a[d],
              l = n[s];
            c !== l
              ? void 0 !== c && (void 0 === l || c < l)
                ? (o.removed.push(c), d++)
                : void 0 !== l &&
                  (void 0 === c || l < c) &&
                  (o.added.push(l), s++)
              : (d++, s++);
          }
          return o;
        })(oa(this.selectedIndex_), e);
        if (i.removed.length || i.added.length) {
          for (const e of i.removed)
            t && this.adapter.setSelectedStateForElementIndex(e, !1),
              this.useActivatedClass_ &&
                this.adapter.setActivatedStateForElementIndex(e, !1);
          for (const e of i.added)
            t && this.adapter.setSelectedStateForElementIndex(e, !0),
              this.useActivatedClass_ &&
                this.adapter.setActivatedStateForElementIndex(e, !0);
          (this.selectedIndex_ = e), this.adapter.notifySelected(e, i);
        }
      }
      setAriaForSingleSelectionAtIndex_(e) {
        this.selectedIndex_ === ea.UNSET_INDEX &&
          (this.ariaCurrentAttrValue_ =
            this.adapter.getAttributeForElementIndex(e, Jo.ARIA_CURRENT));
        var t = null !== this.ariaCurrentAttrValue_,
          i = t ? Jo.ARIA_CURRENT : Jo.ARIA_SELECTED;
        this.selectedIndex_ !== ea.UNSET_INDEX &&
          this.adapter.setAttributeForElementIndex(
            this.selectedIndex_,
            i,
            'false'
          ),
          (t = t ? this.ariaCurrentAttrValue_ : 'true'),
          this.adapter.setAttributeForElementIndex(e, i, t);
      }
      setTabindexAtIndex_(e) {
        this.focusedItemIndex_ === ea.UNSET_INDEX && 0 !== e
          ? this.adapter.setTabIndexForElementIndex(0, -1)
          : 0 <= this.focusedItemIndex_ &&
            this.focusedItemIndex_ !== e &&
            this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1),
          this.adapter.setTabIndexForElementIndex(e, 0);
      }
      setTabindexToFirstSelectedItem_() {
        let e = 0;
        'number' == typeof this.selectedIndex_ &&
        this.selectedIndex_ !== ea.UNSET_INDEX
          ? (e = this.selectedIndex_)
          : ra(this.selectedIndex_) &&
            0 < this.selectedIndex_.size &&
            (e = Math.min(...this.selectedIndex_)),
          this.setTabindexAtIndex_(e);
      }
      isIndexValid_(e) {
        if (e instanceof Set) {
          if (!this.isMulti_)
            throw new Error(
              'MDCListFoundation: Array of index is only supported for checkbox based list'
            );
          if (0 === e.size) return !0;
          {
            let t = !1;
            for (const i of e) if (((t = this.isIndexInRange_(i)), t)) break;
            return t;
          }
        }
        if ('number' != typeof e) return !1;
        if (this.isMulti_)
          throw new Error(
            'MDCListFoundation: Expected array of index for checkbox based list but got number: ' +
              e
          );
        return e === ea.UNSET_INDEX || this.isIndexInRange_(e);
      }
      isIndexInRange_(e) {
        var t = this.adapter.getListItemCount();
        return 0 <= e && e < t;
      }
      setSelectedIndexOnAction_(e, t, i) {
        if (!this.adapter.getDisabledStateForElementIndex(e)) {
          let r = e;
          this.isMulti_ && (r = new Set([e])),
            this.isIndexValid_(r) &&
              (this.isMulti_
                ? this.toggleMultiAtIndex(e, i, t)
                : t || i
                ? this.setSingleSelectionAtIndex_(e, t)
                : this.selectedIndex_ === e &&
                  this.setSingleSelectionAtIndex_(ea.UNSET_INDEX),
              t && this.adapter.notifyAction(e));
        }
      }
      toggleMultiAtIndex(e, t, i = !0) {
        let r = !1;
        r = void 0 === t ? !this.adapter.getSelectedStateForElementIndex(e) : t;
        const o = oa(this.selectedIndex_);
        r ? o.add(e) : o.delete(e), this.setMultiSelectionAtIndex_(o, i);
      }
    }
    const na = aa,
      da = e => e.hasAttribute('mwc-list-item');
    class sa extends Ht {
      constructor() {
        super(),
          (this.mdcAdapter = null),
          (this.mdcFoundationClass = na),
          (this.activatable = !1),
          (this.multi = !1),
          (this.wrapFocus = !1),
          (this.itemRoles = null),
          (this.innerRole = null),
          (this.innerAriaLabel = null),
          (this.rootTabbable = !1),
          (this.previousTabindex = null),
          (this.noninteractive = !1),
          (this.itemsReadyResolver = () => {}),
          (this.itemsReady = Promise.resolve([])),
          (this.items_ = []);
        const e = (function (e, t = 50) {
          let i;
          return function (r = !0) {
            clearTimeout(i),
              (i = setTimeout(() => {
                e(r);
              }, t));
          };
        })(this.layout.bind(this));
        this.debouncedLayout = (t = !0) => {
          (function () {
            const e = this.itemsReadyResolver;
            (this.itemsReady = new Promise(e => (this.itemsReadyResolver = e))),
              e();
          }.call(this),
            e(t));
        };
      }
      async getUpdateComplete() {
        var e = await super.getUpdateComplete();
        return await this.itemsReady, e;
      }
      get items() {
        return this.items_;
      }
      updateItems() {
        var e;
        const t = [];
        for (const i of null !== (e = this.assignedElements) && void 0 !== e
          ? e
          : [])
          da(i) && (t.push(i), (i._managingList = this)),
            i.hasAttribute('divider') &&
              !i.hasAttribute('role') &&
              i.setAttribute('role', 'separator');
        this.items_ = t;
        const i = new Set();
        this.items_.forEach((e, t) => {
          this.itemRoles
            ? e.setAttribute('role', this.itemRoles)
            : e.removeAttribute('role'),
            e.selected && i.add(t);
        }),
          this.multi
            ? this.select(i)
            : ((r = i.size ? i.entries().next().value[1] : -1), this.select(r));
        var r = new Event('items-updated', { bubbles: !0, composed: !0 });
        this.dispatchEvent(r);
      }
      get selected() {
        var e = this.index;
        if (!ra(e)) return -1 === e ? null : this.items[e];
        const t = [];
        for (const i of e) t.push(this.items[i]);
        return t;
      }
      get index() {
        return this.mdcFoundation ? this.mdcFoundation.getSelectedIndex() : -1;
      }
      render() {
        var e = null === this.innerRole ? void 0 : this.innerRole,
          t = null === this.innerAriaLabel ? void 0 : this.innerAriaLabel,
          i = this.rootTabbable ? '0' : '-1';
        return Ge`
      <!-- @ts-ignore -->
      <ul
          tabindex=${i}
          role="${Br(e)}"
          aria-label="${Br(t)}"
          class="mdc-deprecated-list"
          @keydown=${this.onKeydown}
          @focusin=${this.onFocusIn}
          @focusout=${this.onFocusOut}
          @request-selected=${this.onRequestSelected}
          @list-item-rendered=${this.onListItemConnected}>
        <slot></slot>
        ${this.renderPlaceholder()}
      </ul>
    `;
      }
      renderPlaceholder() {
        var e = null !== (e = this.assignedElements) && void 0 !== e ? e : [];
        return void 0 !== this.emptyMessage && 0 === e.length
          ? Ge`
        <mwc-list-item noninteractive>${this.emptyMessage}</mwc-list-item>
      `
          : null;
      }
      firstUpdated() {
        super.firstUpdated(),
          this.items.length ||
            (this.mdcFoundation.setMulti(this.multi), this.layout());
      }
      onFocusIn(e) {
        var t;
        this.mdcFoundation &&
          this.mdcRoot &&
          ((t = this.getIndexOfTarget(e)),
          this.mdcFoundation.handleFocusIn(e, t));
      }
      onFocusOut(e) {
        var t;
        this.mdcFoundation &&
          this.mdcRoot &&
          ((t = this.getIndexOfTarget(e)),
          this.mdcFoundation.handleFocusOut(e, t));
      }
      onKeydown(e) {
        var t, i;
        this.mdcFoundation &&
          this.mdcRoot &&
          ((t = this.getIndexOfTarget(e)),
          (i = e.target),
          (i = da(i)),
          this.mdcFoundation.handleKeydown(e, i, t));
      }
      onRequestSelected(e) {
        if (this.mdcFoundation) {
          let r = this.getIndexOfTarget(e);
          var t, i;
          (-1 === r &&
            (this.layout(), (r = this.getIndexOfTarget(e)), -1 === r)) ||
            this.items[r].disabled ||
            ((t = e.detail.selected),
            (i = e.detail.source),
            this.mdcFoundation.handleSingleSelection(r, 'interaction' === i, t),
            e.stopPropagation());
        }
      }
      getIndexOfTarget(e) {
        const t = this.items;
        for (const i of e.composedPath()) {
          let e = -1;
          if ((Lt(i) && da(i) && (e = t.indexOf(i)), -1 !== e)) return e;
        }
        return -1;
      }
      createAdapter() {
        return (
          (this.mdcAdapter = {
            getListItemCount: () => (this.mdcRoot ? this.items.length : 0),
            getFocusedElementIndex: this.getFocusedItemIndex,
            getAttributeForElementIndex: (e, t) => {
              if (!this.mdcRoot) return '';
              const i = this.items[e];
              return i ? i.getAttribute(t) : '';
            },
            setAttributeForElementIndex: (e, t, i) => {
              if (this.mdcRoot) {
                const r = this.items[e];
                r && r.setAttribute(t, i);
              }
            },
            focusItemAtIndex: e => {
              const t = this.items[e];
              t && t.focus();
            },
            setTabIndexForElementIndex: (e, t) => {
              const i = this.items[e];
              i && (i.tabindex = t);
            },
            notifyAction: e => {
              const t = { bubbles: !0, composed: !0 };
              (t.detail = { index: e }),
                (e = new CustomEvent('action', t)),
                this.dispatchEvent(e);
            },
            notifySelected: (e, t) => {
              const i = { bubbles: !0, composed: !0 };
              (i.detail = { index: e, diff: t }),
                (t = new CustomEvent('selected', i)),
                this.dispatchEvent(t);
            },
            isFocusInsideList: () => Mt(this),
            isRootFocused: () => {
              const e = this.mdcRoot;
              return e.getRootNode().activeElement === e;
            },
            setDisabledStateForElementIndex: (e, t) => {
              const i = this.items[e];
              i && (i.disabled = t);
            },
            getDisabledStateForElementIndex: e =>
              !!(e = this.items[e]) && e.disabled,
            setSelectedStateForElementIndex: (e, t) => {
              const i = this.items[e];
              i && (i.selected = t);
            },
            getSelectedStateForElementIndex: e =>
              !!(e = this.items[e]) && e.selected,
            setActivatedStateForElementIndex: (e, t) => {
              const i = this.items[e];
              i && (i.activated = t);
            },
          }),
          this.mdcAdapter
        );
      }
      selectUi(e, t = !1) {
        const i = this.items[e];
        i && ((i.selected = !0), (i.activated = t));
      }
      deselectUi(e) {
        const t = this.items[e];
        t && ((t.selected = !1), (t.activated = !1));
      }
      select(e) {
        this.mdcFoundation && this.mdcFoundation.setSelectedIndex(e);
      }
      toggle(e, t) {
        this.multi && this.mdcFoundation.toggleMultiAtIndex(e, t);
      }
      onListItemConnected(e) {
        (e = e.target), this.layout(-1 === this.items.indexOf(e));
      }
      layout(e = !0) {
        e && this.updateItems();
        const t = this.items[0];
        for (const e of this.items) e.tabindex = -1;
        t &&
          (this.noninteractive
            ? this.previousTabindex || (this.previousTabindex = t)
            : (t.tabindex = 0)),
          this.itemsReadyResolver();
      }
      getFocusedItemIndex() {
        if (!this.mdcRoot) return -1;
        if (!this.items.length) return -1;
        var e = zt();
        if (!e.length) return -1;
        for (let i = e.length - 1; 0 <= i; i--) {
          var t = e[i];
          if (da(t)) return this.items.indexOf(t);
        }
        return -1;
      }
      focusItemAtIndex(e) {
        for (const e of this.items)
          if (0 === e.tabindex) {
            e.tabindex = -1;
            break;
          }
        (this.items[e].tabindex = 0), this.items[e].focus();
      }
      focus() {
        const e = this.mdcRoot;
        e && e.focus();
      }
      blur() {
        const e = this.mdcRoot;
        e && e.blur();
      }
    }
    o([rt({ type: String })], sa.prototype, 'emptyMessage', void 0),
      o([at('.mdc-deprecated-list')], sa.prototype, 'mdcRoot', void 0),
      o([pt('', !0, '*')], sa.prototype, 'assignedElements', void 0),
      o(
        [pt('', !0, '[tabindex="0"]')],
        sa.prototype,
        'tabbableElements',
        void 0
      ),
      o(
        [
          rt({ type: Boolean }),
          Bt(function (e) {
            this.mdcFoundation && this.mdcFoundation.setUseActivatedClass(e);
          }),
        ],
        sa.prototype,
        'activatable',
        void 0
      ),
      o(
        [
          rt({ type: Boolean }),
          Bt(function (e, t) {
            this.mdcFoundation && this.mdcFoundation.setMulti(e),
              void 0 !== t && this.layout();
          }),
        ],
        sa.prototype,
        'multi',
        void 0
      ),
      o(
        [
          rt({ type: Boolean }),
          Bt(function (e) {
            this.mdcFoundation && this.mdcFoundation.setWrapFocus(e);
          }),
        ],
        sa.prototype,
        'wrapFocus',
        void 0
      ),
      o(
        [
          rt({ type: String }),
          Bt(function (e, t) {
            void 0 !== t && this.updateItems();
          }),
        ],
        sa.prototype,
        'itemRoles',
        void 0
      ),
      o([rt({ type: String })], sa.prototype, 'innerRole', void 0),
      o([rt({ type: String })], sa.prototype, 'innerAriaLabel', void 0),
      o([rt({ type: Boolean })], sa.prototype, 'rootTabbable', void 0),
      o(
        [
          rt({ type: Boolean, reflect: !0 }),
          Bt(function (e) {
            var t;
            if (e) {
              const e =
                null !==
                  (t =
                    null === (t = this.tabbableElements) || void 0 === t
                      ? void 0
                      : t[0]) && void 0 !== t
                  ? t
                  : null;
              (this.previousTabindex = e),
                e && e.setAttribute('tabindex', '-1');
            } else !e && this.previousTabindex && (this.previousTabindex.setAttribute('tabindex', '0'), (this.previousTabindex = null));
          }),
        ],
        sa.prototype,
        'noninteractive',
        void 0
      ),
      (Uo = gt`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{display:block}.mdc-deprecated-list{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);line-height:1.5rem;margin:0;padding:8px 0;list-style-type:none;color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));padding:var(--mdc-list-vertical-padding, 8px) 0}.mdc-deprecated-list:focus{outline:none}.mdc-deprecated-list-item{height:48px}.mdc-deprecated-list--dense{padding-top:4px;padding-bottom:4px;font-size:.812rem}.mdc-deprecated-list ::slotted([divider]){height:0;margin:0;border:none;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgba(0, 0, 0, 0.12)}.mdc-deprecated-list ::slotted([divider][padded]){margin:0 var(--mdc-list-side-padding, 16px)}.mdc-deprecated-list ::slotted([divider][inset]){margin-left:var(--mdc-list-inset-margin, 72px);margin-right:0;width:calc( 100% - var(--mdc-list-inset-margin, 72px) )}[dir=rtl] .mdc-deprecated-list ::slotted([divider][inset]),.mdc-deprecated-list ::slotted([divider][inset][dir=rtl]){margin-left:0;margin-right:var(--mdc-list-inset-margin, 72px)}.mdc-deprecated-list ::slotted([divider][inset][padded]){width:calc( 100% - var(--mdc-list-inset-margin, 72px) - var(--mdc-list-side-padding, 16px) )}.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:40px}.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 20px}.mdc-deprecated-list--two-line.mdc-deprecated-list--dense ::slotted([mwc-list-item]),.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:60px}.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 36px}:host([noninteractive]){pointer-events:none;cursor:default}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text){display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}`);
    let ca = class extends sa {};
    (ca.styles = [Uo]), (ca = o([tt('mwc-list')], ca));
    class la extends Po {
      constructor() {
        super(...arguments), (this.left = !1), (this.graphic = 'control');
      }
      render() {
        var e = {
            'mdc-deprecated-list-item__graphic': this.left,
            'mdc-deprecated-list-item__meta': !this.left,
          },
          t = this.renderText(),
          i =
            this.graphic && 'control' !== this.graphic && !this.left
              ? this.renderGraphic()
              : Ge``,
          r = this.hasMeta && this.left ? this.renderMeta() : Ge``,
          o = this.renderRipple();
        return Ge`
      ${o}
      ${i}
      ${this.left ? '' : t}
      <span class=${jt(e)}>
        <mwc-checkbox
            reducedTouchTarget
            tabindex=${this.tabindex}
            .checked=${this.selected}
            ?disabled=${this.disabled}
            @change=${this.onChange}>
        </mwc-checkbox>
      </span>
      ${this.left ? t : ''}
      ${r}`;
      }
      async onChange(e) {
        (e = e.target),
          this.selected === e.checked ||
            ((this._skipPropRequest = !0),
            (this.selected = e.checked),
            await this.updateComplete,
            (this._skipPropRequest = !1));
      }
    }
    o([at('slot')], la.prototype, 'slotElement', void 0),
      o([at('mwc-checkbox')], la.prototype, 'checkboxElement', void 0),
      o([rt({ type: Boolean })], la.prototype, 'left', void 0),
      o([rt({ type: String, reflect: !0 })], la.prototype, 'graphic', void 0),
      (Uo = gt`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}`);
    let pa = class extends la {};
    (pa.styles = [zo, Uo]), (pa = o([tt('mwc-check-list-item')], pa));
    class ma extends Po {
      constructor() {
        super(...arguments),
          (this.left = !1),
          (this.graphic = 'control'),
          (this._changeFromClick = !1);
      }
      render() {
        var e = {
            'mdc-deprecated-list-item__graphic': this.left,
            'mdc-deprecated-list-item__meta': !this.left,
          },
          t = this.renderText(),
          i =
            this.graphic && 'control' !== this.graphic && !this.left
              ? this.renderGraphic()
              : Ge``,
          r = this.hasMeta && this.left ? this.renderMeta() : Ge``,
          o = this.renderRipple();
        return Ge`
      ${o}
      ${i}
      ${this.left ? '' : t}
      <mwc-radio
          global
          class=${jt(e)}
          tabindex=${this.tabindex}
          name=${Br(null === this.group ? void 0 : this.group)}
          .checked=${this.selected}
          ?disabled=${this.disabled}
          @checked=${this.onChange}>
      </mwc-radio>
      ${this.left ? t : ''}
      ${r}`;
      }
      onClick() {
        (this._changeFromClick = !0), super.onClick();
      }
      async onChange(e) {
        (e = e.target),
          this.selected === e.checked ||
            ((this._skipPropRequest = !0),
            (this.selected = e.checked),
            await this.updateComplete,
            (this._skipPropRequest = !1),
            this._changeFromClick ||
              this.fireRequestSelected(this.selected, 'interaction')),
          (this._changeFromClick = !1);
      }
    }
    o([at('slot')], ma.prototype, 'slotElement', void 0),
      o([at('mwc-radio')], ma.prototype, 'radioElement', void 0),
      o([rt({ type: Boolean })], ma.prototype, 'left', void 0),
      o([rt({ type: String, reflect: !0 })], ma.prototype, 'graphic', void 0);
    let ha = class extends ma {};
    (ha.styles = [zo, Uo]), (ha = o([tt('mwc-radio-list-item')], ha));
    var ua,
      fa,
      ga = {
        ANCHOR: 'mdc-menu-surface--anchor',
        ANIMATING_CLOSED: 'mdc-menu-surface--animating-closed',
        ANIMATING_OPEN: 'mdc-menu-surface--animating-open',
        FIXED: 'mdc-menu-surface--fixed',
        IS_OPEN_BELOW: 'mdc-menu-surface--is-open-below',
        OPEN: 'mdc-menu-surface--open',
        ROOT: 'mdc-menu-surface',
      },
      ba = {
        CLOSED_EVENT: 'MDCMenuSurface:closed',
        CLOSING_EVENT: 'MDCMenuSurface:closing',
        OPENED_EVENT: 'MDCMenuSurface:opened',
        FOCUSABLE_ELEMENTS: [
          'button:not(:disabled)',
          '[href]:not([aria-disabled="true"])',
          'input:not(:disabled)',
          'select:not(:disabled)',
          'textarea:not(:disabled)',
          '[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])',
        ].join(', '),
      },
      _a = {
        TRANSITION_OPEN_DURATION: 120,
        TRANSITION_CLOSE_DURATION: 75,
        MARGIN_TO_EDGE: 32,
        ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO: 0.67,
      };
    ((Uo = ua = ua || {})[(Uo.BOTTOM = 1)] = 'BOTTOM'),
      (Uo[(Uo.CENTER = 2)] = 'CENTER'),
      (Uo[(Uo.RIGHT = 4)] = 'RIGHT'),
      (Uo[(Uo.FLIP_RTL = 8)] = 'FLIP_RTL'),
      ((Uo = fa = fa || {})[(Uo.TOP_LEFT = 0)] = 'TOP_LEFT'),
      (Uo[(Uo.TOP_RIGHT = 4)] = 'TOP_RIGHT'),
      (Uo[(Uo.BOTTOM_LEFT = 1)] = 'BOTTOM_LEFT'),
      (Uo[(Uo.BOTTOM_RIGHT = 5)] = 'BOTTOM_RIGHT'),
      (Uo[(Uo.TOP_START = 8)] = 'TOP_START'),
      (Uo[(Uo.TOP_END = 12)] = 'TOP_END'),
      (Uo[(Uo.BOTTOM_START = 9)] = 'BOTTOM_START'),
      (Uo[(Uo.BOTTOM_END = 13)] = 'BOTTOM_END');
    var xa,
      va =
        (t(ya, (xa = At)),
        Object.defineProperty(ya, 'cssClasses', {
          get: function () {
            return ga;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(ya, 'strings', {
          get: function () {
            return ba;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(ya, 'numbers', {
          get: function () {
            return _a;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(ya, 'Corner', {
          get: function () {
            return fa;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(ya, 'defaultAdapter', {
          get: function () {
            return {
              addClass: function () {},
              removeClass: function () {},
              hasClass: function () {
                return !1;
              },
              hasAnchor: function () {
                return !1;
              },
              isElementInContainer: function () {
                return !1;
              },
              isFocused: function () {
                return !1;
              },
              isRtl: function () {
                return !1;
              },
              getInnerDimensions: function () {
                return { height: 0, width: 0 };
              },
              getAnchorDimensions: function () {
                return null;
              },
              getWindowDimensions: function () {
                return { height: 0, width: 0 };
              },
              getBodyDimensions: function () {
                return { height: 0, width: 0 };
              },
              getWindowScroll: function () {
                return { x: 0, y: 0 };
              },
              setPosition: function () {},
              setMaxHeight: function () {},
              setTransformOrigin: function () {},
              saveFocus: function () {},
              restoreFocus: function () {},
              notifyClose: function () {},
              notifyOpen: function () {},
              notifyClosing: function () {},
            };
          },
          enumerable: !1,
          configurable: !0,
        }),
        (ya.prototype.init = function () {
          var e = (t = ya.cssClasses).ROOT,
            t = t.OPEN;
          if (!this.adapter.hasClass(e))
            throw new Error(e + ' class required in root element.');
          this.adapter.hasClass(t) && (this.isSurfaceOpen = !0);
        }),
        (ya.prototype.destroy = function () {
          clearTimeout(this.openAnimationEndTimerId),
            clearTimeout(this.closeAnimationEndTimerId),
            cancelAnimationFrame(this.animationRequestId);
        }),
        (ya.prototype.setAnchorCorner = function (e) {
          this.anchorCorner = e;
        }),
        (ya.prototype.flipCornerHorizontally = function () {
          this.originCorner = this.originCorner ^ ua.RIGHT;
        }),
        (ya.prototype.setAnchorMargin = function (e) {
          (this.anchorMargin.top = e.top || 0),
            (this.anchorMargin.right = e.right || 0),
            (this.anchorMargin.bottom = e.bottom || 0),
            (this.anchorMargin.left = e.left || 0);
        }),
        (ya.prototype.setIsHoisted = function (e) {
          this.isHoistedElement = e;
        }),
        (ya.prototype.setFixedPosition = function (e) {
          this.isFixedPosition = e;
        }),
        (ya.prototype.setAbsolutePosition = function (e, t) {
          (this.position.x = this.isFinite(e) ? e : 0),
            (this.position.y = this.isFinite(t) ? t : 0);
        }),
        (ya.prototype.setIsHorizontallyCenteredOnViewport = function (e) {
          this.isHorizontallyCenteredOnViewport = e;
        }),
        (ya.prototype.setQuickOpen = function (e) {
          this.isQuickOpen = e;
        }),
        (ya.prototype.setMaxHeight = function (e) {
          this.maxHeight = e;
        }),
        (ya.prototype.isOpen = function () {
          return this.isSurfaceOpen;
        }),
        (ya.prototype.open = function () {
          var e = this;
          this.isSurfaceOpen ||
            (this.adapter.saveFocus(),
            this.isQuickOpen
              ? ((this.isSurfaceOpen = !0),
                this.adapter.addClass(ya.cssClasses.OPEN),
                (this.dimensions = this.adapter.getInnerDimensions()),
                this.autoposition(),
                this.adapter.notifyOpen())
              : (this.adapter.addClass(ya.cssClasses.ANIMATING_OPEN),
                (this.animationRequestId = requestAnimationFrame(function () {
                  (e.dimensions = e.adapter.getInnerDimensions()),
                    e.autoposition(),
                    e.adapter.addClass(ya.cssClasses.OPEN),
                    (e.openAnimationEndTimerId = setTimeout(function () {
                      (e.openAnimationEndTimerId = 0),
                        e.adapter.removeClass(ya.cssClasses.ANIMATING_OPEN),
                        e.adapter.notifyOpen();
                    }, _a.TRANSITION_OPEN_DURATION));
                })),
                (this.isSurfaceOpen = !0)));
        }),
        (ya.prototype.close = function (e) {
          var t = this;
          if ((void 0 === e && (e = !1), this.isSurfaceOpen)) {
            if ((this.adapter.notifyClosing(), this.isQuickOpen))
              return (
                (this.isSurfaceOpen = !1),
                e || this.maybeRestoreFocus(),
                this.adapter.removeClass(ya.cssClasses.OPEN),
                this.adapter.removeClass(ya.cssClasses.IS_OPEN_BELOW),
                void this.adapter.notifyClose()
              );
            this.adapter.addClass(ya.cssClasses.ANIMATING_CLOSED),
              requestAnimationFrame(function () {
                t.adapter.removeClass(ya.cssClasses.OPEN),
                  t.adapter.removeClass(ya.cssClasses.IS_OPEN_BELOW),
                  (t.closeAnimationEndTimerId = setTimeout(function () {
                    (t.closeAnimationEndTimerId = 0),
                      t.adapter.removeClass(ya.cssClasses.ANIMATING_CLOSED),
                      t.adapter.notifyClose();
                  }, _a.TRANSITION_CLOSE_DURATION));
              }),
              (this.isSurfaceOpen = !1),
              e || this.maybeRestoreFocus();
          }
        }),
        (ya.prototype.handleBodyClick = function (e) {
          (e = e.target), this.adapter.isElementInContainer(e) || this.close();
        }),
        (ya.prototype.handleKeydown = function (e) {
          var t = e.keyCode;
          ('Escape' !== e.key && 27 !== t) || this.close();
        }),
        (ya.prototype.autoposition = function () {
          this.measurements = this.getAutoLayoutmeasurements();
          var e = this.getoriginCorner(),
            t = this.getMenuSurfaceMaxHeight(e),
            i = this.hasBit(e, ua.BOTTOM) ? 'bottom' : 'top',
            r = this.hasBit(e, ua.RIGHT) ? 'right' : 'left',
            o = this.getHorizontalOriginOffset(e),
            a = this.getVerticalOriginOffset(e),
            n = (s = this.measurements).anchorSize,
            d = s.surfaceSize,
            s = (((s = {})[r] = o), (s[i] = a), s);
          n.width / d.width > _a.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO &&
            (r = 'center'),
            (this.isHoistedElement || this.isFixedPosition) &&
              this.adjustPositionForHoistedElement(s),
            this.adapter.setTransformOrigin(r + ' ' + i),
            this.adapter.setPosition(s),
            this.adapter.setMaxHeight(t ? t + 'px' : ''),
            this.hasBit(e, ua.BOTTOM) ||
              this.adapter.addClass(ya.cssClasses.IS_OPEN_BELOW);
        }),
        (ya.prototype.getAutoLayoutmeasurements = function () {
          var e = this.adapter.getAnchorDimensions(),
            t = this.adapter.getBodyDimensions(),
            i = this.adapter.getWindowDimensions(),
            r = this.adapter.getWindowScroll();
          return {
            anchorSize: (e = e || {
              top: this.position.y,
              right: this.position.x,
              bottom: this.position.y,
              left: this.position.x,
              width: 0,
              height: 0,
            }),
            bodySize: t,
            surfaceSize: this.dimensions,
            viewportDistance: {
              top: e.top,
              right: i.width - e.right,
              bottom: i.height - e.bottom,
              left: e.left,
            },
            viewportSize: i,
            windowScroll: r,
          };
        }),
        (ya.prototype.getoriginCorner = function () {
          var e = this.originCorner,
            t = (n = this.measurements).viewportDistance,
            i = n.anchorSize,
            r = n.surfaceSize,
            o = ya.numbers.MARGIN_TO_EDGE;
          !(
            0 <
            (d = this.hasBit(this.anchorCorner, ua.BOTTOM)
              ? ((s = t.top - o + this.anchorMargin.bottom),
                t.bottom - o - this.anchorMargin.bottom)
              : ((s = t.top - o + this.anchorMargin.top),
                t.bottom - o + i.height - this.anchorMargin.top)) -
              r.height
          ) &&
            d < s &&
            (e = this.setBit(e, ua.BOTTOM));
          var a,
            n = this.adapter.isRtl(),
            d =
              ((o = this.hasBit(this.anchorCorner, ua.FLIP_RTL)),
              this.hasBit(this.anchorCorner, ua.RIGHT) ||
                this.hasBit(e, ua.RIGHT)),
            s = !1;
          return (
            (o = (s = n && o ? !d : d)
              ? ((a = t.left + i.width + this.anchorMargin.right),
                t.right - this.anchorMargin.right)
              : ((a = t.left + this.anchorMargin.left),
                t.right + i.width - this.anchorMargin.left)),
            (t = 0 < a - r.width),
            (i = 0 < o - r.width),
            (r = this.hasBit(e, ua.FLIP_RTL) && this.hasBit(e, ua.RIGHT)),
            (i && r && n) || (!t && r)
              ? (e = this.unsetBit(e, ua.RIGHT))
              : ((t && s && n) || (t && !s && d) || (!i && o <= a)) &&
                (e = this.setBit(e, ua.RIGHT)),
            e
          );
        }),
        (ya.prototype.getMenuSurfaceMaxHeight = function (e) {
          if (0 < this.maxHeight) return this.maxHeight;
          var t = this.measurements.viewportDistance,
            i = 0,
            r = this.hasBit(e, ua.BOTTOM),
            o = this.hasBit(this.anchorCorner, ua.BOTTOM);
          return (
            (e = ya.numbers.MARGIN_TO_EDGE),
            r
              ? ((i = t.top + this.anchorMargin.top - e),
                o || (i += this.measurements.anchorSize.height))
              : ((i =
                  t.bottom -
                  this.anchorMargin.bottom +
                  this.measurements.anchorSize.height -
                  e),
                o && (i -= this.measurements.anchorSize.height)),
            i
          );
        }),
        (ya.prototype.getHorizontalOriginOffset = function (e) {
          var t = this.measurements.anchorSize,
            i = this.hasBit(e, ua.RIGHT);
          return (
            (e = this.hasBit(this.anchorCorner, ua.RIGHT)),
            i
              ? ((i = e
                  ? t.width - this.anchorMargin.left
                  : this.anchorMargin.right),
                this.isHoistedElement || this.isFixedPosition
                  ? i -
                    (this.measurements.viewportSize.width -
                      this.measurements.bodySize.width)
                  : i)
              : e
              ? t.width - this.anchorMargin.right
              : this.anchorMargin.left
          );
        }),
        (ya.prototype.getVerticalOriginOffset = function (e) {
          var t = this.measurements.anchorSize,
            i = this.hasBit(e, ua.BOTTOM);
          return (
            (e = this.hasBit(this.anchorCorner, ua.BOTTOM)),
            i
              ? e
                ? t.height - this.anchorMargin.top
                : -this.anchorMargin.bottom
              : e
              ? t.height + this.anchorMargin.bottom
              : this.anchorMargin.top
          );
        }),
        (ya.prototype.adjustPositionForHoistedElement = function (e) {
          var t,
            i,
            r = (s = this.measurements).windowScroll,
            o = s.viewportDistance,
            a = s.surfaceSize,
            d = s.viewportSize,
            s = Object.keys(e);
          try {
            for (var c = n(s), l = c.next(); !l.done; l = c.next()) {
              var p = l.value,
                m = e[p] || 0;
              !this.isHorizontallyCenteredOnViewport ||
              ('left' !== p && 'right' !== p)
                ? ((m += o[p]),
                  this.isFixedPosition ||
                    ('top' === p
                      ? (m += r.y)
                      : 'bottom' === p
                      ? (m -= r.y)
                      : 'left' === p
                      ? (m += r.x)
                      : (m -= r.x)),
                  (e[p] = m))
                : (e[p] = (d.width - a.width) / 2);
            }
          } catch (e) {
            t = { error: e };
          } finally {
            try {
              l && !l.done && (i = c.return) && i.call(c);
            } finally {
              if (t) throw t.error;
            }
          }
        }),
        (ya.prototype.maybeRestoreFocus = function () {
          var e = this.adapter.isFocused(),
            t =
              document.activeElement &&
              this.adapter.isElementInContainer(document.activeElement);
          (e || t) && this.adapter.restoreFocus();
        }),
        (ya.prototype.hasBit = function (e, t) {
          return Boolean(e & t);
        }),
        (ya.prototype.setBit = function (e, t) {
          return e | t;
        }),
        (ya.prototype.unsetBit = function (e, t) {
          return e ^ t;
        }),
        (ya.prototype.isFinite = function (e) {
          return 'number' == typeof e && isFinite(e);
        }),
        ya);
    function ya(e) {
      return (
        ((e =
          xa.call(this, r(r({}, ya.defaultAdapter), e)) || this).isSurfaceOpen =
          !1),
        (e.isQuickOpen = !1),
        (e.isHoistedElement = !1),
        (e.isFixedPosition = !1),
        (e.isHorizontallyCenteredOnViewport = !1),
        (e.maxHeight = 0),
        (e.openAnimationEndTimerId = 0),
        (e.closeAnimationEndTimerId = 0),
        (e.animationRequestId = 0),
        (e.anchorCorner = fa.TOP_START),
        (e.originCorner = fa.TOP_START),
        (e.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }),
        (e.position = { x: 0, y: 0 }),
        e
      );
    }
    const wa = va,
      ka = {
        TOP_LEFT: fa.TOP_LEFT,
        TOP_RIGHT: fa.TOP_RIGHT,
        BOTTOM_LEFT: fa.BOTTOM_LEFT,
        BOTTOM_RIGHT: fa.BOTTOM_RIGHT,
        TOP_START: fa.TOP_START,
        TOP_END: fa.TOP_END,
        BOTTOM_START: fa.BOTTOM_START,
        BOTTOM_END: fa.BOTTOM_END,
      };
    class Ea extends Ht {
      constructor() {
        super(...arguments),
          (this.mdcFoundationClass = wa),
          (this.absolute = !1),
          (this.fullwidth = !1),
          (this.fixed = !1),
          (this.x = null),
          (this.y = null),
          (this.quick = !1),
          (this.open = !1),
          (this.stayOpenOnBodyClick = !1),
          (this.bitwiseCorner = fa.TOP_START),
          (this.previousMenuCorner = null),
          (this.menuCorner = 'START'),
          (this.corner = 'TOP_START'),
          (this.styleTop = ''),
          (this.styleLeft = ''),
          (this.styleRight = ''),
          (this.styleBottom = ''),
          (this.styleMaxHeight = ''),
          (this.styleTransformOrigin = ''),
          (this.anchor = null),
          (this.previouslyFocused = null),
          (this.previousAnchor = null),
          (this.onBodyClickBound = () => {});
      }
      render() {
        var e = {
            'mdc-menu-surface--fixed': this.fixed,
            'mdc-menu-surface--fullwidth': this.fullwidth,
          },
          t = {
            top: this.styleTop,
            left: this.styleLeft,
            right: this.styleRight,
            bottom: this.styleBottom,
            'max-height': this.styleMaxHeight,
            'transform-origin': this.styleTransformOrigin,
          };
        return Ge`
      <div
          class="mdc-menu-surface ${jt(e)}"
          style="${si(t)}"
          @keydown=${this.onKeydown}
          @opened=${this.registerBodyClick}
          @closed=${this.deregisterBodyClick}>
        <slot></slot>
      </div>`;
      }
      createAdapter() {
        return Object.assign(Object.assign({}, Ft(this.mdcRoot)), {
          hasAnchor: () => !!this.anchor,
          notifyClose: () => {
            var e = new CustomEvent('closed', { bubbles: !0, composed: !0 });
            (this.open = !1), this.mdcRoot.dispatchEvent(e);
          },
          notifyClosing: () => {
            var e = new CustomEvent('closing', { bubbles: !0, composed: !0 });
            this.mdcRoot.dispatchEvent(e);
          },
          notifyOpen: () => {
            var e = new CustomEvent('opened', { bubbles: !0, composed: !0 });
            (this.open = !0), this.mdcRoot.dispatchEvent(e);
          },
          isElementInContainer: () => !1,
          isRtl: () =>
            !!this.mdcRoot &&
            'rtl' === getComputedStyle(this.mdcRoot).direction,
          setTransformOrigin: e => {
            this.mdcRoot && (this.styleTransformOrigin = e);
          },
          isFocused: () => Mt(this),
          saveFocus: () => {
            var e = zt(),
              t = e.length;
            t || (this.previouslyFocused = null),
              (this.previouslyFocused = e[t - 1]);
          },
          restoreFocus: () => {
            this.previouslyFocused &&
              'focus' in this.previouslyFocused &&
              this.previouslyFocused.focus();
          },
          getInnerDimensions: () => {
            var e = this.mdcRoot;
            return e
              ? { width: e.offsetWidth, height: e.offsetHeight }
              : { width: 0, height: 0 };
          },
          getAnchorDimensions: () => {
            const e = this.anchor;
            return e ? e.getBoundingClientRect() : null;
          },
          getBodyDimensions: () => ({
            width: document.body.clientWidth,
            height: document.body.clientHeight,
          }),
          getWindowDimensions: () => ({
            width: window.innerWidth,
            height: window.innerHeight,
          }),
          getWindowScroll: () => ({
            x: window.pageXOffset,
            y: window.pageYOffset,
          }),
          setPosition: e => {
            this.mdcRoot &&
              ((this.styleLeft = 'left' in e ? `${e.left}px` : ''),
              (this.styleRight = 'right' in e ? `${e.right}px` : ''),
              (this.styleTop = 'top' in e ? `${e.top}px` : ''),
              (this.styleBottom = 'bottom' in e ? `${e.bottom}px` : ''));
          },
          setMaxHeight: async e => {
            this.mdcRoot &&
              ((this.styleMaxHeight = e),
              await this.updateComplete,
              (this.styleMaxHeight = `var(--mdc-menu-max-height, ${e})`));
          },
        });
      }
      onKeydown(e) {
        this.mdcFoundation && this.mdcFoundation.handleKeydown(e);
      }
      onBodyClick(e) {
        this.stayOpenOnBodyClick ||
          (-1 === e.composedPath().indexOf(this) && this.close());
      }
      registerBodyClick() {
        (this.onBodyClickBound = this.onBodyClick.bind(this)),
          document.body.addEventListener('click', this.onBodyClickBound, {
            passive: !0,
            capture: !0,
          });
      }
      deregisterBodyClick() {
        document.body.removeEventListener('click', this.onBodyClickBound, {
          capture: !0,
        });
      }
      close() {
        this.open = !1;
      }
      show() {
        this.open = !0;
      }
    }
    o([at('.mdc-menu-surface')], Ea.prototype, 'mdcRoot', void 0),
      o([at('slot')], Ea.prototype, 'slotElement', void 0),
      o(
        [
          rt({ type: Boolean }),
          Bt(function (e) {
            this.mdcFoundation &&
              !this.fixed &&
              this.mdcFoundation.setIsHoisted(e);
          }),
        ],
        Ea.prototype,
        'absolute',
        void 0
      ),
      o([rt({ type: Boolean })], Ea.prototype, 'fullwidth', void 0),
      o(
        [
          rt({ type: Boolean }),
          Bt(function (e) {
            this.mdcFoundation &&
              !this.absolute &&
              this.mdcFoundation.setFixedPosition(e);
          }),
        ],
        Ea.prototype,
        'fixed',
        void 0
      ),
      o(
        [
          rt({ type: Number }),
          Bt(function (e) {
            this.mdcFoundation &&
              null !== this.y &&
              null !== e &&
              (this.mdcFoundation.setAbsolutePosition(e, this.y),
              this.mdcFoundation.setAnchorMargin({
                left: e,
                top: this.y,
                right: -e,
                bottom: this.y,
              }));
          }),
        ],
        Ea.prototype,
        'x',
        void 0
      ),
      o(
        [
          rt({ type: Number }),
          Bt(function (e) {
            this.mdcFoundation &&
              null !== this.x &&
              null !== e &&
              (this.mdcFoundation.setAbsolutePosition(this.x, e),
              this.mdcFoundation.setAnchorMargin({
                left: this.x,
                top: e,
                right: -this.x,
                bottom: e,
              }));
          }),
        ],
        Ea.prototype,
        'y',
        void 0
      ),
      o(
        [
          rt({ type: Boolean }),
          Bt(function (e) {
            this.mdcFoundation && this.mdcFoundation.setQuickOpen(e);
          }),
        ],
        Ea.prototype,
        'quick',
        void 0
      ),
      o(
        [
          rt({ type: Boolean, reflect: !0 }),
          Bt(function (e, t) {
            this.mdcFoundation &&
              (e
                ? this.mdcFoundation.open()
                : void 0 !== t && this.mdcFoundation.close());
          }),
        ],
        Ea.prototype,
        'open',
        void 0
      ),
      o([rt({ type: Boolean })], Ea.prototype, 'stayOpenOnBodyClick', void 0),
      o(
        [
          ot(),
          Bt(function (e) {
            this.mdcFoundation && this.mdcFoundation.setAnchorCorner(e);
          }),
        ],
        Ea.prototype,
        'bitwiseCorner',
        void 0
      ),
      o(
        [
          rt({ type: String }),
          Bt(function (e) {
            var t, i;
            this.mdcFoundation &&
              ((i =
                !(t = null === this.previousMenuCorner) &&
                e !== this.previousMenuCorner),
              ('START' !== e && 'END' !== e) ||
                !(i || (t && 'END' === e)) ||
                ((this.bitwiseCorner = this.bitwiseCorner ^ ua.RIGHT),
                this.mdcFoundation.flipCornerHorizontally(),
                (this.previousMenuCorner = e)));
          }),
        ],
        Ea.prototype,
        'menuCorner',
        void 0
      ),
      o(
        [
          rt({ type: String }),
          Bt(function (e) {
            if (this.mdcFoundation && e) {
              let t = ka[e];
              'END' === this.menuCorner && (t ^= ua.RIGHT),
                (this.bitwiseCorner = t);
            }
          }),
        ],
        Ea.prototype,
        'corner',
        void 0
      ),
      o([ot()], Ea.prototype, 'styleTop', void 0),
      o([ot()], Ea.prototype, 'styleLeft', void 0),
      o([ot()], Ea.prototype, 'styleRight', void 0),
      o([ot()], Ea.prototype, 'styleBottom', void 0),
      o([ot()], Ea.prototype, 'styleMaxHeight', void 0),
      o([ot()], Ea.prototype, 'styleTransformOrigin', void 0),
      (Uo = gt`.mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-width:var(--mdc-menu-max-width, calc(100vw - 32px));max-height:calc(100vh - 32px);max-height:var(--mdc-menu-max-height, calc(100vh - 32px));margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;transition:opacity .03s linear,transform .12s cubic-bezier(0, 0, 0.2, 1),height 250ms cubic-bezier(0, 0, 0.2, 1);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);color:#000;color:var(--mdc-theme-on-surface, #000);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0;transition:opacity .075s linear}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}:host(:not([open])){display:none}.mdc-menu-surface{z-index:8;z-index:var(--mdc-menu-z-index, 8);min-width:112px;min-width:var(--mdc-menu-min-width, 112px)}`);
    let Ca = class extends Ea {};
    (Ca.styles = [Uo]), (Ca = o([tt('mwc-menu-surface')], Ca));
    var Aa,
      Sa,
      Ia = {
        MENU_SELECTED_LIST_ITEM: 'mdc-menu-item--selected',
        MENU_SELECTION_GROUP: 'mdc-menu__selection-group',
        ROOT: 'mdc-menu',
      },
      Ta = {
        ARIA_CHECKED_ATTR: 'aria-checked',
        ARIA_DISABLED_ATTR: 'aria-disabled',
        CHECKBOX_SELECTOR: 'input[type="checkbox"]',
        LIST_SELECTOR: '.mdc-list,.mdc-deprecated-list',
        SELECTED_EVENT: 'MDCMenu:selected',
      },
      Ra = { FOCUS_ROOT_INDEX: -1 };
    function Oa(e) {
      return (
        ((e =
          Sa.call(this, r(r({}, Oa.defaultAdapter), e)) ||
          this).closeAnimationEndTimerId = 0),
        (e.defaultFocusState = Aa.LIST_ROOT),
        (e.selectedIndex = -1),
        e
      );
    }
    ((Uo = Aa = Aa || {})[(Uo.NONE = 0)] = 'NONE'),
      (Uo[(Uo.LIST_ROOT = 1)] = 'LIST_ROOT'),
      (Uo[(Uo.FIRST_ITEM = 2)] = 'FIRST_ITEM'),
      (Uo[(Uo.LAST_ITEM = 3)] = 'LAST_ITEM');
    const La =
      (t(Oa, (Sa = At)),
      Object.defineProperty(Oa, 'cssClasses', {
        get: function () {
          return Ia;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(Oa, 'strings', {
        get: function () {
          return Ta;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(Oa, 'numbers', {
        get: function () {
          return Ra;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(Oa, 'defaultAdapter', {
        get: function () {
          return {
            addClassToElementAtIndex: function () {},
            removeClassFromElementAtIndex: function () {},
            addAttributeToElementAtIndex: function () {},
            removeAttributeFromElementAtIndex: function () {},
            elementContainsClass: function () {
              return !1;
            },
            closeSurface: function () {},
            getElementIndex: function () {
              return -1;
            },
            notifySelected: function () {},
            getMenuItemCount: function () {
              return 0;
            },
            focusItemAtIndex: function () {},
            focusListRoot: function () {},
            getSelectedSiblingOfItemAtIndex: function () {
              return -1;
            },
            isSelectableItemAtIndex: function () {
              return !1;
            },
          };
        },
        enumerable: !1,
        configurable: !0,
      }),
      (Oa.prototype.destroy = function () {
        this.closeAnimationEndTimerId &&
          clearTimeout(this.closeAnimationEndTimerId),
          this.adapter.closeSurface();
      }),
      (Oa.prototype.handleKeydown = function (e) {
        var t = e.key;
        (e = e.keyCode),
          ('Tab' !== t && 9 !== e) || this.adapter.closeSurface(!0);
      }),
      (Oa.prototype.handleItemAction = function (e) {
        var t = this,
          i = this.adapter.getElementIndex(e);
        i < 0 ||
          (this.adapter.notifySelected({ index: i }),
          this.adapter.closeSurface(),
          (this.closeAnimationEndTimerId = setTimeout(function () {
            var i = t.adapter.getElementIndex(e);
            0 <= i &&
              t.adapter.isSelectableItemAtIndex(i) &&
              t.setSelectedIndex(i);
          }, va.numbers.TRANSITION_CLOSE_DURATION)));
      }),
      (Oa.prototype.handleMenuSurfaceOpened = function () {
        switch (this.defaultFocusState) {
          case Aa.FIRST_ITEM:
            this.adapter.focusItemAtIndex(0);
            break;
          case Aa.LAST_ITEM:
            this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
            break;
          case Aa.NONE:
            break;
          default:
            this.adapter.focusListRoot();
        }
      }),
      (Oa.prototype.setDefaultFocusState = function (e) {
        this.defaultFocusState = e;
      }),
      (Oa.prototype.getSelectedIndex = function () {
        return this.selectedIndex;
      }),
      (Oa.prototype.setSelectedIndex = function (e) {
        if ((this.validatedIndex(e), !this.adapter.isSelectableItemAtIndex(e)))
          throw new Error(
            'MDCMenuFoundation: No selection group at specified index.'
          );
        var t = this.adapter.getSelectedSiblingOfItemAtIndex(e);
        0 <= t &&
          (this.adapter.removeAttributeFromElementAtIndex(
            t,
            Ta.ARIA_CHECKED_ATTR
          ),
          this.adapter.removeClassFromElementAtIndex(
            t,
            Ia.MENU_SELECTED_LIST_ITEM
          )),
          this.adapter.addClassToElementAtIndex(e, Ia.MENU_SELECTED_LIST_ITEM),
          this.adapter.addAttributeToElementAtIndex(
            e,
            Ta.ARIA_CHECKED_ATTR,
            'true'
          ),
          (this.selectedIndex = e);
      }),
      (Oa.prototype.setEnabled = function (e, t) {
        this.validatedIndex(e),
          t
            ? (this.adapter.removeClassFromElementAtIndex(e, Zo),
              this.adapter.addAttributeToElementAtIndex(
                e,
                Ta.ARIA_DISABLED_ATTR,
                'false'
              ))
            : (this.adapter.addClassToElementAtIndex(e, Zo),
              this.adapter.addAttributeToElementAtIndex(
                e,
                Ta.ARIA_DISABLED_ATTR,
                'true'
              ));
      }),
      (Oa.prototype.validatedIndex = function (e) {
        var t = this.adapter.getMenuItemCount();
        if (!(0 <= e && e < t))
          throw new Error(
            'MDCMenuFoundation: No list item at specified index.'
          );
      }),
      Oa);
    class Fa extends Ht {
      constructor() {
        super(...arguments),
          (this.mdcFoundationClass = La),
          (this.listElement_ = null),
          (this.anchor = null),
          (this.open = !1),
          (this.quick = !1),
          (this.wrapFocus = !1),
          (this.innerRole = 'menu'),
          (this.corner = 'TOP_START'),
          (this.x = null),
          (this.y = null),
          (this.absolute = !1),
          (this.multi = !1),
          (this.activatable = !1),
          (this.fixed = !1),
          (this.forceGroupSelection = !1),
          (this.fullwidth = !1),
          (this.menuCorner = 'START'),
          (this.stayOpenOnBodyClick = !1),
          (this.defaultFocus = 'LIST_ROOT'),
          (this._listUpdateComplete = null);
      }
      get listElement() {
        return (
          this.listElement_ ||
          ((this.listElement_ = this.renderRoot.querySelector('mwc-list')),
          this.listElement_)
        );
      }
      get items() {
        var e = this.listElement;
        return e ? e.items : [];
      }
      get index() {
        var e = this.listElement;
        return e ? e.index : -1;
      }
      get selected() {
        var e = this.listElement;
        return e ? e.selected : null;
      }
      render() {
        var e = 'menu' === this.innerRole ? 'menuitem' : 'option';
        return Ge`
      <mwc-menu-surface
          ?hidden=${!this.open}
          .anchor=${this.anchor}
          .open=${this.open}
          .quick=${this.quick}
          .corner=${this.corner}
          .x=${this.x}
          .y=${this.y}
          .absolute=${this.absolute}
          .fixed=${this.fixed}
          .fullwidth=${this.fullwidth}
          .menuCorner=${this.menuCorner}
          ?stayOpenOnBodyClick=${this.stayOpenOnBodyClick}
          class="mdc-menu mdc-menu-surface"
          @closed=${this.onClosed}
          @opened=${this.onOpened}
          @keydown=${this.onKeydown}>
        <mwc-list
          rootTabbable
          .innerRole=${this.innerRole}
          .multi=${this.multi}
          class="mdc-deprecated-list"
          .itemRoles=${e}
          .wrapFocus=${this.wrapFocus}
          .activatable=${this.activatable}
          @action=${this.onAction}>
        <slot></slot>
      </mwc-list>
    </mwc-menu-surface>`;
      }
      createAdapter() {
        return {
          addClassToElementAtIndex: (e, t) => {
            const i = this.listElement;
            if (i) {
              const r = i.items[e];
              r &&
                ('mdc-menu-item--selected' === t
                  ? this.forceGroupSelection && !r.selected && i.toggle(e, !0)
                  : r.classList.add(t));
            }
          },
          removeClassFromElementAtIndex: (e, t) => {
            const i = this.listElement;
            if (i) {
              const r = i.items[e];
              r &&
                ('mdc-menu-item--selected' === t
                  ? r.selected && i.toggle(e, !1)
                  : r.classList.remove(t));
            }
          },
          addAttributeToElementAtIndex: (e, t, i) => {
            var r = this.listElement;
            if (r) {
              const o = r.items[e];
              o && o.setAttribute(t, i);
            }
          },
          removeAttributeFromElementAtIndex: (e, t) => {
            var i = this.listElement;
            if (i) {
              const r = i.items[e];
              r && r.removeAttribute(t);
            }
          },
          elementContainsClass: (e, t) => e.classList.contains(t),
          closeSurface: () => {
            this.open = !1;
          },
          getElementIndex: e => {
            const t = this.listElement;
            return t ? t.items.indexOf(e) : -1;
          },
          notifySelected: () => {},
          getMenuItemCount: () => {
            var e = this.listElement;
            return e ? e.items.length : 0;
          },
          focusItemAtIndex: e => {
            var t = this.listElement;
            if (t) {
              const i = t.items[e];
              i && i.focus();
            }
          },
          focusListRoot: () => {
            this.listElement && this.listElement.focus();
          },
          getSelectedSiblingOfItemAtIndex: e => {
            var t = this.listElement;
            if (!t) return -1;
            var i = t.items[e];
            if (!i || !i.group) return -1;
            for (let o = 0; o < t.items.length; o++)
              if (o !== e) {
                var r = t.items[o];
                if (r.selected && r.group === i.group) return o;
              }
            return -1;
          },
          isSelectableItemAtIndex: e => {
            var t = this.listElement;
            if (!t) return !1;
            const i = t.items[e];
            return !!i && i.hasAttribute('group');
          },
        };
      }
      onKeydown(e) {
        this.mdcFoundation && this.mdcFoundation.handleKeydown(e);
      }
      onAction(e) {
        var t = this.listElement;
        this.mdcFoundation &&
          t &&
          ((e = e.detail.index),
          (e = t.items[e]) && this.mdcFoundation.handleItemAction(e));
      }
      onOpened() {
        (this.open = !0),
          this.mdcFoundation && this.mdcFoundation.handleMenuSurfaceOpened();
      }
      onClosed() {
        this.open = !1;
      }
      async getUpdateComplete() {
        return await this._listUpdateComplete, await super.getUpdateComplete();
      }
      async firstUpdated() {
        super.firstUpdated();
        var e = this.listElement;
        e &&
          ((this._listUpdateComplete = e.updateComplete),
          await this._listUpdateComplete);
      }
      select(e) {
        const t = this.listElement;
        t && t.select(e);
      }
      close() {
        this.open = !1;
      }
      show() {
        this.open = !0;
      }
      getFocusedItemIndex() {
        const e = this.listElement;
        return e ? e.getFocusedItemIndex() : -1;
      }
      focusItemAtIndex(e) {
        const t = this.listElement;
        t && t.focusItemAtIndex(e);
      }
      layout(e = !0) {
        const t = this.listElement;
        t && t.layout(e);
      }
    }
    o([at('.mdc-menu')], Fa.prototype, 'mdcRoot', void 0),
      o([at('slot')], Fa.prototype, 'slotElement', void 0),
      o([rt({ type: Object })], Fa.prototype, 'anchor', void 0),
      o([rt({ type: Boolean, reflect: !0 })], Fa.prototype, 'open', void 0),
      o([rt({ type: Boolean })], Fa.prototype, 'quick', void 0),
      o([rt({ type: Boolean })], Fa.prototype, 'wrapFocus', void 0),
      o([rt({ type: String })], Fa.prototype, 'innerRole', void 0),
      o([rt({ type: String })], Fa.prototype, 'corner', void 0),
      o([rt({ type: Number })], Fa.prototype, 'x', void 0),
      o([rt({ type: Number })], Fa.prototype, 'y', void 0),
      o([rt({ type: Boolean })], Fa.prototype, 'absolute', void 0),
      o([rt({ type: Boolean })], Fa.prototype, 'multi', void 0),
      o([rt({ type: Boolean })], Fa.prototype, 'activatable', void 0),
      o([rt({ type: Boolean })], Fa.prototype, 'fixed', void 0),
      o([rt({ type: Boolean })], Fa.prototype, 'forceGroupSelection', void 0),
      o([rt({ type: Boolean })], Fa.prototype, 'fullwidth', void 0),
      o([rt({ type: String })], Fa.prototype, 'menuCorner', void 0),
      o([rt({ type: Boolean })], Fa.prototype, 'stayOpenOnBodyClick', void 0),
      o(
        [
          rt({ type: String }),
          Bt(function (e) {
            this.mdcFoundation &&
              this.mdcFoundation.setDefaultFocusState(Aa[e]);
          }),
        ],
        Fa.prototype,
        'defaultFocus',
        void 0
      ),
      (Uo = gt`mwc-list ::slotted([mwc-list-item]:not([twoline])){height:var(--mdc-menu-item-height, 48px)}`);
    let Na = class extends Fa {};
    (Na.styles = [Uo]), (Na = o([tt('mwc-menu')], Na));
    var Da,
      $a = { NOTCH_ELEMENT_SELECTOR: '.mdc-notched-outline__notch' },
      Pa = { NOTCH_ELEMENT_PADDING: 8 },
      za = {
        NO_LABEL: 'mdc-notched-outline--no-label',
        OUTLINE_NOTCHED: 'mdc-notched-outline--notched',
        OUTLINE_UPGRADED: 'mdc-notched-outline--upgraded',
      },
      Ma =
        (t(Ha, (Da = At)),
        Object.defineProperty(Ha, 'strings', {
          get: function () {
            return $a;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(Ha, 'cssClasses', {
          get: function () {
            return za;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(Ha, 'numbers', {
          get: function () {
            return Pa;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(Ha, 'defaultAdapter', {
          get: function () {
            return {
              addClass: function () {},
              removeClass: function () {},
              setNotchWidthProperty: function () {},
              removeNotchWidthProperty: function () {},
            };
          },
          enumerable: !1,
          configurable: !0,
        }),
        (Ha.prototype.notch = function (e) {
          var t = Ha.cssClasses.OUTLINE_NOTCHED;
          0 < e && (e += Pa.NOTCH_ELEMENT_PADDING),
            this.adapter.setNotchWidthProperty(e),
            this.adapter.addClass(t);
        }),
        (Ha.prototype.closeNotch = function () {
          var e = Ha.cssClasses.OUTLINE_NOTCHED;
          this.adapter.removeClass(e), this.adapter.removeNotchWidthProperty();
        }),
        Ha);
    function Ha(e) {
      return Da.call(this, r(r({}, Ha.defaultAdapter), e)) || this;
    }
    class Ba extends Ht {
      constructor() {
        super(...arguments),
          (this.mdcFoundationClass = Ma),
          (this.width = 0),
          (this.open = !1),
          (this.lastOpen = this.open);
      }
      createAdapter() {
        return {
          addClass: e => this.mdcRoot.classList.add(e),
          removeClass: e => this.mdcRoot.classList.remove(e),
          setNotchWidthProperty: e =>
            this.notchElement.style.setProperty('width', `${e}px`),
          removeNotchWidthProperty: () =>
            this.notchElement.style.removeProperty('width'),
        };
      }
      openOrClose(e, t) {
        this.mdcFoundation &&
          (e && void 0 !== t
            ? this.mdcFoundation.notch(t)
            : this.mdcFoundation.closeNotch());
      }
      render() {
        this.openOrClose(this.open, this.width);
        var e = jt({ 'mdc-notched-outline--notched': this.open });
        return Ge`
      <span class="mdc-notched-outline ${e}">
        <span class="mdc-notched-outline__leading"></span>
        <span class="mdc-notched-outline__notch">
          <slot></slot>
        </span>
        <span class="mdc-notched-outline__trailing"></span>
      </span>`;
      }
    }
    o([at('.mdc-notched-outline')], Ba.prototype, 'mdcRoot', void 0),
      o([rt({ type: Number })], Ba.prototype, 'width', void 0),
      o([rt({ type: Boolean, reflect: !0 })], Ba.prototype, 'open', void 0),
      o(
        [at('.mdc-notched-outline__notch')],
        Ba.prototype,
        'notchElement',
        void 0
      ),
      (Uo = gt`.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}:host{display:block;position:absolute;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] :host,:host([dir=rtl]){text-align:right}::slotted(.mdc-floating-label){display:inline-block;position:relative;top:17px;bottom:auto;max-width:100%}::slotted(.mdc-floating-label--float-above){text-overflow:clip}.mdc-notched-outline--upgraded ::slotted(.mdc-floating-label--float-above){max-width:calc(100% / 0.75)}.mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__leading,.mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{border-color:var(--mdc-notched-outline-border-color, var(--mdc-theme-primary, #6200ee));border-width:1px;border-width:var(--mdc-notched-outline-stroke-width, 1px)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0;padding-top:var(--mdc-notched-outline-notch-offset, 0)}`);
    let Va = class extends Ba {};
    function Ua(e) {
      var t = e.target;
      t &&
        ((t = ('' + t.tagName).toLowerCase()),
        -1 === ja.indexOf(t) && e.preventDefault());
    }
    (Va.styles = [Uo]), (Va = o([tt('mwc-notched-outline')], Va));
    var ja = ['input', 'button', 'textarea', 'select'];
    function Ga(e, t) {
      for (var i = new Map(), r = 0; r < e; r++) {
        var o,
          a = t(r).trim();
        a &&
          ((o = a[0].toLowerCase()),
          i.has(o) || i.set(o, []),
          i.get(o).push({ text: a.toLowerCase(), index: r }));
      }
      return (
        i.forEach(function (e) {
          e.sort(function (e, t) {
            return e.index - t.index;
          });
        }),
        i
      );
    }
    function Xa(e, t) {
      var i = e.nextChar,
        r = e.focusItemAtIndex,
        o = e.sortedIndexByFirstChar,
        a = e.focusedItemIndex,
        n = e.skipFocus;
      return (
        (e = e.isItemAtIndexDisabled),
        clearTimeout(t.bufferClearTimeout),
        (t.bufferClearTimeout = setTimeout(function () {
          t.typeaheadBuffer = '';
        }, ea.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS)),
        (t.typeaheadBuffer = t.typeaheadBuffer + i),
        -1 ===
          (e =
            1 === t.typeaheadBuffer.length
              ? (function (e, t, i, r) {
                  var o = r.typeaheadBuffer[0],
                    a = e.get(o);
                  if (!a) return -1;
                  if (
                    o === r.currentFirstChar &&
                    a[r.sortedIndexCursor].index === t &&
                    ((r.sortedIndexCursor =
                      (r.sortedIndexCursor + 1) % a.length),
                    !i((e = a[r.sortedIndexCursor].index)))
                  )
                    return e;
                  r.currentFirstChar = o;
                  var n,
                    d = -1;
                  for (n = 0; n < a.length; n++)
                    if (!i(a[n].index)) {
                      d = n;
                      break;
                    }
                  for (; n < a.length; n++)
                    if (a[n].index > t && !i(a[n].index)) {
                      d = n;
                      break;
                    }
                  return -1 === d
                    ? -1
                    : ((r.sortedIndexCursor = d), a[r.sortedIndexCursor].index);
                })(o, a, e, t)
              : (function (e, t, i) {
                  var r = i.typeaheadBuffer[0],
                    o = e.get(r);
                  if (!o) return -1;
                  if (
                    0 ===
                      (r = o[i.sortedIndexCursor]).text.lastIndexOf(
                        i.typeaheadBuffer,
                        0
                      ) &&
                    !t(r.index)
                  )
                    return r.index;
                  for (
                    var a = (i.sortedIndexCursor + 1) % o.length, n = -1;
                    a !== i.sortedIndexCursor;

                  ) {
                    var d =
                        0 === (s = o[a]).text.lastIndexOf(i.typeaheadBuffer, 0),
                      s = !t(s.index);
                    if (d && s) {
                      n = a;
                      break;
                    }
                    a = (a + 1) % o.length;
                  }
                  return -1 === n
                    ? -1
                    : ((i.sortedIndexCursor = n), o[i.sortedIndexCursor].index);
                })(o, e, t)) ||
          n ||
          r(e),
        e
      );
    }
    function Ka(e) {
      return 0 < e.typeaheadBuffer.length;
    }
    var Wa,
      qa = {
        LABEL_FLOAT_ABOVE: 'mdc-floating-label--float-above',
        LABEL_REQUIRED: 'mdc-floating-label--required',
        LABEL_SHAKE: 'mdc-floating-label--shake',
        ROOT: 'mdc-floating-label',
      },
      Ya =
        (t(Qa, (Wa = At)),
        Object.defineProperty(Qa, 'cssClasses', {
          get: function () {
            return qa;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(Qa, 'defaultAdapter', {
          get: function () {
            return {
              addClass: function () {},
              removeClass: function () {},
              getWidth: function () {
                return 0;
              },
              registerInteractionHandler: function () {},
              deregisterInteractionHandler: function () {},
            };
          },
          enumerable: !1,
          configurable: !0,
        }),
        (Qa.prototype.init = function () {
          this.adapter.registerInteractionHandler(
            'animationend',
            this.shakeAnimationEndHandler
          );
        }),
        (Qa.prototype.destroy = function () {
          this.adapter.deregisterInteractionHandler(
            'animationend',
            this.shakeAnimationEndHandler
          );
        }),
        (Qa.prototype.getWidth = function () {
          return this.adapter.getWidth();
        }),
        (Qa.prototype.shake = function (e) {
          var t = Qa.cssClasses.LABEL_SHAKE;
          e ? this.adapter.addClass(t) : this.adapter.removeClass(t);
        }),
        (Qa.prototype.float = function (e) {
          var t = (i = Qa.cssClasses).LABEL_FLOAT_ABOVE,
            i = i.LABEL_SHAKE;
          e
            ? this.adapter.addClass(t)
            : (this.adapter.removeClass(t), this.adapter.removeClass(i));
        }),
        (Qa.prototype.setRequired = function (e) {
          var t = Qa.cssClasses.LABEL_REQUIRED;
          e ? this.adapter.addClass(t) : this.adapter.removeClass(t);
        }),
        (Qa.prototype.handleShakeAnimationEnd = function () {
          var e = Qa.cssClasses.LABEL_SHAKE;
          this.adapter.removeClass(e);
        }),
        Qa);
    function Qa(e) {
      var t = Wa.call(this, r(r({}, Qa.defaultAdapter), e)) || this;
      return (
        (t.shakeAnimationEndHandler = function () {
          t.handleShakeAnimationEnd();
        }),
        t
      );
    }
    const Za = Ji(
      class extends Zi {
        constructor(e) {
          switch (
            (super(e),
            (this.foundation = null),
            (this.previousPart = null),
            e.type)
          ) {
            case 1:
            case 3:
              break;
            default:
              throw new Error(
                'FloatingLabel directive only support attribute and property parts'
              );
          }
        }
        update(e, [t]) {
          if (e !== this.previousPart) {
            this.foundation && this.foundation.destroy();
            const t = (this.previousPart = e).element;
            t.classList.add('mdc-floating-label'),
              (i = t),
              (e = {
                addClass: e => i.classList.add(e),
                removeClass: e => i.classList.remove(e),
                getWidth: () => i.scrollWidth,
                registerInteractionHandler: (e, t) => {
                  i.addEventListener(e, t);
                },
                deregisterInteractionHandler: (e, t) => {
                  i.removeEventListener(e, t);
                },
              }),
              (this.foundation = new Ya(e)),
              this.foundation.init();
          }
          var i;
          return this.render(t);
        }
        render(e) {
          return this.foundation;
        }
      }
    );
    var Ja,
      en = {
        LINE_RIPPLE_ACTIVE: 'mdc-line-ripple--active',
        LINE_RIPPLE_DEACTIVATING: 'mdc-line-ripple--deactivating',
      },
      tn =
        (t(rn, (Ja = At)),
        Object.defineProperty(rn, 'cssClasses', {
          get: function () {
            return en;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(rn, 'defaultAdapter', {
          get: function () {
            return {
              addClass: function () {},
              removeClass: function () {},
              hasClass: function () {
                return !1;
              },
              setStyle: function () {},
              registerEventHandler: function () {},
              deregisterEventHandler: function () {},
            };
          },
          enumerable: !1,
          configurable: !0,
        }),
        (rn.prototype.init = function () {
          this.adapter.registerEventHandler(
            'transitionend',
            this.transitionEndHandler
          );
        }),
        (rn.prototype.destroy = function () {
          this.adapter.deregisterEventHandler(
            'transitionend',
            this.transitionEndHandler
          );
        }),
        (rn.prototype.activate = function () {
          this.adapter.removeClass(en.LINE_RIPPLE_DEACTIVATING),
            this.adapter.addClass(en.LINE_RIPPLE_ACTIVE);
        }),
        (rn.prototype.setRippleCenter = function (e) {
          this.adapter.setStyle('transform-origin', e + 'px center');
        }),
        (rn.prototype.deactivate = function () {
          this.adapter.addClass(en.LINE_RIPPLE_DEACTIVATING);
        }),
        (rn.prototype.handleTransitionEnd = function (e) {
          var t = this.adapter.hasClass(en.LINE_RIPPLE_DEACTIVATING);
          'opacity' === e.propertyName &&
            t &&
            (this.adapter.removeClass(en.LINE_RIPPLE_ACTIVE),
            this.adapter.removeClass(en.LINE_RIPPLE_DEACTIVATING));
        }),
        rn);
    function rn(e) {
      var t = Ja.call(this, r(r({}, rn.defaultAdapter), e)) || this;
      return (
        (t.transitionEndHandler = function (e) {
          t.handleTransitionEnd(e);
        }),
        t
      );
    }
    const on = Ji(
      class extends Zi {
        constructor(e) {
          switch (
            (super(e),
            (this.previousPart = null),
            (this.foundation = null),
            e.type)
          ) {
            case 1:
            case 3:
              return;
            default:
              throw new Error(
                'LineRipple only support attribute and property parts.'
              );
          }
        }
        update(e, t) {
          if (this.previousPart !== e) {
            this.foundation && this.foundation.destroy();
            const t = (this.previousPart = e).element;
            t.classList.add('mdc-line-ripple'),
              (i = t),
              (e = {
                addClass: e => i.classList.add(e),
                removeClass: e => i.classList.remove(e),
                hasClass: e => i.classList.contains(e),
                setStyle: (e, t) => i.style.setProperty(e, t),
                registerEventHandler: (e, t) => {
                  i.addEventListener(e, t);
                },
                deregisterEventHandler: (e, t) => {
                  i.removeEventListener(e, t);
                },
              }),
              (this.foundation = new tn(e)),
              this.foundation.init();
          }
          var i;
          return this.render();
        }
        render() {
          return this.foundation;
        }
      }
    );
    var an,
      nn = {
        ACTIVATED: 'mdc-select--activated',
        DISABLED: 'mdc-select--disabled',
        FOCUSED: 'mdc-select--focused',
        INVALID: 'mdc-select--invalid',
        MENU_INVALID: 'mdc-select__menu--invalid',
        OUTLINED: 'mdc-select--outlined',
        REQUIRED: 'mdc-select--required',
        ROOT: 'mdc-select',
        WITH_LEADING_ICON: 'mdc-select--with-leading-icon',
      },
      dn = {
        ARIA_CONTROLS: 'aria-controls',
        ARIA_DESCRIBEDBY: 'aria-describedby',
        ARIA_SELECTED_ATTR: 'aria-selected',
        CHANGE_EVENT: 'MDCSelect:change',
        HIDDEN_INPUT_SELECTOR: 'input[type="hidden"]',
        LABEL_SELECTOR: '.mdc-floating-label',
        LEADING_ICON_SELECTOR: '.mdc-select__icon',
        LINE_RIPPLE_SELECTOR: '.mdc-line-ripple',
        MENU_SELECTOR: '.mdc-select__menu',
        OUTLINE_SELECTOR: '.mdc-notched-outline',
        SELECTED_TEXT_SELECTOR: '.mdc-select__selected-text',
        SELECT_ANCHOR_SELECTOR: '.mdc-select__anchor',
        VALUE_ATTR: 'data-value',
      },
      sn = {
        LABEL_SCALE: 0.75,
        UNSET_INDEX: -1,
        CLICK_DEBOUNCE_TIMEOUT_MS: 330,
      };
    function cn(e, t) {
      return (
        void 0 === t && (t = {}),
        ((e = an.call(this, r(r({}, cn.defaultAdapter), e)) || this).disabled =
          !1),
        (e.isMenuOpen = !1),
        (e.useDefaultValidation = !0),
        (e.customValidity = !0),
        (e.lastSelectedIndex = sn.UNSET_INDEX),
        (e.clickDebounceTimeout = 0),
        (e.recentlyClicked = !1),
        (e.leadingIcon = t.leadingIcon),
        (e.helperText = t.helperText),
        e
      );
    }
    const ln =
        (t(cn, (an = At)),
        Object.defineProperty(cn, 'cssClasses', {
          get: function () {
            return nn;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(cn, 'numbers', {
          get: function () {
            return sn;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(cn, 'strings', {
          get: function () {
            return dn;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(cn, 'defaultAdapter', {
          get: function () {
            return {
              addClass: function () {},
              removeClass: function () {},
              hasClass: function () {
                return !1;
              },
              activateBottomLine: function () {},
              deactivateBottomLine: function () {},
              getSelectedIndex: function () {
                return -1;
              },
              setSelectedIndex: function () {},
              hasLabel: function () {
                return !1;
              },
              floatLabel: function () {},
              getLabelWidth: function () {
                return 0;
              },
              setLabelRequired: function () {},
              hasOutline: function () {
                return !1;
              },
              notchOutline: function () {},
              closeOutline: function () {},
              setRippleCenter: function () {},
              notifyChange: function () {},
              setSelectedText: function () {},
              isSelectAnchorFocused: function () {
                return !1;
              },
              getSelectAnchorAttr: function () {
                return '';
              },
              setSelectAnchorAttr: function () {},
              removeSelectAnchorAttr: function () {},
              addMenuClass: function () {},
              removeMenuClass: function () {},
              openMenu: function () {},
              closeMenu: function () {},
              getAnchorElement: function () {
                return null;
              },
              setMenuAnchorElement: function () {},
              setMenuAnchorCorner: function () {},
              setMenuWrapFocus: function () {},
              focusMenuItemAtIndex: function () {},
              getMenuItemCount: function () {
                return 0;
              },
              getMenuItemValues: function () {
                return [];
              },
              getMenuItemTextAtIndex: function () {
                return '';
              },
              isTypeaheadInProgress: function () {
                return !1;
              },
              typeaheadMatchItem: function () {
                return -1;
              },
            };
          },
          enumerable: !1,
          configurable: !0,
        }),
        (cn.prototype.getSelectedIndex = function () {
          return this.adapter.getSelectedIndex();
        }),
        (cn.prototype.setSelectedIndex = function (e, t, i) {
          void 0 === t && (t = !1),
            void 0 === i && (i = !1),
            e >= this.adapter.getMenuItemCount() ||
              (e === sn.UNSET_INDEX
                ? this.adapter.setSelectedText('')
                : this.adapter.setSelectedText(
                    this.adapter.getMenuItemTextAtIndex(e).trim()
                  ),
              this.adapter.setSelectedIndex(e),
              t && this.adapter.closeMenu(),
              i || this.lastSelectedIndex === e || this.handleChange(),
              (this.lastSelectedIndex = e));
        }),
        (cn.prototype.setValue = function (e, t) {
          void 0 === t && (t = !1),
            (e = this.adapter.getMenuItemValues().indexOf(e)),
            this.setSelectedIndex(e, !1, t);
        }),
        (cn.prototype.getValue = function () {
          var e = this.adapter.getSelectedIndex(),
            t = this.adapter.getMenuItemValues();
          return e !== sn.UNSET_INDEX ? t[e] : '';
        }),
        (cn.prototype.getDisabled = function () {
          return this.disabled;
        }),
        (cn.prototype.setDisabled = function (e) {
          (this.disabled = e),
            this.disabled
              ? (this.adapter.addClass(nn.DISABLED), this.adapter.closeMenu())
              : this.adapter.removeClass(nn.DISABLED),
            this.leadingIcon && this.leadingIcon.setDisabled(this.disabled),
            this.disabled
              ? this.adapter.removeSelectAnchorAttr('tabindex')
              : this.adapter.setSelectAnchorAttr('tabindex', '0'),
            this.adapter.setSelectAnchorAttr(
              'aria-disabled',
              this.disabled.toString()
            );
        }),
        (cn.prototype.openMenu = function () {
          this.adapter.addClass(nn.ACTIVATED),
            this.adapter.openMenu(),
            (this.isMenuOpen = !0),
            this.adapter.setSelectAnchorAttr('aria-expanded', 'true');
        }),
        (cn.prototype.setHelperTextContent = function (e) {
          this.helperText && this.helperText.setContent(e);
        }),
        (cn.prototype.layout = function () {
          var e, t;
          this.adapter.hasLabel() &&
            ((e = 0 < this.getValue().length),
            (t = this.adapter.hasClass(nn.FOCUSED)),
            (e = e || t),
            (t = this.adapter.hasClass(nn.REQUIRED)),
            this.notchOutline(e),
            this.adapter.floatLabel(e),
            this.adapter.setLabelRequired(t));
        }),
        (cn.prototype.layoutOptions = function () {
          var e = this.adapter.getMenuItemValues().indexOf(this.getValue());
          this.setSelectedIndex(e, !1, !0);
        }),
        (cn.prototype.handleMenuOpened = function () {
          var e;
          0 !== this.adapter.getMenuItemValues().length &&
            ((e = this.getSelectedIndex()),
            this.adapter.focusMenuItemAtIndex(0 <= e ? e : 0));
        }),
        (cn.prototype.handleMenuClosing = function () {
          this.adapter.setSelectAnchorAttr('aria-expanded', 'false');
        }),
        (cn.prototype.handleMenuClosed = function () {
          this.adapter.removeClass(nn.ACTIVATED),
            (this.isMenuOpen = !1),
            this.adapter.isSelectAnchorFocused() || this.blur();
        }),
        (cn.prototype.handleChange = function () {
          this.layout(),
            this.adapter.notifyChange(this.getValue()),
            this.adapter.hasClass(nn.REQUIRED) &&
              this.useDefaultValidation &&
              this.setValid(this.isValid());
        }),
        (cn.prototype.handleMenuItemAction = function (e) {
          this.setSelectedIndex(e, !0);
        }),
        (cn.prototype.handleFocus = function () {
          this.adapter.addClass(nn.FOCUSED),
            this.layout(),
            this.adapter.activateBottomLine();
        }),
        (cn.prototype.handleBlur = function () {
          this.isMenuOpen || this.blur();
        }),
        (cn.prototype.handleClick = function (e) {
          this.disabled ||
            this.recentlyClicked ||
            (this.setClickDebounceTimeout(),
            this.isMenuOpen
              ? this.adapter.closeMenu()
              : (this.adapter.setRippleCenter(e), this.openMenu()));
        }),
        (cn.prototype.handleKeydown = function (e) {
          if (!this.isMenuOpen && this.adapter.hasClass(nn.FOCUSED)) {
            var t = Qo(e) === Bo,
              i = Qo(e) === Vo,
              r = Qo(e) === Xo,
              o = Qo(e) === Ko;
            if (
              !e.ctrlKey &&
              !e.metaKey &&
              ((!i && e.key && 1 === e.key.length) ||
                (i && this.adapter.isTypeaheadInProgress()))
            ) {
              var a = i ? ' ' : e.key;
              return (
                0 <=
                  (a = this.adapter.typeaheadMatchItem(
                    a,
                    this.getSelectedIndex()
                  )) && this.setSelectedIndex(a),
                void e.preventDefault()
              );
            }
            (t || i || r || o) &&
              (r && 0 < this.getSelectedIndex()
                ? this.setSelectedIndex(this.getSelectedIndex() - 1)
                : o &&
                  this.getSelectedIndex() <
                    this.adapter.getMenuItemCount() - 1 &&
                  this.setSelectedIndex(this.getSelectedIndex() + 1),
              this.openMenu(),
              e.preventDefault());
          }
        }),
        (cn.prototype.notchOutline = function (e) {
          var t;
          this.adapter.hasOutline() &&
            ((t = this.adapter.hasClass(nn.FOCUSED)),
            e
              ? ((e = sn.LABEL_SCALE),
                (e = this.adapter.getLabelWidth() * e),
                this.adapter.notchOutline(e))
              : t || this.adapter.closeOutline());
        }),
        (cn.prototype.setLeadingIconAriaLabel = function (e) {
          this.leadingIcon && this.leadingIcon.setAriaLabel(e);
        }),
        (cn.prototype.setLeadingIconContent = function (e) {
          this.leadingIcon && this.leadingIcon.setContent(e);
        }),
        (cn.prototype.getUseDefaultValidation = function () {
          return this.useDefaultValidation;
        }),
        (cn.prototype.setUseDefaultValidation = function (e) {
          this.useDefaultValidation = e;
        }),
        (cn.prototype.setValid = function (e) {
          this.useDefaultValidation || (this.customValidity = e),
            this.adapter.setSelectAnchorAttr('aria-invalid', (!e).toString()),
            e
              ? (this.adapter.removeClass(nn.INVALID),
                this.adapter.removeMenuClass(nn.MENU_INVALID))
              : (this.adapter.addClass(nn.INVALID),
                this.adapter.addMenuClass(nn.MENU_INVALID)),
            this.syncHelperTextValidity(e);
        }),
        (cn.prototype.isValid = function () {
          return this.useDefaultValidation &&
            this.adapter.hasClass(nn.REQUIRED) &&
            !this.adapter.hasClass(nn.DISABLED)
            ? this.getSelectedIndex() !== sn.UNSET_INDEX &&
                (0 !== this.getSelectedIndex() || Boolean(this.getValue()))
            : this.customValidity;
        }),
        (cn.prototype.setRequired = function (e) {
          e
            ? this.adapter.addClass(nn.REQUIRED)
            : this.adapter.removeClass(nn.REQUIRED),
            this.adapter.setSelectAnchorAttr('aria-required', e.toString()),
            this.adapter.setLabelRequired(e);
        }),
        (cn.prototype.getRequired = function () {
          return 'true' === this.adapter.getSelectAnchorAttr('aria-required');
        }),
        (cn.prototype.init = function () {
          var e = this.adapter.getAnchorElement();
          e &&
            (this.adapter.setMenuAnchorElement(e),
            this.adapter.setMenuAnchorCorner(fa.BOTTOM_START)),
            this.adapter.setMenuWrapFocus(!1),
            this.setDisabled(this.adapter.hasClass(nn.DISABLED)),
            this.syncHelperTextValidity(!this.adapter.hasClass(nn.INVALID)),
            this.layout(),
            this.layoutOptions();
        }),
        (cn.prototype.blur = function () {
          this.adapter.removeClass(nn.FOCUSED),
            this.layout(),
            this.adapter.deactivateBottomLine(),
            this.adapter.hasClass(nn.REQUIRED) &&
              this.useDefaultValidation &&
              this.setValid(this.isValid());
        }),
        (cn.prototype.syncHelperTextValidity = function (e) {
          var t;
          this.helperText &&
            (this.helperText.setValidity(e),
            (t = this.helperText.isVisible()),
            (e = this.helperText.getId()),
            t && e
              ? this.adapter.setSelectAnchorAttr(dn.ARIA_DESCRIBEDBY, e)
              : this.adapter.removeSelectAnchorAttr(dn.ARIA_DESCRIBEDBY));
        }),
        (cn.prototype.setClickDebounceTimeout = function () {
          var e = this;
          clearTimeout(this.clickDebounceTimeout),
            (this.clickDebounceTimeout = setTimeout(function () {
              e.recentlyClicked = !1;
            }, sn.CLICK_DEBOUNCE_TIMEOUT_MS)),
            (this.recentlyClicked = !0);
        }),
        cn),
      pn = (e = {}) => {
        const t = {};
        for (const i in e) t[i] = e[i];
        return Object.assign(
          {
            badInput: !1,
            customError: !1,
            patternMismatch: !1,
            rangeOverflow: !1,
            rangeUnderflow: !1,
            stepMismatch: !1,
            tooLong: !1,
            tooShort: !1,
            typeMismatch: !1,
            valid: !0,
            valueMissing: !1,
          },
          t
        );
      };
    class mn extends lr {
      constructor() {
        super(...arguments),
          (this.mdcFoundationClass = ln),
          (this.disabled = !1),
          (this.outlined = !1),
          (this.label = ''),
          (this.outlineOpen = !1),
          (this.outlineWidth = 0),
          (this.value = ''),
          (this.selectedText = ''),
          (this.icon = ''),
          (this.menuOpen = !1),
          (this.helper = ''),
          (this.validateOnInitialRender = !1),
          (this.validationMessage = ''),
          (this.required = !1),
          (this.naturalMenuWidth = !1),
          (this.isUiValid = !0),
          (this.fixedMenuPosition = !1),
          (this.typeaheadState = {
            bufferClearTimeout: 0,
            currentFirstChar: '',
            sortedIndexCursor: 0,
            typeaheadBuffer: '',
          }),
          (this.sortedIndexByFirstChar = new Map()),
          (this.menuElement_ = null),
          (this.listeners = []),
          (this.onBodyClickBound = () => {}),
          (this._menuUpdateComplete = null),
          (this.valueSetDirectly = !1),
          (this.validityTransform = null),
          (this._validity = pn());
      }
      get items() {
        return (
          this.menuElement_ || (this.menuElement_ = this.menuElement),
          this.menuElement_ ? this.menuElement_.items : []
        );
      }
      get selected() {
        var e = this.menuElement;
        return e ? e.selected : null;
      }
      get index() {
        var e = this.menuElement;
        return e ? e.index : -1;
      }
      get shouldRenderHelperText() {
        return !!this.helper || !!this.validationMessage;
      }
      get validity() {
        return this._checkValidity(this.value), this._validity;
      }
      render() {
        var e = {
            'mdc-select--disabled': this.disabled,
            'mdc-select--no-label': !this.label,
            'mdc-select--filled': !this.outlined,
            'mdc-select--outlined': this.outlined,
            'mdc-select--with-leading-icon': !!this.icon,
            'mdc-select--required': this.required,
            'mdc-select--invalid': !this.isUiValid,
          },
          t = { 'mdc-select__menu--invalid': !this.isUiValid },
          i = this.label ? 'label' : void 0,
          r = this.shouldRenderHelperText ? 'helper-text' : void 0;
        return Ge`
      <div
          class="mdc-select ${jt(e)}">
        <input
            class="formElement"
            .value=${this.value}
            hidden
            ?required=${this.required}>
        <!-- @ts-ignore -->
        <div class="mdc-select__anchor"
            aria-autocomplete="none"
            role="combobox"
            aria-expanded=${this.menuOpen}
            aria-invalid=${!this.isUiValid}
            aria-haspopup="listbox"
            aria-labelledby=${Br(i)}
            aria-required=${this.required}
            aria-describedby=${Br(r)}
            @click=${this.onClick}
            @focus=${this.onFocus}
            @blur=${this.onBlur}
            @keydown=${this.onKeydown}>
          ${this.renderRipple()}
          ${this.outlined ? this.renderOutline() : this.renderLabel()}
          ${this.renderLeadingIcon()}
          <span class="mdc-select__selected-text-container">
            <span class="mdc-select__selected-text">${this.selectedText}</span>
          </span>
          <span class="mdc-select__dropdown-icon">
            <svg
                class="mdc-select__dropdown-icon-graphic"
                viewBox="7 10 10 5"
                focusable="false">
              <polygon
                  class="mdc-select__dropdown-icon-inactive"
                  stroke="none"
                  fill-rule="evenodd"
                  points="7 10 12 15 17 10">
              </polygon>
              <polygon
                  class="mdc-select__dropdown-icon-active"
                  stroke="none"
                  fill-rule="evenodd"
                  points="7 15 12 10 17 15">
              </polygon>
            </svg>
          </span>
          ${this.renderLineRipple()}
        </div>
        <mwc-menu
            innerRole="listbox"
            wrapFocus
            class="mdc-select__menu mdc-menu mdc-menu-surface ${jt(t)}"
            activatable
            .fullwidth=${!this.fixedMenuPosition && !this.naturalMenuWidth}
            .open=${this.menuOpen}
            .anchor=${this.anchorElement}
            .fixed=${this.fixedMenuPosition}
            @selected=${this.onSelected}
            @opened=${this.onOpened}
            @closed=${this.onClosed}
            @items-updated=${this.onItemsUpdated}
            @keydown=${this.handleTypeahead}>
          <slot></slot>
        </mwc-menu>
      </div>
      ${this.renderHelperText()}`;
      }
      renderRipple() {
        return this.outlined
          ? Ee
          : Ge`
      <span class="mdc-select__ripple"></span>
    `;
      }
      renderOutline() {
        return this.outlined
          ? Ge`
      <mwc-notched-outline
          .width=${this.outlineWidth}
          .open=${this.outlineOpen}
          class="mdc-notched-outline">
        ${this.renderLabel()}
      </mwc-notched-outline>`
          : Ee;
      }
      renderLabel() {
        return this.label
          ? Ge`
      <span
          .floatingLabelFoundation=${Za(this.label)}
          id="label">${this.label}</span>
    `
          : Ee;
      }
      renderLeadingIcon() {
        return this.icon
          ? Ge`<mwc-icon class="mdc-select__icon"><div>${this.icon}</div></mwc-icon>`
          : Ee;
      }
      renderLineRipple() {
        return this.outlined
          ? Ee
          : Ge`
      <span .lineRippleFoundation=${on()}></span>
    `;
      }
      renderHelperText() {
        if (!this.shouldRenderHelperText) return Ee;
        var e = this.validationMessage && !this.isUiValid;
        return Ge`
        <p
          class="mdc-select-helper-text ${jt({
            'mdc-select-helper-text--validation-msg': e,
          })}"
          id="helper-text">${e ? this.validationMessage : this.helper}</p>`;
      }
      createAdapter() {
        return Object.assign(Object.assign({}, Ft(this.mdcRoot)), {
          activateBottomLine: () => {
            this.lineRippleElement &&
              this.lineRippleElement.lineRippleFoundation.activate();
          },
          deactivateBottomLine: () => {
            this.lineRippleElement &&
              this.lineRippleElement.lineRippleFoundation.deactivate();
          },
          hasLabel: () => !!this.label,
          floatLabel: e => {
            this.labelElement &&
              this.labelElement.floatingLabelFoundation.float(e);
          },
          getLabelWidth: () =>
            this.labelElement
              ? this.labelElement.floatingLabelFoundation.getWidth()
              : 0,
          setLabelRequired: e => {
            this.labelElement &&
              this.labelElement.floatingLabelFoundation.setRequired(e);
          },
          hasOutline: () => this.outlined,
          notchOutline: e => {
            this.outlineElement &&
              !this.outlineOpen &&
              ((this.outlineWidth = e), (this.outlineOpen = !0));
          },
          closeOutline: () => {
            this.outlineElement && (this.outlineOpen = !1);
          },
          setRippleCenter: e => {
            this.lineRippleElement &&
              this.lineRippleElement.lineRippleFoundation.setRippleCenter(e);
          },
          notifyChange: async e => {
            (!this.valueSetDirectly && e === this.value) ||
              ((this.valueSetDirectly = !1),
              (this.value = e),
              await this.updateComplete,
              (e = new Event('change', { bubbles: !0 })),
              this.dispatchEvent(e));
          },
          setSelectedText: e => (this.selectedText = e),
          isSelectAnchorFocused: () => {
            const e = this.anchorElement;
            return !!e && e.getRootNode().activeElement === e;
          },
          getSelectAnchorAttr: e => {
            const t = this.anchorElement;
            return t ? t.getAttribute(e) : null;
          },
          setSelectAnchorAttr: (e, t) => {
            const i = this.anchorElement;
            i && i.setAttribute(e, t);
          },
          removeSelectAnchorAttr: e => {
            const t = this.anchorElement;
            t && t.removeAttribute(e);
          },
          openMenu: () => {
            this.menuOpen = !0;
          },
          closeMenu: () => {
            this.menuOpen = !1;
          },
          addMenuClass: () => {},
          removeMenuClass: () => {},
          getAnchorElement: () => this.anchorElement,
          setMenuAnchorElement: () => {},
          setMenuAnchorCorner: () => {
            const e = this.menuElement;
            e && (e.corner = 'BOTTOM_START');
          },
          setMenuWrapFocus: e => {
            const t = this.menuElement;
            t && (t.wrapFocus = e);
          },
          focusMenuItemAtIndex: e => {
            var t = this.menuElement;
            if (t) {
              const i = t.items[e];
              i && i.focus();
            }
          },
          getMenuItemCount: () => {
            var e = this.menuElement;
            return e ? e.items.length : 0;
          },
          getMenuItemValues: () => {
            var e = this.menuElement;
            return e ? e.items.map(e => e.value) : [];
          },
          getMenuItemTextAtIndex: e => {
            var t = this.menuElement;
            return t && (e = t.items[e]) ? e.text : '';
          },
          getSelectedIndex: () => this.index,
          setSelectedIndex: () => {},
          isTypeaheadInProgress: () => Ka(this.typeaheadState),
          typeaheadMatchItem: (e, t) =>
            this.menuElement
              ? (-1 !==
                  (e = Xa(
                    {
                      focusItemAtIndex: e => {
                        this.menuElement.focusItemAtIndex(e);
                      },
                      focusedItemIndex:
                        t || this.menuElement.getFocusedItemIndex(),
                      nextChar: e,
                      sortedIndexByFirstChar: this.sortedIndexByFirstChar,
                      skipFocus: !1,
                      isItemAtIndexDisabled: e => this.items[e].disabled,
                    },
                    this.typeaheadState
                  )) && this.select(e),
                e)
              : -1,
        });
      }
      checkValidity() {
        var e,
          t = this._checkValidity(this.value);
        return (
          t ||
            ((e = new Event('invalid', { bubbles: !1, cancelable: !0 })),
            this.dispatchEvent(e)),
          t
        );
      }
      reportValidity() {
        var e = this.checkValidity();
        return (this.isUiValid = e);
      }
      _checkValidity(e) {
        var t = this.formElement.validity;
        let i = pn(t);
        return (
          this.validityTransform &&
            ((e = this.validityTransform(e, i)),
            (i = Object.assign(Object.assign({}, i), e))),
          (this._validity = i),
          this._validity.valid
        );
      }
      setCustomValidity(e) {
        (this.validationMessage = e), this.formElement.setCustomValidity(e);
      }
      async getUpdateComplete() {
        return await this._menuUpdateComplete, await super.getUpdateComplete();
      }
      async firstUpdated() {
        var e = this.menuElement;
        if (
          (e &&
            ((this._menuUpdateComplete = e.updateComplete),
            await this._menuUpdateComplete),
          super.firstUpdated(),
          (this.mdcFoundation.isValid = () => !0),
          (this.mdcFoundation.setValid = () => {}),
          this.mdcFoundation.setDisabled(this.disabled),
          this.validateOnInitialRender && this.reportValidity(),
          !this.selected)
        ) {
          if (
            (!this.items.length &&
              this.slotElement &&
              this.slotElement.assignedNodes({ flatten: !0 }).length &&
              (await new Promise(e => requestAnimationFrame(e)),
              await this.layout()),
            (e = this.items.length && '' === this.items[0].value),
            !this.value && e)
          )
            return void this.select(0);
          this.selectByValue(this.value);
        }
        this.sortedIndexByFirstChar = Ga(
          this.items.length,
          e => this.items[e].text
        );
      }
      onItemsUpdated() {
        this.sortedIndexByFirstChar = Ga(
          this.items.length,
          e => this.items[e].text
        );
      }
      select(e) {
        const t = this.menuElement;
        t && t.select(e);
      }
      selectByValue(e) {
        let t = -1;
        for (let i = 0; i < this.items.length; i++)
          if (this.items[i].value === e) {
            t = i;
            break;
          }
        (this.valueSetDirectly = !0),
          this.select(t),
          this.mdcFoundation.handleChange();
      }
      disconnectedCallback() {
        super.disconnectedCallback();
        for (const e of this.listeners)
          e.target.removeEventListener(e.name, e.cb);
      }
      focus() {
        var e = new CustomEvent('focus');
        const t = this.anchorElement;
        t && (t.dispatchEvent(e), t.focus());
      }
      blur() {
        var e = new CustomEvent('blur');
        const t = this.anchorElement;
        t && (t.dispatchEvent(e), t.blur());
      }
      onFocus() {
        this.mdcFoundation && this.mdcFoundation.handleFocus();
      }
      onBlur() {
        this.mdcFoundation && this.mdcFoundation.handleBlur();
        var e = this.menuElement;
        e && !e.open && this.reportValidity();
      }
      onClick(e) {
        if (this.mdcFoundation) {
          this.focus();
          var t = e.target.getBoundingClientRect();
          let i = 0;
          (i = ('touches' in e ? e.touches[0] : e).clientX),
            (t = i - t.left),
            this.mdcFoundation.handleClick(t);
        }
      }
      onKeydown(e) {
        var t = Qo(e) === Xo,
          i = Qo(e) === Ko;
        if (i || t)
          return (
            (t = t && 0 < this.index),
            (i = i && this.index < this.items.length - 1),
            t ? this.select(this.index - 1) : i && this.select(this.index + 1),
            e.preventDefault(),
            void this.mdcFoundation.openMenu()
          );
        this.mdcFoundation.handleKeydown(e);
      }
      handleTypeahead(e) {
        if (this.menuElement) {
          var t = this.menuElement.getFocusedItemIndex();
          const f = Lt(e.target) ? e.target : null;
          var i,
            r,
            o,
            a,
            n,
            d,
            s,
            c,
            l,
            p,
            m,
            h,
            u = {
              event: e,
              focusItemAtIndex: e => {
                this.menuElement.focusItemAtIndex(e);
              },
              focusedItemIndex: t,
              isTargetListItem: !!f && f.hasAttribute('mwc-list-item'),
              sortedIndexByFirstChar: this.sortedIndexByFirstChar,
              isItemAtIndexDisabled: e => this.items[e].disabled,
            };
          (i = u),
            (r = this.typeaheadState),
            (o = i.event),
            (a = i.isTargetListItem),
            (n = i.focusedItemIndex),
            (d = i.focusItemAtIndex),
            (s = i.sortedIndexByFirstChar),
            (c = i.isItemAtIndexDisabled),
            (l = 'ArrowLeft' === Qo(o)),
            (p = 'ArrowUp' === Qo(o)),
            (m = 'ArrowRight' === Qo(o)),
            (h = 'ArrowDown' === Qo(o)),
            (e = 'Home' === Qo(o)),
            (t = 'End' === Qo(o)),
            (u = 'Enter' === Qo(o)),
            (i = 'Spacebar' === Qo(o)),
            o.ctrlKey ||
              o.metaKey ||
              l ||
              p ||
              m ||
              h ||
              e ||
              t ||
              u ||
              (i || 1 !== o.key.length
                ? i &&
                  (a && Ua(o),
                  a &&
                    Ka(r) &&
                    Xa(
                      {
                        focusItemAtIndex: d,
                        focusedItemIndex: n,
                        nextChar: ' ',
                        sortedIndexByFirstChar: s,
                        skipFocus: !1,
                        isItemAtIndexDisabled: c,
                      },
                      r
                    ))
                : (Ua(o),
                  Xa(
                    {
                      focusItemAtIndex: d,
                      focusedItemIndex: n,
                      nextChar: o.key.toLowerCase(),
                      sortedIndexByFirstChar: s,
                      skipFocus: !1,
                      isItemAtIndexDisabled: c,
                    },
                    r
                  )));
        }
      }
      async onSelected(e) {
        this.mdcFoundation || (await this.updateComplete),
          this.mdcFoundation.handleMenuItemAction(e.detail.index),
          (e = this.items[e.detail.index]) && (this.value = e.value);
      }
      onOpened() {
        this.mdcFoundation &&
          ((this.menuOpen = !0), this.mdcFoundation.handleMenuOpened());
      }
      onClosed() {
        this.mdcFoundation &&
          ((this.menuOpen = !1), this.mdcFoundation.handleMenuClosed());
      }
      async layout(e = !0) {
        this.mdcFoundation && this.mdcFoundation.layout(),
          await this.updateComplete;
        const t = this.menuElement;
        t && t.layout(e);
        const i = this.labelElement;
        i
          ? ((e = !!this.label && !!this.value),
            i.floatingLabelFoundation.float(e),
            this.outlined &&
              ((this.outlineOpen = e),
              await this.updateComplete,
              (e = i.floatingLabelFoundation.getWidth()),
              this.outlineOpen && (this.outlineWidth = e)))
          : (this.outlineOpen = !1);
      }
      async layoutOptions() {
        this.mdcFoundation && this.mdcFoundation.layoutOptions();
      }
    }
    o([at('.mdc-select')], mn.prototype, 'mdcRoot', void 0),
      o([at('.formElement')], mn.prototype, 'formElement', void 0),
      o([at('slot')], mn.prototype, 'slotElement', void 0),
      o([at('select')], mn.prototype, 'nativeSelectElement', void 0),
      o([at('input')], mn.prototype, 'nativeInputElement', void 0),
      o([at('.mdc-line-ripple')], mn.prototype, 'lineRippleElement', void 0),
      o([at('.mdc-floating-label')], mn.prototype, 'labelElement', void 0),
      o([at('mwc-notched-outline')], mn.prototype, 'outlineElement', void 0),
      o([at('.mdc-menu')], mn.prototype, 'menuElement', void 0),
      o([at('.mdc-select__anchor')], mn.prototype, 'anchorElement', void 0),
      o(
        [
          rt({ type: Boolean, attribute: 'disabled', reflect: !0 }),
          Bt(function (e) {
            this.mdcFoundation && this.mdcFoundation.setDisabled(e);
          }),
        ],
        mn.prototype,
        'disabled',
        void 0
      ),
      o(
        [
          rt({ type: Boolean }),
          Bt(function (e, t) {
            void 0 !== t && this.outlined !== t && this.layout(!1);
          }),
        ],
        mn.prototype,
        'outlined',
        void 0
      ),
      o(
        [
          rt({ type: String }),
          Bt(function (e, t) {
            void 0 !== t && this.label !== t && this.layout(!1);
          }),
        ],
        mn.prototype,
        'label',
        void 0
      ),
      o([ot()], mn.prototype, 'outlineOpen', void 0),
      o([ot()], mn.prototype, 'outlineWidth', void 0),
      o(
        [
          rt({ type: String }),
          Bt(function (e) {
            var t, i;
            this.mdcFoundation &&
              ((t = null === this.selected && !!e),
              (i = this.selected && this.selected.value !== e),
              (t || i) && this.selectByValue(e),
              this.reportValidity());
          }),
        ],
        mn.prototype,
        'value',
        void 0
      ),
      o([ot()], mn.prototype, 'selectedText', void 0),
      o([rt({ type: String })], mn.prototype, 'icon', void 0),
      o([ot()], mn.prototype, 'menuOpen', void 0),
      o([rt({ type: String })], mn.prototype, 'helper', void 0),
      o(
        [rt({ type: Boolean })],
        mn.prototype,
        'validateOnInitialRender',
        void 0
      ),
      o([rt({ type: String })], mn.prototype, 'validationMessage', void 0),
      o([rt({ type: Boolean })], mn.prototype, 'required', void 0),
      o([rt({ type: Boolean })], mn.prototype, 'naturalMenuWidth', void 0),
      o([ot()], mn.prototype, 'isUiValid', void 0),
      o([rt({ type: Boolean })], mn.prototype, 'fixedMenuPosition', void 0),
      o([ct({ capture: !0 })], mn.prototype, 'handleTypeahead', null),
      (Uo = gt`.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{border-bottom-width:1px;z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}.mdc-select{display:inline-flex;position:relative}.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.87)}.mdc-select.mdc-select--disabled .mdc-select__selected-text{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-floating-label{color:rgba(0, 0, 0, 0.6)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:rgba(98, 0, 238, 0.87)}.mdc-select.mdc-select--disabled .mdc-floating-label{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.54)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon{fill:#6200ee;fill:var(--mdc-theme-primary, #6200ee)}.mdc-select.mdc-select--disabled .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled)+.mdc-select-helper-text{color:rgba(0, 0, 0, 0.6)}.mdc-select.mdc-select--disabled+.mdc-select-helper-text{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-select__icon{color:rgba(0, 0, 0, 0.54)}.mdc-select.mdc-select--disabled .mdc-select__icon{color:rgba(0, 0, 0, 0.38)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-select.mdc-select--disabled .mdc-select__selected-text{color:GrayText}.mdc-select.mdc-select--disabled .mdc-select__dropdown-icon{fill:red}.mdc-select.mdc-select--disabled .mdc-floating-label{color:GrayText}.mdc-select.mdc-select--disabled .mdc-line-ripple::before{border-bottom-color:GrayText}.mdc-select.mdc-select--disabled .mdc-notched-outline__leading,.mdc-select.mdc-select--disabled .mdc-notched-outline__notch,.mdc-select.mdc-select--disabled .mdc-notched-outline__trailing{border-color:GrayText}.mdc-select.mdc-select--disabled .mdc-select__icon{color:GrayText}.mdc-select.mdc-select--disabled+.mdc-select-helper-text{color:GrayText}}.mdc-select .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-select .mdc-select__anchor{padding-left:16px;padding-right:0}[dir=rtl] .mdc-select .mdc-select__anchor,.mdc-select .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:16px}.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor{padding-left:0;padding-right:0}[dir=rtl] .mdc-select.mdc-select--with-leading-icon .mdc-select__anchor,.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:0}.mdc-select .mdc-select__icon{width:24px;height:24px;font-size:24px}.mdc-select .mdc-select__dropdown-icon{width:24px;height:24px}.mdc-select .mdc-select__menu .mdc-deprecated-list-item{padding-left:16px;padding-right:16px}[dir=rtl] .mdc-select .mdc-select__menu .mdc-deprecated-list-item,.mdc-select .mdc-select__menu .mdc-deprecated-list-item[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:12px}[dir=rtl] .mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic,.mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:12px;margin-right:0}.mdc-select__dropdown-icon{margin-left:12px;margin-right:12px;display:inline-flex;position:relative;align-self:center;align-items:center;justify-content:center;flex-shrink:0;pointer-events:none}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active,.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{position:absolute;top:0;left:0}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-graphic{width:41.6666666667%;height:20.8333333333%}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:1;transition:opacity 75ms linear 75ms}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:0;transition:opacity 75ms linear}[dir=rtl] .mdc-select__dropdown-icon,.mdc-select__dropdown-icon[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:0;transition:opacity 49.5ms linear}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:1;transition:opacity 100.5ms linear 49.5ms}.mdc-select__anchor{width:200px;min-width:0;flex:1 1 auto;position:relative;box-sizing:border-box;overflow:hidden;outline:none;cursor:pointer}.mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-select__selected-text-container{display:flex;appearance:none;pointer-events:none;box-sizing:border-box;width:auto;min-width:0;flex-grow:1;height:28px;border:none;outline:none;padding:0;background-color:transparent;color:inherit}.mdc-select__selected-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;width:100%;text-align:left}[dir=rtl] .mdc-select__selected-text,.mdc-select__selected-text[dir=rtl]{text-align:right}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--invalid+.mdc-select-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:#b00020;fill:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon{fill:#b00020;fill:var(--mdc-theme-error, #b00020)}.mdc-select--disabled{cursor:default;pointer-events:none}.mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item{padding-left:12px;padding-right:12px}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item,.mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item[dir=rtl]{padding-left:12px;padding-right:12px}.mdc-select__menu .mdc-deprecated-list .mdc-select__icon{margin-left:0;margin-right:0}[dir=rtl] .mdc-select__menu .mdc-deprecated-list .mdc-select__icon,.mdc-select__menu .mdc-deprecated-list .mdc-select__icon[dir=rtl]{margin-left:0;margin-right:0}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--activated{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__graphic,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select--filled .mdc-select__anchor{height:56px;display:flex;align-items:baseline}.mdc-select--filled .mdc-select__anchor::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text::before{content:"​"}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text-container{height:100%;display:inline-flex;align-items:center}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor::before{display:none}.mdc-select--filled .mdc-select__anchor{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-select--filled:not(.mdc-select--disabled) .mdc-select__anchor{background-color:whitesmoke}.mdc-select--filled.mdc-select--disabled .mdc-select__anchor{background-color:#fafafa}.mdc-select--filled:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42)}.mdc-select--filled:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87)}.mdc-select--filled:not(.mdc-select--disabled) .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-select--filled.mdc-select--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06)}.mdc-select--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-select--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-select--filled .mdc-menu-surface--is-open-below{border-top-left-radius:0px;border-top-right-radius:0px}.mdc-select--filled.mdc-select--focused.mdc-line-ripple::after{transform:scale(1, 2);opacity:1}.mdc-select--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-select--filled .mdc-floating-label,.mdc-select--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{left:48px;right:initial}[dir=rtl] .mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined{border:none}.mdc-select--outlined .mdc-select__anchor{height:56px}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-56px{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-select--outlined .mdc-select__anchor{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-select--outlined .mdc-select__anchor,.mdc-select--outlined .mdc-select__anchor[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-select--outlined .mdc-select__anchor,.mdc-select--outlined .mdc-select__anchor[dir=rtl]{padding-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-select--outlined+.mdc-select-helper-text{margin-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-select--outlined+.mdc-select-helper-text,.mdc-select--outlined+.mdc-select-helper-text[dir=rtl]{margin-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-select--outlined+.mdc-select-helper-text,.mdc-select--outlined+.mdc-select-helper-text[dir=rtl]{margin-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-select__anchor{background-color:transparent}.mdc-select--outlined.mdc-select--disabled .mdc-select__anchor{background-color:transparent}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.38)}.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.87)}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.06)}.mdc-select--outlined .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-select--outlined .mdc-select__anchor{display:flex;align-items:baseline;overflow:visible}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined 250ms 1}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text::before{content:"​"}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text-container{height:100%;display:inline-flex;align-items:center}.mdc-select--outlined .mdc-select__anchor::before{display:none}.mdc-select--outlined .mdc-select__selected-text-container{display:flex;border:none;z-index:1;background-color:transparent}.mdc-select--outlined .mdc-select__icon{z-index:2}.mdc-select--outlined .mdc-floating-label{line-height:1.15rem;left:4px;right:initial}[dir=rtl] .mdc-select--outlined .mdc-floating-label,.mdc-select--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-select--outlined.mdc-select--focused .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--shake,.mdc-select--outlined.mdc-select--with-leading-icon[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 96px)}.mdc-select--outlined .mdc-menu-surface{margin-bottom:8px}.mdc-select--outlined.mdc-select--no-label .mdc-menu-surface,.mdc-select--outlined .mdc-menu-surface--is-open-below{margin-bottom:0}.mdc-select__anchor{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-select__anchor .mdc-select__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-select__anchor .mdc-select__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-select__anchor.mdc-ripple-upgraded--unbounded .mdc-select__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-select__anchor.mdc-ripple-upgraded--foreground-activation .mdc-select__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-select__anchor.mdc-ripple-upgraded--foreground-deactivation .mdc-select__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-select__anchor:hover .mdc-select__ripple::before,.mdc-select__anchor.mdc-ripple-surface--hover .mdc-select__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__anchor.mdc-ripple-upgraded--background-focused .mdc-select__ripple::before,.mdc-select__anchor:not(.mdc-ripple-upgraded):focus .mdc-select__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__anchor .mdc-select__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:hover .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-deprecated-list-item__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-deprecated-list-item__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-deprecated-list-item__ripple::after{transition:opacity 150ms linear}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-deprecated-list-item__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-list-item__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:hover .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-list-item__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-list-item__ripple::after{transition:opacity 150ms linear}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select-helper-text{margin:0;margin-left:16px;margin-right:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal}[dir=rtl] .mdc-select-helper-text,.mdc-select-helper-text[dir=rtl]{margin-left:16px;margin-right:16px}.mdc-select-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-select-helper-text--validation-msg{opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-select--invalid+.mdc-select-helper-text--validation-msg,.mdc-select-helper-text--validation-msg-persistent{opacity:1}.mdc-select--with-leading-icon .mdc-select__icon{display:inline-block;box-sizing:border-box;border:none;text-decoration:none;cursor:pointer;user-select:none;flex-shrink:0;align-self:center;background-color:transparent;fill:currentColor}.mdc-select--with-leading-icon .mdc-select__icon{margin-left:12px;margin-right:12px}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__icon,.mdc-select--with-leading-icon .mdc-select__icon[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select__icon:not([tabindex]),.mdc-select__icon[tabindex="-1"]{cursor:default;pointer-events:none}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-block;vertical-align:top;outline:none}.mdc-select{width:100%}[hidden]{display:none}.mdc-select__icon{z-index:2}.mdc-select--with-leading-icon{--mdc-list-item-graphic-margin: calc( 48px - var(--mdc-list-item-graphic-size, 24px) - var(--mdc-list-side-padding, 16px) )}.mdc-select .mdc-select__anchor .mdc-select__selected-text{overflow:hidden}.mdc-select .mdc-select__anchor *{display:inline-flex}.mdc-select .mdc-select__anchor .mdc-floating-label{display:inline-block}mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-idle-border-color, rgba(0, 0, 0, 0.38) );--mdc-notched-outline-notch-offset: 1px}:host(:not([disabled]):hover) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-hover-border-color, rgba(0, 0, 0, 0.87) )}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.87);color:var(--mdc-select-ink-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42);border-bottom-color:var(--mdc-select-idle-line-color, rgba(0, 0, 0, 0.42))}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87);border-bottom-color:var(--mdc-select-hover-line-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--outlined):not(.mdc-select--disabled) .mdc-select__anchor{background-color:whitesmoke;background-color:var(--mdc-select-fill-color, whitesmoke)}:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-select__dropdown-icon{fill:var(--mdc-select-error-dropdown-icon-color, var(--mdc-select-error-color, var(--mdc-theme-error, #b00020)))}:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-floating-label,:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-floating-label::after{color:var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-select.mdc-select--invalid mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}.mdc-select__menu--invalid{--mdc-theme-primary: var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label::after{color:rgba(0, 0, 0, 0.6);color:var(--mdc-select-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.54);fill:var(--mdc-select-dropdown-icon-color, rgba(0, 0, 0, 0.54))}:host(:not([disabled])) .mdc-select.mdc-select--focused mwc-notched-outline{--mdc-notched-outline-stroke-width: 2px;--mdc-notched-outline-notch-offset: 2px}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)) )}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-select__dropdown-icon{fill:rgba(98,0,238,.87);fill:var(--mdc-select-focused-dropdown-icon-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)))}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-floating-label::after{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-select-helper-text:not(.mdc-select-helper-text--validation-msg){color:var(--mdc-select-label-ink-color, rgba(0, 0, 0, 0.6))}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-select:not(.mdc-select--outlined).mdc-select--disabled .mdc-select__anchor{background-color:#fafafa;background-color:var(--mdc-select-disabled-fill-color, #fafafa)}:host([disabled]) .mdc-select.mdc-select--outlined mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-disabled-border-color, rgba(0, 0, 0, 0.06) )}:host([disabled]) .mdc-select .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.38);fill:var(--mdc-select-disabled-dropdown-icon-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label,:host([disabled]) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label::after{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select-helper-text{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}`);
    let hn = class extends mn {};
    (hn.styles = [Uo]), (hn = o([tt('mwc-select')], hn));
    var un,
      fn,
      gn,
      bn = {
        ACTIVE: 'mdc-tab-indicator--active',
        FADE: 'mdc-tab-indicator--fade',
        NO_TRANSITION: 'mdc-tab-indicator--no-transition',
      },
      _n = { CONTENT_SELECTOR: '.mdc-tab-indicator__content' },
      xn =
        (t(vn, (un = At)),
        Object.defineProperty(vn, 'cssClasses', {
          get: function () {
            return bn;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(vn, 'strings', {
          get: function () {
            return _n;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(vn, 'defaultAdapter', {
          get: function () {
            return {
              addClass: function () {},
              removeClass: function () {},
              computeContentClientRect: function () {
                return {
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  width: 0,
                  height: 0,
                };
              },
              setContentStyleProperty: function () {},
            };
          },
          enumerable: !1,
          configurable: !0,
        }),
        (vn.prototype.computeContentClientRect = function () {
          return this.adapter.computeContentClientRect();
        }),
        vn);
    function vn(e) {
      return un.call(this, r(r({}, vn.defaultAdapter), e)) || this;
    }
    function yn() {
      return (null !== fn && fn.apply(this, arguments)) || this;
    }
    const wn =
      (t(yn, (fn = xn)),
      (yn.prototype.activate = function () {
        this.adapter.addClass(xn.cssClasses.ACTIVE);
      }),
      (yn.prototype.deactivate = function () {
        this.adapter.removeClass(xn.cssClasses.ACTIVE);
      }),
      yn);
    function kn() {
      return (null !== gn && gn.apply(this, arguments)) || this;
    }
    const En =
      (t(kn, (gn = xn)),
      (kn.prototype.activate = function (e) {
        var t, i;
        e
          ? ((i = this.computeContentClientRect()),
            (t = e.width / i.width),
            (i = e.left - i.left),
            this.adapter.addClass(xn.cssClasses.NO_TRANSITION),
            this.adapter.setContentStyleProperty(
              'transform',
              'translateX(' + i + 'px) scaleX(' + t + ')'
            ),
            this.computeContentClientRect(),
            this.adapter.removeClass(xn.cssClasses.NO_TRANSITION),
            this.adapter.addClass(xn.cssClasses.ACTIVE),
            this.adapter.setContentStyleProperty('transform', ''))
          : this.adapter.addClass(xn.cssClasses.ACTIVE);
      }),
      (kn.prototype.deactivate = function () {
        this.adapter.removeClass(xn.cssClasses.ACTIVE);
      }),
      kn);
    class Cn extends Ht {
      constructor() {
        super(...arguments), (this.icon = ''), (this.fade = !1);
      }
      get mdcFoundationClass() {
        return this.fade ? wn : En;
      }
      render() {
        var e = {
          'mdc-tab-indicator__content--icon': this.icon,
          'material-icons': this.icon,
          'mdc-tab-indicator__content--underline': !this.icon,
        };
        return Ge`
      <span class="mdc-tab-indicator ${jt({
        'mdc-tab-indicator--fade': this.fade,
      })}">
        <span class="mdc-tab-indicator__content ${jt(e)}">${this.icon}</span>
      </span>
      `;
      }
      updated(e) {
        e.has('fade') && this.createFoundation();
      }
      createAdapter() {
        return Object.assign(Object.assign({}, Ft(this.mdcRoot)), {
          computeContentClientRect: () =>
            this.contentElement.getBoundingClientRect(),
          setContentStyleProperty: (e, t) =>
            this.contentElement.style.setProperty(e, t),
        });
      }
      computeContentClientRect() {
        return this.mdcFoundation.computeContentClientRect();
      }
      activate(e) {
        this.mdcFoundation.activate(e);
      }
      deactivate() {
        this.mdcFoundation.deactivate();
      }
    }
    o([at('.mdc-tab-indicator')], Cn.prototype, 'mdcRoot', void 0),
      o(
        [at('.mdc-tab-indicator__content')],
        Cn.prototype,
        'contentElement',
        void 0
      ),
      o([rt()], Cn.prototype, 'icon', void 0),
      o([rt({ type: Boolean })], Cn.prototype, 'fade', void 0),
      (Uo = gt`.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-tab-indicator .mdc-tab-indicator__content--underline{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-tab-indicator .mdc-tab-indicator__content--icon{color:#018786;color:var(--mdc-theme-secondary, #018786)}.mdc-tab-indicator .mdc-tab-indicator__content--underline{border-top-width:2px}.mdc-tab-indicator .mdc-tab-indicator__content--icon{height:34px;font-size:34px}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator__content--icon{align-self:center;margin:0 auto}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}.mdc-tab-indicator .mdc-tab-indicator__content{transition:250ms transform cubic-bezier(0.4, 0, 0.2, 1)}.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition:150ms opacity linear}.mdc-tab-indicator--active.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition-delay:100ms}`);
    let An = class extends Cn {};
    (An.styles = [Uo]), (An = o([tt('mwc-tab-indicator')], An));
    var Sn,
      In = { ACTIVE: 'mdc-tab--active' },
      Tn = {
        ARIA_SELECTED: 'aria-selected',
        CONTENT_SELECTOR: '.mdc-tab__content',
        INTERACTED_EVENT: 'MDCTab:interacted',
        RIPPLE_SELECTOR: '.mdc-tab__ripple',
        TABINDEX: 'tabIndex',
        TAB_INDICATOR_SELECTOR: '.mdc-tab-indicator',
      };
    function Rn(e) {
      return (
        ((e =
          Sn.call(this, r(r({}, Rn.defaultAdapter), e)) ||
          this).focusOnActivate = !0),
        e
      );
    }
    const On =
      (t(Rn, (Sn = At)),
      Object.defineProperty(Rn, 'cssClasses', {
        get: function () {
          return In;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(Rn, 'strings', {
        get: function () {
          return Tn;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(Rn, 'defaultAdapter', {
        get: function () {
          return {
            addClass: function () {},
            removeClass: function () {},
            hasClass: function () {
              return !1;
            },
            setAttr: function () {},
            activateIndicator: function () {},
            deactivateIndicator: function () {},
            notifyInteracted: function () {},
            getOffsetLeft: function () {
              return 0;
            },
            getOffsetWidth: function () {
              return 0;
            },
            getContentOffsetLeft: function () {
              return 0;
            },
            getContentOffsetWidth: function () {
              return 0;
            },
            focus: function () {},
          };
        },
        enumerable: !1,
        configurable: !0,
      }),
      (Rn.prototype.handleClick = function () {
        this.adapter.notifyInteracted();
      }),
      (Rn.prototype.isActive = function () {
        return this.adapter.hasClass(In.ACTIVE);
      }),
      (Rn.prototype.setFocusOnActivate = function (e) {
        this.focusOnActivate = e;
      }),
      (Rn.prototype.activate = function (e) {
        this.adapter.addClass(In.ACTIVE),
          this.adapter.setAttr(Tn.ARIA_SELECTED, 'true'),
          this.adapter.setAttr(Tn.TABINDEX, '0'),
          this.adapter.activateIndicator(e),
          this.focusOnActivate && this.adapter.focus();
      }),
      (Rn.prototype.deactivate = function () {
        this.isActive() &&
          (this.adapter.removeClass(In.ACTIVE),
          this.adapter.setAttr(Tn.ARIA_SELECTED, 'false'),
          this.adapter.setAttr(Tn.TABINDEX, '-1'),
          this.adapter.deactivateIndicator());
      }),
      (Rn.prototype.computeDimensions = function () {
        var e = this.adapter.getOffsetWidth(),
          t = this.adapter.getOffsetLeft(),
          i = this.adapter.getContentOffsetWidth(),
          r = this.adapter.getContentOffsetLeft();
        return {
          contentLeft: t + r,
          contentRight: t + r + i,
          rootLeft: t,
          rootRight: t + e,
        };
      }),
      Rn);
    let Ln = 0;
    class Fn extends Ht {
      constructor() {
        super(...arguments),
          (this.mdcFoundationClass = On),
          (this.label = ''),
          (this.icon = ''),
          (this.hasImageIcon = !1),
          (this.isFadingIndicator = !1),
          (this.minWidth = !1),
          (this.isMinWidthIndicator = !1),
          (this.indicatorIcon = ''),
          (this.stacked = !1),
          (this.focusOnActivate = !0),
          (this._active = !1),
          (this.initFocus = !1),
          (this.shouldRenderRipple = !1),
          (this.rippleElement = null),
          (this.rippleHandlers = new mi(
            () => (
              (this.shouldRenderRipple = !0),
              this.ripple.then(e => (this.rippleElement = e)),
              this.ripple
            )
          ));
      }
      get active() {
        return this._active;
      }
      connectedCallback() {
        (this.dir = document.dir), super.connectedCallback();
      }
      firstUpdated() {
        super.firstUpdated(), (this.id = this.id || 'mdc-tab-' + ++Ln);
      }
      render() {
        var e = {
          'mdc-tab--min-width': this.minWidth,
          'mdc-tab--stacked': this.stacked,
        };
        let t = Ge``;
        (this.hasImageIcon || this.icon) &&
          (t = Ge`
        <span class="mdc-tab__icon material-icons"><slot name="icon">${this.icon}</slot></span>`);
        let i = Ge``;
        return (
          this.label &&
            (i = Ge`
        <span class="mdc-tab__text-label">${this.label}</span>`),
          Ge`
      <button
        @click="${this.handleClick}"
        class="mdc-tab ${jt(e)}"
        role="tab"
        aria-selected="false"
        tabindex="-1"
        @focus="${this.focus}"
        @blur="${this.handleBlur}"
        @mousedown="${this.handleRippleMouseDown}"
        @mouseenter="${this.handleRippleMouseEnter}"
        @mouseleave="${this.handleRippleMouseLeave}"
        @touchstart="${this.handleRippleTouchStart}"
        @touchend="${this.handleRippleDeactivate}"
        @touchcancel="${this.handleRippleDeactivate}">
        <span class="mdc-tab__content">
          ${t}
          ${i}
          ${this.isMinWidthIndicator ? this.renderIndicator() : ''}
        </span>
        ${this.isMinWidthIndicator ? '' : this.renderIndicator()}
        ${this.renderRipple()}
      </button>`
        );
      }
      renderIndicator() {
        return Ge`<mwc-tab-indicator
        .icon="${this.indicatorIcon}"
        .fade="${this.isFadingIndicator}"></mwc-tab-indicator>`;
      }
      renderRipple() {
        return this.shouldRenderRipple
          ? Ge`
          <mwc-ripple primary></mwc-ripple>
        `
          : '';
      }
      createAdapter() {
        return Object.assign(Object.assign({}, Ft(this.mdcRoot)), {
          setAttr: (e, t) => this.mdcRoot.setAttribute(e, t),
          activateIndicator: async e => {
            await this.tabIndicator.updateComplete,
              this.tabIndicator.activate(e);
          },
          deactivateIndicator: async () => {
            await this.tabIndicator.updateComplete,
              this.tabIndicator.deactivate();
          },
          notifyInteracted: () =>
            this.dispatchEvent(
              new CustomEvent(On.strings.INTERACTED_EVENT, {
                detail: { tabId: this.id },
                bubbles: !0,
                composed: !0,
                cancelable: !0,
              })
            ),
          getOffsetLeft: () => this.offsetLeft,
          getOffsetWidth: () => this.mdcRoot.offsetWidth,
          getContentOffsetLeft: () => this._contentElement.offsetLeft,
          getContentOffsetWidth: () => this._contentElement.offsetWidth,
          focus: () => {
            this.initFocus ? (this.initFocus = !1) : this.mdcRoot.focus();
          },
        });
      }
      activate(e) {
        e || (this.initFocus = !0),
          this.mdcFoundation
            ? (this.mdcFoundation.activate(e),
              this.setActive(this.mdcFoundation.isActive()))
            : this.updateComplete.then(() => {
                this.mdcFoundation.activate(e),
                  this.setActive(this.mdcFoundation.isActive());
              });
      }
      deactivate() {
        this.mdcFoundation.deactivate(),
          this.setActive(this.mdcFoundation.isActive());
      }
      setActive(e) {
        var t = this.active;
        t !== e && ((this._active = e), this.requestUpdate('active', t));
      }
      computeDimensions() {
        return this.mdcFoundation.computeDimensions();
      }
      computeIndicatorClientRect() {
        return this.tabIndicator.computeContentClientRect();
      }
      focus() {
        this.mdcRoot.focus(), this.handleFocus();
      }
      handleClick() {
        this.handleFocus(), this.mdcFoundation.handleClick();
      }
      handleFocus() {
        this.handleRippleFocus();
      }
      handleBlur() {
        this.handleRippleBlur();
      }
      handleRippleMouseDown(e) {
        const t = () => {
          window.removeEventListener('mouseup', t),
            this.handleRippleDeactivate();
        };
        window.addEventListener('mouseup', t),
          this.rippleHandlers.startPress(e);
      }
      handleRippleTouchStart(e) {
        this.rippleHandlers.startPress(e);
      }
      handleRippleDeactivate() {
        this.rippleHandlers.endPress();
      }
      handleRippleMouseEnter() {
        this.rippleHandlers.startHover();
      }
      handleRippleMouseLeave() {
        this.rippleHandlers.endHover();
      }
      handleRippleFocus() {
        this.rippleHandlers.startFocus();
      }
      handleRippleBlur() {
        this.rippleHandlers.endFocus();
      }
      get isRippleActive() {
        var e;
        return (
          (null === (e = this.rippleElement) || void 0 === e
            ? void 0
            : e.isActive) || !1
        );
      }
    }
    (Fn.shadowRootOptions = { mode: 'open', delegatesFocus: !0 }),
      o([at('.mdc-tab')], Fn.prototype, 'mdcRoot', void 0),
      o([at('mwc-tab-indicator')], Fn.prototype, 'tabIndicator', void 0),
      o([rt()], Fn.prototype, 'label', void 0),
      o([rt()], Fn.prototype, 'icon', void 0),
      o([rt({ type: Boolean })], Fn.prototype, 'hasImageIcon', void 0),
      o([rt({ type: Boolean })], Fn.prototype, 'isFadingIndicator', void 0),
      o([rt({ type: Boolean })], Fn.prototype, 'minWidth', void 0),
      o([rt({ type: Boolean })], Fn.prototype, 'isMinWidthIndicator', void 0),
      o(
        [rt({ type: Boolean, reflect: !0, attribute: 'active' })],
        Fn.prototype,
        'active',
        null
      ),
      o([rt()], Fn.prototype, 'indicatorIcon', void 0),
      o([rt({ type: Boolean })], Fn.prototype, 'stacked', void 0),
      o(
        [
          Bt(async function (e) {
            await this.updateComplete, this.mdcFoundation.setFocusOnActivate(e);
          }),
          rt({ type: Boolean }),
        ],
        Fn.prototype,
        'focusOnActivate',
        void 0
      ),
      o([at('.mdc-tab__content')], Fn.prototype, '_contentElement', void 0),
      o([ot()], Fn.prototype, 'shouldRenderRipple', void 0),
      o([nt('mwc-ripple')], Fn.prototype, 'ripple', void 0),
      o([ct({ passive: !0 })], Fn.prototype, 'handleRippleTouchStart', null),
      (Uo = gt`.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-tab{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase);position:relative}.mdc-tab .mdc-tab__text-label{color:rgba(0, 0, 0, 0.6)}.mdc-tab .mdc-tab__icon{color:rgba(0, 0, 0, 0.54);fill:currentColor}.mdc-tab__content{position:relative}.mdc-tab__icon{width:24px;height:24px;font-size:24px}.mdc-tab--active .mdc-tab__text-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-tab--active .mdc-tab__icon{color:#6200ee;color:var(--mdc-theme-primary, #6200ee);fill:currentColor}.mdc-tab{min-width:90px;padding-right:24px;padding-left:24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;margin:0;padding-top:0;padding-bottom:0;border:none;outline:none;background:none;text-align:center;white-space:nowrap;cursor:pointer;-webkit-appearance:none;z-index:1}.mdc-tab::-moz-focus-inner{padding:0;border:0}.mdc-tab--min-width{flex:0 1 auto}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab__icon{transition:150ms color linear;z-index:2}.mdc-tab--stacked .mdc-tab__content{flex-direction:column;align-items:center;justify-content:center}.mdc-tab--stacked .mdc-tab__text-label{padding-top:6px;padding-bottom:4px}.mdc-tab--active .mdc-tab__text-label,.mdc-tab--active .mdc-tab__icon{transition-delay:100ms}.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label{padding-left:8px;padding-right:0}[dir=rtl] .mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label,.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label[dir=rtl]{padding-left:0;padding-right:8px}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-tab{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-tab .mdc-tab__ripple::before,.mdc-tab .mdc-tab__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-tab .mdc-tab__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-tab .mdc-tab__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-tab.mdc-ripple-upgraded .mdc-tab__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-tab.mdc-ripple-upgraded .mdc-tab__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-tab.mdc-ripple-upgraded--unbounded .mdc-tab__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-tab.mdc-ripple-upgraded--foreground-activation .mdc-tab__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-tab.mdc-ripple-upgraded--foreground-deactivation .mdc-tab__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-tab .mdc-tab__ripple::before,.mdc-tab .mdc-tab__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-tab.mdc-ripple-upgraded .mdc-tab__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-tab .mdc-tab__ripple::before,.mdc-tab .mdc-tab__ripple::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-tab:hover .mdc-tab__ripple::before,.mdc-tab.mdc-ripple-surface--hover .mdc-tab__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-tab.mdc-ripple-upgraded--background-focused .mdc-tab__ripple::before,.mdc-tab:not(.mdc-ripple-upgraded):focus .mdc-tab__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-tab:not(.mdc-ripple-upgraded) .mdc-tab__ripple::after{transition:opacity 150ms linear}.mdc-tab:not(.mdc-ripple-upgraded):active .mdc-tab__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-tab.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-tab__ripple{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;will-change:transform,opacity}:host{outline:none;flex:1 0 auto;display:flex;justify-content:center;-webkit-tap-highlight-color:transparent}.mdc-tab{height:var(--mdc-tab-height, 48px);margin-left:0;margin-right:0;padding-right:var(--mdc-tab-horizontal-padding, 24px);padding-left:var(--mdc-tab-horizontal-padding, 24px)}.mdc-tab--stacked{height:var(--mdc-tab-stacked-height, 72px)}.mdc-tab::-moz-focus-inner{border:0}.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label{padding-left:8px;padding-right:0}[dir=rtl] .mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label,.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label[dir=rtl]{padding-left:0;padding-right:8px}.mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label{color:var(--mdc-tab-text-label-color-default, rgba(0, 0, 0, 0.6))}.mdc-tab:not(.mdc-tab--active) .mdc-tab__icon{color:var(--mdc-tab-color-default, rgba(0, 0, 0, 0.54))}`);
    let Nn = class extends Fn {};
    (Nn.styles = [Uo]), (Nn = o([tt('mwc-tab')], Nn));
    var Dn,
      $n = {
        ANIMATING: 'mdc-tab-scroller--animating',
        SCROLL_AREA_SCROLL: 'mdc-tab-scroller__scroll-area--scroll',
        SCROLL_TEST: 'mdc-tab-scroller__test',
      },
      Pn = {
        AREA_SELECTOR: '.mdc-tab-scroller__scroll-area',
        CONTENT_SELECTOR: '.mdc-tab-scroller__scroll-content',
      },
      zn =
        ((Uo = function (e) {
          this.adapter = e;
        }),
        t(Mn, (Dn = Uo)),
        (Mn.prototype.getScrollPositionRTL = function () {
          var e = this.adapter.getScrollAreaScrollLeft(),
            t = this.calculateScrollEdges().right;
          return Math.round(t - e);
        }),
        (Mn.prototype.scrollToRTL = function (e) {
          var t = this.calculateScrollEdges(),
            i = this.adapter.getScrollAreaScrollLeft();
          return {
            finalScrollPosition: (e = this.clampScrollValue(t.right - e)),
            scrollDelta: e - i,
          };
        }),
        (Mn.prototype.incrementScrollRTL = function (e) {
          var t = this.adapter.getScrollAreaScrollLeft();
          return {
            finalScrollPosition: (e = this.clampScrollValue(t - e)),
            scrollDelta: e - t,
          };
        }),
        (Mn.prototype.getAnimatingScrollPosition = function (e) {
          return e;
        }),
        (Mn.prototype.calculateScrollEdges = function () {
          return {
            left: 0,
            right:
              this.adapter.getScrollContentOffsetWidth() -
              this.adapter.getScrollAreaOffsetWidth(),
          };
        }),
        (Mn.prototype.clampScrollValue = function (e) {
          var t = this.calculateScrollEdges();
          return Math.min(Math.max(t.left, e), t.right);
        }),
        Mn);
    function Mn() {
      return (null !== Dn && Dn.apply(this, arguments)) || this;
    }
    var Hn,
      Bn =
        (t(Vn, (Hn = Uo)),
        (Vn.prototype.getScrollPositionRTL = function (e) {
          var t = this.adapter.getScrollAreaScrollLeft();
          return Math.round(e - t);
        }),
        (Vn.prototype.scrollToRTL = function (e) {
          var t = this.adapter.getScrollAreaScrollLeft();
          return {
            finalScrollPosition: (e = this.clampScrollValue(-e)),
            scrollDelta: e - t,
          };
        }),
        (Vn.prototype.incrementScrollRTL = function (e) {
          var t = this.adapter.getScrollAreaScrollLeft();
          return {
            finalScrollPosition: (e = this.clampScrollValue(t - e)),
            scrollDelta: e - t,
          };
        }),
        (Vn.prototype.getAnimatingScrollPosition = function (e, t) {
          return e - t;
        }),
        (Vn.prototype.calculateScrollEdges = function () {
          var e = this.adapter.getScrollContentOffsetWidth();
          return {
            left: this.adapter.getScrollAreaOffsetWidth() - e,
            right: 0,
          };
        }),
        (Vn.prototype.clampScrollValue = function (e) {
          var t = this.calculateScrollEdges();
          return Math.max(Math.min(t.right, e), t.left);
        }),
        Vn);
    function Vn() {
      return (null !== Hn && Hn.apply(this, arguments)) || this;
    }
    var Un,
      jn,
      Gn =
        (t(Xn, (Un = Uo)),
        (Xn.prototype.getScrollPositionRTL = function (e) {
          var t = this.adapter.getScrollAreaScrollLeft();
          return Math.round(t - e);
        }),
        (Xn.prototype.scrollToRTL = function (e) {
          var t = this.adapter.getScrollAreaScrollLeft();
          return {
            finalScrollPosition: (e = this.clampScrollValue(e)),
            scrollDelta: t - e,
          };
        }),
        (Xn.prototype.incrementScrollRTL = function (e) {
          var t = this.adapter.getScrollAreaScrollLeft();
          return {
            finalScrollPosition: (e = this.clampScrollValue(t + e)),
            scrollDelta: t - e,
          };
        }),
        (Xn.prototype.getAnimatingScrollPosition = function (e, t) {
          return e + t;
        }),
        (Xn.prototype.calculateScrollEdges = function () {
          return {
            left:
              this.adapter.getScrollContentOffsetWidth() -
              this.adapter.getScrollAreaOffsetWidth(),
            right: 0,
          };
        }),
        (Xn.prototype.clampScrollValue = function (e) {
          var t = this.calculateScrollEdges();
          return Math.min(Math.max(t.right, e), t.left);
        }),
        Xn);
    function Xn() {
      return (null !== Un && Un.apply(this, arguments)) || this;
    }
    function Kn(e) {
      return (
        ((e =
          jn.call(this, r(r({}, Kn.defaultAdapter), e)) || this).isAnimating =
          !1),
        e
      );
    }
    const Wn =
      (t(Kn, (jn = At)),
      Object.defineProperty(Kn, 'cssClasses', {
        get: function () {
          return $n;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(Kn, 'strings', {
        get: function () {
          return Pn;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(Kn, 'defaultAdapter', {
        get: function () {
          return {
            eventTargetMatchesSelector: function () {
              return !1;
            },
            addClass: function () {},
            removeClass: function () {},
            addScrollAreaClass: function () {},
            setScrollAreaStyleProperty: function () {},
            setScrollContentStyleProperty: function () {},
            getScrollContentStyleValue: function () {
              return '';
            },
            setScrollAreaScrollLeft: function () {},
            getScrollAreaScrollLeft: function () {
              return 0;
            },
            getScrollContentOffsetWidth: function () {
              return 0;
            },
            getScrollAreaOffsetWidth: function () {
              return 0;
            },
            computeScrollAreaClientRect: function () {
              return {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                width: 0,
                height: 0,
              };
            },
            computeScrollContentClientRect: function () {
              return {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                width: 0,
                height: 0,
              };
            },
            computeHorizontalScrollbarHeight: function () {
              return 0;
            },
          };
        },
        enumerable: !1,
        configurable: !0,
      }),
      (Kn.prototype.init = function () {
        var e = this.adapter.computeHorizontalScrollbarHeight();
        this.adapter.setScrollAreaStyleProperty('margin-bottom', -e + 'px'),
          this.adapter.addScrollAreaClass(Kn.cssClasses.SCROLL_AREA_SCROLL);
      }),
      (Kn.prototype.getScrollPosition = function () {
        if (this.isRTL()) return this.computeCurrentScrollPositionRTL();
        var e = this.calculateCurrentTranslateX();
        return this.adapter.getScrollAreaScrollLeft() - e;
      }),
      (Kn.prototype.handleInteraction = function () {
        this.isAnimating && this.stopScrollAnimation();
      }),
      (Kn.prototype.handleTransitionEnd = function (e) {
        (e = e.target),
          this.isAnimating &&
            this.adapter.eventTargetMatchesSelector(
              e,
              Kn.strings.CONTENT_SELECTOR
            ) &&
            ((this.isAnimating = !1),
            this.adapter.removeClass(Kn.cssClasses.ANIMATING));
      }),
      (Kn.prototype.incrementScroll = function (e) {
        0 !== e && this.animate(this.getIncrementScrollOperation(e));
      }),
      (Kn.prototype.incrementScrollImmediate = function (e) {
        0 === e ||
          (0 !== (e = this.getIncrementScrollOperation(e)).scrollDelta &&
            (this.stopScrollAnimation(),
            this.adapter.setScrollAreaScrollLeft(e.finalScrollPosition)));
      }),
      (Kn.prototype.scrollTo = function (e) {
        this.isRTL() ? this.scrollToImplRTL(e) : this.scrollToImpl(e);
      }),
      (Kn.prototype.getRTLScroller = function () {
        return (
          this.rtlScrollerInstance ||
            (this.rtlScrollerInstance = this.rtlScrollerFactory()),
          this.rtlScrollerInstance
        );
      }),
      (Kn.prototype.calculateCurrentTranslateX = function () {
        var e = this.adapter.getScrollContentStyleValue('transform');
        if ('none' === e) return 0;
        var t = /\((.+?)\)/.exec(e);
        return t
          ? ((e = (function (e, t) {
              var i = 'function' == typeof Symbol && e[Symbol.iterator];
              if (!i) return e;
              var r,
                o,
                a = i.call(e),
                n = [];
              try {
                for (; (void 0 === t || 0 < t--) && !(r = a.next()).done; )
                  n.push(r.value);
              } catch (e) {
                o = { error: e };
              } finally {
                try {
                  r && !r.done && (i = a.return) && i.call(a);
                } finally {
                  if (o) throw o.error;
                }
              }
              return n;
            })(t[1].split(','), 6)),
            e[0],
            e[1],
            e[2],
            e[3],
            (t = e[4]),
            e[5],
            parseFloat(t))
          : 0;
      }),
      (Kn.prototype.clampScrollValue = function (e) {
        var t = this.calculateScrollEdges();
        return Math.min(Math.max(t.left, e), t.right);
      }),
      (Kn.prototype.computeCurrentScrollPositionRTL = function () {
        var e = this.calculateCurrentTranslateX();
        return this.getRTLScroller().getScrollPositionRTL(e);
      }),
      (Kn.prototype.calculateScrollEdges = function () {
        return {
          left: 0,
          right:
            this.adapter.getScrollContentOffsetWidth() -
            this.adapter.getScrollAreaOffsetWidth(),
        };
      }),
      (Kn.prototype.scrollToImpl = function (e) {
        var t = this.getScrollPosition();
        (e = this.clampScrollValue(e)),
          this.animate({ finalScrollPosition: e, scrollDelta: e - t });
      }),
      (Kn.prototype.scrollToImplRTL = function (e) {
        (e = this.getRTLScroller().scrollToRTL(e)), this.animate(e);
      }),
      (Kn.prototype.getIncrementScrollOperation = function (e) {
        if (this.isRTL()) return this.getRTLScroller().incrementScrollRTL(e);
        var t = this.getScrollPosition();
        return {
          finalScrollPosition: (e = this.clampScrollValue(e + t)),
          scrollDelta: e - t,
        };
      }),
      (Kn.prototype.animate = function (e) {
        var t = this;
        0 !== e.scrollDelta &&
          (this.stopScrollAnimation(),
          this.adapter.setScrollAreaScrollLeft(e.finalScrollPosition),
          this.adapter.setScrollContentStyleProperty(
            'transform',
            'translateX(' + e.scrollDelta + 'px)'
          ),
          this.adapter.computeScrollAreaClientRect(),
          requestAnimationFrame(function () {
            t.adapter.addClass(Kn.cssClasses.ANIMATING),
              t.adapter.setScrollContentStyleProperty('transform', 'none');
          }),
          (this.isAnimating = !0));
      }),
      (Kn.prototype.stopScrollAnimation = function () {
        this.isAnimating = !1;
        var e = this.getAnimatingScrollPosition();
        this.adapter.removeClass(Kn.cssClasses.ANIMATING),
          this.adapter.setScrollContentStyleProperty(
            'transform',
            'translateX(0px)'
          ),
          this.adapter.setScrollAreaScrollLeft(e);
      }),
      (Kn.prototype.getAnimatingScrollPosition = function () {
        var e = this.calculateCurrentTranslateX(),
          t = this.adapter.getScrollAreaScrollLeft();
        return this.isRTL()
          ? this.getRTLScroller().getAnimatingScrollPosition(t, e)
          : t - e;
      }),
      (Kn.prototype.rtlScrollerFactory = function () {
        var e = this.adapter.getScrollAreaScrollLeft();
        this.adapter.setScrollAreaScrollLeft(e - 1);
        var t = this.adapter.getScrollAreaScrollLeft();
        if (t < 0)
          return this.adapter.setScrollAreaScrollLeft(e), new Bn(this.adapter);
        var i = this.adapter.computeScrollAreaClientRect(),
          r = this.adapter.computeScrollContentClientRect();
        return (
          (i = Math.round(r.right - i.right)),
          this.adapter.setScrollAreaScrollLeft(e),
          new (i === t ? Gn : zn)(this.adapter)
        );
      }),
      (Kn.prototype.isRTL = function () {
        return 'rtl' === this.adapter.getScrollContentStyleValue('direction');
      }),
      Kn);
    class qn extends Ht {
      constructor() {
        super(...arguments),
          (this.mdcFoundationClass = Wn),
          (this._scrollbarHeight = -1);
      }
      _handleInteraction() {
        this.mdcFoundation.handleInteraction();
      }
      _handleTransitionEnd(e) {
        this.mdcFoundation.handleTransitionEnd(e);
      }
      render() {
        return Ge`
      <div class="mdc-tab-scroller">
        <div class="mdc-tab-scroller__scroll-area"
            @wheel="${this._handleInteraction}"
            @touchstart="${this._handleInteraction}"
            @pointerdown="${this._handleInteraction}"
            @mousedown="${this._handleInteraction}"
            @keydown="${this._handleInteraction}"
            @transitionend="${this._handleTransitionEnd}">
          <div class="mdc-tab-scroller__scroll-content"><slot></slot></div>
        </div>
      </div>
      `;
      }
      createAdapter() {
        return Object.assign(Object.assign({}, Ft(this.mdcRoot)), {
          eventTargetMatchesSelector: (e, t) => Ot(e, t),
          addScrollAreaClass: e => this.scrollAreaElement.classList.add(e),
          setScrollAreaStyleProperty: (e, t) =>
            this.scrollAreaElement.style.setProperty(e, t),
          setScrollContentStyleProperty: (e, t) =>
            this.scrollContentElement.style.setProperty(e, t),
          getScrollContentStyleValue: e =>
            window
              .getComputedStyle(this.scrollContentElement)
              .getPropertyValue(e),
          setScrollAreaScrollLeft: e => (this.scrollAreaElement.scrollLeft = e),
          getScrollAreaScrollLeft: () => this.scrollAreaElement.scrollLeft,
          getScrollContentOffsetWidth: () =>
            this.scrollContentElement.offsetWidth,
          getScrollAreaOffsetWidth: () => this.scrollAreaElement.offsetWidth,
          computeScrollAreaClientRect: () =>
            this.scrollAreaElement.getBoundingClientRect(),
          computeScrollContentClientRect: () =>
            this.scrollContentElement.getBoundingClientRect(),
          computeHorizontalScrollbarHeight: () => (
            -1 === this._scrollbarHeight &&
              ((this.scrollAreaElement.style.overflowX = 'scroll'),
              (this._scrollbarHeight =
                this.scrollAreaElement.offsetHeight -
                this.scrollAreaElement.clientHeight),
              (this.scrollAreaElement.style.overflowX = '')),
            this._scrollbarHeight
          ),
        });
      }
      getScrollPosition() {
        return this.mdcFoundation.getScrollPosition();
      }
      getScrollContentWidth() {
        return this.scrollContentElement.offsetWidth;
      }
      incrementScrollPosition(e) {
        this.mdcFoundation.incrementScroll(e);
      }
      scrollToPosition(e) {
        this.mdcFoundation.scrollTo(e);
      }
    }
    o([at('.mdc-tab-scroller')], qn.prototype, 'mdcRoot', void 0),
      o(
        [at('.mdc-tab-scroller__scroll-area')],
        qn.prototype,
        'scrollAreaElement',
        void 0
      ),
      o(
        [at('.mdc-tab-scroller__scroll-content')],
        qn.prototype,
        'scrollContentElement',
        void 0
      ),
      o([ct({ passive: !0 })], qn.prototype, '_handleInteraction', null),
      (Uo = gt`.mdc-tab-scroller{overflow-y:hidden}.mdc-tab-scroller.mdc-tab-scroller--animating .mdc-tab-scroller__scroll-content{transition:250ms transform cubic-bezier(0.4, 0, 0.2, 1)}.mdc-tab-scroller__test{position:absolute;top:-9999px;width:100px;height:100px;overflow-x:scroll}.mdc-tab-scroller__scroll-area{-webkit-overflow-scrolling:touch;display:flex;overflow-x:hidden}.mdc-tab-scroller__scroll-area::-webkit-scrollbar,.mdc-tab-scroller__test::-webkit-scrollbar{display:none}.mdc-tab-scroller__scroll-area--scroll{overflow-x:scroll}.mdc-tab-scroller__scroll-content{position:relative;display:flex;flex:1 0 auto;transform:none;will-change:transform}.mdc-tab-scroller--align-start .mdc-tab-scroller__scroll-content{justify-content:flex-start}.mdc-tab-scroller--align-end .mdc-tab-scroller__scroll-content{justify-content:flex-end}.mdc-tab-scroller--align-center .mdc-tab-scroller__scroll-content{justify-content:center}.mdc-tab-scroller--animating .mdc-tab-scroller__scroll-area{-webkit-overflow-scrolling:auto}:host{display:flex}.mdc-tab-scroller{flex:1}`);
    let Yn = class extends qn {};
    (Yn.styles = [Uo]), (Yn = o([tt('mwc-tab-scroller')], Yn));
    var Qn = {
        ARROW_LEFT_KEY: 'ArrowLeft',
        ARROW_RIGHT_KEY: 'ArrowRight',
        END_KEY: 'End',
        ENTER_KEY: 'Enter',
        HOME_KEY: 'Home',
        SPACE_KEY: 'Space',
        TAB_ACTIVATED_EVENT: 'MDCTabBar:activated',
        TAB_SCROLLER_SELECTOR: '.mdc-tab-scroller',
        TAB_SELECTOR: '.mdc-tab',
      },
      Zn = {
        ARROW_LEFT_KEYCODE: 37,
        ARROW_RIGHT_KEYCODE: 39,
        END_KEYCODE: 35,
        ENTER_KEYCODE: 13,
        EXTRA_SCROLL_AMOUNT: 20,
        HOME_KEYCODE: 36,
        SPACE_KEYCODE: 32,
      },
      Jn = new Set();
    Jn.add(Qn.ARROW_LEFT_KEY),
      Jn.add(Qn.ARROW_RIGHT_KEY),
      Jn.add(Qn.END_KEY),
      Jn.add(Qn.HOME_KEY),
      Jn.add(Qn.ENTER_KEY),
      Jn.add(Qn.SPACE_KEY);
    var ed,
      td = new Map();
    function id(e) {
      return (
        ((e =
          ed.call(this, r(r({}, id.defaultAdapter), e)) ||
          this).useAutomaticActivation = !1),
        e
      );
    }
    td.set(Zn.ARROW_LEFT_KEYCODE, Qn.ARROW_LEFT_KEY),
      td.set(Zn.ARROW_RIGHT_KEYCODE, Qn.ARROW_RIGHT_KEY),
      td.set(Zn.END_KEYCODE, Qn.END_KEY),
      td.set(Zn.HOME_KEYCODE, Qn.HOME_KEY),
      td.set(Zn.ENTER_KEYCODE, Qn.ENTER_KEY),
      td.set(Zn.SPACE_KEYCODE, Qn.SPACE_KEY);
    const rd =
      (t(id, (ed = At)),
      Object.defineProperty(id, 'strings', {
        get: function () {
          return Qn;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(id, 'numbers', {
        get: function () {
          return Zn;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(id, 'defaultAdapter', {
        get: function () {
          return {
            scrollTo: function () {},
            incrementScroll: function () {},
            getScrollPosition: function () {
              return 0;
            },
            getScrollContentWidth: function () {
              return 0;
            },
            getOffsetWidth: function () {
              return 0;
            },
            isRTL: function () {
              return !1;
            },
            setActiveTab: function () {},
            activateTabAtIndex: function () {},
            deactivateTabAtIndex: function () {},
            focusTabAtIndex: function () {},
            getTabIndicatorClientRectAtIndex: function () {
              return {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                width: 0,
                height: 0,
              };
            },
            getTabDimensionsAtIndex: function () {
              return {
                rootLeft: 0,
                rootRight: 0,
                contentLeft: 0,
                contentRight: 0,
              };
            },
            getPreviousActiveTabIndex: function () {
              return -1;
            },
            getFocusedTabIndex: function () {
              return -1;
            },
            getIndexOfTabById: function () {
              return -1;
            },
            getTabListLength: function () {
              return 0;
            },
            notifyTabActivated: function () {},
          };
        },
        enumerable: !1,
        configurable: !0,
      }),
      (id.prototype.setUseAutomaticActivation = function (e) {
        this.useAutomaticActivation = e;
      }),
      (id.prototype.activateTab = function (e) {
        var t,
          i = this.adapter.getPreviousActiveTabIndex();
        this.indexIsInRange(e) &&
          e !== i &&
          (-1 !== i &&
            (this.adapter.deactivateTabAtIndex(i),
            (t = this.adapter.getTabIndicatorClientRectAtIndex(i))),
          this.adapter.activateTabAtIndex(e, t),
          this.scrollIntoView(e),
          this.adapter.notifyTabActivated(e));
      }),
      (id.prototype.handleKeyDown = function (e) {
        var t,
          i = this.getKeyFromEvent(e);
        void 0 !== i &&
          (this.isActivationKey(i) || e.preventDefault(),
          this.useAutomaticActivation
            ? this.isActivationKey(i) ||
              ((t = this.determineTargetFromKey(
                this.adapter.getPreviousActiveTabIndex(),
                i
              )),
              this.adapter.setActiveTab(t),
              this.scrollIntoView(t))
            : ((e = this.adapter.getFocusedTabIndex()),
              this.isActivationKey(i)
                ? this.adapter.setActiveTab(e)
                : ((t = this.determineTargetFromKey(e, i)),
                  this.adapter.focusTabAtIndex(t),
                  this.scrollIntoView(t))));
      }),
      (id.prototype.handleTabInteraction = function (e) {
        this.adapter.setActiveTab(
          this.adapter.getIndexOfTabById(e.detail.tabId)
        );
      }),
      (id.prototype.scrollIntoView = function (e) {
        this.indexIsInRange(e) &&
          (0 !== e
            ? e !== this.adapter.getTabListLength() - 1
              ? this.isRTL()
                ? this.scrollIntoViewImplRTL(e)
                : this.scrollIntoViewImpl(e)
              : this.adapter.scrollTo(this.adapter.getScrollContentWidth())
            : this.adapter.scrollTo(0));
      }),
      (id.prototype.determineTargetFromKey = function (e, t) {
        var i = this.isRTL(),
          r = this.adapter.getTabListLength() - 1;
        return (
          (e = e),
          t === Qn.END_KEY
            ? (e = r)
            : (t === Qn.ARROW_LEFT_KEY && !i) || (t === Qn.ARROW_RIGHT_KEY && i)
            ? --e
            : (t === Qn.ARROW_RIGHT_KEY && !i) || (t === Qn.ARROW_LEFT_KEY && i)
            ? (e += 1)
            : (e = 0),
          e < 0 ? (e = r) : r < e && (e = 0),
          e
        );
      }),
      (id.prototype.calculateScrollIncrement = function (e, t, i, r) {
        var o = this.adapter.getTabDimensionsAtIndex(t);
        return (
          (r = o.contentLeft - i - r),
          (i = o.contentRight - i),
          (r += Zn.EXTRA_SCROLL_AMOUNT),
          t < e ? Math.min(i - Zn.EXTRA_SCROLL_AMOUNT, 0) : Math.max(r, 0)
        );
      }),
      (id.prototype.calculateScrollIncrementRTL = function (e, t, i, r, o) {
        var a = this.adapter.getTabDimensionsAtIndex(t),
          n = o - a.contentLeft - i;
        return (
          (r = o - a.contentRight - i - r),
          (n -= Zn.EXTRA_SCROLL_AMOUNT),
          e < t ? Math.max(r + Zn.EXTRA_SCROLL_AMOUNT, 0) : Math.min(n, 0)
        );
      }),
      (id.prototype.findAdjacentTabIndexClosestToEdge = function (e, t, i, r) {
        var o = t.rootLeft - i;
        return (
          (r = o + (i = t.rootRight - i - r)),
          o < 0 || r < 0 ? e - 1 : 0 < i || 0 < r ? e + 1 : -1
        );
      }),
      (id.prototype.findAdjacentTabIndexClosestToEdgeRTL = function (
        e,
        t,
        i,
        r,
        o
      ) {
        return (
          (i = (r = o - t.rootLeft - r - i) + (t = o - t.rootRight - i)),
          0 < r || 0 < i ? e + 1 : t < 0 || i < 0 ? e - 1 : -1
        );
      }),
      (id.prototype.getKeyFromEvent = function (e) {
        return Jn.has(e.key) ? e.key : td.get(e.keyCode);
      }),
      (id.prototype.isActivationKey = function (e) {
        return e === Qn.SPACE_KEY || e === Qn.ENTER_KEY;
      }),
      (id.prototype.indexIsInRange = function (e) {
        return 0 <= e && e < this.adapter.getTabListLength();
      }),
      (id.prototype.isRTL = function () {
        return this.adapter.isRTL();
      }),
      (id.prototype.scrollIntoViewImpl = function (e) {
        var t = this.adapter.getScrollPosition(),
          i = this.adapter.getOffsetWidth(),
          r = this.adapter.getTabDimensionsAtIndex(e);
        (r = this.findAdjacentTabIndexClosestToEdge(e, r, t, i)),
          this.indexIsInRange(r) &&
            ((i = this.calculateScrollIncrement(e, r, t, i)),
            this.adapter.incrementScroll(i));
      }),
      (id.prototype.scrollIntoViewImplRTL = function (e) {
        var t = this.adapter.getScrollPosition(),
          i = this.adapter.getOffsetWidth(),
          r = this.adapter.getTabDimensionsAtIndex(e),
          o = this.adapter.getScrollContentWidth();
        (r = this.findAdjacentTabIndexClosestToEdgeRTL(e, r, t, i, o)),
          this.indexIsInRange(r) &&
            ((o = this.calculateScrollIncrementRTL(e, r, t, i, o)),
            this.adapter.incrementScroll(o));
      }),
      id);
    class od extends Ht {
      constructor() {
        super(...arguments),
          (this.mdcFoundationClass = rd),
          (this.activeIndex = 0),
          (this._previousActiveIndex = -1);
      }
      _handleTabInteraction(e) {
        this.mdcFoundation.handleTabInteraction(e);
      }
      _handleKeydown(e) {
        this.mdcFoundation.handleKeyDown(e);
      }
      render() {
        return Ge`
      <div class="mdc-tab-bar" role="tablist"
          @MDCTab:interacted="${this._handleTabInteraction}"
          @keydown="${this._handleKeydown}">
        <mwc-tab-scroller><slot></slot></mwc-tab-scroller>
      </div>
      `;
      }
      _getTabs() {
        return this.tabsSlot
          .assignedNodes({ flatten: !0 })
          .filter(e => e instanceof Nn);
      }
      _getTab(e) {
        return this._getTabs()[e];
      }
      createAdapter() {
        return {
          scrollTo: e => this.scrollerElement.scrollToPosition(e),
          incrementScroll: e => this.scrollerElement.incrementScrollPosition(e),
          getScrollPosition: () => this.scrollerElement.getScrollPosition(),
          getScrollContentWidth: () =>
            this.scrollerElement.getScrollContentWidth(),
          getOffsetWidth: () => this.mdcRoot.offsetWidth,
          isRTL: () =>
            'rtl' ===
            window.getComputedStyle(this.mdcRoot).getPropertyValue('direction'),
          setActiveTab: e => this.mdcFoundation.activateTab(e),
          activateTabAtIndex: (e, t) => {
            const i = this._getTab(e);
            void 0 !== i && i.activate(t), (this._previousActiveIndex = e);
          },
          deactivateTabAtIndex: e => {
            const t = this._getTab(e);
            void 0 !== t && t.deactivate();
          },
          focusTabAtIndex: e => {
            const t = this._getTab(e);
            void 0 !== t && t.focus();
          },
          getTabIndicatorClientRectAtIndex: e => {
            const t = this._getTab(e);
            return void 0 !== t
              ? t.computeIndicatorClientRect()
              : new DOMRect();
          },
          getTabDimensionsAtIndex: e => {
            const t = this._getTab(e);
            return void 0 !== t
              ? t.computeDimensions()
              : { rootLeft: 0, rootRight: 0, contentLeft: 0, contentRight: 0 };
          },
          getPreviousActiveTabIndex: () => this._previousActiveIndex,
          getFocusedTabIndex: () => {
            const e = this._getTabs();
            var t = this.getRootNode().activeElement;
            return e.indexOf(t);
          },
          getIndexOfTabById: e => {
            var t = this._getTabs();
            for (let i = 0; i < t.length; i++) if (t[i].id === e) return i;
            return -1;
          },
          getTabListLength: () => this._getTabs().length,
          notifyTabActivated: e => {
            (this.activeIndex = e),
              this.dispatchEvent(
                new CustomEvent(rd.strings.TAB_ACTIVATED_EVENT, {
                  detail: { index: e },
                  bubbles: !0,
                  cancelable: !0,
                })
              );
          },
        };
      }
      firstUpdated() {}
      async getUpdateComplete() {
        var e = await super.getUpdateComplete();
        return (
          await this.scrollerElement.updateComplete,
          void 0 === this.mdcFoundation && this.createFoundation(),
          e
        );
      }
      scrollIndexIntoView(e) {
        this.mdcFoundation.scrollIntoView(e);
      }
    }
    o([at('.mdc-tab-bar')], od.prototype, 'mdcRoot', void 0),
      o([at('mwc-tab-scroller')], od.prototype, 'scrollerElement', void 0),
      o([at('slot')], od.prototype, 'tabsSlot', void 0),
      o(
        [
          Bt(async function () {
            await this.updateComplete,
              this.activeIndex !== this._previousActiveIndex &&
                this.mdcFoundation.activateTab(this.activeIndex);
          }),
          rt({ type: Number }),
        ],
        od.prototype,
        'activeIndex',
        void 0
      ),
      (Uo = gt`.mdc-tab-bar{width:100%}.mdc-tab{height:48px}.mdc-tab--stacked{height:72px}:host{display:block}.mdc-tab-bar{flex:1}mwc-tab{--mdc-tab-height: 48px;--mdc-tab-stacked-height: 72px}`);
    let ad = class extends od {};
    (ad.styles = [Uo]), (ad = o([tt('mwc-tab-bar')], ad));
    var nd,
      dd = {
        ARIA_CONTROLS: 'aria-controls',
        ARIA_DESCRIBEDBY: 'aria-describedby',
        INPUT_SELECTOR: '.mdc-text-field__input',
        LABEL_SELECTOR: '.mdc-floating-label',
        LEADING_ICON_SELECTOR: '.mdc-text-field__icon--leading',
        LINE_RIPPLE_SELECTOR: '.mdc-line-ripple',
        OUTLINE_SELECTOR: '.mdc-notched-outline',
        PREFIX_SELECTOR: '.mdc-text-field__affix--prefix',
        SUFFIX_SELECTOR: '.mdc-text-field__affix--suffix',
        TRAILING_ICON_SELECTOR: '.mdc-text-field__icon--trailing',
      },
      sd = {
        DISABLED: 'mdc-text-field--disabled',
        FOCUSED: 'mdc-text-field--focused',
        HELPER_LINE: 'mdc-text-field-helper-line',
        INVALID: 'mdc-text-field--invalid',
        LABEL_FLOATING: 'mdc-text-field--label-floating',
        NO_LABEL: 'mdc-text-field--no-label',
        OUTLINED: 'mdc-text-field--outlined',
        ROOT: 'mdc-text-field',
        TEXTAREA: 'mdc-text-field--textarea',
        WITH_LEADING_ICON: 'mdc-text-field--with-leading-icon',
        WITH_TRAILING_ICON: 'mdc-text-field--with-trailing-icon',
      },
      cd = { LABEL_SCALE: 0.75 },
      ld = [
        'pattern',
        'min',
        'max',
        'required',
        'step',
        'minlength',
        'maxlength',
      ],
      pd = [
        'color',
        'date',
        'datetime-local',
        'month',
        'range',
        'time',
        'week',
      ],
      md = ['mousedown', 'touchstart'],
      hd = ['click', 'keydown'];
    function ud(e, t) {
      void 0 === t && (t = {});
      var i = nd.call(this, r(r({}, ud.defaultAdapter), e)) || this;
      return (
        (i.isFocused = !1),
        (i.receivedUserInput = !1),
        (i.valid = !0),
        (i.useNativeValidation = !0),
        (i.validateOnValueChange = !0),
        (i.helperText = t.helperText),
        (i.characterCounter = t.characterCounter),
        (i.leadingIcon = t.leadingIcon),
        (i.trailingIcon = t.trailingIcon),
        (i.inputFocusHandler = function () {
          i.activateFocus();
        }),
        (i.inputBlurHandler = function () {
          i.deactivateFocus();
        }),
        (i.inputInputHandler = function () {
          i.handleInput();
        }),
        (i.setPointerXOffset = function (e) {
          i.setTransformOrigin(e);
        }),
        (i.textFieldInteractionHandler = function () {
          i.handleTextFieldInteraction();
        }),
        (i.validationAttributeChangeHandler = function (e) {
          i.handleValidationAttributeChange(e);
        }),
        i
      );
    }
    const fd =
        (t(ud, (nd = At)),
        Object.defineProperty(ud, 'cssClasses', {
          get: function () {
            return sd;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(ud, 'strings', {
          get: function () {
            return dd;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(ud, 'numbers', {
          get: function () {
            return cd;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(ud.prototype, 'shouldAlwaysFloat', {
          get: function () {
            var e = this.getNativeInput().type;
            return 0 <= pd.indexOf(e);
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(ud.prototype, 'shouldFloat', {
          get: function () {
            return (
              this.shouldAlwaysFloat ||
              this.isFocused ||
              !!this.getValue() ||
              this.isBadInput()
            );
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(ud.prototype, 'shouldShake', {
          get: function () {
            return !this.isFocused && !this.isValid() && !!this.getValue();
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(ud, 'defaultAdapter', {
          get: function () {
            return {
              addClass: function () {},
              removeClass: function () {},
              hasClass: function () {
                return !0;
              },
              setInputAttr: function () {},
              removeInputAttr: function () {},
              registerTextFieldInteractionHandler: function () {},
              deregisterTextFieldInteractionHandler: function () {},
              registerInputInteractionHandler: function () {},
              deregisterInputInteractionHandler: function () {},
              registerValidationAttributeChangeHandler: function () {
                return new MutationObserver(function () {});
              },
              deregisterValidationAttributeChangeHandler: function () {},
              getNativeInput: function () {
                return null;
              },
              isFocused: function () {
                return !1;
              },
              activateLineRipple: function () {},
              deactivateLineRipple: function () {},
              setLineRippleTransformOrigin: function () {},
              shakeLabel: function () {},
              floatLabel: function () {},
              setLabelRequired: function () {},
              hasLabel: function () {
                return !1;
              },
              getLabelWidth: function () {
                return 0;
              },
              hasOutline: function () {
                return !1;
              },
              notchOutline: function () {},
              closeOutline: function () {},
            };
          },
          enumerable: !1,
          configurable: !0,
        }),
        (ud.prototype.init = function () {
          var e, t, i, r;
          this.adapter.hasLabel() &&
            this.getNativeInput().required &&
            this.adapter.setLabelRequired(!0),
            this.adapter.isFocused()
              ? this.inputFocusHandler()
              : this.adapter.hasLabel() &&
                this.shouldFloat &&
                (this.notchOutline(!0),
                this.adapter.floatLabel(!0),
                this.styleFloating(!0)),
            this.adapter.registerInputInteractionHandler(
              'focus',
              this.inputFocusHandler
            ),
            this.adapter.registerInputInteractionHandler(
              'blur',
              this.inputBlurHandler
            ),
            this.adapter.registerInputInteractionHandler(
              'input',
              this.inputInputHandler
            );
          try {
            for (var o = n(md), a = o.next(); !a.done; a = o.next()) {
              var d = a.value;
              this.adapter.registerInputInteractionHandler(
                d,
                this.setPointerXOffset
              );
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              a && !a.done && (t = o.return) && t.call(o);
            } finally {
              if (e) throw e.error;
            }
          }
          try {
            for (var s = n(hd), c = s.next(); !c.done; c = s.next())
              (d = c.value),
                this.adapter.registerTextFieldInteractionHandler(
                  d,
                  this.textFieldInteractionHandler
                );
          } catch (t) {
            i = { error: t };
          } finally {
            try {
              c && !c.done && (r = s.return) && r.call(s);
            } finally {
              if (i) throw i.error;
            }
          }
          (this.validationObserver =
            this.adapter.registerValidationAttributeChangeHandler(
              this.validationAttributeChangeHandler
            )),
            this.setcharacterCounter(this.getValue().length);
        }),
        (ud.prototype.destroy = function () {
          var e, t, i, r;
          this.adapter.deregisterInputInteractionHandler(
            'focus',
            this.inputFocusHandler
          ),
            this.adapter.deregisterInputInteractionHandler(
              'blur',
              this.inputBlurHandler
            ),
            this.adapter.deregisterInputInteractionHandler(
              'input',
              this.inputInputHandler
            );
          try {
            for (var o = n(md), a = o.next(); !a.done; a = o.next()) {
              var d = a.value;
              this.adapter.deregisterInputInteractionHandler(
                d,
                this.setPointerXOffset
              );
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              a && !a.done && (t = o.return) && t.call(o);
            } finally {
              if (e) throw e.error;
            }
          }
          try {
            for (var s = n(hd), c = s.next(); !c.done; c = s.next())
              (d = c.value),
                this.adapter.deregisterTextFieldInteractionHandler(
                  d,
                  this.textFieldInteractionHandler
                );
          } catch (t) {
            i = { error: t };
          } finally {
            try {
              c && !c.done && (r = s.return) && r.call(s);
            } finally {
              if (i) throw i.error;
            }
          }
          this.adapter.deregisterValidationAttributeChangeHandler(
            this.validationObserver
          );
        }),
        (ud.prototype.handleTextFieldInteraction = function () {
          var e = this.adapter.getNativeInput();
          (e && e.disabled) || (this.receivedUserInput = !0);
        }),
        (ud.prototype.handleValidationAttributeChange = function (e) {
          var t = this;
          e.some(function (e) {
            return (
              -1 < ld.indexOf(e) &&
              (t.styleValidity(!0),
              t.adapter.setLabelRequired(t.getNativeInput().required),
              !0)
            );
          }),
            -1 < e.indexOf('maxlength') &&
              this.setcharacterCounter(this.getValue().length);
        }),
        (ud.prototype.notchOutline = function (e) {
          this.adapter.hasOutline() &&
            this.adapter.hasLabel() &&
            (e
              ? ((e = this.adapter.getLabelWidth() * cd.LABEL_SCALE),
                this.adapter.notchOutline(e))
              : this.adapter.closeOutline());
        }),
        (ud.prototype.activateFocus = function () {
          (this.isFocused = !0),
            this.styleFocused(this.isFocused),
            this.adapter.activateLineRipple(),
            this.adapter.hasLabel() &&
              (this.notchOutline(this.shouldFloat),
              this.adapter.floatLabel(this.shouldFloat),
              this.styleFloating(this.shouldFloat),
              this.adapter.shakeLabel(this.shouldShake)),
            !this.helperText ||
              (!this.helperText.isPersistent() &&
                this.helperText.isValidation() &&
                this.valid) ||
              this.helperText.showToScreenReader();
        }),
        (ud.prototype.setTransformOrigin = function (e) {
          var t;
          this.isDisabled() ||
            this.adapter.hasOutline() ||
            ((e = (t = (t = e.touches)
              ? t[0]
              : e).target.getBoundingClientRect()),
            (e = t.clientX - e.left),
            this.adapter.setLineRippleTransformOrigin(e));
        }),
        (ud.prototype.handleInput = function () {
          this.autoCompleteFocus(),
            this.setcharacterCounter(this.getValue().length);
        }),
        (ud.prototype.autoCompleteFocus = function () {
          this.receivedUserInput || this.activateFocus();
        }),
        (ud.prototype.deactivateFocus = function () {
          (this.isFocused = !1), this.adapter.deactivateLineRipple();
          var e = this.isValid();
          this.styleValidity(e),
            this.styleFocused(this.isFocused),
            this.adapter.hasLabel() &&
              (this.notchOutline(this.shouldFloat),
              this.adapter.floatLabel(this.shouldFloat),
              this.styleFloating(this.shouldFloat),
              this.adapter.shakeLabel(this.shouldShake)),
            this.shouldFloat || (this.receivedUserInput = !1);
        }),
        (ud.prototype.getValue = function () {
          return this.getNativeInput().value;
        }),
        (ud.prototype.setValue = function (e) {
          this.getValue() !== e && (this.getNativeInput().value = e),
            this.setcharacterCounter(e.length),
            this.validateOnValueChange &&
              ((e = this.isValid()), this.styleValidity(e)),
            this.adapter.hasLabel() &&
              (this.notchOutline(this.shouldFloat),
              this.adapter.floatLabel(this.shouldFloat),
              this.styleFloating(this.shouldFloat),
              this.validateOnValueChange &&
                this.adapter.shakeLabel(this.shouldShake));
        }),
        (ud.prototype.isValid = function () {
          return this.useNativeValidation
            ? this.isNativeInputValid()
            : this.valid;
        }),
        (ud.prototype.setValid = function (e) {
          (this.valid = e),
            this.styleValidity(e),
            (e = !e && !this.isFocused && !!this.getValue()),
            this.adapter.hasLabel() && this.adapter.shakeLabel(e);
        }),
        (ud.prototype.setValidateOnValueChange = function (e) {
          this.validateOnValueChange = e;
        }),
        (ud.prototype.getValidateOnValueChange = function () {
          return this.validateOnValueChange;
        }),
        (ud.prototype.setUseNativeValidation = function (e) {
          this.useNativeValidation = e;
        }),
        (ud.prototype.isDisabled = function () {
          return this.getNativeInput().disabled;
        }),
        (ud.prototype.setDisabled = function (e) {
          (this.getNativeInput().disabled = e), this.styleDisabled(e);
        }),
        (ud.prototype.setHelperTextContent = function (e) {
          this.helperText && this.helperText.setContent(e);
        }),
        (ud.prototype.setLeadingIconAriaLabel = function (e) {
          this.leadingIcon && this.leadingIcon.setAriaLabel(e);
        }),
        (ud.prototype.setLeadingIconContent = function (e) {
          this.leadingIcon && this.leadingIcon.setContent(e);
        }),
        (ud.prototype.setTrailingIconAriaLabel = function (e) {
          this.trailingIcon && this.trailingIcon.setAriaLabel(e);
        }),
        (ud.prototype.setTrailingIconContent = function (e) {
          this.trailingIcon && this.trailingIcon.setContent(e);
        }),
        (ud.prototype.setcharacterCounter = function (e) {
          if (this.characterCounter) {
            var t = this.getNativeInput().maxLength;
            if (-1 === t)
              throw new Error(
                'MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.'
              );
            this.characterCounter.setCounterValue(e, t);
          }
        }),
        (ud.prototype.isBadInput = function () {
          return this.getNativeInput().validity.badInput || !1;
        }),
        (ud.prototype.isNativeInputValid = function () {
          return this.getNativeInput().validity.valid;
        }),
        (ud.prototype.styleValidity = function (e) {
          var t = ud.cssClasses.INVALID;
          e ? this.adapter.removeClass(t) : this.adapter.addClass(t),
            this.helperText &&
              (this.helperText.setValidity(e),
              this.helperText.isValidation() &&
                ((t = this.helperText.isVisible()),
                (e = this.helperText.getId()),
                t && e
                  ? this.adapter.setInputAttr(dd.ARIA_DESCRIBEDBY, e)
                  : this.adapter.removeInputAttr(dd.ARIA_DESCRIBEDBY)));
        }),
        (ud.prototype.styleFocused = function (e) {
          var t = ud.cssClasses.FOCUSED;
          e ? this.adapter.addClass(t) : this.adapter.removeClass(t);
        }),
        (ud.prototype.styleDisabled = function (e) {
          var t = (i = ud.cssClasses).DISABLED,
            i = i.INVALID;
          e
            ? (this.adapter.addClass(t), this.adapter.removeClass(i))
            : this.adapter.removeClass(t),
            this.leadingIcon && this.leadingIcon.setDisabled(e),
            this.trailingIcon && this.trailingIcon.setDisabled(e);
        }),
        (ud.prototype.styleFloating = function (e) {
          var t = ud.cssClasses.LABEL_FLOATING;
          e ? this.adapter.addClass(t) : this.adapter.removeClass(t);
        }),
        (ud.prototype.getNativeInput = function () {
          return (
            (this.adapter ? this.adapter.getNativeInput() : null) || {
              disabled: !1,
              maxLength: -1,
              required: !1,
              type: 'input',
              validity: { badInput: !1, valid: !0 },
              value: '',
            }
          );
        }),
        ud),
      gd = ye(e => t => {
        let i;
        if (t instanceof ze || t instanceof Fe)
          throw new Error(
            'The `live` directive is not allowed on text or event bindings'
          );
        if (t instanceof Ne)
          bd(t.strings), (i = t.element.hasAttribute(t.name)), (t.value = i);
        else {
          const { element: r, name: o, strings: a } = t.committer;
          if ((bd(a), t instanceof $e)) {
            if (((i = r[o]), i === e)) return;
          } else t instanceof Le && (i = r.getAttribute(o));
          if (i === String(e)) return;
        }
        t.setValue(e);
      }),
      bd = e => {
        if (2 !== e.length || '' !== e[0] || '' !== e[1])
          throw new Error(
            '`live` bindings can only contain a single expression'
          );
      },
      _d = ['touchstart', 'touchmove', 'scroll', 'mousewheel'],
      xd = (e = {}) => {
        const t = {};
        for (const i in e) t[i] = e[i];
        return Object.assign(
          {
            badInput: !1,
            customError: !1,
            patternMismatch: !1,
            rangeOverflow: !1,
            rangeUnderflow: !1,
            stepMismatch: !1,
            tooLong: !1,
            tooShort: !1,
            typeMismatch: !1,
            valid: !0,
            valueMissing: !1,
          },
          t
        );
      };
    class vd extends lr {
      constructor() {
        super(...arguments),
          (this.mdcFoundationClass = fd),
          (this.value = ''),
          (this.type = 'text'),
          (this.placeholder = ''),
          (this.label = ''),
          (this.icon = ''),
          (this.iconTrailing = ''),
          (this.disabled = !1),
          (this.required = !1),
          (this.minLength = -1),
          (this.maxLength = -1),
          (this.outlined = !1),
          (this.helper = ''),
          (this.validateOnInitialRender = !1),
          (this.validationMessage = ''),
          (this.autoValidate = !1),
          (this.pattern = ''),
          (this.min = ''),
          (this.max = ''),
          (this.step = null),
          (this.size = null),
          (this.helperPersistent = !1),
          (this.charCounter = !1),
          (this.endAligned = !1),
          (this.prefix = ''),
          (this.suffix = ''),
          (this.name = ''),
          (this.readOnly = !1),
          (this.autocapitalize = ''),
          (this.outlineOpen = !1),
          (this.outlineWidth = 0),
          (this.isUiValid = !0),
          (this.focused = !1),
          (this._validity = xd()),
          (this.validityTransform = null);
      }
      get validity() {
        return this._checkValidity(this.value), this._validity;
      }
      get willValidate() {
        return this.formElement.willValidate;
      }
      get selectionStart() {
        return this.formElement.selectionStart;
      }
      get selectionEnd() {
        return this.formElement.selectionEnd;
      }
      focus() {
        var e = new CustomEvent('focus');
        this.formElement.dispatchEvent(e), this.formElement.focus();
      }
      blur() {
        var e = new CustomEvent('blur');
        this.formElement.dispatchEvent(e), this.formElement.blur();
      }
      select() {
        this.formElement.select();
      }
      setSelectionRange(e, t, i) {
        this.formElement.setSelectionRange(e, t, i);
      }
      update(e) {
        e.has('autoValidate') &&
          this.mdcFoundation &&
          this.mdcFoundation.setValidateOnValueChange(this.autoValidate),
          e.has('value') &&
            'string' != typeof this.value &&
            (this.value = `${this.value}`),
          super.update(e);
      }
      render() {
        var e = this.charCounter && -1 !== this.maxLength,
          t = !!this.helper || !!this.validationMessage || e,
          i = {
            'mdc-text-field--disabled': this.disabled,
            'mdc-text-field--no-label': !this.label,
            'mdc-text-field--filled': !this.outlined,
            'mdc-text-field--outlined': this.outlined,
            'mdc-text-field--with-leading-icon': this.icon,
            'mdc-text-field--with-trailing-icon': this.iconTrailing,
            'mdc-text-field--end-aligned': this.endAligned,
          };
        return Ge`
      <label class="mdc-text-field ${jt(i)}">
        ${this.renderRipple()}
        ${this.outlined ? this.renderOutline() : this.renderLabel()}
        ${this.renderLeadingIcon()}
        ${this.renderPrefix()}
        ${this.renderInput(t)}
        ${this.renderSuffix()}
        ${this.renderTrailingIcon()}
        ${this.renderLineRipple()}
      </label>
      ${this.renderHelperText(t, e)}
    `;
      }
      updated(e) {
        e.has('value') &&
          void 0 !== e.get('value') &&
          (this.mdcFoundation.setValue(this.value),
          this.autoValidate && this.reportValidity());
      }
      renderRipple() {
        return this.outlined
          ? ''
          : Ge`
      <span class="mdc-text-field__ripple"></span>
    `;
      }
      renderOutline() {
        return this.outlined
          ? Ge`
      <mwc-notched-outline
          .width=${this.outlineWidth}
          .open=${this.outlineOpen}
          class="mdc-notched-outline">
        ${this.renderLabel()}
      </mwc-notched-outline>`
          : '';
      }
      renderLabel() {
        return this.label
          ? Ge`
      <span
          .floatingLabelFoundation=${Za(this.label)}
          id="label">${this.label}</span>
    `
          : '';
      }
      renderLeadingIcon() {
        return this.icon ? this.renderIcon(this.icon) : '';
      }
      renderTrailingIcon() {
        return this.iconTrailing ? this.renderIcon(this.iconTrailing, !0) : '';
      }
      renderIcon(e, t = !1) {
        return Ge`<i class="material-icons mdc-text-field__icon ${jt(
          (t = {
            'mdc-text-field__icon--leading': !t,
            'mdc-text-field__icon--trailing': t,
          })
        )}">${e}</i>`;
      }
      renderPrefix() {
        return this.prefix ? this.renderAffix(this.prefix) : '';
      }
      renderSuffix() {
        return this.suffix ? this.renderAffix(this.suffix, !0) : '';
      }
      renderAffix(e, t = !1) {
        return Ge`<span class="mdc-text-field__affix ${jt(
          (t = {
            'mdc-text-field__affix--prefix': !t,
            'mdc-text-field__affix--suffix': t,
          })
        )}">
        ${e}</span>`;
      }
      renderInput(e) {
        var t = -1 === this.minLength ? void 0 : this.minLength,
          i = -1 === this.maxLength ? void 0 : this.maxLength,
          r = this.autocapitalize || void 0,
          o = this.validationMessage && !this.isUiValid,
          a = this.label ? 'label' : void 0;
        return (
          (e = e ? 'helper-text' : void 0),
          (o =
            this.focused || this.helperPersistent || o
              ? 'helper-text'
              : void 0),
          Ge`
      <input
          aria-labelledby=${Br(a)}
          aria-controls="${Br(e)}"
          aria-describedby="${Br(o)}"
          class="mdc-text-field__input"
          type="${this.type}"
          .value="${gd(this.value)}"
          ?disabled="${this.disabled}"
          placeholder="${this.placeholder}"
          ?required="${this.required}"
          ?readonly="${this.readOnly}"
          minlength="${Br(t)}"
          maxlength="${Br(i)}"
          pattern="${Br(this.pattern || void 0)}"
          min="${Br('' === this.min ? void 0 : this.min)}"
          max="${Br('' === this.max ? void 0 : this.max)}"
          step="${Br(null === this.step ? void 0 : this.step)}"
          size="${Br(null === this.size ? void 0 : this.size)}"
          name="${Br('' === this.name ? void 0 : this.name)}"
          inputmode="${Br(this.inputMode)}"
          autocapitalize="${Br(r)}"
          @input="${this.handleInputChange}"
          @focus="${this.onInputFocus}"
          @blur="${this.onInputBlur}">`
        );
      }
      renderLineRipple() {
        return this.outlined
          ? ''
          : Ge`
      <span .lineRippleFoundation=${on()}></span>
    `;
      }
      renderHelperText(e, t) {
        var i = this.validationMessage && !this.isUiValid,
          r = {
            'mdc-text-field-helper-text--persistent': this.helperPersistent,
            'mdc-text-field-helper-text--validation-msg': i,
          },
          o = this.focused || this.helperPersistent || i ? void 0 : 'true';
        return (
          (i = i ? this.validationMessage : this.helper),
          e
            ? Ge`
      <div class="mdc-text-field-helper-line">
        <div id="helper-text"
             aria-hidden="${Br(o)}"
             class="mdc-text-field-helper-text ${jt(r)}"
             >${i}</div>
        ${this.renderCharCounter(t)}
      </div>`
            : ''
        );
      }
      renderCharCounter(e) {
        var t = Math.min(this.value.length, this.maxLength);
        return e
          ? Ge`
      <span class="mdc-text-field-character-counter"
            >${t} / ${this.maxLength}</span>`
          : '';
      }
      onInputFocus() {
        this.focused = !0;
      }
      onInputBlur() {
        (this.focused = !1), this.reportValidity();
      }
      checkValidity() {
        var e,
          t = this._checkValidity(this.value);
        return (
          t ||
            ((e = new Event('invalid', { bubbles: !1, cancelable: !0 })),
            this.dispatchEvent(e)),
          t
        );
      }
      reportValidity() {
        var e = this.checkValidity();
        return this.mdcFoundation.setValid(e), (this.isUiValid = e);
      }
      _checkValidity(e) {
        var t = this.formElement.validity;
        let i = xd(t);
        return (
          this.validityTransform
            ? ((e = this.validityTransform(e, i)),
              (i = Object.assign(Object.assign({}, i), e)),
              this.mdcFoundation.setUseNativeValidation(!1))
            : this.mdcFoundation.setUseNativeValidation(!0),
          (this._validity = i),
          this._validity.valid
        );
      }
      setCustomValidity(e) {
        (this.validationMessage = e), this.formElement.setCustomValidity(e);
      }
      handleInputChange() {
        this.value = this.formElement.value;
      }
      createAdapter() {
        return Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign({}, this.getRootAdapterMethods()),
                this.getInputAdapterMethods()
              ),
              this.getLabelAdapterMethods()
            ),
            this.getLineRippleAdapterMethods()
          ),
          this.getOutlineAdapterMethods()
        );
      }
      getRootAdapterMethods() {
        return Object.assign(
          {
            registerTextFieldInteractionHandler: (e, t) =>
              this.addEventListener(e, t),
            deregisterTextFieldInteractionHandler: (e, t) =>
              this.removeEventListener(e, t),
            registerValidationAttributeChangeHandler: e => {
              const t = new MutationObserver(t => {
                e(t.map(e => e.attributeName).filter(e => e));
              });
              return t.observe(this.formElement, { attributes: !0 }), t;
            },
            deregisterValidationAttributeChangeHandler: e => e.disconnect(),
          },
          Ft(this.mdcRoot)
        );
      }
      getInputAdapterMethods() {
        return {
          getNativeInput: () => this.formElement,
          setInputAttr: () => {},
          removeInputAttr: () => {},
          isFocused: () =>
            !!this.shadowRoot &&
            this.shadowRoot.activeElement === this.formElement,
          registerInputInteractionHandler: (e, t) =>
            this.formElement.addEventListener(e, t, { passive: e in _d }),
          deregisterInputInteractionHandler: (e, t) =>
            this.formElement.removeEventListener(e, t),
        };
      }
      getLabelAdapterMethods() {
        return {
          floatLabel: e =>
            this.labelElement &&
            this.labelElement.floatingLabelFoundation.float(e),
          getLabelWidth: () =>
            this.labelElement
              ? this.labelElement.floatingLabelFoundation.getWidth()
              : 0,
          hasLabel: () => Boolean(this.labelElement),
          shakeLabel: e =>
            this.labelElement &&
            this.labelElement.floatingLabelFoundation.shake(e),
          setLabelRequired: e => {
            this.labelElement &&
              this.labelElement.floatingLabelFoundation.setRequired(e);
          },
        };
      }
      getLineRippleAdapterMethods() {
        return {
          activateLineRipple: () => {
            this.lineRippleElement &&
              this.lineRippleElement.lineRippleFoundation.activate();
          },
          deactivateLineRipple: () => {
            this.lineRippleElement &&
              this.lineRippleElement.lineRippleFoundation.deactivate();
          },
          setLineRippleTransformOrigin: e => {
            this.lineRippleElement &&
              this.lineRippleElement.lineRippleFoundation.setRippleCenter(e);
          },
        };
      }
      async getUpdateComplete() {
        var e,
          t = await super.getUpdateComplete();
        return (
          await (null === (e = this.outlineElement) || void 0 === e
            ? void 0
            : e.updateComplete),
          t
        );
      }
      firstUpdated() {
        var e;
        super.firstUpdated(),
          this.mdcFoundation.setValidateOnValueChange(this.autoValidate),
          this.validateOnInitialRender && this.reportValidity(),
          null !== (e = this.outlineElement) &&
            void 0 !== e &&
            e.updateComplete.then(() => {
              var e;
              this.outlineWidth =
                (null === (e = this.labelElement) || void 0 === e
                  ? void 0
                  : e.floatingLabelFoundation.getWidth()) || 0;
            });
      }
      getOutlineAdapterMethods() {
        return {
          closeOutline: () => this.outlineElement && (this.outlineOpen = !1),
          hasOutline: () => Boolean(this.outlineElement),
          notchOutline: e => {
            this.outlineElement &&
              !this.outlineOpen &&
              ((this.outlineWidth = e), (this.outlineOpen = !0));
          },
        };
      }
      async layout() {
        await this.updateComplete;
        const e = this.labelElement;
        var t;
        e
          ? ((t = !!this.label && !!this.value),
            e.floatingLabelFoundation.float(t),
            this.outlined &&
              ((this.outlineOpen = t),
              await this.updateComplete,
              (t = e.floatingLabelFoundation.getWidth()),
              this.outlineOpen &&
                ((this.outlineWidth = t), await this.updateComplete)))
          : (this.outlineOpen = !1);
      }
    }
    o([at('.mdc-text-field')], vd.prototype, 'mdcRoot', void 0),
      o([at('input')], vd.prototype, 'formElement', void 0),
      o([at('.mdc-floating-label')], vd.prototype, 'labelElement', void 0),
      o([at('.mdc-line-ripple')], vd.prototype, 'lineRippleElement', void 0),
      o([at('mwc-notched-outline')], vd.prototype, 'outlineElement', void 0),
      o(
        [at('.mdc-notched-outline__notch')],
        vd.prototype,
        'notchElement',
        void 0
      ),
      o([rt({ type: String })], vd.prototype, 'value', void 0),
      o([rt({ type: String })], vd.prototype, 'type', void 0),
      o([rt({ type: String })], vd.prototype, 'placeholder', void 0),
      o(
        [
          rt({ type: String }),
          Bt(function (e, t) {
            void 0 !== t && this.label !== t && this.layout();
          }),
        ],
        vd.prototype,
        'label',
        void 0
      ),
      o([rt({ type: String })], vd.prototype, 'icon', void 0),
      o([rt({ type: String })], vd.prototype, 'iconTrailing', void 0),
      o([rt({ type: Boolean, reflect: !0 })], vd.prototype, 'disabled', void 0),
      o([rt({ type: Boolean })], vd.prototype, 'required', void 0),
      o([rt({ type: Number })], vd.prototype, 'minLength', void 0),
      o([rt({ type: Number })], vd.prototype, 'maxLength', void 0),
      o(
        [
          rt({ type: Boolean, reflect: !0 }),
          Bt(function (e, t) {
            void 0 !== t && this.outlined !== t && this.layout();
          }),
        ],
        vd.prototype,
        'outlined',
        void 0
      ),
      o([rt({ type: String })], vd.prototype, 'helper', void 0),
      o(
        [rt({ type: Boolean })],
        vd.prototype,
        'validateOnInitialRender',
        void 0
      ),
      o([rt({ type: String })], vd.prototype, 'validationMessage', void 0),
      o([rt({ type: Boolean })], vd.prototype, 'autoValidate', void 0),
      o([rt({ type: String })], vd.prototype, 'pattern', void 0),
      o([rt({ type: String })], vd.prototype, 'min', void 0),
      o([rt({ type: String })], vd.prototype, 'max', void 0),
      o([rt({ type: Number })], vd.prototype, 'step', void 0),
      o([rt({ type: Number })], vd.prototype, 'size', void 0),
      o([rt({ type: Boolean })], vd.prototype, 'helperPersistent', void 0),
      o([rt({ type: Boolean })], vd.prototype, 'charCounter', void 0),
      o([rt({ type: Boolean })], vd.prototype, 'endAligned', void 0),
      o([rt({ type: String })], vd.prototype, 'prefix', void 0),
      o([rt({ type: String })], vd.prototype, 'suffix', void 0),
      o([rt({ type: String })], vd.prototype, 'name', void 0),
      o([rt({ type: String })], vd.prototype, 'inputMode', void 0),
      o([rt({ type: Boolean })], vd.prototype, 'readOnly', void 0),
      o([rt({ type: String })], vd.prototype, 'autocapitalize', void 0),
      o([ot()], vd.prototype, 'outlineOpen', void 0),
      o([ot()], vd.prototype, 'outlineWidth', void 0),
      o([ot()], vd.prototype, 'isUiValid', void 0),
      o([ot()], vd.prototype, 'focused', void 0),
      o([ct({ passive: !0 })], vd.prototype, 'handleInputChange', null),
      (At = gt`.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{border-bottom-width:1px;z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-text-field--filled{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-text-field--filled .mdc-text-field__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-text-field--filled .mdc-text-field__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-text-field--filled.mdc-ripple-upgraded--unbounded .mdc-text-field__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-activation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-deactivation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-text-field__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-text-field{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0;display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:rgba(0, 0, 0, 0.87)}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.54)}}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.54)}}.mdc-text-field .mdc-text-field__input{caret-color:#6200ee;caret-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field-character-counter,.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-text-field__input{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);width:100%;min-width:0;border:none;border-radius:0;background:none;appearance:none;padding:0}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input::-webkit-calendar-picker-indicator{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}@media all{.mdc-text-field__input::placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}@media all{.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}.mdc-text-field__affix{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;white-space:nowrap}.mdc-text-field--label-floating .mdc-text-field__affix,.mdc-text-field--no-label .mdc-text-field__affix{opacity:1}@supports(-webkit-hyphens: none){.mdc-text-field--outlined .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field__affix--prefix,.mdc-text-field__affix--prefix[dir=rtl]{padding-left:2px;padding-right:0}.mdc-text-field--end-aligned .mdc-text-field__affix--prefix{padding-left:0;padding-right:12px}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--end-aligned .mdc-text-field__affix--prefix[dir=rtl]{padding-left:12px;padding-right:0}.mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field__affix--suffix,.mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:12px}.mdc-text-field--end-aligned .mdc-text-field__affix--suffix{padding-left:2px;padding-right:0}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--end-aligned .mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:2px}.mdc-text-field--filled{height:56px}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-text-field--filled:hover .mdc-text-field__ripple::before,.mdc-text-field--filled.mdc-ripple-surface--hover .mdc-text-field__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-text-field--filled.mdc-ripple-upgraded--background-focused .mdc-text-field__ripple::before,.mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-text-field--filled::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:whitesmoke}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42)}.mdc-text-field--filled:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--filled .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-text-field--filled .mdc-floating-label,.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled.mdc-text-field--no-label::before{display:none}@supports(-webkit-hyphens: none){.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field--outlined{height:56px;overflow:visible}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--outlined .mdc-text-field__input{height:100%}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.38)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-text-field--outlined{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined{padding-right:max(16px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-right:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-left:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-right:max(16px, var(--mdc-shape-small, 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-right:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-right:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--outlined .mdc-text-field__ripple::before,.mdc-text-field--outlined .mdc-text-field__ripple::after{content:none}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:initial}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none !important;background-color:transparent}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mdc-text-field--textarea{flex-direction:column;align-items:center;width:auto;height:auto;padding:0;transition:none}.mdc-text-field--textarea .mdc-floating-label{top:19px}.mdc-text-field--textarea .mdc-floating-label:not(.mdc-floating-label--float-above){transform:none}.mdc-text-field--textarea .mdc-text-field__input{flex-grow:1;height:auto;min-height:1.5rem;overflow-x:hidden;overflow-y:auto;box-sizing:border-box;resize:none;padding:0 16px;line-height:1.5rem}.mdc-text-field--textarea.mdc-text-field--filled::before{display:none}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-10.25px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-filled 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-filled{0%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-10.25px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-10.25px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--filled .mdc-text-field__input{margin-top:23px;margin-bottom:9px}.mdc-text-field--textarea.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label{top:18px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field__input{margin-bottom:2px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter{align-self:flex-end;padding:0 16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::after{display:inline-block;width:0;height:16px;content:"";vertical-align:-16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::before{display:none}.mdc-text-field__resizer{align-self:stretch;display:inline-flex;flex-direction:column;flex-grow:1;max-height:100%;max-width:100%;min-height:56px;min-width:fit-content;min-width:-moz-available;min-width:-webkit-fill-available;overflow:hidden;resize:both}.mdc-text-field--filled .mdc-text-field__resizer{transform:translateY(-1px)}.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateY(1px)}.mdc-text-field--outlined .mdc-text-field__resizer{transform:translateX(-1px) translateY(-1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer,.mdc-text-field--outlined .mdc-text-field__resizer[dir=rtl]{transform:translateX(1px) translateY(-1px)}.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateX(1px) translateY(1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input[dir=rtl],.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter[dir=rtl]{transform:translateX(-1px) translateY(1px)}.mdc-text-field--with-leading-icon{padding-left:0;padding-right:16px}[dir=rtl] .mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:16px;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px);left:48px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake,.mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--with-trailing-icon{padding-left:16px;padding-right:0}[dir=rtl] .mdc-text-field--with-trailing-icon,.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-trailing-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-text-field-helper-line{display:flex;justify-content:space-between;box-sizing:border-box}.mdc-text-field+.mdc-text-field-helper-line{padding-right:16px;padding-left:16px}.mdc-form-field>.mdc-text-field+label{align-self:flex-start}.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(98, 0, 238, 0.87)}.mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--focused .mdc-notched-outline__trailing{border-width:2px}.mdc-text-field--focused+.mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg){opacity:1}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-text-field--focused.mdc-text-field--outlined.mdc-text-field--textarea .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid .mdc-text-field__input{caret-color:#b00020;caret-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{opacity:1}.mdc-text-field--disabled{pointer-events:none}.mdc-text-field--disabled .mdc-text-field__input{color:rgba(0, 0, 0, 0.38)}@media all{.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.38)}}@media all{.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.38)}}.mdc-text-field--disabled .mdc-floating-label{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06)}.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.06)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-floating-label{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--leading{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:GrayText}}@media screen and (forced-colors: active){.mdc-text-field--disabled .mdc-text-field__input{background-color:Window}}.mdc-text-field--disabled .mdc-floating-label{cursor:default}.mdc-text-field--disabled.mdc-text-field--filled{background-color:#fafafa}.mdc-text-field--disabled.mdc-text-field--filled .mdc-text-field__ripple{display:none}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--end-aligned .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--end-aligned .mdc-text-field__input[dir=rtl]{text-align:left}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix{direction:ltr}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--leading,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--leading{order:1}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{order:2}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input{order:3}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{order:4}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--trailing,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--trailing{order:5}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--prefix{padding-right:12px}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--suffix{padding-left:2px}.mdc-text-field-helper-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin:0;opacity:0;will-change:opacity;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-text-field-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-text-field-helper-text--persistent{transition:none;opacity:1;will-change:initial}.mdc-text-field-character-counter{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-left:auto;margin-right:0;padding-left:16px;padding-right:0;white-space:nowrap}.mdc-text-field-character-counter::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field__icon{align-self:center;cursor:pointer}.mdc-text-field__icon:not([tabindex]),.mdc-text-field__icon[tabindex="-1"]{cursor:default;pointer-events:none}.mdc-text-field__icon svg{display:block}.mdc-text-field__icon--leading{margin-left:16px;margin-right:8px}[dir=rtl] .mdc-text-field__icon--leading,.mdc-text-field__icon--leading[dir=rtl]{margin-left:8px;margin-right:16px}.mdc-text-field__icon--trailing{padding:12px;margin-left:0px;margin-right:0px}[dir=rtl] .mdc-text-field__icon--trailing,.mdc-text-field__icon--trailing[dir=rtl]{margin-left:0px;margin-right:0px}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-flex;flex-direction:column;outline:none}.mdc-text-field{width:100%}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42);border-bottom-color:var(--mdc-text-field-idle-line-color, rgba(0, 0, 0, 0.42))}.mdc-text-field:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87);border-bottom-color:var(--mdc-text-field-hover-line-color, rgba(0, 0, 0, 0.87))}.mdc-text-field.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06);border-bottom-color:var(--mdc-text-field-disabled-line-color, rgba(0, 0, 0, 0.06))}.mdc-text-field.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-idle-border-color, rgba(0, 0, 0, 0.38) )}:host(:not([disabled]):hover) :not(.mdc-text-field--invalid):not(.mdc-text-field--focused) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-hover-border-color, rgba(0, 0, 0, 0.87) )}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-fill-color, whitesmoke)}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-error-color, var(--mdc-theme-error, #b00020) )}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-character-counter,:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid .mdc-text-field__icon{color:var(--mdc-text-field-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused mwc-notched-outline{--mdc-notched-outline-stroke-width: 2px}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)) )}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input{color:var(--mdc-text-field-ink-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg),:host(:not([disabled])) .mdc-text-field-helper-line:not(.mdc-text-field--invalid) .mdc-text-field-character-counter{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host([disabled]) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-disabled-fill-color, #fafafa)}:host([disabled]) .mdc-text-field.mdc-text-field--outlined mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-disabled-border-color, rgba(0, 0, 0, 0.06) )}:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field .mdc-text-field__input,:host([disabled]) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-helper-text,:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-character-counter{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}`);
    let yd = class extends vd {};
    (yd.styles = [At]), (yd = o([tt('mwc-textfield')], yd));
    class wd extends vd {
      constructor() {
        super(...arguments),
          (this.rows = 2),
          (this.cols = 20),
          (this.charCounter = !1);
      }
      render() {
        var e =
            (r = this.charCounter && -1 !== this.maxLength) &&
            'internal' === this.charCounter,
          t = r && !e,
          i = !!this.helper || !!this.validationMessage || t,
          r = {
            'mdc-text-field--disabled': this.disabled,
            'mdc-text-field--no-label': !this.label,
            'mdc-text-field--filled': !this.outlined,
            'mdc-text-field--outlined': this.outlined,
            'mdc-text-field--end-aligned': this.endAligned,
            'mdc-text-field--with-internal-counter': e,
          };
        return Ge`
      <label class="mdc-text-field mdc-text-field--textarea ${jt(r)}">
        ${this.renderRipple()}
        ${this.outlined ? this.renderOutline() : this.renderLabel()}
        ${this.renderInput()}
        ${this.renderCharCounter(e)}
        ${this.renderLineRipple()}
      </label>
      ${this.renderHelperText(i, t)}
    `;
      }
      renderInput() {
        var e = this.label ? 'label' : void 0,
          t = -1 === this.minLength ? void 0 : this.minLength,
          i = -1 === this.maxLength ? void 0 : this.maxLength,
          r = this.autocapitalize || void 0;
        return Ge`
      <textarea
          aria-labelledby=${Br(e)}
          class="mdc-text-field__input"
          .value="${gd(this.value)}"
          rows="${this.rows}"
          cols="${this.cols}"
          ?disabled="${this.disabled}"
          placeholder="${this.placeholder}"
          ?required="${this.required}"
          ?readonly="${this.readOnly}"
          minlength="${Br(t)}"
          maxlength="${Br(i)}"
          name="${Br('' === this.name ? void 0 : this.name)}"
          inputmode="${Br(this.inputMode)}"
          autocapitalize="${Br(r)}"
          @input="${this.handleInputChange}"
          @blur="${this.onInputBlur}">
      </textarea>`;
      }
    }
    o([at('textarea')], wd.prototype, 'formElement', void 0),
      o([rt({ type: Number })], wd.prototype, 'rows', void 0),
      o([rt({ type: Number })], wd.prototype, 'cols', void 0),
      o(
        [
          rt({
            converter: {
              fromAttribute: e => null !== e && ('' === e || e),
              toAttribute: e => ('boolean' == typeof e ? (e ? '' : null) : e),
            },
          }),
        ],
        wd.prototype,
        'charCounter',
        void 0
      ),
      (Bt = gt`.mdc-text-field{height:100%}.mdc-text-field__input{resize:none}`);
    let kd = class extends wd {};
    (kd.styles = [At, Bt]), (kd = o([tt('mwc-textarea')], kd));
    class Ed extends _t {
      constructor() {
        super(...arguments),
          (this.indeterminate = !1),
          (this.progress = 0),
          (this.buffer = 1),
          (this.reverse = !1),
          (this.closed = !1),
          (this.stylePrimaryHalf = ''),
          (this.stylePrimaryFull = ''),
          (this.styleSecondaryQuarter = ''),
          (this.styleSecondaryHalf = ''),
          (this.styleSecondaryFull = ''),
          (this.animationReady = !0),
          (this.closedAnimationOff = !1),
          (this.resizeObserver = null);
      }
      connectedCallback() {
        super.connectedCallback(), this.rootEl && this.attachResizeObserver();
      }
      render() {
        var e = {
            'mdc-linear-progress--closed': this.closed,
            'mdc-linear-progress--closed-animation-off':
              this.closedAnimationOff,
            'mdc-linear-progress--indeterminate': this.indeterminate,
            'mdc-linear-progress--animation-ready': this.animationReady,
          },
          t = {
            '--mdc-linear-progress-primary-half': this.stylePrimaryHalf,
            '--mdc-linear-progress-primary-half-neg':
              '' !== this.stylePrimaryHalf ? `-${this.stylePrimaryHalf}` : '',
            '--mdc-linear-progress-primary-full': this.stylePrimaryFull,
            '--mdc-linear-progress-primary-full-neg':
              '' !== this.stylePrimaryFull ? `-${this.stylePrimaryFull}` : '',
            '--mdc-linear-progress-secondary-quarter':
              this.styleSecondaryQuarter,
            '--mdc-linear-progress-secondary-quarter-neg':
              '' !== this.styleSecondaryQuarter
                ? `-${this.styleSecondaryQuarter}`
                : '',
            '--mdc-linear-progress-secondary-half': this.styleSecondaryHalf,
            '--mdc-linear-progress-secondary-half-neg':
              '' !== this.styleSecondaryHalf
                ? `-${this.styleSecondaryHalf}`
                : '',
            '--mdc-linear-progress-secondary-full': this.styleSecondaryFull,
            '--mdc-linear-progress-secondary-full-neg':
              '' !== this.styleSecondaryFull
                ? `-${this.styleSecondaryFull}`
                : '',
          },
          i = {
            'flex-basis': this.indeterminate ? '100%' : 100 * this.buffer + '%',
          },
          r = {
            transform: this.indeterminate
              ? 'scaleX(1)'
              : `scaleX(${this.progress})`,
          };
        return Ge`
      <div
          role="progressbar"
          class="mdc-linear-progress ${jt(e)}"
          style="${si(t)}"
          dir="${Br(this.reverse ? 'rtl' : void 0)}"
          aria-label="${Br(this.ariaLabel)}"
          aria-valuemin="0"
          aria-valuemax="1"
          aria-valuenow="${Br(this.indeterminate ? void 0 : this.progress)}"
        @transitionend="${this.syncClosedState}">
        <div class="mdc-linear-progress__buffer">
          <div
            class="mdc-linear-progress__buffer-bar"
            style=${si(i)}>
          </div>
          <div class="mdc-linear-progress__buffer-dots"></div>
        </div>
        <div
            class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"
            style=${si(r)}>
          <span class="mdc-linear-progress__bar-inner"></span>
        </div>
        <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
          <span class="mdc-linear-progress__bar-inner"></span>
        </div>
      </div>`;
      }
      update(e) {
        !e.has('closed') ||
          (this.closed && void 0 !== e.get('closed')) ||
          this.syncClosedState(),
          super.update(e);
      }
      async firstUpdated(e) {
        super.firstUpdated(e), this.attachResizeObserver();
      }
      syncClosedState() {
        this.closedAnimationOff = this.closed;
      }
      updated(e) {
        !e.has('indeterminate') &&
          e.has('reverse') &&
          this.indeterminate &&
          this.restartAnimation(),
          e.has('indeterminate') &&
            void 0 !== e.get('indeterminate') &&
            this.indeterminate &&
            window.ResizeObserver &&
            this.calculateAndSetAnimationDimensions(this.rootEl.offsetWidth),
          super.updated(e);
      }
      disconnectedCallback() {
        this.resizeObserver &&
          (this.resizeObserver.disconnect(), (this.resizeObserver = null)),
          super.disconnectedCallback();
      }
      attachResizeObserver() {
        if (window.ResizeObserver)
          return (
            (this.resizeObserver = new window.ResizeObserver(e => {
              if (this.indeterminate)
                for (const i of e) {
                  var t;
                  i.contentRect &&
                    ((t = i.contentRect.width),
                    this.calculateAndSetAnimationDimensions(t));
                }
            })),
            void this.resizeObserver.observe(this.rootEl)
          );
        this.resizeObserver = null;
      }
      calculateAndSetAnimationDimensions(e) {
        var t = 2.00611057 * e,
          i = 0.37651913 * e,
          r = 0.84386165 * e,
          o = 1.60277782 * e;
        (this.stylePrimaryHalf = 0.8367142 * e + 'px'),
          (this.stylePrimaryFull = `${t}px`),
          (this.styleSecondaryQuarter = `${i}px`),
          (this.styleSecondaryHalf = `${r}px`),
          (this.styleSecondaryFull = `${o}px`),
          this.restartAnimation();
      }
      async restartAnimation() {
        (this.animationReady = !1),
          await this.updateComplete,
          await new Promise(requestAnimationFrame),
          (this.animationReady = !0),
          await this.updateComplete;
      }
      open() {
        this.closed = !1;
      }
      close() {
        this.closed = !0;
      }
    }
    o([at('.mdc-linear-progress')], Ed.prototype, 'rootEl', void 0),
      o(
        [rt({ type: Boolean, reflect: !0 })],
        Ed.prototype,
        'indeterminate',
        void 0
      ),
      o([rt({ type: Number })], Ed.prototype, 'progress', void 0),
      o([rt({ type: Number })], Ed.prototype, 'buffer', void 0),
      o([rt({ type: Boolean, reflect: !0 })], Ed.prototype, 'reverse', void 0),
      o([rt({ type: Boolean, reflect: !0 })], Ed.prototype, 'closed', void 0),
      o(
        [Ri, rt({ attribute: 'aria-label' })],
        Ed.prototype,
        'ariaLabel',
        void 0
      ),
      o([ot()], Ed.prototype, 'stylePrimaryHalf', void 0),
      o([ot()], Ed.prototype, 'stylePrimaryFull', void 0),
      o([ot()], Ed.prototype, 'styleSecondaryQuarter', void 0),
      o([ot()], Ed.prototype, 'styleSecondaryHalf', void 0),
      o([ot()], Ed.prototype, 'styleSecondaryFull', void 0),
      o([ot()], Ed.prototype, 'animationReady', void 0),
      o([ot()], Ed.prototype, 'closedAnimationOff', void 0),
      (Bt = gt`@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%);transform:translateX(var(--mdc-linear-progress-primary-half, 83.67142%))}100%{transform:translateX(200.611057%);transform:translateX(var(--mdc-linear-progress-primary-full, 200.611057%))}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%);transform:translateX(var(--mdc-linear-progress-secondary-quarter, 37.651913%))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%);transform:translateX(var(--mdc-linear-progress-secondary-half, 84.386165%))}100%{transform:translateX(160.277782%);transform:translateX(var(--mdc-linear-progress-secondary-full, 160.277782%))}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(-10px)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(-83.67142%);transform:translateX(var(--mdc-linear-progress-primary-half-neg, -83.67142%))}100%{transform:translateX(-200.611057%);transform:translateX(var(--mdc-linear-progress-primary-full-neg, -200.611057%))}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(-37.651913%);transform:translateX(var(--mdc-linear-progress-secondary-quarter-neg, -37.651913%))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(-84.386165%);transform:translateX(var(--mdc-linear-progress-secondary-half-neg, -84.386165%))}100%{transform:translateX(-160.277782%);transform:translateX(var(--mdc-linear-progress-secondary-full-neg, -160.277782%))}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}.mdc-linear-progress{position:relative;width:100%;height:4px;transform:translateZ(0);outline:1px solid transparent;overflow:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar{position:absolute;width:100%;height:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top:4px solid}.mdc-linear-progress__buffer{display:flex;position:absolute;width:100%;height:100%}.mdc-linear-progress__buffer-dots{background-repeat:repeat-x;background-size:10px 4px;flex:auto;transform:rotate(180deg);animation:mdc-linear-progress-buffering 250ms infinite linear}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress__secondary-bar{display:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;display:block}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__bar{right:0;-webkit-transform-origin:center right;transform-origin:center right}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__buffer-dots,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse 250ms infinite linear;transform:rotate(0)}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}.mdc-linear-progress--closed{opacity:0}.mdc-linear-progress--closed-animation-off .mdc-linear-progress__buffer-dots{animation:none}.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar,.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar .mdc-linear-progress__bar-inner{animation:none}.mdc-linear-progress__bar-inner{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-linear-progress__buffer-dots{background-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E")}.mdc-linear-progress__buffer-bar{background-color:#e6e6e6}:host{display:block}.mdc-linear-progress__buffer-bar{background-color:#e6e6e6;background-color:var(--mdc-linear-progress-buffer-color, #e6e6e6)}.mdc-linear-progress__buffer-dots{background-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E");background-image:var(--mdc-linear-progress-buffering-dots-image, url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E"))}`);
    let Cd = class extends Ed {};
    (Cd.styles = [Bt]), (Cd = o([tt('mwc-linear-progress')], Cd));
    class Ad extends _t {
      constructor() {
        super(...arguments),
          (this.indeterminate = !1),
          (this.progress = 0),
          (this.density = 0),
          (this.closed = !1);
      }
      open() {
        this.closed = !1;
      }
      close() {
        this.closed = !0;
      }
      render() {
        var e = {
            'mdc-circular-progress--closed': this.closed,
            'mdc-circular-progress--indeterminate': this.indeterminate,
          },
          t = { width: (t = 48 + 4 * this.density) + 'px', height: `${t}px` };
        return Ge`
      <div
        class="mdc-circular-progress ${jt(e)}"
        style="${si(t)}"
        role="progressbar"
        aria-label="${Br(this.ariaLabel)}"
        aria-valuemin="0"
        aria-valuemax="1"
        aria-valuenow="${Br(this.indeterminate ? void 0 : this.progress)}">
        ${this.renderDeterminateContainer()}
        ${this.renderIndeterminateContainer()}
      </div>`;
      }
      renderDeterminateContainer() {
        var e = 48 + 4 * this.density,
          t = e / 2,
          i =
            -3 <= this.density
              ? 18 + (11 * this.density) / 6
              : 12.5 + (5 * (this.density + 3)) / 4,
          r = (1 - this.progress) * (6.2831852 * i),
          o =
            -3 <= this.density
              ? 4 + this.density * (1 / 3)
              : 3 + (this.density + 3) * (1 / 6);
        return Ge`
      <div class="mdc-circular-progress__determinate-container">
        <svg class="mdc-circular-progress__determinate-circle-graphic"
             viewBox="0 0 ${e} ${e}">
          <circle class="mdc-circular-progress__determinate-track"
                  cx="${t}" cy="${t}" r="${i}"
                  stroke-width="${o}"></circle>
          <circle class="mdc-circular-progress__determinate-circle"
                  cx="${t}" cy="${t}" r="${i}"
                  stroke-dasharray="${6.2831852 * i}"
                  stroke-dashoffset="${r}"
                  stroke-width="${o}"></circle>
        </svg>
      </div>`;
      }
      renderIndeterminateContainer() {
        return Ge`
      <div class="mdc-circular-progress__indeterminate-container">
        <div class="mdc-circular-progress__spinner-layer">
          ${this.renderIndeterminateSpinnerLayer()}
        </div>
      </div>`;
      }
      renderIndeterminateSpinnerLayer() {
        var e = 48 + 4 * this.density,
          t = e / 2,
          i =
            -3 <= this.density
              ? 18 + (11 * this.density) / 6
              : 12.5 + (5 * (this.density + 3)) / 4,
          r = 6.2831852 * i,
          o = 0.5 * r,
          a =
            -3 <= this.density
              ? 4 + this.density * (1 / 3)
              : 3 + (this.density + 3) * (1 / 6);
        return Ge`
        <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left">
          <svg class="mdc-circular-progress__indeterminate-circle-graphic"
               viewBox="0 0 ${e} ${e}">
            <circle cx="${t}" cy="${t}" r="${i}"
                    stroke-dasharray="${r}"
                    stroke-dashoffset="${o}"
                    stroke-width="${a}"></circle>
          </svg>
        </div>
        <div class="mdc-circular-progress__gap-patch">
          <svg class="mdc-circular-progress__indeterminate-circle-graphic"
               viewBox="0 0 ${e} ${e}">
            <circle cx="${t}" cy="${t}" r="${i}"
                    stroke-dasharray="${r}"
                    stroke-dashoffset="${o}"
                    stroke-width="${0.8 * a}"></circle>
          </svg>
        </div>
        <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right">
          <svg class="mdc-circular-progress__indeterminate-circle-graphic"
               viewBox="0 0 ${e} ${e}">
            <circle cx="${t}" cy="${t}" r="${i}"
                    stroke-dasharray="${r}"
                    stroke-dashoffset="${o}"
                    stroke-width="${a}"></circle>
          </svg>
        </div>`;
      }
      update(e) {
        super.update(e),
          e.has('progress') &&
            (1 < this.progress && (this.progress = 1),
            this.progress < 0 && (this.progress = 0));
      }
    }
    o(
      [rt({ type: Boolean, reflect: !0 })],
      Ad.prototype,
      'indeterminate',
      void 0
    ),
      o([rt({ type: Number, reflect: !0 })], Ad.prototype, 'progress', void 0),
      o([rt({ type: Number, reflect: !0 })], Ad.prototype, 'density', void 0),
      o([rt({ type: Boolean, reflect: !0 })], Ad.prototype, 'closed', void 0),
      o(
        [Ri, rt({ type: String, attribute: 'aria-label' })],
        Ad.prototype,
        'ariaLabel',
        void 0
      ),
      (ot = gt`.mdc-circular-progress__determinate-circle,.mdc-circular-progress__indeterminate-circle-graphic{stroke:#6200ee;stroke:var(--mdc-theme-primary, #6200ee)}.mdc-circular-progress__determinate-track{stroke:transparent}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-color-1-fade-in-out{from{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdc-circular-progress-color-2-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-3-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-4-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}.mdc-circular-progress{display:inline-flex;position:relative;direction:ltr;line-height:0;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:transparent}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-1{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-1-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-2{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-2-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-3{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-3-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-4{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-4-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--closed{opacity:0}:host{display:inline-flex}.mdc-circular-progress__determinate-track{stroke:transparent;stroke:var(--mdc-circular-progress-track-color, transparent)}`);
    let Sd = class extends Ad {};
    (Sd.styles = [ot]), (Sd = o([tt('mwc-circular-progress')], Sd));
    class Id extends Ad {
      renderIndeterminateContainer() {
        return Ge`
      <div class="mdc-circular-progress__indeterminate-container">
        <div class="mdc-circular-progress__spinner-layer mdc-circular-progress__color-1">
          ${this.renderIndeterminateSpinnerLayer()}
        </div>
        <div class="mdc-circular-progress__spinner-layer mdc-circular-progress__color-2">
          ${this.renderIndeterminateSpinnerLayer()}
        </div>
        <div class="mdc-circular-progress__spinner-layer mdc-circular-progress__color-3">
          ${this.renderIndeterminateSpinnerLayer()}
        </div>
        <div class="mdc-circular-progress__spinner-layer mdc-circular-progress__color-4">
          ${this.renderIndeterminateSpinnerLayer()}
        </div>
      </div>`;
      }
    }
    Bt = gt`.mdc-circular-progress__determinate-circle,.mdc-circular-progress__indeterminate-circle-graphic{stroke:#6200ee;stroke:var(--mdc-theme-primary, #6200ee)}.mdc-circular-progress__determinate-track{stroke:transparent}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-color-1-fade-in-out{from{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdc-circular-progress-color-2-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-3-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-4-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}.mdc-circular-progress{display:inline-flex;position:relative;direction:ltr;line-height:0;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:transparent}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-1{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-1-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-2{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-2-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-3{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-3-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-4{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-4-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--closed{opacity:0}:host{display:inline-flex}.mdc-circular-progress__determinate-track{stroke:transparent;stroke:var(--mdc-circular-progress-track-color, transparent)}.mdc-circular-progress__color-1 .mdc-circular-progress__indeterminate-circle-graphic{stroke:#6200ee;stroke:var(--mdc-circular-progress-bar-color-1, var(--mdc-theme-primary, #6200ee))}.mdc-circular-progress__color-2 .mdc-circular-progress__indeterminate-circle-graphic{stroke:#6200ee;stroke:var(--mdc-circular-progress-bar-color-2, var(--mdc-theme-primary, #6200ee))}.mdc-circular-progress__color-3 .mdc-circular-progress__indeterminate-circle-graphic{stroke:#6200ee;stroke:var(--mdc-circular-progress-bar-color-3, var(--mdc-theme-primary, #6200ee))}.mdc-circular-progress__color-4 .mdc-circular-progress__indeterminate-circle-graphic{stroke:#6200ee;stroke:var(--mdc-circular-progress-bar-color-4, var(--mdc-theme-primary, #6200ee))}:host{display:inline-flex}`;
    let Td = class extends Id {};
    (Td.styles = [Bt]),
      (Td = o([tt('mwc-circular-progress-four-color')], Td)),
      (ot = ft(
        '*{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}'
      ));
    let Rd = class extends _t {
      constructor() {
        super(...arguments), (this.role = 'separator'), (this.vertical = !1);
      }
      render() {
        return Ge` <slot></slot> `;
      }
    };
    (Rd.styles = [
      ft(
        ':host{background:var(--divider-color,rgba(0,0,0,.15));height:var(--divider-size,.0625rem);display:block;width:100%}:host([vertical]){width:var(--divider-size,.0625rem);height:100%}'
      ),
      ot,
    ]),
      o(
        [rt({ type: String, reflect: !0 }), a('design:type', String)],
        Rd.prototype,
        'role',
        void 0
      ),
      o(
        [rt({ type: Boolean, reflect: !0 }), a('design:type', Boolean)],
        Rd.prototype,
        'vertical',
        void 0
      ),
      (Rd = o([tt('wl-divider')], Rd));
    const Od = new Map();
    function Ld(e, t, i, r, o) {
      const a = Array.isArray(t) ? t : [t],
        n = Math.random().toString(),
        d = e =>
          null == o
            ? i(e)
            : (function (e, t, i) {
                var r = Od.get(i);
                null != r && window.clearTimeout(r),
                  Od.set(
                    i,
                    window.setTimeout(() => {
                      e(), Od.delete(i);
                    }, t)
                  );
              })(() => i(e), o, n);
      return (
        a.forEach(t => e.addEventListener(t, d, r)),
        () => a.forEach(t => e.removeEventListener(t, d, r))
      );
    }
    function Fd(e) {
      e.forEach(e => e()), (e.length = 0);
    }
    function Nd(e) {
      e.preventDefault(), e.stopPropagation();
    }
    function Dd(e, t) {
      return Math.sqrt(Math.pow(e, 2) + Math.pow(t, 2)) / 2;
    }
    const $d = { easing: 'ease-out', fill: 'both' };
    function Pd(e, t) {
      e.tabIndex = t ? -1 : e.tabIndex < 0 ? 0 : e.tabIndex;
    }
    function zd(e, t) {
      for (const i in t) {
        const r = !0 === t[i] ? '' : t[i];
        r || '' === r || 0 === r
          ? e.getAttribute(i) !== r && e.setAttribute(i, r.toString())
          : e.hasAttribute(i) && e.removeAttribute(i);
      }
    }
    ((gt = class extends _t {
      constructor() {
        super(...arguments),
          (this.unbounded = !1),
          (this.centered = !1),
          (this.overlay = !1),
          (this.disabled = !1),
          (this.focusable = !1),
          (this.autoRelease = !1),
          (this.initialDuration = 350),
          (this.releaseDuration = 500),
          (this.role = 'presentation'),
          ((this.target = this).listeners = []),
          (this.rippleAnimationListeners = []);
      }
      connectedCallback() {
        super.connectedCallback(), this.addListeners();
      }
      disconnectedCallback() {
        super.disconnectedCallback(), this.removeListeners();
      }
      updated(e) {
        super.updated(e),
          e.has('target') &&
            null != this.target &&
            (this.removeListeners(), this.addListeners());
      }
      addListeners() {
        null != this.target &&
          this.listeners.push(
            Ld(this.target, 'mousedown', e => this.spawnRipple(e), {
              passive: !0,
            }),
            Ld(this.target, 'focusin', this.onFocusIn.bind(this), {
              passive: !0,
            }),
            Ld(this.target, 'focusout', this.onFocusOut.bind(this), {
              passive: !0,
            })
          );
      }
      removeListeners() {
        Fd(this.listeners);
      }
      spawnRipple(e, t) {
        if (this.disabled) return () => {};
        this.releaseRipple();
        var i,
          r = this.getBoundingClientRect();
        let o = 0,
          a = 0;
        return (
          (a =
            this.centered || null == e
              ? ((o = r.width / 2), r.height / 2)
              : (({ clientX: i, clientY: e } = (function (e) {
                  let t,
                    i = !1;
                  null != e.changedTouches
                    ? ((t = e.changedTouches[0]), (i = !0))
                    : (t = e);
                  var { clientX: r, clientY: o, pageX: a, pageY: e } = t;
                  return {
                    clientX: r,
                    clientY: o,
                    pageX: a,
                    pageY: e,
                    isTouch: i,
                  };
                })(e)),
                (o = i - r.left),
                e - r.top)),
          (t = this.showRippleAtCoords({ x: o, y: a }, t)),
          this.rippleAnimationListeners.push(t),
          null == this.target ||
            this.focusable ||
            this.rippleAnimationListeners.push(
              Ld(window, 'mouseup', this.releaseRipple.bind(this), {
                passive: !0,
              })
            ),
          t
        );
      }
      releaseRipple() {
        Fd(this.rippleAnimationListeners);
      }
      showRippleAtCoords({ x: e, y: t }, i) {
        var r,
          { offsetWidth: o, offsetHeight: a } = this,
          n =
            ((n = (function (e) {
              return new WebKitCSSMatrix(e.webkitTransform);
            })((r = window.getComputedStyle(this)))),
            {
              x: 0 === r.getPropertyValue('width') ? 0 : n.a,
              y: 0 === r.getPropertyValue('height') ? 0 : n.d,
            });
        const {
          releaseDuration: d = this.releaseDuration,
          initialDuration: s = this.initialDuration,
          autoRelease: c = this.autoRelease,
        } = i || {};
        (e *= 0 === n.x ? 1 : 1 / n.x), (t *= 0 === n.y ? 1 : 1 / n.y);
        const l = document.createElement('div');
        l.classList.add('ripple'),
          (n = Dd(o, a)),
          (a = Dd(Math.abs(o / 2 - e), Math.abs(a / 2 - t)));
        var a = 2 * (n = Math.round(n + 2 * a));
        Object.assign(l.style, {
          left: e - n + 'px',
          top: t - n + 'px',
          height: `${a}px`,
          width: `${a}px`,
          position: 'absolute',
        });
        let p = !1;
        return (
          (a = () => {
            if (!p) {
              p = !0;
              const t =
                '0px' ===
                  (e = window.getComputedStyle(l)).getPropertyValue('width') ||
                '0px' === e.getPropertyValue('height')
                  ? 0
                  : ((e = e.getPropertyValue('opacity')),
                    isNaN(+e) ? 0 : Number(e));
              var e;
              l.animate(
                { opacity: [t.toString(), '0'] },
                { ...$d, duration: d }
              ).onfinish = () => {
                requestAnimationFrame(() => {
                  this.shadowRoot.contains(l) && this.shadowRoot.removeChild(l);
                });
              };
            }
          }),
          this.shadowRoot.appendChild(l),
          c && a(),
          l.animate(
            { transform: ['scale(0)', 'scale(1)'] },
            { ...$d, duration: s }
          ),
          a
        );
      }
      onFocusIn() {
        this.focusable && this.spawnRipple(void 0, { autoRelease: !1 });
      }
      onFocusOut() {
        this.focusable && this.releaseRipple();
      }
      render() {
        return Ge``;
      }
    }).styles = [
      ot,
      ft(
        ':host{position:relative;display:block;outline:none;-webkit-user-select:none;user-select:none}:host(:not([unbounded])){overflow:hidden}:host([overlay]){position:absolute;top:50%;left:50%;width:100%;height:100%;transform:translate(-50%,-50%)}.ripple{background:var(--ripple-color,currentcolor);opacity:var(--ripple-opacity,.15);border-radius:100%;pointer-events:none;will-change:opacity,transform}'
      ),
    ]),
      o(
        [rt({ type: Boolean, reflect: !0 }), a('design:type', Boolean)],
        gt.prototype,
        'unbounded',
        void 0
      ),
      o(
        [rt({ type: Boolean, reflect: !0 }), a('design:type', Boolean)],
        gt.prototype,
        'centered',
        void 0
      ),
      o(
        [rt({ type: Boolean, reflect: !0 }), a('design:type', Boolean)],
        gt.prototype,
        'overlay',
        void 0
      ),
      o(
        [rt({ type: Boolean, reflect: !0 }), a('design:type', Boolean)],
        gt.prototype,
        'disabled',
        void 0
      ),
      o(
        [rt({ type: Boolean, reflect: !0 }), a('design:type', Boolean)],
        gt.prototype,
        'focusable',
        void 0
      ),
      o(
        [rt({ type: Boolean, reflect: !0 }), a('design:type', Boolean)],
        gt.prototype,
        'autoRelease',
        void 0
      ),
      o(
        [rt({ type: Number }), a('design:type', Number)],
        gt.prototype,
        'initialDuration',
        void 0
      ),
      o(
        [rt({ type: Number }), a('design:type', Number)],
        gt.prototype,
        'releaseDuration',
        void 0
      ),
      o(
        [rt({ type: String, reflect: !0 }), a('design:type', String)],
        gt.prototype,
        'role',
        void 0
      ),
      o(
        [rt({ type: Object }), a('design:type', EventTarget)],
        gt.prototype,
        'target',
        void 0
      ),
      (gt = o([tt('wl-ripple')], gt)),
      ((Bt = class extends _t {
        constructor() {
          super(...arguments), (this.role = 'presentation');
        }
        render() {
          return Ge` <slot></slot> `;
        }
      }).styles = [
        ft(
          ':host{font-size:var(--icon-size,1.5em);font-family:var(--icon-font,"Material Icons");font-weight:400;font-style:normal;color:inherit;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:"liga";-webkit-font-smoothing:antialiased}'
        ),
        ot,
      ]),
      o(
        [rt({ type: String, reflect: !0 }), a('design:type', String)],
        Bt.prototype,
        'role',
        void 0
      ),
      (Bt = o([tt('wl-icon')], Bt));
    class Md extends _t {
      constructor() {
        super(...arguments),
          (this.disabled = !1),
          (this.readonly = !1),
          (this.required = !1),
          (this.value = ''),
          (this.formElementId = `_${Math.random().toString(36).substr(2, 10)}`),
          (this.listeners = []);
      }
      get validationMessage() {
        return this.$formElement.validationMessage;
      }
      get valid() {
        return null == this.validity || this.validity.valid;
      }
      get validity() {
        return this.$formElement.validity;
      }
      get willValidate() {
        return this.$formElement.willValidate;
      }
      get form() {
        return this.$formElement.form;
      }
      checkValidity() {
        return this.$formElement.checkValidity();
      }
      setCustomValidity(e) {
        return this.$formElement.setCustomValidity(e);
      }
      firstUpdated(e) {
        super.firstUpdated(e),
          (this.$formElement = this.queryFormElement()),
          this.appendChild(this.$formElement);
      }
      disconnectedCallback() {
        super.disconnectedCallback(), Fd(this.listeners);
      }
      updated(e) {
        super.updated(e),
          e.has('disabled') &&
            zd(this, { 'aria-disabled': this.disabled.toString() }),
          this.updateTabindex(e);
      }
      updateTabindex(e) {
        e.has('disabled') && Pd(this, this.disabled);
      }
      getFormItemValue() {
        return null != this.$formElement
          ? this.$formElement.value
          : this.initialValue || '';
      }
      queryFormElement() {
        return this.shadowRoot.querySelector(`#${this.formElementId}`);
      }
    }
    var Hd;
    (Md.styles = [ot, ft('')]),
      o(
        [rt({ type: Boolean, reflect: !0 }), a('design:type', Boolean)],
        Md.prototype,
        'disabled',
        void 0
      ),
      o(
        [rt({ type: Boolean, reflect: !0 }), a('design:type', Boolean)],
        Md.prototype,
        'readonly',
        void 0
      ),
      o(
        [rt({ type: Boolean, reflect: !0 }), a('design:type', Boolean)],
        Md.prototype,
        'required',
        void 0
      ),
      o(
        [rt({ type: String }), a('design:type', String)],
        Md.prototype,
        'name',
        void 0
      ),
      o(
        [rt({ type: String }), a('design:type', String)],
        Md.prototype,
        'value',
        void 0
      ),
      ((Hd = Hd || {}).CHANGE = 'change');
    class Bd extends Md {
      constructor() {
        super(...arguments),
          (this.checked = !1),
          (this.ariaChecked = this.checked.toString()),
          (this.role = 'checkbox'),
          (this.formElementType = 'checkbox');
      }
      firstUpdated(e) {
        super.firstUpdated(e),
          (this.onClick = this.onClick.bind(this)),
          (this.onKeyDown = this.onKeyDown.bind(this)),
          this.attachListeners();
      }
      updated(e) {
        super.updated(e), this.updateAria(e);
      }
      updateAria(e) {
        e.has('checked') && (this.ariaChecked = this.checked.toString());
      }
      attachListeners() {
        this.listeners.push(
          Ld(this, 'click', this.onClick.bind(this)),
          Ld(this, 'keydown', this.onKeyDown.bind(this))
        );
      }
      onClick(e) {
        this.disabled ? Nd(e) : this.toggle();
      }
      toggle() {
        (this.checked = !this.checked), this.dispatchChangeEvent();
      }
      dispatchChangeEvent() {
        requestAnimationFrame(() => {
          this.dispatchEvent(
            new CustomEvent(Hd.CHANGE, {
              composed: !0,
              bubbles: !0,
              detail: this.checked,
            })
          );
        });
      }
      onKeyDown(e) {
        ('Space' !== e.code && 'Enter' !== e.code) || (this.click(), Nd(e));
      }
      renderFormElement() {
        return Ge` <input style="display: none;" id="${
          this.formElementId
        }" type="${this.formElementType}" ?checked="${
          this.checked
        }" ?required="${this.required}" ?disabled="${
          this.disabled
        }" ?readonly="${this.readonly}" .value="${this.value}" name="${Br(
          this.name
        )}" aria-hidden="true" tabindex="-1"> `;
      }
    }
    (Bd.styles = [...Md.styles, ft('')]),
      o(
        [rt({ type: Boolean, reflect: !0 }), a('design:type', Boolean)],
        Bd.prototype,
        'checked',
        void 0
      ),
      o(
        [
          rt({ type: String, reflect: !0, attribute: 'aria-checked' }),
          a('design:type', String),
        ],
        Bd.prototype,
        'ariaChecked',
        void 0
      ),
      o(
        [rt({ type: String, reflect: !0 }), a('design:type', String)],
        Bd.prototype,
        'role',
        void 0
      );
    class Vd extends Bd {
      constructor() {
        super(...arguments),
          (this.role = 'radio'),
          (this.formElementType = 'radio');
      }
      queryGroup() {
        return null != this.name
          ? (function e(t, i) {
              if (null == t.shadowRoot) return [];
              const r = t.shadowRoot.host.getRootNode();
              return 0 < (t = r.querySelectorAll(i)).length
                ? Array.from(t)
                : e(r, i);
            })(
              this,
              `${this.nodeName.toLowerCase()}[name=${
                this.name
              }]:not([disabled])`
            )
          : [];
      }
      rowToElement(e) {
        e.click(), e.focus();
      }
      toggle() {
        (this.checked = !0), this.dispatchChangeEvent();
      }
      updateTabindex(e) {
        (e.has('disabled') || e.has('checked')) &&
          Pd(this, this.disabled || (!this.checked && this.isGroupedChecked())),
          e.has('checked') && this.checked && this.uncheckGroup();
      }
      isGroupedChecked() {
        return null != this.queryGroup().find(e => e.checked);
      }
      uncheckGroup() {
        for (const e of this.queryGroup())
          e !== this && ((e.checked = !1), (e.tabIndex = -1));
      }
      onKeyDown(e) {
        super.onKeyDown(e),
          (function (e, t) {
            const i = e.queryGroup();
            var r = i.indexOf(e);
            (r = (function (e, t, i) {
              if (0 == e.length) return null;
              switch (i) {
                case 'ArrowRight':
                case 'ArrowDown':
                  return t + 1 > e.length - 1 ? 0 : t + 1;
                case 'ArrowLeft':
                case 'ArrowUp':
                  return t - 1 < 0 ? e.length - 1 : t - 1;
              }
              return null;
            })(i, r, t.code)),
              null != r && ((r = i[r]), e.rowToElement(r), Nd(t));
          })(this, e);
      }
    }
    (Vd.styles = [...Bd.styles, ft('')]),
      o(
        [rt({ type: String, reflect: !0 }), a('design:type', String)],
        Vd.prototype,
        'role',
        void 0
      );
    let Ud = class extends Vd {
      constructor() {
        super(...arguments),
          (this.checked = !1),
          (this.noRipple = !1),
          (this.duration = 250),
          (this.ariaChecked = this.checked.toString()),
          (this.icon = 'expand_more');
      }
      firstUpdated(e) {
        super.firstUpdated(e),
          (this.$ripple.target = this).listeners.push(
            Ld(
              this.$contentContainer,
              'click',
              this.onContentContainerClick.bind(this)
            )
          ),
          this.refreshContentContainerHeight();
      }
      updated(e) {
        super.updated(e),
          null != e.get('checked') && this.animateContent(this.duration).then();
      }
      onContentContainerClick(e) {
        e.stopPropagation();
      }
      toggle() {
        (this.checked = !this.checked), this.dispatchChangeEvent();
      }
      async animateContent(e = this.duration) {
        requestAnimationFrame(() => {
          var t = this.checked ? this.$content.offsetHeight : 0,
            i = this.$contentContainer.offsetHeight;
          this.$contentContainer.animate(
            { height: [`${i}px`, `${t}px`] },
            { easing: 'cubic-bezier(0.4, 0, 0.2, 1)', duration: e }
          ).onfinish = () => {
            this.refreshContentContainerHeight();
          };
        });
      }
      refreshContentContainerHeight() {
        this.$contentContainer.style.height = this.checked ? 'auto' : '0px';
      }
      render() {
        return Ge` <header id="header" aria-labelledby="title"> <div id="title"> <slot name="title"></slot> <slot name="description"></slot> </div> <div id="indicator"> <slot name="indicator"></slot> ${
          null != this.icon
            ? Ge` <wl-icon id="icon">${this.icon}</wl-icon> `
            : Ee
        } </div> <wl-ripple id="ripple" overlay ?disabled="${
          this.disabled || this.noRipple
        }"></wl-ripple> </header> <div id="content-container" aria-hidden="${this.checked.toString()}"> <div id="content" tabindex="${Br(
          this.checked ? void 0 : -1
        )}"> <slot></slot> </div> </div> ${this.renderFormElement()} `;
      }
    };
    (Ud.styles = [
      ...Vd.styles,
      ft(
        ':host{background:var(--expansion-bg,hsl(var(--background,var(--background-hue,0),var(--background-saturation,0%),var(--background-lightness,100%))));color:var(--expansion-color,hsl(var(--foreground,var(--foreground-hue,230),var(--foreground-saturation,70%),var(--foreground-lightness,5%))));box-shadow:var(--expansion-elevation,var(--elevation-1,0 .3125rem .625rem -.125rem hsla(var(--shadow,var(--shadow-hue,230),var(--shadow-saturation,70%),var(--shadow-lightness,5%)),.15)));transition:var(--expansion-transition,margin var(--transition-duration-slow,.25s) cubic-bezier(.4,0,.2,1),box-shadow var(--transition-duration-slow,.25s) cubic-bezier(.4,0,.2,1));display:block;position:relative;text-align:left;outline:none}:host(:not([disabled])) #header{cursor:pointer}:host(:not([open]):focus),:host(:not([open]):not([disabled]):hover){will-change:height,margin,box-shadow;transform:translateZ(0)}:host(:not([open]):focus) #header,:host(:not([open]):not([disabled]):hover) #header{background:var(--expansion-header-bg-hover,hsl(var(--shade-200,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,85%))));will-change:background}:host([open]){box-shadow:var(--expansion-elevation-hover,var(--elevation-4,0 .5rem 1rem -.125rem hsla(var(--shadow,var(--shadow-hue,230),var(--shadow-saturation,70%),var(--shadow-lightness,5%)),.15)));margin:var(--expansion-margin-open,1.5rem 0)}:host([open]) #header{height:var(--expansion-header-height-open,3.5rem)}:host([open]) #icon{transform:rotate(180deg)}#header{padding:var(--expansion-header-padding,0 1.5rem);height:var(--expansion-header-height,2.875rem);transition:var(--expansion-header-transition,height var(--transition-duration-slow,.25s) cubic-bezier(.4,0,.2,1),background var(--transition-duration-slow,.25s) cubic-bezier(.4,0,.2,1));justify-content:space-between;outline:none;-webkit-user-select:none;user-select:none;position:relative}#header,#header #indicator,#header #title{display:flex;align-items:center}#content-container{overflow:hidden;display:flex;flex-direction:column}#content{padding:var(--expansion-content-padding,0 1.5rem 1.5rem)}#icon{transition:var(--expansion-icon-transition,transform var(--transition-duration-slow,.25s) cubic-bezier(.4,0,.2,1));transform:rotate(0)}::slotted([slot=description]),::slotted([slot=title]){flex-basis:0;white-space:nowrap}::slotted([slot=title]){margin:var(--expansion-header-title-padding,0 1.5rem 0 0);flex-grow:1}::slotted([slot=description]){color:var(--expansion-header-description-color,hsl(var(--shade-500,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,55%))));flex-grow:2}'
      ),
    ]),
      o(
        [
          rt({ type: Boolean, reflect: !0, attribute: 'open' }),
          a('design:type', Boolean),
        ],
        Ud.prototype,
        'checked',
        void 0
      ),
      o(
        [rt({ type: Boolean, reflect: !0 }), a('design:type', Boolean)],
        Ud.prototype,
        'noRipple',
        void 0
      ),
      o(
        [rt({ type: Number }), a('design:type', Number)],
        Ud.prototype,
        'duration',
        void 0
      ),
      o(
        [
          rt({ type: String, reflect: !0, attribute: 'aria-expanded' }),
          a('design:type', String),
        ],
        Ud.prototype,
        'ariaChecked',
        void 0
      ),
      o(
        [rt({ type: String }), a('design:type', Object)],
        Ud.prototype,
        'icon',
        void 0
      ),
      o(
        [at('#header'), a('design:type', HTMLElement)],
        Ud.prototype,
        '$header',
        void 0
      ),
      o(
        [at('#content'), a('design:type', HTMLElement)],
        Ud.prototype,
        '$content',
        void 0
      ),
      o(
        [at('#content-container'), a('design:type', HTMLElement)],
        Ud.prototype,
        '$contentContainer',
        void 0
      ),
      o(
        [at('#content-container'), a('design:type', gt)],
        Ud.prototype,
        '$ripple',
        void 0
      ),
      (Ud = o([tt('wl-expansion')], Ud));
    class jd extends Md {
      constructor() {
        super(...arguments), (this.type = 'submit');
      }
      connectedCallback() {
        super.connectedCallback(),
          this.listeners.push(
            Ld(this, 'click', this.onClick.bind(this)),
            Ld(this, 'keydown', this.onKeyDown.bind(this))
          );
      }
      onKeyDown(e) {
        e instanceof KeyboardEvent &&
          ('Enter' === e.code || 'Space' === e.code) &&
          (this.click(),
          Nd(e),
          null != this.$ripple &&
            this.$ripple.spawnRipple(void 0, { autoRelease: !0 }));
      }
      onClick(e) {
        this.disabled
          ? Nd(e)
          : e.target != this ||
            e.defaultPrevented ||
            this.$formElement.dispatchEvent(
              new MouseEvent('click', { relatedTarget: this, composed: !0 })
            );
      }
      renderFormElement() {
        return Ge` <button style="display: none;" id="${
          this.formElementId
        }" aria-hidden="true" tabindex="-1" type="${this.type}" ?disabled="${
          this.disabled
        }" name="${Br(this.name)}" value="${Br(this.value)}"></button> `;
      }
    }
    (jd.styles = [...Md.styles, ft('')]),
      o(
        [rt({ type: String }), a('design:type', String)],
        jd.prototype,
        'type',
        void 0
      ),
      ((Bt = class extends jd {
        constructor() {
          super(...arguments),
            (this.inverted = !1),
            (this.fab = !1),
            (this.outlined = !1),
            (this.noRipple = !1),
            (this.flat = !1),
            (this.role = 'button');
        }
        render() {
          return Ge` <wl-ripple id="ripple" overlay .target="${this}" ?disabled="${
            this.disabled || this.noRipple
          }"></wl-ripple> <slot></slot> ${this.renderFormElement()} `;
        }
      }).styles = [
        ...jd.styles,
        ft(
          ':host{--_button-color:var(--button-color,hsl(var(--primary-500-contrast,var(--primary-hue-contrast,0),var(--primary-saturation-contrast,100%),var(--primary-lightness-contrast,100%))));--_button-bg:var(--button-bg,hsl(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%))));--_button-shadow-color:var(--button-shadow-color,hsla(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%)),0.2));color:var(--_button-color);background:var(--_button-bg);box-shadow:var(--elevation-1,0 .3125rem .625rem -.125rem var(--_button-shadow-color));padding:var(--button-padding,.75rem 1.5rem);font-size:var(--button-font-size,1rem);border-radius:var(--button-border-radius,.5rem);font-family:var(--button-font-family,var(--font-family-sans-serif,"Roboto Condensed",helvetica,sans-serif));transition:var(--button-transition,box-shadow var(--transition-duration-slow,.25s) var(--transition-timing-function-ease,ease),background var(--transition-duration-medium,.18s) var(--transition-timing-function-ease,ease),color var(--transition-duration-medium,.18s) var(--transition-timing-function-ease,ease));letter-spacing:var(--button-letter-spacing,.125rem);line-height:1;text-transform:uppercase;cursor:pointer;text-align:center;-webkit-user-select:none;user-select:none;outline:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;position:relative;z-index:0}:host,:host([fab]){display:inline-flex;align-items:center;justify-content:center}:host([fab]){width:var(--button-fab-size,2.5rem);height:var(--button-fab-size,2.5rem);padding:0;letter-spacing:0;border-radius:100%}:host([inverted]){color:var(--_button-bg);background:var(--_button-color)}:host([outlined]){border:var(--button-border-outlined,.125rem solid currentColor)}:host(:focus),:host(:hover){--_button-color:var(--button-color-hover,hsl(var(--primary-400-contrast,var(--primary-hue-contrast,0),var(--primary-saturation-contrast,100%),var(--primary-lightness-contrast,100%))));--_button-bg:var(--button-bg-hover,hsl(var(--primary-400,var(--primary-hue,224),var(--primary-saturation,42%),var(--primary-lightness,52%))));--_button-shadow-color:var(--button-shadow-color-hover,hsla(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%)),0.5));will-change:background,color,box-shadow}:host(:active){--_button-color:var(--button-color-active,hsl(var(--primary-500-contrast,var(--primary-hue-contrast,0),var(--primary-saturation-contrast,100%),var(--primary-lightness-contrast,100%))));--_button-bg:var(--button-bg-active,hsl(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%))));box-shadow:var(--elevation-4,0 .5rem 1rem -.125rem var(--_button-shadow-color))}:host([flat]:focus){background:var(--button-bg-active-flat,hsla(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%)),.08))}:host([disabled]){--_button-color:var(--button-color-disabled,hsl(var(--shade-400-contrast,var(--shade-hue-contrast,0),var(--shade-saturation-contrast,100%),var(--shade-lightness-contrast,100%))));--_button-bg:var(--button-bg-disabled,hsl(var(--shade-400,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,65%))));box-shadow:none;cursor:default;pointer-events:none}:host([flat]){box-shadow:none;background:none}#ripple{z-index:-1}'
        ),
      ]),
      o(
        [rt({ type: Boolean, reflect: !0 }), a('design:type', Boolean)],
        Bt.prototype,
        'inverted',
        void 0
      ),
      o(
        [rt({ type: Boolean, reflect: !0 }), a('design:type', Boolean)],
        Bt.prototype,
        'fab',
        void 0
      ),
      o(
        [rt({ type: Boolean, reflect: !0 }), a('design:type', Boolean)],
        Bt.prototype,
        'outlined',
        void 0
      ),
      o(
        [rt({ type: Boolean, reflect: !0 }), a('design:type', Boolean)],
        Bt.prototype,
        'noRipple',
        void 0
      ),
      o(
        [rt({ type: Boolean, reflect: !0 }), a('design:type', Boolean)],
        Bt.prototype,
        'flat',
        void 0
      ),
      o(
        [rt({ type: String, reflect: !0 }), a('design:type', String)],
        Bt.prototype,
        'role',
        void 0
      ),
      o([at('#ripple'), a('design:type', gt)], Bt.prototype, '$ripple', void 0),
      (Bt = o([tt('wl-button')], Bt));
    let Gd = class extends _t {
      constructor() {
        super(...arguments),
          (this.level = 1),
          (this.nowrap = !1),
          (this.role = 'heading');
      }
      updated(e) {
        super.updated(e),
          e.has('level') && zd(this, { 'aria-level': this.level });
      }
      render() {
        return Ge` <slot></slot> `;
      }
    };
    (Gd.styles = [
      ot,
      ft(
        ':host{margin:var(--title-margin,0 0 .2em);font-family:var(--title-font-family,var(--font-family-sans-serif,"Roboto Condensed",helvetica,sans-serif));font-weight:var(--title-font-weight,var(--font-weight-bold,800));line-height:var(--title-line-height,var(--line-height-m,1.5em));display:block}:host([nowrap]){white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%;line-height:1.1}:host([level="1"]){font-size:var(--title-font-size-level-1,1.875rem)}:host([level="2"]){font-size:var(--title-font-size-level-2,1.5625rem)}:host([level="3"]){font-size:var(--title-font-size-level-3,1.25rem)}:host([level="4"]){font-size:var(--title-font-size-level-4,1rem)}:host([level="5"]){font-size:var(--title-font-size-level-5,.75rem)}:host([level="6"]){font-size:var(--title-font-size-level-6,.5rem)}'
      ),
    ]),
      o(
        [rt({ type: Number, reflect: !0 }), a('design:type', Number)],
        Gd.prototype,
        'level',
        void 0
      ),
      o(
        [rt({ type: Boolean }), a('design:type', Boolean)],
        Gd.prototype,
        'nowrap',
        void 0
      ),
      o(
        [rt({ type: String, reflect: !0 }), a('design:type', String)],
        Gd.prototype,
        'role',
        void 0
      ),
      (Gd = o([tt('wl-title')], Gd)),
      window.customElements.define('ft-test', J),
      window.customElements.define('ft-app', Z),
      window.customElements.define('ft-google-pay', re),
      window.customElements.define(
        'ft-play-ground',
        class extends W {
          constructor() {
            super(...arguments),
              (this.printLog = e => {
                console.log(e);
              }),
              (this.transactionData = {
                displayItems: [
                  { label: 'Subtotal', type: 'SUBTOTAL', price: '1.00' },
                  { label: 'Tax', type: 'TAX', price: '0.00' },
                ],
                countryCode: 'IN',
                currencyCode: 'INR',
                totalPriceStatus: 'FINAL',
                totalPrice: '1.00',
                totalPriceLabel: 'Total',
              });
          }
          render() {
            return N`<div>
      <!--
          This is to play with newly created component
       -->
      <wl-title level="4">weightless title component</wl-title>
      <wl-divider></wl-divider>
      <wl-button>Button</wl-button>

      <wl-title level="4"
        >Componemt inherit from - 'Metrial' Web Component Library</wl-title
      >

      <mwc-button id="myButton" label="Click Me!" raised></mwc-button>
      <wl-divider></wl-divider>
      <wl-title level="4">Firstech Component</wl-title>
      <!-- <ft-google-pay
        @payment-processed=\${this.printLog}
        @error=\${this.printLog}
        .clientId=\${'#hgvk86bvghhjbhGYvbjVH*75%Uyhfvbj98'}
        .transactionData=\${this.transactionData}
      ></ft-google-pay> -->

      <ft-button id="myButton" label="Click Me!" raised></ft-button>

      <ft-loader .count=${'2'}></ft-loader>
      <ft-slide heading="Phone Ringtone" open>
        <ft-button
          id="myButton"
          label="Hello i'm in Dialog box"
          raised
        ></ft-button>
        <ft-button
          id="myButton"
          label="Hello i'm in Dialog box"
          raised
        ></ft-button>
      </ft-slide>
      <wl-divider></wl-divider>
      <ft-nav>
        <ft-icon-button icon="menu" slot="navigationIcon"></ft-icon-button>
        <div slot="title">Title</div>
        <ft-icon-button
          icon="file_download"
          slot="actionItems"
        ></ft-icon-button>
        <ft-icon-button icon="print" slot="actionItems"></ft-icon-button>
        <ft-icon-button
          icon="favorite"
          slot="actionItems"
          disabled
        ></ft-icon-button>
        <div>Any content should come here</div>
      </ft-nav>
      <ft-snackbar labelText="Can't send photo. Retry in 5 seconds.">
      </ft-snackbar>
    </div>`;
          }
        }
      ),
      window.customElements.define('ft-loader', ae),
      window.customElements.define('ft-button', class extends fi {}),
      window.customElements.define('ft-slide', qt),
      window.customElements.define('ft-nav', class extends Ti {}),
      window.customElements.define('ft-icon-button', class extends Fi {}),
      window.customElements.define('ft-dialog', class extends Wt {}),
      window.customElements.define('ft-fab', class extends $i {}),
      window.customElements.define('ft-snackbar', class extends cr {}),
      window.customElements.define('ft-slider', class extends jr {}),
      window.customElements.define('ft-radio', class extends lo {}),
      window.customElements.define('ft-checkbox', class extends ho {}),
      window.customElements.define('ft-formfield', class extends Zr {}),
      window.customElements.define('ft-switch', class extends yo {}),
      window.customElements.define('ft-icon', class extends Qt {}),
      window.customElements.define('ft-drawer', class extends No {}),
      window.customElements.define('ft-list', class extends ca {}),
      window.customElements.define('ft-list-item', class extends Mo {}),
      window.customElements.define('ft-check-list-item', class extends pa {}),
      window.customElements.define('ft-radio-list-item', class extends ha {}),
      window.customElements.define('ft-menu', class extends Na {}),
      window.customElements.define('ft-select', class extends hn {}),
      window.customElements.define('ft-tab', class extends Nn {}),
      window.customElements.define('ft-tab-bar', class extends ad {}),
      window.customElements.define('ft-textfield', class extends yd {}),
      window.customElements.define('ft-textarea', class extends kd {}),
      window.customElements.define('ft-linear-progress', class extends Cd {}),
      window.customElements.define('ft-circular-progress', class extends Sd {}),
      window.customElements.define('ft-divider', class extends Rd {}),
      window.customElements.define('ft-expansion', class extends Ud {}),
      window.customElements.define(
        'ft-circular-progress-four-color',
        class extends Td {}
      ),
      window.customElements.define(
        'ft-icon-button-toggle',
        class extends $o {}
      );
  })();
})();
