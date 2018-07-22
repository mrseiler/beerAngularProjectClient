import { DrinkerRoutingModule } from './drinker-routing.module';

describe('DrinkerRoutingModule', () => {
  let drinkerRoutingModule: DrinkerRoutingModule;

  beforeEach(() => {
    drinkerRoutingModule = new DrinkerRoutingModule();
  });

  it('should create an instance', () => {
    expect(drinkerRoutingModule).toBeTruthy();
  });
});
