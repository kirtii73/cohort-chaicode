const person = {
    firstName: "Khushi",
    lastName: "Sharma",
    age: 30,
    hobbies: ["reading", "gaming", "coding"],
    address: {
        street: "123 TT Nagar",
        city: "Bhopal",
        country: "India"
    },
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log("First Name:", person.firstName);
console.log("Last Name:", person.lastName);
console.log("Age:", person.age);
console.log("Hobbies:", person.hobbies.join(", "));
console.log("City:", person.address.city);
console.log("Full Name:", person.fullName());


person.age = 31;
console.log("Updated Age:", person.age);


person.occupation = "Software Developer";
console.log("Occupation:", person.occupation);


delete person.hobbies;
console.log("Person after deleting hobbies:", person);


for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
