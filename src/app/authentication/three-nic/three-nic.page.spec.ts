import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ThreeNicPage } from './three-nic.page';

describe('ThreeNicPage', () => {
  let component: ThreeNicPage;
  let fixture: ComponentFixture<ThreeNicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeNicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ThreeNicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
