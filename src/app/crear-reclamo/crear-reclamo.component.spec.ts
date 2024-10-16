import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimComponent } from './crear-reclamo.component';

describe('CrearReclamoComponent', () => {
  let component: ClaimComponent;
  let fixture: ComponentFixture<ClaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClaimComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
