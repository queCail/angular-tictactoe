import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { CellService } from './cell.service';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent{


  constructor() { }

  @Input() value!: 'X' | 'O';

}


