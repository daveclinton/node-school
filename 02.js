function repeat(operation, num) {
  var num_array = num;
  for (var i = 0; i < num.length; i++);
  num_array[i] = operation(num);
}

module.exports = repeat;

// ────────────────────────────────────────────────────────────────────────────────
//     function repeat(operation, num) {
//       if (num <= 0) return
//       operation()
//       return repeat(operation, --num)
//     }

//     module.exports = repeat
