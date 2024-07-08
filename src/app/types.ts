export interface ICard {
  cardId: string;
  dbfId: number;
  name: string;
  cardSet: string;
  type: string;
  faction: string;
  rarity: string;
  cost: number;
  attack: number;
  health: number;
  text: string;
  flavor: string;
  artist: string;
  collectible: boolean;
  elite: boolean;
  race: string;
  playerClass: string;
  img: string;
  imgGold: string;
  locale: string;
  mechanics?: IMechanic[];
}
export interface IMechanic {
  name: string;
}

export interface IMyCard {
  name: string;
  imgURL: string;
  id: number;
}
