import { useMemo } from "react";
import { useLocation, Navigate } from "react-router-dom";

const DocInsight = () => {
  const { search } = useLocation();
  const query = useMemo(() => new URLSearchParams(search), [search]);
  const docId = query.get("id");

  if (!docId) {
    return <Navigate to="/dashboard" />;
  }

  console.log({ docId });
  return <div>DocInsight</div>;
};

export default DocInsight;
