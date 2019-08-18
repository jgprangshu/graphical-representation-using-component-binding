import { Component } from '@angular/core';
import { Bird } from './bird.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bird1: Bird=new Bird(1,'bird1',[true,true,true]);  
  bird2: Bird=new Bird(2,'bird2',[true,true,true,true,true]);

  offToSky(birdName){
    if(birdName == 'bird1'){
      this.bird1.birdCount.pop();
      this.bird2.birdCount.push(true);
    }
    else if(birdName== 'bird2'){
      this.bird2.birdCount.pop();
      this.bird1.birdCount.push(true);
    }
  }
}
