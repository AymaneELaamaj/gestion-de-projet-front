import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddusertoprojetComponent } from './addusertoprojet.component';

describe('AddusertoprojetComponent', () => {
  let component: AddusertoprojetComponent;
  let fixture: ComponentFixture<AddusertoprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddusertoprojetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddusertoprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
