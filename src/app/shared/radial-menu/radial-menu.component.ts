import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-radial-menu',
  imports: [CommonModule],
  templateUrl: './radial-menu.component.html',
  styleUrl: './radial-menu.component.scss',
})

export class RadialMenuComponent {
  @Input('skill') skill: {name?: any, description?:any, experiences?: any, icon?: any, levels?: any} = {};
}
