const fruits = ['Strawberry', 'Apple', 'Tangerine', 'Banana', 'Melon', 'Pear'];


function long(){
    const result = fruits.filter((fruit)=>{
        return fruit.startsWith('P');
    })
    console.log(result);
   }
   long();
   