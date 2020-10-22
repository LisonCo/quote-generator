// Première étape

// class HaikuCreator {
//   constructor(firstArray, secondArray, thirdArray) {
//     this.firstArray = firstArray;
//     this.secondArray = secondArray;
//     this.thirdArray = thirdArray;
//   }

//   createHaiku() {
//     let firstPart = this.firstArray[
//       Math.floor(Math.random() * this.firstArray.length)
//     ];

//     let secondPart = this.secondArray[
//       Math.floor(Math.random() * this.secondArray.length)
//     ];

//     let thirdPart = this.thirdArray[
//       Math.floor(Math.random() * this.thirdArray.length)
//     ];

//     let fullSentence = firstPart.concat(" ", secondPart, " ", thirdPart);

//     return fullSentence;
//   }
// }

// let oneHaiku = new HaikuCreator(
//   [
//     "Au soleil levant,",
//     "A la nuit tombée,",
//     "Au petit matin,",
//     "Au levée du jour,",
//     "Aux dernières lueurs,",
//   ],
//   [
//     "les feuilles mortes dansent",
//     "l’alouette chante gaiment",
//     "la libellule virevolte",
//     "le vent se lève",
//     "la rosée se dépose",
//   ],
//   [
//     "sur la rivière calme.",
//     "dans le champs de blé.",
//     "dans la verte forêt.",
//     "sous l'arbre doré",
//     "sur le lac brillant",
//   ]
// ).createHaiku();

// console.log(oneHaiku);

// Deuxième étape

class HaikuCreator {
  firstArrayTypeOne = [
    "Au soleil levant,",
    "A la nuit tombée,",
    "Au petit matin,",
    "Au levée du jour,",
    "Aux dernières lueurs,",
  ];
  secondArrayTypeOne = [
    "les feuilles mortes dansent",
    "l’alouette chante gaiment",
    "la libellule virevolte",
    "le vent se lève",
    "la rosée se dépose",
  ];
  thirdArrayTypeOne = [
    "sur la rivière calme.",
    "dans le champs de blé.",
    "dans la verte forêt.",
    "sous l'arbre doré",
    "sur le lac brillant",
  ];

  firstArrayTypeTwo = ["1", "2", "3", "4"];
  secondArrayTypeTwo = ["a", "b", "c", "d"];
  thirdArrayTypeTwo = ["truc", "muche", "bidule", "chouette"];

  constructor(quoteType, quoteNumber) {
    this.quoteType = quoteType;
    this.quoteNumber = quoteNumber;
  }

  createOneHaiku() {
    let response;

    if ((this.quoteType === "1")) {
      let firstPart = this.firstArrayTypeOne[
        Math.floor(Math.random() * this.firstArrayTypeOne.length)
      ];

      let secondPart = this.secondArrayTypeOne[
        Math.floor(Math.random() * this.secondArrayTypeOne.length)
      ];

      let thirdPart = this.thirdArrayTypeOne[
        Math.floor(Math.random() * this.thirdArrayTypeOne.length)
      ];

      let fullSentence = firstPart.concat(" ", secondPart, " ", thirdPart);

      response = fullSentence;
    } else {
      let firstPart = this.firstArrayTypeTwo[
        Math.floor(Math.random() * this.firstArrayTypeTwo.length)
      ];

      let secondPart = this.secondArrayTypeTwo[
        Math.floor(Math.random() * this.secondArrayTypeTwo.length)
      ];

      let thirdPart = this.thirdArrayTypeTwo[
        Math.floor(Math.random() * this.thirdArrayTypeTwo.length)
      ];

      let fullSentence = firstPart.concat(" ", secondPart, " ", thirdPart);

      response = fullSentence;
    }

    console.log(response);
    return response;
  }

  generateQuotes() {
    for (let i = 0; i < this.quoteNumber; i++) {
      this.createOneHaiku();
    }
  }
}

let oneResponse = new HaikuCreator("2", 5).generateQuotes();
