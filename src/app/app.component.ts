import { Component, OnInit } from '@angular/core';
interface Tarjeta{
  titulo:string;
  subtitulo:string;
  nro:number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'proyecto carol';
  public ArregloTarjetas: Tarjeta[]=[];

  ngOnInit(): void {
    this.ArregloTarjetas = [
      {titulo:'Video 1', subtitulo: 'subtitulo Video 1', nro:5},
      {titulo:'Video 2', subtitulo: 'subtitulo Video 2', nro: 3},
      {titulo:'Video 3', subtitulo: 'subtitulo Video 3', nro: 7},
    ]
    
  }
}
