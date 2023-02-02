<script setup>

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

                  <label for="" class="form-label">Add Task</label>

                  <input type="text" class="form-control">

                  <div class="mt-3">


                    <input type="button" class="btn btn-success" value="add task">

                  </div>
                </div>


              </form>
            </div>

          </div>


          <div class="card-body">
            <h4 class="text-danger">Task List</h4>

            <ul class="list-group">

              <li class="list-group-item d-flex justify-content-between align-items-center">List Item


              <a href="" class="btn">
              <i class="fa-solid fa-xmark"></i>
              </a>

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
