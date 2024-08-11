declare module "*.svg" {
    import { ReactElement, SVGProps } from "react";
    const ReactComponent: React.FC<SVGProps<SVGSVGElement>>;
    export { ReactComponent };
    export default ReactComponent;
  }
  