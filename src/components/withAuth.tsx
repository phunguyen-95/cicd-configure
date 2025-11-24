import { ComponentType } from "react";

interface AuthenProps {
  isAuthed: boolean;
}

export const withAuth = <P extends object>(
  WrappedComponent: ComponentType<P & AuthenProps>
) => {
    const isAuthen = true

  const HOCComp = (props: P) => {
    if(!isAuthen) return <>Not Auth</>
    return <WrappedComponent {...props} isAuthed={isAuthen} />;
  };


  return HOCComp;
};
