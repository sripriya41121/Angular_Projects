import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongslistComponent } from './songslist.component';

describe('SongslistComponent', () => {
  let component: SongslistComponent;
  let fixture: ComponentFixture<SongslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SongslistComponent]
    });
    fixture = TestBed.createComponent(SongslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
