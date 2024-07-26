/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      REACT_APP_API_KEY: process.env.REACT_APP_API_KEY,
      REACT_APP_ORGANIZATION_ID: process.env.REACT_APP_ORGANIZATION_ID,
      REACT_APP_APP_ID: process.env.REACT_APP_APP_ID,
    },
  };
  
  export default nextConfig;
  