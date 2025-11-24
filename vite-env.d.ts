declare module "*.scss" {
  const content: Record<string, string>; // Or simply 'declare module "*.scss";' if you don't use CSS modules
  export default content;
}

declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}
