import type { PropsWithChildren, FC } from "react";

declare module "react" {
  export declare type FCC<P = {}> = FC<PropsWithChildren<P>>;
  export declare type Page<P = {}, SP = {}> = FC<RouterParams<S, SP>>;
  export declare type Layout<P = {}> = FCC<RouterParams<P>>;
  export declare type ServerAction<
    State = FormState | undefined,
    Payload = FormData
  > = (state: Awaited<State>, payload: Paylod) => State | Promise<State>;
}

declare type RouteHandlerContext<P> = {
  params: P;
};

declare type RouterParams<P, SP> = {
  params: P;
  searchParams: SP;
};
