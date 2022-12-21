import { Observable, Subject } from 'rxjs';
import { take } from 'rxjs/operators';

/**
 * Gets the current value of an observable, or undefined if the observable has
 * not emitted a value yet.
 *
 * @param observable$ the observable to get the value from.
 */
export const getCurrentValue = <T>(observable$: Observable<T>) => {
  let value!: T;
  observable$
    .pipe(take(1))
    .subscribe((v) => (value = v))
    .unsubscribe();

  return value;
};

/**
 * Updates the value of the provided Subject.
 * An `update` can either be a new value or a function which takes
 * the current value and returns a new value.
 *
 * @param subject the subject to update.
 * @param update the update to apply to the subject.
 * @return the updated value.
 */
export const setCurrentValue = <T>(
  subject: Subject<T>,
  update: T | ((currentValue: T) => T),
) => {
  const currentValue = getCurrentValue(subject);
  const next =
    // TypeScript needs more context to infer the type of update
    typeof update === 'function' && update instanceof Function
      ? update(currentValue)
      : update;

  subject.next(next);
  return getCurrentValue(subject);
};
