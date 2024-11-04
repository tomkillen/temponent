export type Component = (props?: any) => string;

const render = (component: Component): string => {
  return component();
}

export default render;