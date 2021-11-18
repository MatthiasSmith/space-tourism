<template>
  <header class="p-6 flex justify-between items-center">
    <NuxtLink to="/">
      <img class="logo" src="~/assets/shared/logo.svg" alt="navigate home" />
    </NuxtLink>
    <button type="button">
      <img
        src="~/assets/shared/icon-hamburger.svg"
        alt="open mobile navigation menu"
      />
    </button>
  </header>
</template>

<style scoped>
.logo {
  width: 2.5rem;
  height: 2.5rem;
}
</style>