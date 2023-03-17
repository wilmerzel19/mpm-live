import { Component } from '@angular/core';
import { FaStackItemSizeDirective } from '@fortawesome/angular-fontawesome';
import { faFontAwesome } from '@fortawesome/free-solid-svg-icons';
import { faBasketball } from '@fortawesome/free-solid-svg-icons';
import { faHockeyPuck } from '@fortawesome/free-solid-svg-icons';
import { faFootball } from '@fortawesome/free-solid-svg-icons';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';
import { faVolleyball } from '@fortawesome/free-solid-svg-icons';
import { faTableTennis } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-subnabar',
  templateUrl: './subnabar.component.html',
  styleUrls: ['./subnabar.component.css']
})
export class SubnabarComponent {
  FontAwesomeIcon=faFontAwesome;
faBasketball=faBasketball;
faHockeyPuck=faHockeyPuck;
faFootball=faFootball;
faFutbol=faFutbol;
faVolleyball=faVolleyball;
faTableTennis=faTableTennis;
faGear=faGear;


}
