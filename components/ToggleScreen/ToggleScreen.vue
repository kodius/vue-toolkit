<template>
  <section :class="{ white: switchHover, dark: !switchHover }" class="row with-or-without-us"
  >
    <div class="dare-to-switch">
      <h2 :class="{ white: switchHover, dark: !switchHover }" class="dare">
        {{ dare }}
      </h2>
      <label class="switch">
        <input type="checkbox">
        <span class="slider round" @click="toggle" />
      </label>
    </div>
    <div v-if="currentSwitchState">
      <div class="row with-us">
        <div class="sunny">
          <div class="sunshine-icon">
            <img
              alt="With Us sunshine icon"
            >
          </div>
          <div class="statement-wrapper">
            <div class="immutable-top">
              {{ titleTopPart }}
            </div>
            <div class="mutable-bottom">
              {{ titleBottomPartWith }}
            </div>
          </div>
        </div>
        <div class="with-bullets">
          <div v-for="explanation in explainedWith" :key="explanation.id">
            <div class="check-with-text">
              <div class="check">
                <s-image
                  :image="explanation.iconCheck"
                  :alt="explanation.iconCheckAlt"
                />
              </div>
              <div class="more-details">
                {{ explanation.description }}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    <div v-else>
      <div class="row without-us">
        <div class="cloudy">
          <div class="cloudy-icon">
            <img
              alt="Without Us rainy cloud icon"
            >
          </div>
          <div class="statement-wrapper">
            <div class="immutable-top">
              {{ titleTopPart }}
            </div>
            <div class="mutable-bottom">
              {{ titleBottomPartWithout }}
            </div>
          </div>
        </div>
        <div class="without-bullets">
          <div v-for="explanation in explainedWithout" :key="explanation.id">
            <div class="minus-with-text">
              <div class="minus">
                <k-image
                  :image="explanation.iconMinus"
                  :alt="explanation.iconMinusAlt"
                  width="35"
                  height="35"
                />
              </div>
              <div class="more-details">
                {{ explanation.description }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'ToggleScreen',
  props: {
    dare: { type: String, required: true },
    titleTopPart: { type: String, required: true },
    titleBottomPartWithout: { type: String, required: true },
    titleBottomPartWith: { type: String, required: true },
    explainedWithout: { type: Array, required: true },
    explainedWith: { type: Array, required: true }
  },
  data() {
    return {
      switchHover: false,
      switchedOn: false
    }
  },
  computed: {
    currentSwitchState() {
      if (this.switchHover === false) {
        return false
      } else {
        return true
      }
    }
  },
  mounted() {
    this.switchedOn = false
  },
  methods: {
    toggle() {
      this.switchHover = !this.switchHover
    }
  }
}
</script>

<style scoped>
.white {
  background-color: white;
  color: #4e4e4e;
}

.dark {
  background-color: #4e4e4e;
  color: white;
}

