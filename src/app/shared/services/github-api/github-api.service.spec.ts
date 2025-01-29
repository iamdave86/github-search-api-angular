import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';

import { GithubApiService, ITEMS_PER_PAGE } from './github-api.service';
import { GetRepositoriesByNameResponseItem } from '@features/repository-search/interfaces/repository.interface';

describe('GithubApiService', () => {
  let service: GithubApiService;
  let mockHttp: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubApiService, provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(GithubApiService);
    mockHttp = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    mockHttp.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getRepositoriesByName and return data', () => {
    const mockResponse = {
      total_count: 0,
      incomplete_results: false,
      items: [],
    };
    const repoName = 'test-repo';

    service.getRepositoriesByName(repoName).subscribe(response => {
      expect(response).toEqual(mockResponse.items);
    });

    const req = mockHttp.expectOne(
      `https://api.github.com/search/repositories?q=${repoName}&per_page=${ITEMS_PER_PAGE}`,
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should update loading state correctly', () => {
    const repoName = 'test-repo';

    let loadingState: boolean | undefined;
    service.isLoading.subscribe(state => (loadingState = state));

    service.getRepositoriesByName(repoName).subscribe();
    expect(loadingState).toBeTrue();

    const req = mockHttp.expectOne(
      `https://api.github.com/search/repositories?q=${repoName}&per_page=${ITEMS_PER_PAGE}`,
    );
    req.flush({});
    expect(loadingState).toBeFalse();
  });
});
