import { Pipe, PipeTransform } from '@angular/core';
import { Submission } from '../../core/contactSubmission/icontact-submission';

@Pipe({
  name: 'listFilter'
})
export class ListFilterPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  transform(items: Submission[], searchText: string): Submission[] {
    if (!items || !searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter(item =>
      item.name.toLowerCase().includes(searchText) ||
      item.email.toLowerCase().includes(searchText) ||
      item.mobile.toLowerCase().includes(searchText) ||
      item.company.toLowerCase().includes(searchText) ||
      new Date(item.dateReceived).toLocaleDateString('en-US').toLowerCase().includes(searchText))

}
}