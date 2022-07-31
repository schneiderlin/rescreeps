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

var Caml_option = caml_option;

function get$1(dict, k) {
  if ((k in dict)) {
    return Caml_option.some(dict[k]);
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

function map(f, source) {
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
js_dict.map = map;

var RoleUpgrader_bs = {};

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

var Caml_obj$1 = caml_obj;
var Caml_array$1 = caml_array;

function roleUpgrader(creep) {
  if (creep.store.getUsedCapacity(RESOURCE_ENERGY) !== 0) {
    if (Caml_obj$1.caml_equal(creep.upgradeController(creep.room.controller), ERR_NOT_IN_RANGE)) {
      creep.moveTo(creep.room.controller.pos);
      return ;
    } else {
      return ;
    }
  }
  var sources = creep.room.find(105);
  if (Caml_obj$1.caml_equal(creep.harvest(Caml_array$1.get(sources, 0)), ERR_NOT_IN_RANGE)) {
    creep.moveTo(Caml_array$1.get(sources, 0).pos);
    return ;
  }
  
}

RoleUpgrader_bs.roleUpgrader = roleUpgrader;

var RoleHarvester_bs = {};

var Js_dict$1 = js_dict;
var Caml_obj = caml_obj;
var Caml_array = caml_array;

function roleHarvester(creep) {
  if (creep.store.getFreeCapacity() > 0) {
    var sources = creep.room.find(105);
    if (Caml_obj.caml_equal(creep.harvest(Caml_array.get(sources, 0)), ERR_NOT_IN_RANGE)) {
      creep.moveTo(Caml_array.get(sources, 0).pos);
      return ;
    } else {
      return ;
    }
  }
  var spawn1 = Js_dict$1.get(Game.spawns, "Spawn1");
  if (Caml_obj.caml_equal(creep.transfer(spawn1, RESOURCE_ENERGY), ERR_NOT_IN_RANGE)) {
    creep.moveTo(spawn1.pos);
    return ;
  }
  
}

RoleHarvester_bs.roleHarvester = roleHarvester;

var Js_dict = js_dict;
var RoleUpgrader = RoleUpgrader_bs;
var RoleHarvester = RoleHarvester_bs;

function loop(param) {
  Object.keys(Game.creeps).forEach(function (name) {
        var creep = Js_dict.get(Game.creeps, name);
        if (creep.memory.role === "harvester") {
          return RoleHarvester.roleHarvester(creep);
        } else {
          return RoleUpgrader.roleUpgrader(creep);
        }
      });
  
}

var loop_1 = Main_bs.loop = loop;

exports["default"] = Main_bs;
exports.loop = loop_1;
//# sourceMappingURL=main.js.map
