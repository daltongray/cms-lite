/**
 * anime.js - ESM
 * @version v4.0.0-beta.100.alpha-4
 * @author Julian Garnier
 * @license MIT
 * @copyright (c) 2024 Julian Garnier
 * @see animejs.com
 */

/** @typedef {Animation} $Animation */
/** @typedef {$Animation|Timeline} Renderable */
/** @typedef {Timer|Renderable} Tickable */

/**
 * @callback FunctionValue
 * @param {Target} [target] - The animated target
 * @param {Number} [index] - The target index
 * @param {Number} [length] - The total number of animated targets
 * @return {Number|String|TweenObjectValue|Array.<Number|String|TweenObjectValue>|void}
 */

/**
 * @callback EasingFunction
 * @param {Number} time
 * @return {Number}
 */

/**
 * @typedef {Object} SpringEasing
 * @property {Number} duration
 * @property {EasingFunction} solver
 */

/**
 * @typedef {('linear'|'linear(x1, x2 25%, x3)'|'in'|'out'|'inOut'|'outIn'|'inQuad'|'outQuad'|'inOutQuad'|'outInQuad'|'inCubic'|'outCubic'|'inOutCubic'|'outInCubic'|'inQuart'|'outQuart'|'inOutQuart'|'outInQuart'|'inQuint'|'outQuint'|'inOutQuint'|'outInQuint'|'inSine'|'outSine'|'inOutSine'|'outInSine'|'inCirc'|'outCirc'|'inOutCirc'|'outInCirc'|'inExpo'|'outExpo'|'inOutExpo'|'outInExpo'|'inBounce'|'outBounce'|'inOutBounce'|'outInBounce'|'inBack'|'outBack'|'inOutBack'|'outInBack'|'inElastic'|'outElastic'|'inOutElastic'|'outInElastic'|'irregular'|'cubicBezier'|'steps'|'in(p = 1.675)'|'out(p = 1.675)'|'inOut(p = 1.675)'|'outIn(p = 1.675)'|'inBack(overshoot = 1.70158)'|'outBack(overshoot = 1.70158)'|'inOutBack(overshoot = 1.70158)'|'outInBack(overshoot = 1.70158)'|'inElastic(amplitude = 1, period = .3)'|'outElastic(amplitude = 1, period = .3)'|'inOutElastic(amplitude = 1, period = .3)'|'outInElastic(amplitude = 1, period = .3)'|'irregular(length = 10, randomness = 1)'|'cubicBezier(x1, y1, x2, y2)'|'steps(steps = 10)')} EaseStringParamNames
 */

// A hack to get both ease names suggestions AND allow any strings
// https://github.com/microsoft/TypeScript/issues/29729#issuecomment-460346421
/** @typedef {(String & {})|EaseStringParamNames|EasingFunction|SpringEasing} EasingParam */

/** @typedef {HTMLElement|SVGElement|SVGGeometryElement} DOMTarget */
/** @typedef {Record<String, any>} JSTarget */
/** @typedef {DOMTarget|JSTarget} Target */
/** @typedef {Target|NodeList|String} TargetSelector */
/** @typedef {DOMTarget|NodeList|String} DOMTargetSelector */
/** @typedef {Array.<TargetSelector>|TargetSelector} TargetsParam */
/** @typedef {Array.<Target>} TargetsArray */

/**
 * @callback TweenModifier
 * @param {Number} value - The animated value
 * @return {Number|String}
 */

/** @typedef {[Number, Number, Number, Number]} ColorArray */

/**
 * @typedef {Object} Tween
 * @property {Number} id
 * @property {Animation} parent
 * @property {String} property
 * @property {Target} target
 * @property {String|Number} _value
 * @property {Function|null} _func
 * @property {EasingFunction} _ease
 * @property {Array.<Number>} _fromNumbers
 * @property {Array.<Number>} _toNumbers
 * @property {Array.<String>} _strings
 * @property {Number} _fromNumber
 * @property {Number} _toNumber
 * @property {Array.<Number>} _numbers
 * @property {Number} _number
 * @property {String} _unit
 * @property {TweenModifier} _modifier
 * @property {Number} _currentTime
 * @property {Number} _delay
 * @property {Number} _updateDuration
 * @property {Number} _startTime
 * @property {Number} _changeDuration
 * @property {Number} _absoluteStartTime
 * @property {tweenTypes} _tweenType
 * @property {valueTypes} _valueType
 * @property {Number} _composition
 * @property {Number} _isOverlapped
 * @property {Number} _isOverridden
 * @property {Number} _renderTransforms
 * @property {Tween} _prevRep
 * @property {Tween} _nextRep
 * @property {Tween} _prevAdd
 * @property {Tween} _nextAdd
 * @property {Tween} _prev
 * @property {Tween} _next
 */

/**
 * @typedef TweenDecomposedValue
 * @property {Number} t - Type
 * @property {Number} n - Single number value
 * @property {String} u - Value unit
 * @property {String} o - Value operator
 * @property {Array.<Number>} d - Array of Numbers (in case of complex value type)
 * @property {Array.<String>} s - Strings (in case of complex value type)
 */

/** @typedef {{_head: null|Tween, _tail: null|Tween}} TweenPropertySiblings */
/** @typedef {Record<String, TweenPropertySiblings>} TweenLookups */
/** @typedef {WeakMap.<Target, TweenLookups>} TweenReplaceLookups */
/** @typedef {Map.<Target, TweenLookups>} TweenAdditiveLookups */

/**
 * @typedef {Object} TimerOptions
 * @property {Number|String} [id]
 * @property {TweenParamValue} [duration]
 * @property {TweenParamValue} [delay]
 * @property {Number} [loopDelay]
 * @property {Boolean} [reversed]
 * @property {Boolean} [alternate]
 * @property {Boolean|Number} [loop]
 * @property {Boolean|Scroller} [autoplay]
 * @property {Number} [frameRate]
 * @property {Number} [playbackRate]
 */

/**
 * @callback TimerCallback
 * @param {Timer} self - Returns itself
 * @return *
 */

/**
 * @typedef {Object} TimerCallbacks
 * @property {TimerCallback} [onComplete]
 * @property {TimerCallback} [onLoop]
 * @property {TimerCallback} [onBegin]
 * @property {TimerCallback} [onUpdate]
 */

/**
 * @typedef {TimerOptions & TimerCallbacks} TimerParams
 */

/**
 * @typedef {Number|String|FunctionValue} TweenParamValue
 */

/**
 * @typedef {TweenParamValue|[TweenParamValue, TweenParamValue]} TweenPropValue
 */

/**
 * @typedef {'none'|'replace'|'blend'|compositionTypes} TweenComposition
 */

/**
 * @typedef {Object} TweenParamsOptions
 * @property {TweenParamValue} [duration]
 * @property {TweenParamValue} [delay]
 * @property {EasingParam} [ease]
 * @property {TweenModifier} [modifier]
 * @property {TweenComposition} [composition]
 */

/**
 * @typedef {Object} TweenValues
 * @property {TweenParamValue} [from]
 * @property {TweenPropValue} [to]
 * @property {TweenPropValue} [fromTo]
 */

/**
 * @typedef {TweenParamsOptions & TweenValues} TweenKeyValue
 */

/**
 * @typedef {Array.<TweenKeyValue|TweenPropValue>} ArraySyntaxValue
 */

/**
 * @typedef {TweenParamValue|ArraySyntaxValue|TweenKeyValue} TweenOptions
 */

/**
 * @typedef {Partial<{to: TweenParamValue|Array.<TweenParamValue>; from: TweenParamValue|Array.<TweenParamValue>; fromTo: TweenParamValue|Array.<TweenParamValue>;}>} TweenObjectValue
 */

/**
 * @typedef {Object} PercentageKeyframeOptions
 * @property {EasingParam} [ease]
 */

/**
 * @typedef {Record<String, TweenParamValue>} PercentageKeyframeParams
 */

/**
 * @typedef {Record<String, PercentageKeyframeParams & PercentageKeyframeOptions>} PercentageKeyframes
 */

/**
 * @typedef {Array<Record<String, TweenOptions | TweenModifier | boolean> & TweenParamsOptions>} DurationKeyframes
 */

/**
 * @callback AnimationCallback
 * @param {Animation} self - Returns itself
 * @return *
 */

/**
 * @typedef {Object} AnimationOptions
 * @property {PercentageKeyframes|DurationKeyframes} [keyframes]
 * @property {EasingParam} [playbackEase]
 * @property {AnimationCallback} [onComplete]
 * @property {AnimationCallback} [onLoop]
 * @property {AnimationCallback} [onRender]
 * @property {AnimationCallback} [onBegin]
 * @property {AnimationCallback} [onUpdate]
 */

/**
 * @typedef {Record<String, TweenOptions | AnimationCallback | TweenModifier | boolean | PercentageKeyframes | DurationKeyframes | Scroller> & TimerOptions & AnimationOptions & TweenParamsOptions} AnimationParams
 */

/**
 * @callback TimelineCallback
 * @param {Timeline} self - Returns itself
 * @return {*}
 */

/**
 * @typedef {TimerOptions & AnimationOptions & TweenParamsOptions} DefaultsParams
 */

/**
 * @typedef {Object} TimelineOptions
 * @property {DefaultsParams} [defaults]
 * @property {EasingParam} [playbackEase]
 * @property {TimelineCallback} [onComplete]
 * @property {TimelineCallback} [onLoop]
 * @property {TimelineCallback} [onRender]
 * @property {TimelineCallback} [onBegin]
 * @property {TimelineCallback} [onUpdate]
 */

/**
 * @typedef {TimerOptions & TimelineOptions} TimelineParams
 */

/**
 * @typedef {Object} ScopeParams
 * @property {DOMTargetSelector} [root]
 * @property {DefaultsParams} [defaults]
 * @property {Record<String, String>} [mediaQueries]
 */

/**
 * @callback AnimatablePropertySetter
 * @param  {Number|Array.<Number>} to
 * @param  {Number} [duration]
 * @param  {EasingParam} [ease]
 * @return {AnimatableObject}
 */

/**
 * @callback AnimatablePropertyGetter
 * @return {Number|Array.<Number>}
 */

/**
 * @typedef {AnimatablePropertySetter & AnimatablePropertyGetter} AnimatableProperty
 */

/**
 * @typedef {Animatable & Record<String, AnimatableProperty>} AnimatableObject
 */

/**
 * @typedef {Object} AnimatablePropertyParamsOptions
 * @property {String} [unit]
 * @property {TweenParamValue} [duration]
 * @property {EasingParam} [ease]
 * @property {TweenModifier} [modifier]
 * @property {TweenComposition} [composition]
 */

/**
 * @typedef {Record<String, TweenParamValue | EasingParam | TweenModifier | TweenComposition | AnimatablePropertyParamsOptions> & AnimatablePropertyParamsOptions} AnimatableParams
 */

/**
 * @callback DraggableCallback
 * @param {Draggable} self
 * @return any
 */

/**
 * @typedef {Object} DraggableAxisParam
 * @property {String} [mapTo]
 * @property {TweenModifier} [modifier]
 * @property {TweenComposition} [composition]
 * @property {Number} [snap]
 */

/**
 * @typedef {Object} DraggableParams
 * @property {DOMTargetSelector} [trigger]
 * @property {DOMTargetSelector} [container]
 * @property {Boolean|DraggableAxisParam} [x]
 * @property {Boolean|DraggableAxisParam} [y]
 * @property {TweenModifier} [modifier]
 * @property {Number} [snap]
 * @property {Number|Array<Number>} [containerPadding]
 * @property {Number} [containerFriction]
 * @property {Number} [releaseVelocity]
 * @property {Number} [releaseStiffness]
 * @property {EasingParam} [releaseEase]
 * @property {Number} [dragSpeed]
 * @property {Number} [scrollSpeed]
 * @property {Number} [scrollThreshold]
 * @property {DraggableCallback} [onGrab]
 * @property {DraggableCallback} [onDrag]
 * @property {DraggableCallback} [onRelease]
 * @property {DraggableCallback} [onUpdate]
 * @property {DraggableCallback} [onSettle]
 * @property {DraggableCallback} [onSnap]
 */


// Environments

// TODO: Do we need to check if we're running inside a worker ?
const isBrowser = typeof window !== 'undefined';

/** @type {Object|Null} */
const win = isBrowser ? window : null;

/** @type {Document} */
const doc = isBrowser ? document : null;

// Enums

/** @enum {Number} */
const tweenTypes = {
  INVALID: 0,
  OBJECT: 1,
  ATTRIBUTE: 2,
  CSS: 3,
  TRANSFORM: 4,
  CSS_VAR: 5,
};

/** @enum {Number} */
const valueTypes = {
  NUMBER: 0,
  UNIT: 1,
  COLOR: 2,
  COMPLEX: 3,
};

/** @enum {Number} */
const tickModes = {
  NONE: 0,
  AUTO: 1,
  FORCE: 2,
};

/** @enum {Number} */
const compositionTypes = {
  replace: 0,
  none: 1,
  blend: 2,
};

// Cache symbols

const isRegisteredTargetSymbol = Symbol();
const isDomSymbol = Symbol();
const isSvgSymbol = Symbol();
const transformsSymbol = Symbol();
const morphPointsSymbol = Symbol();
const proxyTargetSymbol = Symbol();

// Numbers

const minValue = 1e-11;
const maxValue = 1e12;
const K = 1e3;
const maxFps = 120;

// Strings

const emptyString = '';
const shortTransforms = new Map();

shortTransforms.set('x', 'translateX');
shortTransforms.set('y', 'translateY');
shortTransforms.set('z', 'translateZ');

const validTransforms = [
  'translateX',
  'translateY',
  'translateZ',
  'rotate',
  'rotateX',
  'rotateY',
  'rotateZ',
  'scale',
  'scaleX',
  'scaleY',
  'scaleZ',
  'skew',
  'skewX',
  'skewY',
  'perspective',
  'matrix',
  'matrix3d',
];

const transformsFragmentStrings = validTransforms.reduce((a, v) => ({...a, [v]: v + '('}), {});

// Functions

/** @return {void} */
const noop = () => {};

// Regex

const hexTestRgx = /(^#([\da-f]{3}){1,2}$)|(^#([\da-f]{4}){1,2}$)/i;
const rgbExecRgx = /rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i;
const rgbaExecRgx = /rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i;
const hslExecRgx = /hsl\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*\)/i;
const hslaExecRgx = /hsla\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i;
const digitWithExponentRgx = /[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/g;
const unitsExecRgx = /^([-+]?\d*\.?\d+(?:[eE][-+]?\d+)?)+([a-z]+|%)$/i;
const lowerCaseRgx = /([a-z])([A-Z])/g;
const transformsExecRgx = /(\w+)(\([^)]+\)+)/g; // Match inline transforms with cacl() values, returns the value wrapped in ()
const relativeValuesExecRgx = /(\*=|\+=|-=)/;




/** @type {DefaultsParams} */
const defaults = {
  /** @type {Number|String} */
  id: null,
  /** @type {PercentageKeyframes|DurationKeyframes} */
  keyframes: null,
  playbackEase: null,
  playbackRate: 1,
  frameRate: maxFps,
  /** @type {Number|Boolean} */
  loop: 0,
  reversed: false,
  alternate: false,
  autoplay: true,
  duration: K,
  delay: 0,
  loopDelay: 0,
  /** @type {EasingParam} */
  ease: 'outQuad',
  /** @type {'none'|'replace'|'blend'|compositionTypes} */
  composition: compositionTypes.replace,
  /** @type {TweenModifier} */
  modifier: v => v,
  onBegin: noop,
  onUpdate: noop,
  onRender: noop,
  onLoop: noop,
  onComplete: noop,
};

const globals = {
  /** @type {DefaultsParams} */
  defaults,
  /** @type {Document|DOMTarget} */
  root: doc,
  /** @type {Scope} */
  scope: null,
};

// Strings

/**
 * @param  {String} str
 * @return {NodeListOf<Element>|void}
 */
const selectString = str => {
  try {
    const nodes = /** @type {HTMLElement} */(globals.root).querySelectorAll(str);
    return nodes;
  } catch(e) {
    return;
  }
};

/**
 * @param  {String} str
 * @return {String}
 */
const toLowerCase = str => str.replace(lowerCaseRgx, '$1-$2').toLowerCase();

/**
 * Prioritize this method instead of regex when possible
 * @param  {String} str
 * @param  {String} sub
 * @return {Boolean}
 */
const stringStartsWith = (str, sub) => str.indexOf(sub) === 0;

// Time
// Note: Date.now is used instead of performance.now since it is precise enough for timings calculations, performs slightly faster and works in Node.js environement.
const now = Date.now;

// Types checkers

/**@param {any} a @return {Boolean} */
const isArr = a => Array.isArray(a);
/**@param {any} a @return {Boolean} */
const isObj = a => a && a.constructor === Object;
/**@param {any} a @return {Boolean} */
const isNum = a => typeof a === 'number' && !isNaN(a);
/**@param {any} a @return {Boolean} */
const isStr = a => typeof a === 'string';
/**@param {any} a @return {Boolean} */
const isFnc = a => typeof a === 'function';
/**@param {any} a @return {Boolean} */
const isUnd = a => typeof a === 'undefined';
/**@param {any} a @return {Boolean} */
const isNil = a => isUnd(a) || a === null;
/**@param {any} a @return {Boolean} */
const isSvg = a => isBrowser && a instanceof SVGElement;
/**@param {any} a @return {Boolean} */
const isHex = a => hexTestRgx.test(a);
/**@param {any} a @return {Boolean} */
const isRgb = a => stringStartsWith(a, 'rgb');
/**@param {any} a @return {Boolean} */
const isHsl = a => stringStartsWith(a, 'hsl');
/**@param {any} a @return {Boolean} */
const isCol = a => isHex(a) || isRgb(a) || isHsl(a);
/**@param {any} a @return {Boolean} */
const isKey = a => !globals.defaults.hasOwnProperty(a);

// Number

/**
 * @param  {Number|String} str
 * @return {Number}
 */
const parseNumber = str => isStr(str) ?
  parseFloat(/** @type {String} */(str)) :
  /** @type {Number} */(str);

// Math

const pow = Math.pow;
const sqrt = Math.sqrt;
const sin = Math.sin;
const cos = Math.cos;
const abs = Math.abs;
const exp = Math.exp;
const ceil = Math.ceil;
const floor = Math.floor;
const asin = Math.asin;
const max = Math.max;
const atan2 = Math.atan2;
const PI = Math.PI;

/**
 * @param  {Number} v
 * @param  {Number} min
 * @param  {Number} max
 * @return {Number}
 */
const clamp = (v, min, max) => v < min ? min : v > max ? max : v;

/**
 * @param  {Number} v
 * @param  {Number} decimalLength
 * @return {Number}
 */
const round = (v, decimalLength) => { const m = 10 ** (decimalLength || 0); return Math.round(v * m) / m; };

/**
 * @param  {Number} v
 * @param  {Number} increment
 * @return {Number}
 */
const snap = (v, increment) => increment ? Math.round(v / increment) * increment : v;

/**
 * @param  {Number} start
 * @param  {Number} end
 * @param  {Number} progress
 * @return {Number}
 */
const interpolate = (start, end, progress) => start + (end - start) * progress;

/**
 * @param  {Number} v
 * @return {Number}
 */
const clampInfinity = v => v === Infinity ? maxValue : v === -Infinity ? -maxValue : v;

/**
 * @param  {Number} v
 * @return {Number}
 */
const clampZero = v => v < minValue ? minValue : v;

// Arrays

/**
 * @param  {any} v
 * @return {Array.<any>}
 */
const toArray = v => {
  if (!isBrowser) return [v];
  if (isStr(v)) v = selectString(v) || v;
  if (v instanceof NodeList || v instanceof HTMLCollection) return [].slice.call(v);
  return [v];
};

/**
 * @template T
 * @param  {T[]} a
 * @return {T[]}
 */
const cloneArray = a => isArr(a) ? [ ...a ] : a;

// Objects

/**
 * @param {Record<string, any>} o1
 * @param {Record<string, any>} o2
 * @return {Record<string, any>}
 */
const mergeObjects = (o1, o2) => {
  const merged = { ...o1 };
  for (let p in o2) merged[p] = isUnd(o1[p]) ? o2[p] : o1[p];
  return merged;
};

// Linked lists

/**
 * @param  {Object}   parent
 * @param  {Function} callback
 * @param  {Boolean}  [reverse]
 * @param  {String}   [prevProp]
 * @param  {String}   [nextProp]
 * @return {void}
 */
const forEachChildren = (parent, callback, reverse, prevProp = '_prev', nextProp = '_next') => {
  let next = parent._head;
  let adjustedNextProp = nextProp;
  if (reverse) {
    next = parent._tail;
    adjustedNextProp = prevProp;
  }
  while (next) {
    const currentNext = next[adjustedNextProp];
    callback(next);
    next = currentNext;
  }
};

/**
 * @param  {Object} parent
 * @param  {Object} child
 * @param  {String} [prevProp]
 * @param  {String} [nextProp]
 * @return {void}
 */
const removeChild = (parent, child, prevProp = '_prev', nextProp = '_next') => {
  const prev = child[prevProp];
  const next = child[nextProp];
  prev ? prev[nextProp] = next : parent._head = next;
  next ? next[prevProp] = prev : parent._tail = prev;
  child[prevProp] = null;
  child[nextProp] = null;
};

/**
 * @param  {Object} parent
 * @param  {Object} child
 * @param  {Function} [sortMethod]
 * @param  {String} prevProp
 * @param  {String} nextProp
 * @return {void}
 */
const addChild = (parent, child, sortMethod, prevProp = '_prev', nextProp = '_next') => {
  let prev = parent._tail;
  while (prev && sortMethod && sortMethod(prev, child)) prev = prev[prevProp];
  const next = prev ? prev[nextProp] : parent._head;
  prev ? prev[nextProp] = child : parent._head = child;
  next ? next[prevProp] = child : parent._tail = child;
  child[prevProp] = prev;
  child[nextProp] = next;
};

/**
 * Base class to control framerate and playback rate.
 * Inherited by Engine, Timer, Animation and Timeline.
 */
class Clock {

  constructor() {
    /** @type {Number} */
    this.currentTime = 0;
    /** @type {Number} */
    this.deltaTime = 0;
    /** @type {Number} */
    this._elapsedTime = 0;
    /** @type {Number} */
    this._startTime = 0;
    /** @type {Number} */
    this._lastTime = 0;
    /** @type {Number} */
    this._scheduledTime = 0;
    /** @type {Number} */
    this._frameDuration = K / maxFps;
    /** @type {Number} */
    this._fps = maxFps;
    /** @type {Number} */
    this._speed = 1;
    /** @type {Boolean} */
    this._hasChildren = false;
  }

  get frameRate() {
    return this._fps;
  }

  set frameRate(frameRate) {
    const previousFrameDuration = this._frameDuration;
    const fr = +frameRate;
    const fps = fr < minValue ? minValue : fr;
    const frameDuration = K / fps;
    this._fps = fps;
    this._frameDuration = frameDuration;
    this._scheduledTime += frameDuration - previousFrameDuration;
  }

  get playbackRate() {
    return this._speed;
  }

  set playbackRate(playbackRate) {
    const pbr = +playbackRate;
    this._speed = pbr < minValue ? minValue : pbr;
  }

  /**
   * @param  {Number} time
   * @return {tickModes}
   */
  requestTick(time) {
    const scheduledTime = this._scheduledTime;
    const elapsedTime = this._elapsedTime;
    this._elapsedTime += (time - elapsedTime);
    // If the elapsed time is lower than the scheduled time
    // this means not enough time has passed to hit one frameDuration
    // so skip that frame
    if (elapsedTime < scheduledTime) return tickModes.NONE;
    const frameDuration = this._frameDuration;
    const frameDelta = elapsedTime - scheduledTime;
    // Ensures that _scheduledTime progresses in steps of at least 1 frameDuration.
    // Skips ahead if the actual elapsed time is higher.
    this._scheduledTime += frameDelta < frameDuration ? frameDuration : frameDelta;
    return tickModes.AUTO;
  }

  /**
   * @param  {Number} time
   * @return {Number}
   */
  computeDeltaTime(time) {
    const delta = time - this._lastTime;
    this.deltaTime = delta;
    this._lastTime = time;
    return delta;
  }

}




/**
 * @param  {Tickable} tickable
 * @param  {Number} time
 * @param  {Number} muteCallbacks
 * @param  {Number} internalRender
 * @param  {tickModes} tickMode
 * @return {Number}
 */
