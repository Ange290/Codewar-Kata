function points(games) {
    let ourPoints = 0;
    let opponentPoint =0;
    for (let i = 0; i <games.length; i++) {
        const result = games[i].split(":");
        const ourScore = parseInt(result[0]);
        const opponentScore = parseInt(result[1]);

        if (ourScore > opponentScore) {
            ourPoints += 3; 
        }
        else if( ourScore < opponentScore){
          opponentPoint +=3;
        }
        else if (ourScore === opponentScore) {
            ourPoints += 1; 
            opponentPoint +=1;
        }
        
    }

    return ourPoints;
}
console.log(points(["1:0", "2:2", "3:1"])); // 7
console.log(points(["1:0", "2:2", "3:3"]));