const timeElement = document.getElementById("timestamp")
const dateElement = document.getElementById("date");

function update(){
    const now = new Date();
console.log(now);

const hours = now.getHours()%12 || 12;
console.log(hours);

const minutes = now.getMinutes().toString().padStart(2, "0");
console.log(minutes);

const seconds = now.getSeconds().toString().padStart(2, "0");
console.log(seconds);

const ampm = now.getHours() >= 12 ? "PM" : "AM";
console.log(ampm);

timeElement.textContent = `${hours}: ${minutes}: ${seconds}: ${ampm}`;

const options = {
    weekday: "long",   
    year: "numeric",   
    month: "long",     
    day: "2-digit"} 
    
const datetoday = now.toLocaleString(undefined, options)

dateElement.textContent= `${datetoday}`;
}

setInterval(update , 1000)

update();
