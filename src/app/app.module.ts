import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeModule } from "./home/home.module";
import { AuthModule } from "./auth/auth.module";
// import { CKEditorModule } from 'ng2-ckeditor';
import { ProjectsModule } from './projects/projects.module';



@NgModule({
    declarations: [
        AppComponent,

    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        HomeModule,
        AuthModule,
        // CKEditorModule,
        ProjectsModule
    ]
})
export class AppModule { }
