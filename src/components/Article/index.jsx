import React, { Component } from 'react';

class Article extends Component {

    render() {
        return (
            <article className="my-90">
                <header className="text-center mb-40">
                    <h3>
                    <a href="blog-single.html">We've just passed 1,000 customers!</a>
                    </h3>
                    <div className="link-color-default fs-12">
                    <a href="#">News, Success</a>,
                    <time>May 13, 2017</time>
                    </div>
                </header>
                <a href="blog-single.html">
                    <img className="rounded" src="assets/img/blog-3.jpg" alt="..." />
                </a>
                <div className="card-block">
                    <p className="text-justify">Together. Great. So good was saying, that can't first let called air divide stars male isn't i. Herb third let
                    may fourth divide. Greater gathering land you'll i their beast have. She'd form sea it wherein fowl, spirit
                    creeping living. Likeness creepeth you hath heaven. Likeness, moveth fruitful behold. Open evening a air us
                    behold. Saying above moving second a subdue likeness after also second.</p>
                    <p className="text-center mt-40">
                    <a className="btn btn-primary btn-round" href="blog-single.html">Read more</a>
                    </p>
                </div>
            </article>

        );
    }
}

export default Article;