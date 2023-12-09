import Tab from "../Tabs/Tab";

const Home = () => {
    return (
        <>
            <div className="flex h-screen justify-center items-center">
                <div className="">
                    <div className="md:flex hidden justify-center  items-center  flex-col space-y-3">
                        <img
                            className="md:w-[24rem]"
                            src="https://ac-messenger-p.web.app/start_messaging_img.bf5aacaf.svg"
                            alt=""
                        />
                        <h1 className="text-xl">
                            Start Messaging with ACMessenger
                        </h1>
                        <p>Select a chat in your inbox to start messaging.</p>
                    </div>
                </div>
                <div className="md:hidden w-full p-2 h-screen overflow-hidden">
                    <Tab />
                </div>
            </div>
        </>
    );
};

export default Home;
