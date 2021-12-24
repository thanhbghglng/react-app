import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./component/Header";
import Footer from './component/Footer'
export default function LayoutWebsite({category,cart}) {
  return (
    <>
      <Header category={category} cart={cart}/>

      <Outlet></Outlet>
      <Footer />
    </>
  );
}
