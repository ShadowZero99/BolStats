import React from "react";
import { MdOutlineLibraryBooks } from "react-icons/md";
import Question from "./Question";
import "./Question.css";
import { questions } from "./data.js";

const Faq = () => {
  return (
    <section id="faq">
      <div className="container faq">
        <div className="u-title">
          <MdOutlineLibraryBooks color="orangered" size={30} />
          <h2>FAQs</h2>
          <p className="u-text-small u-text-dark">
            Here are a few handpicked Problems from our clients. We think you'll
            find this helpful.
          </p>
        </div>

        <div className="questions">
          {questions.map((question) => (
            <Question title={question.title} answer={question.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
