import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

//imports modulos projeto

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from  '@angular/material/card';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule} from  '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';

//imports endpoints
import { ListaLocatarioComponent } from './locatario/lista-locatario/lista-locatario.component';
import { CadastrarLocatarioComponent } from './locatario/cadastrar-locatario/cadastrar-locatario.component';
import { EditarLocatarioComponent } from './locatario/editar-locatario/editar-locatario.component';
import { LojaComponent } from './loja/loja/loja.component';
import { EditarLojaComponent } from './loja/editar-loja/editar-loja.component';
import { ListarLojaComponent } from './loja/listar-loja/listar-loja.component';
import { CadastrarLojaComponent } from './loja/cadastrar-loja/cadastrar-loja.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LojaCreateComponent } from './loja/loja-create/loja-create.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastrarLocatario', component: CadastrarLocatarioComponent },
  { path: 'cadastrarLocatario/:id', component: CadastrarLocatarioComponent },
  { path: 'editarLocatario', component: EditarLocatarioComponent },
  { path: 'listarLocatario', component: ListaLocatarioComponent },
  { path: 'cadastrarLoja', component: CadastrarLojaComponent },
  { path: 'lojaCreate', component: LojaCreateComponent },
  { path: 'listarLoja', component: ListarLojaComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ListaLocatarioComponent,
    CadastrarLocatarioComponent,
    EditarLocatarioComponent,
    LojaComponent,
    EditarLojaComponent,
    ListarLojaComponent,
    CadastrarLojaComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    LojaCreateComponent,
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
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    MatCardModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
