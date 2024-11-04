export function jsx(tag: string, props: any, ...children: any) {
  return { tag, props: props || {}, children };
}
export function jsxs(tag: string, props: any, ...children: any) {
  return { tag, props: props || {}, children };
}