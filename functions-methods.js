// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

function getEmailDomain (mail) {
    const split = mail.split(`@`);
    const domain = split[1];
    return domain;
}

console.log(getEmailDomain('n.eeken@novi-education.nl'));



/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"


// ik moet dan toch wel weer eerst deze functie maken om die daaronder de info te geven of ben ik nu moeilijk aan het doen?
function endOfEmail (email) {
    const parts = email.split('@');
    return parts [1]
}

function typeOfEmail (email) {
    const domain = endOfEmail(email);
    if (domain === `novi-education.nl`) {
        return `student`;
    } else if (domain === 'novi.nl') {
        return `medewerker`;
    } else {
        return `extern`;
    }
}
console.log(typeOfEmail('a.wiersma@outlook.com'));
/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

// ik gebruik hier de logical not operator omdat ik die @ wel erin wil hebben maar alles false wil hebben om het helemaal te doorlopen. dus alle voorwaarden
// voldoen alles geeft fals tikt hij door naar de return true
function checkEmailValidity (emailadres){
 if (!emailadres.includes(`@`)) {
     return false;
 }
 if (emailadres.includes(`,`)) {
     return false;
 }
 if (emailadres.endsWith(`.`)) {
     return false;
 }
     return true;
 }
 console.log(checkEmailValidity(`n.eeken@novi.nl`));
