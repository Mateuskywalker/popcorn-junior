import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'FilterByName'})
export class FilterByName implements PipeTransform {

    transform(imgs: any[], queryFilter: string) {

        queryFilter = queryFilter.trim().toLowerCase();
        if (queryFilter) {
            return imgs.filter(img => img.title.toLocaleLowerCase().trim().includes(queryFilter));
        } else {
            return imgs;
        }
    }
}
