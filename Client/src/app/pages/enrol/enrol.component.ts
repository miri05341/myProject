import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HMO } from 'models';
import { tap } from 'rxjs/operators';
import { PersonHttpService } from 'services';
import { IdValidators } from 'src/app/validators/isrealyID';
import { GetPersonService } from '../services/get-person.service';
import { DownloadExcelService } from './services/download-excel.service';

@Component({
  selector: 'app-enrol',
  templateUrl: './enrol.component.html',
  styleUrls: ['./enrol.component.scss']
})
export class EnrolComponent implements OnInit {
  personKey = 'person';
  HMO = HMO;
  reset = false
  childList: any[] = []
  formGroup: FormGroup = new FormGroup({});
  kindOptions = ['זכר', 'נקבה'];
  mouseoverLogin: boolean = false
  constructor(private formBuilder: FormBuilder,
    private personService: PersonHttpService,
    private getPerson: GetPersonService,
    private httpExcel: DownloadExcelService) { }

  ngOnInit(): void {
    this.reset = false
    this.formGroup = new FormGroup({
      firstName: new FormControl('', [Validators.pattern(/^[a-z\u05D0-\u05EA]+$/i)]),
      lastName: new FormControl('', [Validators.pattern(/^[a-z\u05D0-\u05EA]+$/i)]),
      ID: new FormControl('', [IdValidators.isValidIsraeliID]),
      birthdate: new FormControl(''),
      kind: new FormControl(''),
      helth: new FormControl(''),
      child: this.formBuilder.array([])
    }
    );
    this.formGroup.valueChanges.pipe(
      tap(_ => this.saveName())
    ).subscribe();
    const person = this.getPerson.getPerson();
    if (person)
      this.formGroup.setValue(person);
  }


  addChild() {
    this.childList.push({})
  }

  enrol() {
    this.personService.insertPerson$(this.formGroup.value).subscribe();
    localStorage.removeItem(this.personKey);
    this.downloadFile()
    this.formGroup.reset();
    this.reset = true;
  }

  downloadFile() {
    this.httpExcel.downloadFile({
      ...this.formGroup.value,
      child: !this.formGroup.value.child.length ? 'אין ילדים' :
        JSON.stringify(this.formGroup.value.child)
    })
  }

  saveName() {
    localStorage.setItem(this.personKey, JSON.stringify(this.formGroup.value));
  }
}
