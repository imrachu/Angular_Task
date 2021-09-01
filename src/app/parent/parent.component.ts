import { Component, OnInit } from '@angular/core';
import { InputService } from '../input-service.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  input1 = '';
  input2 = '';
  
  constructor(private service : InputService) { }

  ngOnInit(): void {
    this.input1 = this.service.input1;
    this.input2 = this.service.input2;
  }

}
