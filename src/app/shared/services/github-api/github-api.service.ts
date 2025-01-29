import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, finalize, map, Observable } from 'rxjs';

import {
  GetRepositoriesByNameResponse,
  GetRepositoriesByNameResponseItem,
} from '@features/repository-search/interfaces/repository.interface';

export const ITEMS_PER_PAGE = 50;

@Injectable()
export class GithubApiService {
  private readonly loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  get isLoading(): Observable<boolean> {
    return this.loading$.asObservable();
  }

  public getRepositoriesByName(name: string): Observable<GetRepositoriesByNameResponseItem[]> {
    const url = `https://api.github.com/search/repositories?q=${name}&per_page=${ITEMS_PER_PAGE}`;

    return this.callApi<GetRepositoriesByNameResponse>(url).pipe(map(response => response.items ?? []));
  }

  private callApi<T>(url: string) {
    this.setLoadingState(true);

    return this.http.get<T>(url).pipe(finalize(() => this.setLoadingState(false)));
  }

  private setLoadingState(isLoading: boolean) {
    this.loading$.next(isLoading);
  }
}