section.row.with-or-without-us {
  display: grid;
  margin: 0 auto;
  min-height: auto;
  opacity: 1;
  width: 100%;
}
section.row.with-or-without-us .dare-to-switch {
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  justify-self: center;
  margin-bottom: 0;
  padding: 110px 0 79px;
  width: fit-content;
}
section.row.with-or-without-us .dare-to-switch .dare {
  font-family: "MuseoSansRegular", sans-serif;
  font-size: 26px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 40px;
  margin-right: 21px;
  opacity: 1;
  text-align: left;
  text-transform: uppercase;
}
section.row.with-or-without-us .dare-to-switch .switch {
  display: inline-block;
  height: 34px;
  max-height: 34px;
  max-width: 60px;
  min-height: 34px;
  min-width: 60px;
  position: relative;
  width: 60px;
}
section.row.with-or-without-us .dare-to-switch .switch input {
  display: none;
}
section.row.with-or-without-us .dare-to-switch .slider {
  background-color: #4e4e4e;
  bottom: 0;
  box-shadow: 1px 3px 6px #00000038;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.8s;
}
section.row.with-or-without-us .dare-to-switch .slider::before {
  background-color: #118dd6;
  content: "";
  height: 24px;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-105%, -50%);
  transition: 0.8s;
  width: 24px;
}
section.row.with-or-without-us .dare-to-switch input + .slider {
  background-color: #4e4e4e;
  border: 2.5px solid white;
}
section.row.with-or-without-us .dare-to-switch input:focus + .slider {
  box-shadow: 0 0 1px #118dd6;
}
section.row.with-or-without-us .dare-to-switch input:checked + .slider::before {
  transform: translate(5%, -50%);
}
section.row.with-or-without-us .dare-to-switch .slider.round {
  border-radius: 34px;
}
section.row.with-or-without-us .dare-to-switch .slider.round::before {
  border-radius: 50%;
}
section.row.with-or-without-us .row.without-us {
  display: grid;
  justify-content: center;
  justify-items: center;
}
section.row.with-or-without-us .row.without-us .cloudy {
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  justify-self: center;
  padding-bottom: 110px;
  width: fit-content;
}
section.row.with-or-without-us .row.without-us .cloudy .cloudy-icon {
  height: 135px;
  margin-right: 40px;
  width: 137px;
}
section.row.with-or-without-us .row.without-us .cloudy .statement-wrapper {
  display: grid;
}
section.row.with-or-without-us .row.without-us .cloudy .statement-wrapper .immutable-top {
  font-family: "FuturaHeavy", sans-serif;
  font-size: 38px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 50px;
  opacity: 1;
  text-align: center;
}
section.row.with-or-without-us .row.without-us .cloudy .statement-wrapper .mutable-bottom {
  font-family: "FuturaHeavy", sans-serif;
  font-size: 38px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 50px;
  opacity: 1;
  text-align: center;
}
section.row.with-or-without-us .row.without-us .without-bullets {
  display: grid;
  gap: 57px 125px;
  grid-template-columns: 657px 657px;
  grid-template-rows: auto auto;
  padding-bottom: 110px;
}
section.row.with-or-without-us .row.without-us .without-bullets .minus-with-text {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
}
section.row.with-or-without-us .row.without-us .without-bullets .minus-with-text .minus {
  height: 35px;
  margin: 7px 24px 0 0;
  max-height: 35px;
  max-width: 35px;
  min-height: 35px;
  min-width: 35px;
  width: 35px;
}
section.row.with-or-without-us .row.without-us .without-bullets .minus-with-text .more-details {
  font-family: "MuseoSansRegular", sans-serif;
  font-size: 26px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 40px;
  opacity: 1;
  text-align: left;
}
section.row.with-or-without-us .row.with-us {
  display: grid;
  justify-content: center;
  justify-items: center;
}
section.row.with-or-without-us .row.with-us .sunny {
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  justify-self: center;
  padding-bottom: 110px;
  width: fit-content;
}
section.row.with-or-without-us .row.with-us .sunny .sunshine-icon {
  height: 135px;
  margin-right: 40px;
  width: 137px;
}
section.row.with-or-without-us .row.with-us .sunny .statement-wrapper {
  display: grid;
}
section.row.with-or-without-us .row.with-us .sunny .statement-wrapper .immutable-top {
  font-family: "FuturaHeavy", sans-serif;
  font-size: 38px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 50px;
  opacity: 1;
  text-align: center;
}
section.row.with-or-without-us .row.with-us .sunny .statement-wrapper .mutable-bottom {
  font-family: "FuturaHeavy", sans-serif;
  font-size: 38px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 50px;
  opacity: 1;
  text-align: center;
}
section.row.with-or-without-us .row.with-us .with-bullets {
  display: grid;
  gap: 57px 125px;
  grid-template-columns: 657px 657px;
  grid-template-rows: auto auto;
  padding-bottom: 110px;
}
section.row.with-or-without-us .row.with-us .with-bullets .check-with-text {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
}
section.row.with-or-without-us .row.with-us .with-bullets .check-with-text .check img {
  height: 35px;
  margin: 7px 24px 0 0;
  max-height: 35px;
  max-width: 35px;
  min-height: 35px;
  min-width: 35px;
  width: 35px;
}
section.row.with-or-without-us .row.with-us .with-bullets .check-with-text .more-details {
  font-family: "MuseoSansRegular", sans-serif;
  font-size: 26px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 40px;
  opacity: 1;
  text-align: left;
}

