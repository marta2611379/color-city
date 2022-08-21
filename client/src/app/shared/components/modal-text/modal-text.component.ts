import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-text',
  templateUrl: './modal-text.component.html',
  styleUrls: ['./modal-text.component.scss'],
})
export class ModalTextComponent implements OnInit {
  @Output() close = new EventEmitter();
  @Output() action = new EventEmitter();
  @Input() actionLable: string = 'general.confirm';
  @Input() button: boolean = true;
  @Input() isLoading: boolean = false;
  constructor(@Inject(MAT_DIALOG_DATA) public text: string) {}

  ngOnInit(): void {}
}
