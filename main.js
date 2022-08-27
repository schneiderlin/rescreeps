'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Main_bs = {};

var js_dict = {};

var caml_option = {};

function isNested(x) {
  return x.BS_PRIVATE_NESTED_SOME_NONE !== undefined;
}

function some$1(x) {
  if (x === undefined) {
    return {
            BS_PRIVATE_NESTED_SOME_NONE: 0
          };
  } else if (x !== null && x.BS_PRIVATE_NESTED_SOME_NONE !== undefined) {
    return {
            BS_PRIVATE_NESTED_SOME_NONE: x.BS_PRIVATE_NESTED_SOME_NONE + 1 | 0
          };
  } else {
    return x;
  }
}

function nullable_to_opt(x) {
  if (x == null) {
    return ;
  } else {
    return some$1(x);
  }
}

function undefined_to_opt(x) {
  if (x === undefined) {
    return ;
  } else {
    return some$1(x);
  }
}

function null_to_opt(x) {
  if (x === null) {
    return ;
  } else {
    return some$1(x);
  }
}

function valFromOption(x) {
  if (!(x !== null && x.BS_PRIVATE_NESTED_SOME_NONE !== undefined)) {
    return x;
  }
  var depth = x.BS_PRIVATE_NESTED_SOME_NONE;
  if (depth === 0) {
    return ;
  } else {
    return {
            BS_PRIVATE_NESTED_SOME_NONE: depth - 1 | 0
          };
  }
}

function option_get(x) {
  if (x === undefined) {
    return ;
  } else {
    return valFromOption(x);
  }
}

function option_unwrap(x) {
  if (x !== undefined) {
    return x.VAL;
  } else {
    return x;
  }
}

caml_option.nullable_to_opt = nullable_to_opt;
caml_option.undefined_to_opt = undefined_to_opt;
caml_option.null_to_opt = null_to_opt;
caml_option.valFromOption = valFromOption;
caml_option.some = some$1;
caml_option.isNested = isNested;
caml_option.option_get = option_get;
caml_option.option_unwrap = option_unwrap;

var Caml_option$9 = caml_option;

function get$2(dict, k) {
  if ((k in dict)) {
    return Caml_option$9.some(dict[k]);
  }
  
}

var unsafeDeleteKey = (function (dict,key){
      delete dict[key];
     });

function entries(dict) {
  var keys = Object.keys(dict);
  var l = keys.length;
  var values = new Array(l);
  for(var i = 0; i < l; ++i){
    var key = keys[i];
    values[i] = [
      key,
      dict[key]
    ];
  }
  return values;
}

function values(dict) {
  var keys = Object.keys(dict);
  var l = keys.length;
  var values$1 = new Array(l);
  for(var i = 0; i < l; ++i){
    values$1[i] = dict[keys[i]];
  }
  return values$1;
}

function fromList(entries) {
  var dict = {};
  var _param = entries;
  while(true) {
    var param = _param;
    if (!param) {
      return dict;
    }
    var match = param.hd;
    dict[match[0]] = match[1];
    _param = param.tl;
    continue ;
  }}

function fromArray(entries) {
  var dict = {};
  var l = entries.length;
  for(var i = 0; i < l; ++i){
    var match = entries[i];
    dict[match[0]] = match[1];
  }
  return dict;
}

function map$2(f, source) {
  var target = {};
  var keys = Object.keys(source);
  var l = keys.length;
  for(var i = 0; i < l; ++i){
    var key = keys[i];
    target[key] = f(source[key]);
  }
  return target;
}

js_dict.get = get$2;
js_dict.unsafeDeleteKey = unsafeDeleteKey;
js_dict.entries = entries;
js_dict.values = values;
js_dict.fromList = fromList;
js_dict.fromArray = fromArray;
js_dict.map = map$2;

var caml_obj = {};

var caml = {};

function caml_int_compare(x, y) {
  if (x < y) {
    return -1;
  } else if (x === y) {
    return 0;
  } else {
    return 1;
  }
}

function caml_bool_compare(x, y) {
  if (x) {
    if (y) {
      return 0;
    } else {
      return 1;
    }
  } else if (y) {
    return -1;
  } else {
    return 0;
  }
}

function caml_float_compare(x, y) {
  if (x === y) {
    return 0;
  } else if (x < y) {
    return -1;
  } else if (x > y || x === x) {
    return 1;
  } else if (y === y) {
    return -1;
  } else {
    return 0;
  }
}

function caml_string_compare(s1, s2) {
  if (s1 === s2) {
    return 0;
  } else if (s1 < s2) {
    return -1;
  } else {
    return 1;
  }
}

function caml_bool_min(x, y) {
  if (x) {
    return y;
  } else {
    return x;
  }
}

function caml_int_min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

function caml_float_min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

function caml_string_min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

function caml_int32_min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

function caml_bool_max(x, y) {
  if (x) {
    return x;
  } else {
    return y;
  }
}

function caml_int_max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

function caml_float_max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

function caml_string_max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

function caml_int32_max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

function i64_eq(x, y) {
  if (x[1] === y[1]) {
    return x[0] === y[0];
  } else {
    return false;
  }
}

function i64_ge(param, param$1) {
  var other_hi = param$1[0];
  var hi = param[0];
  if (hi > other_hi) {
    return true;
  } else if (hi < other_hi) {
    return false;
  } else {
    return param[1] >= param$1[1];
  }
}

function i64_neq(x, y) {
  return !i64_eq(x, y);
}

function i64_lt(x, y) {
  return !i64_ge(x, y);
}

function i64_gt(x, y) {
  if (x[0] > y[0]) {
    return true;
  } else if (x[0] < y[0]) {
    return false;
  } else {
    return x[1] > y[1];
  }
}

function i64_le(x, y) {
  return !i64_gt(x, y);
}

function i64_min(x, y) {
  if (i64_ge(x, y)) {
    return y;
  } else {
    return x;
  }
}

function i64_max(x, y) {
  if (i64_gt(x, y)) {
    return x;
  } else {
    return y;
  }
}

caml.caml_int_compare = caml_int_compare;
caml.caml_bool_compare = caml_bool_compare;
caml.caml_float_compare = caml_float_compare;
caml.caml_string_compare = caml_string_compare;
caml.caml_bool_min = caml_bool_min;
caml.caml_int_min = caml_int_min;
caml.caml_float_min = caml_float_min;
caml.caml_string_min = caml_string_min;
caml.caml_int32_min = caml_int32_min;
caml.caml_bool_max = caml_bool_max;
caml.caml_int_max = caml_int_max;
caml.caml_float_max = caml_float_max;
caml.caml_string_max = caml_string_max;
caml.caml_int32_max = caml_int32_max;
caml.i64_eq = i64_eq;
caml.i64_neq = i64_neq;
caml.i64_lt = i64_lt;
caml.i64_gt = i64_gt;
caml.i64_le = i64_le;
caml.i64_ge = i64_ge;
caml.i64_min = i64_min;
caml.i64_max = i64_max;

var Caml$1 = caml;

var for_in = (function(o,foo){
        for (var x in o) { foo(x); }});

var caml_obj_dup = (function(x){
  if(Array.isArray(x)){
    var len = x.length;  
    var v = new Array(len);
    for(var i = 0 ; i < len ; ++i){
      v[i] = x[i];
    }
    if(x.TAG !== undefined){
      v.TAG = x.TAG; // TODO this can be removed eventually
    }  
    return v 
  } 
  return Object.assign({},x)    
});

var update_dummy = (function(x,y){
  var k;  
  if(Array.isArray(y)){
    for(k = 0; k < y.length ; ++k){
      x[k] = y[k];
    }
    if(y.TAG !== undefined){
      x.TAG = y.TAG;
    }
  } else {
    for (var k in y){
      x[k] = y[k];
    }
  }
});

function caml_compare(a, b) {
  if (a === b) {
    return 0;
  }
  var a_type = typeof a;
  var b_type = typeof b;
  switch (a_type) {
    case "boolean" :
        if (b_type === "boolean") {
          return Caml$1.caml_bool_compare(a, b);
        }
        break;
    case "function" :
        if (b_type === "function") {
          throw {
                RE_EXN_ID: "Invalid_argument",
                _1: "compare: functional value",
                Error: new Error()
              };
        }
        break;
    case "number" :
        if (b_type === "number") {
          return Caml$1.caml_int_compare(a, b);
        }
        break;
    case "string" :
        if (b_type === "string") {
          return Caml$1.caml_string_compare(a, b);
        } else {
          return 1;
        }
    case "undefined" :
        return -1;
      
  }
  switch (b_type) {
    case "string" :
        return -1;
    case "undefined" :
        return 1;
    default:
      if (a_type === "boolean") {
        return 1;
      }
      if (b_type === "boolean") {
        return -1;
      }
      if (a_type === "function") {
        return 1;
      }
      if (b_type === "function") {
        return -1;
      }
      if (a_type === "number") {
        if (b === null || b.BS_PRIVATE_NESTED_SOME_NONE !== undefined) {
          return 1;
        } else {
          return -1;
        }
      }
      if (b_type === "number") {
        if (a === null || a.BS_PRIVATE_NESTED_SOME_NONE !== undefined) {
          return -1;
        } else {
          return 1;
        }
      }
      if (a === null) {
        if (b.BS_PRIVATE_NESTED_SOME_NONE !== undefined) {
          return 1;
        } else {
          return -1;
        }
      }
      if (b === null) {
        if (a.BS_PRIVATE_NESTED_SOME_NONE !== undefined) {
          return -1;
        } else {
          return 1;
        }
      }
      if (a.BS_PRIVATE_NESTED_SOME_NONE !== undefined) {
        if (b.BS_PRIVATE_NESTED_SOME_NONE !== undefined) {
          return aux_obj_compare(a, b);
        } else {
          return -1;
        }
      }
      var tag_a = a.TAG | 0;
      var tag_b = b.TAG | 0;
      if (tag_a === 248) {
        return Caml$1.caml_int_compare(a[1], b[1]);
      }
      if (tag_a === 251) {
        throw {
              RE_EXN_ID: "Invalid_argument",
              _1: "equal: abstract value",
              Error: new Error()
            };
      }
      if (tag_a !== tag_b) {
        if (tag_a < tag_b) {
          return -1;
        } else {
          return 1;
        }
      }
      var len_a = a.length | 0;
      var len_b = b.length | 0;
      if (len_a === len_b) {
        if (Array.isArray(a)) {
          var _i = 0;
          while(true) {
            var i = _i;
            if (i === len_a) {
              return 0;
            }
            var res = caml_compare(a[i], b[i]);
            if (res !== 0) {
              return res;
            }
            _i = i + 1 | 0;
            continue ;
          }        } else if ((a instanceof Date && b instanceof Date)) {
          return (a - b);
        } else {
          return aux_obj_compare(a, b);
        }
      } else if (len_a < len_b) {
        var _i$1 = 0;
        while(true) {
          var i$1 = _i$1;
          if (i$1 === len_a) {
            return -1;
          }
          var res$1 = caml_compare(a[i$1], b[i$1]);
          if (res$1 !== 0) {
            return res$1;
          }
          _i$1 = i$1 + 1 | 0;
          continue ;
        }      } else {
        var _i$2 = 0;
        while(true) {
          var i$2 = _i$2;
          if (i$2 === len_b) {
            return 1;
          }
          var res$2 = caml_compare(a[i$2], b[i$2]);
          if (res$2 !== 0) {
            return res$2;
          }
          _i$2 = i$2 + 1 | 0;
          continue ;
        }      }
  }
}

