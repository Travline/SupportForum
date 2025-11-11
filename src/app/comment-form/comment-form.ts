import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comment-form',
  imports: [],
  templateUrl: './comment-form.html',
  styleUrl: './comment-form.scss',
})
export class CommentForm {
  private http = inject(HttpClient)
  constructor(private router: Router) {}

  sendComment(){
    const content = document.getElementById('comment') as HTMLInputElement
    const body = {
      content: content.value,
      user: 'Polux',
      rootId: null
    }
    this.http.post('https://talkhubback.onrender.com/comments/implement', body, {
      headers: {
        'Full-URL': 'https://support-forum-one.vercel.app'
      }
    }).subscribe({
      next: (res) => {
        alert('Pregunta enviada')
        window.location.reload()
      },
      error: (err) => {
        console.error(err)
        alert('Falló el envío')
      }
    });
  }
}