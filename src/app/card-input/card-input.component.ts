import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-card-input',
  templateUrl: './card-input.component.html',
  styleUrls: ['./card-input.component.css']
})
export class CardInputComponent implements OnInit {
@Input() data: {
    name: string;
    company: string;
    phone: string;
    address: string;
    picture: string;
    age: number;
    
  

};


  // constructor() { }

  ngOnInit(): void {
  }

}
