import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Sobre } from './pages/sobre/sobre';
import { Projetos } from './pages/projetos/projetos';
import { PostView } from './pages/post-view/post-view';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'sobre',
    component: Sobre
  },
  {
    path: 'projetos',
    component: Projetos
  },
  {
    path: 'post/:id',
    component: PostView
  },
  {
    path: '**',
    redirectTo: ''
  }
];
