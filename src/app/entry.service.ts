import { Injectable } from '@angular/core';
import { Entry } from './entry.model';
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

  getEntryById(entryId: string){
    return this.database.object('entries/' + entryId);
}

addEntry(newEntry: Entry) {
  this.entries.push(newEntry);
}

updateEntry(localUpdatedEntry){
  var entryInFirebase = this.getEntryById(localUpdatedEntry.$key);
  entryInFirebase.update({title: localUpdatedEntry.title, author: localUpdatedEntry.author, description: localUpdatedEntry.description, goal: localUpdatedEntry.goal});
}

}
