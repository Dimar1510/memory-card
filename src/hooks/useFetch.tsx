import { useEffect, useState } from "react";
import { ICard, IMyCard } from "src/app/types";

function useFetch(count: number): {
  data: Set<IMyCard>;
  error: null | string;
  loading: boolean;
} {
  const selectedCards: Set<IMyCard> = new Set();
  const [data, setData] = useState(selectedCards);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const cards: IMyCard[] = [];

  const url =
    "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/Classic";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "48fec743a5msh4b9c6af94726c89p1a2f5ajsnfb492df8eaac",
      "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(url, options);
        const result: ICard[] = await response.json();
        const data = result.filter(
          (card) =>
            card.img &&
            card.type === "Minion" &&
            card.rarity === "Legendary" &&
            card.cost !== 0
        );

        for (const card of data) {
          cards.push({
            name: card.name,
            imgURL: card.imgGold,
            id: card.dbfId,
          });
        }
        while (selectedCards.size < count) {
          const item = cards[Math.floor(Math.random() * cards.length)];
          selectedCards.add(item);
        }
        setData(selectedCards);
      } catch (error) {
        console.error(error);
      } finally {
        setError(error);
        setLoading(false);
      }
    };
    fetchCards();
  }, []);
  return { data, error, loading };
}
export default useFetch;
