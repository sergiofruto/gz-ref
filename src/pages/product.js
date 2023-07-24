import Head from "next/head";
import * as prismic from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices/";
import { Layout } from "@/components/Layout";
import Header from "@/components/Header/Header";

const Product = ({ page, navigation, settings }) => {
  return (
    <Layout>
      <Header />
      <main className="mt-5 pt-4">
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-6 mb-4">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/14.jpg" className="img-fluid" alt="" />
            </div>

            <div className="col-md-6 mb-4">
                <div className="p-4">
                    <div className="mb-3">
                        <a href="">
                            <span className="badge bg-dark me-1">Category 2</span>
                        </a>
                        <a href="">
                            <span className="badge bg-info me-1">New</span>
                        </a>
                        <a href="">
                            <span className="badge bg-danger me-1">Bestseller</span>
                        </a>
                    </div>

                    <p className="lead">
                        <span className="me-1">
                            <del>$200</del>
                        </span>
                        <span>$100</span>
                    </p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolor suscipit libero eos atque quia ipsa sint voluptatibus! Beatae sit assumenda asperiores iure at maxime atque repellendus maiores quia sapiente.</p>

                    <form className="d-flex justify-content-left">
                        <div className="form-outline me-1">
                            <input type="number" value="1" className="form-control placeholder-active active" />
                        <div className="form-notch"><div className="form-notch-leading"></div><div className="form-notch-middle"></div><div className="form-notch-trailing"></div></div></div>
                        <button className="btn btn-primary ms-1" type="submit">
                            Add to cart
                            <i className="fas fa-shopping-cart ms-1"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>

        <hr />

        <div className="row d-flex justify-content-center">
            <div className="col-md-6 text-center">
                <h4 className="my-4 h4">Additional information</h4>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus suscipit modi sapiente illo soluta odit voluptates, quibusdam officia. Neque quibusdam quas a quis porro? Molestias illo neque eum in laborum.</p>
            </div>
        </div>

        <div className="row">
            <div className="col-lg-4 col-md-12 mb-4">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/11.jpg" className="img-fluid" alt="" />
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/12.jpg" className="img-fluid" alt="" />
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/13.jpg" className="img-fluid" alt="" />
            </div>
        </div>
    </div>
</main>
    </Layout>
  );
};

export default Product;

export async function getStaticProps({ locale, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("page", "home", { lang: locale });
  const navigation = await client.getSingle("navigation", { lang: locale });
  const settings = await client.getSingle("settings", { lang: locale });

  return {
    props: {
      page,
      navigation,
      settings,
    },
  };
}