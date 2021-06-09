import { Component, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
//export class HeaderComponent implements OnInit {
  export class HeaderComponent{
    public isCollapsed = true;
  // constructor() { }

  // ngOnInit(): void {
  // }

}