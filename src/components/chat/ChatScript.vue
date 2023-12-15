<script>
import appServices from "../../services/AppServices";

export default {
  data() {
    return {
      chatId: this.$route.params.id,
      userName: this.$store.state.userName,
      chatDetails: this.$store.state.chatDetails,
      messages: [],
      recieverName: "",
      recieverPic: "",
      message: "",
    };
  },
  sockets: {
    messageReceived: function (data) {
      console.log("working");
      this.messages.push(data);
      const elem = document.body.getElementsByClassName("messages")[0];
      setTimeout(() => {
        elem.scrollTop = elem.scrollHeight;
      }, 10);
    },
    connection: function () {
      console.log("connection");
    },
  },
  methods: {
    goToInbox() {
      this.$router.push("/direct/inbox");
    },
    getData() {
      appServices
        .getAllMessages(this.chatId)
        .then((res) => {
          this.messages = res.data;
          const elem = document.body.getElementsByClassName("messages")[0];
          setTimeout(() => {
            elem.scrollTop = elem.scrollHeight;
          }, 10);
        })
        .catch((err) => {});
    },
    getRecieverDetails() {
      if (this.chatDetails.isGroupChat) {
        this.recieverName = this.chatDetails.chatName;
        this.recieverPic =
          "https://firebasestorage.googleapis.com/v0/b/instagram-clone-9f45e.appspot.com/o/default%2FNoPic.jpg?alt=media";
      } else {
        const receiver = this.chatDetails.users.find((user) => {
          if (user.userName !== this.userName) {
            return user;
          }
        });
        this.recieverName = receiver.userName;
        this.recieverPic = receiver.profilePic;
      }
    },
    sendMessage() {
      const data = {
        chat: this.chatId,
        content: this.message,
      };
      this.message = "";
      appServices
        .sendMessage(data)
        .then((res) => {
          this.messages.push(res.data);
          const elem = document.body.getElementsByClassName("messages")[0];
          setTimeout(() => {
            elem.scrollTop = elem.scrollHeight;
          }, 10);
          console.log(res.data);
          this.$socket.emit("sendMessage", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    if (this.$store.state.chatDetails?._id) {
      console.log("CHAT_SOC")
      const chatId = this.$store.state.chatDetails._id;
      this.$socket.emit("joinChat", chatId);
    }
  },
  mounted() {
    this.getData();
    this.getRecieverDetails();
  },
};
</script>
