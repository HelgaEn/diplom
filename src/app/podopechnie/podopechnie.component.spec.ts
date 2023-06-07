import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodopechnieComponent } from './podopechnie.component';

describe('PodopechnieComponent', () => {
  let component: PodopechnieComponent;
  let fixture: ComponentFixture<PodopechnieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PodopechnieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PodopechnieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
