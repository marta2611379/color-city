import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/product.interface';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.scss'],
})
export class EditCardComponent implements OnInit {
  @Input() item!: IProduct;
  constructor() {}

  ngOnInit(): void {}
}
