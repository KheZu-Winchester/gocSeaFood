import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrabsExportsComponent } from './crabs-exports.component';

describe('CrabsExportsComponent', () => {
  let component: CrabsExportsComponent;
  let fixture: ComponentFixture<CrabsExportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrabsExportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrabsExportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
