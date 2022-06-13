 var x = 60;
document.getElementById("dec").innerHTML = X;

/* >> un & interesējošo bitu novietot 0.pozīcijā un ar ((x>>?) &1)
*/
var bit bit_sequence = " ";
var zero_th_bit = (x >> 0) & 1;

/* 
x>> 0 -> 60(dec) atbilst 0011 1100(bin)
0011 11_0_0 >> 0 -> 0011 1100
               1(dec) tbilst 0000 0001(bin)
               (x >> 0) & 1 -> 0011 1100
                 0000 0001
                 0000 0000(bin) - > 0(dec)
                 */
 console.log("0.bita attēlošana(pēc nobīdes pa 0 bitiem pa labi un 'reizināšanas' ar 1)+ zero_th_bit);
 bit_sequence = zero_th_bit + bit_sequence;
 console.log(bit_sequence)               

 zero_th_bit = ( x>>1) & 1;

 /* 
 0011 11_0_0 >> 1 -> 0001 1110
(x >>1) & 1 -> 0001 1110
               0001 
 
 */ 
console.log("1.bita attēlošana(pēc nobīdes pa 0 bitiem pa labi un 'reizināšanas' ar 1)+ zero_th_bit);
 bit_sequence = zero_th_bit + bit_sequence;
 console.log(bit_sequence)   
 