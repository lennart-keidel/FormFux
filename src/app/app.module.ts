import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChatDialogComponent } from './chat/chat-dialog/chat-dialog.component';
import { ChatModule } from './chat/chat.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ClassificationComponent } from './classification/classification.component';
import { HelpComponent } from './help/help.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule, Routes } from "@angular/router"

const appRoutes: Routes = [
  {path: '', component: ClassificationComponent},
  {path: 'help', component: HelpComponent},
  {path: 'chat', component: ChatDialogComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    ClassificationComponent,
    HelpComponent,
    //ChatDialogComponent
    //ChatModule
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    //AppRoutingModule,
    MatExpansionModule,
    MatToolbarModule,
    MatDividerModule,
    MatButtonModule,
    MatButtonToggleModule,
    ChatModule,  
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
