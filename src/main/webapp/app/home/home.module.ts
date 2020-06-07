import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TaskManagementDemoApplicationSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [TaskManagementDemoApplicationSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class TaskManagementDemoApplicationHomeModule {}
