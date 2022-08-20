import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/servies/general.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public a = 10;
  public b = 20;
  public c: number;
  constructor(
    private general: GeneralService
  ) { 
    this.c = this.general.sum(this.a, this.b);
  }

  ngOnInit(): void {
  }

}
