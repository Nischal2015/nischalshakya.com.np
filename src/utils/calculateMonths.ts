import type { Month } from '../types';

const monthToNumber = {
  Jan: 1,
  Feb: 2,
  Mar: 3,
  Apr: 4,
  May: 5,
  Jun: 6,
  Jul: 7,
  Aug: 8,
  Sep: 9,
  Oct: 10,
  Nov: 11,
  Dec: 12,
};

const _resolveEndMonth = (
  endMonth: Month | undefined,
  endYear: string | undefined
) => {
  if (endMonth && endYear) {
    return +endYear * 12 + monthToNumber[endMonth];
  }

  const date = new Date();
  const currentMonth = date.getMonth() + 1;
  const currentYear = date.getFullYear();
  return currentYear * 12 + currentMonth;
};

const monthToYearAndMonths = (value: number) => {
  const year = Math.floor(value / 12);
  const month = value % 12;
  return { year, month };
};

export const calculateMonths = (
  startMonth: Month,
  startYear: string,
  endMonth: Month | undefined,
  endYear: string | undefined
) => {
  const startMonthNumber = monthToNumber[startMonth];
  const numberOfMonths =
    _resolveEndMonth(endMonth, endYear) -
    (+startYear * 12 + startMonthNumber) +
    1;

  const { year, month } = monthToYearAndMonths(numberOfMonths);

  if (year === 0) {
    return `${month} mos`;
  } else if (year === 1) {
    return `${year} yr ${month} mos`;
  } else {
    return `${year} yrs ${month} mos`;
  }
};
