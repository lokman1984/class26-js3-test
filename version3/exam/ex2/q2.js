const fruits = ['Strawberry', 'Apple', 'Tangerine', 'Banana', 'Melon', 'Pear'];



function hyf(){
const sortFruit = fruits
  .filter((fruit, index) => fruits.lastIndexOf(fruit) === index)
  .sort((a, b) => a < b ? -1 : 1);

  console.log(sortFruit);
}
hyf()