import * as moment from 'moment';

export function hours(): Array<any> {
  const items = [];
  new Array(24).fill(null).forEach((acc, index) => {
    if (index >= 8 && index <= 20) {
      items.push(moment( {hour: index} ).format('HH:mm'));
      if (index !== 20) {
        items.push(moment({ hour: index, minute: 30 }).format('HH:mm'));
      }
    }

  });
  return items;
}
