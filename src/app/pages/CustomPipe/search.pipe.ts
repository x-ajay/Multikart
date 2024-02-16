import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  
  transform(value: any[], filterString: string, property: string): any[] {
    const result: any[] = [];

    if (!value || filterString === '' || property === '') {
      return value;
    }

    value.forEach((a: any) => {
      const propertyValue = a[property];
      if (propertyValue && propertyValue.trim().toLowerCase().includes(filterString.toLowerCase())) {
        result.push(a);
      }
    });

    return result;
  }

}
