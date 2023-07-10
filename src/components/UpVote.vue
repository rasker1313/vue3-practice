<template>
  <div class="up-vote">
    <h2 class="title has-text-centered dividing-header">UpVote!</h2>
    <div class="section">
      <article class="media">
        <figure class="media-left">
          <img class="image is-64x64"
               src="img/image-yellow.png">
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>
                <a href="#" class="has-text-info">Yellow Pail</a>
                <span class="tag is-small">#4</span>
              </strong>
              <br>
              On-demand sand castle construction expertise.
              <br>
              <small class="is-size-7">
                Submitted by:
                <img class="image is-24x24"
                     src="img/avatars/daniel.jpg">
              </small>
            </p>
          </div>
        </div>
        <div class="media-right">
          <span class="icon is-small">
          <font-awesome-icon :icon="['fas', 'chevron-up']" />
          <strong class="has-text-info">10</strong>
          </span>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UpVote',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.media {
  max-width: 600px;
  margin: 0 auto;
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
