import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryPrimeComponent } from './library-prime.component';

describe('LibraryPrimeComponent', () => {
  let component: LibraryPrimeComponent;
  let fixture: ComponentFixture<LibraryPrimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryPrimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryPrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
