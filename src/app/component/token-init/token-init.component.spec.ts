import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenInitComponent } from './token-init.component';

describe('TokenInitComponent', () => {
  let component: TokenInitComponent;
  let fixture: ComponentFixture<TokenInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokenInitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
