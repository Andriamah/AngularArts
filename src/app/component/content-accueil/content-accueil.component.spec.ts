import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentAccueilComponent } from './content-accueil.component';

describe('ContentAccueilComponent', () => {
  let component: ContentAccueilComponent;
  let fixture: ComponentFixture<ContentAccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentAccueilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
