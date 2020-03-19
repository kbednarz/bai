title = "dr";
name = "Mateusz";
surname = 'Kubicki';
street = 'Długa 15';
city = 'Kraków';
zip = '30-781';
country = 'Poland';

linebreak = '\n';

/* 
dr Mateusz Kubicki
ul. Długa 15
30-781 Kraków
POLAND
*/
console.log(
    title + ' ' + name + ' ' + surname + linebreak +
    'ul. ' + street + linebreak +
    zip + ' ' + city + linebreak +
    country.toUpperCase()
);

console.log(); // empty row for readability

console.log(
    `${title} ${name} ${surname}
ul. ${street}
${zip} ${city}
${country.toUpperCase()}`
)