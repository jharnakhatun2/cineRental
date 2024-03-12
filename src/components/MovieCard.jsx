import { useContext, useState } from "react";
import Tag from "../assets/tag.svg";
import { MovieContext } from "../context";
import { getImgUrl } from "../utils/cine-utility";
import MovieDetailsModal from "./MovieDetailsModal";
import Ratting from "./Ratting";
export default function MovieCard({ item }) {
  const [showModal, setShowModal] = useState(false);
  const [selectModal, setSelectModal] = useState(null);
  const { cartData, setCartData } = useContext(MovieContext);

  function handleModalOpen(item) {
    setSelectModal(item);
    setShowModal(true);
  }

  function handleCloseModal() {
    setSelectModal(null);
    setShowModal(false);
  }

  function handleAddToCart(event, movie) {
    event.stopPropagation();

    //logic for add same data only once
    const found = cartData.find((item) => {
      return item.id === movie.id;
    });

    if (!found) {
      setCartData([...cartData, movie]);
    } else {
      console.error(`This movie ${movie.title} already added`);
    }
  }

  return (
    <>
      {showModal && (
        <MovieDetailsModal
          movie={selectModal}
          onModalClose={handleCloseModal}
        />
      )}

      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a href="#" onClick={() => handleModalOpen(item)}>
          <img
            className="w-full object-cover"
            src={getImgUrl(item.cover)}
            alt={item.title}
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{item.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{item.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Ratting value={item.rating} />
            </div>
            <a
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
              onClick={(e) => handleAddToCart(e, item)}
            >
              <img src={Tag} alt="" />
              <span>${item.price} | Add to Cart</span>
            </a>
          </figcaption>
        </a>
      </figure>
    </>
  );
}
