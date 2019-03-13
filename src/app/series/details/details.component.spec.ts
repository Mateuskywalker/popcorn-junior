import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesDetalhadasComponent } from './details.component';

xdescribe('SeriesDetalhadaComponent', () => {
  let component: SeriesDetalhadasComponent;
  let fixture: ComponentFixture<SeriesDetalhadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesDetalhadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesDetalhadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
