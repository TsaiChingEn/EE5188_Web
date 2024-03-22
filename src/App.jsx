import { useState } from 'react'
function App() {
  const [textInput, setTextInput] = useState({ name: '', message: '' })
  const [comments, setComments] = useState(
    /** @type {{name: string, message: string}[]} */([])
  )
  // next page content
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input name="name" value={textInput.name} onChange={handleTextInputChange} />
        <input name="message" value={textInput.message} onChange={handleTextInputChange} />
        <input type="submit" value="Submit" />
      </form>
      <div>
        {comments.map((comment, index) =>
          <div key={index}>{comment.name}: {comment.message}</div>
        )}
      </div>
    </div>
  );
}
export default App;

/** @type {React.ChangeEventHandler<HTMLInputElement>} */
  const handleTextInputChange = ({ target: { name, value } }) => {
  // const { name, value } = event.target
  // obj = { ...prev }; obj[name] = value
  setTextInput(prev => ({
    ...prev,
    [name]: value,
  }))
}

/** @type {React.FormEventHandler<HTMLFormElement>} */
const handleFormSubmit = (event) => {
  setComments(prev => [...prev, textInput])
  setTextInput({ name: '', message: '' })
  event.preventDefault();
}