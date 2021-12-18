import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./component/Header";
import Footer from './component/Footer'
export default function LayoutWebsite({category}) {
  return (
    <>
      <Header category={category}/>

      <Outlet></Outlet>
      <Footer />
    </>
  );
}
