
const MessageTab = () => {
  return (
      <div className="flex-auto bg-primary">
          <div className="flex justify-center h-screen items-center  flex-col space-y-3">
              <img
                  className="md:w-[24rem]"
                  src="https://ac-messenger-p.web.app/start_messaging_img.bf5aacaf.svg"
                  alt=""
              />
              <h1 className="text-xl">Start Messaging with ACMessenger</h1>
              <p>Select a chat in your inbox to start messaging.</p>
          </div>
      </div>
  );
}

export default MessageTab