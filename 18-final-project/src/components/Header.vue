<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <router-link to="/" class="navbar-brand">Stocks</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <router-link to="/portfolio" class="nav-item" activeClass="active" tag="li" >
        <a class="nav-link">Portfolio</a>
      </router-link>
      <router-link to="/stocks" class="nav-item" activeClass="active" tag="li">
        <a class="nav-link">Stocks</a>
      </router-link>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Save & Load
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Save Date</a>
          <a class="dropdown-item" href="#">Load Data</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
</template>