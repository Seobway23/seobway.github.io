// types.ts
export type RouteType = {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
  children?: RouteType[];
};
