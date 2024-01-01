import { useLocation } from "react-router-dom";

const DefaultCaptureToolsPage = (): JSX.Element => {
  const location = useLocation();
  return <h1>Default Page - {location.pathname}</h1>;
};

export default DefaultCaptureToolsPage;
