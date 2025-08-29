<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";
import type { TailwindStyles } from "~/utils/types/ui";

const subscribeFormSchema = z.object({
  email: z.email(),
});
type SubscribeForm = z.infer<typeof subscribeFormSchema>;

const subscribeForm = reactive<Partial<SubscribeForm>>({ email: "" });
const formOnSubmit = async (event: FormSubmitEvent<SubscribeForm>) => {
  const toast = useToast();
  toast.add({
    title: "Success",
    description: "You have been subscribed!",
    color: "success",
  });
  console.log(event);
};

defineProps<{
  ui?: {
    text?: {
      title?: TailwindStyles;
      description?: TailwindStyles;
      container?: TailwindStyles;
    };
    section?: TailwindStyles;
  };
}>();
</script>
<template>
  <section
    class="flex flex-col items-center-safe justify-center-safe p-10 gap-5 bg-neutral-700"
    :class="ui?.section"
  >
    <!-- Text -->
    <div
      class="flex flex-col items-center-safe justify-center-safe gap-3 md:gap-5 text-center"
      :class="ui?.text?.container"
    >
      <h2
        class="text-3xl md:text-5xl tracking-wide font-extrabold text-neutral-100"
        :class="ui?.text?.title"
      >
        Subscribe to our newsletter
      </h2>
      <p
        class="text-lg md:text-xl text-neutral-200"
        :class="ui?.text?.description"
      >
        Stay updated with our latest news and offers.
      </p>
    </div>
    <u-form
      class="flex flex-col justify-center-safe items-center-safe gap-4"
      :state="subscribeForm"
      :schema="subscribeFormSchema"
      @submit="formOnSubmit"
    >
      <u-form-field name="email" size="xl">
        <u-input v-model="subscribeForm.email" />
      </u-form-field>
      <u-button type="submit" icon="ic:baseline-send" variant="solid" size="xl"
        >i'm in</u-button
      >
    </u-form>
  </section>
</template>

<style scoped></style>
