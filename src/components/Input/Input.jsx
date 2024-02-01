const Input = ({ handleSubmit }) => {
  return (
    <form name="todoInput" onSubmit={handleSubmit}>
      <label htmlFor="text">введите тудуху</label>
      <br />
      <input type="text" size={52} />
      <button type="submit">Click me</button>
    </form>
  )
}

export default Input
