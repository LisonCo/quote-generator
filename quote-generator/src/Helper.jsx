class QuotesPart {

  constructor(array) {
    this.array = array
  }
  random() {
    return this.array[Math.floor(Math.random() * this.array.length)]
  }
}

class QuotesGenerator {
  generate() {
    return ""
  }
}

class Type1Generator extends QuotesGenerator {
  firstArrayTypeOne = new QuotesPart([
    "Au soleil levant,",
    "A la nuit tombée,",
    "Au petit matin,",
    "Au levée du jour,",
    "Aux dernières lueurs,",
  ]);
  secondArrayTypeOne = new QuotesPart([
    "les feuilles mortes dansent",
    "l’alouette chante gaiment",
    "la libellule virevolte",
    "le vent se lève",
    "la rosée se dépose",
  ]);
  thirdArrayTypeOne = new QuotesPart([
    "sur la rivière calme.",
    "dans le champs de blé.",
    "dans la verte forêt.",
    "sous l'arbre doré.",
    "sur le lac brillant.",
  ]);

  generate() {
    return this.firstArrayTypeOne.random().concat(" ", this.secondArrayTypeOne.random(), " ", this.thirdArrayTypeOne.random());
  }
}

class Type2Generator extends QuotesGenerator {
  firstArrayTypeTwo = new QuotesPart(["Au gré du ressac,", "Au son des mouettes,", "Dans l'odeur des algues,", "En attendant la marée haute,"]);
  secondArrayTypeTwo = new QuotesPart(["le cormoran déploit ses ailes", "les enfants jouent", "le goéland virevolte"]);
  thirdArrayTypeTwo = new QuotesPart(["sur l'écume des vagues.", "sur le sable doux.", "dans la brise marine.", "à l'abri des dunes.", "au-dessus des coquillages."]);
  
  generate() {
    return this.firstArrayTypeTwo.random().concat(" ", this.secondArrayTypeTwo.random(), " ", this.thirdArrayTypeTwo.random());
  }
}

class HaikuCreator {

  constructor(quoteType, quoteNumber) {
    this.quoteType = quoteType;
    this.quoteNumber = quoteNumber;
    this.generators = [
      new Type1Generator(),
      new Type2Generator(),
    ]
  }

  createOneHaiku() {
    if (!this.generators[this.quoteType - 1]) return
    return this.generators[this.quoteType - 1].generate()
  }

  generateQuotes() {
    const quotes = [];
    for (let i = 0; i < this.quoteNumber; i++) {
      quotes.push(this.createOneHaiku())
    }
    console.log(quotes)
    return quotes
  }
}

export default HaikuCreator;