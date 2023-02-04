import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';


import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;
  constructor (private activedRoute: ActivatedRoute, private paisService: PaisService) { }


  ngOnInit () {


    this.activedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.getPaisPorCodigo(id)),
        tap()
      )
      .subscribe({
        next: (pais) => {
          this.pais = Object.values(pais)[0];

        }
      });

    // this.activedRoute.params
    //   .subscribe(({ id }) => {
    //     this.paisService.getPaisPorCodigo(id)
    //       .subscribe(pais => {
    //         console.log(pais);
    //       });
    //   });
  }

}
