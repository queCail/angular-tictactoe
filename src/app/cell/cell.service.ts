import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root',
})

export class CellService{

    symbols: string[] = [];

    newSymbol(): void{
        if(this.symbols.length % 2 === 0){
            this.symbols.push("X");
        }else{
            this.symbols.push("O");
        }
    }

    nextSymbol():string {
        return this.symbols[this.symbols.length-1];
    }

}