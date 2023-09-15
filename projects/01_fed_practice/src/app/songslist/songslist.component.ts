import { Component } from '@angular/core';

@Component({
  selector: 'app-songslist',
  templateUrl: './songslist.component.html',
  styleUrls: ['./songslist.component.css']
})
export class SongslistComponent {
title:string="Number of songs in the Playlist: ";
Toggle_btn:string="Toggle Number Of Songs";
sub_title:string="My Playlist";
End_title:string="Enter New Song";
Add_btn:string="Add Song";
isDisabled:boolean=false;

songs:any[]=[
  {
    name:'Chaiya chaiya',
  },
  {
    name:'Naatu Naatu',
  },
  {
    name:'Tere Naam',
  }
];
counter:number=this.songs.length;

fade_out(){
  this.isDisabled=!this.isDisabled;
}


add_songs_toArray(item:any){
this.songs.push({name:item});
this.counter=this.songs.length;
}
}
