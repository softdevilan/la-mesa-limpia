import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrocesComponent } from './arroces.component';

describe('ArrocesComponent', () => {
  let component: ArrocesComponent;
  let fixture: ComponentFixture<ArrocesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrocesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrocesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
