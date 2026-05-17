import { Component, signal } from '@angular/core';
import { PostsService } from '../../services/posts';
import { Projeto } from '../../interfaces/projetos';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [],
  templateUrl: './projetos.html',
  styleUrl: './projetos.css'
})
export class Projetos {
  projetos = signal<Projeto[]>([]);

  constructor(private postsService: PostsService) {
    this.postsService.getProjetos().subscribe({
      next: (dados) => {
        this.projetos.set(dados);
      },
      error: (err) => console.error('Erro:', err)
    });
  }
}
