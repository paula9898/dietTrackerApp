import { Pipe, PipeTransform } from '@angular/core';
import { DictsStateService } from './shared/dicts/services/dicts-state.service';
import { Observable, map } from 'rxjs';

@Pipe({
  name: 'tagsPipe',
})
export class TagsPipePipe implements PipeTransform {
  transform(tags: string): string[] {
    console.log('Input Tags:', tags);
    if (!tags) {
      return [];
    }
    const result = tags.split(',').map((tag) => tag.trim());
    console.log('Output Result:', result);

    return ['bum'];
  }
}
