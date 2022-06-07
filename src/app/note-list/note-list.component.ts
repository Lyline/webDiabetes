import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faTrashCan} from "@fortawesome/free-regular-svg-icons/faTrashCan";
import {faPenToSquare} from "@fortawesome/free-regular-svg-icons/faPenToSquare";

import {Patient} from "../models/patient.model";
import {MatDialog} from "@angular/material/dialog";
import {NoteAddComponent} from "../note-add/note-add.component";
import {Note} from "../models/note.model";
import {PatientService} from "../patient.service";

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  updateIcon=faPenToSquare;
  deleteIcon=faTrashCan

  @Input() patient!:Patient;

  @Output() patientDataChanged: EventEmitter<any> = new EventEmitter<any>();

  note!: Note;

  constructor(public dialog:MatDialog, private service: PatientService) { }

  ngOnInit(): void {
  }

  createNote(): void {
    const dialogRef=this.dialog.open(NoteAddComponent, {
      width:'450px',height:'500px',
      data:{
        patientId:this.patient.id,
      }
    });

    dialogRef.afterClosed().subscribe((data)=>{
      this.note=data.form;
      if (data.clicked==='submit'){
        this.service.createNote(this.note).subscribe(data => {
          this.patient.notes.push(data);
          this.patientDataChanged.emit();
        })
      }
    })
  }

  updateNote(note: Note) {
    const dialogRef=this.dialog.open(NoteAddComponent, {
      width:'450px',height:'500px',
      data:{
        id: note.id,
        patientId:this.patient.id,
        noteContent: note.noteContent
      }
    });

    dialogRef.afterClosed().subscribe((data)=>{
      this.note=data.form;
      if (data.clicked==='submit'){
        this.service.updateNote(this.note).subscribe(data => {
          let noteIndex= this.patient.notes.findIndex(note=>note.id==this.note.id)
          this.patient.notes[noteIndex]=this.note;
          this.patientDataChanged.emit();
        })
      }
    })
  }

  deleteNote(note: Note) {
    this.service.deleteNote(note).subscribe(() =>{
        this.patient.notes = this.patient.notes.filter(element=>note.id!=element.id);
        this.patientDataChanged.emit();
      }
    )
  }
}

