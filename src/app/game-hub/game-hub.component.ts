import { Component, OnInit } from '@angular/core';
import { GeneroServiceService } from '../service/genero-service.service';

@Component({
  selector: 'app-game-hub',
  templateUrl: './game-hub.component.html',
  styleUrls: ['./game-hub.component.css']
})
export class GameHubComponent implements OnInit {
  generos: any 
  constructor(private myDataService: GeneroServiceService) { }

  ngOnInit(): void {
    this.getGeneros()
  }

  getGeneros() {
    this.myDataService.getGenero().subscribe(
      (response: any[]) => {
        console.log(response)
        this.generos = response
      },
      (error) => {
        console.error('Erro: ', error)
      }
    )
  }
}
