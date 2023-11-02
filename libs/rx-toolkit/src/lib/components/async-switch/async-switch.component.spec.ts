import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsyncSwitchComponent } from './async-switch.component';

describe('AsyncSwitchComponent', () => {
  let component: AsyncSwitchComponent;
  let fixture: ComponentFixture<AsyncSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AsyncSwitchComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AsyncSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
