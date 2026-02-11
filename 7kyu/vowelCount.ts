export class Kata { 
    static getCount(str: string): number { 
         let nn: number = 0;
    let vowel: string = 'aeiou';
      for (let a = 0; a < str.length; a++) {
      if (vowel.includes(str[a])) {
        nn++;
      }
    }
       return nn;
        } }
        console.log(Kata.getCount('abracadabra'));
        console.log(Kata.getCount('hello world'));
        console.log(Kata.getCount('aeiou'));