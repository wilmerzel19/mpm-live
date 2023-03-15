import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubnabarComponent } from './subnabar.component';

describe('SubnabarComponent', () => {
  let component: SubnabarComponent;
  let fixture: ComponentFixture<SubnabarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubnabarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubnabarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
