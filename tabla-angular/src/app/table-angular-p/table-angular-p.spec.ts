import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAngularP } from './table-angular-p';

describe('TableAngularP', () => {
  let component: TableAngularP;
  let fixture: ComponentFixture<TableAngularP>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableAngularP]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableAngularP);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
