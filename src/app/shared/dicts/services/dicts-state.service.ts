import { Injectable } from '@angular/core';
import { DictService } from './dict.service';
import { BehaviorSubject } from 'rxjs';
import { TagResponse } from '../models/tag.model';

@Injectable({
  providedIn: 'root',
})
export class DictsStateService {
  private _tagsResponse$ = new BehaviorSubject<TagResponse>({
    data: [],
    length: 0,
  });
  get tagsResponse$() {
    return this._tagsResponse$.asObservable();
  }
  error$ = new BehaviorSubject<any>(null);

  constructor(private dictService: DictService) {}

  getTags(): void {
    this.dictService.getTagsDicts().subscribe({
      next: (value) => {
        this._tagsResponse$.next(value);
      },
      error: (error) => {
        this.error$.next(error);
      },
    });
  }
}
