import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Http } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the LightsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lights',
  templateUrl: 'lights.html',
})
 export class LightsPage {
    films: Observable<any>;

  constructor(private http:HttpClient, public navCtrl: NavController, public navParams: NavParams) {
  }


  ON(){
      let body = new FormData();
    body.append('brightness', 255);
    body.append('r', 44);
    body.append('g', 44);
    body.append('b', 44);
	this.http.post('http://192.168.0.91/set_light', body).subscribe( res => {
	 const isOn=true;
	 console.log("hat geklappt");
	},
	err => {
	 console.log("error occured");
	});
	/*this.http.get('http://192.168.0.91/status').subscribe(res => {
	console.log(res);
	currenBrightness = res["brightness"]
	})*/
}
   OFF(){
     let body = new FormData();
    body.append('brightness', 0);
    body.append('r', 44);
    body.append('g', 44);
    body.append('b', 44);
  this.http.post('http://192.168.0.91/set_light', body).subscribe( res => {
   const isOn=true;
   console.log("hat geklappt");
  },
  err => {
   console.log("error occured");
  });}  
  alert(){
   alert("Hello! I am an alert box!!");
   }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LightsPage');
  }

}
