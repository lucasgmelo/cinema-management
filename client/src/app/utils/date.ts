export function GetNextDates(startDate: Date, daysToAdd: number) {
  const arrDates = [];

  for (let i = 0; i <= daysToAdd; i++) {
    const currentDate = new Date();
    currentDate.setDate(startDate.getDate() + i);
    arrDates.push(DayAsString(currentDate.getDay()) + ', ' + currentDate);
  }

  return arrDates;
}

function DayAsString(dayIndex: number) {
  const weekdays = new Array(7);
  weekdays[0] = 'Segunda';
  weekdays[1] = 'Terça';
  weekdays[2] = 'Quarta';
  weekdays[3] = 'Quinta';
  weekdays[4] = 'Sexta';
  weekdays[5] = 'Sábado';
  weekdays[6] = 'Domingo';

  return weekdays[dayIndex];
}
