import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayPhotoComponent } from './day-photo.component';

describe('DayPhotoComponent', () => {
  let component: DayPhotoComponent;
  let fixture: ComponentFixture<DayPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayPhotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
