import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    todos: [],
    todoForm: {
      title: null,
      userId: 1,
      completed: false,
    },
    editId: 0,
    isEdit: true,
  }),

  getters: {},

  actions: {
    async getAllTodos() {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );

      this.todos = data;
    },

    async createTodo() {
      const { data } = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        this.todoForm
      );

      this.todos.push(data);
      this.todos.reverse();
      this.todoForm.title = null;
    },

    async DeleteTodo(id) {
      const { data } = await axios.delete(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );

      // console.log(data);

      this.todos = this.todos.filter((todo) => {
        return todo.id != id;
      });
    },

    async EditTodo(id) {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );

      this.todoForm.title = data.title;
      this.todoForm.userId = data.userId;
      this.todoForm.completed = data.completed;
      this.isEdit = false;
      this.editId = id;
    },

    async UpdateTodo(id) {
      const { data } = await axios.put(
        `https://jsonplaceholder.typicode.com/todos/${id}`, this.todoForm);

        this.todos.push(data);
        this.todos.reverse();
        this.todoForm.title = null;
        this.isEdit = true
    },
  },
});
