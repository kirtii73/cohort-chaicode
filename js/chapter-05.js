// Polyfills

Array.prototype.myForEach = function (userFn) {
    for (let i = 0; i < this.length; i++) {
      userFn(this[i], i, this);
    }
  };
  

  const names = ["Kirti", "Shruti", "Rishika"];
  names.myForEach(name => console.log(name));


  Array.prototype.myMap = function (userFn) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
      newArr.push(userFn(this[i], i, this));
    }
    return newArr;
  };
  
  
  const nums = [1, 2, 3];
  const squared = nums.myMap(num => num * num);
  console.log(squared); 


