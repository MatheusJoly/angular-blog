import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  photoCover:string = ""
  contentTitle:string = ""
  contentDescription:string = ""
  private id:string | null = "0"
  articles:Object[] = []

  constructor(private route: ActivatedRoute) {
    this.articles.push(dataFake)
  }

  ngOnInit(): void {
    this.setValuesToComponents()
  }
  setValuesToComponents(){

  const data = dataFake.filter(article => article)[0]

this.contentTitle = data.title
this.contentDescription = data.description
this.photoCover = data.photoCover
console.log(this.articles)
  }

}
