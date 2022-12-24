import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FirstApp-Angular';

  // *********** Menu ************

  menus: menuType[] = [
    { name: "Home", link: "/" },
    { name: "Account", link: "/account" },
    { name: "About", link: "/about" },
  ];

  // *********** Menu Mobile************

  open: boolean = false;


}

// *********** Class Type Menu ************
class menuType {
  name: string = "";
  link: string = "";
}
