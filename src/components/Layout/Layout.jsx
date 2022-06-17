import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoView } from '../TodoView'
import { TodoCreator } from '../TodoCreator'
import { TodoContext } from '../context'

export const Layout = () => {
  return (
    <TodoContext.Consumer>
      {({
        totalTodo,
        completedTodo,
        searchTerm,
        todoList,
        filteredTodo,
        setSearchTerm,
        consumeTodo,
        removeTodo,
        loading
      }) => (
        <>
          <TodoCounter total={totalTodo} completed={completedTodo} />
          <TodoSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <TodoList>
            {loading ? (
              <p>Loading todo...</p>
            ) : filteredTodo.length > 0 ? (
              filteredTodo.map(item => (
                <TodoView
                  key={item.id}
                  text={item.text}
                  completed={item.completed}
                  completeTodo={() => consumeTodo(item.id)}
                  deleteTodo={() => removeTodo(item.id)}
                />
              ))
            ) : (
              todoList.map(item => (
                <TodoView
                  key={item.id}
                  text={item.text}
                  completed={item.completed}
                  completeTodo={() => consumeTodo(item.id)}
                  deleteTodo={() => removeTodo(item.id)}
                />
              ))
            )}
          </TodoList>
          <TodoCreator />
        </>
      )}
    </TodoContext.Consumer>
  )
}
