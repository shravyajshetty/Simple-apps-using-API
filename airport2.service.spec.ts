import { TestBed } from '@angular/core/testing';

import { Airport2Service } from './airport2.service';

describe('Airport2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Airport2Service = TestBed.get(Airport2Service);
    expect(service).toBeTruthy();
  });
});
