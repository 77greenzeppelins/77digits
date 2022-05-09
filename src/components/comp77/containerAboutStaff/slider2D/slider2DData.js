import { springConfigs } from '../../../../data/reactSpring';

const slideTransitionConfig = {
  from: { opacity: 0, display: 'none', scale: 1 },
  enter: { opacity: 1, display: 'flex', scale: 1 },
  leave: { opacity: 0, display: 'none', scale: 1 },
  //   delay: 300,
  // config: { duration: 400 },
  config: springConfigs.molasses,
};
const slideDelay = { enter: 400, leave: 200 };

// const slideTransitionConfig = {
//   from: { display: 'none' },
//   enter: { display: 'flex' },
//   leave: { display: 'none' },
//   delay: 400,
//   // config: { duration: 400 },
//   config: springConfigs.molasses,
// };

const slide1 = {
  headerPl: ['TY &', '77digits'],
  text1Pl:
    'Skoro dotarłeś do tego punktu i czytasz te słowa, to znaczy, że coś nas łączy! Zakładam, iż cenimy sobie podobne rozwiązania estetyczne, a od dostępnych współcześnie technologi oczekujemy naprawdę wiele. Nasze spotkania musi przynieś spektakularny rezultat.',
  text2Pl: 'Oto, co zrobimy:',

  headerEn: ['YOU &', '77digits'],
  text1En:
    'Skoro dotarłeś do tego punktu na mojej stronie, to znaczy, że coś nas łączy! Zakładam, iż cenimy sobie podobne rozwiązania estetyczne, a od dostępnych współcześnie technologi oczekujemy naprawdę dużo.',
  text2En: 'Nasze spotkania musi przynieś efekt.',
};

export { slideTransitionConfig, slideDelay, slide1 };
