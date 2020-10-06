import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';
import {AnimationItem} from 'lottie-web';
import {AnimationOptions} from 'ngx-lottie';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorComponent {

  @Input() error: string;
  animationElement: AnimationItem;
  options: AnimationOptions = {
    path: '/assets/lottie/explanation-alert.json',
    loop: false
  };

  animationCreated(animationItem: AnimationItem): void {
    this.animationElement = animationItem;
  }
}
