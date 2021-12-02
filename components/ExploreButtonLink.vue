<template>
  <div class="container relative">
    <NuxtLink
      to="destination/moon"
      class="
        explore-button-link
        inline-flex
        items-center
        justify-center
        bg-white
        rounded-full
        text-darkGray text-lg
        uppercase
        font-bellefair
        h-full
        w-full
        absolute
        top-1/2
        left-1/2
        transform
        -translate-x-1/2 -translate-y-1/2
        z-10
        focus:outline-white
      "
    >
      explore
    </NuxtLink>
    <span
      class="hover-circle rounded-full absolute top-1/2 left-1/2 h-full w-full"
    >
    </span>
  </div>
</template>

<style scoped>
.container {
  width: 9.375rem;
  height: 9.375rem;
}

.explore-button-link {
  letter-spacing: 1.25px;
}

.hover-circle {
  background-color: hsla(0, 0%, 100%, 0.1);
  opacity: 0;
  transform: translate(-50%, -50%) scale(1.6432);
  transition: opacity 0.25s ease-out;
}

.explore-button-link:hover + .hover-circle {
  opacity: 1;
}

@media screen and (prefers-reduced-motion: no-preference) {
  .hover-circle {
    opacity: 1;
    transform: translate(-50%, -50%) scale(0.65);
    transition: transform 0.25s ease-in-out;
  }

  .explore-button-link:hover + .hover-circle {
    background-color: hsla(0, 0%, 100%, 0.1);
    transform: translate(-50%, -50%) scale(1.6423);
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
}
</style>