import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  name = 'Bruno';
  imgUrl = 'https://picsum.photos/300/300';
  imgDesc = 'Essa é uma imagem';
  buttonText = 'Clique aqui!';
  textRed = 'textred';
  bgColor = 'green';
  fontSize = '40px';
  widthImg = 600;
  textInput = '';
  number = 0;
  destroy = false;

  constructor() { }

  ngOnInit(): void {
  }

  retornaNome() {
    return this.name;
  }

  clicou(value: any) {
    console.log('Clicou aqui', value);
    
  }

  clicouNoFilho(text: any) {
    console.log(text);
  }

  incrementa() {
    this.number++;
  }

  destroiComponente() {
    this.destroy = true;
  }

}