const render = (tickable, time, muteCallbacks, internalRender, tickMode) => {

  const duration = tickable.duration;
  const currentTime = tickable.currentTime;
  const _currentIteration = tickable._currentIteration;
  const _iterationDuration = tickable._iterationDuration;
  const _iterationCount = tickable._iterationCount;
  const _loopDelay = tickable._loopDelay;
  const _reversed = tickable.reversed;
  const _alternate = tickable._alternate;
  const _hasChildren = tickable._hasChildren;

  const updateStartTime = tickable._delay;
  const updateEndTime = updateStartTime + _iterationDuration;
  const tickableTime = clamp(time - updateStartTime, -updateStartTime, duration);
  const deltaTime = tickableTime - currentTime;
  const isOverTime = tickableTime >= duration;
  const forceTick = tickMode === tickModes.FORCE;
  const autoTick = tickMode === tickModes.AUTO;
  // Time has jumped more than 200ms so consider this tick manual (Note the manual abs is faster than Math.abs())
  // TODO: Check if the time jump should be relative to engine._frameDuration
  const isManual = forceTick || (deltaTime < 0 ? deltaTime * -1 : deltaTime) >= 200;

  let hasBegun = tickable.began;
  let isOdd = 0;
  let iterationElapsedTime = tickableTime;

  // Execute the "expensive" iterations calculations only when necessary
  if (_iterationCount > 1) {
    // bitwise NOT operator seems to be generally faster than Math.floor() across browsers
    const currentIteration = ~~(tickableTime / (_iterationDuration + (isOverTime ? 0 : _loopDelay)));
    tickable._currentIteration = clamp(currentIteration, 0, _iterationCount);
    // Prevent the iteration count to go above the max iterations when reaching the end of the animation
    if (isOverTime) {
      tickable._currentIteration--;
    }
    isOdd = tickable._currentIteration % 2;
    iterationElapsedTime = tickableTime % (_iterationDuration + _loopDelay);
  }

  // Checks if exactly one of _reversed and (_alternate && isOdd) is true
  const isReversed = _reversed ^ (_alternate && isOdd);
  const _ease = /** @type {Renderable} */(tickable)._ease;
  let iterationTime = isOverTime ? isReversed ? 0 : duration : isReversed ? _iterationDuration - iterationElapsedTime : iterationElapsedTime;
  if (_ease) {
    iterationTime =_iterationDuration * _ease(iterationTime / _iterationDuration) || 0;
  }
  const isRunningBackwards = iterationTime < tickable._iterationTime;
  const seekMode = isManual ? isRunningBackwards ? 2 : 1 : 0; // 0 = automatic, 1 = manual forward, 2 = manual backward

  tickable._iterationTime = iterationTime;
  tickable._backwards = isRunningBackwards && !isReversed;

  if (!muteCallbacks && !hasBegun && tickableTime > 0) {
    hasBegun = tickable.began = true;
    tickable.onBegin(tickable);
  }

  // Update animation.currentTime only after the children have been updated to prevent wrong seek direction calculatiaon
  tickable.currentTime = tickableTime;

  // Render checks
  // Used to also check if the children have rendered in order to trigger the onRender callback on the parent timer
  let hasRendered = 0;

 if (hasBegun && tickable._currentIteration !== _currentIteration) {
    if (!muteCallbacks) tickable.onLoop(tickable);
    // Reset all children on loop to get the callbacks working and initial proeprties properly set on each iteration
    if (_hasChildren) {
      forEachChildren(tickable, (/** @type {$Animation} */child) => child.reset(), true);
    }
  }

  if (
    forceTick ||
    autoTick && (
      time >= updateStartTime && time <= updateEndTime || // Normal render
      time <= updateStartTime && currentTime > 0 || // Playhead is before the animation start time so make sure the animation is at its initial state
      time >= updateEndTime && currentTime !== duration // Playhead is after the animation end time so make sure the animation is at its end state
    ) ||
    iterationTime >= updateEndTime && currentTime !== duration ||
    iterationTime <= updateStartTime && currentTime > 0 ||
    time <= currentTime && currentTime === duration && tickable.completed // Force a render if a seek occurs on an completed animation
  ) {

    if (hasBegun) {
      // Trigger onUpdate callback before rendering
      tickable.computeDeltaTime(currentTime);
      if (!muteCallbacks) tickable.onUpdate(tickable);
    }

    // Start tweens rendering
    if (!_hasChildren) {

      // Only Animtion can have tweens, Timer returns undefined
      let tween = /** @type {Tween} */(/** @type {$Animation} */(tickable)._head);
      let tweenTarget;
      let tweenStyle;
      let tweenTargetTransforms;
      let tweenTargetTransformsProperties;
      let tweenTransformsNeedUpdate = 0;

      const absoluteTime = tickable._offset + updateStartTime + iterationTime;

      while (tween) {

        const tweenComposition = tween._composition;
        const tweenCurrentTime = tween._currentTime;
        const tweenChangeDuration = tween._changeDuration;
        const tweenAbsEndTime = tween._absoluteStartTime + tween._changeDuration;
        const tweenNextRep = tween._nextRep;
        const tweenPrevRep = tween._prevRep;
        const tweenHasComposition = tweenComposition !== compositionTypes.none;

        if ((seekMode || (
            (tweenCurrentTime !== tweenChangeDuration || absoluteTime <= tweenAbsEndTime + (tweenNextRep ? tweenNextRep._delay : 0)) &&
            (tweenCurrentTime !== 0 || absoluteTime >= tween._absoluteStartTime)
          )) && (!tweenHasComposition || (
            !tween._isOverridden &&
            (!tween._isOverlapped || absoluteTime <= tweenAbsEndTime) &&
            (!tweenNextRep || (tweenNextRep._isOverridden || absoluteTime <= tweenNextRep._absoluteStartTime)) &&
            (!tweenPrevRep || (tweenPrevRep._isOverridden || (absoluteTime >= (tweenPrevRep._absoluteStartTime + tweenPrevRep._changeDuration) + tween._delay)))
          ))
        ) {

          const tweenNewTime = tween._currentTime = clamp(iterationTime - tween._startTime, 0, tweenChangeDuration);
          const tweenProgress = tween._ease(tweenNewTime / tween._updateDuration);
          const tweenModifier = tween._modifier;
          const tweenValueType = tween._valueType;

          // Recompose tween value
          /** @type {String|Number} */
          let value;
          /** @type {Number} */
          let number;

          if (tweenValueType === valueTypes.NUMBER) {
            value = number = /** @type {Number} */(tweenModifier(interpolate(tween._fromNumber, tween._toNumber, tweenProgress)));
          } else if (tweenValueType === valueTypes.UNIT) {
            // NOTE: Rounding the values speed up string composition
            number = /** @type {Number} */(tweenModifier(round(interpolate(tween._fromNumber, tween._toNumber, tweenProgress), 3)));
            value = `${number}${tween._unit}`;
          } else if (tweenValueType === valueTypes.COLOR) {
            const fn = tween._fromNumbers;
            const tn = tween._toNumbers;
            const r = round(clamp(/** @type {Number} */(tweenModifier(interpolate(fn[0], tn[0], tweenProgress))), 0, 255), 0);
            const g = round(clamp(/** @type {Number} */(tweenModifier(interpolate(fn[1], tn[1], tweenProgress))), 0, 255), 0);
            const b = round(clamp(/** @type {Number} */(tweenModifier(interpolate(fn[2], tn[2], tweenProgress))), 0, 255), 0);
            const a = clamp(/** @type {Number} */(tweenModifier(interpolate(fn[3], tn[3], tweenProgress))), 0, 1);
            value = `rgba(${r},${g},${b},${a})`;
            if (tweenHasComposition) {
              const ns = tween._numbers;
              ns[0] = r;
              ns[1] = g;
              ns[2] = b;
              ns[3] = a;
            }
          } else if (tweenValueType === valueTypes.COMPLEX) {
            value = tween._strings[0];
            for (let j = 0, l = tween._toNumbers.length; j < l; j++) {
              const n = /** @type {Number} */(tweenModifier(round(interpolate(tween._fromNumbers[j], tween._toNumbers[j], tweenProgress), 5)));
              const s = tween._strings[j + 1];
              value += `${s ? n + s : n}`;
              if (tweenHasComposition) {
                tween._numbers[j] = n;
              }
            }
          }

          // For additive tweens and Animatables
          if (tweenHasComposition) {
            tween._number = number;
          }

          if (!internalRender && tweenComposition !== compositionTypes.blend) {

            const tweenProperty = tween.property;
            const tweenType = tween._tweenType;
            tweenTarget = tween.target;

            if (tweenType === tweenTypes.OBJECT) {
              tweenTarget[tweenProperty] = value;
            } else if (tweenType === tweenTypes.ATTRIBUTE) {
              tweenTarget.setAttribute(tweenProperty, value);
            } else {
              tweenStyle = /** @type {DOMTarget} */(tweenTarget).style;
              if (tweenType === tweenTypes.TRANSFORM) {
                if (tweenTarget !== tweenTargetTransforms) {
                  tweenTargetTransforms = tweenTarget;
                  // NOTE: Referencing the cachedTransforms in the tween property directly can be a little bit faster but appears to increase memory usage.
                  tweenTargetTransformsProperties = tweenTarget[transformsSymbol];
                }
                tweenTargetTransformsProperties[tweenProperty] = value;
                tweenTransformsNeedUpdate = 1;
              } else if (tweenType === tweenTypes.CSS) {
                tweenStyle[tweenProperty] = value;
              } else if (tweenType === tweenTypes.CSS_VAR) {
                tweenStyle.setProperty(tweenProperty,/** @type {String} */(value));
              }
            }

            if (hasBegun) hasRendered = 1;

          } else {
            // Used for composing timeline tweens without having to do a real render
            tween._value = value;
          }

        }

        // NOTE: Possible improvement: Use translate(x,y) / translate3d(x,y,z) syntax
        // to reduce memory usage on string composition
        if (tweenTransformsNeedUpdate && tween._renderTransforms) {
          let str = emptyString;
          for (let key in tweenTargetTransformsProperties) {
            str += `${transformsFragmentStrings[key]}${tweenTargetTransformsProperties[key]}) `;
          }
          tweenStyle.transform = str;
          tweenTransformsNeedUpdate = 0;
        }

        tween = tween._next;
      }

      if (hasRendered && !muteCallbacks) {
        /** @type {$Animation} */(tickable).onRender(/** @type {$Animation} */(tickable));
      }
    }

  }

  // End tweens rendering

  // Start onComplete callback and resolve Promise

  if (hasBegun && isOverTime) {
    if (_iterationCount === Infinity) {
      // Offset the tickable _startTime with its duration to reset currentTime to 0 and continue the infinite timer
      tickable._startTime += tickable.duration;
    } else if (tickable._currentIteration >= _iterationCount - 1) {
      // By setting paused to true, we tell the engine loop to not render this tickable and removes it from the list
      tickable.paused = true;
      if (!tickable.completed) {
        tickable.completed = true;
        if (!muteCallbacks) {
          tickable.onComplete(tickable);
          tickable._resolve(tickable);
        }
      }
    }
  }

  // TODO: return hasRendered * direction (negative for backwards) this way we can remove the tickable._backwards property completly
  return hasRendered;
};

/**
 * @param  {Tickable} tickable
 * @param  {Number} time
 * @param  {Number} muteCallbacks
 * @param  {Number} internalRender
 * @param  {Number} tickMode
 * @return {void}
 */
const tick = (tickable, time, muteCallbacks, internalRender, tickMode) => {
  render(tickable, time, muteCallbacks, internalRender, tickMode);
  if (tickable._hasChildren) {
    let hasRendered = 0;
    // Don't use the iteration time with internalRender
    // otherwise it will be converted twice further down the line
    const childrenTime = internalRender ? time : tickable._iterationTime;
    const childrenTickTime = now();
    forEachChildren(tickable, (/** @type {$Animation} */child) => {
      hasRendered += render(
        child,
        (childrenTime - child._offset) * child._speed,
        muteCallbacks,
        internalRender,
        child._fps < tickable._fps ? child.requestTick(childrenTickTime) : tickMode
      );
    }, tickable._backwards);

    if (tickable.began && hasRendered) {
      /** @type {Timeline} */(tickable).onRender(/** @type {Timeline} */(tickable));
    }
  }
};




const additive = {
  animation: null,
  update: noop,
};

/**
 * @typedef AdditiveAnimation
 * @property {Number} duration
 * @property {Number} _delay
 * @property {Tween} _head
 * @property {Tween} _tail
 */

/**
 * @param  {TweenAdditiveLookups} lookups
 * @return {AdditiveAnimation}
 */
const addAdditiveAnimation = lookups => {
  let animation = additive.animation;
  if (!animation) {
    animation = {
      duration: minValue,
      _offset: 0,
      _delay: 0,
      _head: null,
      _tail: null,
    };
    additive.animation = animation;
    additive.update = () => {
      lookups.forEach(propertyAnimation => {
        for (let propertyName in propertyAnimation) {
          const tweens = propertyAnimation[propertyName];
          const lookupTween = tweens._head;
          const additiveValues = lookupTween._valueType === valueTypes.COMPLEX ? cloneArray(lookupTween._fromNumbers) : null;
          let additiveValue = lookupTween._fromNumber;
          let tween = tweens._tail;
          while (tween && tween !== lookupTween) {
            if (additiveValues) {
              tween._numbers.forEach((value, i) => additiveValues[i] += value);
            } else {
              additiveValue += tween._number;
            }
            tween = tween._prevAdd;
          }
          lookupTween._toNumber = additiveValue;
          lookupTween._toNumbers = additiveValues;
        }
      });
      tick(animation, 1, 1, 0, tickModes.FORCE);
    };
  }
  return animation;
};




/**
 * @type {Function}
 * @return {Number}
 */
const engineTickMethod = isBrowser ? requestAnimationFrame : setImmediate;

/**
 * @type {Function}
 * @return {Number}
 */
const engineCancelMethod = isBrowser ? cancelAnimationFrame : clearImmediate;

class Engine extends Clock {
  constructor() {
    super();

    // Clock's parameters
    const initTime = now();
    this.currentTime = initTime;
    this._elapsedTime = initTime;
    this._startTime = initTime;
    this._lastTime = initTime;

    // Engine's parameters
    this.useDefaultMainLoop = true;
    this.suspendWhenHidden = true;
    this._reqId = 0;
    /** @type {Tickable} */
    this._head = null;
    /** @type {Tickable} */
    this._tail = null;
  }

  update() {
    const time = this.currentTime = now();
    if (this.requestTick(time)) {
      this.computeDeltaTime(time);
      const engineSpeed = this._speed;
      const engineFps = this._fps;
      let activeTickable = this._head;
      while (activeTickable) {
        const nextTickable = activeTickable._next;
        if (!activeTickable.paused) {
          tick(
            activeTickable,
            (time - activeTickable._startTime) * activeTickable._speed * engineSpeed,
            0, // !muteCallbacks
            0, // !internalRender
            // Only process the tick of the child clock if its frameRate is lower than the engine
            activeTickable._fps < engineFps ? activeTickable.requestTick(time) : tickModes.AUTO
          );
        } else {
          removeChild(engine, activeTickable);
          this._hasChildren = !!this._tail;
          activeTickable._running = false;
          if (activeTickable.completed && !activeTickable._cancelled) {
            activeTickable.cancel();
          }
        }
        activeTickable = nextTickable;
      }
      additive.update();
    }
  }

  start() {
    return this.useDefaultMainLoop && !this._reqId ? this._reqId = engineTickMethod(mainLoop) : 0;
  }

  resume() {
    forEachChildren(this, (/** @type {Tickable} */child) => child.resetTime());
    return this.start();
  }

  suspend() {
    this._reqId = engineCancelMethod(this._reqId);
    return this;
  }

  get playbackRate() {
    return super.playbackRate;
  }

  set playbackRate(playbackRate) {
    super.playbackRate = playbackRate;
    // Forces children time to reset by reseting their playbackRate
    forEachChildren(this, (/** @type {Tickable} */child) => child.playbackRate = child._speed);
  }
}

const engine = new Engine();

const mainLoop = () => {
  if (engine._head) {
    engine._reqId = engineTickMethod(mainLoop);
    engine.update();
  } else {
    engine._reqId = 0;
  }
};




/**
 * @param  {TargetsParam} targets
 * @return {TargetsArray}
 */
const parseTargets = targets => {
  if (isNil(targets)) return;
  if (isArr(targets)) {
    const targetsArray = /** @type {Array} */(targets);
    // TODO: Remove spread operator?
    const parsed = [].concat(...targetsArray.map(toArray));
     // TODO: Test again if Set is more performant than indexOf
    return parsed.filter((t, index) => parsed.indexOf(t) === index);
  } else {
    return toArray(targets);
  }
};

/**
 * @param  {TargetsParam} targets
 * @return {TargetsArray}
 */
const registerTargets = targets => {
  if (isNil(targets)) return;
  const parsedTargetsArray = parseTargets(targets);
  for (let i = 0, l = parsedTargetsArray.length; i < l; i++) {
    const target = parsedTargetsArray[i];
    if (!target[isRegisteredTargetSymbol]) {
      target[isRegisteredTargetSymbol] = true;
      const isSvgType = isSvg(target);
      const isDom = target.nodeType || isSvgType;
      if (isDom) {
        target[isDomSymbol] = true;
        target[isSvgSymbol] = isSvgType;
        target[transformsSymbol] = {};
      }
    }
  }
  return parsedTargetsArray;
};




/** @type {EasingFunction} */
const none = t => t;

// Cubic Bezier solver adapted from https://github.com/gre/bezier-ease
// © Gaëtan Renaudeau

/**
 * @param  {Number} aT
 * @param  {Number} aA1
 * @param  {Number} aA2
 * @return {Number}
 */
const calcBezier = (aT, aA1, aA2) => (((1 - 3 * aA2 + 3 * aA1) * aT + (3 * aA2 - 6 * aA1)) * aT + (3 * aA1)) * aT;

/**
 * @param  {Number} aX
 * @param  {Number} mX1
 * @param  {Number} mX2
 * @return {Number}
 */
