<template>
  <nav class="fixed top-0 w-full z-50 bg-gray-800 p-4 text-white">
    <ul class="flex space-x-4">
      <li v-for="item in menuItems" :key="item.text">
        <a 
          :href="item.href" 
          class="rounded px-3 block py-2 transition-colors duration-500 ease-in-out hover:bg-green-500"
        >
          {{ item.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'HorizontalNavbar',
  data() {
    return {
      menuItems: [
        { href: '#', text: 'Startseite' },
        { href: '#', text: 'Noitzen' },
        { href: '#', text: 'Karteikarten' },
        { href: '#', text: 'Termine' },
      ],
    };
  },
};
</script>

<style scoped>
/* Keine zusätzlichen Stile benötigt, da Tailwind verwendet wird */
</style>

  