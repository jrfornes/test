# Assign id to objects

Given an array of objects:

```
[
  {
    type: 'banana',
    id: undefined
  },
  {
    type: 'banana',
    id: undefined
  },
  {
    type: 'apple',
    id: undefined
  },
  {
    type: 'apple',
    id: undefined
  },
  {
    type: 'orange',
    id: undefined
  },
  {
    type: 'orange',
    id: undefined
  }
  ...
]
```

Assign an id value to each object (fruit).

The first object from each type (fruit type) shall take the value from `fruitsBaseIds`.

```
const fruitsBaseIds = {
  banana: 1,
  apple: 2,
  orange: 3
};
```

For example, given input:

```
[
  {
    type: 'banana',
    id: undefined
  },
  {
    type: 'apple',
    id: undefined
  },
  {
    type: 'orange',
    id: undefined
  }
]
```

Output shall be:

```
[
  {
    type: 'banana',
    id: 1
  },
  {
    type: 'apple',
    id: 2
  },
  {
    type: 'orange',
    id: 3
  }
];
```

If the input has multiple objects of the same type, then the id shall increment, but:

* An object shall not use the id from a different type (fruit type).
* An object shall not use an id that is already in use.

For example, given input:

```
[
  {
    type: 'banana',
    id: undefined
  },
  {
    type: 'banana',
    id: undefined
  },
  {
    type: 'apple',
    id: undefined
  },
  {
    type: 'apple',
    id: undefined
  },
];
```

Output shall be:

```
[
  {
    type: 'banana',
    id: 1
  },
  {
    type: 'banana',
    id: 4
  },
  {
    type: 'apple',
    id: 2
  },
  {
    type: 'apple',
    id: 5
  }
];
```

# Tips/Help

* The JavaScript [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) function can help you to solve this problem.
* You might want to use recursion to help you rectify/calculate the id to be assigned.