const binarySubdivide = (aX, mX1, mX2) => {
  let aA = 0, aB = 1, currentX, currentT, i = 0;
  do {
    currentT = aA + (aB - aA) / 2;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (abs(currentX) > .0000001 && ++i < 100);
  return currentT;
};

/**
 * @param  {Number} mX1
 * @param  {Number} mY1
 * @param  {Number} mX2
 * @param  {Number} mY2
 * @return {EasingFunction}
 */
const cubicBezier = (mX1, mY1, mX2, mY2) => (mX1 === mY1 && mX2 === mY2) ? none :
  t => t === 0 || t === 1 ? t :
  calcBezier(binarySubdivide(t, mX1, mX2), mY1, mY2);

/**
 * Steps ease implementation https://developer.mozilla.org/fr/docs/Web/CSS/transition-timing-function
 * Only covers 'end' and 'start' jumpterms
 * @param  {Number} steps
 * @param  {Boolean} [fromStart]
 * @return {EasingFunction}
 */
const steps = (steps = 10, fromStart) => {
  const roundMethod = fromStart ? ceil : floor;
  return t => roundMethod(clamp(t, 0, 1) * steps) * (1 / steps);
};

// Robert Penner's ease functions adapted from http://www.robertpenner.com/ease

/**
 * @callback PowerEasing
 * @param {Number} [power=1.675]
 * @return {EasingFunction}
 */

/**
 * @callback BackEasing
 * @param {Number} [overshoot=1.70158]
 * @return {EasingFunction}
 */

/**
 * @callback ElasticEasing
 * @param {Number} [amplitude=1]
 * @param {Number} [period=.3]
 * @return {EasingFunction}
 */

/**
 * @callback EaseFactory
 * @param {Number} [paramA]
 * @param {Number} [paramB]
 * @return {EasingFunction|Number}
 */

/** @typedef {PowerEasing|BackEasing|ElasticEasing} EasesFactory */

const halfPI = PI / 2;
const doublePI = PI * 2;
/** @type {PowerEasing} */
const easeInPower = (p = 1.64) => t => pow(t, +p);

/** @type {Record<String, EasesFactory|EasingFunction>} */
const easeInFunctions = {
  [emptyString]: easeInPower,
  Quad: easeInPower(2),
  Cubic: easeInPower(3),
  Quart: easeInPower(4),
  Quint: easeInPower(5),
  /** @type {EasingFunction} */
  Sine: t => 1 - cos(t * halfPI),
  /** @type {EasingFunction} */
  Circ: t => 1 - sqrt(1 - t * t),
  /** @type {EasingFunction} */
  Expo: t => t ? pow(2, 10 * t - 10) : 0,
  /** @type {EasingFunction} */
  Bounce: t => {
    let pow2, b = 4;
    while (t < ((pow2 = pow(2, --b)) - 1) / 11);
    return 1 / pow(4, 3 - b) - 7.5625 * pow((pow2 * 3 - 2) / 22 - t, 2);
  },
  /** @type {BackEasing} */
  Back: (overshoot = 1.70158) => t => (+overshoot + 1) * t * t * t - +overshoot * t * t,
  /** @type {ElasticEasing} */
  Elastic: (amplitude = 1, period = .3) => {
    const a = clamp(+amplitude, 1, 10);
    const p = clamp(+period, minValue, 2);
    const s = (p / doublePI) * asin(1 / a);
    const e = doublePI / p;
    return t => t === 0 || t === 1 ? t : -a * pow(2, -10 * (1 - t)) * sin(((1 - t) - s) * e);
  }
};

/**
 * @callback EaseType
 * @param {EasingFunction} Ease
 * @return {EasingFunction}
 */

/** @type {Record<String, EaseType>} */
const easeTypes = {
  in: easeIn => t => easeIn(t),
  out: easeIn => t => 1 - easeIn(1 - t),
  inOut: easeIn => t => t < .5 ? easeIn(t * 2) / 2 : 1 - easeIn(t * -2 + 2) / 2,
  outIn: easeIn => t => t < .5 ? (1 - easeIn(1 - t * 2)) / 2 : (easeIn(t * 2 - 1) + 1) / 2,
};

/**
 * Without parameters, the linear function creates a non-eased transition.
 * Parameters, if used, creates a piecewise linear easing by interpolating linearly between the specified points.
 * @param  {...String|Number} [args] - Points
 * @return {EasingFunction}
 */
const linear = (...args) => {
  const argsLength = args.length;
  if (!argsLength) return none;
  const totalPoints = argsLength - 1;
  const firstArg = args[0];
  const lastArg = args[totalPoints];
  const xPoints = [0];
  const yPoints = [parseNumber(firstArg)];
  for (let i = 1; i < totalPoints; i++) {
    const arg = args[i];
    const splitValue = isStr(arg) ?
    /** @type {String} */(arg).trim().split(' ') :
    [arg];
    const value = splitValue[0];
    const percent = splitValue[1];
    xPoints.push(!isUnd(percent) ? parseNumber(percent) / 100 : i / totalPoints);
    yPoints.push(parseNumber(value));
  }
  yPoints.push(parseNumber(lastArg));
  xPoints.push(1);
  return function easeLinear(t) {
    for (let i = 1, l = xPoints.length; i < l; i++) {
      const currentX = xPoints[i];
      if (t <= currentX) {
        const prevX = xPoints[i - 1];
        const prevY = yPoints[i - 1];
        return prevY + (yPoints[i] - prevY) * (t - prevX) / (currentX - prevX);
      }
    }
    return yPoints[yPoints.length - 1];
  }
};

/**
 * Generate random steps
 * @param  {Number} [length] - The number of steps
 * @param  {Number} [randomness] - How strong the randomness is
 * @return {EasingFunction}
 */
const irregular = (length = 10, randomness = 1) => {
  const values = [0];
  const total = length - 1;
  for (let i = 1; i < total; i++) {
    const previousValue = values[i - 1];
    const spacing = i / total;
    const segmentEnd = (i + 1) / total;
    const randomVariation = spacing + (segmentEnd - spacing) * Math.random();
    // Mix the even spacing and random variation based on the randomness parameter
    const randomValue = spacing * (1 - randomness) + randomVariation * randomness;
    values.push(clamp(randomValue, previousValue, 1));
  }
  values.push(1);
  return linear(...values);
};

/**
 * @typedef  {Object} EasesFunctions
 * @property {typeof linear} [linear]
 * @property {typeof irregular} [irregular]
 * @property {typeof steps} [steps]
 * @property {typeof cubicBezier} [cubicBezier]
 * @property {PowerEasing} [in]
 * @property {PowerEasing} [out]
 * @property {PowerEasing} [inOut]
 * @property {PowerEasing} [outIn]
 * @property {EasingFunction} [inQuad]
 * @property {EasingFunction} [outQuad]
 * @property {EasingFunction} [inOutQuad]
 * @property {EasingFunction} [outInQuad]
 * @property {EasingFunction} [inCubic]
 * @property {EasingFunction} [outCubic]
 * @property {EasingFunction} [inOutCubic]
 * @property {EasingFunction} [outInCubic]
 * @property {EasingFunction} [inQuart]
 * @property {EasingFunction} [outQuart]
 * @property {EasingFunction} [inOutQuart]
 * @property {EasingFunction} [outInQuart]
 * @property {EasingFunction} [inQuint]
 * @property {EasingFunction} [outQuint]
 * @property {EasingFunction} [inOutQuint]
 * @property {EasingFunction} [outInQuint]
 * @property {EasingFunction} [inSine]
 * @property {EasingFunction} [outSine]
 * @property {EasingFunction} [inOutSine]
 * @property {EasingFunction} [outInSine]
 * @property {EasingFunction} [inCirc]
 * @property {EasingFunction} [outCirc]
 * @property {EasingFunction} [inOutCirc]
 * @property {EasingFunction} [outInCirc]
 * @property {EasingFunction} [inExpo]
 * @property {EasingFunction} [outExpo]
 * @property {EasingFunction} [inOutExpo]
 * @property {EasingFunction} [outInExpo]
 * @property {EasingFunction} [inBounce]
 * @property {EasingFunction} [outBounce]
 * @property {EasingFunction} [inOutBounce]
 * @property {EasingFunction} [outInBounce]
 * @property {BackEasing} [inBack]
 * @property {BackEasing} [outBack]
 * @property {BackEasing} [inOutBack]
 * @property {BackEasing} [outInBack]
 * @property {ElasticEasing} [inElastic]
 * @property {ElasticEasing} [outElastic]
 * @property {ElasticEasing} [inOutElastic]
 * @property {ElasticEasing} [outInElastic]
 */

/** @type {EasesFunctions} */
const eases = { linear, irregular, steps, cubicBezier };
const easesLookups = { linear: none };

for (let type in easeTypes) {
  for (let name in easeInFunctions) {
    const easeIn = easeInFunctions[name];
    const easeType = easeTypes[type];
    const hasParams = name === emptyString || name === 'Back' || name === 'Elastic';
    /** @type {EasesFactory|EasingFunction} */
    const easeFactory = hasParams ?
      (a, b) => easeType(/** @type {EasesFactory} */(easeIn)(a, b)) :
      easeType(/** @type {EasingFunction} */(easeIn));
    const easeName = type + name;
    eases[easeName] = easeFactory;
    // Apply default parameters for built-in eases so they can be called without '()'
    /** @type {EaseFactory} */
    easesLookups[easeName] = hasParams ? /** @type {EasesFactory} */(easeFactory)() : easeFactory;
  }
}

/**
 * @param  {String} string
 * @return {EasingFunction}
 */
const parseEaseString = string => {
  if (string.indexOf('(') <= -1) return none;
  const split = string.slice(0, -1).split('(');
  const parsedFn = eases[split[0]];
  const result = parsedFn ? easesLookups[string] = parsedFn(...split[1].split(',')) : none;
  return result;
};

/**
 * @param  {EasingParam} ease
 * @return {EasingFunction}
 */
const parseEasings = ease => isFnc(ease) ? ease :
  isStr(ease) ? easesLookups[ease] ? easesLookups[ease] :
  parseEaseString(/** @type {String} */(ease)) : none;




/**
 * @param  {DOMTarget} target
 * @param  {String} propName
 * @param  {Object} animationInlineStyles
 * @return {String}
 */
const parseInlineTransforms = (target, propName, animationInlineStyles) => {
  const inlineTransforms = target.style.transform;
  let inlinedStylesPropertyValue;
  if (inlineTransforms) {
    const cachedTransforms = target[transformsSymbol];
    let t; while (t = transformsExecRgx.exec(inlineTransforms)) {
      const inlinePropertyName = t[1];
      // const inlinePropertyValue = t[2];
      const inlinePropertyValue = t[2].slice(1, -1);
      cachedTransforms[inlinePropertyName] = inlinePropertyValue;
      if (inlinePropertyName === propName) {
        inlinedStylesPropertyValue = inlinePropertyValue;
        // Store the new parsed inline styles if animationInlineStyles is provided
        if (animationInlineStyles) {
          animationInlineStyles[propName] = inlinePropertyValue;
        }
      }
    }
  }
  return inlineTransforms && !isUnd(inlinedStylesPropertyValue) ? inlinedStylesPropertyValue :
    stringStartsWith(propName, 'scale') ? '1' :
    stringStartsWith(propName, 'rotate') || stringStartsWith(propName, 'skew') ? '0deg' : '0px';
};




/**
 * @param  {TargetsParam} path
 * @return {SVGGeometryElement|undefined}
 */
const getPath = path => {
  const parsedTargets = parseTargets(path);
  const $parsedSvg = /** @type {SVGGeometryElement} */(parsedTargets[0]);
  if (!$parsedSvg || !isSvg($parsedSvg)) return;
  return $parsedSvg;
};

/**
 * @callback morphCallback
 * @param {SVGGeometryElement} $path1
 * @return {Array.<String>}
 *
 * @param  {TargetsParam} path2
 * @param  {Number} [precision]
 * @return {morphCallback}
 */
const morphTo = (path2, precision = .33) => ($path1) => {
  const $path2 = /** @type {SVGGeometryElement} */(getPath(path2));
  if (!$path2) return;
  const isPath = $path1.tagName === 'path';
  const separator = isPath ? ' ' : ',';
  const previousPoints = $path1[morphPointsSymbol];
  if (previousPoints) $path1.setAttribute(isPath ? 'd' : 'points', previousPoints);

  let v1 = '', v2 = '';

  if (!precision) {
    v1 = $path1.getAttribute(isPath ? 'd' : 'points');
    v2 = $path2.getAttribute(isPath ? 'd' : 'points');
  } else {
    const length1 = $path1.getTotalLength();
    const length2 = $path2.getTotalLength();
    const maxPoints = Math.max(Math.ceil(length1 * precision), Math.ceil(length2 * precision));
    for (let i = 0; i < maxPoints; i++) {
      const t = i / (maxPoints - 1);
      const pointOnPath1 = $path1.getPointAtLength(length1 * t);
      const pointOnPath2 = $path2.getPointAtLength(length2 * t);
      const prefix = isPath ? (i === 0 ? 'M' : 'L') : '';
      v1 += prefix + round(pointOnPath1.x, 3) + separator + pointOnPath1.y + ' ';
      v2 += prefix + round(pointOnPath2.x, 3) + separator + pointOnPath2.y + ' ';
    }
  }

  $path1[morphPointsSymbol] = v2;

  return [v1, v2];
};

/**
 * @param  {SVGGeometryElement} $el
 * @param  {Number} start
 * @param  {Number} end
 * @return {Proxy}
 */
function createDrawableProxy($el, start, end) {
  const elStyles = getComputedStyle($el);
  const strokeWidth = parseFloat(elStyles.strokeWidth);
  const strokeLineCap = elStyles.strokeLinecap;
  const extraStroke = strokeLineCap === 'butt' ? 0 : strokeWidth;
  const totalPathLength = $el.getTotalLength();
  const p = 0;
  const P = 100000;
  const bleed = round(P / (totalPathLength), p);
  const butt = extraStroke * bleed;
  const pathLength = P - butt;
  const proxy = new Proxy($el, {
    get(target, property) {
      const value = target[property];
      if (property === proxyTargetSymbol) return target;
      if (property === 'setAttribute') {
        return (...args) => {
          if (args[0] === 'draw') {
            const value = args[1];
            const values = value.split(' ');
            const v1 = +values[0];
            const v2 = +values[1];
            const bl = (v1 !== 0 && v1 === v2) || (v1 === 1 || v2 === 1) ? 0 : bleed;
            const os = round((v1 * -P), p);
            const d1 = round((v2 * P) + os, p);
            const d2 = round(P - d1, p);
            target.setAttribute('stroke-dashoffset', `${os + bl}`);
            target.setAttribute('stroke-dasharray', `${d1 + bl} ${(d2 + bl + 1) + butt}`);
          }
          return Reflect.apply(value, target, args);
        };
      }
      return isFnc(value) ? (...args) => Reflect.apply(value, target, args) : value;
    }
  });
  if ($el.getAttribute('pathLength') !== `${pathLength}`) {
    $el.setAttribute('pathLength', `${pathLength}`);
    proxy.setAttribute('draw', `${start} ${end}`);
  }
  return /** @type {typeof Proxy} */(/** @type {unknown} */(proxy));
}

/**
 * @param  {TargetsParam}  selector
 * @param  {number}  [start=0]
 * @param  {number}  [end=0]
 * @return {Array.<Proxy>}
 */
const createDrawable = (selector, start = 0, end = 0) => {
  const els = parseTargets(selector);
  els.forEach(($el, i) => els[i] = createDrawableProxy(/** @type {SVGGeometryElement} */($el), start, end));
  return /** @type {Array.<Proxy>} */(els);
};

// Motion path animation

/**
 * @param  {SVGGeometryElement} $path
 * @param  {Number} progress
 * @param  {Number} lookup
 * @return {DOMPoint}
 */
const getPathPoint = ($path, progress, lookup = 0) => {
  return $path.getPointAtLength(progress + lookup >= 1 ? progress + lookup : 0);
};

/**
 * @param  {SVGGeometryElement} $path
 * @param  {String} pathProperty
 * @return {FunctionValue}
 */
const getPathProgess = ($path, pathProperty) => {
  return $el => {
    const totalLength = +($path.getTotalLength());
    const inSvg = $el[isSvgSymbol];
    const ctm = $path.getCTM();
    /** @type {TweenObjectValue} */
    return {
      from: 0,
      to: totalLength,
      /** @type {TweenModifier} */
      modifier: progress => {
        if (pathProperty === 'a') {
          const p0 = getPathPoint($path, progress, -1);
          const p1 = getPathPoint($path, progress, +1);
          return atan2(p1.y - p0.y, p1.x - p0.x) * 180 / PI;
        } else {
          const p = getPathPoint($path, progress, 0);
          return pathProperty === 'x' ?
            inSvg ? p.x : p.x * ctm.a + p.y * ctm.c + ctm.e :
            inSvg ? p.y : p.x * ctm.b + p.y * ctm.d + ctm.f
        }
      }
    }
  }
};

/**
 * @param {TargetsParam} path
 */
const createMotionPath = path => {
  const $path = getPath(path);
  if (!$path) return;
  return {
    x: getPathProgess($path, 'x'),
    y: getPathProgess($path, 'y'),
    angle: getPathProgess($path, 'a'),
  }
};

// Check for valid SVG attribute

const cssReservedProperties = ['opacity', 'rotate', 'overflow', 'color'];

/**
 * @param  {Target} el
 * @param  {String} propertyName
 * @return {Boolean}
 */
const isValidSVGAttribute = (el, propertyName) => {
  // Return early and use CSS opacity animation instead (already better default values (opacity: 1 instead of 0)) and rotate should be considered a transform
  if (cssReservedProperties.includes(propertyName)) return false;
  if (propertyName in /** @type {DOMTarget} */(el).style || propertyName in el) {
    if (propertyName === 'scale') { // Scale
      const elParentNode = /** @type {SVGGeometryElement} */(el.parentNode);
      // Only consider scale as a valid SVG attribute on filter element
      return elParentNode && elParentNode.tagName === 'filter';
    }
    return true;
  }
};

const svg = {
  morphTo,
  createMotionPath,
  createDrawable,
};




/**
 * RGB / RGBA Color value string -> RGBA values array
 * @param  {String} rgbValue
 * @return {ColorArray}
 */
const rgbToRgba = rgbValue => {
  const rgba = rgbExecRgx.exec(rgbValue) || rgbaExecRgx.exec(rgbValue);
  const a = !isUnd(rgba[4]) ? +rgba[4] : 1;
  return [
    +rgba[1],
    +rgba[2],
    +rgba[3],
    a
  ]
};

/**
 * HEX3 / HEX3A / HEX6 / HEX6A Color value string -> RGBA values array
 * @param  {String} hexValue
 * @return {ColorArray}
 */
const hexToRgba = hexValue => {
  const hexLength = hexValue.length;
  const isShort = hexLength === 4 || hexLength === 5;
  return [
    +('0x' + hexValue[1] + hexValue[isShort ? 1 : 2]),
    +('0x' + hexValue[isShort ? 2 : 3] + hexValue[isShort ? 2 : 4]),
    +('0x' + hexValue[isShort ? 3 : 5] + hexValue[isShort ? 3 : 6]),
    ((hexLength === 5 || hexLength === 9) ? +(+('0x' + hexValue[isShort ? 4 : 7] + hexValue[isShort ? 4 : 8]) / 255).toFixed(3) : 1)
  ]
};

/**
 * @param  {Number} p
 * @param  {Number} q
 * @param  {Number} t
 * @return {Number}
 */
const hue2rgb = (p, q, t) => {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  return t < 1 / 6 ? p + (q - p) * 6 * t :
         t < 1 / 2 ? q :
         t < 2 / 3 ? p + (q - p) * (2 / 3 - t) * 6 :
         p;
};

/**
 * HSL / HSLA Color value string -> RGBA values array
 * @param  {String} hslValue
 * @return {ColorArray}
 */
const hslToRgba = hslValue => {
  const hsla = hslExecRgx.exec(hslValue) || hslaExecRgx.exec(hslValue);
  const h = +hsla[1] / 360;
  const s = +hsla[2] / 100;
  const l = +hsla[3] / 100;
  const a = !isUnd(hsla[4]) ? +hsla[4] : 1;
  let r, g, b;
  if (s === 0) {
    r = g = b = l;
  } else {
    const q = l < .5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = round(hue2rgb(p, q, h + 1 / 3) * 255, 0);
    g = round(hue2rgb(p, q, h) * 255, 0);
    b = round(hue2rgb(p, q, h - 1 / 3) * 255, 0);
  }
  return [r, g, b, a];
};

/**
 * All in one color converter that converts a color string value into an array of RGBA values
 * @param  {String} colorString
 * @return {ColorArray}
 */
const convertColorStringValuesToRgbaArray = colorString => {
  return isRgb(colorString) ? rgbToRgba(colorString) :
         isHex(colorString) ? hexToRgba(colorString) :
         isHsl(colorString) ? hslToRgba(colorString) :
         [0, 0, 0, 1];
};




/**
 * @template T, D
 * @param {T|undefined} targetValue
 * @param {D} defaultValue
 * @return {T|D}
 */
const setValue = (targetValue, defaultValue) => {
  return isUnd(targetValue) ? defaultValue : targetValue;
};

/**
 * @param  {TweenPropValue} value
 * @param  {Target} target
 * @param  {Number} index
 * @param  {Number} total
 * @param  {Object} [store]
 * @return {any}
 */
const getFunctionValue = (value, target, index, total, store) => {
  if (isFnc(value)) {
    const func = () => {
      const computed = /** @type {Function} */(value)(target, index, total);
      // Fallback to 0 if the function returns undefined / NaN / null / false / 0
      return !isNaN(+computed) ? +computed : computed || 0;
    };
    if (store) {
      store.func = func;
    }
    return func();
  } else {
    return value;
  }
};

/**
 * @param  {Target} target
 * @param  {String} prop
 * @return {tweenTypes}
 */
const getTweenType = (target, prop) => {
  const type = !target[isDomSymbol] ? tweenTypes.OBJECT :
    // Handle SVG attributes
    target[isSvgSymbol] && isValidSVGAttribute(target, prop) ? tweenTypes.ATTRIBUTE :
    // Handle CSS Transform properties differently than CSS to allow individual animations
    validTransforms.includes(prop) || shortTransforms.get(prop) ? tweenTypes.TRANSFORM :
    // CSS variables
    stringStartsWith(prop, '--') ? tweenTypes.CSS_VAR :
    // All other CSS properties
    prop in /** @type {DOMTarget} */(target).style ? tweenTypes.CSS :
    // Handle DOM Attributes
    !isNil(target.getAttribute(prop)) ? tweenTypes.ATTRIBUTE :
    !isUnd(target[prop]) ? tweenTypes.OBJECT : tweenTypes.INVALID;
    if (type === tweenTypes.INVALID) console.warn(`Can't find property '${prop}' on target '${target}'.`);
  return type;
};

/**
 * @param  {DOMTarget} target
 * @param  {String} propName
 * @param  {Object} animationInlineStyles
 * @return {String}
 */
const getCSSValue = (target, propName, animationInlineStyles) => {
  const inlineStyles = target.style[propName];
  if (inlineStyles && animationInlineStyles) {
    animationInlineStyles[propName] = inlineStyles;
  }
  const value = inlineStyles || getComputedStyle(target[proxyTargetSymbol] || target).getPropertyValue(propName);
  return value === 'auto' ? '0' : value;
};

/**
 * @param {Target} target
 * @param {String} propName
 * @param {tweenTypes} [tweenType]
 * @param {Object|void} [animationInlineStyles]
 * @return {String|Number}
 */
const getOriginalAnimatableValue = (target, propName, tweenType, animationInlineStyles) => {
  const type = !isUnd(tweenType) ? tweenType : getTweenType(target, propName);
  return type === tweenTypes.OBJECT ? target[propName] || 0 :
         type === tweenTypes.ATTRIBUTE ? target.getAttribute(propName) :
         type === tweenTypes.TRANSFORM ? parseInlineTransforms(/** @type {DOMTarget} */(target), propName, animationInlineStyles) :
         type === tweenTypes.CSS_VAR ? getCSSValue(/** @type {DOMTarget} */(target), propName, animationInlineStyles).trimStart() :
         getCSSValue(/** @type {DOMTarget} */(target), propName, animationInlineStyles);
};

/**
 * @param  {Number} x
 * @param  {Number} y
 * @param  {String} operator
 * @return {Number}
 */
const getRelativeValue = (x, y, operator) => {
  return operator === '-' ? x - y :
         operator === '+' ? x + y :
         x * y;
};

/** @return {TweenDecomposedValue} */
const createDecomposedValueTargetObject = () => {
  return {
    /** @type {valueTypes} */
    t: valueTypes.NUMBER,
    n: 0,
    u: null,
    o: null,
    d: null,
    s: null,
  }
};

/**
 * @param  {String|Number} rawValue
 * @param  {TweenDecomposedValue} targetObject
 * @return {TweenDecomposedValue}
 */
const decomposeRawValue = (rawValue, targetObject) => {
  /** @type {valueTypes} */
  targetObject.t = valueTypes.NUMBER;
  targetObject.n = 0;
  targetObject.u = null;
  targetObject.o = null;
  targetObject.d = null;
  targetObject.s = null;
  if (!rawValue) return targetObject;
  let val = rawValue;
  const numberedVal = +val;
  // It's a number
  if (!isNaN(numberedVal)) {
    targetObject.n = numberedVal;
    return targetObject;
  } else {
    // NOTE: Test if it's possible to use string starts with instead?
    const matchedRelativeOperator = relativeValuesExecRgx.exec(/** @type {String} */(val));
    if (matchedRelativeOperator) {
      val = /** @type {String} */(val).slice(2);
      targetObject.o = matchedRelativeOperator[0][0];
    }
    // Skip unit match if the value contains a space to prevent long rgx backtracking
    const unitMatch = /** @type {String} */(val).includes(' ') ? false :
    unitsExecRgx.exec(/** @type {String} */(val));
    // Has a number and a unit
    if (unitMatch) {
      targetObject.t = valueTypes.UNIT;
      targetObject.n = +unitMatch[1];
      targetObject.u = unitMatch[2];
      return targetObject;
    // Has an operator like +=, -=, *=
    } else if (targetObject.o) {
      targetObject.n = +val;
      return targetObject;
    // Is a color
    } else if (isCol(val)) {
      targetObject.t = valueTypes.COLOR;
      targetObject.d = convertColorStringValuesToRgbaArray(/** @type {String} */(val));
      return targetObject;
    // Is a more complex string
    } else {
      const stringifiedVal = val + emptyString;
      const matchedNumbers = stringifiedVal.match(digitWithExponentRgx);
      targetObject.t = valueTypes.COMPLEX;
      targetObject.d = matchedNumbers ? matchedNumbers.map(Number) : [];
      targetObject.s = stringifiedVal.split(digitWithExponentRgx) || [];
      return targetObject;
    }
  }
};

/**
 * @param  {Tween} tween
 * @param  {TweenDecomposedValue} targetObject
 * @return {TweenDecomposedValue}
 */
const decomposeTweenValue = (tween, targetObject) => {
  targetObject.t = tween._valueType;
  targetObject.n = tween._toNumber;
  targetObject.u = tween._unit;
  targetObject.o = null;
  targetObject.d = cloneArray(tween._toNumbers);
  targetObject.s = cloneArray(tween._strings);
  return targetObject;
};

const decomposedOriginalValue = createDecomposedValueTargetObject();




const propertyNamesCache = {};

/**
 * @param  {String} propertyName
 * @param  {Target} target
 * @param  {tweenTypes} tweenType
 * @return {String}
 */
const sanitizePropertyName = (propertyName, target, tweenType) => {
  if (tweenType === tweenTypes.TRANSFORM) {
    const t = shortTransforms.get(propertyName);
    return t ? t : propertyName;
  } else if (
    tweenType === tweenTypes.CSS ||
    // Handle special cases where properties like "strokeDashoffset" needs to be set as "stroke-dashoffset"
    // but properties like "baseFrequency" should stay in lowerCamelCase
    (tweenType === tweenTypes.ATTRIBUTE && (isSvg(target) && propertyName in target.style))
  ) {
    const cachedPropertyName = propertyNamesCache[propertyName];
    if (cachedPropertyName) {
      return cachedPropertyName;
    } else {
      const lowerCaseName = toLowerCase(propertyName);
      propertyNamesCache[propertyName] = lowerCaseName;
      return lowerCaseName;
    }
  } else {
    return propertyName;
  }
};




const angleUnitsMap = { 'deg': 1, 'rad': 180 / PI, 'turn': 360 };
const convertedValuesCache = {};

/**
 * @param  {Target} el
 * @param  {TweenDecomposedValue} decomposedValue
 * @param  {String} unit
 * @param  {Boolean} [force]
 * @return {TweenDecomposedValue}
 */
const convertValueUnit = (el, decomposedValue, unit, force = false) => {
  const currentUnit = decomposedValue.u;
  const currentNumber = decomposedValue.n;
  if (decomposedValue.t === valueTypes.UNIT && currentUnit === unit) { // TODO: Check if checking against the same unit string is necessary
    return decomposedValue;
  }
  const cachedKey = currentNumber + currentUnit + unit;
  const cached = convertedValuesCache[cachedKey];
  if (!isUnd(cached) && !force) {
    decomposedValue.n = cached;
  } else {
    let convertedValue;
    if (currentUnit in angleUnitsMap) {
      convertedValue = currentNumber * angleUnitsMap[currentUnit] / angleUnitsMap[unit];
    } else {
      const baseline = 100;
      const tempEl = el.cloneNode();
      const parentNode = el.parentNode;
      const parentEl = (parentNode && (parentNode !== doc)) ? parentNode : doc.body;
      parentEl.appendChild(tempEl);
      const elStyle = tempEl.style;
      elStyle.width = baseline + currentUnit;
      const currentUnitWidth = /** @type {HTMLElement} */(tempEl).offsetWidth || baseline;
      elStyle.width = baseline + unit;
      const newUnitWidth = /** @type {HTMLElement} */(tempEl).offsetWidth || baseline;
      const factor = currentUnitWidth / newUnitWidth;
      parentEl.removeChild(tempEl);
      convertedValue = factor * currentNumber;
    }
    decomposedValue.n = convertedValue;
    convertedValuesCache[cachedKey] = convertedValue;
  }
  decomposedValue.t === valueTypes.UNIT;
  decomposedValue.u = unit;
  return decomposedValue;
};




const lookups = {
  /** @type {TweenReplaceLookups} */
  _rep: new WeakMap(),
  /** @type {TweenAdditiveLookups} */
  _add: new Map(),
};

/**
 * @param  {Target} target
 * @param  {String} property
 * @param  {String} lookup
 * @return {TweenPropertySiblings}
 */
const getTweenSiblings = (target, property, lookup = '_rep') => {
  const lookupMap = lookups[lookup];
  let targetLookup = lookupMap.get(target);
  if (!targetLookup) {
    targetLookup = {};
    lookupMap.set(target, targetLookup);
  }
  return targetLookup[property] ? targetLookup[property] : targetLookup[property] = {
    _head: null,
    _tail: null,
  }
};

/**
 * @param  {Tween} p
 * @param  {Tween} c
 * @return {Number|Boolean}
 */
const addTweenSortMethod = (p, c) => {
  return p._isOverridden || p._absoluteStartTime > c._absoluteStartTime;
};

/**
 * @param {Tween} tween
 */
const overrideTween = tween => {
  tween._isOverlapped = 1;
  tween._isOverridden = 1;
  tween._changeDuration = minValue;
  tween._currentTime = minValue;
};

/**
 * @param  {Tween} tween
 * @param  {TweenPropertySiblings} siblings
 * @return {Tween}
 */
const composeTween = (tween, siblings) => {

  const tweenCompositionType = tween._composition;

  // Handle replaced tweens

  if (tweenCompositionType === compositionTypes.replace) {

    const tweenAbsStartTime = tween._absoluteStartTime;

    addChild(siblings, tween, addTweenSortMethod, '_prevRep', '_nextRep');

    const prevSibling = tween._prevRep;

    // Update the previous siblings for composition replace tweens

    if (prevSibling) {

      const prevParent = prevSibling.parent;
      const prevAbsEndTime = prevSibling._absoluteStartTime + prevSibling._changeDuration;

      // Handle looped animations tween

      if (
        // Check if the previous tween is from a different animation
        tween.parent.id !== prevParent.id &&
        // Check if the animation has loops
        prevParent._iterationCount > 1 &&
        // Check if _absoluteChangeEndTime of last loop overlaps the current tween
        prevAbsEndTime + (prevParent.duration - prevParent._iterationDuration) > tweenAbsStartTime
      ) {

        // TODO: Find a way to only override the iterations overlapping with the tween
        overrideTween(prevSibling);

        let prevPrevSibling = prevSibling._prevRep;

        // If the tween was part of a set of keyframes, override its siblings
        while (prevPrevSibling && prevPrevSibling.parent.id === prevParent.id) {
          overrideTween(prevPrevSibling);
          prevPrevSibling = prevPrevSibling._prevRep;
        }

      }

      const absoluteUpdateStartTime = tweenAbsStartTime - tween._delay;

      if (prevAbsEndTime > absoluteUpdateStartTime) {

        const prevChangeStartTime = prevSibling._startTime;
        const prevTLOffset = prevAbsEndTime - (prevChangeStartTime + prevSibling._updateDuration);

        // prevSibling._absoluteEndTime = absoluteUpdateStartTime;
        prevSibling._changeDuration = absoluteUpdateStartTime - prevTLOffset - prevChangeStartTime;
        prevSibling._currentTime = prevSibling._changeDuration;
        prevSibling._isOverlapped = 1;

        if (prevSibling._changeDuration < minValue) {
          overrideTween(prevSibling);
          // removeChild(siblings, prevSibling, '_prevRep', '_nextRep');
          // addChild(siblings, tween, addTweenSortMethod, '_prevRep', '_nextRep');
        }
      }

      // Pause (and cancel) the parent if it only contains overriden tweens

      let parentActiveAnimation = 0;

      forEachChildren(prevParent, (/** @type Tween */t) => {
        parentActiveAnimation -= t._isOverridden - 1;
      });

      if (parentActiveAnimation === 0) {
        // Calling .cancel() on a TL child might alter the other children render order
        // So instead, we mark it as completed + .pause()
        // This way we let the engine taking care of removing it safely
        prevParent.completed = true;
        prevParent.pause();
      }

    }

    // let nextSibling = tween._nextRep;

    // // All the next siblings are automatically overridden

    // if (nextSibling && nextSibling._absoluteStartTime >= tweenAbsStartTime) {
    //   while (nextSibling) {
    //     overrideTween(nextSibling);
    //     nextSibling = nextSibling._nextRep;
    //   }
    // }

    // if (nextSibling && nextSibling._absoluteStartTime < tweenAbsStartTime) {
    //   while (nextSibling) {
    //     overrideTween(nextSibling);
    //     console.log(tween.id, nextSibling.id);
    //     nextSibling = nextSibling._nextRep;
    //   }
    // }

  // Handle additive tweens composition

  } else if (tweenCompositionType === compositionTypes.blend) {

    const additiveTweenSiblings = getTweenSiblings(tween.target, tween.property, '_add');
    const additiveAnimation = addAdditiveAnimation(lookups._add);

    let lookupTween = additiveTweenSiblings._head;

    if (!lookupTween) {
      lookupTween = { ...tween };
      lookupTween._composition = compositionTypes.replace;
      lookupTween._updateDuration = minValue;
      lookupTween._startTime = 0;
      lookupTween._numbers = cloneArray(tween._fromNumbers);
      lookupTween._number = 0;
      lookupTween._next = null;
      lookupTween._prev = null;
      addChild(additiveTweenSiblings, lookupTween);
      addChild(additiveAnimation, lookupTween);
    }

    // Convert the values of TO to FROM and set TO to 0

    const toNumber = tween._toNumber;
    tween._fromNumber = lookupTween._fromNumber - toNumber;
    tween._toNumber = 0;
    tween._numbers = cloneArray(tween._fromNumbers);
    tween._number = 0;
    lookupTween._fromNumber = toNumber;

    if (tween._toNumbers) {
      const toNumbers = cloneArray(tween._toNumbers);
      if (toNumbers) {
        toNumbers.forEach((value, i) => {
          tween._fromNumbers[i] = lookupTween._fromNumbers[i] - value;
          tween._toNumbers[i] = 0;
        });
      }
      lookupTween._fromNumbers = toNumbers;
    }

    addChild(additiveTweenSiblings, tween, null, '_prevAdd', '_nextAdd');

  }

  return tween;

};

/**
 * @param  {Tween} tween
 * @return {Tween}
 */
const removeTweenSliblings = tween => {
  const tweenComposition = tween._composition;
  if (tweenComposition !== compositionTypes.none) {
    const tweenTarget = tween.target;
    const tweenProperty = tween.property;
    const tweenSiblings = getTweenSiblings(tweenTarget, tweenProperty);
    removeChild(tweenSiblings, tween, '_prevRep', '_nextRep');
    if (tweenComposition === compositionTypes.blend) {
      const additiveTweenSliblings = getTweenSiblings(tweenTarget, tweenProperty, '_add');
      removeChild(additiveTweenSliblings, tween, '_prevAdd', '_nextAdd');
    }
  }
  return tween;
};




/**
 * @param  {Timer} timer
 * @return {Timer}
 */
const resetTimerProperties = timer => {
  timer.paused = true;
  timer.began = false;
  timer.completed = false;
  return timer;
};

/**
 * @param  {Timer} timer
 * @return {Timer}
 */
const reviveTimer = timer => {
  if (!timer._cancelled) return timer;
  if (timer._hasChildren) {
    forEachChildren(timer, reviveTimer);
  } else {
    forEachChildren(timer, (/** @type {Tween} tween*/tween) => {
      if (tween._composition !== compositionTypes.none) {
        composeTween(tween, getTweenSiblings(tween.target, tween.property));
      }
    });
  }
  timer._cancelled = 0;
  return timer;
};

let timerId = 0;

/**
 * Base class used to create Timers, Animations and Timelines
 */
class Timer extends Clock {
  /**
   * @param {TimerParams} [parameters]
   * @param {Timeline} [parent]
   * @param {Number} [parentPosition]
   */
  constructor(parameters = {}, parent = null, parentPosition = 0) {

    super();

    const {
      id,
      delay,
      duration,
      reversed,
      alternate,
      loop,
      loopDelay,
      autoplay,
      frameRate,
      playbackRate,
      onComplete,
      onLoop,
      onBegin,
      onUpdate,
    } = parameters;

    if (globals.scope) globals.scope.revertibles.push(this);
    const timerInitTime = parent ? 0 : engine._elapsedTime;
    const timerDefaults = parent ? parent.defaults : globals.defaults;
    const timerDelay = isFnc(delay) || isUnd(delay) ? timerDefaults.delay : +delay;
    const timerDuration = isFnc(duration) || isUnd(duration) ? Infinity : +duration;
    const timerLoop = setValue(loop, timerDefaults.loop);
    const timerLoopDelay = setValue(loopDelay, timerDefaults.loopDelay);
    const timerIterationCount = timerLoop === true || timerLoop === Infinity || /** @type {Number} */(timerLoop) < 0 ? Infinity : /** @type {Number} */(timerLoop) + 1;

    // Timer's parameters
    this.id = !isUnd(id) ? id : duration === minValue ? 0 : ++timerId;
    // NOTE: Parent timeline is currently stored only for fast tween composition in timeline
    /** @type {Timeline} */
    this.parent = parent;
    // Total duration of the timer
    this.duration = clampInfinity(((timerDuration + timerLoopDelay) * timerIterationCount) - timerLoopDelay);
    /** @type {Boolean} */
    this.paused = true;
    /** @type {Boolean} */
    this.began = false;
    /** @type {Boolean} */
    this.completed = false;
    /** @type {Number} */
    this.reversed = +setValue(reversed, timerDefaults.reversed);
    /** @type {TimerCallback} */
    this.onBegin = onBegin || timerDefaults.onBegin;
    /** @type {TimerCallback} */
    this.onUpdate = onUpdate || timerDefaults.onUpdate;
    /** @type {TimerCallback} */
    this.onLoop = onLoop || timerDefaults.onLoop;
    /** @type {TimerCallback} */
    this.onComplete = onComplete || timerDefaults.onComplete;
    /** @type {Boolean|Scroller} */
    this._autoplay = parent ? false : setValue(autoplay, timerDefaults.autoplay);
    /** @type {Number} */
    this._offset = parent ? parentPosition : engine._elapsedTime - engine._startTime;
    /** @type {Number} */
    this._delay = timerDelay;
    /** @type {Number} */
    this._loopDelay = timerLoopDelay;
    /** @type {Number} */
    this._iterationTime = 0;
    /** @type {Number} */
    this._iterationDuration = timerDuration; // Duration of one loop
    /** @type {Number} */
    this._iterationCount = timerIterationCount; // Number of loops
    /** @type {Number} */
    this._currentIteration = 0; // Current loop index
    /** @type {Function} */
    this._resolve = noop; // Used by .then()
    /** @type {Boolean} */
    this._hasChildren = false;
    /** @type {Boolean} */
    this._running = false;
    /** @type {Number} */
    this._cancelled = 0;
    /** @type {Number} */
    this._reversed = this.reversed;
    /** @type {Boolean} */
    this._alternate = setValue(alternate, timerDefaults.alternate);
    /** @type {Boolean} */
    this._backwards = false;
    /** @type {Renderable} */
    this._prev = null;
    /** @type {Renderable} */
    this._next = null;

    // Clock's parameters
    /** @type {Number} */
    this._elapsedTime = timerInitTime;
    /** @type {Number} */
    this._startTime = timerInitTime;
    /** @type {Number} */
    this._lastTime = timerInitTime;
    /** @type {Number} */
    this._fps = setValue(frameRate, timerDefaults.frameRate);
    /** @type {Number} */
    this._speed = setValue(playbackRate, timerDefaults.playbackRate);
  }

  get progress() {
    return round(this.currentTime / this.duration, 6);
  }

  set progress(progress) {
    const paused = this.paused;
    // Pausing the timer is necessary to avoid time jumps
    this.pause().seek(this.duration * +progress);
    if (!paused) this.play();
  }

  // get currentTime() {
  //   return this._time;
  // }

  // set currentTime(time) {
  //   this.seek(+time);
  // }

  get playbackRate() {
    return super.playbackRate;
  }

  set playbackRate(playbackRate) {
    super.playbackRate = playbackRate;
    this.resetTime();
  }

  /**
   * @param  {Number} internalRender
   * @return {this}
   */
  reset(internalRender = 0) {
    // If cancelled, revive the timer before rendering in order to have propertly composed tweens siblings
    reviveTimer(this);
    if (!this._reversed !== !this.reversed) {
      this.reverse();
    }
    // Render timer before changing completed parameters to prevent skips and to make sure the properties are not overridden
    // Setting the iterationTime at the end to force the rendering to happend backwards, otherwise calling .reset() on Timelines might not render children in the right order
    // NOTE: This is only required for Timelines and might be better to move to the Timeline class?
    this._iterationTime = this._iterationDuration;
    // Set tickMode to tickModes.FORCE to force rendering
    tick(this, 0, 1, internalRender, tickModes.FORCE);
    // Reset timer properties after revive / render to make sure the props are not updated again
    resetTimerProperties(this);
    // Also reset children properties
    if (this._hasChildren) {
      forEachChildren(this, resetTimerProperties);
    }
    return this;
  }

  /**
   * @param  {Number} internalRender
   * @return {this}
   */
  init(internalRender = 0) {
    this.frameRate = this._fps;
    this.playbackRate = this._speed;
    // Manually calling .init() on timelines should render all children intial state
    // Forces all children to render once then render to 0 when reseted
    if (!internalRender && this._hasChildren) {
      tick(this, this.duration, 1, internalRender, tickModes.FORCE);
    }
    this.reset(internalRender);
    // Make sure to set autoplay to false if timer has a parent
    const autoplay = this._autoplay;
    if (autoplay === true) {
      this.play();
    } else if (!internalRender && autoplay && !isUnd(autoplay.linked)) {
      autoplay.link(this);
    }
    return this;
  }

  /**
   * @return {this}
   */
  resetTime() {
    const timeScale = 1 / (this._speed * engine._speed);
    // Offset by 12 ms to reduce the lag between the initialization and the rendering of the first frame
    this._startTime = now() - (this.currentTime + this._delay) * timeScale - 12;
    return this;
  }

  /**
   * @return {this}
   */
  pause() {
    if (this.paused) return this;
    this.paused = true;
    return this;
  }

  /**
   * @return {this}
   */
  play() {
    if (!this.paused) return this;
    this.paused = false;
    if (this.duration <= minValue) {
      // timer, time = 1, muteCallbacks = 0, internalRendering = 0, tickMode = 0
      tick(this, 1, 0, 0, tickModes.FORCE);
    } else {
      if (!this._running) {
        addChild(engine, this);
        engine._hasChildren = true;
        this._running = true;
      }
      this.resetTime();
      engine.start();
    }
    return this;
  }

  /**
   * @return {this}
   */
  restart() {
    return this.reset(0).play();
  }

  /**
   * @param  {Number} time
   * @param  {Boolean|Number} [muteCallbacks]
   * @return {this}
   */
  seek(time, muteCallbacks) {
    // Recompose the tween siblings in case the timer has been cancelled
    reviveTimer(this);
    // If you seek a completed animation, otherwise the next play will starts at 0
    this.completed = false;
    const isPaused = this.paused;
    this.paused = true;
    // timer, time, muteCallbacks, internalRendering, tickMode
    tick(this, time + this._delay, ~~muteCallbacks, 0, tickModes.AUTO);
    return isPaused ? this : this.play();
  }

  /**
   * @return {this}
   */
  reverse() {
    const reversed = this.reversed;
    this.reversed = +(this._alternate && !(this._iterationCount % 2) ? reversed : !reversed);
    this.seek(this.duration - this.currentTime);
    this.resetTime();
    return this;
  }

  playForward() {
    return this.reversed ? this.reverse().play() : this.play();
  }

  playBackward() {
    return !this.reversed ? this.reverse().play() : this.play();
  }

  // TODO: Move all the animation / tweens / children related code to Animation / Timeline

  /**
   * @return {this}
   */
  cancel() {
    if (this._hasChildren) {
      forEachChildren(this, (/** @type {Timer} */child) => child.cancel(), true);
    } else {
      forEachChildren(this, removeTweenSliblings);
    }
    this._cancelled = 1;
    // Pausing the timer removes it from the engine
    return this.pause();
  }

  /**
   * @param  {Number} newDuration
   * @return {this}
   */
  stretch(newDuration) {
    const currentDuration = this.duration;
    if (currentDuration === newDuration) return this;
    const timeScale = newDuration / currentDuration;
    this.duration = clampZero(clampInfinity(currentDuration * timeScale));
    this._iterationDuration = clampZero(clampInfinity(this._iterationDuration * timeScale));
    this._offset *= timeScale;
    this._delay *= timeScale;
    this._loopDelay *= timeScale;
    return this;
  }

 /**
   * Cancel the timer by seeking it back to 0 and reverting the attached scroller if necessary
   * @return {this}
   */
  revert() {
    tick(this, 0, 1, 0, tickModes.FORCE);
    const autoplay = /** @type {Scroller} */(this._autoplay);
    if (autoplay.linked) autoplay.revert();
    return this.cancel();
  }

  /**
   * @param  {TimerCallback} [callback]
   * @return {Promise}
   */
  then(callback = noop) {
    const then = this.then;
    const onResolve = () => {
      // this.then = null prevents infinite recursion if returned by an async function
      // https://github.com/juliangarnierorg/anime-beta/issues/26
      this.then = null;
      callback(this);
      this.then = then;
      this._resolve = noop;
    };
    return new Promise(r => {
      this._resolve = () => r(onResolve());
      // Make sure to resolve imediatly if the timer has already completed
      if (this.completed) this._resolve();
      return this;
    });
  }

}




/**
 * @template {Renderable} T
 * @param {T} renderable
 * @return {T}
 */
const cleanInlineStyles = renderable => {
  // Allow cleanInlineStyles() to be called on timelines
  if (renderable._hasChildren) {
    forEachChildren(renderable, cleanInlineStyles, true);
  } else {
    const animation = /** @type {Animation} */(renderable);
    animation.pause();
    forEachChildren(animation, (/** @type {Tween} */tween) => {
      const tweenProperty = tween.property;
      const tweenTarget = tween.target;
      if (tweenTarget[isDomSymbol]) {
        const targetStyle = /** @type {DOMTarget} */(tweenTarget).style;
        const originalInlinedValue = animation._inlineStyles[tweenProperty];
        if (tween._tweenType === tweenTypes.TRANSFORM) {
          const cachedTransforms = tweenTarget[transformsSymbol];
          if (isUnd(originalInlinedValue) || originalInlinedValue === emptyString) {
            delete cachedTransforms[tweenProperty];
          } else {
            cachedTransforms[tweenProperty] = originalInlinedValue;
          }
          if (tween._renderTransforms) {
            if (!Object.keys(cachedTransforms).length) {
              targetStyle.removeProperty('transform');
            } else {
              let str = emptyString;
              for (let key in cachedTransforms) {
                str += transformsFragmentStrings[key] + cachedTransforms[key] + ') ';
              }
              targetStyle.transform = str;
            }
          }
        } else {
          if (isUnd(originalInlinedValue) || originalInlinedValue === emptyString) {
            targetStyle.removeProperty(tweenProperty);
          } else {
            targetStyle[tweenProperty] = originalInlinedValue;
          }
        }
        if (animation._tail === tween) {
          animation.targets.forEach((/** @type {Target} */t) => {
            if (t.getAttribute && t.getAttribute('style') === emptyString) {
              t.removeAttribute('style');
            }          });
        }
      }
    });
  }
  return renderable;
};

// Defines decomposed values target objects only once and mutate their properties later to avoid GC
// TODO: Maybe move the objects creation to values.js and use the decompose function to create the base object
const fromTargetObject = createDecomposedValueTargetObject();
const toTargetObject = createDecomposedValueTargetObject();
const toFunctionStore = { func: null };
const keyframesTargetArray = [null];
const fastSetValuesArray = [null, null];
/** @type {TweenKeyValue} */
const keyObjectTarget = { to: null };

let tweenId = 0;
let keyframes;
/** @type {TweenParamsOptions & TweenValues} */
let key;

/**
 * @param {DurationKeyframes | PercentageKeyframes} keyframes
 * @param {AnimationParams} parameters
 * @return {AnimationParams}
 */
const generateKeyframes = (keyframes, parameters) => {
  /** @type {AnimationParams} */
  const properties = {};
  if (isArr(keyframes)) {
    const propertyNames = [].concat(.../** @type {DurationKeyframes} */(keyframes).map(key => Object.keys(key))).filter(isKey);
    for (let i = 0, l = propertyNames.length; i < l; i++) {
      const propName = propertyNames[i];
      const propArray = /** @type {DurationKeyframes} */(keyframes).map(key => {
        /** @type {TweenKeyValue} */
        const newKey = {};
        for (let p in key) {
          const keyValue = /** @type {TweenPropValue} */(key[p]);
          if (isKey(p)) {
            if (p === propName) {
              newKey.to = keyValue;
            }
          } else {
            newKey[p] = keyValue;
          }
        }
        return newKey;
      });
      properties[propName] = /** @type {ArraySyntaxValue} */(propArray);
    }

  } else {
    const totalDuration = /** @type {Number} */(setValue(parameters.duration, globals.defaults.duration));
    const keys = Object.keys(keyframes)
    .map(key => { return {o: parseFloat(key) / 100, p: keyframes[key]} })
    .sort((a, b) => a.o - b.o);
    keys.forEach(key => {
      const offset = key.o;
      const prop = key.p;
      for (let name in prop) {
        if (isKey(name)) {
          let propArray = /** @type {Array} */(properties[name]);
          if (!propArray) propArray = properties[name] = [];
          const duration = offset * totalDuration;
          let length = propArray.length;
          let prevKey = propArray[length - 1];
          const keyObj = { to: prop[name] };
          let durProgress = 0;
          for (let i = 0; i < length; i++) {
            durProgress += propArray[i].duration;
          }
          if (length === 1) {
            keyObj.from = prevKey.to;
          }
          if (prop.ease) {
            keyObj.ease = prop.ease;
          }
          keyObj.duration = duration - (length ? durProgress : 0);
          propArray.push(keyObj);
        }
      }
      return key;
    });

    for (let name in properties) {
      const propArray = /** @type {Array} */(properties[name]);
      let prevEase;
      // let durProgress = 0
      for (let i = 0, l = propArray.length; i < l; i++) {
        const prop = propArray[i];
        const currentEase = prop.ease;
        if (prevEase) prop.ease = prevEase;
        prevEase = currentEase;
        // durProgress += prop.duration;
        // if (i === l - 1 && durProgress !== totalDuration) {
        //   propArray.push({ from: prop.to, ease: prop.ease, duration: totalDuration - durProgress })
        // }
      }
      if (!propArray[0].duration) {
        propArray.shift();
      }
    }
  }

  return properties;
};

/**
 * An Animation instance
 */
class Animation extends Timer {
  /**
   * @param {TargetsParam} targets
   * @param {AnimationParams} parameters
   * @param {Timeline} [parent]
   * @param {Number} [parentPosition]
   * @param {Boolean} [fastSet=false]
   * @param {Number} [index=0]
   * @param {Number} [length=0]
   */
  constructor(
    targets,
    parameters,
    parent,
    parentPosition,
    fastSet = false,
    index = 0,
    length = 0
  ) {

    super(/** @type {TimerParams} */(parameters), parent, parentPosition);

    /** @type {Tween} */
    this._head = null;
    /** @type {Tween} */
    this._tail = null;

    const parsedTargets = registerTargets(targets);
    const targetsLength = parsedTargets.length;

    // If the parameters object contains a "keyframes" property, convert all the keyframes values to regular properties

    const kfParams = /** @type {AnimationParams} */(parameters).keyframes;
    const params = /** @type {AnimationParams} */(kfParams ? mergeObjects(generateKeyframes(/** @type {DurationKeyframes} */(kfParams), parameters), parameters) : parameters);

    const { delay, duration, ease, playbackEase, modifier, composition, onRender } = params;

    const animDefaults = parent ? parent.defaults : globals.defaults;
    const animaPlaybackEase = setValue(playbackEase, animDefaults.playbackEase);
    const animEase = animaPlaybackEase ? parseEasings(animaPlaybackEase) : null;
    const hasSpringEasing = !isUnd(ease) && isObj(ease);
    const tEasing = hasSpringEasing ? /** @type {SpringEasing} */(ease).solver : setValue(ease, animEase ? 'linear' : animDefaults.ease);
    const tDuration = hasSpringEasing ? /** @type {SpringEasing} */(ease).duration : setValue(duration, animDefaults.duration);
    const tDelay = setValue(delay, animDefaults.delay);
    const tModifier = modifier || animDefaults.modifier;
    // If no composition is defined and the targets length is high (>= 1000) set the composition to 'none' (0) for faster tween creation
    const tComposition = isUnd(composition) && targetsLength >= K ? compositionTypes.none : !isUnd(composition) ? composition : animDefaults.composition;
    // TODO: Do not create an empty object until we know the animation will generate inline styles
    const animInlineStyles = {};
    const animOffsetTime = this._offset;

    let iterationDuration = NaN;
    let iterationDelay = NaN;
    let animationAnimationLength = 0;

    for (let targetIndex = 0; targetIndex < targetsLength; targetIndex++) {

      const target = parsedTargets[targetIndex];
      const ti = index || targetIndex;
      const tl = length || targetsLength;

      let lastTransformGroupIndex = NaN;
      let lastTransformGroupLength = NaN;

      for (let p in params) {

        if (isKey(p)) {

          const tweenType = getTweenType(target, p);

          if (tweenType !== tweenTypes.INVALID) {

            const propName = sanitizePropertyName(p, target, tweenType);

            let propValue = params[p];

            if (fastSet) {
              fastSetValuesArray[0] = propValue;
              fastSetValuesArray[1] = propValue;
              propValue = fastSetValuesArray;
            }

            // Normalize property values to valid keyframe syntax:
            // [x, y] to [{to: [x, y]}] or {to: x} to [{to: x}] or keep keys syntax [{}, {}, {}...]
            // const keyframes = isArr(propValue) ? propValue.length === 2 && !isObj(propValue[0]) ? [{ to: propValue }] : propValue : [propValue];
            if (isArr(propValue)) {
              const arrayLength = /** @type {Array} */(propValue).length;
              const isNotObjectValue = !isObj(propValue[0]);
              // Convert [x, y] to [{to: [x, y]}]
              if (arrayLength === 2 && isNotObjectValue) {
                keyObjectTarget.to = /** @type {TweenParamValue} */(propValue);
                keyframesTargetArray[0] = keyObjectTarget;
                keyframes = keyframesTargetArray;
              // Convert [x, y, z] to [[x, y], z]
              } else if (arrayLength > 2 && isNotObjectValue) {
                keyframes = [];
                /** @type {Array.<Number>} */(propValue).forEach((v, i) => {
                  if (!i) {
                    fastSetValuesArray[0] = v;
                  } else if (i === 1) {
                    fastSetValuesArray[1] = v;
                    keyframes.push(fastSetValuesArray);
                  } else {
                    keyframes.push(v);
                  }
                });
              } else {
                keyframes = /** @type {Array.<TweenKeyValue>} */(propValue);
              }
            } else {
              keyframesTargetArray[0] = propValue;
              keyframes = keyframesTargetArray;
            }

            let siblings = null;
            let prevTween = null;
            let firstTweenChangeStartTime = NaN;
            let lastTweenChangeEndTime = 0;
            let tweenIndex = 0;

            for (let l = keyframes.length; tweenIndex < l; tweenIndex++) {

              const keyframe = keyframes[tweenIndex];

              if (isObj(keyframe)) {
                key = keyframe;
              } else {
                keyObjectTarget.to = /** @type {TweenParamValue} */(keyframe);
                key = keyObjectTarget;
              }

              toFunctionStore.func = null;

              const computedToValue = getFunctionValue(key.to, target, ti, tl, toFunctionStore);
              let tweenToValue;
              // Allows function based values to return an object syntax value ({to: v})
              if (isObj(computedToValue) && !isUnd(computedToValue.to)) {
                key = computedToValue;
                tweenToValue = computedToValue.to;
              } else {
                tweenToValue = computedToValue;
              }
              const tweenFromValue = getFunctionValue(key.from, target, ti, tl);
              const keyEasing = key.ease;
              const hasSpringEasing = !isUnd(keyEasing) && isObj(keyEasing);
              // Easing are treated differently and don't accept function based value to prevent having to pass a function wrapper that returns an other function all the time
              const tweenEasing = hasSpringEasing ? /** @type {SpringEasing} */(keyEasing).solver : keyEasing || tEasing;
              // Calculate default individual keyframe duration by dividing the tl of keyframes
              const tweenDuration = hasSpringEasing ? /** @type {SpringEasing} */(keyEasing).duration : getFunctionValue(setValue(key.duration, (l > 1 ? getFunctionValue(tDuration, target, ti, tl) / l : tDuration)), target, ti, tl);
              // Default delay value should only be applied to the first tween
              const tweenDelay = getFunctionValue(setValue(key.delay, (!tweenIndex ? tDelay : 0)), target, ti, tl);
              const computedComposition = getFunctionValue(setValue(key.composition, tComposition), target, ti, tl);
              const tweenComposition = isNum(computedComposition) ? computedComposition : compositionTypes[computedComposition];
              // Modifiers are treated differently and don't accept function based value to prevent having to pass a function wrapper
              const tweenModifier = key.modifier || tModifier;
              const isFromToArray = isArr(tweenToValue);
              const isFromToValue = isFromToArray || (!isUnd(tweenFromValue) && !isUnd(tweenToValue));
              const tweenStartTime = prevTween ? lastTweenChangeEndTime + tweenDelay : tweenDelay;
              const absoluteStartTime = animOffsetTime + tweenStartTime;

              let prevSibling = prevTween;

              if (tweenComposition !== compositionTypes.none) {
                if (!siblings) siblings = getTweenSiblings(target, propName);
                let nextSibling = siblings._head;
                // Iterate trough all the next siblings until we find a sibling with an equal or inferior start time
                while (nextSibling && !nextSibling._isOverridden && nextSibling._absoluteStartTime <= absoluteStartTime) {
                  prevSibling = nextSibling;
                  nextSibling = nextSibling._nextRep;
                  // Overrides all the next siblings if the next sibling starts at the same time of after as the new tween start time
                  if (nextSibling && nextSibling._absoluteStartTime >= absoluteStartTime) {
                    while (nextSibling) {
                      overrideTween(nextSibling);
                      // This will ends both the current while loop and the upper one once all the next sibllings have been overriden
                      nextSibling = nextSibling._nextRep;
                    }
                  }
                }
              }

              // Decompose values
              if (isFromToValue) {
                decomposeRawValue(isFromToArray ? getFunctionValue(tweenToValue[0], target, ti, tl) : tweenFromValue, fromTargetObject);
                decomposeRawValue(isFromToArray ? getFunctionValue(tweenToValue[1], target, ti, tl, toFunctionStore) : tweenToValue, toTargetObject);
                if (fromTargetObject.t === valueTypes.NUMBER) {
                  if (prevSibling) {
                    if (prevSibling._valueType === valueTypes.UNIT) {
                      fromTargetObject.t = valueTypes.UNIT;
                      fromTargetObject.u = prevSibling._unit;
                    }
                  } else {
                    decomposeRawValue(
                      getOriginalAnimatableValue(target, propName, tweenType, animInlineStyles),
                      decomposedOriginalValue
                    );
                    if (decomposedOriginalValue.t === valueTypes.UNIT) {
                      fromTargetObject.t = valueTypes.UNIT;
                      fromTargetObject.u = decomposedOriginalValue.u;
                    }
                  }
                }
              } else {
                if (!isUnd(tweenToValue)) {
                  decomposeRawValue(tweenToValue, toTargetObject);
                } else {
                  if (prevTween) {
                    decomposeTweenValue(prevTween, toTargetObject);
                  } else {
                    // No need to get and parse the original value if the tween is part of a timeline and has a previous sibling part of the same timeline
                    decomposeRawValue(parent && prevSibling && prevSibling.parent.parent === parent ? prevSibling._value :
                    getOriginalAnimatableValue(target, propName, tweenType, animInlineStyles), toTargetObject);
                  }
                }
                if (!isUnd(tweenFromValue)) {
                  decomposeRawValue(tweenFromValue, fromTargetObject);
                } else {
                  if (prevTween) {
                    decomposeTweenValue(prevTween, fromTargetObject);
                  } else {
                    decomposeRawValue(parent && prevSibling && prevSibling.parent.parent === parent ? prevSibling._value :
                    // No need to get and parse the original value if the tween is part of a timeline and has a previous sibling part of the same timeline
                    getOriginalAnimatableValue(target, propName, tweenType, animInlineStyles), fromTargetObject);
                  }
                }
              }

              // Apply operators
              if (fromTargetObject.o) {
                fromTargetObject.n = getRelativeValue(
                  !prevSibling ? decomposeRawValue(
                    getOriginalAnimatableValue(target, propName, tweenType, animInlineStyles),
                    decomposedOriginalValue
                  ).n : prevSibling._toNumber,
                  fromTargetObject.n,
                  fromTargetObject.o
                );
              }

              if (toTargetObject.o) {
                toTargetObject.n = getRelativeValue(fromTargetObject.n, toTargetObject.n, toTargetObject.o);
              }

              // Values omogenisation in cases of type difference between "from" and "to"
              if (fromTargetObject.t !== toTargetObject.t) {
                if (fromTargetObject.t === valueTypes.COMPLEX || toTargetObject.t === valueTypes.COMPLEX) {
                  const complexValue = fromTargetObject.t === valueTypes.COMPLEX ? fromTargetObject : toTargetObject;
                  const notComplexValue = fromTargetObject.t === valueTypes.COMPLEX ? toTargetObject : fromTargetObject;
                  notComplexValue.t = valueTypes.COMPLEX;
                  notComplexValue.s = cloneArray(complexValue.s);
                  notComplexValue.d = complexValue.d.map(() => notComplexValue.n);
                } else if (fromTargetObject.t === valueTypes.UNIT || toTargetObject.t === valueTypes.UNIT) {
                  const unitValue = fromTargetObject.t === valueTypes.UNIT ? fromTargetObject : toTargetObject;
                  const notUnitValue = fromTargetObject.t === valueTypes.UNIT ? toTargetObject : fromTargetObject;
                  notUnitValue.t = valueTypes.UNIT;
                  notUnitValue.u = unitValue.u;
                } else if (fromTargetObject.t === valueTypes.COLOR || toTargetObject.t === valueTypes.COLOR) {
                  const colorValue = fromTargetObject.t === valueTypes.COLOR ? fromTargetObject : toTargetObject;
                  const notColorValue = fromTargetObject.t === valueTypes.COLOR ? toTargetObject : fromTargetObject;
                  notColorValue.t = valueTypes.COLOR;
                  notColorValue.s = colorValue.s;
                  notColorValue.d = [0, 0, 0, 1];
                }
              }

              // Unit conversion
              if (fromTargetObject.u !== toTargetObject.u) {
                let valueToConvert = toTargetObject.u ? fromTargetObject : toTargetObject;
                valueToConvert = convertValueUnit(target, valueToConvert, toTargetObject.u ? toTargetObject.u : fromTargetObject.u, false);
                // TODO:
                // convertValueUnit(target, to.u ? from : to, to.u ? to.u : from.u);
              }

              // Fill in non existing complex values
              if (toTargetObject.d && fromTargetObject.d && (toTargetObject.d.length !== fromTargetObject.d.length)) {
                const longestValue = fromTargetObject.d.length > toTargetObject.d.length ? fromTargetObject : toTargetObject;
                const shortestValue = longestValue === fromTargetObject ? toTargetObject : fromTargetObject;
                // TODO: Check if n should be used instead of 0 for default complex values
                shortestValue.d = longestValue.d.map((_, i) => isUnd(shortestValue.d[i]) ? 0 : shortestValue.d[i]);
                shortestValue.s = cloneArray(longestValue.s);
              }

              // Tween factory

              const tweenUpdateDuration = +tweenDuration || minValue;

              /** @type {Tween} */
              const tween = {
                parent: this,
                id: tweenId++,
                property: propName,
                target: target,
                _value: null,
                _func: toFunctionStore.func,
                _ease: parseEasings(tweenEasing),
                _fromNumbers: cloneArray(fromTargetObject.d),
                _toNumbers: cloneArray(toTargetObject.d),
                _strings: cloneArray(toTargetObject.s),
                _fromNumber: fromTargetObject.n,
                _toNumber: toTargetObject.n,
                _numbers: cloneArray(fromTargetObject.d), // For additive tween and animatables
                _number: fromTargetObject.n, // For additive tween and animatables
                _unit: toTargetObject.u,
                _modifier: tweenModifier,
                _currentTime: 0,
                _startTime: tweenStartTime,
                _delay: +tweenDelay,
                _updateDuration: tweenUpdateDuration,
                _changeDuration: tweenUpdateDuration,
                _absoluteStartTime: absoluteStartTime,
                // NOTE: Investigate bit packing to stores ENUM / BOOL
                _tweenType: tweenType,
                _valueType: toTargetObject.t,
                _composition: tweenComposition,
                _isOverlapped: 0,
                _isOverridden: 0,
                _renderTransforms: 0,
                _prevRep: null, // For replaced tween
                _nextRep: null, // For replaced tween
                _prevAdd: null, // For additive tween
                _nextAdd: null, // For additive tween
                _prev: null,
                _next: null,
              };

              if (tweenComposition !== compositionTypes.none) {
                composeTween(tween, siblings);
              }

              if (isNaN(firstTweenChangeStartTime)) {
                firstTweenChangeStartTime = tween._startTime;
              }

              lastTweenChangeEndTime = tweenStartTime + tweenUpdateDuration;
              prevTween = tween;
              animationAnimationLength++;

              addChild(this, tween);

            }

            // Update animation timings with the added tweens properties

            if (isNaN(iterationDelay) || firstTweenChangeStartTime < iterationDelay) {
              iterationDelay = firstTweenChangeStartTime;
            }

            if (isNaN(iterationDuration) || lastTweenChangeEndTime > iterationDuration) {
              iterationDuration = lastTweenChangeEndTime;
            }

            // TODO: Find a way to inline tween._renderTransforms = 1 here
            if (tweenType === tweenTypes.TRANSFORM) {
              lastTransformGroupIndex = animationAnimationLength - tweenIndex;
              lastTransformGroupLength = animationAnimationLength;
            }

          }

        }

      }

      // Set _renderTransforms to last transform property to correctly render the transforms list
      if (!isNaN(lastTransformGroupIndex)) {
        let i = 0;
        forEachChildren(this, (/** @type {Tween} */tween) => {
          if (i >= lastTransformGroupIndex && i < lastTransformGroupLength) {
            tween._renderTransforms = 1;
            if (tween._composition === compositionTypes.blend) {
              forEachChildren(additive.animation, (/** @type {Tween} */additiveTween) => {
                if (additiveTween.id === tween.id) {
                  additiveTween._renderTransforms = 1;
                }
              });
            }
          }
          i++;
        });
      }

    }

    if (!targetsLength) {
      console.warn(`No target found. Make sure the element you're trying to animate is accessible before creating your animation.`);
    }

    if (iterationDelay) {
      forEachChildren(this, (/** @type {Tween} */tween) => {
        // If (startTime - delay) equals 0, this means the tween is at the begining of the animation so we need to trim the delay too
        if (!(tween._startTime - tween._delay)) {
          tween._delay -= iterationDelay;
        }
        tween._startTime -= iterationDelay;
      });
      iterationDuration -= iterationDelay;
    } else {
      iterationDelay = 0;
    }

    // Prevents iterationDuration to be NaN if no valid animatable props have been provided
    // Prevents _iterationCount to be NaN if no valid animatable props have been provided
    if (!iterationDuration) {
      iterationDuration = minValue;
      this._iterationCount = 0;
    }

    this.targets = parsedTargets;
    this.duration = clampInfinity(((iterationDuration + this._loopDelay) * this._iterationCount) - this._loopDelay) || minValue;
    /** @type {AnimationCallback} */
    this.onRender = onRender || animDefaults.onRender;
        /** @type {EasingFunction} */
    this._ease = animEase;
    this._delay = iterationDelay;
    // NOTE: I'm keeping delay values separated from offsets in timelines because delays can override previous tweens and it could be confusing to debug a timeline with overridden tweens and no associated visible delays.
    // this._delay = parent ? 0 : iterationDelay;
    // this._offset += parent ? iterationDelay : 0;
    this._iterationDuration = iterationDuration;
    this._inlineStyles = animInlineStyles;
  }

  /**
   * @param  {Number} newDuration
   * @return {this}
   */
  stretch(newDuration) {
    const currentDuration = this.duration;
    if (currentDuration === newDuration) return this;
    const timeScale = newDuration / currentDuration;
    forEachChildren(this, (/** @type {Tween} */tween) => {
      tween._updateDuration = clampZero(tween._updateDuration * timeScale);
      tween._changeDuration = clampZero(tween._changeDuration * timeScale);
      tween._currentTime *= timeScale;
      tween._startTime *= timeScale;
      tween._absoluteStartTime *= timeScale;
    });
    return super.stretch(newDuration);
  }

  /**
   * @return {this}
   */
  refresh() {
    forEachChildren(this, (/** @type {Tween} */tween) => {
      const ogValue = getOriginalAnimatableValue(tween.target, tween.property, tween._tweenType);
      decomposeRawValue(ogValue, decomposedOriginalValue);
      tween._fromNumbers = cloneArray(decomposedOriginalValue.d);
      tween._fromNumber = decomposedOriginalValue.n;
      if (tween._func) {
        decomposeRawValue(tween._func(), toTargetObject);
        tween._toNumbers = cloneArray(toTargetObject.d);
        tween._strings = cloneArray(toTargetObject.s);
        tween._toNumber = toTargetObject.n;
      }
    });
    return this;
  }

  /**
   * Cancel the animation and revert all the values affected by this animation to their original state
   * @return {this}
   */
  revert() {
    super.revert();
    return cleanInlineStyles(this);
  }

  /**
   * @param  {AnimationCallback} [callback]
   * @return {Promise}
   */
  then(callback) {
    return super.then(/** @type {TimerCallback} */(callback));
  }

}




/**
 * @overload
 * @param  {DOMTarget|NodeList|String} targetSelector
 * @param  {String} propName
 * @return {String}
 *
 * @overload
 * @param  {Record<String, any>} targetSelector
 * @param  {String} propName
 * @return {Number}
 *
 * @overload
 * @param  {TargetsParam} targetSelector
 * @param  {String} propName
 * @param  {String} unit
 * @return {String}
 *
 * @overload
 * @param  {TargetsParam} targetSelector
 * @param  {String} propName
 * @param  {Boolean} unit
 * @return {Number}
 *
 * @param  {TargetsParam} targetSelector
 * @param  {String} propName
 * @param  {String|Boolean} [unit]
 */
function getTargetValue(targetSelector, propName, unit) {
  const targets = registerTargets(targetSelector);
  if (isNil(targets) || isArr(targets) && !targets.length) return;
  if (targets && targets.length) {
    const [ target ] = targets;
    const tweenType = getTweenType(target, propName);
    const normalizePropName = sanitizePropertyName(propName, target, tweenType);
    let originalValue = getOriginalAnimatableValue(target, normalizePropName);
    if (isUnd(unit)) {
      return originalValue;
    } else {
      decomposeRawValue(originalValue, decomposedOriginalValue);
      if (decomposedOriginalValue.t === valueTypes.NUMBER || decomposedOriginalValue.t === valueTypes.UNIT) {
        if (unit === false) {
          return decomposedOriginalValue.n;
        } else {
          const convertedValue = convertValueUnit(target, decomposedOriginalValue, /** @type {String} */(unit), false);
          return `${round(convertedValue.n, 3)}${convertedValue.u}`;
        }
      }
    }
  }
}

/**
 * @param {TargetsParam} targets
 * @param {AnimationParams} parameters
 * @return {Animation}
 */
const setTargetValues = (targets, parameters) => {
  if (isUnd(parameters)) return;
  parameters.duration = minValue;
  // Do not overrides currently active tweens by default
  parameters.composition = setValue(parameters.composition, compositionTypes.none);
  // Skip init() and force rendering by playing the animation
  return new Animation(targets, parameters, null, 0, true).play();
};

/**
 * @param  {TargetsArray} targetsArray
 * @param  {Animation} animation
 * @return {Boolean}
 */
const removeTargetsFromAnimation = (targetsArray, animation) => {
  let tweensMatchesTargets = false;
  forEachChildren(animation, (/**@type {Tween} */tween) => {
    if (targetsArray.includes(tween.target)) {
      removeChild(animation, tween);
      tweensMatchesTargets = true;
    }
  }, true);
  return tweensMatchesTargets;
};

/**
 * @param  {TargetsParam} targets
 * @param  {Renderable|Engine} [parent]
 * @return {TargetsArray}
 */
const remove = (targets, parent) => {
  const targetsArray = parseTargets(targets);
  const parentClock = parent ? parent : engine;
  let removeMatches;
  if (parentClock._hasChildren) {
    forEachChildren(parentClock, (/**@type {Renderable} */child) => {
      if (!child._hasChildren) {
        removeMatches = removeTargetsFromAnimation(targetsArray, /**@type {Animation} */(child));
        // Remove the child from its parent if he has no tweens and no children left after the removal
        if (removeMatches && !child._head) removeChild(parentClock, child);
      }
      // Make sure to also remove engine's children targets
      // NOTE: Avoid recursion?
      if (child._head) {
        remove(targets, child);
      } else {
        child._hasChildren = false;
      }
    }, true);
  } else {
    removeMatches = removeTargetsFromAnimation(
      targetsArray,
      /**@type {Animation} */(parentClock)
    );
  }

  if (removeMatches && !parentClock._head) {
    parentClock._hasChildren = false;
    const pausableTimer = /**@type {Renderable} */(parentClock);
    // Pause the parent if there are no tweens and no children left after the removal
    // Only pause {Renderable} by checking if the pause function exists
    // NOTE: Find a way to homogenize
    if (pausableTimer.pause) pausableTimer.pause();
  }

  return targetsArray;
};

/**
 * @param  {Number} min
 * @param  {Number} max
 * @param  {Number} [decimalLength]
 * @return {Number}
 */
const random = (min, max, decimalLength) => { const m = 10 ** (decimalLength || 0); return floor((Math.random() * (max - min + (1 / m)) + min) * m) / m };

/**
 * @param  {String|Array} items
 * @return {any}
 */
const randomPick = items => items[random(0, items.length - 1)];

/**
 * https://bost.ocks.org/mike/shuffle/
 * @param  {Array} items
 * @return {Array}
 */
const shuffle = items => {
  let m = items.length - 1, t, i;
  while (m) { i = random(0, m--); t = items[m]; items[m] = items[i]; items[i] = t; }
  return items;
};

/**
 * @param  {Number|String} v
 * @param  {Number} decimalLength
 * @return {String}
 */
const roundPad = (v, decimalLength) => (+v).toFixed(decimalLength);

/**
 * @param  {Number} v
 * @param  {Number} totalLength
 * @param  {String} padString
 * @return {String}
 */
const padStart = (v, totalLength, padString) => `${v}`.padStart(totalLength, padString);

/**
 * @param  {Number} v
 * @param  {Number} totalLength
 * @param  {String} padString
 * @return {String}
 */
const padEnd = (v, totalLength, padString) => `${v}`.padEnd(totalLength, padString);

/**
 * @param  {Number} v
 * @param  {Number} min
 * @param  {Number} max
 * @return {Number}
 */
const wrap = (v, min, max) => (((v - min) % (max - min) + (max - min)) % (max - min)) + min;

/**
 * @param  {Number} value
 * @param  {Number} inLow
 * @param  {Number} inHigh
 * @param  {Number} outLow
 * @param  {Number} outHigh
 * @return {Number}
 */
const mapRange = (value, inLow, inHigh, outLow, outHigh) => outLow + ((value - inLow) / (inHigh - inLow)) * (outHigh - outLow);

/**
 * @param  {Number} degrees
 * @return {Number}
 */
const degToRad = degrees => degrees * PI / 180;

/**
 * @param  {Number} radians
 * @return {Number}
 */
const radToDeg = radians => radians * 180 / PI;

/**
 * https://www.rorydriscoll.com/2016/03/07/frame-rate-independent-damping-using-lerp/
 * @param  {Number} start
 * @param  {Number} end
 * @param  {Number} amount
 * @param  {Renderable|Boolean} [renderable]
 * @return {Number}
 */
const lerp = (start, end, amount, renderable) => {
  let dt = K / globals.defaults.frameRate;
  if (renderable !== false) {
    const ticker = /** @type Renderable */
                   (renderable) ||
                   (engine._hasChildren && engine);
    if (ticker && ticker.deltaTime) {
      dt = ticker.deltaTime;
    }
  }
  const t = 1 - Math.exp(-amount * dt * .1);
  return !amount ? start : amount === 1 ? end : (1 - t) * start + t * end;
};

// Chain-able utilities

/**
 * @callback UtilityFunction
 * @param {...*} args
 * @return {Number|String}
 *
 * @param {UtilityFunction} fn
 * @param {Number} [last=0]
 * @return {function(...(Number|String)): function(Number|String): (Number|String)}
 */
const curry = (fn, last = 0) => (...args) => last ? v => fn(...args, v) : v => fn(v, ...args);

/**
 * @param {Function} fn
 * @return {function(...(Number|String))}
 */
const chain = fn => {
   return (...args) => {
    const result = fn(...args);
    return new Proxy(noop, {
      apply: (_, __, [v]) => result(v),
      get: (_, prop) => chain(/**@param {...Number|String} nextArgs */(...nextArgs) => {
        const nextResult = utils[prop](...nextArgs);
        return (/**@type {Number|String} */v) => nextResult(result(v));
      })
    });
  }
};

/**
 * @param {UtilityFunction} fn
 * @param {Number} [right]
 * @return {function(...(Number|String)): UtilityFunction}
 */
const makeChainable = (fn, right = 0) => (...args) => (args.length < fn.length ? chain(curry(fn, right)) : fn)(...args);

/**
 * @callback ChainedUtilsResult
 * @param {Number} value
 * @return {Number}
 *
 * @typedef {Object} ChainableUtils
 * @property {ChainedClamp} clamp
 * @property {ChainedRound} round
 * @property {ChainedSnap} snap
 * @property {ChainedWrap} wrap
 * @property {ChainedInterpolate} interpolate
 * @property {ChainedMapRange} mapRange
 * @property {ChainedRoundPad} roundPad
 * @property {ChainedPadStart} padStart
 * @property {ChainedPadEnd} padEnd
 * @property {ChainedDegToRad} degToRad
 * @property {ChainedRadToDeg} radToDeg
 *
 * @typedef {ChainableUtils & ChainedUtilsResult} ChainableUtil
 *
 * @callback ChainedClamp
 * @param {Number} min
 * @param {Number} max
 * @return {ChainableUtil}
 *
 * @callback ChainedRound
 * @param {Number} decimalLength
 * @return {ChainableUtil}
 *
 * @callback ChainedSnap
 * @param {Number} increment
 * @return {ChainableUtil}
 *
 * @callback ChainedWrap
 * @param {Number} min
 * @param {Number} max
 * @return {ChainableUtil}
 *
 * @callback ChainedInterpolate
 * @param {Number} start
 * @param {Number} end
 * @return {ChainableUtil}
 *
 * @callback ChainedMapRange
 * @param {Number} inLow
 * @param {Number} inHigh
 * @param {Number} outLow
 * @param {Number} outHigh
 * @return {ChainableUtil}
 *
 * @callback ChainedRoundPad
 * @param {Number} decimalLength
 * @return {ChainableUtil}
 *
 * @callback ChainedPadStart
 * @param {Number} totalLength
 * @param {String} padString
 * @return {ChainableUtil}
 *
 * @callback ChainedPadEnd
 * @param {Number} totalLength
 * @param {String} padString
 * @return {ChainableUtil}
 *
 * @callback ChainedDegToRad
 * @return {ChainableUtil}
 *
 * @callback ChainedRadToDeg
 * @return {ChainableUtil}
 */

const utils = {
  $: registerTargets,
  get: getTargetValue,
  set: setTargetValues,
  remove,
  cleanInlineStyles,
  random,
  randomPick,
  shuffle,
  lerp,
  clamp: /** @type {typeof clamp & ChainedClamp} */(makeChainable(clamp)),
  round: /** @type {typeof round & ChainedRound} */(makeChainable(round)),
  snap: /** @type {typeof snap & ChainedSnap} */(makeChainable(snap)),
  wrap: /** @type {typeof wrap & ChainedWrap} */(makeChainable(wrap)),
  interpolate: /** @type {typeof interpolate & ChainedInterpolate} */(makeChainable(interpolate, 1)),
  mapRange: /** @type {typeof mapRange & ChainedMapRange} */(makeChainable(mapRange)),
  roundPad: /** @type {typeof roundPad & ChainedRoundPad} */(makeChainable(roundPad)),
  padStart: /** @type {typeof padStart & ChainedPadStart} */(makeChainable(padStart)),
  padEnd: /** @type {typeof padEnd & ChainedPadEnd} */(makeChainable(padEnd)),
  degToRad: /** @type {typeof degToRad & ChainedDegToRad} */(makeChainable(degToRad)),
  radToDeg: /** @type {typeof radToDeg & ChainedRadToDeg} */(makeChainable(radToDeg)),
};





/** @type {Map.<Array, SpringEasing>} */
const springsCache = new Map();

/**
 * Spring ease solver adapted from https://webkit.org/demos/spring/spring.js
 * Webkit Copyright © 2016 Apple Inc
 * Improved by Jake Archibald https://github.com/juliangarnier/anime/issues/850#issuecomment-1476603393
 *
 * @param {Number} [mass=1] - Mass, default 1
 * @param {Number} [stiffness=100] - Stiffness, default 100
 * @param {Number} [damping=10] - Damping, default 10
 * @param {Number} [velocity=0] - Initial velocity, default 0
 * @returns {SpringEasing}
 */
const spring = (mass = 1, stiffness = 100, damping = 10, velocity = 0) => {

  const parameters = [mass, stiffness, damping, velocity];
  let springEasing = springsCache.get(parameters);

  if (!springEasing) {

    const m = clamp(mass, 0, K);
    const s = clamp(stiffness, 1, K);
    const d = clamp(damping, .1, K);
    const w0 = clamp(sqrt(s / m), minValue, K);
    const zeta = d / (2 * sqrt(s * m));
    const wd = zeta < 1 ? w0 * sqrt(1 - zeta * zeta) : 0;
    const b = zeta < 1 ? (zeta * w0 + -velocity) / wd : -velocity + w0;
    const step = K / 60 / 100;
    const threshold = 0.0001;

    /** @type {EasingFunction} */
    const solver = t => {
      if (zeta < 1) {
        t = exp(-t * zeta * w0) * (1 * cos(wd * t) + b * sin(wd * t));
      } else {
        t = (1 + b * t) * exp(-t * w0);
      }
      return 1 - t;
    };

    const duration = (() => {
      let time = 0;
      while (true) {
        if (abs(1 - solver(time)) < threshold) {
          const restStart = time;
          let restSteps = 1;
          while (true) {
            time += step;
            if (abs(1 - solver(time)) >= threshold) break;
            restSteps++;
            if (restSteps === 16) return restStart;
          }
        }
        time += step;
      }
    })();

    springEasing = {
      duration: round(duration * K, 0),
      solver: t => round(solver(duration * t), 5),
    };

    springsCache.set(parameters, springEasing);

  }

  return springEasing;
};




/**
 * @typedef {Number|String|Function} TimePosition
 */

/**
 * Timeline's children offsets positions parser
 * @param  {Timeline} timeline
 * @param  {String} timePosition
 * @return {Number}
 */
const getPrevChildOffset = (timeline, timePosition) => {
  if (stringStartsWith(timePosition, '<')) {
    const goToPrevAnimationOffset = timePosition[1] === '<';
    const prevAnimation = timeline._tail;
    const prevOffset = prevAnimation ? prevAnimation._offset + prevAnimation._delay : 0;
    return goToPrevAnimationOffset ? prevOffset : prevOffset + prevAnimation.duration;
  }
};

/**
 * @param  {Timeline} timeline
 * @param  {TimePosition} [timePosition]
 * @return {Number}
 */
const parseTimelinePosition = (timeline, timePosition) => {
  let tlDuration = timeline._iterationDuration;
  if (tlDuration === minValue) tlDuration = 0;
  if (isUnd(timePosition)) return tlDuration;
  if (isNum(+timePosition)) return +timePosition;
  const timePosStr = /** @type {String} */(timePosition);
  const tlLabels = timeline ? timeline.labels : null;
  const hasLabels = !isNil(tlLabels);
  const prevOffset = getPrevChildOffset(timeline, timePosStr);
  const hasSibling = !isUnd(prevOffset);
  const matchedRelativeOperator = relativeValuesExecRgx.exec(timePosStr);
  if (matchedRelativeOperator) {
    const fullOperator = matchedRelativeOperator[0];
    const split = timePosStr.split(fullOperator);
    const labelOffset = hasLabels && split[0] ? tlLabels[split[0]] : tlDuration;
    const parsedOffset = hasSibling ? prevOffset : hasLabels ? labelOffset : tlDuration;
    const parsedNumericalOffset = +split[1];
    return getRelativeValue(parsedOffset, parsedNumericalOffset, fullOperator[0]);
  } else {
    return hasSibling ? prevOffset :
           hasLabels ? !isUnd(tlLabels[timePosStr]) ? tlLabels[timePosStr] :
           tlDuration : tlDuration;
  }
};

/**
 * @overload
 * @param  {TimerParams} childParams
 * @param  {Timeline} tl
 * @param  {Number} parsedTLPosition
 * @return {Timeline}
 *
 * @overload
 * @param  {AnimationParams} childParams
 * @param  {Timeline} tl
 * @param  {Number} parsedTLPosition
 * @param  {TargetsParam} targets
 * @param  {Number} [index]
 * @param  {Number} [length]
 * @return {Timeline}
 *
 * @param  {TimerParams|AnimationParams} childParams
 * @param  {Timeline} tl
 * @param  {Number} parsedTLPosition
 * @param  {TargetsParam} [targets]
 * @param  {Number} [index]
 * @param  {Number} [length]
 */
function addTlChild(childParams, tl, parsedTLPosition, targets, index, length) {
  // Offset the tl position with -minValue for 0 duration animations or .set() calls in order to align their end value with the defined position
  const TLPosition = isNum(childParams.duration) && /** @type {Number} */(childParams.duration) <= minValue ? parsedTLPosition - minValue : parsedTLPosition;
  tick(tl, TLPosition, 1, 1, tickModes.AUTO);
  const tlChild = targets ?
    new Animation(targets,/** @type {AnimationParams} */(childParams), tl, TLPosition, false, index, length) :
    new Timer(/** @type {TimerParams} */(childParams), tl, TLPosition);
  tlChild.init(1);
  // TODO: Might be better to insert at a position relative to startTime?
  addChild(tl, tlChild);
  forEachChildren(tl, (/** @type {Renderable} */child) => {
    const childTLOffset = child._offset + child._delay;
    const childDur = childTLOffset + child.duration;
    if (childDur > tl._iterationDuration) {
      tl._iterationDuration = childDur;
    }
  });
  tl.duration = clampInfinity(((tl._iterationDuration + tl._loopDelay) * tl._iterationCount) - tl._loopDelay);
  return tl;
}

class Timeline extends Timer {

  /**
   * @param {TimelineParams} [parameters]
   */
  constructor(parameters = {}) {
    super(/** @type {TimerParams} */(parameters), null, 0);
    this.duration = 0; // TL duration starts at 0 and grows when adding children
    this.labels = {}; // TODO: Do not create an Object until we actually add a label
    /** @type {DefaultsParams} */
    const defaultsParams = parameters.defaults;
    const globalDefaults = globals.defaults;
    this.defaults = defaultsParams ? mergeObjects(defaultsParams, globalDefaults) : globalDefaults;
    /** @type {TimelineCallback} */
    this.onRender = /** @type {TimelineCallback} */(parameters.onRender || globalDefaults.onRender);
    const tlPlaybackEase = setValue(parameters.playbackEase, globalDefaults.playbackEase);
    this._ease = tlPlaybackEase ? parseEasings(tlPlaybackEase) : null;
    /** @type {Number} */
    this._iterationDuration = 0;
    /** @type {Renderable} */
    this._head = null;
    /** @type {Renderable} */
    this._tail = null;
  }

  /**
   * @overload
   * @param {TargetsParam} a1
   * @param {AnimationParams} a2
   * @param {TimePosition} [a3]
   * @return {this}
   *
   * @overload
   * @param {TimerParams} a1
   * @param {TimePosition} [a2]
   * @return {this}
   *
   * @overload
   * @param {String} a1
   * @param {TimePosition} [a2]
   * @return {this}
   *
   * @overload
   * @param {TimerCallback} a1
   * @param {TimePosition} [a2]
   * @return {this}
   *
   * @param {TargetsParam|TimerParams|String|TimerCallback} a1
   * @param {AnimationParams|TimePosition} a2
   * @param {TimePosition} [a3]
   */
  add(a1, a2, a3) {
    const isAnim = isObj(a2);
    const isTimer = isObj(a1);
    const isFunc = isFnc(a1);
    if (isAnim || isTimer || isFunc) {
      this._hasChildren = true;
      if (isAnim) {
        const childParams = /** @type {AnimationParams} */(a2);
        // Check for function for children stagger positions
        if (isFnc(a3)) {
          const staggeredPosition = /** @type {Function} */(a3);
          const parsedTargetsArray = parseTargets(a1);
          // Store initial duration before adding new children that will change the duration
          const tlDuration = this.duration;
          // Store initial _iterationDuration before adding new children that will change the duration
          const tlIterationDuration = this._iterationDuration;
          // Store the original id in order to add specific indexes to the new animations ids
          const id = childParams.id;
          let i = 0;
          const parsedLength = parsedTargetsArray.length;
          parsedTargetsArray.forEach((/** @type {Target} */target) => {
            // Create a new parameter object for each staggered children
            const staggeredChildParams = { ...childParams };
            // Reset the duration of the timeline iteration before each stagger to prevent wrong start value calculation
            this.duration = tlDuration;
            this._iterationDuration = tlIterationDuration;
            if (!isUnd(id)) staggeredChildParams.id = id + '-' + i;
            addTlChild(
              staggeredChildParams,
              this,
              staggeredPosition(target, i, parsedLength, this),
              target,
              i,
              parsedLength
            );
            i++;
          });
        } else {
          addTlChild(
            childParams,
            this,
            parseTimelinePosition(this, a3),
            a1,
          );
        }
      } else {
        // It's a Timer or a Function
        addTlChild(
          /** @type TimerParams */(isTimer ? a1 : { onComplete: a1, duration: minValue }),
          this,
          parseTimelinePosition(this,/** @type TimePosition */(a2)),
        );
      }
      this.init(1); // 1 = internalRender
      return this._autoplay ? this.play() : this;
    } else if (isStr(a1)) {
      this.labels[a1] = parseTimelinePosition(this,/** @type TimePosition */(a2));
      return this;
    }
  }

  /**
   * @param {TargetsParam} targets
   * @param {AnimationParams} parameters
   * @param {TimePosition} [position]
   * @return {this}
   */
  set(targets, parameters, position) {
    if (isUnd(parameters)) return this;
    parameters.duration = minValue;
    parameters.composition = compositionTypes.replace;
    return this.add(targets, parameters, position);
  }

  /**
   * @param  {Number} newDuration
   * @return {this}
   */
  stretch(newDuration) {
    const currentDuration = this.duration;
    if (currentDuration === newDuration) return this;
    const timeScale = newDuration / currentDuration;
    const labels = this.labels;
    forEachChildren(this, (/** @type {Animation} */child) => {
      child.stretch(child.duration * timeScale);
    });
    for (let labelName in labels) {
      labels[labelName] *= timeScale;
    }
    return super.stretch(newDuration);
  }

  /**
   * @return {this}
   */
  refresh() {
    forEachChildren(this, (/** @type {Animation} */child) => {
      child.refresh();
    });
    return this;
  }

  /**
   * @return {this}
   */
  revert() {
    super.revert();
    forEachChildren(this, (/** @type {Animation} */child) => child.revert, true);
    return cleanInlineStyles(this);
  }

  /**
   * @param  {TimelineCallback} [callback]
   * @return {Promise}
   */
  then(callback) {
    return super.then(/** @type {TimerCallback} */(callback));
  }
}




/**
 * @typedef  {Object} Stagger.Parameters
 * @property {Number|String} [start]
 * @property {Number|'first'|'center'|'last'} [from]
 * @property {Boolean} [reversed]
 * @property {[Number,Number]} [grid]
 * @property {('x'|'y')} [axis]
 * @property {EasingParam} [ease]
 * @property {TweenModifier} [modifier]
 */

/**
 * @callback Stagger.function
 * @param {Target} [target]
 * @param {Number} [index]
 * @param {Number} [length]
 * @param {Timeline} [tl]
 * @return {Number|String}
 */

/**
 * @param  {Number|String|[Number|String,Number|String]} val
 * @param  {Stagger.Parameters} params
 * @return {Stagger.function}
 */
const stagger = (val, params = {}) => {
  let values = [];
  let maxValue = 0;
  const from = params.from;
  const reversed = params.reversed;
  const ease = params.ease;
  const hasEasing = !isUnd(ease);
  const hasSpring = hasEasing ? isObj(ease) : false;
  const staggerEase = hasSpring ?
    /** @type {SpringEasing} */(ease).solver : hasEasing ?
    parseEasings(ease) : null;
  const grid = params.grid;
  const axis = params.axis;
  const fromFirst = isUnd(from) || from === 0 || from === 'first';
  const fromCenter = from === 'center';
  const fromLast = from === 'last';
  const isRange = isArr(val);
  const val1 = isRange ? parseNumber(val[0]) : parseNumber(/** @type {String|Number} */(val));
  const val2 = isRange ? parseNumber(val[1]) : 0;
  const unitMatch = unitsExecRgx.exec(isRange ? val[1] : val);
  const start = params.start || 0 + (isRange ? val1 : 0);
  let fromIndex = fromFirst ? 0 : isNum(from) ? /** @type {Number} */(from) : 0;
  return (_, i, t, tl) => {
    if (fromCenter) fromIndex = (t - 1) / 2;
    if (fromLast) fromIndex = t - 1;
    if (!values.length) {
      for (let index = 0; index < t; index++) {
        if (!grid) {
          values.push(abs(fromIndex - index));
        } else {
          const fromX = !fromCenter ? fromIndex % grid[0] : (grid[0] - 1) / 2;
          const fromY = !fromCenter ? floor(fromIndex / grid[0]) : (grid[1] - 1) / 2;
          const toX = index % grid[0];
          const toY = floor(index / grid[0]);
          const distanceX = fromX - toX;
          const distanceY = fromY - toY;
          let value = sqrt(distanceX * distanceX + distanceY * distanceY);
          if (axis === 'x') value = -distanceX;
          if (axis === 'y') value = -distanceY;
          values.push(value);
        }
        maxValue = max(...values);
      }
      if (staggerEase) values = values.map(val => staggerEase(val / maxValue) * maxValue);
      if (reversed) values = values.map(val => axis ? (val < 0) ? val * -1 : -val : abs(maxValue - val));
    }
    const spacing = isRange ? (val2 - val1) / maxValue : val1;
    const offset = tl ? parseTimelinePosition(tl, isUnd(params.start) ? tl._iterationDuration : start) : /** @type {Number} */(start);
    /** @type {String|Number} */
    let output = offset + ((spacing * round(values[i], 2)) || 0);
    if (params.modifier) output = params.modifier(output);
    if (unitMatch) output = `${output}${unitMatch[2]}`;
    return output;
  }
};

/**
 * @typedef {String|Number} ScrollerThresholdValue
 */

/**
 * @return {Number}
 */
const getMaxViewHeight = () => {
  const $el = document.createElement('div');
  doc.body.appendChild($el);
  $el.style.height = '100lvh';
  const height = $el.offsetHeight;
  doc.body.removeChild($el);
  return height;
};

/**
 * @template {ScrollerThresholdValue|String|Number|Boolean|Function|Object} T
 * @param {T} value
 * @param {Scroller} scroller
 * @return {T}
 */
const parseFunctionValue = (value, scroller) => value && isFnc(value) ? /** @type {Function} */(value)(scroller) : value;

const scrollContainers = new Map();

class ScrollContainer {
  /**
   * @param {HTMLElement} $el
   */
  constructor($el) {
    /** @type {HTMLElement} */
    this.element = $el;
    /** @type {Boolean} */
    this.useWin = this.element === doc.body;
    /** @type {Number} */
    this.winWidth = 0;
    /** @type {Number} */
    this.winHeight = 0;
    /** @type {Number} */
    this.width = 0;
    /** @type {Number} */
    this.height = 0;
    /** @type {Number} */
    this.left = 0;
    /** @type {Number} */
    this.top = 0;
    /** @type {Number} */
    this.scrollX = 0;
    /** @type {Number} */
    this.scrollY = 0;
    /** @type {Number} */
    this.prevScrollX = 0;
    /** @type {Number} */
    this.prevScrollY = 0;
    /** @type {Number} */
    this.scrollWidth = 0;
    /** @type {Number} */
    this.scrollHeight = 0;
    /** @type {Number} */
    this.velocity = 0;
    /** @type {Boolean} */
    this.backwardX = false;
    /** @type {Boolean} */
    this.backwardY = false;
    /** @type {Timer} */
    this.scrollTicker = new Timer({
      autoplay: false,
      onBegin: () => this.dataTimer.play(),
      onUpdate: () => {
        forEachChildren(this, (/** @type {Scroller} */child) => child.handleScroll());
      },
      onComplete: () => this.dataTimer.pause()
    }).init();
    /** @type {Timer} */
    this.dataTimer = new Timer({
      frameRate: 30,
      autoplay: false,
      onUpdate: self => {
        const dt = self.deltaTime;
        const px = this.prevScrollX;
        const py = this.prevScrollY;
        const nx = this.scrollX;
        const ny = this.scrollY;
        const dx = px - nx;
        const dy = py - ny;
        this.prevScrollX = nx;
        this.prevScrollY = ny;
        if (dx) this.backwardX = px > nx;
        if (dy) this.backwardY = py > ny;
        this.velocity = dt > 0 ? Math.sqrt(dx * dx + dy * dy) / dt : 0;
      }
    }).init();
    /** @type {Timer} */
    this.resizeTicker = new Timer({
      duration: 250,
      onComplete: () => {
        const winWidth = this.winWidth;
        const winHeight = this.winHeight;
        this.updateWindowBounds();
        if (winWidth !== this.winWidth || winHeight !== this.winHeight) {
          this.refreshScrollers();
          this.handleScroll();
        }
      }
    });
    /** @type {Timer} */
    this.wakeTicker = new Timer({
      duration: 66,
      onBegin: self => {
        this.scrollTicker.play();
      },
      onComplete: () => {
        this.scrollTicker.pause();
      }
    }).init();
    /** @type {Scroller} */
    this._head = null;
    /** @type {Scroller} */
    this._tail = null;
    this.updateScrollCoords();
    this.updateWindowBounds();
    this.updateBounds();
    (this.useWin ? win : this.element).addEventListener('scroll', this, false);
    win.addEventListener('resize', this, false);
  }

  updateScrollCoords() {
    const useWin = this.useWin;
    const $el = this.element;
    this.scrollX = round(useWin ? win.scrollX : $el.scrollLeft, 0);
    this.scrollY = round(useWin ? win.scrollY : $el.scrollTop, 0);
  }

  updateWindowBounds() {
    this.winWidth = win.innerWidth;
    this.winHeight = getMaxViewHeight();
  }

  updateBounds() {
    const style = getComputedStyle(this.element);
    const $el = this.element;
    this.scrollWidth = $el.scrollWidth + parseFloat(style.marginLeft) + parseFloat(style.marginRight);
    this.scrollHeight = $el.scrollHeight + parseFloat(style.marginTop) + parseFloat(style.marginBottom);
    this.updateWindowBounds();
    let width, height;
    if (this.useWin) {
      width = this.winWidth;
      height = this.winHeight;
    } else {
      const elRect = $el.getBoundingClientRect();
      width = elRect.width;
      height = elRect.height;
      this.top = elRect.top;
      this.left = elRect.left;
    }
    this.width = width;
    this.height = height;
  }

  refreshScrollers() {
    forEachChildren(this, (/** @type {Scroller} */child) => {
      if (child._debug) {
        child.removeDebug();
      }
    });
    this.updateBounds();
    forEachChildren(this, (/** @type {Scroller} */child) => {
      child.refresh();
      if (child._debug) {
        child.debug();
      }
    });
  }

  refresh() {
    this.updateWindowBounds();
    this.updateBounds();
    this.refreshScrollers();
    this.handleScroll();
  }

  handleScroll() {
    this.updateScrollCoords();
    this.wakeTicker.restart();
  }

  handleResize() {
    this.resizeTicker.restart();
  }

  /**
   * @param {Event} e
   */
  handleEvent(e) {
    switch (e.type) {
      case 'scroll':
        this.handleScroll();
        break;
      case 'resize':
        this.handleResize();
        break;
    }
  }

  revert() {
    if (!this._head) {
      this.scrollTicker.cancel();
      this.dataTimer.cancel();
      this.resizeTicker.cancel();
      this.wakeTicker.cancel();
      (this.useWin ? win : this.element).removeEventListener('scroll', this);
      win.removeEventListener('resize', this);
      scrollContainers.delete(this.element);
    }
  }
}

/**
 * @param {TargetsParam} target
 * @return {ScrollContainer}
 */
const registerAndGetScrollContainer = target => {
  const $el = /** @type {HTMLElement} */(target ? parseTargets(target)[0] || doc.body : doc.body);
  let scrollContainer = scrollContainers.get($el);
  if (!scrollContainer) {
    scrollContainer = new ScrollContainer($el);
    scrollContainers.set($el, scrollContainer);
  }
  return scrollContainer;
};

/**
 * @param {HTMLElement} $el
 * @param {Number|string} v
 * @param {Number} size
 * @param {Number} [under]
 * @param {Number} [over]
 * @return {Number}
 */
const convertValueToPx = ($el, v, size, under, over) => {
  const clampMin = v === 'min';
  const clampMax = v === 'max';
  const value = v === 'top' || v === 'left' || v === 'start' || clampMin ? 0 :
                v === 'bottom' || v === 'right' || v === 'end' || clampMax ? '100%' :
                v === 'center' ? '50%' :
                v;
  const { n, u } = decomposeRawValue(value, decomposedOriginalValue);
  let px = n;
  if (u === '%') {
    px = (n / 100) * size;
  } else if (u) {
    px = convertValueUnit($el, decomposedOriginalValue, 'px', true).n;
  }
  if (clampMax && under < 0) px += under;
  if (clampMin && over > 0) px += over;
  return px;
};

/**
 * @param {HTMLElement} $el
 * @param {ScrollerThresholdValue} v
 * @param {Number} size
 * @param {Number} [under]
 * @param {Number} [over]
 * @return {Number}
 */
const parseBoundValue = ($el, v, size, under, over) => {
  /** @type {Number} */
  let value;
  if (isStr(v)) {
    const matchedOperator = relativeValuesExecRgx.exec(/** @type {String} */(v));
    if (matchedOperator) {
      const splitter = matchedOperator[0];
      const operator = splitter[0];
      const splitted = /** @type {String} */(v).split(splitter);
      const clampMin = splitted[0] === 'min';
      const clampMax = splitted[0] === 'max';
      const valueAPx = convertValueToPx($el, splitted[0], size, under, over);
      const valueBPx = convertValueToPx($el, splitted[1], size, under, over);
      if (clampMin) {
        const min = getRelativeValue(convertValueToPx($el, 'min', size), valueBPx, operator);
        value = min < valueAPx ? valueAPx : min;
      } else if (clampMax) {
        const max = getRelativeValue(convertValueToPx($el, 'max', size), valueBPx, operator);
        value = max > valueAPx ? valueAPx : max;
      } else {
        value = getRelativeValue(valueAPx, valueBPx, operator);
      }
    } else {
      value = convertValueToPx($el, v, size, under, over);
    }
  } else {
    value = /** @type {Number} */(v);
  }
  return round(value, 0);
};

/**
 * @param {$Animation} linked
 * @return {HTMLElement}
 */
const getAnimationDomTarget = linked => {
  let $linkedTarget;
  const linkedTargets = linked.targets;
  for (let i = 0, l = linkedTargets.length; i < l; i++) {
    const target = linkedTargets[i];
    if (target[isDomSymbol]) {
      $linkedTarget = /** @type {HTMLElement} */(target);
      break;
    }
  }
  return $linkedTarget;
};

let scrollerId = 0;

const debugColors = ['#FF4B4B','#FF971B','#FFC730','#F9F640','#7AFF5A','#18FF74','#17E09B','#3CFFEC','#05DBE9','#33B3F1','#638CF9','#C563FE','#FF4FCF','#F93F8A'];

/**
 * @callback ScrollerCallback
 * @param {Scroller} self - Returns itself
 * @return {*}
 */

/**
 * @typedef {Object} ScrollerThresholdParam
 * @property {ScrollerThresholdValue} [target]
 * @property {ScrollerThresholdValue} [container]
 */

/**
 * @callback ScrollerAxisCallback
 * @param {Scroller} self
 * @return {'x'|'y'}
 */

/**
 * @callback ScrollerThresholdCallback
 * @param {Scroller} self
 * @return {ScrollerThresholdValue|ScrollerThresholdParam}
 */

/**
 * @typedef {Object} ScrollerParams
 * @property {Boolean|Number|String|EasingParam} [sync]
 * @property {TargetsParam} [container]
 * @property {TargetsParam} [target]
 * @property {'x'|'y'|ScrollerAxisCallback} [axis]
 * @property {ScrollerThresholdValue|ScrollerThresholdParam|ScrollerThresholdCallback} [enter]
 * @property {ScrollerThresholdValue|ScrollerThresholdParam|ScrollerThresholdCallback} [leave]
 * @property {Boolean} [repeat]
 * @property {Boolean} [debug]
 * @property {ScrollerCallback} [onEnter]
 * @property {ScrollerCallback} [onLeave]
 * @property {ScrollerCallback} [onEnterForward]
 * @property {ScrollerCallback} [onLeaveForward]
 * @property {ScrollerCallback} [onEnterBackward]
 * @property {ScrollerCallback} [onLeaveBackward]
 * @property {ScrollerCallback} [onUpdate]
 * @property {ScrollerCallback} [onSyncComplete]
 */

class Scroller {
  /**
   * @param {ScrollerParams} parameters
   */
  constructor(parameters) {
    if (globals.scope) globals.scope.revertibles.push(this);
    const sync = setValue(parameters.sync, 'play pause');
    const ease = sync ? parseEasings(/** @type {EasingParam} */(sync)) : null;
    const isLinear = sync && (sync === 'linear' || sync === none);
    const isEase = sync && !(ease === none && !isLinear);
    const isSmooth = sync && (isNum(sync) || sync === true || isLinear);
    const isMethods = sync && (isStr(sync) && !isEase && !isSmooth);
    const syncMethods = isMethods ? /** @type {String} */(sync).split(' ').map(
      (/** @type {String} */m) => () => {
        const linked = this.linked;
        return linked && linked[m] ? linked[m]() : null;
      }
    ) : null;
    const biDirSync = isMethods && syncMethods.length > 2;
    /** @type {Number} */
    this.id = scrollerId++;
    /** @type {ScrollContainer} */
    this.container = registerAndGetScrollContainer(parameters.container);
    /** @type {HTMLElement} */
    this.target = null;
    /** @type {Tickable} */
    this.linked = null;
    /** @type {Boolean} */
    this.repeat = null;
    /** @type {Boolean} */
    this.horizontal = null;
    /** @type {ScrollerThresholdParam|ScrollerThresholdValue|ScrollerThresholdCallback} */
    this.enter = null;
    /** @type {ScrollerThresholdParam|ScrollerThresholdValue|ScrollerThresholdCallback} */
    this.leave = null;
    /** @type {Boolean} */
    this.sync = isEase || isSmooth || !!syncMethods;
    /** @type {EasingFunction} */
    this.syncEase = isEase ? ease : null;
    /** @type {Number} */
    this.syncSmooth = isSmooth ? sync === true || isLinear ? 1 : /** @type {Number} */(sync) : null;
    /** @type {ScrollerCallback|typeof noop} */
    this.onSyncEnter = syncMethods && !biDirSync && syncMethods[0] ? syncMethods[0] : noop;
    /** @type {ScrollerCallback|typeof noop} */
    this.onSyncLeave = syncMethods && !biDirSync && syncMethods[1] ? syncMethods[1] : noop;
    /** @type {ScrollerCallback|typeof noop} */
    this.onSyncEnterForward = syncMethods && biDirSync && syncMethods[0] ? syncMethods[0] : noop;
    /** @type {ScrollerCallback|typeof noop} */
    this.onSyncLeaveForward = syncMethods && biDirSync && syncMethods[1] ? syncMethods[1] : noop;
    /** @type {ScrollerCallback|typeof noop} */
    this.onSyncEnterBackward = syncMethods && biDirSync && syncMethods[2] ? syncMethods[2] : noop;
    /** @type {ScrollerCallback|typeof noop} */
    this.onSyncLeaveBackward = syncMethods && biDirSync && syncMethods[3] ? syncMethods[3] : noop;
    /** @type {ScrollerCallback|typeof noop} */
    this.onEnter = parameters.onEnter || noop;
    /** @type {ScrollerCallback|typeof noop} */
    this.onLeave = parameters.onLeave || noop;
    /** @type {ScrollerCallback|typeof noop} */
    this.onEnterForward = parameters.onEnterForward || noop;
    /** @type {ScrollerCallback|typeof noop} */
    this.onLeaveForward = parameters.onLeaveForward || noop;
    /** @type {ScrollerCallback|typeof noop} */
    this.onEnterBackward = parameters.onEnterBackward || noop;
    /** @type {ScrollerCallback|typeof noop} */
    this.onLeaveBackward = parameters.onLeaveBackward || noop;
    /** @type {ScrollerCallback|typeof noop} */
    this.onUpdate = parameters.onUpdate || noop;
    /** @type {ScrollerCallback|typeof noop} */
    this.onSyncComplete = parameters.onSyncComplete || noop;
    /** @type {Boolean} */
    this.completed = false;
    /** @type {Boolean} */
    this.began = false;
    /** @type {Boolean} */
    this.isInView = false;
    /** @type {Number} */
    this.offset = 0;
    /** @type {Number} */
    this.offsetStart = 0;
    /** @type {Number} */
    this.offsetEnd = 0;
    /** @type {Number} */
    this.distance = 0;
    /** @type {[Number, Number, Number, Number]} */
    this.coords = [0, 0, 0, 0];
    /** @type {HTMLElement} */
    this.debugElement = null;
    /** @type {ScrollerParams} */
    this._params = parameters;
    /** @type {Boolean} */
    this._debug = setValue(parameters.debug, false);
    /** @type {Scroller} */
    this._next = null;
    /** @type {Scroller} */
    this._prev = null;
    addChild(this.container, this);
    // Overrides the linked object after the scroller creation
    const targetPram = this._params ? this._params.target : null;
    requestAnimationFrame(() => {
      this.target = /** @type {HTMLElement} */(targetPram ? parseTargets(targetPram)[0] || doc.body : this.linked && this.target ? this.target : doc.body);
      // Only calculate the initial bounds on the next frame in case the linked object is set after the scroller creation
      this.refresh();
      if (this._debug) this.debug();
    });
  }

  /**
   * @param {Tickable} linked
   */
  link(linked) {
    if (linked) {
      // Make sure to pause the linked object in case it's added later
      linked.pause();
      this.linked = linked;
      const params = this._params;
      if (!params || params && !params.target) {
        /** @type {HTMLElement} */
        let $linkedTarget;
        if (!isUnd(/** @type {$Animation} */(linked).targets)) {
          $linkedTarget = getAnimationDomTarget(/** @type {$Animation} */(linked));
        } else {
          forEachChildren(/** @type {Timeline} */(linked), (/** @type {$Animation} */child) => {
            if (child.targets && !$linkedTarget) {
              $linkedTarget = getAnimationDomTarget(/** @type {$Animation} */(child));
            }
          });
        }
        if ($linkedTarget) {
          this.target = $linkedTarget;
          this.refresh();
        }
      }
    }
  }

  get velocity() {
    return this.container.velocity;
  }

  get backward() {
    return this.horizontal ? this.container.backwardX : this.container.backwardY;
  }

  get scroll() {
    return this.horizontal ? this.container.scrollX : this.container.scrollY;
  }

  get progress() {
    const p = (this.scroll - this.offsetStart) / this.distance;
    return p === Infinity || isNaN(p) ? 0 : round(clamp(p, 0, 1), 6);
  }

  refresh() {
    const params = this._params;
    this.repeat = setValue(parseFunctionValue(params.repeat, this), true);
    this.horizontal = setValue(parseFunctionValue(params.axis, this), 'y') === 'x';
    this.enter = setValue(parseFunctionValue(params.enter, this), 'start end');
    this.leave = setValue(parseFunctionValue(params.leave, this), 'end start');
    this.updateBounds();
    this.handleScroll();
  }

  removeDebug() {
    if (this.debugElement) {
      this.debugElement.parentNode.removeChild(this.debugElement);
      this.debugElement = null;
    }
  }

  debug() {
    this.removeDebug();
    const container = this.container;
    const isHori = this.horizontal;
    const $existingDebug = container.element.querySelector(':scope > .animejs-onscroll-debug');
    const $debug = doc.createElement('div');
    const $thresholds = doc.createElement('div');
    const $triggerss = doc.createElement('div');
    const labels = ['target', 'target', 'enter', 'leave'];
    const color = debugColors[this.id % debugColors.length];
    const useWin = container.useWin;
    const containerWidth = useWin ? container.winWidth : container.width;
    const containerHeight = useWin ? container.winHeight : container.height;
    const scrollWidth = container.scrollWidth;
    const scrollHeight = container.scrollHeight;
    const size = 160;
    const offLeft = isHori ? 0 : 10;
    const offTop = isHori ? 10 : 0;
    const half = isHori ? 24 : size / 2;
    const labelHeight = isHori ? half : 15;
    const labelWidth = isHori ? 40 : half;
    const labelSize = isHori ? labelWidth : labelHeight;
    const repeat = isHori ? 'repeat-x' : 'repeat-y';
    /**
     * @param {Number} v
     * @return {String}
     */
    const gradientOffset = v => isHori ? '-1px '+(v)+'px' : (v)+'px'+' 0';
    /**
     * @param {String} c
     * @return {String}
     */
    const lineCSS = (c) => `linear-gradient(${isHori ? 90 : 0}deg, ${c} 1px, transparent 1px)`;
    /**
     * @param {String} p
     * @param {Number} l
     * @param {Number} t
     * @param {Number} w
     * @param {Number} h
     * @return {String}
     */
    const baseCSS = (p, l, t, w, h) => `position:${p};left:${l}px;top:${t}px;width:${w}px;height:${h}px;`;
    $debug.style.cssText = `${baseCSS('absolute', offLeft, offTop, isHori ? scrollWidth : size, isHori ? size : scrollHeight)}
      pointer-events: none;
      z-index: 1000000;
      display: flex;
      flex-direction: ${isHori ? 'column' : 'row'};
    `;
    $thresholds.style.cssText = `${baseCSS('sticky', 0, 0, isHori ? containerWidth : half, isHori ? half : containerHeight)}`;
    if (!$existingDebug) {
      $thresholds.style.cssText += `background:
        ${lineCSS('#A7A7A7')}${gradientOffset(half-8)} / ${isHori ? '10px 8px' : '8px 10px'} ${repeat},
        ${lineCSS('#A7A7A7')}${gradientOffset(half-16)} / ${isHori ? '100px 16px' : '16px 100px'} ${repeat};
      `;
    }
    $triggerss.style.cssText = `${baseCSS('relative', 0, 0, isHori ? scrollWidth : half, isHori ? half : scrollHeight)}`;
    if (!$existingDebug) {
      $triggerss.style.cssText += `background:
        ${lineCSS('#A7A7A7')}${gradientOffset(0)} / ${isHori ? '10px 0px' : '0px 10px'} ${repeat},
        ${lineCSS('#A7A7A7')}${gradientOffset(0)} / ${isHori ? '100px 8px' : '8px 100px'} ${repeat};
      `;
    }
    this.coords.forEach((v, i) => {
      const isView = i > 1;
      const value = (isView ? 0 : this.offset) + v;
      const isTail = i % 2;
      const isFirst = value < labelSize;
      const isOver = value > (isView ? isHori ? containerWidth : containerHeight : isHori ? scrollWidth : scrollHeight) - labelSize;
      const isFlip = !isTail && !isFirst || isOver;
      const $label = doc.createElement('div');
      const $text = doc.createElement('div');
      const dirProp = isHori ? isFlip ? 'right' : 'left' : isFlip ? 'bottom' : 'top';
      const flipOffset = isFlip ? (isHori ? labelWidth : labelHeight) : !isView ? 1 : 0;
      $text.innerHTML = `${labels[i]} ${isStr(this._debug) ? this._debug : this.id}`;
      $label.style.cssText = `${baseCSS('absolute', 0, 0, labelWidth, labelHeight)}
        display: flex;
        flex-direction: ${isHori ? 'column' : 'row'};
        justify-content: flex-${isView ? 'start' : 'end'};
        align-items: flex-${isFlip ? 'end' : 'start'};
        border-${dirProp}: 1px ${isTail ? 'solid' : 'solid'} ${color};
      `;
      $text.style.cssText = `
        overflow: hidden;
        max-width: ${(size / 2) - 20}px;
        height: ${labelHeight};
        margin-${isHori ? isFlip ? 'right' : 'left' : isFlip ? 'bottom' : 'top'}: -1px;
        padding: 1px;
        font-family: ui-monospace, monospace;
        font-size: 10px;
        text-transform: uppercase;
        line-height: 9px;
        font-weight: bold;
        text-align: ${isHori && isFlip || !isHori && !isView ? 'right' : 'left'};
        white-space: pre;
        text-overflow: ellipsis;
        color: ${isTail ? color : 'rgba(0,0,0,.75)'};
        background-color: ${isTail ? 'rgba(0,0,0,.65)' : color};
        border: 1px solid ${isTail ? color : 'transparent'};
        border-${isHori ? isFlip ? 'top-left' : 'top-right' : isFlip ? 'top-left' : 'bottom-left'}-radius: 3px;
        border-${isHori ? isFlip ? 'bottom-left' : 'bottom-right' : isFlip ? 'top-right' : 'bottom-right'}-radius: 3px;
      `;
      $label.appendChild($text);
      $label.style[isHori ? 'left' : 'top'] = value - flipOffset + (!isFlip && isFirst && !isView ? 1 : 0) + 'px';
      (isView ? $thresholds : $triggerss).appendChild($label);
    });
    $debug.appendChild($thresholds);
    $debug.appendChild($triggerss);
    container.element.appendChild($debug);
    if (!$existingDebug) $debug.classList.add('animejs-onscroll-debug');
    this.debugElement = $debug;
  }

  updateBounds() {
    if (this._debug) {
      this.removeDebug();
    }
    let stickys;
    const $target = this.target;
    const container = this.container;
    const isHori = this.horizontal;
    const linked = this.linked;
    let linkedTime;
    let $el = $target;
    let offset = 0;
    if (linked) {
      linkedTime = linked.currentTime;
      linked.seek(0, true);
    }
    while ($el && $el !== container.element && $el !== doc.body) {
      const isSticky = getTargetValue($el, 'position') === 'sticky' ?
                       setTargetValues($el, { position: 'static' }) :
                       false;
      offset += (isHori ? $el.offsetLeft : $el.offsetTop) || 0;
      $el = /** @type {HTMLElement} */($el.offsetParent);
      if (isSticky) {
        if (!stickys) stickys = [];
        stickys.push(isSticky);
      }
    }
    const targetSize = isHori ? $target.offsetWidth : $target.offsetHeight;
    const containerSize = isHori ? container.width : container.height;
    const scrollSize = isHori ? container.scrollWidth : container.scrollHeight;
    const maxScroll = scrollSize - containerSize;
    const enter = this.enter;
    const leave = this.leave;

    /** @type {ScrollerThresholdValue} */
    let enterTarget = 'start';
    /** @type {ScrollerThresholdValue} */
    let leaveTarget = 'end';
    /** @type {ScrollerThresholdValue} */
    let enterContainer = 'end';
    /** @type {ScrollerThresholdValue} */
    let leaveContainer = 'start';

    if (isStr(enter)) {
      const splitted = /** @type {String} */(enter).split(' ');
      enterTarget = splitted[0];
      enterContainer = splitted.length > 1 ? splitted[1] : splitted[0];
    } else if (isObj(enter)) {
      const e = /** @type {ScrollerThresholdParam} */(enter);
      if (!isUnd((e).target)) enterTarget = e.target;
      if (!isUnd(e.container)) enterContainer = e.container;
    } else if (isNum(enter)) {
      enterContainer = /** @type {Number} */(enter);
    }

    if (isStr(leave)) {
      const splitted = /** @type {String} */(leave).split(' ');
      leaveTarget = splitted[0];
      leaveContainer = splitted.length > 1 ? splitted[1] : splitted[0];
    } else if (isObj(leave)) {
      const t = /** @type {ScrollerThresholdParam} */(leave);
      if (!isUnd(t.target)) leaveTarget = t.target;
      if (!isUnd(t.container)) leaveContainer = t.container;
    } else if (isNum(leave)) {
      leaveContainer = /** @type {Number} */(leave);
    }

    const parsedEnterTarget = parseBoundValue($target, enterTarget, targetSize);
    const parsedLeaveTarget = parseBoundValue($target, leaveTarget, targetSize);
    const under = (parsedEnterTarget + offset) - containerSize;
    const over = (parsedLeaveTarget + offset) - maxScroll;
    const parsedEnterContainer = parseBoundValue($target, enterContainer, containerSize, under, over);
    const parsedLeaveContainer = parseBoundValue($target, leaveContainer, containerSize, under, over);
    const offsetStart = parsedEnterTarget + offset - parsedEnterContainer;
    const offsetEnd = parsedLeaveTarget + offset - parsedLeaveContainer;
    const scrollDelta = offsetEnd - offsetStart;
    this.offset = offset;
    this.offsetStart = offsetStart;
    this.offsetEnd = offsetEnd;
    this.distance = scrollDelta <= 0 ? 0 : scrollDelta;
    this.coords = [parsedEnterTarget, parsedLeaveTarget, parsedEnterContainer, parsedLeaveContainer];
    if (stickys) {
      stickys.forEach(sticky => sticky.revert());
    }
    if (linked) {
      linked.seek(linkedTime, true);
    }
    if (this._debug) {
      this.debug();
    }
  }

  handleScroll() {
    const linked = this.linked;
    const sync = this.sync;
    const syncEase = this.syncEase;
    const syncSmooth = this.syncSmooth;
    const isHori = this.horizontal;
    const container = this.container;
    const scroll = this.scroll;
    const isBefore = scroll <= this.offsetStart;
    const isAfter = scroll >= this.offsetEnd;
    const isInView = !isBefore && !isAfter;
    let hasUpdated = false;
    let syncCompleted = false;
    let p = this.progress;

    if (isBefore && this.began) {
      this.began = false;
    }

    if (p > 0 && !this.began) {
      this.began = true;
    }

    if (linked && (syncEase || syncSmooth)) {
      const ap = linked.progress;
      if (syncSmooth && isNum(syncSmooth)) {
        if (/** @type {Number} */(syncSmooth) < 1) {
          const step = 0.0001;
          const snap = ap < p && p === 1 ? step : ap > p && !p ? -step : 0;
          p = round(lerp(ap, p, interpolate(.01, .2, /** @type {Number} */(syncSmooth)), false) + snap, 6);
        }
      } else if (syncEase) {
        p = syncEase(p);
      }
      linked.seek(linked.duration * p);
      hasUpdated = p !== ap;
      syncCompleted = ap === 1;
      if (hasUpdated && !syncCompleted && (syncSmooth && ap)) {
        container.wakeTicker.restart();
      }
    }

    if (this._debug && this.debugElement) {
      const sticky = isHori ? container.scrollY : container.scrollX;
      this.debugElement.style[isHori ? 'top' : 'left'] = sticky + 10 + 'px';
    }

    if (isInView) {
      hasUpdated = true;
      if (!this.isInView) {
        this.isInView = true;
        this.onSyncEnter(this);
        this.onEnter(this);
        if (this.backward) {
          this.onSyncEnterBackward(this);
          this.onEnterBackward(this);
        } else {
          this.onSyncEnterForward(this);
          this.onEnterForward(this);
        }
      }
    }

    if (!isInView && this.isInView) {
      hasUpdated = true;
    }

    if (hasUpdated) {
      this.onUpdate(this);
    }

    if (!isInView && this.isInView) {
      this.isInView = false;
      this.onSyncLeave(this);
      this.onLeave(this);
      if (this.backward) {
        this.onSyncLeaveBackward(this);
        this.onLeaveBackward(this);
      } else {
        this.onSyncLeaveForward(this);
        this.onLeaveForward(this);
      }
      if (sync && !syncSmooth) {
        syncCompleted = true;
      }
    }

    if (p >= 1 && this.began && !this.completed && (sync && syncCompleted || !sync)) {
      if (sync) {
        this.onSyncComplete(this);
      }
      this.completed = true;
      if ((!this.repeat && !linked) || (!this.repeat && linked && linked.completed)) {
        this.revert();
      }
    }

    if (p < 1 && this.completed) {
      this.completed = false;
    }
  }

  revert() {
    const container = this.container;
    removeChild(container, this);
    container.revert();
    if (this._debug) {
      this.removeDebug();
    }
  }

}

/**
 * @param {ScrollerParams} [parameters={}]
 * @return {Scroller}
 */
const onScroll = (parameters = {}) => new Scroller(parameters);




class Animatable {
  /**
   * @param {TargetsParam} targets
   * @param {AnimatableParams} parameters
   */
  constructor(targets, parameters) {
    const globalParams = {};
    const properties = {};
    this.targets = [];
    this.animations = {};
    if (isUnd(targets) || isUnd(parameters)) return;
    for (let propName in parameters) {
      const paramValue = parameters[propName];
      if (isKey(propName)) {
        properties[propName] = paramValue;
      } else {
        globalParams[propName] = paramValue;
      }
    }
    for (let propName in properties) {
      const propValue = properties[propName];
      const isObjValue = isObj(propValue);
      let propParams = {};
      let to = '+=0';
      if (isObjValue) {
        const unit = propValue.unit;
        if (isStr(unit)) to += unit;
      } else {
        propParams.duration = propValue;
      }
      propParams[propName] = isObjValue ? mergeObjects({ to }, propValue) : to;
      const animParams = mergeObjects(globalParams, propParams);
      animParams.composition = compositionTypes.replace;
      animParams.autoplay = false;
      const animation = this.animations[propName] = new Animation(targets, animParams, null, 0, false).init();
      // console.log(animation, animParams[propName].composition);
      if (!this.targets.length) this.targets.push(...animation.targets);
      /** @type {AnimatableProperty} */
      this[propName] = (to, duration, ease) => {
        const tween = animation._head;
        if (isUnd(to)) {
          const numbers = tween._numbers;
          if (numbers && numbers.length) {
            return numbers;
          } else {
            return tween._modifier(tween._number);
          }
        } else {
          forEachChildren(animation, (/** @type {Tween} */tween) => {
            if (isArr(to)) {
              for (let i = 0, l = /** @type {Array} */(to).length; i < l; i++) {
                if (!isUnd(tween._numbers[i])) {
                  tween._fromNumbers[i] = /** @type {Number} */(tween._modifier(tween._numbers[i]));
                  tween._toNumbers[i] = to[i];
                }
              }
            } else {
              tween._fromNumber = /** @type {Number} */(tween._modifier(tween._number));
              tween._toNumber = /** @type {Number} */(to);
            }
            if (!isUnd(ease)) tween._ease = parseEasings(ease);
            tween._currentTime = 0;
          });
          if (!isUnd(duration)) animation.stretch(duration);
          animation.seek(0, 1).resetTime().play();
          return this;
        }
      };
    }
  }

  revert() {
    for (let propName in this.animations) {
      this[propName] = noop;
      this.animations[propName].revert();
    }
    this.animations = {};
    this.targets.length = 0;
  }
}




class DOMProxy {
  /** @param {Object} el */
  constructor(el) {
    this.el = el;
    this.zIndex = 0;
    this.parentElement = null;
    this.classList = {
      add: noop,
      remove: noop,
    };
  }

  get x() { return this.el.x || 0 };
  set x(v) { this.el.x = v; };

  get y() { return this.el.y || 0 };
  set y(v) { this.el.y = v; };

  get width() { return this.el.width || 0 };
  set width(v) { this.el.width = v; };

  get height() { return this.el.height || 0 };
  set height(v) { this.el.height = v; };

  getBoundingClientRect() {
    return {
      top: this.y,
      right: this.x,
      bottom: this.y + this.height,
      left: this.x + this.width,
    }
  }
}

class Transforms {
  /**
   * @param {DOMTarget|DOMProxy} $el
   */
  constructor($el) {
    this.$el = $el;
    this.inlineTransforms = [];
    this.point = new DOMPoint();
    this.inversedMatrix = this.getMatrix().inverse();
  }

  /**
   * @param {Number} x
   * @param {Number} y
   * @return {DOMPoint}
   */
  normalizePoint(x, y) {
    this.point.x = x;
    this.point.y = y;
    return this.point.matrixTransform(this.inversedMatrix);
  }

  /**
   * @callback TraverseParentsCallback
   * @param {DOMTarget} $el
   * @param {Number} i
   */

  /**
   * @param {TraverseParentsCallback} cb
   */
  traverseUp(cb) {
    let $el = /** @type {DOMTarget|Document} */(this.$el.parentElement), i = 0;
    while ($el && $el !== doc) {
      cb(/** @type {DOMTarget} */($el), i);
      $el = /** @type {DOMTarget} */($el.parentElement);
      i++;
    }
  }

  getMatrix() {
    const matrix = new DOMMatrix();
    this.traverseUp($el => {
      const elMatrix = new DOMMatrix(/** @type {String} */(getTargetValue($el, 'transform')));
      matrix.preMultiplySelf(elMatrix);
    });
    return matrix;
  }

  remove() {
    this.traverseUp(($el, i) => {
      this.inlineTransforms[i] = $el.style.transform;
      $el.style.transform = 'none';
    });
  }

  revert() {
    this.traverseUp(($el, i) => {
      const ct = this.inlineTransforms[i];
      if (ct === '') {
        $el.style.removeProperty('transform');
      } else {
        $el.style.transform = ct;
      }
    });
  }
}

let zIndex = 0;

class Draggable {
  /**
   * @param {DOMTargetSelector} target
   * @param {DraggableParams} [parameters]
   */
  constructor(target, parameters = {}) {
    if (!target) return;
    if (globals.scope) globals.scope.revertibles.push(this);
    /** @type {AnimatableParams | Boolean} */
    const animatableParams = {};
    // TODO: Add an axis parameter instead of having to set false to x or y
    const paramX = parameters.x;
    const paramY = parameters.y;
    const trigger = parameters.trigger;
    const modifier = parameters.modifier;
    const container = parameters.container;
    const cp = parameters.containerPadding || 0;
    const containerPadding = /** @type {Array<Number>} */(isArr(cp) ? cp : [cp, cp, cp, cp]);
    const ease = parameters.releaseEase;
    const xProp = /** @type {String} */(isObj(paramX) && !isUnd(/** @type {Object} */(paramX).mapTo) ? /** @type {Object} */(paramX).mapTo : 'x');
    /** @type {String} */
    const yProp = isObj(paramY) && !isUnd(/** @type {Object} */(paramY).mapTo) ? /** @type {Object} */(paramY).mapTo : 'y';
    if (modifier) animatableParams.modifier = modifier;
    this.snapX = setValue(parameters.snap, 0);
    this.snapY = setValue(parameters.snap, 0);
    this.scrollSpeed = setValue(parameters.scrollSpeed, 1.5);
    this.dragSpeed = setValue(parameters.dragSpeed, 1);
    this.releaseEase = ease ? parseEasings(ease) : null;
    this.releaseStiffness = setValue(parameters.releaseStiffness, 1);
    this.releaseVelocity = setValue(parameters.releaseVelocity, 1);
    this.onGrab = parameters.onGrab || noop;
    this.onDrag = parameters.onDrag || noop;
    this.onRelease = parameters.onRelease || noop;
    this.onUpdate = parameters.onUpdate || noop;
    this.onSettle = parameters.onSettle || noop;
    this.onSnap = parameters.onSnap || noop;
    this.disabled = [0, 0];
    /** @type {Array<Number>} */
    this.containerPadding = setValue(containerPadding, [0, 0, 0, 0]);
    this.containerFriction = clamp(0, setValue(parameters.containerFriction, .85), 1);
    if (isUnd(paramX) || paramX === true) {
      animatableParams[xProp] = 0;
    } else if (isObj(paramX)) {
      const paramXObject = /** @type {DraggableAxisParam} */(paramX);
      const animatableXParams = {};
      if (paramXObject.modifier) animatableXParams.modifier = paramXObject.modifier;
      if (paramXObject.composition) animatableXParams.composition = paramXObject.composition;
      if (!isUnd(paramXObject.snap)) this.snapX = paramXObject.snap;
      animatableParams[xProp] = animatableXParams;
    } else if (paramX === false) {
      animatableParams[xProp] = 0;
      this.disabled[0] = 1;
    }
    if (isUnd(paramY) || paramY === true) {
      animatableParams[yProp] = 0;
    } else if (isObj(paramY)) {
      const paramYObject = /** @type {DraggableAxisParam} */(paramY);
      const animatableYParams = {};
      if (paramYObject.modifier) animatableYParams.modifier = paramYObject.modifier;
      if (paramYObject.composition) animatableYParams.composition = paramYObject.composition;
      if (!isUnd(paramYObject.snap)) this.snapY = paramYObject.snap;
      animatableParams[yProp] = animatableYParams;
    } else if (paramY === false) {
      animatableParams[yProp] = 0;
      this.disabled[1] = 1;
    }
    this.container = isArr(container) ? container : null;
    this.$target = /** @type {DOMTarget|DOMProxy} */(isObj(target) ? new DOMProxy(target) : parseTargets(target)[0]);
    this.$trigger = /** @type {DOMTarget} */(parseTargets(trigger ? trigger : target)[0]);
    this.$container = /** @type {DOMTarget} */(container && !this.container ? parseTargets(container)[0] : doc.body);
    this.animatable = new Animatable(this.$target, animatableParams);
    this.x = this.animatable[xProp];
    this.y = this.animatable[yProp];
    this.destX = 0;
    this.destY = 0;
    this.scroll = {x: 0, y: 0};
    this.coords = [this.x(), this.y()]; // x, y
    this.snapped = [0, 0]; // x, y
    this.pointer = [0, 0, 0, 0]; // x, y, temp x, temp y
    this.scrollView = [0, 0]; // w, h
    this.dragArea = [0, 0, 0, 0]; // x, y, w, h
    this.containerBounds = [-maxValue, maxValue, maxValue, -maxValue]; // t, r, b, l
    this.scrollBounds = [0, 0, 0, 0]; // t, r, b, l
    this.targetBounds = [0, 0, 0, 0]; // t, r, b, l
    this.window = [0, 0]; // w, h
    this.velocity = 0;
    this.angle = 0;
    this.touchActionStyles = setTargetValues(this.$trigger, { touchAction: 'none' });
    this.triggerStyles = null;
    this.bodyStyles = null;
    this.targetStyles = null;
    this.transforms = new Transforms(this.$target);
    this.scrollThreshold = setValue(parameters.scrollThreshold, 30);
    this.updateTicker = new Timer({ autoplay: false, onUpdate: () => this.update() }, null, 0).init();
    this.dragging = false;
    this.updated = false;
    this.released = false;
    this.contained = !isUnd(container);
    this.canScroll = false;
    this.useWin = this.$container === doc.body;
    this.$scrollContainer = this.useWin ? win : this.$container;
    this.isFinePointer = matchMedia('(pointer:fine)').matches;
    this.enabled = false;
    this.animatable.animations[this.disabled[0] ? yProp : xProp ].onUpdate = () => {
      if (this.dragging && this.updated) {
        this.onUpdate(this);
        this.onDrag(this);
        this.updated = false;
      }
      if (this.released) {
        this.onUpdate(this);
      }
    };
    this.animatable.animations[this.disabled[0] ? yProp : xProp ].then(() => {
      if (this.released) {
        this.onSettle(this);
        this.released = false;
      }
    });
    this.enable();
    this.updateBoundingValues();
  }

  /**
   * @param {Number} x
   * @param {Number} y
   * @param {Number} [duration]
   * @param {EasingParam} [ease]
   */
  setPosition(x, y, duration, ease) {
    this.destX = x;
    this.destY = y;
    this.snapped[0] = snap(x, this.snapX);
    this.snapped[1] = snap(y, this.snapY);
    this.x(x, duration, ease);
    this.y(y, duration, ease);
  }

  updateScrollCoords() {
    const sx = round(this.useWin ? win.scrollX : this.$container.scrollLeft, 0);
    const sy = round(this.useWin ? win.scrollY : this.$container.scrollTop, 0);
    const [ cpt, cpr, cpb, cpl ] = this.containerPadding;
    this.scroll.x = sx;
    this.scroll.y = sy;
    this.scrollBounds[0] = sy - this.targetBounds[0] + cpt;
    this.scrollBounds[1] = sx - this.targetBounds[1] - cpr;
    this.scrollBounds[2] = sy - this.targetBounds[2] - cpb;
    this.scrollBounds[3] = sx - this.targetBounds[3] + cpl;
  }

  updateBoundingValues() {
    const cx = this.x();
    const cy = this.y();
    const iw = this.window[0] = win.innerWidth;
    const ih = this.window[1] = win.innerHeight;
    const uw = this.useWin;
    const sw = this.$container.scrollWidth;
    const sh = this.$container.scrollHeight;
    const transformContainerRect = this.$container.getBoundingClientRect();
    const [ cpt, cpr, cpb, cpl ] = this.containerPadding;
    this.dragArea[0] = uw ? 0 : transformContainerRect.left;
    this.dragArea[1] = uw ? 0 : transformContainerRect.top;
    this.scrollView[0] = uw ? clamp(sw, iw, sw) : sw;
    this.scrollView[1] = uw ? clamp(sh, ih, sh) : sh;
    this.setPosition(0, 0, 0);
    this.transforms.remove();
    this.updateScrollCoords();
    const { width, height, left, top, right, bottom } = this.$container.getBoundingClientRect();
    this.dragArea[2] = round(uw ? clamp(width, iw, iw) : width, 0);
    this.dragArea[3] = round(uw ? clamp(height, ih, ih) : height, 0);
    this.canScroll = (sw > this.dragArea[2] + cpl - cpr || sh > this.dragArea[3] + cpt - cpb && !this.container && this.contained);
    if (this.contained) {
      const sx = this.scroll.x;
      const sy = this.scroll.y;
      const canScroll = this.canScroll;
      const targetRect = this.$target.getBoundingClientRect();
      const hiddenLeft = canScroll ? uw ? 0 : this.$container.scrollLeft : 0;
      const hiddenTop = canScroll ? uw ? 0 : this.$container.scrollTop : 0;
      const hiddenRight = canScroll ? this.scrollView[0] - hiddenLeft - width : 0;
      const hiddenBottom = canScroll ? this.scrollView[1] - hiddenTop - height : 0;
      this.targetBounds[0] = round((targetRect.top + sy) - (uw ? 0 : top), 0);
      this.targetBounds[1] = round((targetRect.right + sx) - (uw ? iw : right), 0);
      this.targetBounds[2] = round((targetRect.bottom + sy) - (uw ? ih : bottom), 0);
      this.targetBounds[3] = round((targetRect.left + sx) - (uw ? 0 : left), 0);
      if (this.container) {
        this.containerBounds[0] = this.container[0] + cpt;
        this.containerBounds[1] = this.container[1] - cpr;
        this.containerBounds[2] = this.container[2] - cpb;
        this.containerBounds[3] = this.container[3] + cpl;
      } else {
        this.containerBounds[0] = -round(targetRect.top - top + hiddenTop - cpt, 0);
        this.containerBounds[1] = -round(targetRect.right - right - hiddenRight + cpr, 0);
        this.containerBounds[2] = -round(targetRect.bottom - bottom - hiddenBottom + cpb, 0);
        this.containerBounds[3] = -round(targetRect.left - left + hiddenLeft - cpl, 0);
      }
    }
    const [ bt, br, bb, bl ] = this.containerBounds;
    this.transforms.revert();
    this.setPosition(clamp(cx, bl, br), clamp(cy, bt, bb), 0);
  }

  /**
   * @param  {Array} bounds
   * @param  {Number} x
   * @param  {Number} y
   * @return {Boolean}
   */
  isOutOfBounds(bounds, x, y) {
    if (!this.contained) return false;
    const [ bt, br, bb, bl ] = bounds;
    const [ dx, dy ] = this.disabled;
    return !dx && x < bl || !dx && x > br || !dy && y < bt || !dy && y > bb;
  }

  update() {
    this.updateScrollCoords();
    if (this.canScroll) {
      const [ cpt, cpr, cpb, cpl ] = this.containerPadding;
      const [ sw, sh ] = this.scrollView;
      const daw = this.dragArea[2];
      const dah = this.dragArea[3];
      const csx = this.scroll.x;
      const csy = this.scroll.y;
      const nsw = this.$container.scrollWidth;
      const nsh = this.$container.scrollHeight;
      const csw = this.useWin ? clamp(nsw, this.window[0], nsw) : nsw;
      const csh = this.useWin ? clamp(nsh, this.window[1], nsh) : nsh;
      const swd = sw - csw;
      const shd = sh - csh;
      // Handle cases where the scrollarea dimensions changes during drag
      if (swd > 0 || shd > 0) {
        if (swd > 0) {
          this.coords[0] -= swd;
          this.scrollView[0] = csw;
        }
        if (shd > 0) {
          this.coords[1] -= shd;
          this.scrollView[1] = csh;
        }
      // Handle autoscroll when target is at the edges of the scroll bounds
      } else {
        const s = this.scrollSpeed * 10;
        const treshold = this.scrollThreshold;
        const [ x, y ] = this.coords;
        const [ st, sr, sb, sl ] = this.scrollBounds;
        const t = round(clamp((y - st - treshold + cpt) / treshold, -1, 0) * s, 0);
        const r = round(clamp((x - sr + treshold - cpr) / treshold, 0, 1) * s, 0);
        const b = round(clamp((y - sb + treshold - cpb) / treshold, 0, 1) * s, 0);
        const l = round(clamp((x - sl - treshold + cpl) / treshold, -1, 0) * s, 0);
        if (t || b || l || r) {
          const scrollX = round(clamp(csx + (l || r), 0, sw - daw), 0);
          const scrollY = round(clamp(csy + (t || b), 0, sh - dah), 0);
          this.coords[0] -= csx - scrollX;
          this.coords[1] -= csy - scrollY;
          this.$scrollContainer.scrollTo(scrollX, scrollY);
        }
      }
    }
    const [ px, py ] = this.pointer;
    this.coords[0] += (px - this.pointer[2]) * this.dragSpeed;
    this.coords[1] += (py - this.pointer[3]) * this.dragSpeed;
    this.pointer[2] = px;
    this.pointer[3] = py;
    const [ nx, ny ] = this.disabled;
    const [ cx, cy ] = this.coords;
    const [ sx, sy ] = this.snapped;
    const [ ct, cr, cb, cl ] = this.containerBounds;
    const cf = (1 - this.containerFriction) * this.dragSpeed;
    this.setPosition(
      nx ? this.x() : cx > cr ? cr + (cx - cr) * cf : cx < cl ? cl + (cx - cl) * cf : cx,
      ny ? this.y() : cy > cb ? cb + (cy - cb) * cf : cy < ct ? ct + (cy - ct) * cf : cy,
    0);
    const [ nsx, nsy ] = this.snapped;
    if (nsx !== sx && this.snapX || nsy !== sy && this.snapY) {
      this.onSnap(this);
    }
  }

  handleHover() {
    if (this.isFinePointer && !this.triggerStyles) {
      this.triggerStyles = setTargetValues(this.$trigger, { cursor: 'grab' });
    }
  }

  /**
   * @param {PointerEvent} e
   */
  handleDown(e) {
    if (this.dragging) return;
    remove(this.scroll);
    const { x, y } = this.transforms.normalizePoint(e.clientX, e.clientY);
    this.dragging = true;
    this.updateBoundingValues();
    this.x(this.x(), 0);
    this.y(this.y(), 0);
    this.coords[0] = this.x();
    this.coords[1] = this.y();
    this.pointer[2] = x;
    this.pointer[3] = y;
    this.velocity = 0;
    this.angle = 0;
    if (this.targetStyles) {
      this.targetStyles.revert();
      this.targetStyles = null;
    }
    const z = /** @type {Number} */(getTargetValue(this.$target, 'zIndex', false));
    zIndex = (z > zIndex ? z : zIndex) + 1;
    this.targetStyles = setTargetValues(this.$target, { zIndex });
    if (this.isFinePointer) {
      if (this.triggerStyles) {
        this.triggerStyles.revert();
        this.targetStyles = null;
      }
      this.bodyStyles = setTargetValues(doc.body, { cursor: 'grabbing' });
    }
    doc.addEventListener('pointermove', this, false);
    doc.addEventListener('pointerup', this, false);
    doc.addEventListener('pointercancel', this, false);
    win.addEventListener('selectstart', this, false);
    this.onGrab(this);
  }

  /**
   * @param {PointerEvent} e
   */
  handleMove(e) {
    if (!this.dragging) return;
    e.preventDefault();
    if (!this.triggerStyles) {
      this.triggerStyles = setTargetValues(this.$trigger, { pointerEvents: 'none' });
    }
    const { x, y } = this.transforms.normalizePoint(e.clientX, e.clientY);
    const dt = this.updateTicker.play().deltaTime;
    const dx = (x - this.pointer[2]);
    const dy = (y - this.pointer[3]);
    this.velocity = dt > 0 ? Math.sqrt(dx * dx + dy * dy) / dt : 0;
    this.angle = Math.atan2(dy, dx);
    this.pointer[0] = x;
    this.pointer[1] = y;
    this.updated = true;
  }

  handleUp() {
    if (!this.dragging) return;
    this.released = true;
    this.dragging = false;
    this.updateTicker.pause();

    if (this.triggerStyles) {
      this.triggerStyles.revert();
      this.triggerStyles = null;
    }

    if (this.isFinePointer && this.bodyStyles) {
      this.bodyStyles.revert();
      this.bodyStyles = null;
    }

    const customEase = this.releaseEase;
    const ease = customEase ? customEase : eases.out(5);
    const [ bt, br, bb, bl ] = this.containerBounds;
    const [ sx, sy ] = this.snapped;
    const cx = this.x();
    const cy = this.y();
    const rv = this.releaseVelocity;
    let destX = clamp(snap(cx, this.snapX), bl, br);
    let destY = clamp(snap(cy, this.snapY), bt, bb);
    let duration = 650;

    if (this.isOutOfBounds(this.containerBounds, cx, cy)) {
      // The drag ends outside the container: smoothly animate back inside
      this.setPosition(destX, destY, duration, ease);
    } else {
      // The drag ends inside the container: check where the target position will ends
      const s = this.velocity;
      const cf = 1 - this.containerFriction;
      const ds = s * 100 * rv;
      const dx = s ? Math.cos(this.angle) * ds : 0;
      const dy = s ? Math.sin(this.angle) * ds : 0;
      const x = cx + dx;
      const y = cy + dy;
      const v = round(clamp(ds / 50, 0, 20), 2);
      const springEasing = spring(1, 80 * this.releaseStiffness, 15, v);
      const springEase = springEasing.solver;
      duration = !rv ? rv : springEasing.duration;
      destX = clamp(snap(x, this.snapX), bl, br);
      destY = clamp(snap(y, this.snapY), bt, bb);
      // The target ends outside the container: apply spring easing
      if (this.isOutOfBounds(this.containerBounds, x, y) && cf) {
        const bounceX = !this.disabled[0] && (x > br || x < bl);
        const bounceY = !this.disabled[1] && (y > bb || y < bt);
        const bx = bounceX && !bounceY;
        const by = bounceY && !bounceX;
        const bouncedX = by ? clamp(destX + ((destX - cx) * .25), bl, br) : destX;
        const bouncedY = bx ? clamp(destY + ((destY - cy) * .25), bt, bb) : destY;
        const easeX = by || customEase ? ease : springEase;
        const easeY = bx || customEase ? ease : springEase;
        destX = clamp(snap(bouncedX, this.snapX), bl, br);
        destY = clamp(snap(bouncedY, this.snapY), bt, bb);
        if (!this.disabled[0]) this.x(destX, duration, easeX);
        if (!this.disabled[1]) this.y(destY, duration, easeY);
      } else {
        // The target ends inside the container: simple ease
        if (!this.disabled[0]) this.x(destX, duration * .6, ease);
        if (!this.disabled[1]) this.y(destY, duration * .6, ease);
      }
    }

    // Keep the target in view by scrollin the viewport
    if (!this.container && this.isOutOfBounds(this.scrollBounds, destX, destY)) {
      const [ st, sr, sb, sl ] = this.scrollBounds;
      const t = round(clamp(destY - st, -maxValue, 0), 0);
      const r = round(clamp(destX - sr, 0, maxValue), 0);
      const b = round(clamp(destY - sb, 0, maxValue), 0);
      const l = round(clamp(destX - sl, -maxValue, 0), 0);
      new Animation(this.scroll, {
        x: round(this.scroll.x + (l || r), 0),
        y: round(this.scroll.y + (t || b), 0),
        duration: duration * .75,
        ease,
        onUpdate: () => {
          this.$scrollContainer.scrollTo(this.scroll.x, this.scroll.y);
        },
      }).init();
    }

    this.destX = destX;
    this.destY = destY;

    this.onRelease(this);

    let hasSnapped = false;

    if (destX !== sx) {
      this.snapped[0] = destX;
      if (this.snapX) hasSnapped = true;
    }
    if (destY !== sy && this.snapY) {
      this.snapped[1] = destY;
      if (this.snapY) hasSnapped = true;
    }

    if (hasSnapped) this.onSnap(this);

    doc.removeEventListener('pointermove', this);
    doc.removeEventListener('pointerup', this);
    doc.removeEventListener('pointercancel', this);
    win.removeEventListener('selectstart', this);
  }

  reset() {
    remove(this.scroll);
    this.dragging = false;
    this.setPosition(0, 0, 0);
    this.coords[0] = 0;
    this.coords[1] = 0;
    this.pointer[0] = 0;
    this.pointer[1] = 0;
    this.pointer[2] = 0;
    this.pointer[3] = 0;
    this.velocity = 0;
    this.angle = 0;
    return this;
  }

  enable() {
    if (!this.enabled) {
      this.enabled = true;
      this.$target.classList.remove('is-disabled');
      this.$trigger.addEventListener('pointerdown', this, false);
      this.$trigger.addEventListener('mouseenter', this, false);
    }
    return this;
  }

  disable() {
    this.enabled = false;
    this.touchActionStyles.revert();
    if (this.triggerStyles) {
      this.triggerStyles.revert();
      this.triggerStyles = null;
    }
    if (this.bodyStyles) {
      this.bodyStyles.revert();
      this.bodyStyles = null;
    }
    if (this.targetStyles) {
      this.targetStyles.revert();
      this.targetStyles = null;
    }
    remove(this.scroll);
    this.updateTicker.pause();
    this.$target.classList.add('is-disabled');
    this.$trigger.removeEventListener('pointerdown', this);
    this.$trigger.removeEventListener('mouseenter', this);
    doc.removeEventListener('pointermove', this);
    doc.removeEventListener('pointerup', this);
    doc.removeEventListener('pointercancel', this);
    win.removeEventListener('selectstart', this);
    return this;
  }

  revert() {
    this.reset();
    this.disable();
    this.$target.classList.remove('is-disabled');
    this.updateTicker.revert();
    return this;
  }

  /**
   * @param {PointerEvent} e
   */
  handleEvent(e) {
    switch (e.type) {
      case 'pointerdown':
        this.handleDown(e);
        break;
      case 'pointermove':
        this.handleMove(e);
        break;
      case 'pointerup':
        this.handleUp();
        break;
      case 'pointercancel':
        this.handleUp();
        break;
      case 'mouseenter':
        this.handleHover();
        break;
      case 'selectstart':
        e.preventDefault();
        break;
    }
  }
}




class Scope {
  /** @param {ScopeParams} [parameters] */
  constructor(parameters = {}) {
    if (globals.scope) globals.scope.revertibles.push(this);
    const parsedRoot = parseTargets(parameters.root);
    const scopeDefaults = parameters.defaults;
    const globalDefault = globals.defaults;
    const mediaQueries = parameters.mediaQueries;
    /** @type {DefaultsParams} */
    this.defaults = scopeDefaults ? mergeObjects(scopeDefaults, globalDefault) : globalDefault;
    /** @type {Document|DOMTarget} */
    this.root = /** @type {Document|DOMTarget} */(parsedRoot ? parsedRoot[0] : doc);
    /** @type {Array<Function>} */
    this.constructors = [];
    /** @type {Array<Function>} */
    this.revertConstructors = [];
    /** @type {Array<Tickable|Scroller|Draggable|Scope>} */
    this.revertibles = [];
    /** @type {Record<String, Function>} */
    this.methods = {};
    /** @type {Record<String, Boolean>} */
    this.matches = {};
    /** @type {Record<String, MediaQueryList>} */
    this.mediaQueryLists = {};
    if (mediaQueries) {
      for (let mq in mediaQueries) {
        const _mq = win.matchMedia(mediaQueries[mq]);
        this.mediaQueryLists[mq] = _mq;
        _mq.addEventListener('change', this);
      }
    }
  }

  /**
   * @callback ScoppedCallback
   * @param {this} scope
   * @return {any}
   *
   * @param {ScoppedCallback} cb
   * @return {this}
   */
  execute(cb) {
    let activeScope = globals.scope;
    let activeRoot = globals.root;
    let activeDefaults = globals.defaults;
    globals.scope = this;
    globals.root = this.root;
    globals.defaults = this.defaults;
    const mqs = this.mediaQueryLists;
    for (let mq in mqs) this.matches[mq] = mqs[mq].matches;
    cb(this);
    globals.scope = activeScope;
    globals.root = activeRoot;
    globals.defaults = activeDefaults;
    return this;
  }

  /**
   * @return {this}
   */
  refresh() {
    this.execute(() => {
      let i = this.revertibles.length;
      let y = this.revertConstructors.length;
      while (i--) this.revertibles[i].revert();
      while (y--) this.revertConstructors[y](this);
      this.revertibles.length = 0;
      this.revertConstructors.length = 0;
      this.constructors.forEach( constructor => {
        const revertConstructor = constructor(this);
        if (revertConstructor) {
          this.revertConstructors.push(revertConstructor);
        }
      });
    });
    return this;
  }

  /**
   * @callback contructorCallback
   * @param {Scope} [self]
   *
   * @overload
   * @param {String} a1
   * @param {Function} a2
   * @return {this}
   *
   * @overload
   * @param {contructorCallback} a1
   * @return {this}
   *
   * @param {String|contructorCallback} a1
   * @param {Function} [a2]
   */
  add(a1, a2) {
    if (isFnc(a1)) {
      const constructor = /** @type {contructorCallback} */(a1);
      this.constructors.push(constructor);
      this.execute(() => {
        const revertConstructor = constructor(this);
        if (revertConstructor) {
          this.revertConstructors.push(revertConstructor);
        }
      });
    } else {
      this.methods[/** @type {String} */(a1)] = (/** @type {any} */...args) => {
        this.execute(() => a2(...args));
      };
    }
    return this;
  }

  /**
   * @param {Event} e
   */
  handleEvent(e) {
    switch (e.type) {
      case 'change':
        this.refresh();
        break;
    }
  }

  revert() {
    const revertibles = this.revertibles;
    const reverts = this.revertConstructors;
    const mqs = this.mediaQueryLists;
    let i = revertibles.length;
    let y = reverts.length;
    while (i--) revertibles[i].revert();
    while (y--) reverts[y](this);
    for (let mq in mqs) mqs[mq].removeEventListener('change', this);
    revertibles.length = 0;
    reverts.length = 0;
    this.constructors.length = 0;
    this.matches = {};
    this.methods = {};
    this.mediaQueryLists = {};
  }
}

// Main methods

/**
 * @param {TimerParams} [parameters]
 * @return {Timer}
 */
const createTimer = parameters => new Timer(parameters, null, 0).init();

/**
 * @param {TargetsParam} targets
 * @param {AnimationParams} parameters
 * @return {Animation}
 */
const animate = (targets, parameters) => new Animation(targets, parameters, null, 0, false).init();

/**
 * @param {TimelineParams} [parameters]
 * @return {Timeline}
 */
const createTimeline = parameters => new Timeline(parameters).init();

/**
 * @param {TargetsParam} targets
 * @param {AnimatableParams} parameters
 * @return {AnimatableObject}
 */
const createAnimatable = (targets, parameters) => /** @type {AnimatableObject} */(new Animatable(targets, parameters));

/**
 * @param {DOMTargetSelector} target
 * @param {DraggableParams} [parameters]
 * @return {Draggable}
 */
const createDraggable = (target, parameters) => new Draggable(target, parameters);

/**
 * @param {ScopeParams} [params]
 * @return {Scope}
 */
const createScope = params => new Scope(params);

// Global Object and visibility checks event register

if (isBrowser) {
  if (!win.AnimeJS) win.AnimeJS = [];
  win.AnimeJS.push({
    version: '4.0.0-beta.100.alpha-4',
    engine,
  });
  doc.addEventListener('visibilitychange',
    () => engine.suspendWhenHidden ? doc.hidden ? engine.suspend() : engine.resume() : 0
  );
}

export { Animatable, Animation, Clock, Draggable, Engine, Scope, Scroller, Timeline, Timer, animate, createAnimatable, createDraggable, createScope, createTimeline, createTimer, defaults, eases, engine, onScroll, scrollContainers, spring, stagger, svg, utils };
