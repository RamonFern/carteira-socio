import { Component, ElementRef, ViewChild } from '@angular/core';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  form: FormGroup;
  nome!: string
  matricula!: string
  profissional!: string
  amador!: string
  dataColonia!: string
  dataEmissao!: string
  pais!: string
  dataNascimento!: string
  estadoCivil!: string
  rg!: string
  cpf!: string
  cartCap!: string
  naturalidade!: string

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nome: [''],
      matricula: [''],
      profissional: [''],
      amador: [''],
      dataColonia: [''],
      dataEmissao: [''],
      pais: [''],
      dataNascimento: [''],
      estadoCivil: [''],
      rg: [''],
      cpf: [''],
      cartCap: [''],
      naturalidade: [''],
    });
  }
  @ViewChild('content', {static: false}) el!: ElementRef;

  gerarPDF() {
    const content = this.el.nativeElement;
    html2canvas(content).then(canvas => {
    const constentDataURL = canvas.toDataURL('/src/assets/images/patriadever.jpg')
    let pdf = new jsPDF('p','pt','a4');
    var width = pdf.internal.pageSize.getWidth() - 100;
    var height = canvas.height * width / canvas.width;
    pdf.addImage(constentDataURL, 'JPG', 30, 10, width, height - 100);
    pdf.save('doc.pdf');
  })
  }

  onSubmit() {
    this.nome = this.form.controls['nome'].value;
    this.matricula = this.form.controls['matricula'].value;
    this.profissional = this.form.controls['profissional'].value;
    this.amador = this.form.controls['amador'].value;
    this.dataColonia = this.form.controls['dataColonia'].value;
    this.dataEmissao = this.form.controls['dataEmissao'].value;
    this.pais = this.form.controls['pais'].value;
    this.dataNascimento = this.form.controls['dataNascimento'].value;
    this.estadoCivil = this.form.controls['estadoCivil'].value;
    this.rg = this.form.controls['rg'].value;
    this.cpf = this.form.controls['cpf'].value;
    this.cartCap = this.form.controls['cartCap'].value;
    this.naturalidade = this.form.controls['naturalidade'].value;
    console.log(this.form.value);
  }

}
