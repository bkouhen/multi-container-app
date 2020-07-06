import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  seenIndexes = [];
  values = {};
  index = '';

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.fetchValues().subscribe((values) => {
      this.values = values;
    });
    this.appService.fetchIndexes().subscribe((indexes) => {
      this.seenIndexes.push(...indexes);
    })
  }

  onSubmit(index) {
    const data = {index : index};
    this.appService.submitIndex(data).subscribe(() => {
      console.log('successfully posted index');
      this.index = '';
    });
  }

  changeIndex(value) {
    this.index = value;
  }

  returnIndexes() {
    return this.seenIndexes.map(index => index.number).join(', ');
  }

  returnValues() {
    const entries = [];

    for (let key in this.values) {
      entries.push({key: key, value: this.values[key]})
    }

    return entries;
  }
}
