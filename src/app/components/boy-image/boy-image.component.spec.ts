import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoyImageComponent } from './boy-image.component';

describe('BoyImageComponent', () => {
  let component: BoyImageComponent;
  let fixture: ComponentFixture<BoyImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoyImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoyImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
