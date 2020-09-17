import { Observable } from 'rxjs';
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
  lastPokemonHunt: Pokemon;
  softResetCounter: number = 0;
  resetsNumberOfLastHunt: number; 

  constructor(private pokeService: ServiceService) {}

  ngOnInit(): void {
  }

  getPokemons(pokeName: string){
    this.pokeService.getPokemonsByName(pokeName).subscribe(
      res => {
          this.pokemonData = [{name: res.name, image:res.sprites.front_shiny}];   
      },
      err => {
        this.pokemonData = [{name: 'Esse pokemon não existe', image:''}]
      }
    );
  }

  applyFilter(pokeName: string){
    let pokeNameLowercase = pokeName.toLowerCase();
    this.getPokemons(pokeNameLowercase);  
  }

  endHunt(){
    if(this.pokemonData[0].image != ''){
      this.resetsNumberOfLastHunt = this.softResetCounter;
      this.lastPokemonHunt = this.pokemonData[0];
      this.pokemonData.pop()
      this.softResetCounter = 0;
    }
  }

  add(){
    this.softResetCounter++;
  }

  remove(){
    if(Math.sign(this.softResetCounter - 1) != -1){  
    this.softResetCounter--;
    }
  }
}
