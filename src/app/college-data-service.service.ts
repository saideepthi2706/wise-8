import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AppComponent } from './app.component';
import 'rxjs/add/operator/map';
import {AngularFire,FirebaseListObservable} from 'angularfire2';
@Injectable()
export class CollegeDataService {

  constructor(private http : Http) { }
  
  fetchData(){
	return this.http.get('https://eamcetmock.firebaseio.com/.json').map(
		(res) => res.json()
	);
  }

}