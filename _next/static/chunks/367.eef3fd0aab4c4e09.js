;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [367],
  {
    9742: function (t, e) {
      'use strict'
      ;(e.byteLength = function (t) {
        var e = a(t),
          r = e[0],
          n = e[1]
        return ((r + n) * 3) / 4 - n
      }),
        (e.toByteArray = function (t) {
          var e,
            r,
            s = a(t),
            o = s[0],
            h = s[1],
            u = new i(((o + h) * 3) / 4 - h),
            c = 0,
            f = h > 0 ? o - 4 : o
          for (r = 0; r < f; r += 4)
            (e =
              (n[t.charCodeAt(r)] << 18) |
              (n[t.charCodeAt(r + 1)] << 12) |
              (n[t.charCodeAt(r + 2)] << 6) |
              n[t.charCodeAt(r + 3)]),
              (u[c++] = (e >> 16) & 255),
              (u[c++] = (e >> 8) & 255),
              (u[c++] = 255 & e)
          return (
            2 === h &&
              ((e = (n[t.charCodeAt(r)] << 2) | (n[t.charCodeAt(r + 1)] >> 4)), (u[c++] = 255 & e)),
            1 === h &&
              ((e =
                (n[t.charCodeAt(r)] << 10) |
                (n[t.charCodeAt(r + 1)] << 4) |
                (n[t.charCodeAt(r + 2)] >> 2)),
              (u[c++] = (e >> 8) & 255),
              (u[c++] = 255 & e)),
            u
          )
        }),
        (e.fromByteArray = function (t) {
          for (var e, n = t.length, i = n % 3, s = [], o = 0, h = n - i; o < h; o += 16383)
            s.push(
              (function (t, e, n) {
                for (var i, s = [], o = e; o < n; o += 3)
                  s.push(
                    r[
                      ((i =
                        ((t[o] << 16) & 16711680) + ((t[o + 1] << 8) & 65280) + (255 & t[o + 2])) >>
                        18) &
                        63
                    ] +
                      r[(i >> 12) & 63] +
                      r[(i >> 6) & 63] +
                      r[63 & i]
                  )
                return s.join('')
              })(t, o, o + 16383 > h ? h : o + 16383)
            )
          return (
            1 === i
              ? s.push(r[(e = t[n - 1]) >> 2] + r[(e << 4) & 63] + '==')
              : 2 === i &&
                s.push(
                  r[(e = (t[n - 2] << 8) + t[n - 1]) >> 10] +
                    r[(e >> 4) & 63] +
                    r[(e << 2) & 63] +
                    '='
                ),
            s.join('')
          )
        })
      for (
        var r = [],
          n = [],
          i = 'undefined' != typeof Uint8Array ? Uint8Array : Array,
          s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          o = 0,
          h = s.length;
        o < h;
        ++o
      )
        (r[o] = s[o]), (n[s.charCodeAt(o)] = o)
      function a(t) {
        var e = t.length
        if (e % 4 > 0) throw Error('Invalid string. Length must be a multiple of 4')
        var r = t.indexOf('=')
        ;-1 === r && (r = e)
        var n = r === e ? 0 : 4 - (r % 4)
        return [r, n]
      }
      ;(n['-'.charCodeAt(0)] = 62), (n['_'.charCodeAt(0)] = 63)
    },
    8764: function (t, e, r) {
      'use strict'
      /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <https://feross.org>
       * @license  MIT
       */ var n = r(9742),
        i = r(645),
        s =
          'function' == typeof Symbol && 'function' == typeof Symbol.for
            ? Symbol.for('nodejs.util.inspect.custom')
            : null
      function o(t) {
        if (t > 2147483647) throw RangeError('The value "' + t + '" is invalid for option "size"')
        var e = new Uint8Array(t)
        return Object.setPrototypeOf(e, h.prototype), e
      }
      function h(t, e, r) {
        if ('number' == typeof t) {
          if ('string' == typeof e)
            throw TypeError('The "string" argument must be of type string. Received type number')
          return c(t)
        }
        return a(t, e, r)
      }
      function a(t, e, r) {
        if ('string' == typeof t)
          return (function (t, e) {
            if ((('string' != typeof e || '' === e) && (e = 'utf8'), !h.isEncoding(e)))
              throw TypeError('Unknown encoding: ' + e)
            var r = 0 | d(t, e),
              n = o(r),
              i = n.write(t, e)
            return i !== r && (n = n.slice(0, i)), n
          })(t, e)
        if (ArrayBuffer.isView(t))
          return (function (t) {
            if (C(t, Uint8Array)) {
              var e = new Uint8Array(t)
              return p(e.buffer, e.byteOffset, e.byteLength)
            }
            return f(t)
          })(t)
        if (null == t)
          throw TypeError(
            'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
              typeof t
          )
        if (
          C(t, ArrayBuffer) ||
          (t && C(t.buffer, ArrayBuffer)) ||
          ('undefined' != typeof SharedArrayBuffer &&
            (C(t, SharedArrayBuffer) || (t && C(t.buffer, SharedArrayBuffer))))
        )
          return p(t, e, r)
        if ('number' == typeof t)
          throw TypeError('The "value" argument must not be of type number. Received type number')
        var n = t.valueOf && t.valueOf()
        if (null != n && n !== t) return h.from(n, e, r)
        var i = (function (t) {
          if (h.isBuffer(t)) {
            var e,
              r = 0 | l(t.length),
              n = o(r)
            return 0 === n.length || t.copy(n, 0, 0, r), n
          }
          return void 0 !== t.length
            ? 'number' != typeof t.length || (e = t.length) != e
              ? o(0)
              : f(t)
            : 'Buffer' === t.type && Array.isArray(t.data)
            ? f(t.data)
            : void 0
        })(t)
        if (i) return i
        if (
          'undefined' != typeof Symbol &&
          null != Symbol.toPrimitive &&
          'function' == typeof t[Symbol.toPrimitive]
        )
          return h.from(t[Symbol.toPrimitive]('string'), e, r)
        throw TypeError(
          'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
            typeof t
        )
      }
      function u(t) {
        if ('number' != typeof t) throw TypeError('"size" argument must be of type number')
        if (t < 0) throw RangeError('The value "' + t + '" is invalid for option "size"')
      }
      function c(t) {
        return u(t), o(t < 0 ? 0 : 0 | l(t))
      }
      function f(t) {
        for (var e = t.length < 0 ? 0 : 0 | l(t.length), r = o(e), n = 0; n < e; n += 1)
          r[n] = 255 & t[n]
        return r
      }
      function p(t, e, r) {
        var n
        if (e < 0 || t.byteLength < e) throw RangeError('"offset" is outside of buffer bounds')
        if (t.byteLength < e + (r || 0)) throw RangeError('"length" is outside of buffer bounds')
        return (
          Object.setPrototypeOf(
            (n =
              void 0 === e && void 0 === r
                ? new Uint8Array(t)
                : void 0 === r
                ? new Uint8Array(t, e)
                : new Uint8Array(t, e, r)),
            h.prototype
          ),
          n
        )
      }
      function l(t) {
        if (t >= 2147483647)
          throw RangeError('Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes')
        return 0 | t
      }
      function d(t, e) {
        if (h.isBuffer(t)) return t.length
        if (ArrayBuffer.isView(t) || C(t, ArrayBuffer)) return t.byteLength
        if ('string' != typeof t)
          throw TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
              typeof t
          )
        var r = t.length,
          n = arguments.length > 2 && !0 === arguments[2]
        if (!n && 0 === r) return 0
        for (var i = !1; ; )
          switch (e) {
            case 'ascii':
            case 'latin1':
            case 'binary':
              return r
            case 'utf8':
            case 'utf-8':
              return O(t).length
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return 2 * r
            case 'hex':
              return r >>> 1
            case 'base64':
              return T(t).length
            default:
              if (i) return n ? -1 : O(t).length
              ;(e = ('' + e).toLowerCase()), (i = !0)
          }
      }
      function y(t, e, r) {
        var i,
          s,
          o = !1
        if (
          ((void 0 === e || e < 0) && (e = 0),
          e > this.length ||
            ((void 0 === r || r > this.length) && (r = this.length),
            r <= 0 || (r >>>= 0) <= (e >>>= 0)))
        )
          return ''
        for (t || (t = 'utf8'); ; )
          switch (t) {
            case 'hex':
              return (function (t, e, r) {
                var n = t.length
                ;(!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n)
                for (var i = '', s = e; s < r; ++s) i += L[t[s]]
                return i
              })(this, e, r)
            case 'utf8':
            case 'utf-8':
              return v(this, e, r)
            case 'ascii':
              return (function (t, e, r) {
                var n = ''
                r = Math.min(t.length, r)
                for (var i = e; i < r; ++i) n += String.fromCharCode(127 & t[i])
                return n
              })(this, e, r)
            case 'latin1':
            case 'binary':
              return (function (t, e, r) {
                var n = ''
                r = Math.min(t.length, r)
                for (var i = e; i < r; ++i) n += String.fromCharCode(t[i])
                return n
              })(this, e, r)
            case 'base64':
              return (
                (i = e),
                (s = r),
                0 === i && s === this.length
                  ? n.fromByteArray(this)
                  : n.fromByteArray(this.slice(i, s))
              )
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return (function (t, e, r) {
                for (var n = t.slice(e, r), i = '', s = 0; s < n.length - 1; s += 2)
                  i += String.fromCharCode(n[s] + 256 * n[s + 1])
                return i
              })(this, e, r)
            default:
              if (o) throw TypeError('Unknown encoding: ' + t)
              ;(t = (t + '').toLowerCase()), (o = !0)
          }
      }
      function g(t, e, r) {
        var n = t[e]
        ;(t[e] = t[r]), (t[r] = n)
      }
      function m(t, e, r, n, i) {
        var s
        if (0 === t.length) return -1
        if (
          ('string' == typeof r
            ? ((n = r), (r = 0))
            : r > 2147483647
            ? (r = 2147483647)
            : r < -2147483648 && (r = -2147483648),
          (s = r = +r) != s && (r = i ? 0 : t.length - 1),
          r < 0 && (r = t.length + r),
          r >= t.length)
        ) {
          if (i) return -1
          r = t.length - 1
        } else if (r < 0) {
          if (!i) return -1
          r = 0
        }
        if (('string' == typeof e && (e = h.from(e, n)), h.isBuffer(e)))
          return 0 === e.length ? -1 : b(t, e, r, n, i)
        if ('number' == typeof e)
          return ((e &= 255), 'function' == typeof Uint8Array.prototype.indexOf)
            ? i
              ? Uint8Array.prototype.indexOf.call(t, e, r)
              : Uint8Array.prototype.lastIndexOf.call(t, e, r)
            : b(t, [e], r, n, i)
        throw TypeError('val must be string, number or Buffer')
      }
      function b(t, e, r, n, i) {
        var s,
          o = 1,
          h = t.length,
          a = e.length
        if (
          void 0 !== n &&
          ('ucs2' === (n = String(n).toLowerCase()) ||
            'ucs-2' === n ||
            'utf16le' === n ||
            'utf-16le' === n)
        ) {
          if (t.length < 2 || e.length < 2) return -1
          ;(o = 2), (h /= 2), (a /= 2), (r /= 2)
        }
        function u(t, e) {
          return 1 === o ? t[e] : t.readUInt16BE(e * o)
        }
        if (i) {
          var c = -1
          for (s = r; s < h; s++)
            if (u(t, s) === u(e, -1 === c ? 0 : s - c)) {
              if ((-1 === c && (c = s), s - c + 1 === a)) return c * o
            } else -1 !== c && (s -= s - c), (c = -1)
        } else
          for (r + a > h && (r = h - a), s = r; s >= 0; s--) {
            for (var f = !0, p = 0; p < a; p++)
              if (u(t, s + p) !== u(e, p)) {
                f = !1
                break
              }
            if (f) return s
          }
        return -1
      }
      function v(t, e, r) {
        r = Math.min(t.length, r)
        for (var n = [], i = e; i < r; ) {
          var s,
            o,
            h,
            a,
            u = t[i],
            c = null,
            f = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1
          if (i + f <= r)
            switch (f) {
              case 1:
                u < 128 && (c = u)
                break
              case 2:
                ;(192 & (s = t[i + 1])) == 128 && (a = ((31 & u) << 6) | (63 & s)) > 127 && (c = a)
                break
              case 3:
                ;(s = t[i + 1]),
                  (o = t[i + 2]),
                  (192 & s) == 128 &&
                    (192 & o) == 128 &&
                    (a = ((15 & u) << 12) | ((63 & s) << 6) | (63 & o)) > 2047 &&
                    (a < 55296 || a > 57343) &&
                    (c = a)
                break
              case 4:
                ;(s = t[i + 1]),
                  (o = t[i + 2]),
                  (h = t[i + 3]),
                  (192 & s) == 128 &&
                    (192 & o) == 128 &&
                    (192 & h) == 128 &&
                    (a = ((15 & u) << 18) | ((63 & s) << 12) | ((63 & o) << 6) | (63 & h)) >
                      65535 &&
                    a < 1114112 &&
                    (c = a)
            }
          null === c
            ? ((c = 65533), (f = 1))
            : c > 65535 &&
              ((c -= 65536), n.push(((c >>> 10) & 1023) | 55296), (c = 56320 | (1023 & c))),
            n.push(c),
            (i += f)
        }
        return (function (t) {
          var e = t.length
          if (e <= 4096) return String.fromCharCode.apply(String, t)
          for (var r = '', n = 0; n < e; )
            r += String.fromCharCode.apply(String, t.slice(n, (n += 4096)))
          return r
        })(n)
      }
      function w(t, e, r) {
        if (t % 1 != 0 || t < 0) throw RangeError('offset is not uint')
        if (t + e > r) throw RangeError('Trying to access beyond buffer length')
      }
      function E(t, e, r, n, i, s) {
        if (!h.isBuffer(t)) throw TypeError('"buffer" argument must be a Buffer instance')
        if (e > i || e < s) throw RangeError('"value" argument is out of bounds')
        if (r + n > t.length) throw RangeError('Index out of range')
      }
      function A(t, e, r, n, i, s) {
        if (r + n > t.length || r < 0) throw RangeError('Index out of range')
      }
      function k(t, e, r, n, s) {
        return (
          (e = +e),
          (r >>>= 0),
          s || A(t, e, r, 4, 34028234663852886e22, -34028234663852886e22),
          i.write(t, e, r, n, 23, 4),
          r + 4
        )
      }
      function B(t, e, r, n, s) {
        return (
          (e = +e),
          (r >>>= 0),
          s || A(t, e, r, 8, 17976931348623157e292, -17976931348623157e292),
          i.write(t, e, r, n, 52, 8),
          r + 8
        )
      }
      ;(e.lW = h),
        (e.h2 = 50),
        (h.TYPED_ARRAY_SUPPORT = (function () {
          try {
            var t = new Uint8Array(1),
              e = {
                foo: function () {
                  return 42
                },
              }
            return (
              Object.setPrototypeOf(e, Uint8Array.prototype),
              Object.setPrototypeOf(t, e),
              42 === t.foo()
            )
          } catch (r) {
            return !1
          }
        })()),
        h.TYPED_ARRAY_SUPPORT ||
          'undefined' == typeof console ||
          'function' != typeof console.error ||
          console.error(
            'This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
          ),
        Object.defineProperty(h.prototype, 'parent', {
          enumerable: !0,
          get: function () {
            if (h.isBuffer(this)) return this.buffer
          },
        }),
        Object.defineProperty(h.prototype, 'offset', {
          enumerable: !0,
          get: function () {
            if (h.isBuffer(this)) return this.byteOffset
          },
        }),
        (h.poolSize = 8192),
        (h.from = function (t, e, r) {
          return a(t, e, r)
        }),
        Object.setPrototypeOf(h.prototype, Uint8Array.prototype),
        Object.setPrototypeOf(h, Uint8Array),
        (h.alloc = function (t, e, r) {
          return (u(t), t <= 0)
            ? o(t)
            : void 0 !== e
            ? 'string' == typeof r
              ? o(t).fill(e, r)
              : o(t).fill(e)
            : o(t)
        }),
        (h.allocUnsafe = function (t) {
          return c(t)
        }),
        (h.allocUnsafeSlow = function (t) {
          return c(t)
        }),
        (h.isBuffer = function (t) {
          return null != t && !0 === t._isBuffer && t !== h.prototype
        }),
        (h.compare = function (t, e) {
          if (
            (C(t, Uint8Array) && (t = h.from(t, t.offset, t.byteLength)),
            C(e, Uint8Array) && (e = h.from(e, e.offset, e.byteLength)),
            !h.isBuffer(t) || !h.isBuffer(e))
          )
            throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array')
          if (t === e) return 0
          for (var r = t.length, n = e.length, i = 0, s = Math.min(r, n); i < s; ++i)
            if (t[i] !== e[i]) {
              ;(r = t[i]), (n = e[i])
              break
            }
          return r < n ? -1 : n < r ? 1 : 0
        }),
        (h.isEncoding = function (t) {
          switch (String(t).toLowerCase()) {
            case 'hex':
            case 'utf8':
            case 'utf-8':
            case 'ascii':
            case 'latin1':
            case 'binary':
            case 'base64':
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return !0
            default:
              return !1
          }
        }),
        (h.concat = function (t, e) {
          if (!Array.isArray(t)) throw TypeError('"list" argument must be an Array of Buffers')
          if (0 === t.length) return h.alloc(0)
          if (void 0 === e) for (r = 0, e = 0; r < t.length; ++r) e += t[r].length
          var r,
            n = h.allocUnsafe(e),
            i = 0
          for (r = 0; r < t.length; ++r) {
            var s = t[r]
            if (C(s, Uint8Array))
              i + s.length > n.length
                ? h.from(s).copy(n, i)
                : Uint8Array.prototype.set.call(n, s, i)
            else if (h.isBuffer(s)) s.copy(n, i)
            else throw TypeError('"list" argument must be an Array of Buffers')
            i += s.length
          }
          return n
        }),
        (h.byteLength = d),
        (h.prototype._isBuffer = !0),
        (h.prototype.swap16 = function () {
          var t = this.length
          if (t % 2 != 0) throw RangeError('Buffer size must be a multiple of 16-bits')
          for (var e = 0; e < t; e += 2) g(this, e, e + 1)
          return this
        }),
        (h.prototype.swap32 = function () {
          var t = this.length
          if (t % 4 != 0) throw RangeError('Buffer size must be a multiple of 32-bits')
          for (var e = 0; e < t; e += 4) g(this, e, e + 3), g(this, e + 1, e + 2)
          return this
        }),
        (h.prototype.swap64 = function () {
          var t = this.length
          if (t % 8 != 0) throw RangeError('Buffer size must be a multiple of 64-bits')
          for (var e = 0; e < t; e += 8)
            g(this, e, e + 7), g(this, e + 1, e + 6), g(this, e + 2, e + 5), g(this, e + 3, e + 4)
          return this
        }),
        (h.prototype.toString = function () {
          var t = this.length
          return 0 === t ? '' : 0 == arguments.length ? v(this, 0, t) : y.apply(this, arguments)
        }),
        (h.prototype.toLocaleString = h.prototype.toString),
        (h.prototype.equals = function (t) {
          if (!h.isBuffer(t)) throw TypeError('Argument must be a Buffer')
          return this === t || 0 === h.compare(this, t)
        }),
        (h.prototype.inspect = function () {
          var t = '',
            r = e.h2
          return (
            (t = this.toString('hex', 0, r)
              .replace(/(.{2})/g, '$1 ')
              .trim()),
            this.length > r && (t += ' ... '),
            '<Buffer ' + t + '>'
          )
        }),
        s && (h.prototype[s] = h.prototype.inspect),
        (h.prototype.compare = function (t, e, r, n, i) {
          if ((C(t, Uint8Array) && (t = h.from(t, t.offset, t.byteLength)), !h.isBuffer(t)))
            throw TypeError(
              'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                typeof t
            )
          if (
            (void 0 === e && (e = 0),
            void 0 === r && (r = t ? t.length : 0),
            void 0 === n && (n = 0),
            void 0 === i && (i = this.length),
            e < 0 || r > t.length || n < 0 || i > this.length)
          )
            throw RangeError('out of range index')
          if (n >= i && e >= r) return 0
          if (n >= i) return -1
          if (e >= r) return 1
          if (((e >>>= 0), (r >>>= 0), (n >>>= 0), (i >>>= 0), this === t)) return 0
          for (
            var s = i - n,
              o = r - e,
              a = Math.min(s, o),
              u = this.slice(n, i),
              c = t.slice(e, r),
              f = 0;
            f < a;
            ++f
          )
            if (u[f] !== c[f]) {
              ;(s = u[f]), (o = c[f])
              break
            }
          return s < o ? -1 : o < s ? 1 : 0
        }),
        (h.prototype.includes = function (t, e, r) {
          return -1 !== this.indexOf(t, e, r)
        }),
        (h.prototype.indexOf = function (t, e, r) {
          return m(this, t, e, r, !0)
        }),
        (h.prototype.lastIndexOf = function (t, e, r) {
          return m(this, t, e, r, !1)
        }),
        (h.prototype.write = function (t, e, r, n) {
          if (void 0 === e) (n = 'utf8'), (r = this.length), (e = 0)
          else if (void 0 === r && 'string' == typeof e) (n = e), (r = this.length), (e = 0)
          else if (isFinite(e))
            (e >>>= 0),
              isFinite(r) ? ((r >>>= 0), void 0 === n && (n = 'utf8')) : ((n = r), (r = void 0))
          else
            throw Error('Buffer.write(string, encoding, offset[, length]) is no longer supported')
          var i,
            s,
            o,
            h,
            a,
            u,
            c,
            f,
            p = this.length - e
          if (
            ((void 0 === r || r > p) && (r = p),
            (t.length > 0 && (r < 0 || e < 0)) || e > this.length)
          )
            throw RangeError('Attempt to write outside buffer bounds')
          n || (n = 'utf8')
          for (var l = !1; ; )
            switch (n) {
              case 'hex':
                return (function (t, e, r, n) {
                  r = Number(r) || 0
                  var i = t.length - r
                  n ? (n = Number(n)) > i && (n = i) : (n = i)
                  var s = e.length
                  n > s / 2 && (n = s / 2)
                  for (var o = 0; o < n; ++o) {
                    var h = parseInt(e.substr(2 * o, 2), 16)
                    if (h != h) break
                    t[r + o] = h
                  }
                  return o
                })(this, t, e, r)
              case 'utf8':
              case 'utf-8':
                return (i = e), (s = r), _(O(t, this.length - i), this, i, s)
              case 'ascii':
              case 'latin1':
              case 'binary':
                return (
                  (o = e),
                  (h = r),
                  _(
                    (function (t) {
                      for (var e = [], r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r))
                      return e
                    })(t),
                    this,
                    o,
                    h
                  )
                )
              case 'base64':
                return (a = e), (u = r), _(T(t), this, a, u)
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return (
                  (c = e),
                  (f = r),
                  _(
                    (function (t, e) {
                      for (var r, n, i = [], s = 0; s < t.length && !((e -= 2) < 0); ++s)
                        (n = (r = t.charCodeAt(s)) >> 8), i.push(r % 256), i.push(n)
                      return i
                    })(t, this.length - c),
                    this,
                    c,
                    f
                  )
                )
              default:
                if (l) throw TypeError('Unknown encoding: ' + n)
                ;(n = ('' + n).toLowerCase()), (l = !0)
            }
        }),
        (h.prototype.toJSON = function () {
          return { type: 'Buffer', data: Array.prototype.slice.call(this._arr || this, 0) }
        }),
        (h.prototype.slice = function (t, e) {
          var r = this.length
          ;(t = ~~t),
            (e = void 0 === e ? r : ~~e),
            t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
            e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
            e < t && (e = t)
          var n = this.subarray(t, e)
          return Object.setPrototypeOf(n, h.prototype), n
        }),
        (h.prototype.readUintLE = h.prototype.readUIntLE =
          function (t, e, r) {
            ;(t >>>= 0), (e >>>= 0), r || w(t, e, this.length)
            for (var n = this[t], i = 1, s = 0; ++s < e && (i *= 256); ) n += this[t + s] * i
            return n
          }),
        (h.prototype.readUintBE = h.prototype.readUIntBE =
          function (t, e, r) {
            ;(t >>>= 0), (e >>>= 0), r || w(t, e, this.length)
            for (var n = this[t + --e], i = 1; e > 0 && (i *= 256); ) n += this[t + --e] * i
            return n
          }),
        (h.prototype.readUint8 = h.prototype.readUInt8 =
          function (t, e) {
            return (t >>>= 0), e || w(t, 1, this.length), this[t]
          }),
        (h.prototype.readUint16LE = h.prototype.readUInt16LE =
          function (t, e) {
            return (t >>>= 0), e || w(t, 2, this.length), this[t] | (this[t + 1] << 8)
          }),
        (h.prototype.readUint16BE = h.prototype.readUInt16BE =
          function (t, e) {
            return (t >>>= 0), e || w(t, 2, this.length), (this[t] << 8) | this[t + 1]
          }),
        (h.prototype.readUint32LE = h.prototype.readUInt32LE =
          function (t, e) {
            return (
              (t >>>= 0),
              e || w(t, 4, this.length),
              (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) + 16777216 * this[t + 3]
            )
          }),
        (h.prototype.readUint32BE = h.prototype.readUInt32BE =
          function (t, e) {
            return (
              (t >>>= 0),
              e || w(t, 4, this.length),
              16777216 * this[t] + ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
            )
          }),
        (h.prototype.readIntLE = function (t, e, r) {
          ;(t >>>= 0), (e >>>= 0), r || w(t, e, this.length)
          for (var n = this[t], i = 1, s = 0; ++s < e && (i *= 256); ) n += this[t + s] * i
          return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)), n
        }),
        (h.prototype.readIntBE = function (t, e, r) {
          ;(t >>>= 0), (e >>>= 0), r || w(t, e, this.length)
          for (var n = e, i = 1, s = this[t + --n]; n > 0 && (i *= 256); ) s += this[t + --n] * i
          return s >= (i *= 128) && (s -= Math.pow(2, 8 * e)), s
        }),
        (h.prototype.readInt8 = function (t, e) {
          return ((t >>>= 0), e || w(t, 1, this.length), 128 & this[t])
            ? -((255 - this[t] + 1) * 1)
            : this[t]
        }),
        (h.prototype.readInt16LE = function (t, e) {
          ;(t >>>= 0), e || w(t, 2, this.length)
          var r = this[t] | (this[t + 1] << 8)
          return 32768 & r ? 4294901760 | r : r
        }),
        (h.prototype.readInt16BE = function (t, e) {
          ;(t >>>= 0), e || w(t, 2, this.length)
          var r = this[t + 1] | (this[t] << 8)
          return 32768 & r ? 4294901760 | r : r
        }),
        (h.prototype.readInt32LE = function (t, e) {
          return (
            (t >>>= 0),
            e || w(t, 4, this.length),
            this[t] | (this[t + 1] << 8) | (this[t + 2] << 16) | (this[t + 3] << 24)
          )
        }),
        (h.prototype.readInt32BE = function (t, e) {
          return (
            (t >>>= 0),
            e || w(t, 4, this.length),
            (this[t] << 24) | (this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3]
          )
        }),
        (h.prototype.readFloatLE = function (t, e) {
          return (t >>>= 0), e || w(t, 4, this.length), i.read(this, t, !0, 23, 4)
        }),
        (h.prototype.readFloatBE = function (t, e) {
          return (t >>>= 0), e || w(t, 4, this.length), i.read(this, t, !1, 23, 4)
        }),
        (h.prototype.readDoubleLE = function (t, e) {
          return (t >>>= 0), e || w(t, 8, this.length), i.read(this, t, !0, 52, 8)
        }),
        (h.prototype.readDoubleBE = function (t, e) {
          return (t >>>= 0), e || w(t, 8, this.length), i.read(this, t, !1, 52, 8)
        }),
        (h.prototype.writeUintLE = h.prototype.writeUIntLE =
          function (t, e, r, n) {
            if (((t = +t), (e >>>= 0), (r >>>= 0), !n)) {
              var i = Math.pow(2, 8 * r) - 1
              E(this, t, e, r, i, 0)
            }
            var s = 1,
              o = 0
            for (this[e] = 255 & t; ++o < r && (s *= 256); ) this[e + o] = (t / s) & 255
            return e + r
          }),
        (h.prototype.writeUintBE = h.prototype.writeUIntBE =
          function (t, e, r, n) {
            if (((t = +t), (e >>>= 0), (r >>>= 0), !n)) {
              var i = Math.pow(2, 8 * r) - 1
              E(this, t, e, r, i, 0)
            }
            var s = r - 1,
              o = 1
            for (this[e + s] = 255 & t; --s >= 0 && (o *= 256); ) this[e + s] = (t / o) & 255
            return e + r
          }),
        (h.prototype.writeUint8 = h.prototype.writeUInt8 =
          function (t, e, r) {
            return (t = +t), (e >>>= 0), r || E(this, t, e, 1, 255, 0), (this[e] = 255 & t), e + 1
          }),
        (h.prototype.writeUint16LE = h.prototype.writeUInt16LE =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || E(this, t, e, 2, 65535, 0),
              (this[e] = 255 & t),
              (this[e + 1] = t >>> 8),
              e + 2
            )
          }),
        (h.prototype.writeUint16BE = h.prototype.writeUInt16BE =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || E(this, t, e, 2, 65535, 0),
              (this[e] = t >>> 8),
              (this[e + 1] = 255 & t),
              e + 2
            )
          }),
        (h.prototype.writeUint32LE = h.prototype.writeUInt32LE =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || E(this, t, e, 4, 4294967295, 0),
              (this[e + 3] = t >>> 24),
              (this[e + 2] = t >>> 16),
              (this[e + 1] = t >>> 8),
              (this[e] = 255 & t),
              e + 4
            )
          }),
        (h.prototype.writeUint32BE = h.prototype.writeUInt32BE =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || E(this, t, e, 4, 4294967295, 0),
              (this[e] = t >>> 24),
              (this[e + 1] = t >>> 16),
              (this[e + 2] = t >>> 8),
              (this[e + 3] = 255 & t),
              e + 4
            )
          }),
        (h.prototype.writeIntLE = function (t, e, r, n) {
          if (((t = +t), (e >>>= 0), !n)) {
            var i = Math.pow(2, 8 * r - 1)
            E(this, t, e, r, i - 1, -i)
          }
          var s = 0,
            o = 1,
            h = 0
          for (this[e] = 255 & t; ++s < r && (o *= 256); )
            t < 0 && 0 === h && 0 !== this[e + s - 1] && (h = 1),
              (this[e + s] = (((t / o) >> 0) - h) & 255)
          return e + r
        }),
        (h.prototype.writeIntBE = function (t, e, r, n) {
          if (((t = +t), (e >>>= 0), !n)) {
            var i = Math.pow(2, 8 * r - 1)
            E(this, t, e, r, i - 1, -i)
          }
          var s = r - 1,
            o = 1,
            h = 0
          for (this[e + s] = 255 & t; --s >= 0 && (o *= 256); )
            t < 0 && 0 === h && 0 !== this[e + s + 1] && (h = 1),
              (this[e + s] = (((t / o) >> 0) - h) & 255)
          return e + r
        }),
        (h.prototype.writeInt8 = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || E(this, t, e, 1, 127, -128),
            t < 0 && (t = 255 + t + 1),
            (this[e] = 255 & t),
            e + 1
          )
        }),
        (h.prototype.writeInt16LE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || E(this, t, e, 2, 32767, -32768),
            (this[e] = 255 & t),
            (this[e + 1] = t >>> 8),
            e + 2
          )
        }),
        (h.prototype.writeInt16BE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || E(this, t, e, 2, 32767, -32768),
            (this[e] = t >>> 8),
            (this[e + 1] = 255 & t),
            e + 2
          )
        }),
        (h.prototype.writeInt32LE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || E(this, t, e, 4, 2147483647, -2147483648),
            (this[e] = 255 & t),
            (this[e + 1] = t >>> 8),
            (this[e + 2] = t >>> 16),
            (this[e + 3] = t >>> 24),
            e + 4
          )
        }),
        (h.prototype.writeInt32BE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || E(this, t, e, 4, 2147483647, -2147483648),
            t < 0 && (t = 4294967295 + t + 1),
            (this[e] = t >>> 24),
            (this[e + 1] = t >>> 16),
            (this[e + 2] = t >>> 8),
            (this[e + 3] = 255 & t),
            e + 4
          )
        }),
        (h.prototype.writeFloatLE = function (t, e, r) {
          return k(this, t, e, !0, r)
        }),
        (h.prototype.writeFloatBE = function (t, e, r) {
          return k(this, t, e, !1, r)
        }),
        (h.prototype.writeDoubleLE = function (t, e, r) {
          return B(this, t, e, !0, r)
        }),
        (h.prototype.writeDoubleBE = function (t, e, r) {
          return B(this, t, e, !1, r)
        }),
        (h.prototype.copy = function (t, e, r, n) {
          if (!h.isBuffer(t)) throw TypeError('argument should be a Buffer')
          if (
            (r || (r = 0),
            n || 0 === n || (n = this.length),
            e >= t.length && (e = t.length),
            e || (e = 0),
            n > 0 && n < r && (n = r),
            n === r || 0 === t.length || 0 === this.length)
          )
            return 0
          if (e < 0) throw RangeError('targetStart out of bounds')
          if (r < 0 || r >= this.length) throw RangeError('Index out of range')
          if (n < 0) throw RangeError('sourceEnd out of bounds')
          n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r)
          var i = n - r
          return (
            this === t && 'function' == typeof Uint8Array.prototype.copyWithin
              ? this.copyWithin(e, r, n)
              : Uint8Array.prototype.set.call(t, this.subarray(r, n), e),
            i
          )
        }),
        (h.prototype.fill = function (t, e, r, n) {
          if ('string' == typeof t) {
            if (
              ('string' == typeof e
                ? ((n = e), (e = 0), (r = this.length))
                : 'string' == typeof r && ((n = r), (r = this.length)),
              void 0 !== n && 'string' != typeof n)
            )
              throw TypeError('encoding must be a string')
            if ('string' == typeof n && !h.isEncoding(n)) throw TypeError('Unknown encoding: ' + n)
            if (1 === t.length) {
              var i,
                s = t.charCodeAt(0)
              ;(('utf8' === n && s < 128) || 'latin1' === n) && (t = s)
            }
          } else 'number' == typeof t ? (t &= 255) : 'boolean' == typeof t && (t = Number(t))
          if (e < 0 || this.length < e || this.length < r) throw RangeError('Out of range index')
          if (r <= e) return this
          if (
            ((e >>>= 0),
            (r = void 0 === r ? this.length : r >>> 0),
            t || (t = 0),
            'number' == typeof t)
          )
            for (i = e; i < r; ++i) this[i] = t
          else {
            var o = h.isBuffer(t) ? t : h.from(t, n),
              a = o.length
            if (0 === a) throw TypeError('The value "' + t + '" is invalid for argument "value"')
            for (i = 0; i < r - e; ++i) this[i + e] = o[i % a]
          }
          return this
        })
      var R = /[^+/0-9A-Za-z-_]/g
      function O(t, e) {
        e = e || 1 / 0
        for (var r, n = t.length, i = null, s = [], o = 0; o < n; ++o) {
          if ((r = t.charCodeAt(o)) > 55295 && r < 57344) {
            if (!i) {
              if (r > 56319 || o + 1 === n) {
                ;(e -= 3) > -1 && s.push(239, 191, 189)
                continue
              }
              i = r
              continue
            }
            if (r < 56320) {
              ;(e -= 3) > -1 && s.push(239, 191, 189), (i = r)
              continue
            }
            r = (((i - 55296) << 10) | (r - 56320)) + 65536
          } else i && (e -= 3) > -1 && s.push(239, 191, 189)
          if (((i = null), r < 128)) {
            if ((e -= 1) < 0) break
            s.push(r)
          } else if (r < 2048) {
            if ((e -= 2) < 0) break
            s.push((r >> 6) | 192, (63 & r) | 128)
          } else if (r < 65536) {
            if ((e -= 3) < 0) break
            s.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128)
          } else if (r < 1114112) {
            if ((e -= 4) < 0) break
            s.push((r >> 18) | 240, ((r >> 12) & 63) | 128, ((r >> 6) & 63) | 128, (63 & r) | 128)
          } else throw Error('Invalid code point')
        }
        return s
      }
      function T(t) {
        return n.toByteArray(
          (function (t) {
            if ((t = (t = t.split('=')[0]).trim().replace(R, '')).length < 2) return ''
            for (; t.length % 4 != 0; ) t += '='
            return t
          })(t)
        )
      }
      function _(t, e, r, n) {
        for (var i = 0; i < n && !(i + r >= e.length) && !(i >= t.length); ++i) e[i + r] = t[i]
        return i
      }
      function C(t, e) {
        return (
          t instanceof e ||
          (null != t &&
            null != t.constructor &&
            null != t.constructor.name &&
            t.constructor.name === e.name)
        )
      }
      var L = (function () {
        for (var t = '0123456789abcdef', e = Array(256), r = 0; r < 16; ++r)
          for (var n = 16 * r, i = 0; i < 16; ++i) e[n + i] = t[r] + t[i]
        return e
      })()
    },
    645: function (t, e) {
      /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ ;(e.read =
        function (t, e, r, n, i) {
          var s,
            o,
            h = 8 * i - n - 1,
            a = (1 << h) - 1,
            u = a >> 1,
            c = -7,
            f = r ? i - 1 : 0,
            p = r ? -1 : 1,
            l = t[e + f]
          for (
            f += p, s = l & ((1 << -c) - 1), l >>= -c, c += h;
            c > 0;
            s = 256 * s + t[e + f], f += p, c -= 8
          );
          for (
            o = s & ((1 << -c) - 1), s >>= -c, c += n;
            c > 0;
            o = 256 * o + t[e + f], f += p, c -= 8
          );
          if (0 === s) s = 1 - u
          else {
            if (s === a) return o ? NaN : (l ? -1 : 1) * (1 / 0)
            ;(o += Math.pow(2, n)), (s -= u)
          }
          return (l ? -1 : 1) * o * Math.pow(2, s - n)
        }),
        (e.write = function (t, e, r, n, i, s) {
          var o,
            h,
            a,
            u = 8 * s - i - 1,
            c = (1 << u) - 1,
            f = c >> 1,
            p = 23 === i ? 5960464477539062e-23 : 0,
            l = n ? 0 : s - 1,
            d = n ? 1 : -1,
            y = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0
          for (
            isNaN((e = Math.abs(e))) || e === 1 / 0
              ? ((h = isNaN(e) ? 1 : 0), (o = c))
              : ((o = Math.floor(Math.log(e) / Math.LN2)),
                e * (a = Math.pow(2, -o)) < 1 && (o--, (a *= 2)),
                o + f >= 1 ? (e += p / a) : (e += p * Math.pow(2, 1 - f)),
                e * a >= 2 && (o++, (a /= 2)),
                o + f >= c
                  ? ((h = 0), (o = c))
                  : o + f >= 1
                  ? ((h = (e * a - 1) * Math.pow(2, i)), (o += f))
                  : ((h = e * Math.pow(2, f - 1) * Math.pow(2, i)), (o = 0)));
            i >= 8;
            t[r + l] = 255 & h, l += d, h /= 256, i -= 8
          );
          for (o = (o << i) | h, u += i; u > 0; t[r + l] = 255 & o, l += d, o /= 256, u -= 8);
          t[r + l - d] |= 128 * y
        })
    },
    9367: function (t, e, r) {
      'use strict'
      r.r(e),
        r.d(e, {
          Manager: function () {
            return tg
          },
          Socket: function () {
            return td
          },
          connect: function () {
            return tb
          },
          default: function () {
            return tb
          },
          io: function () {
            return tb
          },
          protocol: function () {
            return ta
          },
        })
      var n,
        i,
        s = {}
      r.r(s),
        r.d(s, {
          Decoder: function () {
            return tc
          },
          Encoder: function () {
            return tu
          },
          PacketType: function () {
            return i
          },
          protocol: function () {
            return ta
          },
        })
      let o = Object.create(null)
      ;(o.open = '0'),
        (o.close = '1'),
        (o.ping = '2'),
        (o.pong = '3'),
        (o.message = '4'),
        (o.upgrade = '5'),
        (o.noop = '6')
      let h = Object.create(null)
      Object.keys(o).forEach((t) => {
        h[o[t]] = t
      })
      let a = { type: 'error', data: 'parser error' },
        u =
          'function' == typeof Blob ||
          ('undefined' != typeof Blob &&
            '[object BlobConstructor]' === Object.prototype.toString.call(Blob)),
        c = 'function' == typeof ArrayBuffer,
        f = (t) =>
          'function' == typeof ArrayBuffer.isView
            ? ArrayBuffer.isView(t)
            : t && t.buffer instanceof ArrayBuffer,
        p = ({ type: t, data: e }, r, n) =>
          u && e instanceof Blob
            ? r
              ? n(e)
              : l(e, n)
            : c && (e instanceof ArrayBuffer || f(e))
            ? r
              ? n(e)
              : l(new Blob([e]), n)
            : n(o[t] + (e || '')),
        l = (t, e) => {
          let r = new FileReader()
          return (
            (r.onload = function () {
              let t = r.result.split(',')[1]
              e('b' + t)
            }),
            r.readAsDataURL(t)
          )
        },
        d = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
        y = 'undefined' == typeof Uint8Array ? [] : new Uint8Array(256)
      for (let g = 0; g < d.length; g++) y[d.charCodeAt(g)] = g
      let m = (t) => {
          let e = 0.75 * t.length,
            r = t.length,
            n,
            i = 0,
            s,
            o,
            h,
            a
          '=' === t[t.length - 1] && (e--, '=' === t[t.length - 2] && e--)
          let u = new ArrayBuffer(e),
            c = new Uint8Array(u)
          for (n = 0; n < r; n += 4)
            (s = y[t.charCodeAt(n)]),
              (o = y[t.charCodeAt(n + 1)]),
              (h = y[t.charCodeAt(n + 2)]),
              (a = y[t.charCodeAt(n + 3)]),
              (c[i++] = (s << 2) | (o >> 4)),
              (c[i++] = ((15 & o) << 4) | (h >> 2)),
              (c[i++] = ((3 & h) << 6) | (63 & a))
          return u
        },
        b = 'function' == typeof ArrayBuffer,
        v = (t, e) => {
          if ('string' != typeof t) return { type: 'message', data: E(t, e) }
          let r = t.charAt(0)
          if ('b' === r) return { type: 'message', data: w(t.substring(1), e) }
          let n = h[r]
          return n ? (t.length > 1 ? { type: h[r], data: t.substring(1) } : { type: h[r] }) : a
        },
        w = (t, e) => {
          if (!b) return { base64: !0, data: t }
          {
            let r = m(t)
            return E(r, e)
          }
        },
        E = (t, e) => ('blob' === e && t instanceof ArrayBuffer ? new Blob([t]) : t),
        A = (t, e) => {
          let r = t.length,
            n = Array(r),
            i = 0
          t.forEach((t, s) => {
            p(t, !1, (t) => {
              ;(n[s] = t), ++i === r && e(n.join('\x1e'))
            })
          })
        },
        k = (t, e) => {
          let r = t.split('\x1e'),
            n = []
          for (let i = 0; i < r.length; i++) {
            let s = v(r[i], e)
            if ((n.push(s), 'error' === s.type)) break
          }
          return n
        }
      function B(t) {
        if (t)
          return (function (t) {
            for (var e in B.prototype) t[e] = B.prototype[e]
            return t
          })(t)
      }
      ;(B.prototype.on = B.prototype.addEventListener =
        function (t, e) {
          return (
            (this._callbacks = this._callbacks || {}),
            (this._callbacks['$' + t] = this._callbacks['$' + t] || []).push(e),
            this
          )
        }),
        (B.prototype.once = function (t, e) {
          function r() {
            this.off(t, r), e.apply(this, arguments)
          }
          return (r.fn = e), this.on(t, r), this
        }),
        (B.prototype.off =
          B.prototype.removeListener =
          B.prototype.removeAllListeners =
          B.prototype.removeEventListener =
            function (t, e) {
              if (((this._callbacks = this._callbacks || {}), 0 == arguments.length))
                return (this._callbacks = {}), this
              var r,
                n = this._callbacks['$' + t]
              if (!n) return this
              if (1 == arguments.length) return delete this._callbacks['$' + t], this
              for (var i = 0; i < n.length; i++)
                if ((r = n[i]) === e || r.fn === e) {
                  n.splice(i, 1)
                  break
                }
              return 0 === n.length && delete this._callbacks['$' + t], this
            }),
        (B.prototype.emit = function (t) {
          this._callbacks = this._callbacks || {}
          for (
            var e = Array(arguments.length - 1), r = this._callbacks['$' + t], n = 1;
            n < arguments.length;
            n++
          )
            e[n - 1] = arguments[n]
          if (r) {
            r = r.slice(0)
            for (var n = 0, i = r.length; n < i; ++n) r[n].apply(this, e)
          }
          return this
        }),
        (B.prototype.emitReserved = B.prototype.emit),
        (B.prototype.listeners = function (t) {
          return (this._callbacks = this._callbacks || {}), this._callbacks['$' + t] || []
        }),
        (B.prototype.hasListeners = function (t) {
          return !!this.listeners(t).length
        })
      let R =
        'undefined' != typeof self
          ? self
          : 'undefined' != typeof window
          ? window
          : Function('return this')()
      function O(t, ...e) {
        return e.reduce((e, r) => (t.hasOwnProperty(r) && (e[r] = t[r]), e), {})
      }
      let T = setTimeout,
        _ = clearTimeout
      function C(t, e) {
        e.useNativeTimers
          ? ((t.setTimeoutFn = T.bind(R)), (t.clearTimeoutFn = _.bind(R)))
          : ((t.setTimeoutFn = setTimeout.bind(R)), (t.clearTimeoutFn = clearTimeout.bind(R)))
      }
      class L extends Error {
        constructor(t, e, r) {
          super(t), (this.description = e), (this.context = r), (this.type = 'TransportError')
        }
      }
      class S extends B {
        constructor(t) {
          super(),
            (this.writable = !1),
            C(this, t),
            (this.opts = t),
            (this.query = t.query),
            (this.readyState = ''),
            (this.socket = t.socket)
        }
        onError(t, e, r) {
          return super.emitReserved('error', new L(t, e, r)), this
        }
        open() {
          return (
            ('closed' === this.readyState || '' === this.readyState) &&
              ((this.readyState = 'opening'), this.doOpen()),
            this
          )
        }
        close() {
          return (
            ('opening' === this.readyState || 'open' === this.readyState) &&
              (this.doClose(), this.onClose()),
            this
          )
        }
        send(t) {
          'open' === this.readyState && this.write(t)
        }
        onOpen() {
          ;(this.readyState = 'open'), (this.writable = !0), super.emitReserved('open')
        }
        onData(t) {
          let e = v(t, this.socket.binaryType)
          this.onPacket(e)
        }
        onPacket(t) {
          super.emitReserved('packet', t)
        }
        onClose(t) {
          ;(this.readyState = 'closed'), super.emitReserved('close', t)
        }
      }
      let x = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''),
        N = {},
        U = 0,
        I = 0,
        P
      function j(t) {
        let e = ''
        do (e = x[t % 64] + e), (t = Math.floor(t / 64))
        while (t > 0)
        return e
      }
      function M() {
        let t = j(+new Date())
        return t !== P ? ((U = 0), (P = t)) : t + '.' + j(U++)
      }
      for (; I < 64; I++) N[x[I]] = I
      function q(t) {
        let e = ''
        for (let r in t)
          t.hasOwnProperty(r) &&
            (e.length && (e += '&'), (e += encodeURIComponent(r) + '=' + encodeURIComponent(t[r])))
        return e
      }
      let D = !1
      try {
        D = 'undefined' != typeof XMLHttpRequest && 'withCredentials' in new XMLHttpRequest()
      } catch (F) {}
      let V = D
      function z(t) {
        let e = t.xdomain
        try {
          if ('undefined' != typeof XMLHttpRequest && (!e || V)) return new XMLHttpRequest()
        } catch (r) {}
        if (!e)
          try {
            return new R[['Active'].concat('Object').join('X')]('Microsoft.XMLHTTP')
          } catch (n) {}
      }
      function Y() {}
      let H = (function () {
        let t = new z({ xdomain: !1 })
        return null != t.responseType
      })()
      class K extends B {
        constructor(t, e) {
          super(),
            C(this, e),
            (this.opts = e),
            (this.method = e.method || 'GET'),
            (this.uri = t),
            (this.async = !1 !== e.async),
            (this.data = void 0 !== e.data ? e.data : null),
            this.create()
        }
        create() {
          let t = O(
            this.opts,
            'agent',
            'pfx',
            'key',
            'passphrase',
            'cert',
            'ca',
            'ciphers',
            'rejectUnauthorized',
            'autoUnref'
          )
          ;(t.xdomain = !!this.opts.xd), (t.xscheme = !!this.opts.xs)
          let e = (this.xhr = new z(t))
          try {
            e.open(this.method, this.uri, this.async)
            try {
              if (this.opts.extraHeaders)
                for (let r in (e.setDisableHeaderCheck && e.setDisableHeaderCheck(!0),
                this.opts.extraHeaders))
                  this.opts.extraHeaders.hasOwnProperty(r) &&
                    e.setRequestHeader(r, this.opts.extraHeaders[r])
            } catch (n) {}
            if ('POST' === this.method)
              try {
                e.setRequestHeader('Content-type', 'text/plain;charset=UTF-8')
              } catch (i) {}
            try {
              e.setRequestHeader('Accept', '*/*')
            } catch (s) {}
            'withCredentials' in e && (e.withCredentials = this.opts.withCredentials),
              this.opts.requestTimeout && (e.timeout = this.opts.requestTimeout),
              (e.onreadystatechange = () => {
                4 === e.readyState &&
                  (200 === e.status || 1223 === e.status
                    ? this.onLoad()
                    : this.setTimeoutFn(() => {
                        this.onError('number' == typeof e.status ? e.status : 0)
                      }, 0))
              }),
              e.send(this.data)
          } catch (o) {
            this.setTimeoutFn(() => {
              this.onError(o)
            }, 0)
            return
          }
          'undefined' != typeof document &&
            ((this.index = K.requestsCount++), (K.requests[this.index] = this))
        }
        onError(t) {
          this.emitReserved('error', t, this.xhr), this.cleanup(!0)
        }
        cleanup(t) {
          if (void 0 !== this.xhr && null !== this.xhr) {
            if (((this.xhr.onreadystatechange = Y), t))
              try {
                this.xhr.abort()
              } catch (e) {}
            'undefined' != typeof document && delete K.requests[this.index], (this.xhr = null)
          }
        }
        onLoad() {
          let t = this.xhr.responseText
          null !== t && (this.emitReserved('data', t), this.emitReserved('success'), this.cleanup())
        }
        abort() {
          this.cleanup()
        }
      }
      function W() {
        for (let t in K.requests) K.requests.hasOwnProperty(t) && K.requests[t].abort()
      }
      ;(K.requestsCount = 0),
        (K.requests = {}),
        'undefined' != typeof document &&
          ('function' == typeof attachEvent
            ? attachEvent('onunload', W)
            : 'function' == typeof addEventListener &&
              addEventListener('onpagehide' in R ? 'pagehide' : 'unload', W, !1))
      let J = (() => {
          let t = 'function' == typeof Promise && 'function' == typeof Promise.resolve
          return t ? (t) => Promise.resolve().then(t) : (t, e) => e(t, 0)
        })(),
        $ = R.WebSocket || R.MozWebSocket
      r(8764).lW
      let X =
          'undefined' != typeof navigator &&
          'string' == typeof navigator.product &&
          'reactnative' === navigator.product.toLowerCase(),
        G = {
          websocket: class extends S {
            constructor(t) {
              super(t), (this.supportsBinary = !t.forceBase64)
            }
            get name() {
              return 'websocket'
            }
            doOpen() {
              if (!this.check()) return
              let t = this.uri(),
                e = this.opts.protocols,
                r = X
                  ? {}
                  : O(
                      this.opts,
                      'agent',
                      'perMessageDeflate',
                      'pfx',
                      'key',
                      'passphrase',
                      'cert',
                      'ca',
                      'ciphers',
                      'rejectUnauthorized',
                      'localAddress',
                      'protocolVersion',
                      'origin',
                      'maxPayload',
                      'family',
                      'checkServerIdentity'
                    )
              this.opts.extraHeaders && (r.headers = this.opts.extraHeaders)
              try {
                this.ws = X ? new $(t, e, r) : e ? new $(t, e) : new $(t)
              } catch (n) {
                return this.emitReserved('error', n)
              }
              ;(this.ws.binaryType = this.socket.binaryType || 'arraybuffer'),
                this.addEventListeners()
            }
            addEventListeners() {
              ;(this.ws.onopen = () => {
                this.opts.autoUnref && this.ws._socket.unref(), this.onOpen()
              }),
                (this.ws.onclose = (t) =>
                  this.onClose({ description: 'websocket connection closed', context: t })),
                (this.ws.onmessage = (t) => this.onData(t.data)),
                (this.ws.onerror = (t) => this.onError('websocket error', t))
            }
            write(t) {
              this.writable = !1
              for (let e = 0; e < t.length; e++) {
                let r = t[e],
                  n = e === t.length - 1
                p(r, this.supportsBinary, (t) => {
                  try {
                    this.ws.send(t)
                  } catch (e) {}
                  n &&
                    J(() => {
                      ;(this.writable = !0), this.emitReserved('drain')
                    }, this.setTimeoutFn)
                })
              }
            }
            doClose() {
              void 0 !== this.ws && (this.ws.close(), (this.ws = null))
            }
            uri() {
              let t = this.query || {},
                e = this.opts.secure ? 'wss' : 'ws',
                r = ''
              this.opts.port &&
                (('wss' === e && 443 !== Number(this.opts.port)) ||
                  ('ws' === e && 80 !== Number(this.opts.port))) &&
                (r = ':' + this.opts.port),
                this.opts.timestampRequests && (t[this.opts.timestampParam] = M()),
                this.supportsBinary || (t.b64 = 1)
              let n = q(t),
                i = -1 !== this.opts.hostname.indexOf(':')
              return (
                e +
                '://' +
                (i ? '[' + this.opts.hostname + ']' : this.opts.hostname) +
                r +
                this.opts.path +
                (n.length ? '?' + n : '')
              )
            }
            check() {
              return !!$
            }
          },
          polling: class extends S {
            constructor(t) {
              if ((super(t), (this.polling = !1), 'undefined' != typeof location)) {
                let e = 'https:' === location.protocol,
                  r = location.port
                r || (r = e ? '443' : '80'),
                  (this.xd =
                    ('undefined' != typeof location && t.hostname !== location.hostname) ||
                    r !== t.port),
                  (this.xs = t.secure !== e)
              }
              let n = t && t.forceBase64
              this.supportsBinary = H && !n
            }
            get name() {
              return 'polling'
            }
            doOpen() {
              this.poll()
            }
            pause(t) {
              this.readyState = 'pausing'
              let e = () => {
                ;(this.readyState = 'paused'), t()
              }
              if (this.polling || !this.writable) {
                let r = 0
                this.polling &&
                  (r++,
                  this.once('pollComplete', function () {
                    --r || e()
                  })),
                  this.writable ||
                    (r++,
                    this.once('drain', function () {
                      --r || e()
                    }))
              } else e()
            }
            poll() {
              ;(this.polling = !0), this.doPoll(), this.emitReserved('poll')
            }
            onData(t) {
              let e = (t) => {
                if (
                  ('opening' === this.readyState && 'open' === t.type && this.onOpen(),
                  'close' === t.type)
                )
                  return this.onClose({ description: 'transport closed by the server' }), !1
                this.onPacket(t)
              }
              k(t, this.socket.binaryType).forEach(e),
                'closed' !== this.readyState &&
                  ((this.polling = !1),
                  this.emitReserved('pollComplete'),
                  'open' === this.readyState && this.poll())
            }
            doClose() {
              let t = () => {
                this.write([{ type: 'close' }])
              }
              'open' === this.readyState ? t() : this.once('open', t)
            }
            write(t) {
              ;(this.writable = !1),
                A(t, (t) => {
                  this.doWrite(t, () => {
                    ;(this.writable = !0), this.emitReserved('drain')
                  })
                })
            }
            uri() {
              let t = this.query || {},
                e = this.opts.secure ? 'https' : 'http',
                r = ''
              !1 !== this.opts.timestampRequests && (t[this.opts.timestampParam] = M()),
                this.supportsBinary || t.sid || (t.b64 = 1),
                this.opts.port &&
                  (('https' === e && 443 !== Number(this.opts.port)) ||
                    ('http' === e && 80 !== Number(this.opts.port))) &&
                  (r = ':' + this.opts.port)
              let n = q(t),
                i = -1 !== this.opts.hostname.indexOf(':')
              return (
                e +
                '://' +
                (i ? '[' + this.opts.hostname + ']' : this.opts.hostname) +
                r +
                this.opts.path +
                (n.length ? '?' + n : '')
              )
            }
            request(t = {}) {
              return Object.assign(t, { xd: this.xd, xs: this.xs }, this.opts), new K(this.uri(), t)
            }
            doWrite(t, e) {
              let r = this.request({ method: 'POST', data: t })
              r.on('success', e),
                r.on('error', (t, e) => {
                  this.onError('xhr post error', t, e)
                })
            }
            doPoll() {
              let t = this.request()
              t.on('data', this.onData.bind(this)),
                t.on('error', (t, e) => {
                  this.onError('xhr poll error', t, e)
                }),
                (this.pollXhr = t)
            }
          },
        },
        Z =
          /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
        Q = [
          'source',
          'protocol',
          'authority',
          'userInfo',
          'user',
          'password',
          'host',
          'port',
          'relative',
          'path',
          'directory',
          'file',
          'query',
          'anchor',
        ]
      function tt(t) {
        let e = t,
          r = t.indexOf('['),
          n = t.indexOf(']')
        ;-1 != r &&
          -1 != n &&
          (t = t.substring(0, r) + t.substring(r, n).replace(/:/g, ';') + t.substring(n, t.length))
        let i = Z.exec(t || ''),
          s = {},
          o = 14
        for (; o--; ) s[Q[o]] = i[o] || ''
        return (
          -1 != r &&
            -1 != n &&
            ((s.source = e),
            (s.host = s.host.substring(1, s.host.length - 1).replace(/;/g, ':')),
            (s.authority = s.authority.replace('[', '').replace(']', '').replace(/;/g, ':')),
            (s.ipv6uri = !0)),
          (s.pathNames = (function (t, e) {
            let r = e.replace(/\/{2,9}/g, '/').split('/')
            return (
              ('/' == e.slice(0, 1) || 0 === e.length) && r.splice(0, 1),
              '/' == e.slice(-1) && r.splice(r.length - 1, 1),
              r
            )
          })(0, s.path)),
          (s.queryKey = (function (t, e) {
            let r = {}
            return (
              e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (t, e, n) {
                e && (r[e] = n)
              }),
              r
            )
          })(0, s.query)),
          s
        )
      }
      class te extends B {
        constructor(t, e = {}) {
          super(),
            t && 'object' == typeof t && ((e = t), (t = null)),
            t
              ? ((t = tt(t)),
                (e.hostname = t.host),
                (e.secure = 'https' === t.protocol || 'wss' === t.protocol),
                (e.port = t.port),
                t.query && (e.query = t.query))
              : e.host && (e.hostname = tt(e.host).host),
            C(this, e),
            (this.secure =
              null != e.secure
                ? e.secure
                : 'undefined' != typeof location && 'https:' === location.protocol),
            e.hostname && !e.port && (e.port = this.secure ? '443' : '80'),
            (this.hostname =
              e.hostname || ('undefined' != typeof location ? location.hostname : 'localhost')),
            (this.port =
              e.port ||
              ('undefined' != typeof location && location.port
                ? location.port
                : this.secure
                ? '443'
                : '80')),
            (this.transports = e.transports || ['polling', 'websocket']),
            (this.readyState = ''),
            (this.writeBuffer = []),
            (this.prevBufferLen = 0),
            (this.opts = Object.assign(
              {
                path: '/engine.io',
                agent: !1,
                withCredentials: !1,
                upgrade: !0,
                timestampParam: 't',
                rememberUpgrade: !1,
                rejectUnauthorized: !0,
                perMessageDeflate: { threshold: 1024 },
                transportOptions: {},
                closeOnBeforeunload: !0,
              },
              e
            )),
            (this.opts.path = this.opts.path.replace(/\/$/, '') + '/'),
            'string' == typeof this.opts.query &&
              (this.opts.query = (function (t) {
                let e = {},
                  r = t.split('&')
                for (let n = 0, i = r.length; n < i; n++) {
                  let s = r[n].split('=')
                  e[decodeURIComponent(s[0])] = decodeURIComponent(s[1])
                }
                return e
              })(this.opts.query)),
            (this.id = null),
            (this.upgrades = null),
            (this.pingInterval = null),
            (this.pingTimeout = null),
            (this.pingTimeoutTimer = null),
            'function' == typeof addEventListener &&
              (this.opts.closeOnBeforeunload &&
                ((this.beforeunloadEventListener = () => {
                  this.transport && (this.transport.removeAllListeners(), this.transport.close())
                }),
                addEventListener('beforeunload', this.beforeunloadEventListener, !1)),
              'localhost' !== this.hostname &&
                ((this.offlineEventListener = () => {
                  this.onClose('transport close', { description: 'network connection lost' })
                }),
                addEventListener('offline', this.offlineEventListener, !1))),
            this.open()
        }
        createTransport(t) {
          let e = Object.assign({}, this.opts.query)
          ;(e.EIO = 4), (e.transport = t), this.id && (e.sid = this.id)
          let r = Object.assign({}, this.opts.transportOptions[t], this.opts, {
            query: e,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port,
          })
          return new G[t](r)
        }
        open() {
          let t
          if (
            this.opts.rememberUpgrade &&
            te.priorWebsocketSuccess &&
            -1 !== this.transports.indexOf('websocket')
          )
            t = 'websocket'
          else if (0 === this.transports.length) {
            this.setTimeoutFn(() => {
              this.emitReserved('error', 'No transports available')
            }, 0)
            return
          } else t = this.transports[0]
          this.readyState = 'opening'
          try {
            t = this.createTransport(t)
          } catch (e) {
            this.transports.shift(), this.open()
            return
          }
          t.open(), this.setTransport(t)
        }
        setTransport(t) {
          this.transport && this.transport.removeAllListeners(),
            (this.transport = t),
            t
              .on('drain', this.onDrain.bind(this))
              .on('packet', this.onPacket.bind(this))
              .on('error', this.onError.bind(this))
              .on('close', (t) => this.onClose('transport close', t))
        }
        probe(t) {
          let e = this.createTransport(t),
            r = !1
          te.priorWebsocketSuccess = !1
          let n = () => {
            r ||
              (e.send([{ type: 'ping', data: 'probe' }]),
              e.once('packet', (t) => {
                if (!r) {
                  if ('pong' === t.type && 'probe' === t.data)
                    (this.upgrading = !0),
                      this.emitReserved('upgrading', e),
                      e &&
                        ((te.priorWebsocketSuccess = 'websocket' === e.name),
                        this.transport.pause(() => {
                          r ||
                            'closed' === this.readyState ||
                            (u(),
                            this.setTransport(e),
                            e.send([{ type: 'upgrade' }]),
                            this.emitReserved('upgrade', e),
                            (e = null),
                            (this.upgrading = !1),
                            this.flush())
                        }))
                  else {
                    let n = Error('probe error')
                    ;(n.transport = e.name), this.emitReserved('upgradeError', n)
                  }
                }
              }))
          }
          function i() {
            r || ((r = !0), u(), e.close(), (e = null))
          }
          let s = (t) => {
            let r = Error('probe error: ' + t)
            ;(r.transport = e.name), i(), this.emitReserved('upgradeError', r)
          }
          function o() {
            s('transport closed')
          }
          function h() {
            s('socket closed')
          }
          function a(t) {
            e && t.name !== e.name && i()
          }
          let u = () => {
            e.removeListener('open', n),
              e.removeListener('error', s),
              e.removeListener('close', o),
              this.off('close', h),
              this.off('upgrading', a)
          }
          e.once('open', n),
            e.once('error', s),
            e.once('close', o),
            this.once('close', h),
            this.once('upgrading', a),
            e.open()
        }
        onOpen() {
          if (
            ((this.readyState = 'open'),
            (te.priorWebsocketSuccess = 'websocket' === this.transport.name),
            this.emitReserved('open'),
            this.flush(),
            'open' === this.readyState && this.opts.upgrade && this.transport.pause)
          ) {
            let t = 0,
              e = this.upgrades.length
            for (; t < e; t++) this.probe(this.upgrades[t])
          }
        }
        onPacket(t) {
          if (
            'opening' === this.readyState ||
            'open' === this.readyState ||
            'closing' === this.readyState
          )
            switch ((this.emitReserved('packet', t), this.emitReserved('heartbeat'), t.type)) {
              case 'open':
                this.onHandshake(JSON.parse(t.data))
                break
              case 'ping':
                this.resetPingTimeout(),
                  this.sendPacket('pong'),
                  this.emitReserved('ping'),
                  this.emitReserved('pong')
                break
              case 'error':
                let e = Error('server error')
                ;(e.code = t.data), this.onError(e)
                break
              case 'message':
                this.emitReserved('data', t.data), this.emitReserved('message', t.data)
            }
        }
        onHandshake(t) {
          this.emitReserved('handshake', t),
            (this.id = t.sid),
            (this.transport.query.sid = t.sid),
            (this.upgrades = this.filterUpgrades(t.upgrades)),
            (this.pingInterval = t.pingInterval),
            (this.pingTimeout = t.pingTimeout),
            (this.maxPayload = t.maxPayload),
            this.onOpen(),
            'closed' !== this.readyState && this.resetPingTimeout()
        }
        resetPingTimeout() {
          this.clearTimeoutFn(this.pingTimeoutTimer),
            (this.pingTimeoutTimer = this.setTimeoutFn(() => {
              this.onClose('ping timeout')
            }, this.pingInterval + this.pingTimeout)),
            this.opts.autoUnref && this.pingTimeoutTimer.unref()
        }
        onDrain() {
          this.writeBuffer.splice(0, this.prevBufferLen),
            (this.prevBufferLen = 0),
            0 === this.writeBuffer.length ? this.emitReserved('drain') : this.flush()
        }
        flush() {
          if (
            'closed' !== this.readyState &&
            this.transport.writable &&
            !this.upgrading &&
            this.writeBuffer.length
          ) {
            let t = this.getWritablePackets()
            this.transport.send(t), (this.prevBufferLen = t.length), this.emitReserved('flush')
          }
        }
        getWritablePackets() {
          let t =
            this.maxPayload && 'polling' === this.transport.name && this.writeBuffer.length > 1
          if (!t) return this.writeBuffer
          let e = 1
          for (let r = 0; r < this.writeBuffer.length; r++) {
            let n = this.writeBuffer[r].data
            if (
              (n &&
                (e +=
                  'string' == typeof n
                    ? (function (t) {
                        let e = 0,
                          r = 0
                        for (let n = 0, i = t.length; n < i; n++)
                          (e = t.charCodeAt(n)) < 128
                            ? (r += 1)
                            : e < 2048
                            ? (r += 2)
                            : e < 55296 || e >= 57344
                            ? (r += 3)
                            : (n++, (r += 4))
                        return r
                      })(n)
                    : Math.ceil(1.33 * (n.byteLength || n.size))),
              r > 0 && e > this.maxPayload)
            )
              return this.writeBuffer.slice(0, r)
            e += 2
          }
          return this.writeBuffer
        }
        write(t, e, r) {
          return this.sendPacket('message', t, e, r), this
        }
        send(t, e, r) {
          return this.sendPacket('message', t, e, r), this
        }
        sendPacket(t, e, r, n) {
          if (
            ('function' == typeof e && ((n = e), (e = void 0)),
            'function' == typeof r && ((n = r), (r = null)),
            'closing' === this.readyState || 'closed' === this.readyState)
          )
            return
          ;(r = r || {}).compress = !1 !== r.compress
          let i = { type: t, data: e, options: r }
          this.emitReserved('packetCreate', i),
            this.writeBuffer.push(i),
            n && this.once('flush', n),
            this.flush()
        }
        close() {
          let t = () => {
              this.onClose('forced close'), this.transport.close()
            },
            e = () => {
              this.off('upgrade', e), this.off('upgradeError', e), t()
            },
            r = () => {
              this.once('upgrade', e), this.once('upgradeError', e)
            }
          return (
            ('opening' === this.readyState || 'open' === this.readyState) &&
              ((this.readyState = 'closing'),
              this.writeBuffer.length
                ? this.once('drain', () => {
                    this.upgrading ? r() : t()
                  })
                : this.upgrading
                ? r()
                : t()),
            this
          )
        }
        onError(t) {
          ;(te.priorWebsocketSuccess = !1),
            this.emitReserved('error', t),
            this.onClose('transport error', t)
        }
        onClose(t, e) {
          ;('opening' === this.readyState ||
            'open' === this.readyState ||
            'closing' === this.readyState) &&
            (this.clearTimeoutFn(this.pingTimeoutTimer),
            this.transport.removeAllListeners('close'),
            this.transport.close(),
            this.transport.removeAllListeners(),
            'function' == typeof removeEventListener &&
              (removeEventListener('beforeunload', this.beforeunloadEventListener, !1),
              removeEventListener('offline', this.offlineEventListener, !1)),
            (this.readyState = 'closed'),
            (this.id = null),
            this.emitReserved('close', t, e),
            (this.writeBuffer = []),
            (this.prevBufferLen = 0))
        }
        filterUpgrades(t) {
          let e = [],
            r = 0,
            n = t.length
          for (; r < n; r++) ~this.transports.indexOf(t[r]) && e.push(t[r])
          return e
        }
      }
      ;(te.protocol = 4), te.protocol
      let tr = 'function' == typeof ArrayBuffer,
        tn = (t) =>
          'function' == typeof ArrayBuffer.isView
            ? ArrayBuffer.isView(t)
            : t.buffer instanceof ArrayBuffer,
        ti = Object.prototype.toString,
        ts =
          'function' == typeof Blob ||
          ('undefined' != typeof Blob && '[object BlobConstructor]' === ti.call(Blob)),
        to =
          'function' == typeof File ||
          ('undefined' != typeof File && '[object FileConstructor]' === ti.call(File))
      function th(t) {
        return (
          (tr && (t instanceof ArrayBuffer || tn(t))) ||
          (ts && t instanceof Blob) ||
          (to && t instanceof File)
        )
      }
      let ta = 5
      ;((n = i || (i = {}))[(n.CONNECT = 0)] = 'CONNECT'),
        (n[(n.DISCONNECT = 1)] = 'DISCONNECT'),
        (n[(n.EVENT = 2)] = 'EVENT'),
        (n[(n.ACK = 3)] = 'ACK'),
        (n[(n.CONNECT_ERROR = 4)] = 'CONNECT_ERROR'),
        (n[(n.BINARY_EVENT = 5)] = 'BINARY_EVENT'),
        (n[(n.BINARY_ACK = 6)] = 'BINARY_ACK')
      class tu {
        constructor(t) {
          this.replacer = t
        }
        encode(t) {
          return (t.type === i.EVENT || t.type === i.ACK) &&
            (function t(e, r) {
              if (!e || 'object' != typeof e) return !1
              if (Array.isArray(e)) {
                for (let n = 0, i = e.length; n < i; n++) if (t(e[n])) return !0
                return !1
              }
              if (th(e)) return !0
              if (e.toJSON && 'function' == typeof e.toJSON && 1 == arguments.length)
                return t(e.toJSON(), !0)
              for (let s in e) if (Object.prototype.hasOwnProperty.call(e, s) && t(e[s])) return !0
              return !1
            })(t)
            ? ((t.type = t.type === i.EVENT ? i.BINARY_EVENT : i.BINARY_ACK),
              this.encodeAsBinary(t))
            : [this.encodeAsString(t)]
        }
        encodeAsString(t) {
          let e = '' + t.type
          return (
            (t.type === i.BINARY_EVENT || t.type === i.BINARY_ACK) && (e += t.attachments + '-'),
            t.nsp && '/' !== t.nsp && (e += t.nsp + ','),
            null != t.id && (e += t.id),
            null != t.data && (e += JSON.stringify(t.data, this.replacer)),
            e
          )
        }
        encodeAsBinary(t) {
          let e = (function (t) {
              let e = [],
                r = t.data,
                n = t
              return (
                (n.data = (function t(e, r) {
                  if (!e) return e
                  if (th(e)) {
                    let n = { _placeholder: !0, num: r.length }
                    return r.push(e), n
                  }
                  if (Array.isArray(e)) {
                    let i = Array(e.length)
                    for (let s = 0; s < e.length; s++) i[s] = t(e[s], r)
                    return i
                  }
                  if ('object' == typeof e && !(e instanceof Date)) {
                    let o = {}
                    for (let h in e)
                      Object.prototype.hasOwnProperty.call(e, h) && (o[h] = t(e[h], r))
                    return o
                  }
                  return e
                })(r, e)),
                (n.attachments = e.length),
                { packet: n, buffers: e }
              )
            })(t),
            r = this.encodeAsString(e.packet),
            n = e.buffers
          return n.unshift(r), n
        }
      }
      class tc extends B {
        constructor(t) {
          super(), (this.reviver = t)
        }
        add(t) {
          let e
          if ('string' == typeof t) {
            if (this.reconstructor) throw Error('got plaintext data when reconstructing a packet')
            ;(e = this.decodeString(t)).type === i.BINARY_EVENT || e.type === i.BINARY_ACK
              ? ((this.reconstructor = new tf(e)),
                0 === e.attachments && super.emitReserved('decoded', e))
              : super.emitReserved('decoded', e)
          } else if (th(t) || t.base64) {
            if (this.reconstructor)
              (e = this.reconstructor.takeBinaryData(t)) &&
                ((this.reconstructor = null), super.emitReserved('decoded', e))
            else throw Error('got binary data when not reconstructing a packet')
          } else throw Error('Unknown type: ' + t)
        }
        decodeString(t) {
          let e = 0,
            r = { type: Number(t.charAt(0)) }
          if (void 0 === i[r.type]) throw Error('unknown packet type ' + r.type)
          if (r.type === i.BINARY_EVENT || r.type === i.BINARY_ACK) {
            let n = e + 1
            for (; '-' !== t.charAt(++e) && e != t.length; );
            let s = t.substring(n, e)
            if (s != Number(s) || '-' !== t.charAt(e)) throw Error('Illegal attachments')
            r.attachments = Number(s)
          }
          if ('/' === t.charAt(e + 1)) {
            let o = e + 1
            for (; ++e; ) {
              let h = t.charAt(e)
              if (',' === h || e === t.length) break
            }
            r.nsp = t.substring(o, e)
          } else r.nsp = '/'
          let a = t.charAt(e + 1)
          if ('' !== a && Number(a) == a) {
            let u = e + 1
            for (; ++e; ) {
              let c = t.charAt(e)
              if (null == c || Number(c) != c) {
                --e
                break
              }
              if (e === t.length) break
            }
            r.id = Number(t.substring(u, e + 1))
          }
          if (t.charAt(++e)) {
            let f = this.tryParse(t.substr(e))
            if (tc.isPayloadValid(r.type, f)) r.data = f
            else throw Error('invalid payload')
          }
          return r
        }
        tryParse(t) {
          try {
            return JSON.parse(t, this.reviver)
          } catch (e) {
            return !1
          }
        }
        static isPayloadValid(t, e) {
          switch (t) {
            case i.CONNECT:
              return 'object' == typeof e
            case i.DISCONNECT:
              return void 0 === e
            case i.CONNECT_ERROR:
              return 'string' == typeof e || 'object' == typeof e
            case i.EVENT:
            case i.BINARY_EVENT:
              return Array.isArray(e) && e.length > 0
            case i.ACK:
            case i.BINARY_ACK:
              return Array.isArray(e)
          }
        }
        destroy() {
          this.reconstructor && this.reconstructor.finishedReconstruction()
        }
      }
      class tf {
        constructor(t) {
          ;(this.packet = t), (this.buffers = []), (this.reconPack = t)
        }
        takeBinaryData(t) {
          if ((this.buffers.push(t), this.buffers.length === this.reconPack.attachments)) {
            var e, r
            let n =
              ((e = this.reconPack),
              (r = this.buffers),
              (e.data = (function t(e, r) {
                if (!e) return e
                if (e && !0 === e._placeholder) {
                  let n = 'number' == typeof e.num && e.num >= 0 && e.num < r.length
                  if (n) return r[e.num]
                  throw Error('illegal attachments')
                }
                if (Array.isArray(e)) for (let i = 0; i < e.length; i++) e[i] = t(e[i], r)
                else if ('object' == typeof e)
                  for (let s in e) Object.prototype.hasOwnProperty.call(e, s) && (e[s] = t(e[s], r))
                return e
              })(e.data, r)),
              (e.attachments = void 0),
              e)
            return this.finishedReconstruction(), n
          }
          return null
        }
        finishedReconstruction() {
          ;(this.reconPack = null), (this.buffers = [])
        }
      }
      function tp(t, e, r) {
        return (
          t.on(e, r),
          function () {
            t.off(e, r)
          }
        )
      }
      let tl = Object.freeze({
        connect: 1,
        connect_error: 1,
        disconnect: 1,
        disconnecting: 1,
        newListener: 1,
        removeListener: 1,
      })
      class td extends B {
        constructor(t, e, r) {
          super(),
            (this.connected = !1),
            (this.receiveBuffer = []),
            (this.sendBuffer = []),
            (this.ids = 0),
            (this.acks = {}),
            (this.flags = {}),
            (this.io = t),
            (this.nsp = e),
            r && r.auth && (this.auth = r.auth),
            this.io._autoConnect && this.open()
        }
        get disconnected() {
          return !this.connected
        }
        subEvents() {
          if (this.subs) return
          let t = this.io
          this.subs = [
            tp(t, 'open', this.onopen.bind(this)),
            tp(t, 'packet', this.onpacket.bind(this)),
            tp(t, 'error', this.onerror.bind(this)),
            tp(t, 'close', this.onclose.bind(this)),
          ]
        }
        get active() {
          return !!this.subs
        }
        connect() {
          return (
            this.connected ||
              (this.subEvents(),
              this.io._reconnecting || this.io.open(),
              'open' === this.io._readyState && this.onopen()),
            this
          )
        }
        open() {
          return this.connect()
        }
        send(...t) {
          return t.unshift('message'), this.emit.apply(this, t), this
        }
        emit(t, ...e) {
          if (tl.hasOwnProperty(t)) throw Error('"' + t.toString() + '" is a reserved event name')
          e.unshift(t)
          let r = { type: i.EVENT, data: e }
          if (
            ((r.options = {}),
            (r.options.compress = !1 !== this.flags.compress),
            'function' == typeof e[e.length - 1])
          ) {
            let n = this.ids++,
              s = e.pop()
            this._registerAckCallback(n, s), (r.id = n)
          }
          let o = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable,
            h = this.flags.volatile && (!o || !this.connected)
          return (
            h ||
              (this.connected
                ? (this.notifyOutgoingListeners(r), this.packet(r))
                : this.sendBuffer.push(r)),
            (this.flags = {}),
            this
          )
        }
        _registerAckCallback(t, e) {
          let r = this.flags.timeout
          if (void 0 === r) {
            this.acks[t] = e
            return
          }
          let n = this.io.setTimeoutFn(() => {
            delete this.acks[t]
            for (let r = 0; r < this.sendBuffer.length; r++)
              this.sendBuffer[r].id === t && this.sendBuffer.splice(r, 1)
            e.call(this, Error('operation has timed out'))
          }, r)
          this.acks[t] = (...t) => {
            this.io.clearTimeoutFn(n), e.apply(this, [null, ...t])
          }
        }
        packet(t) {
          ;(t.nsp = this.nsp), this.io._packet(t)
        }
        onopen() {
          'function' == typeof this.auth
            ? this.auth((t) => {
                this.packet({ type: i.CONNECT, data: t })
              })
            : this.packet({ type: i.CONNECT, data: this.auth })
        }
        onerror(t) {
          this.connected || this.emitReserved('connect_error', t)
        }
        onclose(t, e) {
          ;(this.connected = !1), delete this.id, this.emitReserved('disconnect', t, e)
        }
        onpacket(t) {
          let e = t.nsp === this.nsp
          if (e)
            switch (t.type) {
              case i.CONNECT:
                if (t.data && t.data.sid) {
                  let r = t.data.sid
                  this.onconnect(r)
                } else
                  this.emitReserved(
                    'connect_error',
                    Error(
                      'It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)'
                    )
                  )
                break
              case i.EVENT:
              case i.BINARY_EVENT:
                this.onevent(t)
                break
              case i.ACK:
              case i.BINARY_ACK:
                this.onack(t)
                break
              case i.DISCONNECT:
                this.ondisconnect()
                break
              case i.CONNECT_ERROR:
                this.destroy()
                let n = Error(t.data.message)
                ;(n.data = t.data.data), this.emitReserved('connect_error', n)
            }
        }
        onevent(t) {
          let e = t.data || []
          null != t.id && e.push(this.ack(t.id)),
            this.connected ? this.emitEvent(e) : this.receiveBuffer.push(Object.freeze(e))
        }
        emitEvent(t) {
          if (this._anyListeners && this._anyListeners.length) {
            let e = this._anyListeners.slice()
            for (let r of e) r.apply(this, t)
          }
          super.emit.apply(this, t)
        }
        ack(t) {
          let e = this,
            r = !1
          return function (...n) {
            r || ((r = !0), e.packet({ type: i.ACK, id: t, data: n }))
          }
        }
        onack(t) {
          let e = this.acks[t.id]
          'function' == typeof e && (e.apply(this, t.data), delete this.acks[t.id])
        }
        onconnect(t) {
          ;(this.id = t), (this.connected = !0), this.emitBuffered(), this.emitReserved('connect')
        }
        emitBuffered() {
          this.receiveBuffer.forEach((t) => this.emitEvent(t)),
            (this.receiveBuffer = []),
            this.sendBuffer.forEach((t) => {
              this.notifyOutgoingListeners(t), this.packet(t)
            }),
            (this.sendBuffer = [])
        }
        ondisconnect() {
          this.destroy(), this.onclose('io server disconnect')
        }
        destroy() {
          this.subs && (this.subs.forEach((t) => t()), (this.subs = void 0)), this.io._destroy(this)
        }
        disconnect() {
          return (
            this.connected && this.packet({ type: i.DISCONNECT }),
            this.destroy(),
            this.connected && this.onclose('io client disconnect'),
            this
          )
        }
        close() {
          return this.disconnect()
        }
        compress(t) {
          return (this.flags.compress = t), this
        }
        get volatile() {
          return (this.flags.volatile = !0), this
        }
        timeout(t) {
          return (this.flags.timeout = t), this
        }
        onAny(t) {
          return (this._anyListeners = this._anyListeners || []), this._anyListeners.push(t), this
        }
        prependAny(t) {
          return (
            (this._anyListeners = this._anyListeners || []), this._anyListeners.unshift(t), this
          )
        }
        offAny(t) {
          if (!this._anyListeners) return this
          if (t) {
            let e = this._anyListeners
            for (let r = 0; r < e.length; r++)
              if (t === e[r]) {
                e.splice(r, 1)
                break
              }
          } else this._anyListeners = []
          return this
        }
        listenersAny() {
          return this._anyListeners || []
        }
        onAnyOutgoing(t) {
          return (
            (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
            this._anyOutgoingListeners.push(t),
            this
          )
        }
        prependAnyOutgoing(t) {
          return (
            (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
            this._anyOutgoingListeners.unshift(t),
            this
          )
        }
        offAnyOutgoing(t) {
          if (!this._anyOutgoingListeners) return this
          if (t) {
            let e = this._anyOutgoingListeners
            for (let r = 0; r < e.length; r++)
              if (t === e[r]) {
                e.splice(r, 1)
                break
              }
          } else this._anyOutgoingListeners = []
          return this
        }
        listenersAnyOutgoing() {
          return this._anyOutgoingListeners || []
        }
        notifyOutgoingListeners(t) {
          if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            let e = this._anyOutgoingListeners.slice()
            for (let r of e) r.apply(this, t.data)
          }
        }
      }
      function ty(t) {
        ;(t = t || {}),
          (this.ms = t.min || 100),
          (this.max = t.max || 1e4),
          (this.factor = t.factor || 2),
          (this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0),
          (this.attempts = 0)
      }
      ;(ty.prototype.duration = function () {
        var t = this.ms * Math.pow(this.factor, this.attempts++)
        if (this.jitter) {
          var e = Math.random(),
            r = Math.floor(e * this.jitter * t)
          t = (1 & Math.floor(10 * e)) == 0 ? t - r : t + r
        }
        return 0 | Math.min(t, this.max)
      }),
        (ty.prototype.reset = function () {
          this.attempts = 0
        }),
        (ty.prototype.setMin = function (t) {
          this.ms = t
        }),
        (ty.prototype.setMax = function (t) {
          this.max = t
        }),
        (ty.prototype.setJitter = function (t) {
          this.jitter = t
        })
      class tg extends B {
        constructor(t, e) {
          var r
          super(),
            (this.nsps = {}),
            (this.subs = []),
            t && 'object' == typeof t && ((e = t), (t = void 0)),
            ((e = e || {}).path = e.path || '/socket.io'),
            (this.opts = e),
            C(this, e),
            this.reconnection(!1 !== e.reconnection),
            this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0),
            this.reconnectionDelay(e.reconnectionDelay || 1e3),
            this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3),
            this.randomizationFactor(
              null !== (r = e.randomizationFactor) && void 0 !== r ? r : 0.5
            ),
            (this.backoff = new ty({
              min: this.reconnectionDelay(),
              max: this.reconnectionDelayMax(),
              jitter: this.randomizationFactor(),
            })),
            this.timeout(null == e.timeout ? 2e4 : e.timeout),
            (this._readyState = 'closed'),
            (this.uri = t)
          let n = e.parser || s
          ;(this.encoder = new n.Encoder()),
            (this.decoder = new n.Decoder()),
            (this._autoConnect = !1 !== e.autoConnect),
            this._autoConnect && this.open()
        }
        reconnection(t) {
          return arguments.length ? ((this._reconnection = !!t), this) : this._reconnection
        }
        reconnectionAttempts(t) {
          return void 0 === t
            ? this._reconnectionAttempts
            : ((this._reconnectionAttempts = t), this)
        }
        reconnectionDelay(t) {
          var e
          return void 0 === t
            ? this._reconnectionDelay
            : ((this._reconnectionDelay = t),
              null === (e = this.backoff) || void 0 === e || e.setMin(t),
              this)
        }
        randomizationFactor(t) {
          var e
          return void 0 === t
            ? this._randomizationFactor
            : ((this._randomizationFactor = t),
              null === (e = this.backoff) || void 0 === e || e.setJitter(t),
              this)
        }
        reconnectionDelayMax(t) {
          var e
          return void 0 === t
            ? this._reconnectionDelayMax
            : ((this._reconnectionDelayMax = t),
              null === (e = this.backoff) || void 0 === e || e.setMax(t),
              this)
        }
        timeout(t) {
          return arguments.length ? ((this._timeout = t), this) : this._timeout
        }
        maybeReconnectOnOpen() {
          !this._reconnecting &&
            this._reconnection &&
            0 === this.backoff.attempts &&
            this.reconnect()
        }
        open(t) {
          if (~this._readyState.indexOf('open')) return this
          this.engine = new te(this.uri, this.opts)
          let e = this.engine,
            r = this
          ;(this._readyState = 'opening'), (this.skipReconnect = !1)
          let n = tp(e, 'open', function () {
              r.onopen(), t && t()
            }),
            i = tp(e, 'error', (e) => {
              r.cleanup(),
                (r._readyState = 'closed'),
                this.emitReserved('error', e),
                t ? t(e) : r.maybeReconnectOnOpen()
            })
          if (!1 !== this._timeout) {
            let s = this._timeout
            0 === s && n()
            let o = this.setTimeoutFn(() => {
              n(), e.close(), e.emit('error', Error('timeout'))
            }, s)
            this.opts.autoUnref && o.unref(),
              this.subs.push(function () {
                clearTimeout(o)
              })
          }
          return this.subs.push(n), this.subs.push(i), this
        }
        connect(t) {
          return this.open(t)
        }
        onopen() {
          this.cleanup(), (this._readyState = 'open'), this.emitReserved('open')
          let t = this.engine
          this.subs.push(
            tp(t, 'ping', this.onping.bind(this)),
            tp(t, 'data', this.ondata.bind(this)),
            tp(t, 'error', this.onerror.bind(this)),
            tp(t, 'close', this.onclose.bind(this)),
            tp(this.decoder, 'decoded', this.ondecoded.bind(this))
          )
        }
        onping() {
          this.emitReserved('ping')
        }
        ondata(t) {
          try {
            this.decoder.add(t)
          } catch (e) {
            this.onclose('parse error', e)
          }
        }
        ondecoded(t) {
          J(() => {
            this.emitReserved('packet', t)
          }, this.setTimeoutFn)
        }
        onerror(t) {
          this.emitReserved('error', t)
        }
        socket(t, e) {
          let r = this.nsps[t]
          return r || ((r = new td(this, t, e)), (this.nsps[t] = r)), r
        }
        _destroy(t) {
          let e = Object.keys(this.nsps)
          for (let r of e) {
            let n = this.nsps[r]
            if (n.active) return
          }
          this._close()
        }
        _packet(t) {
          let e = this.encoder.encode(t)
          for (let r = 0; r < e.length; r++) this.engine.write(e[r], t.options)
        }
        cleanup() {
          this.subs.forEach((t) => t()), (this.subs.length = 0), this.decoder.destroy()
        }
        _close() {
          ;(this.skipReconnect = !0),
            (this._reconnecting = !1),
            this.onclose('forced close'),
            this.engine && this.engine.close()
        }
        disconnect() {
          return this._close()
        }
        onclose(t, e) {
          this.cleanup(),
            this.backoff.reset(),
            (this._readyState = 'closed'),
            this.emitReserved('close', t, e),
            this._reconnection && !this.skipReconnect && this.reconnect()
        }
        reconnect() {
          if (this._reconnecting || this.skipReconnect) return this
          let t = this
          if (this.backoff.attempts >= this._reconnectionAttempts)
            this.backoff.reset(), this.emitReserved('reconnect_failed'), (this._reconnecting = !1)
          else {
            let e = this.backoff.duration()
            this._reconnecting = !0
            let r = this.setTimeoutFn(() => {
              !t.skipReconnect &&
                (this.emitReserved('reconnect_attempt', t.backoff.attempts),
                t.skipReconnect ||
                  t.open((e) => {
                    e
                      ? ((t._reconnecting = !1),
                        t.reconnect(),
                        this.emitReserved('reconnect_error', e))
                      : t.onreconnect()
                  }))
            }, e)
            this.opts.autoUnref && r.unref(),
              this.subs.push(function () {
                clearTimeout(r)
              })
          }
        }
        onreconnect() {
          let t = this.backoff.attempts
          ;(this._reconnecting = !1), this.backoff.reset(), this.emitReserved('reconnect', t)
        }
      }
      let tm = {}
      function tb(t, e) {
        let r
        'object' == typeof t && ((e = t), (t = void 0)), (e = e || {})
        let n = (function (t, e = '', r) {
            let n = t
            ;(r = r || ('undefined' != typeof location && location)),
              null == t && (t = r.protocol + '//' + r.host),
              'string' == typeof t &&
                ('/' === t.charAt(0) && (t = '/' === t.charAt(1) ? r.protocol + t : r.host + t),
                /^(https?|wss?):\/\//.test(t) ||
                  (t = void 0 !== r ? r.protocol + '//' + t : 'https://' + t),
                (n = tt(t))),
              !n.port &&
                (/^(http|ws)$/.test(n.protocol)
                  ? (n.port = '80')
                  : /^(http|ws)s$/.test(n.protocol) && (n.port = '443')),
              (n.path = n.path || '/')
            let i = -1 !== n.host.indexOf(':'),
              s = i ? '[' + n.host + ']' : n.host
            return (
              (n.id = n.protocol + '://' + s + ':' + n.port + e),
              (n.href = n.protocol + '://' + s + (r && r.port === n.port ? '' : ':' + n.port)),
              n
            )
          })(t, e.path || '/socket.io'),
          i = n.source,
          s = n.id,
          o = n.path,
          h = tm[s] && o in tm[s].nsps,
          a = e.forceNew || e['force new connection'] || !1 === e.multiplex || h
        return (
          a ? (r = new tg(i, e)) : (tm[s] || (tm[s] = new tg(i, e)), (r = tm[s])),
          n.query && !e.query && (e.query = n.queryKey),
          r.socket(n.path, e)
        )
      }
      Object.assign(tb, { Manager: tg, Socket: td, io: tb, connect: tb })
    },
  },
])
