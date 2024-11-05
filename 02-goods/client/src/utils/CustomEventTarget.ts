type EventConfig = Record<string, any>;

type Unsubscribe = () => void;

export class CustomEventTarget<T extends EventConfig> {
  eventTarget = new EventTarget();

  remove<K extends keyof T>(
    type: K,
    listener: (event: CustomEvent<T[K]>) => void,
    options?: boolean | AddEventListenerOptions
  ): void {
    this.eventTarget.removeEventListener(
      String(type),
      listener as any,
      options
    );
  }

  add<K extends keyof T>(
    type: K,
    listener: (event: CustomEvent<T[K]>) => void,
    options?: boolean | AddEventListenerOptions
  ): Unsubscribe {
    this.eventTarget.addEventListener(String(type), listener as any, options);

    return () =>
      this.eventTarget.removeEventListener(
        String(type),
        listener as any,
        options
      );
  }

  dispatch<K extends keyof T>(event: K, detail: T[K]): boolean {
    return this.eventTarget.dispatchEvent(
      new CustomEvent(String(event), { detail })
    );
  }
}
