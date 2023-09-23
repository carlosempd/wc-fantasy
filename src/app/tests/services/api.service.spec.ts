import { TestBed } from '@angular/core/testing';
import { ApiService } from '../../core/services/api.service';
import {
	HttpClientTestingModule,
	HttpTestingController
} from '@angular/common/http/testing';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';


describe('ApiService', () => {
  let service: ApiService;
	let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [ApiService]
		});
    service = TestBed.inject(ApiService);
		httpMock = TestBed.inject(HttpTestingController);
  });

	afterEach(() => {
    httpMock.verify();
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

	it('should make a GET request with the provided path, params, and headers', () => {
		// expect(httpClientMock.get).toHaveBeenCalledWith(path, { params, headers });
		const path = 'https://example.com/api';
    const params = new HttpParams().set('param1', 'value1');
    const headers = new HttpHeaders().set('Authorization', 'Bearer token');

    service.get(path, params, headers).subscribe();
		const req = httpMock.expectOne(req => {
      return req.url === path
				&& req.params.get('param1') === 'value1'
				&& req.headers.get('Authorization') === 'Bearer token';
    });
    expect(req.request.method).toBe('GET');
    expect(req.request.params).toBe(params);
    expect(req.request.headers).toBe(headers);

    req.flush({});
  });

	it('should return an Observable', () => {
    const path = 'https://example.com/api';
    const params = new HttpParams().set('param1', 'value1');
    const headers = new HttpHeaders().set('Authorization', 'Bearer token');

    const result = service.get(path, params, headers);

    expect(result).toBeInstanceOf(Observable);
  });
  
});
