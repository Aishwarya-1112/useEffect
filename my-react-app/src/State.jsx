import { useEffect, useState } from "react";
function State() {
  const [newButton, setnewButton] = useState("posts");
  useEffect(() => {
    console.log("render value");
    return () => {
      console.log("return ");
    };
  }, [{ newButton }]);

  return (
    <>
      <div>
        <button onClick={() => setnewButton("posts")}>Posts</button>
        <button onClick={() => setnewButton("comments")}>Comments</button>
        <button onClick={() => setnewButton("share")}>Share</button>
      </div>
      <h1>{newButton}</h1>
    </>
  );
}
export default State;
