import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
import { ChatService } from './chat.service';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ChatDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatDividerModule,
    MatFormFieldModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatInputModule
  ],
  exports: [ ChatDialogComponent
  ],
  providers: [ChatService]
})
export class ChatModule { }
