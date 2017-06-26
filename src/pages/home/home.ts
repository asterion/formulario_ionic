import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private client : FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.client = this.formBuilder.group({
      name: [''],
      email: ['']
    })
  }

  save(){
    console.log('name: ' + this.client.value.name);
    console.log('email: ' + this.client.value.email);
  }
}
