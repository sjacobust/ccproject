import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyNewsComponent } from './verify-news.component';

describe('VerifyNewsComponent', () => {
  let component: VerifyNewsComponent;
  let fixture: ComponentFixture<VerifyNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
