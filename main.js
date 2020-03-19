const fruitsBaseIds = {
  banana: 1,
  apple: 2,
  orange: 3
};

const fruits = [
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
  }
];

const result = fruits.reduce( (accumulator, currentValue) => {
  // happy coding
}, []);

console.log(result)
