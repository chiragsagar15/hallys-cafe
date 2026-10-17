import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedFlavours } from './featured-flavours';

describe('FeaturedFlavours', () => {
  let component: FeaturedFlavours;
  let fixture: ComponentFixture<FeaturedFlavours>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedFlavours],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturedFlavours);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
