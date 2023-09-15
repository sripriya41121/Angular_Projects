import { Component } from '@angular/core';

@Component({
  selector: 'app-songlist',
  templateUrl: './songlist.component.html',
  styleUrls: ['./songlist.component.css']
})
export class SonglistComponent {
  title: string = 'My Playlist';
  sub_title: string = "Number of Songs in my Playlist:";
  button_title: string ="Toggle Number of Songs ";
  end_title: string ="Enter new song";
  add_button: string ="Add Song";
  isDisabled:boolean=false;
  
  songs: any[]=[

    {
       name: 'song1',
    },

    {
      name: 'song2',
   },

   {
    name: 'song3',
   }
   
  ]
  songs_counter: number =this.songs.length;
  
  fade_sub_title(){
    this.isDisabled=!this.isDisabled;

  }
  
  add_song_to_array(item: any){

    this.songs.push({name:item});
    this.songs_counter=this.songs.length;
  }
  
  
}
