import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyContact } from 'src/models/mycontact';
import { MyGroup } from 'src/models/mygroup';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-update-component',
  templateUrl: './update-component.component.html',
  styleUrls: ['./update-component.component.css']
})
export class UpdateComponentComponent implements OnInit {

  contactId: string = ''
  contact: MyContact = {} as MyContact
  groups: MyGroup[] = [] as MyGroup []

  constructor(private activateRoute: ActivatedRoute, private api: ApiService,private router:Router) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((data) => {
      console.log(data['contactId']);
      this.contactId = data['contactId']

    })

    // call api to get a particular contact detail
    this.api.viewContact(this.contactId).subscribe((data: any) => {
      this.contact = data
      console.log(this.contact);

    }
    )

    // call api to get all groups from service class
    this.api.getAllGroups().subscribe((data: any) => {
      this.groups = data

    })
    

  }

  // updateContact
  updateContact(){
  // api call for updating the existing contact, arg: updated contact , contact id
  this.api.updateContact(this.contactId,this.contact).subscribe((data:any)=>{
    this.router.navigateByUrl('')
  })

  }


}


