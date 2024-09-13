import { Component, SimpleChanges, Input ,OnChanges} from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css'],
})
export class LifeCycleComponent implements OnChanges {
  @Input() index: number = 0;
  @Input() message: string = '';

   //  In angular each component get assigned by a differnt Id
  //  hence even if we make h3 style red and user->add user Component
  //  still the h3 style will be red only in user component and not in add user component
  // This concept is called Shadow DOM
  //  Shadow DOM is a browser technology designed primarily for scoping variables and CSS in web components.

  // Life Cycle Hooks
  // 1. ngOnChangeS
  // this hook is called when the value of the input property changes
  // input property is a property that is passed from parent component to child component

  // 2. ngOnInit
  // this hook is called when the component is initialized

  // 3. ngDoCheck
  // this hook is called when the change detection is run
  // it means that this hook is called when the component is initialized and when the value of the input property changes

  // 4. ngAfterContentInit
  // this hook is called after the content (ng-content) has been projected into the view

  // 5. ngAfterContentChecked
  // this hook is called every time the projected content has been checked

  // 6. ngAfterViewInit
  // this hook is called after the component's view (and child views) has been initialized

  // 7. ngAfterViewChecked
  // this hook is called every time the view (and child views) have been checked

  // 8. ngOnDestroy
  // this hook is called when the component is about to be destroyed


  constructor() {
    console.log('constructor is called');
  }
  ngOnInit(): void {
    console.log('ngOnInit is called');
  }
  ngOnChanges(element: SimpleChanges) {
    console.log('The message has changed:');
  }
  onclick() {
    this.index++;
  }
  ngDoCheck() {
    console.log('ngDoCheck is called');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit is called');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked is called');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit is called');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked is called');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy is called');
  }
}
