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
  data = [
  {
    "idComment": 5,
    "rootId": null,
    "user": "Anónimo",
    "userRef": null,
    "content": "a",
    "replies": 0,
    "created": "2025-11-09 19:33:06",
    "comments": []
  },
  {
    "idComment": 2,
    "rootId": null,
    "user": "Anónimo",
    "userRef": null,
    "content": "increible",
    "replies": 0,
    "created": "2025-11-09 19:07:14",
    "comments": []
  },
  {
    "idComment": 1,
    "rootId": null,
    "user": "Anónimo",
    "userRef": null,
    "content": "like si respiras",
    "replies": 12,
    "created": "2025-11-09 15:55:45",
    "comments": [
      {
        "idComment": 6,
        "rootId": 1,
        "replyTo": 1,
        "user": "Anónimo",
        "userRef": null,
        "content": "pipotam",
        "created": "2025-11-09 20:58:39",
        "replies": 1
      },
      {
        "idComment": 7,
        "rootId": 1,
        "replyTo": 6,
        "user": "Anónimo",
        "userRef": null,
        "content": "ola",
        "created": "2025-11-10 15:22:09",
        "replies": 0
      },
      {
        "idComment": 9,
        "rootId": 1,
        "replyTo": 1,
        "user": " <strong><Moderador></strong>",
        "userRef": "4",
        "content": "xdddd",
        "created": "2025-11-10 23:42:26",
        "replies": 0
      },
      {
        "idComment": 10,
        "rootId": 1,
        "replyTo": 1,
        "user": " <strong><Moderador></strong>",
        "userRef": "4",
        "content": "bro respeta",
        "created": "2025-11-10 23:44:23",
        "replies": 0
      },
      {
        "idComment": 11,
        "rootId": 1,
        "replyTo": 1,
        "user": " <strong><Moderador></strong>",
        "userRef": "4",
        "content": "bro respeta",
        "created": "2025-11-10 23:45:15",
        "replies": 0
      },
      {
        "idComment": 12,
        "rootId": 1,
        "replyTo": 1,
        "user": " <strong><Moderador></strong>",
        "userRef": "4",
        "content": "bro respeta",
        "created": "2025-11-10 23:45:43",
        "replies": 1
      },
      {
        "idComment": 13,
        "rootId": 1,
        "replyTo": 1,
        "user": "Anónimo <strong><Moderador></strong>",
        "userRef": "4",
        "content": "se acabó",
        "created": "2025-11-10 23:46:42",
        "replies": 0
      },
      {
        "idComment": 14,
        "rootId": 1,
        "replyTo": 1,
        "user": "Anónimo <Moderador>",
        "userRef": "4",
        "content": "aber",
        "created": "2025-11-11 06:20:25",
        "replies": 0
      },
      {
        "idComment": 15,
        "rootId": 1,
        "replyTo": 1,
        "user": "Travline <Soporte>",
        "userRef": "4",
        "content": "prueba",
        "created": "2025-11-11 06:22:41",
        "replies": 0
      },
      {
        "idComment": 17,
        "rootId": 1,
        "replyTo": 1,
        "user": "Travline <Soporte>",
        "userRef": "4",
        "content": "probando",
        "created": "2025-11-11 15:55:00",
        "replies": 1
      }
    ]
  }
]
}
