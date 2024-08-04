<script setup>
const props = defineProps({
  closeModal: Function,
});

const name = ref("");
const email = ref("");
const phone = ref("");
const website = ref("");
const note = ref("");

const snackbar = useSnackbar();
const handleSubmit = () => {
  snackbar.add({
    type: "success",
    text: "Formulár úspešne odoslaný!",
  });

  //   snackbar.add({
  //     type: "error",
  //     text: "Niečo sa pokazilo",
  //   });
  props.closeModal();
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <h3 class="form-title">Jednoducho nám napíšte a my sa vám ozveme.</h3>
    <div class="form-group">
      <label for="name">Meno: <span class="required">*</span></label>
      <input type="text" id="name" v-model="name" required />
    </div>
    <div class="form-group">
      <label for="email">E-mail: <span class="required">*</span></label>
      <input type="email" id="email" v-model="email" required />
    </div>
    <div class="form-group">
      <label for="phone">Tel. číslo:</label>
      <input type="text" id="phone" v-model="phone" />
    </div>
    <div class="form-group">
      <label for="website">Webstránka:</label>
      <input type="url" id="website" v-model="website" />
    </div>
    <div class="form-group">
      <label for="note">Poznámka: <span class="required">*</span></label>
      <textarea
        id="note"
        v-model="note"
        placeholder="Je niečo čo by ste sa nás chceli spýtať?"
        required
      ></textarea>
    </div>
    <button type="submit" class="submit-button">Kontaktujte ma</button>
  </form>
</template>

<style lang="scss">
.form-title {
  text-align: center;
  margin-bottom: 20px;
  max-width: 90%;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.required {
  color: red;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f2f2f2;
}

.submit-button {
  background-color: #ff3366;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
}

.submit-button:hover {
  background-color: #e02d5f;
}
</style>
