<template>
  <div v-if="note1">
    <h1>{{ note1.title }}</h1>
    <p>{{ note1.content }}</p>
  </div>
  <div v-else>
    Note is loading or does not exist.
  </div>
</template>

<script>
import noteServiceStore from '@/api/NoteServiceStore'; // Stellen Sie sicher, dass der Pfad korrekt ist

export default {
  name: 'RoundedBox',
  data() {
    return {
      note1: null,
    };
  },
  async created() {
    try {
      this.note1 = await noteServiceStore.getNoteById(1);
    } catch (error) {
      console.error('Error fetching note:', error);
    }
  },
}
</script>

<style scoped>
  /* Hier könnten zusätzliche Stile definiert werden, wenn nötig */
</style>
