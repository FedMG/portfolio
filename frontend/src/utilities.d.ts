export type DropUndefined<T, K> = K extends keyof T ? Exclude<T[K], undefined> : never
