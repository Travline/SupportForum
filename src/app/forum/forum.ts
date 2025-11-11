import { Component } from '@angular/core';
import { RootComment } from '../root-comment/root-comment';

@Component({
  selector: 'app-forum',
  imports: [RootComment],
  templateUrl: './forum.html',
  styleUrl: './forum.scss',
})
export class Forum {
  username = 'Luis'
}
