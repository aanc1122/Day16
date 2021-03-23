const firstName = (firstName) => {
    return firstName.toUpperCase();
}
const lastName = (lastName) => {
    return lastName.toLowerCase();
}

console.log(firstName("Amela"));
console.log(lastName("Nuhanovic"));

exports.firstName = firstName;
exports.lastName = lastName;