import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { ShipInfoDetailComponent } from './ship-info-detail.component';

describe('ShipInfoDetailComponent', () => {

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        ShipInfoDetailComponent,
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
      imports: [
        HttpClientTestingModule,
        MatDialogModule,
        MatTabsModule, FlexLayoutModule, MatCardModule, MatIconModule
      ]
    }).compileComponents();


  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(ShipInfoDetailComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
