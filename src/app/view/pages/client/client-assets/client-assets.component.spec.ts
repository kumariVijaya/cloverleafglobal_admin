import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAssetsComponent } from './client-assets.component';

describe('ClientAssetsComponent', () => {
  let component: ClientAssetsComponent;
  let fixture: ComponentFixture<ClientAssetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientAssetsComponent]
    });
    fixture = TestBed.createComponent(ClientAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
