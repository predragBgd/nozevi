import React from "react"

export const Footer = () => {
    return(
        <footer className="card bg-dark text-center text-white">
        {/* Grid container */}
        <div className="container p-4">
          {/* Social media */}
          <section className="mb-4">
            {/* Facebook */}
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
              <i className="fab fa-facebook"></i>
            </a>
            {/* Instagram */}
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
              <i className="fab fa-instagram"></i>
            </a>
            {/* Google */}
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
              <i className="fab fa-google"></i>
            </a>
          </section>
          {/* Text */}
          <section className="mb-4">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores consectetur quam, distinctio placeat nobis accusantium voluptates facere debitis, officia eius vitae magni quos deserunt, cupiditate non dolor recusandae molestias aperiam illum reprehenderit labore soluta reiciendis ducimus? Dolorem temporibus reprehenderit architecto sunt nesciunt accusantium deserunt fugit excepturi quis, iste sapiente placeat?</p>
          <p className="potpis">World Knives Inc</p>
          </section>
          <section className="col-md-12">
            <div className="row">
              <div className="col-md-4 ">
                <h5 className="tex-uppercase">Shop</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="./fixedblades.html" className="text-white">Fixed blades</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h5>Shop Folding blades</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="./linerlock.html" className="text-white">Liner lock</a>
                  </li>
                  <li>
                    <a href="./backlock.html" className="text-white">Back lock</a>
                  </li>
                  <li>
                    <a href="./compressionlock.html" className="text-white">Compression lock</a>
                  </li>
                  <li>
                    <a href="./buttonlock.html" className="text-white">Button lock</a>
                  </li>
                  <li>
                    <a href="./slipjoint.html" className="text-white">Slip joint</a>
                  </li>
                  <li>
                    <a href="./axislock.html" className="text-white">Axis lock</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </footer>
    )
}