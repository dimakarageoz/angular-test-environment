import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteTestComponent } from './remote-test.component';

describe('RemoteTestComponent', () => {
  let component: RemoteTestComponent;
  let fixture: ComponentFixture<RemoteTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoteTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoteTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
