import { CardsModule } from './cards.module';
import { YellowCard } from './YellowCard';
import { Injectable } from '@angular/core';
import { BaseCard } from './BaseCard';
import { GovernmentCard } from './GovernmentCard';
import { LeaderCard } from './LeaderCard';
import { UnitCard } from './UnitCard';
import { WonderCard } from './WonderCard';
import { CardTypes } from './card-types';
import { TacticsCard } from './TacticsCard';

@Injectable({
  providedIn: CardsModule
})
export class CardService {

  private cards = {
    // Military units
    "warriors": new UnitCard("Warriors", 0, {strength: 1}, CardTypes.INFANTRY, 0, 2),
    "swordsmen": new UnitCard("Swordsmen", 1, {strength: 2}, CardTypes.INFANTRY, 4, 3),
    "riflemen": new UnitCard("Riflemen", 2, {strength: 3}, CardTypes.INFANTRY, 6, 5),
    "moderninfantry": new UnitCard("Modern Infantry", 3, {strength: 5}, CardTypes.INFANTRY, 10, 7),
    "knights": new UnitCard("Knights", 1, {strength: 2}, CardTypes.CAVALRY, 5, 3),
    "cavalrymen": new UnitCard("Cavalrymen", 2, {strength: 3}, CardTypes.CAVALRY, 6, 5),
    "tanks": new UnitCard("Tanks", 3, {strength: 5}, CardTypes.CAVALRY, 9, 7),
    "cannon": new UnitCard("Cannon", 2, { strength: 3}, CardTypes.ARTILLERY, 6, 5),
    "rockets": new UnitCard("Rockets", 3, {strength: 5}, CardTypes.ARTILLERY, 8, 7),
    "airforces": new UnitCard("Air Forces", 3, {strength: 7}, CardTypes.AIRFORCES, 12, 7),

    // Tactics
    "fightingband": new TacticsCard("Fighting Band", 1, this.getComposition(2, 0, 0), 1),
    "legion": new TacticsCard("Legion", 1, this.getComposition(3, 0, 0), 2),
    "medievalarmy": new TacticsCard("Medieval Army", 1, this.getComposition(1, 1, 0), 2),
    "phalanx": new TacticsCard("Phalanx", 1, this.getComposition(2, 1, 0), 3),
    "heavycavalry": new TacticsCard("Heavy Cavalry", 1, this.getComposition(0, 3, 0), 4),
    "classicarmy": new TacticsCard("Classic Army", 2, this.getComposition(2, 2, 0), 8, 4),
    "conquistadors": new TacticsCard("Conquistadors", 2, this.getComposition(1, 2, 0), 5, 3),
    "defensivearmy": new TacticsCard("Defensive Army", 2, this.getComposition(2, 0, 1), 6, 3),
    "fortifications": new TacticsCard("Fortifications", 2, this.getComposition(0, 0, 2), 5, 3),
    "mobileartillery": new TacticsCard("Mobile Artillery", 2, this.getComposition(0, 1, 1), 5, 3),
    "napoleonicarmy": new TacticsCard("NapoleonicArmy", 2, this.getComposition(1, 1, 1), 7, 4),
    "entrenchments": new TacticsCard("Entrenchments", 3, this.getComposition(1, 0, 2), 9, 5),
    "mechanizedarmy": new TacticsCard("Mechanized Army", 3, this.getComposition(0, 1, 2), 10, 5),
    "modernarmy": new TacticsCard("Modern Army", 3, this.getComposition(2, 1, 1), 13, 7),
    "shocktroops": new TacticsCard("Shock Troops", 3, this.getComposition(1, 3, 0), 11, 6),

    // Brown cards
    "agriculture": new UnitCard("Agriculture", 0, {food: 1}, CardTypes.FARM, 0, 2),
    "irrigation": new UnitCard("Irrigation", 1, {food: 2}, CardTypes.FARM, 3, 4),
    "selectivebreeding": new UnitCard("Selective Breeding", 2, {food: 3}, CardTypes.FARM, 5, 6),
    "mechanizedagriculture": new UnitCard("Mechanized Agriculture", 3, {food: 5}, CardTypes.FARM, 7, 8),
    "bronze": new UnitCard("Bronze", 0, {resources: 1}, CardTypes.MINE, 0, 2),
    "iron": new UnitCard("Iron", 1, {resources: 2}, CardTypes.MINE, 5, 5),
    "coal": new UnitCard("Coal", 2, {resources: 3}, CardTypes.MINE, 7, 8),
    "oil": new UnitCard("Oil", 3, {resources: 5}, CardTypes.MINE, 9, 11),

    // Urbans
    "philosophy": new UnitCard("Philosophy", 0, {science: 1}, CardTypes.LAB, 0, 3),
    "alchemy": new UnitCard("Alchemy", 1, {science: 2}, CardTypes.LAB, 4, 6),
    "scientificmethod": new UnitCard("Scientific Method", 2, {science: 3}, CardTypes.LAB, 6, 8),
    "computers": new UnitCard("Computers", 3, {science: 5}, CardTypes.LAB, 8, 11),
    "religion": new UnitCard("Religion", 0, {culture: 1, happiness: 1}, CardTypes.TEMPLE, 0, 3),
    "theology": new UnitCard("Theology", 1, {culture: 1, happiness: 2}, CardTypes.TEMPLE, 2, 5),
    "organizedreligion": new UnitCard("Organized Religion", 2, {culture: 1, happiness: 3}, CardTypes.TEMPLE, 4, 7),
    "drama": new UnitCard("Drama", 1, {culture: 2, happiness: 1}, CardTypes.THEATER, 3, 4),
    "opera": new UnitCard("Opera", 2, {culture: 3, happiness: 1}, CardTypes.THEATER, 7, 8),
    "movies": new UnitCard("Movies", 3, {culture: 4, happiness: 1}, CardTypes.THEATER, 10, 11),
    "printingpress": new UnitCard("Printing Press", 1, {science: 1, culture: 1}, CardTypes.LIBRARY, 3, 3),
    "journalism": new UnitCard("Journalism", 2, {science: 2, culture: 2}, CardTypes.LIBRARY, 6, 8),
    "multimedia": new UnitCard("Multimedia", 3, {science: 3, culture: 3}, CardTypes.LIBRARY, 9, 11),
    "breadandcircuses": new UnitCard("Bread and Circuses", 1, {strength: 1, happiness: 2}, CardTypes.ARENA, 3, 3),
    "teamsports": new UnitCard("Team Sports", 2, {strength: 2, happiness: 3}, CardTypes.ARENA, 5, 5),
    "professionalsports": new UnitCard("Professional Sports", 3, {strength: 3, happiness: 4}, CardTypes.ARENA, 7, 8),

    // Governments
    "despotism": new GovernmentCard("Despotism", 0, 0, this.getActions(4, 2), null),
    "theocracy": new GovernmentCard("Theocracy", 1, this.getScienceCosts(6, 1), this.getActions(4, 3), {culture: 1, happiness: 1, strength: 1}),
    "monarchy": new GovernmentCard("Monarchy", 1, this.getScienceCosts(8, 2), this.getActions(5, 3), null),
    "republic": new GovernmentCard("Republic", 2, this.getScienceCosts(13, 3), this.getActions(7, 2), null),
    "constitutionalmonarchy": new GovernmentCard("Constitutional Monarchy", 2, this.getScienceCosts(12, 6), this.getActions(6, 4), null),
    "democracy": new GovernmentCard("Democracy", 3, this.getScienceCosts(17, 9), this.getActions(7, 3), {culture: 3}),
    "fundamentalism": new GovernmentCard("Fundamentalism", 3, this.getScienceCosts(18, 7), this.getActions(6, 5), {strength: 5, science: -2}),
    "communism": new GovernmentCard("Communism", 3, this.getScienceCosts(19, 5), this.getActions(7, 5), {happiness: -1}),

    // Leaders
    "homer": new LeaderCard("Homer", 0, { happiness: 1, militaryResources: 1 }),
    "alexander": new LeaderCard("Alexander the Great", 0, { strength: 1 }),
    "julius": new LeaderCard("Julius Caesar", 0, { strength: 1, militaryActions: 1 }),
    "moses": new LeaderCard("Moses", 0, { discount: 1 }),
    "aristotle": new LeaderCard("Aristotle", 0, { science: 1 }),
    "hammurabi": new LeaderCard("Hammurabi", 0, { actions: 1, actionCostDiscount: 1 }),

    // Wonders
    "pyramids": new WonderCard("Pyramids", 0, [3, 2, 1], {civilActions: 1}),
    "libraryofalexandria": new WonderCard("Library of Alexandria", 0, [1, 4, 1], {science: 1, culture: 1}),
    "hanginggardens": new WonderCard("Hanging Gardens", 0, [2, 2, 2], {happiness: 2, culture: 1}),
    "colossus": new WonderCard("Colossus", 0, [3, 3], {strength: 2, colonization: 1}),
    "universitascarolina": new WonderCard("Universitas Carolina", 1, [3, 3, 3], {science: 2, culture: 1}),
    "greatwall": new WonderCard("Great Wall", 1, [2, 2, 3 ,2], {culture: 1, strength: 1, happiness: 1}),
    "stpetersbasilica": new WonderCard("St. Peter's Basilica", 1, [4, 4], {happiness: 1, culture: 2}),
    "tajmahal": new WonderCard("Taj Mahal", 1, [2, 4, 2], {blueCubes: 1}),
    "kremlin": new WonderCard("Kremlin", 2, [4, 4, 4], {civilActions: 1, militaryActions: 1, culture: 2, happiness: -1}),
    "oceanliner": new WonderCard("Ocean Liner", 2, [4, 2, 2, 4], {}),
    "transcontinentalrailroad": new WonderCard("Transcontinental Railroad", 2, [3, 3, 3, 3], {strength: 4}),
    "eiffeltower": new WonderCard("Eiffel Tower", 2, [3, 7, 3], {culture: 4, happiness: 1}),
    "internet": new WonderCard("Internet", 3, [2, 3, 4, 3, 2], {}),
    "hollywood": new WonderCard("Hollywood", 3, [5, 6, 5], {}),
    "fastfoodchains": new WonderCard("Fast Food Chains", 3, [4, 4, 4, 4], {}),
    "firstspaceflight": new WonderCard("First Space Flight", 3, [1, 2, 4, 9], {}),

    // Yellow cards
    "culturalheritagea": new YellowCard("Cultural Heritage", 0),
    "engineeringgeniusa": new YellowCard("Engineering Genius", 0),
    "frugalitya": new YellowCard("Frugality", 0),
    "patriotisma": new YellowCard("Patriotism", 0),
    "richlanda": new YellowCard("Rich Land", 0),
    "stockpilea": new YellowCard("Stockpile", 0),
    "urbangrowtha": new YellowCard("Urban Growth", 0)
  };

  constructor() {
    
  }

  get(cardName) {
    return this.cards[cardName];
  }

  private getScienceCosts(peaceful, revolution) {
    return {
      peaceful: peaceful,
      revolution: revolution
    }
  }

  private getActions(civil, military) {
    return {
      civil: civil,
      military: military
    }
  }

  private getComposition(infantryComposition, cavalryComposition, artilleryComposition) {
    let composition = {};
    if (infantryComposition) {
      composition[CardTypes.INFANTRY] = infantryComposition;
    }
    
    if (cavalryComposition) {
      composition[CardTypes.CAVALRY] = cavalryComposition;
    }

    if (artilleryComposition) {
      composition[CardTypes.ARTILLERY] = artilleryComposition;
    }
    
    return composition;
  }
}