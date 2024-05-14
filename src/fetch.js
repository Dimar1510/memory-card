export default async function fetchCards(count) {
    const cards = []
    const selectedCards = new Set()
    const url = 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/Classic';
    const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '48fec743a5msh4b9c6af94726c89p1a2f5ajsnfb492df8eaac',
		'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
		'Content-Type': 'application/json'
	    }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const data = result.filter(card => card.img && card.type === 'Minion' && card.rarity === 'Legendary' && card.cost !== 0)
        
        for (let card of data) {
            cards.push({
            name: card.name,
            imgURL: card.imgGold,
            id: card.dbfId
            })
        }
        while (selectedCards.size < count) {
            const item = cards[Math.floor(Math.random()*cards.length)]
            selectedCards.add(item)
        }
        console.log(data);
        return([...selectedCards])
    } catch (error) {
        console.error(error);
    }

    
}