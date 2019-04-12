import { Component, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-piterjs-modal',
  templateUrl: './piterjs-modal.component.html',
  styleUrls: ['./piterjs-modal.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class PiterjsModalComponent {
  @Input() color = 'primary';
  @Input() title = 'Hello, PiterJS';
  text = 'Hello, PiterJS';

  constructor(private readonly modalService: NgbModal) {}

  get buttonColor(): string {
    return `btn-${this.color}`;
  }

  onOpen(content: TemplateRef<HTMLDivElement>): void {
    this.modalService.open(content)
  }
}
