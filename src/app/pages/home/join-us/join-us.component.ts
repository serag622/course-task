import { Component, input } from '@angular/core';
import { JoinUsFormComponent } from './join-us-form/join-us-form.component';
import {
  GoogleMapsModule,
  MapInfoWindow,
  MapMarker,
} from '@angular/google-maps';
import { Category } from '../../../common/model/category.model';
@Component({
  selector: 'app-join-us',
  imports: [JoinUsFormComponent, GoogleMapsModule],
  templateUrl: './join-us.component.html',
  styleUrl: './join-us.component.scss',
})
export class JoinUsComponent {
  courseCategoryList = input<Category[]>([]);
  
  options: google.maps.MapOptions = {
    center: { lat: 29.971678676254154, lng: 31.282883855965718 },
    zoom: 16,
  };

  circles: IMapCircle[] = [
    {
      id: 1,
      lat: 29.971678676254154,
      lng: 31.282883855965718,
      circleOptions: {
        fillColor: '#ff0000',
        fillOpacity: 0.5,
        strokeWeight: 1,
        strokeColor: '#ff0000',
        clickable: false,
        editable: false,
        zIndex: 1,
        radius: 4, // in meters
      },
      markerOptions: {
        lat: 29.971715852626794,
        lng: 31.282905313637187,
        label: {
          text: ' ',
          className: 'circle-label',
          fontSize: '12px',
        },
      },
      markerWindowInfo: {
        html: '<div>Link Development</div>',
      },
    },
  ];
}

export interface IMapCircle {
  id: number;
  lat: number;
  lng: number;
  circleOptions: IMapCircleOptions;
  markerOptions: MarkerOptions;
  markerWindowInfo: { html: string };
}

interface IMapCircleOptions {
  fillColor: string;
  fillOpacity: number;
  strokeWeight: number;
  strokeColor: string;
  clickable: boolean;
  editable: boolean;
  zIndex: number;
  radius: number;
}

export interface MarkerOptions {
  lat: number;
  lng: number;
  label: {
    text: string;
    className: string;
    fontSize: string;
  };
}
