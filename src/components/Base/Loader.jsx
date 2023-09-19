import React from 'react';
import { Grid } from 'react-loader-spinner';

const Loading = () => (
  <div className="flex items-center justify-center h-screen">
    <Grid height="80" width="80" ariaLabel="grid-loading" radius="12.5" wrapperStyle={{}} wrapperClass="loader" visible={true} />
  </div>
);

export default Loading;
