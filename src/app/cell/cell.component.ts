import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CellService } from './cell.service';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {

  played: boolean = false;
  disabled: boolean = false;


  constructor(private CellService: CellService, private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {

  }

  nextPlay(): string {
    return this.CellService.nextSymbol();
  }

  newSymbol():void{
    this.played=! this.played; 
    this.disabled=! this.disabled; 
    this.CellService.newSymbol();
    console.log(this.CellService.symbols)       
  }
  freeze(): void{
    this.changeDetector.detach();
  }
}


