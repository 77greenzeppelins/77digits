const TurboTogglerData = {
  averseLabelPl: ['K', 'O', 'N', 'T', 'A', 'K', 'T'],
  reverseLabelPl: ['N', 'A', 'W', 'I', 'G', 'A', 'C', 'J', 'A'],
  averseLabelEn: ['C', 'O', 'N', 'T', 'A', 'C', 'T'],
  reverseLabelEn: ['N', 'A', 'V', 'I', 'G', 'A', 'T', 'I', 'O', 'N'],
};

const LinksToContainersData = [
  {
    id: 'LinkToContainerIntro',
    destinationContainer: 'introContainer',
    labelPl: 'START',
    labelEn: 'START',
  },
  {
    id: 'LinkToContainerAbout',
    destinationContainer: 'aboutContainer',
    labelPl: 'TY & 77digits',
    labelEn: 'YOU & 77digits',
  },
];

const ContactResourcesData = {
  mainLinks: [
    {
      id: 'link1',
      labelPL: 'TELEFON',
      labelEn: 'PHONE',
      resource: '798905550',
    },
    {
      id: 'link2',
      labelPL: 'EMAIL',
      labelEn: 'EMAIL',
      resource: '77@77digits.com',
    },
  ],
  instagram: '',
};

export { TurboTogglerData, LinksToContainersData, ContactResourcesData };
