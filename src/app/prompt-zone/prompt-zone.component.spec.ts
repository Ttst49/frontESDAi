import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptZoneComponent } from './prompt-zone.component';

describe('PromptZoneComponent', () => {
  let component: PromptZoneComponent;
  let fixture: ComponentFixture<PromptZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromptZoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PromptZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
