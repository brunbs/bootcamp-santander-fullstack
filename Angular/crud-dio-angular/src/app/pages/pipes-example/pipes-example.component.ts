import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css']
})
export class PipesExampleComponent implements OnInit {
  
  number = 0;
  text = 'Hello, World!';
  date = new Date;
  pessoa = {
    nome: 'Bruno',
    idade: 31,
    profissao: 'programador'
  };

  nomes = ['Brunowwww'];

  constructor() { }

  ngOnInit(): void {
  }

  add(text: string) {
    this.nomes.push(text);
  }

}
