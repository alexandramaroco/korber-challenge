<template>
    <header>
        <img alt="Vue logo" src="../assets/logo.png" height="50">
        <p>Korber Pharma Frontend Challenge</p>
        <nav>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<style lang="scss">
  header {
    display: flex;
    border-bottom: 1px solid #ccc;
  }

  nav {
    margin-left: auto;

    ul li {
      display: inline-flex;
      margin-left: 1rem;
    }
  }
</style>
