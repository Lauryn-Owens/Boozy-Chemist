import React from "react";
import { Routes, Route } from "react-router-dom";

//Import pages
import HomePage from "../Pages/home";
import OurClassesPage from "../Pages/ourClasses";
import SingleClass from "../Pages/singleClass";
import SearchForm from "../Components/SearchForm/searchForm";
import FrequencyAskedQuestionsPage from "../Pages/frequentlyAskedQuestions";
import ShoppingCart from "../Pages/shoppingCart";
import LoginPage from "../Pages/login";
import CheckOutPage from "../Pages/checkOut";
import ErrorPage from "../Pages/error";
import ContactUs from "../Pages/contactUs";
import CheckOutConfirmation from "../Pages/checkOutConfirmation";
import SignUp from "../Pages/signUp";

const ApplicationRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/ourClasses" element={<OurClassesPage />} />
        <Route exact path="/ourClasses/:className" element={<SingleClass />} />
        <Route exact path="/ourDrinks" element={<SearchForm />} />
        <Route
          exact
          path="/frequentlyAskedQuestions"
          element={<FrequencyAskedQuestionsPage />}
        />
        <Route exact path="/shoppingCart" element={<ShoppingCart />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/checkout" element={<CheckOutPage />} />
        <Route
          exact
          path="/checkOutConfirmation"
          element={<CheckOutConfirmation />}
        />
        <Route exact path="/contactUs" element={<ContactUs />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default ApplicationRoutes;
