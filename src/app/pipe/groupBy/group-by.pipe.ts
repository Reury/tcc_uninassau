import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'groupBy',
})
export class GroupByPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: any[], field: string): any[] {
    if (value || value.length > 0) {
      const groupedObj = value.reduce((prev, cur) => {
        if (!prev[cur[field]]) {
          prev[cur[field]] = [cur];
        } else {
          prev[cur[field]].push(cur);
        }
        return prev;
      }, {});

      return Object.keys(groupedObj).map(key => ({ key, value: groupedObj[key] }));
    } else {
      return null;
    }
  }
}
