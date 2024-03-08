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
  tagsValue = this.dictsStateService.tagsValue;
  constructor(private dictsStateService: DictsStateService) {}

  transform(tag: number): string {
    console.log('Input Tag:', tag);
    if (!tag) {
      return null;
    }
    console.log('Tags value:', this.tagsValue);

    return this.tagsValue.find((v) => v.id === tag)?.name;
  }
}
