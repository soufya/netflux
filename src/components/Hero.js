import React from "react";
import Button from "./Button";


const Hero = (props) => {
  const movieId = "/uTVGku4LibMGyKgQvjBtv3OYfAX";//TODO Athough: Is this static becasue the photo size is special, shall we make this to always equal Peaky Blinders ?
    return (
      <section className="section hero featuredMovies">
        <div className="container">
          <div className="slide featured">
            <h2 className="featured-title">Peaky Blinders</h2>
            <p className="featured-overview">المسلسل يدور حول البطل كالين مورفي في دور تومي شيلبي، قائد العصابة بالأضافة إلى سام نيل في دور المحقق المسؤول عن قمع العصابة. المسلسل مقتبس عن عائلة البيكي بلايندرز الحقيقية المسلسل عرض لاول مره علي بي بي سي 2 في 13 سبتمبر 2013 لمدة 6 حلقات</p>
            <p className="buttons">
              {/* <Button text="شاهد الفيلم" primary="is-primary" /> */}
              {/* TODO Authoug: I know why this is a component, but now we only have it once maybe we can just get the DOM directly put here */}
              <Button
                text="إقرأ المزيد"
                primary="is-primary"
                history={props.history}
                movieId={movieId} />
            </p>
          </div>
        </div>
      </section>
    );
}

export default Hero;
//  onClick={() => renderDetails(props, movieId)}