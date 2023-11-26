import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisisdedatosComponent } from './analisisdedatos.component';

describe('AnalisisdedatosComponent', () => {
  let component: AnalisisdedatosComponent;
  let fixture: ComponentFixture<AnalisisdedatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnalisisdedatosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnalisisdedatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
