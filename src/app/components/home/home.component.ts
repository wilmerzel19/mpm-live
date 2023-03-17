import { Component } from '@angular/core';
import { faFontAwesome } from '@fortawesome/free-solid-svg-icons';
import { faBasketball } from '@fortawesome/free-solid-svg-icons';
import { faHockeyPuck } from '@fortawesome/free-solid-svg-icons';
import { faFootball } from '@fortawesome/free-solid-svg-icons';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';
import { faVolleyball } from '@fortawesome/free-solid-svg-icons';
import { faTableTennis } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  FontAwesomeIcon=faFontAwesome;
faBasketball=faBasketball;
faHockeyPuck=faHockeyPuck;
faFootball=faFootball;
faFutbol=faFutbol;
faVolleyball=faVolleyball;
faTableTennis=faTableTennis;


}
