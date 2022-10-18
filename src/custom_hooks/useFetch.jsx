import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const baseUrl = "https://jsonplaceholder.typicode.com/";

function useFetch(param) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}${param}`)
      .then((res) => {
        res.json().then((result) => {
          setData(result);
        });
      })
      .catch((err) => {
        console.log("is error", err);
      });
  }, [param]);

  return [...data];
}

useFetch.propTypes = {
  param: PropTypes.string,
};

export default useFetch;