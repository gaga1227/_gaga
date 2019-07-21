import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated: EventEmitter<{serverName: string, serverContent: string}> = new EventEmitter();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  // newServerName = '';
  // newServerContent = '';

  @ViewChild('serverContentInput', {static: true}) serverContentInputRef: ElementRef;

  constructor() { }

  onAddServer(serverNameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: serverNameInput.value, // passed in from method param from template
      serverContent: this.serverContentInputRef.nativeElement.value // passed into component via @Viewchild
    });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContentInputRef.nativeElement.value
    });
  }

  ngOnInit() {
  }

}
