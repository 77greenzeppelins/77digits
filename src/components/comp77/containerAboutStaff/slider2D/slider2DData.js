import { springConfigs } from '../../../../data/reactSpring';

const slideTransitionConfig = {
  from: { opacity: 0, display: 'none', scale: 1 },
  enter: { opacity: 1, display: 'flex', scale: 1 },
  leave: { opacity: 0, display: 'none', scale: 1 },
  //   delay: 300,
  // config: { duration: 400 },
  config: springConfigs.default,
};
const slideDelay = { enter: 400, leave: 200 };

const slide1 = {
  headerPl: ['TY &', '77digits'],
  text1Pl:
    'Skoro dotarłeś do tego miejsca i czytasz te słowa, to znaczy, że coś nas łączy! Zakładam, iż cenimy sobie podobne rozwiązania estetyczne, a od dostępnych współcześnie technologi oczekujemy naprawdę wiele. Nasze spotkania musi przynieś spektakularny rezultat.',
  text2Pl: 'Oto, co zrobimy:',

  headerEn: ['YOU &', '77digits'],
  text1En:
    'Skoro dotarłeś do tego punktu na mojej stronie, to znaczy, że coś nas łączy! Zakładam, iż cenimy sobie podobne rozwiązania estetyczne, a od dostępnych współcześnie technologi oczekujemy naprawdę dużo.',
  text2En: 'Nasze spotkania musi przynieś efekt.',
};

const slide2 = {
  headerPl: ['TY', 'tu i teraz'],
  text1Pl:
    'Weźmiemy Twoje doświadczenie, pasję i wiedzę, czyli to, co z pewnością posiadasz i powiększasz każdego dnia. Oto twój trudny do przcenienia wkład w nasze przyszłe dzieło!',

  headerEn: ['YOUR', 'resources'],
  text1En:
    'Weźmiemy Twoje doświadczenie, pasję i wiedzę, czyli to, co z pewnością posiadasz i powiększasz każdego dnia. Oto twój trudny do przcenienia wkład w nasze przyszłe dzieło!',
};

const slide3 = {
  headerPl: ['77digits', 'w akcji'],
  text1Pl:
    '77digits to "jednoosobowy team", dla którego technologie internetowe oraz grafika (2D / 3D) to sposób na zbudowanie .... To szanasa na anonsowany wcześniej "odlot w internech".',

  headerEn: ['77digits', 'team'],
  text1En:
    '77digits to "jednoosobowy team", dla którego technologie internetowe oraz grafika (2D / 3D) to sposób na zbudowanie .... To szansa na anonsowany wcześniej "odlot w internech".',
};

export { slideTransitionConfig, slideDelay, slide1, slide2, slide3 };
