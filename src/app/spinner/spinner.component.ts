import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {AnimationItem} from 'lottie-web';
import {AnimationOptions} from 'ngx-lottie';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpinnerComponent {
  animationElement: AnimationItem;
  options: AnimationOptions = {
    path: '/assets/lottie/loading.json',
    loop: true
  };

  animationCreated(animationItem: AnimationItem): void {
    this.animationElement = animationItem;
  }
}
