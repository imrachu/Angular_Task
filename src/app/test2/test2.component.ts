import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InputService } from '../input-service.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  input1 = '';
  input2 = '';


  constructor(private service : InputService, private router: Router) { }


  ngOnInit(): void {
  }

  onSubmit() {
    this.service.input1 = this.input1;
    this.service.input2 = this.input2;

    console.log(this.service.input1 + ' ' + this.service.input2);
    this.router.navigate(['parent']);
    
  }
}
