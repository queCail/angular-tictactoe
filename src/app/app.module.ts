import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { StartButtonComponent } from './start-button/start-button.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CellComponent } from './cell/cell.component';
import { BoardComponent } from './board/board.component';

@NgModule({
  declarations: [
    AppComponent,
    StartButtonComponent,
    HomepageComponent,
    CellComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      }, {
        path:'home', component: HomepageComponent
      }, {
        path: 'game', component: BoardComponent
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
