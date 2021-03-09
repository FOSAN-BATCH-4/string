/**
 * Sama dengan problem 2 hanya saja menggunakan substring
 * Substring(start_index, end_index)
 *      start_index = Mau dimulai dari index berapa ?
 *      end_index = Mau diakhiri di index berapa ? (end_index tidak akan tercetak)
 */

//READ sentence
let word3 = 'wow Javascript is so cool';
//READ variabel_penampung
//variabel_penampung = sentence[0] until INDEX X EQUAL TO " "
let exampleFirstWord3   = word3.substring(0,3);
let secondWord3         = word3.substring(4,14);
let thirdWord3          = word3.substring(15,17);
let fourthWord3         = word3.substring(18,20);
let fifthWord3          = word3.substring(21,26);
//PRINT variabel_penampung
console.log('First Word : ' + exampleFirstWord3);
console.log('Second Word: ' + secondWord3);
console.log('Third Word : ' + thirdWord3);
console.log('Fourth Word: ' + fourthWord3);
console.log('Fifth Word : ' + fifthWord3);

