import { Pokemon } from './../../../shared/model/pokemon.model';
import { ServiceService } from './../../../shared/service/service.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-poke-hunt',
  templateUrl: './poke-hunt.component.html',
  styleUrls: ['./poke-hunt.component.css']
})
export class PokeHuntComponent implements OnInit {
  pokemonData: Pokemon[];
  
  constructor(private pokeService: ServiceService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(){
    this.pokeService.getPokemonsByName('pikachu').subscribe(
      res => {
         this.pokemonData = [res.name, res.sprites.front_shiny];
      },
      err =>{
        console.log('error');
      }
    );
  }
}
