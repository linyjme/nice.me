/**
 * @file Type transformer
 * @module transformer/type
 * @author Linyj <https://github.com/Linyj>
 */

export type WithoutInstallStore<S> = S extends Plugin
  ? Omit<S, 'install'>
  : S
