import { firestore } from "../firebase";
import { useFormInput } from "./hooks";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const navigate = useNavigate();
  const title = useFormInput("");
  const subTitle = useFormInput("");
  const content = useFormInput("");

  function handleSubmit(e) {
    e.preventDefault();

    firestore.collection("posts").add({
      title: title.value,
      subTitle: subTitle.value,
      content: content.value,
      createdAt: new Date(),
    });
    navigate("/");
  }

  return (
    <div className="create-post">
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Title</label>
          <input {...title} />
        </div>

        <div className="form-field">
          <label>SubTitle</label>
          <input {...subTitle} />
        </div>

        <div className="form-field">
          <label>Content</label>
          <textarea {...content}></textarea>
        </div>
        <button className="create-post-btn">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
