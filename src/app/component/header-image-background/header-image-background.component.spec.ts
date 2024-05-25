import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderImageBackgroundComponent } from './header-image-background.component';

describe('HeaderImageBackgroundComponent', () => {
  let component: HeaderImageBackgroundComponent;
  let fixture: ComponentFixture<HeaderImageBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderImageBackgroundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderImageBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
