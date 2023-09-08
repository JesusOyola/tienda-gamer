import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthComponent } from './auth/auth.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  declarations: [NavbarComponent, AuthComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatBadgeModule,
  ],
  exports: [
    NavbarComponent,
    AuthComponent,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatBadgeModule,
  ],
})
export class SharedModule {}