function aux_obj_compare(a, b) {
  var min_key_lhs = {
    contents: undefined
  };
  var min_key_rhs = {
    contents: undefined
  };
  var do_key = function (param, key) {
    var min_key = param[2];
    var b = param[1];
    if (!(!b.hasOwnProperty(key) || caml_compare(param[0][key], b[key]) > 0)) {
      return ;
    }
    var mk = min_key.contents;
    if (mk !== undefined && key >= mk) {
      return ;
    } else {
      min_key.contents = key;
      return ;
    }
  };
  var partial_arg = [
    a,
    b,
    min_key_rhs
  ];
  var do_key_a = function (param) {
    return do_key(partial_arg, param);
  };
  var partial_arg$1 = [
    b,
    a,
    min_key_lhs
  ];
  var do_key_b = function (param) {
    return do_key(partial_arg$1, param);
  };
  for_in(a, do_key_a);
  for_in(b, do_key_b);
  var match = min_key_lhs.contents;
  var match$1 = min_key_rhs.contents;
  if (match !== undefined) {
    if (match$1 !== undefined) {
      return Caml$1.caml_string_compare(match, match$1);
    } else {
      return -1;
    }
  } else if (match$1 !== undefined) {
    return 1;
  } else {
    return 0;
  }
}

function caml_equal(a, b) {
  if (a === b) {
    return true;
  }
  var a_type = typeof a;
  if (a_type === "string" || a_type === "number" || a_type === "boolean" || a_type === "undefined" || a === null) {
    return false;
  }
  var b_type = typeof b;
  if (a_type === "function" || b_type === "function") {
    throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "equal: functional value",
          Error: new Error()
        };
  }
  if (b_type === "number" || b_type === "undefined" || b === null) {
    return false;
  }
  var tag_a = a.TAG | 0;
  var tag_b = b.TAG | 0;
  if (tag_a === 248) {
    return a[1] === b[1];
  }
  if (tag_a === 251) {
    throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "equal: abstract value",
          Error: new Error()
        };
  }
  if (tag_a !== tag_b) {
    return false;
  }
  var len_a = a.length | 0;
  var len_b = b.length | 0;
  if (len_a === len_b) {
    if (Array.isArray(a)) {
      var _i = 0;
      while(true) {
        var i = _i;
        if (i === len_a) {
          return true;
        }
        if (!caml_equal(a[i], b[i])) {
          return false;
        }
        _i = i + 1 | 0;
        continue ;
      }    } else if ((a instanceof Date && b instanceof Date)) {
      return !(a > b || a < b);
    } else {
      var result = {
        contents: true
      };
      var do_key_a = function (key) {
        if (!b.hasOwnProperty(key)) {
          result.contents = false;
          return ;
        }
        
      };
      var do_key_b = function (key) {
        if (!a.hasOwnProperty(key) || !caml_equal(b[key], a[key])) {
          result.contents = false;
          return ;
        }
        
      };
      for_in(a, do_key_a);
      if (result.contents) {
        for_in(b, do_key_b);
      }
      return result.contents;
    }
  } else {
    return false;
  }
}

function caml_equal_null(x, y) {
  if (y !== null) {
    return caml_equal(x, y);
  } else {
    return x === y;
  }
}

function caml_equal_undefined(x, y) {
  if (y !== undefined) {
    return caml_equal(x, y);
  } else {
    return x === y;
  }
}

function caml_equal_nullable(x, y) {
  if (y == null) {
    return x === y;
  } else {
    return caml_equal(x, y);
  }
}

function caml_notequal(a, b) {
  return !caml_equal(a, b);
}

function caml_greaterequal(a, b) {
  return caml_compare(a, b) >= 0;
}

function caml_greaterthan(a, b) {
  return caml_compare(a, b) > 0;
}

function caml_lessequal(a, b) {
  return caml_compare(a, b) <= 0;
}

function caml_lessthan(a, b) {
  return caml_compare(a, b) < 0;
}

function caml_min(x, y) {
  if (caml_compare(x, y) <= 0) {
    return x;
  } else {
    return y;
  }
}

function caml_max(x, y) {
  if (caml_compare(x, y) >= 0) {
    return x;
  } else {
    return y;
  }
}

caml_obj.caml_obj_dup = caml_obj_dup;
caml_obj.update_dummy = update_dummy;
caml_obj.caml_compare = caml_compare;
caml_obj.caml_equal = caml_equal;
caml_obj.caml_equal_null = caml_equal_null;
caml_obj.caml_equal_undefined = caml_equal_undefined;
caml_obj.caml_equal_nullable = caml_equal_nullable;
caml_obj.caml_notequal = caml_notequal;
caml_obj.caml_greaterequal = caml_greaterequal;
caml_obj.caml_greaterthan = caml_greaterthan;
caml_obj.caml_lessthan = caml_lessthan;
caml_obj.caml_lessequal = caml_lessequal;
caml_obj.caml_min = caml_min;
caml_obj.caml_max = caml_max;

var RoleMiner_bs = {};

var Common_bs = {};

var Caml_obj$8 = caml_obj;

function samePosition(p1, p2) {
  if (p1.x === p2.x && p2.y === p2.y) {
    return p1.roomName === p2.roomName;
  } else {
    return false;
  }
}

function pickResource(creep, resource) {
  if (Caml_obj$8.caml_equal(creep.pickup(resource), ERR_NOT_IN_RANGE)) {
    creep.moveTo(resource.pos);
    return ;
  }
  
}

Common_bs.samePosition = samePosition;
Common_bs.pickResource = pickResource;

var belt_Option = {};

var curry = {};

var caml_array = {};

function sub(x, offset, len) {
  var result = new Array(len);
  var j = 0;
  var i = offset;
  while(j < len) {
    result[j] = x[i];
    j = j + 1 | 0;
    i = i + 1 | 0;
  }  return result;
}

function len(_acc, _l) {
  while(true) {
    var l = _l;
    var acc = _acc;
    if (!l) {
      return acc;
    }
    _l = l.tl;
    _acc = l.hd.length + acc | 0;
    continue ;
  }}

function fill$1(arr, _i, _l) {
  while(true) {
    var l = _l;
    var i = _i;
    if (!l) {
      return ;
    }
    var x = l.hd;
    var l$1 = x.length;
    var k = i;
    var j = 0;
    while(j < l$1) {
      arr[k] = x[j];
      k = k + 1 | 0;
      j = j + 1 | 0;
    }    _l = l.tl;
    _i = k;
    continue ;
  }}

function concat$1(l) {
  var v = len(0, l);
  var result = new Array(v);
  fill$1(result, 0, l);
  return result;
}

function set$1(xs, index, newval) {
  if (index < 0 || index >= xs.length) {
    throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "index out of bounds",
          Error: new Error()
        };
  }
  xs[index] = newval;
  
}

function get$1(xs, index) {
  if (index < 0 || index >= xs.length) {
    throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "index out of bounds",
          Error: new Error()
        };
  }
  return xs[index];
}

function make$1(len, init) {
  var b = new Array(len);
  for(var i = 0; i < len; ++i){
    b[i] = init;
  }
  return b;
}

function make_float(len) {
  var b = new Array(len);
  for(var i = 0; i < len; ++i){
    b[i] = 0;
  }
  return b;
}

function blit$1(a1, i1, a2, i2, len) {
  if (i2 <= i1) {
    for(var j = 0; j < len; ++j){
      a2[j + i2 | 0] = a1[j + i1 | 0];
    }
    return ;
  }
  for(var j$1 = len - 1 | 0; j$1 >= 0; --j$1){
    a2[j$1 + i2 | 0] = a1[j$1 + i1 | 0];
  }
  
}

function dup(prim) {
  return prim.slice(0);
}

caml_array.dup = dup;
caml_array.sub = sub;
caml_array.concat = concat$1;
caml_array.make = make$1;
caml_array.make_float = make_float;
caml_array.blit = blit$1;
caml_array.get = get$1;
caml_array.set = set$1;

var Caml_array$4 = caml_array;

function app(_f, _args) {
  while(true) {
    var args = _args;
    var f = _f;
    var init_arity = f.length;
    var arity = init_arity === 0 ? 1 : init_arity;
    var len = args.length;
    var d = arity - len | 0;
    if (d === 0) {
      return f.apply(null, args);
    }
    if (d >= 0) {
      return (function(f,args){
      return function (x) {
        return app(f, args.concat([x]));
      }
      }(f,args));
    }
    _args = Caml_array$4.sub(args, arity, -d | 0);
    _f = f.apply(null, Caml_array$4.sub(args, 0, arity));
    continue ;
  }}

