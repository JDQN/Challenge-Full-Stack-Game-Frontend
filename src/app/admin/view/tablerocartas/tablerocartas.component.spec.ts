import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablerocartasComponent } from './tablerocartas.component';

describe('TablerocartasComponent', () => {
  let component: TablerocartasComponent;
  let fixture: ComponentFixture<TablerocartasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablerocartasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablerocartasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
