import { Injectable } from '@angular/core';
import { Entry } from './entry.model';
//import { ENTRIES } from './mock-entries';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class EntryService {
  entries: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
  this.entries = database.list('entries');
 }

  getEntry() {
    return this.entries;
  }

  getEntryById(entryId: number){
  // for (var i = 0; i <= ENTRIES.length - 1; i++) {
  //   if (ENTRIES[i].id === entryId) {
  //     return ENTRIES[i];
  //   }
  // }
}

addEntry(newEntry: Entry) {
  this.entries.push(newEntry);
}

}