function _1(o, a0) {
  var arity = o.length;
  if (arity === 1) {
    return o(a0);
  } else {
    switch (arity) {
      case 1 :
          return o(a0);
      case 2 :
          return function (param) {
            return o(a0, param);
          };
      case 3 :
          return function (param, param$1) {
            return o(a0, param, param$1);
          };
      case 4 :
          return function (param, param$1, param$2) {
            return o(a0, param, param$1, param$2);
          };
      case 5 :
          return function (param, param$1, param$2, param$3) {
            return o(a0, param, param$1, param$2, param$3);
          };
      case 6 :
          return function (param, param$1, param$2, param$3, param$4) {
            return o(a0, param, param$1, param$2, param$3, param$4);
          };
      case 7 :
          return function (param, param$1, param$2, param$3, param$4, param$5) {
            return o(a0, param, param$1, param$2, param$3, param$4, param$5);
          };
      default:
        return app(o, [a0]);
    }
  }
}

function __1(o) {
  var arity = o.length;
  if (arity === 1) {
    return o;
  } else {
    return function (a0) {
      return _1(o, a0);
    };
  }
}

function _2(o, a0, a1) {
  var arity = o.length;
  if (arity === 2) {
    return o(a0, a1);
  } else {
    switch (arity) {
      case 1 :
          return app(o(a0), [a1]);
      case 2 :
          return o(a0, a1);
      case 3 :
          return function (param) {
            return o(a0, a1, param);
          };
      case 4 :
          return function (param, param$1) {
            return o(a0, a1, param, param$1);
          };
      case 5 :
          return function (param, param$1, param$2) {
            return o(a0, a1, param, param$1, param$2);
          };
      case 6 :
          return function (param, param$1, param$2, param$3) {
            return o(a0, a1, param, param$1, param$2, param$3);
          };
      case 7 :
          return function (param, param$1, param$2, param$3, param$4) {
            return o(a0, a1, param, param$1, param$2, param$3, param$4);
          };
      default:
        return app(o, [
                    a0,
                    a1
                  ]);
    }
  }
}

function __2(o) {
  var arity = o.length;
  if (arity === 2) {
    return o;
  } else {
    return function (a0, a1) {
      return _2(o, a0, a1);
    };
  }
}

function _3(o, a0, a1, a2) {
  var arity = o.length;
  if (arity === 3) {
    return o(a0, a1, a2);
  } else {
    switch (arity) {
      case 1 :
          return app(o(a0), [
                      a1,
                      a2
                    ]);
      case 2 :
          return app(o(a0, a1), [a2]);
      case 3 :
          return o(a0, a1, a2);
      case 4 :
          return function (param) {
            return o(a0, a1, a2, param);
          };
      case 5 :
          return function (param, param$1) {
            return o(a0, a1, a2, param, param$1);
          };
      case 6 :
          return function (param, param$1, param$2) {
            return o(a0, a1, a2, param, param$1, param$2);
          };
      case 7 :
          return function (param, param$1, param$2, param$3) {
            return o(a0, a1, a2, param, param$1, param$2, param$3);
          };
      default:
        return app(o, [
                    a0,
                    a1,
                    a2
                  ]);
    }
  }
}

function __3(o) {
  var arity = o.length;
  if (arity === 3) {
    return o;
  } else {
    return function (a0, a1, a2) {
      return _3(o, a0, a1, a2);
    };
  }
}

function _4(o, a0, a1, a2, a3) {
  var arity = o.length;
  if (arity === 4) {
    return o(a0, a1, a2, a3);
  } else {
    switch (arity) {
      case 1 :
          return app(o(a0), [
                      a1,
                      a2,
                      a3
                    ]);
      case 2 :
          return app(o(a0, a1), [
                      a2,
                      a3
                    ]);
      case 3 :
          return app(o(a0, a1, a2), [a3]);
      case 4 :
          return o(a0, a1, a2, a3);
      case 5 :
          return function (param) {
            return o(a0, a1, a2, a3, param);
          };
      case 6 :
          return function (param, param$1) {
            return o(a0, a1, a2, a3, param, param$1);
          };
      case 7 :
          return function (param, param$1, param$2) {
            return o(a0, a1, a2, a3, param, param$1, param$2);
          };
      default:
        return app(o, [
                    a0,
                    a1,
                    a2,
                    a3
                  ]);
    }
  }
}

function __4(o) {
  var arity = o.length;
  if (arity === 4) {
    return o;
  } else {
    return function (a0, a1, a2, a3) {
      return _4(o, a0, a1, a2, a3);
    };
  }
}

function _5(o, a0, a1, a2, a3, a4) {
  var arity = o.length;
  if (arity === 5) {
    return o(a0, a1, a2, a3, a4);
  } else {
    switch (arity) {
      case 1 :
          return app(o(a0), [
                      a1,
                      a2,
                      a3,
                      a4
                    ]);
      case 2 :
          return app(o(a0, a1), [
                      a2,
                      a3,
                      a4
                    ]);
      case 3 :
          return app(o(a0, a1, a2), [
                      a3,
                      a4
                    ]);
      case 4 :
          return app(o(a0, a1, a2, a3), [a4]);
      case 5 :
          return o(a0, a1, a2, a3, a4);
      case 6 :
          return function (param) {
            return o(a0, a1, a2, a3, a4, param);
          };
      case 7 :
          return function (param, param$1) {
            return o(a0, a1, a2, a3, a4, param, param$1);
          };
      default:
        return app(o, [
                    a0,
                    a1,
                    a2,
                    a3,
                    a4
                  ]);
    }
  }
}

function __5(o) {
  var arity = o.length;
  if (arity === 5) {
    return o;
  } else {
    return function (a0, a1, a2, a3, a4) {
      return _5(o, a0, a1, a2, a3, a4);
    };
  }
}

function _6(o, a0, a1, a2, a3, a4, a5) {
  var arity = o.length;
  if (arity === 6) {
    return o(a0, a1, a2, a3, a4, a5);
  } else {
    switch (arity) {
      case 1 :
          return app(o(a0), [
                      a1,
                      a2,
                      a3,
                      a4,
                      a5
                    ]);
      case 2 :
          return app(o(a0, a1), [
                      a2,
                      a3,
                      a4,
                      a5
                    ]);
      case 3 :
          return app(o(a0, a1, a2), [
                      a3,
                      a4,
                      a5
                    ]);
      case 4 :
          return app(o(a0, a1, a2, a3), [
                      a4,
                      a5
                    ]);
      case 5 :
          return app(o(a0, a1, a2, a3, a4), [a5]);
      case 6 :
          return o(a0, a1, a2, a3, a4, a5);
      case 7 :
          return function (param) {
            return o(a0, a1, a2, a3, a4, a5, param);
          };
      default:
        return app(o, [
                    a0,
                    a1,
                    a2,
                    a3,
                    a4,
                    a5
                  ]);
    }
  }
}

function __6(o) {
  var arity = o.length;
  if (arity === 6) {
    return o;
  } else {
    return function (a0, a1, a2, a3, a4, a5) {
      return _6(o, a0, a1, a2, a3, a4, a5);
    };
  }
}

function _7(o, a0, a1, a2, a3, a4, a5, a6) {
  var arity = o.length;
  if (arity === 7) {
    return o(a0, a1, a2, a3, a4, a5, a6);
  } else {
    switch (arity) {
      case 1 :
          return app(o(a0), [
                      a1,
                      a2,
                      a3,
                      a4,
                      a5,
                      a6
                    ]);
      case 2 :
          return app(o(a0, a1), [
                      a2,
                      a3,
                      a4,
                      a5,
                      a6
                    ]);
      case 3 :
          return app(o(a0, a1, a2), [
                      a3,
                      a4,
                      a5,
                      a6
                    ]);
      case 4 :
          return app(o(a0, a1, a2, a3), [
                      a4,
                      a5,
                      a6
                    ]);
      case 5 :
          return app(o(a0, a1, a2, a3, a4), [
                      a5,
                      a6
                    ]);
      case 6 :
          return app(o(a0, a1, a2, a3, a4, a5), [a6]);
      case 7 :
          return o(a0, a1, a2, a3, a4, a5, a6);
      default:
        return app(o, [
                    a0,
                    a1,
                    a2,
                    a3,
                    a4,
                    a5,
                    a6
                  ]);
    }
  }
}

function __7(o) {
  var arity = o.length;
  if (arity === 7) {
    return o;
  } else {
    return function (a0, a1, a2, a3, a4, a5, a6) {
      return _7(o, a0, a1, a2, a3, a4, a5, a6);
    };
  }
}

function _8(o, a0, a1, a2, a3, a4, a5, a6, a7) {
  var arity = o.length;
  if (arity === 8) {
    return o(a0, a1, a2, a3, a4, a5, a6, a7);
  } else {
    switch (arity) {
      case 1 :
          return app(o(a0), [
                      a1,
                      a2,
                      a3,
                      a4,
                      a5,
                      a6,
                      a7
                    ]);
      case 2 :
          return app(o(a0, a1), [
                      a2,
                      a3,
                      a4,
                      a5,
                      a6,
                      a7
                    ]);
      case 3 :
          return app(o(a0, a1, a2), [
                      a3,
                      a4,
                      a5,
                      a6,
                      a7
                    ]);
      case 4 :
          return app(o(a0, a1, a2, a3), [
                      a4,
                      a5,
                      a6,
                      a7
                    ]);
      case 5 :
          return app(o(a0, a1, a2, a3, a4), [
                      a5,
                      a6,
                      a7
                    ]);
      case 6 :
          return app(o(a0, a1, a2, a3, a4, a5), [
                      a6,
                      a7
                    ]);
      case 7 :
          return app(o(a0, a1, a2, a3, a4, a5, a6), [a7]);
      default:
        return app(o, [
                    a0,
                    a1,
                    a2,
                    a3,
                    a4,
                    a5,
                    a6,
                    a7
                  ]);
    }
  }
}

