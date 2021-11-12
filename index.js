
const getCards = () =>{
    let cards = [];
    for (var i=0; i< 52; i++)
    {
        cards.push(i+1);
    }
    return cards;
}

const getShuffledCards = () => {
    let cards = getCards();
    return cards.sort(() => Math.random() - 0.5)
  };

const cardGames = () =>{
    let cards = [];
    let firstCards = [];
    let secondCards = [];

    cards =  getShuffledCards();
    firstCards = cards.splice(0,26);
    secondCards = cards.splice(0,53);
    
    return {
        firstCards,
        secondCards
    }
}
const game = () =>{
    const {firstCards, secondCards}= cardGames();
    const rounds = [];

    firstCards.forEach((card, index) =>{
        rounds.push([card, secondCards[index]])
    })

    const player1WinCount = rounds.map(e =>e[0] >e[1]).filter(e=>e).length;
    const player2WinCount = rounds.map(e =>e[1] >e[0]).filter(e=>e).length;

    return {
        firstCards,
        secondCards,
        player1WinCount,
        player2WinCount,
        player1CollectedCards : player1WinCount * 2, 
        player2CollectedCards : player2WinCount * 2 
    }
   
}
console.log(game())