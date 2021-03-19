import { TestBed } from '@angular/core/testing';
import { ShipsService } from './ships.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ShipsService', () => {
  let service: ShipsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ShipsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
