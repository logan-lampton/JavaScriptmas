import userData from "./data.js";

function transformData(data) {
    const peopleArr = data.map(({name, dob}) => {
        const fullName = `${name.first} ${name.last}`
        const birthday = new Date(dob.date).toDateString()
        return {fullName, birthday}       
    })
    return peopleArr;
}

console.log(transformData(userData));
