import { Component, OnInit } from '@angular/core';
import { EntryService } from '../entry.service';
import { Entry } from '../entry.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [EntryService]
})
export class AdminComponent implements OnInit {

  constructor(private entryService: EntryService) { }

  ngOnInit() {
  }

  submitForm(title: string, author: string, description: string, goal: number) {
    var newEntry: Entry = new Entry(title, author, description, goal);
    this.entryService.addEntry(newEntry);
    console.log('new entry added');
  }

}
