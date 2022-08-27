import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalaryGalaxyComponent } from './galary-galaxy.component';

describe('GalaryGalaxyComponent', () => {
  let component: GalaryGalaxyComponent;
  let fixture: ComponentFixture<GalaryGalaxyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalaryGalaxyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalaryGalaxyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
