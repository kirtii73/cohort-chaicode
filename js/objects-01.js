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



const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    yearPublished: 1925,
    genres: ["Classic", "Novel", "Drama"],
    publisher: {
        name: "Scribner",
        location: "New York"
    },
    getSummary: function() {
        return `${this.title} by ${this.author}, published in ${this.yearPublished}`;
    },
    getAge: function(currentYear) {
        return currentYear - this.yearPublished;
    },
    isClassic: function() {
        return this.getAge(new Date().getFullYear()) > 50;
    }
};

// Accessing object properties
console.log("Book Title:", book.title);
console.log("Author:", book.author);
console.log("Year Published:", book.yearPublished);
console.log("Genres:", book.genres.join(", "));
console.log("Publisher Name:", book.publisher.name);
console.log("Book Summary:", book.getSummary());
console.log("Book Age:", book.getAge(2024));
console.log("Is Classic?:", book.isClassic());

// Modifying an object property
book.yearPublished = 1926;
console.log("Updated Year Published:", book.yearPublished);

// Adding a new property
book.pages = 180;
console.log("Number of Pages:", book.pages);

// Deleting a property
delete book.genres;
console.log("Book after deleting genres:", book);

// Looping through object properties
for (let key in book) {
    console.log(`${key}:`, book[key]);
}

