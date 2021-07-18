import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist-item',
  templateUrl: './playlist-item.component.html',
  styleUrls: ['./playlist-item.component.scss']
})
export class PlaylistItemComponent implements OnInit {

  constructor() { }

  thumbnailImgURL = "https://i.ytimg.com/vi/1qhy8rsnOLk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCllIs7Or9ODSL6DBz8gpogkTQaMw"
  videoTitle ="New 2021 Lada Niva Legend 4x4 full review"
  channelName = "The Late Break Show"

  ngOnInit(): void {
  }

}
