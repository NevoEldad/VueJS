<template>
  <base-card>
    <form action>
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" id="title" name="title" />
      </div>
      <div class="form-control">
        <label for="desc">Description</label>
        <textarea id="desc" name="desc"></textarea>
      </div>
      <div class="form-control">
        <label for="link">Title</label>
        <input type="url" id="link" name="link" />
      </div>
      <base-button type="submit">Add Resource</base-button>
    </form>
  </base-card>
</template>