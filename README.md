# answer

# Dictionary Transformation

This JavaScript function transforms a dictionary according to the given requirements.

## Requirements

The function takes a dictionary `D` where the key is in the format `YYYY-MM-DD` and the corresponding value is an integer. It returns a new dictionary `D` with the following modifications:

1. The keys in the new dictionary are the days of the week: `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`, `Sun`.
2. The corresponding values are the sums of the values for each day in the original dictionary.
3. If a day is missing in the input dictionary, the output dictionary assigns the value as the mean of the previous and next day's value.

## Usage

The function `solution(D)` accepts a dictionary `D` as its parameter and returns the transformed dictionary `D`.

```javascript
const D = {
  '2020-01-01': 4,
  '2020-01-02': 4,
  '2020-01-03': 6,
  '2020-01-04': 8,
  '2020-01-05': 2,
  '2020-01-06': -6,
  '2020-01-07': 2,
  '2020-01-08': -2,
};

const transformedDictionary = solution(D);
console.log(transformedDictionary);
