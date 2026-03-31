import { useEffect } from "react";

export default function AboutMe() {

  useEffect(() => {
    console.log("hello")
  }, []
  )

  return (
    <div>
      <h1>It's a me Bob!</h1>
    </div>
  );
}
