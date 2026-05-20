import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PostsService } from '../../services/posts';
import { ResultadoBusca } from '../../interfaces/busca';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-busca',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './busca.html',
  styleUrl: './busca.css'
})
export class Busca implements OnInit {
  termo = signal('');
  resultados = signal<ResultadoBusca[]>([]);
  carregando = signal(true);

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.termo.set(params['q'] || '');
      this.buscar();
    });
  }

  buscar() {
    this.carregando.set(true);

    forkJoin({
      posts: this.postsService.getPosts(),
      projetos: this.postsService.getProjetos()
    }).subscribe(({ posts, projetos }) => {
      const termo = this.termo().toLowerCase();

      const postsFiltrados: ResultadoBusca[] = posts
        .filter(p =>
          p.titulo.toLowerCase().includes(termo) ||
          p.resumo.toLowerCase().includes(termo) ||
          p.categoria.toLowerCase().includes(termo)
        )
        .map(p => ({
          tipo: 'post',
          id: p.id,
          titulo: p.titulo,
          descricao: p.resumo,
          imagem: p.imagem,
          rota: `/post/${p.id}`
        }));

      const projetosFiltrados: ResultadoBusca[] = projetos
        .filter(p =>
          p.nome.toLowerCase().includes(termo) ||
          p.descricao.toLowerCase().includes(termo) ||
          p.area.toLowerCase().includes(termo)
        )
        .map(p => ({
          tipo: 'projeto',
          id: p.id,
          titulo: p.nome,
          descricao: p.descricao,
          imagem: p.imagem,
          rota: `/projetos`
        }));

      this.resultados.set([...postsFiltrados, ...projetosFiltrados]);
      this.carregando.set(false);
    });
  }
}