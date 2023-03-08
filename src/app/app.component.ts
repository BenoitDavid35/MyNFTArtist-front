import { Component } from '@angular/core';
import { ApiCallService } from './services/api-call/api-call.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyNFTArtist';

  constructor(
    private apiCall: ApiCallService
  ){}

  ngOnInit(){
    this.apiCall.callServer('deepai','dummy text for testing purposes').subscribe(
      res => {
        console.log(res);
      }
    );
  }

}
