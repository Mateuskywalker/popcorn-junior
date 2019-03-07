import { Directive, HostListener, ElementRef, Renderer } from '@angular/core';

@Directive({
    selector: '[appZoomOnHover]'
})

export class ZoomOnHoverDirective {
    constructor(private elementRef: ElementRef, private render: Renderer) {}

    @HostListener('mouseover')
    zoomIn() {
        this.render.setElementStyle(this.elementRef.nativeElement, 'transform', 'scale(1.1)')
        this.render.setElementStyle(this.elementRef.nativeElement, 'border', '2px solid #642EFE');
        this.render.setElementStyle(this.elementRef.nativeElement, 'transition', '1s');
    }

    @HostListener('mouseleave')
    zoomOut() {
        this.render.setElementStyle(this.elementRef.nativeElement, 'transform', 'scale(1)');
        this.render.setElementStyle(this.elementRef.nativeElement, 'border', '0px');
    }
}
