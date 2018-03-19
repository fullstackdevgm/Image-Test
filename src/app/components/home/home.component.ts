import { Component, OnInit, OnDestroy, ViewContainerRef, ViewChild } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  	title = 'home';

  	@ViewChild('textCanvas') textCanvas;
  	@ViewChild('text') text;
  	@ViewChild('image') image;
  	tCtx : any;

  	ngOnInit() {
  	}

  	ngOnDestroy() {
  	}

  	ngAfterViewInit() {
  		if(this.textCanvas.nativeElement) {
  			this.tCtx = this.textCanvas.nativeElement.getContext('2d');
  		}
  	}

  	createImage(value: string) {
  		this.tCtx.canvas.width = this.tCtx.measureText(value).width;
  		this.tCtx.fillText(value, 0, 10);
  		this.image.nativeElement.src = this.tCtx.canvas.toDataURL();
  	}
}