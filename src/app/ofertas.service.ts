import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Oferta } from './shared/oferta.model';

@Injectable()
export class OfertaService{

  constructor( private http: HttpClient){
  }

  public getOfertas(): Promise<Oferta[]>{
    //efetuar uma requizição http
    return this.http.get('http://localhost:3000/ofertas?destaque=true')
    .toPromise()
    .then((resposta: any) => resposta.json());
    //retornar um promise Oferta[]
  }
}






//Codigo abaixo para consumo sem a utilização de um server
  // public ofertas: Array<Oferta> =[

  //     {
  //       id: 1,
  //       categoria: "restaurante",
  //       titulo: "Super Burger",
  //       descricao_oferta: "Rodízio de Mini-hambúrger com opção de entrada.",
  //       anunciante: "Original Burger",
  //       valor: 29.90,
  //       destaque: true,
  //       imagens: [
  //         {url: "/assets/ofertas/1/img1.jpg"},
  //         {url: "/assets/ofertas/1/img2.jpg"},
  //         {url: "/assets/ofertas/1/img3.jpg"},
  //         {url: "/assets/ofertas/1/img4.jpg"}
  //       ]
  //     },
  //     {
  //       id: 2,
  //       categoria: "restaurante",
  //       titulo: "Cozinha Mexicana",
  //       descricao_oferta: "Almoço ou Jantar com Rodízio Mexicano delicioso.",
  //       anunciante: "Mexicana",
  //       valor: 32.90,
  //       destaque: true,
  //       imagens: [
  //         {url: "/assets/ofertas/2/img1.jpg"},
  //         {url: "/assets/ofertas/2/img2.jpg"},
  //         {url: "/assets/ofertas/2/img3.jpg"},
  //         {url: "/assets/ofertas/2/img4.jpg"}
  //       ]

  //     },
  //     {
  //       id: 4,
  //       categoria: "diversao",
  //       titulo: "Estância das águas",
  //       descricao_oferta: "Diversão garantida com piscinas, trilhas e muito mais.",
  //       anunciante: "Estância das águas",
  //       valor: 31.90,
  //       destaque: true,
  //       imagens: [
  //         {url: "/assets/ofertas/3/img1.jpg"},
  //         {url: "/assets/ofertas/3/img2.jpg"},
  //         {url: "/assets/ofertas/3/img3.jpg"},
  //         {url: "/assets/ofertas/3/img4.jpg"},
  //         {url: "/assets/ofertas/3/img5.jpg"},
  //         {url: "/assets/ofertas/3/img6.jpg"}
  //       ]
  //     }

  // ]

  // public getOfertas(): Array<Oferta>{
  //   return this.ofertas;
  // }

//Promese<Ofera[]> mesma coisa, ambos são declarações de Arrays
  // public getOfertas2(): Promise<Array<Oferta>>{
  //   return new Promise((resolve, reject)=> {
  //     //algum tipo de processamento, que ao finalizar chama uma das duas funções acima
  //     let deu_certo = true

  //     if(deu_certo){
  //       setTimeout(() => resolve( this.ofertas ), 3000)

  //     }else{
  //       reject({ codigo_erro: 404, mensagem_erro: 'Servidor não encontrado'});
  //     }
  //   })
  //   .then((ofertas: Oferta[]) =>{
  //     //fazer outra tratativa
  //     console.log('primeiro then');
  //     return ofertas;
  //   })
  //   .then(( ofertas: Oferta[])=>{
  //     console.log('segundo then');
  //     return new Promise((resolve2, reject2) => {
  //       setTimeout(() =>{resolve2(ofertas)},3000);
  //     })
  //   })
  //   .then (( ofertas: Oferta[])=>{
  //     console.log('terceiro then executado apos 3 segundos, pois estava aguardando uma promise ser resolvida');
  //     return ofertas;
  //   })

  // }

