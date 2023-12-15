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
const imgObj = {
  root: null,
  threshold: 0,
  /*  rootMargin: '40px' */
};
const imgObserver = new IntersectionObserver(imgFunc, imgObj);
function imgFunc(entries, observer) {
  console.log(entries);
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.src = e.target.dataset.src;
      e.target.onload = function () {
        //e.target.classList.remove("h-\[250px\]");
        e.target.style.height = "auto";
      };

      imgObserver.unobserve(e.target);
    }
  });
}
export default {
  name: "profile",
  components: {
    Navbar,
    Loader,
    UploadPhoto,
    PageNotFound,
    ImageViewer,
    VueSpinnerIos,
  },
  data() {
    return {
      profile: {},
      enableSpinner: true,
      imgCount: 0,
      totalImages: 0,
      uploadModal: false,
      authorized: true,
      routerUserName: this.$route.params.userName,
      profilePicSpinner: false,
    };
  },
  methods: {
    openModal() {
      this.uploadModal = true;
    },
    closeModal() {
      this.uploadModal = false;
    },
    urlToFile(url, name) {
      let arr = url.split(",");
      let mime = arr[0].match(/:(.*?);/)[1];
      let data = arr[1];
      let dataStr = atob(data);
      let n = dataStr.length;
      let dataArr = new Uint8Array(n);
      while (n--) {
        dataArr[n] = dataStr.charCodeAt(n);
      }
      let file = new File([dataArr], name, { type: mime });
      console.log(file);
      return file;
    },
    uploadPhoto(action = "timeline") {
      this.closeModal();
      const input = document.createElement("input");
      input.type = "file";
      input.click();
      let imgs, img, imgName;
      const Othis = this;
      input.onchange = function (e) {
        imgs = e.target.files;
        img = imgs[0];
        imgName = img.name;
        console.log(img);
        /* const body = {
          image: img,
        }; */
        let reader = new FileReader();
        reader.readAsDataURL(img);
        reader.onload = (e) => {
          let imgUrl = e.target.result;
          let image = document.createElement("img");
          image.src = imgUrl;
          image.onload = (event) => {
            let canvas = document.createElement("canvas");
            //let ratio = width / event.target.width;
            canvas.width = action === 'timeline'? 900:200;
            canvas.height = action === 'timeline'? 900:200;

            const context = canvas.getContext("2d");
            context.drawImage(image, 0, 0, canvas.width, canvas.height);
            let newImg = context.canvas.toDataURL("image/jpeg", 100);
            let optimizedFile = Othis.urlToFile(newImg, imgName);
            console.log(optimizedFile);
            const body = {
              image: optimizedFile,
            };
            if (action === "timeline") {
              Othis.enableSpinner = true;
              appServices
                .uploadUserImg(body)
                .then((res) => {
                  console.log(res.data.photos);
                  Othis.profile.photos.push(res.data)
                  setTimeout(()=>{
                    const elem = document.querySelectorAll('.gallery img')[Othis.profile.photos.length-1]
                    console.log(elem)
                    imgObserver.observe(elem);
                  })
                  Othis.enableSpinner = false;
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
        };
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
          setTimeout(() => {
            document.body.querySelectorAll(".gallery img").forEach((e) => {
              imgObserver.observe(e);
            });
          }, 10);
          /* this.enableSpinner = false; */
          this.totalImages = res.data.userDetails.photos.length;
          this.$store.commit("setUserId", this.profile._id);
          this.$socket.emit("setup", this.profile._id);
        })
        .catch((err) => {
          console.log(err);
          this.enableSpinner = false;
          this.authorized = false;
        });
    },
    imgLoaded() {
      this.enableSpinner = false;
      /* this.imgCount++;
      if (this.imgCount === this.totalImages + 1) {
        setTimeout(() => {
          this.enableSpinner = false;
        }, 300);
      } */
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
