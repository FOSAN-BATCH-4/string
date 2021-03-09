/*
    1. Declare the sentence 
    2. Declare variabel penampung
    3. Isi Varibel penampung dengan index sentece 0 sampai X satu per satu (kita check huruf yang ada di sentence)
        <<Mulai dari sini(pada kasus ini), cukup dibayangkan sahaja>>
            <<start>>
                4. disaat yang bersamaan, Jika menemukan spasi pada sentence dengan index X, maka stop dan simpan hasil pada variabel penampung
                5. Simpan X
                6. Jika sentence dengan index X sama dengan " ", maka tambahkan X dengan 1
                7. Ulangi langkah 4
            <<end>> 
    8. Declare ukuran variabel
    9. Ukuran variabel diisi dengan banyaknya huruf yang ada variabel penampung
    8. Cetak variabel penampung dan ukuran variabel

    1. READ sentence
    2. READ variabel_penampung
    3. varibel_penampung EQUAL TO sentence INDEX 0 UNTIL INDEX X
    4. READ ukuran_variabel
    5. ukuran_variabel EQUAL TO varibel_penapung LENGTH
    4. PRINT variabel_penampung AND ukuran_variabel
*/
//READ sentence
let word4  = 'wow JavaScript is so cool';
//READ variabel_penampung
//varibel_penampung EQUAL TO sentence INDEX 0 UNTIL INDEX X
let exampleFirstWord4   = word4.substring(0, 3);
let secondWord4         = word4.substring(4,14);
let thirdWord4          = word4.substring(15,17);
let fourthWord4         = word4.substring(18,20);
let fifthWord4          = word4.substring(21,26);
//READ ukuran_variabel
let firstWordLength     = exampleFirstWord4.length;
let secondWordLength    = secondWord4.length;
let thirdWordLength     = thirdWord4.length;
let fourthWordLength    = fourthWord4.length;
let fifthWordLength     = fifthWord4.length;
//PRINT variabel_penampung AND ukuran_variabel
console.log('First Word : ' + exampleFirstWord4 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord4 + ', with length: ' + secondWordLength);
console.log('Third Word : ' + thirdWord4 + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + fourthWord4 + ', with length: ' + fourthWordLength);
console.log('Fifth Word : ' + fifthWord4 + ', with length: ' + fifthWordLength);