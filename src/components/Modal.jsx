import { useState, useRef } from 'react';
import Modal from 'react-modal';
import Timer from './Timer';

Modal.setAppElement('#root')

export default function Modaltest() {
  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef();
  return (
    <>
      <div className="flex justify-center items-center">
        <p
          className= "flex justify-center items-center text-black hover:text-green-500 font-bold cursor-pointer"
          onClick={() => setModalOpen(true)}
        >
          시간 관리
        </p>
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
            <Timer />
            <p>토글 형태의 근무 시작/종료 스위치 구현</p>
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
