<script setup>
const props = defineProps({
  closeModal: Function,
});

const name = ref("");
const email = ref("");
const phone = ref("");
const website = ref("");
const note = ref("");

const nameError = ref("");
const emailError = ref("");
const noteError = ref("");

const snackbar = useSnackbar();
const hasSubmittedOnce = ref(false);

const validateName = (value) => {
  nameError.value = value ? "" : "Meno je povinné.";
};

const validateEmail = (value) => {
  emailError.value = value
    ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      ? ""
      : "Zadajte platný e-mail."
    : "E-mail je povinný.";
};

const validateNote = (value) => {
  noteError.value = value ? "" : "Poznámka je povinná.";
};

const validateForm = () => {
  validateName(name.value);
  validateEmail(email.value);
  validateNote(note.value);

  return !nameError.value && !emailError.value && !noteError.value;
};

watch(name, (newValue) => validateName(newValue));
watch(email, (newValue) => validateEmail(newValue));
watch(note, (newValue) => validateNote(newValue));

const handleSubmit = () => {
  if (!validateForm()) {
    return;
  }

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
  <form class="form" @submit.prevent="handleSubmit" novalidate>
    <h3 class="form-title">Jednoducho nám napíšte a my sa vám ozveme.</h3>
    <div class="form-group">
      <label for="name">Meno: <span class="required">*</span></label>
      <input type="text" id="name" v-model="name" />
      <span v-if="nameError" class="error-message">{{ nameError }}</span>
    </div>
    <div class="two-columns">
      <div class="form-group">
        <label for="email">E-mail: <span class="required">*</span></label>
        <input type="email" id="email" v-model="email" />
        <span v-if="emailError" class="error-message">{{ emailError }}</span>
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
      ></textarea>
      <span v-if="noteError" class="error-message">{{ noteError }}</span>
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
  margin-bottom: 1.8rem;
  font-family: "Mulish", sans-serif;
  position: relative;
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

.error-message {
  color: $secondary-color;
  font-size: 0.875rem;
  position: absolute;
  bottom: -1.2rem;
  left: 0;
  font-weight: 700;
}
</style>
