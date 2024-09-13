import { Component, ContentChild, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  @Input() user: string = '';
  @ContentChild('userParagraph') userParagraph: any;
  index: number = 0;
  onClick() {
    this.index++;
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked is there",this.userParagraph.nativeElement.textContent);
  }
}
