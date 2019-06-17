import { Component,OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PriorityComponent } from '../components/priority/priority.component';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements  OnInit{

  members = [];
  
 member = {"name":"Rishi","email":"rishi@gmail.com","Ph_No":"909087652","Age":"23"};
 
 teamImages:Array<string>;
 
constructor(public popoverController: PopoverController) {}

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PriorityComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();


  }

  ngOnInit(){

    this.members = [
      {"name":"Rishi","email":"rishi@gmail.com","Ph_No":"909087652","Age":"23","avatar":"../../assets/im1.png"},
      {"name":"Ridhi","email":"ridhi@gmail.com","Ph_No":"909456652","Age":"24","avatar":"../../assets/im2.png"},
      {"name":"Nihal","email":"nihal@gmail.com","Ph_No":"819087652","Age":"21","avatar":"../../assets/im3.png"},
      {"name":"Rishi","email":"rishi@gmail.com","Ph_No":"909087652","Age":"23","avatar":"../../assets/im1.png"},
      {"name":"Rishi","email":"rishi@gmail.com","Ph_No":"909087652","Age":"24","avatar":"../../assets/im2.png"}
    ]


    this.teamImages=['../../assets/im1.png', '../../assets/im2.png','../../assets/im3.png', '../../assets/im1.png']
   }
 
}