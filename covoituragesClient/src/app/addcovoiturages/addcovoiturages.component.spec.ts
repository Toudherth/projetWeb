import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcovoituragesComponent } from './addcovoiturages.component';

describe('AddcovoituragesComponent', () => {
  let component: AddcovoituragesComponent;
  let fixture: ComponentFixture<AddcovoituragesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcovoituragesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcovoituragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
