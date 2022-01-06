<template>
  <div>
    <button
      type="button"
      :aria-expanded="isMobileNavOpen"
      class="mobile-nav-toggle w-8 absolute top-7 right-6 z-50 md:hidden"
      data-test-id="mobile-nav-menu-toggle-btn"
      @click="toggleMobileNav"
    >
      <span class="sr-only">Toggle navigation menu</span>
    </button>
    <nav
      class="
        navbar
        fixed
        min-h-screen
        top-0
        right-0
        z-40
        md:static md:min-h-full md:h-24
      "
      :class="{ expanded: isMobileNavOpen }"
    >
      <ul class="flex flex-col md:flex-row gap-7 md:gap-10">
        <li v-for="(link, index) in links" :key="link.text">
          <NuxtLink
            :to="link.path"
            class="
              link
              text-base
              md:text-sm
              lg:text-base
              relative
              w-full
              block
              font-barlowCondensed
              uppercase
              md:inline-block
              xl:inline-block
              focus-visible:outline-white
            "
            :class="activeLink(link.text)"
          >
            <span
              class="md:hidden xl:inline-block mr-2 font-bold"
              aria-hidden="true"
            >
              {{ '0' + index }}
            </span>
            <span data-test-id="link-text">
              {{ link.text }}
            </span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { SITE_LINKS } from '~/constants/site-links'

export default Vue.extend({
  data() {
    return {
      links: SITE_LINKS,
      isMobileNavOpen: false,
    }
  },
  methods: {
    activeLink(path: string) {
      return {
        'link-active': this.$route.path.includes(path.toLowerCase()),
      }
    },
    toggleMobileNav(): void {
      this.isMobileNavOpen = !this.isMobileNavOpen
    },
  },
})
</script>

<style scoped>
.mobile-nav-toggle {
  aspect-ratio: 1;
  background-color: transparent;
  background-image: url('~/assets/shared/icon-hamburger.svg');
  background-repeat: no-repeat;
  background-position: 50%;
}

.mobile-nav-toggle[aria-expanded='true'] {
  background-image: url('~/assets/shared/icon-close.svg');
  position: fixed;
}

.navbar {
  --spacing: min(20vh, 10rem);
  background: hsl(0 0% 0% / 0.5);
  inset: 0 0 0 32%;
  padding: var(--spacing) 0 var(--spacing) 2rem;
  transform: translateX(100%);
  transition: transform 0.35s ease-in-out;
}

.navbar.expanded {
  transform: translateX(0);
}

@supports (backdrop-filter: blur(1rem)) {
  .navbar {
    background: hsl(0 0% 100% / 0.09);
    backdrop-filter: blur(1.5rem);
  }
}

.link {
  letter-spacing: 2.36px;
}

.link::after {
  background-color: hsla(0, 0%, 100%, 0.5);
  content: '';
  position: absolute;
  right: 0;
  height: 100%;
  width: 3px;
  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
  transform: scale(0);
}

.link:hover::after {
  transform: scale(1);
}

.nuxt-link-exact-active::after,
.link-active::after {
  background-color: white;
  transform: scale(1);
}

@media screen and (min-width: 48em) {
  .navbar {
    transform: translateX(0);
    padding: 2.25rem 3rem;
  }

  .link::after {
    left: 0;
    right: unset;
    bottom: -37px;
    width: 100%;
    height: 3px;
  }
}

@media screen and (min-width: 64em) {
  .navbar {
    background: hsla(0, 0%, 100%, 0.04);
    backdrop-filter: blur(0.75rem);
  }

  .link::after {
    bottom: -32px;
  }
}

@media screen and (min-width: 80em) {
  .navbar {
    padding-left: 7rem;
    padding-right: 10rem;
  }
}

@media screen and (prefers-reduced-motion: reduce) {
  .navbar,
  .link::after {
    transition-duration: 0s;
  }
}
</style>
