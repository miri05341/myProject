import { Component, OnInit } from '@angular/core';
import { GetPersonService } from '../services/get-person.service';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})
export class InstructionsComponent implements OnInit {

  userName: string =''

  constructor(private getPersonService: GetPersonService) {
    
  }
  ngOnInit(): void {
  
  const person = this.getPersonService.getPerson();
    if (person && person.firstName && person.lastName)
      this.userName = `${person.firstName} ${person.lastName} שלום`
    else
      this.userName = "שלום"
  }
}


