import { EventEmitter } from "@angular/core";
import { Project } from "./project.model";

export class ProjectService {
    projectChanged = new EventEmitter<Project>();

    private projects: Project[] = [];

    addProject(project:Project){
      const pr = this.projects.push(project);
      console.log(pr);
       localStorage.setItem('project',JSON.stringify(project));
    }
}
