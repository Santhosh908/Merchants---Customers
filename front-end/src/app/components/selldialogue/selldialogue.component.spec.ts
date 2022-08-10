import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelldialogueComponent } from './selldialogue.component';

describe('SelldialogueComponent', () => {
  let component: SelldialogueComponent;
  let fixture: ComponentFixture<SelldialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelldialogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelldialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
