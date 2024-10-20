<template>
  <div class="pf-page">
    <div class="pf-content">
      <Breadcrumb text="About" type="h1" />
      <div class="pf-contentList">
        <div class="pf-columns">
          <img class="pf-portrait" src="/img/fra.png" alt="" />

          <p class="pf-facts">
            <span>Senior Visual &<br />UI Designer</span>
          </p>
        </div>
        <div class="pf-columns">
          <p class="pf-name">FRANCESCA DA FORNO</p>
          <p class="pf-name">FRANCESCA DA FORNO</p>
        </div>
        <div class="pf-columns">
          <div class="pf-body sticky">
            <p>
              Ciao! Sono Francesca, una Visual & UI Designer con oltre 14 anni
              di esperienza.<br /><br />Realizzo landing page d'impatto, guido
              iniziative digitali e organizzo progetti di squadra. Mi assicuro
              che i clienti siano coinvolti in ogni fase della realizzazione
              delle loro idee e contenuti grafici.<br /><br />Eccello nella
              risoluzione dei problemi, nella traduzione delle idee dei clienti
              in grafiche ad hoc per loro, nella comunicazione efficace, nel
              lavoro di squadra e nella promozione della creatività.<br /><br />Amo
              praticare sport, viaggiare, leggere, disegnare e guardare film
              fantasy. Questi hobby mi forniscono nuove idee ed energia per il
              mio lavoro. Il mio percorso evidenzia la mia passione e dedizione
              per il design.
            </p>
          </div>
          <p class="pf-facts">
            <span class="pf-heading">SKILLS</span>
            <span>E-commerce</span>
            <span>Landing Pages</span>
            <span>Email Campaigns</span>
            <span>Wireframing</span>
            <span>Brand Identity</span>
            <span>Design Systems</span>
            <span class="pf-heading mt-12">TOOLS</span>
            <span>Figma</span>
            <span>Photoshop</span>
            <span>Illustrator</span>
            <span>Premiere</span>
            <span>XD</span>
            <span>InDesign</span>
            <span>AfterEffects</span>
          </p>
        </div>
        <div class="pf-images">
          <div class="col-grid">
            <div class="col-1">
              <img src="/img/about/portfolio-about-photo1.png" alt="" />
              <img src="/img/about/portfolio-about-photo5.png" alt="" />
            </div>
            <div class="col-2">
              <img src="/img/about/portfolio-about-photo2.png" alt="" />
              <img src="/img/about/portfolio-about-photo3.png" alt="" />
              <img src="/img/about/portfolio-about-photo6.png" alt="" />
            </div>
            <div class="col-1">
              <img src="/img/about/portfolio-about-photo4.png" alt="" />
              <img src="/img/about/portfolio-about-photo7.png" alt="" />
            </div>
          </div>
          <div class="col-3">
            <img src="/img/about/portfolio-about-photo8.png" alt="" />
            <img src="/img/about/portfolio-about-photo9.png" alt="" />
            <img src="/img/about/portfolio-about-photo10.png" alt="" />
          </div>
        </div>
      </div>
      <Back />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  pageTransition: {
    name: "page-transiton",
    mode: "out-in",
    onEnter: (el, done) => enterTransition(el, done),
    onLeave: (el, done) => leaveTransition(el, done),
  },
});
</script>

<style scoped lang="scss">
@use "/assets/css/mq.scss" as *;

@mixin grayscale {
  filter: grayscale(100%);
  transition: filter 0.3s;
  &:hover {
    filter: grayscale(0%);
  }
}

@mixin gap {
  gap: 50px;
  @include mq($until: lg) {
    gap: 10px;
  }
}

.pf-contentList {
  height: 100%;
  display: grid;
  padding: 50px 100px;
  grid-auto-flow: row;
  gap: 100px;
  & > div {
    height: min-content;
  }

  @include mq($until: lg) {
    padding: 50px 0;
    gap: 50px;
  }

  .pf-columns {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-between;
    gap: 100px;
    > div:last-child,
    > p:not(.pf-body):last-child {
      text-align: right;
    }

    @include mq($until: lg) {
      grid-template-columns: 1fr;
      gap: 50px;
    }
  }
  .pf-name {
    color: #616161;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 5.12px;
    text-transform: uppercase;
    &:first-child {
      margin-left: -75px;
    }
    &:last-child {
      margin-right: -75px;
    }

    @include mq($until: lg) {
      &:first-child {
        margin-left: 0;
        text-align: center;
      }
      &:last-child {
        display: none;
      }
    }
  }
  .pf-body {
    color: #fff;
    font-family: Montserrat;
    font-size: 22px;
    font-style: normal;
    font-weight: 300;
    line-height: 120%;
    text-wrap: pretty;

    &.sticky {
      p {
        position: sticky;
        top: 100px;
      }
    }
  }
  .pf-heading {
    color: #616161;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 5.12px;
    text-transform: uppercase;
  }
  .pf-portrait {
    width: 240px;
    &:last-child {
      justify-self: end;
    }
    @include mq($until: lg) {
      width: 75%;
      margin-inline: auto;
    }
  }
  .pf-facts {
    color: #fff;
    font-family: Montserrat;
    font-size: 46px;
    font-style: normal;
    font-weight: 300;
    line-height: 120%;
    display: grid;
    align-content: center;

    @include mq($until: lg) {
      font-size: 32px;
    }
    span {
      display: block;
    }
  }
  .pf-images {
    img {
      @include grayscale();
    }
    .col-3 {
      display: grid;
      grid-template-columns: 306fr 305fr 660fr;
      @include gap();
      img {
        @include grayscale;
      }
    }
    .col-grid {
      display: grid;
      grid-template-columns: 306fr 660fr 306fr;
      @include gap();
      margin-bottom: 50px;
      @include mq($until: lg) {
        margin-bottom: 10px;
      }
      img {
        align-self: end;
      }
    }
    .col-1 {
      display: grid;
      grid-template-rows: 500fr 360fr;
      @include gap();
      align-self: end;
    }
    .col-2 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      @include gap();
      img {
        &:nth-child(3) {
          grid-column: span 2;
        }
      }
    }
  }
}
</style>
