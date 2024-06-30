import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})

export class TestComponent implements OnInit{
  constructor(private http: HttpClient){

  }
  ngOnInit(): void {

      //------------------
      // let url="http://localhost:3000/Products";
      // this.http.get(url).subscribe(res=>{
      //})
  }

}
