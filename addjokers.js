let jokers = [
  {
    name: "Humble Joker",
    text: [
			"{C:white,X:mult}X2{} Mult"
    ],
    image_url: "img/HumbleJoker.png",
    rarity: "Rare"
  },
  {
    name: "Circle Joker",
    text: [
			"If hand contains exactly {C:attention}1 {}card",
			"this joker gains {C:mult}+3 {}Mult",
			"and {C:chips}+14 {}Chips",
			"{C:inactive}(Currently {C:mult}+0 {C:inactive}Mult & {C:chips}+0 {C:inactive}Chips)"
    ],
    image_url: "img/CircleJoker.png",
    rarity: "Rare"
  },
  {
    name: "Bad Omen",
    text: [
			"Gains {C:white,X:mult}X0.5{} Mult per",
			"unique {C:spectral}Spectral {}card used this run",
			"{C:inactive}(Currently {C:white,X:mult}X1.0{C:inactive} Mult)"
    ],
    image_url: "img/BadOmen.png",
    rarity: "Rare"
  },
  {
    name: "Red Joker",
    text: [
			"Gains {C:chips}+4 {}Chips per {C:attention}discard{}",
			"{C:inactive}(Currently {C:chips}+0 {C:inactive}Chips)"
    ],
    image_url: "img/RedJoker.png",
    rarity: "Common"
  },
  {
    name: "Rigged Wheel",
    text: [
			"All chances for {C:enhanced}Editions {}are",
			"equally likely, including {C:dark_edition}Negative{}"
    ],
    image_url: "img/RiggedWheel.png",
    rarity: "Rare"
  },
  {
    name: "Brick by Brick",
    text: [
			"This Joker gains {C:mult}+3 {}Mult",
			"for each scoring {C:attention}Stone {}card",
			"{C:inactive}(Currently {C:mult}+0 {C:inactive}Mult)"
    ],
    image_url: "img/BrickByBrick.png",
    rarity: "Common"
  },
  {
    name: "Miner",
    text: [
      "Retriggers all played {C:attention}Stone {}cards"
    ],
    image_url: "img/Miner.png",
    rarity: "Common"
  },
  {
    name: "Colorblindness",
    text: [
      "{C:clubs}Clubs{} and {C:diamonds}Diamonds{} count",
			"as the same suit"
    ],
    image_url: "img/Colorblindness.png",
    rarity: "Common"
  },
  {
    name: "Wild West",
    text: [
			"{C:mult}+30 {}Mult for scoring {C:attention}Wild {}card",
			"in the leftmost position"
    ],
    image_url: "img/WildWest.png",
    rarity: "Common"
  },
  {
    name: "Fire Tornado",
    text: [
			"{C:mult}+20 {}Mult if played hand only",
			"contains {C:hearts}Hearts {}and {C:diamonds}Diamonds{}"
    ],
    image_url: "img/FireTornado.png",
    rarity: "Common"
  },
  {
    name: "Symmetry Joker",
    text: [
			"Retrigger all scoring {C:attention}8s{},",
			"{C:attention}6s{}, {C:attention}9s {}and {C:attention}Aces {}"
    ],
    image_url: "img/SymmetryJoker.png",
    rarity: "Uncommon"
  },
  {
    name: "Hole in One",
    text: [
			"If {C:attention}first hand{} of round contains",
			"a scoring {C:attention}Ace{}, earn {C:money}$5{}"
    ],
    image_url: "img/HoleInOne.png",
    rarity: "Common"
  },  
  {
    name: "Slot Machine",
    text: [
			"If hand contains 3 {C:attention}7s{},",
			"create {C:attention}3 {C:dark_edition}Negative {}Consumables"
    ],
    image_url: "img/SlotMachine.png",
    rarity: "Rare"
  },  
  {
    name: "The Deal",
    text: [
			"Go down to {C:blue}1{} Hand, gain {C:red}+5 {}Discards"
    ],
    image_url: "img/TheDeal.png",
    rarity: "Uncommon"
  },    
  {
    name: "Loan Shark",
    text: [
      "This Joker gains {C:white,X:mult}X0.5{} Mult for",
			"each {C:money}$1{} below {C:money}0{}",
			"Go up to {C:red}-$5{} in debt",
			"{C:inactive}(Currently {C:white,X:mult}X1{C:inactive} Mult)"
    ],
    image_url: "img/LoanShark.png",
    rarity: "Rare"
  },
  {
    name: "The Reaper",
    text: [
			"If the {C:attention}winning hand{} of round contains",
			"a {C:attention}Pair{}, {C:green,E:1}1 in 2{} chance",
			"to create a {C:tarot}Death Tarot{} card"
    ],
    image_url: "img/TheReaper.png",
    rarity: "Common"
  },
  {
    name: "Black Kitten",
    text: [
			"This Joker gains {C:white,X:mult}X0.1{} Mult if a {C:attention}Lucky {}card",
			"{C:red}unsuccesfully {}triggers, loses {C:white,X:mult}X0.2 {} Mult",
			"for a {C:green}succesful {}trigger",
			"{C:inactive}(Currently {C:white,X:mult}X1{C:inactive} Mult)"
    ],
    image_url: "img/BlackKitten.png",
    rarity: "Uncommon"
  },
  {
    name: "Lumberjack",
    text: [
			"Sell this Joker to remove",
			"all {C:attention}3s {}from full deck",
			"Earn {C:money}$1 {}for each {C:attention}3 {}destroyed",
			"{C:inactive}(Currently {C:attention}0 {C:inactive}cards to remove)"
    ],
    image_url: "img/Lumberjack.png",
    rarity: "Uncommon"
  },
  {
    name: "Clown Fiesta",
    text: [
			"Sell this Joker to create {C:attention}2{}",
			"free {C:attention}Juggle Tags{}"
    ],
    image_url: "img/ClownFiesta.png",
    rarity: "Uncommon"
  },
  {
    name: "Force of Nature",
    text: [
			"Gains {C:white,X:mult}X1{} Mult for every",
			"{C:attention}Wild 4 {}in your {C:attention}full deck{}",
			"{C:inactive}(Currently {C:white,X:mult}X1{C:inactive} Mult)"
    ],
    image_url: "img/ForceOfNature.png",
    rarity: "Rare"
  },
  {
    name: "Multitasking",
    text: [
			"{C:mult}+5 {}Mult on {C:attention}even{} hands",
			"{C:chips}+60 {}Chips on {C:attention}odd{} hands",
			"{C:gold}$2{} on {C:attention}final{} hand of round"
    ],
    image_url: "img/Multitasking.png",
    rarity: "Common"
  },
  {
    name: "The Toilet",
    text: [
			"{C:green,E:1}1 in 3{} chance to upgrade level",
			"of {C:attention}poker hand {}containing {C:attention}Flush{}"
    ],
    image_url: "img/TheToilet.png",
    rarity: "Common"
  },
  {
    name: "Magic Hat",
    text: [
			"Blue and purple {C:attention}seals {}",
			"can activate when played"
    ],
    image_url: "img/MagicHat.png",
    rarity: "Common"
  },
  {
    name: "Phalanx",
    text: [
			"The {C:attention}card {}with highest frequency",
			"in your entire deck can",
			"no longer be {C:attention}debuffed{}"
    ],
    image_url: "img/Phalanx.png",
    rarity: "Uncommon"
  },
  {
    name: "Betrayal",
    text: [
			"When {C:attention}Blind {}is selected, earn",
			"{C:money}$20 {}and {C:red}destroy {}a random Joker"
    ],
    image_url: "img/Betrayal.png",
    rarity: "Uncommon"
  },
  {
    name: "The Landlords",
    text: [
			"{C:white,X:mult}X4{} Mult if played hand",
			"contains a {C:attention}Full House{}"
    ],
    image_url: "img/TheLandlords.png",
    rarity: "Rare"
  },
  {
    name: "Recursive Joker",
    text: [
			"{C:mult}+5 {}Mult per hand played",
			"{C:mult}-25 {}Mult after defeating {C:attention}Boss Blind{}",
			"{C:inactive}(Currently {C:mult}+0{C:inactive} Mult)"
    ],
    image_url: "img/RecursiveJoker.png",
    rarity: "Uncommon"
  },
  {
    name: "Butterfly Effect",
    text: [
			"{C:attention}Wild Cards{} have the ",
			"additional effect of {C:attention}Lucky Cards{}",
			"Enhancement changes at ",
			"the end of each round"
    ],
    image_url: "img/ButterflyEffect.png",
    rarity: "Uncommon"
  },
  {
    name: "How Hungry",
    text: [
			"If hand contains both a",
			"scoring {C:attention}7 {}and {C:attention}9{},",
			"destroy all scoring {C:attention}9s{} and earn {C:money}$5{}"
    ],
    image_url: "img/HowHungry.png",
    rarity: "Uncommon"
  },
  {
    name: "The Legend of Jimbo",
    text: [
			"This Joker gains {C:white,X:mult}X10{} Mult",
			"for each {E:2,T:j_joker}Jimbo {}in your Joker slots",
			"{C:inactive}(Currently {C:white,X:mult}X1{C:inactive} Mult)"
    ],
    image_url: "img/TheLegendOfJimbo.png",
    rarity: "Rare"
  },
]

