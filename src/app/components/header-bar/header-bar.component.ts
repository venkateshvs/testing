import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent {

  // -------------------------------------------------------------------------
  // Properties

  @Input() public isCollapsed: boolean;
  @Output() public clickMenu = new EventEmitter();

  // -------------------------------------------------------------------------
  // Actions

  /**
   * @function onClickMenu
   * Method is used to toggle the menu
   */
  public onClickMenu() {
    this.isCollapsed = !this.isCollapsed;
    this.clickMenu.emit();
  }

}
