export function sendMessage(message: string): string {
  let arr: string[] = message.split('');
  let obj: { [key: string]: string } = {
    "a":"2","b":"22","c":"222",
    "d":"3","e":"33","f":"333",
    "g":"4","h":"44","i":"444",
    "j":"5","k":"55","l":"555",
    "m":"6","n":"66","o":"666",
    "p":"7","q":"77","r":"777","s":"7777",
    "t":"8","u":"88","v":"888",
    "w":"9","x":"99","y":"999","z":"9999",

    ".":"1",",":"11","?":"111","!":"1111",
    "'":"*","-":"**","+":"***","=":"****",

    " ":"0",

    "0":"0-","1":"1-","2":"2-","3":"3-",
    "4":"4-","5":"5-","6":"6-",
    "7":"7-","8":"8-","9":"9-",

    "*":"*-","#":"#-"
  };

  let result: string[] = [];

  for (let a = 0; a < arr.length; a++) {
    const original = arr[a];
    const lower = original.toLowerCase();

    for (let ch in obj) {
      const code = obj[ch];

      if (lower === ch) {
        const isUpper =
          original === original.toUpperCase() &&
          original !== original.toLowerCase();

        const finalCode = isUpper ? "#" + code : code;

        if (result.length > 0 && result[result.length - 1][0] === finalCode[0]) {
          result.push(" ");
        }

        result.push(finalCode);
        break;
      }
    }
  }

  return result.join('');
}
console.log(sendMessage("hey"));
console.log(sendMessage("one two three"));
console.log(sendMessage("Hello World!"));
console.log(sendMessage("Def Con 1!"))//#3#33 3330#222#666 6601-1111
console.log(sendMessage("A-z"))//#2**#9999
