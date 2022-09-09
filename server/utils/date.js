export function GetNextDates(startDate, daysToAdd) {
  const arrDates = [];

  for (let i = 0; i <= daysToAdd; i++) {
    const currentDate = new Date();
    currentDate.setDate(startDate.getDate() + i);
    arrDates.push(DayAsString(currentDate.getDay()) + ", " + currentDate);
  }

  return arrDates;
}

function DayAsString(dayIndex) {
  const weekdays = new Array(7);
  weekdays[0] = "Sunday";
  weekdays[1] = "Monday";
  weekdays[2] = "Tuesday";
  weekdays[3] = "Wednesday";
  weekdays[4] = "Thursday";
  weekdays[5] = "Friday";
  weekdays[6] = "Saturday";

  return weekdays[dayIndex];
}
