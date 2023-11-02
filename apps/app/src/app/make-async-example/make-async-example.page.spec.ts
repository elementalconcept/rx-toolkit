import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MakeAsyncExamplePage } from './make-async-example.page';

describe('MakeAsyncExamplePage', () => {
  let component: MakeAsyncExamplePage;
  let fixture: ComponentFixture<MakeAsyncExamplePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MakeAsyncExamplePage ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MakeAsyncExamplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
