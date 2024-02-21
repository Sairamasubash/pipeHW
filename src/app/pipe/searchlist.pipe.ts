import { Pipe, PipeTransform } from '@angular/core';
import { Information } from '../app.component';

@Pipe({
  name: 'searchlist'
})
export class SearchlistPipe implements PipeTransform {

  transform(allInfo: Information [], inputSearch: string): Information [] 
  {
    if (!inputSearch || !allInfo) { return allInfo; }

    inputSearch = inputSearch.toLowerCase();

    return allInfo.filter(info => info.firstName.toLowerCase().includes(inputSearch) || info.lastName.toLowerCase().includes(inputSearch) 
    );
  }
}
