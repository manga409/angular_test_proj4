import {
  Component,
  HostBinding,
  HostListener,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    //'(click)': 'onClick()',
  },
})
export class ControlComponent {
  //@HostBinding('class') className = 'control'; not recommended
  @HostListener('click') onClick() {
    console.log('clicked!');
  }
  label = input.required<string>();

  // onClick() {
  //   console.log('clicked!');
  // }
}
