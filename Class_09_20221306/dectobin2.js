var x =44;
document.getElementById("dec").innerHTML = x;

/*
>> un & (interesējošo bitu novietot vienmēr 0. pozīcijā un ar ((x>>?) & 1)
*/

var bit_sequence = "";
var zero_th_bit = (x >> 0) & 1;
/*
x >> 0 -> 60(dec) atbilst 0011 1100(bin)
0011 110_0_ >> 0 -> 0011 1100
           1(dec) atbilst 0000 0001(bin)
(x >> 0) & 1 -> 0011 1100
                0000 0001
                0000 0000(bin) -> 0(dec)
*/
console.log("0. bita attēlošana (pēc nobīdes pa 0 bitiem pa labi un 'reizināšanas' ar 1): "+zero_th_bit);
bit_sequence = zero_th_bit + bit_sequence;
console.log("0. bits: " + bit_sequence);

zero_th_bit = (x >> 1) & 1;
/*
0011 11_0_0 >> 1 -> 0001 1110
(x >> 1) & 1 ->    0001 1110
                   0000 0001
                   0000 0000(bin) -> 0(dec)
*/



console.log("2. bita attēlošana (pēc nobīdes pa 2 bitiem pa labi un 'reizināšanas' ar 1): "+zero_th_bit);
bit_sequence = zero_th_bit + bit_sequence;
console.log("0. un 1. un 2. bits: " + bit_sequence);

zero_th_bit = (x >> 2) & 1;


console.log("2. bita attēlošana (pēc nobīdes pa 3 bitiem pa labi un 'reizināšanas' ar 1): "+zero_th_bit);
bit_sequence = zero_th_bit + bit_sequence;
console.log("0. un 1. un 2. un 3. bits: " + bit_sequence);

zero_th_bit = (x >> 3) & 1;

console.log("2. bita attēlošana (pēc nobīdes pa 4 bitiem pa labi un 'reizināšanas' ar 1): "+zero_th_bit);
bit_sequence = zero_th_bit + bit_sequence;
console.log("0. un 1. un 2. un 3. un 4. bits: " + bit_sequence);


zero_th_bit = (x >> 4) & 1;

console.log("2. bita attēlošana (pēc nobīdes pa 4 bitiem pa labi un 'reizināšanas' ar 1): "+zero_th_bit);
bit_sequence = zero_th_bit + bit_sequence;
console.log("0. un 1. un 2. un 3. un 4. un 5. bits: " + bit_sequence);


zero_th_bit = (x >> 5) & 1;

console.log("2. bita attēlošana (pēc nobīdes pa 4 bitiem pa labi un 'reizināšanas' ar 1): "+zero_th_bit);
bit_sequence = zero_th_bit + bit_sequence;
console.log("0. un 1. un 2. un 3. un 4. un 5. un 6. bits: " + bit_sequence);


zero_th_bit = (x >> 6) & 1;

console.log("2. bita attēlošana (pēc nobīdes pa 4 bitiem pa labi un 'reizināšanas' ar 1): "+zero_th_bit);
bit_sequence = zero_th_bit + bit_sequence;
console.log("0. un 1. un 2. un 3. un 4. un 5. un 6. un 7. bits: " + bit_sequence);


zero_th_bit = (x >> 7) & 1;

console.log("2. bita attēlošana (pēc nobīdes pa 4 bitiem pa labi un 'reizināšanas' ar 1): "+zero_th_bit);
bit_sequence = zero_th_bit + bit_sequence;
console.log("0. un 1. un 2. un 3. un 4. un 5. un 6. un 7. un 8. bits: " + bit_sequence);



/*
......... Jūsu algoritms dec skaitļa pārveidošanai par bināro skaitli
......... vai par 0 un 1 simbolu secību
......... drīkst izmantot tikai divus vai trīs mainīgos
*/
// sākumā var atrast un pielietot standarta JS funkciju, kas pārveido dec to bin
// if, for utt. pagaidām izmantot nedrīkst
document.getElementById("bin_peec_algoritma").innerHTML = bit_sequence;

document.getElementById("bin_peec_standarta_funkcijas").innerHTML = Number(x).toString(2);