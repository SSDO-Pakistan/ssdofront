import React from "react";
import moment from "moment";
import Link from "next/link"
import ReactMarkdown from "react-markdown";
const Blog = ({ Blogs }) => {
  return (
    <div className="col-md-8">
      <div className="block-area">
        <div className="block-title-6">
          <h4 className="h5 border-primary">
            <span className="bg-primary text-white">Blogs</span>
          </h4>
        </div>
        <div className="border-bottom-last-0 first-pt-0">
          {Blogs.data.map((blog) => {
            return (
              <article
                className="card card-full hover-a py-4"
                key={blog.id}
              >
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-12">
                    <div className="card-body pt-3 pt-sm-0 pt-md-3 pt-lg-0">
                      <h3 className="card-title h2 h3-sm h2-md">
                        {blog.attributes.title}
                      </h3>
                      <div className="card-text mb-2 text-muted small">
                        <span className="d-none d-sm-inline me-1">
                          <a className="fw-bold" href="#">
                            admin
                          </a>
                        </span>
                        <time dateTime="2019-10-21">
                          {moment(blog.attributes.createdAt).format(
                            "Do MMMM YYYY"
                          )}
                        </time>
                      </div>
                      <p className="card-text"><ReactMarkdown>{blog.attributes.description.substring(0, 300).concat("...")}</ReactMarkdown></p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}

          {/* <article className="card card-full hover-a py-4">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <div className="card-body pt-3 pt-sm-0 pt-md-3 pt-lg-0">
                  <h3 className="card-title h2 h3-sm h2-md">
                    <a href="#">Domestic violence: A trauma</a>
                  </h3>
                  <div className="card-text mb-2 text-muted small">
                    <span className="d-none d-sm-inline me-1">
                      <a className="fw-bold" href="#">
                        John Doe
                      </a>
                    </span>
                    <time dateTime="2019-10-21">Oct 21, 2019</time>
                  </div>
                  <p className="card-text">
                    By: Farishta Khattak Domestic violence occurs between people
                    in an intimate relationship. It can take many forms,
                    including emotional,...
                  </p>
                </div>
              </div>
            </div>
          </article>
          <article className="card card-full hover-a py-4">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <div className="card-body pt-3 pt-sm-0 pt-md-3 pt-lg-0">
                  <h3 className="card-title h2 h3-sm h2-md">
                    <a href="#">Modern slavery; bounding generations</a>
                  </h3>
                  <div className="card-text mb-2 text-muted small">
                    <span className="d-none d-sm-inline me-1">
                      <a className="fw-bold" href="#">
                        John Doe
                      </a>
                    </span>
                    <time dateTime="2019-10-21">Oct 21, 2019</time>
                  </div>
                  <p className="card-text">
                    Human trafficking is an organized crime as well as it’s a
                    billion-dollar industry, human trafficking is when someone
                    irrespective of...
                  </p>
                </div>
              </div>
            </div>
          </article>
          <article className="card card-full hover-a py-4">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <div className="card-body pt-3 pt-sm-0 pt-md-3 pt-lg-0">
                  <h3 className="card-title h2 h3-sm h2-md">
                    <a href="#">
                      Right to Information; a path to Enlightenment!
                    </a>
                  </h3>
                  <div className="card-text mb-2 text-muted small">
                    <span className="d-none d-sm-inline me-1">
                      <a className="fw-bold" href="#">
                        John Doe
                      </a>
                    </span>
                    <time dateTime="2019-10-21">Oct 21, 2019</time>
                  </div>
                  <p className="card-text">
                    BY NATASHA The right to information is one of the
                    fundamental rights in Pakistan, In October 2002, then
                    President Musharraf promulgated...
                  </p>
                </div>
              </div>
            </div>
          </article>
          <article className="card card-full hover-a py-4">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <div className="card-body pt-3 pt-sm-0 pt-md-3 pt-lg-0">
                  <h3 className="card-title h2 h3-sm h2-md">
                    <a href="#">
                      Why Punjab is the largest victim of Human Trafficking in
                      Pakistan?
                    </a>
                  </h3>
                  <div className="card-text mb-2 text-muted small">
                    <span className="d-none d-sm-inline me-1">
                      <a className="fw-bold" href="#">
                        John Doe
                      </a>
                    </span>
                    <time dateTime="2019-10-21">Oct 21, 2019</time>
                  </div>
                  <p className="card-text">
                    By: Rukhshinda Baig - Legislative Intern SSDO When we talk
                    about Pakistan, Punjab takes leading role in everything
                    whether it is a...
                  </p>
                </div>
              </div>
            </div>
          </article> */}
        </div>
        <Link href="/posts">
          <p
            style={{
              textAlign: "right",
              color: "blue",
              cursor: "pointer",
            }}
          >
            view more
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Blog;