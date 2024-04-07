import { Injectable } from '@angular/core';
import { DictService } from './dict.service';
import { BehaviorSubject, Subject } from 'rxjs';
import { Tag, TagResponse } from '../models/tag.model';

@Injectable({
  providedIn: 'root',
})
export class DictsStateService {
  private tags = new BehaviorSubject<Tag[]>(null);
  private _tagsResponse$ = new BehaviorSubject<TagResponse>({
    data: [],
    length: 0,
  });
  // get tagsResponse$() {
  //   return this._tagsResponse$.asObservable();
  // }
  error$ = new BehaviorSubject<any>(null);
  tags$ = this.tags.asObservable();
  get tagsValue() {
    return this.tags.getValue();
  }

  constructor(private dictService: DictService) {}

  getTags(): void {
    this.dictService.getTagsDicts().subscribe({
      next: (value) => {
        this.tags.next(value.data);
      },
      error: (error) => {
        this.error$.next(error);
      },
    });
  }
}
