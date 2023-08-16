export type DropUndefined<T, K> = K extends keyof T ? Exclude<T[K], undefined> : never
export type AddDisplayName<T> = T & { displayName: string }

type CallbackWithoutParams = () => void
type CallbackWithParams<T> = (params: T) => void
export type AddVoidCallback<T> = T extends undefined ? CallbackWithoutParams : CallbackWithParams<T>
export type AddCallback<T> = () => T

export type AddReactComponent<T> = React.ComponentType<T>
export type GetProperties<T> = React.ComponentProps<T>
