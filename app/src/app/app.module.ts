import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatListModule } from '@angular/material/list'; // 追加
import { MatButtonModule } from '@angular/material/button'; // 追加
import { MatInputModule } from '@angular/material/input'; // 追加
import { MatToolbarModule } from '@angular/material/toolbar'; // 追加
import { MatDividerModule } from '@angular/material/divider'; // 追加
import { MatCardModule } from '@angular/material/card'; // 追加
import { MatIconModule } from '@angular/material/icon'; // 追加

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AgePipe } from './pipes/age.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DeleteDialogComponent,
    AgePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule, // 追加
    MatInputModule, // 追加
    MatToolbarModule, // 追加
    MatDividerModule, // 追加
    MatCardModule, // 追加
    MatIconModule, // 追加
    MatListModule, // 追加
    MatTableModule,
    MatPaginatorModule,
    MatDatepickerModule,
    // MatNativeDateModule,
    MatMomentDateModule,
    MatDialogModule,
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'ja-JP'},],
  bootstrap: [AppComponent]
})
export class AppModule { }