function __8(o) {
  var arity = o.length;
  if (arity === 8) {
    return o;
  } else {
    return function (a0, a1, a2, a3, a4, a5, a6, a7) {
      return _8(o, a0, a1, a2, a3, a4, a5, a6, a7);
    };
  }
}

curry.app = app;
curry._1 = _1;
curry.__1 = __1;
curry._2 = _2;
curry.__2 = __2;
curry._3 = _3;
curry.__3 = __3;
curry._4 = _4;
curry.__4 = __4;
curry._5 = _5;
curry.__5 = __5;
curry._6 = _6;
curry.__6 = __6;
curry._7 = _7;
curry.__7 = __7;
curry._8 = _8;
curry.__8 = __8;

var Curry$1 = curry;
var Caml_option$8 = caml_option;

function keepU$1(opt, p) {
  if (opt !== undefined && p(Caml_option$8.valFromOption(opt))) {
    return opt;
  }
  
}

function keep$1(opt, p) {
  return keepU$1(opt, Curry$1.__1(p));
}

function forEachU$1(opt, f) {
  if (opt !== undefined) {
    return f(Caml_option$8.valFromOption(opt));
  }
  
}

function forEach$1(opt, f) {
  return forEachU$1(opt, Curry$1.__1(f));
}

function getExn$1(x) {
  if (x !== undefined) {
    return Caml_option$8.valFromOption(x);
  }
  throw {
        RE_EXN_ID: "Not_found",
        Error: new Error()
      };
}

function mapWithDefaultU(opt, $$default, f) {
  if (opt !== undefined) {
    return f(Caml_option$8.valFromOption(opt));
  } else {
    return $$default;
  }
}

function mapWithDefault(opt, $$default, f) {
  return mapWithDefaultU(opt, $$default, Curry$1.__1(f));
}

function mapU$1(opt, f) {
  if (opt !== undefined) {
    return Caml_option$8.some(f(Caml_option$8.valFromOption(opt)));
  }
  
}

function map$1(opt, f) {
  return mapU$1(opt, Curry$1.__1(f));
}

function flatMapU(opt, f) {
  if (opt !== undefined) {
    return f(Caml_option$8.valFromOption(opt));
  }
  
}

function flatMap(opt, f) {
  return flatMapU(opt, Curry$1.__1(f));
}

function getWithDefault(opt, $$default) {
  if (opt !== undefined) {
    return Caml_option$8.valFromOption(opt);
  } else {
    return $$default;
  }
}

function isSome(param) {
  return param !== undefined;
}

function isNone(x) {
  return x === undefined;
}

function eqU$1(a, b, f) {
  if (a !== undefined) {
    if (b !== undefined) {
      return f(Caml_option$8.valFromOption(a), Caml_option$8.valFromOption(b));
    } else {
      return false;
    }
  } else {
    return b === undefined;
  }
}

function eq$1(a, b, f) {
  return eqU$1(a, b, Curry$1.__2(f));
}

function cmpU$1(a, b, f) {
  if (a !== undefined) {
    if (b !== undefined) {
      return f(Caml_option$8.valFromOption(a), Caml_option$8.valFromOption(b));
    } else {
      return 1;
    }
  } else if (b !== undefined) {
    return -1;
  } else {
    return 0;
  }
}

function cmp$1(a, b, f) {
  return cmpU$1(a, b, Curry$1.__2(f));
}

belt_Option.keepU = keepU$1;
belt_Option.keep = keep$1;
belt_Option.forEachU = forEachU$1;
belt_Option.forEach = forEach$1;
belt_Option.getExn = getExn$1;
belt_Option.mapWithDefaultU = mapWithDefaultU;
belt_Option.mapWithDefault = mapWithDefault;
belt_Option.mapU = mapU$1;
belt_Option.map = map$1;
belt_Option.flatMapU = flatMapU;
belt_Option.flatMap = flatMap;
belt_Option.getWithDefault = getWithDefault;
belt_Option.isSome = isSome;
belt_Option.isNone = isNone;
belt_Option.eqU = eqU$1;
belt_Option.eq = eq$1;
belt_Option.cmpU = cmpU$1;
belt_Option.cmp = cmp$1;

var Common$3 = Common_bs;
var Caml_obj$7 = caml_obj;
var Belt_Option$7 = belt_Option;
var Caml_option$7 = caml_option;

function minerName$1(minePos) {
  return "Miner" + String(minePos.x) + "." + String(minePos.y);
}

function roleMiner$1(creep, minePos) {
  if (Common$3.samePosition(creep.pos, minePos)) {
    var sources = creep.room.find(105);
    var source = creep.pos.findClosestByPath(sources);
    return Belt_Option$7.forEach((source == null) ? undefined : Caml_option$7.some(source), (function (s) {
                  if (Caml_obj$7.caml_equal(creep.harvest(s), ERR_NOT_IN_RANGE)) {
                    creep.moveTo(s.pos);
                    return ;
                  }
                  
                }));
  }
  creep.moveTo(minePos.x, minePos.y);
  
}

RoleMiner_bs.minerName = minerName$1;
RoleMiner_bs.roleMiner = roleMiner$1;

var RoleBuilder_bs = {};

var Caml_obj$6 = caml_obj;
var Caml_array$3 = caml_array;
var Belt_Option$6 = belt_Option;
var Caml_option$6 = caml_option;

function roleBuilder(creep) {
  if (creep.memory.building && creep.store.getUsedCapacity(RESOURCE_ENERGY) === 0) {
    creep.memory.building = false;
  }
  if (!creep.memory.building && creep.store.getFreeCapacity(RESOURCE_ENERGY) === 0) {
    creep.memory.building = true;
  }
  if (creep.memory.building) {
    var targets = creep.room.find(111);
    if (targets.length > 0 && Caml_obj$6.caml_equal(creep.build(Caml_array$3.get(targets, 0)), ERR_NOT_IN_RANGE)) {
      creep.moveTo(Caml_array$3.get(targets, 0).pos);
      return ;
    } else {
      return ;
    }
  }
  var resource = creep.pos.findClosestByPath(creep.room.find(106).filter(function (r) {
            return r.amount > 100;
          }));
  return Belt_Option$6.forEach((resource == null) ? undefined : Caml_option$6.some(resource), (function (r) {
                if (Caml_obj$6.caml_equal(creep.pickup(r), ERR_NOT_IN_RANGE)) {
                  creep.moveTo(r.pos);
                  return ;
                }
                
              }));
}

RoleBuilder_bs.roleBuilder = roleBuilder;

var RoleRepairer_bs = {};

var Caml_obj$5 = caml_obj;
var Caml_array$2 = caml_array;
var Belt_Option$5 = belt_Option;
var Caml_option$5 = caml_option;

function findRepairTargets(spawn) {
  return spawn.room.find(107).filter(function (structure) {
              if (structure.hits < (structure.hitsMax - 2000 | 0)) {
                return Caml_obj$5.caml_notequal(structure.structureType, STRUCTURE_WALL);
              } else {
                return false;
              }
            });
}

function roleRepairer(spawn, creep) {
  if (creep.memory.repairing && creep.store.getUsedCapacity(RESOURCE_ENERGY) === 0) {
    creep.memory.repairing = false;
  }
  if (!creep.memory.repairing && creep.store.getFreeCapacity(RESOURCE_ENERGY) === 0) {
    creep.memory.repairing = true;
  }
  if (creep.memory.repairing) {
    var closestDamagedStructure = creep.pos.findClosestByRange(findRepairTargets(spawn));
    var closestDamagedStructure$1 = (closestDamagedStructure == null) ? undefined : Caml_option$5.some(closestDamagedStructure);
    if (Belt_Option$5.isSome(closestDamagedStructure$1) && Caml_obj$5.caml_equal(creep.repair(closestDamagedStructure$1), ERR_NOT_IN_RANGE)) {
      creep.moveTo(closestDamagedStructure$1.pos);
      return ;
    } else {
      return ;
    }
  }
  var resources = creep.room.find(106);
  if (Caml_obj$5.caml_equal(creep.pickup(Caml_array$2.get(resources, 1)), ERR_NOT_IN_RANGE)) {
    creep.moveTo(Caml_array$2.get(resources, 1).pos);
    return ;
  }
  
}

RoleRepairer_bs.findRepairTargets = findRepairTargets;
RoleRepairer_bs.roleRepairer = roleRepairer;

var RoleUpgrader_bs = {};

var Binding_bs = {};

var caml_exceptions = {};

var id = {
  contents: 0
};

function create(str) {
  id.contents = id.contents + 1 | 0;
  return str + ("/" + id.contents);
}

function caml_is_extension(e) {
  if (e == null) {
    return false;
  } else {
    return typeof e.RE_EXN_ID === "string";
  }
}

function caml_exn_slot_name(x) {
  return x.RE_EXN_ID;
}

caml_exceptions.id = id;
caml_exceptions.create = create;
caml_exceptions.caml_is_extension = caml_is_extension;
caml_exceptions.caml_exn_slot_name = caml_exn_slot_name;

var Belt_Option$4 = belt_Option;
var Caml_option$4 = caml_option;
var Caml_exceptions = caml_exceptions;

var Err = /* @__PURE__ */Caml_exceptions.create("Binding.Err");

var StructureOrResource = {};

var getType = (x => {
      if (x instanceof Resource) { return "RESOURCE" }
      if (x instanceof Structure) { return "STRUCTURE" }
    });

function classify(v) {
  var match = getType(v);
  if (match === "RESOURCE") {
    return {
            TAG: /* Resource */0,
            _0: v
          };
  } else {
    return {
            TAG: /* Structure */1,
            _0: v
          };
  }
}

var Private = {
  getType: getType,
  classify: classify
};

function findClosestByPath(pos, array) {
  return Belt_Option$4.map(Caml_option$4.nullable_to_opt(pos.findClosestByPath(array)), classify);
}

