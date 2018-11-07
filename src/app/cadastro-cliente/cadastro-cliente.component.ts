import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {
  formCadastro;
  valoresForm: Object;
  dadosForm;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formCadastro = this.fb.group({
      nome: [Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(1000)
      ])],
      cpf: [],
      email: ['' , Validators.compose([Validators.email])],
      telefone: [],
      endereco: []
    });

    this.formCadastro.valueChanges.pipe(
      debounceTime(1000)).subscribe(res => {
        console.log(res);
        this.valoresForm = res;
      });
  }

  cadastro() {
    this.dadosForm = JSON.stringify(this.valoresForm);
    console.log(this.dadosForm);
    localStorage.setItem('cadastro' , this.dadosForm);
  }
}
