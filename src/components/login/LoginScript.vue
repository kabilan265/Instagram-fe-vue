<script>
import appServices from "../../services/AppServices";
export default {
  name: "login",
  data() {
    return {
      userName: "",
      password: "",
      passToggler: "SHOW",
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
      const elem = document.body.querySelector('#password');
      if(this.passToggler === 'SHOW')
      {
        elem.type='text';
        this.passToggler='HIDE'
      }
      else{
        elem.type='password';
        this.passToggler='SHOW'
      }
    },
    login() {
      const data = {
        userName: this.userName,
        password: this.password,
      };
      appServices
        .loginUser(data)
        .then((res) => {
          sessionStorage.setItem("token", res.data.token);
          this.$router.push(`/${this.userName}`);
        })
        .then((err) => {});
    },
  },
  mounted() {},
};
</script>
