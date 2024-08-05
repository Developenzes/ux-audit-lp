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
const hasSubmittedOnce = ref(false);

const handleSubmit = () => {
  if (!hasSubmittedOnce.value) {
    snackbar.add({
      type: "error",
      text: "Niečo sa pokazilo",
    });
    hasSubmittedOnce.value = true;
  } else {
    snackbar.add({
      type: "success",
      text: "Formulár úspešne odoslaný!",
    });
    props.closeModal();
  }
};
</script>

<template>
  <form class="form" @submit.prevent="handleSubmit">
    <h3 class="form-title">Jednoducho nám napíšte a my sa vám ozveme.</h3>
    <div class="form-group">
      <label for="name">Meno: <span class="required">*</span></label>
      <input type="text" id="name" v-model="name" required />
    </div>
    <div class="two-columns">
      <div class="form-group">
        <label for="email">E-mail: <span class="required">*</span></label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="phone">Tel. číslo:</label>
        <input type="text" id="phone" v-model="phone" />
      </div>
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
        rows="5"
        required
      ></textarea>
    </div>
    <button type="submit" class="submit-button btn">Kontaktujte ma</button>
  </form>
</template>

<style lang="scss">
.form {
  padding: 2.5rem 1.25rem 1.875rem;
  @media (max-width: 610px) {
    padding: 2.75rem 0 0;
  }
}
.form-title {
  text-align: center;
  margin-bottom: 1.25rem;
  max-width: 90%;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 1.5rem;
  font-family: "Mulish", sans-serif;
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 900;
  }
}

.required {
  color: $secondary-color;
}

input,
textarea {
  width: 100%;
  padding: 0.8rem 1rem;
  border: none;
  outline: none;
  border-radius: 4px;
  background-color: $neutral-2;
  transition: box-shadow 0.3s ease;
  &:focus {
    box-shadow: 0 0 2px 2px $neutral;
  }
  &::placeholder {
    color: $neutral-3;
  }
  &:required {
    &:invalid {
      box-shadow: 0 0 2px 2px $secondary-color;
    }
  }
}

.submit-button {
  width: 100%;
  height: 4.5rem;
  font-size: 1.25rem;
}

.two-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1.5rem;
  @media (max-width: 610px) {
    grid-template-columns: 1fr;
  }
}
</style>
