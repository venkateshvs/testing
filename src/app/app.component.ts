import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // -------------------------------------------------------------------------
  // Properties

  public isCollapsed: boolean;

  // -------------------------------------------------------------------------
  // Events

  public ngOnInit() {
    this.isCollapsed = false;
  }

  // -------------------------------------------------------------------------
  // Methods

  /**
   * @function onClickMenu
   * Method is used to toggle the menu
   */
  public onClickMenu() {
    this.isCollapsed = !this.isCollapsed;
  }
}
