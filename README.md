# NativeArrKit: A Kotlin/Swift array utility kit that was missing in TypeScript.

A cross-platform array utility module for React Native and Expo, leveraging Kotlin and Swift methods such as zipping, partitioning, taking, and dropping elements.

## Features
- **Zip**: Combine two arrays element-wise.
- **Partition**: Split an array into two based on a predicate.
- **DropFirst**: Remove the first N elements from an array.
- **DropLast**: Remove the last N elements from an array.
- **DropWhile**: Remove elements while a predicate is true.
- **TakeFirst**: Retrieve the first N elements from an array.
- **TakeLast**: Retrieve the last N elements from an array.
- **TakeWhile**: Retrieve elements while a predicate is true.
- **RemoveAt**: Remove an element at a specified index.
- **Shuffle**: Randomize the order of elements in an array.

## Usage

### Importing the module

```javascript
import { zip, partition, dropFirst, dropLast, dropWhile, takeFirst, takeLast, takeWhile, removeAt, shuffle } from 'native-arr-kit';
```

### Examples

#### Zip
```javascript
const array1 = [1, 2, 3];
const array2 = ['a', 'b', 'c'];
console.log(zip(array1, array2));
// Output: [[1, 'a'], [2, 'b'], [3, 'c']]
```

#### Partition
```javascript
const numbers = [1, 2, 3, 4, 5];
const [evens, odds] = partition(numbers, n => n % 2 === 0);
console.log(evens); // [2, 4]
console.log(odds); // [1, 3, 5]
// order may vary on IOS
```

#### DropFirst
```javascript
console.log(dropFirst([1, 2, 3, 4, 5], 2));
// Output: [3, 4, 5]
```

#### DropLast
```javascript
console.log(dropLast([1, 2, 3, 4, 5], 2));
// Output: [1, 2, 3]
```

#### DropWhile
```javascript
console.log(dropWhile([1, 2, 3, 4, 5], n => n < 3));
// Output: [3, 4, 5]
```

#### TakeFirst
```javascript
console.log(takeFirst([1, 2, 3, 4, 5], 3));
// Output: [1, 2, 3]
```

#### TakeLast
```javascript
console.log(takeLast([1, 2, 3, 4, 5], 3));
// Output: [3, 4, 5]
```

#### TakeWhile
```javascript
console.log(takeWhile([1, 2, 3, 4, 5], n => n < 4));
// Output: [1, 2, 3]
```

#### RemoveAt
```javascript
console.log(removeAt([1, 2, 3, 4, 5], 2));
// Output: [1, 2, 4, 5]
```

#### Shuffle
```javascript
console.log(shuffle([1, 2, 3, 4, 5]));
// Output: [3, 1, 5, 2, 4]
```