/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Weekdays {
  Sunday ,
  Monday,
  Tuesday,
  Wensday,
  Thursday,
  Friday,
  Saturday
};


const isWeekend = (day: Weekdays): boolean => {
  return day === Weekdays.Sunday || day === Weekdays.Saturday ? true : false;
};

// function isWeekend(day: Weekdays): boolean {
//   if (day === Weekdays.Sunday || day === Weekdays.Saturday) {
//     return false;
//   };
//   return true;
// };