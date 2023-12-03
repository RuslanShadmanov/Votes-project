const buttons = document.querySelectorAll("button");
const voteSpans = document.querySelectorAll ("p1")

 
const votes = {
    barcelona: 0,
    juventus: 0,
    manchester: 0,
}



for (let i=0; i< buttons.length; i++){

    buttons[i].addEventListener('click', function(event){
        const teamName =  event.target.id;
        votes[teamName]++; 
        // const highest = getHighestScore(Object.values(votes));
        const highest = Math.max(...Object.values(votes));

        const winnerArr = getWinningTeams(highest);
        const buttons = document.querySelectorAll("button")
        for (let i=0; i<buttons.length; i++){
            if (winnerArr.includes(buttons[i].id)){
                buttons[i].parentNode.style.backgroundColor= "red";
            }
            else {
                buttons[i].parentNode.style.backgroundColor= "white";

            }
        }

        const scoreSpan = document.querySelector(`.${teamName}`);
        scoreSpan.innerText = votes[teamName]


    })
}

function getHighestScore(array){
    let highest = array[0];
    for (let i= 1; i<array.length; i++){
        if (array[i]>highest){
            highest = array [i]
        }
    }
    return highest;
}

function getWinningTeams(highestScore){
    const winner = [];
    const teams = Object.keys(votes);

    for (let i = 0; i< teams.length; i++){
        if (votes[teams[i]]=== highestScore){
            winner.push(teams[i]);

        }
    }
    return winner;

}