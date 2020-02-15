import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostrequestPage } from './postrequest.page';

describe('PostrequestPage', () => {
  let component: PostrequestPage;
  let fixture: ComponentFixture<PostrequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostrequestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostrequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
