import { Component, OnInit } from '@angular/core';
import { Entry } from '../entry.model';
import { Router } from '@angular/router';
import { EntryService } from '../entry.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [EntryService]
})
export class WelcomeComponent implements OnInit {
  constructor(private router: Router, private entryService: EntryService){}
  entries: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  goToDetailPage(clickedEntry) {
    this.router.navigate(['entries', clickedEntry.$key]);
    console.log(clickedEntry.title);
  };

  ngOnInit() {
    this.entries = this.entryService.getEntry();
  }

}
