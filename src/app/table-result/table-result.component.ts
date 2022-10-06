import { Component, Input, OnInit } from '@angular/core';
import { Results } from '../models/results';

@Component({
  selector: 'app-table-result',
  templateUrl: './table-result.component.html',
  styleUrls: ['./table-result.component.scss']
})
export class TableResultComponent implements OnInit {

  @Input() listResult!: Results[];
  constructor() { }

  ngOnInit(): void {
  }

}
