<template>
  <div>
    <nav
      ref="main_nav"
      id="main_nav"
      class="navbar navbar-expand-sm fixed-top navbar-light bg-light shadow p-3 bg-white"
    >
      <a id="brandLogo" class="navbar-brand pl-5 d-sm-none-custom" href="#">
        <img
          src="data:image/jpeg;base64,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"
          style="width: 80px"
          class="d-inline-block align-top"
        >
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#section02">Submission</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#section03">Publications</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#section04">How</a>
          </li>
        </ul>
      </div>
    </nav>

    <div
      class="jumbotron jumbotron-fluid parallax-landing shadow-lg bg-white rounded"
      style="height: 130%"
    >
      <div class="container demo" id="section01">
        <h1 class="display-3 font-weight-bold text-center">BlockChain Paper Submission</h1>
        <p
          class="lead text-center"
        >Add user by privete key. We guarantee your submission has absolute right author order</p>
        <a href="#section02">
          <span></span>S T A R T
        </a>
      </div>
    </div>

    <div class="container">
      <div id="section02" class="px-3 pt-5" style="height:100%">
        <div class="row justify-content-center">
          <!-- 		<div class="col-1"></div> -->
          <div class="d-flex align-content-center flex-wrap">
            <form action="/" enctype="multipart/form-data" method="POST">
              <div class="upload">
                <div class="upload-files">
                  <header>
                    <p>
                      <i class="fa fa-cloud-upload" aria-hidden="true"></i>
                      <span class="up">up</span>
                      <span class="load">load</span>
                    </p>
                  </header>
                  <div class="body mt-5" id="drop">
                    <i class="fa fa-file-text-o pointer-none" aria-hidden="true"></i>
                    <p class="pointer-none">
                      <b>Drag and drop</b> files here
                      <br>or
                      <a href id="triggerFile">browse</a>
                      to begin the upload
                    </p>
                    <input type="file" name="files" id="uploadPapers" multiple="multiple">
                  </div>
                  <footer>
                    <div class="divider">
                      <span class="mt-3">
                        <span>FILES</span>
                      </span>
                    </div>
                    <div class="list-files">
                      <!--   template   -->
                    </div>
                    <button class="importar">UPLOAD FILES</button>
                  </footer>
                </div>
              </div>
            </form>
            <div class="upload">
              <div class="upload-files">
                <header>
                  <p>
                    <span class="notify">INFORMATION</span>
                  </p>
                </header>
                <div class="px-3 pt-1">
                  <div class="form-group">
                    <div class="input-group my-3">
                      <input
                        type="text"
                        aria-label="First name"
                        class="form-control"
                        placeholder="First name"
                        id="firstName"
                      >
                      <input
                        type="text"
                        aria-label="Last name"
                        class="form-control"
                        placeholder="Last name"
                        id="lastName"
                      >
                    </div>
                    <div class="input-group mb-3">
                      <input type="tel" class="form-control" placeholder="Phone" id="phoneNum">
                    </div>
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Organization"
                        id="organization"
                      >
                    </div>
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        class="form-control"
                        aria-label="email"
                        placeholder="test@email.com"
                        id="email"
                      >
                    </div>
                    <div class="input-group mb-3">
                      <textarea
                        class="form-control noresize"
                        style="resize: none"
                        aria-label="abstract"
                        placeholder="Abstract"
                        id="abstract"
                      ></textarea>
                    </div>
                    <div class="input-group input-group-sm mb-3">
                      <textarea
                        class="form-control"
                        aria-label="public key"
                        placeholder="public key"
                        id="publickey"
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="button"
                    class="float-right btn btn-primary"
                    onclick="myFunction()"
                  >Submit !</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="section03" class="pt-5">
        <div id="section03_1" class="container pt-5"></div>
        <!-- Generator By Axios	 -->
      </div>
    </div>

    <footer class="footer bg-dark pl-3 mt-5" style="color: white">Copyright @ Wei Jen liu</footer>
  </div>
  <!-- <section class="container">
    <div>
      <logo/>
      <h1 class="title">Nuxt-json</h1>
      <h2 class="subtitle">My super Nuxt.js project</h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
        <button @click="fetchSomething" class="button--green">Fetch My ip</button>
      </div>
    </div>
  </section>-->
</template>

<script>
import Logo from "~/components/Logo.vue";

var position = 0

