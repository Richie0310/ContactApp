import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactManagerComponent } from './contact-manager/contact-manager.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UpdateComponentComponent } from './update-component/update-component.component';
import { ViewContactComponent } from './view-contact/view-contact.component';

const routes: Routes = [
  // to redirect automatically from localhost:4200 to contactmanager
  {
    path: '', redirectTo: '/contacts/admin', pathMatch: 'full'
  },
  // path for ContactManagerComponent - home

  {
    path: 'contacts/admin', component: ContactManagerComponent
  },
 // path for AddContactComponent
  {
    path: 'contacts/add', component:AddContactComponent
  },
  // path for UpdateComponentComponent

  {
    path: 'contacts/edit/:contactId', component:UpdateComponentComponent
  },
    // path for ViewContactComponent
  {
    path:'contacts/view/:contactId', component:ViewContactComponent
  },

// path for PageNotFoundComponent

  {
   path:'**', component:PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
