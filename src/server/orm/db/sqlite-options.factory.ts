import { interfaces } from 'inversify';
import { registry } from 'src/server/orm/registry';
import { ConnectionOptions } from 'typeorm';

export const sqliteConnectionOptionsFactory: interfaces.FactoryCreator<ConnectionOptions> =
  (context: interfaces.Context) => {
    return (overrides?: Partial<ConnectionOptions>) => {
      if (!overrides) {
        overrides = Object.create(null);
      }

      const baseSettings = context.container
        .getTagged<interfaces.Factory<ConnectionOptions>>(registry.ORMConnectionOptionsFactory, 'type', registry.ORMBaseConnectionOptionsFactory)(overrides);

      const sqliteSettings: Partial<ConnectionOptions> = {
        type: 'sqlite',
        database: ':memory:'
      };

      return {
        ...baseSettings,
        ...sqliteSettings,
        ...overrides
      } as ConnectionOptions;
    };
  };
