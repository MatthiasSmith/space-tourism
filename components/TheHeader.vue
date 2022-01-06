<template>
  <header class="flex justify-between items-center pt-6 md:pt-0 lg:pt-10">
    <NuxtLink class="ml-6 focus:outline-white" to="/">
      <img class="logo" src="~/assets/shared/logo.svg" alt="navigate home" />
    </NuxtLink>
    <div class="line hidden lg:block"></div>
    <TheNavbar />
  </header>
</template>

<style scoped>
.logo {
  width: 2.5rem;
  height: 2.5rem;
}

.line {
  background: hsla(0, 0%, 100%, 0.25);
  flex: 1;
  height: 1px;
  margin-left: 4rem;
  margin-right: -1rem;
  position: relative;
  z-index: 1;
}

@media screen and (min-width: 48em) {
  .logo {
    width: 3rem;
    height: 3rem;
  }
}

@media screen and (min-width: 80em) {
  .line {
    margin-right: -2rem;
  }
}
</style>