import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoView } from '../TodoView'
import { TodoCreator } from '../TodoCreator'

export const Layout = ({
  totalTodo,
  completedTodo,
  searchTerm,
  todoList,
  filteredTodo,
  setSearchTerm,
  consumeTodo,
  removeTodo
}) => {
  return (
    <>
      <TodoCounter total={totalTodo} completed={completedTodo} />
      <TodoSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <TodoList>
        {filteredTodo.length > 0
          ? filteredTodo.map(item => (
              <TodoView
                key={item.id}
                text={item.text}
                completed={item.completed}
                completeTodo={() => consumeTodo(item.id)}
                deleteTodo={() => removeTodo(item.id)}
              />
            ))
          : todoList.map(item => (
              <TodoView
                key={item.id}
                text={item.text}
                completed={item.completed}
                completeTodo={() => consumeTodo(item.id)}
                deleteTodo={() => removeTodo(item.id)}
              />
            ))}
      </TodoList>
      <TodoCreator />
    </>
  )
}