export default {
  components: {
    Logo
  },
  data () {
    return {
      position: 0
    };
  },
  methods: {
    handleScroll () {
      let nav = this.$refs.main_nav
      if (this.position < window.pageYOffset) {
        nav.classList.add("up");
        nav.classList.remove("nav_show");
        this.position = window.pageYOffset;
      } else {
        nav.classList.remove("up");
        nav.classList.add("nav_show");
        this.position = window.pageYOffset;
      }
    },
    async fetchSomething() {
      // const res = await this.$axios.$get(
      //   "https://still-dawn-33202.herokuapp.com/db"
      // );
      // this.res = res;
      // console.log(res);
      // // for (let i = 0; i < res.length; i++) {
      //   const element = res[i];
      //   console.log(element.id)
      // }
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll);
  },
};
</script>

<style type="text/css">
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

body {
  font-family: "Roboto", sans-serif;
  background: url("https://www.muralswallpaper.com/app/uploads/explorer-kids-map-childrens-room-820x532.jpg")
    no-repeat center center fixed;
  background-size: cover;
  justify-content: center;
  align-items: center;
}

.upload {
  position: relative;
  width: 540px;
  height: 700px;
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  padding-bottom: 20px;
  background: #fff;
  -webkit-animation: fadeup 0.5s 0.5s ease both;
  animation: fadeup 0.5s 0.5s ease both;
  -webkit-transform: translateY(20px);
  transform: translateY(20px);
  opacity: 0;
}
.upload .upload-files header {
  background: #f8f9fa;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  text-align: center;
}
.upload .upload-files header p {
  color: rgba(0, 0, 0, 0.9);
  font-size: 28px;
  margin: 0;
  padding: 30px 0;
}
.upload .upload-files header p i {
  -webkit-transform: translateY(20px);
  transform: translateY(20px);
  opacity: 0;
  font-size: 28px;
  -webkit-animation: fadeup 0.5s 1s ease both;
  animation: fadeup 0.5s 1s ease both;
}
.upload .upload-files header p .up {
  font-weight: bold;
  -webkit-transform: translateX(-20px);
  transform: translateX(-20px);
  display: inline-block;
  opacity: 0;
  -webkit-animation: faderight 0.5s 1.5s ease both;
  animation: faderight 0.5s 1.5s ease both;
}
.upload .upload-files header p .load {
  display: inline-block;
  font-weight: 100;
  margin-left: -8px;
  -webkit-transform: translateX(-20px);
  transform: translateX(-20px);
  opacity: 0;
  -webkit-animation: faderight 1s 1.5s ease both;
  animation: faderight 1s 1.5s ease both;
}
.upload .upload-files header p .notify {
  display: inline-block;
  font-weight: 100;
  -webkit-transform: translateX(-20px);
  transform: translateX(-20px);
  opacity: 0;
  -webkit-animation: faderight 1s 1.5s ease both;
  animation: faderight 1s 1.5s ease both;
}
.upload .upload-files .body {
  text-align: center;
  padding: 30px 0;
}
.upload .upload-files .body.hidden {
  display: none;
}
.upload .upload-files .body input {
  visibility: hidden;
}
.upload .upload-files .body i {
  font-size: 50px;
  color: lightgray;
}
.upload .upload-files .body p {
  font-size: 16px;
  padding-top: 15px;
  line-height: 1.4;
}
.upload .upload-files .body p b,
.upload .upload-files .body p a {
  text-decoration: none;
}
.upload .upload-files .body.active {
  border: dashed 2px #f8f9fa;
}
.upload .upload-files .body.active i {
  box-shadow: 0 0 0 -3px #fff, 0 0 0 lightgray, 0 0 0 -3px rgba(0, 0, 0, 0.9),
    0 0 0 lightgray;
  -webkit-animation: file 0.5s ease both;
  animation: file 0.5s ease both;
}
@-webkit-keyframes file {
  50% {
    box-shadow: -8px 8px 0 -3px #fff, -8px 8px 0 lightgray, -8px 8px 0 -3px #fff,
      -8px 8px 0 lightgray;
  }
  75%,
  100% {
    box-shadow: -8px 8px 0 -3px #fff, -8px 8px 0 lightgray,
      -16px 16px 0 -3px #fff, -16px 16px 0 lightgray;
  }
}
@keyframes file {
  50% {
    box-shadow: -8px 8px 0 -3px #fff, -8px 8px 0 lightgray, -8px 8px 0 -3px #fff,
      -8px 8px 0 lightgray;
  }
  75%,
  100% {
    box-shadow: -8px 8px 0 -3px #fff, -8px 8px 0 lightgray,
      -16px 16px 0 -3px #fff, -16px 16px 0 lightgray;
  }
}
.upload .upload-files .body.active .pointer-none {
  pointer-events: none;
}
.upload .upload-files footer {
  width: 100%;
  margin: 0 auto;
  height: 0;
}
.upload .upload-files footer .divider {
  margin: 0 auto;
  width: 0;
  border-top: solid 4px #eef0f3;
  text-align: center;
  overflow: hidden;
  transition: width 0.5s ease;
}
.upload .upload-files footer .divider span {
  display: inline-block;
  -webkit-transform: translateY(-50px);
  transform: translateY(-50px);
  padding-top: 8px;
}
.upload .upload-files footer.hasFiles {
  height: auto;
}
.upload .upload-files footer.hasFiles .divider {
  width: 100%;
}
.upload .upload-files footer.hasFiles .divider span {
  -webkit-transform: translateY(0);
  transform: translateY(0);
  transition: -webkit-transform 0.5s 0.5s ease;
  transition: transform 0.5s 0.5s ease;
  transition: transform 0.5s 0.5s ease, -webkit-transform 0.5s 0.5s ease;
}
.upload .upload-files footer .list-files {
  width: 320px;
  margin: 0 auto;
  margin-top: 15px;
  padding-left: 5px;
  text-align: center;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 210px;
}
.upload .upload-files footer .list-files::-webkit-scrollbar-track {
  background-color: rgba(211, 211, 211, 0.25);
}
.upload .upload-files footer .list-files::-webkit-scrollbar {
  width: 4px;
  background-color: rgba(211, 211, 211, 0.25);
}
.upload .upload-files footer .list-files::-webkit-scrollbar-thumb {
  background-color: rgba(248, 249, 250, 0.5);
}
.upload .upload-files footer .list-files .file {
  width: 300px;
  min-height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 0;
  -webkit-animation: fade 0.35s ease both;
  animation: fade 0.35s ease both;
}
.upload .upload-files footer .list-files .file .name {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 80px;
  text-align: left;
}
.upload .upload-files footer .list-files .file .progress {
  width: 175px;
  height: 5px;
  border: solid 1px lightgray;
  border-radius: 2px;
  background: linear-gradient(
      to left,
      rgba(248, 249, 250, 0.2),
      rgba(248, 249, 250, 0.8)
    )
    no-repeat;
  background-size: 100% 100%;
}
.upload .upload-files footer .list-files .file .progress.active {
  -webkit-animation: progress 30s linear;
  animation: progress 30s linear;
}
@-webkit-keyframes progress {
  from {
    background-size: 0 100%;
  }
  to {
    background-size: 100% 100%;
  }
}
@keyframes progress {
  from {
    background-size: 0 100%;
  }
  to {
    background-size: 100% 100%;
  }
}
.upload .upload-files footer .list-files .file .done {
  cursor: pointer;
  width: 40px;
  height: 40px;
  background: #007bff;
  border-radius: 50%;
  margin-left: -10px;
  -webkit-transform: scale(0);
  transform: scale(0);
  position: relative;
}
.upload .upload-files footer .list-files .file .done:before {
  content: "View";
  position: absolute;
  top: 0;
  left: -5px;
  font-size: 24px;
  opacity: 0;
}
.upload .upload-files footer .list-files .file .done:hover:before {
  transition: all 0.25s ease;
  top: -30px;
  opacity: 1;
}
.upload .upload-files footer .list-files .file .done.anim {
  -webkit-animation: done1 0.5s ease forwards;
  animation: done1 0.5s ease forwards;
}
.upload .upload-files footer .list-files .file .done.anim #path {
  -webkit-animation: done2 2.5s 0.5s ease forwards;
  animation: done2 2.5s 0.5s ease forwards;
}
.upload .upload-files footer .list-files .file .done #path {
  stroke-dashoffset: 7387.59423828125;
  stroke-dasharray: 7387.59423828125 7387.59423828125;
  stroke: #fff;
  fill: transparent;
  stroke-width: 50px;
}
@-webkit-keyframes done2 {
  to {
    stroke-dashoffset: 0;
  }
}
@keyframes done2 {
  to {
    stroke-dashoffset: 0;
  }
}
@-webkit-keyframes done1 {
  50% {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    opacity: 1;
  }
  80% {
    -webkit-transform: scale(0.25);
    transform: scale(0.25);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    opacity: 1;
  }
}
@keyframes done1 {
  50% {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    opacity: 1;
  }
  80% {
    -webkit-transform: scale(0.25);
    transform: scale(0.25);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    opacity: 1;
  }
}
.upload .upload-files footer .importar {
  outline: none;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 20px;
  margin: auto;
  border: solid 1px #f8f9fa;
  color: #007bff;
  background: transparent;
  padding: 8px 15px;
  border-radius: 4px;
  font-family: Roboto;
  line-height: 1;
  cursor: pointer;
  -webkit-transform: translateY(15px);
  transform: translateY(15px);
  opacity: 0;
  visibility: hidden;
  margin-left: calc(50% - 60px);
}
.upload .upload-files footer .importar.active {
  transition: opacity 0.5s 1.5s ease, background,
    -webkit-transform 0.5s 1.5s ease;
  transition: transform 0.5s 1.5s ease, opacity 0.5s 1.5s ease, background;
  transition: transform 0.5s 1.5s ease, opacity 0.5s 1.5s ease, background,
    -webkit-transform 0.5s 1.5s ease;
  -webkit-transform: translateY(0);
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
}
.upload .upload-files footer .importar:hover {
  background: #f8f9fa;
  color: rgba(0, 0, 0, 0.9);
}
@-webkit-keyframes fadeup {
  to {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fadeup {
  to {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@-webkit-keyframes faderight {
  to {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes faderight {
  to {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
@-webkit-keyframes fade {
  to {
    opacity: 1;
  }
}
@keyframes fade {
  to {
    opacity: 1;
  }
}
@media (max-width: 400px) {
  .upload {
    width: 100%;
    height: 100%;
  }
}

.parallax-landing {
  color: #fff;
  padding-top: 200px;
  padding-bottom: 200px;
  overflow: hidden;
  position: relative;
  width: 100%;
  background-image: linear-gradient(to bottom, #222 0%, transparent 100%),
    url(https://i.pinimg.com/originals/39/35/32/393532260f8031c9006015d145365d77.jpg);
  background-attachment: fixed;
  background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
}

.landing-section {
  position: relative;
  width: 100%;
  height: 100%;
}

.demo a {
  position: absolute;
  bottom: 20px;
  left: 49%;
  z-index: 2;
  display: inline-block;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  color: #fff;
  font: normal 400 20px/1 "Josefin Sans", sans-serif;
  letter-spacing: 0.1em;
  text-decoration: none;
  transition: opacity 0.3s;
}

.demo a:hover {
  opacity: 0.5;
}

#section01 a {
  padding-top: 60px;
}

#section01 a span {
  position: absolute;
  top: 0;
  left: 50%;
  width: 24px;
  height: 24px;
  margin-left: -12px;
  border-left: 3px solid #fff;
  border-bottom: 3px solid #fff;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-animation: sdb04 1.5s infinite;
  animation: sdb04 1.5s infinite;
  box-sizing: border-box;
}

@-webkit-keyframes sdb04 {
  0% {
    -webkit-transform: rotate(-45deg) translate(0, 0);
  }
  20% {
    -webkit-transform: rotate(-45deg) translate(-10px, 10px);
  }
  40% {
    -webkit-transform: rotate(-45deg) translate(0, 0);
  }
}
@keyframes sdb04 {
  0% {
    -webkit-transform: rotate(-45deg) translate(0, 0);
    transform: rotate(-45deg) translate(0, 0);
  }
  20% {
    -webkit-transform: rotate(-45deg) translate(-10px, 10px);
    transform: rotate(-45deg) translate(-10px, 10px);
  }
  40% {
    -webkit-transform: rotate(-45deg) translate(0, 0);
    transform: rotate(-45deg) translate(0, 0);
  }
}

.nav_show {
  transition: all 300ms ease-in-out;
}

.up {
  -webkit-transform: translateY(-200px);
  transform: translateY(-200px);
  transition: all 300ms ease-in-out;
}

#publickey {
  height: 210px;
  min-height: 210px;
  max-height: 210px;
}

@media (max-width: 575.98px) {
  .d-sm-none-custom {
    display: none !important;
  }
}
@media (max-width: 575.98px) {
  .upload {
    width: 400;
  }
}
@media (min-width: 576px) and (max-width: 767.98px) {
  .upload {
    width: 600px;
  }
}
@media (min-width: 768px) and (max-width: 991.98px) {
  .upload {
    width: 800px;
  }
}
@media (min-width: 992px) and (max-width: 1199.98px) {
  .upload {
    width: 1000px;
  }
}

/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
} */
</style>
