<script setup>

import { useTodoStore } from './stores/todo';
import { onMounted } from 'vue';

const TodoStore = useTodoStore();


onMounted(() => {
  TodoStore.getAllTodos();
})

</script>

<template>

  <div class="container">
    <div class="row my-5">

      <div class="col-md-12">

        <div class="card">

          <div class="card-body">

            <h4 class="card-title text-center">Task List</h4>

            <div class="row mb-3">

              <form action="">

                <div class="col-md-12">

                  <label for="" class="form-label">
                  <span v-if="TodoStore.isEdit">Add New Task</span> 
                  <span v-else>Update Task</span> 
                  </label>

                  <input type="text" class="form-control" v-model="TodoStore.todoForm.title">

                  <div class="mt-3" v-if="TodoStore.isEdit">
                    <input type="button" class="btn btn-success" value="Add Task" @click.prevent="TodoStore.createTodo">
                  </div>

                  <div class="mt-3" v-else>
                    <input type="button" class="btn" :class="TodoStore.isEdit ? '': 'btn-warning'" value="Update Task" @click.prevent="TodoStore.UpdateTodo(TodoStore.editId)">
                  </div>


                </div>


              </form>
            </div>

          </div>


          <div class="card-body">
            <h4 class="text-danger">Task List</h4>

            <ul class="list-group">

              <li v-for="todo in TodoStore.todos" :key="todo.id"
                class="list-group-item d-flex justify-content-between align-items-center">

                <div>
                

                  <input type="checkbox" name="" id="" class="form-input-check me-2">

                  <span :class="todo.completed ? 'text-decoration-line-through' : ''">{{ todo.title }}</span>
                
                </div>

                <div>
                  <button  class="btn" @click.prevent="TodoStore.EditTodo(todo.id)">
                  <i class="fa-solid fa-edit"></i>
                </button>

                <button class="btn" @click.prevent="TodoStore.DeleteTodo(todo.id)">
                  <i class="fa-solid fa-xmark"></i>
                </button>
                
                </div>

                

              </li>
            </ul>
          </div>

        </div>
      </div>

    </div>

  </div>

</template>

<style scoped>

</style>