Binding_bs.Err = Err;
Binding_bs.StructureOrResource = StructureOrResource;
Binding_bs.Private = Private;
Binding_bs.findClosestByPath = findClosestByPath;

var Binding = Binding_bs;
var Caml_obj$4 = caml_obj;
var Belt_Option$3 = belt_Option;

function roleUpgrader(creep) {
  if (creep.memory.upgrading && creep.store.getUsedCapacity(RESOURCE_ENERGY) === 0) {
    creep.memory.upgrading = false;
  }
  if (!creep.memory.upgrading && creep.store.getFreeCapacity(RESOURCE_ENERGY) === 0) {
    creep.memory.upgrading = true;
  }
  if (creep.memory.upgrading) {
    if (Caml_obj$4.caml_equal(creep.upgradeController(creep.room.controller), ERR_NOT_IN_RANGE)) {
      creep.moveTo(creep.room.controller.pos);
      return ;
    } else {
      return ;
    }
  }
  var containers = creep.room.find(107).filter(function (structure) {
        if (Caml_obj$4.caml_equal(structure.structureType, STRUCTURE_CONTAINER)) {
          return structure.store.getUsedCapacity(RESOURCE_ENERGY) > 500;
        } else {
          return false;
        }
      });
  var resources = creep.room.find(106);
  var candidates = containers.map(function (prim) {
          return prim;
        }).concat(resources.map(function (prim) {
            return prim;
          }));
  var target = Binding.findClosestByPath(creep.pos, candidates);
  return Belt_Option$3.forEach(target, (function (t) {
                if (t.TAG === /* Resource */0) {
                  var r = t._0;
                  if (Caml_obj$4.caml_equal(creep.pickup(r), ERR_NOT_IN_RANGE)) {
                    creep.moveTo(r.pos);
                    return ;
                  } else {
                    return ;
                  }
                }
                var s = t._0;
                if (Caml_obj$4.caml_equal(creep.withdraw(s, RESOURCE_ENERGY), ERR_NOT_IN_RANGE)) {
                  creep.moveTo(s.pos);
                  return ;
                }
                
              }));
}

RoleUpgrader_bs.roleUpgrader = roleUpgrader;

var RoleHarvester_bs = {};

var Caml_obj$3 = caml_obj;
var Caml_array$1 = caml_array;

function roleHarvester(creep) {
  if (creep.store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
    var resources = creep.room.find(106);
    if (Caml_obj$3.caml_equal(creep.pickup(Caml_array$1.get(resources, 0)), ERR_NOT_IN_RANGE)) {
      creep.moveTo(Caml_array$1.get(resources, 0).pos);
      return ;
    } else {
      return ;
    }
  }
  var targets = creep.room.find(107);
  var filteredTargets = targets.filter(function (structure) {
        if (Caml_obj$3.caml_equal(structure.structureType, STRUCTURE_EXTENSION) || Caml_obj$3.caml_equal(structure.structureType, STRUCTURE_TOWER) || Caml_obj$3.caml_equal(structure.structureType, STRUCTURE_SPAWN)) {
          return structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
        } else {
          return false;
        }
      });
  if (filteredTargets.length > 0 && Caml_obj$3.caml_equal(creep.transfer(Caml_array$1.get(filteredTargets, 0), RESOURCE_ENERGY), ERR_NOT_IN_RANGE)) {
    creep.moveTo(Caml_array$1.get(filteredTargets, 0).pos);
    return ;
  }
  
}

RoleHarvester_bs.roleHarvester = roleHarvester;

var RoleTransferer_bs = {};

var belt_Array = {};

var js_math = {};

var js_int = {};

function equal(x, y) {
  return x === y;
}

var max = 2147483647;

var min = -2147483648;

js_int.equal = equal;
js_int.max = max;
js_int.min = min;

var Js_int = js_int;

function unsafe_ceil(prim) {
  return Math.ceil(prim);
}

function ceil_int(f) {
  if (f > Js_int.max) {
    return Js_int.max;
  } else if (f < Js_int.min) {
    return Js_int.min;
  } else {
    return Math.ceil(f);
  }
}

function unsafe_floor(prim) {
  return Math.floor(prim);
}

function floor_int(f) {
  if (f > Js_int.max) {
    return Js_int.max;
  } else if (f < Js_int.min) {
    return Js_int.min;
  } else {
    return Math.floor(f);
  }
}

function random_int(min, max) {
  return floor_int(Math.random() * (max - min | 0)) + min | 0;
}

var ceil = ceil_int;

var floor = floor_int;

js_math.unsafe_ceil = unsafe_ceil;
js_math.ceil_int = ceil_int;
js_math.ceil = ceil;
js_math.unsafe_floor = unsafe_floor;
js_math.floor_int = floor_int;
js_math.floor = floor;
js_math.random_int = random_int;

var Caml = caml;
var Curry = curry;
var Js_math = js_math;
var Caml_option$3 = caml_option;

function get(arr, i) {
  if (i >= 0 && i < arr.length) {
    return Caml_option$3.some(arr[i]);
  }
  
}

function getExn(arr, i) {
  if (!(i >= 0 && i < arr.length)) {
    throw {
          RE_EXN_ID: "Assert_failure",
          _1: [
            "belt_Array.ml",
            27,
            4
          ],
          Error: new Error()
        };
  }
  return arr[i];
}

function set(arr, i, v) {
  if (i >= 0 && i < arr.length) {
    arr[i] = v;
    return true;
  } else {
    return false;
  }
}

function setExn(arr, i, v) {
  if (!(i >= 0 && i < arr.length)) {
    throw {
          RE_EXN_ID: "Assert_failure",
          _1: [
            "belt_Array.ml",
            33,
            2
          ],
          Error: new Error()
        };
  }
  arr[i] = v;
  
}

function swapUnsafe(xs, i, j) {
  var tmp = xs[i];
  xs[i] = xs[j];
  xs[j] = tmp;
  
}

function shuffleInPlace(xs) {
  var len = xs.length;
  for(var i = 0; i < len; ++i){
    swapUnsafe(xs, i, Js_math.random_int(i, len));
  }
  
}

function shuffle(xs) {
  var result = xs.slice(0);
  shuffleInPlace(result);
  return result;
}

function reverseInPlace(xs) {
  var len = xs.length;
  var ofs = 0;
  for(var i = 0 ,i_finish = len / 2 | 0; i < i_finish; ++i){
    swapUnsafe(xs, ofs + i | 0, ((ofs + len | 0) - i | 0) - 1 | 0);
  }
  
}

function reverse(xs) {
  var len = xs.length;
  var result = new Array(len);
  for(var i = 0; i < len; ++i){
    result[i] = xs[(len - 1 | 0) - i | 0];
  }
  return result;
}

function make(l, f) {
  if (l <= 0) {
    return [];
  }
  var res = new Array(l);
  for(var i = 0; i < l; ++i){
    res[i] = f;
  }
  return res;
}

function makeByU(l, f) {
  if (l <= 0) {
    return [];
  }
  var res = new Array(l);
  for(var i = 0; i < l; ++i){
    res[i] = f(i);
  }
  return res;
}

function makeBy(l, f) {
  return makeByU(l, Curry.__1(f));
}

function makeByAndShuffleU(l, f) {
  var u = makeByU(l, f);
  shuffleInPlace(u);
  return u;
}

function makeByAndShuffle(l, f) {
  return makeByAndShuffleU(l, Curry.__1(f));
}

function range(start, finish) {
  var cut = finish - start | 0;
  if (cut < 0) {
    return [];
  }
  var arr = new Array(cut + 1 | 0);
  for(var i = 0; i <= cut; ++i){
    arr[i] = start + i | 0;
  }
  return arr;
}

function rangeBy(start, finish, step) {
  var cut = finish - start | 0;
  if (cut < 0 || step <= 0) {
    return [];
  }
  var nb = (cut / step | 0) + 1 | 0;
  var arr = new Array(nb);
  var cur = start;
  for(var i = 0; i < nb; ++i){
    arr[i] = cur;
    cur = cur + step | 0;
  }
  return arr;
}

function zip(xs, ys) {
  var lenx = xs.length;
  var leny = ys.length;
  var len = lenx < leny ? lenx : leny;
  var s = new Array(len);
  for(var i = 0; i < len; ++i){
    s[i] = [
      xs[i],
      ys[i]
    ];
  }
  return s;
}

function zipByU(xs, ys, f) {
  var lenx = xs.length;
  var leny = ys.length;
  var len = lenx < leny ? lenx : leny;
  var s = new Array(len);
  for(var i = 0; i < len; ++i){
    s[i] = f(xs[i], ys[i]);
  }
  return s;
}

function zipBy(xs, ys, f) {
  return zipByU(xs, ys, Curry.__2(f));
}

function concat(a1, a2) {
  var l1 = a1.length;
  var l2 = a2.length;
  var a1a2 = new Array(l1 + l2 | 0);
  for(var i = 0; i < l1; ++i){
    a1a2[i] = a1[i];
  }
  for(var i$1 = 0; i$1 < l2; ++i$1){
    a1a2[l1 + i$1 | 0] = a2[i$1];
  }
  return a1a2;
}

function concatMany(arrs) {
  var lenArrs = arrs.length;
  var totalLen = 0;
  for(var i = 0; i < lenArrs; ++i){
    totalLen = totalLen + arrs[i].length | 0;
  }
  var result = new Array(totalLen);
  totalLen = 0;
  for(var j = 0; j < lenArrs; ++j){
    var cur = arrs[j];
    for(var k = 0 ,k_finish = cur.length; k < k_finish; ++k){
      result[totalLen] = cur[k];
      totalLen = totalLen + 1 | 0;
    }
  }
  return result;
}

function slice(a, offset, len) {
  if (len <= 0) {
    return [];
  }
  var lena = a.length;
  var ofs = offset < 0 ? Caml.caml_int_max(lena + offset | 0, 0) : offset;
  var hasLen = lena - ofs | 0;
  var copyLength = hasLen < len ? hasLen : len;
  if (copyLength <= 0) {
    return [];
  }
  var result = new Array(copyLength);
  for(var i = 0; i < copyLength; ++i){
    result[i] = a[ofs + i | 0];
  }
  return result;
}

