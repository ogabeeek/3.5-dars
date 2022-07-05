var summa = (prompt("Pulingizni kiriting"));

var boribKelish = 500 * 9433.34 ;
var mehmonXona = 250 * 9433.34 ;
var muzeyKongilochar = 120 * 10354.03 ;

var retur = boribKelish + mehmonXona + muzeyKongilochar ;
console.log(summa);


if ( summa == " "){
   alert("Bo'sh maydon kiritish mumkin emas")  
};

if(typeof summa === `string`){
    alert("Iltimos son kiriting")
};

if ( summa >= retur){
    alert("Alisher oq yo'l")
}else{
    alert("Pulingiz yetmaydi ozgina sabir qilishingiz kerak  ")
};