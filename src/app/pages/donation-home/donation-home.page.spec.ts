import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DonationHomePage } from './donation-home.page';

describe('DonationHomePage', () => {
  let component: DonationHomePage;
  let fixture: ComponentFixture<DonationHomePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
