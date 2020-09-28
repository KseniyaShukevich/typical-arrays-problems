
exports.min = function min (array) {
    if (array && array.length !== 0) {
        let min = array[0];

        for (let value of array) {
            if (value < min) {
                min = value;
            }
        }

        return min;
    }

  return 0;
}

exports.max = function max (array) {
    if (array && array.length !== 0) {
        let max = array[0];

        for (let value of array) {
            if (value > max) {
                max = value;
            }
        }

        return max;
    }

  return 0;
}

exports.avg = function avg (array) {
    if (array && array.length !== 0) {
        let sum = 0;

        for (let value of array) {
            sum += value;
        }

        return sum / array.length;
    }

  return 0;
}
