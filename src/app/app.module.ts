import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllComponent } from './components/all/all.component';
import { FindComponent } from './components/find/find.component';
import { DeleteComponent } from './components/delete/delete.component';
import { NewComponent } from './components/new/new.component';
import { UpdateComponent } from './components/update/update.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field'; // Import MatFormFieldModule
import { MatInputModule } from '@angular/material/input'; // Import MatInputModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar'; // Import MatSnackBarModule
import { MatIconModule } from '@angular/material/icon';
import { LoadingComponent } from './components/loading/loading.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { httpManagerInterceptor } from './components/interxeptors/http-manager.interceptor';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';



@NgModule({
  declarations: [
    AppComponent,
    AllComponent,
    FindComponent,
    DeleteComponent,
    NewComponent,
    UpdateComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatIconModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFirestoreModule
  ],
  providers: [
    // {
    //   provide:HTTP_INTERCEPTORS,
    //   useValue:httpManagerInterceptor,
    //   multi: true
    // },
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
