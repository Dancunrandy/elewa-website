import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElewaWebsitePriceItemCardComponent } from './elewa-website-price-item-card.component';

describe('ElewaWebsitePriceItemCardComponent', () => {
  let component: ElewaWebsitePriceItemCardComponent;
  let fixture: ComponentFixture<ElewaWebsitePriceItemCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElewaWebsitePriceItemCardComponent]
    });
    fixture = TestBed.createComponent(ElewaWebsitePriceItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
