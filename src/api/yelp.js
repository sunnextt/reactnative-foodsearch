import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: "Bearer Er3Q9aMSiQEs-aygOt8egYw5d7qbWx9dQOVZTUSLK0Z--TR2vo8nAFXgZuFF29JZgeRYgLaPL2I98STGzw48CRB2dNuRtMfU15EBFs2hwuNdZtk_CI5_DLEA2zw5YXYx",
    "Access-Control-Allow-Origin": "*"
  },
});
