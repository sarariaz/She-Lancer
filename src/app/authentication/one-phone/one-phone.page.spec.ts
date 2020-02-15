import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OnePhonePage } from './one-phone.page';

describe('OnePhonePage', () => {
  let component: OnePhonePage;
  let fixture: ComponentFixture<OnePhonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnePhonePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OnePhonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
