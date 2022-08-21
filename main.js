'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Main_bs = {};

var js_dict = {};

var caml_option = {};

function isNested(x) {
  return x.BS_PRIVATE_NESTED_SOME_NONE !== undefined;
}

function some(x) {
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
    return some(x);
  }
}

function undefined_to_opt(x) {
  if (x === undefined) {
    return ;
  } else {
    return some(x);
  }
}

function null_to_opt(x) {
  if (x === null) {
    return ;
  } else {
    return some(x);
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
caml_option.some = some;
caml_option.isNested = isNested;
caml_option.option_get = option_get;
caml_option.option_unwrap = option_unwrap;

var Caml_option$6 = caml_option;

function get$1(dict, k) {
  if ((k in dict)) {
    return Caml_option$6.some(dict[k]);
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

function map$1(f, source) {
  var target = {};
  var keys = Object.keys(source);
  var l = keys.length;
  for(var i = 0; i < l; ++i){
    var key = keys[i];
    target[key] = f(source[key]);
  }
  return target;
}

js_dict.get = get$1;
js_dict.unsafeDeleteKey = unsafeDeleteKey;
js_dict.entries = entries;
js_dict.values = values;
js_dict.fromList = fromList;
js_dict.fromArray = fromArray;
js_dict.map = map$1;

var RoleMiner_bs = {};

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

var Caml = caml;

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
          return Caml.caml_bool_compare(a, b);
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
          return Caml.caml_int_compare(a, b);
        }
        break;
    case "string" :
        if (b_type === "string") {
          return Caml.caml_string_compare(a, b);
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
        return Caml.caml_int_compare(a[1], b[1]);
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
      return Caml.caml_string_compare(match, match$1);
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

function fill(arr, _i, _l) {
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

function concat(l) {
  var v = len(0, l);
  var result = new Array(v);
  fill(result, 0, l);
  return result;
}

function set(xs, index, newval) {
  if (index < 0 || index >= xs.length) {
    throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "index out of bounds",
          Error: new Error()
        };
  }
  xs[index] = newval;
  
}

function get(xs, index) {
  if (index < 0 || index >= xs.length) {
    throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "index out of bounds",
          Error: new Error()
        };
  }
  return xs[index];
}

function make(len, init) {
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

function blit(a1, i1, a2, i2, len) {
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
caml_array.concat = concat;
caml_array.make = make;
caml_array.make_float = make_float;
caml_array.blit = blit;
caml_array.get = get;
caml_array.set = set;

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

var Curry = curry;
var Caml_option$5 = caml_option;

function keepU(opt, p) {
  if (opt !== undefined && p(Caml_option$5.valFromOption(opt))) {
    return opt;
  }
  
}

function keep(opt, p) {
  return keepU(opt, Curry.__1(p));
}

function forEachU(opt, f) {
  if (opt !== undefined) {
    return f(Caml_option$5.valFromOption(opt));
  }
  
}

function forEach(opt, f) {
  return forEachU(opt, Curry.__1(f));
}

function getExn(x) {
  if (x !== undefined) {
    return Caml_option$5.valFromOption(x);
  }
  throw {
        RE_EXN_ID: "Not_found",
        Error: new Error()
      };
}

function mapWithDefaultU(opt, $$default, f) {
  if (opt !== undefined) {
    return f(Caml_option$5.valFromOption(opt));
  } else {
    return $$default;
  }
}

function mapWithDefault(opt, $$default, f) {
  return mapWithDefaultU(opt, $$default, Curry.__1(f));
}

function mapU(opt, f) {
  if (opt !== undefined) {
    return Caml_option$5.some(f(Caml_option$5.valFromOption(opt)));
  }
  
}

function map(opt, f) {
  return mapU(opt, Curry.__1(f));
}

function flatMapU(opt, f) {
  if (opt !== undefined) {
    return f(Caml_option$5.valFromOption(opt));
  }
  
}

function flatMap(opt, f) {
  return flatMapU(opt, Curry.__1(f));
}

function getWithDefault(opt, $$default) {
  if (opt !== undefined) {
    return Caml_option$5.valFromOption(opt);
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

function eqU(a, b, f) {
  if (a !== undefined) {
    if (b !== undefined) {
      return f(Caml_option$5.valFromOption(a), Caml_option$5.valFromOption(b));
    } else {
      return false;
    }
  } else {
    return b === undefined;
  }
}

function eq(a, b, f) {
  return eqU(a, b, Curry.__2(f));
}

function cmpU(a, b, f) {
  if (a !== undefined) {
    if (b !== undefined) {
      return f(Caml_option$5.valFromOption(a), Caml_option$5.valFromOption(b));
    } else {
      return 1;
    }
  } else if (b !== undefined) {
    return -1;
  } else {
    return 0;
  }
}

function cmp(a, b, f) {
  return cmpU(a, b, Curry.__2(f));
}

belt_Option.keepU = keepU;
belt_Option.keep = keep;
belt_Option.forEachU = forEachU;
belt_Option.forEach = forEach;
belt_Option.getExn = getExn;
belt_Option.mapWithDefaultU = mapWithDefaultU;
belt_Option.mapWithDefault = mapWithDefault;
belt_Option.mapU = mapU;
belt_Option.map = map;
belt_Option.flatMapU = flatMapU;
belt_Option.flatMap = flatMap;
belt_Option.getWithDefault = getWithDefault;
belt_Option.isSome = isSome;
belt_Option.isNone = isNone;
belt_Option.eqU = eqU;
belt_Option.eq = eq;
belt_Option.cmpU = cmpU;
belt_Option.cmp = cmp;

var Caml_obj$5 = caml_obj;
var Belt_Option$5 = belt_Option;
var Caml_option$4 = caml_option;

function samePosition(p1, p2) {
  if (Caml_obj$5.caml_equal(p1.x, p2.x)) {
    return Caml_obj$5.caml_equal(p2.y, p2.y);
  } else {
    return false;
  }
}

function minerName(minePos) {
  return "Miner" + String(minePos.x) + "." + String(minePos.y);
}

function roleMiner(creep, minePos) {
  if (samePosition(creep.pos, minePos)) {
    console.log("miner working", creep.name);
    var sources = creep.room.find(105);
    var source = creep.pos.findClosestByPath(sources);
    var source$1 = (source == null) ? undefined : Caml_option$4.some(source);
    console.log(sources, source$1);
    return Belt_Option$5.forEach(source$1, (function (s) {
                  if (Caml_obj$5.caml_equal(creep.harvest(s), ERR_NOT_IN_RANGE)) {
                    creep.moveTo(s.pos);
                    return ;
                  }
                  
                }));
  }
  var moveErr = creep.moveTo(minePos.x, minePos.y);
  console.log("miner moving", creep.name, moveErr);
  
}

RoleMiner_bs.samePosition = samePosition;
RoleMiner_bs.minerName = minerName;
RoleMiner_bs.roleMiner = roleMiner;

var RoleBuilder_bs = {};

var Caml_obj$4 = caml_obj;
var Caml_array$3 = caml_array;

function roleBuilder(creep) {
  if (creep.memory.building && creep.store.getUsedCapacity(RESOURCE_ENERGY) === 0) {
    creep.memory.building = false;
    creep.say("\xf0\x9f\x94\x84 harvest");
  }
  if (!creep.memory.building && creep.store.getFreeCapacity(RESOURCE_ENERGY) === 0) {
    creep.memory.building = true;
    creep.say("\xf0\x9f\x9a\xa7 build");
  }
  if (creep.memory.building) {
    var targets = creep.room.find(111);
    if (targets.length > 0 && Caml_obj$4.caml_equal(creep.build(Caml_array$3.get(targets, 0)), ERR_NOT_IN_RANGE)) {
      creep.moveTo(Caml_array$3.get(targets, 0).pos);
      return ;
    } else {
      return ;
    }
  }
  var resources = creep.room.find(106);
  if (Caml_obj$4.caml_equal(creep.pickup(Caml_array$3.get(resources, 1)), ERR_NOT_IN_RANGE)) {
    creep.moveTo(Caml_array$3.get(resources, 1).pos);
    return ;
  }
  
}

RoleBuilder_bs.roleBuilder = roleBuilder;

var RoleRepairer_bs = {};

var Caml_obj$3 = caml_obj;
var Caml_array$2 = caml_array;
var Belt_Option$4 = belt_Option;
var Caml_option$3 = caml_option;

function findRepairTargets(spawn) {
  return spawn.room.find(107).filter(function (structure) {
              if (structure.hits < (structure.hitsMax - 2000 | 0)) {
                return Caml_obj$3.caml_notequal(structure.structureType, STRUCTURE_WALL);
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
    var closestDamagedStructure$1 = (closestDamagedStructure == null) ? undefined : Caml_option$3.some(closestDamagedStructure);
    if (Belt_Option$4.isSome(closestDamagedStructure$1) && Caml_obj$3.caml_equal(creep.repair(closestDamagedStructure$1), ERR_NOT_IN_RANGE)) {
      creep.moveTo(closestDamagedStructure$1.pos);
      return ;
    } else {
      return ;
    }
  }
  var resources = creep.room.find(106);
  if (Caml_obj$3.caml_equal(creep.pickup(Caml_array$2.get(resources, 1)), ERR_NOT_IN_RANGE)) {
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

var Belt_Option$3 = belt_Option;
var Caml_option$2 = caml_option;
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
  return Belt_Option$3.map(Caml_option$2.nullable_to_opt(pos.findClosestByPath(array)), classify);
}

Binding_bs.Err = Err;
Binding_bs.StructureOrResource = StructureOrResource;
Binding_bs.Private = Private;
Binding_bs.findClosestByPath = findClosestByPath;

var Binding = Binding_bs;
var Caml_obj$2 = caml_obj;
var Belt_Option$2 = belt_Option;

function roleUpgrader(creep) {
  if (creep.memory.upgrading && creep.store.getUsedCapacity(RESOURCE_ENERGY) === 0) {
    creep.memory.upgrading = false;
  }
  if (!creep.memory.upgrading && creep.store.getFreeCapacity(RESOURCE_ENERGY) === 0) {
    creep.memory.upgrading = true;
  }
  if (creep.memory.upgrading) {
    if (Caml_obj$2.caml_equal(creep.upgradeController(creep.room.controller), ERR_NOT_IN_RANGE)) {
      creep.moveTo(creep.room.controller.pos);
      return ;
    } else {
      return ;
    }
  }
  var containers = creep.room.find(107).filter(function (structure) {
        if (Caml_obj$2.caml_equal(structure.structureType, STRUCTURE_CONTAINER)) {
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
  return Belt_Option$2.forEach(target, (function (t) {
                if (t.TAG === /* Resource */0) {
                  var r = t._0;
                  if (Caml_obj$2.caml_equal(creep.pickup(r), ERR_NOT_IN_RANGE)) {
                    creep.moveTo(r.pos);
                    return ;
                  } else {
                    return ;
                  }
                }
                var s = t._0;
                if (Caml_obj$2.caml_equal(creep.withdraw(s, RESOURCE_ENERGY), ERR_NOT_IN_RANGE)) {
                  creep.moveTo(s.pos);
                  return ;
                }
                
              }));
}

RoleUpgrader_bs.roleUpgrader = roleUpgrader;

var RoleHarvester_bs = {};

var Caml_obj$1 = caml_obj;
var Caml_array$1 = caml_array;

function roleHarvester(creep) {
  if (creep.store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
    var resources = creep.room.find(106);
    if (Caml_obj$1.caml_equal(creep.pickup(Caml_array$1.get(resources, 0)), ERR_NOT_IN_RANGE)) {
      creep.moveTo(Caml_array$1.get(resources, 0).pos);
      return ;
    } else {
      return ;
    }
  }
  var targets = creep.room.find(107);
  var filteredTargets = targets.filter(function (structure) {
        if (Caml_obj$1.caml_equal(structure.structureType, STRUCTURE_EXTENSION) || Caml_obj$1.caml_equal(structure.structureType, STRUCTURE_TOWER) || Caml_obj$1.caml_equal(structure.structureType, STRUCTURE_SPAWN)) {
          return structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
        } else {
          return false;
        }
      });
  if (filteredTargets.length > 0 && Caml_obj$1.caml_equal(creep.transfer(Caml_array$1.get(filteredTargets, 0), RESOURCE_ENERGY), ERR_NOT_IN_RANGE)) {
    creep.moveTo(Caml_array$1.get(filteredTargets, 0).pos);
    return ;
  }
  
}

RoleHarvester_bs.roleHarvester = roleHarvester;

var RoleTransferer_bs = {};

var Caml_obj = caml_obj;
var Caml_array = caml_array;
var Belt_Option$1 = belt_Option;
var Caml_option$1 = caml_option;

function findAndTransfer(creep, allStructures, structureTypes) {
  var filteredTargets = allStructures.filter(function (structure) {
        if (Belt_Option$1.isSome(Caml_option$1.undefined_to_opt(structureTypes.find(function (t) {
                        return Caml_obj.caml_equal(structure.structureType, t);
                      })))) {
          return structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
        } else {
          return false;
        }
      });
  if (filteredTargets.length > 0) {
    if (Caml_obj.caml_equal(creep.transfer(Caml_array.get(filteredTargets, 0), RESOURCE_ENERGY), ERR_NOT_IN_RANGE)) {
      creep.moveTo(Caml_array.get(filteredTargets, 0).pos);
    }
    return true;
  } else {
    return false;
  }
}

function roleTransferer(creep) {
  if (creep.store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
    var resources = creep.room.find(106);
    if (Caml_obj.caml_equal(creep.pickup(Caml_array.get(resources, 0)), ERR_NOT_IN_RANGE)) {
      creep.moveTo(Caml_array.get(resources, 0).pos);
      return ;
    } else {
      return ;
    }
  }
  var allStructures = creep.room.find(107);
  var hasTask = findAndTransfer(creep, allStructures, [
        STRUCTURE_EXTENSION,
        STRUCTURE_SPAWN
      ]);
  if (hasTask) {
    return ;
  }
  var hasTask$1 = findAndTransfer(creep, allStructures, [STRUCTURE_TOWER]);
  if (!hasTask$1) {
    findAndTransfer(creep, allStructures, [STRUCTURE_CONTAINER]);
    return ;
  }
  
}

RoleTransferer_bs.findAndTransfer = findAndTransfer;
RoleTransferer_bs.roleTransferer = roleTransferer;

var Js_dict = js_dict;
var RoleMiner = RoleMiner_bs;
var Belt_Option = belt_Option;
var Caml_option = caml_option;
var RoleBuilder = RoleBuilder_bs;
var RoleRepairer = RoleRepairer_bs;
var RoleUpgrader = RoleUpgrader_bs;
var RoleHarvester = RoleHarvester_bs;
var RoleTransferer = RoleTransferer_bs;

function spawnCreeps(spawn) {
  var upgraders = Js_dict.values(Game.creeps).filter(function (creep) {
        return creep.memory.role === "upgrader";
      });
  if (upgraders.length >= 1) {
    return ;
  }
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

function towerDefence(param) {
  var towerOpt = Game.getObjectById("ad88e3fc2859f93aa703b852");
  var towerOpt$1 = (towerOpt == null) ? undefined : Caml_option.some(towerOpt);
  if (!Belt_Option.isSome(towerOpt$1)) {
    return ;
  }
  var closestDamagedStructure = towerOpt$1.pos.findClosestByRange(107, {
        filter: (function (structure) {
            return structure.hits < structure.hitsMax;
          })
      });
  var closestDamagedStructure$1 = (closestDamagedStructure == null) ? undefined : Caml_option.some(closestDamagedStructure);
  console.log(closestDamagedStructure$1);
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

function dispatchTask(param) {
  Object.keys(Game.creeps).forEach(function (name) {
        var creep = Game.creeps[name];
        if (creep.memory.role === "upgrader") {
          return RoleUpgrader.roleUpgrader(creep);
        }
        
      });
  
}

var minePos1 = {
  x: 5,
  y: 16
};

var minePos2 = {
  x: 13,
  y: 22
};

function mine(spawn) {
  var name1 = RoleMiner.minerName(minePos1);
  spawn.spawnCreep([
        WORK,
        WORK,
        WORK,
        MOVE
      ], name1, {
        memory: {
          role: "miner1"
        }
      });
  var name2 = RoleMiner.minerName(minePos2);
  spawn.spawnCreep([
        WORK,
        WORK,
        WORK,
        MOVE
      ], name2, {
        memory: {
          role: "miner2"
        }
      });
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
          CARRY,
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
          if (hasConstructionSite) {
            console.log("builder build");
            return RoleBuilder.roleBuilder(creep);
          } else if (hasDamagedStructure) {
            console.log("builder repair");
            return RoleRepairer.roleRepairer(spawn, creep);
          } else {
            console.log("builder upgrade");
            return RoleUpgrader.roleUpgrader(creep);
          }
        }
        
      });
  
}

function transfer(spawn) {
  var transferers = Js_dict.values(Game.creeps).filter(function (creep) {
        return creep.memory.role === "transferer";
      });
  if (transferers.length < 2) {
    var newName = "Transferer" + String(Game.time);
    spawn.spawnCreep([
          CARRY,
          CARRY,
          CARRY,
          MOVE
        ], newName, {
          memory: {
            role: "transferer"
          }
        });
  }
  Object.keys(Game.creeps).forEach(function (name) {
        var creep = Game.creeps[name];
        if (creep.memory.role === "transferer") {
          return RoleTransferer.roleTransferer(creep);
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
  transfer(spawn);
  mine(spawn);
  build(spawn, 3);
  spawnCreeps(spawn);
  towerDefence();
  return dispatchTask();
}

var spawnCreeps_1 = Main_bs.spawnCreeps = spawnCreeps;
var towerDefence_1 = Main_bs.towerDefence = towerDefence;
var dispatchTask_1 = Main_bs.dispatchTask = dispatchTask;
var minePos1_1 = Main_bs.minePos1 = minePos1;
var minePos2_1 = Main_bs.minePos2 = minePos2;
var mine_1 = Main_bs.mine = mine;
var build_1 = Main_bs.build = build;
var transfer_1 = Main_bs.transfer = transfer;
var harvest_1 = Main_bs.harvest = harvest;
var loop_1 = Main_bs.loop = loop;

exports.build = build_1;
exports["default"] = Main_bs;
exports.dispatchTask = dispatchTask_1;
exports.harvest = harvest_1;
exports.loop = loop_1;
exports.mine = mine_1;
exports.minePos1 = minePos1_1;
exports.minePos2 = minePos2_1;
exports.spawnCreeps = spawnCreeps_1;
exports.towerDefence = towerDefence_1;
exports.transfer = transfer_1;
//# sourceMappingURL=main.js.map
