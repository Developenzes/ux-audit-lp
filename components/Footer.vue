<template>
  <footer class="footer">
    <div class="container footer__content">
      <h2>Máte otázky? Jednoducho sa spýtajte.</h2>
      <div class="footer__contacts">
        <h3>+421 (02) 555 65 726</h3>
        <a href="mailto:uxdesign@riesenia.com" class="footer__email"
          ><h3>uxdesign@riesenia.com</h3></a
        >
      </div>
      <h2 class="footer__company">Riesenia</h2>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  @include gradient-bg(#3d2e80, #dc1969);
  color: $bg-color;
  min-height: 720px;
  padding-block: 140px;
  h2 {
    max-width: 70%;
    margin: 0 auto;
    text-align: center;
  }
  @media (max-width: 768px) {
    min-height: auto;
    padding-block: 60px;
  }
}

.footer__contacts {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
  margin-block: 100px;
  @media (max-width: 768px) {
    gap: 20px;
    margin-block: 50px;
    h3 {
      font-size: 1.375rem;
      line-height: 2.5rem;
    }
  }
}

.footer__email {
  color: $secondary-color;
  text-decoration: none;
}

.footer__company {
  text-transform: uppercase;
}
</style>
