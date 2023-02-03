import { useMediaPredicate } from "react-media-hook";

function useBreakpoints() {
  const less768px = useMediaPredicate("(max-width: 767px)");
  const bigger768px = useMediaPredicate("(min-width: 768px)");

  return { less768px, bigger768px };
}
export default useBreakpoints;


