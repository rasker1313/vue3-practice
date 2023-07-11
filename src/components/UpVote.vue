<template>
  <div class="up-vote">
    <h2 class="title has-text-centered dividing-header">UpVote!</h2>
    <div class="section">
      <article v-for="(sub, key) in sortedSubmissions" :key="key" class="media">
        <figure class="media-left">
          <img class="image is-64x64"
               :src="sub.submissionImage">
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>
                <a :href="sub.url" class="has-text-info">{{ sub.title }}</a>
                <span class="tag is-small">#{{ sub.id }}</span>
              </strong>
              <br>
              {{ sub.description }}
              <br>
              <small class="is-size-7">
                Submitted by:
                <img class="image is-24x24"
                     :src="sub.avatar">
              </small>
            </p>
          </div>
        </div>
        <div class="media-right">
          <span class="icon is-small" @click="upvote(sub.id - 1)">
          <font-awesome-icon :icon="['fas', 'chevron-up']" />
          <strong class="has-text-info">{{ sub.votes }}</strong>
          </span>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import submissions from '../../data/submissions'

export default {
  name: 'UpVote',
  data() {
    return {
      submissions: submissions
    }
  },
  methods: {
    upvote(id){
      this.submissions[id].votes++
    }
  },
  computed: {
    sortedSubmissions() {
      const sorted = [...this.submissions]
      return sorted.sort((a, b) => {
        return b.votes - a.votes;
      });
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.media {
  max-width: 600px;
  margin: 0 auto 20px;
  border: 1px solid #e6e7e9;
  padding: 1em 1.5em 0.5em 1.5em;
  border-radius: 0.3em;
}
.image.is-24x24 {
  display: inline;
  position: relative;
  top: 5px;
  border-radius: 20px;
}
</style>
