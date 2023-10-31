import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RxToolkitComponent } from './rx-toolkit.component';

describe('RxToolkitComponent', () => {
  let component: RxToolkitComponent;
  let fixture: ComponentFixture<RxToolkitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RxToolkitComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(RxToolkitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
