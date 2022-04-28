const TurboTogglerData = {
  averseLabelPl: ['K', 'O', 'N', 'T', 'A', 'K', 'T'],
  averseLabelEn: ['C', 'O', 'N', 'T', 'A', 'C', 'T'],
  reverseLabelPl: ['P', 'O', 'W', 'R', 'Ó', 'T'],
  reverseLabelEn: ['C', 'L', 'O', 'S', 'E'],
};

const LinksToContainersData = [
  {
    id: 'LinkToContainerIntro',
    destinationContainer: 'introContainer',
    labelPl: 'Start',
    labelEn: 'START',
  },
  {
    id: 'LinkToContainerAbout',
    destinationContainer: 'aboutContainer',
    labelPl: 'Ty & 77digits',
    labelEn: 'YOU & 77digits',
  },
];

const ContactResourcesData = {
  mainLinks: [
    { labelPL: 'telefon', labelEn: 'phone', number: '798905550' },
    { labelPL: 'e-mail', labelEn: 'e-mail', number: '77@77digits.com' },
  ],
  instagram: '',
};

export { TurboTogglerData, LinksToContainersData, ContactResourcesData };
