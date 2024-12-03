import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UIInputSearchComponent, UIOptionGroupComponent, IUIOptionGroupOptionConfiguration } from 'manjon-ui';


interface VehicleData {
  total_count: number;
  results: Vehicle[];
}

interface Vehicle {
  make: string;
  model: string;
  barrels08: number;
  barrelsa08: number;
  charge120: number;
  charge240: number;
  city08: number;
  city08u: number;
  citya08: number;
  citya08u: number;
  citycd: number;
  citye: number;
  cityuf: number;
  co2: number;
  co2a: number;
  co2tailpipeagpm: number;
  co2tailpipegpm: number;
  comb08: number;
  comb08u: number;
  comba08: number;
  comba08u: number;
  combe: number;
  combinedcd: number;
  combineduf: number;
  cylinders: number;
  displ: number;
  drive: string;
  engid: string;
  eng_dscr: string[];
  fescore: number;
  fuelcost08: number;
  fuelcosta08: number;
  fueltype: string;
  fueltype1: string;
  ghgscore: number;
  ghgscorea: number | null;
  highway08: number;
  highway08u: number;
  highwaya08: number;
  highwaya08u: number;
  highwaycd: number;
  highwaye: number;
  highwayuf: number;
  hlv: number;
  hpv: number;
  id: string;
  lv2: number;
  lv4: number;
  mpgdata: string;
  phevblended: string;
  pv2: number;
  pv4: number;
  range: number;
  rangecity: number;
  rangecitya: number;
  rangehwy: number;
  rangehwya: number;
  trany: string;
  ucity: number;
  ucitya: number;
  uhighway: number;
  uhighwaya: number;
  vclass: string;
  year: string;
  yousavespend: number;
  guzzler: string | null;
  trans_dscr: string | null;
  tcharger: string | null;
  scharger: string | null;
  atvtype: string | null;
  fueltype2: string | null;
  rangea: string | null;
  evmotor: string | null;
  mfrcode: string;
  c240dscr: string | null;
  charge240b: number;
  c240bdscr: string | null;
  createdon: string;
  modifiedon: string;
  startstop: string;
  phevcity: number;
  phevhwy: number;
  phevcomb: number;
  basemodel: string;
}


@Component({
  selector: 'demo-input-search',
  standalone: true,
  imports: [
    CommonModule,
    UIInputSearchComponent,
    UIOptionGroupComponent,
  ],
  templateUrl: './demo-input-search.component.html',
  styleUrl: './demo-input-search.component.scss'
})
export class DemoInputSearchComponent {

  countries: IUIOptionGroupOptionConfiguration[] = [
    { id: '1', value: 'Afghanistan', disabled: false },
    { id: '2', value: 'Albania', disabled: false },
    { id: '3', value: 'Algeria', disabled: false },
    { id: '4', value: 'Andorra', disabled: false },
    { id: '5', value: 'Angola', disabled: false },
    { id: '6', value: 'Antigua and Barbuda', disabled: false },
    { id: '7', value: 'Argentina', disabled: false },
    { id: '8', value: 'Armenia', disabled: false },
    { id: '9', value: 'Australia', disabled: false },
    { id: '10', value: 'Austria', disabled: false },
    { id: '11', value: 'Azerbaijan', disabled: false },
    { id: '12', value: 'Bahamas', disabled: false },
    { id: '13', value: 'Bahrain', disabled: false },
    { id: '14', value: 'Bangladesh', disabled: false },
    { id: '15', value: 'Barbados', disabled: false },
    { id: '16', value: 'Belarus', disabled: false },
    { id: '17', value: 'Belgium', disabled: false },
    { id: '18', value: 'Belize', disabled: false },
    { id: '19', value: 'Benin', disabled: false },
    { id: '20', value: 'Bhutan', disabled: false },
    { id: '21', value: 'Bolivia', disabled: false },
    { id: '22', value: 'Bosnia and Herzegovina', disabled: false },
    { id: '23', value: 'Botswana', disabled: false },
    { id: '24', value: 'Brazil', disabled: false },
    { id: '25', value: 'Brunei', disabled: false },
    { id: '26', value: 'Bulgaria', disabled: false },
    { id: '27', value: 'Burkina Faso', disabled: false },
    { id: '28', value: 'Burundi', disabled: false },
    { id: '29', value: 'Cabo Verde', disabled: false },
    { id: '30', value: 'Cambodia', disabled: false },
    { id: '31', value: 'Cameroon', disabled: false },
    { id: '32', value: 'Canada', disabled: false },
    { id: '33', value: 'Central African Republic', disabled: false },
    { id: '34', value: 'Chad', disabled: false },
    { id: '35', value: 'Chile', disabled: false },
    { id: '36', value: 'China', disabled: false },
    { id: '37', value: 'Colombia', disabled: false },
    { id: '38', value: 'Comoros', disabled: false },
    { id: '39', value: 'Congo (Congo-Brazzaville)', disabled: false },
    { id: '40', value: 'Costa Rica', disabled: false },
    { id: '41', value: 'Croatia', disabled: false },
    { id: '42', value: 'Cuba', disabled: false },
    { id: '43', value: 'Cyprus', disabled: false },
    { id: '44', value: 'Czechia (Czech Republic)', disabled: false },
    { id: '45', value: 'Denmark', disabled: false },
    { id: '46', value: 'Djibouti', disabled: false },
    { id: '47', value: 'Dominica', disabled: false },
    { id: '48', value: 'Dominican Republic', disabled: false },
    { id: '49', value: 'Ecuador', disabled: false },
    { id: '50', value: 'Egypt', disabled: false }
  ];

  options: IUIOptionGroupOptionConfiguration[] = [];
  isEmpty: boolean = false;

  constructor() { }

  searchValue(event: string) {
    console.log(event);
    
    const findElements = this.countries.filter((country) => country.value.includes(event));
    if(findElements) {
      this.isEmpty = false;
      this.options = findElements;
    }else {
      this.isEmpty = true;
      this.options = [];
    }
  }
}
