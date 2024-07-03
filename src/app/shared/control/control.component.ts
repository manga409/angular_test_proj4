import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  ViewEncapsulation,
  contentChild,
  inject,
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
    '(click)': 'onClick()',
  },
})
export class ControlComponent implements AfterContentInit {
  //@HostBinding('class') className = 'control'; not recommended
  // @HostListener('click') onClick() {
  //   console.log('clicked!');
  // }
  label = input.required<string>();
  private el = inject(ElementRef);
  // @ContentChild('input') private control?: ElementRef<
  //   HTMLInputElement | HTMLTextAreaElement
  // >;

  private control =
    contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  ngAfterContentInit() {
    //...
  }

  onClick() {
    console.log('clicked!');
    console.log(this.el);
    //console.log(this.control);
    console.log(this.control());
  }
}
