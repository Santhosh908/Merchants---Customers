import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogproductComponent } from './dialogproduct.component';

describe('DialogproductComponent', () => {
  let component: DialogproductComponent;
  let fixture: ComponentFixture<DialogproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
