// http://programmingpraxis.com/2011/08/19/first-non-repeating-character/
// 返回第一个没有重复的字符

function getFirstUniqueChar(s) {
  var map = (function(map, len, i, c) {
    while (i < len) map[c = s.charAt(i++)] = map[c] ? (map[c] + 1) : 1;
    return map;
  }({}, s.length, 0));

  for (var key in map) {
    if (map[key] == 1) return key;
  }

  return -1;
}


// 使用 mongodb
function getFirstUniqueChar(s) {
  var clt = db.test.remove() || db.test,
    doc = (function(map, len, i) {
      while (i < len) clt.update({name:s.charAt(i++)},{$inc:{value:1}},true);
      return clt.findOne({value:1});
    }({}, s.length, 0));
  return doc && doc.name || -1;
}


/* Date: 2017.2.19 */
function getFirstUniqueChar(s) {
  return s[s.split('').map(c => s.split(c).length).indexOf(2)];
}
