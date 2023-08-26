import axios from 'axios';

const url = 'http://localhost:8000';

export const CheckLogin = async ({email,password}) => {
    try{
       const result = await axios.post(`${url}/login`,{email,password})
       console.log(result.data);
        return result.data ;

    }
    catch(error){
        console.log(error);
    }
  
}

export const getGeneral = async () => {
  try {
    const data = await axios.get(`${url}/general`);
    // console.log(data.data);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getBusiness = async () => {
  try {
    const data = await axios.get(`${url}/business`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getEntertainment = async () => {
  try {
    const data = await axios.get(`${url}/entertainment`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getHealth = async () => {
  try {
    const data = await axios.get(`${url}/health`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getScience = async () => {
  try {
    const data = await axios.get(`${url}/science`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getSports = async () => {
  try {
    const data = await axios.get(`${url}/sports`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getTechnology = async () => {
  try {
    const data = await axios.get(`${url}/technology`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getFinance = async () => {
  try {
    const data = await axios.get(`${url}/finance`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPolitics = async () => {
  try {
    const data = await axios.get(`${url}/politics`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getFashion = async () => {
  try {
    const data = await axios.get(`${url}/fashion`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const addBookmark = async (news) => {
     try{
      // console.log(news);
        const result = await axios.post(`${url}/bookmark`,news)
        console.log(result);
          return result ;
     }
     catch(error){
         console.log(error);
     }
   
}

export const getBookmark = async (email) => {
  try {
    
    const res= await axios.get(`${url}/bookmark/${email}`);
    return res.data;
  } catch (error) { 
    console.log(error);
  }
}



export const removeBookmark = async (newsUrl, email) => {
  try {
    const data = { newsUrl, email }; 
    const res = await axios.post(`${url}/removeBookmark`, data); 
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};


export const checkForBookmark = async (newsUrl, email) => {
  try {
    const data = { newsUrl, email }; 
    const res = await axios.post(`${url}/checkForBookmark`, data); 
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}