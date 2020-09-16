<template>
  <section>
    <h3>Veelgestelde vragen</h3>
    <ul>
      <li v-for="(question, key) in questions" v-bind:key="question.id">
        <strong @click="toggleShow(key, question)">
          <font-awesome-icon :icon="['fas', 'angle-right']" />
          {{ question.title }}
        </strong>
        <span v-if="!question.isHidden"> {{ question.content }} </span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'FAQ',
  data() {
    return {
      //isHidden: true,
      questions: [
        {
          title: 'Wanneer moet ik betalen',
          content:
            'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using making it look like readable English.',
          isHidden: true
        },
        {
          title: 'Wat is de opzegtermijn',
          content:
            'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which',
          isHidden: true
        },
        {
          title: 'Welke betaalopties zijn er?',
          content:
            'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC',
          isHidden: true
        }
      ]
    }
  },
  methods: {
    toggleShow: (key, question) => {
      question.isHidden = !question.isHidden
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
  margin: 4em 0;
}
h3 {
  margin: 2.8em 0 0;
  font-weight: normal;
}
li strong {
  display: block;
  padding: 1.2em 0;
  border-bottom: 1px solid var(--border-color);
  cursor: pointer;
}
svg {
  width: 14px !important;
  height: 14px;
  margin-right: 0.4em;
  background-color: var(--icons-accent-color);
  color: var(--bg-color);
  border-radius: 50%;
}
li strong {
  display: block;
  font-size: 1.5em;
  font-weight: normal;
  color: var(--link-color-text);
}
li span {
  display: block;
  padding: 2em 0;
  font-size: 1.5em;
  border-bottom: 1px solid var(--border-color);
}
</style>
