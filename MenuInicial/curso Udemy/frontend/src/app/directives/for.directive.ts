import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myForEm]'
})
export class ForDirective implements OnInit {

  @Input('myForEm')
  numbers: number[] = [];

  constructor(private container: ViewContainerRef, private template: TemplateRef<any>) { }

  ngOnInit(): void {
    if (this.numbers) {
      for (let number of this.numbers) {
        this.container.createEmbeddedView(this.template,{ $implicit:number});
      }
    }
  }

}
