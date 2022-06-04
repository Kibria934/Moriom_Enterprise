import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          position: match ? "relative" : "none",
          paddingLeft: match ? "8px" : "0",
          paddingRight: match ? "7px" : "0",
          paddingTop: match ? "12px" : "0",
          paddingBottom: match ? "8px" : "0",
          borderBottomRightRadius: match ? "10px" : "0",
          borderTopRightRadius: match ? "10px" : "0",
          left: match ? "-8px" : "0",
          backgroundColor: match ? "white" : "transparent",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}
export default CustomLink;
