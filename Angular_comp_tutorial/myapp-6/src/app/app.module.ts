import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormComponent } from './component/form/form.component';
import { FormsModule } from '@angular/forms';
import { RFormComponent } from './component/r-form/r-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PipeComponent } from './component/pipe/pipe.component';
import { ShortPipe } from './pipe/short.pipe';
import { FilterPipe } from './pipe/filter.pipe';

@NgModule({
  declarations: [AppComponent, FormComponent, RFormComponent, PipeComponent, ShortPipe, FilterPipe],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
