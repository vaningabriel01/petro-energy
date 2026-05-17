import { Component, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PostsService } from '../../services/posts';
import { Post } from '../../interfaces/post';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-post-view',
  standalone: true,
  imports: [RouterModule, DatePipe],
  templateUrl: './post-view.html',
  styleUrl: './post-view.css'
})
export class PostView {
  post = signal<Post | null>(null);
  carregando = signal(true);
  erro = signal(false);

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postsService.getPostById(id).subscribe({
      next: (dados) => {
        this.post.set(dados);
        this.carregando.set(false);
      },
      error: () => {
        this.erro.set(true);
        this.carregando.set(false);
      }
    });
  }
}
