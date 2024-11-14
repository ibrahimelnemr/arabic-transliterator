import React, { useState } from "react";
import axios, { Axios } from "axios";

export default function HttpHook() {
  const [loading, setLoading] = useState<boolean>(false);
  type method = "post" | "get" | "put" | "delete";

  const axios = new Axios();
  const sendRequest = async ({
    method,
    url,
  }: {
    method: method;
    url: string;
  }) => {
    setLoading(true);
    const response = await axios[method](url);
    setLoading(false);
    return response;
  };

  return {
    loading,
    setLoading,
    sendRequest,
  };
}