// works the same. 
let consumables = [
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Tarot"
  // },
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Planet"
  // },
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Spectral"
  // },
]

let card_modifications = [
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Enhancement"
  // },
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Edition"
  // },
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/sticker_example.png",
  //   rarity: "Seal"
  // },
]

let decks = [
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Deck"
  // },
]

let stickers = [
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/sticker_example.png",
  //   rarity: "Sticker"
  // },
]

let blinds = [
  // {
  //   name: "The Wall",
  //   text: [
  //     "Extra large blind",
  //     "{C:inactive}({C:red}4x{C:inactive} Base for {C:attention}$$$$${C:inactive})",
  //     "{C:inactive}(Appears from Ante 2)"
  //   ],
  //   image_url: "img/the_wall.png",
  //   rarity: "Boss Blind"
  // },
  // {
  //   name: "Violet Vessel",
  //   text: [
  //     "Very large blind",
  //     "{C:inactive}({C:red}6x{C:inactive} Base for {C:attention}$$$$$$$${C:inactive})",
  //     "{C:inactive}(Appears from Ante 8)"
  //   ],
  //   image_url: "img/violet_vessel.png",
  //   rarity: "Showdown"
  // },
]

let shop_items = [
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Voucher"
  // },
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Pack"
  // },
]

let cols = {
  
  MULT: "#FE5F55",
  CHIPS: "#009dff",
  MONEY: "#f3b958",
  XMULT: "#FE5F55",
  FILTER: "#ff9a00",
  ATTENTION: "#ff9a00",
  BLUE: "#009dff",
  RED: "#FE5F55",
  GREEN: "#4BC292",
  PALE_GREEN: "#56a887",
  ORANGE: "#fda200",
  IMPORTANT: "#ff9a00",
  GOLD: "#eac058",
  YELLOW: "#ffff00",
  CLEAR: "#00000000", 
  WHITE: "#ffffff",
  PURPLE: "#8867a5",
  BLACK: "#374244",
  L_BLACK: "#4f6367",
  GREY: "#5f7377",
  CHANCE: "#4BC292",
  JOKER_GREY: "#bfc7d5",
  VOUCHER: "#cb724c",
  BOOSTER: "#646eb7",
  EDITION: "#ffffff",
  DARK_EDITION: "#5d5dff",
  ETERNAL: "#c75985",
  INACTIVE: "#ffffff99",
  HEARTS: "#f03464",
  DIAMONDS: "#f06b3f",
  SPADES: "#403995",
  CLUBS: "#235955",
  ENHANCED: "#8389DD",
  JOKER: "#708b91",
  TAROT: "#a782d1",
  PLANET: "#13afce",
  SPECTRAL: "#4584fa",
  VOUCHER: "#fd682b",
  EDITION: "#4ca893",
}

