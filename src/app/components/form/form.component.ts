import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { FormModel } from './form.model';
import { FormService } from './../../services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formulario!: FormGroup;
  info: FormModel = new FormModel();

  constructor(
    private formBuilder: FormBuilder,
    private FormService: FormService
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      subject: [null, Validators.required],
      message: [null, [Validators.required, Validators.maxLength(100)]]
    })
  }

  onSubmit() {
    this.FormService.saveInfos(this.formulario.value).subscribe(info => {
      this.info = new FormModel();
    }, err => {
      console.log('Erro ao salvar', err)
    });
    this.formulario.reset()
  }

  validator() {
    if (!this.formulario.valid) {
      console.log("Formulário inválido");
    } else {
      console.log("Formulário válido", this.formulario.value)
    }
  }
}
