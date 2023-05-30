import { Component, OnInit } from '@angular/core';
import { Sputifai } from './models/streaming.model';
import { Observable } from 'rxjs';
import {HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: Sputifai;
  oSputifai: Observable<Sputifai>;
  serviceURL: string = 'https://my-json-server.typicode.com/paolocarugati/sputifai/db'
  
 
  

  constructor(public http: HttpClient) {
    this.oSputifai = this.http.get<Sputifai>(this.serviceURL);
    this.oSputifai.subscribe(d => { alert("ok!"); this.data = d;}, error => console.log(error) );

  }

  ngOnInit(): void{
  }
    
 }



