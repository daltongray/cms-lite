/**
 * Base type. Define release dependencies by
 * extending this type per release (ie: tsConfig)
 *
 * Integrations can be added to this type w/ syntax:
 *
 *    type deps = Dependencies & Integration
 *
 * Models use this syntax to require integrations
 */
export type Dependencies = {
  logger: {
    log: (message: string, payload?: any) => any;
    warn: (message: string, payload?: any) => any;
    error: (message: string, payload?: any) => any;
  };

  Error: ErrorConstructor;
};
