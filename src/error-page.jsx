import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops! How did you get here</h1>
      <p></p>
      <p></p>
    </div>
  );
}
