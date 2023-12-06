<script>
import appServices from "../../services/AppServices";
import {
  VueSpinnerIos,
  // ...
} from "vue3-spinners";
export default {
  components: {
    VueSpinnerIos,
    // ...
  },
  name: "login",
  data() {
    return {
      userName: "",
      password: "",
      passToggler: "SHOW",
      loading: true,
      color: "black",
      height: "10px",
      width: "5px",
      loginText: "Log in",
      loginSpinner: false,
      errorMsg: "",
    };
  },
  computed: {
    isDisabled() {
      return !(this.userName && this.password.length >= 5);
    },
  },
  methods: {
    goToSignUp(event) {
      event.preventDefault();
      this.$router.push("/sign-up");
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
    login() {
      this.errorMsg = "";
      this.loginText = "";
      this.loginSpinner = true;
      const data = {
        userName: this.userName,
        password: this.password,
      };
      appServices
        .loginUser(data)
        .then((res) => {
          sessionStorage.setItem("token", res.data.token);
          this.$store.commit("setUserName", this.userName);
          this.$router.push(`/${this.userName}`);
        })
        .catch((err) => {
          this.errorMsg =
            err.response?.data?.error ||
            "Server is down please try again later";
          this.loginSpinner = false;
          this.loginText = "Log in";
        });
    },
  },
  mounted() {},
};
</script>
