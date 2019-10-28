const s1b = "06:30:00"
const s1e = "15:00:00"

const s2b = "06:30:00"
const s2e = "15:00:00"

const s3b = "11:00:00"
const s3e = "19:00:00"

const s4b = "00:00:00"
const s4e = "00:00:00"

const s5b = "00:00:00"
const s5e = "00:00:00"

const s6b = "00:00:00"
const s6e = "00:00:00"

const s7b = "00:00:00"
const s7e = "00:00:00"

const s8b = "00:00:00"
const s8e = "00:00:00"

const s9b = "00:00:00"
const s9e = "00:00:00"

const s10b = "00:00:00"
const s10e = "00:00:00"



function diff_hours(begin, eind) 
 {
    dt1 = new Date(`1998-08-09 ${begin}`);
    dt2 = new Date(`1998-08-09 ${eind}`);
  
    let diff =(dt2.getTime() - dt1.getTime()) / 3600000;
    if (diff >= 9.50){
        diff -= 0.75;
    } 
    else if (diff >= 5.50) {
        diff -= 0.50;
    }
  return diff.toFixed(2);
 }


 
console.log(`Dienst 1 is ${diff_hours(s1b, s1e)} uur lang (inclusief pauze).`);
console.log(`Dienst 2 is ${diff_hours(s2b, s2e)} uur lang (inclusief pauze).`);
console.log(`Dienst 3 is ${diff_hours(s3b, s3e)} uur lang (inclusief pauze).`);
console.log(`Dienst 4 is ${diff_hours(s4b, s4e)} uur lang (inclusief pauze).`);
console.log(`Dienst 5 is ${diff_hours(s5b, s5e)} uur lang (inclusief pauze).`);
console.log(`Dienst 6 is ${diff_hours(s6b, s6e)} uur lang (inclusief pauze).`);
console.log(`Dienst 7 is ${diff_hours(s7b, s7e)} uur lang (inclusief pauze).`);
console.log(`Dienst 8 is ${diff_hours(s8b, s8e)} uur lang (inclusief pauze).`);
console.log(`Dienst 9 is ${diff_hours(s9b, s9e)} uur lang (inclusief pauze).`);
console.log(`Dienst 10 is ${diff_hours(s10b, s10e)} uur lang (inclusief pauze).`);
console.log(".")
// console.log(`Totaal aantal uur: ${}`)
