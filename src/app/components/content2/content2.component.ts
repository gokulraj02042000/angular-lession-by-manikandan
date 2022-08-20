import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/servies/general.service';

@Component({
  selector: 'app-content2',
  templateUrl: './content2.component.html',
  styleUrls: ['./content2.component.css']
})
export class Content2Component implements OnInit {
  public name = ''

  constructor(private general: GeneralService) { }

  ngOnInit(): void {
    this.general.getData().subscribe((result: any) => {
      this.name = result.name
    })
  }

}
