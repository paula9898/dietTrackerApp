import { Pipe, PipeTransform } from '@angular/core';
import { DictsStateService } from './shared/dicts/services/dicts-state.service';
@Pipe({
  name: 'tagsPipe',
})
export class TagsPipe implements PipeTransform {
  tagsArray: any[] = [];
  tagsValue = this.dictsStateService.tagsValue;

  constructor(private dictsStateService: DictsStateService) {}

  transform(tags?: number[]): string[] {
    console.log('Input Tag:', tags);
    if (!tags) {
      return null;
    }

    console.log('Tagsvalue', this.tagsValue);
    return tags.map((tag) => {
      console.log(tag);
      return this.tagsValue.find((v) => v.id === tag).name;
    });

    // return this.tagsValue.find((v) => v.id === )?.name;
  }
}
