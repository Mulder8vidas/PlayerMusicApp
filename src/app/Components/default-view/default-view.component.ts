import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-default-view',
  imports: [],
  templateUrl: './default-view.component.html',
  standalone: true,
  styleUrl: './default-view.component.css'
})


export class DefaultViewComponent {
  @Input()
  busquedaEstado=false;
}
