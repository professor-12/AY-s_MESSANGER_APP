class Chat {
      constructor(public img: string, public username: string,public displayname: string , public time: string) {
            this.img = img;
            this.displayname = displayname;
            this.time = time;
            this.username = username
      }
}


export const Chatdata: Chat[] = [
    {
        img: "https://firebasestorage.googleapis.com/v0/b/ac-messenger-p.appspot.com/o/images%2F-5766953460397357234_120.jpg9084f453-a0d6-4b53-a701-f505a383fd5f?alt=media&token=e93471e1-7c26-4ffd-9afa-c9e9b30d283d",
        username: "adewale",
        displayname: "Emmanuel",
        time: "10:46am",
    },
    {
        img: "Global Chat",
        username: "Ali Khalid",
        time: "7:00am",
        displayname: "Global",
    },
    {
        img: "Global Chat",
        username: "Ali Khalid",
        time: "7:00am",
        displayname: "Global",
    },
    {
        img: "Global Chat",
        username: "Ali Khalid",
        time: "7:00am",
        displayname: "Global",
    },
    {
        img: "Global Chat",
        username: "Ali Khalid",
        time: "7:00am",
        displayname: "Global",
    },
];

const ChatsData = () => {
  return (
    <div>ChatsData</div>
  )
}

export default ChatsData