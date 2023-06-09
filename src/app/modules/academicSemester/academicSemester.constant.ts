import {
  IAcademicSemesterCode,
  IAcademicSemesterTitle,
  IAcademicSemesterMonths,
} from './academicSemester.interface.';

export const academicSemesTitles: IAcademicSemesterTitle[] = [
  'Autumn',
  'Summer',
  'Fall',
];
export const academicSemesCodes: IAcademicSemesterCode[] = ['01', '02', '03'];

export const academicSemesterMonths: IAcademicSemesterMonths[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const academicSemesterTitleCodeMapper: {
  [key: string]: string;
} = {
  Autumn: '01',
  Summer: '02',
  Fall: '03',
};
