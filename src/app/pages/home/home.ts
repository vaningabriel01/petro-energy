import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostsService } from '../../services/posts';
import { PostCard } from '../../components/post-card/post-card';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, PostCard],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  posts = signal<Post[]>([]);

  constructor(private postsService: PostsService) {
    this.postsService.getPosts().subscribe({
      next: (dados) => {
        this.posts.set(dados.slice(0, 3));
      },
      error: (err) => console.error('Erro:', err)
    });
  }
}
