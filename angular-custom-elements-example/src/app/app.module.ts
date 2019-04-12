import { BrowserModule } from '@angular/platform-browser';
import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { PiterjsModalComponent } from './piterjs-modal/piterjs-modal.component';

@NgModule({
  declarations: [PiterjsModalComponent],
  imports: [BrowserModule, FormsModule, NgbModalModule],
  entryComponents: [PiterjsModalComponent],
})
export class AppModule implements DoBootstrap {
  constructor(private readonly injector: Injector) {}

  ngDoBootstrap(): void {
    const piterJsModalCustomElement = createCustomElement(
      PiterjsModalComponent,
      { injector: this.injector },
    );

    customElements.define('piterjs-modal', piterJsModalCustomElement);
  }
}
