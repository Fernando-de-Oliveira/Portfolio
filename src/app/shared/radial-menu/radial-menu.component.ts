import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-radial-menu',
  imports: [CommonModule],
  templateUrl: './radial-menu.component.html',
  styleUrl: './radial-menu.component.scss'
})
export class RadialMenuComponent {
@Input('skill') skill: {name?: any, description?:any, experiences?: any, icon?: any, levels?: any} = {};
// @Output('close') close: EventEmitter<any> = new EventEmitter();
closeMenu(){
  // this.close.emit()
}
}
