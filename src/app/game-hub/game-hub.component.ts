import { Component, OnInit } from '@angular/core';
import { GeneroServiceService } from '../service/genero-service.service';
import { Observable } from 'rxjs';
import { Genero } from '../models/genero.model';

@Component({
  selector: 'app-game-hub',
  templateUrl: './game-hub.component.html',
  styleUrls: ['./game-hub.component.css']
})
export class GameHubComponent implements OnInit {

  generos: Observable<Genero[]> = new Observable<Genero[]>()

  constructor(private myDataService: GeneroServiceService) {
    
  }


  ngOnInit(): void {
    this.generos = this.myDataService.list();
  }


}
