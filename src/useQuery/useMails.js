import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { getHeaders, handleError } from "../helpers/getHeaders";

const fetchDataMails = async (data) => {
  const headers = getHeaders("json");
  try {
    const result = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/mail`,
      data,
      {
        headers,
      }
    );
    return result.data;
  } catch (error) {
    await handleError(error);
  }
};

export const useMails = () => {
  const { mutate, status } = useMutation({
    mutationFn: fetchDataMails,
    onSuccess: () => {},
  });
  return { mutate, status };
};
