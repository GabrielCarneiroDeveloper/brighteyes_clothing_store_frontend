import { formatDate } from '@angular/common';
import * as _ from 'lodash';

function dateFormatter(date: Date): string {
  return new Date(date).toLocaleDateString('pt-br');
}

function dateParser(date: Date | string): any {
  if (date instanceof Date) {
    return formatDate(date, 'yyyy-MM-dd', 'en');
  } else {
    const numbers = date.split('/');
    return new Date(`${numbers[1]}/${numbers[0]}/${numbers[2]}`);
  }
}

function parseFromISOToLocaleDate(dateIso: string) {
  if (new Date(dateIso).toLocaleDateString() === 'Invalid Date') {
    const reversedDateIso = dateIso.split('/');
    const date = new Date(
      Number(reversedDateIso[2]),
      Number(reversedDateIso[1]),
      Number(reversedDateIso[0])
    );
    const parsed = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    return parsed.toString();
  }
  return new Date(dateIso).toLocaleDateString();
}

export { dateFormatter, dateParser, parseFromISOToLocaleDate };
