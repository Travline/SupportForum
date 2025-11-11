import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootComment } from './root-comment';

describe('RootComment', () => {
  let component: RootComment;
  let fixture: ComponentFixture<RootComment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RootComment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RootComment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
