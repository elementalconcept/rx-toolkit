import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MakeAsyncWithCacheExamplePage } from './make-async-with-cache-example.page';

describe('MakeAsyncWithCacheExamplePage', () => {
  let component: MakeAsyncWithCacheExamplePage;
  let fixture: ComponentFixture<MakeAsyncWithCacheExamplePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MakeAsyncWithCacheExamplePage ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MakeAsyncWithCacheExamplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
