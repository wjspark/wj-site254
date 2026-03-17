! function(e, t) {
    "function" == typeof define && define.amd ? define([], t) : "object" == typeof module && "undefined" != typeof exports ? module.exports = t() : e.Papa = t()
}(this, function moduleFactory() {
    "use strict";
    var e = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== e ? e : {};
    var t = !e.document && !!e.postMessage,
        r = t && /blob:/i.test((e.location || {}).protocol),
        i = {},
        n = 0,
        s = window.Papa = {};
    if (s.parse = function(t, r) {
            var a = (r = r || {}).dynamicTyping || !1;
            isFunction(a) && (r.dynamicTypingFunction = a, a = {});
            if (r.dynamicTyping = a, r.transform = !!isFunction(r.transform) && r.transform, r.worker && s.WORKERS_SUPPORTED) {
                var o = function() {
                    if (!s.WORKERS_SUPPORTED) return !1;
                    var t = (a = e.URL || e.webkitURL || null, o = moduleFactory.toString(), s.BLOB_URL || (s.BLOB_URL = a.createObjectURL(new Blob(["(", o, ")();"], {
                            type: "text/javascript"
                        })))),
                        r = new e.Worker(t);
                    var a, o;
                    return r.onmessage = mainThreadReceivedMessage, r.id = n++, i[r.id] = r, r
                }();
                return o.userStep = r.step, o.userChunk = r.chunk, o.userComplete = r.complete, o.userError = r.error, r.step = isFunction(r.step), r.chunk = isFunction(r.chunk), r.complete = isFunction(r.complete), r.error = isFunction(r.error), delete r.worker, void o.postMessage({
                    input: t,
                    config: r,
                    workerId: o.id
                })
            }
            var u = null;
            if (t === s.NODE_STREAM_INPUT && "undefined" == typeof PAPA_BROWSER_CONTEXT) return (u = new DuplexStreamStreamer(r)).getStream();
            "string" == typeof t ? u = r.download ? new NetworkStreamer(r) : new StringStreamer(r) : !0 === t.readable && isFunction(t.read) && isFunction(t.on) ? u = new ReadableStreamStreamer(r) : (e.File && t instanceof File || t instanceof Object) && (u = new FileStreamer(r));
            return u.stream(t)
        }, s.unparse = function(e, t) {
            var r = !1,
                i = !0,
                n = ",",
                a = "\r\n",
                o = '"',
                u = o + o,
                h = !1,
                d = null,
                c = !1;
            ! function() {
                if ("object" != typeof t) return;
                "string" != typeof t.delimiter || s.BAD_DELIMITERS.filter(function(e) {
                    return -1 !== t.delimiter.indexOf(e)
                }).length || (n = t.delimiter);
                ("boolean" == typeof t.quotes || "function" == typeof t.quotes || Array.isArray(t.quotes)) && (r = t.quotes);
                "boolean" != typeof t.skipEmptyLines && "string" != typeof t.skipEmptyLines || (h = t.skipEmptyLines);
                "string" == typeof t.newline && (a = t.newline);
                "string" == typeof t.quoteChar && (o = t.quoteChar);
                "boolean" == typeof t.header && (i = t.header);
                if (Array.isArray(t.columns)) {
                    if (0 === t.columns.length) throw new Error("Option columns is empty");
                    d = t.columns
                }
                void 0 !== t.escapeChar && (u = t.escapeChar + o);
                "boolean" == typeof t.escapeFormulae && (c = t.escapeFormulae)
            }();
            var l = new RegExp(escapeRegExp(o), "g");
            "string" == typeof e && (e = JSON.parse(e));
            if (Array.isArray(e)) {
                if (!e.length || Array.isArray(e[0])) return serialize(null, e, h);
                if ("object" == typeof e[0]) return serialize(d || objectKeys(e[0]), e, h)
            } else if ("object" == typeof e) return "string" == typeof e.data && (e.data = JSON.parse(e.data)), Array.isArray(e.data) && (e.fields || (e.fields = e.meta && e.meta.fields), e.fields || (e.fields = Array.isArray(e.data[0]) ? e.fields : objectKeys(e.data[0])), Array.isArray(e.data[0]) || "object" == typeof e.data[0] || (e.data = [e.data])), serialize(e.fields || [], e.data || [], h);
            throw new Error("Unable to serialize unrecognized input");

            function objectKeys(e) {
                if ("object" != typeof e) return [];
                var t = [];
                for (var r in e) t.push(r);
                return t
            }

            function serialize(e, t, r) {
                var s = "";
                "string" == typeof e && (e = JSON.parse(e)), "string" == typeof t && (t = JSON.parse(t));
                var o = Array.isArray(e) && e.length > 0,
                    u = !Array.isArray(t[0]);
                if (o && i) {
                    for (var h = 0; h < e.length; h++) h > 0 && (s += n), s += safe(e[h], h);
                    t.length > 0 && (s += a)
                }
                for (var d = 0; d < t.length; d++) {
                    var c = o ? e.length : t[d].length,
                        l = !1,
                        f = o ? 0 === Object.keys(t[d]).length : 0 === t[d].length;
                    if (r && !o && (l = "greedy" === r ? "" === t[d].join("").trim() : 1 === t[d].length && 0 === t[d][0].length), "greedy" === r && o) {
                        for (var p = [], m = 0; m < c; m++) {
                            var g = u ? e[m] : m;
                            p.push(t[d][g])
                        }
                        l = "" === p.join("").trim()
                    }
                    if (!l) {
                        for (var _ = 0; _ < c; _++) {
                            _ > 0 && !f && (s += n);
                            var y = o && u ? e[_] : _;
                            s += safe(t[d][y], _)
                        }
                        d < t.length - 1 && (!r || c > 0 && !f) && (s += a)
                    }
                }
                return s
            }

            function safe(e, t) {
                if (null == e) return "";
                if (e.constructor === Date) return JSON.stringify(e).slice(1, 25);
                !0 === c && "string" == typeof e && null !== e.match(/^[=+\-@].*$/) && (e = "'" + e);
                var i = e.toString().replace(l, u),
                    a = "boolean" == typeof r && r || "function" == typeof r && r(e, t) || Array.isArray(r) && r[t] || function(e, t) {
                        for (var r = 0; r < t.length; r++)
                            if (e.indexOf(t[r]) > -1) return !0;
                        return !1
                    }(i, s.BAD_DELIMITERS) || i.indexOf(n) > -1 || " " === i.charAt(0) || " " === i.charAt(i.length - 1);
                return a ? o + i + o : i
            }
        }, s.RECORD_SEP = String.fromCharCode(30), s.UNIT_SEP = String.fromCharCode(31), s.BYTE_ORDER_MARK = "\ufeff", s.BAD_DELIMITERS = ["\r", "\n", '"', s.BYTE_ORDER_MARK], s.WORKERS_SUPPORTED = !t && !!e.Worker, s.NODE_STREAM_INPUT = 1, s.LocalChunkSize = 10485760, s.RemoteChunkSize = 5242880, s.DefaultDelimiter = ",", s.Parser = Parser, s.ParserHandle = ParserHandle, s.NetworkStreamer = NetworkStreamer, s.FileStreamer = FileStreamer, s.StringStreamer = StringStreamer, s.ReadableStreamStreamer = ReadableStreamStreamer, "undefined" == typeof PAPA_BROWSER_CONTEXT && (s.DuplexStreamStreamer = DuplexStreamStreamer), e.jQuery) {
        var a = e.jQuery;
        a.fn.parse = function(t) {
            var r = t.config || {},
                i = [];
            return this.each(function(t) {
                if (!("INPUT" === a(this).prop("tagName").toUpperCase() && "file" === a(this).attr("type").toLowerCase() && e.FileReader) || !this.files || 0 === this.files.length) return !0;
                for (var n = 0; n < this.files.length; n++) i.push({
                    file: this.files[n],
                    inputElem: this,
                    instanceConfig: a.extend({}, r)
                })
            }), parseNextFile(), this;

            function parseNextFile() {
                if (0 !== i.length) {
                    var e, r, n, o, u = i[0];
                    if (isFunction(t.before)) {
                        var h = t.before(u.file, u.inputElem);
                        if ("object" == typeof h) {
                            if ("abort" === h.action) return e = "AbortError", r = u.file, n = u.inputElem, o = h.reason, void(isFunction(t.error) && t.error({
                                name: e
                            }, r, n, o));
                            if ("skip" === h.action) return void fileComplete();
                            "object" == typeof h.config && (u.instanceConfig = a.extend(u.instanceConfig, h.config))
                        } else if ("skip" === h) return void fileComplete()
                    }
                    var d = u.instanceConfig.complete;
                    u.instanceConfig.complete = function(e) {
                        isFunction(d) && d(e, u.file, u.inputElem), fileComplete()
                    }, s.parse(u.file, u.instanceConfig)
                } else isFunction(t.complete) && t.complete()
            }

            function fileComplete() {
                i.splice(0, 1), parseNextFile()
            }
        }
    }

    function ChunkStreamer(t) {
        this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = {
                data: [],
                errors: [],
                meta: {}
            },
            function(e) {
                var t = copy(e);
                t.chunkSize = parseInt(t.chunkSize), e.step || e.chunk || (t.chunkSize = null);
                this._handle = new ParserHandle(t), this._handle.streamer = this, this._config = t
            }.call(this, t), this.parseChunk = function(t, i) {
                if (this.isFirstChunk && isFunction(this._config.beforeFirstChunk)) {
                    var n = this._config.beforeFirstChunk(t);
                    void 0 !== n && (t = n)
                }
                this.isFirstChunk = !1, this._halted = !1;
                var a = this._partialLine + t;
                this._partialLine = "";
                var o = this._handle.parse(a, this._baseIndex, !this._finished);
                if (!this._handle.paused() && !this._handle.aborted()) {
                    var u = o.meta.cursor;
                    this._finished || (this._partialLine = a.substring(u - this._baseIndex), this._baseIndex = u), o && o.data && (this._rowCount += o.data.length);
                    var h = this._finished || this._config.preview && this._rowCount >= this._config.preview;
                    if (r) e.postMessage({
                        results: o,
                        workerId: s.WORKER_ID,
                        finished: h
                    });
                    else if (isFunction(this._config.chunk) && !i) {
                        if (this._config.chunk(o, this._handle), this._handle.paused() || this._handle.aborted()) return void(this._halted = !0);
                        o = void 0, this._completeResults = void 0
                    }
                    return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(o.data), this._completeResults.errors = this._completeResults.errors.concat(o.errors), this._completeResults.meta = o.meta), this._completed || !h || !isFunction(this._config.complete) || o && o.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), h || o && o.meta.paused || this._nextChunk(), o
                }
                this._halted = !0
            }, this._sendError = function(t) {
                isFunction(this._config.error) ? this._config.error(t) : r && this._config.error && e.postMessage({
                    workerId: s.WORKER_ID,
                    error: t,
                    finished: !1
                })
            }
    }

    function NetworkStreamer(e) {
        var r;
        (e = e || {}).chunkSize || (e.chunkSize = s.RemoteChunkSize), ChunkStreamer.call(this, e), this._nextChunk = t ? function() {
            this._readChunk(), this._chunkLoaded()
        } : function() {
            this._readChunk()
        }, this.stream = function(e) {
            this._input = e, this._nextChunk()
        }, this._readChunk = function() {
            if (this._finished) this._chunkLoaded();
            else {
                if (r = new XMLHttpRequest, this._config.withCredentials && (r.withCredentials = this._config.withCredentials), t || (r.onload = bindFunction(this._chunkLoaded, this), r.onerror = bindFunction(this._chunkError, this)), r.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !t), this._config.downloadRequestHeaders) {
                    var e = this._config.downloadRequestHeaders;
                    for (var i in e) r.setRequestHeader(i, e[i])
                }
                if (this._config.chunkSize) {
                    var n = this._start + this._config.chunkSize - 1;
                    r.setRequestHeader("Range", "bytes=" + this._start + "-" + n)
                }
                try {
                    r.send(this._config.downloadRequestBody)
                } catch (e) {
                    this._chunkError(e.message)
                }
                t && 0 === r.status && this._chunkError()
            }
        }, this._chunkLoaded = function() {
            4 === r.readyState && (r.status < 200 || r.status >= 400 ? this._chunkError() : (this._start += this._config.chunkSize ? this._config.chunkSize : r.responseText.length, this._finished = !this._config.chunkSize || this._start >= function(e) {
                var t = e.getResponseHeader("Content-Range");
                if (null === t) return -1;
                return parseInt(t.substring(t.lastIndexOf("/") + 1))
            }(r), this.parseChunk(r.responseText)))
        }, this._chunkError = function(e) {
            var t = r.statusText || e;
            this._sendError(new Error(t))
        }
    }

    function FileStreamer(e) {
        var t, r;
        (e = e || {}).chunkSize || (e.chunkSize = s.LocalChunkSize), ChunkStreamer.call(this, e);
        var i = "undefined" != typeof FileReader;
        this.stream = function(e) {
            this._input = e, r = e.slice || e.webkitSlice || e.mozSlice, i ? ((t = new FileReader).onload = bindFunction(this._chunkLoaded, this), t.onerror = bindFunction(this._chunkError, this)) : t = new FileReaderSync, this._nextChunk()
        }, this._nextChunk = function() {
            this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk()
        }, this._readChunk = function() {
            var e = this._input;
            if (this._config.chunkSize) {
                var n = Math.min(this._start + this._config.chunkSize, this._input.size);
                e = r.call(e, this._start, n)
            }
            var s = t.readAsText(e, this._config.encoding);
            i || this._chunkLoaded({
                target: {
                    result: s
                }
            })
        }, this._chunkLoaded = function(e) {
            this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(e.target.result)
        }, this._chunkError = function() {
            this._sendError(t.error)
        }
    }

    function StringStreamer(e) {
        var t;
        e = e || {}, ChunkStreamer.call(this, e), this.stream = function(e) {
            return t = e, this._nextChunk()
        }, this._nextChunk = function() {
            if (!this._finished) {
                var e, r = this._config.chunkSize;
                return r ? (e = t.substring(0, r), t = t.substring(r)) : (e = t, t = ""), this._finished = !t, this.parseChunk(e)
            }
        }
    }

    function ReadableStreamStreamer(e) {
        e = e || {}, ChunkStreamer.call(this, e);
        var t = [],
            r = !0,
            i = !1;
        this.pause = function() {
            ChunkStreamer.prototype.pause.apply(this, arguments), this._input.pause()
        }, this.resume = function() {
            ChunkStreamer.prototype.resume.apply(this, arguments), this._input.resume()
        }, this.stream = function(e) {
            this._input = e, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError)
        }, this._checkIsFinished = function() {
            i && 1 === t.length && (this._finished = !0)
        }, this._nextChunk = function() {
            this._checkIsFinished(), t.length ? this.parseChunk(t.shift()) : r = !0
        }, this._streamData = bindFunction(function(e) {
            try {
                t.push("string" == typeof e ? e : e.toString(this._config.encoding)), r && (r = !1, this._checkIsFinished(), this.parseChunk(t.shift()))
            } catch (e) {
                this._streamError(e)
            }
        }, this), this._streamError = bindFunction(function(e) {
            this._streamCleanUp(), this._sendError(e)
        }, this), this._streamEnd = bindFunction(function() {
            this._streamCleanUp(), i = !0, this._streamData("")
        }, this), this._streamCleanUp = bindFunction(function() {
            this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError)
        }, this)
    }

    function DuplexStreamStreamer(e) {
        var t = require("stream").Duplex,
            r = copy(e),
            i = !0,
            n = !1,
            s = [],
            a = null;
        this._onCsvData = function(e) {
            var t = e.data;
            a.push(t) || this._handle.paused() || this._handle.pause()
        }, this._onCsvComplete = function() {
            a.push(null)
        }, r.step = bindFunction(this._onCsvData, this), r.complete = bindFunction(this._onCsvComplete, this), ChunkStreamer.call(this, r), this._nextChunk = function() {
            n && 1 === s.length && (this._finished = !0), s.length ? s.shift()() : i = !0
        }, this._addToParseQueue = function(e, t) {
            s.push(bindFunction(function() {
                if (this.parseChunk("string" == typeof e ? e : e.toString(r.encoding)), isFunction(t)) return t()
            }, this)), i && (i = !1, this._nextChunk())
        }, this._onRead = function() {
            this._handle.paused() && this._handle.resume()
        }, this._onWrite = function(e, t, r) {
            this._addToParseQueue(e, r)
        }, this._onWriteComplete = function() {
            n = !0, this._addToParseQueue("")
        }, this.getStream = function() {
            return a
        }, (a = new t({
            readableObjectMode: !0,
            decodeStrings: !1,
            read: bindFunction(this._onRead, this),
            write: bindFunction(this._onWrite, this)
        })).once("finish", bindFunction(this._onWriteComplete, this))
    }

    function ParserHandle(e) {
        var t, r, i, n = Math.pow(2, 53),
            a = -n,
            o = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)(e[-+]?\d+)?\s*$/,
            u = /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,
            h = this,
            d = 0,
            c = 0,
            l = !1,
            f = !1,
            p = [],
            m = {
                data: [],
                errors: [],
                meta: {}
            };
        if (isFunction(e.step)) {
            var g = e.step;
            e.step = function(t) {
                if (m = t, needsHeaderRow()) processResults();
                else {
                    if (processResults(), 0 === m.data.length) return;
                    d += t.data.length, e.preview && d > e.preview ? r.abort() : (m.data = m.data[0], g(m, h))
                }
            }
        }

        function testEmptyLine(t) {
            return "greedy" === e.skipEmptyLines ? "" === t.join("").trim() : 1 === t.length && 0 === t[0].length
        }

        function processResults() {
            if (m && i && (addError("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + s.DefaultDelimiter + "'"), i = !1), e.skipEmptyLines)
                for (var t = 0; t < m.data.length; t++) testEmptyLine(m.data[t]) && m.data.splice(t--, 1);
            return needsHeaderRow() && function() {
                    if (!m) return;

                    function addHeader(t, r) {
                        isFunction(e.transformHeader) && (t = e.transformHeader(t, r)), p.push(t)
                    }
                    if (Array.isArray(m.data[0])) {
                        for (var t = 0; needsHeaderRow() && t < m.data.length; t++) m.data[t].forEach(addHeader);
                        m.data.splice(0, 1)
                    } else m.data.forEach(addHeader)
                }(),
                function() {
                    if (!m || !e.header && !e.dynamicTyping && !e.transform) return m;

                    function processRow(t, r) {
                        var i, n = e.header ? {} : [];
                        for (i = 0; i < t.length; i++) {
                            var s = i,
                                a = t[i];
                            e.header && (s = i >= p.length ? "__parsed_extra" : p[i]), e.transform && (a = e.transform(a, s)), a = parseDynamic(s, a), "__parsed_extra" === s ? (n[s] = n[s] || [], n[s].push(a)) : n[s] = a
                        }
                        return e.header && (i > p.length ? addError("FieldMismatch", "TooManyFields", "Too many fields: expected " + p.length + " fields but parsed " + i, c + r) : i < p.length && addError("FieldMismatch", "TooFewFields", "Too few fields: expected " + p.length + " fields but parsed " + i, c + r)), n
                    }
                    var t = 1;
                    !m.data.length || Array.isArray(m.data[0]) ? (m.data = m.data.map(processRow), t = m.data.length) : m.data = processRow(m.data, 0);
                    e.header && m.meta && (m.meta.fields = p);
                    return c += t, m
                }()
        }

        function needsHeaderRow() {
            return e.header && 0 === p.length
        }

        function parseDynamic(t, r) {
            return function(t) {
                return e.dynamicTypingFunction && void 0 === e.dynamicTyping[t] && (e.dynamicTyping[t] = e.dynamicTypingFunction(t)), !0 === (e.dynamicTyping[t] || e.dynamicTyping)
            }(t) ? "true" === r || "TRUE" === r || "false" !== r && "FALSE" !== r && (function(e) {
                if (o.test(e)) {
                    var t = parseFloat(e);
                    if (t > a && t < n) return !0
                }
                return !1
            }(r) ? parseFloat(r) : u.test(r) ? new Date(r) : "" === r ? null : r) : r
        }

        function addError(e, t, r, i) {
            var n = {
                type: e,
                code: t,
                message: r
            };
            void 0 !== i && (n.row = i), m.errors.push(n)
        }
        this.parse = function(n, a, o) {
            var u = e.quoteChar || '"';
            if (e.newline || (e.newline = function(e, t) {
                    e = e.substring(0, 1048576);
                    var r = new RegExp(escapeRegExp(t) + "([^]*?)" + escapeRegExp(t), "gm"),
                        i = (e = e.replace(r, "")).split("\r"),
                        n = e.split("\n"),
                        s = n.length > 1 && n[0].length < i[0].length;
                    if (1 === i.length || s) return "\n";
                    for (var a = 0, o = 0; o < i.length; o++) "\n" === i[o][0] && a++;
                    return a >= i.length / 2 ? "\r\n" : "\r"
                }(n, u)), i = !1, e.delimiter) isFunction(e.delimiter) && (e.delimiter = e.delimiter(n), m.meta.delimiter = e.delimiter);
            else {
                var h = function(t, r, i, n, a) {
                    var o, u, h, d;
                    a = a || [",", "\t", "|", ";", s.RECORD_SEP, s.UNIT_SEP];
                    for (var c = 0; c < a.length; c++) {
                        var l = a[c],
                            f = 0,
                            p = 0,
                            m = 0;
                        h = void 0;
                        for (var g = new Parser({
                                comments: n,
                                delimiter: l,
                                newline: r,
                                preview: 10
                            }).parse(t), _ = 0; _ < g.data.length; _++)
                            if (i && testEmptyLine(g.data[_])) m++;
                            else {
                                var y = g.data[_].length;
                                p += y, void 0 !== h ? y > 0 && (f += Math.abs(y - h), h = y) : h = y
                            }
                        g.data.length > 0 && (p /= g.data.length - m), (void 0 === u || f <= u) && (void 0 === d || p > d) && p > 1.99 && (u = f, o = l, d = p)
                    }
                    return e.delimiter = o, {
                        successful: !!o,
                        bestDelimiter: o
                    }
                }(n, e.newline, e.skipEmptyLines, e.comments, e.delimitersToGuess);
                h.successful ? e.delimiter = h.bestDelimiter : (i = !0, e.delimiter = s.DefaultDelimiter), m.meta.delimiter = e.delimiter
            }
            var d = copy(e);
            return e.preview && e.header && d.preview++, t = n, r = new Parser(d), m = r.parse(t, a, o), processResults(), l ? {
                meta: {
                    paused: !0
                }
            } : m || {
                meta: {
                    paused: !1
                }
            }
        }, this.paused = function() {
            return l
        }, this.pause = function() {
            l = !0, r.abort(), t = isFunction(e.chunk) ? "" : t.substring(r.getCharIndex())
        }, this.resume = function() {
            h.streamer._halted ? (l = !1, h.streamer.parseChunk(t, !0)) : setTimeout(h.resume, 3)
        }, this.aborted = function() {
            return f
        }, this.abort = function() {
            f = !0, r.abort(), m.meta.aborted = !0, isFunction(e.complete) && e.complete(m), t = ""
        }
    }

    function escapeRegExp(e) {
        return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function Parser(e) {
        var t, r = (e = e || {}).delimiter,
            i = e.newline,
            n = e.comments,
            a = e.step,
            o = e.preview,
            u = e.fastMode,
            h = t = void 0 === e.quoteChar ? '"' : e.quoteChar;
        if (void 0 !== e.escapeChar && (h = e.escapeChar), ("string" != typeof r || s.BAD_DELIMITERS.indexOf(r) > -1) && (r = ","), n === r) throw new Error("Comment character same as delimiter");
        !0 === n ? n = "#" : ("string" != typeof n || s.BAD_DELIMITERS.indexOf(n) > -1) && (n = !1), "\n" !== i && "\r" !== i && "\r\n" !== i && (i = "\n");
        var d = 0,
            c = !1;
        this.parse = function(e, s, l) {
            if ("string" != typeof e) throw new Error("Input must be a string");
            var f = e.length,
                p = r.length,
                m = i.length,
                g = n.length,
                _ = isFunction(a);
            d = 0;
            var y = [],
                S = [],
                v = [],
                k = 0;
            if (!e) return returnable();
            if (u || !1 !== u && -1 === e.indexOf(t)) {
                for (var b = e.split(i), R = 0; R < b.length; R++) {
                    if (v = b[R], d += v.length, R !== b.length - 1) d += i.length;
                    else if (l) return returnable();
                    if (!n || v.substring(0, g) !== n) {
                        if (_) {
                            if (y = [], pushRow(v.split(r)), doStep(), c) return returnable()
                        } else pushRow(v.split(r));
                        if (o && R >= o) return y = y.slice(0, o), returnable(!0)
                    }
                }
                return returnable()
            }
            for (var w = e.indexOf(r, d), C = e.indexOf(i, d), E = new RegExp(escapeRegExp(h) + escapeRegExp(t), "g"), x = e.indexOf(t, d);;)
                if (e[d] !== t)
                    if (n && 0 === v.length && e.substring(d, d + g) === n) {
                        if (-1 === C) return returnable();
                        d = C + m, C = e.indexOf(i, d), w = e.indexOf(r, d)
                    } else {
                        if (-1 !== w && (w < C || -1 === C)) {
                            if (!(x > w)) {
                                v.push(e.substring(d, w)), d = w + p, w = e.indexOf(r, d);
                                continue
                            }
                            var F = getNextUnquotedDelimiter(w, x, C);
                            if (F && void 0 !== F.nextDelim) {
                                w = F.nextDelim, x = F.quoteSearch, v.push(e.substring(d, w)), d = w + p, w = e.indexOf(r, d);
                                continue
                            }
                        }
                        if (-1 === C) break;
                        if (v.push(e.substring(d, C)), saveRow(C + m), _ && (doStep(), c)) return returnable();
                        if (o && y.length >= o) return returnable(!0)
                    }
            else
                for (x = d, d++;;) {
                    if (-1 === (x = e.indexOf(t, x + 1))) return l || S.push({
                        type: "Quotes",
                        code: "MissingQuotes",
                        message: "Quoted field unterminated",
                        row: y.length,
                        index: d
                    }), finish();
                    if (x === f - 1) return finish(e.substring(d, x).replace(E, t));
                    if (t !== h || e[x + 1] !== h) {
                        if (t === h || 0 === x || e[x - 1] !== h) {
                            -1 !== w && w < x + 1 && (w = e.indexOf(r, x + 1)), -1 !== C && C < x + 1 && (C = e.indexOf(i, x + 1));
                            var O = extraSpaces(-1 === C ? w : Math.min(w, C));
                            if (e[x + 1 + O] === r) {
                                v.push(e.substring(d, x).replace(E, t)), d = x + 1 + O + p, e[x + 1 + O + p] !== t && (x = e.indexOf(t, d)), w = e.indexOf(r, d), C = e.indexOf(i, d);
                                break
                            }
                            var D = extraSpaces(C);
                            if (e.substring(x + 1 + D, x + 1 + D + m) === i) {
                                if (v.push(e.substring(d, x).replace(E, t)), saveRow(x + 1 + D + m), w = e.indexOf(r, d), x = e.indexOf(t, d), _ && (doStep(), c)) return returnable();
                                if (o && y.length >= o) return returnable(!0);
                                break
                            }
                            S.push({
                                type: "Quotes",
                                code: "InvalidQuotes",
                                message: "Trailing quote on quoted field is malformed",
                                row: y.length,
                                index: d
                            }), x++
                        }
                    } else x++
                }
            return finish();

            function pushRow(e) {
                y.push(e), k = d
            }

            function extraSpaces(t) {
                var r = 0;
                if (-1 !== t) {
                    var i = e.substring(x + 1, t);
                    i && "" === i.trim() && (r = i.length)
                }
                return r
            }

            function finish(t) {
                return l ? returnable() : (void 0 === t && (t = e.substring(d)), v.push(t), d = f, pushRow(v), _ && doStep(), returnable())
            }

            function saveRow(t) {
                d = t, pushRow(v), v = [], C = e.indexOf(i, d)
            }

            function returnable(e) {
                return {
                    data: y,
                    errors: S,
                    meta: {
                        delimiter: r,
                        linebreak: i,
                        aborted: c,
                        truncated: !!e,
                        cursor: k + (s || 0)
                    }
                }
            }

            function doStep() {
                a(returnable()), y = [], S = []
            }

            function getNextUnquotedDelimiter(i, n, s) {
                var a = {
                        nextDelim: void 0,
                        quoteSearch: void 0
                    },
                    o = e.indexOf(t, n + 1);
                if (i > n && i < o && (o < s || -1 === s)) {
                    var u = e.indexOf(r, o);
                    if (-1 === u) return a;
                    u > o && (o = e.indexOf(t, o + 1)), a = getNextUnquotedDelimiter(u, o, s)
                } else a = {
                    nextDelim: i,
                    quoteSearch: n
                };
                return a
            }
        }, this.abort = function() {
            c = !0
        }, this.getCharIndex = function() {
            return d
        }
    }

    function mainThreadReceivedMessage(e) {
        var t = e.data,
            r = i[t.workerId],
            n = !1;
        if (t.error) r.userError(t.error, t.file);
        else if (t.results && t.results.data) {
            var s = {
                abort: function() {
                    n = !0, completeWorker(t.workerId, {
                        data: [],
                        errors: [],
                        meta: {
                            aborted: !0
                        }
                    })
                },
                pause: notImplemented,
                resume: notImplemented
            };
            if (isFunction(r.userStep)) {
                for (var a = 0; a < t.results.data.length && (r.userStep({
                        data: t.results.data[a],
                        errors: t.results.errors,
                        meta: t.results.meta
                    }, s), !n); a++);
                delete t.results
            } else isFunction(r.userChunk) && (r.userChunk(t.results, s, t.file), delete t.results)
        }
        t.finished && !n && completeWorker(t.workerId, t.results)
    }

    function completeWorker(e, t) {
        var r = i[e];
        isFunction(r.userComplete) && r.userComplete(t), r.terminate(), delete i[e]
    }

    function notImplemented() {
        throw new Error("Not implemented.")
    }

    function copy(e) {
        if ("object" != typeof e || null === e) return e;
        var t = Array.isArray(e) ? [] : {};
        for (var r in e) t[r] = copy(e[r]);
        return t
    }

    function bindFunction(e, t) {
        return function() {
            e.apply(t, arguments)
        }
    }

    function isFunction(e) {
        return "function" == typeof e
    }
    return r && (e.onmessage = function(t) {
        var r = t.data;
        void 0 === s.WORKER_ID && r && (s.WORKER_ID = r.workerId);
        if ("string" == typeof r.input) e.postMessage({
            workerId: s.WORKER_ID,
            results: s.parse(r.input, r.config),
            finished: !0
        });
        else if (e.File && r.input instanceof File || r.input instanceof Object) {
            var i = s.parse(r.input, r.config);
            i && e.postMessage({
                workerId: s.WORKER_ID,
                results: i,
                finished: !0
            })
        }
    }), NetworkStreamer.prototype = Object.create(ChunkStreamer.prototype), NetworkStreamer.prototype.constructor = NetworkStreamer, FileStreamer.prototype = Object.create(ChunkStreamer.prototype), FileStreamer.prototype.constructor = FileStreamer, StringStreamer.prototype = Object.create(StringStreamer.prototype), StringStreamer.prototype.constructor = StringStreamer, ReadableStreamStreamer.prototype = Object.create(ChunkStreamer.prototype), ReadableStreamStreamer.prototype.constructor = ReadableStreamStreamer, "undefined" == typeof PAPA_BROWSER_CONTEXT && (DuplexStreamStreamer.prototype = Object.create(ChunkStreamer.prototype), DuplexStreamStreamer.prototype.constructor = DuplexStreamStreamer), s
});