function sliceToEnd(a, offset) {
  var lena = a.length;
  var ofs = offset < 0 ? Caml.caml_int_max(lena + offset | 0, 0) : offset;
  var len = lena - ofs | 0;
  var result = new Array(len);
  for(var i = 0; i < len; ++i){
    result[i] = a[ofs + i | 0];
  }
  return result;
}

function fill(a, offset, len, v) {
  if (len <= 0) {
    return ;
  }
  var lena = a.length;
  var ofs = offset < 0 ? Caml.caml_int_max(lena + offset | 0, 0) : offset;
  var hasLen = lena - ofs | 0;
  var fillLength = hasLen < len ? hasLen : len;
  if (fillLength <= 0) {
    return ;
  }
  for(var i = ofs ,i_finish = ofs + fillLength | 0; i < i_finish; ++i){
    a[i] = v;
  }
  
}

function blitUnsafe(a1, srcofs1, a2, srcofs2, blitLength) {
  if (srcofs2 <= srcofs1) {
    for(var j = 0; j < blitLength; ++j){
      a2[j + srcofs2 | 0] = a1[j + srcofs1 | 0];
    }
    return ;
  }
  for(var j$1 = blitLength - 1 | 0; j$1 >= 0; --j$1){
    a2[j$1 + srcofs2 | 0] = a1[j$1 + srcofs1 | 0];
  }
  
}

function blit(a1, ofs1, a2, ofs2, len) {
  var lena1 = a1.length;
  var lena2 = a2.length;
  var srcofs1 = ofs1 < 0 ? Caml.caml_int_max(lena1 + ofs1 | 0, 0) : ofs1;
  var srcofs2 = ofs2 < 0 ? Caml.caml_int_max(lena2 + ofs2 | 0, 0) : ofs2;
  var blitLength = Caml.caml_int_min(len, Caml.caml_int_min(lena1 - srcofs1 | 0, lena2 - srcofs2 | 0));
  if (srcofs2 <= srcofs1) {
    for(var j = 0; j < blitLength; ++j){
      a2[j + srcofs2 | 0] = a1[j + srcofs1 | 0];
    }
    return ;
  }
  for(var j$1 = blitLength - 1 | 0; j$1 >= 0; --j$1){
    a2[j$1 + srcofs2 | 0] = a1[j$1 + srcofs1 | 0];
  }
  
}

function forEachU(a, f) {
  for(var i = 0 ,i_finish = a.length; i < i_finish; ++i){
    f(a[i]);
  }
  
}

function forEach(a, f) {
  return forEachU(a, Curry.__1(f));
}

function mapU(a, f) {
  var l = a.length;
  var r = new Array(l);
  for(var i = 0; i < l; ++i){
    r[i] = f(a[i]);
  }
  return r;
}

function map(a, f) {
  return mapU(a, Curry.__1(f));
}

function getByU(a, p) {
  var l = a.length;
  var i = 0;
  var r;
  while(r === undefined && i < l) {
    var v = a[i];
    if (p(v)) {
      r = Caml_option$3.some(v);
    }
    i = i + 1 | 0;
  }  return r;
}

function getBy(a, p) {
  return getByU(a, Curry.__1(p));
}

function getIndexByU(a, p) {
  var l = a.length;
  var i = 0;
  var r;
  while(r === undefined && i < l) {
    var v = a[i];
    if (p(v)) {
      r = i;
    }
    i = i + 1 | 0;
  }  return r;
}

function getIndexBy(a, p) {
  return getIndexByU(a, Curry.__1(p));
}

function keepU(a, f) {
  var l = a.length;
  var r = new Array(l);
  var j = 0;
  for(var i = 0; i < l; ++i){
    var v = a[i];
    if (f(v)) {
      r[j] = v;
      j = j + 1 | 0;
    }
    
  }
  r.length = j;
  return r;
}

function keep(a, f) {
  return keepU(a, Curry.__1(f));
}

function keepWithIndexU(a, f) {
  var l = a.length;
  var r = new Array(l);
  var j = 0;
  for(var i = 0; i < l; ++i){
    var v = a[i];
    if (f(v, i)) {
      r[j] = v;
      j = j + 1 | 0;
    }
    
  }
  r.length = j;
  return r;
}

function keepWithIndex(a, f) {
  return keepWithIndexU(a, Curry.__2(f));
}

function keepMapU(a, f) {
  var l = a.length;
  var r = new Array(l);
  var j = 0;
  for(var i = 0; i < l; ++i){
    var v = a[i];
    var v$1 = f(v);
    if (v$1 !== undefined) {
      r[j] = Caml_option$3.valFromOption(v$1);
      j = j + 1 | 0;
    }
    
  }
  r.length = j;
  return r;
}

function keepMap(a, f) {
  return keepMapU(a, Curry.__1(f));
}

function forEachWithIndexU(a, f) {
  for(var i = 0 ,i_finish = a.length; i < i_finish; ++i){
    f(i, a[i]);
  }
  
}

function forEachWithIndex(a, f) {
  return forEachWithIndexU(a, Curry.__2(f));
}

function mapWithIndexU(a, f) {
  var l = a.length;
  var r = new Array(l);
  for(var i = 0; i < l; ++i){
    r[i] = f(i, a[i]);
  }
  return r;
}

function mapWithIndex(a, f) {
  return mapWithIndexU(a, Curry.__2(f));
}

function reduceU(a, x, f) {
  var r = x;
  for(var i = 0 ,i_finish = a.length; i < i_finish; ++i){
    r = f(r, a[i]);
  }
  return r;
}

function reduce(a, x, f) {
  return reduceU(a, x, Curry.__2(f));
}

function reduceReverseU(a, x, f) {
  var r = x;
  for(var i = a.length - 1 | 0; i >= 0; --i){
    r = f(r, a[i]);
  }
  return r;
}

function reduceReverse(a, x, f) {
  return reduceReverseU(a, x, Curry.__2(f));
}

function reduceReverse2U(a, b, x, f) {
  var r = x;
  var len = Caml.caml_int_min(a.length, b.length);
  for(var i = len - 1 | 0; i >= 0; --i){
    r = f(r, a[i], b[i]);
  }
  return r;
}

function reduceReverse2(a, b, x, f) {
  return reduceReverse2U(a, b, x, Curry.__3(f));
}

function reduceWithIndexU(a, x, f) {
  var r = x;
  for(var i = 0 ,i_finish = a.length; i < i_finish; ++i){
    r = f(r, a[i], i);
  }
  return r;
}

function reduceWithIndex(a, x, f) {
  return reduceWithIndexU(a, x, Curry.__3(f));
}

function everyU(arr, b) {
  var len = arr.length;
  var _i = 0;
  while(true) {
    var i = _i;
    if (i === len) {
      return true;
    }
    if (!b(arr[i])) {
      return false;
    }
    _i = i + 1 | 0;
    continue ;
  }}

function every(arr, f) {
  return everyU(arr, Curry.__1(f));
}

function someU(arr, b) {
  var len = arr.length;
  var _i = 0;
  while(true) {
    var i = _i;
    if (i === len) {
      return false;
    }
    if (b(arr[i])) {
      return true;
    }
    _i = i + 1 | 0;
    continue ;
  }}

function some(arr, f) {
  return someU(arr, Curry.__1(f));
}

function everyAux2(arr1, arr2, _i, b, len) {
  while(true) {
    var i = _i;
    if (i === len) {
      return true;
    }
    if (!b(arr1[i], arr2[i])) {
      return false;
    }
    _i = i + 1 | 0;
    continue ;
  }}

function every2U(a, b, p) {
  return everyAux2(a, b, 0, p, Caml.caml_int_min(a.length, b.length));
}

function every2(a, b, p) {
  return every2U(a, b, Curry.__2(p));
}

function some2U(a, b, p) {
  var _i = 0;
  var len = Caml.caml_int_min(a.length, b.length);
  while(true) {
    var i = _i;
    if (i === len) {
      return false;
    }
    if (p(a[i], b[i])) {
      return true;
    }
    _i = i + 1 | 0;
    continue ;
  }}

function some2(a, b, p) {
  return some2U(a, b, Curry.__2(p));
}

function eqU(a, b, p) {
  var lena = a.length;
  var lenb = b.length;
  if (lena === lenb) {
    return everyAux2(a, b, 0, p, lena);
  } else {
    return false;
  }
}

function eq(a, b, p) {
  return eqU(a, b, Curry.__2(p));
}

function cmpU(a, b, p) {
  var lena = a.length;
  var lenb = b.length;
  if (lena > lenb) {
    return 1;
  } else if (lena < lenb) {
    return -1;
  } else {
    var _i = 0;
    while(true) {
      var i = _i;
      if (i === lena) {
        return 0;
      }
      var c = p(a[i], b[i]);
      if (c !== 0) {
        return c;
      }
      _i = i + 1 | 0;
      continue ;
    }  }
}

function cmp(a, b, p) {
  return cmpU(a, b, Curry.__2(p));
}

function partitionU(a, f) {
  var l = a.length;
  var i = 0;
  var j = 0;
  var a1 = new Array(l);
  var a2 = new Array(l);
  for(var ii = 0; ii < l; ++ii){
    var v = a[ii];
    if (f(v)) {
      a1[i] = v;
      i = i + 1 | 0;
    } else {
      a2[j] = v;
      j = j + 1 | 0;
    }
  }
  a1.length = i;
  a2.length = j;
  return [
          a1,
          a2
        ];
}

function partition(a, f) {
  return partitionU(a, Curry.__1(f));
}

function unzip(a) {
  var l = a.length;
  var a1 = new Array(l);
  var a2 = new Array(l);
  for(var i = 0; i < l; ++i){
    var match = a[i];
    a1[i] = match[0];
    a2[i] = match[1];
  }
  return [
          a1,
          a2
        ];
}

