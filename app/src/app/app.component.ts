import {Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import * as moment from 'moment';


const ELEMENT_DATA = [
  {name: 'Hydrogen', birthDay: '2019-02-01', age: '2歳'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  displayedColumns = ['名前', '誕生日', '年齢', 'ボタン'];
  elementData = ELEMENT_DATA;
  dataSource = new MatTableDataSource(this.elementData);
  name = 'name';
  birthDay = '';
  age = 0;

  pickerInput(){
    // 年齢を算出する
    this.age = moment().diff(this.birthDay, 'years');
  }

  add(){
    // YYYY-MM-DD形式に変換する
    const outputDay = moment(this.birthDay).format('YYYY-MM-DD');
    const outputAge = `${this.age}歳`
    this.elementData.push({name: this.name, birthDay: outputDay, age: outputAge});
    // テーブル更新
    this.dataSource = new MatTableDataSource(this.elementData);
    this.dataSource.paginator = this.paginator;
  }

  delete(index: number){
    // 削除
    this.elementData.splice(index, 1);
    this.dataSource = new MatTableDataSource(this.elementData);
    this.dataSource.paginator = this.paginator;
  }

  @ViewChild(MatPaginator) paginator: any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
