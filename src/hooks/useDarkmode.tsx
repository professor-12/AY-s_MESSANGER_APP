const useDarkmode = () => {
      let darkmode = localStorage.getItem("darkmode")
      if (darkmode === "true") {
            localStorage.setItem("darkmode", "false");
            return;
      }
      localStorage.setItem("darkmode","true")

};

export default useDarkmode;
