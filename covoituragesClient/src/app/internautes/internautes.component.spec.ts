import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternautesComponent } from './internautes.component';

describe('InternautesComponent', () => {
  let component: InternautesComponent;
  let fixture: ComponentFixture<InternautesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternautesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternautesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
