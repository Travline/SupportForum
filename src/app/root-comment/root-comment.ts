import { Component, Input } from '@angular/core';
import { ReplyComment } from '../reply-comment/reply-comment';

@Component({
  selector: 'app-root-comment',
  imports: [],
  templateUrl: './root-comment.html',
  styleUrl: './root-comment.scss',
})
export class RootComment {
  @Input() user: string = ''
  @Input() content: string = ''
  @Input() date: string = ''
}