@media (min-width: 769px) and (max-width: 1920px) {
  section.row.with-or-without-us .dare-to-switch {
    padding: 5.7291666667vw 0 4.1145833333vw;
  }
  section.row.with-or-without-us .dare-to-switch .dare {
    font-size: 1.3541666667vw;
    line-height: 2.0833333333vw;
    margin-right: 1.09375vw;
  }
  section.row.with-or-without-us .dare-to-switch .switch {
    height: 1.7708333333vw;
    max-height: 1.7708333333vw;
    max-width: 3.125vw;
    min-height: 1.7708333333vw;
    min-width: 3.125vw;
    width: 3.125vw;
  }
  section.row.with-or-without-us .dare-to-switch .slider::before {
    height: 1.25vw;
    width: 1.25vw;
  }
  section.row.with-or-without-us .dare-to-switch .slider {
    box-shadow: 0.0520833333vw 0.15625vw 0.3125vw #00000038;
  }
  section.row.with-or-without-us .dare-to-switch input + .slider {
    border: 0.1302083333vw solid white;
  }
  section.row.with-or-without-us .dare-to-switch input:focus + .slider {
    box-shadow: 0 0 0.0520833333vw #118dd6;
  }
  section.row.with-or-without-us .dare-to-switch .slider.round {
    border-radius: 1.7708333333vw;
  }
  section.row.with-or-without-us .row.without-us .cloudy {
    padding-bottom: 5.7291666667vw;
  }
  section.row.with-or-without-us .row.without-us .cloudy .cloudy-icon {
    height: 7.03125vw;
    margin-right: 2.0833333333vw;
    width: 7.1354166667vw;
  }
  section.row.with-or-without-us .row.without-us .cloudy .statement-wrapper .immutable-top {
    font-size: 1.9791666667vw;
    line-height: 2.6041666667vw;
  }
  section.row.with-or-without-us .row.without-us .cloudy .statement-wrapper .mutable-bottom {
    font-size: 1.9791666667vw;
    line-height: 2.6041666667vw;
  }
  section.row.with-or-without-us .row.without-us .without-bullets {
    gap: 2.96875vw 6.5104166667vw;
    grid-template-columns: 34.21875vw 34.21875vw;
    padding-bottom: 5.7291666667vw;
  }
  section.row.with-or-without-us .row.without-us .without-bullets .minus-with-text .minus {
    height: 1.8229166667vw;
    margin: 0.3645833333vw 1.25vw 0 0;
    max-height: 1.8229166667vw;
    max-width: 1.8229166667vw;
    min-height: 1.8229166667vw;
    min-width: 1.8229166667vw;
    width: 1.8229166667vw;
  }
  section.row.with-or-without-us .row.without-us .without-bullets .minus-with-text .more-details {
    font-size: 1.3541666667vw;
    line-height: 2.0833333333vw;
  }
  section.row.with-or-without-us .row.with-us .sunny {
    padding-bottom: 5.7291666667vw;
  }
  section.row.with-or-without-us .row.with-us .sunny .sunshine-icon {
    height: 7.03125vw;
    margin-right: 2.0833333333vw;
    width: 7.1354166667vw;
  }
  section.row.with-or-without-us .row.with-us .sunny .statement-wrapper .immutable-top {
    font-size: 1.9791666667vw;
    line-height: 2.6041666667vw;
  }
  section.row.with-or-without-us .row.with-us .sunny .statement-wrapper .mutable-bottom {
    font-size: 1.9791666667vw;
    line-height: 2.6041666667vw;
  }
  section.row.with-or-without-us .row.with-us .with-bullets {
    gap: 2.96875vw 6.5104166667vw;
    grid-template-columns: 34.21875vw 34.21875vw;
    padding-bottom: 5.7291666667vw;
  }
  section.row.with-or-without-us .row.with-us .with-bullets .check-with-text .check img {
    height: 1.8229166667vw;
    margin: 0.3645833333vw 1.25vw 0 0;
    max-height: 1.8229166667vw;
    max-width: 1.8229166667vw;
    min-height: 1.8229166667vw;
    min-width: 1.8229166667vw;
    width: 1.8229166667vw;
  }
  section.row.with-or-without-us .row.with-us .with-bullets .check-with-text .more-details {
    font-size: 1.3541666667vw;
    line-height: 2.0833333333vw;
  }
}
@media screen and (max-width: 768px) {
  section.row.with-or-without-us {
    width: 100vw;
  }
  section.row.with-or-without-us .dare-to-switch {
    padding: 14.6666666667vw 0;
    width: 84vw;
  }
  section.row.with-or-without-us .dare-to-switch .dare {
    font-size: 4.2666666667vw;
    line-height: 5.8666666667vw;
    margin-right: 0;
  }
  section.row.with-or-without-us .dare-to-switch .switch {
    height: 9.0666666667vw;
    max-height: 9.0666666667vw;
    max-width: 16vw;
    min-height: 9.0666666667vw;
    min-width: 16vw;
    width: 16vw;
  }
  section.row.with-or-without-us .dare-to-switch .slider::before {
    height: 6.5104166667vw;
    width: 6.5104166667vw;
  }
  section.row.with-or-without-us .dare-to-switch input + .slider {
    border: 0.6666666667vw solid white;
  }
  section.row.with-or-without-us .dare-to-switch input:focus + .slider {
    box-shadow: 0 0 0.2666666667vw #118dd6;
  }
  section.row.with-or-without-us .dare-to-switch .slider.round {
    border-radius: 9.0666666667vw;
  }
  section.row.with-or-without-us .row.without-us .cloudy {
    padding-bottom: 14.6666666667vw;
    width: 84vw;
  }
  section.row.with-or-without-us .row.without-us .cloudy .cloudy-icon {
    height: 20.5333333333vw;
    margin: 0 8vw 0 6.1333333333vw;
    width: 21.0666666667vw;
  }
  section.row.with-or-without-us .row.without-us .cloudy .statement-wrapper .immutable-top {
    font-size: 5.3333333333vw;
    line-height: 6.9333333333vw;
    text-align: left;
  }
  section.row.with-or-without-us .row.without-us .cloudy .statement-wrapper .mutable-bottom {
    font-size: 5.3333333333vw;
    line-height: 6.9333333333vw;
    text-align: left;
  }
  section.row.with-or-without-us .row.without-us .without-bullets {
    display: grid;
    gap: 8vw;
    grid-template-columns: 84vw;
    padding-bottom: 14.6666666667vw;
  }
  section.row.with-or-without-us .row.without-us .without-bullets .minus-with-text .minus {
    height: 5.3333333333vw;
    margin: 1.3333333333vw 2.9333333333vw 0 0;
    max-height: 5.3333333333vw;
    max-width: 5.3333333333vw;
    min-height: 5.3333333333vw;
    min-width: 5.3333333333vw;
    width: 5.3333333333vw;
  }
  section.row.with-or-without-us .row.without-us .without-bullets .minus-with-text .more-details {
    font-family: "MuseoSansRegularLight", sans-serif;
    font-size: 4.2666666667vw;
    font-weight: 300;
    line-height: 6.9333333333vw;
  }
  section.row.with-or-without-us .row.with-us .sunny {
    padding-bottom: 14.6666666667vw;
    width: 84vw;
  }
  section.row.with-or-without-us .row.with-us .sunny .sunshine-icon {
    height: 21.0666666667vw;
    margin: 0 8vw 0 6.1333333333vw;
    width: 21.0666666667vw;
  }
  section.row.with-or-without-us .row.with-us .sunny .statement-wrapper .immutable-top {
    font-size: 5.3333333333vw;
    line-height: 6.9333333333vw;
    text-align: left;
  }
  section.row.with-or-without-us .row.with-us .sunny .statement-wrapper .mutable-bottom {
    font-size: 5.3333333333vw;
    line-height: 6.9333333333vw;
    text-align: left;
  }
  section.row.with-or-without-us .row.with-us .with-bullets {
    display: grid;
    gap: 8vw;
    grid-template-columns: 84vw;
    padding-bottom: 14.6666666667vw;
  }
  section.row.with-or-without-us .row.with-us .with-bullets .check-with-text .check img {
    height: 5.3333333333vw;
    margin: 1.3333333333vw 2.9333333333vw 0 0;
    max-height: 5.3333333333vw;
    max-width: 5.3333333333vw;
    min-height: 5.3333333333vw;
    min-width: 5.3333333333vw;
    width: 5.3333333333vw;
  }
  section.row.with-or-without-us .row.with-us .with-bullets .check-with-text .more-details {
    font-family: "MuseoSansRegularLight", sans-serif;
    font-size: 4.2666666667vw;
    font-weight: 300;
    line-height: 6.9333333333vw;
  }
}

</style>
