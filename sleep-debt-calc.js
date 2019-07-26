const getSleepHours = (day) => {
  let formattedDay = day.toLowerCase()
  switch (day) {
    case 'monday':
      return 8
      break;
    case 'tuesday':
      return 6;
      break;
    case 'wednesday':
      return 6;
      break;
    case 'thursday':
      return 7;
      break;
    case 'friday':
      return 8;
      break;
    case 'saturday':
      return 6;
      break;
    case 'sunday':
      return 8;
      break;
  }
}

function getActualSleepHours() {
  let week = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
  let actualHours = 0

  for (let i = 0; i < week.length; i++) {
    const day = week[i];
    actualHours = actualHours + getSleepHours(day)
  }

  return actualHours
}

const idealHours = () => idealSleep = 8 * 7;

const calculateSleepDebt = () => {
  let actualSleep = getActualSleepHours();
  let idealSleep = idealHours();

  if (actualSleep > idealSleep) {
    return `Good for you! You got ${actualSleep - idealSleep} more hours of sleep that you need!`;
  } else if (actualSleep == idealSleep) {
    return 'You\'re spot on!';
  } else {
    return `Try to get more sleep! You really need ${idealSleep - actualSleep} more hours.`
  }
}