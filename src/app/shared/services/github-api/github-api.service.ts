import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, finalize, map, Observable } from 'rxjs';

import {
  GetRepositoriesByNameResponse,
  GetRepositoriesByNameResponseItem,
  GetRepositoryIssuesResponse,
  GetRepositoryIssuesResponseItem,
  GetRepositoryResponse,
} from '@shared/interfaces/repository.interface';

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

  public getRepositoryIssues(owner: string, repo: string): Observable<GetRepositoryIssuesResponseItem[]> {
    const url = `https://api.github.com/repos/${owner}/${repo}/issues?&per_page=${ITEMS_PER_PAGE}`;

    return this.callApi<GetRepositoryIssuesResponse>(url);
  }

  public getRepository(owner: string, repo: string): Observable<GetRepositoryResponse> {
    const url = `https://api.github.com/repos/${owner}/${repo}`;

    return this.callApi<GetRepositoryResponse>(url);
  }

  private callApi<T>(url: string) {
    this.setLoadingState(true);

    return this.http.get<T>(url).pipe(finalize(() => this.setLoadingState(false)));
  }

  private setLoadingState(isLoading: boolean) {
    this.loading$.next(isLoading);
  }
}
