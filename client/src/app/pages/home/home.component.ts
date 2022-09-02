import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data = [{
    cover: 'https://www.claquete.com.br/fotos/filmes/poster/14943_medio.jpg',
    title: 'Pinocchio: O Menino De Madeira',
    synopsis: 'Descubra as aventuras de Pinocchio nesta nova versão de um dos contos clássicos mais amados de todos os tempos. Com a benção de Gepeto, seu pai e criador, Pinocchio sai para conhecer o mundo ao lado de seu cavalo e amigo Tibalt. Juntos eles decidem participar de um circo itinerante, onde Pinocchio percebe que é um belíssimo acrobata, além de descobrir algo que o tornará um menino humano de verdade.',
    duration: '90 min',
    genre: 'Animação'
  },
  {
    cover: 'https://p2.trrsf.com/image/fget/cf/648/0/images.terra.com/2022/07/07/thor-urhbljnp6asx.jpg',
    title: 'Thor: Amor e Trovão',
    synopsis: 'O filme apresenta Thor em uma jornada diferente de tudo que ele já enfrentou – uma busca pela paz interior. Mas sua aposentadoria é interrompida por um assassino galático conhecido como Gorr, o Carniceiro dos Deuses, que busca a extinção dos deuses. Para combater a ameaça, Thor pede a ajuda do Rei Valquíria, Korg e da ex-namorada Jane Foster, que – para surpresa de Thor – inexplicavelmente carrega seu martelo mágico, Mjolnir, como a Poderosa Thor. Juntos, eles embarcam em uma alucinante aventura para descobrir o mistério da vingança do Carniceiro dos Deuses e detê-lo antes que seja tarde demais.',
    duration: '119 min',
    genre: 'Ação, Aventura, Fantasia'
  },
  {
    cover: 'https://br.web.img2.acsta.net/pictures/22/05/18/09/51/0772429.jpg',
    title: 'Elvis',
    synopsis: 'Elvis de Baz Luhrmann explora a vida e a música de Elvis Presley, visto através do prisma de sua complicada relação com seu enigmático empresário, o coronel Tom Parker. A história investiga a complexa dinâmica entre Presley e Parker ao longo de 20 anos, desde a ascensão de Presley à fama até seu estrelato sem precedentes, tendo como pano de fundo a paisagem cultural em evolução e a perda da inocência na América. No centro dessa jornada está uma das pessoas mais importantes e influentes na vida de Elvis, Priscilla Presley.',
    duration: '160 min',
    genre: 'Drama'
  }]
}
