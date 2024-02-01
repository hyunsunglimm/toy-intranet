import { useState, useRef } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root')

export default function Modaltest() {
  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef();
  return (
    <>
      <div className="flex justify-center items-center mt-20">
        <button
          className="bg-blue-500 hover:bg-blue-700 flex justify-center items-center text-white font-bold py-2 px-4 rounded cursor-pointer"
          onClick={() => setModalOpen(true)}
        >
          모달 열기
        </button>
      </div>
      {modalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50"
          ref={modalBackground}
          onClick={(e) => {
            if (e.target === modalBackground.current) {
              setModalOpen(false);
            }
          }}
        >
          <div className="bg-white w-250 h-150 p-5">
            <p>리액트로 모달 구현하기</p>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer ml-auto"
              onClick={() => setModalOpen(false)}
            >
              모달 닫기
            </button>
          </div>
        </div>
      )}
    </>
  );
}