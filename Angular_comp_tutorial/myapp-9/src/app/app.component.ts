import {
  Component,
  ComponentFactoryResolver,
  Input,
  ViewChild,
} from '@angular/core';
import { AlertComponent } from './components/alert/alert.component';
import { PlaceholderDirective } from './directive/placeholder.directive';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild(PlaceholderDirective, { static: false })
  alertHost: PlaceholderDirective;
  closeSubs: Subscription;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  title = 'myapp-9';
  @Input() error: string = '';
  onButtonClick() {
    this.error = 'This is the error message';
    this.showError(this.error);
  }
  errorClose() {
    this.error = '';
  }
  showError(error: string) {
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
    this.alertHost.viewContainerRef.clear();
    const componentRef =
      this.alertHost.viewContainerRef.createComponent(componentFactory);
    componentRef.instance.error = error;
    console.log(componentRef.instance.closeError);
    componentRef.instance.closeError();
    // this.closeSubs = componentRef.instance.closeError.subscribe(() => {
    //   this.closeSubs.unsubscribe();
    //   this.alertHost.viewContainerRef.clear();
    // });
  }
  ngOnDestroy(): void {
    if (this.closeSubs) {
      this.closeSubs.unsubscribe();
    }
  }
}
