import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {SampleLBdbDataSource} from '../datasources';
import {Home, HomeRelations} from '../models';

export class HomeRepository extends DefaultCrudRepository<
  Home,
  typeof Home.prototype.id,
  HomeRelations
> {
  constructor(
    @inject('datasources.sampleLBdb') dataSource: SampleLBdbDataSource,
  ) {
    super(Home, dataSource);
  }
}
