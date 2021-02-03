const person = {
    name: "rahim",
    ages: 20,
    job: "facebooking",
    gfName: "bobita",
    phone: "01711223344",
    friends: ["korim", "rahim", "hen", "ten"],
};
// const gfName = person.gfName;
// const phone = person.phone;
const { phone, gfName } = person;
console.log(gfName, phone);
console.log(gfName, phone);

const friends = ["rihim", "korim", "shakib", "liton"];
const [bestF, oldF, ...newF] = friends;
console.log(newF);

const complexObject = {
    name: "Rahim",
    info: {
        address: "usa",
        leader: "lion vai",
    },
};
const { leader } = complexObject.info;
console.log(leader);