import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

//imports modulos projeto
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { Routes, RouterModule } from '@angular/router';

import { MatMenuModule } from '@angular/material/menu';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';

//imports endpoints
import { ListaLocatarioComponent } from './locatario/lista-locatario/lista-locatario.component';
import { LocatarioComponent } from './locatario/locatario/locatario.component';
import { CadastrarLocatarioComponent } from './locatario/cadastrar-locatario/cadastrar-locatario.component';
import { EditarLocatarioComponent } from './locatario/editar-locatario/editar-locatario.component';
import { LojaComponent } from './loja/loja/loja.component';
import { EditarLojaComponent } from './loja/editar-loja/editar-loja.component';
import { ListarLojaComponent } from './loja/listar-loja/listar-loja.component';
import { CadastrarLojaComponent } from './loja/cadastrar-loja/cadastrar-loja.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'cadastrarLocatario', component: CadastrarLocatarioComponent },
  { path: 'cadastrarLoja', component: CadastrarLojaComponent },
  { path: 'listarLocatario', component: ListaLocatarioComponent },
  { path: 'listarLoja', component: ListarLojaComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ListaLocatarioComponent,
    LocatarioComponent,
    CadastrarLocatarioComponent,
    EditarLocatarioComponent,
    LojaComponent,
    EditarLojaComponent,
    ListarLojaComponent,
    CadastrarLojaComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
