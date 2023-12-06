<script>
import appServices from "../../services/AppServices";
import Navbar from "../../reusable-components/Navbar.vue";
import Loader from "../../reusable-components/Loader.vue";
import UploadPhoto from "../../reusable-components/UploadPhoto.vue";
import PageNotFound from "../../reusable-components/PageNotFound.vue";
import ImageViewer from "../../reusable-components/ImageViewer.vue";
import {
  VueSpinnerIos,
  // ...
} from "vue3-spinners";
export default {
  name: "profile",
  components: { Navbar, Loader, UploadPhoto, PageNotFound, ImageViewer,VueSpinnerIos },
  data() {
    return {
      profile: {},
      enableSpinner: true,
      imgCount: 0,
      totalImages: 0,
      uploadModal: false,
      authorized: true,
      routerUserName: this.$route.params.userName,
      profilePicSpinner:false
    };
  },
  methods: {
    openModal() {
      this.uploadModal = true;
    },
    closeModal() {
      this.uploadModal = false;
    },
    uploadPhoto(action = "timeline") {
      this.closeModal();
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
              Othis.enableSpinner = true;
              Othis.totalImages = res.data.photos.length;
              Othis.profile.photos = res.data.photos;
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          Othis.profilePicSpinner = true;
          appServices
            .uploadUserProfilePic(body)
            .then((res) => {
              console.log(res.data);
              Othis.profile.profilePic = res.data.profilePic;
              Othis.profilePicSpinner = false;
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
          if (this.profile.userName !== this.routerUserName) {
            this.authorized = false;
            this.enableSpinner = false;
            return;
          }
          this.totalImages = res.data.userDetails.photos.length;
          this.$store.commit('setUserId', this.profile._id);
          this.$socket.emit('setup', this.profile._id)
        })
        .catch((err) => {
          this.enableSpinner = false;
          this.authorized = false;
        });
    },
    imgLoaded() {
      this.imgCount++;
      if (this.imgCount === this.totalImages + 1) {
        setTimeout(() => {
          this.enableSpinner = false;
        }, 300);
      }
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
