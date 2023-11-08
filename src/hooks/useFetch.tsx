
const BASE_URL = import.meta.env.VITE_BASEURL
const useFetch = async () => {
      const response = await fetch(BASE_URL + `/profile`, {
          method: "GET",
          headers: {
              Authorization:
                  "Token " +
                  localStorage.getItem("usercredentialstokenACMESSANGER"),
          },
      });
      const user_profile = await response.json()
      return {user_profile}

}

export default useFetch