import { ElementRef } from "@angular/core";

declare var M: any;

export class Materialservice {
  static toast(message: string) {
    M.toast({html: message});
  }

  static initializeFloatingButton(ref: ElementRef) {
    M.FloatingActionButton.init(ref.nativeElement);
  }
}
