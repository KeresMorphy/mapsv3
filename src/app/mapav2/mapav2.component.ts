import { Component, OnInit } from '@angular/core';
import mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mapav2',
  templateUrl: './mapav2.component.html',
  styleUrls: ['./mapav2.component.scss'],
})
export class Mapav2Component implements OnInit {

  constructor() { }

  ngOnInit() {
    // Inicializa Mapbox GL JS
    mapboxgl.accessToken = 'pk.eyJ1IjoiZWRkeTIxMCIsImEiOiJjbHMzbzQ3b20wYWdpMmxvM3N3OGN4MGpvIn0.AfHbsdZ9XWTv7i1HusY5SA';
    const map = new mapboxgl.Map({
      container: 'map', // Contenedor del mapa
      style: 'mapbox://styles/mapbox/streets-v12', // Estilo del mapa
      center: [-74.5, 40], // Posición inicial [lng, lat]
      zoom: 9 // Zoom inicial
    });
  }
}