let rarities = {
  "Common": "#009dff", 
  "Uncommon": "#4BC292",
  "Rare": "#fe5f55",
  "Legendary": "#b26cbb",
  "Joker": "#708b91",
  "Tarot": "#a782d1",
  "Planet": "#13afce",
  "Spectral": "#4584fa",
  "Voucher": "#fd682b",
  "Pack": "#9bb6bd",
  "Enhancement": "#8389DD",
  "Edition": "#4ca893",
  "Seal": "#4584fa",
  "Deck": "#9bb6bd",
  "Sticker": "#5d5dff",
  "Boss Blind": "#5d5dff",
  "Showdown": "#4584fa",
}

regex = /{([^}]+)}/g;

let add_cards_to_div = (jokers, jokers_div) => {
  for (let joker of jokers) {
    console.log("adding joker", joker.name);
  
    joker.text = joker.text.map((line) => { return line + "{}"});
  
    joker.text = joker.text.join("<br/>");
    joker.text = joker.text.replaceAll("{}", "</span>");
    joker.text = joker.text.replace(regex, function replacer(match, p1, offset, string, groups) {
      let classes = p1.split(",");
  
      let css_styling = "";
  
      for (let i = 0; i < classes.length; i++) {
        let parts = classes[i].split(":");
        if (parts[0] === "C") {
          css_styling += `color: ${cols[parts[1].toUpperCase()]};`;
        } else if (parts[0] === "X") {
          css_styling += `background-color: ${cols[parts[1].toUpperCase()]}; border-radius: 5px; padding: 0 5px;`;
        }
      }
  
      return `</span><span style='${css_styling}'>`;
    });
  
    let joker_div = document.createElement("div");
    joker_div.classList.add("joker");
    if (joker.rarity === "Sticker" || joker.rarity == "Seal") {
      joker_div.innerHTML = `
        <h3>${joker.name}</h3>
        <img src="${joker.image_url}" alt="${joker.name}" class="hasback" />
        <h4 class="rarity" style="background-color: ${rarities[joker.rarity]}">${joker.rarity}</h4>
        <div class="text">${joker.text}</div>
      `;
    } else if (joker.soul) {
      joker_div.innerHTML = `
        <h3>${joker.name}</h3>
        <span class="soulholder">
          <img src="${joker.image_url}" alt="${joker.name}" class="soul-bg" />
          <img src="${joker.image_url}" alt="${joker.name}" class="soul-top" />
        </span>
        <h4 class="rarity" style="background-color: ${rarities[joker.rarity]}">${joker.rarity}</h4>
        <div class="text">${joker.text}</div>
      `;
    } else {
      joker_div.innerHTML = `
        <h3>${joker.name}</h3>
        <img src="${joker.image_url}" alt="${joker.name}" />
        <h4 class="rarity" style="background-color: ${rarities[joker.rarity]}">${joker.rarity}</h4>
        <div class="text">${joker.text}</div>
      `;
    }
  
    jokers_div.appendChild(joker_div);
  }
}