function joinWithU(a, sep, toString) {
  var l = a.length;
  if (l === 0) {
    return "";
  }
  var lastIndex = l - 1 | 0;
  var _i = 0;
  var _res = "";
  while(true) {
    var res = _res;
    var i = _i;
    if (i === lastIndex) {
      return res + toString(a[i]);
    }
    _res = res + (toString(a[i]) + sep);
    _i = i + 1 | 0;
    continue ;
  }}

function joinWith(a, sep, toString) {
  return joinWithU(a, sep, Curry.__1(toString));
}

belt_Array.get = get;
belt_Array.getExn = getExn;
belt_Array.set = set;
belt_Array.setExn = setExn;
belt_Array.shuffleInPlace = shuffleInPlace;
belt_Array.shuffle = shuffle;
belt_Array.reverseInPlace = reverseInPlace;
belt_Array.reverse = reverse;
belt_Array.make = make;
belt_Array.range = range;
belt_Array.rangeBy = rangeBy;
belt_Array.makeByU = makeByU;
belt_Array.makeBy = makeBy;
belt_Array.makeByAndShuffleU = makeByAndShuffleU;
belt_Array.makeByAndShuffle = makeByAndShuffle;
belt_Array.zip = zip;
belt_Array.zipByU = zipByU;
belt_Array.zipBy = zipBy;
belt_Array.unzip = unzip;
belt_Array.concat = concat;
belt_Array.concatMany = concatMany;
belt_Array.slice = slice;
belt_Array.sliceToEnd = sliceToEnd;
belt_Array.fill = fill;
belt_Array.blit = blit;
belt_Array.blitUnsafe = blitUnsafe;
belt_Array.forEachU = forEachU;
belt_Array.forEach = forEach;
belt_Array.mapU = mapU;
belt_Array.map = map;
belt_Array.getByU = getByU;
belt_Array.getBy = getBy;
belt_Array.getIndexByU = getIndexByU;
belt_Array.getIndexBy = getIndexBy;
belt_Array.keepU = keepU;
belt_Array.keep = keep;
belt_Array.keepWithIndexU = keepWithIndexU;
belt_Array.keepWithIndex = keepWithIndex;
belt_Array.keepMapU = keepMapU;
belt_Array.keepMap = keepMap;
belt_Array.forEachWithIndexU = forEachWithIndexU;
belt_Array.forEachWithIndex = forEachWithIndex;
belt_Array.mapWithIndexU = mapWithIndexU;
belt_Array.mapWithIndex = mapWithIndex;
belt_Array.partitionU = partitionU;
belt_Array.partition = partition;
belt_Array.reduceU = reduceU;
belt_Array.reduce = reduce;
belt_Array.reduceReverseU = reduceReverseU;
belt_Array.reduceReverse = reduceReverse;
belt_Array.reduceReverse2U = reduceReverse2U;
belt_Array.reduceReverse2 = reduceReverse2;
belt_Array.reduceWithIndexU = reduceWithIndexU;
belt_Array.reduceWithIndex = reduceWithIndex;
belt_Array.joinWithU = joinWithU;
belt_Array.joinWith = joinWith;
belt_Array.someU = someU;
belt_Array.some = some;
belt_Array.everyU = everyU;
belt_Array.every = every;
belt_Array.every2U = every2U;
belt_Array.every2 = every2;
belt_Array.some2U = some2U;
belt_Array.some2 = some2;
belt_Array.cmpU = cmpU;
belt_Array.cmp = cmp;
belt_Array.eqU = eqU;
belt_Array.eq = eq;

var Common$2 = Common_bs;
var Caml_obj$2 = caml_obj;
var Belt_Array$1 = belt_Array;
var Caml_array = caml_array;
var Belt_Option$2 = belt_Option;
var Caml_option$2 = caml_option;

function transfererName$1(minePos) {
  return "Transferer" + String(minePos.x) + "." + String(minePos.y);
}

function findAndTransfer(creep, allStructures, structureTypes) {
  var filteredTargets = allStructures.filter(function (structure) {
        if (Belt_Option$2.isSome(Caml_option$2.undefined_to_opt(structureTypes.find(function (t) {
                        return Caml_obj$2.caml_equal(structure.structureType, t);
                      })))) {
          return structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
        } else {
          return false;
        }
      });
  if (filteredTargets.length > 0) {
    if (Caml_obj$2.caml_equal(creep.transfer(Caml_array.get(filteredTargets, 0), RESOURCE_ENERGY), ERR_NOT_IN_RANGE)) {
      creep.moveTo(Caml_array.get(filteredTargets, 0).pos);
    }
    return true;
  } else {
    return false;
  }
}

function roleTransferer$1(creep, minePos) {
  var freeCapacity = creep.store.getFreeCapacity(RESOURCE_ENERGY);
  if (creep.memory.transfering && creep.store.getUsedCapacity(RESOURCE_ENERGY) === 0) {
    creep.memory.transfering = false;
  }
  if (!creep.memory.transfering && freeCapacity === 0) {
    creep.memory.transfering = true;
  }
  if (creep.memory.transfering) {
    var allStructures = creep.room.find(107);
    var hasTask = findAndTransfer(creep, allStructures, [
          STRUCTURE_EXTENSION,
          STRUCTURE_SPAWN
        ]);
    if (hasTask) {
      return ;
    }
    var hasTask$1 = findAndTransfer(creep, allStructures, [STRUCTURE_TOWER]);
    if (hasTask$1) {
      return ;
    }
    var hasTask$2 = findAndTransfer(creep, allStructures, [STRUCTURE_CONTAINER]);
    if (!hasTask$2) {
      findAndTransfer(creep, allStructures, [STRUCTURE_STORAGE]);
      return ;
    } else {
      return ;
    }
  }
  var targetResource = Belt_Array$1.get(creep.room.find(106, {
            filter: (function (resource) {
                return Common$2.samePosition(resource.pos, minePos);
              })
          }), 0);
  if (targetResource !== undefined) {
    return Common$2.pickResource(creep, targetResource);
  }
  var resources = creep.room.find(106, {
        filter: (function (resource) {
            return resource.amount > freeCapacity;
          })
      });
  var resource = creep.pos.findClosestByPath(resources);
  if (!(resource == null)) {
    return Common$2.pickResource(creep, resource);
  }
  
}

RoleTransferer_bs.transfererName = transfererName$1;
RoleTransferer_bs.findAndTransfer = findAndTransfer;
RoleTransferer_bs.roleTransferer = roleTransferer$1;

var RoleOutpostMiner_bs = {};

var Common$1 = Common_bs;
var Caml_obj$1 = caml_obj;
var Belt_Option$1 = belt_Option;
var Caml_option$1 = caml_option;

function minerName(minePos) {
  return "OutpostMiner" + minePos.roomName + String(minePos.x) + "." + String(minePos.y);
}

function roleMiner(creep, minePos) {
  if (Common$1.samePosition(creep.pos, minePos)) {
    var sources = creep.room.find(105);
    var source = creep.pos.findClosestByPath(sources);
    return Belt_Option$1.forEach((source == null) ? undefined : Caml_option$1.some(source), (function (s) {
                  if (Caml_obj$1.caml_equal(creep.harvest(s), ERR_NOT_IN_RANGE)) {
                    creep.moveTo(s.pos);
                    return ;
                  }
                  
                }));
  }
  var match = creep.room.name;
  switch (match) {
    case "E32N28" :
        creep.moveTo(49, 17);
        break;
    case "E33N28" :
        creep.moveTo(minePos.x, minePos.y);
        break;
    default:
      console.log("外矿工人跑到了其他房间");
  }
  
}

RoleOutpostMiner_bs.minerName = minerName;
RoleOutpostMiner_bs.roleMiner = roleMiner;

var RoleOutpostTransferer_bs = {};

var Common = Common_bs;
var Belt_Array = belt_Array;
var RoleTransferer$1 = RoleTransferer_bs;

function transfererName(minePos) {
  return "Transferer" + minePos.roomName + String(minePos.x) + "." + String(minePos.y);
}

function roleTransferer(creep, minePos) {
  var freeCapacity = creep.store.getFreeCapacity(RESOURCE_ENERGY);
  if (creep.memory.transfering && creep.store.getUsedCapacity(RESOURCE_ENERGY) === 0) {
    creep.memory.transfering = false;
  }
  if (!creep.memory.transfering && freeCapacity === 0) {
    creep.memory.transfering = true;
  }
  if (creep.memory.transfering) {
    var match = creep.room.name;
    switch (match) {
      case "E32N28" :
          var allStructures = creep.room.find(107);
          var hasTask = RoleTransferer$1.findAndTransfer(creep, allStructures, [
                STRUCTURE_EXTENSION,
                STRUCTURE_SPAWN
              ]);
          if (!hasTask) {
            var hasTask$1 = RoleTransferer$1.findAndTransfer(creep, allStructures, [STRUCTURE_TOWER]);
            if (!hasTask$1) {
              var hasTask$2 = RoleTransferer$1.findAndTransfer(creep, allStructures, [STRUCTURE_CONTAINER]);
              if (!hasTask$2) {
                RoleTransferer$1.findAndTransfer(creep, allStructures, [STRUCTURE_STORAGE]);
              }
              
            }
            
          }
          break;
      case "E33N28" :
          creep.moveTo(0, 17);
          break;
      default:
        console.log("外矿搬运工跑到了其他房间");
    }
    return ;
  }
  var match$1 = creep.room.name;
  switch (match$1) {
    case "E32N28" :
        creep.moveTo(49, 17);
        break;
    case "E33N28" :
        var targetResource = Belt_Array.get(creep.room.find(106, {
                  filter: (function (resource) {
                      return Common.samePosition(resource.pos, minePos);
                    })
                }), 0);
        if (targetResource !== undefined) {
          Common.pickResource(creep, targetResource);
        } else {
          var resources = creep.room.find(106, {
                filter: (function (resource) {
                    return resource.amount > freeCapacity;
                  })
              });
          var resource = creep.pos.findClosestByPath(resources);
          if (!(resource == null)) {
            Common.pickResource(creep, resource);
          }
          
        }
        break;
    default:
      console.log("外矿搬运工跑到了其他房间");
  }
  
}

