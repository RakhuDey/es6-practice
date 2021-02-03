const ages = [12, 13, 14, 16, 18];
const ages2 = [16, 12, 18, 19, 11];
const ages3 = [21, 22, 28, 29, 21];
const allAges = ages.concat(ages2).concat(ages3).concat([5]);
const allAges2 = [...ages, ...ages2, ...ages3, 5];
console.log(allAges2);

const business = 650;
const minister = 550;
const shochib = 330;
const takaPoysa = [650, 550, 330];
// const maximum = Math.max(business, minister, shochib);
const maximum = Math.max(...takaPoysa);
console.log(maximum);