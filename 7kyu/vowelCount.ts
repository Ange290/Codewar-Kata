export class Kata { 
    static getCount(str: string): number { 
         let nn: number = 0;
    let vowel: string = 'aeiou';
      for (let a = 0; a < str.length; a++) {
      if (vowel.includes(str[a])) {
        nn++;
      }
    }
        } }