RoleOutpostTransferer_bs.transfererName = transfererName;
RoleOutpostTransferer_bs.roleTransferer = roleTransferer;

var Js_dict = js_dict;
var Caml_obj = caml_obj;
var RoleMiner = RoleMiner_bs;
var Belt_Option = belt_Option;
var Caml_option = caml_option;
var RoleBuilder = RoleBuilder_bs;
var RoleRepairer = RoleRepairer_bs;
var RoleUpgrader = RoleUpgrader_bs;
var RoleHarvester = RoleHarvester_bs;
var RoleTransferer = RoleTransferer_bs;
var RoleOutpostMiner = RoleOutpostMiner_bs;
var RoleOutpostTransferer = RoleOutpostTransferer_bs;

function upgraders(spawn) {
  var upgraders$1 = Js_dict.values(Game.creeps).filter(function (creep) {
        return creep.memory.role === "upgrader";
      });
  if (upgraders$1.length < 1) {
    var newName = "Upgrader" + String(Game.time);
    console.log("Spawning new upgrader: ", newName);
    spawn.spawnCreep([
          WORK,
          CARRY,
          MOVE
        ], newName, {
          memory: {
            role: "upgrader"
          }
        });
  }
  Object.keys(Game.creeps).forEach(function (name) {
        var creep = Game.creeps[name];
        if (creep.memory.role === "upgrader") {
          return RoleUpgrader.roleUpgrader(creep);
        }
        
      });
  
}

function towerDefence(spawn) {
  var towerOpt = Game.getObjectById("630033cd4bcfd152983bccab");
  var towerOpt$1 = (towerOpt == null) ? undefined : Caml_option.some(towerOpt);
  if (!Belt_Option.isSome(towerOpt$1)) {
    return ;
  }
  var closestDamagedStructure = towerOpt$1.pos.findClosestByRange(RoleRepairer.findRepairTargets(spawn));
  var closestDamagedStructure$1 = (closestDamagedStructure == null) ? undefined : Caml_option.some(closestDamagedStructure);
  if (Belt_Option.isSome(closestDamagedStructure$1)) {
    towerOpt$1.repair(closestDamagedStructure$1);
  }
  var closestHostile = towerOpt$1.pos.findClosestByRange(103);
  var closestHostile$1 = (closestHostile == null) ? undefined : Caml_option.some(closestHostile);
  if (Belt_Option.isSome(closestHostile$1)) {
    towerOpt$1.attack(closestHostile$1);
    return ;
  }
  
}

var minePos1 = {
  roomName: "E32N28",
  x: 5,
  y: 16
};

var minePos2 = {
  roomName: "E32N28",
  x: 13,
  y: 22
};

var outpostMinePos1 = {
  roomName: "E33N28",
  x: 10,
  y: 19
};

function mine(room, spawn) {
  var energy = room.energyAvailable;
  var bodies = energy <= 300 ? [
      WORK,
      WORK,
      MOVE
    ] : [
      WORK,
      WORK,
      WORK,
      WORK,
      MOVE
    ];
  var name1 = RoleMiner.minerName(minePos1);
  var err1 = spawn.spawnCreep(bodies, name1, {
        memory: {
          role: "miner1"
        }
      });
  if (Caml_obj.caml_equal(err1, ERR_NOT_ENOUGH_ENERGY)) {
    console.log("miner no energy");
  }
  var name2 = RoleMiner.minerName(minePos2);
  var err2 = spawn.spawnCreep(bodies, name2, {
        memory: {
          role: "miner2"
        }
      });
  if (Caml_obj.caml_equal(err2, ERR_NOT_ENOUGH_ENERGY)) {
    console.log("miner no energy");
  }
  Object.keys(Game.creeps).forEach(function (name) {
        var creep = Game.creeps[name];
        if (creep.memory.role === "miner1") {
          RoleMiner.roleMiner(creep, minePos1);
        }
        if (creep.memory.role === "miner2") {
          return RoleMiner.roleMiner(creep, minePos2);
        }
        
      });
  
}

function outpostMine(_mainRoom, spawn) {
  var bodies = [
    WORK,
    WORK,
    MOVE
  ];
  var name1 = RoleOutpostMiner.minerName(outpostMinePos1);
  spawn.spawnCreep(bodies, name1, {
        memory: {
          role: "outpostMiner1"
        }
      });
  Object.keys(Game.creeps).forEach(function (name) {
        var creep = Game.creeps[name];
        if (creep.memory.role === "outpostMiner1") {
          return RoleOutpostMiner.roleMiner(creep, outpostMinePos1);
        }
        
      });
  
}

function outpostTransfer(_mainRoom, spawn) {
  var bodies = [
    CARRY,
    CARRY,
    CARRY,
    CARRY,
    MOVE,
    MOVE
  ];
  var name1 = RoleOutpostTransferer.transfererName(outpostMinePos1);
  spawn.spawnCreep(bodies, name1, {
        memory: {
          role: "outpostTransferer1"
        }
      });
  Object.keys(Game.creeps).forEach(function (name) {
        var creep = Game.creeps[name];
        if (creep.memory.role === "outpostTransferer1") {
          return RoleOutpostTransferer.roleTransferer(creep, outpostMinePos1);
        }
        
      });
  
}

function build(spawn, n) {
  var builders = Js_dict.values(Game.creeps).filter(function (creep) {
        return creep.memory.role === "builder";
      });
  if (builders.length < n) {
    var newName = "Builder" + String(Game.time);
    console.log("Spawning new Builder: ", newName);
    spawn.spawnCreep([
          WORK,
          WORK,
          WORK,
          CARRY,
          MOVE,
          MOVE
        ], newName, {
          memory: {
            role: "builder"
          }
        });
  }
  var hasConstructionSite = spawn.room.find(111).length > 0;
  var hasDamagedStructure = RoleRepairer.findRepairTargets(spawn).length > 0;
  Object.keys(Game.creeps).forEach(function (name) {
        var creep = Game.creeps[name];
        if (creep.memory.role === "builder") {
          if (hasDamagedStructure) {
            console.log("builder repair");
            return RoleRepairer.roleRepairer(spawn, creep);
          } else if (hasConstructionSite) {
            console.log("builder build");
            return RoleBuilder.roleBuilder(creep);
          } else {
            console.log("builder upgrade");
            return RoleUpgrader.roleUpgrader(creep);
          }
        }
        
      });
  
}

function transfer(spawn) {
  var bodies = [
    CARRY,
    CARRY,
    CARRY,
    CARRY,
    MOVE,
    MOVE
  ];
  var name1 = RoleTransferer.transfererName(minePos1);
  var err1 = spawn.spawnCreep(bodies, name1, {
        memory: {
          role: "transferer1"
        }
      });
  if (Caml_obj.caml_equal(err1, ERR_NOT_ENOUGH_ENERGY)) {
    console.log("transferer no energy");
  }
  var name2 = RoleTransferer.transfererName(minePos2);
  var err2 = spawn.spawnCreep(bodies, name2, {
        memory: {
          role: "transferer2"
        }
      });
  if (Caml_obj.caml_equal(err2, ERR_NOT_ENOUGH_ENERGY)) {
    console.log("transferer no energy");
  }
  Object.keys(Game.creeps).forEach(function (name) {
        var creep = Game.creeps[name];
        if (creep.memory.role === "transferer1") {
          RoleTransferer.roleTransferer(creep, minePos1);
        }
        if (creep.memory.role === "transferer2") {
          return RoleTransferer.roleTransferer(creep, minePos2);
        }
        
      });
  
}

function harvest(spawn) {
  var harvesters = Js_dict.values(Game.creeps).filter(function (creep) {
        return creep.memory.role === "harvester";
      });
  if (harvesters.length < 2) {
    var newName = "Harvester" + String(Game.time);
    console.log("Spawning new harvester: ", newName);
    spawn.spawnCreep([
          WORK,
          CARRY,
          MOVE
        ], newName, {
          memory: {
            role: "harvester"
          }
        });
  }
  Object.keys(Game.creeps).forEach(function (name) {
        var creep = Game.creeps[name];
        if (creep.memory.role === "harvester") {
          return RoleHarvester.roleHarvester(creep);
        }
        
      });
  
}

function loop(param) {
  var spawn = Game.spawns["Spawn1"];
  var room = spawn.room;
  transfer(spawn);
  mine(room, spawn);
  outpostMine(room, spawn);
  outpostTransfer(room, spawn);
  build(spawn, 3);
  upgraders(spawn);
  return towerDefence(spawn);
}

var upgraders_1 = Main_bs.upgraders = upgraders;
var towerDefence_1 = Main_bs.towerDefence = towerDefence;
var minePos1_1 = Main_bs.minePos1 = minePos1;
var minePos2_1 = Main_bs.minePos2 = minePos2;
var outpostMinePos1_1 = Main_bs.outpostMinePos1 = outpostMinePos1;
var mine_1 = Main_bs.mine = mine;
var outpostMine_1 = Main_bs.outpostMine = outpostMine;
var outpostTransfer_1 = Main_bs.outpostTransfer = outpostTransfer;
var build_1 = Main_bs.build = build;
var transfer_1 = Main_bs.transfer = transfer;
var harvest_1 = Main_bs.harvest = harvest;
var loop_1 = Main_bs.loop = loop;

exports.build = build_1;
exports["default"] = Main_bs;
exports.harvest = harvest_1;
exports.loop = loop_1;
exports.mine = mine_1;
exports.minePos1 = minePos1_1;
exports.minePos2 = minePos2_1;
exports.outpostMine = outpostMine_1;
exports.outpostMinePos1 = outpostMinePos1_1;
exports.outpostTransfer = outpostTransfer_1;
exports.towerDefence = towerDefence_1;
exports.transfer = transfer_1;
exports.upgraders = upgraders_1;
//# sourceMappingURL=main.js.map
