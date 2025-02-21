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


Array.prototype.myEvery = function (userFn) {
  for (let i = 0; i < this.length; i++) {
    if (!userFn(this[i], i, this)) {
      return false;
    }
  }
  return true;
};


const marks = [80, 90, 85, 70];
const allPass = marks.myEvery(mark => mark >= 50);
console.log(allPass); 


