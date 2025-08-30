<template>
  <footer
    class="p-2 min-h-72 w-full flex flex-col justify-center-safe content-center gap-3"
  >
    <o-cta-email-sub class="flex-1" />
    <!-- Logo and Licenses -->
    <section
      class="flex-1 my-3 px-5 flex flex-col-reverse md:flex-row justify-center-safe md:justify-around items-center-safe"
    >
      <div class="flex-auto w-fit">
        <u-link to="/about/us">
          <span
            class="text-primary-600 font-extrabold size-5 hover:drop-shadow active:drop-shadow-none"
            >Starforge</span
          >
        </u-link>
      </div>
      <!-- License -->
      <div class="flex-auto w-fit text-center text-base text-neutral-600">
        <p>
          make with
          <u-link to="/about/us">
            <u-icon
              name="hugeicons:love-korean-finger"
              class="font-bold size-5"
            />
          </u-link>
          and
          <u-link to="/about/licenses" class="font-bold active:text-primary-500"
            >FOSS</u-link
          >
        </p>
      </div>
    </section>
  </footer>
</template>
