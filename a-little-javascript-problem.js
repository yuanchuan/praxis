// http://lisperator.net/blog/a-little-javascript-problem/
// Date: 2017.2.18

/**
 * foreach('<List> 1 2 3 4', function(n) {
 *
 * })
 */
function foreach(list, fn) {
  let mark = '<List>';
  let start = list.indexOf(mark) + mark.length;
  if (start < mark.length) throw new Error('Not a list.');
  let item = '';
  while (start++ < list.length) {
    let c = list.charAt(start);
    if (!/\s/.test(c)) item += c;
    if (start == list.length - 1 || /\s/.test(c) && item.length) {
      fn(item);
      item = '';
    }
  }
}

/**
 *  range(1, 5)
 *    == '<List> 1 2 3 4 5'
 */
function range(start, end) {
  if (arguments.length == 1) [end, start] = [start, 0];
  let list = '<List>';
  while (start <= end) list += (' ' + start++);
  return list;
}

/**
 *  reverse('<List> 1 2 3 4 5')
 *       == '<List> 5 4 3 2 1'
 */
function reverse(list) {
  let newList = '';
  foreach(list, n => (newList = n + ' ' + newList));
  return '<List> ' + newList;
}

/**
 *  map('<List> 1 2 3 4 5', n => n * n)
 *   == '<List> 1 4 9 16 25'
 */
function map(list, fn) {
  let newList = '<List>';
  foreach(list, n => (newList += (' ' + fn(n))));
  return newList;
}


/**
 * Sample code
 */
var numbers = range(1, 10)
numbers = map(numbers, function (n) { return n * n });
numbers = reverse(numbers);
foreach(numbers, console.log);
