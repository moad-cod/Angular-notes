import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser"; //for working on the website
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
// import { TasksComponent } from "./tasks/tasks.component";
// import { CardComponent } from "./shared/card/card.component";
// import { NewTaskComponent } from "./tasks/new-task/new-task.component";
// import { TaskComponent } from "./tasks/task/task.component";
// import { FormsModule } from "@angular/forms";
// import { CardComponent } from "./shared/card/card.component";
import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./tasks/tasks.module";

// Modules and standAlone componenets are rivaling concepts. 
@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        UserComponent,
        // TasksComponent,
        // CardComponent,
        // TaskComponent,
        // NewTaskComponent,
    ], //fixed on main.ts
    bootstrap: [AppComponent],
    imports: [BrowserModule, SharedModule, TasksModule], //Datepipe automatically included

})
export class AppModule {}