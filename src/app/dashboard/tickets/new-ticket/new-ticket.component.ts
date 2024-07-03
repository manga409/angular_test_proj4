import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  viewChild,
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
  imports: [ButtonComponent, ControlComponent, FormsModule],
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  //@ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  ngOnInit() {
    console.log('ON INIT');
    console.log(this.form().nativeElement);
  }

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
    console.log(this.form().nativeElement);
  }

  onSubmit(title: string, ticketText: string) {
    console.log(title);
    console.dir(ticketText);
    this.form()?.nativeElement.reset();
  }
}
