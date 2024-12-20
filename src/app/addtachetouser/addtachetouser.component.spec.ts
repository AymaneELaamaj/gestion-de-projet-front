import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtachetouserComponent } from './addtachetouser.component';

describe('AddtachetouserComponent', () => {
  let component: AddtachetouserComponent;
  let fixture: ComponentFixture<AddtachetouserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddtachetouserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddtachetouserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
