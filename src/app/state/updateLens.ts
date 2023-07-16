import { Lens, Traversal } from "monocle-ts";
import { Dispatch, SetStateAction } from "react";

export type Update<T> = Dispatch<SetStateAction<T>>;

export function lensToUpdate<S, A>(
  lens: Lens<S, A> | Traversal<S, A>,
  update: Update<S>
): Update<A> {
  return (newState) => {
    if (typeof newState !== "function") return update(lens.set(newState));

    if (isFunction(newState)) return update(lens.modify(newState));
  };
}

function isFunction(arg: unknown): arg is CallableFunction {
  return typeof arg === "function";
}
