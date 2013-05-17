(function(window, undefined) {
    "use strict";
    var rootjQuery, readyList, document = window.document, location = window.location, _jQuery = window.jQuery, _$ = window.$, class2type = {}, core_deletedIds = [], core_version = "1.9.0", core_concat = core_deletedIds.concat, core_push = core_deletedIds.push, core_slice = core_deletedIds.slice, core_indexOf = core_deletedIds.indexOf, core_toString = class2type.toString, core_hasOwn = class2type.hasOwnProperty, core_trim = core_version.trim, jQuery = function(selector, context) {
        return new jQuery.fn.init(selector, context, rootjQuery);
    }, core_pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, core_rnotwhite = /\S+/g, rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, rquickExpr = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/, rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, rvalidchars = /^[\],:{}\s]*$/, rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g, rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, rmsPrefix = /^-ms-/, rdashAlpha = /-([\da-z])/gi, fcamelCase = function(all, letter) {
        return letter.toUpperCase();
    }, DOMContentLoaded = function() {
        if (document.addEventListener) {
            document.removeEventListener("DOMContentLoaded", DOMContentLoaded, false);
            jQuery.ready();
        } else if (document.readyState === "complete") {
            document.detachEvent("onreadystatechange", DOMContentLoaded);
            jQuery.ready();
        }
    };
    jQuery.fn = jQuery.prototype = {
        jquery: core_version,
        constructor: jQuery,
        init: function(selector, context, rootjQuery) {
            var match, elem;
            if (!selector) {
                return this;
            }
            if (typeof selector === "string") {
                if (selector.charAt(0) === "<" && selector.charAt(selector.length - 1) === ">" && selector.length >= 3) {
                    match = [ null, selector, null ];
                } else {
                    match = rquickExpr.exec(selector);
                }
                if (match && (match[1] || !context)) {
                    if (match[1]) {
                        context = context instanceof jQuery ? context[0] : context;
                        jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
                        if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                            for (match in context) {
                                if (jQuery.isFunction(this[match])) {
                                    this[match](context[match]);
                                } else {
                                    this.attr(match, context[match]);
                                }
                            }
                        }
                        return this;
                    } else {
                        elem = document.getElementById(match[2]);
                        if (elem && elem.parentNode) {
                            if (elem.id !== match[2]) {
                                return rootjQuery.find(selector);
                            }
                            this.length = 1;
                            this[0] = elem;
                        }
                        this.context = document;
                        this.selector = selector;
                        return this;
                    }
                } else if (!context || context.jquery) {
                    return (context || rootjQuery).find(selector);
                } else {
                    return this.constructor(context).find(selector);
                }
            } else if (selector.nodeType) {
                this.context = this[0] = selector;
                this.length = 1;
                return this;
            } else if (jQuery.isFunction(selector)) {
                return rootjQuery.ready(selector);
            }
            if (selector.selector !== undefined) {
                this.selector = selector.selector;
                this.context = selector.context;
            }
            return jQuery.makeArray(selector, this);
        },
        selector: "",
        length: 0,
        size: function() {
            return this.length;
        },
        toArray: function() {
            return core_slice.call(this);
        },
        get: function(num) {
            return num == null ? this.toArray() : num < 0 ? this[this.length + num] : this[num];
        },
        pushStack: function(elems) {
            var ret = jQuery.merge(this.constructor(), elems);
            ret.prevObject = this;
            ret.context = this.context;
            return ret;
        },
        each: function(callback, args) {
            return jQuery.each(this, callback, args);
        },
        ready: function(fn) {
            jQuery.ready.promise().done(fn);
            return this;
        },
        slice: function() {
            return this.pushStack(core_slice.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(i) {
            var len = this.length, j = +i + (i < 0 ? len : 0);
            return this.pushStack(j >= 0 && j < len ? [ this[j] ] : []);
        },
        map: function(callback) {
            return this.pushStack(jQuery.map(this, function(elem, i) {
                return callback.call(elem, i, elem);
            }));
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: core_push,
        sort: [].sort,
        splice: [].splice
    };
    jQuery.fn.init.prototype = jQuery.fn;
    jQuery.extend = jQuery.fn.extend = function() {
        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
        if (typeof target === "boolean") {
            deep = target;
            target = arguments[1] || {};
            i = 2;
        }
        if (typeof target !== "object" && !jQuery.isFunction(target)) {
            target = {};
        }
        if (length === i) {
            target = this;
            --i;
        }
        for (;i < length; i++) {
            if ((options = arguments[i]) != null) {
                for (name in options) {
                    src = target[name];
                    copy = options[name];
                    if (target === copy) {
                        continue;
                    }
                    if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && jQuery.isArray(src) ? src : [];
                        } else {
                            clone = src && jQuery.isPlainObject(src) ? src : {};
                        }
                        target[name] = jQuery.extend(deep, clone, copy);
                    } else if (copy !== undefined) {
                        target[name] = copy;
                    }
                }
            }
        }
        return target;
    };
    jQuery.extend({
        noConflict: function(deep) {
            if (window.$ === jQuery) {
                window.$ = _$;
            }
            if (deep && window.jQuery === jQuery) {
                window.jQuery = _jQuery;
            }
            return jQuery;
        },
        isReady: false,
        readyWait: 1,
        holdReady: function(hold) {
            if (hold) {
                jQuery.readyWait++;
            } else {
                jQuery.ready(true);
            }
        },
        ready: function(wait) {
            if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
                return;
            }
            if (!document.body) {
                return setTimeout(jQuery.ready);
            }
            jQuery.isReady = true;
            if (wait !== true && --jQuery.readyWait > 0) {
                return;
            }
            readyList.resolveWith(document, [ jQuery ]);
            if (jQuery.fn.trigger) {
                jQuery(document).trigger("ready").off("ready");
            }
        },
        isFunction: function(obj) {
            return jQuery.type(obj) === "function";
        },
        isArray: Array.isArray || function(obj) {
            return jQuery.type(obj) === "array";
        },
        isWindow: function(obj) {
            return obj != null && obj == obj.window;
        },
        isNumeric: function(obj) {
            return !isNaN(parseFloat(obj)) && isFinite(obj);
        },
        type: function(obj) {
            if (obj == null) {
                return String(obj);
            }
            return typeof obj === "object" || typeof obj === "function" ? class2type[core_toString.call(obj)] || "object" : typeof obj;
        },
        isPlainObject: function(obj) {
            if (!obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
                return false;
            }
            try {
                if (obj.constructor && !core_hasOwn.call(obj, "constructor") && !core_hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
                    return false;
                }
            } catch (e) {
                return false;
            }
            var key;
            for (key in obj) {}
            return key === undefined || core_hasOwn.call(obj, key);
        },
        isEmptyObject: function(obj) {
            var name;
            for (name in obj) {
                return false;
            }
            return true;
        },
        error: function(msg) {
            throw new Error(msg);
        },
        parseHTML: function(data, context, keepScripts) {
            if (!data || typeof data !== "string") {
                return null;
            }
            if (typeof context === "boolean") {
                keepScripts = context;
                context = false;
            }
            context = context || document;
            var parsed = rsingleTag.exec(data), scripts = !keepScripts && [];
            if (parsed) {
                return [ context.createElement(parsed[1]) ];
            }
            parsed = jQuery.buildFragment([ data ], context, scripts);
            if (scripts) {
                jQuery(scripts).remove();
            }
            return jQuery.merge([], parsed.childNodes);
        },
        parseJSON: function(data) {
            if (window.JSON && window.JSON.parse) {
                return window.JSON.parse(data);
            }
            if (data === null) {
                return data;
            }
            if (typeof data === "string") {
                data = jQuery.trim(data);
                if (data) {
                    if (rvalidchars.test(data.replace(rvalidescape, "@").replace(rvalidtokens, "]").replace(rvalidbraces, ""))) {
                        return new Function("return " + data)();
                    }
                }
            }
            jQuery.error("Invalid JSON: " + data);
        },
        parseXML: function(data) {
            var xml, tmp;
            if (!data || typeof data !== "string") {
                return null;
            }
            try {
                if (window.DOMParser) {
                    tmp = new DOMParser();
                    xml = tmp.parseFromString(data, "text/xml");
                } else {
                    xml = new ActiveXObject("Microsoft.XMLDOM");
                    xml.async = "false";
                    xml.loadXML(data);
                }
            } catch (e) {
                xml = undefined;
            }
            if (!xml || !xml.documentElement || xml.getElementsByTagName("parsererror").length) {
                jQuery.error("Invalid XML: " + data);
            }
            return xml;
        },
        noop: function() {},
        globalEval: function(data) {
            if (data && jQuery.trim(data)) {
                (window.execScript || function(data) {
                    window["eval"].call(window, data);
                })(data);
            }
        },
        camelCase: function(string) {
            return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
        },
        nodeName: function(elem, name) {
            return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
        },
        each: function(obj, callback, args) {
            var value, i = 0, length = obj.length, isArray = isArraylike(obj);
            if (args) {
                if (isArray) {
                    for (;i < length; i++) {
                        value = callback.apply(obj[i], args);
                        if (value === false) {
                            break;
                        }
                    }
                } else {
                    for (i in obj) {
                        value = callback.apply(obj[i], args);
                        if (value === false) {
                            break;
                        }
                    }
                }
            } else {
                if (isArray) {
                    for (;i < length; i++) {
                        value = callback.call(obj[i], i, obj[i]);
                        if (value === false) {
                            break;
                        }
                    }
                } else {
                    for (i in obj) {
                        value = callback.call(obj[i], i, obj[i]);
                        if (value === false) {
                            break;
                        }
                    }
                }
            }
            return obj;
        },
        trim: core_trim && !core_trim.call("﻿ ") ? function(text) {
            return text == null ? "" : core_trim.call(text);
        } : function(text) {
            return text == null ? "" : (text + "").replace(rtrim, "");
        },
        makeArray: function(arr, results) {
            var ret = results || [];
            if (arr != null) {
                if (isArraylike(Object(arr))) {
                    jQuery.merge(ret, typeof arr === "string" ? [ arr ] : arr);
                } else {
                    core_push.call(ret, arr);
                }
            }
            return ret;
        },
        inArray: function(elem, arr, i) {
            var len;
            if (arr) {
                if (core_indexOf) {
                    return core_indexOf.call(arr, elem, i);
                }
                len = arr.length;
                i = i ? i < 0 ? Math.max(0, len + i) : i : 0;
                for (;i < len; i++) {
                    if (i in arr && arr[i] === elem) {
                        return i;
                    }
                }
            }
            return -1;
        },
        merge: function(first, second) {
            var l = second.length, i = first.length, j = 0;
            if (typeof l === "number") {
                for (;j < l; j++) {
                    first[i++] = second[j];
                }
            } else {
                while (second[j] !== undefined) {
                    first[i++] = second[j++];
                }
            }
            first.length = i;
            return first;
        },
        grep: function(elems, callback, inv) {
            var retVal, ret = [], i = 0, length = elems.length;
            inv = !!inv;
            for (;i < length; i++) {
                retVal = !!callback(elems[i], i);
                if (inv !== retVal) {
                    ret.push(elems[i]);
                }
            }
            return ret;
        },
        map: function(elems, callback, arg) {
            var value, i = 0, length = elems.length, isArray = isArraylike(elems), ret = [];
            if (isArray) {
                for (;i < length; i++) {
                    value = callback(elems[i], i, arg);
                    if (value != null) {
                        ret[ret.length] = value;
                    }
                }
            } else {
                for (i in elems) {
                    value = callback(elems[i], i, arg);
                    if (value != null) {
                        ret[ret.length] = value;
                    }
                }
            }
            return core_concat.apply([], ret);
        },
        guid: 1,
        proxy: function(fn, context) {
            var tmp, args, proxy;
            if (typeof context === "string") {
                tmp = fn[context];
                context = fn;
                fn = tmp;
            }
            if (!jQuery.isFunction(fn)) {
                return undefined;
            }
            args = core_slice.call(arguments, 2);
            proxy = function() {
                return fn.apply(context || this, args.concat(core_slice.call(arguments)));
            };
            proxy.guid = fn.guid = fn.guid || jQuery.guid++;
            return proxy;
        },
        access: function(elems, fn, key, value, chainable, emptyGet, raw) {
            var i = 0, length = elems.length, bulk = key == null;
            if (jQuery.type(key) === "object") {
                chainable = true;
                for (i in key) {
                    jQuery.access(elems, fn, i, key[i], true, emptyGet, raw);
                }
            } else if (value !== undefined) {
                chainable = true;
                if (!jQuery.isFunction(value)) {
                    raw = true;
                }
                if (bulk) {
                    if (raw) {
                        fn.call(elems, value);
                        fn = null;
                    } else {
                        bulk = fn;
                        fn = function(elem, key, value) {
                            return bulk.call(jQuery(elem), value);
                        };
                    }
                }
                if (fn) {
                    for (;i < length; i++) {
                        fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
                    }
                }
            }
            return chainable ? elems : bulk ? fn.call(elems) : length ? fn(elems[0], key) : emptyGet;
        },
        now: function() {
            return new Date().getTime();
        }
    });
    jQuery.ready.promise = function(obj) {
        if (!readyList) {
            readyList = jQuery.Deferred();
            if (document.readyState === "complete") {
                setTimeout(jQuery.ready);
            } else if (document.addEventListener) {
                document.addEventListener("DOMContentLoaded", DOMContentLoaded, false);
                window.addEventListener("load", jQuery.ready, false);
            } else {
                document.attachEvent("onreadystatechange", DOMContentLoaded);
                window.attachEvent("onload", jQuery.ready);
                var top = false;
                try {
                    top = window.frameElement == null && document.documentElement;
                } catch (e) {}
                if (top && top.doScroll) {
                    (function doScrollCheck() {
                        if (!jQuery.isReady) {
                            try {
                                top.doScroll("left");
                            } catch (e) {
                                return setTimeout(doScrollCheck, 50);
                            }
                            jQuery.ready();
                        }
                    })();
                }
            }
        }
        return readyList.promise(obj);
    };
    jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
        class2type["[object " + name + "]"] = name.toLowerCase();
    });
    function isArraylike(obj) {
        var length = obj.length, type = jQuery.type(obj);
        if (jQuery.isWindow(obj)) {
            return false;
        }
        if (obj.nodeType === 1 && length) {
            return true;
        }
        return type === "array" || type !== "function" && (length === 0 || typeof length === "number" && length > 0 && length - 1 in obj);
    }
    rootjQuery = jQuery(document);
    var optionsCache = {};
    function createOptions(options) {
        var object = optionsCache[options] = {};
        jQuery.each(options.match(core_rnotwhite) || [], function(_, flag) {
            object[flag] = true;
        });
        return object;
    }
    jQuery.Callbacks = function(options) {
        options = typeof options === "string" ? optionsCache[options] || createOptions(options) : jQuery.extend({}, options);
        var memory, fired, firing, firingStart, firingLength, firingIndex, list = [], stack = !options.once && [], fire = function(data) {
            memory = options.memory && data;
            fired = true;
            firingIndex = firingStart || 0;
            firingStart = 0;
            firingLength = list.length;
            firing = true;
            for (;list && firingIndex < firingLength; firingIndex++) {
                if (list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse) {
                    memory = false;
                    break;
                }
            }
            firing = false;
            if (list) {
                if (stack) {
                    if (stack.length) {
                        fire(stack.shift());
                    }
                } else if (memory) {
                    list = [];
                } else {
                    self.disable();
                }
            }
        }, self = {
            add: function() {
                if (list) {
                    var start = list.length;
                    (function add(args) {
                        jQuery.each(args, function(_, arg) {
                            var type = jQuery.type(arg);
                            if (type === "function") {
                                if (!options.unique || !self.has(arg)) {
                                    list.push(arg);
                                }
                            } else if (arg && arg.length && type !== "string") {
                                add(arg);
                            }
                        });
                    })(arguments);
                    if (firing) {
                        firingLength = list.length;
                    } else if (memory) {
                        firingStart = start;
                        fire(memory);
                    }
                }
                return this;
            },
            remove: function() {
                if (list) {
                    jQuery.each(arguments, function(_, arg) {
                        var index;
                        while ((index = jQuery.inArray(arg, list, index)) > -1) {
                            list.splice(index, 1);
                            if (firing) {
                                if (index <= firingLength) {
                                    firingLength--;
                                }
                                if (index <= firingIndex) {
                                    firingIndex--;
                                }
                            }
                        }
                    });
                }
                return this;
            },
            has: function(fn) {
                return jQuery.inArray(fn, list) > -1;
            },
            empty: function() {
                list = [];
                return this;
            },
            disable: function() {
                list = stack = memory = undefined;
                return this;
            },
            disabled: function() {
                return !list;
            },
            lock: function() {
                stack = undefined;
                if (!memory) {
                    self.disable();
                }
                return this;
            },
            locked: function() {
                return !stack;
            },
            fireWith: function(context, args) {
                args = args || [];
                args = [ context, args.slice ? args.slice() : args ];
                if (list && (!fired || stack)) {
                    if (firing) {
                        stack.push(args);
                    } else {
                        fire(args);
                    }
                }
                return this;
            },
            fire: function() {
                self.fireWith(this, arguments);
                return this;
            },
            fired: function() {
                return !!fired;
            }
        };
        return self;
    };
    jQuery.extend({
        Deferred: function(func) {
            var tuples = [ [ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ], [ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ], [ "notify", "progress", jQuery.Callbacks("memory") ] ], state = "pending", promise = {
                state: function() {
                    return state;
                },
                always: function() {
                    deferred.done(arguments).fail(arguments);
                    return this;
                },
                then: function() {
                    var fns = arguments;
                    return jQuery.Deferred(function(newDefer) {
                        jQuery.each(tuples, function(i, tuple) {
                            var action = tuple[0], fn = jQuery.isFunction(fns[i]) && fns[i];
                            deferred[tuple[1]](function() {
                                var returned = fn && fn.apply(this, arguments);
                                if (returned && jQuery.isFunction(returned.promise)) {
                                    returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify);
                                } else {
                                    newDefer[action + "With"](this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments);
                                }
                            });
                        });
                        fns = null;
                    }).promise();
                },
                promise: function(obj) {
                    return obj != null ? jQuery.extend(obj, promise) : promise;
                }
            }, deferred = {};
            promise.pipe = promise.then;
            jQuery.each(tuples, function(i, tuple) {
                var list = tuple[2], stateString = tuple[3];
                promise[tuple[1]] = list.add;
                if (stateString) {
                    list.add(function() {
                        state = stateString;
                    }, tuples[i ^ 1][2].disable, tuples[2][2].lock);
                }
                deferred[tuple[0]] = function() {
                    deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments);
                    return this;
                };
                deferred[tuple[0] + "With"] = list.fireWith;
            });
            promise.promise(deferred);
            if (func) {
                func.call(deferred, deferred);
            }
            return deferred;
        },
        when: function(subordinate) {
            var i = 0, resolveValues = core_slice.call(arguments), length = resolveValues.length, remaining = length !== 1 || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0, deferred = remaining === 1 ? subordinate : jQuery.Deferred(), updateFunc = function(i, contexts, values) {
                return function(value) {
                    contexts[i] = this;
                    values[i] = arguments.length > 1 ? core_slice.call(arguments) : value;
                    if (values === progressValues) {
                        deferred.notifyWith(contexts, values);
                    } else if (!--remaining) {
                        deferred.resolveWith(contexts, values);
                    }
                };
            }, progressValues, progressContexts, resolveContexts;
            if (length > 1) {
                progressValues = new Array(length);
                progressContexts = new Array(length);
                resolveContexts = new Array(length);
                for (;i < length; i++) {
                    if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
                        resolveValues[i].promise().done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject).progress(updateFunc(i, progressContexts, progressValues));
                    } else {
                        --remaining;
                    }
                }
            }
            if (!remaining) {
                deferred.resolveWith(resolveContexts, resolveValues);
            }
            return deferred.promise();
        }
    });
    jQuery.support = function() {
        var support, all, a, select, opt, input, fragment, eventName, isSupported, i, div = document.createElement("div");
        div.setAttribute("className", "t");
        div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        all = div.getElementsByTagName("*");
        a = div.getElementsByTagName("a")[0];
        if (!all || !a || !all.length) {
            return {};
        }
        select = document.createElement("select");
        opt = select.appendChild(document.createElement("option"));
        input = div.getElementsByTagName("input")[0];
        a.style.cssText = "top:1px;float:left;opacity:.5";
        support = {
            getSetAttribute: div.className !== "t",
            leadingWhitespace: div.firstChild.nodeType === 3,
            tbody: !div.getElementsByTagName("tbody").length,
            htmlSerialize: !!div.getElementsByTagName("link").length,
            style: /top/.test(a.getAttribute("style")),
            hrefNormalized: a.getAttribute("href") === "/a",
            opacity: /^0.5/.test(a.style.opacity),
            cssFloat: !!a.style.cssFloat,
            checkOn: !!input.value,
            optSelected: opt.selected,
            enctype: !!document.createElement("form").enctype,
            html5Clone: document.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>",
            boxModel: document.compatMode === "CSS1Compat",
            deleteExpando: true,
            noCloneEvent: true,
            inlineBlockNeedsLayout: false,
            shrinkWrapBlocks: false,
            reliableMarginRight: true,
            boxSizingReliable: true,
            pixelPosition: false
        };
        input.checked = true;
        support.noCloneChecked = input.cloneNode(true).checked;
        select.disabled = true;
        support.optDisabled = !opt.disabled;
        try {
            delete div.test;
        } catch (e) {
            support.deleteExpando = false;
        }
        input = document.createElement("input");
        input.setAttribute("value", "");
        support.input = input.getAttribute("value") === "";
        input.value = "t";
        input.setAttribute("type", "radio");
        support.radioValue = input.value === "t";
        input.setAttribute("checked", "t");
        input.setAttribute("name", "t");
        fragment = document.createDocumentFragment();
        fragment.appendChild(input);
        support.appendChecked = input.checked;
        support.checkClone = fragment.cloneNode(true).cloneNode(true).lastChild.checked;
        if (div.attachEvent) {
            div.attachEvent("onclick", function() {
                support.noCloneEvent = false;
            });
            div.cloneNode(true).click();
        }
        for (i in {
            submit: true,
            change: true,
            focusin: true
        }) {
            div.setAttribute(eventName = "on" + i, "t");
            support[i + "Bubbles"] = eventName in window || div.attributes[eventName].expando === false;
        }
        div.style.backgroundClip = "content-box";
        div.cloneNode(true).style.backgroundClip = "";
        support.clearCloneStyle = div.style.backgroundClip === "content-box";
        jQuery(function() {
            var container, marginDiv, tds, divReset = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", body = document.getElementsByTagName("body")[0];
            if (!body) {
                return;
            }
            container = document.createElement("div");
            container.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";
            body.appendChild(container).appendChild(div);
            div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
            tds = div.getElementsByTagName("td");
            tds[0].style.cssText = "padding:0;margin:0;border:0;display:none";
            isSupported = tds[0].offsetHeight === 0;
            tds[0].style.display = "";
            tds[1].style.display = "none";
            support.reliableHiddenOffsets = isSupported && tds[0].offsetHeight === 0;
            div.innerHTML = "";
            div.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
            support.boxSizing = div.offsetWidth === 4;
            support.doesNotIncludeMarginInBodyOffset = body.offsetTop !== 1;
            if (window.getComputedStyle) {
                support.pixelPosition = (window.getComputedStyle(div, null) || {}).top !== "1%";
                support.boxSizingReliable = (window.getComputedStyle(div, null) || {
                    width: "4px"
                }).width === "4px";
                marginDiv = div.appendChild(document.createElement("div"));
                marginDiv.style.cssText = div.style.cssText = divReset;
                marginDiv.style.marginRight = marginDiv.style.width = "0";
                div.style.width = "1px";
                support.reliableMarginRight = !parseFloat((window.getComputedStyle(marginDiv, null) || {}).marginRight);
            }
            if (typeof div.style.zoom !== "undefined") {
                div.innerHTML = "";
                div.style.cssText = divReset + "width:1px;padding:1px;display:inline;zoom:1";
                support.inlineBlockNeedsLayout = div.offsetWidth === 3;
                div.style.display = "block";
                div.innerHTML = "<div></div>";
                div.firstChild.style.width = "5px";
                support.shrinkWrapBlocks = div.offsetWidth !== 3;
                body.style.zoom = 1;
            }
            body.removeChild(container);
            container = div = tds = marginDiv = null;
        });
        all = select = fragment = opt = a = input = null;
        return support;
    }();
    var rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, rmultiDash = /([A-Z])/g;
    function internalData(elem, name, data, pvt) {
        if (!jQuery.acceptData(elem)) {
            return;
        }
        var thisCache, ret, internalKey = jQuery.expando, getByName = typeof name === "string", isNode = elem.nodeType, cache = isNode ? jQuery.cache : elem, id = isNode ? elem[internalKey] : elem[internalKey] && internalKey;
        if ((!id || !cache[id] || !pvt && !cache[id].data) && getByName && data === undefined) {
            return;
        }
        if (!id) {
            if (isNode) {
                elem[internalKey] = id = core_deletedIds.pop() || jQuery.guid++;
            } else {
                id = internalKey;
            }
        }
        if (!cache[id]) {
            cache[id] = {};
            if (!isNode) {
                cache[id].toJSON = jQuery.noop;
            }
        }
        if (typeof name === "object" || typeof name === "function") {
            if (pvt) {
                cache[id] = jQuery.extend(cache[id], name);
            } else {
                cache[id].data = jQuery.extend(cache[id].data, name);
            }
        }
        thisCache = cache[id];
        if (!pvt) {
            if (!thisCache.data) {
                thisCache.data = {};
            }
            thisCache = thisCache.data;
        }
        if (data !== undefined) {
            thisCache[jQuery.camelCase(name)] = data;
        }
        if (getByName) {
            ret = thisCache[name];
            if (ret == null) {
                ret = thisCache[jQuery.camelCase(name)];
            }
        } else {
            ret = thisCache;
        }
        return ret;
    }
    function internalRemoveData(elem, name, pvt) {
        if (!jQuery.acceptData(elem)) {
            return;
        }
        var thisCache, i, l, isNode = elem.nodeType, cache = isNode ? jQuery.cache : elem, id = isNode ? elem[jQuery.expando] : jQuery.expando;
        if (!cache[id]) {
            return;
        }
        if (name) {
            thisCache = pvt ? cache[id] : cache[id].data;
            if (thisCache) {
                if (!jQuery.isArray(name)) {
                    if (name in thisCache) {
                        name = [ name ];
                    } else {
                        name = jQuery.camelCase(name);
                        if (name in thisCache) {
                            name = [ name ];
                        } else {
                            name = name.split(" ");
                        }
                    }
                } else {
                    name = name.concat(jQuery.map(name, jQuery.camelCase));
                }
                for (i = 0, l = name.length; i < l; i++) {
                    delete thisCache[name[i]];
                }
                if (!(pvt ? isEmptyDataObject : jQuery.isEmptyObject)(thisCache)) {
                    return;
                }
            }
        }
        if (!pvt) {
            delete cache[id].data;
            if (!isEmptyDataObject(cache[id])) {
                return;
            }
        }
        if (isNode) {
            jQuery.cleanData([ elem ], true);
        } else if (jQuery.support.deleteExpando || cache != cache.window) {
            delete cache[id];
        } else {
            cache[id] = null;
        }
    }
    jQuery.extend({
        cache: {},
        expando: "jQuery" + (core_version + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: true,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: true
        },
        hasData: function(elem) {
            elem = elem.nodeType ? jQuery.cache[elem[jQuery.expando]] : elem[jQuery.expando];
            return !!elem && !isEmptyDataObject(elem);
        },
        data: function(elem, name, data) {
            return internalData(elem, name, data, false);
        },
        removeData: function(elem, name) {
            return internalRemoveData(elem, name, false);
        },
        _data: function(elem, name, data) {
            return internalData(elem, name, data, true);
        },
        _removeData: function(elem, name) {
            return internalRemoveData(elem, name, true);
        },
        acceptData: function(elem) {
            var noData = elem.nodeName && jQuery.noData[elem.nodeName.toLowerCase()];
            return !noData || noData !== true && elem.getAttribute("classid") === noData;
        }
    });
    jQuery.fn.extend({
        data: function(key, value) {
            var attrs, name, elem = this[0], i = 0, data = null;
            if (key === undefined) {
                if (this.length) {
                    data = jQuery.data(elem);
                    if (elem.nodeType === 1 && !jQuery._data(elem, "parsedAttrs")) {
                        attrs = elem.attributes;
                        for (;i < attrs.length; i++) {
                            name = attrs[i].name;
                            if (!name.indexOf("data-")) {
                                name = jQuery.camelCase(name.substring(5));
                                dataAttr(elem, name, data[name]);
                            }
                        }
                        jQuery._data(elem, "parsedAttrs", true);
                    }
                }
                return data;
            }
            if (typeof key === "object") {
                return this.each(function() {
                    jQuery.data(this, key);
                });
            }
            return jQuery.access(this, function(value) {
                if (value === undefined) {
                    return elem ? dataAttr(elem, key, jQuery.data(elem, key)) : null;
                }
                this.each(function() {
                    jQuery.data(this, key, value);
                });
            }, null, value, arguments.length > 1, null, true);
        },
        removeData: function(key) {
            return this.each(function() {
                jQuery.removeData(this, key);
            });
        }
    });
    function dataAttr(elem, key, data) {
        if (data === undefined && elem.nodeType === 1) {
            var name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();
            data = elem.getAttribute(name);
            if (typeof data === "string") {
                try {
                    data = data === "true" ? true : data === "false" ? false : data === "null" ? null : +data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data;
                } catch (e) {}
                jQuery.data(elem, key, data);
            } else {
                data = undefined;
            }
        }
        return data;
    }
    function isEmptyDataObject(obj) {
        var name;
        for (name in obj) {
            if (name === "data" && jQuery.isEmptyObject(obj[name])) {
                continue;
            }
            if (name !== "toJSON") {
                return false;
            }
        }
        return true;
    }
    jQuery.extend({
        queue: function(elem, type, data) {
            var queue;
            if (elem) {
                type = (type || "fx") + "queue";
                queue = jQuery._data(elem, type);
                if (data) {
                    if (!queue || jQuery.isArray(data)) {
                        queue = jQuery._data(elem, type, jQuery.makeArray(data));
                    } else {
                        queue.push(data);
                    }
                }
                return queue || [];
            }
        },
        dequeue: function(elem, type) {
            type = type || "fx";
            var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function() {
                jQuery.dequeue(elem, type);
            };
            if (fn === "inprogress") {
                fn = queue.shift();
                startLength--;
            }
            hooks.cur = fn;
            if (fn) {
                if (type === "fx") {
                    queue.unshift("inprogress");
                }
                delete hooks.stop;
                fn.call(elem, next, hooks);
            }
            if (!startLength && hooks) {
                hooks.empty.fire();
            }
        },
        _queueHooks: function(elem, type) {
            var key = type + "queueHooks";
            return jQuery._data(elem, key) || jQuery._data(elem, key, {
                empty: jQuery.Callbacks("once memory").add(function() {
                    jQuery._removeData(elem, type + "queue");
                    jQuery._removeData(elem, key);
                })
            });
        }
    });
    jQuery.fn.extend({
        queue: function(type, data) {
            var setter = 2;
            if (typeof type !== "string") {
                data = type;
                type = "fx";
                setter--;
            }
            if (arguments.length < setter) {
                return jQuery.queue(this[0], type);
            }
            return data === undefined ? this : this.each(function() {
                var queue = jQuery.queue(this, type, data);
                jQuery._queueHooks(this, type);
                if (type === "fx" && queue[0] !== "inprogress") {
                    jQuery.dequeue(this, type);
                }
            });
        },
        dequeue: function(type) {
            return this.each(function() {
                jQuery.dequeue(this, type);
            });
        },
        delay: function(time, type) {
            time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
            type = type || "fx";
            return this.queue(type, function(next, hooks) {
                var timeout = setTimeout(next, time);
                hooks.stop = function() {
                    clearTimeout(timeout);
                };
            });
        },
        clearQueue: function(type) {
            return this.queue(type || "fx", []);
        },
        promise: function(type, obj) {
            var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function() {
                if (!--count) {
                    defer.resolveWith(elements, [ elements ]);
                }
            };
            if (typeof type !== "string") {
                obj = type;
                type = undefined;
            }
            type = type || "fx";
            while (i--) {
                tmp = jQuery._data(elements[i], type + "queueHooks");
                if (tmp && tmp.empty) {
                    count++;
                    tmp.empty.add(resolve);
                }
            }
            resolve();
            return defer.promise(obj);
        }
    });
    var nodeHook, boolHook, rclass = /[\t\r\n]/g, rreturn = /\r/g, rfocusable = /^(?:input|select|textarea|button|object)$/i, rclickable = /^(?:a|area)$/i, rboolean = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i, ruseDefault = /^(?:checked|selected)$/i, getSetAttribute = jQuery.support.getSetAttribute, getSetInput = jQuery.support.input;
    jQuery.fn.extend({
        attr: function(name, value) {
            return jQuery.access(this, jQuery.attr, name, value, arguments.length > 1);
        },
        removeAttr: function(name) {
            return this.each(function() {
                jQuery.removeAttr(this, name);
            });
        },
        prop: function(name, value) {
            return jQuery.access(this, jQuery.prop, name, value, arguments.length > 1);
        },
        removeProp: function(name) {
            name = jQuery.propFix[name] || name;
            return this.each(function() {
                try {
                    this[name] = undefined;
                    delete this[name];
                } catch (e) {}
            });
        },
        addClass: function(value) {
            var classes, elem, cur, clazz, j, i = 0, len = this.length, proceed = typeof value === "string" && value;
            if (jQuery.isFunction(value)) {
                return this.each(function(j) {
                    jQuery(this).addClass(value.call(this, j, this.className));
                });
            }
            if (proceed) {
                classes = (value || "").match(core_rnotwhite) || [];
                for (;i < len; i++) {
                    elem = this[i];
                    cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : " ");
                    if (cur) {
                        j = 0;
                        while (clazz = classes[j++]) {
                            if (cur.indexOf(" " + clazz + " ") < 0) {
                                cur += clazz + " ";
                            }
                        }
                        elem.className = jQuery.trim(cur);
                    }
                }
            }
            return this;
        },
        removeClass: function(value) {
            var classes, elem, cur, clazz, j, i = 0, len = this.length, proceed = arguments.length === 0 || typeof value === "string" && value;
            if (jQuery.isFunction(value)) {
                return this.each(function(j) {
                    jQuery(this).removeClass(value.call(this, j, this.className));
                });
            }
            if (proceed) {
                classes = (value || "").match(core_rnotwhite) || [];
                for (;i < len; i++) {
                    elem = this[i];
                    cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : "");
                    if (cur) {
                        j = 0;
                        while (clazz = classes[j++]) {
                            while (cur.indexOf(" " + clazz + " ") >= 0) {
                                cur = cur.replace(" " + clazz + " ", " ");
                            }
                        }
                        elem.className = value ? jQuery.trim(cur) : "";
                    }
                }
            }
            return this;
        },
        toggleClass: function(value, stateVal) {
            var type = typeof value, isBool = typeof stateVal === "boolean";
            if (jQuery.isFunction(value)) {
                return this.each(function(i) {
                    jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal);
                });
            }
            return this.each(function() {
                if (type === "string") {
                    var className, i = 0, self = jQuery(this), state = stateVal, classNames = value.match(core_rnotwhite) || [];
                    while (className = classNames[i++]) {
                        state = isBool ? state : !self.hasClass(className);
                        self[state ? "addClass" : "removeClass"](className);
                    }
                } else if (type === "undefined" || type === "boolean") {
                    if (this.className) {
                        jQuery._data(this, "__className__", this.className);
                    }
                    this.className = this.className || value === false ? "" : jQuery._data(this, "__className__") || "";
                }
            });
        },
        hasClass: function(selector) {
            var className = " " + selector + " ", i = 0, l = this.length;
            for (;i < l; i++) {
                if (this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf(className) >= 0) {
                    return true;
                }
            }
            return false;
        },
        val: function(value) {
            var hooks, ret, isFunction, elem = this[0];
            if (!arguments.length) {
                if (elem) {
                    hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                    if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
                        return ret;
                    }
                    ret = elem.value;
                    return typeof ret === "string" ? ret.replace(rreturn, "") : ret == null ? "" : ret;
                }
                return;
            }
            isFunction = jQuery.isFunction(value);
            return this.each(function(i) {
                var val, self = jQuery(this);
                if (this.nodeType !== 1) {
                    return;
                }
                if (isFunction) {
                    val = value.call(this, i, self.val());
                } else {
                    val = value;
                }
                if (val == null) {
                    val = "";
                } else if (typeof val === "number") {
                    val += "";
                } else if (jQuery.isArray(val)) {
                    val = jQuery.map(val, function(value) {
                        return value == null ? "" : value + "";
                    });
                }
                hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
                if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
                    this.value = val;
                }
            });
        }
    });
    jQuery.extend({
        valHooks: {
            option: {
                get: function(elem) {
                    var val = elem.attributes.value;
                    return !val || val.specified ? elem.value : elem.text;
                }
            },
            select: {
                get: function(elem) {
                    var value, option, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one" || index < 0, values = one ? null : [], max = one ? index + 1 : options.length, i = index < 0 ? max : one ? index : 0;
                    for (;i < max; i++) {
                        option = options[i];
                        if ((option.selected || i === index) && (jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {
                            value = jQuery(option).val();
                            if (one) {
                                return value;
                            }
                            values.push(value);
                        }
                    }
                    return values;
                },
                set: function(elem, value) {
                    var values = jQuery.makeArray(value);
                    jQuery(elem).find("option").each(function() {
                        this.selected = jQuery.inArray(jQuery(this).val(), values) >= 0;
                    });
                    if (!values.length) {
                        elem.selectedIndex = -1;
                    }
                    return values;
                }
            }
        },
        attr: function(elem, name, value) {
            var ret, hooks, notxml, nType = elem.nodeType;
            if (!elem || nType === 3 || nType === 8 || nType === 2) {
                return;
            }
            if (typeof elem.getAttribute === "undefined") {
                return jQuery.prop(elem, name, value);
            }
            notxml = nType !== 1 || !jQuery.isXMLDoc(elem);
            if (notxml) {
                name = name.toLowerCase();
                hooks = jQuery.attrHooks[name] || (rboolean.test(name) ? boolHook : nodeHook);
            }
            if (value !== undefined) {
                if (value === null) {
                    jQuery.removeAttr(elem, name);
                } else if (hooks && notxml && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
                    return ret;
                } else {
                    elem.setAttribute(name, value + "");
                    return value;
                }
            } else if (hooks && notxml && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
                return ret;
            } else {
                if (typeof elem.getAttribute !== "undefined") {
                    ret = elem.getAttribute(name);
                }
                return ret == null ? undefined : ret;
            }
        },
        removeAttr: function(elem, value) {
            var name, propName, i = 0, attrNames = value && value.match(core_rnotwhite);
            if (attrNames && elem.nodeType === 1) {
                while (name = attrNames[i++]) {
                    propName = jQuery.propFix[name] || name;
                    if (rboolean.test(name)) {
                        if (!getSetAttribute && ruseDefault.test(name)) {
                            elem[jQuery.camelCase("default-" + name)] = elem[propName] = false;
                        } else {
                            elem[propName] = false;
                        }
                    } else {
                        jQuery.attr(elem, name, "");
                    }
                    elem.removeAttribute(getSetAttribute ? name : propName);
                }
            }
        },
        attrHooks: {
            type: {
                set: function(elem, value) {
                    if (!jQuery.support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
                        var val = elem.value;
                        elem.setAttribute("type", value);
                        if (val) {
                            elem.value = val;
                        }
                        return value;
                    }
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(elem, name, value) {
            var ret, hooks, notxml, nType = elem.nodeType;
            if (!elem || nType === 3 || nType === 8 || nType === 2) {
                return;
            }
            notxml = nType !== 1 || !jQuery.isXMLDoc(elem);
            if (notxml) {
                name = jQuery.propFix[name] || name;
                hooks = jQuery.propHooks[name];
            }
            if (value !== undefined) {
                if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
                    return ret;
                } else {
                    return elem[name] = value;
                }
            } else {
                if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
                    return ret;
                } else {
                    return elem[name];
                }
            }
        },
        propHooks: {
            tabIndex: {
                get: function(elem) {
                    var attributeNode = elem.getAttributeNode("tabindex");
                    return attributeNode && attributeNode.specified ? parseInt(attributeNode.value, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : undefined;
                }
            }
        }
    });
    boolHook = {
        get: function(elem, name) {
            var prop = jQuery.prop(elem, name), attr = typeof prop === "boolean" && elem.getAttribute(name), detail = typeof prop === "boolean" ? getSetInput && getSetAttribute ? attr != null : ruseDefault.test(name) ? elem[jQuery.camelCase("default-" + name)] : !!attr : elem.getAttributeNode(name);
            return detail && detail.value !== false ? name.toLowerCase() : undefined;
        },
        set: function(elem, value, name) {
            if (value === false) {
                jQuery.removeAttr(elem, name);
            } else if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
                elem.setAttribute(!getSetAttribute && jQuery.propFix[name] || name, name);
            } else {
                elem[jQuery.camelCase("default-" + name)] = elem[name] = true;
            }
            return name;
        }
    };
    if (!getSetInput || !getSetAttribute) {
        jQuery.attrHooks.value = {
            get: function(elem, name) {
                var ret = elem.getAttributeNode(name);
                return jQuery.nodeName(elem, "input") ? elem.defaultValue : ret && ret.specified ? ret.value : undefined;
            },
            set: function(elem, value, name) {
                if (jQuery.nodeName(elem, "input")) {
                    elem.defaultValue = value;
                } else {
                    return nodeHook && nodeHook.set(elem, value, name);
                }
            }
        };
    }
    if (!getSetAttribute) {
        nodeHook = jQuery.valHooks.button = {
            get: function(elem, name) {
                var ret = elem.getAttributeNode(name);
                return ret && (name === "id" || name === "name" || name === "coords" ? ret.value !== "" : ret.specified) ? ret.value : undefined;
            },
            set: function(elem, value, name) {
                var ret = elem.getAttributeNode(name);
                if (!ret) {
                    elem.setAttributeNode(ret = elem.ownerDocument.createAttribute(name));
                }
                ret.value = value += "";
                return name === "value" || value === elem.getAttribute(name) ? value : undefined;
            }
        };
        jQuery.attrHooks.contenteditable = {
            get: nodeHook.get,
            set: function(elem, value, name) {
                nodeHook.set(elem, value === "" ? false : value, name);
            }
        };
        jQuery.each([ "width", "height" ], function(i, name) {
            jQuery.attrHooks[name] = jQuery.extend(jQuery.attrHooks[name], {
                set: function(elem, value) {
                    if (value === "") {
                        elem.setAttribute(name, "auto");
                        return value;
                    }
                }
            });
        });
    }
    if (!jQuery.support.hrefNormalized) {
        jQuery.each([ "href", "src", "width", "height" ], function(i, name) {
            jQuery.attrHooks[name] = jQuery.extend(jQuery.attrHooks[name], {
                get: function(elem) {
                    var ret = elem.getAttribute(name, 2);
                    return ret == null ? undefined : ret;
                }
            });
        });
        jQuery.each([ "href", "src" ], function(i, name) {
            jQuery.propHooks[name] = {
                get: function(elem) {
                    return elem.getAttribute(name, 4);
                }
            };
        });
    }
    if (!jQuery.support.style) {
        jQuery.attrHooks.style = {
            get: function(elem) {
                return elem.style.cssText || undefined;
            },
            set: function(elem, value) {
                return elem.style.cssText = value + "";
            }
        };
    }
    if (!jQuery.support.optSelected) {
        jQuery.propHooks.selected = jQuery.extend(jQuery.propHooks.selected, {
            get: function(elem) {
                var parent = elem.parentNode;
                if (parent) {
                    parent.selectedIndex;
                    if (parent.parentNode) {
                        parent.parentNode.selectedIndex;
                    }
                }
                return null;
            }
        });
    }
    if (!jQuery.support.enctype) {
        jQuery.propFix.enctype = "encoding";
    }
    if (!jQuery.support.checkOn) {
        jQuery.each([ "radio", "checkbox" ], function() {
            jQuery.valHooks[this] = {
                get: function(elem) {
                    return elem.getAttribute("value") === null ? "on" : elem.value;
                }
            };
        });
    }
    jQuery.each([ "radio", "checkbox" ], function() {
        jQuery.valHooks[this] = jQuery.extend(jQuery.valHooks[this], {
            set: function(elem, value) {
                if (jQuery.isArray(value)) {
                    return elem.checked = jQuery.inArray(jQuery(elem).val(), value) >= 0;
                }
            }
        });
    });
    var rformElems = /^(?:input|select|textarea)$/i, rkeyEvent = /^key/, rmouseEvent = /^(?:mouse|contextmenu)|click/, rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;
    function returnTrue() {
        return true;
    }
    function returnFalse() {
        return false;
    }
    jQuery.event = {
        global: {},
        add: function(elem, types, handler, data, selector) {
            var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = elem.nodeType !== 3 && elem.nodeType !== 8 && jQuery._data(elem);
            if (!elemData) {
                return;
            }
            if (handler.handler) {
                handleObjIn = handler;
                handler = handleObjIn.handler;
                selector = handleObjIn.selector;
            }
            if (!handler.guid) {
                handler.guid = jQuery.guid++;
            }
            if (!(events = elemData.events)) {
                events = elemData.events = {};
            }
            if (!(eventHandle = elemData.handle)) {
                eventHandle = elemData.handle = function(e) {
                    return typeof jQuery !== "undefined" && (!e || jQuery.event.triggered !== e.type) ? jQuery.event.dispatch.apply(eventHandle.elem, arguments) : undefined;
                };
                eventHandle.elem = elem;
            }
            types = (types || "").match(core_rnotwhite) || [ "" ];
            t = types.length;
            while (t--) {
                tmp = rtypenamespace.exec(types[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort();
                special = jQuery.event.special[type] || {};
                type = (selector ? special.delegateType : special.bindType) || type;
                special = jQuery.event.special[type] || {};
                handleObj = jQuery.extend({
                    type: type,
                    origType: origType,
                    data: data,
                    handler: handler,
                    guid: handler.guid,
                    selector: selector,
                    needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                    namespace: namespaces.join(".")
                }, handleObjIn);
                if (!(handlers = events[type])) {
                    handlers = events[type] = [];
                    handlers.delegateCount = 0;
                    if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                        if (elem.addEventListener) {
                            elem.addEventListener(type, eventHandle, false);
                        } else if (elem.attachEvent) {
                            elem.attachEvent("on" + type, eventHandle);
                        }
                    }
                }
                if (special.add) {
                    special.add.call(elem, handleObj);
                    if (!handleObj.handler.guid) {
                        handleObj.handler.guid = handler.guid;
                    }
                }
                if (selector) {
                    handlers.splice(handlers.delegateCount++, 0, handleObj);
                } else {
                    handlers.push(handleObj);
                }
                jQuery.event.global[type] = true;
            }
            elem = null;
        },
        remove: function(elem, types, handler, selector, mappedTypes) {
            var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = jQuery.hasData(elem) && jQuery._data(elem);
            if (!elemData || !(events = elemData.events)) {
                return;
            }
            types = (types || "").match(core_rnotwhite) || [ "" ];
            t = types.length;
            while (t--) {
                tmp = rtypenamespace.exec(types[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort();
                if (!type) {
                    for (type in events) {
                        jQuery.event.remove(elem, type + types[t], handler, selector, true);
                    }
                    continue;
                }
                special = jQuery.event.special[type] || {};
                type = (selector ? special.delegateType : special.bindType) || type;
                handlers = events[type] || [];
                tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
                origCount = j = handlers.length;
                while (j--) {
                    handleObj = handlers[j];
                    if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                        handlers.splice(j, 1);
                        if (handleObj.selector) {
                            handlers.delegateCount--;
                        }
                        if (special.remove) {
                            special.remove.call(elem, handleObj);
                        }
                    }
                }
                if (origCount && !handlers.length) {
                    if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                        jQuery.removeEvent(elem, type, elemData.handle);
                    }
                    delete events[type];
                }
            }
            if (jQuery.isEmptyObject(events)) {
                delete elemData.handle;
                jQuery._removeData(elem, "events");
            }
        },
        trigger: function(event, data, elem, onlyHandlers) {
            var i, cur, tmp, bubbleType, ontype, handle, special, eventPath = [ elem || document ], type = event.type || event, namespaces = event.namespace ? event.namespace.split(".") : [];
            cur = tmp = elem = elem || document;
            if (elem.nodeType === 3 || elem.nodeType === 8) {
                return;
            }
            if (rfocusMorph.test(type + jQuery.event.triggered)) {
                return;
            }
            if (type.indexOf(".") >= 0) {
                namespaces = type.split(".");
                type = namespaces.shift();
                namespaces.sort();
            }
            ontype = type.indexOf(":") < 0 && "on" + type;
            event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
            event.isTrigger = true;
            event.namespace = namespaces.join(".");
            event.namespace_re = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            event.result = undefined;
            if (!event.target) {
                event.target = elem;
            }
            data = data == null ? [ event ] : jQuery.makeArray(data, [ event ]);
            special = jQuery.event.special[type] || {};
            if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
                return;
            }
            if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
                bubbleType = special.delegateType || type;
                if (!rfocusMorph.test(bubbleType + type)) {
                    cur = cur.parentNode;
                }
                for (;cur; cur = cur.parentNode) {
                    eventPath.push(cur);
                    tmp = cur;
                }
                if (tmp === (elem.ownerDocument || document)) {
                    eventPath.push(tmp.defaultView || tmp.parentWindow || window);
                }
            }
            i = 0;
            while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
                event.type = i > 1 ? bubbleType : special.bindType || type;
                handle = (jQuery._data(cur, "events") || {})[event.type] && jQuery._data(cur, "handle");
                if (handle) {
                    handle.apply(cur, data);
                }
                handle = ontype && cur[ontype];
                if (handle && jQuery.acceptData(cur) && handle.apply && handle.apply(cur, data) === false) {
                    event.preventDefault();
                }
            }
            event.type = type;
            if (!onlyHandlers && !event.isDefaultPrevented()) {
                if ((!special._default || special._default.apply(elem.ownerDocument, data) === false) && !(type === "click" && jQuery.nodeName(elem, "a")) && jQuery.acceptData(elem)) {
                    if (ontype && elem[type] && !jQuery.isWindow(elem)) {
                        tmp = elem[ontype];
                        if (tmp) {
                            elem[ontype] = null;
                        }
                        jQuery.event.triggered = type;
                        try {
                            elem[type]();
                        } catch (e) {}
                        jQuery.event.triggered = undefined;
                        if (tmp) {
                            elem[ontype] = tmp;
                        }
                    }
                }
            }
            return event.result;
        },
        dispatch: function(event) {
            event = jQuery.event.fix(event);
            var i, j, ret, matched, handleObj, handlerQueue = [], args = core_slice.call(arguments), handlers = (jQuery._data(this, "events") || {})[event.type] || [], special = jQuery.event.special[event.type] || {};
            args[0] = event;
            event.delegateTarget = this;
            if (special.preDispatch && special.preDispatch.call(this, event) === false) {
                return;
            }
            handlerQueue = jQuery.event.handlers.call(this, event, handlers);
            i = 0;
            while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
                event.currentTarget = matched.elem;
                j = 0;
                while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
                    if (!event.namespace_re || event.namespace_re.test(handleObj.namespace)) {
                        event.handleObj = handleObj;
                        event.data = handleObj.data;
                        ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                        if (ret !== undefined) {
                            if ((event.result = ret) === false) {
                                event.preventDefault();
                                event.stopPropagation();
                            }
                        }
                    }
                }
            }
            if (special.postDispatch) {
                special.postDispatch.call(this, event);
            }
            return event.result;
        },
        handlers: function(event, handlers) {
            var i, matches, sel, handleObj, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
            if (delegateCount && cur.nodeType && (!event.button || event.type !== "click")) {
                for (;cur != this; cur = cur.parentNode || this) {
                    if (cur.disabled !== true || event.type !== "click") {
                        matches = [];
                        for (i = 0; i < delegateCount; i++) {
                            handleObj = handlers[i];
                            sel = handleObj.selector + " ";
                            if (matches[sel] === undefined) {
                                matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) >= 0 : jQuery.find(sel, this, null, [ cur ]).length;
                            }
                            if (matches[sel]) {
                                matches.push(handleObj);
                            }
                        }
                        if (matches.length) {
                            handlerQueue.push({
                                elem: cur,
                                handlers: matches
                            });
                        }
                    }
                }
            }
            if (delegateCount < handlers.length) {
                handlerQueue.push({
                    elem: this,
                    handlers: handlers.slice(delegateCount)
                });
            }
            return handlerQueue;
        },
        fix: function(event) {
            if (event[jQuery.expando]) {
                return event;
            }
            var i, prop, originalEvent = event, fixHook = jQuery.event.fixHooks[event.type] || {}, copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;
            event = new jQuery.Event(originalEvent);
            i = copy.length;
            while (i--) {
                prop = copy[i];
                event[prop] = originalEvent[prop];
            }
            if (!event.target) {
                event.target = originalEvent.srcElement || document;
            }
            if (event.target.nodeType === 3) {
                event.target = event.target.parentNode;
            }
            event.metaKey = !!event.metaKey;
            return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(event, original) {
                if (event.which == null) {
                    event.which = original.charCode != null ? original.charCode : original.keyCode;
                }
                return event;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(event, original) {
                var eventDoc, doc, body, button = original.button, fromElement = original.fromElement;
                if (event.pageX == null && original.clientX != null) {
                    eventDoc = event.target.ownerDocument || document;
                    doc = eventDoc.documentElement;
                    body = eventDoc.body;
                    event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
                    event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
                }
                if (!event.relatedTarget && fromElement) {
                    event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
                }
                if (!event.which && button !== undefined) {
                    event.which = button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0;
                }
                return event;
            }
        },
        special: {
            load: {
                noBubble: true
            },
            click: {
                trigger: function() {
                    if (jQuery.nodeName(this, "input") && this.type === "checkbox" && this.click) {
                        this.click();
                        return false;
                    }
                }
            },
            focus: {
                trigger: function() {
                    if (this !== document.activeElement && this.focus) {
                        try {
                            this.focus();
                            return false;
                        } catch (e) {}
                    }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === document.activeElement && this.blur) {
                        this.blur();
                        return false;
                    }
                },
                delegateType: "focusout"
            },
            beforeunload: {
                postDispatch: function(event) {
                    if (event.result !== undefined) {
                        event.originalEvent.returnValue = event.result;
                    }
                }
            }
        },
        simulate: function(type, elem, event, bubble) {
            var e = jQuery.extend(new jQuery.Event(), event, {
                type: type,
                isSimulated: true,
                originalEvent: {}
            });
            if (bubble) {
                jQuery.event.trigger(e, null, elem);
            } else {
                jQuery.event.dispatch.call(elem, e);
            }
            if (e.isDefaultPrevented()) {
                event.preventDefault();
            }
        }
    };
    jQuery.removeEvent = document.removeEventListener ? function(elem, type, handle) {
        if (elem.removeEventListener) {
            elem.removeEventListener(type, handle, false);
        }
    } : function(elem, type, handle) {
        var name = "on" + type;
        if (elem.detachEvent) {
            if (typeof elem[name] === "undefined") {
                elem[name] = null;
            }
            elem.detachEvent(name, handle);
        }
    };
    jQuery.Event = function(src, props) {
        if (!(this instanceof jQuery.Event)) {
            return new jQuery.Event(src, props);
        }
        if (src && src.type) {
            this.originalEvent = src;
            this.type = src.type;
            this.isDefaultPrevented = src.defaultPrevented || src.returnValue === false || src.getPreventDefault && src.getPreventDefault() ? returnTrue : returnFalse;
        } else {
            this.type = src;
        }
        if (props) {
            jQuery.extend(this, props);
        }
        this.timeStamp = src && src.timeStamp || jQuery.now();
        this[jQuery.expando] = true;
    };
    jQuery.Event.prototype = {
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = returnTrue;
            if (!e) {
                return;
            }
            if (e.preventDefault) {
                e.preventDefault();
            } else {
                e.returnValue = false;
            }
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = returnTrue;
            if (!e) {
                return;
            }
            if (e.stopPropagation) {
                e.stopPropagation();
            }
            e.cancelBubble = true;
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = returnTrue;
            this.stopPropagation();
        }
    };
    jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(orig, fix) {
        jQuery.event.special[orig] = {
            delegateType: fix,
            bindType: fix,
            handle: function(event) {
                var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
                if (!related || related !== target && !jQuery.contains(target, related)) {
                    event.type = handleObj.origType;
                    ret = handleObj.handler.apply(this, arguments);
                    event.type = fix;
                }
                return ret;
            }
        };
    });
    if (!jQuery.support.submitBubbles) {
        jQuery.event.special.submit = {
            setup: function() {
                if (jQuery.nodeName(this, "form")) {
                    return false;
                }
                jQuery.event.add(this, "click._submit keypress._submit", function(e) {
                    var elem = e.target, form = jQuery.nodeName(elem, "input") || jQuery.nodeName(elem, "button") ? elem.form : undefined;
                    if (form && !jQuery._data(form, "submitBubbles")) {
                        jQuery.event.add(form, "submit._submit", function(event) {
                            event._submit_bubble = true;
                        });
                        jQuery._data(form, "submitBubbles", true);
                    }
                });
            },
            postDispatch: function(event) {
                if (event._submit_bubble) {
                    delete event._submit_bubble;
                    if (this.parentNode && !event.isTrigger) {
                        jQuery.event.simulate("submit", this.parentNode, event, true);
                    }
                }
            },
            teardown: function() {
                if (jQuery.nodeName(this, "form")) {
                    return false;
                }
                jQuery.event.remove(this, "._submit");
            }
        };
    }
    if (!jQuery.support.changeBubbles) {
        jQuery.event.special.change = {
            setup: function() {
                if (rformElems.test(this.nodeName)) {
                    if (this.type === "checkbox" || this.type === "radio") {
                        jQuery.event.add(this, "propertychange._change", function(event) {
                            if (event.originalEvent.propertyName === "checked") {
                                this._just_changed = true;
                            }
                        });
                        jQuery.event.add(this, "click._change", function(event) {
                            if (this._just_changed && !event.isTrigger) {
                                this._just_changed = false;
                            }
                            jQuery.event.simulate("change", this, event, true);
                        });
                    }
                    return false;
                }
                jQuery.event.add(this, "beforeactivate._change", function(e) {
                    var elem = e.target;
                    if (rformElems.test(elem.nodeName) && !jQuery._data(elem, "changeBubbles")) {
                        jQuery.event.add(elem, "change._change", function(event) {
                            if (this.parentNode && !event.isSimulated && !event.isTrigger) {
                                jQuery.event.simulate("change", this.parentNode, event, true);
                            }
                        });
                        jQuery._data(elem, "changeBubbles", true);
                    }
                });
            },
            handle: function(event) {
                var elem = event.target;
                if (this !== elem || event.isSimulated || event.isTrigger || elem.type !== "radio" && elem.type !== "checkbox") {
                    return event.handleObj.handler.apply(this, arguments);
                }
            },
            teardown: function() {
                jQuery.event.remove(this, "._change");
                return !rformElems.test(this.nodeName);
            }
        };
    }
    if (!jQuery.support.focusinBubbles) {
        jQuery.each({
            focus: "focusin",
            blur: "focusout"
        }, function(orig, fix) {
            var attaches = 0, handler = function(event) {
                jQuery.event.simulate(fix, event.target, jQuery.event.fix(event), true);
            };
            jQuery.event.special[fix] = {
                setup: function() {
                    if (attaches++ === 0) {
                        document.addEventListener(orig, handler, true);
                    }
                },
                teardown: function() {
                    if (--attaches === 0) {
                        document.removeEventListener(orig, handler, true);
                    }
                }
            };
        });
    }
    jQuery.fn.extend({
        on: function(types, selector, data, fn, one) {
            var origFn, type;
            if (typeof types === "object") {
                if (typeof selector !== "string") {
                    data = data || selector;
                    selector = undefined;
                }
                for (type in types) {
                    this.on(type, selector, data, types[type], one);
                }
                return this;
            }
            if (data == null && fn == null) {
                fn = selector;
                data = selector = undefined;
            } else if (fn == null) {
                if (typeof selector === "string") {
                    fn = data;
                    data = undefined;
                } else {
                    fn = data;
                    data = selector;
                    selector = undefined;
                }
            }
            if (fn === false) {
                fn = returnFalse;
            } else if (!fn) {
                return this;
            }
            if (one === 1) {
                origFn = fn;
                fn = function(event) {
                    jQuery().off(event);
                    return origFn.apply(this, arguments);
                };
                fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
            }
            return this.each(function() {
                jQuery.event.add(this, types, fn, data, selector);
            });
        },
        one: function(types, selector, data, fn) {
            return this.on(types, selector, data, fn, 1);
        },
        off: function(types, selector, fn) {
            var handleObj, type;
            if (types && types.preventDefault && types.handleObj) {
                handleObj = types.handleObj;
                jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
                return this;
            }
            if (typeof types === "object") {
                for (type in types) {
                    this.off(type, selector, types[type]);
                }
                return this;
            }
            if (selector === false || typeof selector === "function") {
                fn = selector;
                selector = undefined;
            }
            if (fn === false) {
                fn = returnFalse;
            }
            return this.each(function() {
                jQuery.event.remove(this, types, fn, selector);
            });
        },
        bind: function(types, data, fn) {
            return this.on(types, null, data, fn);
        },
        unbind: function(types, fn) {
            return this.off(types, null, fn);
        },
        delegate: function(selector, types, data, fn) {
            return this.on(types, selector, data, fn);
        },
        undelegate: function(selector, types, fn) {
            return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
        },
        trigger: function(type, data) {
            return this.each(function() {
                jQuery.event.trigger(type, data, this);
            });
        },
        triggerHandler: function(type, data) {
            var elem = this[0];
            if (elem) {
                return jQuery.event.trigger(type, data, elem, true);
            }
        },
        hover: function(fnOver, fnOut) {
            return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
        }
    });
    jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function(i, name) {
        jQuery.fn[name] = function(data, fn) {
            return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
        };
        if (rkeyEvent.test(name)) {
            jQuery.event.fixHooks[name] = jQuery.event.keyHooks;
        }
        if (rmouseEvent.test(name)) {
            jQuery.event.fixHooks[name] = jQuery.event.mouseHooks;
        }
    });
    (function(window, undefined) {
        var i, cachedruns, Expr, getText, isXML, compile, hasDuplicate, outermostContext, setDocument, document, docElem, documentIsXML, rbuggyQSA, rbuggyMatches, matches, contains, sortOrder, expando = "sizzle" + -new Date(), preferredDoc = window.document, support = {}, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), strundefined = typeof undefined, MAX_NEGATIVE = 1 << 31, arr = [], pop = arr.pop, push = arr.push, slice = arr.slice, indexOf = arr.indexOf || function(elem) {
            var i = 0, len = this.length;
            for (;i < len; i++) {
                if (this[i] === elem) {
                    return i;
                }
            }
            return -1;
        }, whitespace = "[\\x20\\t\\r\\n\\f]", characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", identifier = characterEncoding.replace("w", "w#"), operators = "([*^$|!~]?=)", attributes = "\\[" + whitespace + "*(" + characterEncoding + ")" + whitespace + "*(?:" + operators + whitespace + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + identifier + ")|)|)" + whitespace + "*\\]", pseudos = ":(" + characterEncoding + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + attributes.replace(3, 8) + ")*)|.*)\\)|)", rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rcombinators = new RegExp("^" + whitespace + "*([\\x20\\t\\r\\n\\f>+~])" + whitespace + "*"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
            ID: new RegExp("^#(" + characterEncoding + ")"),
            CLASS: new RegExp("^\\.(" + characterEncoding + ")"),
            NAME: new RegExp("^\\[name=['\"]?(" + characterEncoding + ")['\"]?\\]"),
            TAG: new RegExp("^(" + characterEncoding.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + attributes),
            PSEUDO: new RegExp("^" + pseudos),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
            needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
        }, rsibling = /[\x20\t\r\n\f]*[+~]/, rnative = /\{\s*\[native code\]\s*\}/, rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rescape = /'|\\/g, rattributeQuotes = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, runescape = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g, funescape = function(_, escaped) {
            var high = "0x" + escaped - 65536;
            return high !== high ? escaped : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
        };
        try {
            slice.call(docElem.childNodes, 0)[0].nodeType;
        } catch (e) {
            slice = function(i) {
                var elem, results = [];
                for (;elem = this[i]; i++) {
                    results.push(elem);
                }
                return results;
            };
        }
        function isNative(fn) {
            return rnative.test(fn + "");
        }
        function createCache() {
            var cache, keys = [];
            return cache = function(key, value) {
                if (keys.push(key += " ") > Expr.cacheLength) {
                    delete cache[keys.shift()];
                }
                return cache[key] = value;
            };
        }
        function markFunction(fn) {
            fn[expando] = true;
            return fn;
        }
        function assert(fn) {
            var div = document.createElement("div");
            try {
                return fn(div);
            } catch (e) {
                return false;
            } finally {
                div = null;
            }
        }
        function Sizzle(selector, context, results, seed) {
            var match, elem, m, nodeType, i, groups, old, nid, newContext, newSelector;
            if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
                setDocument(context);
            }
            context = context || document;
            results = results || [];
            if (!selector || typeof selector !== "string") {
                return results;
            }
            if ((nodeType = context.nodeType) !== 1 && nodeType !== 9) {
                return [];
            }
            if (!documentIsXML && !seed) {
                if (match = rquickExpr.exec(selector)) {
                    if (m = match[1]) {
                        if (nodeType === 9) {
                            elem = context.getElementById(m);
                            if (elem && elem.parentNode) {
                                if (elem.id === m) {
                                    results.push(elem);
                                    return results;
                                }
                            } else {
                                return results;
                            }
                        } else {
                            if (context.ownerDocument && (elem = context.ownerDocument.getElementById(m)) && contains(context, elem) && elem.id === m) {
                                results.push(elem);
                                return results;
                            }
                        }
                    } else if (match[2]) {
                        push.apply(results, slice.call(context.getElementsByTagName(selector), 0));
                        return results;
                    } else if ((m = match[3]) && support.getByClassName && context.getElementsByClassName) {
                        push.apply(results, slice.call(context.getElementsByClassName(m), 0));
                        return results;
                    }
                }
                if (support.qsa && !rbuggyQSA.test(selector)) {
                    old = true;
                    nid = expando;
                    newContext = context;
                    newSelector = nodeType === 9 && selector;
                    if (nodeType === 1 && context.nodeName.toLowerCase() !== "object") {
                        groups = tokenize(selector);
                        if (old = context.getAttribute("id")) {
                            nid = old.replace(rescape, "\\$&");
                        } else {
                            context.setAttribute("id", nid);
                        }
                        nid = "[id='" + nid + "'] ";
                        i = groups.length;
                        while (i--) {
                            groups[i] = nid + toSelector(groups[i]);
                        }
                        newContext = rsibling.test(selector) && context.parentNode || context;
                        newSelector = groups.join(",");
                    }
                    if (newSelector) {
                        try {
                            push.apply(results, slice.call(newContext.querySelectorAll(newSelector), 0));
                            return results;
                        } catch (qsaError) {} finally {
                            if (!old) {
                                context.removeAttribute("id");
                            }
                        }
                    }
                }
            }
            return select(selector.replace(rtrim, "$1"), context, results, seed);
        }
        isXML = Sizzle.isXML = function(elem) {
            var documentElement = elem && (elem.ownerDocument || elem).documentElement;
            return documentElement ? documentElement.nodeName !== "HTML" : false;
        };
        setDocument = Sizzle.setDocument = function(node) {
            var doc = node ? node.ownerDocument || node : preferredDoc;
            if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
                return document;
            }
            document = doc;
            docElem = doc.documentElement;
            documentIsXML = isXML(doc);
            support.tagNameNoComments = assert(function(div) {
                div.appendChild(doc.createComment(""));
                return !div.getElementsByTagName("*").length;
            });
            support.attributes = assert(function(div) {
                div.innerHTML = "<select></select>";
                var type = typeof div.lastChild.getAttribute("multiple");
                return type !== "boolean" && type !== "string";
            });
            support.getByClassName = assert(function(div) {
                div.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>";
                if (!div.getElementsByClassName || !div.getElementsByClassName("e").length) {
                    return false;
                }
                div.lastChild.className = "e";
                return div.getElementsByClassName("e").length === 2;
            });
            support.getByName = assert(function(div) {
                div.id = expando + 0;
                div.innerHTML = "<a name='" + expando + "'></a><div name='" + expando + "'></div>";
                docElem.insertBefore(div, docElem.firstChild);
                var pass = doc.getElementsByName && doc.getElementsByName(expando).length === 2 + doc.getElementsByName(expando + 0).length;
                support.getIdNotName = !doc.getElementById(expando);
                docElem.removeChild(div);
                return pass;
            });
            Expr.attrHandle = assert(function(div) {
                div.innerHTML = "<a href='#'></a>";
                return div.firstChild && typeof div.firstChild.getAttribute !== strundefined && div.firstChild.getAttribute("href") === "#";
            }) ? {} : {
                href: function(elem) {
                    return elem.getAttribute("href", 2);
                },
                type: function(elem) {
                    return elem.getAttribute("type");
                }
            };
            if (support.getIdNotName) {
                Expr.find["ID"] = function(id, context) {
                    if (typeof context.getElementById !== strundefined && !documentIsXML) {
                        var m = context.getElementById(id);
                        return m && m.parentNode ? [ m ] : [];
                    }
                };
                Expr.filter["ID"] = function(id) {
                    var attrId = id.replace(runescape, funescape);
                    return function(elem) {
                        return elem.getAttribute("id") === attrId;
                    };
                };
            } else {
                Expr.find["ID"] = function(id, context) {
                    if (typeof context.getElementById !== strundefined && !documentIsXML) {
                        var m = context.getElementById(id);
                        return m ? m.id === id || typeof m.getAttributeNode !== strundefined && m.getAttributeNode("id").value === id ? [ m ] : undefined : [];
                    }
                };
                Expr.filter["ID"] = function(id) {
                    var attrId = id.replace(runescape, funescape);
                    return function(elem) {
                        var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
                        return node && node.value === attrId;
                    };
                };
            }
            Expr.find["TAG"] = support.tagNameNoComments ? function(tag, context) {
                if (typeof context.getElementsByTagName !== strundefined) {
                    return context.getElementsByTagName(tag);
                }
            } : function(tag, context) {
                var elem, tmp = [], i = 0, results = context.getElementsByTagName(tag);
                if (tag === "*") {
                    for (;elem = results[i]; i++) {
                        if (elem.nodeType === 1) {
                            tmp.push(elem);
                        }
                    }
                    return tmp;
                }
                return results;
            };
            Expr.find["NAME"] = support.getByName && function(tag, context) {
                if (typeof context.getElementsByName !== strundefined) {
                    return context.getElementsByName(name);
                }
            };
            Expr.find["CLASS"] = support.getByClassName && function(className, context) {
                if (typeof context.getElementsByClassName !== strundefined && !documentIsXML) {
                    return context.getElementsByClassName(className);
                }
            };
            rbuggyMatches = [];
            rbuggyQSA = [ ":focus" ];
            if (support.qsa = isNative(doc.querySelectorAll)) {
                assert(function(div) {
                    div.innerHTML = "<select><option selected=''></option></select>";
                    if (!div.querySelectorAll("[selected]").length) {
                        rbuggyQSA.push("\\[" + whitespace + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
                    }
                    if (!div.querySelectorAll(":checked").length) {
                        rbuggyQSA.push(":checked");
                    }
                });
                assert(function(div) {
                    div.innerHTML = "<input type='hidden' i=''/>";
                    if (div.querySelectorAll("[i^='']").length) {
                        rbuggyQSA.push("[*^$]=" + whitespace + "*(?:\"\"|'')");
                    }
                    if (!div.querySelectorAll(":enabled").length) {
                        rbuggyQSA.push(":enabled", ":disabled");
                    }
                    div.querySelectorAll("*,:x");
                    rbuggyQSA.push(",.*:");
                });
            }
            if (support.matchesSelector = isNative(matches = docElem.matchesSelector || docElem.mozMatchesSelector || docElem.webkitMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
                assert(function(div) {
                    support.disconnectedMatch = matches.call(div, "div");
                    matches.call(div, "[s!='']:x");
                    rbuggyMatches.push("!=", pseudos);
                });
            }
            rbuggyQSA = new RegExp(rbuggyQSA.join("|"));
            rbuggyMatches = new RegExp(rbuggyMatches.join("|"));
            contains = isNative(docElem.contains) || docElem.compareDocumentPosition ? function(a, b) {
                var adown = a.nodeType === 9 ? a.documentElement : a, bup = b && b.parentNode;
                return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
            } : function(a, b) {
                if (b) {
                    while (b = b.parentNode) {
                        if (b === a) {
                            return true;
                        }
                    }
                }
                return false;
            };
            sortOrder = docElem.compareDocumentPosition ? function(a, b) {
                var compare;
                if (a === b) {
                    hasDuplicate = true;
                    return 0;
                }
                if (compare = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(b)) {
                    if (compare & 1 || a.parentNode && a.parentNode.nodeType === 11) {
                        if (a === doc || contains(preferredDoc, a)) {
                            return -1;
                        }
                        if (b === doc || contains(preferredDoc, b)) {
                            return 1;
                        }
                        return 0;
                    }
                    return compare & 4 ? -1 : 1;
                }
                return a.compareDocumentPosition ? -1 : 1;
            } : function(a, b) {
                var cur, i = 0, aup = a.parentNode, bup = b.parentNode, ap = [ a ], bp = [ b ];
                if (a === b) {
                    hasDuplicate = true;
                    return 0;
                } else if (a.sourceIndex && b.sourceIndex) {
                    return (~b.sourceIndex || MAX_NEGATIVE) - (contains(preferredDoc, a) && ~a.sourceIndex || MAX_NEGATIVE);
                } else if (!aup || !bup) {
                    return a === doc ? -1 : b === doc ? 1 : aup ? -1 : bup ? 1 : 0;
                } else if (aup === bup) {
                    return siblingCheck(a, b);
                }
                cur = a;
                while (cur = cur.parentNode) {
                    ap.unshift(cur);
                }
                cur = b;
                while (cur = cur.parentNode) {
                    bp.unshift(cur);
                }
                while (ap[i] === bp[i]) {
                    i++;
                }
                return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
            };
            hasDuplicate = false;
            [ 0, 0 ].sort(sortOrder);
            support.detectDuplicates = hasDuplicate;
            return document;
        };
        Sizzle.matches = function(expr, elements) {
            return Sizzle(expr, null, null, elements);
        };
        Sizzle.matchesSelector = function(elem, expr) {
            if ((elem.ownerDocument || elem) !== document) {
                setDocument(elem);
            }
            expr = expr.replace(rattributeQuotes, "='$1']");
            if (support.matchesSelector && !documentIsXML && (!rbuggyMatches || !rbuggyMatches.test(expr)) && !rbuggyQSA.test(expr)) {
                try {
                    var ret = matches.call(elem, expr);
                    if (ret || support.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
                        return ret;
                    }
                } catch (e) {}
            }
            return Sizzle(expr, document, null, [ elem ]).length > 0;
        };
        Sizzle.contains = function(context, elem) {
            if ((context.ownerDocument || context) !== document) {
                setDocument(context);
            }
            return contains(context, elem);
        };
        Sizzle.attr = function(elem, name) {
            var val;
            if ((elem.ownerDocument || elem) !== document) {
                setDocument(elem);
            }
            if (!documentIsXML) {
                name = name.toLowerCase();
            }
            if (val = Expr.attrHandle[name]) {
                return val(elem);
            }
            if (documentIsXML || support.attributes) {
                return elem.getAttribute(name);
            }
            return ((val = elem.getAttributeNode(name)) || elem.getAttribute(name)) && elem[name] === true ? name : val && val.specified ? val.value : null;
        };
        Sizzle.error = function(msg) {
            throw new Error("Syntax error, unrecognized expression: " + msg);
        };
        Sizzle.uniqueSort = function(results) {
            var elem, duplicates = [], i = 1, j = 0;
            hasDuplicate = !support.detectDuplicates;
            results.sort(sortOrder);
            if (hasDuplicate) {
                for (;elem = results[i]; i++) {
                    if (elem === results[i - 1]) {
                        j = duplicates.push(i);
                    }
                }
                while (j--) {
                    results.splice(duplicates[j], 1);
                }
            }
            return results;
        };
        function siblingCheck(a, b) {
            var cur = a && b && a.nextSibling;
            for (;cur; cur = cur.nextSibling) {
                if (cur === b) {
                    return -1;
                }
            }
            return a ? 1 : -1;
        }
        function createInputPseudo(type) {
            return function(elem) {
                var name = elem.nodeName.toLowerCase();
                return name === "input" && elem.type === type;
            };
        }
        function createButtonPseudo(type) {
            return function(elem) {
                var name = elem.nodeName.toLowerCase();
                return (name === "input" || name === "button") && elem.type === type;
            };
        }
        function createPositionalPseudo(fn) {
            return markFunction(function(argument) {
                argument = +argument;
                return markFunction(function(seed, matches) {
                    var j, matchIndexes = fn([], seed.length, argument), i = matchIndexes.length;
                    while (i--) {
                        if (seed[j = matchIndexes[i]]) {
                            seed[j] = !(matches[j] = seed[j]);
                        }
                    }
                });
            });
        }
        getText = Sizzle.getText = function(elem) {
            var node, ret = "", i = 0, nodeType = elem.nodeType;
            if (!nodeType) {
                for (;node = elem[i]; i++) {
                    ret += getText(node);
                }
            } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
                if (typeof elem.textContent === "string") {
                    return elem.textContent;
                } else {
                    for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                        ret += getText(elem);
                    }
                }
            } else if (nodeType === 3 || nodeType === 4) {
                return elem.nodeValue;
            }
            return ret;
        };
        Expr = Sizzle.selectors = {
            cacheLength: 50,
            createPseudo: markFunction,
            match: matchExpr,
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: true
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: true
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(match) {
                    match[1] = match[1].replace(runescape, funescape);
                    match[3] = (match[4] || match[5] || "").replace(runescape, funescape);
                    if (match[2] === "~=") {
                        match[3] = " " + match[3] + " ";
                    }
                    return match.slice(0, 4);
                },
                CHILD: function(match) {
                    match[1] = match[1].toLowerCase();
                    if (match[1].slice(0, 3) === "nth") {
                        if (!match[3]) {
                            Sizzle.error(match[0]);
                        }
                        match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                        match[5] = +(match[7] + match[8] || match[3] === "odd");
                    } else if (match[3]) {
                        Sizzle.error(match[0]);
                    }
                    return match;
                },
                PSEUDO: function(match) {
                    var excess, unquoted = !match[5] && match[2];
                    if (matchExpr["CHILD"].test(match[0])) {
                        return null;
                    }
                    if (match[4]) {
                        match[2] = match[4];
                    } else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                        match[0] = match[0].slice(0, excess);
                        match[2] = unquoted.slice(0, excess);
                    }
                    return match.slice(0, 3);
                }
            },
            filter: {
                TAG: function(nodeName) {
                    if (nodeName === "*") {
                        return function() {
                            return true;
                        };
                    }
                    nodeName = nodeName.replace(runescape, funescape).toLowerCase();
                    return function(elem) {
                        return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                    };
                },
                CLASS: function(className) {
                    var pattern = classCache[className + " "];
                    return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                        return pattern.test(elem.className || typeof elem.getAttribute !== strundefined && elem.getAttribute("class") || "");
                    });
                },
                ATTR: function(name, operator, check) {
                    return function(elem) {
                        var result = Sizzle.attr(elem, name);
                        if (result == null) {
                            return operator === "!=";
                        }
                        if (!operator) {
                            return true;
                        }
                        result += "";
                        return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.substr(result.length - check.length) === check : operator === "~=" ? (" " + result + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.substr(0, check.length + 1) === check + "-" : false;
                    };
                },
                CHILD: function(type, what, argument, first, last) {
                    var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
                    return first === 1 && last === 0 ? function(elem) {
                        return !!elem.parentNode;
                    } : function(elem, context, xml) {
                        var cache, outerCache, node, diff, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType;
                        if (parent) {
                            if (simple) {
                                while (dir) {
                                    node = elem;
                                    while (node = node[dir]) {
                                        if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                                            return false;
                                        }
                                    }
                                    start = dir = type === "only" && !start && "nextSibling";
                                }
                                return true;
                            }
                            start = [ forward ? parent.firstChild : parent.lastChild ];
                            if (forward && useCache) {
                                outerCache = parent[expando] || (parent[expando] = {});
                                cache = outerCache[type] || [];
                                nodeIndex = cache[0] === dirruns && cache[1];
                                diff = cache[0] === dirruns && cache[2];
                                node = nodeIndex && parent.childNodes[nodeIndex];
                                while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                                    if (node.nodeType === 1 && ++diff && node === elem) {
                                        outerCache[type] = [ dirruns, nodeIndex, diff ];
                                        break;
                                    }
                                }
                            } else if (useCache && (cache = (elem[expando] || (elem[expando] = {}))[type]) && cache[0] === dirruns) {
                                diff = cache[1];
                            } else {
                                while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                                    if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                                        if (useCache) {
                                            (node[expando] || (node[expando] = {}))[type] = [ dirruns, diff ];
                                        }
                                        if (node === elem) {
                                            break;
                                        }
                                    }
                                }
                            }
                            diff -= last;
                            return diff === first || diff % first === 0 && diff / first >= 0;
                        }
                    };
                },
                PSEUDO: function(pseudo, argument) {
                    var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
                    if (fn[expando]) {
                        return fn(argument);
                    }
                    if (fn.length > 1) {
                        args = [ pseudo, pseudo, "", argument ];
                        return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
                            var idx, matched = fn(seed, argument), i = matched.length;
                            while (i--) {
                                idx = indexOf.call(seed, matched[i]);
                                seed[idx] = !(matches[idx] = matched[i]);
                            }
                        }) : function(elem) {
                            return fn(elem, 0, args);
                        };
                    }
                    return fn;
                }
            },
            pseudos: {
                not: markFunction(function(selector) {
                    var input = [], results = [], matcher = compile(selector.replace(rtrim, "$1"));
                    return matcher[expando] ? markFunction(function(seed, matches, context, xml) {
                        var elem, unmatched = matcher(seed, null, xml, []), i = seed.length;
                        while (i--) {
                            if (elem = unmatched[i]) {
                                seed[i] = !(matches[i] = elem);
                            }
                        }
                    }) : function(elem, context, xml) {
                        input[0] = elem;
                        matcher(input, null, xml, results);
                        return !results.pop();
                    };
                }),
                has: markFunction(function(selector) {
                    return function(elem) {
                        return Sizzle(selector, elem).length > 0;
                    };
                }),
                contains: markFunction(function(text) {
                    return function(elem) {
                        return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
                    };
                }),
                lang: markFunction(function(lang) {
                    if (!ridentifier.test(lang || "")) {
                        Sizzle.error("unsupported lang: " + lang);
                    }
                    lang = lang.replace(runescape, funescape).toLowerCase();
                    return function(elem) {
                        var elemLang;
                        do {
                            if (elemLang = documentIsXML ? elem.getAttribute("xml:lang") || elem.getAttribute("lang") : elem.lang) {
                                elemLang = elemLang.toLowerCase();
                                return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                            }
                        } while ((elem = elem.parentNode) && elem.nodeType === 1);
                        return false;
                    };
                }),
                target: function(elem) {
                    var hash = window.location && window.location.hash;
                    return hash && hash.slice(1) === elem.id;
                },
                root: function(elem) {
                    return elem === docElem;
                },
                focus: function(elem) {
                    return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
                },
                enabled: function(elem) {
                    return elem.disabled === false;
                },
                disabled: function(elem) {
                    return elem.disabled === true;
                },
                checked: function(elem) {
                    var nodeName = elem.nodeName.toLowerCase();
                    return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
                },
                selected: function(elem) {
                    if (elem.parentNode) {
                        elem.parentNode.selectedIndex;
                    }
                    return elem.selected === true;
                },
                empty: function(elem) {
                    for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                        if (elem.nodeName > "@" || elem.nodeType === 3 || elem.nodeType === 4) {
                            return false;
                        }
                    }
                    return true;
                },
                parent: function(elem) {
                    return !Expr.pseudos["empty"](elem);
                },
                header: function(elem) {
                    return rheader.test(elem.nodeName);
                },
                input: function(elem) {
                    return rinputs.test(elem.nodeName);
                },
                button: function(elem) {
                    var name = elem.nodeName.toLowerCase();
                    return name === "input" && elem.type === "button" || name === "button";
                },
                text: function(elem) {
                    var attr;
                    return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === elem.type);
                },
                first: createPositionalPseudo(function() {
                    return [ 0 ];
                }),
                last: createPositionalPseudo(function(matchIndexes, length) {
                    return [ length - 1 ];
                }),
                eq: createPositionalPseudo(function(matchIndexes, length, argument) {
                    return [ argument < 0 ? argument + length : argument ];
                }),
                even: createPositionalPseudo(function(matchIndexes, length) {
                    var i = 0;
                    for (;i < length; i += 2) {
                        matchIndexes.push(i);
                    }
                    return matchIndexes;
                }),
                odd: createPositionalPseudo(function(matchIndexes, length) {
                    var i = 1;
                    for (;i < length; i += 2) {
                        matchIndexes.push(i);
                    }
                    return matchIndexes;
                }),
                lt: createPositionalPseudo(function(matchIndexes, length, argument) {
                    var i = argument < 0 ? argument + length : argument;
                    for (;--i >= 0; ) {
                        matchIndexes.push(i);
                    }
                    return matchIndexes;
                }),
                gt: createPositionalPseudo(function(matchIndexes, length, argument) {
                    var i = argument < 0 ? argument + length : argument;
                    for (;++i < length; ) {
                        matchIndexes.push(i);
                    }
                    return matchIndexes;
                })
            }
        };
        for (i in {
            radio: true,
            checkbox: true,
            file: true,
            password: true,
            image: true
        }) {
            Expr.pseudos[i] = createInputPseudo(i);
        }
        for (i in {
            submit: true,
            reset: true
        }) {
            Expr.pseudos[i] = createButtonPseudo(i);
        }
        function tokenize(selector, parseOnly) {
            var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
            if (cached) {
                return parseOnly ? 0 : cached.slice(0);
            }
            soFar = selector;
            groups = [];
            preFilters = Expr.preFilter;
            while (soFar) {
                if (!matched || (match = rcomma.exec(soFar))) {
                    if (match) {
                        soFar = soFar.slice(match[0].length) || soFar;
                    }
                    groups.push(tokens = []);
                }
                matched = false;
                if (match = rcombinators.exec(soFar)) {
                    matched = match.shift();
                    tokens.push({
                        value: matched,
                        type: match[0].replace(rtrim, " ")
                    });
                    soFar = soFar.slice(matched.length);
                }
                for (type in Expr.filter) {
                    if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                        matched = match.shift();
                        tokens.push({
                            value: matched,
                            type: type,
                            matches: match
                        });
                        soFar = soFar.slice(matched.length);
                    }
                }
                if (!matched) {
                    break;
                }
            }
            return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0);
        }
        function toSelector(tokens) {
            var i = 0, len = tokens.length, selector = "";
            for (;i < len; i++) {
                selector += tokens[i].value;
            }
            return selector;
        }
        function addCombinator(matcher, combinator, base) {
            var dir = combinator.dir, checkNonElements = base && combinator.dir === "parentNode", doneName = done++;
            return combinator.first ? function(elem, context, xml) {
                while (elem = elem[dir]) {
                    if (elem.nodeType === 1 || checkNonElements) {
                        return matcher(elem, context, xml);
                    }
                }
            } : function(elem, context, xml) {
                var data, cache, outerCache, dirkey = dirruns + " " + doneName;
                if (xml) {
                    while (elem = elem[dir]) {
                        if (elem.nodeType === 1 || checkNonElements) {
                            if (matcher(elem, context, xml)) {
                                return true;
                            }
                        }
                    }
                } else {
                    while (elem = elem[dir]) {
                        if (elem.nodeType === 1 || checkNonElements) {
                            outerCache = elem[expando] || (elem[expando] = {});
                            if ((cache = outerCache[dir]) && cache[0] === dirkey) {
                                if ((data = cache[1]) === true || data === cachedruns) {
                                    return data === true;
                                }
                            } else {
                                cache = outerCache[dir] = [ dirkey ];
                                cache[1] = matcher(elem, context, xml) || cachedruns;
                                if (cache[1] === true) {
                                    return true;
                                }
                            }
                        }
                    }
                }
            };
        }
        function elementMatcher(matchers) {
            return matchers.length > 1 ? function(elem, context, xml) {
                var i = matchers.length;
                while (i--) {
                    if (!matchers[i](elem, context, xml)) {
                        return false;
                    }
                }
                return true;
            } : matchers[0];
        }
        function condense(unmatched, map, filter, context, xml) {
            var elem, newUnmatched = [], i = 0, len = unmatched.length, mapped = map != null;
            for (;i < len; i++) {
                if (elem = unmatched[i]) {
                    if (!filter || filter(elem, context, xml)) {
                        newUnmatched.push(elem);
                        if (mapped) {
                            map.push(i);
                        }
                    }
                }
            }
            return newUnmatched;
        }
        function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
            if (postFilter && !postFilter[expando]) {
                postFilter = setMatcher(postFilter);
            }
            if (postFinder && !postFinder[expando]) {
                postFinder = setMatcher(postFinder, postSelector);
            }
            return markFunction(function(seed, results, context, xml) {
                var temp, i, elem, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(selector || "*", context.nodeType ? [ context ] : context, []), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems, matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
                if (matcher) {
                    matcher(matcherIn, matcherOut, context, xml);
                }
                if (postFilter) {
                    temp = condense(matcherOut, postMap);
                    postFilter(temp, [], context, xml);
                    i = temp.length;
                    while (i--) {
                        if (elem = temp[i]) {
                            matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
                        }
                    }
                }
                if (seed) {
                    if (postFinder || preFilter) {
                        if (postFinder) {
                            temp = [];
                            i = matcherOut.length;
                            while (i--) {
                                if (elem = matcherOut[i]) {
                                    temp.push(matcherIn[i] = elem);
                                }
                            }
                            postFinder(null, matcherOut = [], temp, xml);
                        }
                        i = matcherOut.length;
                        while (i--) {
                            if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i]) > -1) {
                                seed[temp] = !(results[temp] = elem);
                            }
                        }
                    }
                } else {
                    matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
                    if (postFinder) {
                        postFinder(null, results, matcherOut, xml);
                    } else {
                        push.apply(results, matcherOut);
                    }
                }
            });
        }
        function matcherFromTokens(tokens) {
            var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
                return elem === checkContext;
            }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
                return indexOf.call(checkContext, elem) > -1;
            }, implicitRelative, true), matchers = [ function(elem, context, xml) {
                return !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
            } ];
            for (;i < len; i++) {
                if (matcher = Expr.relative[tokens[i].type]) {
                    matchers = [ addCombinator(elementMatcher(matchers), matcher) ];
                } else {
                    matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
                    if (matcher[expando]) {
                        j = ++i;
                        for (;j < len; j++) {
                            if (Expr.relative[tokens[j].type]) {
                                break;
                            }
                        }
                        return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1)).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
                    }
                    matchers.push(matcher);
                }
            }
            return elementMatcher(matchers);
        }
        function matcherFromGroupMatchers(elementMatchers, setMatchers) {
            var matcherCachedRuns = 0, bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, expandContext) {
                var elem, j, matcher, setMatched = [], matchedCount = 0, i = "0", unmatched = seed && [], outermost = expandContext != null, contextBackup = outermostContext, elems = seed || byElement && Expr.find["TAG"]("*", expandContext && context.parentNode || context), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.E;
                if (outermost) {
                    outermostContext = context !== document && context;
                    cachedruns = matcherCachedRuns;
                }
                for (;(elem = elems[i]) != null; i++) {
                    if (byElement && elem) {
                        for (j = 0; matcher = elementMatchers[j]; j++) {
                            if (matcher(elem, context, xml)) {
                                results.push(elem);
                                break;
                            }
                        }
                        if (outermost) {
                            dirruns = dirrunsUnique;
                            cachedruns = ++matcherCachedRuns;
                        }
                    }
                    if (bySet) {
                        if (elem = !matcher && elem) {
                            matchedCount--;
                        }
                        if (seed) {
                            unmatched.push(elem);
                        }
                    }
                }
                matchedCount += i;
                if (bySet && i !== matchedCount) {
                    for (j = 0; matcher = setMatchers[j]; j++) {
                        matcher(unmatched, setMatched, context, xml);
                    }
                    if (seed) {
                        if (matchedCount > 0) {
                            while (i--) {
                                if (!(unmatched[i] || setMatched[i])) {
                                    setMatched[i] = pop.call(results);
                                }
                            }
                        }
                        setMatched = condense(setMatched);
                    }
                    push.apply(results, setMatched);
                    if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                        Sizzle.uniqueSort(results);
                    }
                }
                if (outermost) {
                    dirruns = dirrunsUnique;
                    outermostContext = contextBackup;
                }
                return unmatched;
            };
            return bySet ? markFunction(superMatcher) : superMatcher;
        }
        compile = Sizzle.compile = function(selector, group) {
            var i, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
            if (!cached) {
                if (!group) {
                    group = tokenize(selector);
                }
                i = group.length;
                while (i--) {
                    cached = matcherFromTokens(group[i]);
                    if (cached[expando]) {
                        setMatchers.push(cached);
                    } else {
                        elementMatchers.push(cached);
                    }
                }
                cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
            }
            return cached;
        };
        function multipleContexts(selector, contexts, results) {
            var i = 0, len = contexts.length;
            for (;i < len; i++) {
                Sizzle(selector, contexts[i], results);
            }
            return results;
        }
        function select(selector, context, results, seed) {
            var i, tokens, token, type, find, match = tokenize(selector);
            if (!seed) {
                if (match.length === 1) {
                    tokens = match[0] = match[0].slice(0);
                    if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && !documentIsXML && Expr.relative[tokens[1].type]) {
                        context = Expr.find["ID"](token.matches[0].replace(runescape, funescape), context)[0];
                        if (!context) {
                            return results;
                        }
                        selector = selector.slice(tokens.shift().value.length);
                    }
                    for (i = matchExpr["needsContext"].test(selector) ? -1 : tokens.length - 1; i >= 0; i--) {
                        token = tokens[i];
                        if (Expr.relative[type = token.type]) {
                            break;
                        }
                        if (find = Expr.find[type]) {
                            if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && context.parentNode || context)) {
                                tokens.splice(i, 1);
                                selector = seed.length && toSelector(tokens);
                                if (!selector) {
                                    push.apply(results, slice.call(seed, 0));
                                    return results;
                                }
                                break;
                            }
                        }
                    }
                }
            }
            compile(selector, match)(seed, context, documentIsXML, results, rsibling.test(selector));
            return results;
        }
        Expr.pseudos["nth"] = Expr.pseudos["eq"];
        function setFilters() {}
        Expr.filters = setFilters.prototype = Expr.pseudos;
        Expr.setFilters = new setFilters();
        setDocument();
        Sizzle.attr = jQuery.attr;
        jQuery.find = Sizzle;
        jQuery.expr = Sizzle.selectors;
        jQuery.expr[":"] = jQuery.expr.pseudos;
        jQuery.unique = Sizzle.uniqueSort;
        jQuery.text = Sizzle.getText;
        jQuery.isXMLDoc = Sizzle.isXML;
        jQuery.contains = Sizzle.contains;
    })(window);
    var runtil = /Until$/, rparentsprev = /^(?:parents|prev(?:Until|All))/, isSimple = /^.[^:#\[\.,]*$/, rneedsContext = jQuery.expr.match.needsContext, guaranteedUnique = {
        children: true,
        contents: true,
        next: true,
        prev: true
    };
    jQuery.fn.extend({
        find: function(selector) {
            var i, ret, self;
            if (typeof selector !== "string") {
                self = this;
                return this.pushStack(jQuery(selector).filter(function() {
                    for (i = 0; i < self.length; i++) {
                        if (jQuery.contains(self[i], this)) {
                            return true;
                        }
                    }
                }));
            }
            ret = [];
            for (i = 0; i < this.length; i++) {
                jQuery.find(selector, this[i], ret);
            }
            ret = this.pushStack(jQuery.unique(ret));
            ret.selector = (this.selector ? this.selector + " " : "") + selector;
            return ret;
        },
        has: function(target) {
            var i, targets = jQuery(target, this), len = targets.length;
            return this.filter(function() {
                for (i = 0; i < len; i++) {
                    if (jQuery.contains(this, targets[i])) {
                        return true;
                    }
                }
            });
        },
        not: function(selector) {
            return this.pushStack(winnow(this, selector, false));
        },
        filter: function(selector) {
            return this.pushStack(winnow(this, selector, true));
        },
        is: function(selector) {
            return !!selector && (typeof selector === "string" ? rneedsContext.test(selector) ? jQuery(selector, this.context).index(this[0]) >= 0 : jQuery.filter(selector, this).length > 0 : this.filter(selector).length > 0);
        },
        closest: function(selectors, context) {
            var cur, i = 0, l = this.length, ret = [], pos = rneedsContext.test(selectors) || typeof selectors !== "string" ? jQuery(selectors, context || this.context) : 0;
            for (;i < l; i++) {
                cur = this[i];
                while (cur && cur.ownerDocument && cur !== context && cur.nodeType !== 11) {
                    if (pos ? pos.index(cur) > -1 : jQuery.find.matchesSelector(cur, selectors)) {
                        ret.push(cur);
                        break;
                    }
                    cur = cur.parentNode;
                }
            }
            return this.pushStack(ret.length > 1 ? jQuery.unique(ret) : ret);
        },
        index: function(elem) {
            if (!elem) {
                return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            }
            if (typeof elem === "string") {
                return jQuery.inArray(this[0], jQuery(elem));
            }
            return jQuery.inArray(elem.jquery ? elem[0] : elem, this);
        },
        add: function(selector, context) {
            var set = typeof selector === "string" ? jQuery(selector, context) : jQuery.makeArray(selector && selector.nodeType ? [ selector ] : selector), all = jQuery.merge(this.get(), set);
            return this.pushStack(jQuery.unique(all));
        },
        addBack: function(selector) {
            return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
        }
    });
    jQuery.fn.andSelf = jQuery.fn.addBack;
    function sibling(cur, dir) {
        do {
            cur = cur[dir];
        } while (cur && cur.nodeType !== 1);
        return cur;
    }
    jQuery.each({
        parent: function(elem) {
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null;
        },
        parents: function(elem) {
            return jQuery.dir(elem, "parentNode");
        },
        parentsUntil: function(elem, i, until) {
            return jQuery.dir(elem, "parentNode", until);
        },
        next: function(elem) {
            return sibling(elem, "nextSibling");
        },
        prev: function(elem) {
            return sibling(elem, "previousSibling");
        },
        nextAll: function(elem) {
            return jQuery.dir(elem, "nextSibling");
        },
        prevAll: function(elem) {
            return jQuery.dir(elem, "previousSibling");
        },
        nextUntil: function(elem, i, until) {
            return jQuery.dir(elem, "nextSibling", until);
        },
        prevUntil: function(elem, i, until) {
            return jQuery.dir(elem, "previousSibling", until);
        },
        siblings: function(elem) {
            return jQuery.sibling((elem.parentNode || {}).firstChild, elem);
        },
        children: function(elem) {
            return jQuery.sibling(elem.firstChild);
        },
        contents: function(elem) {
            return jQuery.nodeName(elem, "iframe") ? elem.contentDocument || elem.contentWindow.document : jQuery.merge([], elem.childNodes);
        }
    }, function(name, fn) {
        jQuery.fn[name] = function(until, selector) {
            var ret = jQuery.map(this, fn, until);
            if (!runtil.test(name)) {
                selector = until;
            }
            if (selector && typeof selector === "string") {
                ret = jQuery.filter(selector, ret);
            }
            ret = this.length > 1 && !guaranteedUnique[name] ? jQuery.unique(ret) : ret;
            if (this.length > 1 && rparentsprev.test(name)) {
                ret = ret.reverse();
            }
            return this.pushStack(ret);
        };
    });
    jQuery.extend({
        filter: function(expr, elems, not) {
            if (not) {
                expr = ":not(" + expr + ")";
            }
            return elems.length === 1 ? jQuery.find.matchesSelector(elems[0], expr) ? [ elems[0] ] : [] : jQuery.find.matches(expr, elems);
        },
        dir: function(elem, dir, until) {
            var matched = [], cur = elem[dir];
            while (cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery(cur).is(until))) {
                if (cur.nodeType === 1) {
                    matched.push(cur);
                }
                cur = cur[dir];
            }
            return matched;
        },
        sibling: function(n, elem) {
            var r = [];
            for (;n; n = n.nextSibling) {
                if (n.nodeType === 1 && n !== elem) {
                    r.push(n);
                }
            }
            return r;
        }
    });
    function winnow(elements, qualifier, keep) {
        qualifier = qualifier || 0;
        if (jQuery.isFunction(qualifier)) {
            return jQuery.grep(elements, function(elem, i) {
                var retVal = !!qualifier.call(elem, i, elem);
                return retVal === keep;
            });
        } else if (qualifier.nodeType) {
            return jQuery.grep(elements, function(elem) {
                return elem === qualifier === keep;
            });
        } else if (typeof qualifier === "string") {
            var filtered = jQuery.grep(elements, function(elem) {
                return elem.nodeType === 1;
            });
            if (isSimple.test(qualifier)) {
                return jQuery.filter(qualifier, filtered, !keep);
            } else {
                qualifier = jQuery.filter(qualifier, filtered);
            }
        }
        return jQuery.grep(elements, function(elem) {
            return jQuery.inArray(elem, qualifier) >= 0 === keep;
        });
    }
    function createSafeFragment(document) {
        var list = nodeNames.split("|"), safeFrag = document.createDocumentFragment();
        if (safeFrag.createElement) {
            while (list.length) {
                safeFrag.createElement(list.pop());
            }
        }
        return safeFrag;
    }
    var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" + "header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g, rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"), rleadingWhitespace = /^\s+/, rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, rtagName = /<([\w:]+)/, rtbody = /<tbody/i, rhtml = /<|&#?\w+;/, rnoInnerhtml = /<(?:script|style|link)/i, manipulation_rcheckableType = /^(?:checkbox|radio)$/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rscriptType = /^$|\/(?:java|ecma)script/i, rscriptTypeMasked = /^true\/(.*)/, rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, wrapMap = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        legend: [ 1, "<fieldset>", "</fieldset>" ],
        area: [ 1, "<map>", "</map>" ],
        param: [ 1, "<object>", "</object>" ],
        thead: [ 1, "<table>", "</table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: jQuery.support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
    }, safeFragment = createSafeFragment(document), fragmentDiv = safeFragment.appendChild(document.createElement("div"));
    wrapMap.optgroup = wrapMap.option;
    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    wrapMap.th = wrapMap.td;
    jQuery.fn.extend({
        text: function(value) {
            return jQuery.access(this, function(value) {
                return value === undefined ? jQuery.text(this) : this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(value));
            }, null, value, arguments.length);
        },
        wrapAll: function(html) {
            if (jQuery.isFunction(html)) {
                return this.each(function(i) {
                    jQuery(this).wrapAll(html.call(this, i));
                });
            }
            if (this[0]) {
                var wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) {
                    wrap.insertBefore(this[0]);
                }
                wrap.map(function() {
                    var elem = this;
                    while (elem.firstChild && elem.firstChild.nodeType === 1) {
                        elem = elem.firstChild;
                    }
                    return elem;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(html) {
            if (jQuery.isFunction(html)) {
                return this.each(function(i) {
                    jQuery(this).wrapInner(html.call(this, i));
                });
            }
            return this.each(function() {
                var self = jQuery(this), contents = self.contents();
                if (contents.length) {
                    contents.wrapAll(html);
                } else {
                    self.append(html);
                }
            });
        },
        wrap: function(html) {
            var isFunction = jQuery.isFunction(html);
            return this.each(function(i) {
                jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                if (!jQuery.nodeName(this, "body")) {
                    jQuery(this).replaceWith(this.childNodes);
                }
            }).end();
        },
        append: function() {
            return this.domManip(arguments, true, function(elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    this.appendChild(elem);
                }
            });
        },
        prepend: function() {
            return this.domManip(arguments, true, function(elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    this.insertBefore(elem, this.firstChild);
                }
            });
        },
        before: function() {
            return this.domManip(arguments, false, function(elem) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(elem, this);
                }
            });
        },
        after: function() {
            return this.domManip(arguments, false, function(elem) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(elem, this.nextSibling);
                }
            });
        },
        remove: function(selector, keepData) {
            var elem, i = 0;
            for (;(elem = this[i]) != null; i++) {
                if (!selector || jQuery.filter(selector, [ elem ]).length > 0) {
                    if (!keepData && elem.nodeType === 1) {
                        jQuery.cleanData(getAll(elem));
                    }
                    if (elem.parentNode) {
                        if (keepData && jQuery.contains(elem.ownerDocument, elem)) {
                            setGlobalEval(getAll(elem, "script"));
                        }
                        elem.parentNode.removeChild(elem);
                    }
                }
            }
            return this;
        },
        empty: function() {
            var elem, i = 0;
            for (;(elem = this[i]) != null; i++) {
                if (elem.nodeType === 1) {
                    jQuery.cleanData(getAll(elem, false));
                }
                while (elem.firstChild) {
                    elem.removeChild(elem.firstChild);
                }
                if (elem.options && jQuery.nodeName(elem, "select")) {
                    elem.options.length = 0;
                }
            }
            return this;
        },
        clone: function(dataAndEvents, deepDataAndEvents) {
            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
            return this.map(function() {
                return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
            });
        },
        html: function(value) {
            return jQuery.access(this, function(value) {
                var elem = this[0] || {}, i = 0, l = this.length;
                if (value === undefined) {
                    return elem.nodeType === 1 ? elem.innerHTML.replace(rinlinejQuery, "") : undefined;
                }
                if (typeof value === "string" && !rnoInnerhtml.test(value) && (jQuery.support.htmlSerialize || !rnoshimcache.test(value)) && (jQuery.support.leadingWhitespace || !rleadingWhitespace.test(value)) && !wrapMap[(rtagName.exec(value) || [ "", "" ])[1].toLowerCase()]) {
                    value = value.replace(rxhtmlTag, "<$1></$2>");
                    try {
                        for (;i < l; i++) {
                            elem = this[i] || {};
                            if (elem.nodeType === 1) {
                                jQuery.cleanData(getAll(elem, false));
                                elem.innerHTML = value;
                            }
                        }
                        elem = 0;
                    } catch (e) {}
                }
                if (elem) {
                    this.empty().append(value);
                }
            }, null, value, arguments.length);
        },
        replaceWith: function(value) {
            var isFunc = jQuery.isFunction(value);
            if (!isFunc && typeof value !== "string") {
                value = jQuery(value).not(this).detach();
            }
            return this.domManip([ value ], true, function(elem) {
                var next = this.nextSibling, parent = this.parentNode;
                if (parent && this.nodeType === 1 || this.nodeType === 11) {
                    jQuery(this).remove();
                    if (next) {
                        next.parentNode.insertBefore(elem, next);
                    } else {
                        parent.appendChild(elem);
                    }
                }
            });
        },
        detach: function(selector) {
            return this.remove(selector, true);
        },
        domManip: function(args, table, callback) {
            args = core_concat.apply([], args);
            var fragment, first, scripts, hasScripts, node, doc, i = 0, l = this.length, set = this, iNoClone = l - 1, value = args[0], isFunction = jQuery.isFunction(value);
            if (isFunction || !(l <= 1 || typeof value !== "string" || jQuery.support.checkClone || !rchecked.test(value))) {
                return this.each(function(index) {
                    var self = set.eq(index);
                    if (isFunction) {
                        args[0] = value.call(this, index, table ? self.html() : undefined);
                    }
                    self.domManip(args, table, callback);
                });
            }
            if (l) {
                fragment = jQuery.buildFragment(args, this[0].ownerDocument, false, this);
                first = fragment.firstChild;
                if (fragment.childNodes.length === 1) {
                    fragment = first;
                }
                if (first) {
                    table = table && jQuery.nodeName(first, "tr");
                    scripts = jQuery.map(getAll(fragment, "script"), disableScript);
                    hasScripts = scripts.length;
                    for (;i < l; i++) {
                        node = fragment;
                        if (i !== iNoClone) {
                            node = jQuery.clone(node, true, true);
                            if (hasScripts) {
                                jQuery.merge(scripts, getAll(node, "script"));
                            }
                        }
                        callback.call(table && jQuery.nodeName(this[i], "table") ? findOrAppend(this[i], "tbody") : this[i], node, i);
                    }
                    if (hasScripts) {
                        doc = scripts[scripts.length - 1].ownerDocument;
                        jQuery.map(scripts, restoreScript);
                        for (i = 0; i < hasScripts; i++) {
                            node = scripts[i];
                            if (rscriptType.test(node.type || "") && !jQuery._data(node, "globalEval") && jQuery.contains(doc, node)) {
                                if (node.src) {
                                    jQuery.ajax({
                                        url: node.src,
                                        type: "GET",
                                        dataType: "script",
                                        async: false,
                                        global: false,
                                        "throws": true
                                    });
                                } else {
                                    jQuery.globalEval((node.text || node.textContent || node.innerHTML || "").replace(rcleanScript, ""));
                                }
                            }
                        }
                    }
                    fragment = first = null;
                }
            }
            return this;
        }
    });
    function findOrAppend(elem, tag) {
        return elem.getElementsByTagName(tag)[0] || elem.appendChild(elem.ownerDocument.createElement(tag));
    }
    function disableScript(elem) {
        var attr = elem.getAttributeNode("type");
        elem.type = (attr && attr.specified) + "/" + elem.type;
        return elem;
    }
    function restoreScript(elem) {
        var match = rscriptTypeMasked.exec(elem.type);
        if (match) {
            elem.type = match[1];
        } else {
            elem.removeAttribute("type");
        }
        return elem;
    }
    function setGlobalEval(elems, refElements) {
        var elem, i = 0;
        for (;(elem = elems[i]) != null; i++) {
            jQuery._data(elem, "globalEval", !refElements || jQuery._data(refElements[i], "globalEval"));
        }
    }
    function cloneCopyEvent(src, dest) {
        if (dest.nodeType !== 1 || !jQuery.hasData(src)) {
            return;
        }
        var type, i, l, oldData = jQuery._data(src), curData = jQuery._data(dest, oldData), events = oldData.events;
        if (events) {
            delete curData.handle;
            curData.events = {};
            for (type in events) {
                for (i = 0, l = events[type].length; i < l; i++) {
                    jQuery.event.add(dest, type, events[type][i]);
                }
            }
        }
        if (curData.data) {
            curData.data = jQuery.extend({}, curData.data);
        }
    }
    function fixCloneNodeIssues(src, dest) {
        var nodeName, data, e;
        if (dest.nodeType !== 1) {
            return;
        }
        nodeName = dest.nodeName.toLowerCase();
        if (!jQuery.support.noCloneEvent && dest[jQuery.expando]) {
            data = jQuery._data(dest);
            for (e in data.events) {
                jQuery.removeEvent(dest, e, data.handle);
            }
            dest.removeAttribute(jQuery.expando);
        }
        if (nodeName === "script" && dest.text !== src.text) {
            disableScript(dest).text = src.text;
            restoreScript(dest);
        } else if (nodeName === "object") {
            if (dest.parentNode) {
                dest.outerHTML = src.outerHTML;
            }
            if (jQuery.support.html5Clone && src.innerHTML && !jQuery.trim(dest.innerHTML)) {
                dest.innerHTML = src.innerHTML;
            }
        } else if (nodeName === "input" && manipulation_rcheckableType.test(src.type)) {
            dest.defaultChecked = dest.checked = src.checked;
            if (dest.value !== src.value) {
                dest.value = src.value;
            }
        } else if (nodeName === "option") {
            dest.defaultSelected = dest.selected = src.defaultSelected;
        } else if (nodeName === "input" || nodeName === "textarea") {
            dest.defaultValue = src.defaultValue;
        }
    }
    jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(name, original) {
        jQuery.fn[name] = function(selector) {
            var elems, i = 0, ret = [], insert = jQuery(selector), last = insert.length - 1;
            for (;i <= last; i++) {
                elems = i === last ? this : this.clone(true);
                jQuery(insert[i])[original](elems);
                core_push.apply(ret, elems.get());
            }
            return this.pushStack(ret);
        };
    });
    function getAll(context, tag) {
        var elems, elem, i = 0, found = typeof context.getElementsByTagName !== "undefined" ? context.getElementsByTagName(tag || "*") : typeof context.querySelectorAll !== "undefined" ? context.querySelectorAll(tag || "*") : undefined;
        if (!found) {
            for (found = [], elems = context.childNodes || context; (elem = elems[i]) != null; i++) {
                if (!tag || jQuery.nodeName(elem, tag)) {
                    found.push(elem);
                } else {
                    jQuery.merge(found, getAll(elem, tag));
                }
            }
        }
        return tag === undefined || tag && jQuery.nodeName(context, tag) ? jQuery.merge([ context ], found) : found;
    }
    function fixDefaultChecked(elem) {
        if (manipulation_rcheckableType.test(elem.type)) {
            elem.defaultChecked = elem.checked;
        }
    }
    jQuery.extend({
        clone: function(elem, dataAndEvents, deepDataAndEvents) {
            var destElements, srcElements, node, i, clone, inPage = jQuery.contains(elem.ownerDocument, elem);
            if (jQuery.support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test("<" + elem.nodeName + ">")) {
                clone = elem.cloneNode(true);
            } else {
                fragmentDiv.innerHTML = elem.outerHTML;
                fragmentDiv.removeChild(clone = fragmentDiv.firstChild);
            }
            if ((!jQuery.support.noCloneEvent || !jQuery.support.noCloneChecked) && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
                destElements = getAll(clone);
                srcElements = getAll(elem);
                for (i = 0; (node = srcElements[i]) != null; ++i) {
                    if (destElements[i]) {
                        fixCloneNodeIssues(node, destElements[i]);
                    }
                }
            }
            if (dataAndEvents) {
                if (deepDataAndEvents) {
                    srcElements = srcElements || getAll(elem);
                    destElements = destElements || getAll(clone);
                    for (i = 0; (node = srcElements[i]) != null; i++) {
                        cloneCopyEvent(node, destElements[i]);
                    }
                } else {
                    cloneCopyEvent(elem, clone);
                }
            }
            destElements = getAll(clone, "script");
            if (destElements.length > 0) {
                setGlobalEval(destElements, !inPage && getAll(elem, "script"));
            }
            destElements = srcElements = node = null;
            return clone;
        },
        buildFragment: function(elems, context, scripts, selection) {
            var contains, elem, tag, tmp, wrap, tbody, j, l = elems.length, safe = createSafeFragment(context), nodes = [], i = 0;
            for (;i < l; i++) {
                elem = elems[i];
                if (elem || elem === 0) {
                    if (jQuery.type(elem) === "object") {
                        jQuery.merge(nodes, elem.nodeType ? [ elem ] : elem);
                    } else if (!rhtml.test(elem)) {
                        nodes.push(context.createTextNode(elem));
                    } else {
                        tmp = tmp || safe.appendChild(context.createElement("div"));
                        tag = (rtagName.exec(elem) || [ "", "" ])[1].toLowerCase();
                        wrap = wrapMap[tag] || wrapMap._default;
                        tmp.innerHTML = wrap[1] + elem.replace(rxhtmlTag, "<$1></$2>") + wrap[2];
                        j = wrap[0];
                        while (j--) {
                            tmp = tmp.lastChild;
                        }
                        if (!jQuery.support.leadingWhitespace && rleadingWhitespace.test(elem)) {
                            nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0]));
                        }
                        if (!jQuery.support.tbody) {
                            elem = tag === "table" && !rtbody.test(elem) ? tmp.firstChild : wrap[1] === "<table>" && !rtbody.test(elem) ? tmp : 0;
                            j = elem && elem.childNodes.length;
                            while (j--) {
                                if (jQuery.nodeName(tbody = elem.childNodes[j], "tbody") && !tbody.childNodes.length) {
                                    elem.removeChild(tbody);
                                }
                            }
                        }
                        jQuery.merge(nodes, tmp.childNodes);
                        tmp.textContent = "";
                        while (tmp.firstChild) {
                            tmp.removeChild(tmp.firstChild);
                        }
                        tmp = safe.lastChild;
                    }
                }
            }
            if (tmp) {
                safe.removeChild(tmp);
            }
            if (!jQuery.support.appendChecked) {
                jQuery.grep(getAll(nodes, "input"), fixDefaultChecked);
            }
            i = 0;
            while (elem = nodes[i++]) {
                if (selection && jQuery.inArray(elem, selection) !== -1) {
                    continue;
                }
                contains = jQuery.contains(elem.ownerDocument, elem);
                tmp = getAll(safe.appendChild(elem), "script");
                if (contains) {
                    setGlobalEval(tmp);
                }
                if (scripts) {
                    j = 0;
                    while (elem = tmp[j++]) {
                        if (rscriptType.test(elem.type || "")) {
                            scripts.push(elem);
                        }
                    }
                }
            }
            tmp = null;
            return safe;
        },
        cleanData: function(elems, acceptData) {
            var data, id, elem, type, i = 0, internalKey = jQuery.expando, cache = jQuery.cache, deleteExpando = jQuery.support.deleteExpando, special = jQuery.event.special;
            for (;(elem = elems[i]) != null; i++) {
                if (acceptData || jQuery.acceptData(elem)) {
                    id = elem[internalKey];
                    data = id && cache[id];
                    if (data) {
                        if (data.events) {
                            for (type in data.events) {
                                if (special[type]) {
                                    jQuery.event.remove(elem, type);
                                } else {
                                    jQuery.removeEvent(elem, type, data.handle);
                                }
                            }
                        }
                        if (cache[id]) {
                            delete cache[id];
                            if (deleteExpando) {
                                delete elem[internalKey];
                            } else if (typeof elem.removeAttribute !== "undefined") {
                                elem.removeAttribute(internalKey);
                            } else {
                                elem[internalKey] = null;
                            }
                            core_deletedIds.push(id);
                        }
                    }
                }
            }
        }
    });
    var curCSS, getStyles, iframe, ralpha = /alpha\([^)]*\)/i, ropacity = /opacity\s*=\s*([^)]*)/, rposition = /^(top|right|bottom|left)$/, rdisplayswap = /^(none|table(?!-c[ea]).+)/, rmargin = /^margin/, rnumsplit = new RegExp("^(" + core_pnum + ")(.*)$", "i"), rnumnonpx = new RegExp("^(" + core_pnum + ")(?!px)[a-z%]+$", "i"), rrelNum = new RegExp("^([+-])=(" + core_pnum + ")", "i"), elemdisplay = {
        BODY: "block"
    }, cssShow = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, cssNormalTransform = {
        letterSpacing: 0,
        fontWeight: 400
    }, cssExpand = [ "Top", "Right", "Bottom", "Left" ], cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];
    function vendorPropName(style, name) {
        if (name in style) {
            return name;
        }
        var capName = name.charAt(0).toUpperCase() + name.slice(1), origName = name, i = cssPrefixes.length;
        while (i--) {
            name = cssPrefixes[i] + capName;
            if (name in style) {
                return name;
            }
        }
        return origName;
    }
    function isHidden(elem, el) {
        elem = el || elem;
        return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem);
    }
    function showHide(elements, show) {
        var elem, values = [], index = 0, length = elements.length;
        for (;index < length; index++) {
            elem = elements[index];
            if (!elem.style) {
                continue;
            }
            values[index] = jQuery._data(elem, "olddisplay");
            if (show) {
                if (!values[index] && elem.style.display === "none") {
                    elem.style.display = "";
                }
                if (elem.style.display === "" && isHidden(elem)) {
                    values[index] = jQuery._data(elem, "olddisplay", css_defaultDisplay(elem.nodeName));
                }
            } else if (!values[index] && !isHidden(elem)) {
                jQuery._data(elem, "olddisplay", jQuery.css(elem, "display"));
            }
        }
        for (index = 0; index < length; index++) {
            elem = elements[index];
            if (!elem.style) {
                continue;
            }
            if (!show || elem.style.display === "none" || elem.style.display === "") {
                elem.style.display = show ? values[index] || "" : "none";
            }
        }
        return elements;
    }
    jQuery.fn.extend({
        css: function(name, value) {
            return jQuery.access(this, function(elem, name, value) {
                var styles, len, map = {}, i = 0;
                if (jQuery.isArray(name)) {
                    styles = getStyles(elem);
                    len = name.length;
                    for (;i < len; i++) {
                        map[name[i]] = jQuery.css(elem, name[i], false, styles);
                    }
                    return map;
                }
                return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
            }, name, value, arguments.length > 1);
        },
        show: function() {
            return showHide(this, true);
        },
        hide: function() {
            return showHide(this);
        },
        toggle: function(state) {
            var bool = typeof state === "boolean";
            return this.each(function() {
                if (bool ? state : isHidden(this)) {
                    jQuery(this).show();
                } else {
                    jQuery(this).hide();
                }
            });
        }
    });
    jQuery.extend({
        cssHooks: {
            opacity: {
                get: function(elem, computed) {
                    if (computed) {
                        var ret = curCSS(elem, "opacity");
                        return ret === "" ? "1" : ret;
                    }
                }
            }
        },
        cssNumber: {
            columnCount: true,
            fillOpacity: true,
            fontWeight: true,
            lineHeight: true,
            opacity: true,
            orphans: true,
            widows: true,
            zIndex: true,
            zoom: true
        },
        cssProps: {
            "float": jQuery.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(elem, name, value, extra) {
            if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
                return;
            }
            var ret, type, hooks, origName = jQuery.camelCase(name), style = elem.style;
            name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(style, origName));
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            if (value !== undefined) {
                type = typeof value;
                if (type === "string" && (ret = rrelNum.exec(value))) {
                    value = (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem, name));
                    type = "number";
                }
                if (value == null || type === "number" && isNaN(value)) {
                    return;
                }
                if (type === "number" && !jQuery.cssNumber[origName]) {
                    value += "px";
                }
                if (!jQuery.support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
                    style[name] = "inherit";
                }
                if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
                    try {
                        style[name] = value;
                    } catch (e) {}
                }
            } else {
                if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
                    return ret;
                }
                return style[name];
            }
        },
        css: function(elem, name, extra, styles) {
            var val, num, hooks, origName = jQuery.camelCase(name);
            name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(elem.style, origName));
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            if (hooks && "get" in hooks) {
                val = hooks.get(elem, true, extra);
            }
            if (val === undefined) {
                val = curCSS(elem, name, styles);
            }
            if (val === "normal" && name in cssNormalTransform) {
                val = cssNormalTransform[name];
            }
            if (extra) {
                num = parseFloat(val);
                return extra === true || jQuery.isNumeric(num) ? num || 0 : val;
            }
            return val;
        },
        swap: function(elem, options, callback, args) {
            var ret, name, old = {};
            for (name in options) {
                old[name] = elem.style[name];
                elem.style[name] = options[name];
            }
            ret = callback.apply(elem, args || []);
            for (name in options) {
                elem.style[name] = old[name];
            }
            return ret;
        }
    });
    if (window.getComputedStyle) {
        getStyles = function(elem) {
            return window.getComputedStyle(elem, null);
        };
        curCSS = function(elem, name, _computed) {
            var width, minWidth, maxWidth, computed = _computed || getStyles(elem), ret = computed ? computed.getPropertyValue(name) || computed[name] : undefined, style = elem.style;
            if (computed) {
                if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
                    ret = jQuery.style(elem, name);
                }
                if (rnumnonpx.test(ret) && rmargin.test(name)) {
                    width = style.width;
                    minWidth = style.minWidth;
                    maxWidth = style.maxWidth;
                    style.minWidth = style.maxWidth = style.width = ret;
                    ret = computed.width;
                    style.width = width;
                    style.minWidth = minWidth;
                    style.maxWidth = maxWidth;
                }
            }
            return ret;
        };
    } else if (document.documentElement.currentStyle) {
        getStyles = function(elem) {
            return elem.currentStyle;
        };
        curCSS = function(elem, name, _computed) {
            var left, rs, rsLeft, computed = _computed || getStyles(elem), ret = computed ? computed[name] : undefined, style = elem.style;
            if (ret == null && style && style[name]) {
                ret = style[name];
            }
            if (rnumnonpx.test(ret) && !rposition.test(name)) {
                left = style.left;
                rs = elem.runtimeStyle;
                rsLeft = rs && rs.left;
                if (rsLeft) {
                    rs.left = elem.currentStyle.left;
                }
                style.left = name === "fontSize" ? "1em" : ret;
                ret = style.pixelLeft + "px";
                style.left = left;
                if (rsLeft) {
                    rs.left = rsLeft;
                }
            }
            return ret === "" ? "auto" : ret;
        };
    }
    function setPositiveNumber(elem, value, subtract) {
        var matches = rnumsplit.exec(value);
        return matches ? Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") : value;
    }
    function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
        var i = extra === (isBorderBox ? "border" : "content") ? 4 : name === "width" ? 1 : 0, val = 0;
        for (;i < 4; i += 2) {
            if (extra === "margin") {
                val += jQuery.css(elem, extra + cssExpand[i], true, styles);
            }
            if (isBorderBox) {
                if (extra === "content") {
                    val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                }
                if (extra !== "margin") {
                    val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                }
            } else {
                val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                if (extra !== "padding") {
                    val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                }
            }
        }
        return val;
    }
    function getWidthOrHeight(elem, name, extra) {
        var valueIsBorderBox = true, val = name === "width" ? elem.offsetWidth : elem.offsetHeight, styles = getStyles(elem), isBorderBox = jQuery.support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box";
        if (val <= 0 || val == null) {
            val = curCSS(elem, name, styles);
            if (val < 0 || val == null) {
                val = elem.style[name];
            }
            if (rnumnonpx.test(val)) {
                return val;
            }
            valueIsBorderBox = isBorderBox && (jQuery.support.boxSizingReliable || val === elem.style[name]);
            val = parseFloat(val) || 0;
        }
        return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px";
    }
    function css_defaultDisplay(nodeName) {
        var doc = document, display = elemdisplay[nodeName];
        if (!display) {
            display = actualDisplay(nodeName, doc);
            if (display === "none" || !display) {
                iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(doc.documentElement);
                doc = (iframe[0].contentWindow || iframe[0].contentDocument).document;
                doc.write("<!doctype html><html><body>");
                doc.close();
                display = actualDisplay(nodeName, doc);
                iframe.detach();
            }
            elemdisplay[nodeName] = display;
        }
        return display;
    }
    function actualDisplay(name, doc) {
        var elem = jQuery(doc.createElement(name)).appendTo(doc.body), display = jQuery.css(elem[0], "display");
        elem.remove();
        return display;
    }
    jQuery.each([ "height", "width" ], function(i, name) {
        jQuery.cssHooks[name] = {
            get: function(elem, computed, extra) {
                if (computed) {
                    return elem.offsetWidth === 0 && rdisplayswap.test(jQuery.css(elem, "display")) ? jQuery.swap(elem, cssShow, function() {
                        return getWidthOrHeight(elem, name, extra);
                    }) : getWidthOrHeight(elem, name, extra);
                }
            },
            set: function(elem, value, extra) {
                var styles = extra && getStyles(elem);
                return setPositiveNumber(elem, value, extra ? augmentWidthOrHeight(elem, name, extra, jQuery.support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles) : 0);
            }
        };
    });
    if (!jQuery.support.opacity) {
        jQuery.cssHooks.opacity = {
            get: function(elem, computed) {
                return ropacity.test((computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : computed ? "1" : "";
            },
            set: function(elem, value) {
                var style = elem.style, currentStyle = elem.currentStyle, opacity = jQuery.isNumeric(value) ? "alpha(opacity=" + value * 100 + ")" : "", filter = currentStyle && currentStyle.filter || style.filter || "";
                style.zoom = 1;
                if ((value >= 1 || value === "") && jQuery.trim(filter.replace(ralpha, "")) === "" && style.removeAttribute) {
                    style.removeAttribute("filter");
                    if (value === "" || currentStyle && !currentStyle.filter) {
                        return;
                    }
                }
                style.filter = ralpha.test(filter) ? filter.replace(ralpha, opacity) : filter + " " + opacity;
            }
        };
    }
    jQuery(function() {
        if (!jQuery.support.reliableMarginRight) {
            jQuery.cssHooks.marginRight = {
                get: function(elem, computed) {
                    if (computed) {
                        return jQuery.swap(elem, {
                            display: "inline-block"
                        }, curCSS, [ elem, "marginRight" ]);
                    }
                }
            };
        }
        if (!jQuery.support.pixelPosition && jQuery.fn.position) {
            jQuery.each([ "top", "left" ], function(i, prop) {
                jQuery.cssHooks[prop] = {
                    get: function(elem, computed) {
                        if (computed) {
                            computed = curCSS(elem, prop);
                            return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
                        }
                    }
                };
            });
        }
    });
    if (jQuery.expr && jQuery.expr.filters) {
        jQuery.expr.filters.hidden = function(elem) {
            return elem.offsetWidth === 0 && elem.offsetHeight === 0 || !jQuery.support.reliableHiddenOffsets && (elem.style && elem.style.display || jQuery.css(elem, "display")) === "none";
        };
        jQuery.expr.filters.visible = function(elem) {
            return !jQuery.expr.filters.hidden(elem);
        };
    }
    jQuery.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(prefix, suffix) {
        jQuery.cssHooks[prefix + suffix] = {
            expand: function(value) {
                var i = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [ value ];
                for (;i < 4; i++) {
                    expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
                }
                return expanded;
            }
        };
        if (!rmargin.test(prefix)) {
            jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
        }
    });
    var r20 = /%20/g, rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
    jQuery.fn.extend({
        serialize: function() {
            return jQuery.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var elements = jQuery.prop(this, "elements");
                return elements ? jQuery.makeArray(elements) : this;
            }).filter(function() {
                var type = this.type;
                return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !manipulation_rcheckableType.test(type));
            }).map(function(i, elem) {
                var val = jQuery(this).val();
                return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function(val) {
                    return {
                        name: elem.name,
                        value: val.replace(rCRLF, "\r\n")
                    };
                }) : {
                    name: elem.name,
                    value: val.replace(rCRLF, "\r\n")
                };
            }).get();
        }
    });
    jQuery.param = function(a, traditional) {
        var prefix, s = [], add = function(key, value) {
            value = jQuery.isFunction(value) ? value() : value == null ? "" : value;
            s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
        };
        if (traditional === undefined) {
            traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
        }
        if (jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
            jQuery.each(a, function() {
                add(this.name, this.value);
            });
        } else {
            for (prefix in a) {
                buildParams(prefix, a[prefix], traditional, add);
            }
        }
        return s.join("&").replace(r20, "+");
    };
    function buildParams(prefix, obj, traditional, add) {
        var name;
        if (jQuery.isArray(obj)) {
            jQuery.each(obj, function(i, v) {
                if (traditional || rbracket.test(prefix)) {
                    add(prefix, v);
                } else {
                    buildParams(prefix + "[" + (typeof v === "object" ? i : "") + "]", v, traditional, add);
                }
            });
        } else if (!traditional && jQuery.type(obj) === "object") {
            for (name in obj) {
                buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
            }
        } else {
            add(prefix, obj);
        }
    }
    var ajaxLocParts, ajaxLocation, ajax_nonce = jQuery.now(), ajax_rquery = /\?/, rhash = /#.*$/, rts = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, rurl = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, _load = jQuery.fn.load, prefilters = {}, transports = {}, allTypes = "*/".concat("*");
    try {
        ajaxLocation = location.href;
    } catch (e) {
        ajaxLocation = document.createElement("a");
        ajaxLocation.href = "";
        ajaxLocation = ajaxLocation.href;
    }
    ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];
    function addToPrefiltersOrTransports(structure) {
        return function(dataTypeExpression, func) {
            if (typeof dataTypeExpression !== "string") {
                func = dataTypeExpression;
                dataTypeExpression = "*";
            }
            var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(core_rnotwhite) || [];
            if (jQuery.isFunction(func)) {
                while (dataType = dataTypes[i++]) {
                    if (dataType[0] === "+") {
                        dataType = dataType.slice(1) || "*";
                        (structure[dataType] = structure[dataType] || []).unshift(func);
                    } else {
                        (structure[dataType] = structure[dataType] || []).push(func);
                    }
                }
            }
        };
    }
    function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
        var inspected = {}, seekingTransport = structure === transports;
        function inspect(dataType) {
            var selected;
            inspected[dataType] = true;
            jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
                var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                    options.dataTypes.unshift(dataTypeOrTransport);
                    inspect(dataTypeOrTransport);
                    return false;
                } else if (seekingTransport) {
                    return !(selected = dataTypeOrTransport);
                }
            });
            return selected;
        }
        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
    }
    function ajaxExtend(target, src) {
        var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
        for (key in src) {
            if (src[key] !== undefined) {
                (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
            }
        }
        if (deep) {
            jQuery.extend(true, target, deep);
        }
        return target;
    }
    jQuery.fn.load = function(url, params, callback) {
        if (typeof url !== "string" && _load) {
            return _load.apply(this, arguments);
        }
        var selector, type, response, self = this, off = url.indexOf(" ");
        if (off >= 0) {
            selector = url.slice(off, url.length);
            url = url.slice(0, off);
        }
        if (jQuery.isFunction(params)) {
            callback = params;
            params = undefined;
        } else if (params && typeof params === "object") {
            type = "POST";
        }
        if (self.length > 0) {
            jQuery.ajax({
                url: url,
                type: type,
                dataType: "html",
                data: params
            }).done(function(responseText) {
                response = arguments;
                self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
            }).complete(callback && function(jqXHR, status) {
                self.each(callback, response || [ jqXHR.responseText, status, jqXHR ]);
            });
        }
        return this;
    };
    jQuery.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(i, type) {
        jQuery.fn[type] = function(fn) {
            return this.on(type, fn);
        };
    });
    jQuery.each([ "get", "post" ], function(i, method) {
        jQuery[method] = function(url, data, callback, type) {
            if (jQuery.isFunction(data)) {
                type = type || callback;
                callback = data;
                data = undefined;
            }
            return jQuery.ajax({
                url: url,
                type: method,
                dataType: type,
                data: data,
                success: callback
            });
        };
    });
    jQuery.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ajaxLocation,
            type: "GET",
            isLocal: rlocalProtocol.test(ajaxLocParts[1]),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": allTypes,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": window.String,
                "text html": true,
                "text json": jQuery.parseJSON,
                "text xml": jQuery.parseXML
            },
            flatOptions: {
                url: true,
                context: true
            }
        },
        ajaxSetup: function(target, settings) {
            return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
        },
        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),
        ajax: function(url, options) {
            if (typeof url === "object") {
                options = url;
                url = undefined;
            }
            options = options || {};
            var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, parts, fireGlobals, i, s = jQuery.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, state = 0, strAbort = "canceled", jqXHR = {
                readyState: 0,
                getResponseHeader: function(key) {
                    var match;
                    if (state === 2) {
                        if (!responseHeaders) {
                            responseHeaders = {};
                            while (match = rheaders.exec(responseHeadersString)) {
                                responseHeaders[match[1].toLowerCase()] = match[2];
                            }
                        }
                        match = responseHeaders[key.toLowerCase()];
                    }
                    return match == null ? null : match;
                },
                getAllResponseHeaders: function() {
                    return state === 2 ? responseHeadersString : null;
                },
                setRequestHeader: function(name, value) {
                    var lname = name.toLowerCase();
                    if (!state) {
                        name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
                        requestHeaders[name] = value;
                    }
                    return this;
                },
                overrideMimeType: function(type) {
                    if (!state) {
                        s.mimeType = type;
                    }
                    return this;
                },
                statusCode: function(map) {
                    var code;
                    if (map) {
                        if (state < 2) {
                            for (code in map) {
                                statusCode[code] = [ statusCode[code], map[code] ];
                            }
                        } else {
                            jqXHR.always(map[jqXHR.status]);
                        }
                    }
                    return this;
                },
                abort: function(statusText) {
                    var finalText = statusText || strAbort;
                    if (transport) {
                        transport.abort(finalText);
                    }
                    done(0, finalText);
                    return this;
                }
            };
            deferred.promise(jqXHR).complete = completeDeferred.add;
            jqXHR.success = jqXHR.done;
            jqXHR.error = jqXHR.fail;
            s.url = ((url || s.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//");
            s.type = options.method || options.type || s.method || s.type;
            s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(core_rnotwhite) || [ "" ];
            if (s.crossDomain == null) {
                parts = rurl.exec(s.url.toLowerCase());
                s.crossDomain = !!(parts && (parts[1] !== ajaxLocParts[1] || parts[2] !== ajaxLocParts[2] || (parts[3] || (parts[1] === "http:" ? 80 : 443)) != (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? 80 : 443))));
            }
            if (s.data && s.processData && typeof s.data !== "string") {
                s.data = jQuery.param(s.data, s.traditional);
            }
            inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
            if (state === 2) {
                return jqXHR;
            }
            fireGlobals = s.global;
            if (fireGlobals && jQuery.active++ === 0) {
                jQuery.event.trigger("ajaxStart");
            }
            s.type = s.type.toUpperCase();
            s.hasContent = !rnoContent.test(s.type);
            cacheURL = s.url;
            if (!s.hasContent) {
                if (s.data) {
                    cacheURL = s.url += (ajax_rquery.test(cacheURL) ? "&" : "?") + s.data;
                    delete s.data;
                }
                if (s.cache === false) {
                    s.url = rts.test(cacheURL) ? cacheURL.replace(rts, "$1_=" + ajax_nonce++) : cacheURL + (ajax_rquery.test(cacheURL) ? "&" : "?") + "_=" + ajax_nonce++;
                }
            }
            if (s.ifModified) {
                if (jQuery.lastModified[cacheURL]) {
                    jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
                }
                if (jQuery.etag[cacheURL]) {
                    jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
                }
            }
            if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
                jqXHR.setRequestHeader("Content-Type", s.contentType);
            }
            jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
            for (i in s.headers) {
                jqXHR.setRequestHeader(i, s.headers[i]);
            }
            if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {
                return jqXHR.abort();
            }
            strAbort = "abort";
            for (i in {
                success: 1,
                error: 1,
                complete: 1
            }) {
                jqXHR[i](s[i]);
            }
            transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
            if (!transport) {
                done(-1, "No Transport");
            } else {
                jqXHR.readyState = 1;
                if (fireGlobals) {
                    globalEventContext.trigger("ajaxSend", [ jqXHR, s ]);
                }
                if (s.async && s.timeout > 0) {
                    timeoutTimer = setTimeout(function() {
                        jqXHR.abort("timeout");
                    }, s.timeout);
                }
                try {
                    state = 1;
                    transport.send(requestHeaders, done);
                } catch (e) {
                    if (state < 2) {
                        done(-1, e);
                    } else {
                        throw e;
                    }
                }
            }
            function done(status, nativeStatusText, responses, headers) {
                var isSuccess, success, error, response, modified, statusText = nativeStatusText;
                if (state === 2) {
                    return;
                }
                state = 2;
                if (timeoutTimer) {
                    clearTimeout(timeoutTimer);
                }
                transport = undefined;
                responseHeadersString = headers || "";
                jqXHR.readyState = status > 0 ? 4 : 0;
                if (responses) {
                    response = ajaxHandleResponses(s, jqXHR, responses);
                }
                if (status >= 200 && status < 300 || status === 304) {
                    if (s.ifModified) {
                        modified = jqXHR.getResponseHeader("Last-Modified");
                        if (modified) {
                            jQuery.lastModified[cacheURL] = modified;
                        }
                        modified = jqXHR.getResponseHeader("etag");
                        if (modified) {
                            jQuery.etag[cacheURL] = modified;
                        }
                    }
                    if (status === 304) {
                        isSuccess = true;
                        statusText = "notmodified";
                    } else {
                        isSuccess = ajaxConvert(s, response);
                        statusText = isSuccess.state;
                        success = isSuccess.data;
                        error = isSuccess.error;
                        isSuccess = !error;
                    }
                } else {
                    error = statusText;
                    if (status || !statusText) {
                        statusText = "error";
                        if (status < 0) {
                            status = 0;
                        }
                    }
                }
                jqXHR.status = status;
                jqXHR.statusText = (nativeStatusText || statusText) + "";
                if (isSuccess) {
                    deferred.resolveWith(callbackContext, [ success, statusText, jqXHR ]);
                } else {
                    deferred.rejectWith(callbackContext, [ jqXHR, statusText, error ]);
                }
                jqXHR.statusCode(statusCode);
                statusCode = undefined;
                if (fireGlobals) {
                    globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [ jqXHR, s, isSuccess ? success : error ]);
                }
                completeDeferred.fireWith(callbackContext, [ jqXHR, statusText ]);
                if (fireGlobals) {
                    globalEventContext.trigger("ajaxComplete", [ jqXHR, s ]);
                    if (!--jQuery.active) {
                        jQuery.event.trigger("ajaxStop");
                    }
                }
            }
            return jqXHR;
        },
        getScript: function(url, callback) {
            return jQuery.get(url, undefined, callback, "script");
        },
        getJSON: function(url, data, callback) {
            return jQuery.get(url, data, callback, "json");
        }
    });
    function ajaxHandleResponses(s, jqXHR, responses) {
        var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes, responseFields = s.responseFields;
        for (type in responseFields) {
            if (type in responses) {
                jqXHR[responseFields[type]] = responses[type];
            }
        }
        while (dataTypes[0] === "*") {
            dataTypes.shift();
            if (ct === undefined) {
                ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
            }
        }
        if (ct) {
            for (type in contents) {
                if (contents[type] && contents[type].test(ct)) {
                    dataTypes.unshift(type);
                    break;
                }
            }
        }
        if (dataTypes[0] in responses) {
            finalDataType = dataTypes[0];
        } else {
            for (type in responses) {
                if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                    finalDataType = type;
                    break;
                }
                if (!firstDataType) {
                    firstDataType = type;
                }
            }
            finalDataType = finalDataType || firstDataType;
        }
        if (finalDataType) {
            if (finalDataType !== dataTypes[0]) {
                dataTypes.unshift(finalDataType);
            }
            return responses[finalDataType];
        }
    }
    function ajaxConvert(s, response) {
        var conv, conv2, current, tmp, converters = {}, i = 0, dataTypes = s.dataTypes.slice(), prev = dataTypes[0];
        if (s.dataFilter) {
            response = s.dataFilter(response, s.dataType);
        }
        if (dataTypes[1]) {
            for (conv in s.converters) {
                converters[conv.toLowerCase()] = s.converters[conv];
            }
        }
        for (;current = dataTypes[++i]; ) {
            if (current !== "*") {
                if (prev !== "*" && prev !== current) {
                    conv = converters[prev + " " + current] || converters["* " + current];
                    if (!conv) {
                        for (conv2 in converters) {
                            tmp = conv2.split(" ");
                            if (tmp[1] === current) {
                                conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                                if (conv) {
                                    if (conv === true) {
                                        conv = converters[conv2];
                                    } else if (converters[conv2] !== true) {
                                        current = tmp[0];
                                        dataTypes.splice(i--, 0, current);
                                    }
                                    break;
                                }
                            }
                        }
                    }
                    if (conv !== true) {
                        if (conv && s["throws"]) {
                            response = conv(response);
                        } else {
                            try {
                                response = conv(response);
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: conv ? e : "No conversion from " + prev + " to " + current
                                };
                            }
                        }
                    }
                }
                prev = current;
            }
        }
        return {
            state: "success",
            data: response
        };
    }
    jQuery.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(text) {
                jQuery.globalEval(text);
                return text;
            }
        }
    });
    jQuery.ajaxPrefilter("script", function(s) {
        if (s.cache === undefined) {
            s.cache = false;
        }
        if (s.crossDomain) {
            s.type = "GET";
            s.global = false;
        }
    });
    jQuery.ajaxTransport("script", function(s) {
        if (s.crossDomain) {
            var script, head = document.head || jQuery("head")[0] || document.documentElement;
            return {
                send: function(_, callback) {
                    script = document.createElement("script");
                    script.async = true;
                    if (s.scriptCharset) {
                        script.charset = s.scriptCharset;
                    }
                    script.src = s.url;
                    script.onload = script.onreadystatechange = function(_, isAbort) {
                        if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
                            script.onload = script.onreadystatechange = null;
                            if (script.parentNode) {
                                script.parentNode.removeChild(script);
                            }
                            script = null;
                            if (!isAbort) {
                                callback(200, "success");
                            }
                        }
                    };
                    head.insertBefore(script, head.firstChild);
                },
                abort: function() {
                    if (script) {
                        script.onload(undefined, true);
                    }
                }
            };
        }
    });
    var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
    jQuery.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var callback = oldCallbacks.pop() || jQuery.expando + "_" + ajax_nonce++;
            this[callback] = true;
            return callback;
        }
    });
    jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
        var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && !(s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");
        if (jsonProp || s.dataTypes[0] === "jsonp") {
            callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
            if (jsonProp) {
                s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
            } else if (s.jsonp !== false) {
                s.url += (ajax_rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
            }
            s.converters["script json"] = function() {
                if (!responseContainer) {
                    jQuery.error(callbackName + " was not called");
                }
                return responseContainer[0];
            };
            s.dataTypes[0] = "json";
            overwritten = window[callbackName];
            window[callbackName] = function() {
                responseContainer = arguments;
            };
            jqXHR.always(function() {
                window[callbackName] = overwritten;
                if (s[callbackName]) {
                    s.jsonpCallback = originalSettings.jsonpCallback;
                    oldCallbacks.push(callbackName);
                }
                if (responseContainer && jQuery.isFunction(overwritten)) {
                    overwritten(responseContainer[0]);
                }
                responseContainer = overwritten = undefined;
            });
            return "script";
        }
    });
    var xhrCallbacks, xhrSupported, xhrId = 0, xhrOnUnloadAbort = window.ActiveXObject && function() {
        var key;
        for (key in xhrCallbacks) {
            xhrCallbacks[key](undefined, true);
        }
    };
    function createStandardXHR() {
        try {
            return new window.XMLHttpRequest();
        } catch (e) {}
    }
    function createActiveXHR() {
        try {
            return new window.ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {}
    }
    jQuery.ajaxSettings.xhr = window.ActiveXObject ? function() {
        return !this.isLocal && createStandardXHR() || createActiveXHR();
    } : createStandardXHR;
    xhrSupported = jQuery.ajaxSettings.xhr();
    jQuery.support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
    xhrSupported = jQuery.support.ajax = !!xhrSupported;
    if (xhrSupported) {
        jQuery.ajaxTransport(function(s) {
            if (!s.crossDomain || jQuery.support.cors) {
                var callback;
                return {
                    send: function(headers, complete) {
                        var handle, i, xhr = s.xhr();
                        if (s.username) {
                            xhr.open(s.type, s.url, s.async, s.username, s.password);
                        } else {
                            xhr.open(s.type, s.url, s.async);
                        }
                        if (s.xhrFields) {
                            for (i in s.xhrFields) {
                                xhr[i] = s.xhrFields[i];
                            }
                        }
                        if (s.mimeType && xhr.overrideMimeType) {
                            xhr.overrideMimeType(s.mimeType);
                        }
                        if (!s.crossDomain && !headers["X-Requested-With"]) {
                            headers["X-Requested-With"] = "XMLHttpRequest";
                        }
                        try {
                            for (i in headers) {
                                xhr.setRequestHeader(i, headers[i]);
                            }
                        } catch (err) {}
                        xhr.send(s.hasContent && s.data || null);
                        callback = function(_, isAbort) {
                            var status, statusText, responseHeaders, responses, xml;
                            try {
                                if (callback && (isAbort || xhr.readyState === 4)) {
                                    callback = undefined;
                                    if (handle) {
                                        xhr.onreadystatechange = jQuery.noop;
                                        if (xhrOnUnloadAbort) {
                                            delete xhrCallbacks[handle];
                                        }
                                    }
                                    if (isAbort) {
                                        if (xhr.readyState !== 4) {
                                            xhr.abort();
                                        }
                                    } else {
                                        responses = {};
                                        status = xhr.status;
                                        xml = xhr.responseXML;
                                        responseHeaders = xhr.getAllResponseHeaders();
                                        if (xml && xml.documentElement) {
                                            responses.xml = xml;
                                        }
                                        if (typeof xhr.responseText === "string") {
                                            responses.text = xhr.responseText;
                                        }
                                        try {
                                            statusText = xhr.statusText;
                                        } catch (e) {
                                            statusText = "";
                                        }
                                        if (!status && s.isLocal && !s.crossDomain) {
                                            status = responses.text ? 200 : 404;
                                        } else if (status === 1223) {
                                            status = 204;
                                        }
                                    }
                                }
                            } catch (firefoxAccessException) {
                                if (!isAbort) {
                                    complete(-1, firefoxAccessException);
                                }
                            }
                            if (responses) {
                                complete(status, statusText, responses, responseHeaders);
                            }
                        };
                        if (!s.async) {
                            callback();
                        } else if (xhr.readyState === 4) {
                            setTimeout(callback);
                        } else {
                            handle = ++xhrId;
                            if (xhrOnUnloadAbort) {
                                if (!xhrCallbacks) {
                                    xhrCallbacks = {};
                                    jQuery(window).unload(xhrOnUnloadAbort);
                                }
                                xhrCallbacks[handle] = callback;
                            }
                            xhr.onreadystatechange = callback;
                        }
                    },
                    abort: function() {
                        if (callback) {
                            callback(undefined, true);
                        }
                    }
                };
            }
        });
    }
    var fxNow, timerId, rfxtypes = /^(?:toggle|show|hide)$/, rfxnum = new RegExp("^(?:([+-])=|)(" + core_pnum + ")([a-z%]*)$", "i"), rrun = /queueHooks$/, animationPrefilters = [ defaultPrefilter ], tweeners = {
        "*": [ function(prop, value) {
            var end, unit, tween = this.createTween(prop, value), parts = rfxnum.exec(value), target = tween.cur(), start = +target || 0, scale = 1, maxIterations = 20;
            if (parts) {
                end = +parts[2];
                unit = parts[3] || (jQuery.cssNumber[prop] ? "" : "px");
                if (unit !== "px" && start) {
                    start = jQuery.css(tween.elem, prop, true) || end || 1;
                    do {
                        scale = scale || ".5";
                        start = start / scale;
                        jQuery.style(tween.elem, prop, start + unit);
                    } while (scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations);
                }
                tween.unit = unit;
                tween.start = start;
                tween.end = parts[1] ? start + (parts[1] + 1) * end : end;
            }
            return tween;
        } ]
    };
    function createFxNow() {
        setTimeout(function() {
            fxNow = undefined;
        });
        return fxNow = jQuery.now();
    }
    function createTweens(animation, props) {
        jQuery.each(props, function(prop, value) {
            var collection = (tweeners[prop] || []).concat(tweeners["*"]), index = 0, length = collection.length;
            for (;index < length; index++) {
                if (collection[index].call(animation, prop, value)) {
                    return;
                }
            }
        });
    }
    function Animation(elem, properties, options) {
        var result, stopped, index = 0, length = animationPrefilters.length, deferred = jQuery.Deferred().always(function() {
            delete tick.elem;
        }), tick = function() {
            if (stopped) {
                return false;
            }
            var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index = 0, length = animation.tweens.length;
            for (;index < length; index++) {
                animation.tweens[index].run(percent);
            }
            deferred.notifyWith(elem, [ animation, percent, remaining ]);
            if (percent < 1 && length) {
                return remaining;
            } else {
                deferred.resolveWith(elem, [ animation ]);
                return false;
            }
        }, animation = deferred.promise({
            elem: elem,
            props: jQuery.extend({}, properties),
            opts: jQuery.extend(true, {
                specialEasing: {}
            }, options),
            originalProperties: properties,
            originalOptions: options,
            startTime: fxNow || createFxNow(),
            duration: options.duration,
            tweens: [],
            createTween: function(prop, end) {
                var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                animation.tweens.push(tween);
                return tween;
            },
            stop: function(gotoEnd) {
                var index = 0, length = gotoEnd ? animation.tweens.length : 0;
                if (stopped) {
                    return this;
                }
                stopped = true;
                for (;index < length; index++) {
                    animation.tweens[index].run(1);
                }
                if (gotoEnd) {
                    deferred.resolveWith(elem, [ animation, gotoEnd ]);
                } else {
                    deferred.rejectWith(elem, [ animation, gotoEnd ]);
                }
                return this;
            }
        }), props = animation.props;
        propFilter(props, animation.opts.specialEasing);
        for (;index < length; index++) {
            result = animationPrefilters[index].call(animation, elem, props, animation.opts);
            if (result) {
                return result;
            }
        }
        createTweens(animation, props);
        if (jQuery.isFunction(animation.opts.start)) {
            animation.opts.start.call(elem, animation);
        }
        jQuery.fx.timer(jQuery.extend(tick, {
            elem: elem,
            anim: animation,
            queue: animation.opts.queue
        }));
        return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
    }
    function propFilter(props, specialEasing) {
        var index, name, easing, value, hooks;
        for (index in props) {
            name = jQuery.camelCase(index);
            easing = specialEasing[name];
            value = props[index];
            if (jQuery.isArray(value)) {
                easing = value[1];
                value = props[index] = value[0];
            }
            if (index !== name) {
                props[name] = value;
                delete props[index];
            }
            hooks = jQuery.cssHooks[name];
            if (hooks && "expand" in hooks) {
                value = hooks.expand(value);
                delete props[name];
                for (index in value) {
                    if (!(index in props)) {
                        props[index] = value[index];
                        specialEasing[index] = easing;
                    }
                }
            } else {
                specialEasing[name] = easing;
            }
        }
    }
    jQuery.Animation = jQuery.extend(Animation, {
        tweener: function(props, callback) {
            if (jQuery.isFunction(props)) {
                callback = props;
                props = [ "*" ];
            } else {
                props = props.split(" ");
            }
            var prop, index = 0, length = props.length;
            for (;index < length; index++) {
                prop = props[index];
                tweeners[prop] = tweeners[prop] || [];
                tweeners[prop].unshift(callback);
            }
        },
        prefilter: function(callback, prepend) {
            if (prepend) {
                animationPrefilters.unshift(callback);
            } else {
                animationPrefilters.push(callback);
            }
        }
    });
    function defaultPrefilter(elem, props, opts) {
        var index, prop, value, length, dataShow, toggle, tween, hooks, oldfire, anim = this, style = elem.style, orig = {}, handled = [], hidden = elem.nodeType && isHidden(elem);
        if (!opts.queue) {
            hooks = jQuery._queueHooks(elem, "fx");
            if (hooks.unqueued == null) {
                hooks.unqueued = 0;
                oldfire = hooks.empty.fire;
                hooks.empty.fire = function() {
                    if (!hooks.unqueued) {
                        oldfire();
                    }
                };
            }
            hooks.unqueued++;
            anim.always(function() {
                anim.always(function() {
                    hooks.unqueued--;
                    if (!jQuery.queue(elem, "fx").length) {
                        hooks.empty.fire();
                    }
                });
            });
        }
        if (elem.nodeType === 1 && ("height" in props || "width" in props)) {
            opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
            if (jQuery.css(elem, "display") === "inline" && jQuery.css(elem, "float") === "none") {
                if (!jQuery.support.inlineBlockNeedsLayout || css_defaultDisplay(elem.nodeName) === "inline") {
                    style.display = "inline-block";
                } else {
                    style.zoom = 1;
                }
            }
        }
        if (opts.overflow) {
            style.overflow = "hidden";
            if (!jQuery.support.shrinkWrapBlocks) {
                anim.done(function() {
                    style.overflow = opts.overflow[0];
                    style.overflowX = opts.overflow[1];
                    style.overflowY = opts.overflow[2];
                });
            }
        }
        for (index in props) {
            value = props[index];
            if (rfxtypes.exec(value)) {
                delete props[index];
                toggle = toggle || value === "toggle";
                if (value === (hidden ? "hide" : "show")) {
                    continue;
                }
                handled.push(index);
            }
        }
        length = handled.length;
        if (length) {
            dataShow = jQuery._data(elem, "fxshow") || jQuery._data(elem, "fxshow", {});
            if ("hidden" in dataShow) {
                hidden = dataShow.hidden;
            }
            if (toggle) {
                dataShow.hidden = !hidden;
            }
            if (hidden) {
                jQuery(elem).show();
            } else {
                anim.done(function() {
                    jQuery(elem).hide();
                });
            }
            anim.done(function() {
                var prop;
                jQuery._removeData(elem, "fxshow");
                for (prop in orig) {
                    jQuery.style(elem, prop, orig[prop]);
                }
            });
            for (index = 0; index < length; index++) {
                prop = handled[index];
                tween = anim.createTween(prop, hidden ? dataShow[prop] : 0);
                orig[prop] = dataShow[prop] || jQuery.style(elem, prop);
                if (!(prop in dataShow)) {
                    dataShow[prop] = tween.start;
                    if (hidden) {
                        tween.end = tween.start;
                        tween.start = prop === "width" || prop === "height" ? 1 : 0;
                    }
                }
            }
        }
    }
    function Tween(elem, options, prop, end, easing) {
        return new Tween.prototype.init(elem, options, prop, end, easing);
    }
    jQuery.Tween = Tween;
    Tween.prototype = {
        constructor: Tween,
        init: function(elem, options, prop, end, easing, unit) {
            this.elem = elem;
            this.prop = prop;
            this.easing = easing || "swing";
            this.options = options;
            this.start = this.now = this.cur();
            this.end = end;
            this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
        },
        cur: function() {
            var hooks = Tween.propHooks[this.prop];
            return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
        },
        run: function(percent) {
            var eased, hooks = Tween.propHooks[this.prop];
            if (this.options.duration) {
                this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
            } else {
                this.pos = eased = percent;
            }
            this.now = (this.end - this.start) * eased + this.start;
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this);
            }
            if (hooks && hooks.set) {
                hooks.set(this);
            } else {
                Tween.propHooks._default.set(this);
            }
            return this;
        }
    };
    Tween.prototype.init.prototype = Tween.prototype;
    Tween.propHooks = {
        _default: {
            get: function(tween) {
                var result;
                if (tween.elem[tween.prop] != null && (!tween.elem.style || tween.elem.style[tween.prop] == null)) {
                    return tween.elem[tween.prop];
                }
                result = jQuery.css(tween.elem, tween.prop, "auto");
                return !result || result === "auto" ? 0 : result;
            },
            set: function(tween) {
                if (jQuery.fx.step[tween.prop]) {
                    jQuery.fx.step[tween.prop](tween);
                } else if (tween.elem.style && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
                    jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
                } else {
                    tween.elem[tween.prop] = tween.now;
                }
            }
        }
    };
    Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function(tween) {
            if (tween.elem.nodeType && tween.elem.parentNode) {
                tween.elem[tween.prop] = tween.now;
            }
        }
    };
    jQuery.each([ "toggle", "show", "hide" ], function(i, name) {
        var cssFn = jQuery.fn[name];
        jQuery.fn[name] = function(speed, easing, callback) {
            return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
        };
    });
    jQuery.fn.extend({
        fadeTo: function(speed, to, easing, callback) {
            return this.filter(isHidden).css("opacity", 0).show().end().animate({
                opacity: to
            }, speed, easing, callback);
        },
        animate: function(prop, speed, easing, callback) {
            var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function() {
                var anim = Animation(this, jQuery.extend({}, prop), optall);
                doAnimation.finish = function() {
                    anim.stop(true);
                };
                if (empty || jQuery._data(this, "finish")) {
                    anim.stop(true);
                }
            };
            doAnimation.finish = doAnimation;
            return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
        },
        stop: function(type, clearQueue, gotoEnd) {
            var stopQueue = function(hooks) {
                var stop = hooks.stop;
                delete hooks.stop;
                stop(gotoEnd);
            };
            if (typeof type !== "string") {
                gotoEnd = clearQueue;
                clearQueue = type;
                type = undefined;
            }
            if (clearQueue && type !== false) {
                this.queue(type || "fx", []);
            }
            return this.each(function() {
                var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery.timers, data = jQuery._data(this);
                if (index) {
                    if (data[index] && data[index].stop) {
                        stopQueue(data[index]);
                    }
                } else {
                    for (index in data) {
                        if (data[index] && data[index].stop && rrun.test(index)) {
                            stopQueue(data[index]);
                        }
                    }
                }
                for (index = timers.length; index--; ) {
                    if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                        timers[index].anim.stop(gotoEnd);
                        dequeue = false;
                        timers.splice(index, 1);
                    }
                }
                if (dequeue || !gotoEnd) {
                    jQuery.dequeue(this, type);
                }
            });
        },
        finish: function(type) {
            if (type !== false) {
                type = type || "fx";
            }
            return this.each(function() {
                var index, data = jQuery._data(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
                data.finish = true;
                jQuery.queue(this, type, []);
                if (hooks && hooks.cur && hooks.cur.finish) {
                    hooks.cur.finish.call(this);
                }
                for (index = timers.length; index--; ) {
                    if (timers[index].elem === this && timers[index].queue === type) {
                        timers[index].anim.stop(true);
                        timers.splice(index, 1);
                    }
                }
                for (index = 0; index < length; index++) {
                    if (queue[index] && queue[index].finish) {
                        queue[index].finish.call(this);
                    }
                }
                delete data.finish;
            });
        }
    });
    function genFx(type, includeWidth) {
        var which, attrs = {
            height: type
        }, i = 0;
        includeWidth = includeWidth ? 1 : 0;
        for (;i < 4; i += 2 - includeWidth) {
            which = cssExpand[i];
            attrs["margin" + which] = attrs["padding" + which] = type;
        }
        if (includeWidth) {
            attrs.opacity = attrs.width = type;
        }
        return attrs;
    }
    jQuery.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(name, props) {
        jQuery.fn[name] = function(speed, easing, callback) {
            return this.animate(props, speed, easing, callback);
        };
    });
    jQuery.speed = function(speed, easing, fn) {
        var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
            complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
            duration: speed,
            easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
        };
        opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;
        if (opt.queue == null || opt.queue === true) {
            opt.queue = "fx";
        }
        opt.old = opt.complete;
        opt.complete = function() {
            if (jQuery.isFunction(opt.old)) {
                opt.old.call(this);
            }
            if (opt.queue) {
                jQuery.dequeue(this, opt.queue);
            }
        };
        return opt;
    };
    jQuery.easing = {
        linear: function(p) {
            return p;
        },
        swing: function(p) {
            return .5 - Math.cos(p * Math.PI) / 2;
        }
    };
    jQuery.timers = [];
    jQuery.fx = Tween.prototype.init;
    jQuery.fx.tick = function() {
        var timer, timers = jQuery.timers, i = 0;
        fxNow = jQuery.now();
        for (;i < timers.length; i++) {
            timer = timers[i];
            if (!timer() && timers[i] === timer) {
                timers.splice(i--, 1);
            }
        }
        if (!timers.length) {
            jQuery.fx.stop();
        }
        fxNow = undefined;
    };
    jQuery.fx.timer = function(timer) {
        if (timer() && jQuery.timers.push(timer)) {
            jQuery.fx.start();
        }
    };
    jQuery.fx.interval = 13;
    jQuery.fx.start = function() {
        if (!timerId) {
            timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval);
        }
    };
    jQuery.fx.stop = function() {
        clearInterval(timerId);
        timerId = null;
    };
    jQuery.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    jQuery.fx.step = {};
    if (jQuery.expr && jQuery.expr.filters) {
        jQuery.expr.filters.animated = function(elem) {
            return jQuery.grep(jQuery.timers, function(fn) {
                return elem === fn.elem;
            }).length;
        };
    }
    jQuery.fn.offset = function(options) {
        if (arguments.length) {
            return options === undefined ? this : this.each(function(i) {
                jQuery.offset.setOffset(this, options, i);
            });
        }
        var docElem, win, box = {
            top: 0,
            left: 0
        }, elem = this[0], doc = elem && elem.ownerDocument;
        if (!doc) {
            return;
        }
        docElem = doc.documentElement;
        if (!jQuery.contains(docElem, elem)) {
            return box;
        }
        if (typeof elem.getBoundingClientRect !== "undefined") {
            box = elem.getBoundingClientRect();
        }
        win = getWindow(doc);
        return {
            top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
            left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0)
        };
    };
    jQuery.offset = {
        setOffset: function(elem, options, i) {
            var position = jQuery.css(elem, "position");
            if (position === "static") {
                elem.style.position = "relative";
            }
            var curElem = jQuery(elem), curOffset = curElem.offset(), curCSSTop = jQuery.css(elem, "top"), curCSSLeft = jQuery.css(elem, "left"), calculatePosition = (position === "absolute" || position === "fixed") && jQuery.inArray("auto", [ curCSSTop, curCSSLeft ]) > -1, props = {}, curPosition = {}, curTop, curLeft;
            if (calculatePosition) {
                curPosition = curElem.position();
                curTop = curPosition.top;
                curLeft = curPosition.left;
            } else {
                curTop = parseFloat(curCSSTop) || 0;
                curLeft = parseFloat(curCSSLeft) || 0;
            }
            if (jQuery.isFunction(options)) {
                options = options.call(elem, i, curOffset);
            }
            if (options.top != null) {
                props.top = options.top - curOffset.top + curTop;
            }
            if (options.left != null) {
                props.left = options.left - curOffset.left + curLeft;
            }
            if ("using" in options) {
                options.using.call(elem, props);
            } else {
                curElem.css(props);
            }
        }
    };
    jQuery.fn.extend({
        position: function() {
            if (!this[0]) {
                return;
            }
            var offsetParent, offset, parentOffset = {
                top: 0,
                left: 0
            }, elem = this[0];
            if (jQuery.css(elem, "position") === "fixed") {
                offset = elem.getBoundingClientRect();
            } else {
                offsetParent = this.offsetParent();
                offset = this.offset();
                if (!jQuery.nodeName(offsetParent[0], "html")) {
                    parentOffset = offsetParent.offset();
                }
                parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true);
                parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true);
            }
            return {
                top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
                left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
            };
        },
        offsetParent: function() {
            return this.map(function() {
                var offsetParent = this.offsetParent || document.documentElement;
                while (offsetParent && !jQuery.nodeName(offsetParent, "html") && jQuery.css(offsetParent, "position") === "static") {
                    offsetParent = offsetParent.offsetParent;
                }
                return offsetParent || document.documentElement;
            });
        }
    });
    jQuery.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(method, prop) {
        var top = /Y/.test(prop);
        jQuery.fn[method] = function(val) {
            return jQuery.access(this, function(elem, method, val) {
                var win = getWindow(elem);
                if (val === undefined) {
                    return win ? prop in win ? win[prop] : win.document.documentElement[method] : elem[method];
                }
                if (win) {
                    win.scrollTo(!top ? val : jQuery(win).scrollLeft(), top ? val : jQuery(win).scrollTop());
                } else {
                    elem[method] = val;
                }
            }, method, val, arguments.length, null);
        };
    });
    function getWindow(elem) {
        return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 ? elem.defaultView || elem.parentWindow : false;
    }
    jQuery.each({
        Height: "height",
        Width: "width"
    }, function(name, type) {
        jQuery.each({
            padding: "inner" + name,
            content: type,
            "": "outer" + name
        }, function(defaultExtra, funcName) {
            jQuery.fn[funcName] = function(margin, value) {
                var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
                return jQuery.access(this, function(elem, type, value) {
                    var doc;
                    if (jQuery.isWindow(elem)) {
                        return elem.document.documentElement["client" + name];
                    }
                    if (elem.nodeType === 9) {
                        doc = elem.documentElement;
                        return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
                    }
                    return value === undefined ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra);
                }, type, chainable ? margin : undefined, chainable, null);
            };
        });
    });
    window.jQuery = window.$ = jQuery;
    if (typeof define === "function" && define.amd && define.amd.jQuery) {
        define("jquery", [], function() {
            return jQuery;
        });
    }
})(window);

(function($, document, undefined) {
    var pluses = /\+/g;
    function raw(s) {
        return s;
    }
    function decoded(s) {
        return decodeURIComponent(s.replace(pluses, " "));
    }
    var config = $.cookie = function(key, value, options) {
        if (value !== undefined) {
            options = $.extend({}, config.defaults, options);
            if (value === null) {
                options.expires = -1;
            }
            if (typeof options.expires === "number") {
                var days = options.expires, t = options.expires = new Date();
                t.setDate(t.getDate() + days);
            }
            value = config.json ? JSON.stringify(value) : String(value);
            return document.cookie = [ encodeURIComponent(key), "=", config.raw ? value : encodeURIComponent(value), options.expires ? "; expires=" + options.expires.toUTCString() : "", options.path ? "; path=" + options.path : "", options.domain ? "; domain=" + options.domain : "", options.secure ? "; secure" : "" ].join("");
        }
        var decode = config.raw ? raw : decoded;
        var cookies = document.cookie.split("; ");
        for (var i = 0, l = cookies.length; i < l; i++) {
            var parts = cookies[i].split("=");
            if (decode(parts.shift()) === key) {
                var cookie = decode(parts.join("="));
                return config.json ? JSON.parse(cookie) : cookie;
            }
        }
        return null;
    };
    config.defaults = {};
    $.removeCookie = function(key, options) {
        if ($.cookie(key) !== null) {
            $.cookie(key, null, options);
            return true;
        }
        return false;
    };
})(jQuery, document);

(function(module) {
    if (typeof define === "function" && define.amd) {
        define([ "jquery" ], module);
    } else {
        module(jQuery);
    }
})(function(jQuery, undefined) {
    var threshold = 6, add = jQuery.event.add, remove = jQuery.event.remove, trigger = function(node, type, data) {
        jQuery.event.trigger(type, data, node);
    }, requestFrame = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(fn, element) {
            return window.setTimeout(function() {
                fn();
            }, 25);
        };
    }(), ignoreTags = {
        textarea: true,
        input: true,
        select: true,
        button: true
    }, mouseevents = {
        move: "mousemove",
        cancel: "mouseup dragstart",
        end: "mouseup"
    }, touchevents = {
        move: "touchmove",
        cancel: "touchend",
        end: "touchend"
    };
    function Timer(fn) {
        var callback = fn, active = false, running = false;
        function trigger(time) {
            if (active) {
                callback();
                requestFrame(trigger);
                running = true;
                active = false;
            } else {
                running = false;
            }
        }
        this.kick = function(fn) {
            active = true;
            if (!running) {
                trigger();
            }
        };
        this.end = function(fn) {
            var cb = callback;
            if (!fn) {
                return;
            }
            if (!running) {
                fn();
            } else {
                callback = active ? function() {
                    cb();
                    fn();
                } : fn;
                active = true;
            }
        };
    }
    function returnTrue() {
        return true;
    }
    function returnFalse() {
        return false;
    }
    function preventDefault(e) {
        e.preventDefault();
    }
    function preventIgnoreTags(e) {
        if (ignoreTags[e.target.tagName.toLowerCase()]) {
            return;
        }
        e.preventDefault();
    }
    function isLeftButton(e) {
        return e.which === 1 && !e.ctrlKey && !e.altKey;
    }
    function identifiedTouch(touchList, id) {
        var i, l;
        if (touchList.identifiedTouch) {
            return touchList.identifiedTouch(id);
        }
        i = -1;
        l = touchList.length;
        while (++i < l) {
            if (touchList[i].identifier === id) {
                return touchList[i];
            }
        }
    }
    function changedTouch(e, event) {
        var touch = identifiedTouch(e.changedTouches, event.identifier);
        if (!touch) {
            return;
        }
        if (touch.pageX === event.pageX && touch.pageY === event.pageY) {
            return;
        }
        return touch;
    }
    function mousedown(e) {
        var data;
        if (!isLeftButton(e)) {
            return;
        }
        data = {
            target: e.target,
            startX: e.pageX,
            startY: e.pageY,
            timeStamp: e.timeStamp
        };
        add(document, mouseevents.move, mousemove, data);
        add(document, mouseevents.cancel, mouseend, data);
    }
    function mousemove(e) {
        var data = e.data;
        checkThreshold(e, data, e, removeMouse);
    }
    function mouseend(e) {
        removeMouse();
    }
    function removeMouse() {
        remove(document, mouseevents.move, mousemove);
        remove(document, mouseevents.cancel, removeMouse);
    }
    function touchstart(e) {
        var touch, template;
        if (ignoreTags[e.target.tagName.toLowerCase()]) {
            return;
        }
        touch = e.changedTouches[0];
        template = {
            target: touch.target,
            startX: touch.pageX,
            startY: touch.pageY,
            timeStamp: e.timeStamp,
            identifier: touch.identifier
        };
        add(document, touchevents.move + "." + touch.identifier, touchmove, template);
        add(document, touchevents.cancel + "." + touch.identifier, touchend, template);
    }
    function touchmove(e) {
        var data = e.data, touch = changedTouch(e, data);
        if (!touch) {
            return;
        }
        checkThreshold(e, data, touch, removeTouch);
    }
    function touchend(e) {
        var template = e.data, touch = identifiedTouch(e.changedTouches, template.identifier);
        if (!touch) {
            return;
        }
        removeTouch(template.identifier);
    }
    function removeTouch(identifier) {
        remove(document, "." + identifier, touchmove);
        remove(document, "." + identifier, touchend);
    }
    function checkThreshold(e, template, touch, fn) {
        var distX = touch.pageX - template.startX, distY = touch.pageY - template.startY;
        if (distX * distX + distY * distY < threshold * threshold) {
            return;
        }
        triggerStart(e, template, touch, distX, distY, fn);
    }
    function handled() {
        this._handled = returnTrue;
        return false;
    }
    function flagAsHandled(e) {
        e._handled();
    }
    function triggerStart(e, template, touch, distX, distY, fn) {
        var node = template.target, touches, time;
        touches = e.targetTouches;
        time = e.timeStamp - template.timeStamp;
        template.type = "movestart";
        template.distX = distX;
        template.distY = distY;
        template.deltaX = distX;
        template.deltaY = distY;
        template.pageX = touch.pageX;
        template.pageY = touch.pageY;
        template.velocityX = distX / time;
        template.velocityY = distY / time;
        template.targetTouches = touches;
        template.finger = touches ? touches.length : 1;
        template._handled = handled;
        template._preventTouchmoveDefault = function() {
            e.preventDefault();
        };
        trigger(template.target, template);
        fn(template.identifier);
    }
    function activeMousemove(e) {
        var event = e.data.event, timer = e.data.timer;
        updateEvent(event, e, e.timeStamp, timer);
    }
    function activeMouseend(e) {
        var event = e.data.event, timer = e.data.timer;
        removeActiveMouse();
        endEvent(event, timer, function() {
            setTimeout(function() {
                remove(event.target, "click", returnFalse);
            }, 0);
        });
    }
    function removeActiveMouse(event) {
        remove(document, mouseevents.move, activeMousemove);
        remove(document, mouseevents.end, activeMouseend);
    }
    function activeTouchmove(e) {
        var event = e.data.event, timer = e.data.timer, touch = changedTouch(e, event);
        if (!touch) {
            return;
        }
        e.preventDefault();
        event.targetTouches = e.targetTouches;
        updateEvent(event, touch, e.timeStamp, timer);
    }
    function activeTouchend(e) {
        var event = e.data.event, timer = e.data.timer, touch = identifiedTouch(e.changedTouches, event.identifier);
        if (!touch) {
            return;
        }
        removeActiveTouch(event);
        endEvent(event, timer);
    }
    function removeActiveTouch(event) {
        remove(document, "." + event.identifier, activeTouchmove);
        remove(document, "." + event.identifier, activeTouchend);
    }
    function updateEvent(event, touch, timeStamp, timer) {
        var time = timeStamp - event.timeStamp;
        event.type = "move";
        event.distX = touch.pageX - event.startX;
        event.distY = touch.pageY - event.startY;
        event.deltaX = touch.pageX - event.pageX;
        event.deltaY = touch.pageY - event.pageY;
        event.velocityX = .3 * event.velocityX + .7 * event.deltaX / time;
        event.velocityY = .3 * event.velocityY + .7 * event.deltaY / time;
        event.pageX = touch.pageX;
        event.pageY = touch.pageY;
        timer.kick();
    }
    function endEvent(event, timer, fn) {
        timer.end(function() {
            event.type = "moveend";
            trigger(event.target, event);
            return fn && fn();
        });
    }
    function setup(data, namespaces, eventHandle) {
        add(this, "movestart.move", flagAsHandled);
        return true;
    }
    function teardown(namespaces) {
        remove(this, "dragstart drag", preventDefault);
        remove(this, "mousedown touchstart", preventIgnoreTags);
        remove(this, "movestart", flagAsHandled);
        return true;
    }
    function addMethod(handleObj) {
        if (handleObj.namespace === "move" || handleObj.namespace === "moveend") {
            return;
        }
        add(this, "dragstart." + handleObj.guid + " drag." + handleObj.guid, preventDefault, undefined, handleObj.selector);
        add(this, "mousedown." + handleObj.guid, preventIgnoreTags, undefined, handleObj.selector);
    }
    function removeMethod(handleObj) {
        if (handleObj.namespace === "move" || handleObj.namespace === "moveend") {
            return;
        }
        remove(this, "dragstart." + handleObj.guid + " drag." + handleObj.guid);
        remove(this, "mousedown." + handleObj.guid);
    }
    jQuery.event.special.movestart = {
        setup: setup,
        teardown: teardown,
        add: addMethod,
        remove: removeMethod,
        _default: function(e) {
            var template, data;
            if (!e._handled()) {
                return;
            }
            template = {
                target: e.target,
                startX: e.startX,
                startY: e.startY,
                pageX: e.pageX,
                pageY: e.pageY,
                distX: e.distX,
                distY: e.distY,
                deltaX: e.deltaX,
                deltaY: e.deltaY,
                velocityX: e.velocityX,
                velocityY: e.velocityY,
                timeStamp: e.timeStamp,
                identifier: e.identifier,
                targetTouches: e.targetTouches,
                finger: e.finger
            };
            data = {
                event: template,
                timer: new Timer(function(time) {
                    trigger(e.target, template);
                })
            };
            if (e.identifier === undefined) {
                add(e.target, "click", returnFalse);
                add(document, mouseevents.move, activeMousemove, data);
                add(document, mouseevents.end, activeMouseend, data);
            } else {
                e._preventTouchmoveDefault();
                add(document, touchevents.move + "." + e.identifier, activeTouchmove, data);
                add(document, touchevents.end + "." + e.identifier, activeTouchend, data);
            }
        }
    };
    jQuery.event.special.move = {
        setup: function() {
            add(this, "movestart.move", jQuery.noop);
        },
        teardown: function() {
            remove(this, "movestart.move", jQuery.noop);
        }
    };
    jQuery.event.special.moveend = {
        setup: function() {
            add(this, "movestart.moveend", jQuery.noop);
        },
        teardown: function() {
            remove(this, "movestart.moveend", jQuery.noop);
        }
    };
    add(document, "mousedown.move", mousedown);
    add(document, "touchstart.move", touchstart);
    if (typeof Array.prototype.indexOf === "function") {
        (function(jQuery, undefined) {
            var props = [ "changedTouches", "targetTouches" ], l = props.length;
            while (l--) {
                if (jQuery.event.props.indexOf(props[l]) === -1) {
                    jQuery.event.props.push(props[l]);
                }
            }
        })(jQuery);
    }
});

(function(module) {
    if (typeof define === "function" && define.amd) {
        define([ "jquery" ], module);
    } else {
        module(jQuery);
    }
})(function(jQuery, undefined) {
    var add = jQuery.event.add, remove = jQuery.event.remove, trigger = function(node, type, data) {
        jQuery.event.trigger(type, data, node);
    }, settings = {
        threshold: .4,
        sensitivity: 6
    };
    function moveend(e) {
        var w, h, event;
        w = e.target.offsetWidth;
        h = e.target.offsetHeight;
        event = {
            distX: e.distX,
            distY: e.distY,
            velocityX: e.velocityX,
            velocityY: e.velocityY,
            finger: e.finger
        };
        if (e.distX > e.distY) {
            if (e.distX > -e.distY) {
                if (e.distX / w > settings.threshold || e.velocityX * e.distX / w * settings.sensitivity > 1) {
                    event.type = "swiperight";
                    trigger(e.currentTarget, event);
                }
            } else {
                if (-e.distY / h > settings.threshold || e.velocityY * e.distY / w * settings.sensitivity > 1) {
                    event.type = "swipeup";
                    trigger(e.currentTarget, event);
                }
            }
        } else {
            if (e.distX > -e.distY) {
                if (e.distY / h > settings.threshold || e.velocityY * e.distY / w * settings.sensitivity > 1) {
                    event.type = "swipedown";
                    trigger(e.currentTarget, event);
                }
            } else {
                if (-e.distX / w > settings.threshold || e.velocityX * e.distX / w * settings.sensitivity > 1) {
                    event.type = "swipeleft";
                    trigger(e.currentTarget, event);
                }
            }
        }
    }
    function getData(node) {
        var data = jQuery.data(node, "event_swipe");
        if (!data) {
            data = {
                count: 0
            };
            jQuery.data(node, "event_swipe", data);
        }
        return data;
    }
    jQuery.event.special.swipe = jQuery.event.special.swipeleft = jQuery.event.special.swiperight = jQuery.event.special.swipeup = jQuery.event.special.swipedown = {
        setup: function(data, namespaces, eventHandle) {
            var data = getData(this);
            if (data.count++ > 0) {
                return;
            }
            add(this, "moveend", moveend);
            return true;
        },
        teardown: function() {
            var data = getData(this);
            if (--data.count > 0) {
                return;
            }
            remove(this, "moveend", moveend);
            return true;
        },
        settings: settings
    };
});

(function($, window, undefined) {
    "use strict";
    $.fn.foundationAccordion = function(options) {
        var hasHover = function(accordion) {
            return accordion.hasClass("hover") && !Modernizr.touch;
        };
        $(document).on("mouseenter", ".accordion li", function() {
            var p = $(this).parent();
            if (hasHover(p)) {
                var flyout = $(this).children(".content").first();
                $(".content", p).not(flyout).hide().parent("li").removeClass("active");
                flyout.show(0, function() {
                    flyout.parent("li").addClass("active");
                });
            }
        });
        $(document).on("click.fndtn", ".accordion li .title", function() {
            var li = $(this).closest("li"), p = li.parent();
            if (!hasHover(p)) {
                var flyout = li.children(".content").first();
                if (li.hasClass("active")) {
                    p.find("li").removeClass("active").end().find(".content").hide();
                } else {
                    $(".content", p).not(flyout).hide().parent("li").removeClass("active");
                    flyout.show(0, function() {
                        flyout.parent("li").addClass("active");
                    });
                }
            }
        });
    };
})(jQuery, this);

(function($, window, undefined) {
    "use strict";
    $.fn.foundationAlerts = function(options) {
        var settings = $.extend({
            callback: $.noop
        }, options);
        $(document).on("click", ".alert-box a.close", function(e) {
            e.preventDefault();
            $(this).closest(".alert-box").fadeOut(function() {
                $(this).remove();
                settings.callback();
            });
        });
    };
})(jQuery, this);

(function($, window, undefined) {
    "use strict";
    $.fn.foundationButtons = function(options) {
        var $doc = $(document), config = $.extend({
            dropdownAsToggle: false,
            activeClass: "active"
        }, options), closeDropdowns = function(dropdown) {
            $(".button.dropdown").find("ul").not(dropdown).removeClass("show-dropdown");
        }, resetToggles = function(button) {
            var buttons = $(".button.dropdown").not(button);
            buttons.add($("> span." + config.activeClass, buttons)).removeClass(config.activeClass);
        };
        $doc.on("click.fndtn", ".button.disabled", function(e) {
            e.preventDefault();
        });
        $(".button.dropdown > ul", this).addClass("no-hover");
        $doc.on("click.fndtn", ".button.dropdown:not(.split), .button.dropdown.split span", function(e) {
            var $el = $(this), button = $el.closest(".button.dropdown"), dropdown = $("> ul", button);
            if ($.inArray(e.target.nodeName, [ "A", "BUTTON" ])) {
                e.preventDefault();
            }
            setTimeout(function() {
                closeDropdowns(config.dropdownAsToggle ? "" : dropdown);
                dropdown.toggleClass("show-dropdown");
                if (config.dropdownAsToggle) {
                    resetToggles(button);
                    $el.toggleClass(config.activeClass);
                }
            }, 0);
        });
        $doc.on("click.fndtn", "body, html", function(e) {
            if (undefined == e.originalEvent) {
                return;
            }
            if (!$(e.originalEvent.target).is(".button.dropdown:not(.split), .button.dropdown.split span")) {
                closeDropdowns();
                if (config.dropdownAsToggle) {
                    resetToggles();
                }
            }
        });
        var normalButtonHeight = $(".button.dropdown:not(.large):not(.small):not(.tiny):visible", this).outerHeight() - 1, largeButtonHeight = $(".button.large.dropdown:visible", this).outerHeight() - 1, smallButtonHeight = $(".button.small.dropdown:visible", this).outerHeight() - 1, tinyButtonHeight = $(".button.tiny.dropdown:visible", this).outerHeight() - 1;
        $(".button.dropdown:not(.large):not(.small):not(.tiny) > ul", this).css("top", normalButtonHeight);
        $(".button.dropdown.large > ul", this).css("top", largeButtonHeight);
        $(".button.dropdown.small > ul", this).css("top", smallButtonHeight);
        $(".button.dropdown.tiny > ul", this).css("top", tinyButtonHeight);
        $(".button.dropdown.up:not(.large):not(.small):not(.tiny) > ul", this).css("top", "auto").css("bottom", normalButtonHeight - 2);
        $(".button.dropdown.up.large > ul", this).css("top", "auto").css("bottom", largeButtonHeight - 2);
        $(".button.dropdown.up.small > ul", this).css("top", "auto").css("bottom", smallButtonHeight - 2);
        $(".button.dropdown.up.tiny > ul", this).css("top", "auto").css("bottom", tinyButtonHeight - 2);
    };
})(jQuery, this);

(function($, window, document, undefined) {
    "use strict";
    var defaults = {
        templates: {
            viewing: '<a href="#" class="clearing-close">&times;</a>' + '<div class="visible-img" style="display: none"><img src="#">' + '<p class="clearing-caption"></p><a href="#" class="clearing-main-left"></a>' + '<a href="#" class="clearing-main-right"></a></div>'
        },
        close_selectors: "a.clearing-close",
        initialized: false,
        locked: false
    }, cl = {
        init: function(options, extendMethods) {
            return this.find("ul[data-clearing]").each(function() {
                var doc = $(document), $el = $(this), options = options || {}, extendMethods = extendMethods || {}, settings = $el.data("fndtn.clearing.settings");
                if (!settings) {
                    options.$parent = $el.parent();
                    $el.data("fndtn.clearing.settings", $.extend({}, defaults, options));
                    cl.assemble($el.find("li"));
                    if (!defaults.initialized) {
                        cl.events($el);
                        if (Modernizr.touch) cl.swipe_events();
                    }
                }
            });
        },
        events: function(el) {
            var settings = el.data("fndtn.clearing.settings");
            $(document).on("click.fndtn.clearing", "ul[data-clearing] li", function(e, current, target) {
                var current = current || $(this), target = target || current, settings = current.parent().data("fndtn.clearing.settings");
                e.preventDefault();
                if (!settings) {
                    current.parent().foundationClearing();
                }
                cl.open($(e.target), current, target);
                cl.update_paddles(target);
            }).on("click.fndtn.clearing", ".clearing-main-right", function(e) {
                cl.nav(e, "next");
            }).on("click.fndtn.clearing", ".clearing-main-left", function(e) {
                cl.nav(e, "prev");
            }).on("click.fndtn.clearing", settings.close_selectors, this.close).on("keydown.fndtn.clearing", this.keydown);
            $(window).on("resize.fndtn.clearing", this.resize);
            defaults.initialized = true;
        },
        swipe_events: function() {
            $(document).bind("swipeleft", "ul[data-clearing]", function(e) {
                cl.nav(e, "next");
            }).bind("swiperight", "ul[data-clearing]", function(e) {
                cl.nav(e, "prev");
            }).bind("movestart", "ul[data-clearing]", function(e) {
                if (e.distX > e.distY && e.distX < -e.distY || e.distX < e.distY && e.distX > -e.distY) {
                    e.preventDefault();
                }
            });
        },
        assemble: function($li) {
            var $el = $li.parent(), settings = $el.data("fndtn.clearing.settings"), grid = $el.detach(), data = {
                grid: '<div class="carousel">' + this.outerHTML(grid[0]) + "</div>",
                viewing: settings.templates.viewing
            }, wrapper = '<div class="clearing-assembled"><div>' + data.viewing + data.grid + "</div></div>";
            return settings.$parent.append(wrapper);
        },
        open: function($image, current, target) {
            var root = target.closest(".clearing-assembled"), container = root.find("div:first"), visible_image = container.find(".visible-img"), image = visible_image.find("img").not($image);
            if (!cl.locked()) {
                image.attr("src", this.load($image));
                image.loaded(function() {
                    root.addClass("clearing-blackout");
                    container.addClass("clearing-container");
                    this.caption(visible_image.find(".clearing-caption"), $image);
                    visible_image.show();
                    this.fix_height(target);
                    this.center(image);
                    this.shift(current, target, function() {
                        target.siblings().removeClass("visible");
                        target.addClass("visible");
                    });
                }.bind(this));
            }
        },
        close: function(e) {
            e.preventDefault();
            var root = function(target) {
                if (/blackout/.test(target.selector)) {
                    return target;
                } else {
                    return target.closest(".clearing-blackout");
                }
            }($(this)), container, visible_image;
            if (this === e.target && root) {
                container = root.find("div:first"), visible_image = container.find(".visible-img");
                defaults.prev_index = 0;
                root.find("ul[data-clearing]").attr("style", "");
                root.removeClass("clearing-blackout");
                container.removeClass("clearing-container");
                visible_image.hide();
            }
            return false;
        },
        keydown: function(e) {
            var clearing = $(".clearing-blackout").find("ul[data-clearing]");
            if (e.which === 39) cl.go(clearing, "next");
            if (e.which === 37) cl.go(clearing, "prev");
            if (e.which === 27) $("a.clearing-close").trigger("click");
        },
        nav: function(e, direction) {
            var clearing = $(".clearing-blackout").find("ul[data-clearing]");
            e.preventDefault();
            this.go(clearing, direction);
        },
        resize: function() {
            var image = $(".clearing-blackout .visible-img").find("img");
            if (image.length > 0) {
                cl.center(image);
            }
        },
        fix_height: function(target) {
            var lis = target.siblings();
            lis.each(function() {
                var li = $(this), image = li.find("img");
                if (li.height() > image.outerHeight()) {
                    li.addClass("fix-height");
                }
            }).closest("ul").width(lis.length * 100 + "%");
        },
        update_paddles: function(target) {
            var visible_image = target.closest(".carousel").siblings(".visible-img");
            if (target.next().length > 0) {
                visible_image.find(".clearing-main-right").removeClass("disabled");
            } else {
                visible_image.find(".clearing-main-right").addClass("disabled");
            }
            if (target.prev().length > 0) {
                visible_image.find(".clearing-main-left").removeClass("disabled");
            } else {
                visible_image.find(".clearing-main-left").addClass("disabled");
            }
        },
        load: function($image) {
            var href = $image.parent().attr("href");
            this.preload($image);
            if (href) return href;
            return $image.attr("src");
        },
        preload: function($image) {
            this.img($image.closest("li").next());
            this.img($image.closest("li").prev());
        },
        img: function(img) {
            if (img.length > 0) {
                var new_img = new Image(), new_a = img.find("a");
                if (new_a.length > 0) {
                    new_img.src = new_a.attr("href");
                } else {
                    new_img.src = img.find("img").attr("src");
                }
            }
        },
        caption: function(container, $image) {
            var caption = $image.data("caption");
            if (caption) {
                container.text(caption).show();
            } else {
                container.text("").hide();
            }
        },
        go: function($ul, direction) {
            var current = $ul.find(".visible"), target = current[direction]();
            if (target.length > 0) {
                target.find("img").trigger("click", [ current, target ]);
            }
        },
        shift: function(current, target, callback) {
            var clearing = target.parent(), old_index = defaults.prev_index, direction = this.direction(clearing, current, target), left = parseInt(clearing.css("left"), 10), width = target.outerWidth(), skip_shift;
            if (target.index() !== old_index && !/skip/.test(direction)) {
                if (/left/.test(direction)) {
                    this.lock();
                    clearing.animate({
                        left: left + width
                    }, 300, this.unlock);
                } else if (/right/.test(direction)) {
                    this.lock();
                    clearing.animate({
                        left: left - width
                    }, 300, this.unlock);
                }
            } else if (/skip/.test(direction)) {
                skip_shift = target.index() - defaults.up_count;
                this.lock();
                if (skip_shift > 0) {
                    clearing.animate({
                        left: -(skip_shift * width)
                    }, 300, this.unlock);
                } else {
                    clearing.animate({
                        left: 0
                    }, 300, this.unlock);
                }
            }
            callback();
        },
        lock: function() {
            defaults.locked = true;
        },
        unlock: function() {
            defaults.locked = false;
        },
        locked: function() {
            return defaults.locked;
        },
        direction: function($el, current, target) {
            var lis = $el.find("li"), li_width = lis.outerWidth() + lis.outerWidth() / 4, up_count = Math.floor($(".clearing-container").outerWidth() / li_width) - 1, target_index = lis.index(target), response;
            defaults.up_count = up_count;
            if (this.adjacent(defaults.prev_index, target_index)) {
                if (target_index > up_count && target_index > defaults.prev_index) {
                    response = "right";
                } else if (target_index > up_count - 1 && target_index <= defaults.prev_index) {
                    response = "left";
                } else {
                    response = false;
                }
            } else {
                response = "skip";
            }
            defaults.prev_index = target_index;
            return response;
        },
        adjacent: function(current_index, target_index) {
            for (var i = target_index + 1; i >= target_index - 1; i--) {
                if (i === current_index) return true;
            }
            return false;
        },
        center: function(target) {
            target.css({
                marginLeft: -(target.outerWidth() / 2),
                marginTop: -(target.outerHeight() / 2)
            });
        },
        outerHTML: function(el) {
            return el.outerHTML || new XMLSerializer().serializeToString(el);
        }
    };
    $.fn.foundationClearing = function(method) {
        if (cl[method]) {
            return cl[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === "object" || !method) {
            return cl.init.apply(this, arguments);
        } else {
            $.error("Method " + method + " does not exist on jQuery.foundationClearing");
        }
    };
    (function($) {
        $.fn.loaded = function(callback, userSettings) {
            var options = $.extend({}, $.fn.loaded.defaults, userSettings), $images = this.find("img").add(this.filter("img")), unloadedImages = $images.length;
            function loaded() {
                unloadedImages -= 1;
                !unloadedImages && callback();
            }
            function bindLoad() {
                this.one("load", loaded);
                if ($.browser.msie) {
                    var src = this.attr("src"), param = src.match(/\?/) ? "&" : "?";
                    param += options.cachePrefix + "=" + new Date().getTime();
                    this.attr("src", src + param);
                }
            }
            return $images.each(function() {
                var $this = $(this);
                if (!$this.attr("src")) {
                    loaded();
                    return;
                }
                this.complete || this.readyState === 4 ? loaded() : bindLoad.call($this);
            });
        };
        $.fn.loaded.defaults = {
            cachePrefix: "random"
        };
    })(jQuery);
})(jQuery, this, this.document);

(function($) {
    var hiddenFix = function() {
        return {
            tmp: [],
            hidden: null,
            adjust: function($child) {
                var _self = this;
                _self.hidden = $child.parents().andSelf().filter(":hidden");
                _self.hidden.each(function() {
                    var $elem = $(this);
                    _self.tmp.push($elem.attr("style"));
                    $elem.css({
                        visibility: "hidden",
                        display: "block"
                    });
                });
            },
            reset: function() {
                var _self = this;
                _self.hidden.each(function(i) {
                    var $elem = $(this), _tmp = _self.tmp[i];
                    if (_tmp === undefined) $elem.removeAttr("style"); else $elem.attr("style", _tmp);
                });
                _self.tmp = [];
                _self.hidden = null;
            }
        };
    };
    jQuery.foundation = jQuery.foundation || {};
    jQuery.foundation.customForms = jQuery.foundation.customForms || {};
    $.foundation.customForms.appendCustomMarkup = function(options) {
        var defaults = {
            disable_class: "no-custom"
        };
        options = $.extend(defaults, options);
        function appendCustomMarkup(idx, sel) {
            var $this = $(sel).hide(), type = $this.attr("type"), $span = $this.next("span.custom." + type);
            if ($span.length === 0) {
                $span = $('<span class="custom ' + type + '"></span>').insertAfter($this);
            }
            $span.toggleClass("checked", $this.is(":checked"));
            $span.toggleClass("disabled", $this.is(":disabled"));
        }
        function appendCustomSelect(idx, sel) {
            var hiddenFixObj = hiddenFix();
            var $this = $(sel), $customSelect = $this.next("div.custom.dropdown"), $customList = $customSelect.find("ul"), $selectCurrent = $customSelect.find(".current"), $selector = $customSelect.find(".selector"), $options = $this.find("option"), $selectedOption = $options.filter(":selected"), maxWidth = 0, liHtml = "", $listItems;
            var $currentSelect = false;
            if ($this.hasClass(options.disable_class)) return;
            if ($customSelect.length === 0) {
                var customSelectSize = $this.hasClass("small") ? "small" : $this.hasClass("medium") ? "medium" : $this.hasClass("large") ? "large" : $this.hasClass("expand") ? "expand" : "";
                $customSelect = $('<div class="' + [ "custom", "dropdown", customSelectSize ].join(" ") + '"><a href="#" class="selector"></a><ul /></div>');
                $selector = $customSelect.find(".selector");
                $customList = $customSelect.find("ul");
                liHtml = $options.map(function() {
                    return "<li>" + $(this).html() + "</li>";
                }).get().join("");
                $customList.append(liHtml);
                $currentSelect = $customSelect.prepend('<a href="#" class="current">' + $selectedOption.html() + "</a>").find(".current");
                $this.after($customSelect).hide();
            } else {
                liHtml = $options.map(function() {
                    return "<li>" + $(this).html() + "</li>";
                }).get().join("");
                $customList.html("").append(liHtml);
            }
            $customSelect.toggleClass("disabled", $this.is(":disabled"));
            $listItems = $customList.find("li");
            $options.each(function(index) {
                if (this.selected) {
                    $listItems.eq(index).addClass("selected");
                    if ($currentSelect) {
                        $currentSelect.html($(this).html());
                    }
                }
            });
            $customList.css("width", "auto");
            $customSelect.css("width", "auto");
            if (!$customSelect.is(".small, .medium, .large, .expand")) {
                $customSelect.addClass("open");
                hiddenFixObj.adjust($customList);
                maxWidth = $listItems.outerWidth() > maxWidth ? $listItems.outerWidth() : maxWidth;
                hiddenFixObj.reset();
                $customSelect.removeClass("open");
                $customSelect.width(maxWidth + 18);
                $customList.width(maxWidth + 16);
            }
        }
        $("form.custom input:radio[data-customforms!=disabled]").each(appendCustomMarkup);
        $("form.custom input:checkbox[data-customforms!=disabled]").each(appendCustomMarkup);
        $("form.custom select[data-customforms!=disabled]").each(appendCustomSelect);
    };
    var refreshCustomSelect = function($select) {
        var maxWidth = 0, $customSelect = $select.next();
        $options = $select.find("option");
        $customSelect.find("ul").html("");
        $options.each(function() {
            $li = $("<li>" + $(this).html() + "</li>");
            $customSelect.find("ul").append($li);
        });
        $options.each(function(index) {
            if (this.selected) {
                $customSelect.find("li").eq(index).addClass("selected");
                $customSelect.find(".current").html($(this).html());
            }
        });
        $customSelect.removeAttr("style").find("ul").removeAttr("style");
        $customSelect.find("li").each(function() {
            $customSelect.addClass("open");
            if ($(this).outerWidth() > maxWidth) {
                maxWidth = $(this).outerWidth();
            }
            $customSelect.removeClass("open");
        });
        $customSelect.css("width", maxWidth + 18 + "px");
        $customSelect.find("ul").css("width", maxWidth + 16 + "px");
    };
    var toggleCheckbox = function($element) {
        var $input = $element.prev(), input = $input[0];
        if (false === $input.is(":disabled")) {
            input.checked = input.checked ? false : true;
            $element.toggleClass("checked");
            $input.trigger("change");
        }
    };
    var toggleRadio = function($element) {
        var $input = $element.prev(), $form = $input.closest("form.custom"), input = $input[0];
        if (false === $input.is(":disabled")) {
            $form.find('input:radio[name="' + $input.attr("name") + '"]').next().not($element).removeClass("checked");
            if (!$element.hasClass("checked")) {
                $element.toggleClass("checked");
            }
            input.checked = $element.hasClass("checked");
            $input.trigger("change");
        }
    };
    $(document).on("click", "form.custom span.custom.checkbox", function(event) {
        event.preventDefault();
        event.stopPropagation();
        toggleCheckbox($(this));
    });
    $(document).on("click", "form.custom span.custom.radio", function(event) {
        event.preventDefault();
        event.stopPropagation();
        toggleRadio($(this));
    });
    $(document).on("change", "form.custom select[data-customforms!=disabled]", function(event) {
        refreshCustomSelect($(this));
    });
    $(document).on("click", "form.custom label", function(event) {
        var $associatedElement = $("#" + $(this).attr("for") + "[data-customforms!=disabled]"), $customCheckbox, $customRadio;
        if ($associatedElement.length !== 0) {
            if ($associatedElement.attr("type") === "checkbox") {
                event.preventDefault();
                $customCheckbox = $(this).find("span.custom.checkbox");
                if ($customCheckbox.length == 0) {
                    $customCheckbox = $(this).next("span.custom.checkbox");
                }
                if ($customCheckbox.length == 0) {
                    $customCheckbox = $(this).prev("span.custom.checkbox");
                }
                toggleCheckbox($customCheckbox);
            } else if ($associatedElement.attr("type") === "radio") {
                event.preventDefault();
                $customRadio = $(this).find("span.custom.radio");
                if ($customRadio.length == 0) {
                    $customRadio = $(this).next("span.custom.radio");
                }
                if ($customRadio.length == 0) {
                    $customRadio = $(this).prev("span.custom.radio");
                }
                toggleRadio($customRadio);
            }
        }
    });
    $(document).on("click", "form.custom div.custom.dropdown a.current, form.custom div.custom.dropdown a.selector", function(event) {
        var $this = $(this), $dropdown = $this.closest("div.custom.dropdown"), $select = $dropdown.prev();
        event.preventDefault();
        $("div.dropdown").removeClass("open");
        if (false === $select.is(":disabled")) {
            $dropdown.toggleClass("open");
            if ($dropdown.hasClass("open")) {
                $(document).bind("click.customdropdown", function(event) {
                    $dropdown.removeClass("open");
                    $(document).unbind(".customdropdown");
                });
            } else {
                $(document).unbind(".customdropdown");
            }
            return false;
        }
    });
    $(document).on("click", "form.custom div.custom.dropdown li", function(event) {
        var $this = $(this), $customDropdown = $this.closest("div.custom.dropdown"), $select = $customDropdown.prev(), selectedIndex = 0;
        event.preventDefault();
        event.stopPropagation();
        $("div.dropdown").removeClass("open");
        $this.closest("ul").find("li").removeClass("selected");
        $this.addClass("selected");
        $customDropdown.removeClass("open").find("a.current").html($this.html());
        $this.closest("ul").find("li").each(function(index) {
            if ($this[0] == this) {
                selectedIndex = index;
            }
        });
        $select[0].selectedIndex = selectedIndex;
        $select.trigger("change");
    });
    $.fn.foundationCustomForms = $.foundation.customForms.appendCustomMarkup;
})(jQuery);

(function($, window, undefined) {
    "use strict";
    var defaults = {
        version: "2.0.3",
        tipLocation: "bottom",
        nubPosition: "auto",
        scrollSpeed: 300,
        timer: 0,
        startTimerOnClick: true,
        startOffset: 0,
        nextButton: true,
        tipAnimation: "fade",
        pauseAfter: [],
        tipAnimationFadeSpeed: 300,
        cookieMonster: false,
        cookieName: "joyride",
        cookieDomain: false,
        tipContainer: "body",
        postRideCallback: $.noop,
        postStepCallback: $.noop,
        template: {
            link: '<a href="#close" class="joyride-close-tip">X</a>',
            timer: '<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',
            tip: '<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',
            wrapper: '<div class="joyride-content-wrapper"></div>',
            button: '<a href="#" class="small button joyride-next-tip"></a>'
        }
    }, Modernizr = Modernizr || false, settings = {}, methods = {
        init: function(opts) {
            return this.each(function() {
                if ($.isEmptyObject(settings)) {
                    settings = $.extend(true, defaults, opts);
                    settings.document = window.document;
                    settings.$document = $(settings.document);
                    settings.$window = $(window);
                    settings.$content_el = $(this);
                    settings.body_offset = $(settings.tipContainer).position();
                    settings.$tip_content = $("> li", settings.$content_el);
                    settings.paused = false;
                    settings.attempts = 0;
                    settings.tipLocationPatterns = {
                        top: [ "bottom" ],
                        bottom: [],
                        left: [ "right", "top", "bottom" ],
                        right: [ "left", "top", "bottom" ]
                    };
                    methods.jquery_check();
                    if (!$.isFunction($.cookie)) {
                        settings.cookieMonster = false;
                    }
                    if (!settings.cookieMonster || !$.cookie(settings.cookieName)) {
                        settings.$tip_content.each(function(index) {
                            methods.create({
                                $li: $(this),
                                index: index
                            });
                        });
                        if (!settings.startTimerOnClick && settings.timer > 0) {
                            methods.show("init");
                            methods.startTimer();
                        } else {
                            methods.show("init");
                        }
                    }
                    settings.$document.on("click.joyride", ".joyride-next-tip, .joyride-modal-bg", function(e) {
                        e.preventDefault();
                        if (settings.$li.next().length < 1) {
                            methods.end();
                        } else if (settings.timer > 0) {
                            clearTimeout(settings.automate);
                            methods.hide();
                            methods.show();
                            methods.startTimer();
                        } else {
                            methods.hide();
                            methods.show();
                        }
                    });
                    settings.$document.on("click.joyride", ".joyride-close-tip", function(e) {
                        e.preventDefault();
                        methods.end();
                    });
                    settings.$window.bind("resize.joyride", function(e) {
                        if (methods.is_phone()) {
                            methods.pos_phone();
                        } else {
                            methods.pos_default();
                        }
                    });
                } else {
                    methods.restart();
                }
            });
        },
        resume: function() {
            methods.set_li();
            methods.show();
        },
        tip_template: function(opts) {
            var $blank, content;
            opts.tip_class = opts.tip_class || "";
            $blank = $(settings.template.tip).addClass(opts.tip_class);
            content = $.trim($(opts.li).html()) + methods.button_text(opts.button_text) + settings.template.link + methods.timer_instance(opts.index);
            $blank.append($(settings.template.wrapper));
            $blank.first().attr("data-index", opts.index);
            $(".joyride-content-wrapper", $blank).append(content);
            return $blank[0];
        },
        timer_instance: function(index) {
            var txt;
            if (index === 0 && settings.startTimerOnClick && settings.timer > 0 || settings.timer === 0) {
                txt = "";
            } else {
                txt = methods.outerHTML($(settings.template.timer)[0]);
            }
            return txt;
        },
        button_text: function(txt) {
            if (settings.nextButton) {
                txt = $.trim(txt) || "Next";
                txt = methods.outerHTML($(settings.template.button).append(txt)[0]);
            } else {
                txt = "";
            }
            return txt;
        },
        create: function(opts) {
            var buttonText = opts.$li.attr("data-button") || opts.$li.attr("data-text"), tipClass = opts.$li.attr("class"), $tip_content = $(methods.tip_template({
                tip_class: tipClass,
                index: opts.index,
                button_text: buttonText,
                li: opts.$li
            }));
            $(settings.tipContainer).append($tip_content);
        },
        show: function(init) {
            var opts = {}, ii, opts_arr = [], opts_len = 0, p, $timer = null;
            if (settings.$li === undefined || $.inArray(settings.$li.index(), settings.pauseAfter) === -1) {
                if (settings.paused) {
                    settings.paused = false;
                } else {
                    methods.set_li(init);
                }
                settings.attempts = 0;
                if (settings.$li.length && settings.$target.length > 0) {
                    opts_arr = (settings.$li.data("options") || ":").split(";");
                    opts_len = opts_arr.length;
                    for (ii = opts_len - 1; ii >= 0; ii--) {
                        p = opts_arr[ii].split(":");
                        if (p.length === 2) {
                            opts[$.trim(p[0])] = $.trim(p[1]);
                        }
                    }
                    settings.tipSettings = $.extend({}, settings, opts);
                    settings.tipSettings.tipLocationPattern = settings.tipLocationPatterns[settings.tipSettings.tipLocation];
                    if (!/body/i.test(settings.$target.selector)) {
                        methods.scroll_to();
                    }
                    if (methods.is_phone()) {
                        methods.pos_phone(true);
                    } else {
                        methods.pos_default(true);
                    }
                    $timer = $(".joyride-timer-indicator", settings.$next_tip);
                    if (/pop/i.test(settings.tipAnimation)) {
                        $timer.outerWidth(0);
                        if (settings.timer > 0) {
                            settings.$next_tip.show();
                            $timer.animate({
                                width: $(".joyride-timer-indicator-wrap", settings.$next_tip).outerWidth()
                            }, settings.timer);
                        } else {
                            settings.$next_tip.show();
                        }
                    } else if (/fade/i.test(settings.tipAnimation)) {
                        $timer.outerWidth(0);
                        if (settings.timer > 0) {
                            settings.$next_tip.fadeIn(settings.tipAnimationFadeSpeed);
                            settings.$next_tip.show();
                            $timer.animate({
                                width: $(".joyride-timer-indicator-wrap", settings.$next_tip).outerWidth()
                            }, settings.timer);
                        } else {
                            settings.$next_tip.fadeIn(settings.tipAnimationFadeSpeed);
                        }
                    }
                    settings.$current_tip = settings.$next_tip;
                } else if (settings.$li && settings.$target.length < 1) {
                    methods.show();
                } else {
                    methods.end();
                }
            } else {
                settings.paused = true;
            }
        },
        is_phone: function() {
            if (Modernizr) {
                return Modernizr.mq("only screen and (max-width: 767px)");
            }
            return settings.$window.width() < 767 ? true : false;
        },
        hide: function() {
            settings.postStepCallback(settings.$li.index(), settings.$current_tip);
            $(".joyride-modal-bg").hide();
            settings.$current_tip.hide();
        },
        set_li: function(init) {
            if (init) {
                settings.$li = settings.$tip_content.eq(settings.startOffset);
                methods.set_next_tip();
                settings.$current_tip = settings.$next_tip;
            } else {
                settings.$li = settings.$li.next();
                methods.set_next_tip();
            }
            methods.set_target();
        },
        set_next_tip: function() {
            settings.$next_tip = $(".joyride-tip-guide[data-index=" + settings.$li.index() + "]");
        },
        set_target: function() {
            var cl = settings.$li.attr("data-class"), id = settings.$li.attr("data-id"), $sel = function() {
                if (id) {
                    return $(settings.document.getElementById(id));
                } else if (cl) {
                    return $("." + cl).first();
                } else {
                    return $("body");
                }
            };
            settings.$target = $sel();
        },
        scroll_to: function() {
            var window_half, tipOffset;
            window_half = settings.$window.height() / 2;
            tipOffset = Math.ceil(settings.$target.offset().top - window_half + settings.$next_tip.outerHeight());
            $("html, body").stop().animate({
                scrollTop: tipOffset
            }, settings.scrollSpeed);
        },
        paused: function() {
            if ($.inArray(settings.$li.index() + 1, settings.pauseAfter) === -1) {
                return true;
            }
            return false;
        },
        destroy: function() {
            settings.$document.off(".joyride");
            $(window).off(".joyride");
            $(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(".joyride");
            $(".joyride-tip-guide, .joyride-modal-bg").remove();
            clearTimeout(settings.automate);
            settings = {};
        },
        restart: function() {
            methods.hide();
            settings.$li = undefined;
            methods.show("init");
        },
        pos_default: function(init) {
            var half_fold = Math.ceil(settings.$window.height() / 2), tip_position = settings.$next_tip.offset(), $nub = $(".joyride-nub", settings.$next_tip), nub_height = Math.ceil($nub.outerHeight() / 2), toggle = init || false;
            if (toggle) {
                settings.$next_tip.css("visibility", "hidden");
                settings.$next_tip.show();
            }
            if (!/body/i.test(settings.$target.selector)) {
                if (methods.bottom()) {
                    settings.$next_tip.css({
                        top: settings.$target.offset().top + nub_height + settings.$target.outerHeight(),
                        left: settings.$target.offset().left
                    });
                    methods.nub_position($nub, settings.tipSettings.nubPosition, "top");
                } else if (methods.top()) {
                    settings.$next_tip.css({
                        top: settings.$target.offset().top - settings.$next_tip.outerHeight() - nub_height,
                        left: settings.$target.offset().left
                    });
                    methods.nub_position($nub, settings.tipSettings.nubPosition, "bottom");
                } else if (methods.right()) {
                    settings.$next_tip.css({
                        top: settings.$target.offset().top,
                        left: settings.$target.outerWidth() + settings.$target.offset().left
                    });
                    methods.nub_position($nub, settings.tipSettings.nubPosition, "left");
                } else if (methods.left()) {
                    settings.$next_tip.css({
                        top: settings.$target.offset().top,
                        left: settings.$target.offset().left - settings.$next_tip.outerWidth() - nub_height
                    });
                    methods.nub_position($nub, settings.tipSettings.nubPosition, "right");
                }
                if (!methods.visible(methods.corners(settings.$next_tip)) && settings.attempts < settings.tipSettings.tipLocationPattern.length) {
                    $nub.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left");
                    settings.tipSettings.tipLocation = settings.tipSettings.tipLocationPattern[settings.attempts];
                    settings.attempts++;
                    methods.pos_default(true);
                }
            } else if (settings.$li.length) {
                methods.pos_modal($nub);
            }
            if (toggle) {
                settings.$next_tip.hide();
                settings.$next_tip.css("visibility", "visible");
            }
        },
        pos_phone: function(init) {
            var tip_height = settings.$next_tip.outerHeight(), tip_offset = settings.$next_tip.offset(), target_height = settings.$target.outerHeight(), $nub = $(".joyride-nub", settings.$next_tip), nub_height = Math.ceil($nub.outerHeight() / 2), toggle = init || false;
            $nub.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left");
            if (toggle) {
                settings.$next_tip.css("visibility", "hidden");
                settings.$next_tip.show();
            }
            if (!/body/i.test(settings.$target.selector)) {
                if (methods.top()) {
                    settings.$next_tip.offset({
                        top: settings.$target.offset().top - tip_height - nub_height
                    });
                    $nub.addClass("bottom");
                } else {
                    settings.$next_tip.offset({
                        top: settings.$target.offset().top + target_height + nub_height
                    });
                    $nub.addClass("top");
                }
            } else if (settings.$li.length) {
                methods.pos_modal($nub);
            }
            if (toggle) {
                settings.$next_tip.hide();
                settings.$next_tip.css("visibility", "visible");
            }
        },
        pos_modal: function($nub) {
            methods.center();
            $nub.hide();
            if ($(".joyride-modal-bg").length < 1) {
                $("body").append('<div class="joyride-modal-bg">').show();
            }
            if (/pop/i.test(settings.tipAnimation)) {
                $(".joyride-modal-bg").show();
            } else {
                $(".joyride-modal-bg").fadeIn(settings.tipAnimationFadeSpeed);
            }
        },
        center: function() {
            var $w = settings.$window;
            settings.$next_tip.css({
                top: ($w.height() - settings.$next_tip.outerHeight()) / 2 + $w.scrollTop(),
                left: ($w.width() - settings.$next_tip.outerWidth()) / 2 + $w.scrollLeft()
            });
            return true;
        },
        bottom: function() {
            return /bottom/i.test(settings.tipSettings.tipLocation);
        },
        top: function() {
            return /top/i.test(settings.tipSettings.tipLocation);
        },
        right: function() {
            return /right/i.test(settings.tipSettings.tipLocation);
        },
        left: function() {
            return /left/i.test(settings.tipSettings.tipLocation);
        },
        corners: function(el) {
            var w = settings.$window, right = w.width() + w.scrollLeft(), bottom = w.width() + w.scrollTop();
            return [ el.offset().top <= w.scrollTop(), right <= el.offset().left + el.outerWidth(), bottom <= el.offset().top + el.outerHeight(), w.scrollLeft() >= el.offset().left ];
        },
        visible: function(hidden_corners) {
            var i = hidden_corners.length;
            while (i--) {
                if (hidden_corners[i]) return false;
            }
            return true;
        },
        nub_position: function(nub, pos, def) {
            if (pos === "auto") {
                nub.addClass(def);
            } else {
                nub.addClass(pos);
            }
        },
        startTimer: function() {
            if (settings.$li.length) {
                settings.automate = setTimeout(function() {
                    methods.hide();
                    methods.show();
                    methods.startTimer();
                }, settings.timer);
            } else {
                clearTimeout(settings.automate);
            }
        },
        end: function() {
            if (settings.cookieMonster) {
                $.cookie(settings.cookieName, "ridden", {
                    expires: 365,
                    domain: settings.cookieDomain
                });
            }
            if (settings.timer > 0) {
                clearTimeout(settings.automate);
            }
            $(".joyride-modal-bg").hide();
            settings.$current_tip.hide();
            settings.postStepCallback(settings.$li.index(), settings.$current_tip);
            settings.postRideCallback(settings.$li.index(), settings.$current_tip);
        },
        jquery_check: function() {
            if (!$.isFunction($.fn.on)) {
                $.fn.on = function(types, sel, fn) {
                    return this.delegate(sel, types, fn);
                };
                $.fn.off = function(types, sel, fn) {
                    return this.undelegate(sel, types, fn);
                };
                return false;
            }
            return true;
        },
        outerHTML: function(el) {
            return el.outerHTML || new XMLSerializer().serializeToString(el);
        },
        version: function() {
            return settings.version;
        }
    };
    $.fn.joyride = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === "object" || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error("Method " + method + " does not exist on jQuery.joyride");
        }
    };
})(jQuery, this);

(function($, window, undefined) {
    "use strict";
    $.fn.foundationMagellan = function(options) {
        var $window = $(window), $document = $(document), $fixedMagellan = $("[data-magellan-expedition=fixed]"), defaults = {
            threshold: $fixedMagellan.length ? $fixedMagellan.outerHeight(true) : 0,
            activeClass: "active"
        }, options = $.extend({}, defaults, options);
        $document.on("magellan.arrival", "[data-magellan-arrival]", function(e) {
            var $destination = $(this), $expedition = $destination.closest("[data-magellan-expedition]"), activeClass = $expedition.attr("data-magellan-active-class") || options.activeClass;
            $destination.closest("[data-magellan-expedition]").find("[data-magellan-arrival]").not(this).removeClass(activeClass);
            $destination.addClass(activeClass);
        });
        var $expedition = $("[data-magellan-expedition]");
        $expedition.find("[data-magellan-arrival]:first").addClass($expedition.attr("data-magellan-active-class") || options.activeClass);
        $fixedMagellan.on("magellan.update-position", function() {
            var $el = $(this);
            $el.data("magellan-fixed-position", "");
            $el.data("magellan-top-offset", "");
        }).trigger("magellan.update-position");
        $window.on("resize.magellan", function() {
            $fixedMagellan.trigger("magellan.update-position");
        });
        $window.on("scroll.magellan", function() {
            var windowScrollTop = $window.scrollTop();
            $fixedMagellan.each(function() {
                var $expedition = $(this);
                if ($expedition.data("magellan-top-offset") === "") {
                    $expedition.data("magellan-top-offset", $expedition.offset().top);
                }
                var fixed_position = windowScrollTop + options.threshold > $expedition.data("magellan-top-offset");
                if ($expedition.data("magellan-fixed-position") != fixed_position) {
                    $expedition.data("magellan-fixed-position", fixed_position);
                    if (fixed_position) {
                        $expedition.css({
                            position: "fixed",
                            top: 0
                        });
                    } else {
                        $expedition.css({
                            position: "",
                            top: ""
                        });
                    }
                }
            });
        });
        var $lastDestination = $("[data-magellan-destination]:last");
        if ($lastDestination.length > 0) {
            $window.on("scroll.magellan", function(e) {
                var windowScrollTop = $window.scrollTop(), scrolltopPlusHeight = windowScrollTop + $window.outerHeight(true), lastDestinationTop = Math.ceil($lastDestination.offset().top);
                $("[data-magellan-destination]").each(function() {
                    var $destination = $(this), destination_name = $destination.attr("data-magellan-destination"), topOffset = $destination.offset().top - windowScrollTop;
                    if (topOffset <= options.threshold) {
                        $("[data-magellan-arrival=" + destination_name + "]").trigger("magellan.arrival");
                    }
                    if (scrolltopPlusHeight >= $document.outerHeight(true) && lastDestinationTop > windowScrollTop && lastDestinationTop < scrolltopPlusHeight) {
                        $("[data-magellan-arrival]:last").trigger("magellan.arrival");
                    }
                });
            });
        }
    };
})(jQuery, this);

(function($, window, undefined) {
    "use strict";
    $.fn.foundationMediaQueryViewer = function(options) {
        var settings = $.extend(options, {
            toggleKey: 77
        }), $doc = $(document);
        $doc.on("keyup.mediaQueryViewer", ":input", function(e) {
            if (e.which === settings.toggleKey) {
                e.stopPropagation();
            }
        });
        $doc.on("keyup.mediaQueryViewer", function(e) {
            var $mqViewer = $("#fqv");
            if (e.which === settings.toggleKey) {
                if ($mqViewer.length > 0) {
                    $mqViewer.remove();
                } else {
                    $("body").prepend('<div id="fqv" style="position:fixed;top:4px;left:4px;z-index:999;color:#fff;"><p style="font-size:12px;background:rgba(0,0,0,0.75);padding:5px;margin-bottom:1px;line-height:1.2;"><span class="left">Media:</span> <span style="font-weight:bold;" class="show-for-xlarge">Extra Large</span><span style="font-weight:bold;" class="show-for-large">Large</span><span style="font-weight:bold;" class="show-for-medium">Medium</span><span style="font-weight:bold;" class="show-for-small">Small</span><span style="font-weight:bold;" class="show-for-landscape">Landscape</span><span style="font-weight:bold;" class="show-for-portrait">Portrait</span><span style="font-weight:bold;" class="show-for-touch">Touch</span></p></div>');
                }
            }
        });
    };
})(jQuery, this);

(function($, window, undefined) {
    "use strict";
    $.fn.foundationNavigation = function(options) {
        var lockNavBar = false;
        if (Modernizr.touch || navigator.userAgent.match(/Windows Phone/i)) {
            $(document).on("click.fndtn touchstart.fndtn", ".nav-bar a.flyout-toggle", function(e) {
                e.preventDefault();
                var flyout = $(this).siblings(".flyout").first();
                if (lockNavBar === false) {
                    $(".nav-bar .flyout").not(flyout).slideUp(500);
                    flyout.slideToggle(500, function() {
                        lockNavBar = false;
                    });
                }
                lockNavBar = true;
            });
            $(".nav-bar>li.has-flyout", this).addClass("is-touch");
        } else {
            $(".nav-bar>li.has-flyout", this).on("mouseenter mouseleave", function(e) {
                if (e.type == "mouseenter") {
                    $(".nav-bar").find(".flyout").hide();
                    $(this).children(".flyout").show();
                }
                if (e.type == "mouseleave") {
                    var flyout = $(this).children(".flyout"), inputs = flyout.find("input"), hasFocus = function(inputs) {
                        var focus;
                        if (inputs.length > 0) {
                            inputs.each(function() {
                                if ($(this).is(":focus")) {
                                    focus = true;
                                }
                            });
                            return focus;
                        }
                        return false;
                    };
                    if (!hasFocus(inputs)) {
                        $(this).children(".flyout").hide();
                    }
                }
            });
        }
    };
})(jQuery, this);

(function($) {
    "use strict";
    $.fn.findFirstImage = function() {
        return this.first().find("img").andSelf().filter("img").first();
    };
    var ORBIT = {
        defaults: {
            animation: "horizontal-push",
            animationSpeed: 600,
            timer: true,
            advanceSpeed: 4e3,
            pauseOnHover: false,
            startClockOnMouseOut: false,
            startClockOnMouseOutAfter: 1e3,
            directionalNav: true,
            directionalNavRightText: "Right",
            directionalNavLeftText: "Left",
            captions: true,
            captionAnimation: "fade",
            captionAnimationSpeed: 600,
            resetTimerOnClick: false,
            bullets: false,
            bulletThumbs: false,
            bulletThumbLocation: "",
            bulletThumbsHideOnSmall: true,
            afterSlideChange: $.noop,
            afterLoadComplete: $.noop,
            fluid: true,
            centerBullets: true,
            singleCycle: false,
            slideNumber: false,
            stackOnSmall: false
        },
        activeSlide: 0,
        numberSlides: 0,
        orbitWidth: null,
        orbitHeight: null,
        locked: null,
        timerRunning: null,
        degrees: 0,
        wrapperHTML: '<div class="orbit-wrapper" />',
        timerHTML: '<div class="timer"><span class="mask"><span class="rotator"></span></span><span class="pause"></span></div>',
        captionHTML: '<div class="orbit-caption"></div>',
        directionalNavHTML: '<div class="slider-nav hide-for-small"><span class="right"></span><span class="left"></span></div>',
        bulletHTML: '<ul class="orbit-bullets"></ul>',
        slideNumberHTML: '<span class="orbit-slide-counter"></span>',
        init: function(element, options) {
            var $imageSlides, imagesLoadedCount = 0, self = this;
            this.clickTimer = $.proxy(this.clickTimer, this);
            this.addBullet = $.proxy(this.addBullet, this);
            this.resetAndUnlock = $.proxy(this.resetAndUnlock, this);
            this.stopClock = $.proxy(this.stopClock, this);
            this.startTimerAfterMouseLeave = $.proxy(this.startTimerAfterMouseLeave, this);
            this.clearClockMouseLeaveTimer = $.proxy(this.clearClockMouseLeaveTimer, this);
            this.rotateTimer = $.proxy(this.rotateTimer, this);
            this.options = $.extend({}, this.defaults, options);
            if (this.options.timer === "false") this.options.timer = false;
            if (this.options.captions === "false") this.options.captions = false;
            if (this.options.directionalNav === "false") this.options.directionalNav = false;
            this.$element = $(element);
            this.$wrapper = this.$element.wrap(this.wrapperHTML).parent();
            this.$slides = this.$element.children("img, a, div, figure, li");
            this.$element.on("movestart", function(e) {
                if (e.distX > e.distY && e.distX < -e.distY || e.distX < e.distY && e.distX > -e.distY) {
                    e.preventDefault();
                }
            });
            this.$element.bind("orbit.next", function() {
                self.shift("next");
            });
            this.$element.bind("orbit.prev", function() {
                self.shift("prev");
            });
            this.$element.bind("swipeleft", function() {
                $(this).trigger("orbit.next");
            });
            this.$element.bind("swiperight", function() {
                $(this).trigger("orbit.prev");
            });
            this.$element.bind("orbit.goto", function(event, index) {
                self.shift(index);
            });
            this.$element.bind("orbit.start", function(event, index) {
                self.startClock();
            });
            this.$element.bind("orbit.stop", function(event, index) {
                self.stopClock();
            });
            $imageSlides = this.$slides.filter("img");
            if ($imageSlides.length === 0) {
                this.loaded();
            } else {
                $imageSlides.bind("imageready", function() {
                    imagesLoadedCount += 1;
                    if (imagesLoadedCount === $imageSlides.length) {
                        self.loaded();
                    }
                });
            }
        },
        loaded: function() {
            this.$element.addClass("orbit").css({
                width: "1px",
                height: "1px"
            });
            if (this.options.stackOnSmall) {
                this.$element.addClass("orbit-stack-on-small");
            }
            this.$slides.addClass("orbit-slide").css({
                opacity: 0
            });
            this.setDimentionsFromLargestSlide();
            this.updateOptionsIfOnlyOneSlide();
            this.setupFirstSlide();
            this.notifySlideChange();
            if (this.options.timer) {
                this.setupTimer();
                this.startClock();
            }
            if (this.options.captions) {
                this.setupCaptions();
            }
            if (this.options.directionalNav) {
                this.setupDirectionalNav();
            }
            if (this.options.bullets) {
                this.setupBulletNav();
                this.setActiveBullet();
            }
            this.options.afterLoadComplete.call(this);
            Holder.run();
        },
        currentSlide: function() {
            return this.$slides.eq(this.activeSlide);
        },
        notifySlideChange: function() {
            if (this.options.slideNumber) {
                var txt = this.activeSlide + 1 + " of " + this.$slides.length;
                this.$element.trigger("orbit.change", {
                    slideIndex: this.activeSlide,
                    slideCount: this.$slides.length
                });
                if (this.$counter === undefined) {
                    var $counter = $(this.slideNumberHTML).html(txt);
                    this.$counter = $counter;
                    this.$wrapper.append(this.$counter);
                } else {
                    this.$counter.html(txt);
                }
            }
        },
        setDimentionsFromLargestSlide: function() {
            var self = this, $fluidPlaceholder;
            self.$element.add(self.$wrapper).width(this.$slides.first().outerWidth());
            self.$element.add(self.$wrapper).height(this.$slides.first().height());
            self.orbitWidth = this.$slides.first().outerWidth();
            self.orbitHeight = this.$slides.first().height();
            $fluidPlaceholder = this.$slides.first().findFirstImage().clone();
            this.$slides.each(function() {
                var slide = $(this), slideWidth = slide.outerWidth(), slideHeight = slide.height();
                if (slideWidth > self.$element.outerWidth()) {
                    self.$element.add(self.$wrapper).width(slideWidth);
                    self.orbitWidth = self.$element.outerWidth();
                }
                if (slideHeight > self.$element.height()) {
                    self.$element.add(self.$wrapper).height(slideHeight);
                    self.orbitHeight = self.$element.height();
                    $fluidPlaceholder = $(this).findFirstImage().clone();
                }
                self.numberSlides += 1;
            });
            if (this.options.fluid) {
                if (typeof this.options.fluid === "string") {
                    $fluidPlaceholder = $("<img>").attr("data-src", "holder.js/" + this.options.fluid);
                }
                self.$element.prepend($fluidPlaceholder);
                $fluidPlaceholder.addClass("fluid-placeholder");
                self.$element.add(self.$wrapper).css({
                    width: "inherit"
                });
                self.$element.add(self.$wrapper).css({
                    height: "inherit"
                });
                $(window).bind("resize", function() {
                    self.orbitWidth = self.$element.outerWidth();
                    self.orbitHeight = self.$element.height();
                });
            }
        },
        lock: function() {
            this.locked = true;
        },
        unlock: function() {
            this.locked = false;
        },
        updateOptionsIfOnlyOneSlide: function() {
            if (this.$slides.length === 1) {
                this.options.directionalNav = false;
                this.options.timer = false;
                this.options.bullets = false;
            }
        },
        setupFirstSlide: function() {
            var self = this;
            this.$slides.first().css({
                "z-index": 3,
                opacity: 1
            }).fadeIn(function() {
                self.$slides.css({
                    display: "block"
                });
            });
        },
        startClock: function() {
            var self = this;
            if (!this.options.timer) {
                return false;
            }
            if (this.$timer.is(":hidden")) {
                this.clock = setInterval(function() {
                    self.$element.trigger("orbit.next");
                }, this.options.advanceSpeed);
            } else {
                this.timerRunning = true;
                this.$pause.removeClass("active");
                this.clock = setInterval(this.rotateTimer, this.options.advanceSpeed / 180, false);
            }
        },
        rotateTimer: function(reset) {
            var degreeCSS = "rotate(" + this.degrees + "deg)";
            this.degrees += 2;
            this.$rotator.css({
                "-webkit-transform": degreeCSS,
                "-moz-transform": degreeCSS,
                "-o-transform": degreeCSS,
                "-ms-transform": degreeCSS
            });
            if (reset) {
                this.degrees = 0;
                this.$rotator.removeClass("move");
                this.$mask.removeClass("move");
            }
            if (this.degrees > 180) {
                this.$rotator.addClass("move");
                this.$mask.addClass("move");
            }
            if (this.degrees > 360) {
                this.$rotator.removeClass("move");
                this.$mask.removeClass("move");
                this.degrees = 0;
                this.$element.trigger("orbit.next");
            }
        },
        stopClock: function() {
            if (!this.options.timer) {
                return false;
            } else {
                this.timerRunning = false;
                clearInterval(this.clock);
                this.$pause.addClass("active");
            }
        },
        setupTimer: function() {
            this.$timer = $(this.timerHTML);
            this.$wrapper.append(this.$timer);
            this.$rotator = this.$timer.find(".rotator");
            this.$mask = this.$timer.find(".mask");
            this.$pause = this.$timer.find(".pause");
            this.$timer.click(this.clickTimer);
            if (this.options.startClockOnMouseOut) {
                this.$wrapper.mouseleave(this.startTimerAfterMouseLeave);
                this.$wrapper.mouseenter(this.clearClockMouseLeaveTimer);
            }
            if (this.options.pauseOnHover) {
                this.$wrapper.mouseenter(this.stopClock);
            }
        },
        startTimerAfterMouseLeave: function() {
            var self = this;
            this.outTimer = setTimeout(function() {
                if (!self.timerRunning) {
                    self.startClock();
                }
            }, this.options.startClockOnMouseOutAfter);
        },
        clearClockMouseLeaveTimer: function() {
            clearTimeout(this.outTimer);
        },
        clickTimer: function() {
            if (!this.timerRunning) {
                this.startClock();
            } else {
                this.stopClock();
            }
        },
        setupCaptions: function() {
            this.$caption = $(this.captionHTML);
            this.$wrapper.append(this.$caption);
            this.setCaption();
        },
        setCaption: function() {
            var captionLocation = this.currentSlide().attr("data-caption"), captionHTML;
            if (!this.options.captions) {
                return false;
            }
            if (captionLocation) {
                if ($.trim($(captionLocation).text()).length < 1) {
                    return false;
                }
                if (captionLocation.charAt(0) == "#") {
                    captionLocation = captionLocation.substring(1, captionLocation.length);
                }
                captionHTML = $("#" + captionLocation).html();
                this.$caption.attr("id", captionLocation).html(captionHTML);
                switch (this.options.captionAnimation) {
                  case "none":
                    this.$caption.show();
                    break;

                  case "fade":
                    this.$caption.fadeIn(this.options.captionAnimationSpeed);
                    break;

                  case "slideOpen":
                    this.$caption.slideDown(this.options.captionAnimationSpeed);
                    break;
                }
            } else {
                switch (this.options.captionAnimation) {
                  case "none":
                    this.$caption.hide();
                    break;

                  case "fade":
                    this.$caption.fadeOut(this.options.captionAnimationSpeed);
                    break;

                  case "slideOpen":
                    this.$caption.slideUp(this.options.captionAnimationSpeed);
                    break;
                }
            }
        },
        setupDirectionalNav: function() {
            var self = this, $directionalNav = $(this.directionalNavHTML);
            $directionalNav.find(".right").html(this.options.directionalNavRightText);
            $directionalNav.find(".left").html(this.options.directionalNavLeftText);
            this.$wrapper.append($directionalNav);
            this.$wrapper.find(".left").click(function() {
                self.stopClock();
                if (self.options.resetTimerOnClick) {
                    self.rotateTimer(true);
                    self.startClock();
                }
                self.$element.trigger("orbit.prev");
            });
            this.$wrapper.find(".right").click(function() {
                self.stopClock();
                if (self.options.resetTimerOnClick) {
                    self.rotateTimer(true);
                    self.startClock();
                }
                self.$element.trigger("orbit.next");
            });
        },
        setupBulletNav: function() {
            this.$bullets = $(this.bulletHTML);
            this.$wrapper.append(this.$bullets);
            this.$slides.each(this.addBullet);
            this.$element.addClass("with-bullets");
            if (this.options.centerBullets) this.$bullets.css("margin-left", -this.$bullets.outerWidth() / 2);
            if (this.options.bulletThumbsHideOnSmall) this.$bullets.addClass("hide-for-small");
        },
        addBullet: function(index, slide) {
            var position = index + 1, $li = $("<li>" + position + "</li>"), thumbName, self = this;
            if (this.options.bulletThumbs) {
                thumbName = $(slide).attr("data-thumb");
                if (thumbName) {
                    $li.addClass("has-thumb").css({
                        background: "url(" + this.options.bulletThumbLocation + thumbName + ") no-repeat"
                    });
                }
            }
            this.$bullets.append($li);
            $li.data("index", index);
            $li.click(function() {
                self.stopClock();
                if (self.options.resetTimerOnClick) {
                    self.rotateTimer(true);
                    self.startClock();
                }
                self.$element.trigger("orbit.goto", [ $li.data("index") ]);
            });
        },
        setActiveBullet: function() {
            if (!this.options.bullets) {
                return false;
            } else {
                this.$bullets.find("li").removeClass("active").eq(this.activeSlide).addClass("active");
            }
        },
        resetAndUnlock: function() {
            this.$slides.eq(this.prevActiveSlide).css({
                "z-index": 1
            });
            this.unlock();
            this.options.afterSlideChange.call(this, this.$slides.eq(this.prevActiveSlide), this.$slides.eq(this.activeSlide));
        },
        shift: function(direction) {
            var slideDirection = direction;
            this.prevActiveSlide = this.activeSlide;
            if (this.prevActiveSlide == slideDirection) {
                return false;
            }
            if (this.$slides.length == "1") {
                return false;
            }
            if (!this.locked) {
                this.lock();
                if (direction == "next") {
                    this.activeSlide++;
                    if (this.activeSlide == this.numberSlides) {
                        this.activeSlide = 0;
                    }
                } else if (direction == "prev") {
                    this.activeSlide--;
                    if (this.activeSlide < 0) {
                        this.activeSlide = this.numberSlides - 1;
                    }
                } else {
                    this.activeSlide = direction;
                    if (this.prevActiveSlide < this.activeSlide) {
                        slideDirection = "next";
                    } else if (this.prevActiveSlide > this.activeSlide) {
                        slideDirection = "prev";
                    }
                }
                this.setActiveBullet();
                this.notifySlideChange();
                this.$slides.eq(this.prevActiveSlide).css({
                    "z-index": 2
                });
                if (this.options.animation == "fade") {
                    this.$slides.eq(this.activeSlide).css({
                        opacity: 0,
                        "z-index": 3
                    }).animate({
                        opacity: 1
                    }, this.options.animationSpeed, this.resetAndUnlock);
                    this.$slides.eq(this.prevActiveSlide).animate({
                        opacity: 0
                    }, this.options.animationSpeed);
                }
                if (this.options.animation == "horizontal-slide") {
                    if (slideDirection == "next") {
                        this.$slides.eq(this.activeSlide).css({
                            left: this.orbitWidth,
                            "z-index": 3
                        }).css("opacity", 1).animate({
                            left: 0
                        }, this.options.animationSpeed, this.resetAndUnlock);
                    }
                    if (slideDirection == "prev") {
                        this.$slides.eq(this.activeSlide).css({
                            left: -this.orbitWidth,
                            "z-index": 3
                        }).css("opacity", 1).animate({
                            left: 0
                        }, this.options.animationSpeed, this.resetAndUnlock);
                    }
                    this.$slides.eq(this.prevActiveSlide).css("opacity", 0);
                }
                if (this.options.animation == "vertical-slide") {
                    if (slideDirection == "prev") {
                        this.$slides.eq(this.activeSlide).css({
                            top: this.orbitHeight,
                            "z-index": 3
                        }).css("opacity", 1).animate({
                            top: 0
                        }, this.options.animationSpeed, this.resetAndUnlock);
                        this.$slides.eq(this.prevActiveSlide).css("opacity", 0);
                    }
                    if (slideDirection == "next") {
                        this.$slides.eq(this.activeSlide).css({
                            top: -this.orbitHeight,
                            "z-index": 3
                        }).css("opacity", 1).animate({
                            top: 0
                        }, this.options.animationSpeed, this.resetAndUnlock);
                    }
                    this.$slides.eq(this.prevActiveSlide).css("opacity", 0);
                }
                if (this.options.animation == "horizontal-push") {
                    if (slideDirection == "next") {
                        this.$slides.eq(this.activeSlide).css({
                            left: this.orbitWidth,
                            "z-index": 3
                        }).animate({
                            left: 0,
                            opacity: 1
                        }, this.options.animationSpeed, this.resetAndUnlock);
                        this.$slides.eq(this.prevActiveSlide).animate({
                            left: -this.orbitWidth
                        }, this.options.animationSpeed, "", function() {
                            $(this).css({
                                opacity: 0
                            });
                        });
                    }
                    if (slideDirection == "prev") {
                        this.$slides.eq(this.activeSlide).css({
                            left: -this.orbitWidth,
                            "z-index": 3
                        }).animate({
                            left: 0,
                            opacity: 1
                        }, this.options.animationSpeed, this.resetAndUnlock);
                        this.$slides.eq(this.prevActiveSlide).animate({
                            left: this.orbitWidth
                        }, this.options.animationSpeed, "", function() {
                            $(this).css({
                                opacity: 0
                            });
                        });
                    }
                }
                if (this.options.animation == "vertical-push") {
                    if (slideDirection == "next") {
                        this.$slides.eq(this.activeSlide).css({
                            top: -this.orbitHeight,
                            "z-index": 3
                        }).css("opacity", 1).animate({
                            top: 0,
                            opacity: 1
                        }, this.options.animationSpeed, this.resetAndUnlock);
                        this.$slides.eq(this.prevActiveSlide).css("opacity", 0).animate({
                            top: this.orbitHeight
                        }, this.options.animationSpeed, "");
                    }
                    if (slideDirection == "prev") {
                        this.$slides.eq(this.activeSlide).css({
                            top: this.orbitHeight,
                            "z-index": 3
                        }).css("opacity", 1).animate({
                            top: 0
                        }, this.options.animationSpeed, this.resetAndUnlock);
                        this.$slides.eq(this.prevActiveSlide).css("opacity", 0).animate({
                            top: -this.orbitHeight
                        }, this.options.animationSpeed);
                    }
                }
                this.setCaption();
            }
            if (this.activeSlide === this.$slides.length - 1 && this.options.singleCycle) {
                this.stopClock();
            }
        }
    };
    $.fn.orbit = function(options) {
        return this.each(function() {
            var orbit = $.extend({}, ORBIT);
            orbit.init(this, options);
        });
    };
})(jQuery);

(function($) {
    var options = {};
    $.event.special.imageready = {
        setup: function(data, namespaces, eventHandle) {
            options = data || options;
        },
        add: function(handleObj) {
            var $this = $(this), src;
            if (this.nodeType === 1 && this.tagName.toLowerCase() === "img" && this.src !== "") {
                if (options.forceLoad) {
                    src = $this.attr("src");
                    $this.attr("src", "");
                    bindToLoad(this, handleObj.handler);
                    $this.attr("src", src);
                } else if (this.complete || this.readyState === 4) {
                    handleObj.handler.apply(this, arguments);
                } else {
                    bindToLoad(this, handleObj.handler);
                }
            }
        },
        teardown: function(namespaces) {
            $(this).unbind(".imageready");
        }
    };
    function bindToLoad(element, callback) {
        var $this = $(element);
        $this.bind("load.imageready", function() {
            callback.apply(element, arguments);
            $this.unbind("load.imageready");
        });
    }
})(jQuery);

var Holder = Holder || {};

(function(app, win) {
    var preempted = false, fallback = false, canvas = document.createElement("canvas");
    function contentLoaded(n, t) {
        var l = "complete", s = "readystatechange", u = !1, h = u, c = !0, i = n.document, a = i.documentElement, e = i.addEventListener ? "addEventListener" : "attachEvent", v = i.addEventListener ? "removeEventListener" : "detachEvent", f = i.addEventListener ? "" : "on", r = function(e) {
            (e.type != s || i.readyState == l) && ((e.type == "load" ? n : i)[v](f + e.type, r, u), 
            !h && (h = !0) && t.call(n, null));
        }, o = function() {
            try {
                a.doScroll("left");
            } catch (n) {
                setTimeout(o, 50);
                return;
            }
            r("poll");
        };
        if (i.readyState == l) t.call(n, "lazy"); else {
            if (i.createEventObject && a.doScroll) {
                try {
                    c = !n.frameElement;
                } catch (y) {}
                c && o();
            }
            i[e](f + "DOMContentLoaded", r, u), i[e](f + s, r, u), n[e](f + "load", r, u);
        }
    }
    function selector(a) {
        a = a.match(/^(\W)?(.*)/);
        var b = document["getElement" + (a[1] ? a[1] == "#" ? "ById" : "sByClassName" : "sByTagName")](a[2]);
        var ret = [];
        b != null && (b.length ? ret = b : b.length == 0 ? ret = b : ret = [ b ]);
        return ret;
    }
    function extend(a, b) {
        var c = {};
        for (var d in a) c[d] = a[d];
        for (var e in b) c[e] = b[e];
        return c;
    }
    function draw(ctx, dimensions, template) {
        var dimension_arr = [ dimensions.height, dimensions.width ].sort();
        var maxFactor = Math.round(dimension_arr[1] / 16), minFactor = Math.round(dimension_arr[0] / 16);
        var text_height = Math.max(template.size, maxFactor);
        canvas.width = dimensions.width;
        canvas.height = dimensions.height;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = template.background;
        ctx.fillRect(0, 0, dimensions.width, dimensions.height);
        ctx.fillStyle = template.foreground;
        ctx.font = "bold " + text_height + "px sans-serif";
        var text = template.text ? template.text : dimensions.width + "x" + dimensions.height;
        if (Math.round(ctx.measureText(text).width) / dimensions.width > 1) {
            text_height = Math.max(minFactor, template.size);
        }
        ctx.font = "bold " + text_height + "px sans-serif";
        ctx.fillText(text, dimensions.width / 2, dimensions.height / 2, dimensions.width);
        return canvas.toDataURL("image/png");
    }
    if (!canvas.getContext) {
        fallback = true;
    } else {
        if (canvas.toDataURL("image/png").indexOf("data:image/png") < 0) {
            fallback = true;
        } else {
            var ctx = canvas.getContext("2d");
        }
    }
    var settings = {
        domain: "holder.js",
        images: "img",
        themes: {
            gray: {
                background: "#eee",
                foreground: "#aaa",
                size: 12
            },
            social: {
                background: "#3a5a97",
                foreground: "#fff",
                size: 12
            },
            industrial: {
                background: "#434A52",
                foreground: "#C2F200",
                size: 12
            }
        }
    };
    app.flags = {
        dimensions: {
            regex: /([0-9]+)x([0-9]+)/,
            output: function(val) {
                var exec = this.regex.exec(val);
                return {
                    width: +exec[1],
                    height: +exec[2]
                };
            }
        },
        colors: {
            regex: /#([0-9a-f]{3,})\:#([0-9a-f]{3,})/i,
            output: function(val) {
                var exec = this.regex.exec(val);
                return {
                    size: settings.themes.gray.size,
                    foreground: "#" + exec[2],
                    background: "#" + exec[1]
                };
            }
        },
        text: {
            regex: /text\:(.*)/,
            output: function(val) {
                return this.regex.exec(val)[1];
            }
        }
    };
    for (var flag in app.flags) {
        app.flags[flag].match = function(val) {
            return val.match(this.regex);
        };
    }
    app.add_theme = function(name, theme) {
        name != null && theme != null && (settings.themes[name] = theme);
        return app;
    };
    app.add_image = function(src, el) {
        var node = selector(el);
        if (node.length) {
            for (var i = 0, l = node.length; i < l; i++) {
                var img = document.createElement("img");
                img.setAttribute("data-src", src);
                node[i].appendChild(img);
            }
        }
        return app;
    };
    app.run = function(o) {
        var options = extend(settings, o), images = selector(options.images), preempted = true;
        for (var l = images.length, i = 0; i < l; i++) {
            var theme = settings.themes.gray;
            var src = images[i].getAttribute("data-src") || images[i].getAttribute("src");
            if (src && !!~src.indexOf(options.domain)) {
                var render = false, dimensions = null, text = null;
                var flags = src.substr(src.indexOf(options.domain) + options.domain.length + 1).split("/");
                for (sl = flags.length, j = 0; j < sl; j++) {
                    if (app.flags.dimensions.match(flags[j])) {
                        render = true;
                        dimensions = app.flags.dimensions.output(flags[j]);
                    } else if (app.flags.colors.match(flags[j])) {
                        theme = app.flags.colors.output(flags[j]);
                    } else if (options.themes[flags[j]]) {
                        theme = options.themes[flags[j]];
                    } else if (app.flags.text.match(flags[j])) {
                        text = app.flags.text.output(flags[j]);
                    }
                }
                if (render) {
                    images[i].setAttribute("data-src", src);
                    var dimensions_caption = dimensions.width + "x" + dimensions.height;
                    images[i].setAttribute("alt", text ? text : theme.text ? theme.text + " [" + dimensions_caption + "]" : dimensions_caption);
                    images[i].style.backgroundColor = theme.background;
                    var theme = text ? extend(theme, {
                        text: text
                    }) : theme;
                    if (!fallback) {
                        images[i].setAttribute("src", draw(ctx, dimensions, theme));
                    }
                }
            }
        }
        return app;
    };
    contentLoaded(win, function() {
        preempted || app.run();
    });
})(Holder, window);

(function($) {
    "use strict";
    var modalQueued = false;
    $(document).on("click", "a[data-reveal-id]", function(event) {
        event.preventDefault();
        var modalLocation = $(this).attr("data-reveal-id");
        $("#" + modalLocation).reveal($(this).data());
    });
    $.fn.reveal = function(options) {
        var $doc = $(document), defaults = {
            animation: "fadeAndPop",
            animationSpeed: 300,
            closeOnBackgroundClick: true,
            dismissModalClass: "close-reveal-modal",
            open: $.noop,
            opened: $.noop,
            close: $.noop,
            closed: $.noop
        };
        options = $.extend({}, defaults, options);
        return this.not(".reveal-modal.open").each(function() {
            var modal = $(this), topMeasure = parseInt(modal.css("top"), 10), topOffset = modal.height() + topMeasure, locked = false, modalBg = $(".reveal-modal-bg"), cssOpts = {
                open: {
                    top: 0,
                    opacity: 0,
                    visibility: "visible",
                    display: "block"
                },
                close: {
                    top: topMeasure,
                    opacity: 1,
                    visibility: "hidden",
                    display: "none"
                }
            }, $closeButton;
            if (modalBg.length === 0) {
                modalBg = $("<div />", {
                    "class": "reveal-modal-bg"
                }).insertAfter(modal);
                modalBg.fadeTo("fast", .8);
            }
            function unlockModal() {
                locked = false;
            }
            function lockModal() {
                locked = true;
            }
            function closeOpenModals() {
                var $openModals = $(".reveal-modal.open");
                if ($openModals.length === 1) {
                    modalQueued = true;
                    $openModals.trigger("reveal:close");
                }
            }
            function openAnimation() {
                if (!locked) {
                    lockModal();
                    closeOpenModals();
                    modal.addClass("open");
                    if (options.animation === "fadeAndPop") {
                        cssOpts.open.top = $doc.scrollTop() - topOffset;
                        cssOpts.open.opacity = 0;
                        modal.css(cssOpts.open);
                        modalBg.fadeIn(options.animationSpeed / 2);
                        modal.delay(options.animationSpeed / 2).animate({
                            top: $doc.scrollTop() + topMeasure + "px",
                            opacity: 1
                        }, options.animationSpeed, function() {
                            modal.trigger("reveal:opened");
                        });
                    }
                    if (options.animation === "fade") {
                        cssOpts.open.top = $doc.scrollTop() + topMeasure;
                        cssOpts.open.opacity = 0;
                        modal.css(cssOpts.open);
                        modalBg.fadeIn(options.animationSpeed / 2);
                        modal.delay(options.animationSpeed / 2).animate({
                            opacity: 1
                        }, options.animationSpeed, function() {
                            modal.trigger("reveal:opened");
                        });
                    }
                    if (options.animation === "none") {
                        cssOpts.open.top = $doc.scrollTop() + topMeasure;
                        cssOpts.open.opacity = 1;
                        modal.css(cssOpts.open);
                        modalBg.css({
                            display: "block"
                        });
                        modal.trigger("reveal:opened");
                    }
                }
            }
            function openVideos() {
                var video = modal.find(".flex-video"), iframe = video.find("iframe");
                if (iframe.length > 0) {
                    iframe.attr("src", iframe.data("src"));
                    video.fadeIn(100);
                }
            }
            modal.bind("reveal:open.reveal", openAnimation);
            modal.bind("reveal:open.reveal", openVideos);
            function closeAnimation() {
                if (!locked) {
                    lockModal();
                    modal.removeClass("open");
                    if (options.animation === "fadeAndPop") {
                        modal.animate({
                            top: $doc.scrollTop() - topOffset + "px",
                            opacity: 0
                        }, options.animationSpeed / 2, function() {
                            modal.css(cssOpts.close);
                        });
                        if (!modalQueued) {
                            modalBg.delay(options.animationSpeed).fadeOut(options.animationSpeed, function() {
                                modal.trigger("reveal:closed");
                            });
                        } else {
                            modal.trigger("reveal:closed");
                        }
                    }
                    if (options.animation === "fade") {
                        modal.animate({
                            opacity: 0
                        }, options.animationSpeed, function() {
                            modal.css(cssOpts.close);
                        });
                        if (!modalQueued) {
                            modalBg.delay(options.animationSpeed).fadeOut(options.animationSpeed, function() {
                                modal.trigger("reveal:closed");
                            });
                        } else {
                            modal.trigger("reveal:closed");
                        }
                    }
                    if (options.animation === "none") {
                        modal.css(cssOpts.close);
                        if (!modalQueued) {
                            modalBg.css({
                                display: "none"
                            });
                        }
                        modal.trigger("reveal:closed");
                    }
                    modalQueued = false;
                }
            }
            function destroy() {
                modal.unbind(".reveal");
                modalBg.unbind(".reveal");
                $closeButton.unbind(".reveal");
                $("body").unbind(".reveal");
            }
            function closeVideos() {
                var video = modal.find(".flex-video"), iframe = video.find("iframe");
                if (iframe.length > 0) {
                    iframe.data("src", iframe.attr("src"));
                    iframe.attr("src", "");
                    video.fadeOut(100);
                }
            }
            modal.bind("reveal:close.reveal", closeAnimation);
            modal.bind("reveal:closed.reveal", closeVideos);
            modal.bind("reveal:opened.reveal reveal:closed.reveal", unlockModal);
            modal.bind("reveal:closed.reveal", destroy);
            modal.bind("reveal:open.reveal", options.open);
            modal.bind("reveal:opened.reveal", options.opened);
            modal.bind("reveal:close.reveal", options.close);
            modal.bind("reveal:closed.reveal", options.closed);
            modal.trigger("reveal:open");
            $closeButton = $("." + options.dismissModalClass).bind("click.reveal", function() {
                modal.trigger("reveal:close");
            });
            if (options.closeOnBackgroundClick) {
                modalBg.css({
                    cursor: "pointer"
                });
                modalBg.bind("click.reveal", function() {
                    modal.trigger("reveal:close");
                });
            }
            $("body").bind("keyup.reveal", function(event) {
                if (event.which === 27) {
                    modal.trigger("reveal:close");
                }
            });
        });
    };
})(jQuery);

(function($, window, document, undefined) {
    "use strict";
    var settings = {
        callback: $.noop,
        deep_linking: true,
        init: false
    }, methods = {
        init: function(options) {
            settings = $.extend({}, settings, options);
            return this.each(function() {
                if (!settings.init) methods.events();
                if (settings.deep_linking) methods.from_hash();
            });
        },
        events: function() {
            $(document).on("click.fndtn", ".tabs a", function(e) {
                methods.set_tab($(this).parent("dd, li"), e);
            });
            settings.init = true;
        },
        set_tab: function($tab, e) {
            var $activeTab = $tab.closest("dl, ul").find(".active"), target = $tab.children("a").attr("href"), hasHash = /^#/.test(target), $content = $(target + "Tab");
            if (hasHash && $content.length > 0) {
                if (e && !settings.deep_linking) e.preventDefault();
                $content.closest(".tabs-content").children("li").removeClass("active").hide();
                $content.css("display", "block").addClass("active");
            }
            $activeTab.removeClass("active");
            $tab.addClass("active");
            settings.callback();
        },
        from_hash: function() {
            var hash = window.location.hash, $tab = $('a[href="' + hash + '"]');
            $tab.trigger("click.fndtn");
        }
    };
    $.fn.foundationTabs = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === "object" || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error("Method " + method + " does not exist on jQuery.foundationTabs");
        }
    };
})(jQuery, this, this.document);

(function($, window, undefined) {
    "use strict";
    var settings = {
        bodyHeight: 0,
        selector: ".has-tip",
        additionalInheritableClasses: [],
        tooltipClass: ".tooltip",
        tipTemplate: function(selector, content) {
            return '<span data-selector="' + selector + '" class="' + settings.tooltipClass.substring(1) + '">' + content + '<span class="nub"></span></span>';
        }
    }, methods = {
        init: function(options) {
            settings = $.extend(settings, options);
            settings.selector = settings.targetClass ? settings.targetClass : settings.selector;
            return this.each(function() {
                var $body = $("body");
                if (Modernizr.touch) {
                    $body.on("click.tooltip touchstart.tooltip touchend.tooltip", settings.selector, function(e) {
                        e.preventDefault();
                        $(settings.tooltipClass).hide();
                        methods.showOrCreateTip($(this));
                    });
                    $body.on("click.tooltip touchstart.tooltip touchend.tooltip", settings.tooltipClass, function(e) {
                        e.preventDefault();
                        $(this).fadeOut(150);
                    });
                } else {
                    $body.on("mouseenter.tooltip mouseleave.tooltip", settings.selector, function(e) {
                        var $this = $(this);
                        if (e.type === "mouseenter") {
                            methods.showOrCreateTip($this);
                        } else if (e.type === "mouseleave") {
                            methods.hide($this);
                        }
                    });
                }
                $(this).data("tooltips", true);
            });
        },
        showOrCreateTip: function($target, content) {
            var $tip = methods.getTip($target);
            if ($tip && $tip.length > 0) {
                methods.show($target);
            } else {
                methods.create($target, content);
            }
        },
        getTip: function($target) {
            var selector = methods.selector($target), tip = null;
            if (selector) {
                tip = $("span[data-selector=" + selector + "]" + settings.tooltipClass);
            }
            return tip.length > 0 ? tip : false;
        },
        selector: function($target) {
            var id = $target.attr("id"), dataSelector = $target.data("selector");
            if (id === undefined && dataSelector === undefined) {
                dataSelector = "tooltip" + Math.random().toString(36).substring(7);
                $target.attr("data-selector", dataSelector);
            }
            return id ? id : dataSelector;
        },
        create: function($target, content) {
            var $tip = $(settings.tipTemplate(methods.selector($target), $("<div>").html(content ? content : $target.attr("title")).html())), classes = methods.inheritable_classes($target);
            $tip.addClass(classes).appendTo("body");
            if (Modernizr.touch) {
                $tip.append('<span class="tap-to-close">tap to close </span>');
            }
            $target.removeAttr("title");
            methods.show($target);
        },
        reposition: function(target, tip, classes) {
            var width, nub, nubHeight, nubWidth, column, objPos;
            tip.css("visibility", "hidden").show();
            width = target.data("width");
            nub = tip.children(".nub");
            nubHeight = nub.outerHeight();
            nubWidth = nub.outerWidth();
            objPos = function(obj, top, right, bottom, left, width) {
                return obj.css({
                    top: top,
                    bottom: bottom,
                    left: left,
                    right: right,
                    "max-width": width ? width : "auto"
                }).end();
            };
            objPos(tip, target.offset().top + target.outerHeight() + 10, "auto", "auto", target.offset().left, width);
            objPos(nub, -nubHeight, "auto", "auto", 10);
            if ($(window).width() < 767) {
                if (target.data("mobile-width")) {
                    tip.width(target.data("mobile-width")).css("left", 15).addClass("tip-override");
                } else {
                    column = target.closest(".columns");
                    if (column.length < 0) {
                        column = $("body");
                    }
                    if (column.outerWidth()) {
                        tip.width(column.outerWidth() - 25).css("left", 15).addClass("tip-override");
                    } else {
                        var tmp_width = Math.ceil($(window).width() * .9);
                        tip.width(tmp_width).css("left", 15).addClass("tip-override");
                    }
                }
                objPos(nub, -nubHeight, "auto", "auto", target.offset().left);
            } else {
                if (classes && classes.indexOf("tip-top") > -1) {
                    objPos(tip, target.offset().top - tip.outerHeight() - nubHeight, "auto", "auto", target.offset().left, width).removeClass("tip-override");
                    objPos(nub, "auto", "auto", -nubHeight, "auto");
                } else if (classes && classes.indexOf("tip-left") > -1) {
                    objPos(tip, target.offset().top + target.outerHeight() / 2 - nubHeight, "auto", "auto", target.offset().left - tip.outerWidth() - 10, width).removeClass("tip-override");
                    objPos(nub, tip.outerHeight() / 2 - nubHeight / 2, -nubHeight, "auto", "auto");
                } else if (classes && classes.indexOf("tip-right") > -1) {
                    objPos(tip, target.offset().top + target.outerHeight() / 2 - nubHeight, "auto", "auto", target.offset().left + target.outerWidth() + 10, width).removeClass("tip-override");
                    objPos(nub, tip.outerHeight() / 2 - nubHeight / 2, "auto", "auto", -nubHeight);
                } else if (classes && classes.indexOf("tip-centered-top") > -1) {
                    objPos(tip, target.offset().top - tip.outerHeight() - nubHeight, "auto", "auto", target.offset().left + (target.outerWidth() - tip.outerWidth()) / 2, width).removeClass("tip-override");
                    objPos(nub, "auto", tip.outerWidth() / 2 - nubHeight / 2, -nubHeight, "auto");
                } else if (classes && classes.indexOf("tip-centered-bottom") > -1) {
                    objPos(tip, target.offset().top + target.outerHeight() + 10, "auto", "auto", target.offset().left + (target.outerWidth() - tip.outerWidth()) / 2, width).removeClass("tip-override");
                    objPos(nub, -nubHeight, tip.outerWidth() / 2 - nubHeight / 2, "auto", "auto");
                }
            }
            tip.css("visibility", "visible").hide();
        },
        inheritable_classes: function(target) {
            var inheritables = [ "tip-top", "tip-left", "tip-bottom", "tip-right", "tip-centered-top", "tip-centered-bottom", "noradius" ].concat(settings.additionalInheritableClasses), classes = target.attr("class"), filtered = classes ? $.map(classes.split(" "), function(el, i) {
                if ($.inArray(el, inheritables) !== -1) {
                    return el;
                }
            }).join(" ") : "";
            return $.trim(filtered);
        },
        show: function($target) {
            var $tip = methods.getTip($target);
            methods.reposition($target, $tip, $target.attr("class"));
            $tip.fadeIn(150);
        },
        hide: function($target) {
            var $tip = methods.getTip($target);
            $tip.fadeOut(150);
        },
        reload: function() {
            var $self = $(this);
            return $self.data("tooltips") ? $self.foundationTooltips("destroy").foundationTooltips("init") : $self.foundationTooltips("init");
        },
        destroy: function() {
            return this.each(function() {
                $(window).off(".tooltip");
                $(settings.selector).off(".tooltip");
                $(settings.tooltipClass).each(function(i) {
                    $($(settings.selector).get(i)).attr("title", $(this).text());
                }).remove();
            });
        }
    };
    $.fn.foundationTooltips = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === "object" || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error("Method " + method + " does not exist on jQuery.foundationTooltips");
        }
    };
})(jQuery, this);

(function($, window, undefined) {
    "use strict";
    var settings = {
        index: 0,
        initialized: false
    }, methods = {
        init: function(options) {
            return this.each(function() {
                settings = $.extend(settings, options);
                settings.$w = $(window), settings.$topbar = $("nav.top-bar"), settings.$section = settings.$topbar.find("section"), 
                settings.$titlebar = settings.$topbar.children("ul:first");
                var breakpoint = $("<div class='top-bar-js-breakpoint'/>").appendTo("body");
                settings.breakPoint = breakpoint.width();
                breakpoint.remove();
                if (!settings.initialized) {
                    methods.assemble();
                    settings.initialized = true;
                }
                if (!settings.height) {
                    methods.largestUL();
                }
                if (settings.$topbar.parent().hasClass("fixed")) {
                    $("body").css("padding-top", settings.$topbar.outerHeight());
                }
                $(".top-bar .toggle-topbar").off("click.fndtn").on("click.fndtn", function(e) {
                    e.preventDefault();
                    if (methods.breakpoint()) {
                        settings.$topbar.toggleClass("expanded");
                        settings.$topbar.css("min-height", "");
                    }
                    if (!settings.$topbar.hasClass("expanded")) {
                        settings.$section.css({
                            left: "0%"
                        });
                        settings.$section.find(">.name").css({
                            left: "100%"
                        });
                        settings.$section.find("li.moved").removeClass("moved");
                        settings.index = 0;
                    }
                });
                $(".top-bar .has-dropdown>a").off("click.fndtn").on("click.fndtn", function(e) {
                    if (Modernizr.touch || methods.breakpoint()) e.preventDefault();
                    if (methods.breakpoint()) {
                        var $this = $(this), $selectedLi = $this.closest("li");
                        settings.index += 1;
                        $selectedLi.addClass("moved");
                        settings.$section.css({
                            left: -(100 * settings.index) + "%"
                        });
                        settings.$section.find(">.name").css({
                            left: 100 * settings.index + "%"
                        });
                        $this.siblings("ul").height(settings.height + settings.$titlebar.outerHeight(true));
                        settings.$topbar.css("min-height", settings.height + settings.$titlebar.outerHeight(true) * 2);
                    }
                });
                $(window).on("resize.fndtn.topbar", function() {
                    if (!methods.breakpoint()) {
                        settings.$topbar.css("min-height", "");
                    }
                });
                $(".top-bar .has-dropdown .back").off("click.fndtn").on("click.fndtn", function(e) {
                    e.preventDefault();
                    var $this = $(this), $movedLi = $this.closest("li.moved"), $previousLevelUl = $movedLi.parent();
                    settings.index -= 1;
                    settings.$section.css({
                        left: -(100 * settings.index) + "%"
                    });
                    settings.$section.find(">.name").css({
                        left: 100 * settings.index + "%"
                    });
                    if (settings.index === 0) {
                        settings.$topbar.css("min-height", 0);
                    }
                    setTimeout(function() {
                        $movedLi.removeClass("moved");
                    }, 300);
                });
            });
        },
        breakpoint: function() {
            return settings.$w.width() < settings.breakPoint;
        },
        assemble: function() {
            settings.$section.detach();
            settings.$section.find(".has-dropdown>a").each(function() {
                var $link = $(this), $dropdown = $link.siblings(".dropdown"), $titleLi = $('<li class="title back js-generated"><h5><a href="#"></a></h5></li>');
                $titleLi.find("h5>a").html($link.html());
                $dropdown.prepend($titleLi);
            });
            settings.$section.appendTo(settings.$topbar);
        },
        largestUL: function() {
            var uls = settings.$topbar.find("section ul ul"), largest = uls.first(), total = 0;
            uls.each(function() {
                if ($(this).children("li").length > largest.children("li").length) {
                    largest = $(this);
                }
            });
            largest.children("li").each(function() {
                total += $(this).outerHeight(true);
            });
            settings.height = total;
        }
    };
    $.fn.foundationTopBar = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === "object" || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error("Method " + method + " does not exist on jQuery.foundationTopBar");
        }
    };
    if ($(".sticky").length > 0) {
        var distance = $(".sticky").length ? $(".sticky").offset().top : 0, $window = $(window);
        $window.scroll(function() {
            if ($window.scrollTop() >= distance) {
                $(".sticky").addClass("fixed");
            } else if ($window.scrollTop() < distance) {
                $(".sticky").removeClass("fixed");
            }
        });
    }
})(jQuery, this);

(function(window, document, $) {
    var isInputSupported = "placeholder" in document.createElement("input"), isTextareaSupported = "placeholder" in document.createElement("textarea"), prototype = $.fn, valHooks = $.valHooks, hooks, placeholder;
    if (isInputSupported && isTextareaSupported) {
        placeholder = prototype.placeholder = function() {
            return this;
        };
        placeholder.input = placeholder.textarea = true;
    } else {
        placeholder = prototype.placeholder = function() {
            var $this = this;
            $this.filter((isInputSupported ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
                "focus.placeholder": clearPlaceholder,
                "blur.placeholder": setPlaceholder
            }).data("placeholder-enabled", true).trigger("blur.placeholder");
            return $this;
        };
        placeholder.input = isInputSupported;
        placeholder.textarea = isTextareaSupported;
        hooks = {
            get: function(element) {
                var $element = $(element);
                return $element.data("placeholder-enabled") && $element.hasClass("placeholder") ? "" : element.value;
            },
            set: function(element, value) {
                var $element = $(element);
                if (!$element.data("placeholder-enabled")) {
                    return element.value = value;
                }
                if (value == "") {
                    element.value = value;
                    if (element != document.activeElement) {
                        setPlaceholder.call(element);
                    }
                } else if ($element.hasClass("placeholder")) {
                    clearPlaceholder.call(element, true, value) || (element.value = value);
                } else {
                    element.value = value;
                }
                return $element;
            }
        };
        isInputSupported || (valHooks.input = hooks);
        isTextareaSupported || (valHooks.textarea = hooks);
        $(function() {
            $(document).delegate("form", "submit.placeholder", function() {
                var $inputs = $(".placeholder", this).each(clearPlaceholder);
                setTimeout(function() {
                    $inputs.each(setPlaceholder);
                }, 10);
            });
        });
        $(window).bind("beforeunload.placeholder", function() {
            $(".placeholder").each(function() {
                this.value = "";
            });
        });
    }
    function args(elem) {
        var newAttrs = {}, rinlinejQuery = /^jQuery\d+$/;
        $.each(elem.attributes, function(i, attr) {
            if (attr.specified && !rinlinejQuery.test(attr.name)) {
                newAttrs[attr.name] = attr.value;
            }
        });
        return newAttrs;
    }
    function clearPlaceholder(event, value) {
        var input = this, $input = $(input);
        if (input.value == $input.attr("placeholder") && $input.hasClass("placeholder")) {
            if ($input.data("placeholder-password")) {
                $input = $input.hide().next().show().attr("id", $input.removeAttr("id").data("placeholder-id"));
                if (event === true) {
                    return $input[0].value = value;
                }
                $input.focus();
            } else {
                input.value = "";
                $input.removeClass("placeholder");
                input == document.activeElement && input.select();
            }
        }
    }
    function setPlaceholder() {
        var $replacement, input = this, $input = $(input), $origInput = $input, id = this.id;
        if (input.value == "") {
            if (input.type == "password") {
                if (!$input.data("placeholder-textinput")) {
                    try {
                        $replacement = $input.clone().attr({
                            type: "text"
                        });
                    } catch (e) {
                        $replacement = $("<input>").attr($.extend(args(this), {
                            type: "text"
                        }));
                    }
                    $replacement.removeAttr("name").data({
                        "placeholder-password": true,
                        "placeholder-id": id
                    }).bind("focus.placeholder", clearPlaceholder);
                    $input.data({
                        "placeholder-textinput": $replacement,
                        "placeholder-id": id
                    }).before($replacement);
                }
                $input = $input.removeAttr("id").hide().prev().attr("id", id).show();
            }
            $input.addClass("placeholder");
            $input[0].value = $input.attr("placeholder");
        } else {
            $input.removeClass("placeholder");
        }
    }
})(this, document, jQuery);

(function(window, document, undefined) {
    "use strict";
    var lowercase = function(string) {
        return isString(string) ? string.toLowerCase() : string;
    };
    var uppercase = function(string) {
        return isString(string) ? string.toUpperCase() : string;
    };
    var manualLowercase = function(s) {
        return isString(s) ? s.replace(/[A-Z]/g, function(ch) {
            return fromCharCode(ch.charCodeAt(0) | 32);
        }) : s;
    };
    var manualUppercase = function(s) {
        return isString(s) ? s.replace(/[a-z]/g, function(ch) {
            return fromCharCode(ch.charCodeAt(0) & ~32);
        }) : s;
    };
    if ("i" !== "I".toLowerCase()) {
        lowercase = manualLowercase;
        uppercase = manualUppercase;
    }
    function fromCharCode(code) {
        return String.fromCharCode(code);
    }
    var Error = window.Error, msie = int((/msie (\d+)/.exec(lowercase(navigator.userAgent)) || [])[1]), jqLite, jQuery, slice = [].slice, push = [].push, toString = Object.prototype.toString, angular = window.angular || (window.angular = {}), angularModule, nodeName_, uid = [ "0", "0", "0" ];
    function forEach(obj, iterator, context) {
        var key;
        if (obj) {
            if (isFunction(obj)) {
                for (key in obj) {
                    if (key != "prototype" && key != "length" && key != "name" && obj.hasOwnProperty(key)) {
                        iterator.call(context, obj[key], key);
                    }
                }
            } else if (obj.forEach && obj.forEach !== forEach) {
                obj.forEach(iterator, context);
            } else if (isObject(obj) && isNumber(obj.length)) {
                for (key = 0; key < obj.length; key++) iterator.call(context, obj[key], key);
            } else {
                for (key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        iterator.call(context, obj[key], key);
                    }
                }
            }
        }
        return obj;
    }
    function sortedKeys(obj) {
        var keys = [];
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                keys.push(key);
            }
        }
        return keys.sort();
    }
    function forEachSorted(obj, iterator, context) {
        var keys = sortedKeys(obj);
        for (var i = 0; i < keys.length; i++) {
            iterator.call(context, obj[keys[i]], keys[i]);
        }
        return keys;
    }
    function reverseParams(iteratorFn) {
        return function(value, key) {
            iteratorFn(key, value);
        };
    }
    function nextUid() {
        var index = uid.length;
        var digit;
        while (index) {
            index--;
            digit = uid[index].charCodeAt(0);
            if (digit == 57) {
                uid[index] = "A";
                return uid.join("");
            }
            if (digit == 90) {
                uid[index] = "0";
            } else {
                uid[index] = String.fromCharCode(digit + 1);
                return uid.join("");
            }
        }
        uid.unshift("0");
        return uid.join("");
    }
    function extend(dst) {
        forEach(arguments, function(obj) {
            if (obj !== dst) {
                forEach(obj, function(value, key) {
                    dst[key] = value;
                });
            }
        });
        return dst;
    }
    function int(str) {
        return parseInt(str, 10);
    }
    function inherit(parent, extra) {
        return extend(new (extend(function() {}, {
            prototype: parent
        }))(), extra);
    }
    function noop() {}
    noop.$inject = [];
    function identity($) {
        return $;
    }
    identity.$inject = [];
    function valueFn(value) {
        return function() {
            return value;
        };
    }
    function isUndefined(value) {
        return typeof value == "undefined";
    }
    function isDefined(value) {
        return typeof value != "undefined";
    }
    function isObject(value) {
        return value != null && typeof value == "object";
    }
    function isString(value) {
        return typeof value == "string";
    }
    function isNumber(value) {
        return typeof value == "number";
    }
    function isDate(value) {
        return toString.apply(value) == "[object Date]";
    }
    function isArray(value) {
        return toString.apply(value) == "[object Array]";
    }
    function isFunction(value) {
        return typeof value == "function";
    }
    function isWindow(obj) {
        return obj && obj.document && obj.location && obj.alert && obj.setInterval;
    }
    function isScope(obj) {
        return obj && obj.$evalAsync && obj.$watch;
    }
    function isFile(obj) {
        return toString.apply(obj) === "[object File]";
    }
    function isBoolean(value) {
        return typeof value == "boolean";
    }
    function trim(value) {
        return isString(value) ? value.replace(/^\s*/, "").replace(/\s*$/, "") : value;
    }
    function isElement(node) {
        return node && (node.nodeName || node.bind && node.find);
    }
    function makeMap(str) {
        var obj = {}, items = str.split(","), i;
        for (i = 0; i < items.length; i++) obj[items[i]] = true;
        return obj;
    }
    if (msie < 9) {
        nodeName_ = function(element) {
            element = element.nodeName ? element : element[0];
            return element.scopeName && element.scopeName != "HTML" ? uppercase(element.scopeName + ":" + element.nodeName) : element.nodeName;
        };
    } else {
        nodeName_ = function(element) {
            return element.nodeName ? element.nodeName : element[0].nodeName;
        };
    }
    function map(obj, iterator, context) {
        var results = [];
        forEach(obj, function(value, index, list) {
            results.push(iterator.call(context, value, index, list));
        });
        return results;
    }
    function size(obj, ownPropsOnly) {
        var size = 0, key;
        if (isArray(obj) || isString(obj)) {
            return obj.length;
        } else if (isObject(obj)) {
            for (key in obj) if (!ownPropsOnly || obj.hasOwnProperty(key)) size++;
        }
        return size;
    }
    function includes(array, obj) {
        return indexOf(array, obj) != -1;
    }
    function indexOf(array, obj) {
        if (array.indexOf) return array.indexOf(obj);
        for (var i = 0; i < array.length; i++) {
            if (obj === array[i]) return i;
        }
        return -1;
    }
    function arrayRemove(array, value) {
        var index = indexOf(array, value);
        if (index >= 0) array.splice(index, 1);
        return value;
    }
    function isLeafNode(node) {
        if (node) {
            switch (node.nodeName) {
              case "OPTION":
              case "PRE":
              case "TITLE":
                return true;
            }
        }
        return false;
    }
    function copy(source, destination) {
        if (isWindow(source) || isScope(source)) throw Error("Can't copy Window or Scope");
        if (!destination) {
            destination = source;
            if (source) {
                if (isArray(source)) {
                    destination = copy(source, []);
                } else if (isDate(source)) {
                    destination = new Date(source.getTime());
                } else if (isObject(source)) {
                    destination = copy(source, {});
                }
            }
        } else {
            if (source === destination) throw Error("Can't copy equivalent objects or arrays");
            if (isArray(source)) {
                while (destination.length) {
                    destination.pop();
                }
                for (var i = 0; i < source.length; i++) {
                    destination.push(copy(source[i]));
                }
            } else {
                forEach(destination, function(value, key) {
                    delete destination[key];
                });
                for (var key in source) {
                    destination[key] = copy(source[key]);
                }
            }
        }
        return destination;
    }
    function shallowCopy(src, dst) {
        dst = dst || {};
        for (var key in src) {
            if (src.hasOwnProperty(key) && key.substr(0, 2) !== "$$") {
                dst[key] = src[key];
            }
        }
        return dst;
    }
    function equals(o1, o2) {
        if (o1 === o2) return true;
        if (o1 === null || o2 === null) return false;
        if (o1 !== o1 && o2 !== o2) return true;
        var t1 = typeof o1, t2 = typeof o2, length, key, keySet;
        if (t1 == t2) {
            if (t1 == "object") {
                if (isArray(o1)) {
                    if ((length = o1.length) == o2.length) {
                        for (key = 0; key < length; key++) {
                            if (!equals(o1[key], o2[key])) return false;
                        }
                        return true;
                    }
                } else if (isDate(o1)) {
                    return isDate(o2) && o1.getTime() == o2.getTime();
                } else {
                    if (isScope(o1) || isScope(o2) || isWindow(o1) || isWindow(o2)) return false;
                    keySet = {};
                    for (key in o1) {
                        if (key.charAt(0) === "$" || isFunction(o1[key])) continue;
                        if (!equals(o1[key], o2[key])) return false;
                        keySet[key] = true;
                    }
                    for (key in o2) {
                        if (!keySet[key] && key.charAt(0) !== "$" && o2[key] !== undefined && !isFunction(o2[key])) return false;
                    }
                    return true;
                }
            }
        }
        return false;
    }
    function concat(array1, array2, index) {
        return array1.concat(slice.call(array2, index));
    }
    function sliceArgs(args, startIndex) {
        return slice.call(args, startIndex || 0);
    }
    function bind(self, fn) {
        var curryArgs = arguments.length > 2 ? sliceArgs(arguments, 2) : [];
        if (isFunction(fn) && !(fn instanceof RegExp)) {
            return curryArgs.length ? function() {
                return arguments.length ? fn.apply(self, curryArgs.concat(slice.call(arguments, 0))) : fn.apply(self, curryArgs);
            } : function() {
                return arguments.length ? fn.apply(self, arguments) : fn.call(self);
            };
        } else {
            return fn;
        }
    }
    function toJsonReplacer(key, value) {
        var val = value;
        if (/^\$+/.test(key)) {
            val = undefined;
        } else if (isWindow(value)) {
            val = "$WINDOW";
        } else if (value && document === value) {
            val = "$DOCUMENT";
        } else if (isScope(value)) {
            val = "$SCOPE";
        }
        return val;
    }
    function toJson(obj, pretty) {
        return JSON.stringify(obj, toJsonReplacer, pretty ? "  " : null);
    }
    function fromJson(json) {
        return isString(json) ? JSON.parse(json) : json;
    }
    function toBoolean(value) {
        if (value && value.length !== 0) {
            var v = lowercase("" + value);
            value = !(v == "f" || v == "0" || v == "false" || v == "no" || v == "n" || v == "[]");
        } else {
            value = false;
        }
        return value;
    }
    function startingTag(element) {
        element = jqLite(element).clone();
        try {
            element.html("");
        } catch (e) {}
        return jqLite("<div>").append(element).html().match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(match, nodeName) {
            return "<" + lowercase(nodeName);
        });
    }
    function parseKeyValue(keyValue) {
        var obj = {}, key_value, key;
        forEach((keyValue || "").split("&"), function(keyValue) {
            if (keyValue) {
                key_value = keyValue.split("=");
                key = decodeURIComponent(key_value[0]);
                obj[key] = isDefined(key_value[1]) ? decodeURIComponent(key_value[1]) : true;
            }
        });
        return obj;
    }
    function toKeyValue(obj) {
        var parts = [];
        forEach(obj, function(value, key) {
            parts.push(encodeUriQuery(key, true) + (value === true ? "" : "=" + encodeUriQuery(value, true)));
        });
        return parts.length ? parts.join("&") : "";
    }
    function encodeUriSegment(val) {
        return encodeUriQuery(val, true).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+");
    }
    function encodeUriQuery(val, pctEncodeSpaces) {
        return encodeURIComponent(val).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(pctEncodeSpaces ? null : /%20/g, "+");
    }
    function angularInit(element, bootstrap) {
        var elements = [ element ], appElement, module, names = [ "ng:app", "ng-app", "x-ng-app", "data-ng-app" ], NG_APP_CLASS_REGEXP = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
        function append(element) {
            element && elements.push(element);
        }
        forEach(names, function(name) {
            names[name] = true;
            append(document.getElementById(name));
            name = name.replace(":", "\\:");
            if (element.querySelectorAll) {
                forEach(element.querySelectorAll("." + name), append);
                forEach(element.querySelectorAll("." + name + "\\:"), append);
                forEach(element.querySelectorAll("[" + name + "]"), append);
            }
        });
        forEach(elements, function(element) {
            if (!appElement) {
                var className = " " + element.className + " ";
                var match = NG_APP_CLASS_REGEXP.exec(className);
                if (match) {
                    appElement = element;
                    module = (match[2] || "").replace(/\s+/g, ",");
                } else {
                    forEach(element.attributes, function(attr) {
                        if (!appElement && names[attr.name]) {
                            appElement = element;
                            module = attr.value;
                        }
                    });
                }
            }
        });
        if (appElement) {
            bootstrap(appElement, module ? [ module ] : []);
        }
    }
    function bootstrap(element, modules) {
        element = jqLite(element);
        modules = modules || [];
        modules.unshift([ "$provide", function($provide) {
            $provide.value("$rootElement", element);
        } ]);
        modules.unshift("ng");
        var injector = createInjector(modules);
        injector.invoke([ "$rootScope", "$rootElement", "$compile", "$injector", function(scope, element, compile, injector) {
            scope.$apply(function() {
                element.data("$injector", injector);
                compile(element)(scope);
            });
        } ]);
        return injector;
    }
    var SNAKE_CASE_REGEXP = /[A-Z]/g;
    function snake_case(name, separator) {
        separator = separator || "_";
        return name.replace(SNAKE_CASE_REGEXP, function(letter, pos) {
            return (pos ? separator : "") + letter.toLowerCase();
        });
    }
    function bindJQuery() {
        jQuery = window.jQuery;
        if (jQuery) {
            jqLite = jQuery;
            extend(jQuery.fn, {
                scope: JQLitePrototype.scope,
                controller: JQLitePrototype.controller,
                injector: JQLitePrototype.injector,
                inheritedData: JQLitePrototype.inheritedData
            });
            JQLitePatchJQueryRemove("remove", true);
            JQLitePatchJQueryRemove("empty");
            JQLitePatchJQueryRemove("html");
        } else {
            jqLite = JQLite;
        }
        angular.element = jqLite;
    }
    function assertArg(arg, name, reason) {
        if (!arg) {
            throw new Error("Argument '" + (name || "?") + "' is " + (reason || "required"));
        }
        return arg;
    }
    function assertArgFn(arg, name, acceptArrayAnnotation) {
        if (acceptArrayAnnotation && isArray(arg)) {
            arg = arg[arg.length - 1];
        }
        assertArg(isFunction(arg), name, "not a function, got " + (arg && typeof arg == "object" ? arg.constructor.name || "Object" : typeof arg));
        return arg;
    }
    function setupModuleLoader(window) {
        function ensure(obj, name, factory) {
            return obj[name] || (obj[name] = factory());
        }
        return ensure(ensure(window, "angular", Object), "module", function() {
            var modules = {};
            return function module(name, requires, configFn) {
                if (requires && modules.hasOwnProperty(name)) {
                    modules[name] = null;
                }
                return ensure(modules, name, function() {
                    if (!requires) {
                        throw Error("No module: " + name);
                    }
                    var invokeQueue = [];
                    var runBlocks = [];
                    var config = invokeLater("$injector", "invoke");
                    var moduleInstance = {
                        _invokeQueue: invokeQueue,
                        _runBlocks: runBlocks,
                        requires: requires,
                        name: name,
                        provider: invokeLater("$provide", "provider"),
                        factory: invokeLater("$provide", "factory"),
                        service: invokeLater("$provide", "service"),
                        value: invokeLater("$provide", "value"),
                        constant: invokeLater("$provide", "constant", "unshift"),
                        filter: invokeLater("$filterProvider", "register"),
                        controller: invokeLater("$controllerProvider", "register"),
                        directive: invokeLater("$compileProvider", "directive"),
                        config: config,
                        run: function(block) {
                            runBlocks.push(block);
                            return this;
                        }
                    };
                    if (configFn) {
                        config(configFn);
                    }
                    return moduleInstance;
                    function invokeLater(provider, method, insertMethod) {
                        return function() {
                            invokeQueue[insertMethod || "push"]([ provider, method, arguments ]);
                            return moduleInstance;
                        };
                    }
                });
            };
        });
    }
    var version = {
        full: "1.0.4",
        major: 1,
        minor: 0,
        dot: 4,
        codeName: "bewildering-hair"
    };
    function publishExternalAPI(angular) {
        extend(angular, {
            bootstrap: bootstrap,
            copy: copy,
            extend: extend,
            equals: equals,
            element: jqLite,
            forEach: forEach,
            injector: createInjector,
            noop: noop,
            bind: bind,
            toJson: toJson,
            fromJson: fromJson,
            identity: identity,
            isUndefined: isUndefined,
            isDefined: isDefined,
            isString: isString,
            isFunction: isFunction,
            isObject: isObject,
            isNumber: isNumber,
            isElement: isElement,
            isArray: isArray,
            version: version,
            isDate: isDate,
            lowercase: lowercase,
            uppercase: uppercase,
            callbacks: {
                counter: 0
            }
        });
        angularModule = setupModuleLoader(window);
        try {
            angularModule("ngLocale");
        } catch (e) {
            angularModule("ngLocale", []).provider("$locale", $LocaleProvider);
        }
        angularModule("ng", [ "ngLocale" ], [ "$provide", function ngModule($provide) {
            $provide.provider("$compile", $CompileProvider).directive({
                a: htmlAnchorDirective,
                input: inputDirective,
                textarea: inputDirective,
                form: formDirective,
                script: scriptDirective,
                select: selectDirective,
                style: styleDirective,
                option: optionDirective,
                ngBind: ngBindDirective,
                ngBindHtmlUnsafe: ngBindHtmlUnsafeDirective,
                ngBindTemplate: ngBindTemplateDirective,
                ngClass: ngClassDirective,
                ngClassEven: ngClassEvenDirective,
                ngClassOdd: ngClassOddDirective,
                ngCsp: ngCspDirective,
                ngCloak: ngCloakDirective,
                ngController: ngControllerDirective,
                ngForm: ngFormDirective,
                ngHide: ngHideDirective,
                ngInclude: ngIncludeDirective,
                ngInit: ngInitDirective,
                ngNonBindable: ngNonBindableDirective,
                ngPluralize: ngPluralizeDirective,
                ngRepeat: ngRepeatDirective,
                ngShow: ngShowDirective,
                ngSubmit: ngSubmitDirective,
                ngStyle: ngStyleDirective,
                ngSwitch: ngSwitchDirective,
                ngSwitchWhen: ngSwitchWhenDirective,
                ngSwitchDefault: ngSwitchDefaultDirective,
                ngOptions: ngOptionsDirective,
                ngView: ngViewDirective,
                ngTransclude: ngTranscludeDirective,
                ngModel: ngModelDirective,
                ngList: ngListDirective,
                ngChange: ngChangeDirective,
                required: requiredDirective,
                ngRequired: requiredDirective,
                ngValue: ngValueDirective
            }).directive(ngAttributeAliasDirectives).directive(ngEventDirectives);
            $provide.provider({
                $anchorScroll: $AnchorScrollProvider,
                $browser: $BrowserProvider,
                $cacheFactory: $CacheFactoryProvider,
                $controller: $ControllerProvider,
                $document: $DocumentProvider,
                $exceptionHandler: $ExceptionHandlerProvider,
                $filter: $FilterProvider,
                $interpolate: $InterpolateProvider,
                $http: $HttpProvider,
                $httpBackend: $HttpBackendProvider,
                $location: $LocationProvider,
                $log: $LogProvider,
                $parse: $ParseProvider,
                $route: $RouteProvider,
                $routeParams: $RouteParamsProvider,
                $rootScope: $RootScopeProvider,
                $q: $QProvider,
                $sniffer: $SnifferProvider,
                $templateCache: $TemplateCacheProvider,
                $timeout: $TimeoutProvider,
                $window: $WindowProvider
            });
        } ]);
    }
    var jqCache = JQLite.cache = {}, jqName = JQLite.expando = "ng-" + new Date().getTime(), jqId = 1, addEventListenerFn = window.document.addEventListener ? function(element, type, fn) {
        element.addEventListener(type, fn, false);
    } : function(element, type, fn) {
        element.attachEvent("on" + type, fn);
    }, removeEventListenerFn = window.document.removeEventListener ? function(element, type, fn) {
        element.removeEventListener(type, fn, false);
    } : function(element, type, fn) {
        element.detachEvent("on" + type, fn);
    };
    function jqNextId() {
        return ++jqId;
    }
    var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
    var MOZ_HACK_REGEXP = /^moz([A-Z])/;
    function camelCase(name) {
        return name.replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
            return offset ? letter.toUpperCase() : letter;
        }).replace(MOZ_HACK_REGEXP, "Moz$1");
    }
    function JQLitePatchJQueryRemove(name, dispatchThis) {
        var originalJqFn = jQuery.fn[name];
        originalJqFn = originalJqFn.$original || originalJqFn;
        removePatch.$original = originalJqFn;
        jQuery.fn[name] = removePatch;
        function removePatch() {
            var list = [ this ], fireEvent = dispatchThis, set, setIndex, setLength, element, childIndex, childLength, children, fns, events;
            while (list.length) {
                set = list.shift();
                for (setIndex = 0, setLength = set.length; setIndex < setLength; setIndex++) {
                    element = jqLite(set[setIndex]);
                    if (fireEvent) {
                        element.triggerHandler("$destroy");
                    } else {
                        fireEvent = !fireEvent;
                    }
                    for (childIndex = 0, childLength = (children = element.children()).length; childIndex < childLength; childIndex++) {
                        list.push(jQuery(children[childIndex]));
                    }
                }
            }
            return originalJqFn.apply(this, arguments);
        }
    }
    function JQLite(element) {
        if (element instanceof JQLite) {
            return element;
        }
        if (!(this instanceof JQLite)) {
            if (isString(element) && element.charAt(0) != "<") {
                throw Error("selectors not implemented");
            }
            return new JQLite(element);
        }
        if (isString(element)) {
            var div = document.createElement("div");
            div.innerHTML = "<div>&#160;</div>" + element;
            div.removeChild(div.firstChild);
            JQLiteAddNodes(this, div.childNodes);
            this.remove();
        } else {
            JQLiteAddNodes(this, element);
        }
    }
    function JQLiteClone(element) {
        return element.cloneNode(true);
    }
    function JQLiteDealoc(element) {
        JQLiteRemoveData(element);
        for (var i = 0, children = element.childNodes || []; i < children.length; i++) {
            JQLiteDealoc(children[i]);
        }
    }
    function JQLiteUnbind(element, type, fn) {
        var events = JQLiteExpandoStore(element, "events"), handle = JQLiteExpandoStore(element, "handle");
        if (!handle) return;
        if (isUndefined(type)) {
            forEach(events, function(eventHandler, type) {
                removeEventListenerFn(element, type, eventHandler);
                delete events[type];
            });
        } else {
            if (isUndefined(fn)) {
                removeEventListenerFn(element, type, events[type]);
                delete events[type];
            } else {
                arrayRemove(events[type], fn);
            }
        }
    }
    function JQLiteRemoveData(element) {
        var expandoId = element[jqName], expandoStore = jqCache[expandoId];
        if (expandoStore) {
            if (expandoStore.handle) {
                expandoStore.events.$destroy && expandoStore.handle({}, "$destroy");
                JQLiteUnbind(element);
            }
            delete jqCache[expandoId];
            element[jqName] = undefined;
        }
    }
    function JQLiteExpandoStore(element, key, value) {
        var expandoId = element[jqName], expandoStore = jqCache[expandoId || -1];
        if (isDefined(value)) {
            if (!expandoStore) {
                element[jqName] = expandoId = jqNextId();
                expandoStore = jqCache[expandoId] = {};
            }
            expandoStore[key] = value;
        } else {
            return expandoStore && expandoStore[key];
        }
    }
    function JQLiteData(element, key, value) {
        var data = JQLiteExpandoStore(element, "data"), isSetter = isDefined(value), keyDefined = !isSetter && isDefined(key), isSimpleGetter = keyDefined && !isObject(key);
        if (!data && !isSimpleGetter) {
            JQLiteExpandoStore(element, "data", data = {});
        }
        if (isSetter) {
            data[key] = value;
        } else {
            if (keyDefined) {
                if (isSimpleGetter) {
                    return data && data[key];
                } else {
                    extend(data, key);
                }
            } else {
                return data;
            }
        }
    }
    function JQLiteHasClass(element, selector) {
        return (" " + element.className + " ").replace(/[\n\t]/g, " ").indexOf(" " + selector + " ") > -1;
    }
    function JQLiteRemoveClass(element, cssClasses) {
        if (cssClasses) {
            forEach(cssClasses.split(" "), function(cssClass) {
                element.className = trim((" " + element.className + " ").replace(/[\n\t]/g, " ").replace(" " + trim(cssClass) + " ", " "));
            });
        }
    }
    function JQLiteAddClass(element, cssClasses) {
        if (cssClasses) {
            forEach(cssClasses.split(" "), function(cssClass) {
                if (!JQLiteHasClass(element, cssClass)) {
                    element.className = trim(element.className + " " + trim(cssClass));
                }
            });
        }
    }
    function JQLiteAddNodes(root, elements) {
        if (elements) {
            elements = !elements.nodeName && isDefined(elements.length) && !isWindow(elements) ? elements : [ elements ];
            for (var i = 0; i < elements.length; i++) {
                root.push(elements[i]);
            }
        }
    }
    function JQLiteController(element, name) {
        return JQLiteInheritedData(element, "$" + (name || "ngController") + "Controller");
    }
    function JQLiteInheritedData(element, name, value) {
        element = jqLite(element);
        if (element[0].nodeType == 9) {
            element = element.find("html");
        }
        while (element.length) {
            if (value = element.data(name)) return value;
            element = element.parent();
        }
    }
    var JQLitePrototype = JQLite.prototype = {
        ready: function(fn) {
            var fired = false;
            function trigger() {
                if (fired) return;
                fired = true;
                fn();
            }
            this.bind("DOMContentLoaded", trigger);
            JQLite(window).bind("load", trigger);
        },
        toString: function() {
            var value = [];
            forEach(this, function(e) {
                value.push("" + e);
            });
            return "[" + value.join(", ") + "]";
        },
        eq: function(index) {
            return index >= 0 ? jqLite(this[index]) : jqLite(this[this.length + index]);
        },
        length: 0,
        push: push,
        sort: [].sort,
        splice: [].splice
    };
    var BOOLEAN_ATTR = {};
    forEach("multiple,selected,checked,disabled,readOnly,required".split(","), function(value) {
        BOOLEAN_ATTR[lowercase(value)] = value;
    });
    var BOOLEAN_ELEMENTS = {};
    forEach("input,select,option,textarea,button,form".split(","), function(value) {
        BOOLEAN_ELEMENTS[uppercase(value)] = true;
    });
    function getBooleanAttrName(element, name) {
        var booleanAttr = BOOLEAN_ATTR[name.toLowerCase()];
        return booleanAttr && BOOLEAN_ELEMENTS[element.nodeName] && booleanAttr;
    }
    forEach({
        data: JQLiteData,
        inheritedData: JQLiteInheritedData,
        scope: function(element) {
            return JQLiteInheritedData(element, "$scope");
        },
        controller: JQLiteController,
        injector: function(element) {
            return JQLiteInheritedData(element, "$injector");
        },
        removeAttr: function(element, name) {
            element.removeAttribute(name);
        },
        hasClass: JQLiteHasClass,
        css: function(element, name, value) {
            name = camelCase(name);
            if (isDefined(value)) {
                element.style[name] = value;
            } else {
                var val;
                if (msie <= 8) {
                    val = element.currentStyle && element.currentStyle[name];
                    if (val === "") val = "auto";
                }
                val = val || element.style[name];
                if (msie <= 8) {
                    val = val === "" ? undefined : val;
                }
                return val;
            }
        },
        attr: function(element, name, value) {
            var lowercasedName = lowercase(name);
            if (BOOLEAN_ATTR[lowercasedName]) {
                if (isDefined(value)) {
                    if (!!value) {
                        element[name] = true;
                        element.setAttribute(name, lowercasedName);
                    } else {
                        element[name] = false;
                        element.removeAttribute(lowercasedName);
                    }
                } else {
                    return element[name] || (element.attributes.getNamedItem(name) || noop).specified ? lowercasedName : undefined;
                }
            } else if (isDefined(value)) {
                element.setAttribute(name, value);
            } else if (element.getAttribute) {
                var ret = element.getAttribute(name, 2);
                return ret === null ? undefined : ret;
            }
        },
        prop: function(element, name, value) {
            if (isDefined(value)) {
                element[name] = value;
            } else {
                return element[name];
            }
        },
        text: extend(msie < 9 ? function(element, value) {
            if (element.nodeType == 1) {
                if (isUndefined(value)) return element.innerText;
                element.innerText = value;
            } else {
                if (isUndefined(value)) return element.nodeValue;
                element.nodeValue = value;
            }
        } : function(element, value) {
            if (isUndefined(value)) {
                return element.textContent;
            }
            element.textContent = value;
        }, {
            $dv: ""
        }),
        val: function(element, value) {
            if (isUndefined(value)) {
                return element.value;
            }
            element.value = value;
        },
        html: function(element, value) {
            if (isUndefined(value)) {
                return element.innerHTML;
            }
            for (var i = 0, childNodes = element.childNodes; i < childNodes.length; i++) {
                JQLiteDealoc(childNodes[i]);
            }
            element.innerHTML = value;
        }
    }, function(fn, name) {
        JQLite.prototype[name] = function(arg1, arg2) {
            var i, key;
            if ((fn.length == 2 && fn !== JQLiteHasClass && fn !== JQLiteController ? arg1 : arg2) === undefined) {
                if (isObject(arg1)) {
                    for (i = 0; i < this.length; i++) {
                        if (fn === JQLiteData) {
                            fn(this[i], arg1);
                        } else {
                            for (key in arg1) {
                                fn(this[i], key, arg1[key]);
                            }
                        }
                    }
                    return this;
                } else {
                    if (this.length) return fn(this[0], arg1, arg2);
                }
            } else {
                for (i = 0; i < this.length; i++) {
                    fn(this[i], arg1, arg2);
                }
                return this;
            }
            return fn.$dv;
        };
    });
    function createEventHandler(element, events) {
        var eventHandler = function(event, type) {
            if (!event.preventDefault) {
                event.preventDefault = function() {
                    event.returnValue = false;
                };
            }
            if (!event.stopPropagation) {
                event.stopPropagation = function() {
                    event.cancelBubble = true;
                };
            }
            if (!event.target) {
                event.target = event.srcElement || document;
            }
            if (isUndefined(event.defaultPrevented)) {
                var prevent = event.preventDefault;
                event.preventDefault = function() {
                    event.defaultPrevented = true;
                    prevent.call(event);
                };
                event.defaultPrevented = false;
            }
            event.isDefaultPrevented = function() {
                return event.defaultPrevented;
            };
            forEach(events[type || event.type], function(fn) {
                fn.call(element, event);
            });
            if (msie <= 8) {
                event.preventDefault = null;
                event.stopPropagation = null;
                event.isDefaultPrevented = null;
            } else {
                delete event.preventDefault;
                delete event.stopPropagation;
                delete event.isDefaultPrevented;
            }
        };
        eventHandler.elem = element;
        return eventHandler;
    }
    forEach({
        removeData: JQLiteRemoveData,
        dealoc: JQLiteDealoc,
        bind: function bindFn(element, type, fn) {
            var events = JQLiteExpandoStore(element, "events"), handle = JQLiteExpandoStore(element, "handle");
            if (!events) JQLiteExpandoStore(element, "events", events = {});
            if (!handle) JQLiteExpandoStore(element, "handle", handle = createEventHandler(element, events));
            forEach(type.split(" "), function(type) {
                var eventFns = events[type];
                if (!eventFns) {
                    if (type == "mouseenter" || type == "mouseleave") {
                        var counter = 0;
                        events.mouseenter = [];
                        events.mouseleave = [];
                        bindFn(element, "mouseover", function(event) {
                            counter++;
                            if (counter == 1) {
                                handle(event, "mouseenter");
                            }
                        });
                        bindFn(element, "mouseout", function(event) {
                            counter--;
                            if (counter == 0) {
                                handle(event, "mouseleave");
                            }
                        });
                    } else {
                        addEventListenerFn(element, type, handle);
                        events[type] = [];
                    }
                    eventFns = events[type];
                }
                eventFns.push(fn);
            });
        },
        unbind: JQLiteUnbind,
        replaceWith: function(element, replaceNode) {
            var index, parent = element.parentNode;
            JQLiteDealoc(element);
            forEach(new JQLite(replaceNode), function(node) {
                if (index) {
                    parent.insertBefore(node, index.nextSibling);
                } else {
                    parent.replaceChild(node, element);
                }
                index = node;
            });
        },
        children: function(element) {
            var children = [];
            forEach(element.childNodes, function(element) {
                if (element.nodeType === 1) children.push(element);
            });
            return children;
        },
        contents: function(element) {
            return element.childNodes || [];
        },
        append: function(element, node) {
            forEach(new JQLite(node), function(child) {
                if (element.nodeType === 1) element.appendChild(child);
            });
        },
        prepend: function(element, node) {
            if (element.nodeType === 1) {
                var index = element.firstChild;
                forEach(new JQLite(node), function(child) {
                    if (index) {
                        element.insertBefore(child, index);
                    } else {
                        element.appendChild(child);
                        index = child;
                    }
                });
            }
        },
        wrap: function(element, wrapNode) {
            wrapNode = jqLite(wrapNode)[0];
            var parent = element.parentNode;
            if (parent) {
                parent.replaceChild(wrapNode, element);
            }
            wrapNode.appendChild(element);
        },
        remove: function(element) {
            JQLiteDealoc(element);
            var parent = element.parentNode;
            if (parent) parent.removeChild(element);
        },
        after: function(element, newElement) {
            var index = element, parent = element.parentNode;
            forEach(new JQLite(newElement), function(node) {
                parent.insertBefore(node, index.nextSibling);
                index = node;
            });
        },
        addClass: JQLiteAddClass,
        removeClass: JQLiteRemoveClass,
        toggleClass: function(element, selector, condition) {
            if (isUndefined(condition)) {
                condition = !JQLiteHasClass(element, selector);
            }
            (condition ? JQLiteAddClass : JQLiteRemoveClass)(element, selector);
        },
        parent: function(element) {
            var parent = element.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null;
        },
        next: function(element) {
            if (element.nextElementSibling) {
                return element.nextElementSibling;
            }
            var elm = element.nextSibling;
            while (elm != null && elm.nodeType !== 1) {
                elm = elm.nextSibling;
            }
            return elm;
        },
        find: function(element, selector) {
            return element.getElementsByTagName(selector);
        },
        clone: JQLiteClone,
        triggerHandler: function(element, eventName) {
            var eventFns = (JQLiteExpandoStore(element, "events") || {})[eventName];
            forEach(eventFns, function(fn) {
                fn.call(element, null);
            });
        }
    }, function(fn, name) {
        JQLite.prototype[name] = function(arg1, arg2) {
            var value;
            for (var i = 0; i < this.length; i++) {
                if (value == undefined) {
                    value = fn(this[i], arg1, arg2);
                    if (value !== undefined) {
                        value = jqLite(value);
                    }
                } else {
                    JQLiteAddNodes(value, fn(this[i], arg1, arg2));
                }
            }
            return value == undefined ? this : value;
        };
    });
    function hashKey(obj) {
        var objType = typeof obj, key;
        if (objType == "object" && obj !== null) {
            if (typeof (key = obj.$$hashKey) == "function") {
                key = obj.$$hashKey();
            } else if (key === undefined) {
                key = obj.$$hashKey = nextUid();
            }
        } else {
            key = obj;
        }
        return objType + ":" + key;
    }
    function HashMap(array) {
        forEach(array, this.put, this);
    }
    HashMap.prototype = {
        put: function(key, value) {
            this[hashKey(key)] = value;
        },
        get: function(key) {
            return this[hashKey(key)];
        },
        remove: function(key) {
            var value = this[key = hashKey(key)];
            delete this[key];
            return value;
        }
    };
    function HashQueueMap() {}
    HashQueueMap.prototype = {
        push: function(key, value) {
            var array = this[key = hashKey(key)];
            if (!array) {
                this[key] = [ value ];
            } else {
                array.push(value);
            }
        },
        shift: function(key) {
            var array = this[key = hashKey(key)];
            if (array) {
                if (array.length == 1) {
                    delete this[key];
                    return array[0];
                } else {
                    return array.shift();
                }
            }
        },
        peek: function(key) {
            var array = this[hashKey(key)];
            if (array) {
                return array[0];
            }
        }
    };
    var FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
    var FN_ARG_SPLIT = /,/;
    var FN_ARG = /^\s*(_?)(\S+?)\1\s*$/;
    var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
    function annotate(fn) {
        var $inject, fnText, argDecl, last;
        if (typeof fn == "function") {
            if (!($inject = fn.$inject)) {
                $inject = [];
                fnText = fn.toString().replace(STRIP_COMMENTS, "");
                argDecl = fnText.match(FN_ARGS);
                forEach(argDecl[1].split(FN_ARG_SPLIT), function(arg) {
                    arg.replace(FN_ARG, function(all, underscore, name) {
                        $inject.push(name);
                    });
                });
                fn.$inject = $inject;
            }
        } else if (isArray(fn)) {
            last = fn.length - 1;
            assertArgFn(fn[last], "fn");
            $inject = fn.slice(0, last);
        } else {
            assertArgFn(fn, "fn", true);
        }
        return $inject;
    }
    function createInjector(modulesToLoad) {
        var INSTANTIATING = {}, providerSuffix = "Provider", path = [], loadedModules = new HashMap(), providerCache = {
            $provide: {
                provider: supportObject(provider),
                factory: supportObject(factory),
                service: supportObject(service),
                value: supportObject(value),
                constant: supportObject(constant),
                decorator: decorator
            }
        }, providerInjector = createInternalInjector(providerCache, function() {
            throw Error("Unknown provider: " + path.join(" <- "));
        }), instanceCache = {}, instanceInjector = instanceCache.$injector = createInternalInjector(instanceCache, function(servicename) {
            var provider = providerInjector.get(servicename + providerSuffix);
            return instanceInjector.invoke(provider.$get, provider);
        });
        forEach(loadModules(modulesToLoad), function(fn) {
            instanceInjector.invoke(fn || noop);
        });
        return instanceInjector;
        function supportObject(delegate) {
            return function(key, value) {
                if (isObject(key)) {
                    forEach(key, reverseParams(delegate));
                } else {
                    return delegate(key, value);
                }
            };
        }
        function provider(name, provider_) {
            if (isFunction(provider_) || isArray(provider_)) {
                provider_ = providerInjector.instantiate(provider_);
            }
            if (!provider_.$get) {
                throw Error("Provider " + name + " must define $get factory method.");
            }
            return providerCache[name + providerSuffix] = provider_;
        }
        function factory(name, factoryFn) {
            return provider(name, {
                $get: factoryFn
            });
        }
        function service(name, constructor) {
            return factory(name, [ "$injector", function($injector) {
                return $injector.instantiate(constructor);
            } ]);
        }
        function value(name, value) {
            return factory(name, valueFn(value));
        }
        function constant(name, value) {
            providerCache[name] = value;
            instanceCache[name] = value;
        }
        function decorator(serviceName, decorFn) {
            var origProvider = providerInjector.get(serviceName + providerSuffix), orig$get = origProvider.$get;
            origProvider.$get = function() {
                var origInstance = instanceInjector.invoke(orig$get, origProvider);
                return instanceInjector.invoke(decorFn, null, {
                    $delegate: origInstance
                });
            };
        }
        function loadModules(modulesToLoad) {
            var runBlocks = [];
            forEach(modulesToLoad, function(module) {
                if (loadedModules.get(module)) return;
                loadedModules.put(module, true);
                if (isString(module)) {
                    var moduleFn = angularModule(module);
                    runBlocks = runBlocks.concat(loadModules(moduleFn.requires)).concat(moduleFn._runBlocks);
                    try {
                        for (var invokeQueue = moduleFn._invokeQueue, i = 0, ii = invokeQueue.length; i < ii; i++) {
                            var invokeArgs = invokeQueue[i], provider = invokeArgs[0] == "$injector" ? providerInjector : providerInjector.get(invokeArgs[0]);
                            provider[invokeArgs[1]].apply(provider, invokeArgs[2]);
                        }
                    } catch (e) {
                        if (e.message) e.message += " from " + module;
                        throw e;
                    }
                } else if (isFunction(module)) {
                    try {
                        runBlocks.push(providerInjector.invoke(module));
                    } catch (e) {
                        if (e.message) e.message += " from " + module;
                        throw e;
                    }
                } else if (isArray(module)) {
                    try {
                        runBlocks.push(providerInjector.invoke(module));
                    } catch (e) {
                        if (e.message) e.message += " from " + String(module[module.length - 1]);
                        throw e;
                    }
                } else {
                    assertArgFn(module, "module");
                }
            });
            return runBlocks;
        }
        function createInternalInjector(cache, factory) {
            function getService(serviceName) {
                if (typeof serviceName !== "string") {
                    throw Error("Service name expected");
                }
                if (cache.hasOwnProperty(serviceName)) {
                    if (cache[serviceName] === INSTANTIATING) {
                        throw Error("Circular dependency: " + path.join(" <- "));
                    }
                    return cache[serviceName];
                } else {
                    try {
                        path.unshift(serviceName);
                        cache[serviceName] = INSTANTIATING;
                        return cache[serviceName] = factory(serviceName);
                    } finally {
                        path.shift();
                    }
                }
            }
            function invoke(fn, self, locals) {
                var args = [], $inject = annotate(fn), length, i, key;
                for (i = 0, length = $inject.length; i < length; i++) {
                    key = $inject[i];
                    args.push(locals && locals.hasOwnProperty(key) ? locals[key] : getService(key));
                }
                if (!fn.$inject) {
                    fn = fn[length];
                }
                switch (self ? -1 : args.length) {
                  case 0:
                    return fn();

                  case 1:
                    return fn(args[0]);

                  case 2:
                    return fn(args[0], args[1]);

                  case 3:
                    return fn(args[0], args[1], args[2]);

                  case 4:
                    return fn(args[0], args[1], args[2], args[3]);

                  case 5:
                    return fn(args[0], args[1], args[2], args[3], args[4]);

                  case 6:
                    return fn(args[0], args[1], args[2], args[3], args[4], args[5]);

                  case 7:
                    return fn(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);

                  case 8:
                    return fn(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7]);

                  case 9:
                    return fn(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8]);

                  case 10:
                    return fn(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8], args[9]);

                  default:
                    return fn.apply(self, args);
                }
            }
            function instantiate(Type, locals) {
                var Constructor = function() {}, instance, returnedValue;
                Constructor.prototype = (isArray(Type) ? Type[Type.length - 1] : Type).prototype;
                instance = new Constructor();
                returnedValue = invoke(Type, instance, locals);
                return isObject(returnedValue) ? returnedValue : instance;
            }
            return {
                invoke: invoke,
                instantiate: instantiate,
                get: getService,
                annotate: annotate
            };
        }
    }
    function $AnchorScrollProvider() {
        var autoScrollingEnabled = true;
        this.disableAutoScrolling = function() {
            autoScrollingEnabled = false;
        };
        this.$get = [ "$window", "$location", "$rootScope", function($window, $location, $rootScope) {
            var document = $window.document;
            function getFirstAnchor(list) {
                var result = null;
                forEach(list, function(element) {
                    if (!result && lowercase(element.nodeName) === "a") result = element;
                });
                return result;
            }
            function scroll() {
                var hash = $location.hash(), elm;
                if (!hash) $window.scrollTo(0, 0); else if (elm = document.getElementById(hash)) elm.scrollIntoView(); else if (elm = getFirstAnchor(document.getElementsByName(hash))) elm.scrollIntoView(); else if (hash === "top") $window.scrollTo(0, 0);
            }
            if (autoScrollingEnabled) {
                $rootScope.$watch(function autoScrollWatch() {
                    return $location.hash();
                }, function autoScrollWatchAction() {
                    $rootScope.$evalAsync(scroll);
                });
            }
            return scroll;
        } ];
    }
    function Browser(window, document, $log, $sniffer) {
        var self = this, rawDocument = document[0], location = window.location, history = window.history, setTimeout = window.setTimeout, clearTimeout = window.clearTimeout, pendingDeferIds = {};
        self.isMock = false;
        var outstandingRequestCount = 0;
        var outstandingRequestCallbacks = [];
        self.$$completeOutstandingRequest = completeOutstandingRequest;
        self.$$incOutstandingRequestCount = function() {
            outstandingRequestCount++;
        };
        function completeOutstandingRequest(fn) {
            try {
                fn.apply(null, sliceArgs(arguments, 1));
            } finally {
                outstandingRequestCount--;
                if (outstandingRequestCount === 0) {
                    while (outstandingRequestCallbacks.length) {
                        try {
                            outstandingRequestCallbacks.pop()();
                        } catch (e) {
                            $log.error(e);
                        }
                    }
                }
            }
        }
        self.notifyWhenNoOutstandingRequests = function(callback) {
            forEach(pollFns, function(pollFn) {
                pollFn();
            });
            if (outstandingRequestCount === 0) {
                callback();
            } else {
                outstandingRequestCallbacks.push(callback);
            }
        };
        var pollFns = [], pollTimeout;
        self.addPollFn = function(fn) {
            if (isUndefined(pollTimeout)) startPoller(100, setTimeout);
            pollFns.push(fn);
            return fn;
        };
        function startPoller(interval, setTimeout) {
            (function check() {
                forEach(pollFns, function(pollFn) {
                    pollFn();
                });
                pollTimeout = setTimeout(check, interval);
            })();
        }
        var lastBrowserUrl = location.href, baseElement = document.find("base");
        self.url = function(url, replace) {
            if (url) {
                if (lastBrowserUrl == url) return;
                lastBrowserUrl = url;
                if ($sniffer.history) {
                    if (replace) history.replaceState(null, "", url); else {
                        history.pushState(null, "", url);
                        baseElement.attr("href", baseElement.attr("href"));
                    }
                } else {
                    if (replace) location.replace(url); else location.href = url;
                }
                return self;
            } else {
                return location.href.replace(/%27/g, "'");
            }
        };
        var urlChangeListeners = [], urlChangeInit = false;
        function fireUrlChange() {
            if (lastBrowserUrl == self.url()) return;
            lastBrowserUrl = self.url();
            forEach(urlChangeListeners, function(listener) {
                listener(self.url());
            });
        }
        self.onUrlChange = function(callback) {
            if (!urlChangeInit) {
                if ($sniffer.history) jqLite(window).bind("popstate", fireUrlChange);
                if ($sniffer.hashchange) jqLite(window).bind("hashchange", fireUrlChange); else self.addPollFn(fireUrlChange);
                urlChangeInit = true;
            }
            urlChangeListeners.push(callback);
            return callback;
        };
        self.baseHref = function() {
            var href = baseElement.attr("href");
            return href ? href.replace(/^https?\:\/\/[^\/]*/, "") : href;
        };
        var lastCookies = {};
        var lastCookieString = "";
        var cookiePath = self.baseHref();
        self.cookies = function(name, value) {
            var cookieLength, cookieArray, cookie, i, index;
            if (name) {
                if (value === undefined) {
                    rawDocument.cookie = escape(name) + "=;path=" + cookiePath + ";expires=Thu, 01 Jan 1970 00:00:00 GMT";
                } else {
                    if (isString(value)) {
                        cookieLength = (rawDocument.cookie = escape(name) + "=" + escape(value) + ";path=" + cookiePath).length + 1;
                        if (cookieLength > 4096) {
                            $log.warn("Cookie '" + name + "' possibly not set or overflowed because it was too large (" + cookieLength + " > 4096 bytes)!");
                        }
                    }
                }
            } else {
                if (rawDocument.cookie !== lastCookieString) {
                    lastCookieString = rawDocument.cookie;
                    cookieArray = lastCookieString.split("; ");
                    lastCookies = {};
                    for (i = 0; i < cookieArray.length; i++) {
                        cookie = cookieArray[i];
                        index = cookie.indexOf("=");
                        if (index > 0) {
                            lastCookies[unescape(cookie.substring(0, index))] = unescape(cookie.substring(index + 1));
                        }
                    }
                }
                return lastCookies;
            }
        };
        self.defer = function(fn, delay) {
            var timeoutId;
            outstandingRequestCount++;
            timeoutId = setTimeout(function() {
                delete pendingDeferIds[timeoutId];
                completeOutstandingRequest(fn);
            }, delay || 0);
            pendingDeferIds[timeoutId] = true;
            return timeoutId;
        };
        self.defer.cancel = function(deferId) {
            if (pendingDeferIds[deferId]) {
                delete pendingDeferIds[deferId];
                clearTimeout(deferId);
                completeOutstandingRequest(noop);
                return true;
            }
            return false;
        };
    }
    function $BrowserProvider() {
        this.$get = [ "$window", "$log", "$sniffer", "$document", function($window, $log, $sniffer, $document) {
            return new Browser($window, $document, $log, $sniffer);
        } ];
    }
    function $CacheFactoryProvider() {
        this.$get = function() {
            var caches = {};
            function cacheFactory(cacheId, options) {
                if (cacheId in caches) {
                    throw Error("cacheId " + cacheId + " taken");
                }
                var size = 0, stats = extend({}, options, {
                    id: cacheId
                }), data = {}, capacity = options && options.capacity || Number.MAX_VALUE, lruHash = {}, freshEnd = null, staleEnd = null;
                return caches[cacheId] = {
                    put: function(key, value) {
                        var lruEntry = lruHash[key] || (lruHash[key] = {
                            key: key
                        });
                        refresh(lruEntry);
                        if (isUndefined(value)) return;
                        if (!(key in data)) size++;
                        data[key] = value;
                        if (size > capacity) {
                            this.remove(staleEnd.key);
                        }
                    },
                    get: function(key) {
                        var lruEntry = lruHash[key];
                        if (!lruEntry) return;
                        refresh(lruEntry);
                        return data[key];
                    },
                    remove: function(key) {
                        var lruEntry = lruHash[key];
                        if (!lruEntry) return;
                        if (lruEntry == freshEnd) freshEnd = lruEntry.p;
                        if (lruEntry == staleEnd) staleEnd = lruEntry.n;
                        link(lruEntry.n, lruEntry.p);
                        delete lruHash[key];
                        delete data[key];
                        size--;
                    },
                    removeAll: function() {
                        data = {};
                        size = 0;
                        lruHash = {};
                        freshEnd = staleEnd = null;
                    },
                    destroy: function() {
                        data = null;
                        stats = null;
                        lruHash = null;
                        delete caches[cacheId];
                    },
                    info: function() {
                        return extend({}, stats, {
                            size: size
                        });
                    }
                };
                function refresh(entry) {
                    if (entry != freshEnd) {
                        if (!staleEnd) {
                            staleEnd = entry;
                        } else if (staleEnd == entry) {
                            staleEnd = entry.n;
                        }
                        link(entry.n, entry.p);
                        link(entry, freshEnd);
                        freshEnd = entry;
                        freshEnd.n = null;
                    }
                }
                function link(nextEntry, prevEntry) {
                    if (nextEntry != prevEntry) {
                        if (nextEntry) nextEntry.p = prevEntry;
                        if (prevEntry) prevEntry.n = nextEntry;
                    }
                }
            }
            cacheFactory.info = function() {
                var info = {};
                forEach(caches, function(cache, cacheId) {
                    info[cacheId] = cache.info();
                });
                return info;
            };
            cacheFactory.get = function(cacheId) {
                return caches[cacheId];
            };
            return cacheFactory;
        };
    }
    function $TemplateCacheProvider() {
        this.$get = [ "$cacheFactory", function($cacheFactory) {
            return $cacheFactory("templates");
        } ];
    }
    var NON_ASSIGNABLE_MODEL_EXPRESSION = "Non-assignable model expression: ";
    $CompileProvider.$inject = [ "$provide" ];
    function $CompileProvider($provide) {
        var hasDirectives = {}, Suffix = "Directive", COMMENT_DIRECTIVE_REGEXP = /^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/, CLASS_DIRECTIVE_REGEXP = /(([\d\w\-_]+)(?:\:([^;]+))?;?)/, MULTI_ROOT_TEMPLATE_ERROR = "Template must have exactly one root element. was: ";
        this.directive = function registerDirective(name, directiveFactory) {
            if (isString(name)) {
                assertArg(directiveFactory, "directive");
                if (!hasDirectives.hasOwnProperty(name)) {
                    hasDirectives[name] = [];
                    $provide.factory(name + Suffix, [ "$injector", "$exceptionHandler", function($injector, $exceptionHandler) {
                        var directives = [];
                        forEach(hasDirectives[name], function(directiveFactory) {
                            try {
                                var directive = $injector.invoke(directiveFactory);
                                if (isFunction(directive)) {
                                    directive = {
                                        compile: valueFn(directive)
                                    };
                                } else if (!directive.compile && directive.link) {
                                    directive.compile = valueFn(directive.link);
                                }
                                directive.priority = directive.priority || 0;
                                directive.name = directive.name || name;
                                directive.require = directive.require || directive.controller && directive.name;
                                directive.restrict = directive.restrict || "A";
                                directives.push(directive);
                            } catch (e) {
                                $exceptionHandler(e);
                            }
                        });
                        return directives;
                    } ]);
                }
                hasDirectives[name].push(directiveFactory);
            } else {
                forEach(name, reverseParams(registerDirective));
            }
            return this;
        };
        this.$get = [ "$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", function($injector, $interpolate, $exceptionHandler, $http, $templateCache, $parse, $controller, $rootScope) {
            var Attributes = function(element, attr) {
                this.$$element = element;
                this.$attr = attr || {};
            };
            Attributes.prototype = {
                $normalize: directiveNormalize,
                $set: function(key, value, writeAttr, attrName) {
                    var booleanKey = getBooleanAttrName(this.$$element[0], key), $$observers = this.$$observers;
                    if (booleanKey) {
                        this.$$element.prop(key, value);
                        attrName = booleanKey;
                    }
                    this[key] = value;
                    if (attrName) {
                        this.$attr[key] = attrName;
                    } else {
                        attrName = this.$attr[key];
                        if (!attrName) {
                            this.$attr[key] = attrName = snake_case(key, "-");
                        }
                    }
                    if (writeAttr !== false) {
                        if (value === null || value === undefined) {
                            this.$$element.removeAttr(attrName);
                        } else {
                            this.$$element.attr(attrName, value);
                        }
                    }
                    $$observers && forEach($$observers[key], function(fn) {
                        try {
                            fn(value);
                        } catch (e) {
                            $exceptionHandler(e);
                        }
                    });
                },
                $observe: function(key, fn) {
                    var attrs = this, $$observers = attrs.$$observers || (attrs.$$observers = {}), listeners = $$observers[key] || ($$observers[key] = []);
                    listeners.push(fn);
                    $rootScope.$evalAsync(function() {
                        if (!listeners.$$inter) {
                            fn(attrs[key]);
                        }
                    });
                    return fn;
                }
            };
            var startSymbol = $interpolate.startSymbol(), endSymbol = $interpolate.endSymbol(), denormalizeTemplate = startSymbol == "{{" || endSymbol == "}}" ? identity : function denormalizeTemplate(template) {
                return template.replace(/\{\{/g, startSymbol).replace(/}}/g, endSymbol);
            };
            return compile;
            function compile($compileNodes, transcludeFn, maxPriority) {
                if (!($compileNodes instanceof jqLite)) {
                    $compileNodes = jqLite($compileNodes);
                }
                forEach($compileNodes, function(node, index) {
                    if (node.nodeType == 3 && node.nodeValue.match(/\S+/)) {
                        $compileNodes[index] = jqLite(node).wrap("<span></span>").parent()[0];
                    }
                });
                var compositeLinkFn = compileNodes($compileNodes, transcludeFn, $compileNodes, maxPriority);
                return function publicLinkFn(scope, cloneConnectFn) {
                    assertArg(scope, "scope");
                    var $linkNode = cloneConnectFn ? JQLitePrototype.clone.call($compileNodes) : $compileNodes;
                    $linkNode.data("$scope", scope);
                    safeAddClass($linkNode, "ng-scope");
                    if (cloneConnectFn) cloneConnectFn($linkNode, scope);
                    if (compositeLinkFn) compositeLinkFn(scope, $linkNode, $linkNode);
                    return $linkNode;
                };
            }
            function wrongMode(localName, mode) {
                throw Error("Unsupported '" + mode + "' for '" + localName + "'.");
            }
            function safeAddClass($element, className) {
                try {
                    $element.addClass(className);
                } catch (e) {}
            }
            function compileNodes(nodeList, transcludeFn, $rootElement, maxPriority) {
                var linkFns = [], nodeLinkFn, childLinkFn, directives, attrs, linkFnFound;
                for (var i = 0; i < nodeList.length; i++) {
                    attrs = new Attributes();
                    directives = collectDirectives(nodeList[i], [], attrs, maxPriority);
                    nodeLinkFn = directives.length ? applyDirectivesToNode(directives, nodeList[i], attrs, transcludeFn, $rootElement) : null;
                    childLinkFn = nodeLinkFn && nodeLinkFn.terminal || !nodeList[i].childNodes.length ? null : compileNodes(nodeList[i].childNodes, nodeLinkFn ? nodeLinkFn.transclude : transcludeFn);
                    linkFns.push(nodeLinkFn);
                    linkFns.push(childLinkFn);
                    linkFnFound = linkFnFound || nodeLinkFn || childLinkFn;
                }
                return linkFnFound ? compositeLinkFn : null;
                function compositeLinkFn(scope, nodeList, $rootElement, boundTranscludeFn) {
                    var nodeLinkFn, childLinkFn, node, childScope, childTranscludeFn, i, ii, n;
                    var stableNodeList = [];
                    for (i = 0, ii = nodeList.length; i < ii; i++) {
                        stableNodeList.push(nodeList[i]);
                    }
                    for (i = 0, n = 0, ii = linkFns.length; i < ii; n++) {
                        node = stableNodeList[n];
                        nodeLinkFn = linkFns[i++];
                        childLinkFn = linkFns[i++];
                        if (nodeLinkFn) {
                            if (nodeLinkFn.scope) {
                                childScope = scope.$new(isObject(nodeLinkFn.scope));
                                jqLite(node).data("$scope", childScope);
                            } else {
                                childScope = scope;
                            }
                            childTranscludeFn = nodeLinkFn.transclude;
                            if (childTranscludeFn || !boundTranscludeFn && transcludeFn) {
                                nodeLinkFn(childLinkFn, childScope, node, $rootElement, function(transcludeFn) {
                                    return function(cloneFn) {
                                        var transcludeScope = scope.$new();
                                        return transcludeFn(transcludeScope, cloneFn).bind("$destroy", bind(transcludeScope, transcludeScope.$destroy));
                                    };
                                }(childTranscludeFn || transcludeFn));
                            } else {
                                nodeLinkFn(childLinkFn, childScope, node, undefined, boundTranscludeFn);
                            }
                        } else if (childLinkFn) {
                            childLinkFn(scope, node.childNodes, undefined, boundTranscludeFn);
                        }
                    }
                }
            }
            function collectDirectives(node, directives, attrs, maxPriority) {
                var nodeType = node.nodeType, attrsMap = attrs.$attr, match, className;
                switch (nodeType) {
                  case 1:
                    addDirective(directives, directiveNormalize(nodeName_(node).toLowerCase()), "E", maxPriority);
                    for (var attr, name, nName, value, nAttrs = node.attributes, j = 0, jj = nAttrs && nAttrs.length; j < jj; j++) {
                        attr = nAttrs[j];
                        if (attr.specified) {
                            name = attr.name;
                            nName = directiveNormalize(name.toLowerCase());
                            attrsMap[nName] = name;
                            attrs[nName] = value = trim(msie && name == "href" ? decodeURIComponent(node.getAttribute(name, 2)) : attr.value);
                            if (getBooleanAttrName(node, nName)) {
                                attrs[nName] = true;
                            }
                            addAttrInterpolateDirective(node, directives, value, nName);
                            addDirective(directives, nName, "A", maxPriority);
                        }
                    }
                    className = node.className;
                    if (isString(className) && className !== "") {
                        while (match = CLASS_DIRECTIVE_REGEXP.exec(className)) {
                            nName = directiveNormalize(match[2]);
                            if (addDirective(directives, nName, "C", maxPriority)) {
                                attrs[nName] = trim(match[3]);
                            }
                            className = className.substr(match.index + match[0].length);
                        }
                    }
                    break;

                  case 3:
                    addTextInterpolateDirective(directives, node.nodeValue);
                    break;

                  case 8:
                    try {
                        match = COMMENT_DIRECTIVE_REGEXP.exec(node.nodeValue);
                        if (match) {
                            nName = directiveNormalize(match[1]);
                            if (addDirective(directives, nName, "M", maxPriority)) {
                                attrs[nName] = trim(match[2]);
                            }
                        }
                    } catch (e) {}
                    break;
                }
                directives.sort(byPriority);
                return directives;
            }
            function applyDirectivesToNode(directives, compileNode, templateAttrs, transcludeFn, $rootElement) {
                var terminalPriority = -Number.MAX_VALUE, preLinkFns = [], postLinkFns = [], newScopeDirective = null, newIsolateScopeDirective = null, templateDirective = null, $compileNode = templateAttrs.$$element = jqLite(compileNode), directive, directiveName, $template, transcludeDirective, childTranscludeFn = transcludeFn, controllerDirectives, linkFn, directiveValue;
                for (var i = 0, ii = directives.length; i < ii; i++) {
                    directive = directives[i];
                    $template = undefined;
                    if (terminalPriority > directive.priority) {
                        break;
                    }
                    if (directiveValue = directive.scope) {
                        assertNoDuplicate("isolated scope", newIsolateScopeDirective, directive, $compileNode);
                        if (isObject(directiveValue)) {
                            safeAddClass($compileNode, "ng-isolate-scope");
                            newIsolateScopeDirective = directive;
                        }
                        safeAddClass($compileNode, "ng-scope");
                        newScopeDirective = newScopeDirective || directive;
                    }
                    directiveName = directive.name;
                    if (directiveValue = directive.controller) {
                        controllerDirectives = controllerDirectives || {};
                        assertNoDuplicate("'" + directiveName + "' controller", controllerDirectives[directiveName], directive, $compileNode);
                        controllerDirectives[directiveName] = directive;
                    }
                    if (directiveValue = directive.transclude) {
                        assertNoDuplicate("transclusion", transcludeDirective, directive, $compileNode);
                        transcludeDirective = directive;
                        terminalPriority = directive.priority;
                        if (directiveValue == "element") {
                            $template = jqLite(compileNode);
                            $compileNode = templateAttrs.$$element = jqLite(document.createComment(" " + directiveName + ": " + templateAttrs[directiveName] + " "));
                            compileNode = $compileNode[0];
                            replaceWith($rootElement, jqLite($template[0]), compileNode);
                            childTranscludeFn = compile($template, transcludeFn, terminalPriority);
                        } else {
                            $template = jqLite(JQLiteClone(compileNode)).contents();
                            $compileNode.html("");
                            childTranscludeFn = compile($template, transcludeFn);
                        }
                    }
                    if (directiveValue = directive.template) {
                        assertNoDuplicate("template", templateDirective, directive, $compileNode);
                        templateDirective = directive;
                        directiveValue = denormalizeTemplate(directiveValue);
                        if (directive.replace) {
                            $template = jqLite("<div>" + trim(directiveValue) + "</div>").contents();
                            compileNode = $template[0];
                            if ($template.length != 1 || compileNode.nodeType !== 1) {
                                throw new Error(MULTI_ROOT_TEMPLATE_ERROR + directiveValue);
                            }
                            replaceWith($rootElement, $compileNode, compileNode);
                            var newTemplateAttrs = {
                                $attr: {}
                            };
                            directives = directives.concat(collectDirectives(compileNode, directives.splice(i + 1, directives.length - (i + 1)), newTemplateAttrs));
                            mergeTemplateAttributes(templateAttrs, newTemplateAttrs);
                            ii = directives.length;
                        } else {
                            $compileNode.html(directiveValue);
                        }
                    }
                    if (directive.templateUrl) {
                        assertNoDuplicate("template", templateDirective, directive, $compileNode);
                        templateDirective = directive;
                        nodeLinkFn = compileTemplateUrl(directives.splice(i, directives.length - i), nodeLinkFn, $compileNode, templateAttrs, $rootElement, directive.replace, childTranscludeFn);
                        ii = directives.length;
                    } else if (directive.compile) {
                        try {
                            linkFn = directive.compile($compileNode, templateAttrs, childTranscludeFn);
                            if (isFunction(linkFn)) {
                                addLinkFns(null, linkFn);
                            } else if (linkFn) {
                                addLinkFns(linkFn.pre, linkFn.post);
                            }
                        } catch (e) {
                            $exceptionHandler(e, startingTag($compileNode));
                        }
                    }
                    if (directive.terminal) {
                        nodeLinkFn.terminal = true;
                        terminalPriority = Math.max(terminalPriority, directive.priority);
                    }
                }
                nodeLinkFn.scope = newScopeDirective && newScopeDirective.scope;
                nodeLinkFn.transclude = transcludeDirective && childTranscludeFn;
                return nodeLinkFn;
                function addLinkFns(pre, post) {
                    if (pre) {
                        pre.require = directive.require;
                        preLinkFns.push(pre);
                    }
                    if (post) {
                        post.require = directive.require;
                        postLinkFns.push(post);
                    }
                }
                function getControllers(require, $element) {
                    var value, retrievalMethod = "data", optional = false;
                    if (isString(require)) {
                        while ((value = require.charAt(0)) == "^" || value == "?") {
                            require = require.substr(1);
                            if (value == "^") {
                                retrievalMethod = "inheritedData";
                            }
                            optional = optional || value == "?";
                        }
                        value = $element[retrievalMethod]("$" + require + "Controller");
                        if (!value && !optional) {
                            throw Error("No controller: " + require);
                        }
                        return value;
                    } else if (isArray(require)) {
                        value = [];
                        forEach(require, function(require) {
                            value.push(getControllers(require, $element));
                        });
                    }
                    return value;
                }
                function nodeLinkFn(childLinkFn, scope, linkNode, $rootElement, boundTranscludeFn) {
                    var attrs, $element, i, ii, linkFn, controller;
                    if (compileNode === linkNode) {
                        attrs = templateAttrs;
                    } else {
                        attrs = shallowCopy(templateAttrs, new Attributes(jqLite(linkNode), templateAttrs.$attr));
                    }
                    $element = attrs.$$element;
                    if (newIsolateScopeDirective) {
                        var LOCAL_REGEXP = /^\s*([@=&])\s*(\w*)\s*$/;
                        var parentScope = scope.$parent || scope;
                        forEach(newIsolateScopeDirective.scope, function(definiton, scopeName) {
                            var match = definiton.match(LOCAL_REGEXP) || [], attrName = match[2] || scopeName, mode = match[1], lastValue, parentGet, parentSet;
                            switch (mode) {
                              case "@":
                                {
                                    attrs.$observe(attrName, function(value) {
                                        scope[scopeName] = value;
                                    });
                                    attrs.$$observers[attrName].$$scope = parentScope;
                                    break;
                                }

                              case "=":
                                {
                                    parentGet = $parse(attrs[attrName]);
                                    parentSet = parentGet.assign || function() {
                                        lastValue = scope[scopeName] = parentGet(parentScope);
                                        throw Error(NON_ASSIGNABLE_MODEL_EXPRESSION + attrs[attrName] + " (directive: " + newIsolateScopeDirective.name + ")");
                                    };
                                    lastValue = scope[scopeName] = parentGet(parentScope);
                                    scope.$watch(function parentValueWatch() {
                                        var parentValue = parentGet(parentScope);
                                        if (parentValue !== scope[scopeName]) {
                                            if (parentValue !== lastValue) {
                                                lastValue = scope[scopeName] = parentValue;
                                            } else {
                                                parentSet(parentScope, parentValue = lastValue = scope[scopeName]);
                                            }
                                        }
                                        return parentValue;
                                    });
                                    break;
                                }

                              case "&":
                                {
                                    parentGet = $parse(attrs[attrName]);
                                    scope[scopeName] = function(locals) {
                                        return parentGet(parentScope, locals);
                                    };
                                    break;
                                }

                              default:
                                {
                                    throw Error("Invalid isolate scope definition for directive " + newIsolateScopeDirective.name + ": " + definiton);
                                }
                            }
                        });
                    }
                    if (controllerDirectives) {
                        forEach(controllerDirectives, function(directive) {
                            var locals = {
                                $scope: scope,
                                $element: $element,
                                $attrs: attrs,
                                $transclude: boundTranscludeFn
                            };
                            controller = directive.controller;
                            if (controller == "@") {
                                controller = attrs[directive.name];
                            }
                            $element.data("$" + directive.name + "Controller", $controller(controller, locals));
                        });
                    }
                    for (i = 0, ii = preLinkFns.length; i < ii; i++) {
                        try {
                            linkFn = preLinkFns[i];
                            linkFn(scope, $element, attrs, linkFn.require && getControllers(linkFn.require, $element));
                        } catch (e) {
                            $exceptionHandler(e, startingTag($element));
                        }
                    }
                    childLinkFn && childLinkFn(scope, linkNode.childNodes, undefined, boundTranscludeFn);
                    for (i = 0, ii = postLinkFns.length; i < ii; i++) {
                        try {
                            linkFn = postLinkFns[i];
                            linkFn(scope, $element, attrs, linkFn.require && getControllers(linkFn.require, $element));
                        } catch (e) {
                            $exceptionHandler(e, startingTag($element));
                        }
                    }
                }
            }
            function addDirective(tDirectives, name, location, maxPriority) {
                var match = false;
                if (hasDirectives.hasOwnProperty(name)) {
                    for (var directive, directives = $injector.get(name + Suffix), i = 0, ii = directives.length; i < ii; i++) {
                        try {
                            directive = directives[i];
                            if ((maxPriority === undefined || maxPriority > directive.priority) && directive.restrict.indexOf(location) != -1) {
                                tDirectives.push(directive);
                                match = true;
                            }
                        } catch (e) {
                            $exceptionHandler(e);
                        }
                    }
                }
                return match;
            }
            function mergeTemplateAttributes(dst, src) {
                var srcAttr = src.$attr, dstAttr = dst.$attr, $element = dst.$$element;
                forEach(dst, function(value, key) {
                    if (key.charAt(0) != "$") {
                        if (src[key]) {
                            value += (key === "style" ? ";" : " ") + src[key];
                        }
                        dst.$set(key, value, true, srcAttr[key]);
                    }
                });
                forEach(src, function(value, key) {
                    if (key == "class") {
                        safeAddClass($element, value);
                        dst["class"] = (dst["class"] ? dst["class"] + " " : "") + value;
                    } else if (key == "style") {
                        $element.attr("style", $element.attr("style") + ";" + value);
                    } else if (key.charAt(0) != "$" && !dst.hasOwnProperty(key)) {
                        dst[key] = value;
                        dstAttr[key] = srcAttr[key];
                    }
                });
            }
            function compileTemplateUrl(directives, beforeTemplateNodeLinkFn, $compileNode, tAttrs, $rootElement, replace, childTranscludeFn) {
                var linkQueue = [], afterTemplateNodeLinkFn, afterTemplateChildLinkFn, beforeTemplateCompileNode = $compileNode[0], origAsyncDirective = directives.shift(), derivedSyncDirective = extend({}, origAsyncDirective, {
                    controller: null,
                    templateUrl: null,
                    transclude: null,
                    scope: null
                });
                $compileNode.html("");
                $http.get(origAsyncDirective.templateUrl, {
                    cache: $templateCache
                }).success(function(content) {
                    var compileNode, tempTemplateAttrs, $template;
                    content = denormalizeTemplate(content);
                    if (replace) {
                        $template = jqLite("<div>" + trim(content) + "</div>").contents();
                        compileNode = $template[0];
                        if ($template.length != 1 || compileNode.nodeType !== 1) {
                            throw new Error(MULTI_ROOT_TEMPLATE_ERROR + content);
                        }
                        tempTemplateAttrs = {
                            $attr: {}
                        };
                        replaceWith($rootElement, $compileNode, compileNode);
                        collectDirectives(compileNode, directives, tempTemplateAttrs);
                        mergeTemplateAttributes(tAttrs, tempTemplateAttrs);
                    } else {
                        compileNode = beforeTemplateCompileNode;
                        $compileNode.html(content);
                    }
                    directives.unshift(derivedSyncDirective);
                    afterTemplateNodeLinkFn = applyDirectivesToNode(directives, $compileNode, tAttrs, childTranscludeFn);
                    afterTemplateChildLinkFn = compileNodes($compileNode.contents(), childTranscludeFn);
                    while (linkQueue.length) {
                        var controller = linkQueue.pop(), linkRootElement = linkQueue.pop(), beforeTemplateLinkNode = linkQueue.pop(), scope = linkQueue.pop(), linkNode = compileNode;
                        if (beforeTemplateLinkNode !== beforeTemplateCompileNode) {
                            linkNode = JQLiteClone(compileNode);
                            replaceWith(linkRootElement, jqLite(beforeTemplateLinkNode), linkNode);
                        }
                        afterTemplateNodeLinkFn(function() {
                            beforeTemplateNodeLinkFn(afterTemplateChildLinkFn, scope, linkNode, $rootElement, controller);
                        }, scope, linkNode, $rootElement, controller);
                    }
                    linkQueue = null;
                }).error(function(response, code, headers, config) {
                    throw Error("Failed to load template: " + config.url);
                });
                return function delayedNodeLinkFn(ignoreChildLinkFn, scope, node, rootElement, controller) {
                    if (linkQueue) {
                        linkQueue.push(scope);
                        linkQueue.push(node);
                        linkQueue.push(rootElement);
                        linkQueue.push(controller);
                    } else {
                        afterTemplateNodeLinkFn(function() {
                            beforeTemplateNodeLinkFn(afterTemplateChildLinkFn, scope, node, rootElement, controller);
                        }, scope, node, rootElement, controller);
                    }
                };
            }
            function byPriority(a, b) {
                return b.priority - a.priority;
            }
            function assertNoDuplicate(what, previousDirective, directive, element) {
                if (previousDirective) {
                    throw Error("Multiple directives [" + previousDirective.name + ", " + directive.name + "] asking for " + what + " on: " + startingTag(element));
                }
            }
            function addTextInterpolateDirective(directives, text) {
                var interpolateFn = $interpolate(text, true);
                if (interpolateFn) {
                    directives.push({
                        priority: 0,
                        compile: valueFn(function textInterpolateLinkFn(scope, node) {
                            var parent = node.parent(), bindings = parent.data("$binding") || [];
                            bindings.push(interpolateFn);
                            safeAddClass(parent.data("$binding", bindings), "ng-binding");
                            scope.$watch(interpolateFn, function interpolateFnWatchAction(value) {
                                node[0].nodeValue = value;
                            });
                        })
                    });
                }
            }
            function addAttrInterpolateDirective(node, directives, value, name) {
                var interpolateFn = $interpolate(value, true);
                if (!interpolateFn) return;
                directives.push({
                    priority: 100,
                    compile: valueFn(function attrInterpolateLinkFn(scope, element, attr) {
                        var $$observers = attr.$$observers || (attr.$$observers = {});
                        if (name === "class") {
                            interpolateFn = $interpolate(attr[name], true);
                        }
                        attr[name] = undefined;
                        ($$observers[name] || ($$observers[name] = [])).$$inter = true;
                        (attr.$$observers && attr.$$observers[name].$$scope || scope).$watch(interpolateFn, function interpolateFnWatchAction(value) {
                            attr.$set(name, value);
                        });
                    })
                });
            }
            function replaceWith($rootElement, $element, newNode) {
                var oldNode = $element[0], parent = oldNode.parentNode, i, ii;
                if ($rootElement) {
                    for (i = 0, ii = $rootElement.length; i < ii; i++) {
                        if ($rootElement[i] == oldNode) {
                            $rootElement[i] = newNode;
                            break;
                        }
                    }
                }
                if (parent) {
                    parent.replaceChild(newNode, oldNode);
                }
                newNode[jqLite.expando] = oldNode[jqLite.expando];
                $element[0] = newNode;
            }
        } ];
    }
    var PREFIX_REGEXP = /^(x[\:\-_]|data[\:\-_])/i;
    function directiveNormalize(name) {
        return camelCase(name.replace(PREFIX_REGEXP, ""));
    }
    function nodesetLinkingFn(scope, nodeList, rootElement, boundTranscludeFn) {}
    function directiveLinkingFn(nodesetLinkingFn, scope, node, rootElement, boundTranscludeFn) {}
    function $ControllerProvider() {
        var controllers = {};
        this.register = function(name, constructor) {
            if (isObject(name)) {
                extend(controllers, name);
            } else {
                controllers[name] = constructor;
            }
        };
        this.$get = [ "$injector", "$window", function($injector, $window) {
            return function(constructor, locals) {
                if (isString(constructor)) {
                    var name = constructor;
                    constructor = controllers.hasOwnProperty(name) ? controllers[name] : getter(locals.$scope, name, true) || getter($window, name, true);
                    assertArgFn(constructor, name, true);
                }
                return $injector.instantiate(constructor, locals);
            };
        } ];
    }
    function $DocumentProvider() {
        this.$get = [ "$window", function(window) {
            return jqLite(window.document);
        } ];
    }
    function $ExceptionHandlerProvider() {
        this.$get = [ "$log", function($log) {
            return function(exception, cause) {
                $log.error.apply($log, arguments);
            };
        } ];
    }
    function $InterpolateProvider() {
        var startSymbol = "{{";
        var endSymbol = "}}";
        this.startSymbol = function(value) {
            if (value) {
                startSymbol = value;
                return this;
            } else {
                return startSymbol;
            }
        };
        this.endSymbol = function(value) {
            if (value) {
                endSymbol = value;
                return this;
            } else {
                return endSymbol;
            }
        };
        this.$get = [ "$parse", function($parse) {
            var startSymbolLength = startSymbol.length, endSymbolLength = endSymbol.length;
            function $interpolate(text, mustHaveExpression) {
                var startIndex, endIndex, index = 0, parts = [], length = text.length, hasInterpolation = false, fn, exp, concat = [];
                while (index < length) {
                    if ((startIndex = text.indexOf(startSymbol, index)) != -1 && (endIndex = text.indexOf(endSymbol, startIndex + startSymbolLength)) != -1) {
                        index != startIndex && parts.push(text.substring(index, startIndex));
                        parts.push(fn = $parse(exp = text.substring(startIndex + startSymbolLength, endIndex)));
                        fn.exp = exp;
                        index = endIndex + endSymbolLength;
                        hasInterpolation = true;
                    } else {
                        index != length && parts.push(text.substring(index));
                        index = length;
                    }
                }
                if (!(length = parts.length)) {
                    parts.push("");
                    length = 1;
                }
                if (!mustHaveExpression || hasInterpolation) {
                    concat.length = length;
                    fn = function(context) {
                        for (var i = 0, ii = length, part; i < ii; i++) {
                            if (typeof (part = parts[i]) == "function") {
                                part = part(context);
                                if (part == null || part == undefined) {
                                    part = "";
                                } else if (typeof part != "string") {
                                    part = toJson(part);
                                }
                            }
                            concat[i] = part;
                        }
                        return concat.join("");
                    };
                    fn.exp = text;
                    fn.parts = parts;
                    return fn;
                }
            }
            $interpolate.startSymbol = function() {
                return startSymbol;
            };
            $interpolate.endSymbol = function() {
                return endSymbol;
            };
            return $interpolate;
        } ];
    }
    var URL_MATCH = /^([^:]+):\/\/(\w+:{0,1}\w*@)?([\w\.-]*)(:([0-9]+))?(\/[^\?#]*)?(\?([^#]*))?(#(.*))?$/, PATH_MATCH = /^([^\?#]*)?(\?([^#]*))?(#(.*))?$/, HASH_MATCH = PATH_MATCH, DEFAULT_PORTS = {
        http: 80,
        https: 443,
        ftp: 21
    };
    function encodePath(path) {
        var segments = path.split("/"), i = segments.length;
        while (i--) {
            segments[i] = encodeUriSegment(segments[i]);
        }
        return segments.join("/");
    }
    function stripHash(url) {
        return url.split("#")[0];
    }
    function matchUrl(url, obj) {
        var match = URL_MATCH.exec(url);
        match = {
            protocol: match[1],
            host: match[3],
            port: int(match[5]) || DEFAULT_PORTS[match[1]] || null,
            path: match[6] || "/",
            search: match[8],
            hash: match[10]
        };
        if (obj) {
            obj.$$protocol = match.protocol;
            obj.$$host = match.host;
            obj.$$port = match.port;
        }
        return match;
    }
    function composeProtocolHostPort(protocol, host, port) {
        return protocol + "://" + host + (port == DEFAULT_PORTS[protocol] ? "" : ":" + port);
    }
    function pathPrefixFromBase(basePath) {
        return basePath.substr(0, basePath.lastIndexOf("/"));
    }
    function convertToHtml5Url(url, basePath, hashPrefix) {
        var match = matchUrl(url);
        if (decodeURIComponent(match.path) != basePath || isUndefined(match.hash) || match.hash.indexOf(hashPrefix) !== 0) {
            return url;
        } else {
            return composeProtocolHostPort(match.protocol, match.host, match.port) + pathPrefixFromBase(basePath) + match.hash.substr(hashPrefix.length);
        }
    }
    function convertToHashbangUrl(url, basePath, hashPrefix) {
        var match = matchUrl(url);
        if (decodeURIComponent(match.path) == basePath) {
            return url;
        } else {
            var search = match.search && "?" + match.search || "", hash = match.hash && "#" + match.hash || "", pathPrefix = pathPrefixFromBase(basePath), path = match.path.substr(pathPrefix.length);
            if (match.path.indexOf(pathPrefix) !== 0) {
                throw Error('Invalid url "' + url + '", missing path prefix "' + pathPrefix + '" !');
            }
            return composeProtocolHostPort(match.protocol, match.host, match.port) + basePath + "#" + hashPrefix + path + search + hash;
        }
    }
    function LocationUrl(url, pathPrefix, appBaseUrl) {
        pathPrefix = pathPrefix || "";
        this.$$parse = function(newAbsoluteUrl) {
            var match = matchUrl(newAbsoluteUrl, this);
            if (match.path.indexOf(pathPrefix) !== 0) {
                throw Error('Invalid url "' + newAbsoluteUrl + '", missing path prefix "' + pathPrefix + '" !');
            }
            this.$$path = decodeURIComponent(match.path.substr(pathPrefix.length));
            this.$$search = parseKeyValue(match.search);
            this.$$hash = match.hash && decodeURIComponent(match.hash) || "";
            this.$$compose();
        };
        this.$$compose = function() {
            var search = toKeyValue(this.$$search), hash = this.$$hash ? "#" + encodeUriSegment(this.$$hash) : "";
            this.$$url = encodePath(this.$$path) + (search ? "?" + search : "") + hash;
            this.$$absUrl = composeProtocolHostPort(this.$$protocol, this.$$host, this.$$port) + pathPrefix + this.$$url;
        };
        this.$$rewriteAppUrl = function(absoluteLinkUrl) {
            if (absoluteLinkUrl.indexOf(appBaseUrl) == 0) {
                return absoluteLinkUrl;
            }
        };
        this.$$parse(url);
    }
    function LocationHashbangUrl(url, hashPrefix, appBaseUrl) {
        var basePath;
        this.$$parse = function(url) {
            var match = matchUrl(url, this);
            if (match.hash && match.hash.indexOf(hashPrefix) !== 0) {
                throw Error('Invalid url "' + url + '", missing hash prefix "' + hashPrefix + '" !');
            }
            basePath = match.path + (match.search ? "?" + match.search : "");
            match = HASH_MATCH.exec((match.hash || "").substr(hashPrefix.length));
            if (match[1]) {
                this.$$path = (match[1].charAt(0) == "/" ? "" : "/") + decodeURIComponent(match[1]);
            } else {
                this.$$path = "";
            }
            this.$$search = parseKeyValue(match[3]);
            this.$$hash = match[5] && decodeURIComponent(match[5]) || "";
            this.$$compose();
        };
        this.$$compose = function() {
            var search = toKeyValue(this.$$search), hash = this.$$hash ? "#" + encodeUriSegment(this.$$hash) : "";
            this.$$url = encodePath(this.$$path) + (search ? "?" + search : "") + hash;
            this.$$absUrl = composeProtocolHostPort(this.$$protocol, this.$$host, this.$$port) + basePath + (this.$$url ? "#" + hashPrefix + this.$$url : "");
        };
        this.$$rewriteAppUrl = function(absoluteLinkUrl) {
            if (absoluteLinkUrl.indexOf(appBaseUrl) == 0) {
                return absoluteLinkUrl;
            }
        };
        this.$$parse(url);
    }
    LocationUrl.prototype = {
        $$replace: false,
        absUrl: locationGetter("$$absUrl"),
        url: function(url, replace) {
            if (isUndefined(url)) return this.$$url;
            var match = PATH_MATCH.exec(url);
            if (match[1]) this.path(decodeURIComponent(match[1]));
            if (match[2] || match[1]) this.search(match[3] || "");
            this.hash(match[5] || "", replace);
            return this;
        },
        protocol: locationGetter("$$protocol"),
        host: locationGetter("$$host"),
        port: locationGetter("$$port"),
        path: locationGetterSetter("$$path", function(path) {
            return path.charAt(0) == "/" ? path : "/" + path;
        }),
        search: function(search, paramValue) {
            if (isUndefined(search)) return this.$$search;
            if (isDefined(paramValue)) {
                if (paramValue === null) {
                    delete this.$$search[search];
                } else {
                    this.$$search[search] = paramValue;
                }
            } else {
                this.$$search = isString(search) ? parseKeyValue(search) : search;
            }
            this.$$compose();
            return this;
        },
        hash: locationGetterSetter("$$hash", identity),
        replace: function() {
            this.$$replace = true;
            return this;
        }
    };
    LocationHashbangUrl.prototype = inherit(LocationUrl.prototype);
    function LocationHashbangInHtml5Url(url, hashPrefix, appBaseUrl, baseExtra) {
        LocationHashbangUrl.apply(this, arguments);
        this.$$rewriteAppUrl = function(absoluteLinkUrl) {
            if (absoluteLinkUrl.indexOf(appBaseUrl) == 0) {
                return appBaseUrl + baseExtra + "#" + hashPrefix + absoluteLinkUrl.substr(appBaseUrl.length);
            }
        };
    }
    LocationHashbangInHtml5Url.prototype = inherit(LocationHashbangUrl.prototype);
    function locationGetter(property) {
        return function() {
            return this[property];
        };
    }
    function locationGetterSetter(property, preprocess) {
        return function(value) {
            if (isUndefined(value)) return this[property];
            this[property] = preprocess(value);
            this.$$compose();
            return this;
        };
    }
    function $LocationProvider() {
        var hashPrefix = "", html5Mode = false;
        this.hashPrefix = function(prefix) {
            if (isDefined(prefix)) {
                hashPrefix = prefix;
                return this;
            } else {
                return hashPrefix;
            }
        };
        this.html5Mode = function(mode) {
            if (isDefined(mode)) {
                html5Mode = mode;
                return this;
            } else {
                return html5Mode;
            }
        };
        this.$get = [ "$rootScope", "$browser", "$sniffer", "$rootElement", function($rootScope, $browser, $sniffer, $rootElement) {
            var $location, basePath, pathPrefix, initUrl = $browser.url(), initUrlParts = matchUrl(initUrl), appBaseUrl;
            if (html5Mode) {
                basePath = $browser.baseHref() || "/";
                pathPrefix = pathPrefixFromBase(basePath);
                appBaseUrl = composeProtocolHostPort(initUrlParts.protocol, initUrlParts.host, initUrlParts.port) + pathPrefix + "/";
                if ($sniffer.history) {
                    $location = new LocationUrl(convertToHtml5Url(initUrl, basePath, hashPrefix), pathPrefix, appBaseUrl);
                } else {
                    $location = new LocationHashbangInHtml5Url(convertToHashbangUrl(initUrl, basePath, hashPrefix), hashPrefix, appBaseUrl, basePath.substr(pathPrefix.length + 1));
                }
            } else {
                appBaseUrl = composeProtocolHostPort(initUrlParts.protocol, initUrlParts.host, initUrlParts.port) + (initUrlParts.path || "") + (initUrlParts.search ? "?" + initUrlParts.search : "") + "#" + hashPrefix + "/";
                $location = new LocationHashbangUrl(initUrl, hashPrefix, appBaseUrl);
            }
            $rootElement.bind("click", function(event) {
                if (event.ctrlKey || event.metaKey || event.which == 2) return;
                var elm = jqLite(event.target);
                while (lowercase(elm[0].nodeName) !== "a") {
                    if (elm[0] === $rootElement[0] || !(elm = elm.parent())[0]) return;
                }
                var absHref = elm.prop("href"), rewrittenUrl = $location.$$rewriteAppUrl(absHref);
                if (absHref && !elm.attr("target") && rewrittenUrl) {
                    $location.$$parse(rewrittenUrl);
                    $rootScope.$apply();
                    event.preventDefault();
                    window.angular["ff-684208-preventDefault"] = true;
                }
            });
            if ($location.absUrl() != initUrl) {
                $browser.url($location.absUrl(), true);
            }
            $browser.onUrlChange(function(newUrl) {
                if ($location.absUrl() != newUrl) {
                    $rootScope.$evalAsync(function() {
                        var oldUrl = $location.absUrl();
                        $location.$$parse(newUrl);
                        afterLocationChange(oldUrl);
                    });
                    if (!$rootScope.$$phase) $rootScope.$digest();
                }
            });
            var changeCounter = 0;
            $rootScope.$watch(function $locationWatch() {
                var oldUrl = $browser.url();
                var currentReplace = $location.$$replace;
                if (!changeCounter || oldUrl != $location.absUrl()) {
                    changeCounter++;
                    $rootScope.$evalAsync(function() {
                        if ($rootScope.$broadcast("$locationChangeStart", $location.absUrl(), oldUrl).defaultPrevented) {
                            $location.$$parse(oldUrl);
                        } else {
                            $browser.url($location.absUrl(), currentReplace);
                            afterLocationChange(oldUrl);
                        }
                    });
                }
                $location.$$replace = false;
                return changeCounter;
            });
            return $location;
            function afterLocationChange(oldUrl) {
                $rootScope.$broadcast("$locationChangeSuccess", $location.absUrl(), oldUrl);
            }
        } ];
    }
    function $LogProvider() {
        this.$get = [ "$window", function($window) {
            return {
                log: consoleLog("log"),
                warn: consoleLog("warn"),
                info: consoleLog("info"),
                error: consoleLog("error")
            };
            function formatError(arg) {
                if (arg instanceof Error) {
                    if (arg.stack) {
                        arg = arg.message && arg.stack.indexOf(arg.message) === -1 ? "Error: " + arg.message + "\n" + arg.stack : arg.stack;
                    } else if (arg.sourceURL) {
                        arg = arg.message + "\n" + arg.sourceURL + ":" + arg.line;
                    }
                }
                return arg;
            }
            function consoleLog(type) {
                var console = $window.console || {}, logFn = console[type] || console.log || noop;
                if (logFn.apply) {
                    return function() {
                        var args = [];
                        forEach(arguments, function(arg) {
                            args.push(formatError(arg));
                        });
                        return logFn.apply(console, args);
                    };
                }
                return function(arg1, arg2) {
                    logFn(arg1, arg2);
                };
            }
        } ];
    }
    var OPERATORS = {
        "null": function() {
            return null;
        },
        "true": function() {
            return true;
        },
        "false": function() {
            return false;
        },
        undefined: noop,
        "+": function(self, locals, a, b) {
            a = a(self, locals);
            b = b(self, locals);
            if (isDefined(a)) {
                if (isDefined(b)) {
                    return a + b;
                }
                return a;
            }
            return isDefined(b) ? b : undefined;
        },
        "-": function(self, locals, a, b) {
            a = a(self, locals);
            b = b(self, locals);
            return (isDefined(a) ? a : 0) - (isDefined(b) ? b : 0);
        },
        "*": function(self, locals, a, b) {
            return a(self, locals) * b(self, locals);
        },
        "/": function(self, locals, a, b) {
            return a(self, locals) / b(self, locals);
        },
        "%": function(self, locals, a, b) {
            return a(self, locals) % b(self, locals);
        },
        "^": function(self, locals, a, b) {
            return a(self, locals) ^ b(self, locals);
        },
        "=": noop,
        "==": function(self, locals, a, b) {
            return a(self, locals) == b(self, locals);
        },
        "!=": function(self, locals, a, b) {
            return a(self, locals) != b(self, locals);
        },
        "<": function(self, locals, a, b) {
            return a(self, locals) < b(self, locals);
        },
        ">": function(self, locals, a, b) {
            return a(self, locals) > b(self, locals);
        },
        "<=": function(self, locals, a, b) {
            return a(self, locals) <= b(self, locals);
        },
        ">=": function(self, locals, a, b) {
            return a(self, locals) >= b(self, locals);
        },
        "&&": function(self, locals, a, b) {
            return a(self, locals) && b(self, locals);
        },
        "||": function(self, locals, a, b) {
            return a(self, locals) || b(self, locals);
        },
        "&": function(self, locals, a, b) {
            return a(self, locals) & b(self, locals);
        },
        "|": function(self, locals, a, b) {
            return b(self, locals)(self, locals, a(self, locals));
        },
        "!": function(self, locals, a) {
            return !a(self, locals);
        }
    };
    var ESCAPE = {
        n: "\n",
        f: "\f",
        r: "\r",
        t: "	",
        v: "",
        "'": "'",
        '"': '"'
    };
    function lex(text, csp) {
        var tokens = [], token, index = 0, json = [], ch, lastCh = ":";
        while (index < text.length) {
            ch = text.charAt(index);
            if (is("\"'")) {
                readString(ch);
            } else if (isNumber(ch) || is(".") && isNumber(peek())) {
                readNumber();
            } else if (isIdent(ch)) {
                readIdent();
                if (was("{,") && json[0] == "{" && (token = tokens[tokens.length - 1])) {
                    token.json = token.text.indexOf(".") == -1;
                }
            } else if (is("(){}[].,;:")) {
                tokens.push({
                    index: index,
                    text: ch,
                    json: was(":[,") && is("{[") || is("}]:,")
                });
                if (is("{[")) json.unshift(ch);
                if (is("}]")) json.shift();
                index++;
            } else if (isWhitespace(ch)) {
                index++;
                continue;
            } else {
                var ch2 = ch + peek(), fn = OPERATORS[ch], fn2 = OPERATORS[ch2];
                if (fn2) {
                    tokens.push({
                        index: index,
                        text: ch2,
                        fn: fn2
                    });
                    index += 2;
                } else if (fn) {
                    tokens.push({
                        index: index,
                        text: ch,
                        fn: fn,
                        json: was("[,:") && is("+-")
                    });
                    index += 1;
                } else {
                    throwError("Unexpected next character ", index, index + 1);
                }
            }
            lastCh = ch;
        }
        return tokens;
        function is(chars) {
            return chars.indexOf(ch) != -1;
        }
        function was(chars) {
            return chars.indexOf(lastCh) != -1;
        }
        function peek() {
            return index + 1 < text.length ? text.charAt(index + 1) : false;
        }
        function isNumber(ch) {
            return "0" <= ch && ch <= "9";
        }
        function isWhitespace(ch) {
            return ch == " " || ch == "\r" || ch == "	" || ch == "\n" || ch == "" || ch == " ";
        }
        function isIdent(ch) {
            return "a" <= ch && ch <= "z" || "A" <= ch && ch <= "Z" || "_" == ch || ch == "$";
        }
        function isExpOperator(ch) {
            return ch == "-" || ch == "+" || isNumber(ch);
        }
        function throwError(error, start, end) {
            end = end || index;
            throw Error("Lexer Error: " + error + " at column" + (isDefined(start) ? "s " + start + "-" + index + " [" + text.substring(start, end) + "]" : " " + end) + " in expression [" + text + "].");
        }
        function readNumber() {
            var number = "";
            var start = index;
            while (index < text.length) {
                var ch = lowercase(text.charAt(index));
                if (ch == "." || isNumber(ch)) {
                    number += ch;
                } else {
                    var peekCh = peek();
                    if (ch == "e" && isExpOperator(peekCh)) {
                        number += ch;
                    } else if (isExpOperator(ch) && peekCh && isNumber(peekCh) && number.charAt(number.length - 1) == "e") {
                        number += ch;
                    } else if (isExpOperator(ch) && (!peekCh || !isNumber(peekCh)) && number.charAt(number.length - 1) == "e") {
                        throwError("Invalid exponent");
                    } else {
                        break;
                    }
                }
                index++;
            }
            number = 1 * number;
            tokens.push({
                index: start,
                text: number,
                json: true,
                fn: function() {
                    return number;
                }
            });
        }
        function readIdent() {
            var ident = "", start = index, lastDot, peekIndex, methodName;
            while (index < text.length) {
                var ch = text.charAt(index);
                if (ch == "." || isIdent(ch) || isNumber(ch)) {
                    if (ch == ".") lastDot = index;
                    ident += ch;
                } else {
                    break;
                }
                index++;
            }
            if (lastDot) {
                peekIndex = index;
                while (peekIndex < text.length) {
                    var ch = text.charAt(peekIndex);
                    if (ch == "(") {
                        methodName = ident.substr(lastDot - start + 1);
                        ident = ident.substr(0, lastDot - start);
                        index = peekIndex;
                        break;
                    }
                    if (isWhitespace(ch)) {
                        peekIndex++;
                    } else {
                        break;
                    }
                }
            }
            var token = {
                index: start,
                text: ident
            };
            if (OPERATORS.hasOwnProperty(ident)) {
                token.fn = token.json = OPERATORS[ident];
            } else {
                var getter = getterFn(ident, csp);
                token.fn = extend(function(self, locals) {
                    return getter(self, locals);
                }, {
                    assign: function(self, value) {
                        return setter(self, ident, value);
                    }
                });
            }
            tokens.push(token);
            if (methodName) {
                tokens.push({
                    index: lastDot,
                    text: ".",
                    json: false
                });
                tokens.push({
                    index: lastDot + 1,
                    text: methodName,
                    json: false
                });
            }
        }
        function readString(quote) {
            var start = index;
            index++;
            var string = "";
            var rawString = quote;
            var escape = false;
            while (index < text.length) {
                var ch = text.charAt(index);
                rawString += ch;
                if (escape) {
                    if (ch == "u") {
                        var hex = text.substring(index + 1, index + 5);
                        if (!hex.match(/[\da-f]{4}/i)) throwError("Invalid unicode escape [\\u" + hex + "]");
                        index += 4;
                        string += String.fromCharCode(parseInt(hex, 16));
                    } else {
                        var rep = ESCAPE[ch];
                        if (rep) {
                            string += rep;
                        } else {
                            string += ch;
                        }
                    }
                    escape = false;
                } else if (ch == "\\") {
                    escape = true;
                } else if (ch == quote) {
                    index++;
                    tokens.push({
                        index: start,
                        text: rawString,
                        string: string,
                        json: true,
                        fn: function() {
                            return string;
                        }
                    });
                    return;
                } else {
                    string += ch;
                }
                index++;
            }
            throwError("Unterminated quote", start);
        }
    }
    function parser(text, json, $filter, csp) {
        var ZERO = valueFn(0), value, tokens = lex(text, csp), assignment = _assignment, functionCall = _functionCall, fieldAccess = _fieldAccess, objectIndex = _objectIndex, filterChain = _filterChain;
        if (json) {
            assignment = logicalOR;
            functionCall = fieldAccess = objectIndex = filterChain = function() {
                throwError("is not valid json", {
                    text: text,
                    index: 0
                });
            };
            value = primary();
        } else {
            value = statements();
        }
        if (tokens.length !== 0) {
            throwError("is an unexpected token", tokens[0]);
        }
        return value;
        function throwError(msg, token) {
            throw Error("Syntax Error: Token '" + token.text + "' " + msg + " at column " + (token.index + 1) + " of the expression [" + text + "] starting at [" + text.substring(token.index) + "].");
        }
        function peekToken() {
            if (tokens.length === 0) throw Error("Unexpected end of expression: " + text);
            return tokens[0];
        }
        function peek(e1, e2, e3, e4) {
            if (tokens.length > 0) {
                var token = tokens[0];
                var t = token.text;
                if (t == e1 || t == e2 || t == e3 || t == e4 || !e1 && !e2 && !e3 && !e4) {
                    return token;
                }
            }
            return false;
        }
        function expect(e1, e2, e3, e4) {
            var token = peek(e1, e2, e3, e4);
            if (token) {
                if (json && !token.json) {
                    throwError("is not valid json", token);
                }
                tokens.shift();
                return token;
            }
            return false;
        }
        function consume(e1) {
            if (!expect(e1)) {
                throwError("is unexpected, expecting [" + e1 + "]", peek());
            }
        }
        function unaryFn(fn, right) {
            return function(self, locals) {
                return fn(self, locals, right);
            };
        }
        function binaryFn(left, fn, right) {
            return function(self, locals) {
                return fn(self, locals, left, right);
            };
        }
        function statements() {
            var statements = [];
            while (true) {
                if (tokens.length > 0 && !peek("}", ")", ";", "]")) statements.push(filterChain());
                if (!expect(";")) {
                    return statements.length == 1 ? statements[0] : function(self, locals) {
                        var value;
                        for (var i = 0; i < statements.length; i++) {
                            var statement = statements[i];
                            if (statement) value = statement(self, locals);
                        }
                        return value;
                    };
                }
            }
        }
        function _filterChain() {
            var left = expression();
            var token;
            while (true) {
                if (token = expect("|")) {
                    left = binaryFn(left, token.fn, filter());
                } else {
                    return left;
                }
            }
        }
        function filter() {
            var token = expect();
            var fn = $filter(token.text);
            var argsFn = [];
            while (true) {
                if (token = expect(":")) {
                    argsFn.push(expression());
                } else {
                    var fnInvoke = function(self, locals, input) {
                        var args = [ input ];
                        for (var i = 0; i < argsFn.length; i++) {
                            args.push(argsFn[i](self, locals));
                        }
                        return fn.apply(self, args);
                    };
                    return function() {
                        return fnInvoke;
                    };
                }
            }
        }
        function expression() {
            return assignment();
        }
        function _assignment() {
            var left = logicalOR();
            var right;
            var token;
            if (token = expect("=")) {
                if (!left.assign) {
                    throwError("implies assignment but [" + text.substring(0, token.index) + "] can not be assigned to", token);
                }
                right = logicalOR();
                return function(self, locals) {
                    return left.assign(self, right(self, locals), locals);
                };
            } else {
                return left;
            }
        }
        function logicalOR() {
            var left = logicalAND();
            var token;
            while (true) {
                if (token = expect("||")) {
                    left = binaryFn(left, token.fn, logicalAND());
                } else {
                    return left;
                }
            }
        }
        function logicalAND() {
            var left = equality();
            var token;
            if (token = expect("&&")) {
                left = binaryFn(left, token.fn, logicalAND());
            }
            return left;
        }
        function equality() {
            var left = relational();
            var token;
            if (token = expect("==", "!=")) {
                left = binaryFn(left, token.fn, equality());
            }
            return left;
        }
        function relational() {
            var left = additive();
            var token;
            if (token = expect("<", ">", "<=", ">=")) {
                left = binaryFn(left, token.fn, relational());
            }
            return left;
        }
        function additive() {
            var left = multiplicative();
            var token;
            while (token = expect("+", "-")) {
                left = binaryFn(left, token.fn, multiplicative());
            }
            return left;
        }
        function multiplicative() {
            var left = unary();
            var token;
            while (token = expect("*", "/", "%")) {
                left = binaryFn(left, token.fn, unary());
            }
            return left;
        }
        function unary() {
            var token;
            if (expect("+")) {
                return primary();
            } else if (token = expect("-")) {
                return binaryFn(ZERO, token.fn, unary());
            } else if (token = expect("!")) {
                return unaryFn(token.fn, unary());
            } else {
                return primary();
            }
        }
        function primary() {
            var primary;
            if (expect("(")) {
                primary = filterChain();
                consume(")");
            } else if (expect("[")) {
                primary = arrayDeclaration();
            } else if (expect("{")) {
                primary = object();
            } else {
                var token = expect();
                primary = token.fn;
                if (!primary) {
                    throwError("not a primary expression", token);
                }
            }
            var next, context;
            while (next = expect("(", "[", ".")) {
                if (next.text === "(") {
                    primary = functionCall(primary, context);
                    context = null;
                } else if (next.text === "[") {
                    context = primary;
                    primary = objectIndex(primary);
                } else if (next.text === ".") {
                    context = primary;
                    primary = fieldAccess(primary);
                } else {
                    throwError("IMPOSSIBLE");
                }
            }
            return primary;
        }
        function _fieldAccess(object) {
            var field = expect().text;
            var getter = getterFn(field, csp);
            return extend(function(self, locals) {
                return getter(object(self, locals), locals);
            }, {
                assign: function(self, value, locals) {
                    return setter(object(self, locals), field, value);
                }
            });
        }
        function _objectIndex(obj) {
            var indexFn = expression();
            consume("]");
            return extend(function(self, locals) {
                var o = obj(self, locals), i = indexFn(self, locals), v, p;
                if (!o) return undefined;
                v = o[i];
                if (v && v.then) {
                    p = v;
                    if (!("$$v" in v)) {
                        p.$$v = undefined;
                        p.then(function(val) {
                            p.$$v = val;
                        });
                    }
                    v = v.$$v;
                }
                return v;
            }, {
                assign: function(self, value, locals) {
                    return obj(self, locals)[indexFn(self, locals)] = value;
                }
            });
        }
        function _functionCall(fn, contextGetter) {
            var argsFn = [];
            if (peekToken().text != ")") {
                do {
                    argsFn.push(expression());
                } while (expect(","));
            }
            consume(")");
            return function(self, locals) {
                var args = [], context = contextGetter ? contextGetter(self, locals) : self;
                for (var i = 0; i < argsFn.length; i++) {
                    args.push(argsFn[i](self, locals));
                }
                var fnPtr = fn(self, locals) || noop;
                return fnPtr.apply ? fnPtr.apply(context, args) : fnPtr(args[0], args[1], args[2], args[3], args[4]);
            };
        }
        function arrayDeclaration() {
            var elementFns = [];
            if (peekToken().text != "]") {
                do {
                    elementFns.push(expression());
                } while (expect(","));
            }
            consume("]");
            return function(self, locals) {
                var array = [];
                for (var i = 0; i < elementFns.length; i++) {
                    array.push(elementFns[i](self, locals));
                }
                return array;
            };
        }
        function object() {
            var keyValues = [];
            if (peekToken().text != "}") {
                do {
                    var token = expect(), key = token.string || token.text;
                    consume(":");
                    var value = expression();
                    keyValues.push({
                        key: key,
                        value: value
                    });
                } while (expect(","));
            }
            consume("}");
            return function(self, locals) {
                var object = {};
                for (var i = 0; i < keyValues.length; i++) {
                    var keyValue = keyValues[i];
                    var value = keyValue.value(self, locals);
                    object[keyValue.key] = value;
                }
                return object;
            };
        }
    }
    function setter(obj, path, setValue) {
        var element = path.split(".");
        for (var i = 0; element.length > 1; i++) {
            var key = element.shift();
            var propertyObj = obj[key];
            if (!propertyObj) {
                propertyObj = {};
                obj[key] = propertyObj;
            }
            obj = propertyObj;
        }
        obj[element.shift()] = setValue;
        return setValue;
    }
    function getter(obj, path, bindFnToScope) {
        if (!path) return obj;
        var keys = path.split(".");
        var key;
        var lastInstance = obj;
        var len = keys.length;
        for (var i = 0; i < len; i++) {
            key = keys[i];
            if (obj) {
                obj = (lastInstance = obj)[key];
            }
        }
        if (!bindFnToScope && isFunction(obj)) {
            return bind(lastInstance, obj);
        }
        return obj;
    }
    var getterFnCache = {};
    function cspSafeGetterFn(key0, key1, key2, key3, key4) {
        return function(scope, locals) {
            var pathVal = locals && locals.hasOwnProperty(key0) ? locals : scope, promise;
            if (pathVal === null || pathVal === undefined) return pathVal;
            pathVal = pathVal[key0];
            if (pathVal && pathVal.then) {
                if (!("$$v" in pathVal)) {
                    promise = pathVal;
                    promise.$$v = undefined;
                    promise.then(function(val) {
                        promise.$$v = val;
                    });
                }
                pathVal = pathVal.$$v;
            }
            if (!key1 || pathVal === null || pathVal === undefined) return pathVal;
            pathVal = pathVal[key1];
            if (pathVal && pathVal.then) {
                if (!("$$v" in pathVal)) {
                    promise = pathVal;
                    promise.$$v = undefined;
                    promise.then(function(val) {
                        promise.$$v = val;
                    });
                }
                pathVal = pathVal.$$v;
            }
            if (!key2 || pathVal === null || pathVal === undefined) return pathVal;
            pathVal = pathVal[key2];
            if (pathVal && pathVal.then) {
                if (!("$$v" in pathVal)) {
                    promise = pathVal;
                    promise.$$v = undefined;
                    promise.then(function(val) {
                        promise.$$v = val;
                    });
                }
                pathVal = pathVal.$$v;
            }
            if (!key3 || pathVal === null || pathVal === undefined) return pathVal;
            pathVal = pathVal[key3];
            if (pathVal && pathVal.then) {
                if (!("$$v" in pathVal)) {
                    promise = pathVal;
                    promise.$$v = undefined;
                    promise.then(function(val) {
                        promise.$$v = val;
                    });
                }
                pathVal = pathVal.$$v;
            }
            if (!key4 || pathVal === null || pathVal === undefined) return pathVal;
            pathVal = pathVal[key4];
            if (pathVal && pathVal.then) {
                if (!("$$v" in pathVal)) {
                    promise = pathVal;
                    promise.$$v = undefined;
                    promise.then(function(val) {
                        promise.$$v = val;
                    });
                }
                pathVal = pathVal.$$v;
            }
            return pathVal;
        };
    }
    function getterFn(path, csp) {
        if (getterFnCache.hasOwnProperty(path)) {
            return getterFnCache[path];
        }
        var pathKeys = path.split("."), pathKeysLength = pathKeys.length, fn;
        if (csp) {
            fn = pathKeysLength < 6 ? cspSafeGetterFn(pathKeys[0], pathKeys[1], pathKeys[2], pathKeys[3], pathKeys[4]) : function(scope, locals) {
                var i = 0, val;
                do {
                    val = cspSafeGetterFn(pathKeys[i++], pathKeys[i++], pathKeys[i++], pathKeys[i++], pathKeys[i++])(scope, locals);
                    locals = undefined;
                    scope = val;
                } while (i < pathKeysLength);
                return val;
            };
        } else {
            var code = "var l, fn, p;\n";
            forEach(pathKeys, function(key, index) {
                code += "if(s === null || s === undefined) return s;\n" + "l=s;\n" + "s=" + (index ? "s" : '((k&&k.hasOwnProperty("' + key + '"))?k:s)') + '["' + key + '"]' + ";\n" + "if (s && s.then) {\n" + ' if (!("$$v" in s)) {\n' + " p=s;\n" + " p.$$v = undefined;\n" + " p.then(function(v) {p.$$v=v;});\n" + "}\n" + " s=s.$$v\n" + "}\n";
            });
            code += "return s;";
            fn = Function("s", "k", code);
            fn.toString = function() {
                return code;
            };
        }
        return getterFnCache[path] = fn;
    }
    function $ParseProvider() {
        var cache = {};
        this.$get = [ "$filter", "$sniffer", function($filter, $sniffer) {
            return function(exp) {
                switch (typeof exp) {
                  case "string":
                    return cache.hasOwnProperty(exp) ? cache[exp] : cache[exp] = parser(exp, false, $filter, $sniffer.csp);

                  case "function":
                    return exp;

                  default:
                    return noop;
                }
            };
        } ];
    }
    function $QProvider() {
        this.$get = [ "$rootScope", "$exceptionHandler", function($rootScope, $exceptionHandler) {
            return qFactory(function(callback) {
                $rootScope.$evalAsync(callback);
            }, $exceptionHandler);
        } ];
    }
    function qFactory(nextTick, exceptionHandler) {
        var defer = function() {
            var pending = [], value, deferred;
            deferred = {
                resolve: function(val) {
                    if (pending) {
                        var callbacks = pending;
                        pending = undefined;
                        value = ref(val);
                        if (callbacks.length) {
                            nextTick(function() {
                                var callback;
                                for (var i = 0, ii = callbacks.length; i < ii; i++) {
                                    callback = callbacks[i];
                                    value.then(callback[0], callback[1]);
                                }
                            });
                        }
                    }
                },
                reject: function(reason) {
                    deferred.resolve(reject(reason));
                },
                promise: {
                    then: function(callback, errback) {
                        var result = defer();
                        var wrappedCallback = function(value) {
                            try {
                                result.resolve((callback || defaultCallback)(value));
                            } catch (e) {
                                exceptionHandler(e);
                                result.reject(e);
                            }
                        };
                        var wrappedErrback = function(reason) {
                            try {
                                result.resolve((errback || defaultErrback)(reason));
                            } catch (e) {
                                exceptionHandler(e);
                                result.reject(e);
                            }
                        };
                        if (pending) {
                            pending.push([ wrappedCallback, wrappedErrback ]);
                        } else {
                            value.then(wrappedCallback, wrappedErrback);
                        }
                        return result.promise;
                    }
                }
            };
            return deferred;
        };
        var ref = function(value) {
            if (value && value.then) return value;
            return {
                then: function(callback) {
                    var result = defer();
                    nextTick(function() {
                        result.resolve(callback(value));
                    });
                    return result.promise;
                }
            };
        };
        var reject = function(reason) {
            return {
                then: function(callback, errback) {
                    var result = defer();
                    nextTick(function() {
                        result.resolve((errback || defaultErrback)(reason));
                    });
                    return result.promise;
                }
            };
        };
        var when = function(value, callback, errback) {
            var result = defer(), done;
            var wrappedCallback = function(value) {
                try {
                    return (callback || defaultCallback)(value);
                } catch (e) {
                    exceptionHandler(e);
                    return reject(e);
                }
            };
            var wrappedErrback = function(reason) {
                try {
                    return (errback || defaultErrback)(reason);
                } catch (e) {
                    exceptionHandler(e);
                    return reject(e);
                }
            };
            nextTick(function() {
                ref(value).then(function(value) {
                    if (done) return;
                    done = true;
                    result.resolve(ref(value).then(wrappedCallback, wrappedErrback));
                }, function(reason) {
                    if (done) return;
                    done = true;
                    result.resolve(wrappedErrback(reason));
                });
            });
            return result.promise;
        };
        function defaultCallback(value) {
            return value;
        }
        function defaultErrback(reason) {
            return reject(reason);
        }
        function all(promises) {
            var deferred = defer(), counter = promises.length, results = [];
            if (counter) {
                forEach(promises, function(promise, index) {
                    ref(promise).then(function(value) {
                        if (index in results) return;
                        results[index] = value;
                        if (!--counter) deferred.resolve(results);
                    }, function(reason) {
                        if (index in results) return;
                        deferred.reject(reason);
                    });
                });
            } else {
                deferred.resolve(results);
            }
            return deferred.promise;
        }
        return {
            defer: defer,
            reject: reject,
            when: when,
            all: all
        };
    }
    function $RouteProvider() {
        var routes = {};
        this.when = function(path, route) {
            routes[path] = extend({
                reloadOnSearch: true
            }, route);
            if (path) {
                var redirectPath = path[path.length - 1] == "/" ? path.substr(0, path.length - 1) : path + "/";
                routes[redirectPath] = {
                    redirectTo: path
                };
            }
            return this;
        };
        this.otherwise = function(params) {
            this.when(null, params);
            return this;
        };
        this.$get = [ "$rootScope", "$location", "$routeParams", "$q", "$injector", "$http", "$templateCache", function($rootScope, $location, $routeParams, $q, $injector, $http, $templateCache) {
            var forceReload = false, $route = {
                routes: routes,
                reload: function() {
                    forceReload = true;
                    $rootScope.$evalAsync(updateRoute);
                }
            };
            $rootScope.$on("$locationChangeSuccess", updateRoute);
            return $route;
            function switchRouteMatcher(on, when) {
                when = "^" + when.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") + "$";
                var regex = "", params = [], dst = {};
                var re = /:(\w+)/g, paramMatch, lastMatchedIndex = 0;
                while ((paramMatch = re.exec(when)) !== null) {
                    regex += when.slice(lastMatchedIndex, paramMatch.index);
                    regex += "([^\\/]*)";
                    params.push(paramMatch[1]);
                    lastMatchedIndex = re.lastIndex;
                }
                regex += when.substr(lastMatchedIndex);
                var match = on.match(new RegExp(regex));
                if (match) {
                    forEach(params, function(name, index) {
                        dst[name] = match[index + 1];
                    });
                }
                return match ? dst : null;
            }
            function updateRoute() {
                var next = parseRoute(), last = $route.current;
                if (next && last && next.$route === last.$route && equals(next.pathParams, last.pathParams) && !next.reloadOnSearch && !forceReload) {
                    last.params = next.params;
                    copy(last.params, $routeParams);
                    $rootScope.$broadcast("$routeUpdate", last);
                } else if (next || last) {
                    forceReload = false;
                    $rootScope.$broadcast("$routeChangeStart", next, last);
                    $route.current = next;
                    if (next) {
                        if (next.redirectTo) {
                            if (isString(next.redirectTo)) {
                                $location.path(interpolate(next.redirectTo, next.params)).search(next.params).replace();
                            } else {
                                $location.url(next.redirectTo(next.pathParams, $location.path(), $location.search())).replace();
                            }
                        }
                    }
                    $q.when(next).then(function() {
                        if (next) {
                            var keys = [], values = [], template;
                            forEach(next.resolve || {}, function(value, key) {
                                keys.push(key);
                                values.push(isString(value) ? $injector.get(value) : $injector.invoke(value));
                            });
                            if (isDefined(template = next.template)) {} else if (isDefined(template = next.templateUrl)) {
                                template = $http.get(template, {
                                    cache: $templateCache
                                }).then(function(response) {
                                    return response.data;
                                });
                            }
                            if (isDefined(template)) {
                                keys.push("$template");
                                values.push(template);
                            }
                            return $q.all(values).then(function(values) {
                                var locals = {};
                                forEach(values, function(value, index) {
                                    locals[keys[index]] = value;
                                });
                                return locals;
                            });
                        }
                    }).then(function(locals) {
                        if (next == $route.current) {
                            if (next) {
                                next.locals = locals;
                                copy(next.params, $routeParams);
                            }
                            $rootScope.$broadcast("$routeChangeSuccess", next, last);
                        }
                    }, function(error) {
                        if (next == $route.current) {
                            $rootScope.$broadcast("$routeChangeError", next, last, error);
                        }
                    });
                }
            }
            function parseRoute() {
                var params, match;
                forEach(routes, function(route, path) {
                    if (!match && (params = switchRouteMatcher($location.path(), path))) {
                        match = inherit(route, {
                            params: extend({}, $location.search(), params),
                            pathParams: params
                        });
                        match.$route = route;
                    }
                });
                return match || routes[null] && inherit(routes[null], {
                    params: {},
                    pathParams: {}
                });
            }
            function interpolate(string, params) {
                var result = [];
                forEach((string || "").split(":"), function(segment, i) {
                    if (i == 0) {
                        result.push(segment);
                    } else {
                        var segmentMatch = segment.match(/(\w+)(.*)/);
                        var key = segmentMatch[1];
                        result.push(params[key]);
                        result.push(segmentMatch[2] || "");
                        delete params[key];
                    }
                });
                return result.join("");
            }
        } ];
    }
    function $RouteParamsProvider() {
        this.$get = valueFn({});
    }
    function $RootScopeProvider() {
        var TTL = 10;
        this.digestTtl = function(value) {
            if (arguments.length) {
                TTL = value;
            }
            return TTL;
        };
        this.$get = [ "$injector", "$exceptionHandler", "$parse", function($injector, $exceptionHandler, $parse) {
            function Scope() {
                this.$id = nextUid();
                this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
                this["this"] = this.$root = this;
                this.$$destroyed = false;
                this.$$asyncQueue = [];
                this.$$listeners = {};
            }
            Scope.prototype = {
                $new: function(isolate) {
                    var Child, child;
                    if (isFunction(isolate)) {
                        throw Error("API-CHANGE: Use $controller to instantiate controllers.");
                    }
                    if (isolate) {
                        child = new Scope();
                        child.$root = this.$root;
                    } else {
                        Child = function() {};
                        Child.prototype = this;
                        child = new Child();
                        child.$id = nextUid();
                    }
                    child["this"] = child;
                    child.$$listeners = {};
                    child.$parent = this;
                    child.$$asyncQueue = [];
                    child.$$watchers = child.$$nextSibling = child.$$childHead = child.$$childTail = null;
                    child.$$prevSibling = this.$$childTail;
                    if (this.$$childHead) {
                        this.$$childTail.$$nextSibling = child;
                        this.$$childTail = child;
                    } else {
                        this.$$childHead = this.$$childTail = child;
                    }
                    return child;
                },
                $watch: function(watchExp, listener, objectEquality) {
                    var scope = this, get = compileToFn(watchExp, "watch"), array = scope.$$watchers, watcher = {
                        fn: listener,
                        last: initWatchVal,
                        get: get,
                        exp: watchExp,
                        eq: !!objectEquality
                    };
                    if (!isFunction(listener)) {
                        var listenFn = compileToFn(listener || noop, "listener");
                        watcher.fn = function(newVal, oldVal, scope) {
                            listenFn(scope);
                        };
                    }
                    if (!array) {
                        array = scope.$$watchers = [];
                    }
                    array.unshift(watcher);
                    return function() {
                        arrayRemove(array, watcher);
                    };
                },
                $digest: function() {
                    var watch, value, last, watchers, asyncQueue, length, dirty, ttl = TTL, next, current, target = this, watchLog = [], logIdx, logMsg;
                    beginPhase("$digest");
                    do {
                        dirty = false;
                        current = target;
                        do {
                            asyncQueue = current.$$asyncQueue;
                            while (asyncQueue.length) {
                                try {
                                    current.$eval(asyncQueue.shift());
                                } catch (e) {
                                    $exceptionHandler(e);
                                }
                            }
                            if (watchers = current.$$watchers) {
                                length = watchers.length;
                                while (length--) {
                                    try {
                                        watch = watchers[length];
                                        if ((value = watch.get(current)) !== (last = watch.last) && !(watch.eq ? equals(value, last) : typeof value == "number" && typeof last == "number" && isNaN(value) && isNaN(last))) {
                                            dirty = true;
                                            watch.last = watch.eq ? copy(value) : value;
                                            watch.fn(value, last === initWatchVal ? value : last, current);
                                            if (ttl < 5) {
                                                logIdx = 4 - ttl;
                                                if (!watchLog[logIdx]) watchLog[logIdx] = [];
                                                logMsg = isFunction(watch.exp) ? "fn: " + (watch.exp.name || watch.exp.toString()) : watch.exp;
                                                logMsg += "; newVal: " + toJson(value) + "; oldVal: " + toJson(last);
                                                watchLog[logIdx].push(logMsg);
                                            }
                                        }
                                    } catch (e) {
                                        $exceptionHandler(e);
                                    }
                                }
                            }
                            if (!(next = current.$$childHead || current !== target && current.$$nextSibling)) {
                                while (current !== target && !(next = current.$$nextSibling)) {
                                    current = current.$parent;
                                }
                            }
                        } while (current = next);
                        if (dirty && !ttl--) {
                            clearPhase();
                            throw Error(TTL + " $digest() iterations reached. Aborting!\n" + "Watchers fired in the last 5 iterations: " + toJson(watchLog));
                        }
                    } while (dirty || asyncQueue.length);
                    clearPhase();
                },
                $destroy: function() {
                    if ($rootScope == this || this.$$destroyed) return;
                    var parent = this.$parent;
                    this.$broadcast("$destroy");
                    this.$$destroyed = true;
                    if (parent.$$childHead == this) parent.$$childHead = this.$$nextSibling;
                    if (parent.$$childTail == this) parent.$$childTail = this.$$prevSibling;
                    if (this.$$prevSibling) this.$$prevSibling.$$nextSibling = this.$$nextSibling;
                    if (this.$$nextSibling) this.$$nextSibling.$$prevSibling = this.$$prevSibling;
                    this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
                },
                $eval: function(expr, locals) {
                    return $parse(expr)(this, locals);
                },
                $evalAsync: function(expr) {
                    this.$$asyncQueue.push(expr);
                },
                $apply: function(expr) {
                    try {
                        beginPhase("$apply");
                        return this.$eval(expr);
                    } catch (e) {
                        $exceptionHandler(e);
                    } finally {
                        clearPhase();
                        try {
                            $rootScope.$digest();
                        } catch (e) {
                            $exceptionHandler(e);
                            throw e;
                        }
                    }
                },
                $on: function(name, listener) {
                    var namedListeners = this.$$listeners[name];
                    if (!namedListeners) {
                        this.$$listeners[name] = namedListeners = [];
                    }
                    namedListeners.push(listener);
                    return function() {
                        namedListeners[indexOf(namedListeners, listener)] = null;
                    };
                },
                $emit: function(name, args) {
                    var empty = [], namedListeners, scope = this, stopPropagation = false, event = {
                        name: name,
                        targetScope: scope,
                        stopPropagation: function() {
                            stopPropagation = true;
                        },
                        preventDefault: function() {
                            event.defaultPrevented = true;
                        },
                        defaultPrevented: false
                    }, listenerArgs = concat([ event ], arguments, 1), i, length;
                    do {
                        namedListeners = scope.$$listeners[name] || empty;
                        event.currentScope = scope;
                        for (i = 0, length = namedListeners.length; i < length; i++) {
                            if (!namedListeners[i]) {
                                namedListeners.splice(i, 1);
                                i--;
                                length--;
                                continue;
                            }
                            try {
                                namedListeners[i].apply(null, listenerArgs);
                                if (stopPropagation) return event;
                            } catch (e) {
                                $exceptionHandler(e);
                            }
                        }
                        scope = scope.$parent;
                    } while (scope);
                    return event;
                },
                $broadcast: function(name, args) {
                    var target = this, current = target, next = target, event = {
                        name: name,
                        targetScope: target,
                        preventDefault: function() {
                            event.defaultPrevented = true;
                        },
                        defaultPrevented: false
                    }, listenerArgs = concat([ event ], arguments, 1), listeners, i, length;
                    do {
                        current = next;
                        event.currentScope = current;
                        listeners = current.$$listeners[name] || [];
                        for (i = 0, length = listeners.length; i < length; i++) {
                            if (!listeners[i]) {
                                listeners.splice(i, 1);
                                i--;
                                length--;
                                continue;
                            }
                            try {
                                listeners[i].apply(null, listenerArgs);
                            } catch (e) {
                                $exceptionHandler(e);
                            }
                        }
                        if (!(next = current.$$childHead || current !== target && current.$$nextSibling)) {
                            while (current !== target && !(next = current.$$nextSibling)) {
                                current = current.$parent;
                            }
                        }
                    } while (current = next);
                    return event;
                }
            };
            var $rootScope = new Scope();
            return $rootScope;
            function beginPhase(phase) {
                if ($rootScope.$$phase) {
                    throw Error($rootScope.$$phase + " already in progress");
                }
                $rootScope.$$phase = phase;
            }
            function clearPhase() {
                $rootScope.$$phase = null;
            }
            function compileToFn(exp, name) {
                var fn = $parse(exp);
                assertArgFn(fn, name);
                return fn;
            }
            function initWatchVal() {}
        } ];
    }
    function $SnifferProvider() {
        this.$get = [ "$window", function($window) {
            var eventSupport = {}, android = int((/android (\d+)/.exec(lowercase($window.navigator.userAgent)) || [])[1]);
            return {
                history: !!($window.history && $window.history.pushState && !(android < 4)),
                hashchange: "onhashchange" in $window && (!$window.document.documentMode || $window.document.documentMode > 7),
                hasEvent: function(event) {
                    if (event == "input" && msie == 9) return false;
                    if (isUndefined(eventSupport[event])) {
                        var divElm = $window.document.createElement("div");
                        eventSupport[event] = "on" + event in divElm;
                    }
                    return eventSupport[event];
                },
                csp: false
            };
        } ];
    }
    function $WindowProvider() {
        this.$get = valueFn(window);
    }
    function parseHeaders(headers) {
        var parsed = {}, key, val, i;
        if (!headers) return parsed;
        forEach(headers.split("\n"), function(line) {
            i = line.indexOf(":");
            key = lowercase(trim(line.substr(0, i)));
            val = trim(line.substr(i + 1));
            if (key) {
                if (parsed[key]) {
                    parsed[key] += ", " + val;
                } else {
                    parsed[key] = val;
                }
            }
        });
        return parsed;
    }
    function headersGetter(headers) {
        var headersObj = isObject(headers) ? headers : undefined;
        return function(name) {
            if (!headersObj) headersObj = parseHeaders(headers);
            if (name) {
                return headersObj[lowercase(name)] || null;
            }
            return headersObj;
        };
    }
    function transformData(data, headers, fns) {
        if (isFunction(fns)) return fns(data, headers);
        forEach(fns, function(fn) {
            data = fn(data, headers);
        });
        return data;
    }
    function isSuccess(status) {
        return 200 <= status && status < 300;
    }
    function $HttpProvider() {
        var JSON_START = /^\s*(\[|\{[^\{])/, JSON_END = /[\}\]]\s*$/, PROTECTION_PREFIX = /^\)\]\}',?\n/;
        var $config = this.defaults = {
            transformResponse: [ function(data) {
                if (isString(data)) {
                    data = data.replace(PROTECTION_PREFIX, "");
                    if (JSON_START.test(data) && JSON_END.test(data)) data = fromJson(data, true);
                }
                return data;
            } ],
            transformRequest: [ function(d) {
                return isObject(d) && !isFile(d) ? toJson(d) : d;
            } ],
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*",
                    "X-Requested-With": "XMLHttpRequest"
                },
                post: {
                    "Content-Type": "application/json;charset=utf-8"
                },
                put: {
                    "Content-Type": "application/json;charset=utf-8"
                }
            }
        };
        var providerResponseInterceptors = this.responseInterceptors = [];
        this.$get = [ "$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function($httpBackend, $browser, $cacheFactory, $rootScope, $q, $injector) {
            var defaultCache = $cacheFactory("$http"), responseInterceptors = [];
            forEach(providerResponseInterceptors, function(interceptor) {
                responseInterceptors.push(isString(interceptor) ? $injector.get(interceptor) : $injector.invoke(interceptor));
            });
            function $http(config) {
                config.method = uppercase(config.method);
                var reqTransformFn = config.transformRequest || $config.transformRequest, respTransformFn = config.transformResponse || $config.transformResponse, defHeaders = $config.headers, reqHeaders = extend({
                    "X-XSRF-TOKEN": $browser.cookies()["XSRF-TOKEN"]
                }, defHeaders.common, defHeaders[lowercase(config.method)], config.headers), reqData = transformData(config.data, headersGetter(reqHeaders), reqTransformFn), promise;
                if (isUndefined(config.data)) {
                    delete reqHeaders["Content-Type"];
                }
                promise = sendReq(config, reqData, reqHeaders);
                promise = promise.then(transformResponse, transformResponse);
                forEach(responseInterceptors, function(interceptor) {
                    promise = interceptor(promise);
                });
                promise.success = function(fn) {
                    promise.then(function(response) {
                        fn(response.data, response.status, response.headers, config);
                    });
                    return promise;
                };
                promise.error = function(fn) {
                    promise.then(null, function(response) {
                        fn(response.data, response.status, response.headers, config);
                    });
                    return promise;
                };
                return promise;
                function transformResponse(response) {
                    var resp = extend({}, response, {
                        data: transformData(response.data, response.headers, respTransformFn)
                    });
                    return isSuccess(response.status) ? resp : $q.reject(resp);
                }
            }
            $http.pendingRequests = [];
            createShortMethods("get", "delete", "head", "jsonp");
            createShortMethodsWithData("post", "put");
            $http.defaults = $config;
            return $http;
            function createShortMethods(names) {
                forEach(arguments, function(name) {
                    $http[name] = function(url, config) {
                        return $http(extend(config || {}, {
                            method: name,
                            url: url
                        }));
                    };
                });
            }
            function createShortMethodsWithData(name) {
                forEach(arguments, function(name) {
                    $http[name] = function(url, data, config) {
                        return $http(extend(config || {}, {
                            method: name,
                            url: url,
                            data: data
                        }));
                    };
                });
            }
            function sendReq(config, reqData, reqHeaders) {
                var deferred = $q.defer(), promise = deferred.promise, cache, cachedResp, url = buildUrl(config.url, config.params);
                $http.pendingRequests.push(config);
                promise.then(removePendingReq, removePendingReq);
                if (config.cache && config.method == "GET") {
                    cache = isObject(config.cache) ? config.cache : defaultCache;
                }
                if (cache) {
                    cachedResp = cache.get(url);
                    if (cachedResp) {
                        if (cachedResp.then) {
                            cachedResp.then(removePendingReq, removePendingReq);
                            return cachedResp;
                        } else {
                            if (isArray(cachedResp)) {
                                resolvePromise(cachedResp[1], cachedResp[0], copy(cachedResp[2]));
                            } else {
                                resolvePromise(cachedResp, 200, {});
                            }
                        }
                    } else {
                        cache.put(url, promise);
                    }
                }
                if (!cachedResp) {
                    $httpBackend(config.method, url, reqData, done, reqHeaders, config.timeout, config.withCredentials);
                }
                return promise;
                function done(status, response, headersString) {
                    if (cache) {
                        if (isSuccess(status)) {
                            cache.put(url, [ status, response, parseHeaders(headersString) ]);
                        } else {
                            cache.remove(url);
                        }
                    }
                    resolvePromise(response, status, headersString);
                    $rootScope.$apply();
                }
                function resolvePromise(response, status, headers) {
                    status = Math.max(status, 0);
                    (isSuccess(status) ? deferred.resolve : deferred.reject)({
                        data: response,
                        status: status,
                        headers: headersGetter(headers),
                        config: config
                    });
                }
                function removePendingReq() {
                    var idx = indexOf($http.pendingRequests, config);
                    if (idx !== -1) $http.pendingRequests.splice(idx, 1);
                }
            }
            function buildUrl(url, params) {
                if (!params) return url;
                var parts = [];
                forEachSorted(params, function(value, key) {
                    if (value == null || value == undefined) return;
                    if (isObject(value)) {
                        value = toJson(value);
                    }
                    parts.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
                });
                return url + (url.indexOf("?") == -1 ? "?" : "&") + parts.join("&");
            }
        } ];
    }
    var XHR = window.XMLHttpRequest || function() {
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.6.0");
        } catch (e1) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.3.0");
        } catch (e2) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e3) {}
        throw new Error("This browser does not support XMLHttpRequest.");
    };
    function $HttpBackendProvider() {
        this.$get = [ "$browser", "$window", "$document", function($browser, $window, $document) {
            return createHttpBackend($browser, XHR, $browser.defer, $window.angular.callbacks, $document[0], $window.location.protocol.replace(":", ""));
        } ];
    }
    function createHttpBackend($browser, XHR, $browserDefer, callbacks, rawDocument, locationProtocol) {
        return function(method, url, post, callback, headers, timeout, withCredentials) {
            $browser.$$incOutstandingRequestCount();
            url = url || $browser.url();
            if (lowercase(method) == "jsonp") {
                var callbackId = "_" + (callbacks.counter++).toString(36);
                callbacks[callbackId] = function(data) {
                    callbacks[callbackId].data = data;
                };
                jsonpReq(url.replace("JSON_CALLBACK", "angular.callbacks." + callbackId), function() {
                    if (callbacks[callbackId].data) {
                        completeRequest(callback, 200, callbacks[callbackId].data);
                    } else {
                        completeRequest(callback, -2);
                    }
                    delete callbacks[callbackId];
                });
            } else {
                var xhr = new XHR();
                xhr.open(method, url, true);
                forEach(headers, function(value, key) {
                    if (value) xhr.setRequestHeader(key, value);
                });
                var status;
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4) {
                        completeRequest(callback, status || xhr.status, xhr.responseText, xhr.getAllResponseHeaders());
                    }
                };
                if (withCredentials) {
                    xhr.withCredentials = true;
                }
                xhr.send(post || "");
                if (timeout > 0) {
                    $browserDefer(function() {
                        status = -1;
                        xhr.abort();
                    }, timeout);
                }
            }
            function completeRequest(callback, status, response, headersString) {
                var protocol = (url.match(URL_MATCH) || [ "", locationProtocol ])[1];
                status = protocol == "file" ? response ? 200 : 404 : status;
                status = status == 1223 ? 204 : status;
                callback(status, response, headersString);
                $browser.$$completeOutstandingRequest(noop);
            }
        };
        function jsonpReq(url, done) {
            var script = rawDocument.createElement("script"), doneWrapper = function() {
                rawDocument.body.removeChild(script);
                if (done) done();
            };
            script.type = "text/javascript";
            script.src = url;
            if (msie) {
                script.onreadystatechange = function() {
                    if (/loaded|complete/.test(script.readyState)) doneWrapper();
                };
            } else {
                script.onload = script.onerror = doneWrapper;
            }
            rawDocument.body.appendChild(script);
        }
    }
    function $LocaleProvider() {
        this.$get = function() {
            return {
                id: "en-us",
                NUMBER_FORMATS: {
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [ {
                        minInt: 1,
                        minFrac: 0,
                        maxFrac: 3,
                        posPre: "",
                        posSuf: "",
                        negPre: "-",
                        negSuf: "",
                        gSize: 3,
                        lgSize: 3
                    }, {
                        minInt: 1,
                        minFrac: 2,
                        maxFrac: 2,
                        posPre: "¤",
                        posSuf: "",
                        negPre: "(¤",
                        negSuf: ")",
                        gSize: 3,
                        lgSize: 3
                    } ],
                    CURRENCY_SYM: "$"
                },
                DATETIME_FORMATS: {
                    MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
                    SHORTMONTH: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
                    DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
                    SHORTDAY: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
                    AMPMS: [ "AM", "PM" ],
                    medium: "MMM d, y h:mm:ss a",
                    "short": "M/d/yy h:mm a",
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    mediumDate: "MMM d, y",
                    shortDate: "M/d/yy",
                    mediumTime: "h:mm:ss a",
                    shortTime: "h:mm a"
                },
                pluralCat: function(num) {
                    if (num === 1) {
                        return "one";
                    }
                    return "other";
                }
            };
        };
    }
    function $TimeoutProvider() {
        this.$get = [ "$rootScope", "$browser", "$q", "$exceptionHandler", function($rootScope, $browser, $q, $exceptionHandler) {
            var deferreds = {};
            function timeout(fn, delay, invokeApply) {
                var deferred = $q.defer(), promise = deferred.promise, skipApply = isDefined(invokeApply) && !invokeApply, timeoutId, cleanup;
                timeoutId = $browser.defer(function() {
                    try {
                        deferred.resolve(fn());
                    } catch (e) {
                        deferred.reject(e);
                        $exceptionHandler(e);
                    }
                    if (!skipApply) $rootScope.$apply();
                }, delay);
                cleanup = function() {
                    delete deferreds[promise.$$timeoutId];
                };
                promise.$$timeoutId = timeoutId;
                deferreds[timeoutId] = deferred;
                promise.then(cleanup, cleanup);
                return promise;
            }
            timeout.cancel = function(promise) {
                if (promise && promise.$$timeoutId in deferreds) {
                    deferreds[promise.$$timeoutId].reject("canceled");
                    return $browser.defer.cancel(promise.$$timeoutId);
                }
                return false;
            };
            return timeout;
        } ];
    }
    $FilterProvider.$inject = [ "$provide" ];
    function $FilterProvider($provide) {
        var suffix = "Filter";
        function register(name, factory) {
            return $provide.factory(name + suffix, factory);
        }
        this.register = register;
        this.$get = [ "$injector", function($injector) {
            return function(name) {
                return $injector.get(name + suffix);
            };
        } ];
        register("currency", currencyFilter);
        register("date", dateFilter);
        register("filter", filterFilter);
        register("json", jsonFilter);
        register("limitTo", limitToFilter);
        register("lowercase", lowercaseFilter);
        register("number", numberFilter);
        register("orderBy", orderByFilter);
        register("uppercase", uppercaseFilter);
    }
    function filterFilter() {
        return function(array, expression) {
            if (!(array instanceof Array)) return array;
            var predicates = [];
            predicates.check = function(value) {
                for (var j = 0; j < predicates.length; j++) {
                    if (!predicates[j](value)) {
                        return false;
                    }
                }
                return true;
            };
            var search = function(obj, text) {
                if (text.charAt(0) === "!") {
                    return !search(obj, text.substr(1));
                }
                switch (typeof obj) {
                  case "boolean":
                  case "number":
                  case "string":
                    return ("" + obj).toLowerCase().indexOf(text) > -1;

                  case "object":
                    for (var objKey in obj) {
                        if (objKey.charAt(0) !== "$" && search(obj[objKey], text)) {
                            return true;
                        }
                    }
                    return false;

                  case "array":
                    for (var i = 0; i < obj.length; i++) {
                        if (search(obj[i], text)) {
                            return true;
                        }
                    }
                    return false;

                  default:
                    return false;
                }
            };
            switch (typeof expression) {
              case "boolean":
              case "number":
              case "string":
                expression = {
                    $: expression
                };

              case "object":
                for (var key in expression) {
                    if (key == "$") {
                        (function() {
                            var text = ("" + expression[key]).toLowerCase();
                            if (!text) return;
                            predicates.push(function(value) {
                                return search(value, text);
                            });
                        })();
                    } else {
                        (function() {
                            var path = key;
                            var text = ("" + expression[key]).toLowerCase();
                            if (!text) return;
                            predicates.push(function(value) {
                                return search(getter(value, path), text);
                            });
                        })();
                    }
                }
                break;

              case "function":
                predicates.push(expression);
                break;

              default:
                return array;
            }
            var filtered = [];
            for (var j = 0; j < array.length; j++) {
                var value = array[j];
                if (predicates.check(value)) {
                    filtered.push(value);
                }
            }
            return filtered;
        };
    }
    currencyFilter.$inject = [ "$locale" ];
    function currencyFilter($locale) {
        var formats = $locale.NUMBER_FORMATS;
        return function(amount, currencySymbol) {
            if (isUndefined(currencySymbol)) currencySymbol = formats.CURRENCY_SYM;
            return formatNumber(amount, formats.PATTERNS[1], formats.GROUP_SEP, formats.DECIMAL_SEP, 2).replace(/\u00A4/g, currencySymbol);
        };
    }
    numberFilter.$inject = [ "$locale" ];
    function numberFilter($locale) {
        var formats = $locale.NUMBER_FORMATS;
        return function(number, fractionSize) {
            return formatNumber(number, formats.PATTERNS[0], formats.GROUP_SEP, formats.DECIMAL_SEP, fractionSize);
        };
    }
    var DECIMAL_SEP = ".";
    function formatNumber(number, pattern, groupSep, decimalSep, fractionSize) {
        if (isNaN(number) || !isFinite(number)) return "";
        var isNegative = number < 0;
        number = Math.abs(number);
        var numStr = number + "", formatedText = "", parts = [];
        var hasExponent = false;
        if (numStr.indexOf("e") !== -1) {
            var match = numStr.match(/([\d\.]+)e(-?)(\d+)/);
            if (match && match[2] == "-" && match[3] > fractionSize + 1) {
                numStr = "0";
            } else {
                formatedText = numStr;
                hasExponent = true;
            }
        }
        if (!hasExponent) {
            var fractionLen = (numStr.split(DECIMAL_SEP)[1] || "").length;
            if (isUndefined(fractionSize)) {
                fractionSize = Math.min(Math.max(pattern.minFrac, fractionLen), pattern.maxFrac);
            }
            var pow = Math.pow(10, fractionSize);
            number = Math.round(number * pow) / pow;
            var fraction = ("" + number).split(DECIMAL_SEP);
            var whole = fraction[0];
            fraction = fraction[1] || "";
            var pos = 0, lgroup = pattern.lgSize, group = pattern.gSize;
            if (whole.length >= lgroup + group) {
                pos = whole.length - lgroup;
                for (var i = 0; i < pos; i++) {
                    if ((pos - i) % group === 0 && i !== 0) {
                        formatedText += groupSep;
                    }
                    formatedText += whole.charAt(i);
                }
            }
            for (i = pos; i < whole.length; i++) {
                if ((whole.length - i) % lgroup === 0 && i !== 0) {
                    formatedText += groupSep;
                }
                formatedText += whole.charAt(i);
            }
            while (fraction.length < fractionSize) {
                fraction += "0";
            }
            if (fractionSize) formatedText += decimalSep + fraction.substr(0, fractionSize);
        }
        parts.push(isNegative ? pattern.negPre : pattern.posPre);
        parts.push(formatedText);
        parts.push(isNegative ? pattern.negSuf : pattern.posSuf);
        return parts.join("");
    }
    function padNumber(num, digits, trim) {
        var neg = "";
        if (num < 0) {
            neg = "-";
            num = -num;
        }
        num = "" + num;
        while (num.length < digits) num = "0" + num;
        if (trim) num = num.substr(num.length - digits);
        return neg + num;
    }
    function dateGetter(name, size, offset, trim) {
        return function(date) {
            var value = date["get" + name]();
            if (offset > 0 || value > -offset) value += offset;
            if (value === 0 && offset == -12) value = 12;
            return padNumber(value, size, trim);
        };
    }
    function dateStrGetter(name, shortForm) {
        return function(date, formats) {
            var value = date["get" + name]();
            var get = uppercase(shortForm ? "SHORT" + name : name);
            return formats[get][value];
        };
    }
    function timeZoneGetter(date) {
        var offset = date.getTimezoneOffset();
        return padNumber(offset / 60, 2) + padNumber(Math.abs(offset % 60), 2);
    }
    function ampmGetter(date, formats) {
        return date.getHours() < 12 ? formats.AMPMS[0] : formats.AMPMS[1];
    }
    var DATE_FORMATS = {
        yyyy: dateGetter("FullYear", 4),
        yy: dateGetter("FullYear", 2, 0, true),
        y: dateGetter("FullYear", 1),
        MMMM: dateStrGetter("Month"),
        MMM: dateStrGetter("Month", true),
        MM: dateGetter("Month", 2, 1),
        M: dateGetter("Month", 1, 1),
        dd: dateGetter("Date", 2),
        d: dateGetter("Date", 1),
        HH: dateGetter("Hours", 2),
        H: dateGetter("Hours", 1),
        hh: dateGetter("Hours", 2, -12),
        h: dateGetter("Hours", 1, -12),
        mm: dateGetter("Minutes", 2),
        m: dateGetter("Minutes", 1),
        ss: dateGetter("Seconds", 2),
        s: dateGetter("Seconds", 1),
        EEEE: dateStrGetter("Day"),
        EEE: dateStrGetter("Day", true),
        a: ampmGetter,
        Z: timeZoneGetter
    };
    var DATE_FORMATS_SPLIT = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/, NUMBER_STRING = /^\d+$/;
    dateFilter.$inject = [ "$locale" ];
    function dateFilter($locale) {
        var R_ISO8601_STR = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        function jsonStringToDate(string) {
            var match;
            if (match = string.match(R_ISO8601_STR)) {
                var date = new Date(0), tzHour = 0, tzMin = 0;
                if (match[9]) {
                    tzHour = int(match[9] + match[10]);
                    tzMin = int(match[9] + match[11]);
                }
                date.setUTCFullYear(int(match[1]), int(match[2]) - 1, int(match[3]));
                date.setUTCHours(int(match[4] || 0) - tzHour, int(match[5] || 0) - tzMin, int(match[6] || 0), int(match[7] || 0));
                return date;
            }
            return string;
        }
        return function(date, format) {
            var text = "", parts = [], fn, match;
            format = format || "mediumDate";
            format = $locale.DATETIME_FORMATS[format] || format;
            if (isString(date)) {
                if (NUMBER_STRING.test(date)) {
                    date = int(date);
                } else {
                    date = jsonStringToDate(date);
                }
            }
            if (isNumber(date)) {
                date = new Date(date);
            }
            if (!isDate(date)) {
                return date;
            }
            while (format) {
                match = DATE_FORMATS_SPLIT.exec(format);
                if (match) {
                    parts = concat(parts, match, 1);
                    format = parts.pop();
                } else {
                    parts.push(format);
                    format = null;
                }
            }
            forEach(parts, function(value) {
                fn = DATE_FORMATS[value];
                text += fn ? fn(date, $locale.DATETIME_FORMATS) : value.replace(/(^'|'$)/g, "").replace(/''/g, "'");
            });
            return text;
        };
    }
    function jsonFilter() {
        return function(object) {
            return toJson(object, true);
        };
    }
    var lowercaseFilter = valueFn(lowercase);
    var uppercaseFilter = valueFn(uppercase);
    function limitToFilter() {
        return function(array, limit) {
            if (!(array instanceof Array)) return array;
            limit = int(limit);
            var out = [], i, n;
            if (!array || !(array instanceof Array)) return out;
            if (limit > array.length) limit = array.length; else if (limit < -array.length) limit = -array.length;
            if (limit > 0) {
                i = 0;
                n = limit;
            } else {
                i = array.length + limit;
                n = array.length;
            }
            for (;i < n; i++) {
                out.push(array[i]);
            }
            return out;
        };
    }
    orderByFilter.$inject = [ "$parse" ];
    function orderByFilter($parse) {
        return function(array, sortPredicate, reverseOrder) {
            if (!(array instanceof Array)) return array;
            if (!sortPredicate) return array;
            sortPredicate = isArray(sortPredicate) ? sortPredicate : [ sortPredicate ];
            sortPredicate = map(sortPredicate, function(predicate) {
                var descending = false, get = predicate || identity;
                if (isString(predicate)) {
                    if (predicate.charAt(0) == "+" || predicate.charAt(0) == "-") {
                        descending = predicate.charAt(0) == "-";
                        predicate = predicate.substring(1);
                    }
                    get = $parse(predicate);
                }
                return reverseComparator(function(a, b) {
                    return compare(get(a), get(b));
                }, descending);
            });
            var arrayCopy = [];
            for (var i = 0; i < array.length; i++) {
                arrayCopy.push(array[i]);
            }
            return arrayCopy.sort(reverseComparator(comparator, reverseOrder));
            function comparator(o1, o2) {
                for (var i = 0; i < sortPredicate.length; i++) {
                    var comp = sortPredicate[i](o1, o2);
                    if (comp !== 0) return comp;
                }
                return 0;
            }
            function reverseComparator(comp, descending) {
                return toBoolean(descending) ? function(a, b) {
                    return comp(b, a);
                } : comp;
            }
            function compare(v1, v2) {
                var t1 = typeof v1;
                var t2 = typeof v2;
                if (t1 == t2) {
                    if (t1 == "string") v1 = v1.toLowerCase();
                    if (t1 == "string") v2 = v2.toLowerCase();
                    if (v1 === v2) return 0;
                    return v1 < v2 ? -1 : 1;
                } else {
                    return t1 < t2 ? -1 : 1;
                }
            }
        };
    }
    function ngDirective(directive) {
        if (isFunction(directive)) {
            directive = {
                link: directive
            };
        }
        directive.restrict = directive.restrict || "AC";
        return valueFn(directive);
    }
    var htmlAnchorDirective = valueFn({
        restrict: "E",
        compile: function(element, attr) {
            if (!attr.href) {
                attr.$set("href", "");
            }
            return function(scope, element) {
                element.bind("click", function(event) {
                    if (!element.attr("href")) {
                        event.preventDefault();
                    }
                });
            };
        }
    });
    var ngAttributeAliasDirectives = {};
    forEach(BOOLEAN_ATTR, function(propName, attrName) {
        var normalized = directiveNormalize("ng-" + attrName);
        ngAttributeAliasDirectives[normalized] = function() {
            return {
                priority: 100,
                compile: function() {
                    return function(scope, element, attr) {
                        scope.$watch(attr[normalized], function ngBooleanAttrWatchAction(value) {
                            attr.$set(attrName, !!value);
                        });
                    };
                }
            };
        };
    });
    forEach([ "src", "href" ], function(attrName) {
        var normalized = directiveNormalize("ng-" + attrName);
        ngAttributeAliasDirectives[normalized] = function() {
            return {
                priority: 99,
                link: function(scope, element, attr) {
                    attr.$observe(normalized, function(value) {
                        if (!value) return;
                        attr.$set(attrName, value);
                        if (msie) element.prop(attrName, value);
                    });
                }
            };
        };
    });
    var nullFormCtrl = {
        $addControl: noop,
        $removeControl: noop,
        $setValidity: noop,
        $setDirty: noop
    };
    FormController.$inject = [ "$element", "$attrs", "$scope" ];
    function FormController(element, attrs) {
        var form = this, parentForm = element.parent().controller("form") || nullFormCtrl, invalidCount = 0, errors = form.$error = {};
        form.$name = attrs.name;
        form.$dirty = false;
        form.$pristine = true;
        form.$valid = true;
        form.$invalid = false;
        parentForm.$addControl(form);
        element.addClass(PRISTINE_CLASS);
        toggleValidCss(true);
        function toggleValidCss(isValid, validationErrorKey) {
            validationErrorKey = validationErrorKey ? "-" + snake_case(validationErrorKey, "-") : "";
            element.removeClass((isValid ? INVALID_CLASS : VALID_CLASS) + validationErrorKey).addClass((isValid ? VALID_CLASS : INVALID_CLASS) + validationErrorKey);
        }
        form.$addControl = function(control) {
            if (control.$name && !form.hasOwnProperty(control.$name)) {
                form[control.$name] = control;
            }
        };
        form.$removeControl = function(control) {
            if (control.$name && form[control.$name] === control) {
                delete form[control.$name];
            }
            forEach(errors, function(queue, validationToken) {
                form.$setValidity(validationToken, true, control);
            });
        };
        form.$setValidity = function(validationToken, isValid, control) {
            var queue = errors[validationToken];
            if (isValid) {
                if (queue) {
                    arrayRemove(queue, control);
                    if (!queue.length) {
                        invalidCount--;
                        if (!invalidCount) {
                            toggleValidCss(isValid);
                            form.$valid = true;
                            form.$invalid = false;
                        }
                        errors[validationToken] = false;
                        toggleValidCss(true, validationToken);
                        parentForm.$setValidity(validationToken, true, form);
                    }
                }
            } else {
                if (!invalidCount) {
                    toggleValidCss(isValid);
                }
                if (queue) {
                    if (includes(queue, control)) return;
                } else {
                    errors[validationToken] = queue = [];
                    invalidCount++;
                    toggleValidCss(false, validationToken);
                    parentForm.$setValidity(validationToken, false, form);
                }
                queue.push(control);
                form.$valid = false;
                form.$invalid = true;
            }
        };
        form.$setDirty = function() {
            element.removeClass(PRISTINE_CLASS).addClass(DIRTY_CLASS);
            form.$dirty = true;
            form.$pristine = false;
            parentForm.$setDirty();
        };
    }
    var formDirectiveFactory = function(isNgForm) {
        return [ "$timeout", function($timeout) {
            var formDirective = {
                name: "form",
                restrict: "E",
                controller: FormController,
                compile: function() {
                    return {
                        pre: function(scope, formElement, attr, controller) {
                            if (!attr.action) {
                                var preventDefaultListener = function(event) {
                                    event.preventDefault ? event.preventDefault() : event.returnValue = false;
                                };
                                addEventListenerFn(formElement[0], "submit", preventDefaultListener);
                                formElement.bind("$destroy", function() {
                                    $timeout(function() {
                                        removeEventListenerFn(formElement[0], "submit", preventDefaultListener);
                                    }, 0, false);
                                });
                            }
                            var parentFormCtrl = formElement.parent().controller("form"), alias = attr.name || attr.ngForm;
                            if (alias) {
                                scope[alias] = controller;
                            }
                            if (parentFormCtrl) {
                                formElement.bind("$destroy", function() {
                                    parentFormCtrl.$removeControl(controller);
                                    if (alias) {
                                        scope[alias] = undefined;
                                    }
                                    extend(controller, nullFormCtrl);
                                });
                            }
                        }
                    };
                }
            };
            return isNgForm ? extend(copy(formDirective), {
                restrict: "EAC"
            }) : formDirective;
        } ];
    };
    var formDirective = formDirectiveFactory();
    var ngFormDirective = formDirectiveFactory(true);
    var URL_REGEXP = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/;
    var EMAIL_REGEXP = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    var NUMBER_REGEXP = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/;
    var inputType = {
        text: textInputType,
        number: numberInputType,
        url: urlInputType,
        email: emailInputType,
        radio: radioInputType,
        checkbox: checkboxInputType,
        hidden: noop,
        button: noop,
        submit: noop,
        reset: noop
    };
    function isEmpty(value) {
        return isUndefined(value) || value === "" || value === null || value !== value;
    }
    function textInputType(scope, element, attr, ctrl, $sniffer, $browser) {
        var listener = function() {
            var value = trim(element.val());
            if (ctrl.$viewValue !== value) {
                scope.$apply(function() {
                    ctrl.$setViewValue(value);
                });
            }
        };
        if ($sniffer.hasEvent("input")) {
            element.bind("input", listener);
        } else {
            var timeout;
            element.bind("keydown", function(event) {
                var key = event.keyCode;
                if (key === 91 || 15 < key && key < 19 || 37 <= key && key <= 40) return;
                if (!timeout) {
                    timeout = $browser.defer(function() {
                        listener();
                        timeout = null;
                    });
                }
            });
            element.bind("change", listener);
        }
        ctrl.$render = function() {
            element.val(isEmpty(ctrl.$viewValue) ? "" : ctrl.$viewValue);
        };
        var pattern = attr.ngPattern, patternValidator;
        var validate = function(regexp, value) {
            if (isEmpty(value) || regexp.test(value)) {
                ctrl.$setValidity("pattern", true);
                return value;
            } else {
                ctrl.$setValidity("pattern", false);
                return undefined;
            }
        };
        if (pattern) {
            if (pattern.match(/^\/(.*)\/$/)) {
                pattern = new RegExp(pattern.substr(1, pattern.length - 2));
                patternValidator = function(value) {
                    return validate(pattern, value);
                };
            } else {
                patternValidator = function(value) {
                    var patternObj = scope.$eval(pattern);
                    if (!patternObj || !patternObj.test) {
                        throw new Error("Expected " + pattern + " to be a RegExp but was " + patternObj);
                    }
                    return validate(patternObj, value);
                };
            }
            ctrl.$formatters.push(patternValidator);
            ctrl.$parsers.push(patternValidator);
        }
        if (attr.ngMinlength) {
            var minlength = int(attr.ngMinlength);
            var minLengthValidator = function(value) {
                if (!isEmpty(value) && value.length < minlength) {
                    ctrl.$setValidity("minlength", false);
                    return undefined;
                } else {
                    ctrl.$setValidity("minlength", true);
                    return value;
                }
            };
            ctrl.$parsers.push(minLengthValidator);
            ctrl.$formatters.push(minLengthValidator);
        }
        if (attr.ngMaxlength) {
            var maxlength = int(attr.ngMaxlength);
            var maxLengthValidator = function(value) {
                if (!isEmpty(value) && value.length > maxlength) {
                    ctrl.$setValidity("maxlength", false);
                    return undefined;
                } else {
                    ctrl.$setValidity("maxlength", true);
                    return value;
                }
            };
            ctrl.$parsers.push(maxLengthValidator);
            ctrl.$formatters.push(maxLengthValidator);
        }
    }
    function numberInputType(scope, element, attr, ctrl, $sniffer, $browser) {
        textInputType(scope, element, attr, ctrl, $sniffer, $browser);
        ctrl.$parsers.push(function(value) {
            var empty = isEmpty(value);
            if (empty || NUMBER_REGEXP.test(value)) {
                ctrl.$setValidity("number", true);
                return value === "" ? null : empty ? value : parseFloat(value);
            } else {
                ctrl.$setValidity("number", false);
                return undefined;
            }
        });
        ctrl.$formatters.push(function(value) {
            return isEmpty(value) ? "" : "" + value;
        });
        if (attr.min) {
            var min = parseFloat(attr.min);
            var minValidator = function(value) {
                if (!isEmpty(value) && value < min) {
                    ctrl.$setValidity("min", false);
                    return undefined;
                } else {
                    ctrl.$setValidity("min", true);
                    return value;
                }
            };
            ctrl.$parsers.push(minValidator);
            ctrl.$formatters.push(minValidator);
        }
        if (attr.max) {
            var max = parseFloat(attr.max);
            var maxValidator = function(value) {
                if (!isEmpty(value) && value > max) {
                    ctrl.$setValidity("max", false);
                    return undefined;
                } else {
                    ctrl.$setValidity("max", true);
                    return value;
                }
            };
            ctrl.$parsers.push(maxValidator);
            ctrl.$formatters.push(maxValidator);
        }
        ctrl.$formatters.push(function(value) {
            if (isEmpty(value) || isNumber(value)) {
                ctrl.$setValidity("number", true);
                return value;
            } else {
                ctrl.$setValidity("number", false);
                return undefined;
            }
        });
    }
    function urlInputType(scope, element, attr, ctrl, $sniffer, $browser) {
        textInputType(scope, element, attr, ctrl, $sniffer, $browser);
        var urlValidator = function(value) {
            if (isEmpty(value) || URL_REGEXP.test(value)) {
                ctrl.$setValidity("url", true);
                return value;
            } else {
                ctrl.$setValidity("url", false);
                return undefined;
            }
        };
        ctrl.$formatters.push(urlValidator);
        ctrl.$parsers.push(urlValidator);
    }
    function emailInputType(scope, element, attr, ctrl, $sniffer, $browser) {
        textInputType(scope, element, attr, ctrl, $sniffer, $browser);
        var emailValidator = function(value) {
            if (isEmpty(value) || EMAIL_REGEXP.test(value)) {
                ctrl.$setValidity("email", true);
                return value;
            } else {
                ctrl.$setValidity("email", false);
                return undefined;
            }
        };
        ctrl.$formatters.push(emailValidator);
        ctrl.$parsers.push(emailValidator);
    }
    function radioInputType(scope, element, attr, ctrl) {
        if (isUndefined(attr.name)) {
            element.attr("name", nextUid());
        }
        element.bind("click", function() {
            if (element[0].checked) {
                scope.$apply(function() {
                    ctrl.$setViewValue(attr.value);
                });
            }
        });
        ctrl.$render = function() {
            var value = attr.value;
            element[0].checked = value == ctrl.$viewValue;
        };
        attr.$observe("value", ctrl.$render);
    }
    function checkboxInputType(scope, element, attr, ctrl) {
        var trueValue = attr.ngTrueValue, falseValue = attr.ngFalseValue;
        if (!isString(trueValue)) trueValue = true;
        if (!isString(falseValue)) falseValue = false;
        element.bind("click", function() {
            scope.$apply(function() {
                ctrl.$setViewValue(element[0].checked);
            });
        });
        ctrl.$render = function() {
            element[0].checked = ctrl.$viewValue;
        };
        ctrl.$formatters.push(function(value) {
            return value === trueValue;
        });
        ctrl.$parsers.push(function(value) {
            return value ? trueValue : falseValue;
        });
    }
    var inputDirective = [ "$browser", "$sniffer", function($browser, $sniffer) {
        return {
            restrict: "E",
            require: "?ngModel",
            link: function(scope, element, attr, ctrl) {
                if (ctrl) {
                    (inputType[lowercase(attr.type)] || inputType.text)(scope, element, attr, ctrl, $sniffer, $browser);
                }
            }
        };
    } ];
    var VALID_CLASS = "ng-valid", INVALID_CLASS = "ng-invalid", PRISTINE_CLASS = "ng-pristine", DIRTY_CLASS = "ng-dirty";
    var NgModelController = [ "$scope", "$exceptionHandler", "$attrs", "$element", "$parse", function($scope, $exceptionHandler, $attr, $element, $parse) {
        this.$viewValue = Number.NaN;
        this.$modelValue = Number.NaN;
        this.$parsers = [];
        this.$formatters = [];
        this.$viewChangeListeners = [];
        this.$pristine = true;
        this.$dirty = false;
        this.$valid = true;
        this.$invalid = false;
        this.$name = $attr.name;
        var ngModelGet = $parse($attr.ngModel), ngModelSet = ngModelGet.assign;
        if (!ngModelSet) {
            throw Error(NON_ASSIGNABLE_MODEL_EXPRESSION + $attr.ngModel + " (" + startingTag($element) + ")");
        }
        this.$render = noop;
        var parentForm = $element.inheritedData("$formController") || nullFormCtrl, invalidCount = 0, $error = this.$error = {};
        $element.addClass(PRISTINE_CLASS);
        toggleValidCss(true);
        function toggleValidCss(isValid, validationErrorKey) {
            validationErrorKey = validationErrorKey ? "-" + snake_case(validationErrorKey, "-") : "";
            $element.removeClass((isValid ? INVALID_CLASS : VALID_CLASS) + validationErrorKey).addClass((isValid ? VALID_CLASS : INVALID_CLASS) + validationErrorKey);
        }
        this.$setValidity = function(validationErrorKey, isValid) {
            if ($error[validationErrorKey] === !isValid) return;
            if (isValid) {
                if ($error[validationErrorKey]) invalidCount--;
                if (!invalidCount) {
                    toggleValidCss(true);
                    this.$valid = true;
                    this.$invalid = false;
                }
            } else {
                toggleValidCss(false);
                this.$invalid = true;
                this.$valid = false;
                invalidCount++;
            }
            $error[validationErrorKey] = !isValid;
            toggleValidCss(isValid, validationErrorKey);
            parentForm.$setValidity(validationErrorKey, isValid, this);
        };
        this.$setViewValue = function(value) {
            this.$viewValue = value;
            if (this.$pristine) {
                this.$dirty = true;
                this.$pristine = false;
                $element.removeClass(PRISTINE_CLASS).addClass(DIRTY_CLASS);
                parentForm.$setDirty();
            }
            forEach(this.$parsers, function(fn) {
                value = fn(value);
            });
            if (this.$modelValue !== value) {
                this.$modelValue = value;
                ngModelSet($scope, value);
                forEach(this.$viewChangeListeners, function(listener) {
                    try {
                        listener();
                    } catch (e) {
                        $exceptionHandler(e);
                    }
                });
            }
        };
        var ctrl = this;
        $scope.$watch(function ngModelWatch() {
            var value = ngModelGet($scope);
            if (ctrl.$modelValue !== value) {
                var formatters = ctrl.$formatters, idx = formatters.length;
                ctrl.$modelValue = value;
                while (idx--) {
                    value = formatters[idx](value);
                }
                if (ctrl.$viewValue !== value) {
                    ctrl.$viewValue = value;
                    ctrl.$render();
                }
            }
        });
    } ];
    var ngModelDirective = function() {
        return {
            require: [ "ngModel", "^?form" ],
            controller: NgModelController,
            link: function(scope, element, attr, ctrls) {
                var modelCtrl = ctrls[0], formCtrl = ctrls[1] || nullFormCtrl;
                formCtrl.$addControl(modelCtrl);
                element.bind("$destroy", function() {
                    formCtrl.$removeControl(modelCtrl);
                });
            }
        };
    };
    var ngChangeDirective = valueFn({
        require: "ngModel",
        link: function(scope, element, attr, ctrl) {
            ctrl.$viewChangeListeners.push(function() {
                scope.$eval(attr.ngChange);
            });
        }
    });
    var requiredDirective = function() {
        return {
            require: "?ngModel",
            link: function(scope, elm, attr, ctrl) {
                if (!ctrl) return;
                attr.required = true;
                var validator = function(value) {
                    if (attr.required && (isEmpty(value) || value === false)) {
                        ctrl.$setValidity("required", false);
                        return;
                    } else {
                        ctrl.$setValidity("required", true);
                        return value;
                    }
                };
                ctrl.$formatters.push(validator);
                ctrl.$parsers.unshift(validator);
                attr.$observe("required", function() {
                    validator(ctrl.$viewValue);
                });
            }
        };
    };
    var ngListDirective = function() {
        return {
            require: "ngModel",
            link: function(scope, element, attr, ctrl) {
                var match = /\/(.*)\//.exec(attr.ngList), separator = match && new RegExp(match[1]) || attr.ngList || ",";
                var parse = function(viewValue) {
                    var list = [];
                    if (viewValue) {
                        forEach(viewValue.split(separator), function(value) {
                            if (value) list.push(trim(value));
                        });
                    }
                    return list;
                };
                ctrl.$parsers.push(parse);
                ctrl.$formatters.push(function(value) {
                    if (isArray(value)) {
                        return value.join(", ");
                    }
                    return undefined;
                });
            }
        };
    };
    var CONSTANT_VALUE_REGEXP = /^(true|false|\d+)$/;
    var ngValueDirective = function() {
        return {
            priority: 100,
            compile: function(tpl, tplAttr) {
                if (CONSTANT_VALUE_REGEXP.test(tplAttr.ngValue)) {
                    return function(scope, elm, attr) {
                        attr.$set("value", scope.$eval(attr.ngValue));
                    };
                } else {
                    return function(scope, elm, attr) {
                        scope.$watch(attr.ngValue, function valueWatchAction(value) {
                            attr.$set("value", value, false);
                        });
                    };
                }
            }
        };
    };
    var ngBindDirective = ngDirective(function(scope, element, attr) {
        element.addClass("ng-binding").data("$binding", attr.ngBind);
        scope.$watch(attr.ngBind, function ngBindWatchAction(value) {
            element.text(value == undefined ? "" : value);
        });
    });
    var ngBindTemplateDirective = [ "$interpolate", function($interpolate) {
        return function(scope, element, attr) {
            var interpolateFn = $interpolate(element.attr(attr.$attr.ngBindTemplate));
            element.addClass("ng-binding").data("$binding", interpolateFn);
            attr.$observe("ngBindTemplate", function(value) {
                element.text(value);
            });
        };
    } ];
    var ngBindHtmlUnsafeDirective = [ function() {
        return function(scope, element, attr) {
            element.addClass("ng-binding").data("$binding", attr.ngBindHtmlUnsafe);
            scope.$watch(attr.ngBindHtmlUnsafe, function ngBindHtmlUnsafeWatchAction(value) {
                element.html(value || "");
            });
        };
    } ];
    function classDirective(name, selector) {
        name = "ngClass" + name;
        return ngDirective(function(scope, element, attr) {
            scope.$watch(attr[name], ngClassWatchAction, true);
            attr.$observe("class", function(value) {
                var ngClass = scope.$eval(attr[name]);
                ngClassWatchAction(ngClass, ngClass);
            });
            if (name !== "ngClass") {
                scope.$watch("$index", function($index, old$index) {
                    var mod = $index % 2;
                    if (mod !== old$index % 2) {
                        if (mod == selector) {
                            addClass(scope.$eval(attr[name]));
                        } else {
                            removeClass(scope.$eval(attr[name]));
                        }
                    }
                });
            }
            function ngClassWatchAction(newVal, oldVal) {
                if (selector === true || scope.$index % 2 === selector) {
                    if (oldVal && newVal !== oldVal) {
                        removeClass(oldVal);
                    }
                    addClass(newVal);
                }
            }
            function removeClass(classVal) {
                if (isObject(classVal) && !isArray(classVal)) {
                    classVal = map(classVal, function(v, k) {
                        if (v) return k;
                    });
                }
                element.removeClass(isArray(classVal) ? classVal.join(" ") : classVal);
            }
            function addClass(classVal) {
                if (isObject(classVal) && !isArray(classVal)) {
                    classVal = map(classVal, function(v, k) {
                        if (v) return k;
                    });
                }
                if (classVal) {
                    element.addClass(isArray(classVal) ? classVal.join(" ") : classVal);
                }
            }
        });
    }
    var ngClassDirective = classDirective("", true);
    var ngClassOddDirective = classDirective("Odd", 0);
    var ngClassEvenDirective = classDirective("Even", 1);
    var ngCloakDirective = ngDirective({
        compile: function(element, attr) {
            attr.$set("ngCloak", undefined);
            element.removeClass("ng-cloak");
        }
    });
    var ngControllerDirective = [ function() {
        return {
            scope: true,
            controller: "@"
        };
    } ];
    var ngCspDirective = [ "$sniffer", function($sniffer) {
        return {
            priority: 1e3,
            compile: function() {
                $sniffer.csp = true;
            }
        };
    } ];
    var ngEventDirectives = {};
    forEach("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave".split(" "), function(name) {
        var directiveName = directiveNormalize("ng-" + name);
        ngEventDirectives[directiveName] = [ "$parse", function($parse) {
            return function(scope, element, attr) {
                var fn = $parse(attr[directiveName]);
                element.bind(lowercase(name), function(event) {
                    scope.$apply(function() {
                        fn(scope, {
                            $event: event
                        });
                    });
                });
            };
        } ];
    });
    var ngSubmitDirective = ngDirective(function(scope, element, attrs) {
        element.bind("submit", function() {
            scope.$apply(attrs.ngSubmit);
        });
    });
    var ngIncludeDirective = [ "$http", "$templateCache", "$anchorScroll", "$compile", function($http, $templateCache, $anchorScroll, $compile) {
        return {
            restrict: "ECA",
            terminal: true,
            compile: function(element, attr) {
                var srcExp = attr.ngInclude || attr.src, onloadExp = attr.onload || "", autoScrollExp = attr.autoscroll;
                return function(scope, element) {
                    var changeCounter = 0, childScope;
                    var clearContent = function() {
                        if (childScope) {
                            childScope.$destroy();
                            childScope = null;
                        }
                        element.html("");
                    };
                    scope.$watch(srcExp, function ngIncludeWatchAction(src) {
                        var thisChangeId = ++changeCounter;
                        if (src) {
                            $http.get(src, {
                                cache: $templateCache
                            }).success(function(response) {
                                if (thisChangeId !== changeCounter) return;
                                if (childScope) childScope.$destroy();
                                childScope = scope.$new();
                                element.html(response);
                                $compile(element.contents())(childScope);
                                if (isDefined(autoScrollExp) && (!autoScrollExp || scope.$eval(autoScrollExp))) {
                                    $anchorScroll();
                                }
                                childScope.$emit("$includeContentLoaded");
                                scope.$eval(onloadExp);
                            }).error(function() {
                                if (thisChangeId === changeCounter) clearContent();
                            });
                        } else clearContent();
                    });
                };
            }
        };
    } ];
    var ngInitDirective = ngDirective({
        compile: function() {
            return {
                pre: function(scope, element, attrs) {
                    scope.$eval(attrs.ngInit);
                }
            };
        }
    });
    var ngNonBindableDirective = ngDirective({
        terminal: true,
        priority: 1e3
    });
    var ngPluralizeDirective = [ "$locale", "$interpolate", function($locale, $interpolate) {
        var BRACE = /{}/g;
        return {
            restrict: "EA",
            link: function(scope, element, attr) {
                var numberExp = attr.count, whenExp = element.attr(attr.$attr.when), offset = attr.offset || 0, whens = scope.$eval(whenExp), whensExpFns = {}, startSymbol = $interpolate.startSymbol(), endSymbol = $interpolate.endSymbol();
                forEach(whens, function(expression, key) {
                    whensExpFns[key] = $interpolate(expression.replace(BRACE, startSymbol + numberExp + "-" + offset + endSymbol));
                });
                scope.$watch(function ngPluralizeWatch() {
                    var value = parseFloat(scope.$eval(numberExp));
                    if (!isNaN(value)) {
                        if (!whens[value]) value = $locale.pluralCat(value - offset);
                        return whensExpFns[value](scope, element, true);
                    } else {
                        return "";
                    }
                }, function ngPluralizeWatchAction(newVal) {
                    element.text(newVal);
                });
            }
        };
    } ];
    var ngRepeatDirective = ngDirective({
        transclude: "element",
        priority: 1e3,
        terminal: true,
        compile: function(element, attr, linker) {
            return function(scope, iterStartElement, attr) {
                var expression = attr.ngRepeat;
                var match = expression.match(/^\s*(.+)\s+in\s+(.*)\s*$/), lhs, rhs, valueIdent, keyIdent;
                if (!match) {
                    throw Error("Expected ngRepeat in form of '_item_ in _collection_' but got '" + expression + "'.");
                }
                lhs = match[1];
                rhs = match[2];
                match = lhs.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);
                if (!match) {
                    throw Error("'item' in 'item in collection' should be identifier or (key, value) but got '" + lhs + "'.");
                }
                valueIdent = match[3] || match[1];
                keyIdent = match[2];
                var lastOrder = new HashQueueMap();
                scope.$watch(function ngRepeatWatch(scope) {
                    var index, length, collection = scope.$eval(rhs), cursor = iterStartElement, nextOrder = new HashQueueMap(), arrayLength, childScope, key, value, array, last;
                    if (!isArray(collection)) {
                        array = [];
                        for (key in collection) {
                            if (collection.hasOwnProperty(key) && key.charAt(0) != "$") {
                                array.push(key);
                            }
                        }
                        array.sort();
                    } else {
                        array = collection || [];
                    }
                    arrayLength = array.length;
                    for (index = 0, length = array.length; index < length; index++) {
                        key = collection === array ? index : array[index];
                        value = collection[key];
                        last = lastOrder.shift(value);
                        if (last) {
                            childScope = last.scope;
                            nextOrder.push(value, last);
                            if (index === last.index) {
                                cursor = last.element;
                            } else {
                                last.index = index;
                                cursor.after(last.element);
                                cursor = last.element;
                            }
                        } else {
                            childScope = scope.$new();
                        }
                        childScope[valueIdent] = value;
                        if (keyIdent) childScope[keyIdent] = key;
                        childScope.$index = index;
                        childScope.$first = index === 0;
                        childScope.$last = index === arrayLength - 1;
                        childScope.$middle = !(childScope.$first || childScope.$last);
                        if (!last) {
                            linker(childScope, function(clone) {
                                cursor.after(clone);
                                last = {
                                    scope: childScope,
                                    element: cursor = clone,
                                    index: index
                                };
                                nextOrder.push(value, last);
                            });
                        }
                    }
                    for (key in lastOrder) {
                        if (lastOrder.hasOwnProperty(key)) {
                            array = lastOrder[key];
                            while (array.length) {
                                value = array.pop();
                                value.element.remove();
                                value.scope.$destroy();
                            }
                        }
                    }
                    lastOrder = nextOrder;
                });
            };
        }
    });
    var ngShowDirective = ngDirective(function(scope, element, attr) {
        scope.$watch(attr.ngShow, function ngShowWatchAction(value) {
            element.css("display", toBoolean(value) ? "" : "none");
        });
    });
    var ngHideDirective = ngDirective(function(scope, element, attr) {
        scope.$watch(attr.ngHide, function ngHideWatchAction(value) {
            element.css("display", toBoolean(value) ? "none" : "");
        });
    });
    var ngStyleDirective = ngDirective(function(scope, element, attr) {
        scope.$watch(attr.ngStyle, function ngStyleWatchAction(newStyles, oldStyles) {
            if (oldStyles && newStyles !== oldStyles) {
                forEach(oldStyles, function(val, style) {
                    element.css(style, "");
                });
            }
            if (newStyles) element.css(newStyles);
        }, true);
    });
    var NG_SWITCH = "ng-switch";
    var ngSwitchDirective = valueFn({
        restrict: "EA",
        require: "ngSwitch",
        controller: function ngSwitchController() {
            this.cases = {};
        },
        link: function(scope, element, attr, ctrl) {
            var watchExpr = attr.ngSwitch || attr.on, selectedTransclude, selectedElement, selectedScope;
            scope.$watch(watchExpr, function ngSwitchWatchAction(value) {
                if (selectedElement) {
                    selectedScope.$destroy();
                    selectedElement.remove();
                    selectedElement = selectedScope = null;
                }
                if (selectedTransclude = ctrl.cases["!" + value] || ctrl.cases["?"]) {
                    scope.$eval(attr.change);
                    selectedScope = scope.$new();
                    selectedTransclude(selectedScope, function(caseElement) {
                        selectedElement = caseElement;
                        element.append(caseElement);
                    });
                }
            });
        }
    });
    var ngSwitchWhenDirective = ngDirective({
        transclude: "element",
        priority: 500,
        require: "^ngSwitch",
        compile: function(element, attrs, transclude) {
            return function(scope, element, attr, ctrl) {
                ctrl.cases["!" + attrs.ngSwitchWhen] = transclude;
            };
        }
    });
    var ngSwitchDefaultDirective = ngDirective({
        transclude: "element",
        priority: 500,
        require: "^ngSwitch",
        compile: function(element, attrs, transclude) {
            return function(scope, element, attr, ctrl) {
                ctrl.cases["?"] = transclude;
            };
        }
    });
    var ngTranscludeDirective = ngDirective({
        controller: [ "$transclude", "$element", function($transclude, $element) {
            $transclude(function(clone) {
                $element.append(clone);
            });
        } ]
    });
    var ngViewDirective = [ "$http", "$templateCache", "$route", "$anchorScroll", "$compile", "$controller", function($http, $templateCache, $route, $anchorScroll, $compile, $controller) {
        return {
            restrict: "ECA",
            terminal: true,
            link: function(scope, element, attr) {
                var lastScope, onloadExp = attr.onload || "";
                scope.$on("$routeChangeSuccess", update);
                update();
                function destroyLastScope() {
                    if (lastScope) {
                        lastScope.$destroy();
                        lastScope = null;
                    }
                }
                function clearContent() {
                    element.html("");
                    destroyLastScope();
                }
                function update() {
                    var locals = $route.current && $route.current.locals, template = locals && locals.$template;
                    if (template) {
                        element.html(template);
                        destroyLastScope();
                        var link = $compile(element.contents()), current = $route.current, controller;
                        lastScope = current.scope = scope.$new();
                        if (current.controller) {
                            locals.$scope = lastScope;
                            controller = $controller(current.controller, locals);
                            element.contents().data("$ngControllerController", controller);
                        }
                        link(lastScope);
                        lastScope.$emit("$viewContentLoaded");
                        lastScope.$eval(onloadExp);
                        $anchorScroll();
                    } else {
                        clearContent();
                    }
                }
            }
        };
    } ];
    var scriptDirective = [ "$templateCache", function($templateCache) {
        return {
            restrict: "E",
            terminal: true,
            compile: function(element, attr) {
                if (attr.type == "text/ng-template") {
                    var templateUrl = attr.id, text = element[0].text;
                    $templateCache.put(templateUrl, text);
                }
            }
        };
    } ];
    var ngOptionsDirective = valueFn({
        terminal: true
    });
    var selectDirective = [ "$compile", "$parse", function($compile, $parse) {
        var NG_OPTIONS_REGEXP = /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w\d]*)|(?:\(\s*([\$\w][\$\w\d]*)\s*,\s*([\$\w][\$\w\d]*)\s*\)))\s+in\s+(.*)$/, nullModelCtrl = {
            $setViewValue: noop
        };
        return {
            restrict: "E",
            require: [ "select", "?ngModel" ],
            controller: [ "$element", "$scope", "$attrs", function($element, $scope, $attrs) {
                var self = this, optionsMap = {}, ngModelCtrl = nullModelCtrl, nullOption, unknownOption;
                self.databound = $attrs.ngModel;
                self.init = function(ngModelCtrl_, nullOption_, unknownOption_) {
                    ngModelCtrl = ngModelCtrl_;
                    nullOption = nullOption_;
                    unknownOption = unknownOption_;
                };
                self.addOption = function(value) {
                    optionsMap[value] = true;
                    if (ngModelCtrl.$viewValue == value) {
                        $element.val(value);
                        if (unknownOption.parent()) unknownOption.remove();
                    }
                };
                self.removeOption = function(value) {
                    if (this.hasOption(value)) {
                        delete optionsMap[value];
                        if (ngModelCtrl.$viewValue == value) {
                            this.renderUnknownOption(value);
                        }
                    }
                };
                self.renderUnknownOption = function(val) {
                    var unknownVal = "? " + hashKey(val) + " ?";
                    unknownOption.val(unknownVal);
                    $element.prepend(unknownOption);
                    $element.val(unknownVal);
                    unknownOption.prop("selected", true);
                };
                self.hasOption = function(value) {
                    return optionsMap.hasOwnProperty(value);
                };
                $scope.$on("$destroy", function() {
                    self.renderUnknownOption = noop;
                });
            } ],
            link: function(scope, element, attr, ctrls) {
                if (!ctrls[1]) return;
                var selectCtrl = ctrls[0], ngModelCtrl = ctrls[1], multiple = attr.multiple, optionsExp = attr.ngOptions, nullOption = false, emptyOption, optionTemplate = jqLite(document.createElement("option")), optGroupTemplate = jqLite(document.createElement("optgroup")), unknownOption = optionTemplate.clone();
                for (var i = 0, children = element.children(), ii = children.length; i < ii; i++) {
                    if (children[i].value == "") {
                        emptyOption = nullOption = children.eq(i);
                        break;
                    }
                }
                selectCtrl.init(ngModelCtrl, nullOption, unknownOption);
                if (multiple && (attr.required || attr.ngRequired)) {
                    var requiredValidator = function(value) {
                        ngModelCtrl.$setValidity("required", !attr.required || value && value.length);
                        return value;
                    };
                    ngModelCtrl.$parsers.push(requiredValidator);
                    ngModelCtrl.$formatters.unshift(requiredValidator);
                    attr.$observe("required", function() {
                        requiredValidator(ngModelCtrl.$viewValue);
                    });
                }
                if (optionsExp) Options(scope, element, ngModelCtrl); else if (multiple) Multiple(scope, element, ngModelCtrl); else Single(scope, element, ngModelCtrl, selectCtrl);
                function Single(scope, selectElement, ngModelCtrl, selectCtrl) {
                    ngModelCtrl.$render = function() {
                        var viewValue = ngModelCtrl.$viewValue;
                        if (selectCtrl.hasOption(viewValue)) {
                            if (unknownOption.parent()) unknownOption.remove();
                            selectElement.val(viewValue);
                            if (viewValue === "") emptyOption.prop("selected", true);
                        } else {
                            if (isUndefined(viewValue) && emptyOption) {
                                selectElement.val("");
                            } else {
                                selectCtrl.renderUnknownOption(viewValue);
                            }
                        }
                    };
                    selectElement.bind("change", function() {
                        scope.$apply(function() {
                            if (unknownOption.parent()) unknownOption.remove();
                            ngModelCtrl.$setViewValue(selectElement.val());
                        });
                    });
                }
                function Multiple(scope, selectElement, ctrl) {
                    var lastView;
                    ctrl.$render = function() {
                        var items = new HashMap(ctrl.$viewValue);
                        forEach(selectElement.find("option"), function(option) {
                            option.selected = isDefined(items.get(option.value));
                        });
                    };
                    scope.$watch(function selectMultipleWatch() {
                        if (!equals(lastView, ctrl.$viewValue)) {
                            lastView = copy(ctrl.$viewValue);
                            ctrl.$render();
                        }
                    });
                    selectElement.bind("change", function() {
                        scope.$apply(function() {
                            var array = [];
                            forEach(selectElement.find("option"), function(option) {
                                if (option.selected) {
                                    array.push(option.value);
                                }
                            });
                            ctrl.$setViewValue(array);
                        });
                    });
                }
                function Options(scope, selectElement, ctrl) {
                    var match;
                    if (!(match = optionsExp.match(NG_OPTIONS_REGEXP))) {
                        throw Error("Expected ngOptions in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_'" + " but got '" + optionsExp + "'.");
                    }
                    var displayFn = $parse(match[2] || match[1]), valueName = match[4] || match[6], keyName = match[5], groupByFn = $parse(match[3] || ""), valueFn = $parse(match[2] ? match[1] : valueName), valuesFn = $parse(match[7]), optionGroupsCache = [ [ {
                        element: selectElement,
                        label: ""
                    } ] ];
                    if (nullOption) {
                        $compile(nullOption)(scope);
                        nullOption.removeClass("ng-scope");
                        nullOption.remove();
                    }
                    selectElement.html("");
                    selectElement.bind("change", function() {
                        scope.$apply(function() {
                            var optionGroup, collection = valuesFn(scope) || [], locals = {}, key, value, optionElement, index, groupIndex, length, groupLength;
                            if (multiple) {
                                value = [];
                                for (groupIndex = 0, groupLength = optionGroupsCache.length; groupIndex < groupLength; groupIndex++) {
                                    optionGroup = optionGroupsCache[groupIndex];
                                    for (index = 1, length = optionGroup.length; index < length; index++) {
                                        if ((optionElement = optionGroup[index].element)[0].selected) {
                                            key = optionElement.val();
                                            if (keyName) locals[keyName] = key;
                                            locals[valueName] = collection[key];
                                            value.push(valueFn(scope, locals));
                                        }
                                    }
                                }
                            } else {
                                key = selectElement.val();
                                if (key == "?") {
                                    value = undefined;
                                } else if (key == "") {
                                    value = null;
                                } else {
                                    locals[valueName] = collection[key];
                                    if (keyName) locals[keyName] = key;
                                    value = valueFn(scope, locals);
                                }
                            }
                            ctrl.$setViewValue(value);
                        });
                    });
                    ctrl.$render = render;
                    scope.$watch(render);
                    function render() {
                        var optionGroups = {
                            "": []
                        }, optionGroupNames = [ "" ], optionGroupName, optionGroup, option, existingParent, existingOptions, existingOption, modelValue = ctrl.$modelValue, values = valuesFn(scope) || [], keys = keyName ? sortedKeys(values) : values, groupLength, length, groupIndex, index, locals = {}, selected, selectedSet = false, lastElement, element, label;
                        if (multiple) {
                            selectedSet = new HashMap(modelValue);
                        } else if (modelValue === null || nullOption) {
                            optionGroups[""].push({
                                selected: modelValue === null,
                                id: "",
                                label: ""
                            });
                            selectedSet = true;
                        }
                        for (index = 0; length = keys.length, index < length; index++) {
                            locals[valueName] = values[keyName ? locals[keyName] = keys[index] : index];
                            optionGroupName = groupByFn(scope, locals) || "";
                            if (!(optionGroup = optionGroups[optionGroupName])) {
                                optionGroup = optionGroups[optionGroupName] = [];
                                optionGroupNames.push(optionGroupName);
                            }
                            if (multiple) {
                                selected = selectedSet.remove(valueFn(scope, locals)) != undefined;
                            } else {
                                selected = modelValue === valueFn(scope, locals);
                                selectedSet = selectedSet || selected;
                            }
                            label = displayFn(scope, locals);
                            label = label === undefined ? "" : label;
                            optionGroup.push({
                                id: keyName ? keys[index] : index,
                                label: label,
                                selected: selected
                            });
                        }
                        if (!multiple && !selectedSet) {
                            optionGroups[""].unshift({
                                id: "?",
                                label: "",
                                selected: true
                            });
                        }
                        for (groupIndex = 0, groupLength = optionGroupNames.length; groupIndex < groupLength; groupIndex++) {
                            optionGroupName = optionGroupNames[groupIndex];
                            optionGroup = optionGroups[optionGroupName];
                            if (optionGroupsCache.length <= groupIndex) {
                                existingParent = {
                                    element: optGroupTemplate.clone().attr("label", optionGroupName),
                                    label: optionGroup.label
                                };
                                existingOptions = [ existingParent ];
                                optionGroupsCache.push(existingOptions);
                                selectElement.append(existingParent.element);
                            } else {
                                existingOptions = optionGroupsCache[groupIndex];
                                existingParent = existingOptions[0];
                                if (existingParent.label != optionGroupName) {
                                    existingParent.element.attr("label", existingParent.label = optionGroupName);
                                }
                            }
                            lastElement = null;
                            for (index = 0, length = optionGroup.length; index < length; index++) {
                                option = optionGroup[index];
                                if (existingOption = existingOptions[index + 1]) {
                                    lastElement = existingOption.element;
                                    if (existingOption.label !== option.label) {
                                        lastElement.text(existingOption.label = option.label);
                                    }
                                    if (existingOption.id !== option.id) {
                                        lastElement.val(existingOption.id = option.id);
                                    }
                                    if (existingOption.element.selected !== option.selected) {
                                        lastElement.prop("selected", existingOption.selected = option.selected);
                                    }
                                } else {
                                    if (option.id === "" && nullOption) {
                                        element = nullOption;
                                    } else {
                                        (element = optionTemplate.clone()).val(option.id).attr("selected", option.selected).text(option.label);
                                    }
                                    existingOptions.push(existingOption = {
                                        element: element,
                                        label: option.label,
                                        id: option.id,
                                        selected: option.selected
                                    });
                                    if (lastElement) {
                                        lastElement.after(element);
                                    } else {
                                        existingParent.element.append(element);
                                    }
                                    lastElement = element;
                                }
                            }
                            index++;
                            while (existingOptions.length > index) {
                                existingOptions.pop().element.remove();
                            }
                        }
                        while (optionGroupsCache.length > groupIndex) {
                            optionGroupsCache.pop()[0].element.remove();
                        }
                    }
                }
            }
        };
    } ];
    var optionDirective = [ "$interpolate", function($interpolate) {
        var nullSelectCtrl = {
            addOption: noop,
            removeOption: noop
        };
        return {
            restrict: "E",
            priority: 100,
            compile: function(element, attr) {
                if (isUndefined(attr.value)) {
                    var interpolateFn = $interpolate(element.text(), true);
                    if (!interpolateFn) {
                        attr.$set("value", element.text());
                    }
                }
                return function(scope, element, attr) {
                    var selectCtrlName = "$selectController", parent = element.parent(), selectCtrl = parent.data(selectCtrlName) || parent.parent().data(selectCtrlName);
                    if (selectCtrl && selectCtrl.databound) {
                        element.prop("selected", false);
                    } else {
                        selectCtrl = nullSelectCtrl;
                    }
                    if (interpolateFn) {
                        scope.$watch(interpolateFn, function interpolateWatchAction(newVal, oldVal) {
                            attr.$set("value", newVal);
                            if (newVal !== oldVal) selectCtrl.removeOption(oldVal);
                            selectCtrl.addOption(newVal);
                        });
                    } else {
                        selectCtrl.addOption(attr.value);
                    }
                    element.bind("$destroy", function() {
                        selectCtrl.removeOption(attr.value);
                    });
                };
            }
        };
    } ];
    var styleDirective = valueFn({
        restrict: "E",
        terminal: true
    });
    bindJQuery();
    publishExternalAPI(angular);
    jqLite(document).ready(function() {
        angularInit(document, bootstrap);
    });
})(window, document);

angular.element(document).find("head").append('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak{display:none;}ng\\:form{display:block;}</style>');