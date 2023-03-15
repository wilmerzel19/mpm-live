import { Component, Input } from '@angular/core';
import { faBars} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title = 'Live_Sport';
  showMenu = true;
  faBars=faBars;
  toggleMenu() {
    this.showMenu = !this.showMenu;
    if (!this.showMenu) {

      this.showMenu = false;





    }






}
}






