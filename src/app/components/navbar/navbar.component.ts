import { Component, Input } from '@angular/core';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  showFiller = false;
  title = 'Live_Sport';
  showMenu = true;
  faBars=faBars;
  faCaretLeft=faCaretLeft;
drawer: any;

  toggleMenu() {
    this.showMenu = !this.showMenu;
    if (!this.showMenu) {

      this.showMenu = false;





    }






}
}






