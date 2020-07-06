import { Callbacks } from './callbacks.interface';

/**
 * List of available settings.
 *
 * @export
 * @interface DefaultSettings
 */
export interface DefaultSettings {
    grid      : Array<Array<number>>;
    diagonal  : boolean;
    obstacles : Array<number>;
    callbacks?: Callbacks;
}