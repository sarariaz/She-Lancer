import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TwoOtpPage } from './two-otp.page';

describe('TwoOtpPage', () => {
  let component: TwoOtpPage;
  let fixture: ComponentFixture<TwoOtpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoOtpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TwoOtpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
