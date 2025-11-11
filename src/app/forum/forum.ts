import { Component, OnInit, inject} from '@angular/core';
import { RootComment } from '../root-comment/root-comment';
import { HttpClient } from '@angular/common/http';

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
  imports: [RootComment],
  templateUrl: './forum.html',
  styleUrl: './forum.scss',
})
export class Forum {
  username = 'Luis'
  private http = inject(HttpClient);
  data: CommentsResponse[] = []

  ngOnInit(): void {
    this.http.get('https://talkhubback.onrender.com/implement/replies', {
      headers: {
        'Full-URL': 'https://www.youtube.com/comments'
      }
    }).subscribe({
        next: (res) => {
          this.data = res as CommentsResponse[]
          console.log('Response:', res);
        },
        error: (err) => {
          console.error('Error:', err);
        }
    });

  }
}
