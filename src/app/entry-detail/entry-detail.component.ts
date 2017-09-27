import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Entry } from '../entry.model';
import { EntryService } from '../entry.service';


@Component({
  selector: 'app-entry-detail',
  templateUrl: './entry-detail.component.html',
  styleUrls: ['./entry-detail.component.css'],
  providers: [EntryService]
})
export class EntryDetailComponent implements OnInit {
  entryId: number;
  entryToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private entryService: EntryService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.entryId = parseInt(urlParameters['id']);
    });
    this.entryToDisplay = this.entryService.getEntryById(this.entryId);
  }

}
