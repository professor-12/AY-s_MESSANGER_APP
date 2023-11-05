
const BASE_URL = import.meta.env.VITE_BASEURL
const useFetch = async () => {
      const response = await fetch(BASE_URL + `/profile/Emmanuel`)
      
      const user_profile = await response.json()

      return {user_profile}

}

export default useFetch