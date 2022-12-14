import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { AptitudesComponent } from './components/aptitudes/aptitudes.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { LogrosComponent } from './components/logros/logros.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ArgProLogoComponent } from './components/arg-pro-logo/arg-pro-logo.component';
import { RedesSocialesComponent } from './components/redes-sociales/redes-sociales.component';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { BannerComponent } from './components/banner/banner.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule, HttpClient } from  '@angular/common/http';






@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    AptitudesComponent,
    ExperienciaComponent,
    EducacionComponent,
    LogrosComponent,
    IniciarSesionComponent,
    PortafolioComponent,
    ArgProLogoComponent,
    RedesSocialesComponent,
    MainComponent,
    RegisterComponent,
    BannerComponent,
    HabilidadesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    
   
    ReactiveFormsModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()),
    
    NgCircleProgressModule.forRoot({})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
