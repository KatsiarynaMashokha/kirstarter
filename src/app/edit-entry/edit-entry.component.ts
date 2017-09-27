import { Component, Input, OnInit } from '@angular/core';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-edit-entry',
  templateUrl: './edit-entry.component.html',
  styleUrls: ['./edit-entry.component.css'],
  providers: [EntryService]
})
export class EditEntryComponent implements OnInit {
  @Input() selectedEntry;

  constructor(private entryService: EntryService) { }

  ngOnInit() {
  }

  beginUpdatingEntry(entryToUpdate){
    this.entryService.updateEntry(entryToUpdate);
  }

  beginDeletingEntry(entryToDelete) {
    if(confirm("Are you sure you want to delete an entry from the list?")) {
      this.deleteEntry(entryToDelete);
    }
  }

  deleteEntry(localEntryToDelete) {
    let entryInFirebase = this.entryService.getEntryById(localEntryToDelete.$key);
    entryInFirebase.remove();
  }
}
