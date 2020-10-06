import {ComponentFactory, ComponentFactoryResolver, ComponentRef, Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {SpinnerComponent} from '../../spinner/spinner.component';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[loading]'
})
export class LoadingDirective {

  SpinnerFactory: ComponentFactory<SpinnerComponent>;
  SpinnerComponent: ComponentRef<SpinnerComponent>;

  @Input() set loading(isLoading: boolean) {
    this.vcRef.clear();
    if (isLoading) {
      this.SpinnerComponent = this.vcRef.createComponent(this.SpinnerFactory);
    } else {
      this.vcRef.createEmbeddedView(this.templateRef);
    }
  }

  constructor(private templateRef: TemplateRef<any>,
              private vcRef: ViewContainerRef,
              private componentFactoryResolver: ComponentFactoryResolver) {
    this.SpinnerFactory = this.componentFactoryResolver.resolveComponentFactory(SpinnerComponent);
  }
}
