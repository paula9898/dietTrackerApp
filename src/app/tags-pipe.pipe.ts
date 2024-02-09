import { Pipe, PipeTransform } from '@angular/core';
import { DictsStateService } from './shared/dicts/services/dicts-state.service';
import { Observable, map } from 'rxjs';
import { TagResponse } from './shared/dicts/models/tag.model';
import { Tag } from './shared/dicts/models/tag.model';
@Pipe({
  name: 'tagsPipe',
})
export class TagsPipePipe implements PipeTransform {
  tagsArray: any[] = [];
  tags$ = this.dictsStateService.tags$;
  constructor(private dictsStateService: DictsStateService) {}

  transform(tags: string): number[] {
    console.log('Input Tags:', tags);
    if (!tags) {
      return [];
    }
    const result = tags.split(',').map((tag) => +tag.trim());

    console.log('Output Result:', result);

    return result;
  }
}
