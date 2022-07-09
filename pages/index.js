import Head from "next/head";
import Feed from "../components/Feed";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Modal from "../components/Modal";

const Home = () => {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />

      {/* Feed */}
      <Feed />

      {/* Modal */}
      <Modal />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
