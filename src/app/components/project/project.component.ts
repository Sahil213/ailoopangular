import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Project } from './project.model';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [ProjectService]
})
export class ProjectComponent implements OnInit {

  @ViewChild('projectNameInput')
  projectNameRef!: ElementRef;

  @ViewChild('projectVersionInput')
  projectVersionRef!: ElementRef;

  @ViewChild('projectGroupInput')
  projectGroupRef!: ElementRef;

  @ViewChild('projectUrlInput')
  projectUrlRef!: ElementRef;

  @ViewChild('projectInstructionsInput')
  projectInstructionsRef!: ElementRef;


  constructor(private projectService : ProjectService) { }

  ngOnInit(): void {
  }

  onAddedProject() {
    const prjName = this.projectNameRef.nativeElement.value;
    const prjVersion = this.projectVersionRef.nativeElement.value;
    const prjGroup = this.projectGroupRef.nativeElement.value;
    const prjUrl = this.projectUrlRef.nativeElement.value;
    const prjInst = this.projectInstructionsRef.nativeElement.value;
    const prjType = 'url';

    const newProject = new Project(prjName,prjVersion,prjGroup,prjType,prjUrl,prjInst);

    this.projectService.addProject(newProject);
  }
}





