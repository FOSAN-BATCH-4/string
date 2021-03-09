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
    8. Cetak variabel penampung

    1. READ sentence
    2. READ variabel_penampung
    3. varibel_penampung EQUAL TO sentence INDEX 0 UNTIL INDEX X
    4. PRINT variabel_penampung
*/

//READ sentence
let word = 'wow Javascript is Cool';
//READ variabel_penampung
//variabel_penampung = sentence[0] until INDEX X EQUAL TO " "
let exampleFirstWord = word[0] + word[1] + word[2];
let secondWord = word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13];
let thirdWord = word[15] + word[16];
let fourthWord = word[18] + word[19] + word[20] + word[21];
//PRINT varibel_penampung
console.log("First Word  : " + exampleFirstWord);
console.log("Second Word : " + secondWord);
console.log("Third Word  : " + thirdWord);
console.log("Fourth Word : " + fourthWord);