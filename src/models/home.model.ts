import {Entity, model, property} from '@loopback/repository';

@model()
export class Home extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  header: string;

  @property({
    type: 'string',
    required: true,
  })
  title: string;


  constructor(data?: Partial<Home>) {
    super(data);
  }
}

export interface HomeRelations {
  // describe navigational properties here
}

export type HomeWithRelations = Home & HomeRelations;
