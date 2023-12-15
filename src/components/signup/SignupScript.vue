<script>
import appServices from "../../services/AppServices";
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  maxLength,
  helpers,
  between,
} from "@vuelidate/validators";
import {
  VueSpinnerIos,
  // ...
} from "vue3-spinners";
export default {
  name: "signup",
  components: {
    VueSpinnerIos,
    // ...
  },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      details: {
        userName: "",
        password: "",
        email: "",
        fullName: "",
      },
      passToggler: "SHOW",
      errorMsg: "",
      signUpText: "Sign Up",
      loginSpinner: false,
    };
  },
  computed: {
    isDisabled() {
      return !this.v$.details.$dirty;
    },
    validationsErrMsg() {
      if (this.v$.details.$errors.length) {
        return this.v$.details.$errors[0].$message;
      }
      return false;
    },
  },
  validations() {
    return {
      details: {
        email: {
          required,
          email: helpers.withMessage("email id is invalid", email),
        },
        fullName: {
          required,
          minLength: helpers.withMessage(
            "fullname should have minimum of 4 characters",
            minLength(4)
          ),
          /* maxLength: helpers.withMessage(
            "userName should have maximum of 12 characters",
            minLength(12)
          ), */
        },
        userName: {
          required,
          minLength: helpers.withMessage(
            "username should have minimum of 4 characters",
            minLength(4)
          ),
          /* maxLength: helpers.withMessage(
            "userName should have maximum of 12 characters",
            minLength(12)
          ), */
        },
        password: {
          required,
          minLength: helpers.withMessage(
            "password should have minimum of 4 characters",
            minLength(4)
          ),
          /* maxLength: helpers.withMessage(
            "userName should have maximum of 12 characters",
            minLength(12)
          ), */
        },
      },
    };
  },
  methods: {
    goToLogIn(event) {
      event.preventDefault();
      this.$router.push("/login");
    },
    showOrHide() {
      const elem = document.body.querySelector("#password");
      if (this.passToggler === "SHOW") {
        elem.type = "text";
        this.passToggler = "HIDE";
      } else {
        elem.type = "password";
        this.passToggler = "SHOW";
      }
    },
    signup() {
      this.errorMsg = this.validationsErrMsg;
      if (this.errorMsg) {
        return;
      }
      this.signUpText = "";
      this.loginSpinner = true;
      appServices
        .registerUser(this.details)
        .then((res) => {
          sessionStorage.setItem("token", res.data.token);
          this.$store.commit("setUserName", this.details.userName);
          this.$router.push(`/${this.details.userName}`);
        })
        .catch((err) => {
          this.errorMsg =
            err.response?.data?.error ||
            "Server is down please try again later";
          this.loginSpinner = false;
          this.signUpText = "Log in";
        });
    },
  },
};
</script>
