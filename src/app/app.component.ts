import { RefDirective } from './modal/ref.directive';
import { ModalComponent } from './modal/modal.component';
import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //modal = false;

  @ViewChild(RefDirective, {static: false}) refDir: RefDirective
  constructor(private resolver: ComponentFactoryResolver){

  }
  showModal(){
    const modalFactory = this.resolver.resolveComponentFactory(ModalComponent)
    this.refDir.containerRef.clear()
    
    const component = this.refDir.containerRef.createComponent(modalFactory)
    component.instance.title = "Dynamic title";
    component.instance.close.subscribe(()=> {
      this.refDir.containerRef.clear()
    })
  }
}