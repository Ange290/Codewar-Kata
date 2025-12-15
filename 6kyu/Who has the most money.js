class Student {
  constructor(name, fives, tens, twenties) {
    this.name = name;
    this.fives = fives;
    this.tens = tens;
    this.twenties = twenties;
  }
}

    const andy = new Student("Andy", 0, 0, 2);
    const stephen = new Student("Stephen", 0, 4, 0);
    const eric = new Student("Eric", 8, 1, 0);
    const david = new Student("David", 2, 0, 1);
    const phil = new Student("Phil", 0, 2, 1);
    const cam = new Student("Cameron", 2, 2, 0);
    const geoff = new Student("Geoff", 0, 3, 0);

    
function mostMoney(students) {
    const totals = students.map(s =>({
      name: s.name,
      total: (s.fives * 5) + (s.tens * 10) + (s.twenties *20)
    }));
    const max = Math.max(...totals.map(t=> t.total));
    const winner = totals.filter(t => t.total === max);
    if(students.length === 1){
      return winner[0].name;
    }
   else if(winner.length === students.length){
      return "all";
    } 
 return winner[0].name;
  }

    console.log(mostMoney([andy, stephen, eric, david, phil]));
  console.log(mostMoney([andy]));
  console.log(mostMoney([david, geoff]));
  console.log(mostMoney([david, cam, geoff]));