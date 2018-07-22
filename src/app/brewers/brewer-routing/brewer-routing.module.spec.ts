import { BrewerRoutingModule } from './brewer-routing.module';

describe('BrewerRoutingModule', () => {
  let brewerRoutingModule: BrewerRoutingModule;

  beforeEach(() => {
    brewerRoutingModule = new BrewerRoutingModule();
  });

  it('should create an instance', () => {
    expect(brewerRoutingModule).toBeTruthy();
  });
});
