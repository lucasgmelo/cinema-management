export const createSessionObjects = (
  startDate: string,
  endDate: string,
  room1: string,
  time1: string,
  room2?: string,
  time2?: string
) => {
  const [arrStart, arrEnd] = convertDateStringToNumber(startDate, endDate);

  const startInDate = new Date(arrStart[2], arrStart[1], arrStart[0]);
  const endInDate = new Date(arrEnd[2], arrEnd[1], arrEnd[0]);

  const arrDates = createArrOfDates(startInDate, endInDate);

  return arrDates.reduce(
    (acc, current) => ({
      ...acc,
      [current]: addSessions(room1, time1, room2, time2),
    }),
    {}
  );
};

const convertDateStringToNumber = (startDate: string, endDate: string) => {
  const startDates = startDate.split('/');
  const startDatesNumber = startDates.map((date) => Number(date));
  startDatesNumber[1]--;

  const endDates = endDate.split('/');
  const endDatesNumber = endDates.map((date) => Number(date));
  endDatesNumber[1]--;

  return [startDatesNumber, endDatesNumber];
};

const createArrOfDates = (startDate: Date, endDate: Date) => {
  const arr = [startDate.toLocaleDateString()];

  let currentDate = startDate;

  while (currentDate.getTime() !== endDate.getTime()) {
    currentDate.setDate(currentDate.getDate() + 1);
    arr.push(currentDate.toLocaleDateString());
  }

  return arr;
};

const addSessions = (room1: string, hour1: string, room2?: string, time2?: string) => {
  const requiredSession = {
    room: room1,
    hour: hour1,
    available: true,
    seatsUnavailable: [],
  };

  if (room2 && time2) {
    const opcionalSession = {
      room: room1,
      hour: hour1,
      available: true,
      seatsUnavailable: [],
    };

    return [requiredSession, opcionalSession];
  } else return [requiredSession];
};

export const reverseDate = (date: string) => {
  return date.split('-').reverse().join('/');
};
