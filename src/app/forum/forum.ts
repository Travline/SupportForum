import { Component, OnInit, inject} from '@angular/core';
import { RootComment } from '../root-comment/root-comment';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CommentForm } from '../comment-form/comment-form';

interface CommentsResponse {
  idComment: number
  rootId: number | null
  user: string
  userRef: string | null
  content: string
  replies: number
  created: string
  comments: any[]
}
@Component({
  selector: 'app-forum',
  imports: [RootComment, CommonModule, CommentForm],
  templateUrl: './forum.html',
  styleUrl: './forum.scss',
})
export class Forum {
  username = 'Luis'
  private http = inject(HttpClient);
  data$ = this.http.get<CommentsResponse[]>(
    'https://talkhubback.onrender.com/comments/implement/replies',
    {
      headers: {
        'Host-URL': 'https://support-forum-one.vercel.app',
        'Full-URL': 'https://support-forum-one.vercel.app'
      }
    })

}
