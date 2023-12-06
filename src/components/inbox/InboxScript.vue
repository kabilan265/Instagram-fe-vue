<script>
import appServices from "../../services/AppServices";
export default {
  data() {
    return {
      chats: [],
      userName: this.$store.state.userName,
      isSkelton: true,
    };
  },
  computed() {},
  methods: {
    goToProfile() {
      this.$router.push("/" + this.userName);
    },
    getUserName(chat) {
      if (chat.isGroupChat) {
        return chat.chatName;
      }
      const user = chat.users.find((user) => {
        if (user.userName !== this.userName) {
          return user.userName;
        }
      });
      return user.userName;
    },
    getUserPic(chat)
    {
      if (chat.isGroupChat) {
        return "https://firebasestorage.googleapis.com/v0/b/instagram-clone-9f45e.appspot.com/o/default%2FNoPic.jpg?alt=media";
      }
      const user = chat.users.find((user) => {
        if (user.userName !== this.userName) {
          return user.profilePic;
        }
      });
      return user.profilePic;
    },
    gotToChat(event) {
      console.log(event);
      const elemType = event.target.tagName;
      let chatId;
      if (elemType === "DIV") {
        console.log(event.target.dataset.keyId);
        chatId = event.target.dataset.keyId;
      } else if (elemType === "SECTION") {
        console.log(event.target.parentElement.dataset.keyId);
        chatId = event.target.parentElement.dataset.keyId;
      } else {
        console.log(event.target.parentElement.parentElement.dataset.keyId);
        chatId = event.target.parentElement.parentElement.dataset.keyId;
      }
      const chatDetails = this.chats.find((chat) => {
        if (chat._id === chatId) {
          return chat;
        }
      });
      this.$store.commit("setChatDetails", chatDetails);
      console.log(this.$socket);
      this.$socket.emit("joinChat", chatId);
      this.$router.push(`/inbox/${chatId}`);
    },
    getData() {
      appServices
        .fetchChats()
        .then((res) => {
          this.chats = res.data;
          this.isSkelton = false;
          /* this.chats = data.map((d)=>{
            if()
          }) */
        })
        .catch((err) => {});
    },
  },

  mounted() {
    this.getData();
    console.log(this.$store.state.userName);
    this.$store.commit("updateUserName");
    console.log(this.$store.state.userName);
  },
};
</script>
