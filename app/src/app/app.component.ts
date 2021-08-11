import {Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import { FormControl, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';

import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';


const ELEMENT_DATA = [
  {name: 'Hydrogen', birthDay: '2019年02月01日', age: '2'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  @ViewChild(MatPaginator) paginator: any;
  displayedColumns = ['名前', '誕生日', '年齢', 'ボタン'];
  elementData = ELEMENT_DATA;
  dataSource = new MatTableDataSource(this.elementData);
  profileForm = new FormGroup({
    name: new FormControl(''),
    birthDay: new FormControl(''),
    age: new FormControl(0),
  })

  constructor(public dialog: MatDialog, public datepipe: DatePipe) {}

  // viewの初期化時
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  pickerInput(){
    // 年齢を算出する
    let formData = this.profileForm.value;
    this.profileForm.patchValue({
      age: moment().diff(formData.birthDay, 'years'), 
    })
  }

  add(){
    let formData = this.profileForm.value;
    // YYYY-MM-DD形式に変換する
    // formData.birthDay = moment(formData.birthDay).format('YYYY-MM-DD');
    // datePipeで変換
    formData.birthDay = this.datepipe.transform(formData.birthDay, 'yyyy年MM月dd日');
    formData.age = `${formData.age}`;
    this.elementData.push(formData);
    // テーブル更新
    this.dataSource = new MatTableDataSource(this.elementData);
    this.dataSource.paginator = this.paginator;
  }

  delete(index: number){
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '200px',
    });

    // dialogが閉じた時
    dialogRef.afterClosed().subscribe(result => {
      if(!result) return;
      // 列の削除
      this.elementData.splice(index, 1);
      this.dataSource = new MatTableDataSource(this.elementData);
      this.dataSource.paginator = this.paginator;
    });
  }
}
