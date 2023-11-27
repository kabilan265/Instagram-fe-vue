<script>
import appServices from "../../services/AppServices";
import Navbar from "../../reusable-components/Navbar.vue";
import Loader from "../../reusable-components/Loader.vue";
import UploadPhoto from "../../reusable-components/UploadPhoto.vue"
export default {
  name: "profile",
  components: { Navbar, Loader,UploadPhoto },
  data() {
    return {
      profile: {},
      enableSpinner: true,
    };
  },
  methods: {
    uploadPhoto(action = "timeline") {
      const input = document.createElement("input");
      input.type = "file";
      input.click();
      let imgs, img;
      const Othis = this;
      input.onchange = function (e) {
        imgs = e.target.files;
        img = imgs[0];
        console.log(img);
        const body = {
          image: img,
        };
        if (action === "timeline") {
          appServices
            .uploadUserImg(body)
            .then((res) => {
              console.log(res.data.photos);
              Othis.profile.photos = res.data.photos;
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          appServices
            .uploadUserProfilePic(body)
            .then((res) => {
              console.log(res.data);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      };
    },
    getData() {
      appServices
        .getUserDetails()
        .then((res) => {
          this.profile = res.data.userDetails;
        })
        .catch((err) => {});
    },
  },
  mounted() {
    this.getData();
    const Othis = this;
    /* document.addEventListener('DOMContentLoaded', ()=>{ */

    /* }) */
    window.onload = function(){
      setTimeout(()=>{
        Othis.enableSpinner = false;
      },1000)
    }
  },
};
</script>
