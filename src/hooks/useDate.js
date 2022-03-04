const useDate = () => {
  //_____ver1
  let dayNumber = new Date().getDate();
  let today = new Date().getDay();
  let dzisiaj = new Date().getDay();
  let month = new Date().getMonth();
  let year = new Date().getFullYear();
  //   if (today === 0) {
  //     today = 'niedziela';
  //   }
  //   if (today === 1) {
  //     today = 'poniedziałek';
  //   }
  //   if (today === 2) {
  //     today = 'wtorek';
  //   }
  //   if (today === 3) {
  //     today = 'środa';
  //   }
  //   if (today === 4) {
  //     today = 'czwartek';
  //   }
  //   if (today === 5) {
  //     today = 'piątek';
  //   }
  //   if (today === 6) {
  //     today = 'sobota';
  //   }

  //_____ver2
  switch (month) {
    case 0:
      month = 'stycznia';
      break;
    case 1:
      month = 'lutego';
      break;
    case 2:
      month = 'marca';
      break;
    case 3:
      month = 'kwietnia';
      break;
    case 4:
      month = 'maja';
      break;
    case 5:
      month = 'czerwca';
      break;
    case 6:
      month = 'lipca';
      break;
    case 7:
      month = 'sierpnia';
      break;
    case 8:
      month = 'września';
      break;
    case 9:
      month = 'października';
      break;
    case 10:
      month = 'listopada';
      break;
    case 11:
      month = 'grudnia';
      break;
    default:
      console.log('I love web development');
  }

  switch (dzisiaj) {
    case 0:
      dzisiaj = 'niedziela';
      break;
    case 1:
      dzisiaj = 'poniedziałek';
      break;
    case 2:
      dzisiaj = 'wtorek';
      break;
    case 3:
      dzisiaj = 'środa';
      break;
    case 4:
      dzisiaj = 'czwartek';
      break;
    case 5:
      dzisiaj = 'piątek';
      break;
    case 6:
      dzisiaj = 'sobota';
      break;
    default:
      console.log('I love web development');
  }

  switch (today) {
    case 0:
      today = 'Sunday';
      break;
    case 1:
      today = 'Monday';
      break;
    case 2:
      today = 'Tuesday';
      break;
    case 3:
      today = 'Wednesday';
      break;
    case 4:
      today = 'Thursday';
      break;
    case 5:
      today = 'Friday';
      break;
    case 6:
      today = 'Saturday';
      break;
    default:
      console.log('I love web development');
  }

  return { today, dzisiaj, dayNumber, month, year };
};
export default useDate;
