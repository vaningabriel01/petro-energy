export interface ResultadoBusca {
  tipo: 'post' | 'projeto';
  id: number;
  titulo: string;
  descricao: string;
  imagem: string;
  rota: string;
}