type Modes = Record<string, boolean | string>;

export function classNames(cls: string, modes: Modes, additional: string[]) {
  return [
    cls,
    ...additional,
    ...Object.entries(modes)
      .filter(([className, val]) => Boolean(val))
      .map(([className]) => className),
  ].join(' ');
}
