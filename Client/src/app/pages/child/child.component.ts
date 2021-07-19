import { Component, Injectable, Input, OnInit} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { IdValidators } from 'src/app/validators/isrealyID';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],

})


@Injectable()
export class ChildComponent implements OnInit {

  @Input() childInput: FormGroup = new FormGroup({});

  @Input() set reset(v: boolean) {
    if (v) {
      this.childGroup.reset()
    }
  }

  childGroup: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.childGroup = this.formBuilder.group({
      name: new FormControl('', [Validators.pattern(/^[a-z\u05D0-\u05EA]+$/i)]),
      birthdate: new FormControl(''),
      ID: new FormControl('', [IdValidators.isValidIsraeliID],),
    });
    (this.childInput.get('child') as FormArray).push(this.childGroup)
  }
}
