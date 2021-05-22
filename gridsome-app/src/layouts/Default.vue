<template>

  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/"></g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/"></g-link>
        <g-link class="nav__link" to="/about/"></g-link>
      </nav>
    </header>
    <slot/>
  </div>

</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>

</style>
</style>
