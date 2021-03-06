// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, cache, entry, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject.parcelRequire === 'function' &&
    globalObject.parcelRequire;
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  globalObject.parcelRequire = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"d70c6ecd44527160e11f0b68f9f92d62":[function(require,module,exports) {
var Refresh = require('react-refresh/runtime');

Refresh.injectIntoGlobalHook(window);

window.$RefreshReg$ = function () {};

window.$RefreshSig$ = function () {
  return function (type) {
    return type;
  };
};
},{}],"833cb7fca7b8989da3e59195b3135efb":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "a904e237caa426fe4212c21c717b8a71";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH */

var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept, acceptedAssets; // eslint-disable-next-line no-redeclare

var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
  var port = HMR_PORT || location.port;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    acceptedAssets = {};
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH); // Handle HMR Update

      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || hmrAcceptCheck(global.parcelRequire, asset.id);

        if (didAccept) {
          handled = true;
        }
      });

      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });

        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];

          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      } // Render the fancy html overlay


      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      document.body.appendChild(overlay);
    }
  };

  ws.onerror = function (e) {
    console.error(e.message);
  };

  ws.onclose = function (e) {
    console.warn('[parcel] 🚨 Connection to the HMR server was lost');
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}

function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';

  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }

  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    if (link.parentNode !== null) {
      link.parentNode.removeChild(link);
    }
  };

  newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now());
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      var absolute = /^https?:\/\//i.test(links[i].getAttribute('href'));

      if (!absolute) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    if (asset.type === 'css') {
      reloadCSS();
    } else {
      var fn = new Function('require', 'module', 'exports', asset.output);
      modules[asset.id] = [fn, asset.depsByBundle[bundle.HMR_BUNDLE_ID]];
    }
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1]);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(global.parcelRequire, id);
      });

      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }

  acceptedAssets[id] = true;
}
},{}],"122b9ecd9b836b878cc639d0949b43a9":[function(require,module,exports) {
"use strict";

var helpers = require("../node_modules/@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");

var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
helpers.prelude(module);

try {
  require("./styles.scss");

  var _react = _interopRequireDefault(require("react"));

  var _reactDom = require("react-dom");

  var _app = _interopRequireDefault(require("./app"));

  var _jsxFileName = "C:\\xampp\\htdocs\\m2m3\\wp-content\\themes\\m2m3\\src\\index.tsx";

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  const Application = () => /*#__PURE__*/_react.default.createElement(_app.default, {
    __self: void 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  });

  _c = Application;
  (0, _reactDom.render)( /*#__PURE__*/_react.default.createElement(Application, {
    __self: void 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 8
    }
  }), document.getElementById('root'));

  var _c;

  $RefreshReg$(_c, "Application");
  helpers.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"./styles.scss":"6ab58e4062edf863eaeee4f6ff8fe81a","./app":"592b4dc070dacf9a12404c1c5d14fb0c","../node_modules/@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"d1c1f3a458c175b082de4f402cc8aa7d"}],"6ab58e4062edf863eaeee4f6ff8fe81a":[function() {},{}],"592b4dc070dacf9a12404c1c5d14fb0c":[function(require,module,exports) {
"use strict";

var helpers = require("../node_modules/@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");

var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
helpers.prelude(module);

try {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  var _react = _interopRequireDefault(require("react"));

  var _jsxFileName = "C:\\xampp\\htdocs\\m2m3\\wp-content\\themes\\m2m3\\src\\app.tsx";

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  const App = () => {
    return /*#__PURE__*/_react.default.createElement("div", {
      __self: void 0,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }
    }, "ssApp");
  };

  _c = App;
  var _default = App;
  exports.default = _default;

  var _c;

  $RefreshReg$(_c, "App");
  helpers.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"../node_modules/@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"d1c1f3a458c175b082de4f402cc8aa7d"}],"d1c1f3a458c175b082de4f402cc8aa7d":[function(require,module,exports) {
"use strict";

var Refresh = require('react-refresh/runtime');

function debounce(func, delay) {
  if ("development" === 'test') {
    return function (args) {
      func.call(null, args);
    };
  } else {
    var timeout = undefined;
    return function (args) {
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        timeout = undefined;
        func.call(null, args);
      }, delay);
    };
  }
}

var enqueueUpdate = debounce(function () {
  Refresh.performReactRefresh();
}, 30); // Everthing below is either adapted or copied from
// https://github.com/facebook/metro/blob/61de16bd1edd7e738dd0311c89555a644023ab2d/packages/metro/src/lib/polyfills/require.js
// MIT License - Copyright (c) Facebook, Inc. and its affiliates.

