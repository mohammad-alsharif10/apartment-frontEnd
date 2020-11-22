import {BasicModel} from './BasicModel';
import {Image} from './Image';

export class Apartment extends BasicModel {

  area: number;

  maximumRentersNumber: number;

  monthlyRent: number;

  status: string;


  arabicFullName: string;


  regionName: string;


  floorNumber: number;


  streetName: string;


  blockNumber: number;


  neighborhoodName: string;


  englishFullName: string;


  arabicShortName: string;


  englishShortName: string;


  latitude: number;


  longitude: number;

  numberOfRooms: number;


  images: Image[] = [];

  governorate: string;
}
