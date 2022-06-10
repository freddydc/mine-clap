function App(props) {
  return (
    <div className="container">
      <header>{props.message}</header>
      {props.children}
    </div>
  )
}

export default App
