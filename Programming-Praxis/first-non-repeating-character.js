// Link: http://programmingpraxis.com/2011/08/19/first-non-repeating-character/
// 返回第一个没有重复让字符

function getFirstUniqueChar(s) {
  var map = (function(map, len, i, c) {
    while (i < len) map[c = s.charAt(i++)] = map[c] ? (map[c] + 1) : 1;
    return map;
  }({}, s.length, 0));
   
  for (key in map) {
    if (map[key] == 1) return key;
  }
   
  return -1;
}