module.exports.prelude = function (module) {
  window.$RefreshReg$ = function (type, id) {
    Refresh.register(type, module.id + ' ' + id);
  };

  window.$RefreshSig$ = Refresh.createSignatureFunctionForTransform;
};

module.exports.postlude = function (module) {
  if (isReactRefreshBoundary(module.exports)) {
    registerExportsForReactRefresh(module);

    if (module.hot) {
      module.hot.dispose(function (data) {
        if (Refresh.hasUnrecoverableErrors()) {
          window.location.reload();
        }

        data.prevExports = module.exports;
      });
      module.hot.accept(function (getParents) {
        var prevExports = module.hot.data.prevExports;
        var nextExports = module.exports; // Since we just executed the code for it, it's possible
        // that the new exports make it ineligible for being a boundary.

        var isNoLongerABoundary = !isReactRefreshBoundary(nextExports); // It can also become ineligible if its exports are incompatible
        // with the previous exports.
        // For example, if you add/remove/change exports, we'll want
        // to re-execute the importing modules, and force those components
        // to re-render. Similarly, if you convert a class component
        // to a function, we want to invalidate the boundary.

        var didInvalidate = shouldInvalidateReactRefreshBoundary(prevExports, nextExports);

        if (isNoLongerABoundary || didInvalidate) {
          // We'll be conservative. The only case in which we won't do a full
          // reload is if all parent modules are also refresh boundaries.
          // In that case we'll add them to the current queue.
          var parents = getParents();

          if (parents.length === 0) {
            // Looks like we bubbled to the root. Can't recover from that.
            window.location.reload();
            return;
          }

          return parents;
        }

        enqueueUpdate();
      });
    }
  }
};

function isReactRefreshBoundary(exports) {
  if (Refresh.isLikelyComponentType(exports)) {
    return true;
  }

  if (exports == null || typeof exports !== 'object') {
    // Exit if we can't iterate over exports.
    return false;
  }

  var hasExports = false;
  var areAllExportsComponents = true;

  for (var key in exports) {
    hasExports = true;

    if (key === '__esModule') {
      continue;
    }

    var desc = Object.getOwnPropertyDescriptor(exports, key);

    if (desc && desc.get) {
      // Don't invoke getters as they may have side effects.
      return false;
    }

    var exportValue = exports[key];

    if (!Refresh.isLikelyComponentType(exportValue)) {
      areAllExportsComponents = false;
    }
  }

  return hasExports && areAllExportsComponents;
}

function shouldInvalidateReactRefreshBoundary(prevExports, nextExports) {
  var prevSignature = getRefreshBoundarySignature(prevExports);
  var nextSignature = getRefreshBoundarySignature(nextExports);

  if (prevSignature.length !== nextSignature.length) {
    return true;
  }

  for (var i = 0; i < nextSignature.length; i++) {
    if (prevSignature[i] !== nextSignature[i]) {
      return true;
    }
  }

  return false;
} // When this signature changes, it's unsafe to stop at this refresh boundary.


function getRefreshBoundarySignature(exports) {
  var signature = [];
  signature.push(Refresh.getFamilyByType(exports));

  if (exports == null || typeof exports !== 'object') {
    // Exit if we can't iterate over exports.
    // (This is important for legacy environments.)
    return signature;
  }

  for (var key in exports) {
    if (key === '__esModule') {
      continue;
    }

    var desc = Object.getOwnPropertyDescriptor(exports, key);

    if (desc && desc.get) {
      continue;
    }

    var exportValue = exports[key];
    signature.push(key);
    signature.push(Refresh.getFamilyByType(exportValue));
  }

  return signature;
}

function registerExportsForReactRefresh(module) {
  var exports = module.exports,
      id = module.id;
  Refresh.register(exports, id + ' %exports%');

  if (exports == null || typeof exports !== 'object') {
    // Exit if we can't iterate over exports.
    // (This is important for legacy environments.)
    return;
  }

  for (var key in exports) {
    var desc = Object.getOwnPropertyDescriptor(exports, key);

    if (desc && desc.get) {
      // Don't invoke getters as they may have side effects.
      continue;
    }

    var exportValue = exports[key];
    Refresh.register(exportValue, id + ' %exports% ' + key);
  }
}
},{}]},{},["d70c6ecd44527160e11f0b68f9f92d62","833cb7fca7b8989da3e59195b3135efb","122b9ecd9b836b878cc639d0949b43a9"], null)

//# sourceMappingURL=index.js.map
