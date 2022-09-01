import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store';
import { STORE_DATA } from '../actions';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-fetchapi',
  templateUrl: './fetchapi.component.html',
  styleUrls: ['./fetchapi.component.css']
})
export class FetchApiComponent implements OnInit {
 @select('result') result:any;
 title = 'angularredux-todo';
 api:any=`https://swapi.dev/api/`;
 results='';
 form: any = {};
 
  constructor(private ngRedux: NgRedux<IAppState>,private http: HttpClient) { }
  ngOnInit() {
    this.form.endpoint='people/1/'
  }
 
  onSubmit(){
    let finalapi = this.api + this.form.endpoint;
    this.get(finalapi).then(
      data => {
       this.results = JSON.stringify(data)
       this.storeData(this.results)
      },
      err => {
       
        console.log('error');
      }
    );
  }

  async get(apipath:any) {
   
    return await this.http.get(apipath, { responseType: 'json' }).toPromise();
  }

  storeData(data:any) {
    this.ngRedux.dispatch({type: STORE_DATA,fetchdata:data});
  }

}