if (jokers.length === 0) {
  document.querySelector(".jokersfull").style.display = "none"
} else {
  let jokers_div = document.querySelector(".jokers");
  add_cards_to_div(jokers, jokers_div);
}

if (consumables.length === 0) {
  document.querySelector(".consumablesfull").style.display = "none"
} else {
  let consumables_div = document.querySelector(".consumables");
  add_cards_to_div(consumables, consumables_div);
}

if (card_modifications.length === 0) {
  document.querySelector(".cardmodsfull").style.display = "none"
} else {
  let cardmods_div = document.querySelector(".cardmods");
  add_cards_to_div(card_modifications, cardmods_div);
}

if (decks.length === 0) {
  document.querySelector(".decksfull").style.display = "none"
} else {
  let decks_div = document.querySelector(".decks");
  add_cards_to_div(decks, decks_div);
}

if (stickers.length === 0) {
  document.querySelector(".stickersfull").style.display = "none"
} else {
  let stickers_div = document.querySelector(".stickers");
  add_cards_to_div(stickers, stickers_div);
}

if (blinds.length === 0) {
  document.querySelector(".blindsfull").style.display = "none"
} else {
  let blinds_div = document.querySelector(".blinds");
  add_cards_to_div(blinds, blinds_div);
}

if (shop_items.length === 0) {
  document.querySelector(".shopitemsfull").style.display = "none"
} else {
  let shopitems_div = document.querySelector(".shopitems");
  add_cards_to_div(shop_items, shopitems_div);
}