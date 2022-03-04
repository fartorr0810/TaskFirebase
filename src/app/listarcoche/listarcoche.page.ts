import { Component, OnInit } from '@angular/core';
import { CochemodalService } from '../services/cochemodal.service';
import { CocheInterface } from './interfaces/coche.interface';

@Component({
  selector: 'app-listarcoche',
  templateUrl: './listarcoche.page.html',
  styleUrls: ['./listarcoche.page.scss'],
})
export class ListarcochePage implements OnInit {
  listadecoches:CocheInterface[]=[]
  constructor(private modal:CochemodalService) { }

  ngOnInit() {
  }

}
